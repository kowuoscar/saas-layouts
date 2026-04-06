# Learning Progress — Next.js 15 + Tailwind CSS 4

## Stats

- Started: 2026-04-04
- Last active: 2026-04-06
- Topics completed: 2 / 20
- Exercises completed: 19 / 140


---

## Current Topic

**Topic 03 — App Router file conventions & route segments**
Status: `in-progress`
Started: 2026-04-06

### Exercises

| #   | Difficulty | Description | Status         |
| --- | ---------- | ----------- | -------------- |
| 01  | easy       | Create three public routes using page.tsx and observe how folder structure maps to URLs                               | 🔄 in progress |
| 02  | easy       | Add a shared layout.tsx using a route group to wrap marketing pages with a header and footer                          | 🔒 locked      |
| 03  | medium     | Add a loading.tsx skeleton to an async page and observe how Suspense streaming works automatically                    | 🔒 locked      |
| 04  | medium     | Build an error.tsx boundary that catches page errors and lets the user retry without a full reload                    | 🔒 locked      |
| 05  | medium     | Create a dynamic blog route with notFound() for missing slugs and a styled 404 page                                  | 🔒 locked      |
| 06  | hard       | Build a production-grade dashboard segment with layout, loading, error, not-found, and co-located components         | 🔒 locked      |
| 07  | hard       | Add a CD deploy job to the GitHub Actions pipeline so every push to main deploys automatically via Helm              | 🔒 locked      |

> Exercise files: `exercises/topic-03/`
> CI/CD target: Hetzner cluster (kubeadm) · Helm · GitHub Actions

---

## Completed Topics

### ✅ Topic 02 — Utility fundamentals for SaaS UI

Completed: 2026-04-06
Exercises: 7 / 7 done

| #   | Difficulty | Description                                                                                              | Status  |
| --- | ---------- | -------------------------------------------------------------------------------------------------------- | ------- |
| 01  | easy       | Apply spacing and sizing utilities to build a centered page container with a card inside it              | ✅ done |
| 02  | easy       | Apply color and border utilities to build status badges and a notification banner                        | ✅ done |
| 03  | medium     | Use typography utilities to build a hero text block with four distinct typographic levels                | ✅ done |
| 04  | medium     | Use flexbox utilities to build a top navigation bar with logo, nav links, and a CTA button               | ✅ done |
| 05  | medium     | Style the existing Topic 01 app routes with spacing, color, and typography utilities and add stat cards  | ✅ done |
| 06  | hard       | Build a production-grade SaaS pricing card component with typed props and a highlighted variant          | ✅ done |
| 07  | hard       | Create a Helm chart skeleton for the app and deploy it manually to the Hetzner cluster with helm install | ✅ done |

### ✅ Topic 01 — Project foundation & tooling

Completed: 2026-04-04
Exercises: 7 / 7 done

| #   | Difficulty | Description                                                                                           | Status  |
| --- | ---------- | ----------------------------------------------------------------------------------------------------- | ------- |
| 01  | easy       | Scaffold a Next.js 15 App Router project and annotate the purpose of every generated file             | ✅ done |
| 02  | easy       | Install Tailwind CSS 4 manually using the CSS-first configuration approach with `@tailwindcss/nextjs` | ✅ done |
| 03  | medium     | Create multiple routes using the App Router file-system convention and demonstrate co-location        | ✅ done |
| 04  | medium     | Modify the root layout to add a Google Font and metadata, then create a nested dashboard layout       | ✅ done |
| 05  | medium     | Define custom design tokens using the Tailwind CSS 4 `@theme` block and apply them project-wide       | ✅ done |
| 06  | hard       | Harden the scaffold to production standards: strict TypeScript, clean ESLint, zero build warnings     | ✅ done |
| 07  | hard       | Dockerize the app with a multi-stage build and push to ghcr.io via a GitHub Actions pipeline          | ✅ done |

---

## Upcoming Topics

- Topic 04 — Root layout & global shell: Build the outermost HTML shell — fonts, global styles, providers — and learn how the root layout wraps every page in a SaaS app.
- Topic 05 — Responsive design & mobile-first layout: Apply Tailwind breakpoint prefixes to build layouts that collapse gracefully from desktop dashboards to mobile views.
- Topic 06 — Marketing / public layout: Create the unauthenticated layout shell — top navigation bar, hero section, footer — as a separate nested layout segment from the app shell.
- Topic 07 — Auth layout: Build a centered, minimal auth layout (sign-in, sign-up, forgot password) as its own route group with no sidebar or top nav.
- Topic 08 — Dashboard shell — sidebar navigation: Implement a fixed sidebar with logo, nav links, and user avatar using CSS Grid or Flexbox utilities, including active-link highlighting with Next.js usePathname.
- Topic 09 — Dashboard shell — top navigation bar: Add a sticky top bar with breadcrumbs, a search input, notification bell, and user menu, and wire it into the dashboard layout.
- Topic 10 — Server components vs. client components in layouts: Know exactly which parts of a SaaS layout must be client components versus server components, and how to split them correctly.
- Topic 11 — Dark mode: Implement class-based dark mode across the entire SaaS shell using Tailwind dark: variant and a theme toggle that persists to localStorage.
- Topic 12 — Parallel routes & intercepting routes: Use Next.js parallel routes to render a modal on top of the current page without losing context — the pattern behind slide-over panels and detail drawers.
- Topic 13 — Modal & overlay patterns: Build accessible modals, drawers, and slide-overs using Tailwind transition utilities and the parallel/intercepting route pattern.
- Topic 14 — Settings layout — multi-section page: Create a settings page with a vertical tab sidebar and a content panel — the canonical SaaS settings UI.
- Topic 15 — Forms & input states: Style form controls, labels, focus rings, error states, and disabled states with Tailwind, integrated into a Next.js Server Action form submission pattern.
- Topic 16 — Data display — tables & cards: Build responsive data tables and card grids — the core content areas of any SaaS dashboard — with skeleton loaders and empty states.
- Topic 17 — Component patterns & design tokens: Extract repeated utility combinations into reusable patterns using Tailwind CSS 4 @layer components, CSS custom properties as design tokens.
- Topic 18 — Loading UI & streaming: Add per-route loading.tsx skeletons and use React Suspense boundaries to stream in dashboard panels progressively.
- Topic 19 — Error boundaries & not-found pages: Handle route-level errors and 404s with branded, layout-consistent error UIs that stay inside the dashboard shell.
- Topic 20 — Production SaaS layout — capstone: Assemble a complete, production-grade SaaS shell: marketing page, auth flow, dashboard with sidebar and top nav, settings, modal, dark mode, responsive at all breakpoints.

---

## Cluster Context

> Shared across all CI/CD exercises.
> Subagents read this section when generating or reviewing exercise 07.

- Provider: Hetzner (self-managed with kubeadm)
- Package manager: Helm
- CI: GitHub Actions
- CD: pipeline deploys to cluster via kubectl / Helm upgrade
- Registry: to be set up as part of early CI/CD exercises
- Ingress / TLS / GitOps: not yet installed — introduced progressively

---

## Continuous Improvement Log

<!--
  Reserved for the topic-advisor subagent (coming later).
  It will log topic additions, removals, and reorderings here with reasoning.
  Do not edit manually.
-->

---

## Notes

<!--
  Skills and subagents write above this line.
  Add your personal notes below — they will never be overwritten.
-->

### Personal notes
