# This Dockerfile is used solely for production deployments to Moda
# For staging deployments, see src/deployments/staging/Dockerfile
# For building this file locally, see src/deployments/production/README.md

# --------------------------------------------------------------------------------
# BASE IMAGE
# --------------------------------------------------------------------------------
# To update the sha:
# https://github.com/github/gh-base-image/pkgs/container/gh-base-image%2Fgh-base-noble
FROM ghcr.io/github/gh-base-image/gh-base-noble:20250131-172559-g0fd5a2edc AS base

# Install git for cloning docs-early-access & translations repos
# Install curl for determining the early access branch
RUN apt-get -qq update && apt-get -qq install --no-install-recommends git curl

# Install Node.js latest LTS
# https://github.com/nodejs/release#release-schedule
# Ubuntu's apt-get install nodejs is _very_ outdated
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get install -y nodejs
RUN node --version

# This directory is owned by the node user
RUN useradd -ms /bin/bash node
ARG APP_HOME=/home/node/app
RUN mkdir -p $APP_HOME && chown -R node:node $APP_HOME
WORKDIR $APP_HOME

# Switch to root to ensure we have permissions to copy, chmod, and install
USER root

# Copy in build scripts
COPY src/deployments/production/build-scripts/*.sh ./build-scripts/

# Make scripts executable
RUN chmod +x build-scripts/*.sh

# We need to copy over content that will be merged with early-access
COPY content ./content
COPY assets ./assets
COPY data ./data

# Use the mounted --secret to:
# - 1. Fetch the docs-internal repo
# - 2. Fetch the docs-early-access repo & override docs-internal with early access content
# - 3. Fetch each translations repo to the repo/translations directory
# We use --mount-type=secret to avoid the secret being copied into the image layers for security
# The secret passed via --secret can only be used in this RUN command
RUN --mount=type=secret,id=DOCS_BOT_PAT_READPUBLICKEY \
  # We don't cache because Docker can't know if we need to fetch new content from remote repos
  echo "Don't cache this step by printing date: $(date)" && \
  . ./build-scripts/fetch-repos.sh

# Give node user access to the copied content since we cloned as root
RUN chown -R node:node $APP_HOME/content
RUN chown -R node:node $APP_HOME/assets
RUN chown -R node:node $APP_HOME/data
# Give node user access to translations repos
RUN chown -R node:node $APP_HOME/translations

# Change back to node to make sure we don't run anything as the root user
USER node

# ---------------
# ALL DEPS Image
# ---------------
FROM base AS all_deps

ARG APP_HOME=/home/node/app
USER node
WORKDIR $APP_HOME

# Copy what is needed to run npm ci
COPY --chown=node:node package.json package-lock.json ./

RUN npm ci --no-optional --registry https://registry.npmjs.org/

# ---------------
# BUILDER Image
# ---------------
FROM all_deps AS builder

ARG APP_HOME=/home/node/app
USER node
WORKDIR $APP_HOME

# Copy what is needed to:
# 1. Build the app
# 2. run warmup-remotejson script
# 3. run precompute-pageinfo script
# Dependencies
COPY --chown=node:node --from=all_deps $APP_HOME/node_modules $APP_HOME/node_modules
# Content with merged early-access content
COPY --chown=node:node --from=base $APP_HOME/data ./data
COPY --chown=node:node --from=base $APP_HOME/assets ./assets
COPY --chown=node:node --from=base $APP_HOME/content ./content
# Source code
COPY --chown=node:node --from=all_deps $APP_HOME/package.json ./
COPY src ./src
COPY next.config.js ./
COPY tsconfig.json ./

# 1. Build
RUN npm run build

# 2. Warm up the remotejson cache
RUN npm run warmup-remotejson

# 3. Precompute the pageinfo cache
RUN npm run precompute-pageinfo -- --max-versions 2

# Prune deps for prod image
RUN npm prune --production

# --------------------------------------------------------------------------------
# PRODUCTION IMAGE
# --------------------------------------------------------------------------------
FROM base AS production

ARG APP_HOME=/home/node/app
USER node
WORKDIR $APP_HOME

# Copy the content with merged early-access content
COPY --chown=node:node --from=base $APP_HOME/data ./data
COPY --chown=node:node --from=base $APP_HOME/assets ./assets
COPY --chown=node:node --from=base $APP_HOME/content ./content

# Include cloned translations
COPY --chown=node:node --from=base $APP_HOME/translations ./translations

# Copy prod dependencies
COPY --chown=node:node --from=builder $APP_HOME/package.json ./
COPY --chown=node:node --from=builder $APP_HOME/node_modules $APP_HOME/node_modules

# Copy built artifacts needed at runtime for the server
COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next

# Copy cache files generated during build scripts
COPY --chown=node:node --from=builder $APP_HOME/.remotejson-cache ./.remotejson-cache
COPY --chown=node:node --from=builder $APP_HOME/.pageinfo-cache.json.br* ./.pageinfo-cache.json.br

# Copy only what's needed to run the server
COPY --chown=node:node --from=builder $APP_HOME/src ./src
COPY --chown=node:node --from=builder $APP_HOME/.remotejson-cache ./.remotejson-cache
COPY --chown=node:node --from=builder $APP_HOME/.pageinfo-cache.json.br* ./.pageinfo-cache.json.br
COPY --chown=node:node --from=builder $APP_HOME/next.config.js ./
COPY --chown=node:node --from=builder $APP_HOME/tsconfig.json ./

# - - -
# Environment variables are set in the Moda
# configuration: config/moda/configuration/*/env.yaml
# - - -

# This makes it possible to set `--build-arg BUILD_SHA=abc123`
# and it then becomes available as an environment variable in the docker run.
ARG BUILD_SHA
ENV BUILD_SHA=$BUILD_SHA

# Entrypoint to start the server
# Note: Currently we have to use tsx because we have a mix of `.ts` and `.js` files with multiple import patterns
CMD ["node_modules/.bin/tsx", "src/frame/server.ts"]
