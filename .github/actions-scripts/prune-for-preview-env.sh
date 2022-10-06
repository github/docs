#!/usr/bin/env bash

# [start-readme]
#
# This script removes files that are unnecessary for our preview environments.
# This is typically run before a docker build to reduce the size of the build context sent to docker
#
# [end-readme]

# Remove all but the english search indexes
find lib/search/indexes ! -name '*-en.json.br' ! -name '*-en-records.json.br' -maxdepth 1 -type f -delete

# Translations are never tested in preview environments
# but let's keep the empty directory.
rm -rf translations
mkdir translations

# The assumption here is that a preview build will not
# need these legacy redirects. Only the redirects from
# front-matter will be at play.
# These static redirects json files are notoriously large
echo '[]' > lib/redirects/static/archived-frontmatter-valid-urls.json
echo '{}' > lib/redirects/static/archived-redirects-from-213-to-217.json
