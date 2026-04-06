# Topic 03: App Router file conventions & route segments

Understand page.tsx, layout.tsx, loading.tsx, error.tsx, and not-found.tsx and how nested route segments map to nested UI shells.

## Concepts covered

### 1. File-system routing

In Next.js 15 App Router, the URL structure is derived directly from the folder structure inside `app/`. Each folder represents a **route segment**. To make a segment publicly accessible, you add a `page.tsx` file inside it.

```
app/
├── page.tsx           → /
├── about/
│   └── page.tsx       → /about
└── dashboard/
    ├── page.tsx       → /dashboard
    └── settings/
        └── page.tsx   → /dashboard/settings
```

There is no router configuration file — the folder tree **is** the router.

### 2. page.tsx

`page.tsx` is the UI that renders for a specific URL. It is a React Server Component by default. It receives `params` (dynamic segments) and `searchParams` (query string) as props.

```tsx
// app/dashboard/page.tsx
export default function DashboardPage() {
  return <main>Dashboard</main>
}
```

A segment only becomes a route if it has a `page.tsx`. A folder without one is just a container for other files (co-location).

### 3. layout.tsx

`layout.tsx` defines a **UI shell that wraps all pages in its segment and all nested segments**. Unlike a page, a layout is **not re-rendered during navigation** — it persists. This is what makes it efficient for sidebars, headers, and other persistent chrome.

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64">Sidebar</aside>
      <main className="flex-1">{children}</main>
    </div>
  )
}
```

The root `app/layout.tsx` is mandatory — it wraps every page in the app and must include `<html>` and `<body>`.

### 4. Route groups — `(folder)`

Wrapping a folder name in parentheses creates a **route group**. The folder name is excluded from the URL but lets you share a layout among a subset of routes.

```
app/
├── (marketing)/
│   ├── layout.tsx     → shared layout for marketing pages only
│   ├── page.tsx       → /
│   └── about/
│       └── page.tsx   → /about
└── (dashboard)/
    ├── layout.tsx     → shared layout for dashboard pages only
    └── dashboard/
        └── page.tsx   → /dashboard
```

This is the primary tool for having **multiple distinct layouts** in a single Next.js app (marketing shell vs dashboard shell vs auth shell).

### 5. loading.tsx

`loading.tsx` creates an **instant loading UI** that is shown while the page is streaming in. Under the hood, Next.js wraps the `page.tsx` in a React `<Suspense>` boundary automatically. The loading UI appears immediately on navigation, before any data fetching completes.

```tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return <div className="animate-pulse h-8 w-48 bg-gray-200 rounded" />
}
```

`loading.tsx` is scoped to its segment — nested segments can have their own `loading.tsx`.

### 6. error.tsx

`error.tsx` is a React **error boundary** for its route segment. It catches errors thrown during rendering (including async server errors surfaced through streaming). It **must be a Client Component** (`'use client'`), because error boundaries can only be class components or client components in React.

```tsx
// app/dashboard/error.tsx
'use client'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

The `reset` function re-renders the segment from scratch, attempting to recover.

### 7. not-found.tsx

`not-found.tsx` renders when the `notFound()` function is called inside a page or when Next.js cannot find a matching route. It can be placed at any segment level — the nearest one up the tree is used.

```tsx
// app/not-found.tsx
export default function NotFound() {
  return <div>404 — Page not found</div>
}
```

To trigger it programmatically:

```tsx
import { notFound } from 'next/navigation'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id)
  if (!product) notFound()
  return <div>{product.name}</div>
}
```

### 8. How nesting composes UI

Route segments nest inside each other — each segment's `layout.tsx` wraps the next. The composition chain for `/dashboard/settings` looks like:

```
app/layout.tsx          (root shell — html, body)
  └── app/(dashboard)/layout.tsx   (dashboard shell — sidebar, top nav)
        └── app/dashboard/layout.tsx (optional inner shell)
              └── app/dashboard/settings/page.tsx
```

Each `loading.tsx` and `error.tsx` wraps only its own `page.tsx`, not the layout above it — errors in a layout propagate up to the parent's `error.tsx`.

### 9. Co-location

Files inside a route segment folder that are **not** one of the reserved names (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, etc.) are simply ignored by the router. This means you can co-locate components, utilities, and tests next to the pages they belong to.

```
app/dashboard/
├── page.tsx
├── layout.tsx
├── loading.tsx
├── error.tsx
└── _components/       → not a route — just co-located
    └── StatsCard.tsx
```
