import type { Metadata } from "next";

import { requireAdminSession } from "@/lib/auth";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Admin",
    description: "Administrative workspace.",
    path: "/admin",
    noIndex: true,
  }),
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAdminSession();

  return <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</div>;
}
