#!/usr/bin/env sh

# Fetches and resolves docs-internal, early-access, and translations repos
echo "Fetching and resolving docs-internal, early-access, and translations repos"

# Don't show advice logging about checking out a SHA with git
git config --global advice.detachedHead false

# Exit immediately if a command exits with a non-zero status
set -e

# Import the clone_or_use_cached_repo function
. ./build-scripts/clone-or-use-cached-repo.sh

# - - - - - - - - - -
# Read variables from .env
# - - - - - - - - - -
. ./build-scripts/read-dot-env.sh

GITHUB_TOKEN=$(cat /run/secrets/DOCS_BOT_PAT_READPUBLICKEY)

# - - - - - - - - - -
# Get docs-internal contents
# - - - - - - - - - -
clone_or_use_cached_repo "repo" "docs-internal" "$STAGING_BRANCH" "$SHA"
# Clone other repo from the root of docs-internal
cd repo

# - - - - - - - - - -
# Clone the translations repos
# - - - - - - - - - -
mkdir -p translations
cd translations

# Iterate over each language
for lang in "zh-cn" "es-es" "pt-br" "ru-ru" "ja-jp" "fr-fr" "de-de" "ko-kr"
do
  translations_repo="docs-internal.$lang"
  clone_or_use_cached_repo "$lang" "$translations_repo" "main" ""
done

# Go back to the root of the docs-internal repo
cd ..

# - - - - - - - - - -
# Cleanup
# - - - - - - - - - -
# Delete GITHUB_TOKEN from the environment
unset GITHUB_TOKEN