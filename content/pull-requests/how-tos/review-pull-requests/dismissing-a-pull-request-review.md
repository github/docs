---
title: Dismissing a pull request review
intro: Dismiss outdated or unapproved pull request reviews and update their status with a required comment.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Dismiss a PR review
category:
  - Review pull requests
contentType: how-tos
---
{% data reusables.pull_requests.dismiss_review %}
Dismissing a review changes the status of the review to a review comment. When you dismiss a review, you must add a comment explaining why you dismissed it. Your comment will be added to the pull request conversation.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
1. On the "Conversation" tab, next to the summary of reviews, click {% octicon "chevron-down" aria-label="show" %}.

   ![Screenshot of the merge box for a pull request. The chevron icon to see the reviews is outlined in dark orange.](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)

1. Next to the review you'd like to dismiss, select the {% octicon "kebab-horizontal" aria-label="Show options" %} dropdown menu, then click **Dismiss review**.

   ![Screenshot of the merge box of a pull request. The Show options menu (kebab icon), is expanded, and the "Dismiss review" option is outlined in orange.](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)

1. Type your reason for dismissing the review, then click **Dismiss review**.

## Further reading

* [AUTOTITLE](/pull-requests/reference/pull-request-reviews)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)
* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)
