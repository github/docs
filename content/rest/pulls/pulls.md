---
title: Pulls
intro: 'Use the REST API to interact with pull requests.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About pull requests

You can list, view, edit, create, and merge pull requests using the REST API. For information about how to interact with comments on a pull request, see "[Issue comments](/rest/issues/comments)."

Pull requests are a type of issue. Any actions that are available in both pull requests and issues, like managing assignees, labels, and milestones, are provided by the REST API to manage issues. For more information, see "[Issues](/rest/issues)."

### Custom media types for pull requests

These are the supported media types for pull requests.

    application/vnd.github.raw+json
    application/vnd.github.text+json
    application/vnd.github.html+json
    application/vnd.github.full+json
    application/vnd.github.diff
    application/vnd.github.patch

For more information, see "[Custom media types](/rest/overview/media-types)."

If a diff is corrupt, contact {% data variables.contact.contact_support %}. Include the repository name and pull request ID in your message.

### Link Relations

Pull Requests have these possible link relations:

Name | Description
-----|-----------|
`self`| The API location of this Pull Request.
`html`| The HTML location of this Pull Request.
`issue`| The API location of this Pull Request's [Issue](/rest/reference/issues).
`comments`| The API location of this Pull Request's [Issue comments](/rest/reference/issues#comments).
`review_comments`| The API location of this Pull Request's [Review comments](/rest/reference/pulls#comments).
`review_comment`| The [URL template](/rest#hypermedia) to construct the API location for a [Review comment](/rest/reference/pulls#comments) in this Pull Request's repository.
`commits`|The API location of this Pull Request's [commits](#list-commits-on-a-pull-request).
`statuses`| The API location of this Pull Request's [commit statuses](/rest/reference/commits#commit-statuses), which are the statuses of its `head` branch.
