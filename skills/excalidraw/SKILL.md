---
name: excalidraw
description: Create or edit editable Excalidraw diagrams and locally export SVG and PNG for learning articles, architecture explanations, and relationship diagrams.
---

# Editable Excalidraw diagrams

Use the official Excalidraw library through the optional [bundled renderer](tools/package.json), located in `tools/` relative to this skill's real directory. Rendering dependencies are installed there only when needed; teaching and delivery builds need not depend on them.

Read [diagram input](references/diagram-input.md) for the supported JSON skeleton and output workflow. The renderer also accepts a complete `.excalidraw` scene, restoring its elements through the official library. It does not send diagram data to a remote export service.

Lay out objects and short Chinese labels before drawing connections. Use rectangles for components, arrows for direction, and a clear legend for meanings encoded in color. Leave enough room for Chinese text, arrow labels, and narrow screens. Keep each figure focused on the relationship the surrounding paragraph explains; split an unreadable overview into smaller figures when useful.

Keep the editable scene and compact input in the course or project's designated authoring location. Export there, inspect the PNG, and put only final SVG/PNG assets in the selected delivery location. Use its supported image component with meaningful alt text and a caption. Do not place generated course assets inside this skill. Avoid uploading learning records to public assets or live drawing services.

The renderer uses system sans-serif fonts by default for portable Chinese labels. Importing a custom-font scene may require its font assets; do not claim identical typography when fonts are unavailable. A figure's correctness depends on the labels and connections, not its hand-drawn appearance.

Use [official element creation](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/utils/element/creation) and [export utilities](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/utils/export) for unfamiliar fields. Do not install an unrelated remote MCP or export service merely to draw a course figure.
