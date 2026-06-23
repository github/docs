# This Dockerfile is used solely for production deployments to Moda
# For building this file locally, see src/deployments/production/README.md
# Most environment variables are set in the Moda configuration:
#   config/moda/configuration/*/env.yaml
# V8 heap sizing is set here via NODE_OPTIONS and mirrored in
# the Moda config files for defense-in-depth.

# ---------------------------------------------------------------
# BASE STAGE: Install linux dependencies and set up the node user
# ---------------------------------------------------------------
# To update the sha:
# https://github.com/github/gh-base-image/pkgs/container/gh-base-image%2Fgh-base-noble
FROM ghcr.io/github/gh-base-image/gh-base-noble:20260616-174421-gbe30bd25c@sha256:ff51e3a814bf958736588a809c5adc5cc15fe6c74bdb701296a08f86691bc67b AS base

# Install curl for Node install and determining the early access branch
# Install git for cloning docs-early-access & translations repos
# Install Node.js latest LTS
# https://github.com/nodejs/release#release-schedule
# Ubuntu's apt-get install nodejs is _very_ outdated
# Must run as root

# From https://thehub.github.com/epd/engineering/devops/ci/actions/setting-up-new-github-action/
# We passed pkg-mirror-host as a secret to the build but it is not sensitive data.
RUN --mount=type=secret,id=pkg-mirror-host,target=/etc/pkg_mirror_host.txt \
  if [ -f /etc/pkg_mirror_host.txt ]; then cat /etc/pkg_mirror_host.txt >> /etc/apt/mirrorlist.txt; fi

RUN --mount=type=secret,id=apt-auth-conf,target=/etc/apt/auth.conf.d/apt_auth.conf \
  apt-get -qq update && apt-get -qq install --no-install-recommends curl git \
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

# Generate precomputed page info. Only English + free-pro-team@latest
# permalinks are cached; cache misses for older versions and translated
# pages fall through to runtime compute (which is cheap and Fastly-cached
# per pathname after the first hit).
RUN npm run precompute-pageinfo -- --max-versions 1

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

# V8 heap limit as a percentage of the container cgroup memory limit.
# Uses --max-old-space-size-percentage (Node 24+) so the heap adapts
# automatically when K8s memory limits change. 80% leaves ~20% headroom
# for off-heap memory (Buffers, V8 code cache, libuv) and OS overhead.
# Raised from 75% on advice from performance engineering to reduce GC
# pressure during traffic spikes.
ENV NODE_OPTIONS="--max-old-space-size-percentage=80"

# Entrypoint to start the server
CMD ["node_modules/.bin/tsx", "src/frame/server.ts"]
