#!/usr/bin/env bash

# Creates a repository for an archived GitHub Enterprise Server documentation version.
# Pass the version as the first argument, and run sections one at a time when inspecting failures.

set -euo pipefail

version=${1:?Pass the GHES version, for example 3.17}
clone_root=${DOCS_GHES_CLONE_ROOT:-$HOME/Documents/gh/github}
mkdir -p "$clone_root"
cd "$clone_root"

# Numeric team IDs survive team renames; slugs do not.
# Repo creation, CODEOWNERS, and custom properties require slugs, so resolve current slugs.
org_id=9919
docs_team_id=325922
docs_eng_team_id=3935808
docs_team=$(gh api "/organizations/$org_id/team/$docs_team_id" --jq .slug)
docs_eng_team=$(gh api "/organizations/$org_id/team/$docs_eng_team_id" --jq .slug)

# Granting the team access to the new repository requires team maintainer, so fail before creating anything.
login=$(gh api user --jq .login)
role=$(gh api "/orgs/github/teams/$docs_eng_team/memberships/$login" --jq .role 2>/dev/null || true)
if [ "$role" != "maintainer" ]; then
  echo "Error: $login must be a maintainer of @github/$docs_eng_team to create the archive repository (current role: ${role:-none})." >&2
  echo "Ask a team maintainer to run this step, or to make you a maintainer." >&2
  exit 1
fi

echo "--- Creating repository for github/docs-ghes-$version"
echo "--- gh repo create"
gh repo create \
  "github/docs-ghes-$version" \
  --add-readme \
  --clone \
  --description="Archived docs for GHES $version" \
  --disable-issues \
  --disable-wiki \
  --license="CC-BY-4.0" \
  --private \
  --team="$docs_eng_team" \
  --homepage="https://github.github.com/docs-ghes-$version/"
echo "--- gh repo edit"
gh repo edit \
  "github/docs-ghes-$version" \
  --add-topic="docs-ghes-archive" \
  --allow-update-branch \
  --delete-branch-on-merge \
  --enable-auto-merge \
  --enable-projects=false \
  --enable-merge-commit=false \
  --enable-rebase-merge=false
echo "--- github/$docs_eng_team as admin"
gh api -X PUT "/organizations/$org_id/team/$docs_eng_team_id/repos/github/docs-ghes-$version" \
        -f 'permission=admin' --silent
echo "--- github/employees as read"
gh api -X PUT "/orgs/github/teams/employees/repos/github/docs-ghes-$version" --silent
echo "--- Protect main with a repository ruleset (1 review + code owners, no force-push or deletion)"
gh api -X POST "/repos/github/docs-ghes-$version/rulesets" --input - --silent <<'RULESET'
{
  "name": "main branch protection",
  "target": "branch",
  "enforcement": "active",
  "bypass_actors": [
    { "actor_id": 5, "actor_type": "RepositoryRole", "bypass_mode": "always" }
  ],
  "conditions": {
    "ref_name": { "include": ["refs/heads/main"], "exclude": [] }
  },
  "rules": [
    { "type": "deletion" },
    { "type": "non_fast_forward" },
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 1,
        "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": true,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false
      }
    }
  ]
}
RULESET
echo "--- Enable GitHub Pages, set source to main in root directory, and make the pages site public"
gh api -X POST "/repos/github/docs-ghes-$version/pages" \
  -f "source[branch]=main" -f "source[path]=/" --silent
# The create endpoint has no public parameter, so set visibility with the update endpoint.
gh api -X PUT "/repos/github/docs-ghes-$version/pages" -F "public=true" --silent
pages_public=$(gh api "/repos/github/docs-ghes-$version/pages" --jq .public)
if [ "$pages_public" != "true" ]; then
  echo "GitHub Pages is not public. Run: gh api -X PUT /repos/github/docs-ghes-$version/pages -F public=true"
  exit 1
fi
echo "--- Update custom properties"
gh api --method PATCH /repos/github/docs-ghes-$version/properties/values \
  -f "properties[][property_name]=ownership-name" \
  -f "properties[][value]=@github/$docs_team" \
  -f "properties[][property_name]=ownership-type" \
  -f "properties[][value]=Team" \
  --silent
echo "--- FILE UPDATES"
cd "docs-ghes-$version"
echo "--- docs engineering as codeowners"
touch CODEOWNERS
echo "* @github/$docs_eng_team" > CODEOWNERS
echo "--- add index.html file"
touch index.html
echo "<h1>GitHub Enterprise Server $version Docs</h1>" > index.html
echo "--- add .gitignore"
touch .gitignore
echo ".DS_Store" > .gitignore
echo "--- add .nojekyll"
touch .nojekyll
echo "--- push"
git add .
git commit -am "initial commit"
git push
cd ..
echo "--- END FILE UPDATES"
echo "--- MANUAL NOTES"
echo "Manually disable releases, packages, and deployments"
