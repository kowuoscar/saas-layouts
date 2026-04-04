# Exercise 05 — Medium · Topic 01: Project foundation & tooling

## Objective
Configure Tailwind CSS 4 design tokens using the `@theme` block in `globals.css`. In Tailwind v4, custom design tokens (colors, spacing, fonts, breakpoints) are defined as CSS custom properties inside `@theme {}` — replacing the `theme.extend` object from `tailwind.config.js`. These tokens then become available as Tailwind utility classes automatically. This exercise also introduces the `@layer` directive for adding custom base styles. The goal is to replace Next.js boilerplate styles with a clean SaaS-ready baseline.

## Materials

Defining custom tokens in Tailwind CSS 4:
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Custom color — becomes bg-brand, text-brand, border-brand, etc. */
  --color-brand: oklch(55% 0.2 250);

  /* Custom font — becomes font-sans */
  --font-sans: "Inter", sans-serif;

  /* Custom breakpoint — becomes md:, but you can add extras */
  --breakpoint-xs: 30rem;
}
```

Adding custom base styles (applied globally, no class needed):
```css
@layer base {
  body {
    @apply bg-white text-gray-900 antialiased;
  }

  *, *::before, *::after {
    @apply box-border;
  }
}
```

Using the custom token:
```tsx
<button className="bg-brand text-white px-4 py-2 rounded">
  Click me
</button>
```

### How Tailwind utility classes work

Each Tailwind class maps directly to one CSS property. When you write `className="bg-brand text-white px-4 py-2 rounded"`, Tailwind generates exactly this CSS:

```css
.bg-brand    { background-color: var(--color-brand); }
.text-white  { color: #fff; }
.px-4        { padding-left: 1rem; padding-right: 1rem; }
.py-2        { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.rounded     { border-radius: 0.25rem; }
```

No cascade, no specificity fights — each class does exactly one thing.

### Key classes used in this exercise

**Colors (from your `@theme` tokens):**
- `bg-{token}` — sets `background-color`. e.g. `bg-brand`
- `text-{token}` — sets `color`. e.g. `text-brand`, `text-gray-900`
- `border-{token}` — sets `border-color`

**Typography:**
- `antialiased` — makes text render smoother on Mac/retina displays (`-webkit-font-smoothing: antialiased`)
- `font-sans` — applies the `--font-sans` token you define in `@theme`

**Spacing (padding/margin):**
- `p-{n}` — all sides. `px-{n}` — left/right. `py-{n}` — top/bottom
- Scale: `1` = 0.25rem, `2` = 0.5rem, `4` = 1rem, `8` = 2rem

**Box model:**
- `box-border` — makes `width` include padding and border (should always be set globally — without it, adding padding expands the element beyond its stated width)

## Acceptance Criteria

- [ ] `globals.css` defines at least 3 custom tokens in an `@theme {}` block: a brand color, a secondary color, and a custom font family
- [ ] Custom color tokens are used in at least one component via generated utility classes (e.g. `bg-brand`, `text-secondary`)
- [ ] An `@layer base` block sets global body styles (`background`, `color`, `antialiased`)
- [ ] No `tailwind.config.js` or `tailwind.config.ts` file exists (all config stays in CSS)
- [ ] The app renders correctly and dev server has no errors

## Constraints

- All Tailwind customization must happen in CSS (`globals.css`) — no JavaScript config file
- Do not hardcode hex/rgb color values in `className` — use the defined tokens
- Custom properties inside `@theme` must follow the Tailwind v4 naming convention: `--color-*`, `--font-*`, `--breakpoint-*`, etc.

## Suggested resources

- https://tailwindcss.com/docs/theme
- https://tailwindcss.com/docs/adding-custom-styles
- https://tailwindcss.com/docs/colors (oklch color model)

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
