import type { SnowpackUserConfig } from 'snowpack';

export default <SnowpackUserConfig>{
  plugins: [
    [
      '@snowpack/plugin-babel',
      { presets: ['@babel/preset-typescript', ['@babel/preset-env', { modules: false }]] },
    ],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-svelte',
    // '@snowpack/plugin-typescript',
    '@snowpack/plugin-webpack',
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
  },
};
