# Field Control Analytics — Design System

A brand & UI design system for **Field Control Analytics (FCA)**, reconstructed from the
*FCA Brand Style Guide (Excerpts), July 2024*. It captures the brand foundations
(logo, color, type, spacing), reusable UI primitives, and product UI kits so design
agents can produce on-brand FCA interfaces, decks, and assets.

> **What FCA is.** Field Control Analytics is a B2B workforce-compliance and field-data
> analytics provider. Its products help organizations vet, track, and manage contract
> labor and field operations — credentialing, compliance status, audit trails, and
> reporting. The brand reads **corporate, trustworthy, data-forward** — a deep navy
> palette, clean geometric type, generous white space, no decorative flourish.

---

## Sources

These are the inputs this system was built from. Reader may not have access; recorded for provenance.

| Source | What it provided |
|---|---|
| **Figma — "Design System.fig"** (FCA Brand Style Guide, July 2024) | Color palette, typography scale, grid/spacing, and a full component library (buttons, chips, tabs, inputs, checkbox, radio, switch, calendar, breadcrumbs, header/footer, FAB, progress steps, multiselect). Pages: `Thumbnail`, `Design-System`, `Component`, `Dump`. |
| **`uploads/fca-logo.svg`** | Primary horizontal logo lockup (FCA circle mark + "Field Control Analytics" wordmark) in navy. *(The file's XML namespace was malformed — `https://www.w3.org/2000/svg` — and was corrected to `http://…` in the copied asset.)* |
| Figma `Thumbnail` page | White logo lockup (PNG) for navy backgrounds; cover/brand styling. |

> **Note on the Figma `Component` & `Dump` pages.** Some artboards there reuse a third-party
> reference UI (a "Muthoot ONE" header, a "caseflow" dashboard) as scaffolding/inspiration.
> Those are **not** FCA product screens. The reusable *patterns* (navy pill CTAs, outline
> chips, segmented tabs, navy date picker) share FCA's palette and were recreated here in
> FCA branding. Real FCA product screens were not present in the file — see Caveats in the
> handoff for what that means for the UI kit.

---

## Brand at a glance

- **Primary color:** Navy `#00346B`. Used for headers, primary actions, links, and large brand surfaces.
- **Accent:** Sky blue `#66A9D9` and subtle `#D4E7F5` washes.
- **Type:** **Poppins** everywhere — the single typeface for display/headings, body, labels and oversized numerals. Weights: Light 300 → Bold 700.
- **Shape language:** 12px card radius, 8px controls, **fully-pill** CTAs and chips. Soft, light shadows.
- **Tone:** Plain, professional, second-person, no emoji.

---

## CONTENT FUNDAMENTALS

How FCA writes.

- **Voice:** Clear, direct, professional B2B. Plain English over jargon. Confident but not salesy.
- **Person:** Speaks to the user in **second person** ("you", "your"). Refers to itself as
  "Field Control Analytics" or "FCA", or "we" in narrative copy.
- **Casing:** **Sentence case** for body, descriptions, form labels, and most buttons
  ("Create new case", "Send to revision", "Request a call"). **Title Case** reserved for
  proper product/section names and nav items ("Gold Loan", "Digital Gold", "Bill Payments").
  Page/section *display* headings in the brand guide are Title Case ("Brand Style Guide").
- **Buttons / CTAs:** Verb-first, short, action-oriented — "Create new case", "Get the app",
  "Login / Signup", "Request a call", "Contact us". CTA labels often pair with a trailing chevron.
- **Microcopy:** Functional and quiet. Helper lines read like "Track, manage and forecast your data."
  Support prompts: "Need help? Visit the Help Center or Contact Us."
- **Numbers & data:** Data-forward product, so figures, counts, IDs (`#7843267`), pagination
  ("Showing 1–10 out of 573") and statuses ("Done", "Canceled", "Live") appear plainly,
  never dramatized.
- **Status language:** Single words — **Success / Warning / Error (Failure) / Info / Live**.
- **Emoji:** **None.** The brand does not use emoji in product or marketing surfaces.
- **Punctuation:** No exclamation marks in UI. Periods on full helper sentences; omitted on labels/CTAs.

*Examples (verbatim from source):* "Brand Style Guide", "Track, manage and forecast your data.",
"Create new case", "Send to revision", "Need help? Visit the Help Center or Contact Us",
"Showing 1-10 out of 573".

---

## VISUAL FOUNDATIONS

- **Color vibe.** Cool, corporate, navy-led. One dominant brand color (navy `#00346B`) with a
  small sky-blue accent family and near-neutral grays. Semantic colors are saturated but used
  sparingly (green success, amber warning, red error/failure). Backgrounds are near-white
  (`#FAFAFC`) with pure-white cards.
- **Type system.** **Poppins** is the single typeface across the entire system — display, body,
  labels, UI and very large numerals (section indices, big stats). Headings run SemiBold;
  body Regular/Medium. Letterspacing is near-zero (slightly negative on large display).
- **Spacing.** 8px base unit; scale 8 / 16 / 24 / 32 / 40 / 64 / 80 / 96 / 120. Layouts are
  airy with generous margins; the brand guide pads content cards ~205px from a 1440 frame edge.
- **Grid.** 12-column desktop (content ~1024px, 50px columns), 6-column tablet (768px), 2-column
  mobile (320px), 24px gutters.
- **Corner radii.** Cards/panels **12px**; inputs, list rows and inner chips **8px**; CTAs, chips,
  tags and the FAB are **fully pill** (999px).
- **Cards.** White fill, 12px radius, **no border** — separated by a soft, light shadow
  (`4px 8px 24px #F2F2F5`). Table/list rows use a 1px hairline inset border (`#DDE5E9`) instead.
- **Shadows.** Very soft and light-gray, never dark/heavy. Card: `4px 8px 24px #F2F2F5`.
  Popovers/dropdowns sit on a slightly stronger navy-tinted shadow. No neumorphism.
- **Borders.** Hairline, low-contrast: separators/table headers `rgba(43,42,41,.1)`; input strokes
  `rgba(43,42,41,.2)` (web variant uses sky `#66A9D9`).
- **Buttons.** Primary = navy **filled pill**, white label, optional leading/trailing chevron.
  Secondary = navy **outline pill** on white. Disabled = pale blue (`#D4E7F5`) fill / muted label.
- **Backgrounds.** Flat color only — navy for brand/hero surfaces, near-white for app. **No**
  gradients, **no** photographic hero washes, **no** repeating patterns or textures in the
  reconstructed guide. Imagery, where used, is clean product UI / people photography (neutral, not graded).
- **Hover states.** Primary button → lighter navy (`#004A91`). Links → darker navy / underline.
  Outline controls → subtle blue-wash fill. Quiet, color-shift based (not scale).
- **Press / active states.** Deeper navy (`#00294F`); selected items get a navy fill or
  blue-subtle (`#D4E7F5`) background with navy text.
- **Selection.** Selected tabs/dates/radios/checkboxes fill **navy** (or near-black `#2B2A29`
  for the multiselect checks) with a white glyph. Selected list items tint blue-subtle.
- **Transparency & blur.** Used lightly — alpha neutrals for input fills/borders and 10% tints
  for semantic soft backgrounds. No heavy glass/backdrop-blur motif.
- **Motion.** Restrained and functional: short fades and ease-outs (~150–250ms),
  chevron rotation on expand, accordion height transitions. No bounces, no infinite loops,
  no decorative parallax. Respect `prefers-reduced-motion`.
- **Layout rules.** Fixed navy header bar (logo left, nav center/right, account/CTA far right);
  optional fixed navy footer; FAB ("Request a call") as a floating pill. Breadcrumbs above page titles.
- **Live/real-time.** A small red **"Live"** pill (dot + label) signals real-time data.

---

## ICONOGRAPHY

- **Style.** Thin, single-weight **stroke (line) icons** at a 24×24 grid — chevrons, plus,
  menu, close, profile/user, calendar, arrows. Rounded joins, ~1.5–2px stroke, no fills,
  monochrome (inherits `currentColor`, usually navy or white-on-navy).
- **Source set.** The Figma's own icons are outlined vector glyphs but were stored as
  fragmentary/approximated paths — not clean enough to ship directly.
  **➜ Substitution (please confirm):** this system uses **[Lucide](https://lucide.dev)** icons
  via CDN as the closest match (24×24, ~1.75px stroke, rounded, `currentColor`). Swap for FCA's
  official icon set if one exists.
- **Usage.** Pair icons with text in CTAs (trailing chevron), nav, and table actions
  (send / edit / delete / open-in-new). Keep them monochrome and aligned to the text color.
- **Emoji / unicode.** Not used as iconography anywhere in the brand.
- **Logo.** See `assets/logos/` — navy lockup (`fca-logo.svg`) for light surfaces, white
  lockup (`fca-logo-white.png`) for navy surfaces. The mark is an "FCA" monogram inside a
  circle with a stylized figure; the wordmark stacks "Field / Control / Analytics".

---

## INDEX / MANIFEST

Root files
- `styles.css` — global entry point (link this one file); `@import`s all tokens & fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/logos/` — `fca-logo.svg` (navy lockup), `fca-logo-white.png` (white lockup).
- `readme.md` — this guide. `SKILL.md` — Agent-Skills entry point.

Foundations specimen cards — `guidelines/` (Design System tab)
- Colors: brand, neutral, semantic, functional alphas.
- Type: families, heading scale, body & labels, UI & display text.
- Spacing: scale, radius & elevation. Brand: logo.

Components — `components/<group>/` (React primitives; `export function <Name>`)
- `buttons/` — **Button** (primary/secondary/ghost), **Chip**.
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**.
- `navigation/` — **Tabs**, **Breadcrumbs**, **Searchbar** (main / secondary),
  **Pagination** + **RowPagination**, **NavigationBar** (navy left rail).
- `feedback/` — **Badge** (success/warning/error/info/neutral/brand/live).
- `display/` — **Card**, **Avatar** + **AvatarGroup**.
- `data/` — **DataTable** (AG-Grid worker data grid: search + export toolbar, sortable
  header, row selection, vertical Filters tab, footer pagination). Recreated from the
  AG-Grids Figma spec.
- Each directory has a `*.card.html` (Design System tab) and per-component `*.prompt.md`.
- Consume via `const { Button } = window.FieldControlAnalyticsDesignSystem_019e09` after
  loading `_ds_bundle.js` (auto-generated; relative path to project root).

> **On component naming.** This system is assembled from several FCA Figma files — the
> Brand Style Guide, a dedicated inputs/controls file, and the ag-grid file. Only the
> last of these ships named library symbols, so most component names here
> (`Button`, `Input`, `Card`, `Badge`, `Chip`, `Select`, `Checkbox`, `Radio`, `Switch`,
> `Tabs`, `Breadcrumbs`, `Avatar`/`AvatarGroup`) are **intentional additions**: standard
> primitive names for patterns the guides define visually but never named. Components
> that *do* correspond to kit symbols use the kit's vocabulary — `DataTable` (Cell/grid),
> `Searchbar`, `Pagination`, `RowPagination`, `NavigationBar`.

UI kits — `ui_kits/<product>/`
- `web-console/` — FCA workforce-compliance web console (login → dashboard → list).
  *(A representative composition of the documented patterns — FCA product screens were
  not present in the source file; see Caveats.)*

Usage
- **Tokens only / static artifacts:** link `styles.css` and use the CSS custom properties.
- **React surfaces:** load `_ds_bundle.js`, read components off the `window` namespace above.
