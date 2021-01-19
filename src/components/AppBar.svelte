<script lang="ts">
  import active from 'svelte-spa-router/active';
</script>

<style lang="scss">
  @import '../colors';

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: cool-gray(100);
    height: 48px;
    display: flex;
    align-items: center;
    z-index: 2;
    & > * {
      color: blue-gray(700);
      margin-left: 12px;
    }
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  span {
    font-weight: medium;
    margin-right: 4px;
  }

  a {
    text-decoration: none;
    transition: color 75ms linear;
  }

  :global(nav a.active) {
    font-weight: bold;
    cursor: default;
  }

  :global(nav a:not(.active)) {
    &:hover {
      color: cool-gray(900);
    }
    cursor: pointer;
  }
</style>

<nav>
  <span>epic template</span>
  <a href="#/" use:active>Home</a>
  <a href="#/page2" use:active>Page 2</a>
  <a href="#/page3" use:active>Page 3</a>
</nav>
