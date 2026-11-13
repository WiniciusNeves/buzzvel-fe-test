# Design inventory — Luma (Buzzvel FE Test 2026)

Source: Figma copy `aQXP5Y9Db2uwUWjSZYhhsd`, page "Page 1".
Frames: **FE - Desktop** (1280 × 5691) and **FE - Mobile** (402 × 7799). No tablet frame.
Reference renders: `docs/figma-ref/` (`d-*` desktop, `m-*` mobile).

## Layout grid

| | Desktop (1280) | Mobile (402) |
|---|---|---|
| Content width | 1120 (80px side padding) | 362 (20px side padding) |
| Section vertical padding | 100px | 60px |
| Header height | 70 | 68 |
| Two-column gap | ~60px (560 + 60 + 500) | stacked |

Tablet (768–1023) is not designed → interpolated: 2-col grids collapse to stacked or 2-up, 40px gutters.

## Color tokens (sampled from renders)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#171B2C` | headings, footer bg |
| `body` | ~`#6B6F80` | paragraphs (to confirm) |
| `cream` | `#F9F8F3` | page bg (hero, how, people), inputs, contact cards |
| `white` | `#FFFFFF` | categories, testimonial, contact bg, cards |
| `primary` | `#3157F6` | primary buttons, eyebrows, stats, featured bg |
| `primary-soft` | `#E2E8FF` | chips, number badges, decorative circles |
| `sun` | `#FFEE7E` | featured badge, "View course" button |
| `sun-soft` | `#FFF1C2` | final CTA bg, step 3 tile |
| `peach` | `#FFCB9F` | hero accent block, CTA shapes |
| `coral` | `#FF704D` | step 2 dot |
| `line` | `#DBDFEB` | card/input borders |

## Typography

- Display / headings: geometric grotesque, tight tracking → **Plus Jakarta Sans** (ExtraBold/Bold) — *to confirm in Figma*.
- Body / UI: **Inter** — *to confirm*.

| Role | Desktop | Mobile |
|---|---|---|
| H1 (hero) | ~64 / 70, 3 lines | ~40 / 44 |
| H2 (section) | ~48–52 / 56 | ~32 / 36 |
| Final CTA H2 | ~56 / 64 | ~40 / 56 |
| Testimonial quote | ~30 / 44 | ~20 / 32 |
| Stats | ~64 / 70 | ~40 |
| H3 (card/step) | 20 / 32 | 20 / 28 |
| Lead paragraph | 18 / 28 | 16 / 26 |
| Body | 16 / 24, small 14 / 24 | same |
| Eyebrow | 12 / 16, uppercase, wide tracking, primary | same |

## Sections (desktop order)

1. **Header** — logo "luma." (vector), nav: Courses · For Teams · Community · About; Log in (text) + "Start learning" (primary). Mobile: logo + menu toggle (36×36) → **mobile menu drawer (interaction)**.
2. **Hero** — eyebrow, H1 "Build skills that actually move you forward.", lead, 2 CTAs, avatars (3×32) + "Trusted by 24,000+ learners". Right: photo 500×520 r≈24 with peach block behind, lavender circle, floating chips "120+ expert-led courses" and "★★★★★ 4.9 avg rating". Mobile: image first, full-width stacked buttons.
3. **Categories** — eyebrow, H2, lead; 4 cards (01–04: Product Design, Technology, Business, Creative) with "Explore →". Desktop 4-up, mobile stacked.
4. **Featured course** (primary bg) — photo with "FEATURED COURSE" badge; eyebrow, H2, text, instructor, 3 outline chips (8 lessons · 2h 40min · Intermediate), "View course" (sun) + "Browse all courses →".
5. **How it works** — centered eyebrow + H2; 3 steps with decorative icon tiles connected by a line (horizontal desktop, vertical mobile).
6. **Testimonial** — quote mark, quote, avatar + name/role; stats column (24K+ / 120+ / 92%) separated by vertical rule. Mobile: stats in a 3-up row.
7. **People** — eyebrow "The people", H2 "Meet international students & teachers", lorem paragraph, outline button; masonry collage of 10 photos over a lavender circle (4 columns, staggered offsets).
8. **Contact** — eyebrow, H2 "Get in touch", text, 2 info cards (Email link, Response time); form card: Full name, Email, Your question (textarea), "Send message".
9. **Final CTA** (sun-soft bg) — 4 avatars, H2 "What will you learn next?", subtitle, "Explore all courses" + "Join Luma", decorative peach shapes/line icons.
10. **Footer** (ink bg) — logo + tagline, 3 link columns (Explore / Company / Support), divider, © 2026 Luma Learning.

## Interactions (inferred — design shows static states)

- Mobile nav toggle (open/close, Esc, focus management, scroll lock).
- Contact form: client-side validation, inline errors, mock submit (loading → success).
- Hover/focus states on buttons, links, cards.
- Smooth anchor scrolling ("See how it works" → How it works, nav links → sections).
- Subtle reveal-on-scroll animations, disabled under `prefers-reduced-motion`.

## Design inconsistencies → decisions

- Desktop "How it works" shows **STEP 01** on all three steps; mobile shows 01/02/03 → use 01/02/03.
- Step 2 copy differs ("who use these skills" vs "who actually use these skills") → use desktop copy.
- People paragraph is lorem ipsum → keep as in design? (decide) / replace with real copy and note it.
- Header nav targets are not specified → map to on-page anchors where a section exists.

## Assets needed (export from Figma)

- Logo "luma." (SVG) — header (dark) and footer (light).
- Hero photo, featured course photo.
- People collage: 10 photos.
- Avatars: hero ×3, testimonial ×1, final CTA ×4.
- Final CTA decorative icons/shapes (or rebuild as inline SVG).
- UI icons (arrow, star, chat, clock, menu) → Lucide-style inline SVG.
