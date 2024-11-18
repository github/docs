# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production

# --------------------------------------------------------------------------------
# BASE IMAGE
# --------------------------------------------------------------------------------
# To update the sha, run `docker pull node:$VERSION-alpine`
# look for something like: `Digest: sha256:0123456789abcdef`
FROM node:20-alpine@sha256:66f7f89199daea88a6b5d5aadaa6d20f7a16a90fc35274deda8e901e267d4bd7 AS base

# This directory is owned by the node user
ARG APP_HOME=/home/node/app

# Make sure we don't run anything as the root user
USER node

WORKDIR $APP_HOME


# ---------------
# ALL DEPS
# ---------------
FROM base AS all_deps

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci --no-optional --registry https://registry.npmjs.org/

# For Next.js v12+
# This the appropriate necessary extra for node:VERSION-alpine
# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save


# ---------------
# PROD DEPS
# ---------------
FROM all_deps AS prod_deps

RUN npm prune --production


# ---------------
# BUILDER
# ---------------
FROM all_deps AS builder

COPY src ./src
# The star is because it's an optional directory
COPY .remotejson-cache* ./.remotejson-cache
# The star is because it's an optional file
COPY .pageinfo-cache.json.br* ./.pageinfo-cache.json.br
# Certain content is necessary for being able to build
COPY content/index.md ./content/index.md
COPY content/rest ./content/rest
COPY data ./data

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json

RUN npm run build

# --------------------------------------------------------------------------------
# PREVIEW IMAGE - no translations
# --------------------------------------------------------------------------------

FROM base AS preview

# Copy just prod dependencies
COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules

# Copy our front-end code
COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next

# We should always be running in production mode
ENV NODE_ENV=production

# Preferred port for server.js
ENV PORT=4000

ENV ENABLED_LANGUAGES="en"

# This makes it possible to set `--build-arg BUILD_SHA=abc123`
# and it then becomes available as an environment variable in the docker run.
ARG BUILD_SHA
ENV BUILD_SHA=$BUILD_SHA

# Copy only what's needed to run the server
COPY --chown=node:node package.json ./
COPY --chown=node:node assets ./assets
COPY --chown=node:node content ./content
COPY --chown=node:node src ./src
COPY --chown=node:node .remotejson-cache* ./.remotejson-cache
COPY --chown=node:node .pageinfo-cache.json.br* ./.pageinfo-cache.json.br
COPY --chown=node:node data ./data
COPY --chown=node:node next.config.js ./
COPY --chown=node:node tsconfig.json ./

EXPOSE $PORT

CMD ["node_modules/.bin/tsx", "src/frame/server.ts"]

# --------------------------------------------------------------------------------
# PRODUCTION IMAGE - includes all translations
# --------------------------------------------------------------------------------
FROM preview AS production

# Override what was set for previews
# Make this match the default of `Object.keys(languages)` in src/languages/lib/languages.js
ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"

# Copy in all translations
COPY --chown=node:node translations ./translations
