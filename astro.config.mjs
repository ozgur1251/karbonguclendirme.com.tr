import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  compressHTML: true,
  build: {
    assets: '_assets'
  },
  vite: {
    ssr: {
      external: ["svgo"]
    },
    resolve: {
      alias: {
        '@': '/src',
        '@config': '/src/config',
        '@components': '/src/components'
      }
    },
    optimizeDeps: {
      exclude: ['@astrojs/ts-plugin']
    }
  }
}); 