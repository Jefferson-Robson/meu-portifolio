import type { MetadataRoute } from "next";

const siteUrl = "https://robsonlopes.tec.br";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projetos/assistente-do-robson/`,
      lastModified: new Date("2026-10-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projetos/laboratorio-llms/`,
      lastModified: new Date("2026-10-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projetos/assistente-agenda/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
