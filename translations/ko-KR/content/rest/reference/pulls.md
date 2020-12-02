---
title: Pulls
redirect_from:
  - /v3/pulls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
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

<a id="diff-error">

If a diff is corrupt, contact {% data variables.contact.contact_support %}. Include the repository name and pull request ID in your message.

### Link Relations

Pull Requests have these possible link relations:

| 이름                | 설명                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `self`            | The API location of this Pull Request.                                                                                                                       |
| `html`            | The HTML location of this Pull Request.                                                                                                                      |
| `이슈`              | The API location of this Pull Request's [Issue](/rest/reference/issues).                                                                                     |
| `comments`        | The API location of this Pull Request's [Issue comments](/rest/reference/issues#comments).                                                                   |
| `review_comments` | The API location of this Pull Request's [Review comments](/rest/reference/pulls#comments).                                                                   |
| `review_comment`  | The [URL template](/rest#hypermedia) to construct the API location for a [Review comment](/rest/reference/pulls#comments) in this Pull Request's repository. |
| `commits`         | The API location of this Pull Request's [commits](#list-commits-on-a-pull-request).                                                                          |
| `statuses`        | The API location of this Pull Request's [commit statuses](/rest/reference/repos#statuses), which are the statuses of its `head` branch.                      |

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Reviews

Pull Request Reviews are groups of Pull Request Review Comments on the Pull Request, grouped together with a state and optional body comment.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'reviews' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Review comments

Pull request review comments are comments on a portion of the unified diff made during a pull request review. Commit comments and issue comments are different from pull request review comments. You apply commit comments directly to a commit and you apply issue comments without referencing a portion of the unified diff. For more information, see "[Create a commit comment](/rest/reference/git#create-a-commit)" and "[Create an issue comment](/rest/reference/issues#create-an-issue-comment)."

### Custom media types for pull request review comments

These are the supported media types for pull request review comments.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

For more information, see "[Custom media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Review requests

Pull request authors and repository owners and collaborators can request a pull request review from anyone with write access to the repository. Each requested reviewer will receive a notification asking them to review the pull request.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'review-requests' %}{% include rest_operation %}{% endif %}
{% endfor %}
