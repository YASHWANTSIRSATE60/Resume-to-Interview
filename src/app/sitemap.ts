import type { MetadataRoute } from "next";

import { env } from "@/config/env";

const routes = [
  "",
  "/features",
  "/how-it-works",
  "/pricing",
  "/about",
  "/faq",
  "/contact",
  "/blog",
  "/privacy",
  "/terms",
  "/cookies",
  "/login",
  "/signup",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${env.APP_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.6,
  }));
}
