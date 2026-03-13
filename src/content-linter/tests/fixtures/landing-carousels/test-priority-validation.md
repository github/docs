---
title: Test Priority Validation
layout: product-landing
versions:
  fpt: '*'
carousels:
  recommended:
    - /article-one
    - /nonexistent-absolute
---

# Test Priority Validation  

This tests that /article-one resolves correctly AND that /nonexistent-absolute fails properly.
The first should pass (exists in absolute path), the second should fail (doesn't exist anywhere).
