#!/usr/bin/env sh

# Called from the production Dockerfile. The Dockerfile only COPYs what it
# needs, but these scripts still run as if from the docs-internal root.

echo "Fetching and resolving early-access, and translations repos"

set -e

. ./build-scripts/clone-or-use-cached-repo.sh

# From the --secret mounted by the Docker build.
GITHUB_TOKEN=$(cat /run/secrets/DOCS_BOT_PAT_BASE)

echo "Fetching early access..."
clone_or_use_cached_repo "docs-early-access" "docs-early-access" "main"
echo "Merging early access..."
. ./build-scripts/merge-early-access.sh

# Clone into `translations/` inside the Dockerfile's WORKDIR, the docs-internal root.
mkdir -p translations
cd translations

# Temporarily turn off exit-on-error so we can collect all PIDs
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

# Restore strict mode
set -e

if [ "$failures" -gt 0 ]; then
  echo "⚠️  $failures translation repo(s) failed to fetch."
  exit 1
else
  echo "✅  All translations fetched."
fi

# Go back to the root of the docs-internal repo
cd ..

# Don't leave the token in the environment.
unset GITHUB_TOKEN
