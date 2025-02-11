export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  link: string;
  features: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectDetails {
  location: string;
  area: string;
  duration: string;
  type: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  details: {
    location: string;
  }
}

export interface Homepage {
  services: {
    items: ServiceItem[];
  };
  process: {
    steps: ProcessStep[];
  };
  about: {
    features: Feature[];
  };
  gallery: {
    items: GalleryItem[];
  };
} 