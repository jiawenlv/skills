import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateDiagram } from './render-excalidraw.mjs';

test('invalid geometry and unresolved connections stop before rendering', () => {
  assert.throws(() => validateDiagram({ elements: [{ type: 'rectangle', x: Infinity }] }), /Invalid x/);
  assert.throws(() => validateDiagram({ elements: [
    { id: 'a', type: 'rectangle' }, { type: 'arrow', start: { id: 'missing' } },
  ] }), /Missing arrow target/);
  assert.throws(() => validateDiagram({ elements: [{ id: 'a', type: 'rectangle' }, { id: 'a', type: 'text' }] }), /Duplicate/);
});

test('both editable scenes and skeleton diagrams preserve their input', () => {
  for (const type of ['excalidraw', undefined]) {
    const input = { type, elements: [{ id: 'a', type: 'rectangle', x: -10, y: 0, width: 100, height: 80 }] };
    assert.equal(validateDiagram(input), input);
  }
});
