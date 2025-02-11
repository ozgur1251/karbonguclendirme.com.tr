export interface Contact {
  phone: string;
  email: string;
  address: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface MenuItem {
  name: string;
  path: string;
  anchor: string;
  submenu?: MenuItem[];
}

export interface FooterLink {
  name: string;
  path: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterBottom {
  copyright: string;
  links: FooterLink[];
}

export interface Navigation {
  topbar: {
    contact: Contact;
    social: SocialLink[];
  };
  menu: {
    main: MenuItem[];
  };
  footer: {
    columns: FooterColumn[];
    bottom: FooterBottom;
  };
}

export const NAVIGATION = {
  topbar: {
    contact: {
      phone: "+905427483855",
      email: "info@karbonguclendirme.com",
      address: "İstanbul, Türkiye"
    },
    social: [
      {
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com"
      },
      {
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com"
      },
      {
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://linkedin.com"
      }
    ]
  },
  menu: {
    main: [
      {
        name: "Ana Sayfa",
        path: "/",
        anchor: ""
      },
      {
        name: "Hakkımızda",
        path: "/hakkimizda",
        anchor: "hakkimizda"
      },
      {
        name: "Hizmetler",
        path: "/services",
        anchor: "services",
        submenu: [
          {
            name: "Kolon Güçlendirme",
            path: "/hizmetler/kolon-guclendirme",
            anchor: ""
          },
          {
            name: "Kiriş Güçlendirme",
            path: "/hizmetler/kiris-guclendirme",
            anchor: ""
          },
          {
            name: "Döşeme Güçlendirme",
            path: "/hizmetler/doseme-guclendirme",
            anchor: ""
          },
          {
            name: "Zemin Güçlendirme",
            path: "/hizmetler/zemin-guclendirme",
            anchor: ""
          }
        ]
      },
      {
        name: "Blog",
        path: "/blog",
        anchor: "blog"
      },
      {
        name: "İletişim",
        path: "/iletisim",
        anchor: "iletisim"

      }
    ]
  },
  footer: {
    columns: [
      {
        title: "Hizmetlerimiz",
        links: [
          { name: "Karbon Fiber Güçlendirme", path: "/hizmetler/karbon-guclendirme" },
          { name: "CFRP Güçlendirme", path: "/hizmetler/cfrp-guclendirme" },
          { name: "FRP Güçlendirme", path: "/hizmetler/frp-guclendirme" },
          { name: "Bina Güçlendirme", path: "/hizmetler/bina-guclendirme" }
        ]
      },
      {
        title: "Güçlendirme",
        links: [
          { name: "Kolon Güçlendirme", path: "/hizmetler/kolon-guclendirme" },
          { name: "Kiriş Güçlendirme", path: "/hizmetler/kiris-guclendirme" },
          { name: "Döşeme Güçlendirme", path: "/hizmetler/doseme-guclendirme" },
          { name: "Perde Güçlendirme", path: "/hizmetler/perde-guclendirme" }
        ]
      },
      {
        title: "Kurumsal",
        links: [
          { name: "Hakkımızda", path: "/hakkimizda" },
          { name: "Blog", path: "/blog" },
          { name: "İletişim", path: "/iletisim" },
          { name: "Teknik Bilgiler", path: "/teknik" }
        ]
      },
      {
        title: "Faydalı Bilgiler",
        links: [
          { name: "SSS", path: "/sss" },
          { name: "Referanslar", path: "/referanslar" },
          { name: "Sertifikalar", path: "/sertifikalar" },
          { name: "Kariyer", path: "/kariyer" }
        ]
      }
    ],
    bottom: {
      copyright: "© 2024 ARC Karbon Güçlendirme. Tüm hakları saklıdır.",
      links: [
        { name: "Gizlilik Politikası", path: "/privacy" },
        { name: "Kullanım Şartları", path: "/terms" },
        { name: "KVKK", path: "/kvkk" }
      ]
    }
  }
}; 