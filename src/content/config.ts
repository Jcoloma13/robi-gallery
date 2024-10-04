import { z, defineCollection } from 'astro:content';

const paints = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    price: z.number(),
    available: z.boolean(),
    size: z.string()
  })
});

export const collections = { paints }