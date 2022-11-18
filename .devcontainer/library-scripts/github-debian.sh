#!/usr/bin/env bash
#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------
#
# Docs: https://github.com/microsoft/vscode-dev-containers/blob/master/script-library/docs/github.md
#
# Syntax: ./github-debian.sh [version]

CLI_VERSION=${1:-"latest"}

set -e

if [ "$(id -u)" -ne 0 ]; then
    echo -e 'Script must be run as root. Use sudo, su, or add "USER root" to your Dockerfile before running this script.'
    exit 1
fi

export DEBIAN_FRONTEND=noninteractive

# Install curl, apt-transport-https or gpg if missing
if ! dpkg -s curl ca-certificates > /dev/null 2>&1; then
    if [ ! -d "/var/lib/apt/lists" ] || [ "$(ls /var/lib/apt/lists/ | wc -l)" = "0" ]; then
        apt-get update
    fi
    apt-get -y install --no-install-recommends curl ca-certificates
fi

# Get latest release number if latest is specified
if [ "${CLI_VERSION}" = "latest" ] ||  [ "${CLI_VERSION}" = "current" ] ||  [ "${CLI_VERSION}" = "lts" ]; then
    LATEST_RELEASE=$(curl -sSL -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/cli/cli/releases?per_page=1&page=1")
    CLI_VERSION=$(echo ${LATEST_RELEASE} | grep -oE 'tag_name":\s*"v[^"]+' | sed -n '/tag_name":\s*"v/s///p')
fi

# Install the GitHub CLI
echo "Downloading github CLI..."
curl -OsSL https://github.com/cli/cli/releases/download/v${CLI_VERSION}/gh_${CLI_VERSION}_linux_amd64.deb
echo "Installing github CLI..."
apt-get install ./gh_${CLI_VERSION}_linux_amd64.deb
echo "Removing github CLI deb file after installation..."
rm -rf ./gh_${CLI_VERSION}_linux_amd64.deb
echo "Done!"
Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
GitHub-doc
Public
forked from github/docs
Code
Pull requests
Actions
Projects
Security
1
Insights
Settings
GitHub-doc/make/file/rc/code/$MAKEFILE/rake file/GEM/spec/PKG.yml/package.json/kite.u.i
@zakwarlord7
zakwarlord7 Update and rename .devcontainer/Dockerfile to make/file/rc/code/$MAKE…
…
Latest commit 95b4bd3 3 minutes ago
 History
 1 contributor
4390 lines (4024 sloc)  302 KB

diff --git a/.github/ISSUE_TEMPLATE/config.yml b/.github/ISSUE_TEMPLATE/config.yml
index 925504464505..d5f6c2e4a997 100644
--- a/.github/ISSUE_TEMPLATE/config.yml
+++ b/.github/ISSUE_TEMPLATE/config.yml
@@ -3,3 +3,622 @@ contact_links:
   - name: GitHub Support
     url: https://support.github.com/contact
     about: Contact Support if you're having trouble with your GitHub account.
+name: Azure Production - Build and Deploy
+
+# **What it does**: Builds and deploys the default branch to production
+# **Why we have it**: To enable us to deploy the latest to production whenever necessary rather than relying on PR merges.
+# **Who does it impact**: All contributors.
+
+on:
+  push:
+    branches:
+      - main
+  workflow_dispatch:
+
+permissions:
+  contents: read
+  deployments: write
+
+# This allows a subsequently queued workflow run to take priority over
+# previously queued runs but NOT interrupt currently executing runs
+concurrency:
+  group: '${{ github.workflow }}'
+  cancel-in-progress: false
+
+jobs:
+  azure-prod-build-and-deploy:
+    if: ${{ github.repository == 'github/docs-internal' }}
+    runs-on: ubuntu-latest
+    timeout-minutes: 20
+    environment:
+      name: production
+      url: 'https://docs.github.com'
+    env:
+      DOCKER_IMAGE: ${{ secrets.PROD_REGISTRY_SERVER }}/${{ github.repository }}:${{ github.sha }}
+      DOCKER_IMAGE_CACHE_REF: ${{ secrets.PROD_REGISTRY_SERVER }}/${{ github.repository }}:main-production
+
+    steps:
+      - name: 'Az CLI login'
+        uses: azure/login@1f63701bf3e6892515f1b7ce2d2bf1708b46beaf
+        with:
+          creds: ${{ secrets.PROD_AZURE_CREDENTIALS }}
+
+      - name: 'Docker login'
+        uses: azure/docker-login@81744f9799e7eaa418697cb168452a2882ae844a
+        with:
+          login-server: ${{ secrets.PROD_REGISTRY_SERVER }}
+          username: ${{ secrets.PROD_REGISTRY_USERNAME }}
+          password: ${{ secrets.PROD_REGISTRY_PASSWORD }}
+
+      - name: Set up Docker Buildx
+        uses: docker/setup-buildx-action@94ab11c41e45d028884a99163086648e898eed25
+
+      - name: Check out repo
+        uses: actions/checkout@dcd71f646680f2efd8db4afa5ad64fdcba30e748
+        with:
+          ref: ${{ github.sha }}
+          # To prevent issues with cloning early access content later
+          persist-credentials: 'false'
+          lfs: 'true'
+
+      - name: Check out LFS objects
+        run: git lfs checkout
+
+      - name: Setup node
+        uses: actions/setup-node@17f8bd926464a1afa4c6a11669539e9c1ba77048
+        with:
+          node-version: '16.15.0'
+          cache: npm
+
+      - name: Clone docs-early-access
+        uses: actions/checkout@dcd71f646680f2efd8db4afa5ad64fdcba30e748
+        with:
+          repository: github/docs-early-access
+          token: ${{ secrets.DOCUBOT_REPO_PAT }}
+          path: docs-early-access
+          ref: main
+
+      - name: Merge docs-early-access repo's folders
+        run: .github/actions-scripts/merge-early-access.sh
+
+      - name: 'Build and push image'
+        uses: docker/build-push-action@1cb9d22b932e4832bb29793b7777ec860fc1cde0
+        with:
+          context: .
+          push: true
+          target: production
+          tags: ${{ env.DOCKER_IMAGE }}, ${{ env.DOCKER_IMAGE_CACHE_REF }}
+          cache-from: type=registry,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
+          cache-to: type=registry,mode=max,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
+          build-args: |
+            BUILD_SHA=${{ github.sha }}
+      - name: 'Update docker-compose.prod.yaml template file'
+        run: |
+          sed 's|#{IMAGE}#|${{ env.DOCKER_IMAGE }}|g' docker-compose.prod.tmpl.yaml > docker-compose.prod.yaml
+      - name: 'Apply updated docker-compose.prod.yaml config to canary slot'
+        run: |
+          az webapp config container set --multicontainer-config-type COMPOSE --multicontainer-config-file docker-compose.prod.yaml --slot canary -n ghdocs-prod -g docs-prod
+      # Watch canary slot instances to see when all the instances are ready
+      - name: Check that canary slot is ready
+        uses: actions/github-script@2b34a689ec86a68d8ab9478298f91d5401337b7d
+        env:
+          CHECK_INTERVAL: 10000
+        with:
+          script: |
+            const { execSync } = require('child_process')
+            const getStatesForSlot = (slot) => {
+              return JSON.parse(
+                execSync(
+                  `az webapp list-instances --slot ${slot} --query "[].state" -n ghdocs-prod -g docs-prod`,
+                  { encoding: 'utf8' }
+                )
+              )
+            }
+            let hasStopped = false
+            const waitDuration = parseInt(process.env.CHECK_INTERVAL, 10) || 10000
+            async function doCheck() {
+              const states = getStatesForSlot('canary')
+              console.log(`Instance states:`, states)
+              // We must wait until at-least 1 instance has STOPPED to know we're looking at the "next" deployment and not the "previous" one
+              // That way we don't immediately succeed just because all the previous instances were READY
+              if (!hasStopped) {
+                hasStopped = states.some((s) => s === 'STOPPED')
+              }
+              const isAllReady = states.every((s) => s === 'READY')
+              if (hasStopped && isAllReady) {
+                process.exit(0) // success
+              }
+              console.log(`checking again in ${waitDuration}ms`)
+              setTimeout(doCheck, waitDuration)
+            }
+            doCheck()
+      # TODO - make a request to verify the canary app version aligns with *this* github action workflow commit sha
+      - name: 'Swap canary slot to production'From 08de05cc0ce9f9d5775d54b1db23e0d29bd8a5f3 Mon Sep 17 00:00:00 2001
+From: "dependabot[bot]" <49699333+dependabot[bot]@users.noreply.github.com>
+Date: Thu, 17 Nov 2022 06:04:09 +0000
+Subject: [PATCH 1/2] Bump node from 16.18.0-alpine to 19.1.0-alpine
+
+Bumps node from 16.18.0-alpine to 19.1.0-alpine.
+
+---
+updated-dependencies:
+- dependency-name: node
+  dependency-type: direct:production
+  update-type: version-update:semver-major
+...
+
+Signed-off-by: dependabot[bot] <support@github.com>
+---
+ Dockerfile                   | 2 +-
+ Dockerfile.openapi_decorator | 2 +-
+ 2 files changed, 2 insertions(+), 2 deletions(-)
+
+diff --git a/Dockerfile b/Dockerfile
+index 8d08126b7a88..b97f01b49f4b 100644
+--- a/Dockerfile
++++ b/Dockerfile
+@@ -3,7 +3,7 @@
+ # --------------------------------------------------------------------------------
+ # BASE IMAGE
+ # --------------------------------------------------------------------------------
+-FROM node:16.18.0-alpine@sha256:f16544bc93cf1a36d213c8e2efecf682e9f4df28429a629a37aaf38ecfc25cf4 as base
++FROM node:19.1.0-alpine@sha256:c59fb39150e4a7ae14dfd42d3f9874398c7941784b73049c2d274115f00d36c8 as base
+ 
+ # This directory is owned by the node user
+ ARG APP_HOME=/home/node/app
+diff --git a/Dockerfile.openapi_decorator b/Dockerfile.openapi_decorator
+index 6014681b41da..790a00ddbbf4 100644
+--- a/Dockerfile.openapi_decorator
++++ b/Dockerfile.openapi_decorator
+@@ -1,4 +1,4 @@
+-FROM node:14-alpine
++FROM node:19-alpine
+ 
+ RUN apk add --no-cache git python make g++
+ 
+
+From a03fd00f9b61eabf2e5b810c04dc6a6c0f13f4ef Mon Sep 17 00:00:00 2001
+From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
+ <109656750+zakwarlord7@users.noreply.github.com>
+Date: Fri, 18 Nov 2022 05:03:31 -0600
+Subject: [PATCH 2/2] Update and rename CONTRIBUTING.md to deoendabot.c.i
+
+---
+ CONTRIBUTING.md |  97 ---------------
+ deoendabot.c.i  | 307 ++++++++++++++++++++++++++++++++++++++++++++++++
+ 2 files changed, 307 insertions(+), 97 deletions(-)
+ delete mode 100644 CONTRIBUTING.md
+ create mode 100644 deoendabot.c.i
+
+diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
+deleted file mode 100644
+index ec99f2668476..000000000000
+--- a/CONTRIBUTING.md
++++ /dev/null
+@@ -1,97 +0,0 @@
+-# Welcome to GitHub docs contributing guide <!-- omit in toc -->
+-
+-Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 
+-
+-Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.
+-
+-In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.
+-
+-Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.
+-
+-## New contributor guide
+-
+-To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:
+-
+-- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
+-- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
+-- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
+-- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)
+-
+-
+-## Getting started
+-
+-To navigate our codebase with confidence, see [the introduction to working in the docs repository](/contributing/working-in-docs-repository.md) :confetti_ball:. For more information on how we write our markdown files, see [the GitHub Markdown reference](contributing/content-markup-reference.md).
+-
+-Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.
+-
+-### Issues
+-
+-#### Create a new issue
+-
+-If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose). 
+-
+-#### Solve an issue
+-
+-Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.
+-
+-### Make Changes
+-
+-#### Make changes in the UI
+-
+-Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. 
+-
+- <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 
+-
+-#### Make changes in a codespace
+-
+-For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."
+-
+-#### Make changes locally
+-
+-1. [Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).
+-
+-2. Fork the repository.
+-- Using GitHub Desktop:
+-  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
+-  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!
+-
+-- Using the command line:
+-  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.
+-
+-3. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).
+-
+-4. Create a working branch and start with your changes!
+-
+-### Commit your update
+-
+-Commit the changes once you are happy with them. Don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.
+-
+-### Pull Request
+-
+-When you're finished with the changes, create a pull request, also known as a PR.
+-- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
+-- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
+-- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
+-Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
+-- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
+-- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
+-- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.
+-
+-### Your PR is merged!
+-
+-Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 
+-
+-Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en). 
+-
+-Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).
+-
+-## Windows
+-
+-This site can be developed on Windows, however a few potential gotchas need to be kept in mind:
+-
+-1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
+-2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
+-3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
+-4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
+-    - Update Git configuration: `git config --system core.longpaths true`
+-    - Consider using a different Git client on Windows
+diff --git a/deoendabot.c.i b/deoendabot.c.i
+new file mode 100644
+index 000000000000..46985365d978
+--- /dev/null
++++ b/deoendabot.c.i
+@@ -0,0 +1,307 @@
++# Welcome to GitHub docs contributing guide <!-- omit in toc -->
++
++Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 
++
++Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.
++
++In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.
++
++Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.
++
++## New contributor guide
++
++To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:
++
++- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
++- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
++- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
++- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)
++
++
++## Getting started
++
++To navigate our codebase with confidence, see [the introduction to working in the docs repository](/contributing/working-in-docs-repository.md) :confetti_ball:. For more information on how we write our markdown files, see [the GitHub Markdown reference](contributing/content-markup-reference.md).
++
++Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.
++
++### Issues
++
++#### Create a new issue
++
++If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose). 
++
++#### Solve an issue
++
++Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.
++
++### Make Changes
++
++#### Make changes in the UI
++
++Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. 
++
++ <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 
++
++#### Make changes in a codespace
++
++For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."
++
++#### Make changes locally
++
++1. [Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).
++
++2. Fork the repository.
++- Using GitHub Desktop:
++  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
++  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!
++
++- Using the command line:
++  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.
++
++3. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).
++
++4. Create a working branch and start with your changes!
++
++### Commit your update
++
++Commit the changes once you are happy with them. Don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.
++
++### Pull Request
++
++When you're finished with the changes, create a pull request, also known as a PR.
++- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
++- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
++- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
++Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
++- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
++- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
++- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.
++
++### Your PR is merged!
++
++Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 
++
++Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en). 
++
++Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).
++
++## Windows
++
++This site can be developed on Windows, however a few potential gotchas need to be kept in mind:
++
++1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
++2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
++3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
++4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
++    - Update Git configuration: `git config --system core.longpaths true`
++    - Consider using a different Git client on Windows
++Net Pay		70842743866		70842743866																																																																						
++CHECKING				        																																																																						
++Net Check		70842743866		        																																																																						
++Your federal taxable wages this period are $																																																																										
++ALPHABET INCOME								Advice number:			650001																																																															
++1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043								Pay date:			Monday, April 18, 2022																																																															
++																																																																										
++Deposited to the account Of: ZACHRY T. WOOD								xxxxxxxx6547			transit ABA			amount																																																												
++PLEASE READ THE IMPORTANT DISCLOSURES BELOW		Bank																													PNC Bank Business Tax I.D. Number: 633441725				
++CIF Department (Online Banking) Checking Account: 47-2041-6547
++P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation
++500 First Avenue ALPHABET
++Pittsburgh, PA 15219-3128 5323 BRADFORD DR
++NON-NEGOTIABLE DALLAS TX 75235 8313
++ZACHRY, TYLER, WOOD
++4/18/2022 650-2530-000 469-697-4300
++SIGNATURE Time Zone: Eastern Central Mountain Pacific
++Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value 71921891 70842743866
++NON-NEGOTIABLE
++PLEASE READ THE IMPORTANT DISCLOSURES BELOW
++
++Based on facts as set forth in.			6550																																																																							
++The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.																																																																										
++																																																																										
++EMPLOYER IDENTIFICATION NUMBER:       61-1767919					EIN	61-1767919																																																																				
++					FIN	88-1303491																																																																				
++																																																																										
++						ID:		Ssn: 		DoB:  																																																																
++						37305581		633441725		34622																																																																
++																																																																										
++												1																																																														
++																																																																										
++ALPHABET						Name	Tax Period 	Other Benefits and	Social Security	Medicare	Withholding																																																															
++ZACHRY T WOOD						Fed 941 Corporate	Sunday, September 30, 2007	66987	28841	6745	31400																																																															
++5323 BRADFORD DR						Fed 941 West Subsidiary	Sunday, September 30, 2007	17115	7369	1723	8023																																																															
++DALLAS TX 75235-8314						Fed 941 South Subsidiary	Sunday, September 30, 2007	23906	10293	2407	11206																																																															
++ORIGINAL REPORT						Fed 941 East Subsidiary	Sunday, September 30, 2007	11248	4843	1133	5272																																																															
++Income, Rents, & Royalty						Fed 941 Corp - Penalty	Sunday, September 30, 2007	27199	11710	2739	12749																																																															
++INCOME STATEMENT 						Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17028																																																																		
++																																																																										
++GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019																																																															
++																																																																										
++Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30818000000	25056000000	19744000000	22177000000	25055000000	22931000000																																																															
++Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																																															
++	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	64133000000	34071000000																																																															
++Other Revenue											6428000000																																																															
++Cost of Revenue	-110939000000	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																																															
++Cost of Goods and Services	-110939000000	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																																															
++Operating Income/Expenses	-67984000000	-20452000000	-16466000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000	-14200000000	-15789000000	-13754000000																																																															
++Selling, General and Administrative Expenses	-36422000000	-11744000000	-8772000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000	-7380000000	-8567000000	-7200000000																																																															
++General and Administrative Expenses	-13510000000	-4140000000	-3256000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000	-2880000000	-2829000000	-2591000000																																																															
++Selling and Marketing Expenses	-22912000000	-7604000000	-5516000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000	-4500000000	-5738000000	-4609000000																																																															
++Research and Development Expenses	-31562000000	-8708000000	-7694000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000	-6820000000	-7222000000	-6554000000																																																															
++Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																																															
++Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3038000000	2146000000	1894000000	-220000000	1438000000	-549000000																																																															
++Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																																															
++Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																																															
++																																																																										
++Interest Expense Net of Capitalized Interest	-346000000	-117000000	-77000000	-76000000	-76000000	-53000000	-48000000	-13000000	-21000000	-17000000	-23000000																																																															
++Interest Income	1499000000	378000000	387000000	389000000	345000000	386000000	460000000	433000000	586000000	621000000	631000000																																																															
++Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3530000000	1957000000	1696000000	-809000000	899000000	-1452000000																																																															
++Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3262000000	2015000000	1842000000	-802000000	399000000	-1479000000																																																															
++Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355000000	26000000	-54000000	74000000	460000000	-14000000																																																															
++Gain/Loss on Foreign Exchange	-240000000	-163000000	-139000000	-51000000	113000000	-87000000	-84000000	-92000000	-81000000	40000000	41000000																																																															
++Irregular Income/Expenses	0	0				0	0	0	0	0	0																																																															
++Other Irregular Income/Expenses	0	0				0	0	0	0	0	0																																																															
++Other Income/Expense, Non-Operating	-1497000000	-108000000	-484000000	-613000000	-292000000	-825000000	-223000000	-222000000	24000000	-65000000	295000000																																																															
++Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18689000000	13359000000	8277000000	7757000000	10704000000	8628000000																																																															
++Provision for Income Tax	-14701000000	-3760000000	-4128000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	-921000000	-33000000	-1560000000																																																															
++Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Income Statement Supplemental Section																																																																										
++Reported Normalized and Operating Income/Expense Supplemental Section																																																																										
++Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																																															
++Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																																															
++Reported Effective Tax Rate	0		0	0	0		0	0	0		0																																																															
++Reported Normalized Income									6836000000																																																																	
++Reported Normalized Operating Profit									7977000000																																																																	
++Other Adjustments to Net Income Available to Common Stockholders																																																																										
++Discontinued Operations																																																																										
++Basic EPS	114	31	28	28	27	23	17	10	10	15	10																																																															
++Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10																																																															
++Basic EPS from Discontinued Operations																																																																										
++Diluted EPS	112	31	28	27	26	22	16	10	10	15	10																																																															
++Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10																																																															
++Diluted EPS from Discontinued Operations																																																																										
++Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000																																																															
++Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000																																																															
++Reported Normalized Diluted EPS									10																																																																	
++Basic EPS	114	31	28	28	27	23	17	10	10	15	10																																																															
++Diluted EPS	112	31	28	27	26	22	16	10	10	15	10																																																															
++Basic WASO	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000																																																															
++Diluted WASO	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000																																																															
++Fiscal year end September 28th., 2022. | USD																																																																										
++																																																																										
++31622,6:39 PM																																																																										
++Morningstar.com Intraday Fundamental Portfolio View Print Report								Print																																																																		
++																																																																										
++3/6/2022 at 6:37 PM											Current Value																																																															
++											15335150186014																																																															
++																																																																										
++GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021																																																																								
++Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020																																																																				
++Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30818000000																																																																				
++Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22677000000																																																																				
++Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22677000000																																																																				
++Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15227000000																																																																				
++Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5748000000																																																																				
++Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3725000000																																																																				
++Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3725000000																																																																				
++Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3539000000																																																																				
++Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186000000																																																																				
++Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3223000000																																																																				
++Investment Income/Loss, Non-Cash Adjustment		-2478000000	-1287000000	379000000	1100000000	1670000000																																																																				
++Gain/Loss on Financial Instruments, Non-Cash Adjustment		-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																																																																				
++Other Non-Cash Items		-14000000	-2158000000	-2883000000	-4751000000	-3262000000																																																																				
++Changes in Operating Capital		-2225000000	64000000	-8000000	-255000000	392000000																																																																				
++Change in Trade and Other Receivables		-5819000000	2806000000	-871000000	-1233000000	1702000000																																																																				
++Change in Trade/Accounts Receivable		-5819000000	-2409000000	-3661000000	2794000000	-5445000000																																																																				
++Change in Other Current Assets		-399000000	-2409000000	-3661000000	2794000000	-5445000000																																																																				
++Change in Payables and Accrued Expenses		6994000000	-1255000000	-199000000	7000000	-738000000																																																																				
++Change in Trade and Other Payables		1157000000	3157000000	4074000000	-4956000000	6938000000																																																																				
++Change in Trade/Accounts Payable		1157000000	238000000	-130000000	-982000000	963000000																																																																				
++Change in Accrued Expenses		5837000000	238000000	-130000000	-982000000	963000000																																																																				
++Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	-3974000000	5975000000																																																																				
++Change in Other Operating Capital		-3369000000	272000000	-3000000	137000000	207000000																																																																				
++Change in Prepayments and Deposits			3041000000	-1082000000	785000000	740000000																																																																				
++Cash Flow from Investing Activities		-11016000000																																																																								
++Cash Flow from Continuing Investing Activities		-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																																																																				
++Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6383000000	-10050000000	-9074000000	-5383000000	-7281000000																																																																				
++Purchase of Property, Plant and Equipment		-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																																																																				
++Sale and Disposal of Property, Plant and Equipment			-6819000000	-5496000000	-5942000000	-5479000000																																																																				
++Purchase/Sale of Business, Net		-385000000																																																																								
++Purchase/Acquisition of Business		-385000000	-259000000	-308000000	-1666000000	-370000000																																																																				
++Purchase/Sale of Investments, Net		-4348000000	-259000000	-308000000	-1666000000	-370000000																																																																				
++Purchase of Investments		-40860000000	-3360000000	-3293000000	2195000000	-1375000000																																																																				
++Sale of Investments		36512000000	-35153000000	-24949000000	-37072000000	-36955000000																																																																				
++Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35580000000																																																																				
++Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57000000																																																																				
++Sales of Other Non-Current Assets																																																																										
++Cash Flow from Financing Activities		-16511000000	-15254000000																																																																							
++Cash Flow from Continuing Financing Activities		-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																																																																				
++Issuance of/Payments for Common Stock, Net		-13473000000	-12610000000	-15991000000	-13606000000	-9270000000																																																																				
++Payments for Common Stock		13473000000	-12610000000	-12796000000	-11395000000	-7904000000																																																																				
++Proceeds from Issuance of Common Stock				-12796000000	-11395000000	-7904000000																																																																				
++Issuance of/Repayments for Debt, Net		115000000	-42000000																																																																							
++Issuance of/Repayments for Long Term Debt, Net		115000000	-42000000	-1042000000	-37000000	-57000000																																																																				
++Proceeds from Issuance of Long Term Debt		6250000000	6350000000	-1042000000	-37000000	-57000000																																																																				
++Repayments for Long Term Debt		6365000000	-6392000000	6699000000	900000000	0																																																																				
++Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	-2602000000	-7741000000	-937000000	-57000000																																																																				
++				-2453000000	-2184000000	-1647000000																																																																				
++																																																																										
++Other Financing Cash Flow																																																																										
++Cash and Cash Equivalents, End of Period																																																																										
++Change in Cash		0		300000000	10000000	338000000000																																																																				
++Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26465000000																																																																				
++Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	-3175000000	300000000	6126000000																																																																				
++Cash Flow Supplemental Section		181000000000	-146000000000	183000000	-143000000	210000000																																																																				
++Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20129000000000																																																																				
++Income Tax Paid, Supplemental		2774000000	89000000	-2992000000		6336000000																																																																				
++Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4990000000																																																																				
++																																																																										
++12 Months Ended																																																																										
++_________________________________________________________																																																																										
++			Q4 2020			Q4  2019																																																																				
++Income Statement 																																																																										
++USD in "000'"s																																																																										
++Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019																																																																				
++Costs and expenses:																																																																										
++Cost of revenues			182527			161857																																																																				
++Research and development																																																																										
++Sales and marketing			84732			71896																																																																				
++General and administrative			27573			26018																																																																				
++European Commission fines			17946			18464																																																																				
++Total costs and expenses			11052			9551																																																																				
++Income from operations			0			1697																																																																				
++Other income (expense), net			141303			127626																																																																				
++Income before income taxes			41224			34231																																																																				
++Provision for income taxes			6858000000			5394																																																																				
++Net income			22677000000			19289000000																																																																				
++*include interest paid, capital obligation, and underweighting			22677000000			19289000000																																																																				
++			22677000000			19289000000																																																																				
++Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																																																																										
++Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)																																																																										
++																																																																										
++																																																																										
++For Paperwork Reduction Act Notice, see the seperate Instructions.																																																																										
++JPMORGAN TRUST III																																																																										
++A/R Aging Summary																																																																										
++As of July 28, 2022																																																																										
++ZACHRY T WOOD
++		Interest Rate, as prescribed by The Secretary of The Treasury.																																																																							
++Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over	Total																																																																				
++
++0					0																																																																				
++TOTAL	134839	0	0	0	0	134839																																																																				
++ Alphabet Inc.  																																																																										
++ P
++				 £134,839.00 																																																																					
++																																																																										
++ US$ in millions 																																																																										
++ Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 																																																																					
++ Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 																																																																					
++ Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 																																																																					
++ Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00
++ :Build::
++ :Run|'Run ''        run: |
+          az webapp deployment slot swap --slot canary --target-slot production -n ghdocs-prod -g docs-prod
+      - name: Purge Fastly edge cache
+        env:
+          FASTLY_TOKEN: ${{ secrets.FASTLY_TOKEN }}
+          FASTLY_SERVICE_ID: ${{ secrets.FASTLY_SERVICE_ID }}
+          FASTLY_SURROGATE_KEY: 'every-deployment'
+        run: npm install got && .github/actions-scripts/purge-fastly-edge-cache.js
+
+      - name: Send Slack notification if workflow failed
+        uses: someimportantcompany/github-actions-slack-message@f8d28715e7b8a4717047d23f48c39827cacad340
+        if: ${{ failure() }}
+        with:
+          channel: ${{ secrets.DOCS_ALERTS_SLACK_CHANNEL_ID }}
+          bot-token: ${{ secrets.SLACK_DOCS_BOT_TOKEN }}
+          color: failure
+          text: Production deployment (Azure) failed at commit ${{ github.sha }}. See https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}Net Pay		70842743866		70842743866																																																																						
++CHECKING				        																																																																						
++Net Check		70842743866		        																																																																						
++Your federal taxable wages this period are $																																																																										
++ALPHABET INCOME								Advice number:			650001																																																															
++1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043								Pay date:			Monday, April 18, 2022																																																															
++																																																																										
++Deposited to the account Of: ZACHRY T. WOOD								xxxxxxxx6547			transit ABA			amount																																																												
++PLEASE READ THE IMPORTANT DISCLOSURES BELOW		Bank																													PNC Bank Business Tax I.D. Number: 633441725				
++CIF Department (Online Banking) Checking Account: 47-2041-6547
++P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation
++500 First Avenue ALPHABET
++Pittsburgh, PA 15219-3128 5323 BRADFORD DR
++NON-NEGOTIABLE DALLAS TX 75235 8313
++ZACHRY, TYLER, WOOD
++4/18/2022 650-2530-000 469-697-4300
++SIGNATURE Time Zone: Eastern Central Mountain Pacific
++Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value 71921891 70842743866
++NON-NEGOTIABLE
++PLEASE READ THE IMPORTANT DISCLOSURES BELOW
++
++Based on facts as set forth in.			6550																																																																							
++The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.																																																																										
++																																																																										
++EMPLOYER IDENTIFICATION NUMBER:       61-1767919					EIN	61-1767919																																																																				
++					FIN	88-1303491																																																																				
++																																																																										
++						ID:		Ssn: 		DoB:  																																																																
++						37305581		633441725		34622																																																																
++																																																																										
++												1																																																														
++																																																																										
++ALPHABET						Name	Tax Period 	Other Benefits and	Social Security	Medicare	Withholding																																																															
++ZACHRY T WOOD						Fed 941 Corporate	Sunday, September 30, 2007	66987	28841	6745	31400																																																															
++5323 BRADFORD DR						Fed 941 West Subsidiary	Sunday, September 30, 2007	17115	7369	1723	8023																																																															
++DALLAS TX 75235-8314						Fed 941 South Subsidiary	Sunday, September 30, 2007	23906	10293	2407	11206																																																															
++ORIGINAL REPORT						Fed 941 East Subsidiary	Sunday, September 30, 2007	11248	4843	1133	5272																																																															
++Income, Rents, & Royalty						Fed 941 Corp - Penalty	Sunday, September 30, 2007	27199	11710	2739	12749																																																															
++INCOME STATEMENT 						Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17028																																																																		
++																																																																										
++GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019																																																															
++																																																																										
++Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30818000000	25056000000	19744000000	22177000000	25055000000	22931000000																																																															
++Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																																															
++	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	64133000000	34071000000																																																															
++Other Revenue											6428000000																																																															
++Cost of Revenue	-110939000000	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																																															
++Cost of Goods and Services	-110939000000	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																																															
++Operating Income/Expenses	-67984000000	-20452000000	-16466000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000	-14200000000	-15789000000	-13754000000																																																															
++Selling, General and Administrative Expenses	-36422000000	-11744000000	-8772000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000	-7380000000	-8567000000	-7200000000																																																															
++General and Administrative Expenses	-13510000000	-4140000000	-3256000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000	-2880000000	-2829000000	-2591000000																																																															
++Selling and Marketing Expenses	-22912000000	-7604000000	-5516000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000	-4500000000	-5738000000	-4609000000																																																															
++Research and Development Expenses	-31562000000	-8708000000	-7694000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000	-6820000000	-7222000000	-6554000000																																																															
++Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																																															
++Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3038000000	2146000000	1894000000	-220000000	1438000000	-549000000																																																															
++Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																																															
++Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																																															
++																																																																										
++Interest Expense Net of Capitalized Interest	-346000000	-117000000	-77000000	-76000000	-76000000	-53000000	-48000000	-13000000	-21000000	-17000000	-23000000																																																															
++Interest Income	1499000000	378000000	387000000	389000000	345000000	386000000	460000000	433000000	586000000	621000000	631000000																																																															
++Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3530000000	1957000000	1696000000	-809000000	899000000	-1452000000																																																															
++Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3262000000	2015000000	1842000000	-802000000	399000000	-1479000000																																																															
++Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355000000	26000000	-54000000	74000000	460000000	-14000000																																																															
++Gain/Loss on Foreign Exchange	-240000000	-163000000	-139000000	-51000000	113000000	-87000000	-84000000	-92000000	-81000000	40000000	41000000																																																															
++Irregular Income/Expenses	0	0				0	0	0	0	0	0																																																															
++Other Irregular Income/Expenses	0	0				0	0	0	0	0	0																																																															
++Other Income/Expense, Non-Operating	-1497000000	-108000000	-484000000	-613000000	-292000000	-825000000	-223000000	-222000000	24000000	-65000000	295000000																																																															
++Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18689000000	13359000000	8277000000	7757000000	10704000000	8628000000																																																															
++Provision for Income Tax	-14701000000	-3760000000	-4128000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	-921000000	-33000000	-1560000000																																																															
++Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
++Income Statement Supplemental Section																																																																										
++Reported Normalized and Operating Income/Expense Supplemental Section																																																																										
++Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																																															
++Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																																															
++Reported Effective Tax Rate	0		0	0	0		0	0	0		0																																																															
++Reported Normalized Income									6836000000																																																																	
++Reported Normalized Operating Profit									7977000000																																																																	
++Other Adjustments to Net Income Available to Common Stockholders																																																																										
++Discontinued Operations																																																																										
++Basic EPS	114	31	28	28	27	23	17	10	10	15	10																																																															
++Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10																																																															
++Basic EPS from Discontinued Operations																																																																										
++Diluted EPS	112	31	28	27	26	22	16	10	10	15	10																																																															
++Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10																																																															
++Diluted EPS from Discontinued Operations																																																																										
++Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000																																																															
++Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000																																																															
++Reported Normalized Diluted EPS									10																																																																	
++Basic EPS	114	31	28	28	27	23	17	10	10	15	10																																																															
++Diluted EPS	112	31	28	27	26	22	16	10	10	15	10																																																															
++Basic WASO	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000																																																															
++Diluted WASO	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000																																																															
++Fiscal year end September 28th., 2022. | USD																																																																										
++																																																																										
++31622,6:39 PM																																																																										
++Morningstar.com Intraday Fundamental Portfolio View Print Report								Print																																																																		
++																																																																										
++3/6/2022 at 6:37 PM											Current Value																																																															
++											15335150186014																																																															
++																																																																										
++GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021																																																																								
++Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020																																																																				
++Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30818000000																																																																				
++Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22677000000																																																																				
++Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22677000000																																																																				
++Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15227000000																																																																				
++Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5748000000																																																																				
++Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3725000000																																																																				
++Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3725000000																																																																				
++Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3539000000																																																																				
++Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186000000																																																																				
++Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3223000000																																																																				
++Investment Income/Loss, Non-Cash Adjustment		-2478000000	-1287000000	379000000	1100000000	1670000000																																																																				
++Gain/Loss on Financial Instruments, Non-Cash Adjustment		-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																																																																				
++Other Non-Cash Items		-14000000	-2158000000	-2883000000	-4751000000	-3262000000																																																																				
++Changes in Operating Capital		-2225000000	64000000	-8000000	-255000000	392000000																																																																				
++Change in Trade and Other Receivables		-5819000000	2806000000	-871000000	-1233000000	1702000000																																																																				
++Change in Trade/Accounts Receivable		-5819000000	-2409000000	-3661000000	2794000000	-5445000000																																																																				
++Change in Other Current Assets		-399000000	-2409000000	-3661000000	2794000000	-5445000000																																																																				
++Change in Payables and Accrued Expenses		6994000000	-1255000000	-199000000	7000000	-738000000																																																																				
++Change in Trade and Other Payables		1157000000	3157000000	4074000000	-4956000000	6938000000																																																																				
++Change in Trade/Accounts Payable		1157000000	238000000	-130000000	-982000000	963000000																																																																				
++Change in Accrued Expenses		5837000000	238000000	-130000000	-982000000	963000000																																																																				
++Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	-3974000000	5975000000																																																																				
++Change in Other Operating Capital		-3369000000	272000000	-3000000	137000000	207000000																																																																				
++Change in Prepayments and Deposits			3041000000	-1082000000	785000000	740000000																																																																				
++Cash Flow from Investing Activities		-11016000000																																																																								
++Cash Flow from Continuing Investing Activities		-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																																																																				
++Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6383000000	-10050000000	-9074000000	-5383000000	-7281000000																																																																				
++Purchase of Property, Plant and Equipment		-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																																																																				
++Sale and Disposal of Property, Plant and Equipment			-6819000000	-5496000000	-5942000000	-5479000000																																																																				
++Purchase/Sale of Business, Net		-385000000																																																																								
++Purchase/Acquisition of Business		-385000000	-259000000	-308000000	-1666000000	-370000000																																																																				
++Purchase/Sale of Investments, Net		-4348000000	-259000000	-308000000	-1666000000	-370000000																																																																				
++Purchase of Investments		-40860000000	-3360000000	-3293000000	2195000000	-1375000000																																																																				
++Sale of Investments		36512000000	-35153000000	-24949000000	-37072000000	-36955000000																																																																				
++Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35580000000																																																																				
++Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57000000																																																																				
++Sales of Other Non-Current Assets																																																																										
++Cash Flow from Financing Activities		-16511000000	-15254000000																																																																							
++Cash Flow from Continuing Financing Activities		-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																																																																				
++Issuance of/Payments for Common Stock, Net		-13473000000	-12610000000	-15991000000	-13606000000	-9270000000																																																																				
++Payments for Common Stock		13473000000	-12610000000	-12796000000	-11395000000	-7904000000																																																																				
++Proceeds from Issuance of Common Stock				-12796000000	-11395000000	-7904000000																																																																				
++Issuance of/Repayments for Debt, Net		115000000	-42000000																																																																							
++Issuance of/Repayments for Long Term Debt, Net		115000000	-42000000	-1042000000	-37000000	-57000000																																																																				
++Proceeds from Issuance of Long Term Debt		6250000000	6350000000	-1042000000	-37000000	-57000000																																																																				
++Repayments for Long Term Debt		6365000000	-6392000000	6699000000	900000000	0																																																																				
++Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	-2602000000	-7741000000	-937000000	-57000000																																																																				
++				-2453000000	-2184000000	-1647000000																																																																				
++																																																																										
++Other Financing Cash Flow																																																																										
++Cash and Cash Equivalents, End of Period																																																																										
++Change in Cash		0		300000000	10000000	338000000000																																																																				
++Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26465000000																																																																				
++Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	-3175000000	300000000	6126000000																																																																				
++Cash Flow Supplemental Section		181000000000	-146000000000	183000000	-143000000	210000000																																																																				
++Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20129000000000																																																																				
++Income Tax Paid, Supplemental		2774000000	89000000	-2992000000		6336000000																																																																				
++Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4990000000																																																																				
++																																																																										
++12 Months Ended																																																																										
++_________________________________________________________																																																																										
++			Q4 2020			Q4  2019																																																																				
++Income Statement 																																																																										
++USD in "000'"s																																																																										
++Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019																																																																				
++Costs and expenses:																																																																										
++Cost of revenues			182527			161857																																																																				
++Research and development																																																																										
++Sales and marketing			84732			71896																																																																				
++General and administrative			27573			26018																																																																				
++European Commission fines			17946			18464																																																																				
++Total costs and expenses			11052			9551																																																																				
++Income from operations			0			1697																																																																				
++Other income (expense), net			141303			127626																																																																				
++Income before income taxes			41224			34231																																																																				
++Provision for income taxes			6858000000			5394																																																																				
++Net income			22677000000			19289000000																																																																				
++*include interest paid, capital obligation, and underweighting			22677000000			19289000000																																																																				
++			22677000000			19289000000																																																																				
++Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																																																																										
++Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)																																																																										
++																																																																										
++																																																																										
++For Paperwork Reduction Act Notice, see the seperate Instructions.																																																																										
++JPMORGAN TRUST III																																																																										
++A/R Aging Summary																																																																										
++As of July 28, 2022																																																																										
++ZACHRY T WOOD
++		Interest Rate, as prescribed by The Secretary of The Treasury.																																																																							
++Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over	Total																																																																				
++
++0					0																																																																				
++TOTAL	134839	0	0	0	0	134839																																																																				
++ Alphabet Inc.  																																																																										
++ P
++				 £134,839.00 																																																																					
++																																																																										
++ US$ in millions 																																																																										
++ Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 																																																																					
++ Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 																																																																					
++ Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 																																																																					
++ Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00
From ebab8edc6be0722a342cdd638ac7bc66c8bd82ac Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
 <109656750+zakwarlord7@users.noreply.github.com>
Date: Fri, 18 Nov 2022 04:43:58 -0600
Subject: [PATCH] Update CONTRIBUTING.md

-                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright `consensus` for changes to consensus critical code
  - `doc` for changes to the documentation
  - `qt` or `gui` for changes to bitcoin-qt
  - `log` for changes to log messages
  - `mining` for changes to the mining code
  - `net` or `p2p` for changes to the peer-to-peer network code
  - `refactor` for structural changes that do not change behavior
  - `rpc`, `rest` or `zmq` for changes to the RPC, REST or ZMQ APIs
  - `script` for changes to the scripts and tools
  - `test`, `qa` or `ci` for changes to the unit tests, QA tests or CI code
  - `util` or `lib` for changes to the utils or libraries
  - `wallet` for changes to the wallet code
  - `build`
From 24f62771b9ff1f37df6ef746b9b207699835a3a0 Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
 <109656750+zakwarlord7@users.noreply.github.com>
Date: Wed, 16 Nov 2022 22:48:46 -0600
Subject: [PATCH] Update CODE_OF_CONDUCT.md

---
 CODE_OF_CONDUCT.md | 521 +++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 521 insertions(+)

diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index e66f6d941d8c..804a12ec8f37 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
@@ -1,5 +1,526 @@
 # Contributor Covenant Code of Conduct
+run:actions:uses:steps:Skip to content
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+bitcoin-core
+/
+gitian.sigs
+Code
+Issues
+29
+Pull requests
+Security
+Insights
+Jump to bottom
+🐛'''fix'v'new #1542
+ Open
+Iixixi opened this issue yesterday · 0 comments
+Comments
+@Iixixi Iixixi commented yesterday • 
+Hello-World-Bug-Fix
+
+Expected behavior
+
+Actual behavior
+
+To reproduce
+
+System information
+
+​int​ g_count = ​0​;
+
+​namespace​ ​foo​ {
+​class​ ​Class​
+{
+    std::string m_name;
+
+​public:​
+    ​bool​ ​Function​(​const​ std::string& s, ​int​ n)
+    {
+        ​//​ Comment summarising what this section of code does​
+        ​for​ (​int​ i = ​0​; i < n; ++i) {
+            ​int​ total_sum = ​0​;
+            ​//​ When something fails, return early​
+            ​if​ (!​Something​()) ​return​ ​false​;
+            ...
+            ​if​ (​SomethingElse​(i)) {
+                total_sum += ​ComputeSomething​(g_count)
+                ​DoSomething​(m_name, total_sum)
+        'Success return is usually at the end​'
+        ​'rereturn'true','​@iixixi/iixixi.READ.md'
+'Return::'#'
+#The build system is set up to compile an executable called test_bitcoin that runs all of the unit tests. The main source file for the test library is found in util/setup_common.cpp.
+
+base_directory
+​$ ./copyright_header.py report 
+base_directory
+ [Zachry T Wood III]
+$ ./copyright_header.py update $ https://github.com/@iixixi/iixixi/READ.md@iixixi/iixixi/read.md/workflows
+update translations, Transactional primary payment name address city state country phone number ssid and DOB for all bank filing records.
+
+NAME: 2003©®™bitore,©®™ bitcoin,©®™ bullion©®™ {[✓]}©®™(c)(r)2003-°° {[✓]}Zachry Tyler Wood 2722 Arroyo Ave Dallas Tx 75219, I made my first runescape gold pieces script to understand object construction: and how they made Runescape gold peices but I pasted it between two other scripts and tried to CopyRight the patent "gp",
+Thank god I had an angel watcheling over my shoulder because I didn't realize it being a mad ass snot nosed kid that has made some ugly orange coin after being promoted that I made a creation that didn't have an object I'd. And needed to be named and given an I'd. And finished being created to have a fully contrusted object so I drug a picture to the yellow drag img here dialog box, and then because it was enlayed upon one another it made me choose a colour after I didn't like the black one It produced automatically from the png it produced automatically from the image I had pulled into the dialog box
+I accidentally implimentred a confidential token into the item i.d. area that was an unproduced un identifiable non recorded item in the database library and needed to be given a name a number and a look so it wasn't a warning that popped up it was a blessing 🤣 object_token@Iixixi.git {object_token@Iixixi.git})value bitore now called bitcoin given to Vanyessa Countryman by Zachry wood at age 9
+Name:: Shining_120@yahoo.com or zakwarlord7@HOTMAIL.com/repository@ZachryTylerWood.Administrator@.git]::request::PUSH:e.g@iixixi/iixixi.Read.md/Paradise
+PUSH@IIXIXI/IIXIXI/READ.MD
+https://github.com/bitore/bitcoin/branches/trunk/@iixixii.json.yaml.docx/versioning@v-0.1.6,3.9.11xprocess.md#syncing-with-TEIRAFOURM: actually called TIERAFORM
+dnspython
+latest
+Search docs
+CONTENTS:
+
+What’s New in built with Bundled with dnspython using their builder not that they are the builder you've got it all wrong
+Community
+Installation
+Dnspython Manual
+DNS Names
+DNS Rdata
+DNS Messages
+The dns.message.Message Class
+Making DNS Messages
+Message Flags
+Message Opcodes
+Message Rcodes
+Message EDNS Options
+The dns.message.QueryMessage Class
+The dns.message.ChainingResult Class
+The dns.update.UpdateMessage Class
+DNS Query Support
+Stub Resolver
+DNS Zones
+DNSSEC
+Asynchronous I/O Support
+Exceptions
+Miscellaneous Utilities
+A Note on Typing
+DNS RFC Reference
+Dnspython License
+dnspython
+Docs » Dnspython Manual » DNS Messages » The dns.message.Message Class
+The dns.message.Message Class
+This is the base class for all messages, and the class used for any DNS opcodes that do not have a more specific class.
+
+classdns.message.Message(id=none of your business it was private repository)[]
+A DNS message.
+
+id
+An int, the query id; the default is a randomly chosen id.
+
+flags
+An int, the DNS flags of the message.
 
+sections
+A list of lists of dns.rrset.RRset objects.
+
+edns
+An int, the EDNS level to use. The default is -1, no EDNS.
+
+ednsflags
+An int, the EDNS flags.
+
+payload
+An int, the EDNS payload size. The default is 0.
+
+options
+The EDNS options, a list of dns.edns.Option objects. The default is the empty list.
+
+''{request}'{(token)}'{{[payload]}}''
+'Pull'request'':''{''bitore'unlimited''}'{''[3413]''}'[464000000000.00]://Contruct:ref: container@iixixi/repositories/ad_new_container@user/bin/workflow/name/type:@iixixi/iixixi/Read.md
+
+The associated request’s EDNS payload size. This field is meaningful in response messages, and if set to a non-zero value, will limit the size of the response to the specified size. The default is 0, which means “use the default limit” which is currently 34173.
+
+keyring
+A dns.tsig.Key, the TSIG key. The default is None.
+
+keyname
+The TSIG keyname to use, a dns.name.Name. The default is None.
+
+keyalgorithm
+A dns.name.Name, the TSIG algorithm to use. Defaults to dns.tsig.default_algorithm. Constants for TSIG algorithms are defined the in dns.tsig module.
+
+request_mac
+A bytes, the TSIG MAC of the request message associated with this message; used when validating TSIG signatures.
+
+fudge
+An int, the TSIG time fudge. The default is 300 seconds.
+
+original_id
+An int, the TSIG original id; defaults to the message’s id.
+
+tsig_error
+An int, the TSIG error code. The default is 0.
+
+other_data
+A bytes, the TSIG “other data”. The default is the empty bytes.
+
+mac
+A bytes, the TSIG MAC for this message.
+
+xfr
+A bool. This attribute is true when the message being used for the results of a DNS zone transfer. The default is False.
+
+origin
+A dns.name.Name. The origin of the zone in messages which are used for zone transfers or for DNS dynamic updates. The default is None.
+
+tsig_ctx
+An hmac.HMAC, the TSIG signature context associated with this message. The default is None.
+
+had_tsig
+A bool, which is True if the message had a TSIG signature when it was decoded from wire format.
+
+multi
+A bool, which is True if this message is part of a multi-message sequence. The default is False. This attribute is used when validating TSIG signatures on messages which are part of a zone transfer.
+
+first
+A bool, which is True if this message is stand-alone, or the first of a multi-message sequence. The default is True. This variable is used when validating TSIG signatures on messages which are part of a zone transfer.
+
+index
+A dict, an index of RRsets in the message. The index key is (section, name, rdclass, rdtype, covers, deleting). The default is {}. Indexing improves the performance of finding RRsets. Indexing can be disabled by setting the index to None.
+
+additional
+The additional data section.
+
+answer
+The answer section.
+
+authority
+The authority section.
+
+find_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
+Find the RRset with the given attributes in the specified section.
+
+section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
+
+my_message.find_rrset(my_message.answer, name, rdclass, rdtype)
+my_message.find_rrset(dns.message.ANSWER, name, rdclass, rdtype)
+name, a dns.name.Name, the name of the RRset.
+
+rdclass, an int, the class of the RRset.
+
+rdtype, an int, the type of the RRset.
+
+covers, an int or None, the covers value of the RRset. The default is None.
+
+deleting, an int or None, the deleting value of the RRset. The default is None.
+
+create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
+
+force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
+
+Raises KeyError if the RRset was not found and create was False.
+
+Returns a dns.rrset.RRset object.
+
+get_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
+Get the RRset with the given attributes in the specified section.
+
+If the RRset is not found, None is returned.
+
+section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
+
+my_message.get_rrset(my_message.answer, name, rdclass, rdtype)
+my_message.get_rrset(dns.message.ANSWER, name, rdclass, rdtype)
+name, a dns.name.Name, the name of the RRset.
+
+rdclass, an int, the class of the RRset.
+
+rdtype, an int, the type of the RRset.
+
+covers, an int or None, the covers value of the RRset. The default is None.
+
+deleting, an int or None, the deleting value of the RRset. The default is None.
+
+create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
+
+force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
+
+Returns a dns.rrset.RRset object or None.
+
+is_response(other)[source]
+Is other a response this message?
+
+Returns a bool.
+
+opcode()[source]
+Return the opcode.
+
+Returns an int.
+
+question
+The question section.
+
+rcode()[source]
+Return the rcode.
+
+Returns an int.
+
+section_from_number(number)[source]
+Return the section list associated with the specified section number.
+
+number is a section number int or the text form of a section name.
+
+Raises ValueError if the section isn’t known.
+
+Returns a list.
+
+section_number(section)[source]
+Return the “section number” of the specified section for use in indexing.
+
+section is one of the section attributes of this message.
+
+::Raises:"'pop-up-window'"ObjectItemIdConstValueUnknownwindow-pop,-up:"if the section isn’t known"'
+
+Returns,?,"true?,",
+
+set_opcode(opcode)[source]
+Set the opcode.
+
+opcode, an int, is the opcode to set.
+
+set_rcode(rcode)[source]
+Set the rcode.
+
+rcode, an int, is the rcode to set.
+
+to_text(origin=None, relativize=True, **kw)[source]
+Convert the message to text.
+
+The origin, relativize, and any other keyword arguments are passed to the RRset to_wire() method.
+
+Returns a str.
+
+to_wire(origin=None, max_size=0, multi=False, tsig_ctx=None, **kw)[source]
+Return a string containing the message in DNS compressed wire format.
+
+Additional keyword arguments are passed to the RRset to_wire() method.
+
+origin, a dns.name.Name or None, the origin to be appended to any relative names. If None, and the message has an origin attribute that is not None, then it will be used.
+
+max_size, an int, the maximum size of the wire format output; default is 0, which means “the message’s request payload, if nonzero, or 65535”.
+
+multi, a bool, should be set to True if this message is part of a multiple message sequence.
+
+tsig_ctx, a dns.tsig.HMACTSig or dns.tsig.GSSTSig object, the ongoing TSIG context, used when signing zone transfers.
+
+Raises dns.exception.TooBig if max_size was exceeded.
+
+Returns a bytes.
+
+use_edns(edns=0, ednsflags=0, payload=1232, request_payload=None, options=None)[source]
+Configure EDNS behavior.
+
+edns, an int, is the EDNS level to use. Specifying None, False, or -1 means “do not use EDNS”, and in this case the other parameters are ignored. Specifying True is equivalent to specifying 0, i.e. “use EDNS0”.
+
+ednsflags, an int, the EDNS flag values.
+
+payload, an int, is the EDNS sender’s payload field, which is the maximum size of UDP datagram the sender can handle. I.e. how big a response to this message can be.
+
+request_payload, an int, is the EDNS payload size to use when sending this message. If not specified, defaults to the value of payload.
+
+options, a list of dns.edns.Option objects or None, the EDNS options.
+
+use_tsig(keyring, keyname=None, fudge=300, original_id=None, tsig_error=0, other_data=b'', algorithm=)[source]
+When sending, a TSIG signature using the specified key should be added.
+
+key, a dns.tsig.Key is the key to use. If a key is specified, the keyring and algorithm fields are not used.
+
+keyring, a dict, callable or dns.tsig.Key, is either the TSIG keyring or key to use.
+
+The format of a keyring dict is a mapping from TSIG key name, as dns.name.Name to dns.tsig.Key or a TSIG secret, a bytes. If a dict keyring is specified but a keyname is not, the key used will be the first key in the keyring. Note that the order of keys in a dictionary is not defined, so applications should supply a keyname when a dict keyring is used, unless they know the keyring contains only one key. If a callable keyring is specified, the callable will be called with the message and the keyname, and is expected to return a key.
+
+keyname, a dns.name.Name, str or None, the name of thes TSIG key to use; defaults to None. If keyring is a dict, the key must be defined in it. If keyring is a dns.tsig.Key, this is ignored.
+
+fudge, an int, the TSIG time fudge.
+
+original_id, an int, the TSIG original id. If None, the message’s id is used.
+
+tsig_error, an int, the TSIG error code.
+
+other_data, a bytes, the TSIG other data.
+
+algorithm, a dns.name.Name, the TSIG algorithm to use. This is only used if keyring is a dict, and the key entry is a bytes.
+
+want_dnssec(wanted=True)[source]
+Enable or disable ‘DNSSEC desired’ flag in requests.
+
+wanted, a bool. If True, then DNSSEC data is desired in the response, EDNS is enabled if required, and then the DO bit is set. If False, the DO bit is cleared if EDNS is enabled.
+
+The following constants may be used to specify sections in the find_rrset() and get_rrset() methods:
+
+dns.message.QUESTION= <MessageSection.QUESTION: 0>
+Message sections
+
+dns.message.ANSWER= <MessageSection.ANSWER: 1>
+Message sections
+
+dns.message.AUTHORITY= <MessageSection.AUTHORITY: 2>
+Message sections
+
+dns.message.ADDITIONAL= <MessageSection.ADDITIONAL: 3>
+Message sections
+
+Beat Triplebyte's online coding quiz. Get offers from top companies. Skip resumes & recruiters.
+
+Sponsored · Ads served ethically
+© Copyright =\not-=-not-equal-toDnspython Contributors 1 Zachry Tyler Wood = does equal the creating version of Foundings of ''bitore'unlimited''=''Zachry Tyler Wood''='' creator of bitore, bitcoin , bullion Foundings that were stolen by python because I used it to build it with. E.g. build:script:' runs-on:'python.js''
+
+Built with Sphinx using a theme provided by Read the Docs.
+
+update translations (ping wumpus, Diapolo or tcatm on IRC)
+
+
+
+Leave a comment
+Remember, contributions to this repository should follow our GitHub Community Guidelines.
+Assignees
+No one assigned
+Labels
+None yet
+Projects
+None yet
+Milestone
+No milestone
+Linked pull requests
+Successfully merging a pull request may close this issue.
+
+None yet
+Notifications
+Customize
+You’re receiving notifications because you authored the thread.
+1 participant
+@Iixixi
+© 2021 GitHub, Inc.
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
+request_pull:<{webRootUrl}>Trunk<{https://www.bitore.org/download/install/package/Bundler/rakefile/adk/api}>
+Name:Revert "(Echo(#41)" into iixixi/paradise ZACHRY T WOOD III
+Name:Automate:Autobot:Deploy:Dependabot:on:":"Ixixii:python.js:bitcoin.org/gitian/sigs@iixixibitcoin.org/adk/api.yaml.json/@iixixi/paradise.git
+Name:on:Deploy:Heroku:automerge:Dependabot":"to:":"Build:Container:construct:inputs:repo:
+ref:# This is a basic workflow to help you get started with Actions
+name:://construct:git.item.id.(c)(r).11890.git.item.id.gemgile://input:container:type:gemfile://Deploy:Repository://github.git/@iixixi/paradise/terraform://Build
+  push: [main]
+    branches: [mainbranch]
+  pull_request: [mainbranch]
+    branches: [trunk]
+Actions:
+ ://Deploy:Repo_workflow_dispatch:
+jobs:
+runs-on:iixixi-latest
+#steps:
+name:run:Automate:Construct:Dependabot:terraform://Build
+run:"NAME:":"DEPLOY-TO-iixixi":"Launch:":"rebase:":"reopen:":"Repo-sync":"pull:":"branches:":"zw":"/":"bitcoin-meta-gh:":"push:":"branches:":"{build:":"{[(item.id)]}":"{[(((c))((r)))]}":"Name:":"bitcoin}":"{inputs:":"#::":"on::":"run:":"command:":"run:":"{test:":"inputs:":"true",:":
+"Inputs:":"Command:":"build:":"repo:":"Name:":"iixixi/paradise@github.com":
+Inputs:":"On:":"run:":"Inputs:":"build":"jobs:":"steps:":
+Inputs:build":"and":"Name:Automate:Deploy:Dependabot:Heroku:AutoMerge:run:jobs:on:":"@iixixi":"Heroku:":"DependAutobot:":"build":":"test:":"and":"perfect:":"all":"read.me":"open:":"repos':"::Deploy-Heroku-to-@iixixi":"@github.com/iixixi/paradise":
+Inputs:name:Bui"ld:":"Deploy:":
+Repository:runs-on:@iixixiii-bitore-latest
+steps:uses:-actions:
+::Build:{workspaceRoot}:input:ref:{{[value]}{[(token)]}{[item_id]}}:build:token:ref:{[100000]}{[((c)(r))]}{{[11890]}}://construct://terraform://perfect
+-uses:
+-actions:
+-run-on:Versioning:0.1.3.9.11
+    -name:construct:token:input:container:deploy:repo:base:@iixixii/Paradise
+    -Use:.js"
+    -construct:{${{env":"token.gists.secrets.Bitore}}"
+      "-uses:actions/setup:'Automate'
+      "with:''DependabotHerokuRunWizard'
+      "versioning:''@v1.3.9.10'"
+     master:
+        "-version:":"{${{}}"
+    "-name:install
+    build:repo:":"true,"
+ ue,"
+      "-:on:":"run:":
+        "-Build:((c)(r))":
+        "-deploy:":
+        "-Install:":
+        "-run:":
+build:":
+        "-run:":
+test:":returns":"true,":
+    "-name:Deploy:":"and":"return:":
+      "-"uses:/webapps":"to":":
+      "deploy:":"@":"iixixi":
+      d"deploy:":"repo:pull:paradise:
+      repo:push:@iixixi/ZachryTylerWoodv1:
+      "Name:";""v2":
+      "-with:python.js":
+        "-app-name:${{bitcoin.org/adk/api/yaml/json/.png/.jpeg/.img/repo/::sync:":"{(":"(github.gists)_(secret_token)":")}}":"{":"(((c)(r)))":"}}}":"build:":":":"/":"/":"run:":"on:":"::Echo:":"#
+"publish":"gemfile:":"{[((c))((r))]}:":"{v1.3.1.0.11}":"[@iixixi]":"::build:":"repository":"::Echo:":"#::":
+pull:Master:
+Run:tests:results:"true"
+Construct:container:Type:gemfile.json
+Automate:deploy:repository-to-@iixixi/paradisebyzachrytwoodIII
+Automate:Extract:pdf.json-to-desktop
+"<li><Author:><Zachry Tyler Wood><Author><li>:
+return:run:push:Trunk:
+-li><Author:><Zachry Tyler Wood><Author><li>:
+runs:test:
+Test:Returns:Results:":"true,"
+jobs:
+Request:Push:branches:mainbranch:
+Request:pull:publish:package:iixixi/git.rakefile.gem/byzachryTwood
+COMMAND:BUILD:COMMIT-TO-MAINBRANCHTRUNK-cli.ci
+Run:iixixi/cli.ci/Update:Ownership.yml/.yaml.json
+Pull:
+request:branches:@iixixi/mainbranch.gem.json.yaml.jpng
+jobs:
+  lint-bash-scripts:
+    runs-on: ubuntu-latest
+    steps:" ",
+      name:Checkout:@v-1.0.3.9.11
+        uses:actions:
+        with:
+WebRootbin:https://www.github/lint.piper.js/bin/bash/terraform
+Transformation:'Engineering:results:"true,"'
+Run-on:
+launch: repo:deploy:release:publish-gpr:@myusername/repository/bin
+Deploy-to: @iixixi:
+Construct:Name:iixixi/cli/update:Ownership.yml'"
+    runs-on:@iixixi/latest-bitcoin.json.jpng.yaml
+    needs: @my-user-name/bin//lint.js/Meta_data:port:"branches:"ports:'8883':'8333'"
+        Item_i:11890_34173
+        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
+      postgres:
+        image: postgres:11
+        env:docker/bin/gem/rake/file.Gem/.json.yaml
+        "ports:'8333':'8883'"
+env:
+     Entry:test:env:construction:slack:build:Engineering:perfect:
+      "COMMADS:construct:"{${[(token)]}}":"{${{[((C)(R))]}}"
+    steps:
+       name:Checkout:publish:release:v-1.0.3.9.11
+        uses:actions:construct:
+       name:Setup:Ruby.gem
+        uses:actions:
+setup:ruby/gemfile/rake/api/sdk.se/api/adk.js/sun.runtime.js/json/jpng/.yaml.jpng
+setup:rubyversioning:v-1.0.3.9.11
+        with:
+          ruby-version: v-1.0.3.9.11
+      - name: Increase MySQL max_allowed_packet to 1GB (workaround for unknown/missing service option)
+        run:construct:docker:container:deploy:repository-to-@iixixi
+        getinstall:
+Pull:,mainbranch
+Branches:Masterbranch
+Pull:Masterbranch
+Branches:trunk
+Push:
+Branches:main

+Pull:
+branches:
+run::"ests",
+Results:"true",
+Command:construct:repo:container:type:docker.yml.json:build:container@iixixi
+Return:run
 ## Our Pledge
 
 We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
 This Product Contains Sensitive Taxpayer Data  

 Request Date: 08-02-2022  Response Date: 08-02-2022  Tracking Number: 102398244811 

 Account Transcript  

 FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020 

 TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725 

 ZACH T WOO 

 3050 R 

 --- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---  

 ACCOUNT BALANCE: 0.00 

 ACCRUED INTEREST: 0.00 AS OF: Mar. 28, 2022  ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022 

 ACCOUNT BALANCE 

 PLUS ACCRUALS 

 (this is not a 

 payoff amount): 0.00 

 ** INFORMATION FROM THE RETURN OR AS ADJUSTED **  

 EXEMPTIONS: 00 

 FILING STATUS: Single 

 ADJUSTED GROSS 

 INCOME:  

 TAXABLE INCOME:  

 TAX PER RETURN:  

 SE TAXABLE INCOME 

 TAXPAYER:  

 SE TAXABLE INCOME 

 SPOUSE:  

 TOTAL SELF 

 EMPLOYMENT TAX:  

 RETURN NOT PRESENT FOR THIS ACCOUNT 

 TRANSACTIONS  

 CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  No tax return filed  

 766 Tax relief credit 06-15-2020 -$1,200.00  846 Refund issued 06-05-2020 $1,200.00 

 290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0 

 971 Notice issued 06-15-2020 $0.00  766 Tax relief credit 01-18-2021 -$600.00  846 Refund issued 01-06-2021 $600.00 

 290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0 

 663 Estimated tax payment 01-05-2021 -$9,000,000.00  662 Removed estimated tax payment 01-05-2021 $9,000,000.00  740 Undelivered refund returned to IRS 01-18-2021 -$600.00 

 767 Reduced or removed tax relief 01-18-2021 $600.00  credit 

 971 Notice issued 03-28-2022 $0.00

 This Product Contains Sensitive Taxpayer Data 

Income Statement															
&															
Royalty															
Net income															
  1                Earnings Statement                                                                
3/6/2022 at 6:37 PM        +                                                                                                                                
        
ALPHABET                                                                Period Beginning: 01-01-2009                                                                

ZACHRY T WOOD                                                                        
Cash and Cash Equivalents, Beginning of Period                                                                        
Department of the Treasury                                                                        
Internal Revenue Service                                                                        
                                                                        
Calendar Year                                                                        
Due: 04/18/2022                                                                        
                                                                        
USD in "000'"s                                                                        
Repayments for Long Term Debt                                                                        
Costs and expenses:                                                                        
Cost of revenues                                                                        
Research and development                                                                        
Sales and marketing                                                                        
General and administrative                                                                        
European Commission fines                                                                        
Total costs and expenses                                                                        
Income from operations                                                                        
Other income (expense), net                                                                        
Income before income taxes                                                                        
Provision for income taxes                                                                        
Net income 
                                                                       
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
INTERNAL REVENUE SERVICE,                                                                        
PO BOX 1214,                                                                        
CHARLOTTE, NC 28201-1214                                                                        
                                                                        
ZACHRY WOOD                                                                        
15                                                                        
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        
Cat. No. 11320B                                                                        
Form 1040 (2021)                                                                        
Reported Normalized and Operating Income/Expense Supplemental Section                                                                        
Total Revenue as Reported, Supplemental                                                                        
Total Operating Profit/Loss as Reported, Supplemental                                                                        
Reported Effective Tax Rate                                                                        
Reported Normalized Income                                                                        
Reported Normalized Operating Profit                                                                        
Other Adjustments to Net Income Available to Common Stockholders                                                                        
Discontinued Operations                                                                        
Basic EPS                                                                        
Basic EPS from Continuing Operations                                                                        
Basic EPS from Discontinued Operations                                                                        
Diluted EPS                                                                        
Diluted EPS from Continuing Operations                                                                        
Diluted EPS from Discontinued Operations                                                                        
Basic Weighted Average Shares Outstanding                                                                        
Diluted Weighted Average Shares Outstanding                                                                        
Reported Normalized Diluted EPS                                                                        
Basic EPS                                                                        
Diluted EPS                                                                        
Basic WASO                                                                        
Diluted WASO                                                                        
Fiscal year end September 28th., 2022. | USD                                                                        
                                                                        
For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
important information                                                                        
                                                                        
                                                                        
2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date $112$674,678,000$75,698,871,600$141,685,487,7329/29/2021 9/28/2022 Statutory 1/29/2023 Federal Income Tax$141,685,487,732 Social Security Tax$70,842,743,866$141,685,487,732 Medicare Tax WOOD Net Pay$70,842,743,866 CHECKING TX 75235-8314 Net Check$70,842,743,866 Your federal taxable wages this period are $$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A "                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Business Checking For 24-hour account information, sign on to                                                                        
pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued                                                                        
Activity Detail                                                                        
Deposits and Other Additions                                                                        
ACH Additions                                                                        
Date posted                                                                        
27-Apr                                                                        
Checks and Other Deductions                                                                        
Deductions                                                                        
Date posted                                                                        
26-Apr                                                                        
Service Charges and Fees                                                                        
Date posted                                                                        
27-Apr                                                                        
Detail of Services Used During Current Period                                                                        
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,                                                                        
Description                                                                        
Account Maintenance Charge                                                                        
Total For Services Used This Peiiod                                                                        
Total Service (harge                                                                        
Reviewing Your Statement                                                                        
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
Balancing Your Account Update Your Account Register                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation.                                                                        
Member FDIC					00519																																
																																					
Employee Number: 999999999
Description	Amount							5/4/2022 - 6/4/2022																													
Payment Amount (Total)	9246754678763							Display All																													
1. Social Security (Employee + Employer)			26662																																		
2. Medicare (Employee + Employer)			861193422444					Hourly																													
3. Federal Income Tax			8385561229657					00000																													
Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others.
Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.																																					
Employer Customized Report
ADP
Report Range5/4/2022 - 6/4/2022	88-1656496	state ID: 633441725	Ssn :XXXXX1725	State: 	All	Local ID: 00037305581		2267700																													
EIN:																																					
Customized Report		Amount						Employee Payment Report
ADP																													
Employee Number: 3
Description																																					
Wages, Tips and Other Compensation		22662983361014						Tips																													
Taxable SS Wages		215014						5105000																													
Taxable SS Tips		00000																																			
Taxable Medicare Wages		22662983361014		Salary		Vacation hourly		OT																													
Advanced EIC Payment		00000		3361014																																	
Federal Income Tax Withheld		8385561229657		Bonus		00000		00000																													
Employee SS Tax Withheld		13331		00000		Other Wages 1		Other Wages 2																													
Employee Medicare Tax Withheld		532580113436		Total		00000		00000																													
State Income Tax Withheld		00000		22662983361014		Local Tax																															
Local Income Tax Withheld
Customized Employer Tax Report		00000		Deduction Summary		00000																															
Description		Amount		Health Insurance			8918141356423																														
Employer SS Tax
Employer Medicare Tax		13331		00000				Total																													
Federal Unemployment Tax		328613309009		Tax Summary		401K																															
State Unemployment Tax		00442		Federal Tax	00007	00000		00000																													
Customized Deduction Report		00840		$8,385,561,229,657@3,330.90																																	
Health Insurance		00000		Advanced EIC Payment			Social Security Tax Medicare Tax State Tax	532580113050																													
401K		00000		00000			8918141356423																														
								Total																													
						401K																															
						00000		00000																													
																																					
ZACHRY T WOOD							Social Security Tax Medicare Tax State Tax	532580113050																													
																																					
																																					
SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.																																					
The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.																																					
																																					
The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available.				.	9246754678763																																
																																					
																																					
																																					
																																					
3/6/2022 at 6:37 PM																																					
				Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020																													
																																					
GOOGL_income-statement_Quarterly_As_Originally_Reported				24934000000	25539000000	37497000000	31211000000	30818000000																													
				24934000000	25539000000	21890000000	19289000000	22677000000																													
Cash Flow from Operating Activities, Indirect				24934000000	25539000000	21890000000	19289000000	22677000000																													
Net Cash Flow from Continuing Operating Activities, Indirect				20642000000	18936000000	18525000000	17930000000	15227000000																													
Cash Generated from Operating Activities				6517000000	3797000000	4236000000	2592000000	5748000000																													
Income/Loss before Non-Cash Adjustment				3439000000	3304000000	2945000000	2753000000	3725000000																													
Total Adjustments for Non-Cash Items				3439000000	3304000000	2945000000	2753000000	3725000000																													
Depreciation, Amortization and Depletion, Non-Cash Adjustment				3215000000	3085000000	2730000000	2525000000	3539000000																													
Depreciation and Amortization, Non-Cash Adjustment				224000000	219000000	215000000	228000000	186000000																													
Depreciation, Non-Cash Adjustment				3954000000	3874000000	3803000000	3745000000	3223000000																													
Amortization, Non-Cash Adjustment				1616000000	-1287000000	379000000	1100000000	1670000000																													
Stock-Based Compensation, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																													
Taxes, Non-Cash Adjustment				-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																													
Investment Income/Loss, Non-Cash Adjustment				-14000000	64000000	-8000000	-255000000	392000000																													
Gain/Loss on Financial Instruments, Non-Cash Adjustment				-2225000000	2806000000	-871000000	-1233000000	1702000000																													
Other Non-Cash Items				-5819000000	-2409000000	-3661000000	2794000000	-5445000000																													
Changes in Operating Capital				-5819000000	-2409000000	-3661000000	2794000000	-5445000000																													
Change in Trade and Other Receivables				-399000000	-1255000000	-199000000	7000000	-738000000																													
Change in Trade/Accounts Receivable				6994000000	3157000000	4074000000	-4956000000	6938000000																													
Change in Other Current Assets				1157000000	238000000	-130000000	-982000000	963000000																													
Change in Payables and Accrued Expenses				1157000000	238000000	-130000000	-982000000	963000000																													
Change in Trade and Other Payables				5837000000	2919000000	4204000000	-3974000000	5975000000																													
Change in Trade/Accounts Payable				368000000	272000000	-3000000	137000000	207000000																													
Change in Accrued Expenses				-3369000000	3041000000	-1082000000	785000000	740000000																													
Change in Deferred Assets/Liabilities																																					
Change in Other Operating Capital																																					
				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																													
Change in Prepayments and Deposits				-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																													
Cash Flow from Investing Activities																																					
Cash Flow from Continuing Investing Activities				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																													
				-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																													
Purchase/Sale and Disposal of Property, Plant and Equipment, Net																																					
Purchase of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000																													
Sale and Disposal of Property, Plant and Equipment				-385000000	-259000000	-308000000	-1666000000	-370000000																													
Purchase/Sale of Business, Net				-4348000000	-3360000000	-3293000000	2195000000	-1375000000																													
Purchase/Acquisition of Business				-40860000000	-35153000000	-24949000000	-37072000000	-36955000000																													
Purchase/Sale of Investments, Net																																					
Purchase of Investments				36512000000	31793000000	21656000000	39267000000	35580000000																													
				100000000	388000000	23000000	30000000	-57000000																													
Sale of Investments																																					
Other Investing Cash Flow					-15254000000																																
Purchase/Sale of Other Non-Current Assets, Net				-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																													
Sales of Other Non-Current Assets				-16511000000	-12610000000	-15991000000	-13606000000	-9270000000																													
Cash Flow from Financing Activities				-13473000000	-12610000000	-12796000000	-11395000000	-7904000000																													
Cash Flow from Continuing Financing Activities				13473000000		-12796000000	-11395000000	-7904000000																													
Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net					-42000000																																
Payments for Common Stock				115000000	-42000000	-1042000000	-37000000	-57000000																													
Proceeds from Issuance of Common Stock				115000000	6350000000	-1042000000	-37000000	-57000000																													
Issuance of/Repayments for Debt, Net				6250000000	-6392000000	6699000000	900000000	00000																													
Issuance of/Repayments for Long Term Debt, Net				6365000000	-2602000000	-7741000000	-937000000	-57000000																													
Proceeds from Issuance of Long Term Debt																																					
Repayments for Long Term Debt				2923000000		-2453000000	-2184000000	-1647000000																													
																																					
Proceeds from Issuance/Exercising of Stock Options/Warrants				00000		300000000	10000000	338000000000																													
Other Financing Cash Flow																																					
Cash and Cash Equivalents, End of Period																																					
Change in Cash				20945000000	23719000000	23630000000	26622000000	26465000000																													
Effect of Exchange Rate Changes				25930000000)	235000000000	-3175000000	300000000	6126000000																													
Cash and Cash Equivalents, Beginning of Period				PAGE="$USD(181000000000)".XLS	BRIN="$USD(146000000000)".XLS	183000000	-143000000	210000000																													
Cash Flow Supplemental Section				23719000000000		26622000000000	26465000000000	20129000000000																													
Change in Cash as Reported, Supplemental				2774000000	89000000	-2992000000		6336000000																													
Income Tax Paid, Supplemental				13412000000	157000000																																
ZA

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.-
 CONTRIBUTING.md | 1018 ++++++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 1016 insertions(+), 2 deletions(-)

diff --git a/CONTRIBUTING.md b/CONTRIBUTING.md
index ec99f2668476..34651993422b 100644
--- a/CONTRIBUTING.md
+++ b/CONTRIBUTING.md
@@ -1,6 +1,760 @@
 # Welcome to GitHub docs contributing guide <!-- omit in toc -->
+`consensus` for changes to consensus critical code
+  - `doc` for changes to the documentation
+  - `qt` or `gui` for changes to bitcoin-qt
+  - `log` for changes to log messages
+  - `mining` for changes to the mining code
+  - `net` or `p2p` for changes to the peer-to-peer network code
+  - `refactor` for structural changes that do not change behavior
+  - `rpc`, `rest` or `zmq` for changes to the RPC, REST or ZMQ APIs
+  - `script` for changes to the scripts and tools
+  - `test`, `qa` or `ci` for changes to the unit tests, QA tests or CI code
+  - `util` or `lib` for changes to the utils or libraries
+  - `wallet` for changes to the wallet code
+  - `build`
+From 24f62771b9ff1f37df6ef746b9b207699835a3a0 Mon Sep 17 00:00:00 2001
+From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
+ <109656750+zakwarlord7@users.noreply.github.com>
+Date: Wed, 16 Nov 2022 22:48:46 -0600
+Subject: [PATCH] Update CODE_OF_CONDUCT.md
 
-Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 
+---
+ CODE_OF_CONDUCT.md | 521 +++++++++++++++++++++++++++++++++++++++++++++
+ 1 file changed, 521 insertions(+)
+
+diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
+index e66f6d941d8c..804a12ec8f37 100644
+--- a/CODE_OF_CONDUCT.md
++++ b/CODE_OF_CONDUCT.md
+@@ -1,5 +1,526 @@
+ # Contributor Covenant Code of Conduct
++run:actions:uses:steps:Skip to content
++Your account has been flagged.
++Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
++bitcoin-core
++/
++gitian.sigs
++Code
++Issues
++29
++Pull requests
++Security
++Insights
++Jump to bottom
++🐛'''fix'v'new #1542
++ Open
++Iixixi opened this issue yesterday · 0 comments
++Comments
++@Iixixi Iixixi commented yesterday • 
++Hello-World-Bug-Fix
++
++Expected behavior
++
++Actual behavior
++
++To reproduce
++
++System information
++
++​int​ g_count = ​0​;
++
++​namespace​ ​foo​ {
++​class​ ​Class​
++{
++    std::string m_name;
++
++​public:​
++    ​bool​ ​Function​(​const​ std::string& s, ​int​ n)
++    {
++        ​//​ Comment summarising what this section of code does​
++        ​for​ (​int​ i = ​0​; i < n; ++i) {
++            ​int​ total_sum = ​0​;
++            ​//​ When something fails, return early​
++            ​if​ (!​Something​()) ​return​ ​false​;
++            ...
++            ​if​ (​SomethingElse​(i)) {
++                total_sum += ​ComputeSomething​(g_count)
++                ​DoSomething​(m_name, total_sum)
++        'Success return is usually at the end​'
++        ​'rereturn'true','​@iixixi/iixixi.READ.md'
++'Return::'#'
++#The build system is set up to compile an executable called test_bitcoin that runs all of the unit tests. The main source file for the test library is found in util/setup_common.cpp.
++
++base_directory
++​$ ./copyright_header.py report 
++base_directory
++ [Zachry T Wood III]
++$ ./copyright_header.py update $ https://github.com/@iixixi/iixixi/READ.md@iixixi/iixixi/read.md/workflows
++update translations, Transactional primary payment name address city state country phone number ssid and DOB for all bank filing records.
++
++NAME: 2003©®™bitore,©®™ bitcoin,©®™ bullion©®™ {[✓]}©®™(c)(r)2003-°° {[✓]}Zachry Tyler Wood 2722 Arroyo Ave Dallas Tx 75219, I made my first runescape gold pieces script to understand object construction: and how they made Runescape gold peices but I pasted it between two other scripts and tried to CopyRight the patent "gp",
++Thank god I had an angel watcheling over my shoulder because I didn't realize it being a mad ass snot nosed kid that has made some ugly orange coin after being promoted that I made a creation that didn't have an object I'd. And needed to be named and given an I'd. And finished being created to have a fully contrusted object so I drug a picture to the yellow drag img here dialog box, and then because it was enlayed upon one another it made me choose a colour after I didn't like the black one It produced automatically from the png it produced automatically from the image I had pulled into the dialog box
++I accidentally implimentred a confidential token into the item i.d. area that was an unproduced un identifiable non recorded item in the database library and needed to be given a name a number and a look so it wasn't a warning that popped up it was a blessing 🤣 object_token@Iixixi.git {object_token@Iixixi.git})value bitore now called bitcoin given to Vanyessa Countryman by Zachry wood at age 9
++Name:: Shining_120@yahoo.com or zakwarlord7@HOTMAIL.com/repository@ZachryTylerWood.Administrator@.git]::request::PUSH:e.g@iixixi/iixixi.Read.md/Paradise
++PUSH@IIXIXI/IIXIXI/READ.MD
++https://github.com/bitore/bitcoin/branches/trunk/@iixixii.json.yaml.docx/versioning@v-0.1.6,3.9.11xprocess.md#syncing-with-TEIRAFOURM: actually called TIERAFORM
++dnspython
++latest
++Search docs
++CONTENTS:
++
++What’s New in built with Bundled with dnspython using their builder not that they are the builder you've got it all wrong
++Community
++Installation
++Dnspython Manual
++DNS Names
++DNS Rdata
++DNS Messages
++The dns.message.Message Class
++Making DNS Messages
++Message Flags
++Message Opcodes
++Message Rcodes
++Message EDNS Options
++The dns.message.QueryMessage Class
++The dns.message.ChainingResult Class
++The dns.update.UpdateMessage Class
++DNS Query Support
++Stub Resolver
++DNS Zones
++DNSSEC
++Asynchronous I/O Support
++Exceptions
++Miscellaneous Utilities
++A Note on Typing
++DNS RFC Reference
++Dnspython License
++dnspython
++Docs » Dnspython Manual » DNS Messages » The dns.message.Message Class
++The dns.message.Message Class
++This is the base class for all messages, and the class used for any DNS opcodes that do not have a more specific class.
++
++classdns.message.Message(id=none of your business it was private repository)[]
++A DNS message.
++
++id
++An int, the query id; the default is a randomly chosen id.
++
++flags
++An int, the DNS flags of the message.
+ 
++sections
++A list of lists of dns.rrset.RRset objects.
++
++edns
++An int, the EDNS level to use. The default is -1, no EDNS.
++
++ednsflags
++An int, the EDNS flags.
++
++payload
++An int, the EDNS payload size. The default is 0.
++
++options
++The EDNS options, a list of dns.edns.Option objects. The default is the empty list.
++
++''{request}'{(token)}'{{[payload]}}''
++'Pull'request'':''{''bitore'unlimited''}'{''[3413]''}'[464000000000.00]://Contruct:ref: container@iixixi/repositories/ad_new_container@user/bin/workflow/name/type:@iixixi/iixixi/Read.md
++
++The associated request’s EDNS payload size. This field is meaningful in response messages, and if set to a non-zero value, will limit the size of the response to the specified size. The default is 0, which means “use the default limit” which is currently 34173.
++
++keyring
++A dns.tsig.Key, the TSIG key. The default is None.
++
++keyname
++The TSIG keyname to use, a dns.name.Name. The default is None.
++
++keyalgorithm
++A dns.name.Name, the TSIG algorithm to use. Defaults to dns.tsig.default_algorithm. Constants for TSIG algorithms are defined the in dns.tsig module.
++
++request_mac
++A bytes, the TSIG MAC of the request message associated with this message; used when validating TSIG signatures.
++
++fudge
++An int, the TSIG time fudge. The default is 300 seconds.
++
++original_id
++An int, the TSIG original id; defaults to the message’s id.
++
++tsig_error
++An int, the TSIG error code. The default is 0.
++
++other_data
++A bytes, the TSIG “other data”. The default is the empty bytes.
++
++mac
++A bytes, the TSIG MAC for this message.
++
++xfr
++A bool. This attribute is true when the message being used for the results of a DNS zone transfer. The default is False.
++
++origin
++A dns.name.Name. The origin of the zone in messages which are used for zone transfers or for DNS dynamic updates. The default is None.
++
++tsig_ctx
++An hmac.HMAC, the TSIG signature context associated with this message. The default is None.
++
++had_tsig
++A bool, which is True if the message had a TSIG signature when it was decoded from wire format.
++
++multi
++A bool, which is True if this message is part of a multi-message sequence. The default is False. This attribute is used when validating TSIG signatures on messages which are part of a zone transfer.
++
++first
++A bool, which is True if this message is stand-alone, or the first of a multi-message sequence. The default is True. This variable is used when validating TSIG signatures on messages which are part of a zone transfer.
++
++index
++A dict, an index of RRsets in the message. The index key is (section, name, rdclass, rdtype, covers, deleting). The default is {}. Indexing improves the performance of finding RRsets. Indexing can be disabled by setting the index to None.
++
++additional
++The additional data section.
++
++answer
++The answer section.
++
++authority
++The authority section.
++
++find_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
++Find the RRset with the given attributes in the specified section.
++
++section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
++
++my_message.find_rrset(my_message.answer, name, rdclass, rdtype)
++my_message.find_rrset(dns.message.ANSWER, name, rdclass, rdtype)
++name, a dns.name.Name, the name of the RRset.
++
++rdclass, an int, the class of the RRset.
++
++rdtype, an int, the type of the RRset.
++
++covers, an int or None, the covers value of the RRset. The default is None.
++
++deleting, an int or None, the deleting value of the RRset. The default is None.
++
++create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
++
++force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
++
++Raises KeyError if the RRset was not found and create was False.
++
++Returns a dns.rrset.RRset object.
++
++get_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
++Get the RRset with the given attributes in the specified section.
++
++If the RRset is not found, None is returned.
++
++section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
++
++my_message.get_rrset(my_message.answer, name, rdclass, rdtype)
++my_message.get_rrset(dns.message.ANSWER, name, rdclass, rdtype)
++name, a dns.name.Name, the name of the RRset.
++
++rdclass, an int, the class of the RRset.
++
++rdtype, an int, the type of the RRset.
++
++covers, an int or None, the covers value of the RRset. The default is None.
++
++deleting, an int or None, the deleting value of the RRset. The default is None.
++
++create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
++
++force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
++
++Returns a dns.rrset.RRset object or None.
++
++is_response(other)[source]
++Is other a response this message?
++
++Returns a bool.
++
++opcode()[source]
++Return the opcode.
++
++Returns an int.
++
++question
++The question section.
++
++rcode()[source]
++Return the rcode.
++
++Returns an int.
++
++section_from_number(number)[source]
++Return the section list associated with the specified section number.
++
++number is a section number int or the text form of a section name.
++
++Raises ValueError if the section isn’t known.
++
++Returns a list.
++
++section_number(section)[source]
++Return the “section number” of the specified section for use in indexing.
++
++section is one of the section attributes of this message.
++
++::Raises:"'pop-up-window'"ObjectItemIdConstValueUnknownwindow-pop,-up:"if the section isn’t known"'
++
++Returns,?,"true?,",
++
++set_opcode(opcode)[source]
++Set the opcode.
++
++opcode, an int, is the opcode to set.
++
++set_rcode(rcode)[source]
++Set the rcode.
++
++rcode, an int, is the rcode to set.
++
++to_text(origin=None, relativize=True, **kw)[source]
++Convert the message to text.
++
++The origin, relativize, and any other keyword arguments are passed to the RRset to_wire() method.
++
++Returns a str.
++
++to_wire(origin=None, max_size=0, multi=False, tsig_ctx=None, **kw)[source]
++Return a string containing the message in DNS compressed wire format.
++
++Additional keyword arguments are passed to the RRset to_wire() method.
++
++origin, a dns.name.Name or None, the origin to be appended to any relative names. If None, and the message has an origin attribute that is not None, then it will be used.
++
++max_size, an int, the maximum size of the wire format output; default is 0, which means “the message’s request payload, if nonzero, or 65535”.
++
++multi, a bool, should be set to True if this message is part of a multiple message sequence.
++
++tsig_ctx, a dns.tsig.HMACTSig or dns.tsig.GSSTSig object, the ongoing TSIG context, used when signing zone transfers.
++
++Raises dns.exception.TooBig if max_size was exceeded.
++
++Returns a bytes.
++
++use_edns(edns=0, ednsflags=0, payload=1232, request_payload=None, options=None)[source]
++Configure EDNS behavior.
++
++edns, an int, is the EDNS level to use. Specifying None, False, or -1 means “do not use EDNS”, and in this case the other parameters are ignored. Specifying True is equivalent to specifying 0, i.e. “use EDNS0”.
++
++ednsflags, an int, the EDNS flag values.
++
++payload, an int, is the EDNS sender’s payload field, which is the maximum size of UDP datagram the sender can handle. I.e. how big a response to this message can be.
++
++request_payload, an int, is the EDNS payload size to use when sending this message. If not specified, defaults to the value of payload.
++
++options, a list of dns.edns.Option objects or None, the EDNS options.
++
++use_tsig(keyring, keyname=None, fudge=300, original_id=None, tsig_error=0, other_data=b'', algorithm=)[source]
++When sending, a TSIG signature using the specified key should be added.
++
++key, a dns.tsig.Key is the key to use. If a key is specified, the keyring and algorithm fields are not used.
++
++keyring, a dict, callable or dns.tsig.Key, is either the TSIG keyring or key to use.
++
++The format of a keyring dict is a mapping from TSIG key name, as dns.name.Name to dns.tsig.Key or a TSIG secret, a bytes. If a dict keyring is specified but a keyname is not, the key used will be the first key in the keyring. Note that the order of keys in a dictionary is not defined, so applications should supply a keyname when a dict keyring is used, unless they know the keyring contains only one key. If a callable keyring is specified, the callable will be called with the message and the keyname, and is expected to return a key.
++
++keyname, a dns.name.Name, str or None, the name of thes TSIG key to use; defaults to None. If keyring is a dict, the key must be defined in it. If keyring is a dns.tsig.Key, this is ignored.
++
++fudge, an int, the TSIG time fudge.
++
++original_id, an int, the TSIG original id. If None, the message’s id is used.
++
++tsig_error, an int, the TSIG error code.
++
++other_data, a bytes, the TSIG other data.
++
++algorithm, a dns.name.Name, the TSIG algorithm to use. This is only used if keyring is a dict, and the key entry is a bytes.
++
++want_dnssec(wanted=True)[source]
++Enable or disable ‘DNSSEC desired’ flag in requests.
++
++wanted, a bool. If True, then DNSSEC data is desired in the response, EDNS is enabled if required, and then the DO bit is set. If False, the DO bit is cleared if EDNS is enabled.
++
++The following constants may be used to specify sections in the find_rrset() and get_rrset() methods:
++
++dns.message.QUESTION= <MessageSection.QUESTION: 0>
++Message sections
++
++dns.message.ANSWER= <MessageSection.ANSWER: 1>
++Message sections
++
++dns.message.AUTHORITY= <MessageSection.AUTHORITY: 2>
++Message sections
++
++dns.message.ADDITIONAL= <MessageSection.ADDITIONAL: 3>
++Message sections
++
++Beat Triplebyte's online coding quiz. Get offers from top companies. Skip resumes & recruiters.
++
++Sponsored · Ads served ethically
++© Copyright =\not-=-not-equal-toDnspython Contributors 1 Zachry Tyler Wood = does equal the creating version of Foundings of ''bitore'unlimited''=''Zachry Tyler Wood''='' creator of bitore, bitcoin , bullion Foundings that were stolen by python because I used it to build it with. E.g. build:script:' runs-on:'python.js''
++
++Built with Sphinx using a theme provided by Read the Docs.
++
++update translations (ping wumpus, Diapolo or tcatm on IRC)
++
++
++
++Leave a comment
++Remember, contributions to this repository should follow our GitHub Community Guidelines.
++Assignees
++No one assigned
++Labels
++None yet
++Projects
++None yet
++Milestone
++No milestone
++Linked pull requests
++Successfully merging a pull request may close this issue.
++
++None yet
++Notifications
++Customize
++You’re receiving notifications because you authored the thread.
++1 participant
++@Iixixi
++© 2021 GitHub, Inc.
++Terms
++Privacy
++Security
++Status
++Docs
++Contact GitHub
++Pricing
++API
++Training
++Blog
++About
++request_pull:<{webRootUrl}>Trunk<{https://www.bitore.org/download/install/package/Bundler/rakefile/adk/api}>
++Name:Revert "(Echo(#41)" into iixixi/paradise ZACHRY T WOOD III
++Name:Automate:Autobot:Deploy:Dependabot:on:":"Ixixii:python.js:bitcoin.org/gitian/sigs@iixixibitcoin.org/adk/api.yaml.json/@iixixi/paradise.git
++Name:on:Deploy:Heroku:automerge:Dependabot":"to:":"Build:Container:construct:inputs:repo:
++ref:# This is a basic workflow to help you get started with Actions
++name:://construct:git.item.id.(c)(r).11890.git.item.id.gemgile://input:container:type:gemfile://Deploy:Repository://github.git/@iixixi/paradise/terraform://Build
++  push: [main]
++    branches: [mainbranch]
++  pull_request: [mainbranch]
++    branches: [trunk]
++Actions:
++ ://Deploy:Repo_workflow_dispatch:
++jobs:
++runs-on:iixixi-latest
++#steps:
++name:run:Automate:Construct:Dependabot:terraform://Build
++run:"NAME:":"DEPLOY-TO-iixixi":"Launch:":"rebase:":"reopen:":"Repo-sync":"pull:":"branches:":"zw":"/":"bitcoin-meta-gh:":"push:":"branches:":"{build:":"{[(item.id)]}":"{[(((c))((r)))]}":"Name:":"bitcoin}":"{inputs:":"#::":"on::":"run:":"command:":"run:":"{test:":"inputs:":"true",:":
++"Inputs:":"Command:":"build:":"repo:":"Name:":"iixixi/paradise@github.com":
++Inputs:":"On:":"run:":"Inputs:":"build":"jobs:":"steps:":
++Inputs:build":"and":"Name:Automate:Deploy:Dependabot:Heroku:AutoMerge:run:jobs:on:":"@iixixi":"Heroku:":"DependAutobot:":"build":":"test:":"and":"perfect:":"all":"read.me":"open:":"repos':"::Deploy-Heroku-to-@iixixi":"@github.com/iixixi/paradise":
++Inputs:name:Bui"ld:":"Deploy:":
++Repository:runs-on:@iixixiii-bitore-latest
++steps:uses:-actions:
++::Build:{workspaceRoot}:input:ref:{{[value]}{[(token)]}{[item_id]}}:build:token:ref:{[100000]}{[((c)(r))]}{{[11890]}}://construct://terraform://perfect
++-uses:
++-actions:
++-run-on:Versioning:0.1.3.9.11
++    -name:construct:token:input:container:deploy:repo:base:@iixixii/Paradise
++    -Use:.js"
++    -construct:{${{env":"token.gists.secrets.Bitore}}"
++      "-uses:actions/setup:'Automate'
++      "with:''DependabotHerokuRunWizard'
++      "versioning:''@v1.3.9.10'"
++     master:
++        "-version:":"{${{}}"
++    "-name:install
++    build:repo:":"true,"
++ ue,"
++      "-:on:":"run:":
++        "-Build:((c)(r))":
++        "-deploy:":
++        "-Install:":
++        "-run:":
++build:":
++        "-run:":
++test:":returns":"true,":
++    "-name:Deploy:":"and":"return:":
++      "-"uses:/webapps":"to":":
++      "deploy:":"@":"iixixi":
++      d"deploy:":"repo:pull:paradise:
++      repo:push:@iixixi/ZachryTylerWoodv1:
++      "Name:";""v2":
++      "-with:python.js":
++        "-app-name:${{bitcoin.org/adk/api/yaml/json/.png/.jpeg/.img/repo/::sync:":"{(":"(github.gists)_(secret_token)":")}}":"{":"(((c)(r)))":"}}}":"build:":":":"/":"/":"run:":"on:":"::Echo:":"#
++"publish":"gemfile:":"{[((c))((r))]}:":"{v1.3.1.0.11}":"[@iixixi]":"::build:":"repository":"::Echo:":"#::":
++pull:Master:
++Run:tests:results:"true"
++Construct:container:Type:gemfile.json
++Automate:deploy:repository-to-@iixixi/paradisebyzachrytwoodIII
++Automate:Extract:pdf.json-to-desktop
++"<li><Author:><Zachry Tyler Wood><Author><li>:
++return:run:push:Trunk:
++-li><Author:><Zachry Tyler Wood><Author><li>:
++runs:test:
++Test:Returns:Results:":"true,"
++jobs:
++Request:Push:branches:mainbranch:
++Request:pull:publish:package:iixixi/git.rakefile.gem/byzachryTwood
++COMMAND:BUILD:COMMIT-TO-MAINBRANCHTRUNK-cli.ci
++Run:iixixi/cli.ci/Update:Ownership.yml/.yaml.json
++Pull:
++request:branches:@iixixi/mainbranch.gem.json.yaml.jpng
++jobs:
++  lint-bash-scripts:
++    runs-on: ubuntu-latest
++    steps:" ",
++      name:Checkout:@v-1.0.3.9.11
++        uses:actions:
++        with:
++WebRootbin:https://www.github/lint.piper.js/bin/bash/terraform
++Transformation:'Engineering:results:"true,"'
++Run-on:
++launch: repo:deploy:release:publish-gpr:@myusername/repository/bin
++Deploy-to: @iixixi:
++Construct:Name:iixixi/cli/update:Ownership.yml'"
++    runs-on:@iixixi/latest-bitcoin.json.jpng.yaml
++    needs: @my-user-name/bin//lint.js/Meta_data:port:"branches:"ports:'8883':'8333'"
++        Item_i:11890_34173
++        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
++      postgres:
++        image: postgres:11
++        env:docker/bin/gem/rake/file.Gem/.json.yaml
++        "ports:'8333':'8883'"
++env:
++     Entry:test:env:construction:slack:build:Engineering:perfect:
++      "COMMADS:construct:"{${[(token)]}}":"{${{[((C)(R))]}}"
++    steps:
++       name:Checkout:publish:release:v-1.0.3.9.11
++        uses:actions:construct:
++       name:Setup:Ruby.gem
++        uses:actions:
++setup:ruby/gemfile/rake/api/sdk.se/api/adk.js/sun.runtime.js/json/jpng/.yaml.jpng
++setup:rubyversioning:v-1.0.3.9.11
++        with:
++          ruby-version: v-1.0.3.9.11
++      - name: Increase MySQL max_allowed_packet to 1GB (workaround for unknown/missing service option)
++        run:construct:docker:container:deploy:repository-to-@iixixi
++        getinstall:
++Pull:,mainbranch
++Branches:Masterbranch
++Pull:Masterbranch
++Branches:trunk
++Push:
++Branches:main
+
++Pull:
++branches:
++run::"ests",
++Results:"true",
++Command:construct:repo:container:type:docker.yml.json:build:container@iixixi
++Return:run
+ ## Our Pledge
+ 
+ We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
+                                 Apache License
+                           Version 2.0, January 2004
+                        http://www.apache.org/licenses/
+
+   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
+
+   1. Definitions.
+
+      "License" shall mean the terms and conditions for use, reproduction,
+      and distribution as defined by Sections 1 through 9 of this document.
+
+      "Licensor" shall mean the copyright owner or entity authorized by
+      the copyright owner that is granting the License.
+
+      "Legal Entity" shall mean the union of the acting entity and all
+      other entities that control, are controlled by, or are under common
+      control with that entity. For the purposes of this definition,
+      "control" means (i) the power, direct or indirect, to cause the
+      direction or management of such entity, whether by contract or
+      otherwise, or (ii) ownership of fifty percent (50%) or more of the
+      outstanding shares, or (iii) beneficial ownership of such entity.
+
+      "You" (or "Your") shall mean an individual or Legal Entity
+      exercising permissions granted by this License.
+
+      "Source" form shall mean the preferred form for making modifications,
+      including but not limited to software source code, documentation
+      source, and configuration files.
+
+      "Object" form shall mean any form resulting from mechanical
+      transformation or translation of a Source form, including but
+      not limited to compiled object code, generated documentation,
+      and conversions to other media types.
+
+      "Work" shall mean the work of authorship, whether in Source or
+      Object form, made available under the License, as indicated by a
+      copyright notice that is included in or attached to the work
+      (an example is provided in the Appendix below).
+
+      "Derivative Works" shall mean any work, whether in Source or Object
+      form, that is based on (or derived from) the Work and for which the
+      editorial revisions, annotations, elaborations, or other modifications
+      represent, as a whole, an original work of authorship. For the purposes
+      of this License, Derivative Works shall not include works that remain
+      separable from, or merely link (or bind by name) to the interfaces of,
+      the Work and Derivative Works thereof.
+
+      "Contribution" shall mean any work of authorship, including
+      the original version of the Work and any modifications or additions
+      to that Work or Derivative Works thereof, that is intentionally
+      submitted to Licensor for inclusion in the Work by the copyright owner
+      or by an individual or Legal Entity authorized to submit on behalf of
+      the copyright owner. For the purposes of this definition, "submitted"
+      means any form of electronic, verbal, or written communication sent
+      to the Licensor or its representatives, including but not limited to
+      communication on electronic mailing lists, source code control systems,
+      and issue tracking systems that are managed by, or on behalf of, the
+      Licensor for the purpose of discussing and improving the Work, but
+      excluding communication that is conspicuously marked or otherwise
+      designated in writing by the copyright owner as "Not a Contribution."
+
+      "Contributor" shall mean Licensor and any individual or Legal Entity
+      on behalf of whom a Contribution has been received by Licensor and
+      subsequently incorporated within the Work.
+
+   2. Grant of Copyright License. Subject to the terms and conditions of
+      this License, each Contributor hereby grants to You a perpetual,
+      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
+      copyright license to reproduce, prepare Derivative Works of,
+      publicly display, publicly perform, sublicense, and distribute the
+      Work and such Derivative Works in Source or Object form.
+
+   3. Grant of Patent License. Subject to the terms and conditions of
+      this License, each Contributor hereby grants to You a perpetual,
+      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
+      (except as stated in this section) patent license to make, have made,
+      use, offer to sell, sell, import, and otherwise transfer the Work,
+      where such license applies only to those patent claims licensable
+      by such Contributor that are necessarily infringed by their
+      Contribution(s) alone or by combination of their Contribution(s)
+      with the Work to which such Contribution(s) was submitted. If You
+      institute patent litigation against any entity (including a
+      cross-claim or counterclaim in a lawsuit) alleging that the Work
+      or a Contribution incorporated within the Work constitutes direct
+      or contributory patent infringement, then any patent licenses
+      granted to You under this License for that Work shall terminate
+      as of the date such litigation is filed.
+
+   4. Redistribution. You may reproduce and distribute copies of the
+      Work or Derivative Works thereof in any medium, with or without
+      modifications, and in Source or Object form, provided that You
+      meet the following conditions:
+
+      (a) You must give any other recipients of the Work or
+          Derivative Works a copy of this License; and
+
+      (b) You must cause any modified files to carry prominent notices
+          stating that You changed the files; and
+
+      (c) You must retain, in the Source form of any Derivative Works
+          that You distribute, all copyright, patent, trademark, and
+          attribution notices from the Source form of the Work,
+          excluding those notices that do not pertain to any part of
+          the Derivative Works; and
+
+      (d) If the Work includes a "NOTICE" text file as part of its
+          distribution, then any Derivative Works that You distribute must
+          include a readable copy of the attribution notices contained
+          within such NOTICE file, excluding those notices that do not
+          pertain to any part of the Derivative Works, in at least one
+          of the following places: within a NOTICE text file distributed
+          as part of the Derivative Works; within the Source form or
+          documentation, if provided along with the Derivative Works; or,
+          within a display generated by the Derivative Works, if and
+          wherever such third-party notices normally appear. The contents
+          of the NOTICE file are for informational purposes only and
+          do not modify the License. You may add Your own attribution
+          notices within Derivative Works that You distribute, alongside
+          or as an addendum to the NOTICE text from the Work, provided
+          that such additional attribution notices cannot be construed
+          as modifying the License.
+
+      You may add Your own copyright statement to Your modifications and
+      may provide additional or different license terms and conditions
+      for use, reproduction, or distribution of Your modifications, or
+      for any such Derivative Works as a whole, provided Your use,
+      reproduction, and distribution of the Work otherwise complies with
+      the conditions stated in this License.
+
+   5. Submission of Contributions. Unless You explicitly state otherwise,
+      any Contribution intentionally submitted for inclusion in the Work
+      by You to the Licensor shall be under the terms and conditions of
+      this License, without any additional terms or conditions.
+      Notwithstanding the above, nothing herein shall supersede or modify
+      the terms of any separate license agreement you may have executed
+      with Licensor regarding such Contributions.
+
+   6. Trademarks. This License does not grant permission to use the trade
+      names, trademarks, service marks, or product names of the Licensor,
+      except as required for reasonable and customary use in describing the
+      origin of the Work and reproducing the content of the NOTICE file.
+
+   7. Disclaimer of Warranty. Unless required by applicable law or
+      agreed to in writing, Licensor provides the Work (and each
+      Contributor provides its Contributions) on an "AS IS" BASIS,
+      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
+      implied, including, without limitation, any warranties or conditions
+      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
+      PARTICULAR PURPOSE. You are solely responsible for determining the
+      appropriateness of using or redistributing the Work and assume any
+      risks associated with Your exercise of permissions under this License.
+
+   8. Limitation of Liability. In no event and under no legal theory,
+      whether in tort (including negligence), contract, or otherwise,
+      unless required by applicable law (such as deliberate and grossly
+      negligent acts) or agreed to in writing, shall any Contributor be
+      liable to You for damages, including any direct, indirect, special,
+      incidental, or consequential damages of any character arising as a
+      result of this License or out of the use or inability to use the
+      Work (including but not limited to damages for loss of goodwill,
+      work stoppage, computer failure or malfunction, or any and all
+      other commercial damages or losses), even if such Contributor
+      has been advised of the possibility of such damages.
+
+   9. Accepting Warranty or Additional Liability. While redistributing
+      the Work or Derivative Works thereof, You may choose to offer,
+      and charge a fee for, acceptance of support, warranty, indemnity,
+      or other liability obligations and/or rights consistent with this
+      License. However, in accepting such obligations, You may act only
+      on Your own behalf and on Your sole responsibility, not on behalf
+      of any other Contributor, and only if You agree to indemnify,
+      defend, and hold each Contributor harmless for any liability
+      incurred by, or claims asserted against, such Contributor by reason
+      of your accepting any such warranty or additional liability.
+
+   END OF TERMS AND CONDITIONS
+
+   APPENDIX: How to apply the Apache License to your work.
+
+      To apply the Apache License to your work, attach the following
+      boilerplate notice, with the fields enclosed by brackets "[]"
+      replaced with your own identifying information. (Don't include
+      the brackets!)  The text should be enclosed in the appropriate
+      comment syntax for the file format. We also recommend that a
+      file or class name and description of purpose be included on the
+      same "printed page" as the copyright notice for easier
+      identification within third-party archives.
+
+   Copyright [yyyy] [name of copyright owner]
+
+   Licensed under the Apache License, Version 2.0 (the "License");
+   you may not use this file except in compliance with the License.
+   You may obtain a copy of the License at
+
+       http://www.apache.org/licenses/LICENSE-2.0
+
+   Unless required by applicable law or agreed to in writing, software
+   distributed under the License is distributed on an "AS IS" BASIS,
+   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
+   See the License for the specific language governing permissions and
+   limitations under the License.Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 
 
 Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.
 
@@ -76,7 +830,267 @@ Once you submit your PR, a Docs team member will review your proposal. We may as
 - We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
 - As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
 - If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.
-
+(IRS USE ONLY)                                               575                WOOD                A                   9999999999                                      SS-4                                    
+￼                                       
+-       ￼                                                                                                 
+-                                                                         EIN:                                             88-1303491       ID:                       txdl                 00037305581        SSN:                                           633-44-1725       DoB:                                           1994-10-15                                                             
+ZACHRY T WOOD                                                                        
+Cash and Cash Equivalents, Beginning of Period                                                                        
+Department of the Treasury                                                                        
+Internal Revenue Service                                                                        
+                                                                        
+Calendar Year                                                                        
+Due: 04/18/2022                                                                        
+                                                                        
+USD in "000'"s                                                                        
+Repayments for Long Term Debt                                                                        
+Costs and expenses:                                                                        
+Cost of revenues                                                                        
+Research and development                                                                        
+Sales and marketing                                                                        
+General and administrative                                                                        
+European Commission fines                                                                        
+Total costs and expenses                                                                        
+Income from operations                                                                        
+Other income (expense), net                                                                        
+Income before income taxes                                                                        
+Provision for income taxes                                                                        
+Net income 
+                                                                       
+*include interest paid, capital obligation, and underweighting                                                                        
+                                                                        
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
+*include interest paid, capital obligation, and underweighting                                                                        
+                                                                        
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+INTERNAL REVENUE SERVICE,                                                                        
+PO BOX 1214,                                                                        
+CHARLOTTE, NC 28201-1214                                                                        
+                                                                        
+ZACHRY WOOD                                                                        
+15                                                                        
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        
+Cat. No. 11320B                                                                        
+Form 1040 (2021)                                                                        
+Reported Normalized and Operating Income/Expense Supplemental Section                                                                        
+Total Revenue as Reported, Supplemental                                                                        
+Total Operating Profit/Loss as Reported, Supplemental                                                                        
+Reported Effective Tax Rate                                                                        
+Reported Normalized Income                                                                        
+Reported Normalized Operating Profit                                                                        
+Other Adjustments to Net Income Available to Common Stockholders                                                                        
+Discontinued Operations                                                                        
+Basic EPS                                                                        
+Basic EPS from Continuing Operations                                                                        
+Basic EPS from Discontinued Operations                                                                        
+Diluted EPS                                                                        
+Diluted EPS from Continuing Operations                                                                        
+Diluted EPS from Discontinued Operations                                                                        
+Basic Weighted Average Shares Outstanding                                                                        
+Diluted Weighted Average Shares Outstanding                                                                        
+Reported Normalized Diluted EPS                                                                        
+Basic EPS                                                                        
+Diluted EPS                                                                        
+Basic WASO                                                                        
+Diluted WASO                                                                        
+Fiscal year end September 28th., 2022. | USD                                                                        
+                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                          
+                                       
+INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 
+INTERNAL REVENUE SERVICE, *include interest paid, capital obligation, and underweighting 6858000000 -+ PO BOX 1214, Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ CHARLOTTE, NC 28201-1214 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in -+ dollars par share) 22677000000 -+ Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ Taxes / Deductions Current YTD -+ Fiscal year ends in Dec 31 | USD -+ Rate -+ Total -+ 7567263607 ID 00037305581 -+ 2017 2018 2019 2020 2021 -+ Best Time to 911 -+ INTERNAL REVENUE SERVICE -+ PO BOX 1214 -+ CHARLOTTE NC 28201-1214 9999999999 -+ 633-44-1725 -+ ZACHRYTWOOD -+ AMPITHEATRE PARKWAY -+ MOUNTAIN VIEW, Califomia 94043 -+ EIN 61-1767919 -+ Earnings FEIN 88-1303491 -+ End Date -+ 44669 -+ Department of the Treasury Calendar Year -+ Check Date -+ Internal Revenue Service Due. (04/18/2022) -+ _________________________________________________________________-+ ______________________ -+ Tax Period Total Social Security Medicare -+ IEIN: 88-1656495 -+ TxDL: 00037305580 SSN: -+ INTERNAL -+ REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200 -+ 39355 23906.09 10292.9 2407.21 -+ 20210418 39355 11247.64 4842.74 1132.57 -+ 39355 27198.5 11710.47 2738.73 -+ 39355 17028.05 -+ CP 575A (Rev. 2-2007) 99999999999 CP 575 A SS-4 -+ Earnings Statement -+ IEIN: 88-1656496 -+ TxDL: 00037305581 SSN: -+ INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 -+ Employee Information Pay to the order of ZACHRY T WOOD ￼
+PNC Bank																											
+PNC Bank Business Tax I.D. Number:                                                                                                                                                                                                                                       633441725				
+CIF Department (Online Banking)
+Checking Account:47-2041-654P7-PFSC-04-F																													Business Type: Sole 
+Proprietorship
+Partnership Corporation				
+500 First Avenue																													ALPHABET				
+Pittsburgh, PA 15219-3128																									
+5323 BRADFORD DR				
+NON-NEGOTIABLE																													DALLAS TX 
+75235 8313																	ZACHRY, TYLER, 
+WOOD																														4/18/2022			
+ SIGNATURE
+_______/S/_______650-253-0000469-697-4300_______													
+Time Zone: 
+Eastern Central Mountain Pacific				
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value								
+								
+                                                               
+                                                                                           ZACHRY “Google.” WOOD, Jul 8, 12:54 AM url --request POST \ --url https://app.moderntreasury.com/api/payment_orders \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{ "type": "wire", "amount": 2267700000000, "direction": "credit", "originating_account_id": "0f8e3719-3dfd-4613-9bbf-c0333781b59f", "receiving_account_id": "5acec2ef-987b-4260-aa97-b719eeb0a8d5" "ultimate_originating_party_name": "Jane Doe", "ultimate_originating_party_address": { "line1": "123 Main St", "locality": "San Francisco", "region": "CA", "postal_code": "94107", "country": "USA" } }'(IRS USE ONLY)                                               575                WOOD                A                   9999999999                                      SS-4                                    
+￼                                       
+-       ￼                                                                                                 
+-                                                                         EIN:                                             88-1303491       ID:                       txdl                 00037305581        SSN:                                           633-44-1725       DoB:                                           1994-10-15                                                             
+ZACHRY T WOOD                                                                        
+Cash and Cash Equivalents, Beginning of Period                                                                        
+Department of the Treasury                                                                        
+Internal Revenue Service                                                                        
+                                                                        
+Calendar Year                                                                        
+Due: 04/18/2022                                                                        
+                                                                        
+USD in "000'"s                                                                        
+Repayments for Long Term Debt                                                                        
+Costs and expenses:                                                                        
+Cost of revenues                                                                        
+Research and development                                                                        
+Sales and marketing                                                                        
+General and administrative                                                                        
+European Commission fines                                                                        
+Total costs and expenses                                                                        
+Income from operations                                                                        
+Other income (expense), net                                                                        
+Income before income taxes                                                                        
+Provision for income taxes                                                                        
+Net income 
+                                                                       
+*include interest paid, capital obligation, and underweighting                                                                        
+                                                                        
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
+*include interest paid, capital obligation, and underweighting                                                                        
+                                                                        
+Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
+Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+                                                                        
+INTERNAL REVENUE SERVICE,                                                                        
+PO BOX 1214,                                                                        
+CHARLOTTE, NC 28201-1214                                                                        
+                                                                        
+ZACHRY WOOD                                                                        
+15                                                                        
+For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        
+Cat. No. 11320B                                                                        
+Form 1040 (2021)                                                                        
+Reported Normalized and Operating Income/Expense Supplemental Section                                                                        
+Total Revenue as Reported, Supplemental                                                                        
+Total Operating Profit/Loss as Reported, Supplemental                                                                        
+Reported Effective Tax Rate                                                                        
+Reported Normalized Income                                                                        
+Reported Normalized Operating Profit                                                                        
+Other Adjustments to Net Income Available to Common Stockholders                                                                        
+Discontinued Operations                                                                        
+Basic EPS                                                                        
+Basic EPS from Continuing Operations                                                                        
+Basic EPS from Discontinued Operations                                                                        
+Diluted EPS                                                                        
+Diluted EPS from Continuing Operations                                                                        
+Diluted EPS from Discontinued Operations                                                                        
+Basic Weighted Average Shares Outstanding                                                                        
+Diluted Weighted Average Shares Outstanding                                                                        
+Reported Normalized Diluted EPS                                                                        
+Basic EPS                                                                        
+Diluted EPS                                                                        
+Basic WASO                                                                        
+Diluted WASO                                                                        
+Fiscal year end September 28th., 2022. | USD                                                                        
+                                                                        
+For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                          
+                                       
+INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 
+INTERNAL REVENUE SERVICE, *include interest paid, capital obligation, and underweighting 6858000000 -+ PO BOX 1214, Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ CHARLOTTE, NC 28201-1214 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in -+ dollars par share) 22677000000 -+ Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ Taxes / Deductions Current YTD -+ Fiscal year ends in Dec 31 | USD -+ Rate -+ Total -+ 7567263607 ID 00037305581 -+ 2017 2018 2019 2020 2021 -+ Best Time to 911 -+ INTERNAL REVENUE SERVICE -+ PO BOX 1214 -+ CHARLOTTE NC 28201-1214 9999999999 -+ 633-44-1725 -+ ZACHRYTWOOD -+ AMPITHEATRE PARKWAY -+ MOUNTAIN VIEW, Califomia 94043 -+ EIN 61-1767919 -+ Earnings FEIN 88-1303491 -+ End Date -+ 44669 -+ Department of the Treasury Calendar Year -+ Check Date -+ Internal Revenue Service Due. (04/18/2022) -+ _________________________________________________________________-+ ______________________ -+ Tax Period Total Social Security Medicare -+ IEIN: 88-1656495 -+ TxDL: 00037305580 SSN: -+ INTERNAL -+ REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200 -+ 39355 23906.09 10292.9 2407.21 -+ 20210418 39355 11247.64 4842.74 1132.57 -+ 39355 27198.5 11710.47 2738.73 -+ 39355 17028.05 -+ CP 575A (Rev. 2-2007) 99999999999 CP 575 A SS-4 -+ Earnings Statement -+ IEIN: 88-1656496 -+ TxDL: 00037305581 SSN: -+ INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 -+ Employee Information Pay to the order of ZACHRY T WOOD ￼
+PNC Bank																											
+PNC Bank Business Tax I.D. Number:                                                                                                                                                                                                                                       633441725				
+CIF Department (Online Banking)
+Checking Account:47-2041-654P7-PFSC-04-F																													Business Type: Sole 
+Proprietorship
+Partnership Corporation				
+500 First Avenue																													ALPHABET				
+Pittsburgh, PA 15219-3128																									
+5323 BRADFORD DR				
+NON-NEGOTIABLE																													DALLAS TX 
+75235 8313																	ZACHRY, TYLER, 
+WOOD																														4/18/2022			
+ SIGNATURE
+_______/S/_______650-253-0000469-697-4300_______													
+Time Zone: 
+Eastern Central Mountain Pacific				
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value								
+								
+                                                               
+                                                                                           ZACHRY “Google.” WOOD, Jul 8, 12:54 AM url --request POST \ --url https://app.moderntreasury.com/api/payment_orders \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{ "type": "wire", "amount": 2267700000000, "direction": "credit", "originating_account_id": "0f8e3719-3dfd-4613-9bbf-c0333781b59f", "receiving_account_id": "5acec2ef-987b-4260-aa97-b719eeb0a8d5" "ultimate_originating_party_name": "Jane Doe", "ultimate_originating_party_address": { "line1": "123 Main St", "locality": "San Francisco", "region": "CA", "postal_code": "94107", "country": "USA" } }'
 ### Your PR is merged!
 
 Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 
 # See:
 ::*\**here*for*image/asssets/content.yml/config/intuit/install :
 s: https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node/.devcontainer/base.Dockerfile
(IRS USE ONLY)                                               575                WOOD                A                   9999999999                                      SS-4                                    
￼                                       
-       ￼                                                                                                 
-                                                                         EIN:                                             88-1303491       ID:                       txdl                 00037305581        SSN:                                           633-44-1725       DoB:                                           1994-10-15                                                             
ZACHRY T WOOD                                                                        
Cash and Cash Equivalents, Beginning of Period                                                                        
Department of the Treasury                                                                        
Internal Revenue Service                                                                        
                                                                        
Calendar Year                                                                        
Due: 04/18/2022                                                                        
                                                                        
USD in "000'"s                                                                        
Repayments for Long Term Debt                                                                        
Costs and expenses:                                                                        
Cost of revenues                                                                        
Research and development                                                                        
Sales and marketing                                                                        
General and administrative                                                                        
European Commission fines                                                                        
Total costs and expenses                                                                        
Income from operations                                                                        
Other income (expense), net                                                                        
Income before income taxes                                                                        
Provision for income taxes                                                                        
Net income 
                                                                       
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
INTERNAL REVENUE SERVICE,                                                                        
PO BOX 1214,                                                                        
CHARLOTTE, NC 28201-1214                                                                        
                                                                        
ZACHRY WOOD                                                                        
15                                                                        
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        
Cat. No. 11320B                                                                        
Form 1040 (2021)                                                                        
Reported Normalized and Operating Income/Expense Supplemental Section                                                                        
Total Revenue as Reported, Supplemental                                                                        
Total Operating Profit/Loss as Reported, Supplemental                                                                        
Reported Effective Tax Rate                                                                        
Reported Normalized Income                                                                        
Reported Normalized Operating Profit                                                                        
Other Adjustments to Net Income Available to Common Stockholders                                                                        
Discontinued Operations                                                                        
Basic EPS                                                                        
Basic EPS from Continuing Operations                                                                        
Basic EPS from Discontinued Operations                                                                        
Diluted EPS                                                                        
Diluted EPS from Continuing Operations                                                                        
Diluted EPS from Discontinued Operations                                                                        
Basic Weighted Average Shares Outstanding                                                                        
Diluted Weighted Average Shares Outstanding                                                                        
Reported Normalized Diluted EPS                                                                        
Basic EPS                                                                        
Diluted EPS                                                                        
Basic WASO                                                                        
Diluted WASO                                                                        
Fiscal year end September 28th., 2022. | USD                                                                        
                                                                        
For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                          
                                       
INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 
INTERNAL REVENUE SERVICE, *include interest paid, capital obligation, and underweighting 6858000000 -+ PO BOX 1214, Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ CHARLOTTE, NC 28201-1214 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in -+ dollars par share) 22677000000 -+ Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ Taxes / Deductions Current YTD -+ Fiscal year ends in Dec 31 | USD -+ Rate -+ Total -+ 7567263607 ID 00037305581 -+ 2017 2018 2019 2020 2021 -+ Best Time to 911 -+ INTERNAL REVENUE SERVICE -+ PO BOX 1214 -+ CHARLOTTE NC 28201-1214 9999999999 -+ 633-44-1725 -+ ZACHRYTWOOD -+ AMPITHEATRE PARKWAY -+ MOUNTAIN VIEW, Califomia 94043 -+ EIN 61-1767919 -+ Earnings FEIN 88-1303491 -+ End Date -+ 44669 -+ Department of the Treasury Calendar Year -+ Check Date -+ Internal Revenue Service Due. (04/18/2022) -+ _________________________________________________________________-+ ______________________ -+ Tax Period Total Social Security Medicare -+ IEIN: 88-1656495 -+ TxDL: 00037305580 SSN: -+ INTERNAL -+ REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200 -+ 39355 23906.09 10292.9 2407.21 -+ 20210418 39355 11247.64 4842.74 1132.57 -+ 39355 27198.5 11710.47 2738.73 -+ 39355 17028.05 -+ CP 575A (Rev. 2-2007) 99999999999 CP 575 A SS-4 -+ Earnings Statement -+ IEIN: 88-1656496 -+ TxDL: 00037305581 SSN: -+ INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 -+ Employee Information Pay to the order of ZACHRY T WOOD ￼
PNC Bank																											
PNC Bank Business Tax I.D. Number:                                                                                                                                                                                                                                       633441725				
CIF Department (Online Banking)
Checking Account:47-2041-654P7-PFSC-04-F																													Business Type: Sole 
Proprietorship
Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																									
5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 
75235 8313																	ZACHRY, TYLER, 
WOOD																														4/18/2022			
 SIGNATURE
_______/S/_______650-253-0000469-697-4300_______													
Time Zone: 
Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value								
								
                                                               
                                                                                           ZACHRY “Google.” WOOD, Jul 8, 12:54 AM url --request POST \ --url https://app.moderntreasury.com/api/payment_orders \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{ "type": "wire", "amount": 2267700000000, "direction": "credit", "originating_account_id": "0f8e3719-3dfd-4613-9bbf-c0333781b59f", "receiving_account_id": "5acec2ef-987b-4260-aa97-b719eeb0a8d5" "ultimate_originating_party_name": "Jane Doe", "ultimate_originating_party_address": { "line1": "123 Main St", "locality": "San Francisco", "region": "CA", "postal_code": "94107", "country": "USA" } }'# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="110.12.134x-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [2006]'(ZachryTWood'@Administrator'@'.it'.git'' ':')[name of copyright owner] :

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
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
							1		Earnings Statement					A																																																													
				-									0																																																														
	ALPHABET		        						Period Beginning:			37151																																																															
	1600 AMPITHEATRE PARKWAY 			DR					Period Ending:			44833																																																															
	MOUNTAIN VIEW, C.A., 94043								Pay Date:			44591																																																															
	Taxable Marital Status: 
Exemptions/Allowances			Married					ZACHRY T. 			WOOD																																																															
									5323 	BRADFORD DR																																																																	
	Federal:																																																																										
									DALLAS		TX 75235-8314																																																																
	TX:		NO State Income Tax																																																																								
Earnings		rate	units					year to date	Other Benefits and					year to date																																																													
Regular		113	674678000					75698871600	Information				this period	75698871600																																																													
Overtime								        	Pto Balance				        	75698871600																																																													
Bonus
Training								        	Total Work Hrs																																																																		
	Gross Pay	75698871600						        	Important Notes																																																																		
									COMPANY PH Y: 650-253-0000																																																																		
Deductions	NStatutory								BASIS OF PAY: BASIC/DILUTED EPS																																																																		
	Federal Income Tax				        			        																																																																			
	Social Security Tax				        			        																																																																			
									YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE																																																																		
	Medicare Tax				        			        																																																																			
									        																																																																		
	Net Pay		70842743866		70842743866																																																																						
	CHECKING				        																																																																						
	Net Check		70842743866		        																																																																						
	Your federal taxable wages this period are $																																																																										
	ALPHABET INCOME								Advice number:			650001																																																															
	1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043								Pay date:			Monday, April 18, 2022																																																															
																																																																											
	Deposited to the account Of: ZACHRY T. WOOD								xxxxxxxx6547			transit ABA			amount																																																												
	PLEASE READ THE IMPORTANT DISCLOSURES BELOW		Bank																													PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				
														SIGNATURE															Time Zone: Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value											71921891			70842743866																																																												
									NON-NEGOTIABLE																																																																		
	PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																																																										
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
																																																																											
	Based on facts as set forth in.			6550																																																																							
	The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.																																																																										
																																																																											
	EMPLOYER IDENTIFICATION NUMBER:       61-1767919					EIN	61-1767919																																																																				
						FIN	88-1303491																																																																				
																																																																											
							ID:		Ssn: 		DoB:  																																																																
							37305581		633441725		34622																																																																
																																																																											
													1																																																														
																																																																											
	ALPHABET						Name	Tax Period 	Other Benefits and	Social Security	Medicare	Withholding																																																															
	ZACHRY T WOOD						Fed 941 Corporate	Sunday, September 30, 2007	66987	28841	6745	31400																																																															
	5323 BRADFORD DR						Fed 941 West Subsidiary	Sunday, September 30, 2007	17115	7369	1723	8023																																																															
	DALLAS TX 75235-8314						Fed 941 South Subsidiary	Sunday, September 30, 2007	23906	10293	2407	11206																																																															
	ORIGINAL REPORT						Fed 941 East Subsidiary	Sunday, September 30, 2007	11248	4843	1133	5272																																																															
	Income, Rents, & Royalty						Fed 941 Corp - Penalty	Sunday, September 30, 2007	27199	11710	2739	12749																																																															
	INCOME STATEMENT 						Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17028																																																																		
																																																																											
	GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019																																																															
																																																																											
	Gross Profit	146698000000	42337000000	37497000000	35653000000	31211000000	30818000000	25056000000	19744000000	22177000000	25055000000	22931000000																																																															
	Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																																															
		257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	64133000000	34071000000																																																															
	Other Revenue											6428000000																																																															
	Cost of Revenue	-110939000000	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																																															
	Cost of Goods and Services	-110939000000	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																																															
	Operating Income/Expenses	-67984000000	-20452000000	-16466000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000	-14200000000	-15789000000	-13754000000																																																															
	Selling, General and Administrative Expenses	-36422000000	-11744000000	-8772000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000	-7380000000	-8567000000	-7200000000																																																															
	General and Administrative Expenses	-13510000000	-4140000000	-3256000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000	-2880000000	-2829000000	-2591000000																																																															
	Selling and Marketing Expenses	-22912000000	-7604000000	-5516000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000	-4500000000	-5738000000	-4609000000																																																															
	Research and Development Expenses	-31562000000	-8708000000	-7694000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000	-6820000000	-7222000000	-6554000000																																																															
	Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																																															
	Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3038000000	2146000000	1894000000	-220000000	1438000000	-549000000																																																															
	Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																																															
	Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																																															
																																																																											
	Interest Expense Net of Capitalized Interest	-346000000	-117000000	-77000000	-76000000	-76000000	-53000000	-48000000	-13000000	-21000000	-17000000	-23000000																																																															
	Interest Income	1499000000	378000000	387000000	389000000	345000000	386000000	460000000	433000000	586000000	621000000	631000000																																																															
	Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3530000000	1957000000	1696000000	-809000000	899000000	-1452000000																																																															
	Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3262000000	2015000000	1842000000	-802000000	399000000	-1479000000																																																															
	Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355000000	26000000	-54000000	74000000	460000000	-14000000																																																															
	Gain/Loss on Foreign Exchange	-240000000	-163000000	-139000000	-51000000	113000000	-87000000	-84000000	-92000000	-81000000	40000000	41000000																																																															
	Irregular Income/Expenses	0	0				0	0	0	0	0	0																																																															
	Other Irregular Income/Expenses	0	0				0	0	0	0	0	0																																																															
	Other Income/Expense, Non-Operating	-1497000000	-108000000	-484000000	-613000000	-292000000	-825000000	-223000000	-222000000	24000000	-65000000	295000000																																																															
	Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18689000000	13359000000	8277000000	7757000000	10704000000	8628000000																																																															
	Provision for Income Tax	-14701000000	-3760000000	-4128000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	-921000000	-33000000	-1560000000																																																															
	Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
	Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
	Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
	Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
	Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																																															
	Income Statement Supplemental Section																																																																										
	Reported Normalized and Operating Income/Expense Supplemental Section																																																																										
	Total Revenue as Reported, Supplemental	257637000000	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																																															
	Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																																															
	Reported Effective Tax Rate	0		0	0	0		0	0	0		0																																																															
	Reported Normalized Income									6836000000																																																																	
	Reported Normalized Operating Profit									7977000000																																																																	
	Other Adjustments to Net Income Available to Common Stockholders																																																																										
	Discontinued Operations																																																																										
	Basic EPS	114	31	28	28	27	23	17	10	10	15	10																																																															
	Basic EPS from Continuing Operations	114	31	28	28	27	22	17	10	10	15	10																																																															
	Basic EPS from Discontinued Operations																																																																										
	Diluted EPS	112	31	28	27	26	22	16	10	10	15	10																																																															
	Diluted EPS from Continuing Operations	112	31	28	27	26	22	16	10	10	15	10																																																															
	Diluted EPS from Discontinued Operations																																																																										
	Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000																																																															
	Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000																																																															
	Reported Normalized Diluted EPS									10																																																																	
	Basic EPS	114	31	28	28	27	23	17	10	10	15	10																																																															
	Diluted EPS	112	31	28	27	26	22	16	10	10	15	10																																																															
	Basic WASO	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000																																																															
	Diluted WASO	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000																																																															
	Fiscal year end September 28th., 2022. | USD																																																																										
																																																																											
	31622,6:39 PM																																																																										
	Morningstar.com Intraday Fundamental Portfolio View Print Report								Print																																																																		
																																																																											
	3/6/2022 at 6:37 PM											Current Value																																																															
												15335150186014																																																															
																																																																											
	GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021																																																																								
	Cash Flow from Operating Activities, Indirect		24934000000	Q3 2021	Q2 2021	Q1 2021	Q4 2020																																																																				
	Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30818000000																																																																				
	Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22677000000																																																																				
	Income/Loss before Non-Cash Adjustment		20642000000	25539000000	21890000000	19289000000	22677000000																																																																				
	Total Adjustments for Non-Cash Items		6517000000	18936000000	18525000000	17930000000	15227000000																																																																				
	Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	3797000000	4236000000	2592000000	5748000000																																																																				
	Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3725000000																																																																				
	Depreciation, Non-Cash Adjustment		3215000000	3304000000	2945000000	2753000000	3725000000																																																																				
	Amortization, Non-Cash Adjustment		224000000	3085000000	2730000000	2525000000	3539000000																																																																				
	Stock-Based Compensation, Non-Cash Adjustment		3954000000	219000000	215000000	228000000	186000000																																																																				
	Taxes, Non-Cash Adjustment		1616000000	3874000000	3803000000	3745000000	3223000000																																																																				
	Investment Income/Loss, Non-Cash Adjustment		-2478000000	-1287000000	379000000	1100000000	1670000000																																																																				
	Gain/Loss on Financial Instruments, Non-Cash Adjustment		-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																																																																				
	Other Non-Cash Items		-14000000	-2158000000	-2883000000	-4751000000	-3262000000																																																																				
	Changes in Operating Capital		-2225000000	64000000	-8000000	-255000000	392000000																																																																				
	Change in Trade and Other Receivables		-5819000000	2806000000	-871000000	-1233000000	1702000000																																																																				
	Change in Trade/Accounts Receivable		-5819000000	-2409000000	-3661000000	2794000000	-5445000000																																																																				
	Change in Other Current Assets		-399000000	-2409000000	-3661000000	2794000000	-5445000000																																																																				
	Change in Payables and Accrued Expenses		6994000000	-1255000000	-199000000	7000000	-738000000																																																																				
	Change in Trade and Other Payables		1157000000	3157000000	4074000000	-4956000000	6938000000																																																																				
	Change in Trade/Accounts Payable		1157000000	238000000	-130000000	-982000000	963000000																																																																				
	Change in Accrued Expenses		5837000000	238000000	-130000000	-982000000	963000000																																																																				
	Change in Deferred Assets/Liabilities		368000000	2919000000	4204000000	-3974000000	5975000000																																																																				
	Change in Other Operating Capital		-3369000000	272000000	-3000000	137000000	207000000																																																																				
	Change in Prepayments and Deposits			3041000000	-1082000000	785000000	740000000																																																																				
	Cash Flow from Investing Activities		-11016000000																																																																								
	Cash Flow from Continuing Investing Activities		-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																																																																				
	Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6383000000	-10050000000	-9074000000	-5383000000	-7281000000																																																																				
	Purchase of Property, Plant and Equipment		-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																																																																				
	Sale and Disposal of Property, Plant and Equipment			-6819000000	-5496000000	-5942000000	-5479000000																																																																				
	Purchase/Sale of Business, Net		-385000000																																																																								
	Purchase/Acquisition of Business		-385000000	-259000000	-308000000	-1666000000	-370000000																																																																				
	Purchase/Sale of Investments, Net		-4348000000	-259000000	-308000000	-1666000000	-370000000																																																																				
	Purchase of Investments		-40860000000	-3360000000	-3293000000	2195000000	-1375000000																																																																				
	Sale of Investments		36512000000	-35153000000	-24949000000	-37072000000	-36955000000																																																																				
	Other Investing Cash Flow		100000000	31793000000	21656000000	39267000000	35580000000																																																																				
	Purchase/Sale of Other Non-Current Assets, Net			388000000	23000000	30000000	-57000000																																																																				
	Sales of Other Non-Current Assets																																																																										
	Cash Flow from Financing Activities		-16511000000	-15254000000																																																																							
	Cash Flow from Continuing Financing Activities		-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																																																																				
	Issuance of/Payments for Common Stock, Net		-13473000000	-12610000000	-15991000000	-13606000000	-9270000000																																																																				
	Payments for Common Stock		13473000000	-12610000000	-12796000000	-11395000000	-7904000000																																																																				
	Proceeds from Issuance of Common Stock				-12796000000	-11395000000	-7904000000																																																																				
	Issuance of/Repayments for Debt, Net		115000000	-42000000																																																																							
	Issuance of/Repayments for Long Term Debt, Net		115000000	-42000000	-1042000000	-37000000	-57000000																																																																				
	Proceeds from Issuance of Long Term Debt		6250000000	6350000000	-1042000000	-37000000	-57000000																																																																				
	Repayments for Long Term Debt		6365000000	-6392000000	6699000000	900000000	0																																																																				
	Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	-2602000000	-7741000000	-937000000	-57000000																																																																				
					-2453000000	-2184000000	-1647000000																																																																				
																																																																											
	Other Financing Cash Flow																																																																										
	Cash and Cash Equivalents, End of Period																																																																										
	Change in Cash		0		300000000	10000000	338000000000																																																																				
	Effect of Exchange Rate Changes		20945000000	23719000000	23630000000	26622000000	26465000000																																																																				
	Cash and Cash Equivalents, Beginning of Period		25930000000	235000000000	-3175000000	300000000	6126000000																																																																				
	Cash Flow Supplemental Section		181000000000	-146000000000	183000000	-143000000	210000000																																																																				
	Change in Cash as Reported, Supplemental		23719000000000	23630000000000	26622000000000	26465000000000	20129000000000																																																																				
	Income Tax Paid, Supplemental		2774000000	89000000	-2992000000		6336000000																																																																				
	Cash and Cash Equivalents, Beginning of Period		13412000000	157000000			-4990000000																																																																				
																																																																											
	12 Months Ended																																																																										
	_________________________________________________________																																																																										
				Q4 2020			Q4  2019																																																																				
	Income Statement 																																																																										
	USD in "000'"s																																																																										
	Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019																																																																				
	Costs and expenses:																																																																										
	Cost of revenues			182527			161857																																																																				
	Research and development																																																																										
	Sales and marketing			84732			71896																																																																				
	General and administrative			27573			26018																																																																				
	European Commission fines			17946			18464																																																																				
	Total costs and expenses			11052			9551																																																																				
	Income from operations			0			1697																																																																				
	Other income (expense), net			141303			127626																																																																				
	Income before income taxes			41224			34231																																																																				
	Provision for income taxes			6858000000			5394																																																																				
	Net income			22677000000			19289000000																																																																				
	*include interest paid, capital obligation, and underweighting			22677000000			19289000000																																																																				
				22677000000			19289000000																																																																				
	Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																																																																										
	Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)																																																																										
																																																																											
																																																																											
	For Paperwork Reduction Act Notice, see the seperate Instructions.																																																																										
	JPMORGAN TRUST III																																																																										
	A/R Aging Summary																																																																										
	As of July 28, 2022																																																																										
	ZACHRY T WOOD
			Interest Rate, as prescribed by The Secretary of The Treasury.																																																																							
	Effeective Tax Rate Prescribed by the Secretary of the Treasury.		44591	31 - 60	61 - 90	91 and over	Total																																																																				
	
	0					0																																																																				
	TOTAL	134839	0	0	0	0	134839																																																																				
	 Alphabet Inc.  																																																																										
	 P
  					 £134,839.00 																																																																					
																																																																											
	 US$ in millions 																																																																										
	 Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 																																																																					
	 Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 																																																																					
	 Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 																																																																					
	 Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00 																																																																					
`consensus` for changes to consensus critical code
  - `doc` for changes to the documentation
  - `qt` or `gui` for changes to bitcoin-qt
  - `log` for changes to log messages
  - `mining` for changes to the mining code
  - `net` or `p2p` for changes to the peer-to-peer network code
  - `refactor` for structural changes that do not change behavior
  - `rpc`, `rest` or `zmq` for changes to the RPC, REST or ZMQ APIs
  - `script` for changes to the scripts and tools
  - `test`, `qa` or `ci` for changes to the unit tests, QA tests or CI code
  - `util` or `lib` for changes to the utils or libraries
  - `wallet` for changes to the wallet code
  - `build`
From 24f62771b9ff1f37df6ef746b9b207699835a3a0 Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
 <109656750+zakwarlord7@users.noreply.github.com>
Date: Wed, 16 Nov 2022 22:48:46 -0600
Subject: [PATCH] Update CODE_OF_CONDUCT.md

---
 CODE_OF_CONDUCT.md | 521 +++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 521 insertions(+)

diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index e66f6d941d8c..804a12ec8f37 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
@@ -1,5 +1,526 @@
 # Contributor Covenant Code of Conduct
+run:actions:uses:steps:Skip to content
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+bitcoin-core
+/
+gitian.sigs
+Code
+Issues
+29
+Pull requests
+Security
+Insights
+Jump to bottom
+🐛'''fix'v'new #1542
+ Open
+Iixixi opened this issue yesterday · 0 comments
+Comments
+@Iixixi Iixixi commented yesterday • 
+Hello-World-Bug-Fix
+
+Expected behavior
+
+Actual behavior
+
+To reproduce
+
+System information
+
+​int​ g_count = ​0​;
+
+​namespace​ ​foo​ {
+​class​ ​Class​
+{
+    std::string m_name;
+
+​public:​
+    ​bool​ ​Function​(​const​ std::string& s, ​int​ n)
+    {
+        ​//​ Comment summarising what this section of code does​
+        ​for​ (​int​ i = ​0​; i < n; ++i) {
+            ​int​ total_sum = ​0​;
+            ​//​ When something fails, return early​
+            ​if​ (!​Something​()) ​return​ ​false​;
+            ...
+            ​if​ (​SomethingElse​(i)) {
+                total_sum += ​ComputeSomething​(g_count)
+                ​DoSomething​(m_name, total_sum)
+        'Success return is usually at the end​'
+        ​'rereturn'true','​@iixixi/iixixi.READ.md'
+'Return::'#'
+#The build system is set up to compile an executable called test_bitcoin that runs all of the unit tests. The main source file for the test library is found in util/setup_common.cpp.
+
+base_directory
+​$ ./copyright_header.py report 
+base_directory
+ [Zachry T Wood III]
+$ ./copyright_header.py update $ https://github.com/@iixixi/iixixi/READ.md@iixixi/iixixi/read.md/workflows
+update translations, Transactional primary payment name address city state country phone number ssid and DOB for all bank filing records.
+
+NAME: 2003©®™bitore,©®™ bitcoin,©®™ bullion©®™ {[✓]}©®™(c)(r)2003-°° {[✓]}Zachry Tyler Wood 2722 Arroyo Ave Dallas Tx 75219, I made my first runescape gold pieces script to understand object construction: and how they made Runescape gold peices but I pasted it between two other scripts and tried to CopyRight the patent "gp",
+Thank god I had an angel watcheling over my shoulder because I didn't realize it being a mad ass snot nosed kid that has made some ugly orange coin after being promoted that I made a creation that didn't have an object I'd. And needed to be named and given an I'd. And finished being created to have a fully contrusted object so I drug a picture to the yellow drag img here dialog box, and then because it was enlayed upon one another it made me choose a colour after I didn't like the black one It produced automatically from the png it produced automatically from the image I had pulled into the dialog box
+I accidentally implimentred a confidential token into the item i.d. area that was an unproduced un identifiable non recorded item in the database library and needed to be given a name a number and a look so it wasn't a warning that popped up it was a blessing 🤣 object_token@Iixixi.git {object_token@Iixixi.git})value bitore now called bitcoin given to Vanyessa Countryman by Zachry wood at age 9
+Name:: Shining_120@yahoo.com or zakwarlord7@HOTMAIL.com/repository@ZachryTylerWood.Administrator@.git]::request::PUSH:e.g@iixixi/iixixi.Read.md/Paradise
+PUSH@IIXIXI/IIXIXI/READ.MD
+https://github.com/bitore/bitcoin/branches/trunk/@iixixii.json.yaml.docx/versioning@v-0.1.6,3.9.11xprocess.md#syncing-with-TEIRAFOURM: actually called TIERAFORM
+dnspython
+latest
+Search docs
+CONTENTS:
+
+What’s New in built with Bundled with dnspython using their builder not that they are the builder you've got it all wrong
+Community
+Installation
+Dnspython Manual
+DNS Names
+DNS Rdata
+DNS Messages
+The dns.message.Message Class
+Making DNS Messages
+Message Flags
+Message Opcodes
+Message Rcodes
+Message EDNS Options
+The dns.message.QueryMessage Class
+The dns.message.ChainingResult Class
+The dns.update.UpdateMessage Class
+DNS Query Support
+Stub Resolver
+DNS Zones
+DNSSEC
+Asynchronous I/O Support
+Exceptions
+Miscellaneous Utilities
+A Note on Typing
+DNS RFC Reference
+Dnspython License
+dnspython
+Docs » Dnspython Manual » DNS Messages » The dns.message.Message Class
+The dns.message.Message Class
+This is the base class for all messages, and the class used for any DNS opcodes that do not have a more specific class.
+
+classdns.message.Message(id=none of your business it was private repository)[]
+A DNS message.
+
+id
+An int, the query id; the default is a randomly chosen id.
+
+flags
+An int, the DNS flags of the message.
 
+sections
+A list of lists of dns.rrset.RRset objects.
+
+edns
+An int, the EDNS level to use. The default is -1, no EDNS.
+
+ednsflags
+An int, the EDNS flags.
+
+payload
+An int, the EDNS payload size. The default is 0.
+
+options
+The EDNS options, a list of dns.edns.Option objects. The default is the empty list.
+
+''{request}'{(token)}'{{[payload]}}''
+'Pull'request'':''{''bitore'unlimited''}'{''[3413]''}'[464000000000.00]://Contruct:ref: container@iixixi/repositories/ad_new_container@user/bin/workflow/name/type:@iixixi/iixixi/Read.md
+
+The associated request’s EDNS payload size. This field is meaningful in response messages, and if set to a non-zero value, will limit the size of the response to the specified size. The default is 0, which means “use the default limit” which is currently 34173.
+
+keyring
+A dns.tsig.Key, the TSIG key. The default is None.
+
+keyname
+The TSIG keyname to use, a dns.name.Name. The default is None.
+
+keyalgorithm
+A dns.name.Name, the TSIG algorithm to use. Defaults to dns.tsig.default_algorithm. Constants for TSIG algorithms are defined the in dns.tsig module.
+
+request_mac
+A bytes, the TSIG MAC of the request message associated with this message; used when validating TSIG signatures.
+
+fudge
+An int, the TSIG time fudge. The default is 300 seconds.
+
+original_id
+An int, the TSIG original id; defaults to the message’s id.
+
+tsig_error
+An int, the TSIG error code. The default is 0.
+
+other_data
+A bytes, the TSIG “other data”. The default is the empty bytes.
+
+mac
+A bytes, the TSIG MAC for this message.
+
+xfr
+A bool. This attribute is true when the message being used for the results of a DNS zone transfer. The default is False.
+
+origin
+A dns.name.Name. The origin of the zone in messages which are used for zone transfers or for DNS dynamic updates. The default is None.
+
+tsig_ctx
+An hmac.HMAC, the TSIG signature context associated with this message. The default is None.
+
+had_tsig
+A bool, which is True if the message had a TSIG signature when it was decoded from wire format.
+
+multi
+A bool, which is True if this message is part of a multi-message sequence. The default is False. This attribute is used when validating TSIG signatures on messages which are part of a zone transfer.
+
+first
+A bool, which is True if this message is stand-alone, or the first of a multi-message sequence. The default is True. This variable is used when validating TSIG signatures on messages which are part of a zone transfer.
+
+index
+A dict, an index of RRsets in the message. The index key is (section, name, rdclass, rdtype, covers, deleting). The default is {}. Indexing improves the performance of finding RRsets. Indexing can be disabled by setting the index to None.
+
+additional
+The additional data section.
+
+answer
+The answer section.
+
+authority
+The authority section.
+
+find_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
+Find the RRset with the given attributes in the specified section.
+
+section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
+
+my_message.find_rrset(my_message.answer, name, rdclass, rdtype)
+my_message.find_rrset(dns.message.ANSWER, name, rdclass, rdtype)
+name, a dns.name.Name, the name of the RRset.
+
+rdclass, an int, the class of the RRset.
+
+rdtype, an int, the type of the RRset.
+
+covers, an int or None, the covers value of the RRset. The default is None.
+
+deleting, an int or None, the deleting value of the RRset. The default is None.
+
+create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
+
+force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
+
+Raises KeyError if the RRset was not found and create was False.
+
+Returns a dns.rrset.RRset object.
+
+get_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
+Get the RRset with the given attributes in the specified section.
+
+If the RRset is not found, None is returned.
+
+section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
+
+my_message.get_rrset(my_message.answer, name, rdclass, rdtype)
+my_message.get_rrset(dns.message.ANSWER, name, rdclass, rdtype)
+name, a dns.name.Name, the name of the RRset.
+
+rdclass, an int, the class of the RRset.
+
+rdtype, an int, the type of the RRset.
+
+covers, an int or None, the covers value of the RRset. The default is None.
+
+deleting, an int or None, the deleting value of the RRset. The default is None.
+
+create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
+
+force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
+
+Returns a dns.rrset.RRset object or None.
+
+is_response(other)[source]
+Is other a response this message?
+
+Returns a bool.
+
+opcode()[source]
+Return the opcode.
+
+Returns an int.
+
+question
+The question section.
+
+rcode()[source]
+Return the rcode.
+
+Returns an int.
+
+section_from_number(number)[source]
+Return the section list associated with the specified section number.
+
+number is a section number int or the text form of a section name.
+
+Raises ValueError if the section isn’t known.
+
+Returns a list.
+
+section_number(section)[source]
+Return the “section number” of the specified section for use in indexing.
+
+section is one of the section attributes of this message.
+
+::Raises:"'pop-up-window'"ObjectItemIdConstValueUnknownwindow-pop,-up:"if the section isn’t known"'
+
+Returns,?,"true?,",
+
+set_opcode(opcode)[source]
+Set the opcode.
+
+opcode, an int, is the opcode to set.
+
+set_rcode(rcode)[source]
+Set the rcode.
+
+rcode, an int, is the rcode to set.
+
+to_text(origin=None, relativize=True, **kw)[source]
+Convert the message to text.
+
+The origin, relativize, and any other keyword arguments are passed to the RRset to_wire() method.
+
+Returns a str.
+
+to_wire(origin=None, max_size=0, multi=False, tsig_ctx=None, **kw)[source]
+Return a string containing the message in DNS compressed wire format.
+
+Additional keyword arguments are passed to the RRset to_wire() method.
+
+origin, a dns.name.Name or None, the origin to be appended to any relative names. If None, and the message has an origin attribute that is not None, then it will be used.
+
+max_size, an int, the maximum size of the wire format output; default is 0, which means “the message’s request payload, if nonzero, or 65535”.
+
+multi, a bool, should be set to True if this message is part of a multiple message sequence.
+
+tsig_ctx, a dns.tsig.HMACTSig or dns.tsig.GSSTSig object, the ongoing TSIG context, used when signing zone transfers.
+
+Raises dns.exception.TooBig if max_size was exceeded.
+
+Returns a bytes.
+
+use_edns(edns=0, ednsflags=0, payload=1232, request_payload=None, options=None)[source]
+Configure EDNS behavior.
+
+edns, an int, is the EDNS level to use. Specifying None, False, or -1 means “do not use EDNS”, and in this case the other parameters are ignored. Specifying True is equivalent to specifying 0, i.e. “use EDNS0”.
+
+ednsflags, an int, the EDNS flag values.
+
+payload, an int, is the EDNS sender’s payload field, which is the maximum size of UDP datagram the sender can handle. I.e. how big a response to this message can be.
+
+request_payload, an int, is the EDNS payload size to use when sending this message. If not specified, defaults to the value of payload.
+
+options, a list of dns.edns.Option objects or None, the EDNS options.
+
+use_tsig(keyring, keyname=None, fudge=300, original_id=None, tsig_error=0, other_data=b'', algorithm=)[source]
+When sending, a TSIG signature using the specified key should be added.
+
+key, a dns.tsig.Key is the key to use. If a key is specified, the keyring and algorithm fields are not used.
+
+keyring, a dict, callable or dns.tsig.Key, is either the TSIG keyring or key to use.
+
+The format of a keyring dict is a mapping from TSIG key name, as dns.name.Name to dns.tsig.Key or a TSIG secret, a bytes. If a dict keyring is specified but a keyname is not, the key used will be the first key in the keyring. Note that the order of keys in a dictionary is not defined, so applications should supply a keyname when a dict keyring is used, unless they know the keyring contains only one key. If a callable keyring is specified, the callable will be called with the message and the keyname, and is expected to return a key.
+
+keyname, a dns.name.Name, str or None, the name of thes TSIG key to use; defaults to None. If keyring is a dict, the key must be defined in it. If keyring is a dns.tsig.Key, this is ignored.
+
+fudge, an int, the TSIG time fudge.
+
+original_id, an int, the TSIG original id. If None, the message’s id is used.
+
+tsig_error, an int, the TSIG error code.
+
+other_data, a bytes, the TSIG other data.
+
+algorithm, a dns.name.Name, the TSIG algorithm to use. This is only used if keyring is a dict, and the key entry is a bytes.
+
+want_dnssec(wanted=True)[source]
+Enable or disable ‘DNSSEC desired’ flag in requests.
+
+wanted, a bool. If True, then DNSSEC data is desired in the response, EDNS is enabled if required, and then the DO bit is set. If False, the DO bit is cleared if EDNS is enabled.
+
+The following constants may be used to specify sections in the find_rrset() and get_rrset() methods:
+
+dns.message.QUESTION= <MessageSection.QUESTION: 0>
+Message sections
+
+dns.message.ANSWER= <MessageSection.ANSWER: 1>
+Message sections
+
+dns.message.AUTHORITY= <MessageSection.AUTHORITY: 2>
+Message sections
+
+dns.message.ADDITIONAL= <MessageSection.ADDITIONAL: 3>
+Message sections
+
+Beat Triplebyte's online coding quiz. Get offers from top companies. Skip resumes & recruiters.
+
+Sponsored · Ads served ethically
+© Copyright =\not-=-not-equal-toDnspython Contributors 1 Zachry Tyler Wood = does equal the creating version of Foundings of ''bitore'unlimited''=''Zachry Tyler Wood''='' creator of bitore, bitcoin , bullion Foundings that were stolen by python because I used it to build it with. E.g. build:script:' runs-on:'python.js''
+
+Built with Sphinx using a theme provided by Read the Docs.
+
+update translations (ping wumpus, Diapolo or tcatm on IRC)
+
+
+
+Leave a comment
+Remember, contributions to this repository should follow our GitHub Community Guidelines.
+Assignees
+No one assigned
+Labels
+None yet
+Projects
+None yet
+Milestone
+No milestone
+Linked pull requests
+Successfully merging a pull request may close this issue.
+
+None yet
+Notifications
+Customize
+You’re receiving notifications because you authored the thread.
+1 participant
+@Iixixi
+© 2021 GitHub, Inc.
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
+request_pull:<{webRootUrl}>Trunk<{https://www.bitore.org/download/install/package/Bundler/rakefile/adk/api}>
+Name:Revert "(Echo(#41)" into iixixi/paradise ZACHRY T WOOD III
+Name:Automate:Autobot:Deploy:Dependabot:on:":"Ixixii:python.js:bitcoin.org/gitian/sigs@iixixibitcoin.org/adk/api.yaml.json/@iixixi/paradise.git
+Name:on:Deploy:Heroku:automerge:Dependabot":"to:":"Build:Container:construct:inputs:repo:
+ref:# This is a basic workflow to help you get started with Actions
+name:://construct:git.item.id.(c)(r).11890.git.item.id.gemgile://input:container:type:gemfile://Deploy:Repository://github.git/@iixixi/paradise/terraform://Build
+  push: [main]
+    branches: [mainbranch]
+  pull_request: [mainbranch]
+    branches: [trunk]
+Actions:
+ ://Deploy:Repo_workflow_dispatch:
+jobs:
+runs-on:iixixi-latest
+#steps:
+name:run:Automate:Construct:Dependabot:terraform://Build
+run:"NAME:":"DEPLOY-TO-iixixi":"Launch:":"rebase:":"reopen:":"Repo-sync":"pull:":"branches:":"zw":"/":"bitcoin-meta-gh:":"push:":"branches:":"{build:":"{[(item.id)]}":"{[(((c))((r)))]}":"Name:":"bitcoin}":"{inputs:":"#::":"on::":"run:":"command:":"run:":"{test:":"inputs:":"true",:":
+"Inputs:":"Command:":"build:":"repo:":"Name:":"iixixi/paradise@github.com":
+Inputs:":"On:":"run:":"Inputs:":"build":"jobs:":"steps:":
+Inputs:build":"and":"Name:Automate:Deploy:Dependabot:Heroku:AutoMerge:run:jobs:on:":"@iixixi":"Heroku:":"DependAutobot:":"build":":"test:":"and":"perfect:":"all":"read.me":"open:":"repos':"::Deploy-Heroku-to-@iixixi":"@github.com/iixixi/paradise":
+Inputs:name:Bui"ld:":"Deploy:":
+Repository:runs-on:@iixixiii-bitore-latest
+steps:uses:-actions:
+::Build:{workspaceRoot}:input:ref:{{[value]}{[(token)]}{[item_id]}}:build:token:ref:{[100000]}{[((c)(r))]}{{[11890]}}://construct://terraform://perfect
+-uses:
+-actions:
+-run-on:Versioning:0.1.3.9.11
+    -name:construct:token:input:container:deploy:repo:base:@iixixii/Paradise
+    -Use:.js"
+    -construct:{${{env":"token.gists.secrets.Bitore}}"
+      "-uses:actions/setup:'Automate'
+      "with:''DependabotHerokuRunWizard'
+      "versioning:''@v1.3.9.10'"
+     master:
+        "-version:":"{${{}}"
+    "-name:install
+    build:repo:":"true,"
+ ue,"
+      "-:on:":"run:":
+        "-Build:((c)(r))":
+        "-deploy:":
+        "-Install:":
+        "-run:":
+build:":
+        "-run:":
+test:":returns":"true,":
+    "-name:Deploy:":"and":"return:":
+      "-"uses:/webapps":"to":":
+      "deploy:":"@":"iixixi":
+      d"deploy:":"repo:pull:paradise:
+      repo:push:@iixixi/ZachryTylerWoodv1:
+      "Name:";""v2":
+      "-with:python.js":
+        "-app-name:${{bitcoin.org/adk/api/yaml/json/.png/.jpeg/.img/repo/::sync:":"{(":"(github.gists)_(secret_token)":")}}":"{":"(((c)(r)))":"}}}":"build:":":":"/":"/":"run:":"on:":"::Echo:":"#
+"publish":"gemfile:":"{[((c))((r))]}:":"{v1.3.1.0.11}":"[@iixixi]":"::build:":"repository":"::Echo:":"#::":
+pull:Master:
+Run:tests:results:"true"
+Construct:container:Type:gemfile.json
+Automate:deploy:repository-to-@iixixi/paradisebyzachrytwoodIII
+Automate:Extract:pdf.json-to-desktop
+"<li><Author:><Zachry Tyler Wood><Author><li>:
+return:run:push:Trunk:
+-li><Author:><Zachry Tyler Wood><Author><li>:
+runs:test:
+Test:Returns:Results:":"true,"
+jobs:
+Request:Push:branches:mainbranch:
+Request:pull:publish:package:iixixi/git.rakefile.gem/byzachryTwood
+COMMAND:BUILD:COMMIT-TO-MAINBRANCHTRUNK-cli.ci
+Run:iixixi/cli.ci/Update:Ownership.yml/.yaml.json
+Pull:
+request:branches:@iixixi/mainbranch.gem.json.yaml.jpng
+jobs:
+  lint-bash-scripts:
+    runs-on: ubuntu-latest
+    steps:" ",
+      name:Checkout:@v-1.0.3.9.11
+        uses:actions:
+        with:
+WebRootbin:https://www.github/lint.piper.js/bin/bash/terraform
+Transformation:'Engineering:results:"true,"'
+Run-on:
+launch: repo:deploy:release:publish-gpr:@myusername/repository/bin
+Deploy-to: @iixixi:
+Construct:Name:iixixi/cli/update:Ownership.yml'"
+    runs-on:@iixixi/latest-bitcoin.json.jpng.yaml
+    needs: @my-user-name/bin//lint.js/Meta_data:port:"branches:"ports:'8883':'8333'"
+        Item_i:11890_34173
+        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
+      postgres:
+        image: postgres:11
+        env:docker/bin/gem/rake/file.Gem/.json.yaml
+        "ports:'8333':'8883'"
+env:
+     Entry:test:env:construction:slack:build:Engineering:perfect:
+      "COMMADS:construct:"{${[(token)]}}":"{${{[((C)(R))]}}"
+    steps:
+       name:Checkout:publish:release:v-1.0.3.9.11
+        uses:actions:construct:
+       name:Setup:Ruby.gem
+        uses:actions:
+setup:ruby/gemfile/rake/api/sdk.se/api/adk.js/sun.runtime.js/json/jpng/.yaml.jpng
+setup:rubyversioning:v-1.0.3.9.11
+        with:
+          ruby-version: v-1.0.3.9.11
+      - name: Increase MySQL max_allowed_packet to 1GB (workaround for unknown/missing service option)
+        run:construct:docker:container:deploy:repository-to-@iixixi
+        getinstall:
+Pull:,mainbranch
+Branches:Masterbranch
+Pull:Masterbranch
+Branches:trunk
+Push:
+Branches:main

+Pull:
+branches:
+run::"ests",
+Results:"true",
+Command:construct:repo:container:type:docker.yml.json:build:container@iixixi
+Return:run
 ## Our Pledge
 
 We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
Footer
© 2022 GitHub, Inc.
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
accessKey
: 
""
align
: 
""
alt
: 
"IMG_20201219_205800480.jpg"
ariaAtomic
: 
null
ariaAutoComplete
: 
null
ariaBrailleLabel
: 
null
ariaBrailleRoleDescription
: 
null
ariaBusy
: 
null
ariaChecked
: 
null
ariaColCount
: 
null
ariaColIndex
: 
null
ariaColSpan
: 
null
ariaCurrent
: 
null
ariaDescription
: 
null
ariaDisabled
: 
null
ariaExpanded
: 
null
ariaHasPopup
: 
null
ariaHidden
: 
null
ariaInvalid
: 
null
ariaKeyShortcuts
: 
null
ariaLabel
: 
null
ariaLevel
: 
null
ariaLive
: 
null
ariaModal
: 
null
ariaMultiLine
: 
null
ariaMultiSelectable
: 
null
ariaOrientation
: 
null
ariaPlaceholder
: 
null
ariaPosInSet
: 
null
ariaPressed
: 
null
ariaReadOnly
: 
null
ariaRelevant
: 
null
ariaRequired
: 
null
ariaRoleDescription
: 
null
ariaRowCount
: 
null
ariaRowIndex
: 
null
ariaRowSpan
: 
null
ariaSelected
: 
null
ariaSetSize
: 
null
ariaSort
: 
null
ariaValueMax
: 
null
ariaValueMin
: 
null
ariaValueNow
: 
null
ariaValueText
: 
null
assignedSlot
: 
slot
attributeStyleMap
: 
StylePropertyMap {size: 0}
attributes
: 
NamedNodeMap {0: draggable, 1: src, 2: alt, 3: width, 4: height, draggable: draggable, src: src, alt: alt, width: width, height: height, …}
autocapitalize
: 
""
autofocus
: 
false
baseURI
: 
"chrome-untrusted://media-app/app.html"
border
: 
""
childElementCount
: 
0
childNodes
: 
NodeList []
children
: 
HTMLCollection []
classList
: 
DOMTokenList [value: '']
className
: 
""
clientHeight
: 
3000
clientLeft
: 
0
clientTop
: 
0
clientWidth
: 
4000
complete
: 
true
contentEditable
: 
"inherit"
crossOrigin
: 
null
currentSrc
: 
"blob:chrome-untrusted://media-app/97ca75dc-430a-4e5a-8ee8-6a8c53670abb"
dataset
: 
DOMStringMap {}
decoding
: 
"auto"
dir
: 
""
draggable
: 
false
elementTiming
: 
""
enterKeyHint
: 
""
fetchPriority
: 
"auto"
firstChild
: 
null
firstElementChild
: 
null
height
: 
3000
hidden
: 
false
hspace
: 
0
id
: 
""
inert
: 
false
innerHTML
: 
""
innerText
: 
""
inputMode
: 
""
isConnected
: 
true
isContentEditable
: 
false
isMap
: 
false
lang
: 
""
lastChild
: 
null
lastElementChild
: 
null
loading
: 
"auto"
localName
: 
"img"
longDesc
: 
""
lowsrc
: 
""
name
: 
""
namespaceURI
: 
"http://www.w3.org/1999/xhtml"
naturalHeight
: 
3000
naturalWidth
: 
4000
nextElementSibling
: 
null
nextSibling
: 
null
nodeName
: 
"IMG"
nodeType
: 
1
nodeValue
: 
null
nonce
: 
""
offsetHeight
: 
3000
offsetLeft
: 
0
offsetParent
: 
backlight-managed-image
offsetTop
: 
0
offsetWidth
: 
4000
onabort
: 
null
onanimationend
: 
null
onanimationiteration
: 
null
onanimationstart
: 
null
onauxclick
: 
null
onbeforecopy
: 
null
onbeforecut
: 
null
onbeforeinput
: 
null
onbeforematch
: 
null
onbeforepaste
: 
null
onbeforexrselect
: 
null
onblur
: 
null
oncancel
: 
null
oncanplay
: 
null
oncanplaythrough
: 
null
onchange
: 
null
onclick
: 
null
onclose
: 
null
oncontextlost
: 
null
oncontextmenu
: 
null
oncontextrestored
: 
null
oncopy
: 
null
oncuechange
: 
null
oncut
: 
null
ondblclick
: 
null
ondrag
: 
null
ondragend
: 
null
ondragenter
: 
null
ondragleave
: 
null
ondragover
: 
null
ondragstart
: 
null
ondrop
: 
null
ondurationchange
: 
null
onemptied
: 
null
onended
: 
null
onerror
: 
ƒ ()
onfocus
: 
null
onformdata
: 
null
onfullscreenchange
: 
null
onfullscreenerror
: 
null
ongotpointercapture
: 
null
oninput
: 
null
oninvalid
: 
null
onkeydown
: 
null
onkeypress
: 
null
onkeyup
: 
null
onload
: 
ƒ ()
onloadeddata
: 
null
onloadedmetadata
: 
null
onloadstart
: 
null
onlostpointercapture
: 
null
onmousedown
: 
null
onmouseenter
: 
null
onmouseleave
: 
null
onmousemove
: 
null
onmouseout
: 
null
onmouseover
: 
null
onmouseup
: 
null
onmousewheel
: 
null
onpaste
: 
null
onpause
: 
null
onplay
: 
null
onplaying
: 
null
onpointercancel
: 
null
onpointerdown
: 
null
onpointerenter
: 
null
onpointerleave
: 
null
onpointermove
: 
null
onpointerout
: 
null
onpointerover
: 
null
onpointerrawupdate
: 
null
onpointerup
: 
null
onprogress
: 
null
onratechange
: 
null
onreset
: 
null
onresize
: 
null
onscroll
: 
null
onsearch
: 
null
onsecuritypolicyviolation
: 
null
onseeked
: 
null
onseeking
: 
null
onselect
: 
null
onselectionchange
: 
null
onselectstart
: 
null
onslotchange
: 
null
onstalled
: 
null
onsubmit
: 
null
onsuspend
: 
null
ontimeupdate
: 
null
ontoggle
: 
null
ontransitioncancel
: 
null
ontransitionend
: 
null
ontransitionrun
: 
null
ontransitionstart
: 
null
onvolumechange
: 
null
onwaiting
: 
null
onwebkitanimationend
: 
null
onwebkitanimationiteration
: 
null
onwebkitanimationstart
: 
null
onwebkitfullscreenchange
: 
null
onwebkitfullscreenerror
: 
null
onwebkittransitionend
: 
null
onwheel
: 
null
outerHTML
: 
"<img draggable=\"false\" src=\"blob:chrome-untrusted://media-app/97ca75dc-430a-4e5a-8ee8-6a8c53670abb\" alt=\"IMG_20201219_205800480.jpg\" width=\"4000\" height=\"3000\">"
outerText
: 
""
ownerDocument
: 
document
parentElement
: 
backlight-managed-image
parentNode
: 
backlight-managed-image
part
: 
DOMTokenList [value: '']
prefix
: 
null
previousElementSibling
: 
null
previousSibling
: 
null
referrerPolicy
: 
""
role
: 
null
scrollHeight
: 
3000
scrollLeft
: 
0
scrollTop
: 
0
scrollWidth
: 
4000
shadowRoot
: 
null
sizes
: 
""
slot
: 
""
spellcheck
: 
true
src
: 
"blob:chrome-untrusted://media-app/97ca75dc-430a-4e5a-8ee8-6a8c53670abb"
srcset
: 
""
style
: 
CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex
: 
-1
tagName
: 
"IMG"
textContent
: 
""
title
: 
""
translate
: 
true
useMap
: 
""
virtualKeyboardPolicy
: 
""
vspace
: 
0
width
: 
4000
x
: 
0
y
: 
50
accessKey
: 
""
align
: 
""
alt
: 
"IMG_20201219_205812041.jpg"
ariaAtomic
: 
null
ariaAutoComplete
: 
null
ariaBrailleLabel
: 
null
ariaBrailleRoleDescription
: 
null
ariaBusy
: 
null
ariaChecked
: 
null
ariaColCount
: 
null
ariaColIndex
: 
null
ariaColSpan
: 
null
ariaCurrent
: 
null
ariaDescription
: 
null
ariaDisabled
: 
null
ariaExpanded
: 
null
ariaHasPopup
: 
null
ariaHidden
: 
null
ariaInvalid
: 
null
ariaKeyShortcuts
: 
null
ariaLabel
: 
null
ariaLevel
: 
null
ariaLive
: 
null
ariaModal
: 
null
ariaMultiLine
: 
null
ariaMultiSelectable
: 
null
ariaOrientation
: 
null
ariaPlaceholder
: 
null
ariaPosInSet
: 
null
ariaPressed
: 
null
ariaReadOnly
: 
null
ariaRelevant
: 
null
ariaRequired
: 
null
ariaRoleDescription
: 
null
ariaRowCount
: 
null
ariaRowIndex
: 
null
ariaRowSpan
: 
null
ariaSelected
: 
null
ariaSetSize
: 
null
ariaSort
: 
null
ariaValueMax
: 
null
ariaValueMin
: 
null
ariaValueNow
: 
null
ariaValueText
: 
null
assignedSlot
: 
slot
attributeStyleMap
: 
StylePropertyMap {size: 0}
attributes
: 
NamedNodeMap {0: draggable, 1: src, 2: alt, 3: width, 4: height, draggable: draggable, src: src, alt: alt, width: width, height: height, …}
autocapitalize
: 
""
autofocus
: 
false
baseURI
: 
"chrome-untrusted://media-app/app.html"
border
: 
""
childElementCount
: 
0
childNodes
: 
NodeList []
children
: 
HTMLCollection []
classList
: 
DOMTokenList [value: '']
className
: 
""
clientHeight
: 
3000
clientLeft
: 
0
clientTop
: 
0
clientWidth
: 
4000
complete
: 
true
contentEditable
: 
"inherit"
crossOrigin
: 
null
currentSrc
: 
"blob:chrome-untrusted://media-app/2cc52d13-026a-4db6-a6e9-037d3e4c3749"
dataset
: 
DOMStringMap {}
decoding
: 
"auto"
dir
: 
""
draggable
: 
false
elementTiming
: 
""
enterKeyHint
: 
""
fetchPriority
: 
"auto"
firstChild
: 
null
firstElementChild
: 
null
height
: 
3000
hidden
: 
false
hspace
: 
0
id
: 
""
inert
: 
false
innerHTML
: 
""
innerText
: 
""
inputMode
: 
""
isConnected
: 
true
isContentEditable
: 
false
isMap
: 
false
lang
: 
""
lastChild
: 
null
lastElementChild
: 
null
loading
: 
"auto"
localName
: 
"img"
longDesc
: 
""
lowsrc
: 
""
name
: 
""
namespaceURI
: 
"http://www.w3.org/1999/xhtml"
naturalHeight
: 
3000
naturalWidth
: 
4000
nextElementSibling
: 
null
nextSibling
: 
null
nodeName
: 
"IMG"
nodeType
: 
1
nodeValue
: 
null
nonce
: 
""
offsetHeight
: 
3000
offsetLeft
: 
0
offsetParent
: 
backlight-managed-image
offsetTop
: 
0
offsetWidth
: 
4000
onabort
: 
null
onanimationend
: 
null
onanimationiteration
: 
null
onanimationstart
: 
null
onauxclick
: 
null
onbeforecopy
: 
null
onbeforecut
: 
null
onbeforeinput
: 
null
onbeforematch
: 
null
onbeforepaste
: 
null
onbeforexrselect
: 
null
onblur
: 
null
oncancel
: 
null
oncanplay
: 
null
oncanplaythrough
: 
null
onchange
: 
null
onclick
: 
null
onclose
: 
null
oncontextlost
: 
null
oncontextmenu
: 
null
oncontextrestored
: 
null
oncopy
: 
null
oncuechange
: 
null
oncut
: 
null
ondblclick
: 
null
ondrag
: 
null
ondragend
: 
null
ondragenter
: 
null
ondragleave
: 
null
ondragover
: 
null
ondragstart
: 
null
ondrop
: 
null
ondurationchange
: 
null
onemptied
: 
null
onended
: 
null
onerror
: 
ƒ ()
onfocus
: 
null
onformdata
: 
null
onfullscreenchange
: 
null
onfullscreenerror
: 
null
ongotpointercapture
: 
null
oninput
: 
null
oninvalid
: 
null
onkeydown
: 
null
onkeypress
: 
null
onkeyup
: 
null
onload
: 
ƒ ()
onloadeddata
: 
null
onloadedmetadata
: 
null
onloadstart
: 
null
onlostpointercapture
: 
null
onmousedown
: 
null
onmouseenter
: 
null
onmouseleave
: 
null
onmousemove
: 
null
onmouseout
: 
null
onmouseover
: 
null
onmouseup
: 
null
onmousewheel
: 
null
onpaste
: 
null
onpause
: 
null
onplay
: 
null
onplaying
: 
null
onpointercancel
: 
null
onpointerdown
: 
null
onpointerenter
: 
null
onpointerleave
: 
null
onpointermove
: 
null
onpointerout
: 
null
onpointerover
: 
null
onpointerrawupdate
: 
null
onpointerup
: 
null
onprogress
: 
null
onratechange
: 
null
onreset
: 
null
onresize
: 
null
onscroll
: 
null
onsearch
: 
null
onsecuritypolicyviolation
: 
null
onseeked
: 
null
onseeking
: 
null
onselect
: 
null
onselectionchange
: 
null
onselectstart
: 
null
onslotchange
: 
null
onstalled
: 
null
onsubmit
: 
null
onsuspend
: 
null
ontimeupdate
: 
null
ontoggle
: 
null
ontransitioncancel
: 
null
ontransitionend
: 
null
ontransitionrun
: 
null
ontransitionstart
: 
null
onvolumechange
: 
null
onwaiting
: 
null
onwebkitanimationend
: 
null
onwebkitanimationiteration
: 
null
onwebkitanimationstart
: 
null
onwebkitfullscreenchange
: 
null
onwebkitfullscreenerror
: 
null
onwebkittransitionend
: 
null
onwheel
: 
null
outerHTML
: 
"<img draggable=\"false\" src=\"blob:chrome-untrusted://media-app/2cc52d13-026a-4db6-a6e9-037d3e4c3749\" alt=\"IMG_20201219_205812041.jpg\" width=\"4000\" height=\"3000\">"
outerText
: 
""
ownerDocument
: 
document
parentElement
: 
backlight-managed-image
parentNode
: 
backlight-managed-image
part
: 
DOMTokenList [value: '']
prefix
: 
null
previousElementSibling
: 
null
previousSibling
: 
null
referrerPolicy
: 
""
role
: 
null
scrollHeight
: 
3000
scrollLeft
: 
0
scrollTop
: 
0
scrollWidth
: 
4000
shadowRoot
: 
null
sizes
: 
""
slot
: 
""
spellcheck
: 
true
src
: 
"blob:chrome-untrusted://media-app/2cc52d13-026a-4db6-a6e9-037d3e4c3749"
srcset
: 
""
style
: 
CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex
: 
-1
tagName
: 
"IMG"
textContent
: 
""
title
: 
""
translate
: 
true
useMap
: 
""
virtualKeyboardPolicy
: 
""
vspace
: 
0
width
: 
4000
x
: 
0
y
: 
50
:Build::
Publish :
Launch :
Release :
Deployee:script/install/config.yml/cntent/intuit/.util/tools/task/pkg.js/package.json/package.yarn'@Kite.i LL
