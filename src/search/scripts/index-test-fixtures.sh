#!/bin/bash

# This exists as a bash script because the commands are a bit too long
# and complex to express inside `package.json`.

set -e

# For general site-search
npm run index-general-search -- src/search/tests/fixtures/search-indexes -l en -l ja -V ghec -V fpt --index-prefix tests

# For general autocomplete search
npm run index-general-autocomplete -- src/search/tests/fixtures/data -l en -l ja -v fpt -v ghec --index-prefix tests

# For AI search autocomplete
npm run index-ai-search-autocomplete -- src/search/tests/fixtures/data -l en -v fpt -v ghec --index-prefix tests
