#!/usr/bin/env sh

# Merges docs-early-access files into docs-internal. Runs from the
# docs-internal root.

mv docs-early-access/assets/images assets/images/early-access
mv docs-early-access/content content/early-access
mv docs-early-access/data data/early-access
