# Exercise 01 — Easy · Topic 01: Project foundation & tooling

## Objective
Bootstrap a new Next.js 15 project using the `create-next-app` CLI with the App Router enabled. The goal is to understand what each generated file does, not just that it exists. After running the scaffold command, you should be able to explain the purpose of every file and directory at the root level — why `next.config.ts` exists, what `tsconfig.json` controls, what lives in `app/` versus `public/`, and why there is no `pages/` directory.

## Materials

Key files you will encounter after scaffolding:

- `app/` — the App Router root; everything inside here is a route or a layout
- `app/layout.tsx` — the root layout that wraps every page in the app
- `app/page.tsx` — the homepage route (`/`)
- `app/globals.css` — global stylesheet imported once in the root layout
- `next.config.ts` — Next.js configuration file (TypeScript in v15)
- `tsconfig.json` — TypeScript compiler options; note the `@/*` path alias
- `public/` — static assets served directly (images, fonts, favicons)
- `package.json` — project dependencies and npm scripts
- `.next/` — build output directory (never edit, always gitignored)

Scaffold command (choose these options when prompted):
```bash
npx create-next-app@latest . \
  --typescript \
  --eslint \
  --app \
  --no-src-dir \
  --no-tailwind \
  --import-alias "@/*"
```
> Note: we skip `--tailwind` here because Topic 01 ex-02 covers Tailwind CSS 4 installation manually — the `--tailwind` flag installs v3.

## Acceptance Criteria

- [ ] Project scaffolded with App Router (`app/` directory present, no `pages/` directory)
- [ ] TypeScript enabled (`tsconfig.json` present, all generated files use `.tsx` / `.ts`)
- [ ] ESLint configured (`eslint.config.mjs` or `.eslintrc` present)
- [ ] `@/*` import alias configured in `tsconfig.json`
- [ ] Dev server starts without errors (`npm run dev`)
- [ ] You can describe in a comment block at the top of `app/page.tsx` what each root-level file/folder does (one line each)

## Constraints

- Do not use `--tailwind` flag — Tailwind will be added manually in ex-02
- Do not use `--src-dir` — keep `app/` at the root
- Do not delete or rename any generated files for this exercise

## Suggested resources

- https://nextjs.org/docs/app/getting-started/installation
- https://nextjs.org/docs/app/getting-started/project-structure
- https://www.typescriptlang.org/tsconfig

## Niveau de rigueur

Le concept doit être compris. Le code doit fonctionner.
Les erreurs mineures de style sont acceptées.
