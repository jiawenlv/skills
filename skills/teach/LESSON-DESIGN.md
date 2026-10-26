# Content design and presentation handoff

Use for a new unit, a substantial revision, or a transfer between content design and media authoring. This is a flexible design brief, not a lesson layout, public worksheet, or new runtime schema. A few paragraphs or compact bullets are enough; omit fields that add no decision value for a small task.

## Design the learning first

- **Capability and purpose:** what the learner will be able to explain, predict, choose, debug, or construct, and where it matters in the larger goal.
- **System position:** the relevant whole, current part, dependencies, foundational principles, and deliberately deferred details. Show links between ideas rather than a vocabulary inventory. Use a conceptual map when the subject is not a physical system.
- **Starting point:** evidence already available, unknowns that matter, and likely prerequisite gaps. Follow the course-wide sequence of complete current lesson → learner feedback and practice → adapted next lesson, unless the learner explicitly requests another mode. This part remains private.
- **Reasoning path:** motivating problem → limitations of a plausible approach → required properties → mechanism and tradeoffs → role in the whole. Adapt the sequence where the subject demands it; distinguish history from reconstruction.
- **Worked example:** concrete inputs/context, necessary intermediate steps, and an observable result. Include a boundary or counterexample when it changes the claim.
- **Practice and acceptance:** the target subskill, what the learner will produce, conditions and allowed help, success criteria, a repair option, and a possible harder or transfer variant. Keep reference answers separate during an attempt.
- **Later evidence:** what should be retrieved or transferred later, and what would justify moving forward, revisiting a prerequisite, or reducing support. Do not invent a calendar or measured mastery.
- **Sources and unresolved claims:** verified references, assumptions, and what is still unverified.

Use established course plans rather than duplicating them. At course scale, describe milestones and prerequisite relationships; at unit scale, detail the next challenge. Revising a teaching route does not silently change the learner's mission.

When building a system picture, state what relation organizes it: parts of a whole, successive stages, levels of explanation, or dependencies. Do not present items as peers merely because they are all relevant. If more than one relation is needed, distinguish the views and explain their connection. Choose the organization that makes the learner's next question answerable, not a fixed layer count or universal taxonomy.

Match a worked example to the current explanatory goal. A small example can still pull attention into details before the learner understands what the whole is for. When an abstraction jump obscures the reasoning, trace a suitable case across the boundary: explain what the new representation keeps, what it leaves out, and what question it now lets us answer. If that bridge introduces several unfamiliar mechanisms, split at a meaningful understanding goal rather than rushing through them. Use a contrasting case where needed to expose the boundary of the explanation; do not require every subject to follow the same example or decomposition.

For an introduction with little established prior knowledge, begin with an observable situation or a familiar relationship, then open the internal mechanism only as needed for the overview. Explain the process before naming it when the name would otherwise carry unexplained meaning; even common disciplinary words may be new to the learner. A term appearing in the learner's question is not evidence that its underlying concept is understood. Preserve the boundary of any analogy or simplification. Use established knowledge directly for experienced learners rather than restarting every lesson from everyday examples.

## Give presentation a learning job

For a complete lesson, teach supplies `lesson-visuals` with the capability, explanatory sequence, worked example, references, and practice prompts, excluding private diagnoses and teacher-only answers. A brief and working draft can stay in context; do not create a second maintained full article for the handoff. Presentation designs the final continuous lesson at its selected location and may choose text alone. For each promising visual opportunity, state the intended observation or action in medium-independent terms, such as “compare how the same input moves through two alternatives” or “predict the next state before exposing it.” Do not prescribe a tool before identifying what needs to become visible.

A coherent article need not be an unbroken block of prose. When a lesson spans several questions or conceptual transitions, make that organization visible with meaningful section headings and, where useful, a short orientation or selective emphasis. A reader should be able to skim for the main questions and see how they connect, then read the reasoning continuously. Do not impose a fixed section count, repeat every point in several summaries, or add navigation machinery to a short answer. Distinguish difficulty understanding an explanation from difficulty locating its structure; more definitions or pictures alone may not repair the latter.

The presentation design returns the chosen form and why it helps, where it belongs, what the learner does or observes, feedback/reveal behavior when interactive, and the static or reduced-motion equivalent. It may propose simplifying a task or adding a missing premise; `teach` checks that this preserves the capability and correctness. The brief and media plan can live in one private note under separate labels, without becoming two mandatory documents.

Keep one canonical Markdown or MDX lesson and its assets. Record its location in existing course notes when needed to resume; content corrections update that lesson and affected media, not a duplicate full-text source. Preserve old files, IDs, and evidence; do not backfill or consolidate historical copies automatically. Separately commissioned public learning notes may reorganize the subject and are not synchronized lesson mirrors. The website must remain independently buildable and must not import private course files. Follow [CONTENT-CONTRACT.md](CONTENT-CONTRACT.md) for current locations and privacy boundaries.

## Keep exposition and assessment distinct

A public article can include worked examples, questions, and clearly separated reference explanations. In guided practice, do not expose the solution before an attempt unless the learner requests it or a demonstration is needed. After revealing it, record any further response as assisted and use a new task for an independent check. Hidden answer widgets are convenience, not secure exam conditions.

Interactions must make a relevant consequence observable. Clicking “next,” replaying an animation, or selecting a supplied explanation cannot by itself demonstrate understanding. If the page does not actually collect answers, invite the learner to bring a prediction, trace, explanation, or code back to the coach. Never promise automatic evidence collection or learner-state updates that have not been implemented.

## Handoff review

Can the learner place this unit in the whole, understand the problem that created the need, follow a complete example, and attempt a target-aligned challenge? Can the next coach interpret the response and choose a different next step? Can the presentation change from a diagram to a simulation without changing the intended capability? If not, repair the brief before adding media.

## Independent review before delivery

After preparing a new course plan, a complete lesson, or a substantive redesign, use one independent subagent to review it before learner delivery. A plan review examines the route and first unit if available; it does not require generating future lessons. A lesson review checks the final canonical lesson and its actual presentation against the teaching brief and references; it does not require a second full-text source. Ordinary answers, exercise feedback, and cosmetic edits need no separate review.

Give the reviewer fresh context where supported: the learning request, relevant mission and prerequisites, applicable instructions, source and reference material, exercise criteria, and actual page/media paths and verification results. Supply only learner context that matters. Do not prime the reviewer with the author's preferred conclusion or a claimed pass. The review is read-only; the author owns fixes.

Ask for concrete, evidence-backed findings on:

- Alignment with the mission, foundational framework, prerequisite order, and a realistic current lesson scope.
- Technical accuracy, source support, necessary derivation steps, worked examples, and meaningful boundaries.
- Whether practice checks the target capability, has defensible criteria and useful feedback, and preserves the lesson → real feedback/practice → next lesson sequence.
- Whether the final lesson fulfills the teaching brief, keeps private evidence and teacher-only material out of public artifacts, and uses consistent prose/media appropriately; assess rendered behavior only when actually inspected.

For each finding, request its location, the learner-facing consequence, and a suggested correction. Accept valid alternatives and avoid demanding more media, fixed headings, or additional paperwork. If no actionable issue is found, the reviewer should say so and state the inspected scope and any verification gaps.

Resolve consequential findings before presenting the result as ready. Recheck changed claims, examples, or media; ask the reviewer to recheck substantive fixes or disputed correctness issues rather than rerunning an unrelated full review. If review or required verification is unavailable, label the deliverable as an unreviewed or partially verified draft and disclose the gap; never substitute a claimed subagent pass. Report the review outcome briefly at handoff, keeping detailed findings private when needed. Review does not establish learner mastery and does not authorize deployment.
