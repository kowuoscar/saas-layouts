# Exercise 01 — Easy · Topic 03: App Router file conventions & route segments

## Objective

Understand how the Next.js App Router maps folders to URLs by creating three new public routes using only `page.tsx` files. You will see firsthand that there is no router configuration — the folder tree is the route table.

You will also practice identifying which files are **reserved** (understood by the router) versus **co-located** (ignored by the router but useful for organization).

## Materials

### File-system routing rule

A segment becomes a public URL only when it contains a `page.tsx`. A folder without `page.tsx` is invisible to the router — it can hold components, utilities, or anything else.

```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── pricing/
│   └── page.tsx          → /pricing
└── _helpers/
    └── format.ts         → not a route — co-located utility
```

### Minimal page.tsx

```tsx
export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">About</h1>
    </main>
  )
}
```

### Navigating between pages

Use the Next.js `<Link>` component instead of `<a>` for client-side navigation:

```tsx
import Link from 'next/link'

<Link href="/about">About</Link>
```

## Acceptance Criteria

- [ ] Three new routes exist: `/about`, `/pricing`, and `/blog`
- [ ] Each route renders a distinct `<h1>` that matches its page name
- [ ] All three pages are styled with at least basic Tailwind utilities (padding, font size)
- [ ] A `<nav>` element on the home page (`/`) links to all three routes using `<Link>`
- [ ] Navigating to a path that has no `page.tsx` (e.g. a folder you create without one) does NOT render a page — verified manually
- [ ] No `<a>` tags used for internal navigation — only `<Link>`

## Constraints

- Do not add a layout.tsx yet — that is Exercise 02
- No inline styles — Tailwind classes only
- Pages must be Server Components (no `'use client'` directive)

## Suggested resources

- https://nextjs.org/docs/app/building-your-application/routing/pages
- https://nextjs.org/docs/app/api-reference/components/link
- https://nextjs.org/docs/app/building-your-application/routing#file-conventions

## Niveau de rigueur

Le concept doit être compris. Le code doit fonctionner.
Les erreurs mineures de style sont acceptées.
