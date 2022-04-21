---
title: Pulls
intro: 'The Pulls API allows you to list, view, edit, create, and even merge pull requests.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The Pull Request API allows you to list, view, edit, create, and even merge pull requests. Comments on pull requests can be managed via the [Issue Comments API](/rest/reference/issues#comments).

Every pull request is an issue, but not every issue is a pull request. For this reason, "shared" actions for both features, like manipulating assignees, labels and milestones, are provided within [the Issues API](/rest/reference/issues).

### Custom media types for pull requests

These are the supported media types for pull requests.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

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
