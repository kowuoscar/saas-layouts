# Exercise 04 — Medium · Topic 03: App Router file conventions & route segments

## Objective

Understand how `error.tsx` creates a React error boundary for a route segment, catches rendering errors, and lets the user recover without a full page reload. You will create a page that intentionally throws under certain conditions, then build an `error.tsx` that catches it and offers a retry button.

## Materials

### Why error.tsx must be a Client Component

React error boundaries can only be implemented as class components or client components. Next.js handles the class component part internally — you just add `'use client'` at the top.

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
    <div className="p-8">
      <h2 className="text-xl font-semibold text-red-600">Something went wrong</h2>
      <p className="mt-2 text-sm text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  )
}
```

### The `reset` function

Calling `reset()` re-renders the page segment from scratch. If the error was transient (network glitch, race condition), the retry will succeed. If the error is deterministic, the error boundary will catch it again.

### Throwing from a Server Component

You can throw any Error from a server component — Next.js will catch it and render the nearest `error.tsx`:

```tsx
// app/dashboard/page.tsx
export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ fail?: string }>
}) {
  const { fail } = await searchParams
  if (fail === 'true') {
    throw new Error('Simulated server error')
  }
  return <div className="p-8">Dashboard loaded successfully</div>
}
```

Navigate to `/dashboard?fail=true` to trigger the error.

### error.tsx scope

`error.tsx` catches errors from its sibling `page.tsx` and all nested segments. It does **not** catch errors in its sibling `layout.tsx` — a layout error propagates to the parent segment's `error.tsx`.

## Acceptance Criteria

- [ ] An `error.tsx` exists in the `/dashboard` segment with `'use client'` at the top
- [ ] The error UI displays the error message and a "Try again" button
- [ ] Clicking "Try again" calls `reset()` and re-renders the page
- [ ] Navigating to `/dashboard?fail=true` renders the error UI instead of crashing the whole app
- [ ] Navigating to `/dashboard` (no query param) renders the normal page — error boundary only activates on error
- [ ] The error UI is styled with Tailwind (red accent for the error message, styled button)
- [ ] `error.tsx` is typed correctly: `error: Error & { digest?: string }` and `reset: () => void`

## Constraints

- `error.tsx` must be a Client Component — `'use client'` is required
- Do not use a try/catch in the page — let the error propagate naturally to the boundary
- Do not use `console.error` in the error component as the primary error display — show the message in the UI

## Suggested resources

- https://nextjs.org/docs/app/building-your-application/routing/error-handling
- https://nextjs.org/docs/app/api-reference/file-conventions/error
- https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
