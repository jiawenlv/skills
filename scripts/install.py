from pathlib import Path
import argparse
import re
from datetime import datetime

p = argparse.ArgumentParser(description="Link this repository's skills into the user skill directory.")
p.add_argument('--target', type=Path, default=Path.home()/'.agents/skills')
p.add_argument('--apply', action='store_true')
p.add_argument('--skill', action='append', default=[], help='Install only this skill and its local skill references; repeat as needed')
p.add_argument('--replace', action='append', default=[], help='Explicitly replace this installed skill; repeat as needed')
a = p.parse_args()
repo = Path(__file__).resolve().parents[1]
available = {s.name: s for s in (repo/'skills').iterdir() if (s/'SKILL.md').is_file()}
unknown = (set(a.skill) | set(a.replace)) - available.keys()
if unknown:
    p.error('Unknown skill(s): ' + ', '.join(sorted(unknown)))
selected = set(a.skill) if a.skill else set(available)
# Preserve sibling-relative references when installing a subset.
pending = list(selected)
while pending:
    name = pending.pop()
    for doc in available[name].rglob('*.md'):
        for href in re.findall(r'\]\(([^)]+)\)', doc.read_text()):
            if '://' in href or href.startswith('#'):
                continue
            linked = (doc.parent / href.split('#')[0]).resolve()
            try:
                dependency = linked.relative_to(repo/'skills').parts[0]
            except (ValueError, IndexError):
                continue
            if dependency in available and dependency not in selected:
                selected.add(dependency)
                pending.append(dependency)
                print(f'Include referenced skill: {dependency}')
target = a.target.expanduser().absolute()
plans = []
for source in sorted(available[name] for name in selected):
    if not (source/'SKILL.md').is_file():
        continue
    dest = target/source.name
    if dest.is_symlink() and dest.resolve() == source.resolve():
        print(f'Already linked: {source.name}')
        continue
    occupied = dest.exists() or dest.is_symlink()
    if occupied and source.name not in a.replace:
        p.error(f'{dest} exists; inspect it, then use --replace {source.name} if replacement is authorized')
    plans.append((source,dest,occupied))
for source,dest,occupied in plans:
    print(f'{"Replace" if occupied else "Link"}: {dest} -> {source}')
if not a.apply:
    print('Dry run; add --apply to install.')
    raise SystemExit(0)
target.mkdir(parents=True,exist_ok=True)
backup = target.parent/'skill-migration-backups'/datetime.now().strftime('%Y%m%d-%H%M%S-%f')
for source,dest,occupied in plans:
    saved = None
    if occupied:
        backup.mkdir(parents=True,exist_ok=True)
        saved = backup/dest.name
        dest.rename(saved)
    try:
        dest.symlink_to(source.resolve(), target_is_directory=True)
    except Exception:
        if saved is not None:
            saved.rename(dest)
        raise
    if saved is not None:
        print(f'Backup: {saved}')
