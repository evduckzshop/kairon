import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kairon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/book",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.7,
  }));

  // TODO: Add dynamic case study slugs from Sanity when connected
  // const studies = await getAllCaseStudies();
  // const dynamicPages = studies.map(s => ({ url: `${siteUrl}/work/${s.slug.current}`, ... }));

  return staticPages;
}
