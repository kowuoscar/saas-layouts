# Exercise 06 — Hard · Topic 01: Project foundation & tooling

## Objective
Harden the project scaffold to production standards. A freshly scaffolded Next.js project contains boilerplate, permissive TypeScript defaults, and no path alias discipline. This exercise covers: stripping all boilerplate, tightening `tsconfig.json` for strict mode, enforcing consistent imports via the `@/*` alias, configuring ESLint with the Next.js ruleset, and ensuring `npm run build` produces zero warnings. The result should be a clean, minimal foundation that a production team would actually commit as the starting point of a SaaS project.

## Materials

Strict TypeScript compiler options to add to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

ESLint flat config (`eslint.config.mjs`) — Next.js 15 generates this natively with `create-next-app`. `eslint-config-next` now ships flat config exports directly, so no `FlatCompat` bridge is needed:
```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
```

Absolute import alias usage (must be consistent throughout the project):
```tsx
// Good — uses the @/* alias
import { Button } from "@/components/ui/button";

// Bad — relative path that breaks on file moves
import { Button } from "../../components/ui/button";
```

Boilerplate to remove from a fresh scaffold:
- All content inside `app/page.tsx` (replace with a minimal placeholder)
- The default SVG imports and styles in `app/globals.css`
- Unused imports from `next/image`, `next/font` if not intentionally kept

## Acceptance Criteria

- [ ] `tsconfig.json` has `"strict": true` plus at least 3 additional strict options
- [ ] `npm run build` completes with zero errors and zero TypeScript errors
- [ ] `npm run lint` completes with zero warnings and zero errors
- [ ] All imports in the project use the `@/*` alias — no relative paths going up more than one level
- [ ] `app/page.tsx` contains no Next.js scaffold boilerplate (no default SVG imports, no hardcoded Vercel/Next.js links)
- [ ] `app/globals.css` contains only the Tailwind import and `@theme`/`@layer` blocks from ex-05 — no scaffold remnants
- [ ] A `.gitignore` is present and includes `.next/`, `node_modules/`, and `.env*.local`

## Constraints

- Do not disable ESLint rules with `// eslint-disable` comments — fix the issues instead
- Do not use `@ts-ignore` or `@ts-expect-error` — fix the TypeScript errors instead
- Do not add `"skipLibCheck": true` as a workaround for type errors in your own code
- All component files must have explicit return type annotations

## Suggested resources

- https://www.typescriptlang.org/tsconfig#strict
- https://nextjs.org/docs/app/api-reference/config/eslint
- https://typescript-eslint.io/rules/

## Niveau de rigueur

Niveau production. Typage strict, gestion d'erreurs,
bonnes pratiques du framework. Le code doit pouvoir passer une PR review.
