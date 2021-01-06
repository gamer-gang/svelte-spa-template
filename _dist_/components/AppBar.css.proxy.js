// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "nav.svelte-qnztx.svelte-qnztx{position:fixed;top:0;width:100%;background-color:#444;height:48px;display:flex;align-items:center;z-index:2;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)}nav.svelte-qnztx>.svelte-qnztx{color:white;margin-left:12px}span.svelte-qnztx.svelte-qnztx{font-weight:medium;margin-right:4px}a.svelte-qnztx.svelte-qnztx{text-decoration:none;transition:color 75ms linear}nav a.active{font-weight:bold;cursor:auto}nav a:not(.active){cursor:pointer}nav a:not(.active):hover{color:#ddd}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}