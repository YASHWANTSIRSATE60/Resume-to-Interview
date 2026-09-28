export const siteConfig = {
  name: "R2I — Resume to Interview",
  shortName: "R2I",
  tagline: "Your AI Career Agent",
  description:
    "From Resume to Interview, Powered by AI. Build your candidate profile, discover jobs, and prepare for interviews with confidence.",
  appUrl: "https://example.com",
  social: {
    x: "https://x.com",
    linkedin: "https://linkedin.com",
  },
};

export const publicNavigation = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNavigation = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
] as const;

export const appNavigation = [
  { href: "/app", label: "Overview" },
  { href: "/app/profile", label: "Profile" },
  { href: "/app/resume", label: "Resume" },
  { href: "/app/jobs", label: "Jobs" },
  { href: "/app/matches", label: "Matches" },
  { href: "/app/saved", label: "Saved" },
  { href: "/app/applications", label: "Applications" },
  { href: "/app/interview", label: "Interview" },
  { href: "/app/analytics", label: "Analytics" },
  { href: "/app/notifications", label: "Notifications" },
  { href: "/app/settings", label: "Settings" },
  { href: "/app/billing", label: "Billing" },
] as const;
