---
title: Reviewing proposed changes in a pull request
intro: 'In a pull request, you can review and discuss commits, changed files, and the differences (or "diff") between the files in the base and compare branches.'
redirect_from:
  - /articles/reviewing-proposed-changes-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About reviewing pull requests

You can review changes in a pull request one file at a time. While reviewing the files in a pull request, you can leave individual comments on specific changes. After you finish reviewing each file, you can mark the file as viewed. This collapses the file, helping you identify the files you still need to review. A progress bar in the pull request header shows the number of files you've viewed. After reviewing as many files as you want, you can approve the pull request or request additional changes by submitting your review with a summary comment.

{% data reusables.search.requested_reviews_search_tip %}

### Starting a review

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. When you're done, click **Start a review**. If you have already started a review, you can click **Add review comment**.
  ![Start a review button](/assets/images/help/pull_requests/start-a-review-button.png)

Before you submit your review, your line comments are _pending_ and only visible to you. You can edit pending comments anytime before you submit your review. To cancel a pending review, including all of its pending comments, scroll down to the end of the timeline on the Conversation tab, then click **Cancel review**.

![Cancel review button](/assets/images/help/pull_requests/cancel-review-button.png)

### Marking a file as viewed

After you finish reviewing a file, you can mark the file as viewed, and the file will collapse. If the file changes after you view the file, it will be unmarked as viewed.

{% data reusables.repositories.changed-files %}
2. On the right of the header of the file you've finished reviewing, select **Viewed**.
  ![Viewed checkbox](/assets/images/help/pull_requests/viewed-checkbox.png)

### Submitting your review

After you've finished reviewing all the files you want in the pull request, submit your review.

{% data reusables.repositories.changed-files %}
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
4. Select the type of review you'd like to leave:
  ![Radio buttons with review options](/assets/images/help/pull_requests/pull-request-review-statuses.png)
    - Select **Comment** to leave general feedback without explicitly approving the changes or requesting additional changes.
    - Select **Approve** to submit your feedback and approve merging the changes proposed in the pull request.
    - Select **Request changes** to submit feedback that must be addressed before the pull request can be merged.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### Further reading

- "[About pull request reviews](/articles/about-pull-request-reviews)"
- "[About required reviews for pull requests](/articles/about-required-reviews-for-pull-requests)"
- "[Approving a pull request with required reviews](/articles/approving-a-pull-request-with-required-reviews)"
- "[Commenting on a pull request](/articles/commenting-on-a-pull-request)"
- "[Filtering pull requests by review status](/articles/filtering-pull-requests-by-review-status)"
