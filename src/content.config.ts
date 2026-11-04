import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const screen = z.object({
  label: z.string(),          // tab name, e.g. "Deck"
  caption: z.string(),        // one line shown under the screenshot
  tablet: z.string().optional(), // path under public/, e.g. "shots/thirai/tablet-deck.webp"
  phone: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    pitch: z.string(),                       // one sentence for the card
    status: z.enum(['idea', 'queued', 'in-build', 'released']),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100),          // lower shows first
    featured: z.boolean().default(false),    // featured project fills the home page hero
    subtitle: z.string().optional(),
    version: z.string().optional(),
    repo: z.string().url().optional(),
    youtube: z.string().optional(),          // YouTube video ID, not the full URL
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    screens: z.array(screen).default([]),
    review: z
      .object({
        status: z.enum(['pending', 'done']),
        summary: z.string().optional(),
        fixes: z.array(z.object({ title: z.string(), detail: z.string() })).default([]),
        link: z.string().url().optional(),
        linkLabel: z.string().optional(),
      })
      .optional(),
  }).strict(), // unknown or misspelt fields fail the build
});

export const collections = { projects };
