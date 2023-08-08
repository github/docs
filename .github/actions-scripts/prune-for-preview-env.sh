#!/usr/bin/env bash

# [start-readme]
#
# This script removes files that are unnecessary for our preview environments.
# This is typically run before a docker build to reduce the size of the build context sent to docker
#
# [end-readme]

# The assumption here is that a preview build will not
# need these legacy redirects. Only the redirects from
# front-matter will be at play.
# These static redirects json files are notoriously large
echo '[]' > src/redirects/lib/static/archived-frontmatter-valid-urls.json
echo '{}' > src/redirects/lib/static/archived-redirects-from-213-to-217.json
