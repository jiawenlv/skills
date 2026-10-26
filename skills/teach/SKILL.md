---
name: teach
disable-model-invocation: true
description: Initialize a self-contained learning project with local teaching instructions, mission, resources, plan, and resume notes. Use for creating a continuing course or explicitly reinitializing an existing learning project; ordinary lessons, questions, practice, and continuation use the project's own instructions instead.
---

# Teach · initialize a learning project

This skill establishes a project that another agent can continue without this skill or prior chat history. It runs during initialization, not as the ongoing teacher. If invoked to continue an already initialized course, read its AGENTS.md and local teaching instructions, then handle the request there without rebuilding the scaffold. A one-off explanation needs no project initialization.

Resolve this skill's symlinks before reading its assets. Resolve all course paths from the user's chosen workspace. Preserve unrelated work and existing invocation policy. Initialization does not authorize publishing, creating a reader, or moving/deleting course materials.

## Establish intent and inspect existing state

Read applicable AGENTS.md and existing mission, notes, plan, resources, and relevant evidence. Reuse expressed goals and preferences; ask only for missing information that materially affects the starting point. Establish why the learner wants to learn, observable capabilities, constraints, and scope. Unknown background, time, or hardware remains unknown; do not require an exhaustive interview before useful learning.

For an existing project, reinitialize only when explicitly requested. Treat this as an incremental migration: retain goals, lesson files, pending questions, learner answers, assistance distinctions, numbering, and historical evidence. Do not reset progress, infer mastery, overwrite local conventions with template defaults, or move materials merely to fit the example layout. Inspect actual paths before fixing stale links.

## Create the project-owned teaching contract

Read and copy [assets/TEACHING.md](assets/TEACHING.md) into the project as TEACHING.md, then adapt it to confirmed needs. It contains the complete continuing-teaching baseline, including practice, evidence, presentation, review, and privacy rules. Do not leave required links to this installed skill or its legacy reference files. Keep template provenance/version as metadata, not a runtime dependency.

Keep AGENTS.md short: identify the learning workspace, direct agents to TEACHING.md, MISSION.md and NOTES.md first, then relevant plan/resources/evidence, and retain project-specific path/tool constraints. Say that ordinary learning continues from local files without invoking teach. Preserve unrelated existing instructions.

Set up only meaningful state:

- MISSION.md: why, observable success, constraints, and out-of-scope boundaries, grounded in agreed intent.
- NOTES.md: current starting/resume point, known background and important preferences, uncertainties, and next useful action. No fabricated diagnosis or achievement.
- RESOURCES.md: a small appropriate set of authoritative sources, their roles, actual verification/read scope and dates. Read relevant content before using it to plan; disclose inaccessible sources and gaps. Download only when useful and within workspace storage conventions.
- COURSE-PLAN.md: a provisional route with dependencies, major capabilities, and the next useful unit in more detail when the subject warrants it. Do not generate a rigid full semester or successive lessons.
- lessons/ and learning-records/: locations for later artifacts, not a requirement to create empty files or invented records. Preserve established delivery locations and IDs.

Separate rules, mission, route and evidence; use links instead of duplicating instructions. New projects inherit a template snapshot. Existing projects own subsequent changes; future global updates never automatically overwrite them. Explicit requests to adopt a newer template require comparison and preservation of local changes.

## Validate and hand off

Check local entry links and actual artifact locations, no mandatory installed-teach dependency, no unchanged scaffold placeholders, and preserved evidence. For new course plans or substantive teaching-contract redesigns, use an independent read-only subagent review with the request, actual project files and relevant sources; fix material issues before delivery. If unavailable, disclose the missing review instead of claiming a pass.

Use this acceptance test: an agent with only the project directory and no previous conversation or global teach can identify the goal, current evidence, teaching method, next action and limits of its available tools. Optional media skills may assist but cannot be required for text-based continuation. Missing independent review must be labeled.

Report what was initialized and the next learning action. Initialization alone does not require writing the first lesson. If the user also requests teaching now, continue under the newly written project contract; otherwise hand off for learning without producing future lessons or simulating feedback.

## Maintenance boundary

The root reference files from the former ongoing-teacher workflow are retained for compatibility with existing callers and historical research context. They are not the initialization template or a dependency of newly initialized projects. Maintain the continuing-teaching baseline in assets/TEACHING.md. Do not silently migrate other projects when updating this skill.
