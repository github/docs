# Scripts

## Scripts to rule them all

This directory follows the [Scripts to Rule Them All](https://githubengineering.com/scripts-to-rule-them-all/) pattern:

### [`bootstrap`](bootstrap)

Installs/updates all dependencies necessary for the docs environment. Equivalent of `npm install`.

---


### [`server`](server)

Starts the local development server. Equivalent of `npm start`.

To keep things snappy, only English and Japanese are enabled. To run the server with all languages enabled, run script/server-all-languages

---


### [`test`](test)

Runs tests. Equivalent of `npm test`.

---



## Additional scripts

### [`anonymize-branch.js`](anonymize-branch.js)

Flatten all the commits in the current branch into a single anonymized @Octomerger commit

Usage: script/anonymize-branch.js <new-commit-message> [base-branch] Example: script/anonymize-branch.js "nothing to see here" If the optional [base-branch] argument is omitted, it will default to `main`

---


### [`bookmarklets/add-pr-links.js`](bookmarklets/add-pr-links.js)



---


### [`bookmarklets/open-in-vscode.js`](bookmarklets/open-in-vscode.js)



---


### [`bookmarklets/pr-link-source.js`](bookmarklets/pr-link-source.js)



---


### [`bookmarklets/view-in-development.js`](bookmarklets/view-in-development.js)



---


### [`bookmarklets/view-in-production.js`](bookmarklets/view-in-production.js)



---


### [`check-for-node`](check-for-node)

This script is run automatically when you run the server locally. It checks whether Node.js is installed.

---


### [`check-github-github-links.js`](check-github-github-links.js)

Run this script to get all broken docs.github.com links in github/github

---


### [`content-migrations/add-early-access-tocs.js`](content-migrations/add-early-access-tocs.js)



---


### [`content-migrations/add-ghec-to-schema.js`](content-migrations/add-ghec-to-schema.js)

A one-time use script to add GHEC to the REST schema on github/github.

---


### [`content-migrations/add_mini_toc_frontmatter.js`](content-migrations/add_mini_toc_frontmatter.js)

Run this one time script to add max mini toc to rest reference documentation

---


### [`content-migrations/comment-on-open-prs.js`](content-migrations/comment-on-open-prs.js)

This script finds all open PRs from active branches that touch content files, and adds a comment with steps to run some commands. The idea is to help writers and other Hubbers update their open branches and mitigate conflicts with the main branch.

---


### [`content-migrations/convert-if-to-ifversion.js`](content-migrations/convert-if-to-ifversion.js)

Run this one-time script to convert `if <feature name>` Liquid tags to `ifversion <feature name>`.

---


### [`content-migrations/create-csv-of-short-titles.js`](content-migrations/create-csv-of-short-titles.js)



---


### [`content-migrations/move-unique-image-assets.js`](content-migrations/move-unique-image-assets.js)



---


### [`content-migrations/remove-html-comments-from-index-files.js`](content-migrations/remove-html-comments-from-index-files.js)



---


### [`content-migrations/topics-upcase.js`](content-migrations/topics-upcase.js)



---


### [`content-migrations/update-developer-site-links.js`](content-migrations/update-developer-site-links.js)



---


### [`content-migrations/update-headers.js`](content-migrations/update-headers.js)

Run this one time script to update headers for accessibility Changing H3 to H2, H4 to H3, H5 to H4, and H6 to H5

---


### [`content-migrations/update-versioning-in-files.js`](content-migrations/update-versioning-in-files.js)



---


### [`content-migrations/use-short-versions.js`](content-migrations/use-short-versions.js)

Run this script to convert long form Liquid conditionals (e.g., {% if currentVersion == "free-pro-team" %}) to the new custom tag (e.g., {% ifversion fpt %}) and also use the short names in versions frontmatter.

---


### [`copy-to-test-repo.sh`](copy-to-test-repo.sh)



---


### [`create-glossary-from-spreadsheet.js`](create-glossary-from-spreadsheet.js)

This script turns a Google Sheets CSV spreadsheet into a YAML file.

---


### [`deployment/purge-edge-cache.js`](deployment/purge-edge-cache.js)



---


### [`dev-toc/generate.js`](dev-toc/generate.js)



---


### [`dev-toc/index.js`](dev-toc/index.js)



---


### [`dev-toc/layout.html`](dev-toc/layout.html)



---


### [`domwaiter.js`](domwaiter.js)



---


### [`early-access/clone-locally`](early-access/clone-locally)

This script is run on a writer's machine to begin developing Early Access content locally.

---


### [`early-access/create-branch`](early-access/create-branch)

This script is run on a writer's machine to create an Early Access branch that matches the current docs-internal branch.

---


### [`early-access/symlink-from-local-repo.js`](early-access/symlink-from-local-repo.js)

This script is run on a writer's machine while developing Early Access content locally. You must pass the script the location of your local copy of the `github/docs-early-access` git repo as the first argument.

---


### [`early-access/update-data-and-image-paths.js`](early-access/update-data-and-image-paths.js)

This script is run on a writer's machine while developing Early Access content locally. It updates the data and image paths to either include `early-access` or remove it.

---


### [`enterprise-server-deprecations/archive-version.js`](enterprise-server-deprecations/archive-version.js)

Run this script during the Enterprise deprecation process to download static copies of all pages for the oldest supported Enterprise version. See the Enterprise deprecation issue template for instructions.

NOTE: If you get this error:

   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'website-scraper' ...

it's because you haven't installed all the *optional* dependencies. To do that, run:

   npm install --include=optional


---


### [`enterprise-server-deprecations/remove-static-files.js`](enterprise-server-deprecations/remove-static-files.js)

This script removes the static GraphQL, REST, and webhook files for any deprecated GHES versions.

---


### [`enterprise-server-deprecations/remove-version-markup.js`](enterprise-server-deprecations/remove-version-markup.js)

Run this script after an Enterprise deprecation to remove Liquid statements and frontmatter that contain the deprecated Enterprise version. See the Enterprise deprecation issue template for instructions.

---


### [`enterprise-server-releases/create-graphql-files.js`](enterprise-server-releases/create-graphql-files.js)

This script creates the static GraphQL files for a new version.

---


### [`enterprise-server-releases/create-webhook-files.js`](enterprise-server-releases/create-webhook-files.js)

This script creates new static webhook payload files for a new version.

---


### [`enterprise-server-releases/release-banner.js`](enterprise-server-releases/release-banner.js)

This script creates or removes a release candidate banner for a specified version.

---


### [`find-orphaned-assets.js`](find-orphaned-assets.js)

Print a list of all the asset files that can't be found mentioned in any of the source files (content & code).

---


### [`get-new-dotcom-path.js`](get-new-dotcom-path.js)

Pass this script any old dotcom path (e.g., `articles/foo` or `foo.md`) and it will output the new path in the content/github directory.

---


### [`graphql/build-changelog.js`](graphql/build-changelog.js)



---


### [`graphql/update-files.js`](graphql/update-files.js)



---


### [`graphql/utils/data-filenames.json`](graphql/utils/data-filenames.json)



---


### [`graphql/utils/process-previews.js`](graphql/utils/process-previews.js)



---


### [`graphql/utils/process-schemas.js`](graphql/utils/process-schemas.js)



---


### [`graphql/utils/process-upcoming-changes.js`](graphql/utils/process-upcoming-changes.js)



---


### [`graphql/utils/schema-helpers.js`](graphql/utils/schema-helpers.js)



---


### [`helpers/action-injections.js`](helpers/action-injections.js)



---


### [`helpers/add-redirect-to-frontmatter.js`](helpers/add-redirect-to-frontmatter.js)



---


### [`helpers/get-liquid-conditionals.js`](helpers/get-liquid-conditionals.js)



---


### [`helpers/get-version-blocks.js`](helpers/get-version-blocks.js)



---


### [`helpers/git-utils.js`](helpers/git-utils.js)



---


### [`helpers/github.js`](helpers/github.js)



---


### [`helpers/remove-deprecated-frontmatter.js`](helpers/remove-deprecated-frontmatter.js)



---


### [`helpers/remove-liquid-statements.js`](helpers/remove-liquid-statements.js)



---


### [`helpers/retry-on-error-test.js`](helpers/retry-on-error-test.js)

Return a function that you can use to run any code within and if it throws you get a chance to say whether to sleep + retry. Example:

async function mainFunction() {     if (Math.random() > 0.9) throw new Error('too large')     return 'OK'   }

const errorTest = (err) => err instanceof Error && err.message.includes('too large')   const config = {  // all optional     attempts: 3,     sleepTime: 800,     onError: (err, attempts) => console.warn(`Failed ${attempts} attempts`)   }   const ok = await retry(errorTest, mainFunction, config)

---


### [`helpers/walk-files.js`](helpers/walk-files.js)

A helper that returns an array of files for a given path and file extension.

---


### [`i18n/test-html-pages.js`](i18n/test-html-pages.js)



---


### [`kill-server-for-jest.js`](kill-server-for-jest.js)



---


### [`list-image-sizes.js`](list-image-sizes.js)

This script lists all local image files, sorted by their dimensions.

---


### [`move-category-to-product.js`](move-category-to-product.js)

Move the files from a category directory to a top-level product and add redirects.

---


### [`move-content.js`](move-content.js)

Helps you move (a.k.a. rename) a file or a folder and does what's needed with frontmatter redirect_from.

---


### [`pages-with-liquid-titles.js`](pages-with-liquid-titles.js)

This is a temporary script to visualize which pages have liquid (and conditionals) in their `title` frontmatter

---


### [`prevent-pushes-to-main.js`](prevent-pushes-to-main.js)

This script is intended to be used as a git "prepush" hook. If the current branch is main, it will exit unsuccessfully and prevent the push.

---


### [`purge-fastly`](purge-fastly)

Run this script to manually purge the Fastly cache. Note this script requires a `FASTLY_SERVICE_ID` and `FASTLY_TOKEN` in your `.env` file.

---


### [`purge-fastly-by-url.js`](purge-fastly-by-url.js)

Run this script to manually purge the Fastly cache for all language variants of a single URL or for a batch of URLs in a file. This script does not require authentication.

---


### [`reconcile-category-dirs-with-ids.js`](reconcile-category-dirs-with-ids.js)

An automated test checks for discrepancies between category directory names and slugified category titles as IDs.

If the test fails, a human needs to run this script to update the directory names and add appropriate redirects.

**This script is not currently supported on Windows.**

---


### [`reconcile-filenames-with-ids.js`](reconcile-filenames-with-ids.js)

An automated test checks for discrepancies between filenames and [autogenerated heading IDs](https://www.npmjs.com/package/remark-autolink-headings). If the test fails, a human needs to run this script to update the filenames.

**This script is not currently supported on Windows.**

---


### [`rendered-content-link-checker.js`](rendered-content-link-checker.js)

This script goes through all content and renders their HTML and from there can analyze for various flaws (e.g. broken links)

---


### [`rest/openapi-check.js`](rest/openapi-check.js)

Run this script to check if OpenAPI files can be decorated successfully.

---


### [`rest/test-open-api-schema.js`](rest/test-open-api-schema.js)

Run this script to check if OpenAPI operations match versions in content/rest operations

---


### [`rest/update-files.js`](rest/update-files.js)

Run this script to pull openAPI files from github/github, dereference them, and decorate them.

---


### [`rest/utils/create-rest-examples.js`](rest/utils/create-rest-examples.js)



---


### [`rest/utils/decorator.js`](rest/utils/decorator.js)



---


### [`rest/utils/get-body-params.js`](rest/utils/get-body-params.js)



---


### [`rest/utils/get-operations.js`](rest/utils/get-operations.js)



---


### [`rest/utils/operation-schema.js`](rest/utils/operation-schema.js)



---


### [`rest/utils/operation.js`](rest/utils/operation.js)



---


### [`rest/utils/webhook-schema.js`](rest/utils/webhook-schema.js)



---


### [`rest/utils/webhook.js`](rest/utils/webhook.js)



---


### [`search/analyze-text.js`](search/analyze-text.js)

See how a piece of text gets turned into tokens by the different analyzers. Requires that the index exists in Elasticsearch.

Example:

   ./src/scripts/search/analyze-text.js my words to tokenize

---


### [`search/build-records.js`](search/build-records.js)



---


### [`search/find-indexable-pages.js`](search/find-indexable-pages.js)



---


### [`search/index-elasticsearch.js`](search/index-elasticsearch.js)

Creates Elasticsearch index, populates from records, moves the index alias, deletes old indexes.

---


### [`search/parse-page-sections-into-records.js`](search/parse-page-sections-into-records.js)



---


### [`search/popular-pages.js`](search/popular-pages.js)



---


### [`search/search-index-records.js`](search/search-index-records.js)


---


### [`search/sync-search-indices.js`](search/sync-search-indices.js)

This script is run automatically via GitHub Actions on every push to `main` to generate searchable data. It can also be run manually. For more info see [contributing/search.md](contributing/search.md)

---


### [`search/sync.js`](search/sync.js)



---


### [`search/validate-records.js`](search/validate-records.js)



---


### [`server-all-languages`](server-all-languages)

Starts the local development server with all of the available languages enabled.

---


### [`server-for-jest.js`](server-for-jest.js)



---


### [`standardize-frontmatter-order.js`](standardize-frontmatter-order.js)

Run this script to standardize frontmatter fields in all content files, per the order: - title - intro - product callout - productVersion - map topic status - hidden status - layout - redirect

---


### [`start-server-for-jest.js`](start-server-for-jest.js)



---


### [`todo`](todo)

List all the TODOs in our JavaScript files and stylesheets.

---


### [`toggle-ghae-feature-flags.js`](toggle-ghae-feature-flags.js)

Find and replace lightweight feature flags for GitHub AE content.

---


### [`update-enterprise-dates.js`](update-enterprise-dates.js)

This script fetches data from https://github.com/github/enterprise-releases/blob/master/releases.json and updates `lib/enterprise-dates.json`, which the site uses for various functionality.

---


### [`update-internal-links.js`](update-internal-links.js)

Run this script to find internal links in all content and data Markdown files, check if either the title or link (or both) are outdated, and automatically update them if so.

Exceptions: * Links with fragments (e.g., [Bar](/foo#bar)) will get their root links updated if necessary, but the fragment and title will be unchanged (e.g., [Bar](/noo#bar)). * Links with hardcoded versions (e.g., [Foo](/enterprise-server/baz)) will get their root links updated if necessary, but the hardcoded versions will be preserved (e.g., [Foo](/enterprise-server/qux)). * Links with Liquid in the titles will have their root links updated if necessary, but the titles will be preserved.

---


### [`update-readme.js`](update-readme.js)

This script crawls the script directory, hooks on special comment markers in each script, and adds the comment to `script/README.md`.

---
From fd5e4e0bab4aa9446ff9efb060accce3071516bf Mon Sep 17 00:00:00 2001
From: ZACHRY T WOOD <124041561+mowjoejoejoejoe@users.noreply.github.com>
Date: Sat, 29 Apr 2023 13:17:49 -0500
Subject: [PATCH] Update Dockerfile

---
 .devcontainer/Dockerfile | 359 ++++++++++++++++++++++++++++++++++++++-
 1 file changed, 355 insertions(+), 4 deletions(-)

diff --git a/.devcontainer/Dockerfile b/.devcontainer/Dockerfile
index 562f9aafb3a7..a0b6698313bc 100644
--- a/.devcontainer/Dockerfile
+++ b/.devcontainer/Dockerfile
@@ -1,9 +1,360 @@
 # See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile
+Skip to content
 
-# [Choice] Node.js version
-ARG VARIANT="18-buster"
-FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
-
+Search or jump to...
+Pulls
+Issues
+Codespaces
+Marketplace
+Explore
+ 
+@mowjoejoejoejoe 
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+github
+/
+docs
+Public
+Fork your own copy of github/docs
+Code
+Issues
+112
+Pull requests
+118
+Discussions
+Actions
+Projects
+4
+Security
+More
+Update Dockerfile #25306
+ Open
+mowjoejoejoejoe wants to merge 1 commit into github:main from mowjoejoejoejoe:patch-127
++222 −1 
+ Conversation 0
+ Commits 1
+ Checks 0
+ Files changed 1
+ Open
+Update Dockerfile
+#25306
+File filter 
+ 
+0 / 1 files viewed
+  223 changes: 222 additions & 1 deletion223  
+Dockerfile
+Marking files as viewed can help keep track of your progress, but will not affect your submitted reviewViewed
+Comment on this file
+@@ -1,5 +1,226 @@
+# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production	ci :C://I :scripts::\start::\Script::/run::\starts::\:Build::, 'build'_script"'Runs':':'\':':'" :" '{'{'{'{'['('"'('('C')''.'('R')')')']'}'/'{'$'' '{'[12753750'.'[00']'M'}'\'{'B'I'T'O'R''
+'E'_'34173'.'1337'_`118893'}'' ')']'}'}'}'"'':runs-on::'"'Runs'' ':" :"Build and deploy Azure preview environment Expected — Waiting for status to be reported
+Required
+Prevent merging during deployment freezes Expected — Waiting for status to be reported
+Required
+test (content) Expected — Waiting for status to be reported
+Required
+test (graphql) Expected — Waiting for status to be reported
+Required
+test (meta) Expected — Waiting for status to be reported
+Required
+test (rendering) Expected — Waiting for status to be reported
+Required
+test (routing) Expected — Waiting for status to be reported
+Required
+test (unit) Expected — Waiting for status to be reported
+Required
+Resolve conflicts 
+This branch has conflicts that must be resolved
+Only those with write access to this repository can merge pull requests.
+Conflicting files
+.github/workflows/triage-unallowed-contributions.yml
+assets/images/help/business-accounts/enterprise-account-settings-tab.png
+assets/images/help/command-palette/command-palette-command-mode.png
+assets/images/help/enterprises/your-enterprises-list.png
+components/Search.tsx
+components/article/ArticlePage.tsx
+components/landing/ProductLanding.tsx
+components/landing/TocLanding.tsx
+components/page-footer/SmallFooter.tsx
+components/page-header/Header.tsx
+components/page-header/LanguagePicker.tsx
+components/page-header/VersionPicker.tsx
+components/sidebar/AllProductsLink.tsx
+components/sidebar/ApiVersionPicker.tsx
+components/sidebar/SidebarNav.tsx
+components/sidebar/SidebarProduct.module.scss
+components/sidebar/SidebarProduct.tsx
+content/README.md
+content/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile.md
+content/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/remembering-your-github-username-or-email.md
+content/actions/creating-actions/dockerfile-support-for-github-actions.md
+content/actions/deployment/managing-your-deployments/viewing-deployment-history.md
+content/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service
+content/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs.
+content/actions/learn-github/docs/content.md
+"'Skips-to:
+  '-content/pom.YML
+:Request :Pull
+Pulls: pull_request
+pull_requests: branches
+branches: -[trunk]
+trunk :Push
+:Pushs::  Branch
+Branch: -[paradice]
+BeginnersGuide/OverviewHowToEditPython" :
+"python or apt-get install 
+ m install  :
+# This_.Docker: uses .docker
+  '-based :deployment
+  '-to: Azure for both preview environments and production
+Skip to content
+Search or jump to...
+Pulls
+Issues
+Codespaces
+Marketplace
+Explore
+ 
+@mowjoejoejoejoe 
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+github
+/
+docs
+Public
+Fork your own copy of github/docs
+Code
+Issues
+112
+Pull requests
+117
+Discussions
+Actions
+Projects
+4
+Security
+More
+Browse the repository at this point in the history
+Bump node from 18.14-alpine to 18.15-alpine (#35843)
+Signed-off-by: dependabot[bot] <support@github.com>
+Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
+ main (#24642)
+@dependabot
+dependabot[bot] committed on Mar 23 
+1 parent cf41edf
+commit 4fd4e85
+Show file tree Hide file tree
+Showing 2 changed files with 2 additions and 2 deletions.
+  2 changes: 1 addition & 1 deletion2  
+Dockerfile
+# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production	# This Dockerfile is used for docker-based deployments to Azure for both preview environments and production
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# BASE IMAGE	# BASE IMAGE
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# To update the sha, run `docker pull node:$VERSION-alpine`	# To update the sha, run `docker pull node:$VERSION-alpine`
+# look for something like: `Digest: sha256:0123456789abcdef`	# look for something like: `Digest: sha256:0123456789abcdef`
+FROM node:18.14-alpine@sha256:f8a51c36b0be7434bbf867d4a08decf0100e656203d893b9b0f8b1fe9e40daea as base	FROM node:18.15-alpine@sha256:ffc770cdc09c9e83cccd99d663bb6ed56cfaa1bab94baf1b12b626aebeca9c10 as base
+# This directory is owned by the node user	# This directory is owned by the node user
+ARG APP_HOME=/home/node/app	ARG APP_HOME=/home/node/app
+# Make sure we don't run anything as the root user	# Make sure we don't run anything as the root user
+USER node	USER node
+WORKDIR $APP_HOME	WORKDIR $APP_HOME
+# ---------------	# ---------------
+# ALL DEPS	# ALL DEPS
+# ---------------	# ---------------
+FROM base as all_deps	FROM base as all_deps
+COPY --chown=node:node package.json package-lock.json ./	COPY --chown=node:node package.json package-lock.json ./
+RUN npm ci --no-optional --registry https://registry.npmjs.org/	RUN npm ci --no-optional --registry https://registry.npmjs.org/
+# For Next.js v12+	# For Next.js v12+
+# This the appropriate necessary extra for node:VERSION-alpine	# This the appropriate necessary extra for node:VERSION-alpine
+# Other options are https://www.npmjs.com/search?q=%40next%2Fswc	# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
+RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save	RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save
+# ---------------	# ---------------
+# PROD DEPS	# PROD DEPS
+# ---------------	# ---------------
+FROM all_deps as prod_deps	FROM all_deps as prod_deps
+RUN npm prune --production	RUN npm prune --production
+# ---------------	# ---------------
+# BUILDER	# BUILDER
+# ---------------	# ---------------
+FROM all_deps as builder	FROM all_deps as builder
+COPY stylesheets ./stylesheets	COPY stylesheets ./stylesheets
+COPY pages ./pages	COPY pages ./pages
+COPY components ./components	COPY components ./components
+COPY lib ./lib	COPY lib ./lib
+COPY src ./src	COPY src ./src
+# Certain content is necessary for being able to build	# Certain content is necessary for being able to build
+COPY content/index.md ./content/index.md	COPY content/index.md ./content/index.md
+COPY content/rest ./content/rest	COPY content/rest ./content/rest
+COPY data ./data	COPY data ./data
+COPY next.config.js ./next.config.js	COPY next.config.js ./next.config.js
+COPY tsconfig.json ./tsconfig.json	COPY tsconfig.json ./tsconfig.json
+RUN npm run build	RUN npm run build
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# PREVIEW IMAGE - no translations	# PREVIEW IMAGE - no translations
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+FROM base as preview	FROM base as preview
+# Copy just prod dependencies	# Copy just prod dependencies
+COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules	COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules
+# Copy our front-end code	# Copy our front-end code
+COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next	COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next
+# We should always be running in production mode	# We should always be running in production mode
+ENV NODE_ENV production	ENV NODE_ENV production
+# Preferred port for server.js	# Preferred port for server.js
+ENV PORT 4000	ENV PORT 4000
+ENV ENABLED_LANGUAGES "en"	ENV ENABLED_LANGUAGES "en"
+# This makes it possible to set `--build-arg BUILD_SHA=abc123`	# This makes it possible to set `--build-arg BUILD_SHA=abc123`
+# and it then becomes available as an environment variable in the docker run.	# and it then becomes available as an environment variable in the docker run.
+ARG BUILD_SHA	ARG BUILD_SHA
+ENV BUILD_SHA=$BUILD_SHA	ENV BUILD_SHA=$BUILD_SHA
+# Copy only what's needed to run the server	# Copy only what's needed to run the server
+COPY --chown=node:node package.json ./	COPY --chown=node:node package.json ./
+COPY --chown=node:node assets ./assets	COPY --chown=node:node assets ./assets
+COPY --chown=node:node content ./content	COPY --chown=node:node content ./content
+COPY --chown=node:node lib ./lib	COPY --chown=node:node lib ./lib
+COPY --chown=node:node src ./src	COPY --chown=node:node src ./src
+COPY --chown=node:node middleware ./middleware	COPY --chown=node:node middleware ./middleware
+COPY --chown=node:node data ./data	COPY --chown=node:node data ./data
+COPY --chown=node:node next.config.js ./	COPY --chown=node:node next.config.js ./
+COPY --chown=node:node server.js ./server.js	COPY --chown=node:node server.js ./server.js
+COPY --chown=node:node start-server.js ./start-server.js	COPY --chown=node:node start-server.js ./start-server.js
+EXPOSE $PORT	EXPOSE $PORT
+CMD ["node", "server.js"]	CMD ["node", "server.js"]
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# PRODUCTION IMAGE - includes all translations	# PRODUCTION IMAGE - includes all translations
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+FROM preview as production	FROM preview as production
+# Override what was set for previews	# Override what was set for previews
+# Make this match the default of `Object.keys(languages)` in lib/languages.js	# Make this match the default of `Object.keys(languages)` in lib/languages.js
+ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"	ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"
+# Copy in all translations	# Copy in all translations
+COPY --chown=node:node translations ./translations	COPY --chown=node:node translations ./translations
+ 2 changes: 1 addition & 1 deletion2  
+Dockerfile.openapi_decorator
+@@ -1,4 +1,4 @@
+FROM node:18.14-alpine	FROM node:18.15-alpine
+RUN apk add --no-cache git python make g++	RUN apk add --no-cache git python make g++
+0 comments on commit 4fd4e85
+@mowjoejoejoejoe
+ 
+Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
+Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
+Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
+Directly mention a user or team
+Reference an issue, pull request, or discussion
+Add saved reply
+Leave a comment
+No file chosen
+Attach files by dragging & dropping, selecting or pasting them.
+Styling with Markdown is supported
+ You’re not receiving notifications from this thread.
+Footer
+© 2023 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+Copied!
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# BASE IMAGE	# BASE IMAGE
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# To update the sha, run `docker pull node:$VERSION-alpine`	# To update the sha, run `docker pull node:$VERSION-alpine`
+# look for something like: `Digest: sha256:0123456789abcdef`	# look for something like: `Digest: sha256:0123456789abcdef`
+FROM node:18.15-alpine@sha256:47d97b93629d9461d64197773966cc49081cf4463b1b07de5a38b6bd5acfbe9d as base	FROM node:18.15-alpine@sha256:47d97b93629d9461d64197773966cc49081cf4463b1b07de5a38b6bd5acfbe9d as base
+# This directory is owned by the node user	# This directory is owned by the node user
+ARG APP_HOME=/home/node/app	ARG APP_HOME=/home/node/app
+# Make sure we don't run anything as the root user	# Make sure we don't run anything as the root user
+USER node	USER node
+WORKDIR $APP_HOME	WORKDIR $APP_HOME
+# ---------------	# ---------------
+# ALL DEPS	# ALL DEPS
+# ---------------	# ---------------
+FROM base as all_deps	FROM base as all_deps
+COPY --chown=node:node package.json package-lock.json ./	COPY --chown=node:node package.json package-lock.json ./
+RUN npm ci --no-optional --registry https://registry.npmjs.org/	RUN npm ci --no-optional --registry https://registry.npmjs.org/
+# For Next.js v12+	# For Next.js v12+
+# This the appropriate necessary extra for node:VERSION-alpine	# This the appropriate necessary extra for node:VERSION-alpine
+# Other options are https://www.npmjs.com/search?q=%40next%2Fswc	# Other options are https://www.npmjs.com/search?q=%40next%2Fswc
+RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save	RUN npm i @next/swc-linux-x64-musl --no-save || npm i @next/swc-linux-arm64-musl --no-save
+# ---------------	# ---------------
+# PROD DEPS	# PROD DEPS
+# ---------------	# ---------------
+FROM all_deps as prod_deps	FROM all_deps as prod_deps
+RUN npm prune --production	RUN npm prune --production
+# ---------------	# ---------------
+# BUILDER	# BUILDER
+# ---------------	# ---------------
+FROM all_deps as builder	FROM all_deps as builder
+COPY stylesheets ./stylesheets	COPY stylesheets ./stylesheets
+COPY pages ./pages	COPY pages ./pages
+COPY components ./components	COPY components ./components
+COPY lib ./lib	COPY lib ./lib
+COPY src ./src	COPY src ./src
+# Certain content is necessary for being able to build	# Certain content is necessary for being able to build
+COPY content/index.md ./content/index.md	COPY content/index.md ./content/index.md
+COPY content/rest ./content/rest	COPY content/rest ./content/rest
+COPY data ./data	COPY data ./data
+COPY next.config.js ./next.config.js	COPY next.config.js ./next.config.js
+COPY tsconfig.json ./tsconfig.json	COPY tsconfig.json ./tsconfig.json
+RUN npm run build	RUN npm run build
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# PREVIEW IMAGE - no translations	# PREVIEW IMAGE - no translations
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+FROM base as preview	FROM base as preview
+# Copy just prod dependencies	# Copy just prod dependencies
+COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules	COPY --chown=node:node --from=prod_deps $APP_HOME/node_modules $APP_HOME/node_modules
+# Copy our front-end code	# Copy our front-end code
+COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next	COPY --chown=node:node --from=builder $APP_HOME/.next $APP_HOME/.next
+# We should always be running in production mode	# We should always be running in production mode
+ENV NODE_ENV production	ENV NODE_ENV production
+# Preferred port for server.js	# Preferred port for server.js
+ENV PORT 4000	ENV PORT 4000
+ENV ENABLED_LANGUAGES "en"	ENV ENABLED_LANGUAGES "en"
+# This makes it possible to set `--build-arg BUILD_SHA=abc123`	# This makes it possible to set `--build-arg BUILD_SHA=abc123`
+# and it then becomes available as an environment variable in the docker run.	# and it then becomes available as an environment variable in the docker run.
+ARG BUILD_SHA	ARG BUILD_SHA
+ENV BUILD_SHA=$BUILD_SHA	ENV BUILD_SHA=$BUILD_SHA
+# Copy only what's needed to run the server	# Copy only what's needed to run the server
+COPY --chown=node:node package.json ./	COPY --chown=node:node package.json ./
+COPY --chown=node:node assets ./assets	COPY --chown=node:node assets ./assets
+COPY --chown=node:node content ./content	COPY --chown=node:node content ./content
+COPY --chown=node:node lib ./lib	COPY --chown=node:node lib ./lib
+COPY --chown=node:node src ./src	COPY --chown=node:node src ./src
+COPY --chown=node:node middleware ./middleware	COPY --chown=node:node middleware ./middleware
+COPY --chown=node:node data ./data	COPY --chown=node:node data ./data
+COPY --chown=node:node next.config.js ./	COPY --chown=node:node next.config.js ./
+COPY --chown=node:node server.js ./server.js	COPY --chown=node:node server.js ./server.js
+COPY --chown=node:node start-server.js ./start-server.js	COPY --chown=node:node start-server.js ./start-server.js
+EXPOSE $PORT	EXPOSE $PORT
+CMD ["node", "server.js"]	CMD ["node", "server.js"]
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+# PRODUCTION IMAGE - includes all translations	# PRODUCTION IMAGE - includes all translations
+# --------------------------------------------------------------------------------	# --------------------------------------------------------------------------------
+FROM preview as production	FROM preview as production
+# Override what was set for previews	# Override what was set for previews
+# Make this match the default of `Object.keys(languages)` in lib/languages.js	# Make this match the default of `Object.keys(languages)` in lib/languages.js
+ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"	ENV ENABLED_LANGUAGES "en,zh,es,pt,ru,ja,fr,de,ko"
+# Copy in all translations	# Copy in all translations
+COPY --chown=node:node translations ./translations	COPY --chown=node:node translations ./translations
+Footer
+© 2023 GitHub, Inc.
+Footer navigation
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
 # [Optional] Uncomment this section to install additional OS packages.
 # RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
 #     && apt-get -y install --no-install-recommends <your-package-list-here>
