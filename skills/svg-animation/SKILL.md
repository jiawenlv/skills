---
name: svg-animation
description: Build precise responsive SVG figures, step-controlled visual derivations, or small interactive simulations embedded in MDX learning articles.
---

# SVG figures and visual derivations

Read the selected course or delivery project's instructions and media contract. Use its supported SVG/JavaScript and component integration rather than assuming Astro or a sibling website. Keep component APIs and project examples in that project's contract.

Identify the relationships, geometry, and any state transitions the figure needs to communicate before drawing. Derive values, connections, and positions from the underlying model. For animated content, preserve the mechanism, keep useful context visible, and connect changes to the written explanation. Explain schematic simplifications that affect interpretation.

Use the [media selection criteria](../lesson-visuals/SKILL.md) to decide between a static figure, a sequence, animation, and a simulation. Choose layout and pacing according to what needs to remain visible or be compared; ordering alone does not determine the presentation. Use existing components when they fit, and consult the website contract for their APIs and fallbacks.

For parameter changes or genuine simulated behavior, create a reusable course-specific component supported by the selected reader. Scope selectors and state to each instance; avoid global IDs and side effects. Use a responsive `viewBox`, the reader's semantic theme tokens, labels in addition to color, and text describing the displayed state. Keep controls keyboard-accessible. Stop timers when hidden or leaving the page. Readers requesting reduced motion should be able to advance manually.

Use `requestAnimationFrame` or CSS interpolation only when smooth motion explains something; preserve pause and reset. Do not add animation libraries for simple highlights or state transitions. Reuse a compatible existing model or component when its behavior matches the learning task.

Validate an actual trace and boundary conditions against the course's authoritative source, then inspect the embedded page on mobile and in both color modes. Check repeated instances if the component is reused within one page. Rendering success is not evidence that the diagram or learner is correct.
