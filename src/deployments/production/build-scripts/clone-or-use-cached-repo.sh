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
    git fetch origin "$branch"
    git checkout "$branch"
    git pull origin "$branch"

    echo "Updated repository '$repo_name' with the latest changes from $branch."

    cd ..
  else
    echo "Cloning repository '$repo_name' from branch '$branch'..."

    # We only need the most recent change for production deploys, so we use --depth 1
    git clone --depth 1 --branch "$branch" "https://${GITHUB_TOKEN}@github.com/github/$repo_url.git" "$repo_name"
  fi

  echo "Repository '$repo_name' is up to date."
}