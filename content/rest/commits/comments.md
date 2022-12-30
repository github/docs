---
title: Commit comments
intro: Use the REST API to interact with commit comments.
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

## About commit comments

You can create, edit, and view commit comments using the REST API. A commit comment is a comment made on a specfic commit. For more information, see "[Working with comments](/rest/guides/working-with-comments#commit-comments)."

### Custom media types for commit comments

These are the supported media types for commit comments. You can read more
about the use of media types in the API [here](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

For more information, see "[Custom media types](/rest/overview/media-types)."
