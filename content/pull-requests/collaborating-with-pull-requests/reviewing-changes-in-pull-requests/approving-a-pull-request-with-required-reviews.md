---
title: Approving a pull request with required reviews
intro: 'If your repository requires reviews, pull requests must have a specific number of approving reviews from people with _write_ or _admin_ permissions in the repository before they can be merged.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
---
For more information about required reviews, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging)."

You can comment on a pull request, approve the changes, or request improvements before approving. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)."

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Tip**: If a pull request you approved has changed significantly, you can dismiss your review. The pull request will need a new review before it can be merged. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Review the changes in the pull request, and optionally, comment on specific lines{% ifversion pull-request-comment-on-file %} or files{% endif %}. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#starting-a-review)."
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
1. Select **Approve** to approve merging the changes proposed in the pull request.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
