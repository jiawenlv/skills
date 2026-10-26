"""Exercise installer effects in isolated directories, never user skill locations."""
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class InstallTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.target = Path(self.temp.name) / 'skills'

    def run_install(self, *args, success=True):
        result = subprocess.run(
            [sys.executable, str(ROOT / 'scripts/install.py'), '--target', str(self.target), *args],
            capture_output=True, text=True,
        )
        self.assertEqual(result.returncode == 0, success, result.stdout + result.stderr)
        return result

    def test_dry_run_does_not_write(self):
        self.run_install()
        self.assertFalse(self.target.exists())

    def test_subset_and_idempotence(self):
        self.run_install('--skill', 'teach', '--apply')
        self.assertEqual([p.name for p in self.target.iterdir()], ['teach'])
        link = self.target / 'teach'
        self.assertEqual(link.resolve(), ROOT / 'skills/teach')
        before = link.lstat().st_mtime_ns
        self.run_install('--skill', 'teach', '--apply')
        self.assertEqual(link.lstat().st_mtime_ns, before)

    def test_local_dependencies(self):
        self.run_install('--skill', 'manim-video', '--apply')
        self.assertTrue((self.target / 'svg-animation/SKILL.md').is_file())
        self.assertTrue((self.target / 'lesson-visuals/SKILL.md').is_file())

    def test_conflict_and_backup(self):
        old = self.target / 'teach'
        old.mkdir(parents=True)
        (old / 'mine.txt').write_text('keep me')
        self.run_install('--apply', success=False)
        self.assertEqual(list(self.target.iterdir()), [old])
        self.run_install('--skill', 'teach', '--replace', 'teach', '--apply')
        backups = list(Path(self.temp.name).glob('skill-migration-backups/*/teach/mine.txt'))
        self.assertEqual(len(backups), 1)
        self.assertEqual(backups[0].read_text(), 'keep me')
        self.assertTrue(old.is_symlink())

    def test_unknown_skill_does_not_write(self):
        self.run_install('--skill', '../invalid', '--apply', success=False)
        self.assertFalse(self.target.exists())

    def test_broken_symlink_is_not_overwritten(self):
        self.target.mkdir()
        link = self.target / 'teach'
        link.symlink_to(self.target / 'missing')
        self.run_install('--skill', 'teach', '--apply', success=False)
        self.assertTrue(link.is_symlink())


if __name__ == '__main__':
    unittest.main()
