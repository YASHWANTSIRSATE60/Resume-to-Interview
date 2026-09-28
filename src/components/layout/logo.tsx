import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 font-semibold text-brand-navy">
      <span className="inline-flex size-9 items-center justify-center rounded-md bg-brand-navy text-white">
        R2I
      </span>
      <span>{siteConfig.shortName}</span>
    </Link>
  );
}
