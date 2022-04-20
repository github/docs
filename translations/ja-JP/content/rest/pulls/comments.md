---
title: Review Comments
intro: 'Pull request review comments are comments on a portion of the unified diff made during a pull request review.'
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

Commit comments and issue comments are different from pull request review comments. You apply commit comments directly to a commit and you apply issue comments without referencing a portion of the unified diff. For more information, see "[Create a commit comment](/rest/reference/commits#create-a-commit-comment)" and "[Create an issue comment](/rest/reference/issues#create-an-issue-comment)."

### Custom media types for pull request review comments

These are the supported media types for pull request review comments.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

For more information, see "[Custom media types](/rest/overview/media-types)."