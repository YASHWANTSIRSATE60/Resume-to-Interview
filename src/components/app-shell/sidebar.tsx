import Link from "next/link";

import { appNavigation } from "@/config/site";

export function AppSidebar() {
  return (
    <aside className="hidden w-64 border-r border-brand-border bg-white p-4 lg:block">
      <nav aria-label="App navigation" className="space-y-1">
        {appNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm text-brand-muted hover:bg-brand-bg hover:text-brand-navy"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
