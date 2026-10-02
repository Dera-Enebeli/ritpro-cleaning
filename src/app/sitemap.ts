import type { MetadataRoute } from "next";

const siteUrl = "https://riteprocleaning.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/residential",
    "/commercial",
    "/providers",
    "/about",
    "/contact",
    "/reviews",
    "/quote",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
