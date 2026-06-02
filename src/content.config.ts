import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Colección "noticias" — gestionada por Sveltia CMS.
// Cada noticia es un archivo Markdown en src/content/noticias/.
// El frontmatter lo escribe el CMS; el cuerpo (campo "body" en Sveltia)
// se guarda como contenido Markdown debajo del frontmatter.
const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { noticias };
