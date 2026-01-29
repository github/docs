# This Dockerfile is used solely for production deployments to Moda
# For building this file locally, see src/deployments/production/README.md
# Environment variables are set in the Moda configuration:
#   config/moda/configuration/*/env.yaml

# ---------------------------------------------------------------
# BASE STAGE: Install linux dependencies and set up the node user
# ---------------------------------------------------------------
# To update the sha:
# https://github.com/github/gh-base-image/pkgs/container/gh-base-image%2Fgh-base-noble
FROM ghcr.io/github/gh-base-image/gh-base-noble:20260128-000359-ga6d0dc7c0@sha256:e2dd6aa64dc4b3fd0fee388a817b2ce0ce239f1da31fd628c359a74832abdfcb AS base

# Install curl for Node install and determining the early access branch
# Install git for cloning docs-early-access & translations repos
# Install Node.js latest LTS
# https://github.com/nodejs/release#release-schedule
# Ubuntu's apt-get install nodejs is _very_ outdated
# Must run as root
RUN apt-get -qq update && apt-get -qq install --no-install-recommends curl git \
  && curl -sL https://deb.nodesource.com/setup_24.x | bash - \
  && apt-get install -y nodejs \
  && node --version

# Create the node user and home directory
ARG APP_HOME="/home/node/app" # Define in base so all child stages inherit it
RUN useradd -ms /bin/bash node \
  && mkdir -p $APP_HOME && chown -R node:node $APP_HOME

# -----------------------------------------------------------------
# CLONES STAGE: Clone docs-internal, early-access, and translations
# -----------------------------------------------------------------
FROM base AS clones
USER node:node
WORKDIR $APP_HOME

# We need to copy over content that will be merged with early-access
COPY --chown=node:node content content/
COPY --chown=node:node assets assets/
COPY --chown=node:node data data/

# Copy in build scripts and make them executable
COPY --chown=node:node --chmod=+x \
  src/deployments/production/build-scripts/*.sh build-scripts/

# Use the mounted --secret to:
# - 1. Fetch the docs-internal repo
# - 2. Fetch the docs-early-access repo & override docs-internal with early access content
# - 3. Fetch each translations repo to the repo/translations directory
# We use --mount-type=secret to avoid the secret being copied into the image layers for security
# The secret passed via --secret can only be used in this RUN command
RUN --mount=type=secret,id=DOCS_BOT_PAT_BASE,mode=0444 \
  # We don't cache because Docker can't know if we need to fetch new content from remote repos
  echo "Don't cache this step by printing date: $(date)" && \
  . ./build-scripts/fetch-repos.sh

# ------------------------------------------------
# PROD_DEPS STAGE: Install production dependencies
# ------------------------------------------------
FROM base AS prod_deps
USER node:node
WORKDIR $APP_HOME

# Copy what is needed to run npm ci
COPY --chown=node:node package.json package-lock.json ./

# Install only production dependencies (skip scripts to avoid husky)
RUN npm ci --omit=dev --ignore-scripts --registry https://registry.npmjs.org/

# ------------------------------------------------------------
# ALL_DEPS STAGE: Install all dependencies on top of prod deps
# ------------------------------------------------------------
FROM prod_deps AS all_deps

# Install dev dependencies on top of production ones
RUN npm ci --registry https://registry.npmjs.org/

# ----------------------------------
# BUILD STAGE: Build the application
# ----------------------------------
FROM base AS build
USER node:node
WORKDIR $APP_HOME

# Source code
COPY --chown=node:node src src/
COPY --chown=node:node package.json ./
COPY --chown=node:node next.config.ts ./
COPY --chown=node:node tsconfig.json ./

# From the clones stage
COPY --chown=node:node --from=clones $APP_HOME/data data/
COPY --chown=node:node --from=clones $APP_HOME/assets assets/
COPY --chown=node:node --from=clones $APP_HOME/content content/
COPY --chown=node:node --from=clones $APP_HOME/translations translations/

# From the all_deps stage (need dev deps for build)
COPY --chown=node:node --from=all_deps $APP_HOME/node_modules node_modules/

# Build the application
RUN npm run build

# ---------------------------------------------
# WARMUP_CACHE STAGE: Warm up remote JSON cache
# ---------------------------------------------
FROM build AS warmup_cache

# Generate remote JSON cache
RUN npm run warmup-remotejson

# --------------------------------------
# PRECOMPUTE STAGE: Precompute page info
# --------------------------------------
FROM build AS precompute_stage

# Generate precomputed page info
RUN npm run precompute-pageinfo -- --max-versions 2

# -------------------------------------------------
# PRODUCTION STAGE: What will run on the containers
# -------------------------------------------------
FROM base AS production
USER node:node
WORKDIR $APP_HOME

# Source code
COPY --chown=node:node src src/
COPY --chown=node:node package.json ./
COPY --chown=node:node next.config.ts ./
COPY --chown=node:node tsconfig.json ./

# From clones stage
COPY --chown=node:node --from=clones $APP_HOME/data data/
COPY --chown=node:node --from=clones $APP_HOME/assets assets/
COPY --chown=node:node --from=clones $APP_HOME/content content/
COPY --chown=node:node --from=clones $APP_HOME/translations translations/

# From prod_deps stage (production-only node_modules)
COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules node_modules/

# From build stage
COPY --chown=node:node --from=build $APP_HOME/.next .next/

# From warmup_cache stage
COPY --chown=node:node --from=warmup_cache $APP_HOME/.remotejson-cache ./

# From precompute_stage
COPY --chown=node:node --from=precompute_stage $APP_HOME/.pageinfo-cache.json.br* ./

# This makes it possible to set `--build-arg BUILD_SHA=abc123`
# and it then becomes available as an environment variable in the docker run.
ARG BUILD_SHA
ENV BUILD_SHA=$BUILD_SHA

# Entrypoint to start the server
CMD ["node_modules/.bin/tsx", "src/frame/server.ts"]
