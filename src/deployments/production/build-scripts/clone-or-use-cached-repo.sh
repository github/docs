set -e

# We use this function to use the cached version of the repo if it exists from 
# a previous Dockerfile build. Otherwise, we clone the repo and check out the
# specified branch/SHA.
# Arguments:
#   $1 - Repository name (for directory naming)
#   $2 - Repository URL
#   $3 - Branch to clone
clone_or_use_cached_repo() {
  repo_name="$1"
  repo_url="$2"
  branch="$3"

  echo "Processing repository '$repo_name'..."

  if [ -d "$repo_name/.git" ]; then
    echo "Repository '$repo_name' already exists. Fetching updates..."
    cd "$repo_name"
    
    # Fetch latest changes
    if ! git fetch origin "$branch"; then
      echo "❌ Failed to fetch repository '$repo_name'"
      cd ..
      return 1
    fi
    if ! git checkout "$branch"; then
      echo "❌ Failed to checkout branch '$branch' in repository '$repo_name'"
      cd ..
      return 1
    fi
    if ! git pull origin "$branch"; then
      echo "❌ Failed to pull repository '$repo_name'"
      cd ..
      return 1
    fi

    echo "Updated repository '$repo_name' with the latest changes from $branch."

    cd ..
  else
    echo "Cloning repository '$repo_name' from branch '$branch'..."

    # We only need the most recent change for production deploys, so we use --depth 1
    if ! git clone --depth 1 --branch "$branch" "https://${GITHUB_TOKEN}@github.com/github/$repo_url.git" "$repo_name"; then
      echo "❌ Failed to clone repository '$repo_name'"
      return 1
    fi
  fi

  echo "Repository '$repo_name' is up to date."
}