declare module '@config/navigation' {
  interface Contact {
    phone: string;
    email: string;
    address: string;
  }

  interface SocialLink {
    name: string;
    icon: string;
    url: string;
  }

  interface MenuItem {
    name: string;
    path: string;
    anchor: string;
    submenu?: MenuItem[];
  }

  interface FooterLink {
    name: string;
    path: string;
  }

  interface FooterColumn {
    title: string;
    links: FooterLink[];
  }

  interface FooterBottom {
    copyright: string;
    links: FooterLink[];
  }

  interface Navigation {
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

  export const NAVIGATION: Navigation;
} 