import { SITE } from './site';

export const SEO = {
  defaultTitle: "ARC Karbon Güçlendirme | Yapısal Güçlendirme Uzmanı",
  titleTemplate: "%s | ARC Karbon Güçlendirme",
  description: "Karbon fiber güçlendirme ve yapısal güçlendirme çözümleri. Bina, kolon, kiriş ve döşeme güçlendirme hizmetleri için uzman ekibimizle yanınızdayız.",
  
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ARC Karbon Güçlendirme'
      }
    ]
  },

  twitter: {
    handle: '@arcguclendirme',
    site: '@arcguclendirme',
    cardType: 'summary_large_image',
  },

  additionalMetaTags: [
    {
      name: 'author',
      content: 'ARC Karbon Güçlendirme'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'googlebot',
      content: 'index, follow'
    }
  ],

  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    }
  ]
};

// Sayfa bazlı SEO yapılandırmaları
export const pageSEO = {
  home: {
    title: "ARC Karbon Güçlendirme | Yapısal Güçlendirme Uzmanı",
    description: "Karbon fiber güçlendirme ve yapısal güçlendirme çözümleri sunan uzman ekibimizle binanızı güçlendiriyoruz. Ücretsiz keşif için hemen arayın.",
    keywords: "karbon fiber güçlendirme, yapısal güçlendirme, bina güçlendirme, kolon güçlendirme, deprem güçlendirme"
  },
  about: {
    title: "Hakkımızda | ARC Karbon Güçlendirme",
    description: "20 yılı aşkın tecrübemizle yapısal güçlendirme sektörünün öncü firmalarından biriyiz. Uzman kadromuz ve kaliteli hizmet anlayışımızla yanınızdayız.",
    keywords: "arc karbon, yapısal güçlendirme firması, güçlendirme şirketi, karbon fiber uzmanı"
  },
  services: {
    title: "Hizmetlerimiz | Karbon Fiber ve Yapısal Güçlendirme",
    description: "Karbon fiber, CFRP, FRP güçlendirme ve yapısal güçlendirme hizmetlerimiz hakkında detaylı bilgi alın. Profesyonel çözümler için bizi arayın.",
    keywords: "karbon fiber hizmetleri, yapısal güçlendirme hizmetleri, güçlendirme çözümleri, CFRP güçlendirme"
  },
  contact: {
    title: "İletişim | ARC Karbon Güçlendirme",
    description: "Yapısal güçlendirme ihtiyaçlarınız için bizimle iletişime geçin. Ücretsiz keşif ve fiyat teklifi için hemen arayın.",
    keywords: "arc karbon iletişim, güçlendirme teklifi, ücretsiz keşif, yapısal güçlendirme fiyat"
  },
  blog: {
    title: "Blog | Yapısal Güçlendirme Makaleleri",
    description: "Karbon fiber güçlendirme, yapısal güçlendirme ve bina güçlendirme hakkında uzman makaleler ve teknik bilgiler.",
    keywords: "güçlendirme blog, yapısal güçlendirme makaleleri, karbon fiber bilgi, teknik makaleler"
  }
}; 