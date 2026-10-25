---
name: manim-video
description: Render complex mathematical derivations as short Manim videos embedded in continuous MDX lessons, when SVG steps are insufficient or a video is requested.
---

# Manim lesson video

Use this only for a complex continuous mathematical transformation or an explicitly requested rendered animation. Prefer the [SVG workflow](../svg-animation/SKILL.md) for a short trace or reader-controlled parameters. Keep the lesson as a continuous article.

Read the selected course/project's media contract. Keep Python source in its designated authoring location and final MP4/poster/captions with the course's delivery assets. Do not derive these paths from the skill directory. Run Manim during authoring; do not introduce it into delivery builds or production services without an explicit integration request.

Check the current [Manim installation guide](https://docs.manim.community/en/stable/installation.html) and [quickstart](https://docs.manim.community/en/stable/tutorials/quickstart.html) before selecting a version or creating an environment. Reuse an existing renderer when available; if installation is needed, isolate it with `uv` or a virtual environment rather than changing global Python. FFmpeg and, for `MathTex`, a working TeX setup may be required. Use system fonts that support Chinese, and verify all text actually renders. Do not install TeX just for ordinary SVG labels.

Write a short sequence in which each transformation corresponds to one explicit reasoning step. Keep stable objects visible so the viewer can compare before and after. Render a low-resolution preview first; inspect representative frames and the whole timing before rendering the final video. Extract a poster with FFmpeg, add captions when there is speech, and use the reader's video component with controls, no autoplay, and an accompanying written explanation.

If the environment cannot render it, preserve the source, provide a correct static SVG or step sequence, and report the unrendered video explicitly. Do not label a planned animation or a passing script review as a verified video.
