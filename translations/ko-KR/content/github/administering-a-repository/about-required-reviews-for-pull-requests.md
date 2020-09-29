---
title: About required reviews for pull requests
intro: Required reviews ensure that pull requests have a specific number of approving reviews before collaborators can make changes to a protected branch.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

If you've enforced branch protections in your repository, you can set up required reviews. For more information about enforcing branch protections, see "[Configuring protected branches](/articles/configuring-protected-branches/)." For more information about setting up required reviews, see "[Enabling required reviews for pull requests](/articles/enabling-required-reviews-for-pull-requests)."

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

If a person with *admin* permissions chooses the **Request changes** option in a review, then that person must approve the pull request before it can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with *admin* or *write* permission for the repository can dismiss the blocking review. For more information, see "[Dismissing a pull request review](/articles/dismissing-a-pull-request-review)."

{% note %}

**Note:** Repository admins can restrict the ability to dismiss pull request reviews to specific people or teams. For more information, see "[Enabling required reviews for pull requests](/articles/enabling-required-reviews-for-pull-requests)."

{% endnote %}

If you push a code-modifying commit to the branch of an approved pull request, the approval may be dismissed if repository admins have set up stale review dismissals. For more information, see "[Enabling required reviews for pull requests](/articles/enabling-required-reviews-for-pull-requests)." This doesn't apply if you push non-code-modifying commits, like merging the base branch into your pull request's branch. For information about the base branch, see "[About pull requests](/articles/about-pull-requests)."

Unless required reviews have been set up to include repository admins, people with *admin* permissions can merge a pull request regardless of reviews from other admins.

{% data reusables.repositories.review-policy-overlapping-commits %}

You can't merge a pull request into a protected branch until someone with *write* or *admin* permissions approves it. If there are pending or rejected reviews, you'll receive an error message:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```
