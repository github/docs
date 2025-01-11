set -e

# We use this function to use the cached version of the repo if it exists from 
# a previous Dockerfile build. Otherwise, we clone the repo and check out the
# specified branch/SHA.
# Arguments:
#   $1 - Repository name (for directory naming)
#   $2 - Repository URL
#   $3 - Branch to clone
#   $4 - Specific SHA to check out (optional)
clone_or_use_cached_repo() {
  repo_name="$1"
  repo_url="$2"
  branch="$3"
  sha="$4"

  echo "Processing repository '$repo_name'..."

  if [ -d "$repo_name/.git" ]; then
    echo "Repository '$repo_name' already exists. Fetching updates..."
    cd "$repo_name"
    
    # Fetch latest changes
    git fetch origin "$branch"
    
    # If a specific SHA is provided, check it out
    if [ -n "$sha" ]; then
      echo "Checking out SHA: $sha"
      git checkout "$sha"
    else
      echo "Checking out branch: $branch"
      git checkout "$branch"
      git pull origin "$branch"
    fi

    cd ..
  else
    echo "Cloning repository '$repo_name' from branch '$branch'..."

    # We use --depth 5 for the docs-internal branch we are checking out as a bit of a gamble for performace optimization.
    # We assume that the latest changes are within the last few commits.
    # Which should always be the case with how our staging servers are built via actions
    # If someone manually sets `.env` this may break the build
    if [ -n "$sha" ]; then
      depth=5
    else
      depth=1
    fi

    git clone --depth "$depth" --branch "$branch" "https://${GITHUB_TOKEN}@github.com/github/$repo_url.git" "$repo_name"
    
    cd "$repo_name"

    if [ -n "$sha" ]; then
      echo "Checking out SHA: $sha"
      git checkout "$sha"
    fi

    cd ..
  fi

  echo "Repository '$repo_name' is up to date."
}