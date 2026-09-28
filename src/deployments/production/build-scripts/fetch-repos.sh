#!/usr/bin/env sh

# The production Dockerfile copies only required files, but these scripts still run from the
# docs-internal root.

echo "Fetching and resolving early-access, and translations repos"

set -e

. ./build-scripts/clone-or-use-cached-repo.sh

# Docker build mounts DOCS_BOT_PAT_BASE at /run/secrets/DOCS_BOT_PAT_BASE.
GITHUB_TOKEN=$(cat /run/secrets/DOCS_BOT_PAT_BASE)

echo "Fetching early access..."
clone_or_use_cached_repo "docs-early-access" "docs-early-access" "main"
echo "Merging early access..."
. ./build-scripts/merge-early-access.sh

# Clone translations under the Dockerfile WORKDIR, the docs-internal root.
mkdir -p translations
cd translations

# Disable exit-on-error so the script can collect every background clone failure.
set +e

pids=""
for lang in es-es ja-jp pt-br zh-cn ru-ru fr-fr ko-kr de-de; do
  clone_or_use_cached_repo "$lang" "docs-internal.$lang" "main" &
  pids="$pids $!"
done

failures=0
for pid in $pids; do
  wait "$pid" || failures=$((failures+1))
done

set -e

if [ "$failures" -gt 0 ]; then
  echo "⚠️  $failures translation repo(s) failed to fetch."
  exit 1
else
  echo "✅  All translations fetched."
fi

# Return to the docs-internal root after cloning translations.
cd ..

# Remove the token from the shell environment.
unset GITHUB_TOKEN
