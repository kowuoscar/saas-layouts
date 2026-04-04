# Exercise 04 — Medium · Topic 01: Project foundation & tooling

## Objective
Understand the relationship between `layout.tsx` and `page.tsx`. A layout wraps all pages in its segment and persists across navigation — it does not re-render when the user moves between sibling routes. This is the core mechanism that allows persistent sidebars, navigation bars, and shells in SaaS applications. In this exercise, you will modify the root layout to add a Google Font and a global site wrapper, and create a nested layout for the `/dashboard` segment that adds a minimal sidebar frame.

## Materials

Root layout structure — the required shell for every Next.js app:
```tsx
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My SaaS App",
  description: "Built with Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Loading a Google Font with `next/font/google` (zero layout shift, self-hosted automatically):
```tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Apply via className:
<body className={inter.className}>{children}</body>
```

Nested layout — wraps only the `/dashboard` segment and its children:
```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Sidebar placeholder</aside>
      <main>{children}</main>
    </div>
  );
}
```

## Acceptance Criteria

- [ ] Root layout (`app/layout.tsx`) sets a `<Metadata>` export with `title` and `description`
- [ ] A Google Font is loaded via `next/font/google` and applied to `<body>`
- [ ] Root layout wraps `children` in a full-page container div with Tailwind utility classes
- [ ] A nested `app/dashboard/layout.tsx` exists and renders a two-column structure (sidebar + main content area) using Tailwind
- [ ] Navigating between `/dashboard` and `/dashboard/settings` does not re-render the sidebar (verify visually — the sidebar HTML must not flash or reload during client-side navigation between those two routes)
- [ ] No TypeScript errors

## Constraints

- Use `next/font/google` — do not load fonts via a `<link>` tag in `<head>`
- The `<html>` and `<body>` tags must remain in `app/layout.tsx` only — never repeat them in nested layouts
- Do not use `"use client"` in any layout file for this exercise

## Suggested resources

- https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates
- https://nextjs.org/docs/app/api-reference/components/font
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
