<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<style lang="scss">
  img {
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

  <span><img src="svelte-horizontal.png" alt="very good svelte logo" width="160" />
    is the best!!!!!
  </span>
</div>
