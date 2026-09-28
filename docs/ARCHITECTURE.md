# R2I Architecture Foundation

## Architecture Style

R2I uses a **modular monolith** architecture with clear boundaries between UI, domain services, validation, data access, and infrastructure.

## Layers

1. **App Layer (`src/app`)**
   - Route definitions
   - Layouts
   - Metadata and SEO endpoints
   - API route handlers

2. **Feature Layer (`src/features`)**
   - Page-level composition and feature-specific UI

3. **UI Layer (`src/components`)**
   - Reusable design system primitives
   - Marketing and app-shell components

4. **Domain Services (`src/services`)**
   - Auth workflows
   - Contact workflows
   - User and application domain services

5. **Validation (`src/validators`)**
   - Zod schemas for all server input validation

6. **Data Layer (`src/db`, `src/models`)**
   - MongoDB connection lifecycle
   - Mongoose models and schema constraints

7. **Platform Utilities (`src/lib`, `src/config`, `src/types`)**
   - Environment safety
   - Metadata generation
   - Auth helpers
   - Error handling

8. **AI + Jobs (`src/ai`, `src/jobs`)**
   - Provider abstraction for AI calls
   - Background job payload and queue contract stubs

## Auth and Authorization Foundation

- `middleware.ts` enforces baseline protection for app and admin routes.
- Cookie-based session architecture is centralized in `src/lib/auth.ts`.
- Admin access requires role checks both in middleware and admin layout.

## Data Isolation Foundation

- Service interfaces require user identifiers for scoped data operations.
- Ownership assertions are modeled in `src/services/applications/application-service.ts`.
- Route handlers avoid cross-user data access patterns.

## SEO Foundation

- Route-level metadata generated through `createPageMetadata` helper.
- Canonical links and social metadata included for each public page.
- Robots and sitemap block indexing for private app/admin routes.

## Accessibility Foundation

- Semantic landmarks (`header`, `main`, `footer`, `nav`, `section`, `article`)
- Keyboard focus visibility and skip link
- Reduced-motion support
- Responsive layouts across public and app shell routes
