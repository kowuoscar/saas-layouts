# Exercise 02 — Easy · Topic 01: Project foundation & tooling

## Objective
Install Tailwind CSS 4 manually into the existing Next.js 15 project from ex-01. Tailwind CSS 4 introduces a CSS-first configuration model — there is no longer a `tailwind.config.js` file. Configuration happens directly in CSS using `@import "tailwindcss"` and `@theme` blocks. The goal is to understand how this new model works and why it is different from v3.

## Materials

Tailwind CSS 4 installation for Next.js uses `@tailwindcss/postcss` via Next.js's built-in PostCSS support:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

`postcss.config.mjs` — create this file at the project root:
```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

`app/globals.css` — replace the entire file with:
```css
@import "tailwindcss";
```

That single line replaces the three `@tailwind base/components/utilities` directives from v3. No `tailwind.config.js` needed.

Key difference from Tailwind v3:
- **v3**: `tailwind.config.js` + three `@tailwind` directives in CSS + PostCSS plugin `tailwindcss`
- **v4**: no config file + single `@import "tailwindcss"` + `@theme {}` block in CSS + PostCSS plugin `@tailwindcss/postcss`

## Acceptance Criteria

- [ ] `tailwindcss`, `@tailwindcss/postcss`, and `postcss` installed as dependencies
- [ ] `postcss.config.mjs` exists at the project root with `@tailwindcss/postcss` as a plugin
- [ ] `app/globals.css` contains `@import "tailwindcss"` (no v3 directives)
- [ ] No `tailwind.config.js` or `tailwind.config.ts` file exists
- [ ] A utility class applied to an element in `app/page.tsx` renders correctly (e.g. `className="text-blue-500"`)
- [ ] Dev server starts without errors

## Constraints

- Do not create a `tailwind.config.js` or `tailwind.config.ts` file
- Do not use the `@tailwind base`, `@tailwind components`, `@tailwind utilities` v3 directives

## Suggested resources

- https://tailwindcss.com/docs/installation/framework-guides/nextjs
- https://tailwindcss.com/docs/upgrade-guide (v3 → v4 differences)
- https://nextjs.org/docs/app/getting-started/css#tailwind-css

## Niveau de rigueur

Le concept doit être compris. Le code doit fonctionner.
Les erreurs mineures de style sont acceptées.
