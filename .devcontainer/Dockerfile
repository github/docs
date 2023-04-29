# See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile
Skip to content

Search or jump to...
Pulls
Issues
Codespaces
Marketplace
Explore
 
@mowjoejoejoejoe 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
github
/
docs
Public
Fork your own copy of github/docs
Code
Issues
112
Pull requests
118
Discussions
Actions
Projects
4
Security
More
Update Dockerfile #25306
 Open
mowjoejoejoejoe wants to merge 1 commit into github:main from mowjoejoejoejoe:patch-127
+222 −1 
 Conversation 0
 Commits 1
 Checks 0
 Files changed 1
 Open
Update Dockerfile
#25306
File filter 
 
0 / 1 files viewed
  223 changes: 222 additions & 1 deletion223  
Dockerfile
Marking files as viewed can help keep track of your progress, but will not affect your submitted reviewViewed
Comment on this file
@@ -1,5 +1,226 @@
# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production	ci :C://I :scripts::\start::\Script::/run::\starts::\:Build::, 'build'_script"'Runs':':'\':':'" :" '{'{'{'{'['('"'('('C')''.'('R')')')']'}'/'{'$'' '{'[12753750'.'[00']'M'}'\'{'B'I'T'O'R''
'E'_'34173'.'1337'_`118893'}'' ')']'}'}'}'"'':runs-on::'"'Runs'' ':" :"Build and deploy Azure preview environment Expected — Waiting for status to be reported
Required
Prevent merging during deployment freezes Expected — Waiting for status to be reported
Required
test (content) Expected — Waiting for status to be reported
Required
test (graphql) Expected — Waiting for status to be reported
Required
test (meta) Expected — Waiting for status to be reported
Required
test (rendering) Expected — Waiting for status to be reported
Required
test (routing) Expected — Waiting for status to be reported
Required
test (unit) Expected — Waiting for status to be reported
Required
Resolve conflicts 
This branch has conflicts that must be resolved
Only those with write access to this repository can merge pull requests.
Conflicting files
.github/workflows/triage-unallowed-contributions.yml
assets/images/help/business-accounts/enterprise-account-settings-tab.png
assets/images/help/command-palette/command-palette-command-mode.png
assets/images/help/enterprises/your-enterprises-list.png
components/Search.tsx
components/article/ArticlePage.tsx
components/landing/ProductLanding.tsx
components/landing/TocLanding.tsx
components/page-footer/SmallFooter.tsx
components/page-header/Header.tsx
components/page-header/LanguagePicker.tsx
components/page-header/VersionPicker.tsx
components/sidebar/AllProductsLink.tsx
components/sidebar/ApiVersionPicker.tsx
components/sidebar/SidebarNav.tsx
components/sidebar/SidebarProduct.module.scss
components/sidebar/SidebarProduct.tsx
content/README.md
content/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile.md
content/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/remembering-your-github-username-or-email.md
content/actions/creating-actions/dockerfile-support-for-github-actions.md
content/actions/deployment/managing-your-deployments/viewing-deployment-history.md
content/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service
content/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs.
content/actions/learn-github/docs/content.md
"'Skips-to:
  '-content/pom.YML
:Request :Pull
Pulls: pull_request
pull_requests: branches
branches: -[trunk]
trunk :Push
:Pushs::  Branch
Branch: -[paradice]
BeginnersGuide/OverviewHowToEditPython" :
"python or apt-get install 
 m install  :
# This_.Docker: uses .docker
  '-based :deployment
  '-to: Azure for both preview environments and production
Skip to content
Search or jump to...
Pulls
Issues
Codespaces
Marketplace
Explore
 
@mowjoejoejoejoe 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
github
/
docs
Public
Fork your own copy of github/docs
Code
Issues
112
Pull requests
117
Discussions
Actions
Projects
4
Security
More
Browse the repository at this point in the history
Bump node from 18.14-alpine to 18.15-alpine (#35843)
Signed-off-by: dependabot[bot] <support@github.com>
Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
 main (#24642)
@dependabot
dependabot[bot] committed on Mar 23 
1 parent cf41edf
commit 4fd4e85
Show file tree Hide file tree
Showing 2 changed files with 2 additions and 2 deletions.
  2 changes: 1 addition & 1 deletion2  
Dockerfile
# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production	# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# BASE IMAGE	# BASE IMAGE
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# To update the sha, run `docker pull node:$VERSION-alpine`	# To update the sha, run `docker pull node:$VERSION-alpine`
# look for something like: `Digest: sha256:0123456789abcdef`	# look for something like: `Digest: sha256:0123456789abcdef`
FROM node:18.14-alpine@sha256:f8a51c36b0be7434bbf867d4a08decf0100e656203d893b9b0f8b1fe9e40daea as base	FROM node:18.15-alpine@sha256:ffc770cdc09c9e83cccd99d663bb6ed56cfaa1bab94baf1b12b626aebeca9c10 as base
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
# This the appropriate necessary extra for node:VERSION-alpine	# This the appropriate necessary extra for node:VERSION-alpine
# Other options are https://www.npmjs.com/search?q=%40next%2Fswc	# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save	RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save
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
COPY src ./src	COPY src ./src
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
COPY --chown=node:node src ./src	COPY --chown=node:node src ./src
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
# Override what was set for previews	# Override what was set for previews
# Make this match the default of `Object.keys(languages)` in lib/languages.js	# Make this match the default of `Object.keys(languages)` in lib/languages.js
ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"	ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"
# Copy in all translations	# Copy in all translations
COPY --chown=node:node translations ./translations	COPY --chown=node:node translations ./translations
 2 changes: 1 addition & 1 deletion2  
Dockerfile.openapi_decorator
@@ -1,4 +1,4 @@
FROM node:18.14-alpine	FROM node:18.15-alpine
RUN apk add --no-cache git python make g++	RUN apk add --no-cache git python make g++
0 comments on commit 4fd4e85
@mowjoejoejoejoe
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
 You’re not receiving notifications from this thread.
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Copied!
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# BASE IMAGE	# BASE IMAGE
# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
# To update the sha, run `docker pull node:$VERSION-alpine`	# To update the sha, run `docker pull node:$VERSION-alpine`
# look for something like: `Digest: sha256:0123456789abcdef`	# look for something like: `Digest: sha256:0123456789abcdef`
FROM node:18.15-alpine@sha256:47d97b93629d9461d64197773966cc49081cf4463b1b07de5a38b6bd5acfbe9d as base	FROM node:18.15-alpine@sha256:47d97b93629d9461d64197773966cc49081cf4463b1b07de5a38b6bd5acfbe9d as base
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
# This the appropriate necessary extra for node:VERSION-alpine	# This the appropriate necessary extra for node:VERSION-alpine
# Other options are https://www.npmjs.com/search?q=%40next%2Fswc	# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save	RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save
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
COPY src ./src	COPY src ./src
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
COPY --chown=node:node src ./src	COPY --chown=node:node src ./src
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
# Override what was set for previews	# Override what was set for previews
# Make this match the default of `Object.keys(languages)` in lib/languages.js	# Make this match the default of `Object.keys(languages)` in lib/languages.js
ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"	ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"
# Copy in all translations	# Copy in all translations
COPY --chown=node:node translations ./translations	COPY --chown=node:node translations ./translations
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install the GitHub CLI see:
# https://github.com/microsoft/vscode-dev-containers/blob/3d59f9fe37edb68f78874620f33dac5a62ef2b93/script-library/docs/github.md
COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
