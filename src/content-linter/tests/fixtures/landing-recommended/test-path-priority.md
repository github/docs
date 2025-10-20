---
title: Test Path Priority Resolution
layout: product-landing
versions:
  fpt: '*'
recommended:
  - /article-one
---

# Test Path Priority Resolution

This tests that /article-one resolves to the absolute path:
  tests/fixtures/fixtures/content/article-one.md (absolute from fixtures root)
NOT the relative path:
  tests/fixtures/landing-recommended/article-one.md (relative to this file)

The absolute path should be prioritized over the relative path.
