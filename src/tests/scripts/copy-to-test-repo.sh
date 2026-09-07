#!/bin/bash

# Copies certain directories over to docs-internal-test and pushes. Useful for debugging actions
# Doesn't copy over content/ and data/ directories

echo "Make sure to run this script in the root path of docs-internal!"

read -p "Relative path to test repo [../docs-internal-test] (enter for default):" TEST_PATH

TEST_PATH=${TEST_PATH:-../docs-internal-test}

cd $TEST_PATH
REPO_NAME=$(basename `git rev-parse --show-toplevel`)
REPO_BRANCH=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)
cd -

if [[ "$REPO_BRANCH" != "main" ]]; then
  echo "docs-internal-test isn't on main branch"
  exit 1
fi;

if [[ "$REPO_NAME" == "docs-internal-test" ]]; then
  echo "Copying files to $TEST_PATH..."
  rsync -r --exclude='.git' --exclude='.gitattributes' --exclude='node_modules' --exclude='data' --exclude='content' --exclude=".github/CODEOWNERS" . $TEST_PATH
  cd $TEST_PATH
  if [[ `git status --porcelain` ]]; then
    echo "Committing and pushing test files"
    git add --all
    git commit -m "testing (committed from script)"
    git push -f
  else
    echo "No changes copied over. Are there relevent changes and are you pointing to the correct -test directory?"
    exit 1
  fi
else
  echo "$TEST_PATH is not the docs-internal-test repo directory"
  exit 1
fi;

exit



