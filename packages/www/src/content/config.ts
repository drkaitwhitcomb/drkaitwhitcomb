import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const data = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const resources = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts, data, pages, resources };
