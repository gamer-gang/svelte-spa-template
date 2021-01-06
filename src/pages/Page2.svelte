<script lang="ts">
  import { fade } from 'svelte/transition';
  import src from '../assets/svelte-horizontal.png';
</script>

<style lang="scss">
  img {
    width: 30rem;
    display: inline-block;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 24px;
  }
</style>

<div in:fade={{ duration: 100 }}>
  <h2>very good page 2</h2>

  <span><img {src} alt="very good svelte logo" /> is the best</span>
</div>
