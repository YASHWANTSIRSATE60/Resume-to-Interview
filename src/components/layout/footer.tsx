import Link from "next/link";

import { legalNavigation, publicNavigation, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-border bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-brand-navy">{siteConfig.name}</h2>
          <p className="mt-2 text-sm text-brand-muted">{siteConfig.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Explore</h3>
          <ul className="mt-3 space-y-2">
            {publicNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-brand-muted hover:text-brand-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Legal</h3>
          <ul className="mt-3 space-y-2">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-brand-muted hover:text-brand-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-border py-4 text-center text-xs text-brand-muted">
        © {new Date().getFullYear()} R2I. All rights reserved.
      </div>
    </footer>
  );
}
