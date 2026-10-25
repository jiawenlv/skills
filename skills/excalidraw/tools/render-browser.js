import { convertToExcalidrawElements, restoreElements, exportToSvg } from '@excalidraw/excalidraw';

window.renderDiagram = async input => {
  const elements = input.type === 'excalidraw'
    ? restoreElements(input.elements, null)
    : convertToExcalidrawElements(input.elements.map(element => ({
      ...element,
      fontFamily: element.fontFamily ?? 2,
      ...(element.label ? { label: { fontFamily: 2, ...element.label } } : {}),
    })), { regenerateIds: false });
  const appState = {
    viewBackgroundColor: '#ffffff',
    ...input.appState,
    exportBackground: true,
    exportWithDarkMode: false,
    exportEmbedScene: false,
  };
  const files = input.files || {};
  const svg = await exportToSvg({ elements, appState, files, exportPadding: 32 });
  const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
  title.textContent = input.title || '课程示意图';
  svg.prepend(title);
  svg.setAttribute('role', 'img');
  svg.style.maxWidth = 'none';
  document.body.replaceChildren(svg);
  document.body.style.margin = '0';
  await document.fonts.ready;
  return {
    svg: svg.outerHTML,
    scene: { type: 'excalidraw', version: 2, source: 'learn-anything', elements, appState: {
      viewBackgroundColor: appState.viewBackgroundColor,
    }, files },
  };
};
