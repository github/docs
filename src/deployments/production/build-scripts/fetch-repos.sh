#!/usr/bin/env sh

#
# This script is intended to be called from the production Dockerfile
# Though it isn't working with all of the files from docs-internal (it only COPYs what is needed),
# it is useful to think of these scripts running from the root of the docs-internal repo.
#

# Fetches and resolves docs-internal, early-access, and translations repos
echo "Fetching and resolving early-access, and translations repos"

# Exit immediately if a command exits with a non-zero status
set -e

# Import the clone_or_use_cached_repo function
. ./build-scripts/clone-or-use-cached-repo.sh

# Set the GITHUB_TOKEN environment variable from the mounted --secret passed to Docker build
GITHUB_TOKEN=$(cat /run/secrets/DOCS_BOT_PAT_READPUBLICKEY)

# - - - - - - - - - -
# Early access
# - - - - - - - - - -
echo "Fetching early access..."
clone_or_use_cached_repo "docs-early-access" "docs-early-access" "main"
echo "Merging early access..."
. ./build-scripts/merge-early-access.sh

# - - - - - - - - - -
# Clone the translations repos
# - - - - - - - - - -
# Make sure to clone each translation repo into the `translations` directory inside the root of docs-internal (the Dockerfile's WORKDIR)
mkdir -p translations
cd translations

# Iterate over each language
echo "Fetching translations..."
for lang in "zh-cn" "es-es" "pt-br" "ru-ru" "ja-jp" "fr-fr" "de-de" "ko-kr"
do
  translations_repo="docs-internal.$lang"
  clone_or_use_cached_repo "$lang" "$translations_repo" "main"
done
echo "Done fetching translations."

# Go back to the root of the docs-internal repo
cd ..

# - - - - - - - - - -
# Cleanup
# - - - - - - - - - -
# Delete GITHUB_TOKEN from the environment
unset GITHUB_TOKEN