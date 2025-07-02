import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const workPosts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/workPosts/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
  // type: "content",
});

export const collections = { workPosts };
