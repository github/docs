# To find available Node images, see https://mcr.microsoft.com/en-us/product/devcontainers/javascript-node/tags

# [Choice] Node.js version
ARG VARIANT="dev-20-bullseye"
FROM mcr.microsoft.com/devcontainers/javascript-node:${VARIANT}

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
