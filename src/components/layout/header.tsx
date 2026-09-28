"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { publicNavigation } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-brand-border bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <button
          type="button"
          className="inline-flex items-center rounded-md p-2 text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-brand-muted hover:text-brand-navy">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
            Login
          </Link>
          <Link href="/signup" className={cn(buttonVariants({ size: "sm" }))}>
            Get started
          </Link>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-brand-border bg-white px-4 pb-4 md:hidden",
          open ? "block" : "hidden",
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-2 pt-4">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-brand-muted hover:bg-brand-bg hover:text-brand-navy" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2">
            <Link href="/login" className={cn(buttonVariants({ variant: "secondary", size: "sm", className: "w-full text-center" }))} onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link href="/signup" className={cn(buttonVariants({ size: "sm", className: "w-full text-center" }))} onClick={() => setOpen(false)}>
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
