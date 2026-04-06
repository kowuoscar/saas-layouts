# Exercise 02 — Easy · Topic 03: App Router file conventions & route segments

## Objective

Understand how `layout.tsx` creates a persistent UI shell that wraps all pages in its segment without re-rendering during navigation. You will use a **route group** (`(marketing)`) to apply a shared layout to a subset of pages without affecting the URL.

## Materials

### Route group syntax

Wrapping a folder name in parentheses excludes it from the URL but lets you share a layout:

```
app/
├── (marketing)/
│   ├── layout.tsx        → shared shell for all marketing pages
│   ├── page.tsx          → /
│   ├── about/
│   │   └── page.tsx      → /about
│   └── pricing/
│       └── page.tsx      → /pricing
└── layout.tsx            → root layout (always required)
```

The `(marketing)` folder name does not appear in the URL — `/about` stays `/about`.

### layout.tsx signature

```tsx
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header className="h-16 border-b flex items-center px-8">
        <span className="font-bold text-lg">MySaaS</span>
      </header>
      <main>{children}</main>
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © 2025 MySaaS
      </footer>
    </div>
  )
}
```

### Key Tailwind classes for a layout header

| Class | Effect |
|---|---|
| `h-16` | Fixed height of 4rem |
| `border-b` | Bottom border |
| `flex items-center` | Vertically center content |
| `px-8` | Horizontal padding |
| `sticky top-0` | Stick to top on scroll |
| `bg-white` | White background |
| `z-10` | Stack above page content |

## Acceptance Criteria

- [ ] A `(marketing)` route group exists under `app/`
- [ ] The three routes from Exercise 01 (`/`, `/about`, `/pricing`) are moved inside `(marketing)/`
- [ ] A `layout.tsx` inside `(marketing)/` renders a header with the site name and a footer
- [ ] The header is sticky (`sticky top-0`) and has a bottom border
- [ ] Navigating between `/`, `/about`, and `/pricing` does NOT re-render the header (verify by adding a counter or console.log in the layout — it should fire only once)
- [ ] The `(marketing)` folder name does not appear in any URL
- [ ] The root `app/layout.tsx` is unchanged (still contains `<html>` and `<body>`)

## Constraints

- The route group must use the `(marketing)` naming convention — parentheses included
- No JavaScript event handlers in the layout — it must remain a Server Component
- No duplicate `<html>`/`<body>` tags — only the root layout may have those

## Suggested resources

- https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates
- https://nextjs.org/docs/app/building-your-application/routing/route-groups

## Niveau de rigueur

Le concept doit être compris. Le code doit fonctionner.
Les erreurs mineures de style sont acceptées.
