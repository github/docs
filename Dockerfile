# This Dockerfile is used solely for production deployments to Moda
# For building this file locally, see src/deployments/production/README.md
# Environment variables are set in the Moda configuration:
#   config/moda/configuration/*/env.yaml

# ---------------------------------------------------------------
# BASE STAGE: Install linux dependencies and set up the node user
# ---------------------------------------------------------------
# To update the sha:
# https://github.com/github/gh-base-image/pkgs/container/gh-base-image%2Fgh-base-noble
FROM ghcr.io/github/gh-base-image/gh-base-noble:20250226-135630-g5b0726056 AS base

# Install curl for Node install and determining the early access branch
# Install git for cloning docs-early-access & translations repos
# Install Node.js latest LTS
# https://github.com/nodejs/release#release-schedule
# Ubuntu's apt-get install nodejs is _very_ outdated
# Must run as root
RUN apt-get -qq update && apt-get -qq install --no-install-recommends curl git \
  && curl -sL https://deb.nodesource.com/setup_22.x | bash - \
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
RUN --mount=type=secret,id=DOCS_BOT_PAT_READPUBLICKEY,mode=0444 \
  # We don't cache because Docker can't know if we need to fetch new content from remote repos
  echo "Don't cache this step by printing date: $(date)" && \
  . ./build-scripts/fetch-repos.sh

# -----------------------------------------
# DEPENDENCIES STAGE: Install node packages
# -----------------------------------------
FROM base AS dependencies
USER node:node
WORKDIR $APP_HOME

# Copy what is needed to run npm ci
COPY --chown=node:node package.json package-lock.json ./

RUN npm ci --omit=optional --registry https://registry.npmjs.org/

# -----------------------------------------
# BUILD STAGE: Prepare for production stage
# -----------------------------------------
FROM base AS build
USER node:node
WORKDIR $APP_HOME

# Source code
COPY --chown=node:node src src/
COPY --chown=node:node package.json ./
COPY --chown=node:node next.config.js ./
COPY --chown=node:node tsconfig.json ./

# From the clones stage
COPY --chown=node:node --from=clones $APP_HOME/data data/
COPY --chown=node:node --from=clones $APP_HOME/assets assets/
COPY --chown=node:node --from=clones $APP_HOME/content content/
COPY --chown=node:node --from=clones $APP_HOME/translations translations/

# From the dependencies stage
COPY --chown=node:node --from=dependencies $APP_HOME/node_modules node_modules/

# Generate build files
RUN npm run build \
  && npm run warmup-remotejson \
  && npm run precompute-pageinfo -- --max-versions 2 \
  && npm prune --production

# -------------------------------------------------
# PRODUCTION STAGE: What will run on the containers
# -------------------------------------------------
FROM base AS production
USER node:node
WORKDIR $APP_HOME

# Source code
COPY --chown=node:node src src/
COPY --chown=node:node package.json ./
COPY --chown=node:node next.config.js ./
COPY --chown=node:node tsconfig.json ./

# From clones stage
COPY --chown=node:node --from=clones $APP_HOME/data data/
COPY --chown=node:node --from=clones $APP_HOME/assets assets/
COPY --chown=node:node --from=clones $APP_HOME/content content/
COPY --chown=node:node --from=clones $APP_HOME/translations translations/

# From dependencies stage (*modified in build stage)
COPY --chown=node:node --from=build $APP_HOME/node_modules node_modules/

# From build stage
COPY --chown=node:node --from=build $APP_HOME/.next .next/
COPY --chown=node:node --from=build $APP_HOME/.remotejson-cache ./
COPY --chown=node:node --from=build $APP_HOME/.pageinfo-cache.json.br* ./

# This makes it possible to set `--build-arg BUILD_SHA=abc123`
# and it then becomes available as an environment variable in the docker run.
ARG BUILD_SHA
ENV BUILD_SHA=$BUILD_SHA

# Entrypoint to start the server
# Note: Currently we have to use tsx because
# we have a mix of `.ts` and `.js` files with multiple import patterns
CMD ["node_modules/.bin/tsx", "src/frame/server.ts"]
