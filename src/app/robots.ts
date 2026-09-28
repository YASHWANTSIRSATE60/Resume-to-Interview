import type { MetadataRoute } from "next";

import { env } from "@/config/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/features", "/how-it-works", "/pricing", "/about", "/faq", "/contact", "/blog", "/privacy", "/terms", "/cookies", "/login", "/signup"],
        disallow: ["/app", "/admin", "/api"],
      },
    ],
    sitemap: `${env.APP_URL}/sitemap.xml`,
  };
}
