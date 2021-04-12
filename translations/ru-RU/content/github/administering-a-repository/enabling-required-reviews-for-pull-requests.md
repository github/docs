---
title: Enabling required reviews for pull requests
intro: Repository administrators can enforce required reviews so that pull requests must have a specific number of approving reviews before they are merged.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Before enabling required reviews on a branch, you must first set the branch up as a protected branch. For more information, see "[Configuring protected branches](/github/administering-a-repository/configuring-protected-branches)."

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Select **Require pull request reviews before merging**. ![Pull request review restriction checkbox](/assets/images/help/repository/PR-reviews-required.png)
6. In the Required approving reviews drop-down menu, select the number of approving reviews you'd like to require on the branch. ![Drop-down menu to select number of required review approvals](/assets/images/help/repository/number-of-required-review-approvals.png)
7. Optionally, select **Dismiss stale pull request approvals when new commits are pushed**. This dismisses a pull request approval review when a code-modifying commit is pushed to the branch. ![Dismiss stale pull request approvals when new commits are pushed checkbox](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
8. Optionally, select **Require review from Code Owners** to require review from a code owner when the pull request affects code that has a designated owner. For more information, see "[About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners)." ![Require review from code owners](/assets/images/help/repository/PR-review-required-code-owner.png)
9. Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews** to search for and select the people or teams who can dismiss pull request reviews. For more information, see "[Dismissing a pull request review](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)." This option is not available for personal repositories. ![Restrict who can dismiss pull request reviews checkbox](/assets/images/help/repository/PR-review-required-dismissals.png)
{% data reusables.repositories.include-administrators %}
11. Click **Create**.

### Дополнительная литература

- "[About required reviews for pull requests](/github/administering-a-repository/about-required-reviews-for-pull-requests)"
- "[About protected branches](/github/administering-a-repository/about-protected-branches)"
- "[About required status checks](/github/administering-a-repository/about-required-status-checks)"
