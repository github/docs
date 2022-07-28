---
title: Git trees
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'The Git trees API lets you read and write tree objects to your Git database on {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git trees API

A Git tree object creates the hierarchy between files in a Git repository. You can use the Git tree object to create the relationship between directories and the files they contain. These endpoints allow you to read and write [tree objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) to your Git database on {% data variables.product.product_name %}.
