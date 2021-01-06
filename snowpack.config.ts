import type { SnowpackUserConfig } from 'snowpack';

export default <SnowpackUserConfig>{
  plugins: [
    [
      '@snowpack/plugin-babel',
      { presets: ['@babel/preset-typescript', ['@babel/preset-env', { modules: false }]] },
    ],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-svelte',
  ],
  mount: {
    public: '/',
    src: '/_dist_',
  },
  scripts: {
    'run:tsc': 'tsc --noEmit',
    'run:tsc::watch': '$1 --watch',
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    baseUrl: '/svelte-spa-template',
    clean: true,
    sourceMaps: true,
  },
  installOptions: {
    treeshake: true,
    sourceMap: true,
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
      target: 'es2018',
    },
  },
};
