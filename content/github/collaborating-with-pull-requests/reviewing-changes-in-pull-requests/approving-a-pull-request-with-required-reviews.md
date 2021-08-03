---
title: Approving a pull request with required reviews
intro: 'If your repository requires reviews, pull requests must have a specific number of approving reviews from people with _write_ or _admin_ permissions in the repository before they can be merged.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
For more information about required reviews, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

You can comment on a pull request, approve the changes, or request improvements before approving. For more information, see "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)."

{% data reusables.search.requested_reviews_search %}

{% tip %}

**Tip**: If a pull request you approved has changed significantly, you can dismiss your review. The pull request will need a new review before it can be merged. For more information, see "[Dismissing a pull request review](/articles/dismissing-a-pull-request-review)."

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
4. Review the changes in the pull request, and optionally, [comment on specific lines](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review).
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
7. Select **Approve** to approve merging the changes proposed in the pull request.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### Further reading

- "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Commenting on a pull request](/articles/commenting-on-a-pull-request)"
