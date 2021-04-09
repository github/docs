---
title: About pull request reviews
intro: 'Reviews allow collaborators to comment on the changes proposed in pull requests, approve the changes, or request further changes before the pull request is merged. Repository administrators can require that all pull requests are approved before being merged.'
redirect_from:
  - /articles/about-pull-request-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

### About pull request reviews

After a pull request is opened, anyone with *read* access can review and comment on the changes it proposes. You can also suggest specific changes to lines of code, which the author can apply directly from the pull request. For more information, see "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)."

Repository owners and collaborators can request a pull request review from a specific person. Organization members can also request a pull request review from a team with read access to the repository. For more information, see "[Requesting a pull request review](/articles/requesting-a-pull-request-review)." {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}You can specify a subset of team members to be automatically assigned in the place of the whole team. For more information, see "[Managing code review assignment for your team](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)."{% endif %}

Reviews allow for discussion of proposed changes and help ensure that the changes meet the repository's contributing guidelines and other quality standards. You can define which individuals or teams own certain types or areas of code in a CODEOWNERS file. When a pull request modifies code that has a defined owner, that individual or team will automatically be requested as a reviewer. For more information, see "[About code owners](/articles/about-code-owners/)."

{% if currentVersion == "free-pro-team@latest" %}You can schedule reminders for pull requests that need to be reviewed. For more information, see "[Managing scheduled reminders for pull requests](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)."{% endif %}

![Header of review requesting changes with line comments](/assets/images/help/pull_requests/review-header-with-line-comment.png)

A review has three possible statuses:
- **Comment**: Submit general feedback without explicitly approving the changes or requesting additional changes.
- **Approve**: Submit feedback and approve merging the changes proposed in the pull request.
- **Request changes**: Submit feedback that must be addressed before the pull request can be merged.

![Image of review statuses](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

You can view all of the reviews a pull request has received in the Conversation timeline, and you can see reviews by repository owners and collaborators in the pull request's merge box.

![Image of reviews in a merge box](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

### Re-requesting a review

{% data reusables.pull_requests.re-request-review %}

### Required reviews

{% data reusables.pull_requests.required-reviews-for-prs-summary %} For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

{% tip %}

**Tip**: If necessary, people with *admin* or *write* access to a repository can dismiss a pull request review. For more information, see "[Dismissing a pull request review](/articles/dismissing-a-pull-request-review)."

{% endtip %}

### 더 읽을거리

- "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Viewing a pull request review](/articles/viewing-a-pull-request-review)"
- "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors)"
