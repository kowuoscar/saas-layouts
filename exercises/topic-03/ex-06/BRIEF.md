# Exercise 06 — Hard · Topic 03: App Router file conventions & route segments

## Objective

Build a production-grade nested route structure for a dashboard section. You will compose all five App Router file conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`) inside a `(dashboard)` route group, with a co-located component, strict TypeScript typing, and clean Tailwind layout.

The result will be the foundation for the full SaaS dashboard shell built in later topics.

## Materials

### Target structure

```
app/
├── (dashboard)/
│   ├── layout.tsx              → dashboard shell: sidebar + content area
│   └── dashboard/
│       ├── page.tsx            → /dashboard — async stats page
│       ├── loading.tsx         → skeleton for stats
│       ├── error.tsx           → error boundary with retry
│       ├── not-found.tsx       → 404 within the dashboard shell
│       └── _components/
│           └── StatCard.tsx    → co-located reusable card
```

### Dashboard layout with sidebar

```tsx
// app/(dashboard)/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 border-r bg-white flex flex-col px-4 py-6 gap-2">
        <span className="font-bold text-xl mb-6">MySaaS</span>
        {/* Nav links go here */}
      </aside>
      <div className="flex-1 overflow-y-auto p-8">{children}</div>
    </div>
  )
}
```

### StatCard component (co-located)

```tsx
// app/(dashboard)/dashboard/_components/StatCard.tsx
type StatCardProps = {
  label: string
  value: string | number
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-bold">{value}</p>
    </div>
  )
}
```

### Key Tailwind classes

| Class | Effect |
|---|---|
| `flex h-screen` | Full-viewport flex container |
| `w-64 border-r` | Fixed-width sidebar with right border |
| `flex-1 overflow-y-auto` | Content area fills remaining space, scrolls |
| `grid grid-cols-3 gap-6` | 3-column stat grid |
| `rounded-lg border shadow-sm` | Card container styling |

## Acceptance Criteria

- [ ] A `(dashboard)` route group exists with its own `layout.tsx` rendering a sidebar and content area
- [ ] `/dashboard` is a valid route with an async `page.tsx` that simulates a 1.5s data fetch
- [ ] `loading.tsx` renders a 3-card skeleton grid using `animate-pulse`
- [ ] `error.tsx` catches errors, displays the message, and offers a retry button — typed correctly with `'use client'`
- [ ] `not-found.tsx` is present and renders a dashboard-styled 404 message with a link back to `/dashboard`
- [ ] A `StatCard` component is co-located in `_components/` and used by the page to render at least 3 stats
- [ ] `StatCard` is typed with an explicit `type` (not `interface`) and no `any`
- [ ] The dashboard layout does not appear for marketing routes (`/about`, `/pricing`) — route groups isolate it correctly
- [ ] `npm run build` passes with no TypeScript or ESLint errors

## Constraints

- No `any` types anywhere
- `StatCard` must use a named export (not default), imported with `{ StatCard }` in the page
- Do not use CSS Modules or inline styles — Tailwind only
- The `(dashboard)` layout must remain a Server Component

## Suggested resources

- https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates
- https://nextjs.org/docs/app/building-your-application/routing/route-groups
- https://nextjs.org/docs/app/building-your-application/routing/colocation

## Niveau de rigueur

Niveau production. Typage strict, gestion d'erreurs,
bonnes pratiques du framework. Le code doit pouvoir passer une PR review.
