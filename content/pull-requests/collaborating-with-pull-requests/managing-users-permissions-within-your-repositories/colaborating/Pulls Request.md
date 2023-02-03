#!/usr/bin/env bash
name: Stale
diff --git a/.husky/.gitignore b/.husky/.gitignore
deleted file mode 100644
index 31354ec1389..00000000000
--- a/.husky/.gitignore
+++ /dev/null
@@ -1 +0,0 @@
-_
diff --git a/.husly/.sh/bitore.sig b/.husly/.sh/bitore.sig
new file mode 100644
index 00000000000..e67f834feea
--- /dev/null
+++ b/.husly/.sh/bitore.sig
@@ -0,0 +1,16 @@
+ BEGIN:
+ GLOW4:
+ </git checkout origin/main <file name>
+Run'' 'Runs::/Action::/:Build::/scripts::/Run-on :Runs :
+Runs :gh/pages :
+pages :edit "
+$ intuit install 
+PURL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
+run: gh pr edit "$PR_URL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ ((c)(r)).[12753750.[00]m]'_BITORE_34173.1337) ')]}}}'"'' :
+ </git checkout origin/main <file name># See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile
# [Choice] Node.js version
'A'G'S'"'' ':;'' ':'' '"'P3'T3'R'X'@niezt'@V8/natz :
  '-'' 'with:'' 'Bowser.yml'@'Buster"12x, 14x,16x":, :
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

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
changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork mowjoejoejoejoe/docs, so you can send a pull request'@GiHub/doc/packages/javascript.yml :
content/pull-requests/collaborating-with-pull-requests/managing-users-permissions-within-your-repositories/colaborating/Pulls Request.md
github:main
# **What it does**: Close issues and pull requests after no updates for 365 days.
# **Why we have it**: We want to manage our queue of issues and pull requests.
# **Who does it impact**: Everyone that works on docs or docs-internal.

BEGIN 
GLOW4 
// **What it does**: Close issues and pull requests after no updates for 365 days.
// **Why we have it**: We want to manage our queue of issues and pull requests.
// **Who does it impact**: Everyone that works on docs or docs-internal.
on:
  schedule:
    - cron: '20 16 * * *' # Run every day at 16:20 UTC / 8:20 PST

permissions:
  issues: write
  pull-requests: write

jobs:
  stale:
    if: github.reposi
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
