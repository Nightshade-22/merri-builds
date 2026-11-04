import { defineConfig } from 'astro/config';

// While the site lives at nightshade-22.github.io/merri-builds, `base` must be '/merri-builds'.
// When you add a custom domain, set `site` to that domain and `base` to '/'.
export default defineConfig({
  site: 'https://nightshade-22.github.io',
  base: '/merri-builds',
  trailingSlash: 'always',
});
