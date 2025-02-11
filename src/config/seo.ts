import { SITE } from './site';

export const SEO = {
  openGraph: {
    basic: {
      title: SITE.title,
      type: "website",
      image: "/og-image.jpg",
    },
    optional: {
      description: SITE.description,
      locale: SITE.defaultLanguage,
      siteName: SITE.name,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@karbonguclendirme",
    creator: "@karbonguclendirme",
  },
  extend: {
    link: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "sitemap", href: "/sitemap-index.xml" },
    ],
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "generator", content: "Astro" },
      { name: "theme-color", content: SITE.themeColor },
      { name: "author", content: SITE.author },
      { name: "keywords", content: SITE.keywords.join(", ") },
    ],
  },
} 