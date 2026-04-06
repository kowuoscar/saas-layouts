# Exercise 05 — Medium · Topic 02: Utility fundamentals for SaaS UI

## Objective

Apply spacing, color, and typography utilities to the existing app routes created in Topic 01. This exercise bridges the two topics: you already have a working Next.js App Router scaffold — now you give it visual polish using only Tailwind utilities. The goal is to practice utility composition at the page level rather than on isolated components.

## Materials

### What you built in Topic 01

From Topic 01 exercises 03 and 04, your app should have:
- A root layout (`app/layout.tsx`) with a font and metadata
- At least two routes (e.g., `/` and `/dashboard`)
- A nested dashboard layout (`app/dashboard/layout.tsx`)

### Composing utilities at page level

Utilities are not just for small components — they apply to page wrappers too:

```tsx
// app/page.tsx — Marketing landing page
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Welcome to Acme
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          The platform that scales with your team.
        </p>
      </section>
    </main>
  )
}
```

```tsx
// app/dashboard/page.tsx — Dashboard page
export default function DashboardPage() {
  return (
    <div className="px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening today.
        </p>
      </div>
      {/* stat cards row */}
      <div className="flex gap-4">
        {/* cards go here */}
      </div>
    </div>
  )
}
```

### Stat card pattern

```tsx
<div className="flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <p className="text-sm font-medium text-gray-500">Total users</p>
  <p className="mt-2 text-3xl font-bold text-gray-900">12,430</p>
  <p className="mt-1 text-sm text-green-600">+4.3% from last month</p>
</div>
```

## Acceptance Criteria

- [ ] The home page (`app/page.tsx`) has a styled hero section with at least a heading, a subtitle, and a background color utility (`bg-gray-50` or similar)
- [ ] The dashboard page (`app/dashboard/page.tsx`) has a page header with a title and a subtitle, styled with typography utilities
- [ ] At least three "stat cards" are rendered on the dashboard page, each using `border`, `rounded-lg`, `bg-white`, `shadow-sm`, and internal padding
- [ ] Each stat card displays a label (`text-sm text-gray-500`), a large number (`text-3xl font-bold`), and a trend indicator with an appropriate color (green or red)
- [ ] The cards are laid out in a row using `flex` and `gap-` (not margins on individual cards)
- [ ] The page wrapper uses `max-w-7xl mx-auto` (or similar) to constrain width
- [ ] No custom CSS — all styling via Tailwind utilities

## Constraints

- No inline `style` attributes
- No third-party UI libraries or component kits
- Must reuse the existing route structure from Topic 01 — do not create a new Next.js project

## Suggested resources

- https://tailwindcss.com/docs/border-radius
- https://tailwindcss.com/docs/box-shadow
- https://tailwindcss.com/docs/max-width

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
