---
title: Git commits
shortTitle: 提交
allowTitleToDifferFromFilename: true
intro: 'The Git commits API lets you read and write commit objects to your Git database on {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git commits API

A Git commit is a snapshot of the hierarchy ([Git tree](/rest/reference/git#trees)) and the contents of the files ([Git blob](/rest/reference/git#blobs)) in a Git repository. These endpoints allow you to read and write [commit objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) to your Git database on {% data variables.product.product_name %}.
