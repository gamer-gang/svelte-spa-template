<script lang="ts">
  import { fade } from 'svelte/transition';

  const getContent = async () => await import('../assets/meat.json');

  const content = getContent();
</script>

<div in:fade={{ duration: 100 }}>
  <h3>very good page 3</h3>

  {#await content}
    <h5>getting meat...</h5>
  {:then { default: { text } }}
    {@html text.map(para => `<p>${para}</p>`).join('')}
  {/await}
</div>
