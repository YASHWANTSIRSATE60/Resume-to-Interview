import type { Metadata } from "next";

import { AppSidebar } from "@/components/app-shell/sidebar";
import { AppTopbar } from "@/components/app-shell/topbar";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "R2I App",
    description: "Authenticated R2I application workspace.",
    path: "/app",
    noIndex: true,
  }),
};

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-brand-bg">
      <AppTopbar />
      <div className="mx-auto flex w-full max-w-7xl">
        <AppSidebar />
        <div className="w-full p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
