---
title: Commit comments
intro: 'The Commit comments API lets you create and edit comments that relate to specific commits.'
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

## About the commit comments API

The Commit comments API lets you create and edit comments that relate to specific commits.

### Custom media types for commit comments

These are the supported media types for commit comments. You can read more
about the use of media types in the API [here](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

For more information, see "[Custom media types](/rest/overview/media-types)."