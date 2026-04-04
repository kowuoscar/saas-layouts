ARG NODE_VERSION=24.13.0-slim
ARG PNPM_VERSION=10.18.3

FROM node:${NODE_VERSION} AS base

WORKDIR /app

# Docker BuildKit cache mount
# --mount Attach a filesystem mount for the duration of the RUN instruction.
# type=cache The mount type - a persistent cache directory managed by BuildKit.
# target=/root/.npm The path inside the container where the cache will be mounted.
# The cache is never written to the final image, it only exists during the build process to speed up subsequent builds by caching npm packages.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

FROM base AS deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

FROM deps AS build

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NODE_ENV=production

RUN pnpm build

FROM base AS final

ENV NODE_ENV=production
ENV PORT=3000

USER node

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["pnpm", "start"]