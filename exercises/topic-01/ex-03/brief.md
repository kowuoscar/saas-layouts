# Exercise 03 — Medium · Topic 01: Project foundation & tooling

## Objective
Understand the App Router's file-system routing model by creating additional routes. In Next.js 15 App Router, a route is a folder inside `app/` that contains a `page.tsx` file. Nested folders create nested URLs. This exercise reinforces the direct mapping between directory structure and URL structure, and introduces the concept of co-location (placing non-route files alongside route files without exposing them as routes).

## Materials

Route mapping rules:
```
app/page.tsx              →  /
app/about/page.tsx        →  /about
app/dashboard/page.tsx    →  /dashboard
app/blog/[slug]/page.tsx  →  /blog/:slug  (dynamic segment)
```

A minimal page component:
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <main>About</main>;
}
```

Co-location: files that are NOT `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, or `not-found.tsx` inside `app/` are NOT exposed as routes. You can place components, utilities, or types next to your route files safely.

```
app/
  dashboard/
    page.tsx        ← exposed as /dashboard
    components/     ← NOT a route, safe to co-locate
      Chart.tsx
```

## Acceptance Criteria

- [ ] At least 3 additional routes created: `/about`, `/dashboard`, and `/dashboard/settings`
- [ ] Each route renders a unique `<h1>` identifying the page
- [ ] All 3 routes are reachable in the browser without 404s
- [ ] A co-located component file exists inside one of the new route folders (any component, even trivial) — demonstrating that co-location does not create a route
- [ ] No use of the `pages/` directory

## Constraints

- Only use `app/` directory routing — no `pages/` directory
- Route files must be named exactly `page.tsx` (lowercase)
- All components must be typed with TypeScript (no implicit `any`)

## Suggested resources

- https://nextjs.org/docs/app/building-your-application/routing/defining-routes
- https://nextjs.org/docs/app/building-your-application/routing/colocation
- https://nextjs.org/docs/app/getting-started/layouts-and-pages

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
