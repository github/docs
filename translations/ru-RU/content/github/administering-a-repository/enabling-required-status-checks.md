---
title: Enabling required status checks
intro: Repository administrators can enforce required status checks before a branch is merged in a pull request or before commits on a local branch can be pushed to the protected remote branch.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.protected-branches-options %}

Before you can enable required status checks, you must configure the repository to use the status API. For more information, see "[Building a CI Server](/guides/building-a-ci-server/)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Under "Protect matching branches", select **Require status checks to pass before merging**. ![Required status checks option](/assets/images/help/repository/required-status-checks.png)
7. Optionally, select **Require branches to be up to date before merging**. If selected, this ensures that the branch is tested with the latest code on the base branch. ![Loose or strict required status checkbox](/assets/images/help/repository/protecting-branch-loose-status.png)
7. From the list of available status checks, select the checks you want to require. ![List of available status checks](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
9. Click **Create**.

{% data reusables.repositories.required-status-merge-tip %}
