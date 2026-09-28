# R2I — Resume to Interview

**Tagline:** Your AI Career Agent  
**Core message:** From Resume to Interview, Powered by AI.

R2I is a production foundation for an AI Career Agent SaaS built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui architecture patterns.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style component architecture
- MongoDB + Mongoose
- Zod validation

## Project Structure

```text
src/
  app/           # routes, layouts, metadata, API handlers
  components/    # reusable UI, layout, shell components
  features/      # feature-level composition
  services/      # business logic and domain services
  db/            # database connection setup
  models/        # mongoose models
  ai/            # AI provider abstraction
  jobs/          # background job abstractions
  validators/    # zod schemas for server validation
  lib/           # shared helpers (auth, metadata, errors, utils)
  types/         # app-wide TypeScript types
  config/        # env and site configuration
```

## Routes Included

### Public
- /
- /features
- /how-it-works
- /pricing
- /about
- /faq
- /contact
- /blog
- /privacy
- /terms
- /cookies

### Authentication
- /login
- /signup

### Authenticated App Shell
- /app
- /app/profile
- /app/resume
- /app/jobs
- /app/matches
- /app/saved
- /app/applications
- /app/interview
- /app/analytics
- /app/notifications
- /app/settings
- /app/billing

### Admin
- /admin

## Environment Variables

Copy `.env.example` to `.env.local` and configure values:

- `MONGODB_URI`
- `AUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `APP_URL`

## Security and SEO Foundation

- Route protection with `middleware.ts` for `/app/*` and `/admin/*`
- Server-side validation via Zod
- Safe API error handling
- Secure cookie strategy (`httpOnly`, `sameSite`, `secure` in production)
- Security headers in `next.config.ts`
- Per-page metadata with canonical URLs, Open Graph, and Twitter cards
- `robots.txt`, `sitemap.xml`, and `manifest.webmanifest`
- Structured data (Organization, WebSite, SoftwareApplication)
- `noindex` for private app and admin pages

## Development

```bash
npm install
npm run dev
```

## Quality Commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture Documentation

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
