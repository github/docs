#!/usr/bin/env sh

# These should be set already in the Dockerfile's env
if [ -z "$GITHUB_TOKEN" ] || [ -z "$STAGING_BRANCH" ]; then
  echo "Error: GITHUB_TOKEN and STAGING_BRANCH environment variables must be set."
  exit 1
fi

OWNER="github"
REPO="docs-early-access"
BRANCH_NAME="$STAGING_BRANCH"
API_URL="https://api.github.com/repos/${OWNER}/${REPO}/branches/${BRANCH_NAME}"

fetch_branch() {
  curl -s -o /dev/null -w "%{http_code}" -H "Authorization: token $GITHUB_TOKEN" "$API_URL"
}

# Check branch using curl
STATUS=$(fetch_branch)

if [ "$STATUS" -eq 200 ]; then
  EARLY_ACCESS_BRANCH="$BRANCH_NAME"
  echo "Using docs-early-access branch '${EARLY_ACCESS_BRANCH}'"
else
  EARLY_ACCESS_BRANCH="main"
  echo "Failed to get docs-early-access branch '${BRANCH_NAME}', 'main' will be used instead."
fi

# Export the branch name to be consumed by the Dockerfile
export EARLY_ACCESS_BRANCH
