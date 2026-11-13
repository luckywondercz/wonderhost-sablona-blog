import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Články jsou soubory Markdownu ve složce src/content/clanky.
const clanky = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clanky' }),
  schema: z.object({
    titulek: z.string(),
    popis: z.string(),
    datum: z.coerce.date(),
    koncept: z.boolean().default(false),
  }),
});

export const collections = { clanky };
