// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".loading-wrapper.svelte-1ilml2y{display:flex;flex-direction:column;justify-content:center;overflow:hidden;height:100vh}.spinner.svelte-1ilml2y{display:flex;align-items:center;justify-content:center;vertical-align:middle}.spinner-animation.svelte-1ilml2y{animation:svelte-1ilml2y-spinner-animation 0.5s linear infinite}.spinner-svg.svelte-1ilml2y{display:block}.spinner-track.svelte-1ilml2y{fill-opacity:0;stroke:#d0d0d0}.spinner-head.svelte-1ilml2y{fill-opacity:0;stroke:#555c;stroke-linecap:round;transform-origin:center;transition:stroke-dashoffset 0.2s cubic-bezier(0.4, 1, 0.75, 0.9)}@keyframes svelte-1ilml2y-spinner-animation{0%{transform:rotate(0deg)}100%{transform:rotate(1turn)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}