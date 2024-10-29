---
title: Managing a branch protection rule
intro: 'You can create a branch protection rule to enforce certain workflows for one or more branches, such as requiring an approving review or passing status checks for all pull requests merged into the protected branch.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
  - /repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: 'People with admin permissions {% ifversion edit-repository-rules %}or a custom role with the "edit repository rules" permission{% endif %} to a repository can manage branch protection rules.'
topics:
  - Repositories
shortTitle: Branch protection rule
---
## About branch protection rules

{% data reusables.repositories.branch-rules-example %}

You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. {% data reusables.repositories.about-fnmatch %}

If a repository has multiple protected branch rules that affect the same branches, the rules that include a specific branch name have the highest priority. If there is more than one protected branch rule that references the same specific branch name, then the branch rule created first will have higher priority.

Protected branch rules that mention a special character, such as `*`, `?`, or `]`, are applied in the order they were created, so older rules with these characters have a higher priority.

To create an exception to an existing branch rule, you can create a new branch protection rule that is higher priority, such as a branch rule for a specific branch name.

For more information about each of the available branch protection settings, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

{% ifversion repo-rules %}
{% note %}

**Note:** Only a single branch protection rule can apply at a time, which means it can be difficult to know how which rule will apply when multiple versions of a rule target the same branch. {% ifversion repo-rules-enterprise %}Additionally, you may want to create a single set of rules that applies to multiple repositories in an organization. {% endif %}For information about an alternative to branch protection rules, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

{% endnote %}
{% endif %}

## Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% note %}

**Note:** Actors may only be added to bypass lists when the repository belongs to an organization.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. Optionally, enable required pull requests.
{% ifversion pull-request-mergeability-security-changes %}
{% indented_data_reference reusables.pull_requests.security-changes-mergeability spaces=3 %}
{% endif %}
   * Under "Protect matching branches", select **Require a pull request before merging**.
   * Optionally, to require approvals before a pull request can be merged, select **Require approvals**.

      Select the **Required number of approvals before merging** dropdown menu, then click the number of approving reviews you would like to require on the branch.
   * Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**.
   * Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. Note that if code has multiple owners, an approval from _any_ of the code owners will be sufficient to meet this requirement. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."
   * Optionally, to allow specific actors to push code to the branch without creating pull requests when they're required, select **Allow specified actors to bypass required pull requests**. Then, search for and select the actors who should be allowed to skip creating a pull request.
   * Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, in the search field, search for and select the actors who are allowed to dismiss pull request reviews. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."
{% ifversion last-pusher-require-approval %}
   * Optionally, to require someone other than the last person to push to a branch to approve a pull request prior to merging, select **Require approval of the most recent reviewable push**. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-pull-request-reviews-before-merging)."
{% endif %}
1. Optionally, enable required status checks. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."
   * Select **Require status checks to pass before merging**.
   * Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**.
   * In the search field, search for status checks, selecting the checks you want to require.
1. Optionally, select **Require conversation resolution before merging**.
1. Optionally, select **Require signed commits**.
1. Optionally, select **Require linear history**.
{%- ifversion merge-queue %}
1. Optionally, to merge pull requests using a merge queue, select **Require merge queue**. {% data reusables.pull_requests.merge-queue-references %}
{%- endif %}
{%- ifversion required-deployments %}
1. Optionally, to choose which environments the changes must be successfully deployed to before merging, select **Require deployments to succeed before merging**, then select the environments.
{%- endif %}
{% ifversion lock-branch %}
1. Optionally, make the branch read-only.
   * Select **Lock branch**.
   * Optionally, to allow fork syncing, select **Allow fork syncing**.
{%- endif %}
1. Optionally, select **Do not allow bypassing the above settings**.
1. Optionally,{% ifversion fpt or ghec %} in public repositories owned by a {% data variables.product.prodname_free_user %} organization and in all repositories owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %},{% endif %} enable branch restrictions.
   * Select **Restrict who can push to matching branches**.
{%- ifversion restrict-pushes-create-branch %}
   * Optionally, to also restrict the creation of matching branches, select **Restrict pushes that create matching branches**.
{%- endif %}
   * In the search field, search for and select the people, teams, or apps who will have permission to push to the protected branch or create a matching branch.
1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**.

   Then, choose who can force push to the branch.
   * Select **Everyone** to allow everyone with at least write permissions to the repository to force push to the branch, including those with admin permissions.
   * Select **Specify who can force push** to allow only specific actors to force push to the branch. Then, search for and select those actors.

    For more information about force pushes, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#allow-force-pushes)."
1. Optionally, select **Allow deletions**.
1. Click **Create**.

## Editing a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to edit, click **Edit**.
1. Make your desired changes to the branch protection rule.
1. Click **Save changes**.

## Deleting a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to delete, click **Delete**.
