---
title: Dismissing a pull request review
intro: 'If your repository requires reviews, you can dismiss pull request reviews that are no longer valid or are unable to be approved by the reviewer.'
redirect_from:
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
{% data reusables.pull_requests.dismiss_review %}
This changes the status of the review to a review comment. When you dismiss a review, you must add a comment explaining why you dismissed it. Your comment will be added to the pull request conversation.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
3. On the "Conversation" tab, scroll to the review you'd like to dismiss, then click {% octicon "chevron-down" aria-label="The down button" %}. ![Chevron icon in the merge box](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Dismiss review**.
![Kebab icon in merge box](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Type your reason for dismissing the review, then click **Dismiss review**.
  ![Dismiss review button](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

### Further reading

- "[About pull request reviews](/articles/about-pull-request-reviews)"
- "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)"
