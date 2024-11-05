---
title: About pull request reviews
intro: 'Reviews allow collaborators to comment on the changes proposed in pull requests, approve the changes, or request further changes before the pull request is merged. Repository administrators can require that all pull requests are approved before being merged.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
---
## About pull request reviews

After a pull request is opened, anyone with _read_ access can review and comment on the changes it proposes. You can also suggest specific changes to lines of code, which the author can apply directly from the pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Repository owners and collaborators can request a pull request review from a specific person. Organization members can also request a pull request review from a team with read access to the repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)." You can specify a subset of team members to be automatically assigned in the place of the whole team. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)."

Reviews allow for discussion of proposed changes and help ensure that the changes meet the repository's contributing guidelines and other quality standards. You can define which individuals or teams own certain types or areas of code in a CODEOWNERS file. When a pull request modifies code that has a defined owner, that individual or team will automatically be requested as a reviewer. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."

For an introduction to requesting and providing pull request reviews, see the [Review pull requests](https://github.com/skills/review-pull-requests) {% data variables.product.prodname_learning %} course.

{% ifversion fpt or ghec %}You can schedule reminders for pull requests that need to be reviewed. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)."{% endif %}

A review has three possible statuses:
* **Comment**: Submit general feedback without explicitly approving the changes or requesting additional changes.
* **Approve**: Submit feedback and approve merging the changes proposed in the pull request.
* **Request changes**: Submit feedback that must be addressed before the pull request can be merged.

{% data reusables.repositories.request-changes-tips %}

You can view all of the reviews a pull request has received in the Conversation timeline, and you can see reviews by repository owners and collaborators in the pull request's merge box.

![Screenshot of the merge box for a pull request. A review by Octocat with requested changes is listed.](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Re-requesting a review

{% data reusables.pull_requests.re-request-review %}

## Required reviews

{% data reusables.pull_requests.required-reviews-for-prs-summary %} For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)."

{% tip %}

**Tip**: If necessary, people with _admin_ or _write_ access to a repository can dismiss a pull request review. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."

{% endtip %}

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
* "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)"
