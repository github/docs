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
