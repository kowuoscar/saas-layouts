# Learning Project — Next.js 15 + Tailwind CSS 4

## Stack

| Technology   | Version | Role                        |
| ------------ | ------- | --------------------------- |
| Next.js      | 15      | Framework, routing, layouts |
| Tailwind CSS | 4       | Utility-first styling       |

## Learner context

- Knows programming and the basics of the main languages involved
- New to this specific stack — assume no prior knowledge of these tools
- Goal: reach production-level proficiency by end of the curriculum

## Learning path

01. Project foundation & tooling — Set up a Next.js 15 App Router project with Tailwind CSS 4, understanding the new CSS-first configuration and the role of each file in the project scaffold. | Next.js 15, Tailwind CSS 4
02. Utility fundamentals for SaaS UI — Master the core Tailwind spacing, color, typography, and sizing utilities that form the visual vocabulary of every SaaS interface. | Tailwind CSS 4
03. App Router file conventions & route segments — Understand page.tsx, layout.tsx, loading.tsx, error.tsx, and not-found.tsx and how nested route segments map to nested UI shells. | Next.js 15
04. Root layout & global shell — Build the outermost HTML shell — fonts, global styles, providers — and learn how the root layout wraps every page in a SaaS app. | Next.js 15, Tailwind CSS 4
05. Responsive design & mobile-first layout — Apply Tailwind breakpoint prefixes to build layouts that collapse gracefully from desktop dashboards to mobile views. | Tailwind CSS 4, Next.js 15
06. Marketing / public layout — Create the unauthenticated layout shell — top navigation bar, hero section, footer — as a separate nested layout segment from the app shell. | Next.js 15, Tailwind CSS 4
07. Auth layout — Build a centered, minimal auth layout (sign-in, sign-up, forgot password) as its own route group with no sidebar or top nav. | Next.js 15, Tailwind CSS 4
08. Dashboard shell — sidebar navigation — Implement a fixed sidebar with logo, nav links, and user avatar using CSS Grid or Flexbox utilities, including active-link highlighting with Next.js usePathname. | Next.js 15, Tailwind CSS 4
09. Dashboard shell — top navigation bar — Add a sticky top bar with breadcrumbs, a search input, notification bell, and user menu, and wire it into the dashboard layout. | Next.js 15, Tailwind CSS 4
10. Server components vs. client components in layouts — Know exactly which parts of a SaaS layout must be client components versus server components, and how to split them correctly. | Next.js 15
11. Dark mode — Implement class-based dark mode across the entire SaaS shell using Tailwind dark: variant and a theme toggle that persists to localStorage. | Tailwind CSS 4, Next.js 15
12. Parallel routes & intercepting routes — Use Next.js parallel routes to render a modal on top of the current page without losing context — the pattern behind slide-over panels and detail drawers. | Next.js 15
13. Modal & overlay patterns — Build accessible modals, drawers, and slide-overs using Tailwind transition utilities and the parallel/intercepting route pattern. | Next.js 15, Tailwind CSS 4
14. Settings layout — multi-section page — Create a settings page with a vertical tab sidebar and a content panel — the canonical SaaS settings UI. | Next.js 15, Tailwind CSS 4
15. Forms & input states — Style form controls, labels, focus rings, error states, and disabled states with Tailwind, integrated into a Next.js Server Action form submission pattern. | Tailwind CSS 4, Next.js 15
16. Data display — tables & cards — Build responsive data tables and card grids — the core content areas of any SaaS dashboard — with skeleton loaders and empty states. | Tailwind CSS 4, Next.js 15
17. Component patterns & design tokens — Extract repeated utility combinations into reusable patterns using Tailwind CSS 4 @layer components, CSS custom properties as design tokens. | Tailwind CSS 4, Next.js 15
18. Loading UI & streaming — Add per-route loading.tsx skeletons and use React Suspense boundaries to stream in dashboard panels progressively. | Next.js 15, Tailwind CSS 4
19. Error boundaries & not-found pages — Handle route-level errors and 404s with branded, layout-consistent error UIs that stay inside the dashboard shell. | Next.js 15, Tailwind CSS 4
20. Production SaaS layout — capstone — Assemble a complete, production-grade SaaS shell: marketing page, auth flow, dashboard with sidebar and top nav, settings, modal, dark mode, responsive at all breakpoints. | Next.js 15, Tailwind CSS 4

## Project conventions

- All code in strict TypeScript where applicable
- No explicit `any`
- Naming: PascalCase for components, camelCase for functions and variables
- Follow framework conventions for file naming

## Useful commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Exercise quality standards

- **Easy**: concept understood, code works, syntax correct
- **Medium**: recommended patterns followed, no obvious anti-patterns
- **Hard**: production-level — strict typing, error handling, framework best practices

## Cluster context

- Provider: Hetzner (self-managed with kubeadm)
- Package manager: Helm
- CI: GitHub Actions
- CD: pipeline deploys to cluster via kubectl / Helm upgrade
- Registry: to be set up as part of early CI/CD exercises
- Ingress / TLS / GitOps: not yet installed — introduced progressively

## State file

`progress.md` at the project root is the single source of truth.
Never assume progress without reading it first.

## Teaching language

All concept explanations, topic introductions, and exercise briefs are in French.
All file content, code, comments, and CLI output stay in English.
