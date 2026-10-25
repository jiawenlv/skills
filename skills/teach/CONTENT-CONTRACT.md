# Question-and-answer learning content contract

Resolve content paths from the selected learning workspace or course, not from the skill installation. The workspace's AGENTS.md defines existing layout, rendering integration, asset paths, and verification commands. This skill imposes no server, catalog, website, or required build process.

## Project layout

```text
<selected-course>/
  MISSION.md
  AGENTS.md                        # short entrypoint for a new continuing course
  RESOURCES.md
  NOTES.md
  COURSE-PLAN.md                    # optional capability map and evolving route
  LEARNING-INDEX.md                 # optional evidence navigation
  learning-records/0001-<insight>.md
  lessons/0001-<topic>.md            # local lesson when this is the delivery location
  project.json                     # existing metadata, optional
  progress.json                    # existing progress, optional
```

Create files only when meaningful. Use lowercase ASCII letters, digits, and single hyphens for project slugs. Preserve existing project directories and record numbering.

Before saving learning state, ask what future teaching decision or resumption need this information serves. If no concrete use is apparent, do not persist it. Default to a short title and 1–3 sentences: what was established, enough basis to interpret it accurately, and why it matters next. A demonstrated insight, consequential misconception, disclosed prior knowledge, or agreed goal change can qualify; routine activity and material merely covered do not. Include assistance or uncertainty when omitting it would overstate the evidence. Additional detail, fields, indexes, or tracking mechanisms should follow a demonstrated recurring need, not anticipated usefulness.

- `MISSION.md`: `# Mission: <topic>`, then `## Why`, `## Success looks like`, `## Constraints`, and `## Out of scope`. Record concrete outcomes and disclosed constraints. Mark unknowns instead of guessing.
- `RESOURCES.md`: topic title, `## Knowledge`, and `## Wisdom (Communities)`, with annotated sources, their purpose, and verification dates; add gaps only when useful.
- `NOTES.md`: keep a compact current resume point at the top: where learning stands and the pending question or next useful action. Retain preferences that affect teaching and link relevant evidence instead of duplicating it. Update this summary when the state changes; do not append a session report after every exchange. Routine build, deployment, and media-production logs do not belong in the learning resume point. Preserve existing history below it; an unanswered prompt is pending, not evidence of ability.
- `COURSE-PLAN.md`: when useful for a large subject, retain the eventual capability, system/concept map, foundational dependencies, milestones, deliberately deferred gaps, and the next unit in detail. Reuse an existing plan; do not pre-generate all lessons or silently change the mission. Private teaching briefs may live here or in notes; they need no separate schema or file per lesson.
- `learning-records/NNNN-slug.md`: use the minimal record above only for a consequential learning finding. Date, task links, response excerpts, or Evidence/Implications sections are optional when they materially help interpretation or later review; there is no mandatory field checklist. Distinguish independent work from helped repairs and self-report when relevant. Increment existing numbering and preserve superseded evidence with a link to its replacement. Unattempted work belongs in notes, not achievement records.
- `LEARNING-INDEX.md`: optional topic navigation to existing evidence. Keep links current without turning summaries into stronger mastery claims.
- **Canonical lesson:** maintain one complete Markdown or MDX article plus assets at its selected delivery location. For a local text lesson, use `lessons/*.md`; for a rendered course, use its established Markdown/MDX location defined by workspace instructions without requiring a duplicate full-text source. A compact teaching brief may stay in context or existing private notes. Record the actual lesson location in course notes when useful for resumption. Raw learner answers, diagnoses, teacher-only rubrics, and unreleased solutions stay in private learning state outside public handoffs. Ordinary chat answers need no artifact. Preserve historical files and IDs; do not automatically delete, merge, or backfill old source/page pairs. Do not move courses or implement a new reader merely to deliver a lesson.

Existing `project.json` and `progress.json` are preserved data, not a mandatory schema for new topics. If edited, preserve creation dates, unrelated metadata, and progress entries. A historical `lessons` key refers to lesson IDs, now represented by Markdown filenames. Never infer completion from generating or opening material. `confidence`, if present, is the learner's explicit rating, not an inferred score.

## Verification

Check edited JSON parses, local Markdown links resolve, record IDs remain unique, and references point to real files or cited sources. Do not change learning evidence during formatting or structural cleanup. For programming exercises, distinguish manual review from actual compiler/test execution and report the relevant tool/version when used. Run only checks applicable to the changed material and its actual delivery environment.

## External public notes

When public notes or website delivery are requested, resolve the destination from the user request and workspace instructions. Read that project's content schema, routing, media conventions, and validation commands before editing. Do not infer public delivery from the existence of a website or a shared repository.

Teach owns educational decisions; lesson-visuals owns presentation decisions. They work toward the same canonical lesson, with no required duplicate full article. Correct that lesson and any affected examples or media together. Separately requested public learning notes are independently edited articles for their audience, not synchronized copies of the course; writing or publishing them is not a prerequisite for continuing learning. Do not silently synchronize private learning state into public artifacts, add public build dependencies on private evidence, or link public pages to private paths. Public prose may include approved exercises and reference explanations, but excludes raw answers, diagnoses, personal feedback, pending learner work, and progress. A local build is not deployment or proof of mastery.

Existing website-only lessons remain valid and need no duplicate source. If an older lesson already has multiple versions, inspect relevant differences before editing, preserve the historical files, and identify the canonical location in private notes when adopting the trial workflow. Do not silently discard unique content, rewrite learning evidence, or bulk-consolidate the catalog.

## Visual public material

Follow the selected delivery project's media contract. Use continuous articles; text alone is valid, with figures, videos, and interactions added where useful. Keep editable media sources and final assets in the designated course/project locations, not the skill installation. Separate private evidence from all public assets. Preserve portable references where the environment supports them. Local lesson delivery does not require generating a website copy.
