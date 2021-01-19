<script lang="ts">
  import { fade } from 'svelte/transition';

  let timer = 0; // @hmr:keep
  let clicks = 0;

  setInterval(() => timer++, 1000);
</script>

<style lang="scss">
  @import '../colors';

  button {
    background-color: orange(300);
    border: none;
    padding: 8px;
    color: cool-gray(700);
    border-radius: 0.25rem;
    box-shadow: 4px 4px cool-gray(300);
    cursor: pointer;
    transition: background-color 150ms ease-in-out;
    &:hover {
      background-color: orange(400);
    }
    &:active {
      background-color: orange(600);
    }
    &:focus {
      outline: none;
    }
  }

  div {
    text-align: center;
  }
</style>

<div in:fade={{ duration: 100 }}>
  <h1>i am svelt</h1>
  <h2>fear me react stans</h2>
  <button on:click={() => clicks++}>buton</button>
  <p>buton pres: {clicks}</p>
  <p>elapse time: {timer}</p>
</div>
