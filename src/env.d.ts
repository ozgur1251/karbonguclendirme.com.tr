/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module 'astro:content' {
  export interface CollectionEntry<C extends keyof typeof entryMap> {
    data: {
      title: string;
      description: string;
      image: string;
      icon: string;
      features: string[];
    };
  }
}

interface Window {
  openMobileMenu: () => void;
}

export {};