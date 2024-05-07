#!/bin/bash

# This exists as a bash script because the commands are a bit too long
# and complex to express inside `package.json`.

set -e

# For general site-search
npm run index-elasticsearch -- -l en -l ja -V ghec -V dotcom --index-prefix tests -- src/search/tests/fixtures/search-indexes

# For autocomplete search
npm run index -- autocomplete src/search/tests/fixtures/data -l en -l ja -v fpt -v ghec --index-prefix tests
