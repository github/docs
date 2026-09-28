#!/bin/bash

# Package scripts would bury the long index commands.

set -e

npm run index-general-search -- src/search/tests/fixtures/search-indexes -l en -l ja -V ghec -V fpt --index-prefix tests



npm run index-ai-search-autocomplete -- src/search/tests/fixtures/data -l en -v fpt -v ghec --index-prefix tests
