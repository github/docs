# Build this Moda production image in CI or from src/deployments/production/README.md.
# Most environment variables come from config/moda/configuration/*/env.yaml.
# Mirror NODE_OPTIONS there and here for defense in depth.

# Update the base image digest from the gh-base-noble package page:
# https://github.com/github/gh-base-image/pkgs/container/gh-base-image%2Fgh-base-noble
FROM ghcr.io/github/gh-base-image/gh-base-noble:20261007-171807-gaf2071665@sha256:57e57e0d0dd8cf12cbf047aa5ae7ead850f562bc66bace621598a460b803efc7 AS base
# Install curl for NodeSource setup.
# Install git for early-access and translation clones.
# Ubuntu's nodejs package lags the Node LTS release line.
# Root must install OS packages before switching to node.
# pkg-mirror-host routes apt through GitHub's package mirror but is not sensitive.
# https://thehub.github.com/epd/engineering/devops/ci/actions/setting-up-new-github-action/
RUN --mount=type=secret,id=pkg-mirror-host,target=/etc/pkg_mirror_host.txt \
  if [ -f /etc/pkg_mirror_host.txt ]; then cat /etc/pkg_mirror_host.txt >> /etc/apt/mirrorlist.txt; fi
RUN --mount=type=secret,id=apt-auth-conf,target=/etc/apt/auth.conf.d/apt_auth.conf \
  apt-get -qq update && apt-get -qq install --no-install-recommends curl git \
  && curl -sL https://deb.nodesource.com/setup_24.x | bash - \
  && apt-get install -y nodejs \
  && node --version
# Stages built FROM base inherit this ARG, so every later stage can use APP_HOME.
ARG APP_HOME="/home/node/app"
RUN useradd -ms /bin/bash node \
  && mkdir -p $APP_HOME && chown -R node:node $APP_HOME

FROM base AS clones
USER node:node
WORKDIR $APP_HOME
# Copy content inputs that the fetch script merges with early-access content.
COPY --chown=node:node content content/
COPY --chown=node:node assets assets/
COPY --chown=node:node data data/
COPY --chown=node:node --chmod=+x \
  src/deployments/production/build-scripts/*.sh build-scripts/
# Mount the PAT secret as a BuildKit file so the secret file stays out of layers.
# Fetch docs-early-access, merge it over local content, then clone translations.
# Log the fetch time when this layer runs.
RUN --mount=type=secret,id=DOCS_BOT_PAT_BASE,mode=0444 \
  echo "Don't cache this step by printing date: $(date)" && \
  . ./build-scripts/fetch-repos.sh

FROM base AS all_deps
USER node:node
WORKDIR $APP_HOME
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node patches patches/
RUN npm ci --registry https://registry.npmjs.org/

FROM all_deps AS prod_deps
RUN npm prune --omit=dev --ignore-scripts

FROM base AS build
USER node:node
WORKDIR $APP_HOME
COPY --chown=node:node src src/
COPY --chown=node:node package.json ./
COPY --chown=node:node next.config.ts ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node --from=clones $APP_HOME/data data/
COPY --chown=node:node --from=clones $APP_HOME/assets assets/
COPY --chown=node:node --from=clones $APP_HOME/content content/
COPY --chown=node:node --from=clones $APP_HOME/translations translations/
COPY --chown=node:node --from=all_deps $APP_HOME/node_modules node_modules/
RUN npm run build && rm -rf .next/cache/webpack

FROM build AS warmup_cache
RUN npm run warmup-remotejson

FROM base AS production
USER node:node
WORKDIR $APP_HOME
COPY --chown=node:node src src/
COPY --chown=node:node package.json ./
COPY --chown=node:node next.config.ts ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node --from=clones $APP_HOME/data data/
COPY --chown=node:node --from=clones $APP_HOME/assets assets/
COPY --chown=node:node --from=clones $APP_HOME/content content/
COPY --chown=node:node --from=clones $APP_HOME/translations translations/
COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules node_modules/
COPY --chown=node:node --from=build $APP_HOME/.next .next/
COPY --chown=node:node --from=warmup_cache $APP_HOME/.remotejson-cache ./
# Expose the build SHA at runtime when callers pass --build-arg BUILD_SHA=abc123.
ARG BUILD_SHA
ENV BUILD_SHA=$BUILD_SHA
# --max-old-space-size-percentage needs Node 24+ and tracks the cgroup memory limit.
# 80% leaves headroom for off-heap memory (Buffers, V8 code cache, libuv) and the OS.
ENV NODE_OPTIONS="--max-old-space-size-percentage=80"
CMD ["node_modules/.bin/tsx", "src/frame/server.ts"]
