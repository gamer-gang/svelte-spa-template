// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "button.svelte-1j4rfx5{background-color:orangered;border:none;padding:8px;color:#fff;border-radius:0.25rem;box-shadow:4px 4px #ddd;cursor:pointer;transition:background-color 75ms linear}button.svelte-1j4rfx5:hover{background-color:#d63a00}button.svelte-1j4rfx5:active{background-color:#ad2f00}button.svelte-1j4rfx5:focus{outline:none}div.svelte-1j4rfx5{text-align:center}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}