#!/bin/bash

# Generate social card PNGs from template SVGs
# Requires:
#   - librsvg (install with: brew install librsvg)
#   - zopfli (install with: brew install zopfli)
#   - Mona Sans font (install with: brew install --cask font-mona-sans)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Check for required CLI tools
if ! command -v rsvg-convert &> /dev/null; then
  echo "Error: rsvg-convert not found. Install with: brew install librsvg"
  exit 1
fi

if ! command -v zopflipng &> /dev/null; then
  echo "Error: zopflipng not found. Install with: brew install zopfli"
  exit 1
fi

# Check for Mona Sans font
if ! fc-list | grep -qi "Mona Sans"; then
  echo "Error: Mona Sans font not found. Install with: brew install --cask font-mona-sans"
  exit 1
fi

# Labels to generate from template (filename:Label Text)
LABELS=(
  "account-and-profile:Account"
  "actions:Actions"
  "admin:Admin"
  "apps:Apps"
  "authentication:Auth"
  "billing:Billing"
  "code-security:Security"
  "codespaces:Codespaces"
  "communities:Community"
  "contributing:Contributing"
  "copilot:Copilot"
  "desktop:Desktop"
  "discussions:Discussions"
  "education:Education"
  "enterprise-onboarding:Enterprise"
  "get-started:Get Started"
  "github-cli:GitHub CLI"
  "github-models:Models"
  "graphql:GraphQL"
  "integrations:Integrations"
  "issues:Issues"
  "migrations:Migrations"
  "nonprofit:Nonprofit"
  "organizations:Orgs"
  "packages:Packages"
  "pages:Pages"
  "pull-requests:Pull requests"
  "repositories:Repositories"
  "rest:REST"
  "search-github:Search"
  "site-policy:Site Policy"
  "sponsors:Sponsors"
  "subscriptions-and-notifications:Account"
  "support:Support"
  "webhooks:Webhooks"
)

# Generate default.png from _default.svg
echo "Converting _default.svg to default.png..."
rsvg-convert -w 1200 -h 628 "$SCRIPT_DIR/_default.svg" -o "$SCRIPT_DIR/default.png"
echo "Optimizing default.png with zopflipng..."
zopflipng -y "$SCRIPT_DIR/default.png" "$SCRIPT_DIR/default.png"

# Generate labeled PNGs from _template.svg
for entry in "${LABELS[@]}"; do
  filename="${entry%%:*}"
  label="${entry##*:}"
  png="$SCRIPT_DIR/$filename.png"

  echo "Generating $filename.png with label \"$label\"..."
  sed "s/{{LABEL}}/$label/g" "$SCRIPT_DIR/_template.svg" | rsvg-convert -w 1200 -h 628 -o "$png"
  echo "Optimizing $filename.png with zopflipng..."
  zopflipng -y "$png" "$png"
done

echo "Done!"
