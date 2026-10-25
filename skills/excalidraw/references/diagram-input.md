# Diagram input and local export

Run commands from the bundled `tools/` directory next to this skill's `SKILL.md` (resolve the skill symlink first):

```bash
npm ci --ignore-scripts
npx playwright install chromium  # only if a compatible browser is absent
npm run render -- /absolute/path/diagram.diagram.json /absolute/path/authoring/course
```

Existing Chromium can be selected with `PLAYWRIGHT_CHROMIUM_EXECUTABLE=/absolute/path/to/chromium`. Setup may require network access; normal rendering is local. The package and lockfile are independent of the website's build.

The input uses the official element skeleton:

```json
{
  "title": "计算与存储",
  "elements": [
    {"id":"compute","type":"rectangle","x":40,"y":60,"width":180,"height":90,"backgroundColor":"#edf5ed","label":{"text":"计算下一个值","fontSize":22}},
    {"id":"store","type":"rectangle","x":330,"y":60,"width":180,"height":90,"backgroundColor":"#edf3fa","label":{"text":"保存结果","fontSize":22}},
    {"type":"arrow","x":225,"y":105,"width":100,"height":0,"points":[[0,0],[100,0]],"start":{"id":"compute"},"end":{"id":"store"},"endArrowhead":"arrow"}
  ]
}
```

Shapes and text use top-left coordinates. Arrow `points` are relative to its `x`/`y`. Give connected shapes unique IDs and reference them through `start`/`end`. The renderer adds default font family 2 (system sans-serif) to text and bound labels, unless a font is explicitly supplied. It exports `<stem>.svg`, `<stem>.png` at 2× resolution, and `<stem>.excalidraw`; `.diagram.json` and `.excalidraw` inputs share the same stem convention.

Existing native scenes use `type: "excalidraw"`, `version: 2`, `elements`, `appState`, and `files`. Keep embedded image data only when it belongs in the public figure. A missing image/font or unreadable label must be fixed before embedding. Inspect both the rendered PNG and the scene by re-exporting it; the CLI's success alone does not prove semantic correctness.

Community skills inspected during setup included `aref-vc/excalidraw-skill` and `Agents365-ai/excalidraw-skill`. This project uses an independently authored skill with the official library so it retains a native editable scene and needs no remote export service.
