#!/bin/bash

# This script copies certain directories to a designated test repository and pushes the changes.
# It is useful for debugging actions. It excludes specific directories like content/ and data/.

echo "Make sure to run this script in the root path of docs-internal!"

# Prompt the user for the relative path to the test repository.
read -p "Relative path to test repo [../docs-internal-test] (enter for default):" TEST_PATH

# If no input is provided, use the default relative path.
TEST_PATH=${TEST_PATH:-../docs-internal-test}

# Navigate to the test repository.
cd "$TEST_PATH"

# Get the name of the destination repository.
REPO_NAME=$(basename "$(git rev-parse --show-toplevel)")

# Get the current branch name.
REPO_BRANCH=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

# Return to the original directory.
cd -

# Check if the current branch is the 'master' branch.
if [[ "$REPO_BRANCH" != "master" ]]; then
  echo "The current branch is not 'master'. Please switch to the 'master' branch."
  exit 1
fi

# Check if the destination repository name is 'docs-internal-test'.
if [[ "$REPO_NAME" != "docs-internal-test" ]]; then
  echo "The destination repository is not 'docs-internal-test'. Please adjust the repository name."
  exit 1
fi

# Copy relevant files to the test repository.
echo "Copying files to $TEST_PATH..."
rsync -r --exclude='.git' --exclude='.gitattributes' --exclude='node_modules' --exclude='data' --exclude='content' --exclude=".github/CODEOWNERS" . "$TEST_PATH"

# Navigate to the test repository.
cd "$TEST_PATH"

# Check if there are changes to commit.
if [[ $(git status --porcelain) ]]; then
  echo "Committing and pushing test files"
  git add --all
  git commit -m "Testing (committed from script)"
  git push
else
  echo "No changes copied over. Please ensure there are relevant changes and you are pointing to the correct -test directory."
  exit 1
fi

exit
