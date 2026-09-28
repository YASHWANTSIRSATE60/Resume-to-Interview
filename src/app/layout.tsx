import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { env } from "@/config/env";
import { siteConfig } from "@/config/site";
import {
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/schema";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(env.APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: env.APP_URL,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    organizationSchema(env.APP_URL),
    websiteSchema(env.APP_URL),
    softwareApplicationSchema(env.APP_URL),
  ];

  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-brand-bg text-brand-navy">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
