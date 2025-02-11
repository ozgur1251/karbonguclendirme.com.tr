import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
  }),
});

const technical = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    keyPoints: z.array(z.string()),
    relatedTopics: z.array(z.object({
      title: z.string(),
      description: z.string(),
      link: z.string()
    })).optional()
  }),
});

export const collections = {
  services,
  technical,
}; 