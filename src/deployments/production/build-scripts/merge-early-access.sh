#!/usr/bin/env sh

# Takes docs-early-access files and merges them into docs-internal
# Assumed that it is being run from the root of the docs-internal repo

mv docs-early-access/assets/images assets/images/early-access
mv docs-early-access/content content/early-access
mv docs-early-access/data data/early-access
