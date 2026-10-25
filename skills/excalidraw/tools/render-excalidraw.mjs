import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { chromium } from 'playwright';

export function validateDiagram(input) {
  if (!input || !Array.isArray(input.elements) || !input.elements.length) {
    throw new Error('Diagram needs a non-empty elements array.');
  }
  const ids = new Set();
  for (const element of input.elements) {
    if (!element.type) throw new Error('Each element needs a type.');
    for (const field of ['x', 'y', 'width', 'height']) {
      if (element[field] !== undefined && !Number.isFinite(element[field])) throw new Error(`Invalid ${field}.`);
    }
    if (element.id) {
      if (ids.has(element.id)) throw new Error(`Duplicate element id: ${element.id}`);
      ids.add(element.id);
    }
  }
  for (const element of input.elements) {
    for (const end of ['start', 'end']) {
      if (element[end]?.id && !ids.has(element[end].id)) throw new Error(`Missing arrow target: ${element[end].id}`);
    }
  }
  return input;
}

export async function renderDiagram(inputPath, outputDirectory) {
  const input = validateDiagram(JSON.parse(await readFile(inputPath, 'utf8')));
  const toolRoot = fileURLToPath(new URL('.', import.meta.url));
  let server;
  let browser;
  try {
    server = await createServer({
      root: toolRoot, configFile: false, logLevel: 'error',
      server: { host: '127.0.0.1', port: 0 },
    });
    await server.listen();
    const address = server.httpServer.address();
    const origin = `http://127.0.0.1:${address.port}`;
    browser = await chromium.launch({
      headless: true,
      ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } : {}),
    });
    const page = await browser.newPage({ deviceScaleFactor: 2 });
    // Render locally; the diagram is never sent to a remote export service.
    await page.route('**/*', route => {
      const url = route.request().url();
      return url.startsWith(origin + '/') || url.startsWith('data:')
        ? route.continue() : route.abort();
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => typeof window.renderDiagram === 'function');
    const result = await page.evaluate(data => window.renderDiagram(data), input);
    const bounds = await page.locator('svg').boundingBox();
    if (!bounds || bounds.width <= 0 || bounds.height <= 0) throw new Error('Diagram export has no visible bounds.');
    if (errors.length) throw new Error(errors.join('\n'));
    const stem = path.basename(inputPath).replace(/(?:\.diagram)?\.(?:json|excalidraw)$/i, '');
    await mkdir(outputDirectory, { recursive: true });
    const outputs = Object.fromEntries(['svg', 'png', 'excalidraw'].map(ext => [ext, path.resolve(outputDirectory, `${stem}.${ext}`)]));
    await writeFile(outputs.svg, result.svg + '\n');
    await writeFile(outputs.excalidraw, JSON.stringify(result.scene, null, 2) + '\n');
    await page.locator('svg').screenshot({ path: outputs.png });
    return outputs;
  } finally {
    if (browser) await browser.close();
    if (server) await server.close();
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [input, output] = process.argv.slice(2);
  if (!input || !output) {
    console.error('Usage: node render-excalidraw.mjs <diagram.json|scene.excalidraw> <output-directory>');
    process.exitCode = 1;
  } else {
    try { console.log(JSON.stringify(await renderDiagram(path.resolve(input), path.resolve(output)), null, 2)); }
    catch (error) { console.error(error.message); process.exitCode = 1; }
  }
}
