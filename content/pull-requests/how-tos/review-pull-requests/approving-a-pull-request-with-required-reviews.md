---
title: Approving a pull request with required reviews
intro: Approve pull requests with required reviews, including setting approval rules, reviewing changes, and submitting feedback before merging.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Approve PRs
category:
  - Review pull requests
contentType: how-tos
---

You can comment on a pull request, approve the changes, or request improvements before approving. See [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request).

{% data reusables.search.requested_reviews_search %}

> [!TIP]
> If a pull request you approved has changed significantly, you can dismiss your review. The pull request will need a new review before it can be merged. See [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/dismissing-a-pull-request-review).

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Review the changes in the pull request. Optionally, comment on specific lines or files. See [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request#starting-a-review).
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
1. Select **Approve** to approve merging the proposed changes.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Further reading

* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/commenting-on-a-pull-request)

