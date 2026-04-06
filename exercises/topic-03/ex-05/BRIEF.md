# Exercise 05 — Medium · Topic 03: App Router file conventions & route segments

## Objective

Understand how `not-found.tsx` and the `notFound()` function work together to handle missing resources. You will create a dynamic route for a blog post, call `notFound()` when the post does not exist, and style the 404 page with Tailwind utilities from Topic 02.

This exercise bridges Topic 02 (Tailwind styling) and Topic 03 (App Router conventions) — the 404 page must be visually polished.

## Materials

### Dynamic route segments

Square brackets in a folder name create a dynamic segment:

```
app/
└── blog/
    ├── page.tsx           → /blog
    └── [slug]/
        └── page.tsx       → /blog/anything
```

The segment value is available in `params`:

```tsx
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // use slug to fetch post
}
```

> Note: In Next.js 15, `params` is a Promise — always `await` it.

### Triggering not-found

```tsx
import { notFound } from 'next/navigation'

const POSTS: Record<string, { title: string; body: string }> = {
  'hello-world': { title: 'Hello World', body: 'My first post.' },
  'nextjs-15':   { title: 'Next.js 15', body: 'App Router deep dive.' },
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()
  return <article>{post.title}</article>
}
```

### not-found.tsx

```tsx
// app/blog/[slug]/not-found.tsx
import Link from 'next/link'

export default function PostNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="text-lg text-gray-600">This post doesn't exist.</p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        Back to blog
      </Link>
    </div>
  )
}
```

### Tailwind classes to use

| Class | Effect |
|---|---|
| `flex flex-col items-center justify-center` | Center content vertically and horizontally |
| `min-h-[60vh]` | At least 60% of viewport height |
| `text-6xl font-bold` | Large bold 404 number |
| `text-gray-200` | Very light gray for the large number |
| `text-gray-600` | Medium gray for the message |
| `gap-4` | Spacing between elements |

## Acceptance Criteria

- [ ] A `/blog` page exists that lists at least 3 hardcoded post titles with links to their slugs
- [ ] A `/blog/[slug]` dynamic route exists that renders the post content when the slug matches
- [ ] Navigating to `/blog/hello-world` renders the post
- [ ] Navigating to `/blog/does-not-exist` renders the `not-found.tsx` UI (not a crash)
- [ ] The 404 page shows a large "404" number, a human-readable message, and a link back to `/blog`
- [ ] The 404 page is visually centered using Tailwind flexbox utilities
- [ ] `params` is typed as `Promise<{ slug: string }>` and properly awaited (Next.js 15 convention)

## Constraints

- Use a hardcoded in-memory object for posts — no database or API calls
- `notFound()` must be called from the page, not from `not-found.tsx`
- The `not-found.tsx` must live in the `[slug]` segment folder — not at root level

## Suggested resources

- https://nextjs.org/docs/app/api-reference/functions/not-found
- https://nextjs.org/docs/app/api-reference/file-conventions/not-found
- https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

## Niveau de rigueur

Les patterns recommandés doivent être respectés.
Pas d'antipatterns évidents. Typage correct.
