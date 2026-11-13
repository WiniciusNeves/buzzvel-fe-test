# Luma — Buzzvel Front-End Test

A responsive landing page for **Luma**, a fictional learning platform, built from the Buzzvel FE Test 2026 Figma file.

- **Live preview:** _add the Vercel URL here_
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Zod · Vitest + React Testing Library

## Getting started

Requires **Node.js 20.9+** (developed on Node 22).

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script                            | What it does                                  |
| --------------------------------- | --------------------------------------------- |
| `npm run dev`                     | Development server                            |
| `npm run build`                   | Production build (`next build`)               |
| `npm start`                       | Serves the production build                   |
| `npm test`                        | Runs the test suite once (Vitest)             |
| `npm run test:watch`              | Tests in watch mode                           |
| `npm run typecheck`               | Generates route types and runs `tsc --noEmit` |
| `npm run lint`                    | ESLint with zero warnings allowed             |
| `npm run format` / `format:check` | Prettier (with the Tailwind class sorter)     |

## Project structure

```
src/
├── app/                 layout (fonts, metadata, skip link), page, global styles and design tokens
├── components/
│   ├── layout/          SiteHeader, MobileMenu (client), SiteFooter
│   ├── sections/        One component per Figma section (Hero, Categories, FeaturedCourse, …)
│   └── ui/              Reusable primitives: Button/ButtonLink, Section, SectionHeading, Eyebrow,
│                        Container, CategoryCard, AvatarStack, ArrowLink, StepVisual, Logo, icons
├── content/             Typed mock data (navigation, categories, steps, stats, collage, footer)
├── features/contact/    Contact form: Zod schema, form component, fields, mock submit service
├── fonts/               Self-hosted variable fonts (Inter, Plus Jakarta Sans)
├── lib/                 Small helpers (cn)
└── types/               Shared types
tests/                   Mirrors src/ — unit, component and page-level tests
docs/                    Design inventory, Figma reference renders, Lighthouse screenshots
```

## Key decisions

- **Server Components by default.** Only the two interactive pieces are client components: the mobile menu and the contact form. Everything else renders on the server, and the page is statically prerendered.
- **Content separated from presentation.** All copy, images and alt text live in `src/content/*` as typed, `as const` data. Sections only map over it, so the content could be swapped for a CMS without touching the markup.
- **Design tokens in Tailwind v4 `@theme`.** Colors, fonts, shadows and animations taken from Figma become utilities (`bg-cream`, `text-primary`, `font-display`, `shadow-card`…), so components never hard-code hex values.
- **Typed, reusable primitives.** `Button`/`ButtonLink` share one `buttonClassName()` with `variant`/`size`/`fullWidth` props. `Section` handles tone and vertical rhythm, and `SectionHeading` handles eyebrow + h1/h2 + description in default/inverse and start/center variants. Unions with `satisfies Record<…>` make sure every variant has styles, and `StepVisual` uses an exhaustive `switch` with a `never` check.
- **Contact form.** A Zod schema is the single source of truth: it trims input, produces the error messages, and the `ContactRequest` type is inferred from it. The form uses native `FormData` (no form library), validates on submit, shows inline errors linked with `aria-describedby` + `aria-invalid`, moves focus to the first invalid field and announces success/failure in live regions. The submit service is injected as a prop, so tests use a fake. The default mock waits ~900 ms and fails for any email ending in `@fail.test`, so the error state can be tried in the browser.
- **Mobile menu.** `aria-expanded`/`aria-controls`, labelled toggle, Escape closes and returns focus, choosing a link closes it, body scroll is locked while open, and it closes automatically when the viewport reaches the desktop breakpoint.
- **Fonts self-hosted with `next/font/local`.** The Latin variable WOFF2 files are committed, so builds don't depend on reaching Google Fonts. `next/font` still handles preloading, `font-display: swap` and fallback metrics (CLS 0).
- **Images.** Every image goes through `next/image` (AVIF/WebP, responsive `sizes`, lazy by default). The hero image is the LCP element and uses `loading="eager"` + `fetchPriority="high"`. The _People_ collage keeps the Figma coordinates as data and positions photos with percentages inside an aspect-ratio box, so it scales without separate breakpoint layouts.
- **Motion.** The hero text has a short entrance animation. Other sections use CSS scroll-driven animations (`animation-timeline: view()`), with no JavaScript, behind `@supports` so unsupported browsers simply show static content. Scroll reveals are transform-only so they never lower text contrast mid-animation. Everything is disabled under `prefers-reduced-motion`, including smooth scrolling.

## Design interpretation and inconsistencies

The design only has a 1280 px desktop frame and a 402 px mobile frame. Where it was unclear, I made these calls:

- **Tablet (768–1023 px)** is not designed. It uses the mobile header/menu, 2-column category cards, 3-column steps, a 4-column footer and shorter image aspect ratios so the hero and featured image don't take a full screen.
- **"How it works"**: the desktop frame labels all three steps "STEP 01". I used 01/02/03 as in the mobile frame. For step 2 I kept the desktop copy.
- **Mobile contact form** labels are in Portuguese in Figma ("Nome completo", "Sua dúvida"…). I kept English everywhere for consistency with the rest of the page.
- **People** paragraph is lorem ipsum in Figma and is kept as designed.
- **Navigation targets** aren't specified. Header and footer links point to on-page sections (Courses → Categories, For Teams → Contact, Community → People, About → How it works). There are no other pages.
- **Mobile menu** isn't in the design. It's a full-height panel in the page's visual language.
- **Text color `subtle`** (Figma `#6D7384`) is 4.45:1 on the cream background, just below WCAG AA. It was darkened to `#6A7081` (4.65:1), which is visually indistinguishable.

## Known gaps

- **Exact spacing/typography values were measured, not exported.** The Figma MCP free-plan limit was reached early, so tokens come from the node tree (positions/sizes) and colors sampled from rendered frames. Font sizes were calibrated by matching rendered text widths against Figma text boxes, so a few values may be off by 1–2 px.
- **Some image assets are low resolution.** Three photos (two _People_ photos and one avatar) were only available at 1×. The featured-course photo was cropped from a 1× render of the frame, so it can look slightly soft on high-DPI screens.
- **Figma image fills** in the _People_ collage repeat at the right and bottom edges. These strips were cropped out.
- **Final CTA decorative shapes** are rebuilt with CSS/SVG to look like the design. They aren't exported assets, and they're hidden below 1024 px as in the mobile frame.
- **The mobile People collage** reuses the desktop proportions scaled down. The mobile frame has slightly different crops.
- **Mobile Lighthouse performance is 88–90**, measured locally. The lab LCP of ~3.1 s on a simulated slow 4G is mostly the hero image fetched through an uncached local image optimizer. It should improve on Vercel's CDN.
- **The contact form is a mock.** Nothing is sent anywhere.

## Quality checks

| Check                                     | Result                                                                                                |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `npm test`                                | 25 tests in 5 files: header/menu behaviour, contact schema, contact form states, page structure, `cn` |
| `npm run typecheck` / `npm run lint`      | No errors, no warnings                                                                                |
| `next build`                              | Static prerender of `/`                                                                               |
| axe-core (WCAG 2.1 A/AA + best practices) | 0 violations at 1280 px and 402 px                                                                    |
| Lighthouse desktop                        | Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100                                    |
| Lighthouse mobile                         | Performance 88 · Accessibility 100 · Best Practices 100 · SEO 100                                     |

![Lighthouse desktop](docs/lighthouse/lighthouse-desktop.png)
![Lighthouse mobile](docs/lighthouse/lighthouse-mobile.png)

Manual checks: keyboard-only navigation (skip link, header, menu, cards, form), reduced-motion mode, no horizontal overflow at 402 / 768 / 1280 px, and full-page screenshots compared side by side with the Figma frames (`docs/figma-ref/`).

## Time spent

**[fill in]**, roughly split between design inventory/setup, components, sections, and QA (accessibility, performance, responsive checks).

## Use of AI

I used **Claude** as a pair programmer throughout:

- reading the Figma file (structure, sizes) and turning it into a design inventory (`docs/design-inventory.md`);
- scaffolding the project and drafting components, sections and tests;
- running checks: unit tests, typecheck, lint, production build, axe, Lighthouse and Playwright screenshots at three viewports.

How I validated the output:

- I worked in small stages (inventory → setup → primitives → sections → QA) and reviewed each one before moving on.
- Behaviour was written test-first. Interaction tests (menu, form) were written before the implementation and confirmed failing for the right reason. A page-level test caught a real accessibility issue (category link names) that was then fixed.
- I compared every section against the Figma renders on desktop, tablet and mobile, and checked the page on a real phone and desktop browser.
- I can walk through every file and every decision listed above.
