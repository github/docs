#!/bin/sh

set -e

echo "> This script assumes docs and docs-internal are cloned together in the same directory already."

echo "> Making sure the repos are a sibiling directories..."
cd ../docs || (echo "Repo docs not found as a sibling directory" && exit 1)
cd ../docs-internal || (echo "Repo docs-internal not found as a sibling directory" && exit 1)
echo "> Found directories for repos docs and docs-internal"

echo "> Checking out main branch and updating both repositories..."
cd ../docs
git checkout main
git pull
cd ../docs-internal
git checkout main
git pull
echo "> Both repositories are in main and up-to-date"

echo "> Set up remotes if they aren't there..."
cd ../docs
git remote show docs-internal || git remote add docs-internal ../docs-internal
cd ../docs-internal
git remote show docs || git remote add docs ../docs
echo "> Remotes set on docs and docs-internal"

echo "> Fetch and merge both repositories..."
cd ../docs
git fetch docs-internal main
git merge docs-internal/main
cd ../docs-internal
git fetch docs main
git merge docs/main
echo "> Both repositories have each other's latest changes in main"

echo "> Push up both repositories..."
cd ../docs
git push --no-verify
cd ../docs-internal
git push --no-verify
echo "> Both repositories are pushed to origin"
