# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production

# --------------------------------------------------------------------------------
# BASE IMAGE
# --------------------------------------------------------------------------------
FROM node:17.7.1-alpine@sha256:8c62619815dd2d7642f9e9c7f30d7016249a41175dfca0aaf248171960e4cc80 as base

# This directory is owned by the node user
ARG APP_HOME=/home/node/app

# Make sure we don't run anything as the root user
USER node

WORKDIR $APP_HOME


# ---------------
# ALL DEPS
# ---------------
FROM base as all_deps

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci --no-optional --registry https://registry.npmjs.org/

# For Next.js v12+
# This the appropriate necessary extra for node:16-alpine
# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
# RUN npm i @next/swc-linux-x64-musl --no-save


# ---------------
# PROD DEPS
# ---------------
FROM all_deps as prod_deps

RUN npm prune --production


# ---------------
# BUILDER
# ---------------
FROM all_deps as builder

COPY stylesheets ./stylesheets
COPY pages ./pages
COPY components ./components
COPY lib ./lib
# One part of the build relies on this content file to pull all-products
COPY content/index.md ./content/index.md

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json
COPY next-env.d.ts ./next-env.d.ts

RUN npm run build

# --------------------------------------------------------------------------------
# PREVIEW IMAGE - no translations
# --------------------------------------------------------------------------------

FROM base as preview

# Copy just prod dependencies
COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules

# Copy our front-end code
COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next

# We should always be running in production mode
ENV NODE_ENV production

# Whether to hide iframes, add warnings to external links
ENV AIRGAP false

# Preferred port for server.mjs
ENV PORT 4000

ENV ENABLED_LANGUAGES "en"

# Copy only what's needed to run the server
COPY --chown=node:node package.json ./
COPY --chown=node:node assets ./assets
COPY --chown=node:node includes ./includes
COPY --chown=node:node content ./content
COPY --chown=node:node lib ./lib
COPY --chown=node:node middleware ./middleware
COPY --chown=node:node feature-flags.json ./
COPY --chown=node:node data ./data
COPY --chown=node:node next.config.js ./
COPY --chown=node:node server.mjs ./server.mjs

EXPOSE $PORT

CMD ["node", "server.mjs"]

# --------------------------------------------------------------------------------
# PRODUCTION IMAGE - includes all translations
# --------------------------------------------------------------------------------
FROM preview as production

# Copy in all translations
COPY --chown=node:node translations ./translations
