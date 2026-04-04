# Exercise 07 — Hard · Topic 01: Project foundation & tooling

## Objective
Dockerize the Next.js application and set up a GitHub Actions pipeline that builds the Docker image and pushes it to a container registry. This is the first step in the CI/CD progression for this curriculum. No deployment to the cluster happens yet — that comes in Topic 02. The goal is to have a working, production-ready Docker image built and published automatically on every push to `main`.

## Materials

Next.js standalone output mode — produces a minimal, self-contained server bundle:
```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "standalone",
  plugins: [tailwindcss()],
};
```

Multi-stage Dockerfile for Next.js (official pattern):
```dockerfile
FROM node:22-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production runtime
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only the standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

GitHub Actions workflow skeleton:
```yaml
# .github/workflows/build.yml
name: Build and push Docker image

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ghcr.io/${{ github.repository }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

Using GitHub Container Registry (ghcr.io) requires no external account — it is built into GitHub and the `GITHUB_TOKEN` secret is automatically available in Actions.

## Acceptance Criteria

- [ ] `next.config.ts` has `output: "standalone"` configured
- [ ] A multi-stage `Dockerfile` exists at the project root following the pattern above
- [ ] `docker build -t saas-layouts .` succeeds locally and produces a runnable image
- [ ] `docker run -p 3000:3000 saas-layouts` starts the app and it is accessible at `http://localhost:3000`
- [ ] `.github/workflows/build.yml` exists and targets `ghcr.io` with the `GITHUB_TOKEN`
- [ ] Pipeline runs successfully on push to `main`: image is built and pushed to the registry
- [ ] Image tag includes the Git commit SHA (not just `latest`)
- [ ] `.dockerignore` is present and excludes `node_modules/`, `.next/`, `.git/`

## Constraints

- Use multi-stage builds — single-stage images are not acceptable (image size)
- Use `node:22-alpine` as the base image — not the full Debian node image
- The pipeline must NOT hard-code credentials — use `GITHUB_TOKEN` or repository secrets only
- Do not deploy to the cluster in this exercise — build and push only

## Suggested resources

- https://nextjs.org/docs/app/api-reference/config/next-config-js/output
- https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry
- https://github.com/docker/build-push-action

## Niveau de rigueur

Niveau production. Typage strict, gestion d'erreurs,
bonnes pratiques du framework. Le code doit pouvoir passer une PR review.

Le pipeline doit fonctionner de bout en bout.
L'image doit être construite et poussée automatiquement sur le registry.
Les fichiers Docker doivent être valides et idiomatiques.
