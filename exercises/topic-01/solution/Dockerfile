ARG NODE_VERSION=25-alpine
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

FROM base AS dependencies

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

FROM dependencies AS build

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN pnpm build

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000

# Allow the Docker container to listen on all network interfaces, not just localhost
ENV HOSTNAME="0.0.0.0"

COPY --from=build --chown=node:node /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next && chown node:node .next

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

USER node

EXPOSE 3000

CMD ["node", "server.js"]