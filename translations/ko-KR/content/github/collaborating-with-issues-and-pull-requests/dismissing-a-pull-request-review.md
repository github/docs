---
title: Dismissing a pull request review
intro: 'If your repository [requires reviews](/articles/about-required-reviews-for-pull-requests), you can dismiss pull request reviews that are no longer valid or are unable to be approved by the reviewer.'
redirect_from:
  - /articles/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.dismiss_review %}
This changes the status of the review to a review comment. When you dismiss a review, you must add a comment explaining why you dismissed it. Your comment will be added to the pull request conversation.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
3. On the "Conversation" tab, scroll to the review you'd like to dismiss, then click {% octicon "chevron-down" aria-label="The down button" %}. ![Chevron icon in the merge box](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Dismiss review**. ![Kebab icon in merge box](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Type your reason for dismissing the review, then click **Dismiss review**. ![Dismiss review button](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)
{% else %}
3. On the "Conversation" tab, scroll to the review you'd like to see, then click **Dismiss review**. ![Option to dismiss a review](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
4. Type your reason for dismissing the review, then click **Dismiss review**. ![Dismiss review button](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)
{% endif %}

### 더 읽을거리

- "[About pull request reviews](/articles/about-pull-request-reviews)"
- "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[About required reviews for pull requests](/articles/about-required-reviews-for-pull-requests)"
