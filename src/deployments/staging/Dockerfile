# --------------------------------------------------------------------------------
# BASE IMAGE
# --------------------------------------------------------------------------------
# To update the sha:
# https://github.com/github/gh-base-image/pkgs/container/gh-base-image%2Fgh-base-noble
FROM ghcr.io/github/gh-base-image/gh-base-noble:20250108-185521-gcd4825276 AS base

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

# Copy in scripts and .env
COPY .env .
COPY build-scripts/*.sh ./build-scripts/

# Make scripts executable
RUN chmod +x build-scripts/*.sh

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

# Give node user access to the cloned repo & scripts
RUN chown -R node:node $APP_HOME/repo
RUN chown -R node:node $APP_HOME/build-scripts
RUN chown -R node:node $APP_HOME/.env

# Change back to node to make sure we don't run anything as the root user
USER node

# ---------------
# ALL DEPS Image
# ---------------
FROM node:22-alpine@sha256:c13b26e7e602ef2f1074aef304ce6e9b7dd284c419b35d89fcf3cc8e44a8def9 AS all_deps

ARG APP_HOME=/home/node/app
WORKDIR $APP_HOME

# Copy what is needed to run npm ci
COPY --from=base $APP_HOME/repo/package.json $APP_HOME/repo/package-lock.json ./

RUN npm ci --no-optional --registry https://registry.npmjs.org/

# Sharp requires optional deps: https://github.com/lovell/sharp/issues/4001
RUN npm install --cpu=x64 --os=linux --include=optional sharp

# ---------------
# BUILDER Image
# ---------------
FROM all_deps AS builder

ARG APP_HOME=/home/node/app
WORKDIR $APP_HOME

# Copy what is needed to:
# 1. Build the app
# 2. run warmup-remotejson script
# 3. run precompute-pageinfo script
# Dependencies
COPY --from=all_deps $APP_HOME/package.json ./
COPY --from=all_deps $APP_HOME/node_modules ./node_modules
# Content with merged early-access content
COPY --from=base $APP_HOME/repo/content ./content
COPY --from=base $APP_HOME/repo/data ./data
COPY --from=base $APP_HOME/repo/assets ./assets
# Source code
COPY --from=base $APP_HOME/repo/src ./src
COPY --from=base $APP_HOME/repo/next.config.js ./
COPY --from=base $APP_HOME/repo/tsconfig.json ./

# 1. Build
RUN npm run build

# 2. Warm up the remotejson cache
RUN npm run warmup-remotejson

# 3. Precompute the pageinfo cache
RUN npm run precompute-pageinfo -- --max-versions 2

# Prune deps for prod image
RUN npm prune --production

# --------------------------------------------------------------------------------
# STAGING IMAGE
# --------------------------------------------------------------------------------
FROM base AS staging

ARG APP_HOME=/home/node/app
WORKDIR $APP_HOME

# Copy translations and build scripts from base image
COPY --from=base $APP_HOME/repo/translations ./translations
COPY --from=base $APP_HOME/build-scripts ./build-scripts
COPY --from=base $APP_HOME/.env ./
# Copy prod dependencies from deps image
COPY --from=all_deps $APP_HOME/node_modules ./node_modules
# Copy built artifacts from builder image
COPY --from=builder $APP_HOME/.next ./.next
COPY --from=builder $APP_HOME/.remotejson-cache ./.remotejson-cache
COPY --from=builder $APP_HOME/.pageinfo-cache.json.br* ./.pageinfo-cache.json.br

# Copy source code needed to run the server
COPY --from=builder $APP_HOME/package.json ./
## Content
COPY --from=builder $APP_HOME/content ./content
COPY --from=builder $APP_HOME/data ./data
COPY --from=builder $APP_HOME/assets ./assets
## Code
COPY --from=builder $APP_HOME/src ./src
## Config
COPY --from=builder $APP_HOME/next.config.js ./
COPY --from=builder $APP_HOME/tsconfig.json ./

CMD ["./build-scripts/server-entrypoint.sh"]
