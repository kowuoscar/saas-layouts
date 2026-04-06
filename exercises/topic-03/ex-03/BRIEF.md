# Exercise 03 — Medium · Topic 03: App Router file conventions & route segments

## Objective

Understand how `loading.tsx` provides instant loading UI using React Suspense. You will create an async page that simulates a slow data fetch, then add a `loading.tsx` skeleton that appears immediately during navigation — before the data is ready.

This is one of the most impactful UX patterns in the App Router: the layout renders instantly, the loading skeleton appears while data loads, and the page content replaces it once ready — all without any client-side state.

## Materials

### How loading.tsx works

Next.js automatically wraps `page.tsx` in a `<Suspense>` boundary when `loading.tsx` is present in the same segment. You do not write the `<Suspense>` wrapper yourself.

```
app/dashboard/
├── loading.tsx    → shown instantly during navigation
└── page.tsx       → rendered once async work completes
```

### Simulating a slow async page

```tsx
// app/dashboard/page.tsx
async function fetchStats() {
  // Simulate 2 second API call
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return { users: 1240, revenue: 45200 }
}

export default async function DashboardPage() {
  const stats = await fetchStats()
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Users: {stats.users}</p>
      <p>Revenue: ${stats.revenue}</p>
    </div>
  )
}
```

### A skeleton loading UI

```tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="p-8 space-y-4">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
    </div>
  )
}
```

### Key Tailwind classes for skeleton loaders

| Class | Effect |
|---|---|
| `animate-pulse` | Fades in and out to indicate loading |
| `bg-gray-200` | Light gray fill for skeleton shapes |
| `rounded` | Rounded corners |
| `h-4 w-32` | Controlled height and width for shape |
| `space-y-4` | Vertical gap between skeleton items |

## Acceptance Criteria

- [ ] A `/dashboard` route exists with an async `page.tsx` that waits at least 1.5 seconds before rendering
- [ ] A `loading.tsx` in the same segment renders a skeleton UI with at least 3 placeholder shapes using `animate-pulse`
- [ ] Navigating to `/dashboard` shows the loading skeleton immediately, then replaces it with the page content
- [ ] The layout (header/nav) remains visible and stable during loading — it does not flash or disappear
- [ ] `loading.tsx` is a Server Component (no `'use client'`)
- [ ] No `<Suspense>` written manually in the page — `loading.tsx` handles it automatically

## Constraints

- Use `setTimeout` wrapped in a Promise to simulate the delay — do not install any data-fetching library
- The skeleton must resemble the shape of the actual content (not just a spinner)
- No `useEffect` or client-side data fetching — the page must be a Server Component

## Suggested resources

- https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
- https://nextjs.org/docs/app/api-reference/file-conventions/loading

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
