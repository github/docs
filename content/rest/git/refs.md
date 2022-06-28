---
title: Git references
shortTitle: References
intro: 'The Git references API lets you read and write references to your Git database on {% data variables.product.product_name %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Git references API

A Git reference (`git ref`) is a file that contains a Git commit SHA-1 hash. When referring to a Git commit, you can use the Git reference, which is an easy-to-remember name, rather than the hash. The Git reference can be rewritten to point to a new commit. A branch is a Git reference that stores the new Git commit hash. These endpoints allow you to read and write [references](https://git-scm.com/book/en/v1/Git-Internals-Git-References) to your Git database on {% data variables.product.product_name %}.