<script lang="ts">
  import type { RouteDefinition } from 'svelte-spa-router';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import AppBar from './components/AppBar.svelte';
  import Loading from './components/Loading.svelte';
  import Home from './pages/Home.svelte';

  const routes: RouteDefinition = {
    '/': Home,
    '/page2': wrap({
      asyncComponent: () => import('./pages/Page2.svelte'),
      loadingComponent: Loading,
    }),
    '/page3': wrap({
      asyncComponent: () => import('./pages/Page3.svelte'),
      loadingComponent: Loading,
    }),
    '*': wrap({
      asyncComponent: () => import('./pages/NotFound.svelte'),
      loadingComponent: Loading,
    }),
  };
</script>

<style lang="scss" global>
  @import './normalize';
  @import './colors';

  body {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    background-color: cool-gray(50);
  }

  main {
    color: cool-gray(800);
    margin: 8px;
    margin-top: 64px;
  }
</style>

<AppBar />
<main>
  <Router {routes} />
</main>
