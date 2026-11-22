# Fincor Kontabilitet – agent notes

Marketing website for an accounting office in Albania. All user-facing copy is in **Albanian** (`<html lang="sq">`); keep new copy in Albanian unless asked otherwise. No accounts, payments or database – the only backend feature is a Netlify Forms consultation request.

## Architecture

- TanStack Start (React 19, file routes in `src/routes/`, generated `src/routeTree.gen.ts`), Tailwind CSS 4, deployed via `@netlify/vite-plugin-tanstack-start`.
- `src/routes/index.tsx` → `HomePage`; `src/routes/sherbimet/$serviceId.tsx` → `ServicePage` (loader uses `findService`, throws `notFound()` for unknown slugs).
- `src/routes/__root.tsx`: metadata from `site`, Google Fonts (Fraunces display, Manrope body, IBM Plex Mono for figures/labels), `NotFoundPage`.

## Key files

- `src/data/site.ts` – brand, contact details (real phone/WhatsApp and email, street address without floor), nav, `about` (owner-provided mission, vision, values, positioning – keep verbatim), promises, process steps, FAQ, and `consultationForm` (name + endpoint).
- `src/data/services.ts` – the six services, the three packages and `recommendPackage()` used by the package finder.
- `src/components/HomePage.tsx` – all homepage sections; holds `serviceSlug`/`packageId` state shared by `PackageFinder` and `ConsultationForm`.
- `src/components/PackageFinder.tsx` – interactive sliders recommending a package; "Kërko ofertë" pre-selects the package in the form.
- `src/components/ConsultationForm.tsx` – AJAX Netlify Forms submission with pending/error/success states.
- `src/components/SiteChrome.tsx` – `Logo`, `SiteHeader` (sticky, mobile menu), `SiteFooter`.
- `src/lib/image.ts` – Netlify Image CDN URL helpers; always reference `public/img/*` through `cdn()`/`cdnSrcSet()`.
- `src/styles.css` – theme tokens (`paper`, `ink`, `navy`, `teal`, `line`, …) and shared classes (`.action`, `.action-ghost`, `.eyebrow`, `.form-input`, `.ledger-lines`, `.rise`, `.tick`).

## Netlify Forms (non-obvious)

- SSR forms are not detected at deploy time, so `public/__forms.html` holds a hidden static copy of the `kerkese-konsulence` form. **Every field name in `ConsultationForm` must exist there** (form-name, subject, name, company, email, phone, service, package, message, bot-field). A test enforces this.
- Submissions POST URL-encoded to `/__forms.html` (not `/`, which the SSR function handles). Responses containing the unprocessed registration HTML are treated as failures.
- The forms feature marker is created by the netlify-forms enable script; rerun it if `.netlify/features/netlify-forms` is missing.

## Conventions

- Design: warm "ledger paper" editorial look – serif display headings, mono numerals, navy + teal palette (owner-approved), no emoji. Avoid generic 3-equal-card grids.
- Don't invent statistics, testimonials or client names; the phone `+355 69 881 8556` is the office's single real number and also drives the WhatsApp link (`whatsappHref`); the email `fincor.kontabilitet@outlook.com` is real; the owner asked to drop the floor ("Kati") from the address. Positioning line (hero h1, "Rreth nesh" heading, footer – all from `site.about.positioning`) is "Më shumë se kontabilitet. Partneritet për biznesin tuaj."; the owner explicitly does not want "Llogaritë në rregull. Koha për biznesin tuaj.".
- Tests: `vitest` (`src/**/*.test.ts(x)`). Don't run builds locally in agent sessions.
