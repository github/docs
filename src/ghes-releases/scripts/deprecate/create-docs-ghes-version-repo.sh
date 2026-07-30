# This script creates a new repository for an archived version of GitHub Enterprise Server documentation.
# Please update the version variable first.
# You may wish to run this script a little bit at a time instead of all at once incase there are any errors.

version=$1
cd ~/Documents/gh/github
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
  --team="docs-engineering" \
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
echo "--- github/docs-engineering as admin"
gh api -X PUT "/orgs/github/teams/docs-engineering/repos/github/docs-ghes-$version" \
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
  -f "source[branch]=main" -f "source[path]=/" -F "public=true" --silent
echo "--- Update custom properties"
gh api --method PATCH /repos/github/docs-ghes-$version/properties/values \
  -f "properties[][property_name]=ownership-name" \
  -f "properties[][value]=@github/docs" \
  -f "properties[][property_name]=ownership-type" \
  -f "properties[][value]=Team" \
  --silent
echo "--- FILE UPDATES"
cd "docs-ghes-$version"
echo "--- docs engineering as codeowners"
touch CODEOWNERS
echo "* @github/docs-engineering" > CODEOWNERS
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
