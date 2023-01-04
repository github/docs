For information on planned features and products, see the [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %}).
github
/
docs
Public
Code
Issues
96
Pull requests
254
Discussions
Actions
Projects
3
Security
Insights
Bump node from 16.18.0-alpine to 19.1.0-alpine
Bumps node from 16.18.0-alpine to 19.1.0-alpine.

---
updated-dependencies:
- dependency-name: node
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com>
 dependabot/docker/node-19.1.0-alpine (#22152, HaTin79/docs#18, Winlove0710/docs#4, diberry/docs-1#1)
@dependabot
dependabot[bot] committed on Nov 17, 2022 
1 parent c9f0462 commit 08de05cc0ce9f9d5775d54b1db23e0d29bd8a5f3
Show file tree Hide file tree
Showing 2 changed files with 2 additions and 2 deletions.
  2  
Dockerfile
# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production	# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# BASE IMAGE	# BASE IMAGE
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
FROM node:16.18.0-alpine@sha256:f16544bc93cf1a36d213c8e2efecf682e9f4df28429a629a37aaf38ecfc25cf4 as base	FROM node:19.1.0-alpine@sha256:c59fb39150e4a7ae14dfd42d3f9874398c7941784b73049c2d274115f00d36c8 as base


# This directory is owned by the node user	# This directory is owned by the node user
ARG APP_HOME=/home/node/app	ARG APP_HOME=/home/node/app
# Make sure we don't run anything as the root user	# Make sure we don't run anything as the root user
USER node	USER node
WORKDIR $APP_HOME	WORKDIR $APP_HOME
# ---------------	# ---------------
# ALL DEPS	# ALL DEPS
# ---------------	# ---------------
FROM base as all_deps	FROM base as all_deps
COPY --chown=node:node package.json package-lock.json ./	COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --no-optional --registry https://registry.npmjs.org/	RUN npm ci --no-optional --registry https://registry.npmjs.org/
# For Next.js v12+	# For Next.js v12+
# This the appropriate necessary extra for node:16-alpine	# This the appropriate necessary extra for node:16-alpine
# Other options are https://www.npmjs.com/search?q=%40next%2Fswc	# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
RUN npm i @next/swc-linux-x64-musl --no-save	RUN npm i @next/swc-linux-x64-musl --no-save
# ---------------	# ---------------
# PROD DEPS	# PROD DEPS
# ---------------	# ---------------
FROM all_deps as prod_deps	FROM all_deps as prod_deps
RUN npm prune --production	RUN npm prune --production
# ---------------	# ---------------
# BUILDER	# BUILDER
# ---------------	# ---------------
FROM all_deps as builder	FROM all_deps as builder
COPY stylesheets ./stylesheets	COPY stylesheets ./stylesheets
COPY pages ./pages	COPY pages ./pages
COPY components ./components	COPY components ./components
COPY lib ./lib	COPY lib ./lib
# Certain content is necessary for being able to build	# Certain content is necessary for being able to build
COPY content/index.md ./content/index.md	COPY content/index.md ./content/index.md
COPY content/rest ./content/rest	COPY content/rest ./content/rest
COPY data ./data	COPY data ./data
COPY next.config.js ./next.config.js	COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json	COPY tsconfig.json ./tsconfig.json
RUN npm run build	RUN npm run build
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# PREVIEW IMAGE - no translations	# PREVIEW IMAGE - no translations
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
FROM base as preview	FROM base as preview
# Copy just prod dependencies	# Copy just prod dependencies
COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules	COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules
# Copy our front-end code	# Copy our front-end code
COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next	COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next
# We should always be running in production mode	# We should always be running in production mode
ENV NODE_ENV production	ENV NODE_ENV production
# Preferred port for server.js	# Preferred port for server.js
ENV PORT 4000	ENV PORT 4000
ENV ENABLED_LANGUAGES "en"	ENV ENABLED_LANGUAGES "en"
# This makes it possible to set `--build-arg BUILD_SHA=abc123`	# This makes it possible to set `--build-arg BUILD_SHA=abc123`
# and it then becomes available as an environment variable in the docker run.	# and it then becomes available as an environment variable in the docker run.
ARG BUILD_SHA	ARG BUILD_SHA
ENV BUILD_SHA=$BUILD_SHA	ENV BUILD_SHA=$BUILD_SHA
# Copy only what's needed to run the server	# Copy only what's needed to run the server
COPY --chown=node:node package.json ./	COPY --chown=node:node package.json ./
COPY --chown=node:node assets ./assets	COPY --chown=node:node assets ./assets
COPY --chown=node:node content ./content	COPY --chown=node:node content ./content
COPY --chown=node:node lib ./lib	COPY --chown=node:node lib ./lib
COPY --chown=node:node middleware ./middleware	COPY --chown=node:node middleware ./middleware
COPY --chown=node:node data ./data	COPY --chown=node:node data ./data
COPY --chown=node:node next.config.js ./	COPY --chown=node:node next.config.js ./
COPY --chown=node:node server.js ./server.js	COPY --chown=node:node server.js ./server.js
COPY --chown=node:node start-server.js ./start-server.js	COPY --chown=node:node start-server.js ./start-server.js
EXPOSE $PORT	EXPOSE $PORT
CMD ["node", "server.js"]	CMD ["node", "server.js"]
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# PRODUCTION IMAGE - includes all translations	# PRODUCTION IMAGE - includes all translations
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
FROM preview as production	FROM preview as production
# Copy in all translations	# Copy in all translations
COPY --chown=node:node translations ./translations	COPY --chown=node:node translations ./translations
 2  
Dockerfile.openapi_decorator
@@ -1,4 +1,4 @@
FROM node:14-alpine	FROM node:19-alpine


RUN apk add --no-cache git python make g++	RUN apk add --no-cache git python make g++


WORKDIR /openapi-check	WORKDIR /openapi-check
RUN chown node:node /openapi-check -R	RUN chown node:node /openapi-check -R
USER node	USER node
COPY --chown=node:node package.json /openapi-check	COPY --chown=node:node package.json /openapi-check
COPY --chown=node:node package-lock.json /openapi-check	COPY --chown=node:node package-lock.json /openapi-check
ADD --chown=node:node script /openapi-check/script	ADD --chown=node:node script /openapi-check/script
ADD --chown=node:node lib /openapi-check/lib	ADD --chown=node:node lib /openapi-check/lib
ADD --chown=node:node content /openapi-check/content	ADD --chown=node:node content /openapi-check/content
ADD --chown=node:node data /openapi-check/data	ADD --chown=node:node data /openapi-check/data
RUN npm ci -D	RUN npm ci -D
ENTRYPOINT ["node", "/openapi-check/script/rest/openapi-check.js"]	ENTRYPOINT ["node", "/openapi-check/script/rest/openapi-check.js"]
2 comments on commit 08de05c
@zakwarlord7
zakwarlord7 commented on 08de05c 3 weeks ago
diff --git a/.github/workflows/ci.yml b/.github/workflows/ci.yml
index 76c2ce19..053ce48a 100644
--- a/.github/workflows/ci.yml
+++ b/.github/workflows/ci.yml
@@ -1,13 +1,13 @@
-name: CI
-on: [push]
-jobs:

build:
+Name: ci :
+on: [push]''
+jobs:''
build:''
runs-on: ubuntu-latest
steps:
 - name: Checkout
   uses: actions/checkout@v1
 - name: Approve Pull Request
   uses: ./
   with:
     github-token: ${{ secrets.GITHUB_TOKEN }}
     number: 1
+'=''steps':'' :
+'-'' name: Checkout :
+'-'' 'uses: actions/checkout@v1' :
+'-'' Name: Approve Pull Request :
+'-'' uses: ./-plugg-in's'' :
'"'{' '"(secret)'.(token)'.'[VOLUME'.'[00']DENOMONATION']'.(ITEM'_ID'.DB)' ':' {{{{'[(' {'[(((c)'.(r))[12753750'.'[00']m']'.'(BITORE'_34173'.1337')' )']}}}'"'':
     'number: 1
