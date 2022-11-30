---
title: Git commits
shortTitle: Commits
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

A Git commit is a snapshot of the hierarchy ([Git tree](/rest/reference/git#trees)) and the contents of the files ([Git blob](/rest/reference/git#blobs)) in a Git repository. These endpoints allow you to read and write [commit objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) to your Git database on {% data variables.product.product_name %}.
