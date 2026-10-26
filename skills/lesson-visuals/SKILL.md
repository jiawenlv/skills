---
name: lesson-visuals
description: Design multimedia lesson presentation from a teaching brief, including illustrations, architecture diagrams, interactive models, code animations, and video within continuous articles.
---

# Visual lesson authoring

Text alone is a valid final presentation. Select media only when it contributes to the learner's understanding, observation, or practice beyond what clear prose and examples already provide. The result of presentation design may be to create no visual assets. Do not optimize for variety, novelty, tool coverage, or visible production effort, and do not require different formats across lessons. Feedback, retries, and capability milestones can be expressed entirely in words.

Own presentation, not curriculum or learner diagnosis. Read the delivery project’s local teaching instructions (normally TEACHING.md) when present. Start from its public-safe teaching brief: target capability, system position, reasoning path, worked example, practice prompt, and intended observation. If only a narrow visual is requested, infer enough of this context without requiring a full brief. Return missing premises or contradictory subject claims to content design before production; preserve its success criteria.

The teaching agent follows the project contract to orchestrate a presentation pass for each complete lesson; the learner does not need to invoke this skill separately. Use the brief and working draft to produce one canonical Markdown or MDX lesson plus assets at the selected delivery location. Do not require a second maintained full-text Markdown source for an MDX page. Content changes return to the teaching agent for correctness checks and are applied to the same lesson and affected media. A text-only decision completes this pass without media production. Do not copy learner records or private paths into public artifacts, or add private-file imports to the website build. Before delivery, provide the actual lesson, media, and verification results for the independent review required by the project contract; do not launch a duplicate review for each visual asset.

Identify what the learner should see, compare, predict, or manipulate, then choose the representation. For each substantive media element, decide its learning job, where it belongs in the reasoning, the action or observation, feedback or reveal behavior, and an accessible fallback. Keep this plan compact; it need not become a separate file. Do not default to dense textbook prose with decorative images, or turn every paragraph into a slide or card.

Keep the explanation coherent across prose and media. Preserve the premises, indispensable reasoning, and an accessible way to recover the result; do not duplicate every visible step verbatim in prose. Place media beside the explanation it supports and signal which feature the reader should attend to.

Resolve the delivery project from workspace/course instructions. Read its media and lesson contract for paths, supported components, theme tokens, and validation; never derive its location from this skill's installation. Use continuous articles, with Markdown or MDX according to the existing reader. Do not assume a reader or a particular component library already exists. No obligatory slides, full-screen presentation shell, or generated per-page slide files apply.

Choose the representation from the learning task, the essential information, and the reader's context. Consider what the reader needs to compare, follow, predict, or explore, together with prior knowledge, device constraints, accessibility, and explicit preferences. Aim for a clear, accurate explanation with no unnecessary reading, memory, or operating burden.

Prose, tables, static diagrams, animation, video, and interaction are complementary options. Static views can support direct comparison; animation can reveal continuity or timing; interaction can help test predictions and explore conditions. These are selection cues, not a fixed hierarchy. Select layout, pacing, and controls for the actual content; do not prescribe a universal orientation, frame count, or component. Remove complexity when it adds no understanding, while preserving necessary reasoning and the mechanism being taught.

## Presentation decisions

- **Orientation:** for a large system, make major responsibilities and connections visible, highlight the current part, and distinguish intentionally opaque parts from explained ones. Return to the same conceptual frame as understanding grows; avoid a crowded map of every implementation detail.
- **Motivation and comparison:** show the concrete problem or the observable difference between plausible approaches. Generated illustrations can make a situation or analogy tangible; label an analogy's limits and verify subject-specific details.
- **Mechanism:** use a trace, linked states, or a code-driven animation where change, timing, or flow is the learning object. Expose the relevant state and assumptions. Let the reader step, pause, or replay at useful boundaries; preserve a stable view for comparison.
- **Exploration:** use a small interactive model when changing an input, connection, parameter, or assumption helps test an explanation. Invite a prediction, expose the result, explain the discrepancy, and permit retry. Interactions are occasional tools, not a quota or decoration.
- **Feedback and reward:** make consequences understandable and progress concrete. Show a criterion-specific explanation and a meaningful next challenge when applicable. Keep hints and solutions distinguishable from an independent attempt. Do not introduce streak penalties, mandatory competition, or points that impersonate mastery.

Content design determines what response would count as evidence. The UI must not treat replaying an animation or opening a page as understanding. Unless an actual collection path exists and is authorized, keep page interactions local and invite the learner to bring their answer or observation back to the coach. Never claim to save assessment results, update private learning records, or personalize from uncollected data.

## Production and review

After choosing the form, select an appropriate tool:

- Relationships, architecture, and informal structural diagrams: [excalidraw](../excalidraw/SKILL.md).
- Precise geometry, circuits, state traces, adjustable parameters, and short transformations: [svg-animation](../svg-animation/SKILL.md).
- Complex continuous mathematical animation intended as a video: [manim-video](../manim-video/SKILL.md), only when its extra render cost adds value.
- Illustrative scenes or analogies: use the available `imagegen` skill and image-generation tool. Read that skill when selected; use Agnes/MiniMax only when requested. Preserve the resulting local file. Explain a missing capability and use SVG/Excalidraw where suitable, without inventing generated output. Formulas, exact labels, and circuit wiring should be authored as verifiable text/vector content.

Reuse the delivery project's supported components; add a course-specific interactive component when its state model requires it. Prefer semantic SVG colors and responsive view boxes. Preserve editable sources with the course or its designated authoring directory, and place final assets in the configured delivery location. Do not impose a website-specific component API on other readers.

Before delivery, check that the chosen form supports the learning task, makes the essential information observable, and works in the reader's context. Consider whether a simpler alternative preserves those benefits; remove redundant elements and unexplained controls. Before rendering, polish Chinese captions, labels, subtitles, and teaching controls: check connections and pronoun references, use natural precise wording, remove repetition without losing premises or boundaries, then recheck technical meaning. Follow additional language conventions in the project contract. Global teach is an initializer and is not required during presentation. After embedding the media, complete the same final review of the whole lesson and check that the visible media text still matches the prose.

Check subject-matter claims and modeled behavior against an appropriate primary source. Inspect the rendered result for Chinese text, clipped labels, arrow directions, legend consistency, and mobile readability. Exercise controls, pause/replay, reset, answer reveals, and boundary states; check keyboard operation, text alternatives, theme changes, and reduced motion. Do not make color, motion, hover, or fast reaction the sole way to access essential meaning. A reduced-motion or static fallback must preserve the relevant relationships and results, not merely stop on an uninformative first frame. If production fails, keep a correct static figure and written explanation, and report which asset was not verified. Generated material is never evidence of mastery.
