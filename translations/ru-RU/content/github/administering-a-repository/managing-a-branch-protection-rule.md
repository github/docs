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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - repositories
---

### About branch protection rules

{% data reusables.repositories.branch-rules-example %}

You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. Because {% data variables.product.company_short %} uses the `File::FNM_PATHNAME` flag for the `File.fnmatch` syntax, the wildcard does not match directory separators (`/`). For example, `qa/*` will match all branches beginning with `qa/` and containing a single slash. You can include multiple slashes with `qa/**/*`, and you can extend the `qa` string with `qa**/**/*` to make the rule more inclusive. For more information about syntax options for branch rules, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

If a repository has multiple protected branch rules that affect the same branches, the rules that include a specific branch name have the highest priority. If there is more than one protected branch rule that references the same specific branch name, then the branch rule created first will have higher priority.

Protected branch rules that mention a special character, such as `*`, `?`, or `]`, are applied in the order they were created, so older rules with these characters have a higher priority.

To create an exception to an existing branch rule, you can create a new branch protection rule that is higher priority, such as a branch rule for a specific branch name.

For more information about each of each of the available branch protection settings, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

### Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. Optionally, enable required pull request reviews.
   - Under "Protect matching branches", select **Require pull request reviews before merging**. ![Pull request review restriction checkbox](/assets/images/help/repository/PR-reviews-required.png)
   - Click the **Required approving reviews** drop-down menu, then select the number of approving reviews you'd like to require on the branch. ![Drop-down menu to select number of required review approvals](/assets/images/help/repository/number-of-required-review-approvals.png)
   - Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**. ![Dismiss stale pull request approvals when new commits are pushed checkbox](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. For more information, see "[About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners)." ![Require review from code owners](/assets/images/help/repository/PR-review-required-code-owner.png)
   - Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, search for and select the people or teams who are allowed to dismiss pull request reviews. For more information, see "[Dismissing a pull request review](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)." ![Restrict who can dismiss pull request reviews checkbox](/assets/images/help/repository/PR-review-required-dismissals.png)
1. Optionally, enable required status checks.
   - Select **Require status checks to pass before merging**. ![Required status checks option](/assets/images/help/repository/required-status-checks.png)
   - Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**. ![Loose or strict required status checkbox](/assets/images/help/repository/protecting-branch-loose-status.png)
   - From the list of available status checks, select the checks you want to require. ![List of available status checks](/assets/images/help/repository/required-statuses-list.png)
1. Optionally, select **Require signed commits**. ![Require signed commits option](/assets/images/help/repository/require-signed-commits.png)
1. Optionally, select **Require linear history**. ![Required linear history option](/assets/images/help/repository/required-linear-history.png)
1. Optionally, select **Include administrators**. ![Include administrators checkbox](/assets/images/help/repository/include-admins-protected-branches.png)
1. Optionally,{% if currentVersion == "free-pro-team@latest" %} if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %},{% endif %} enable branch restrictions.
   - Select **Restrict who can push to matching branches**. ![Branch restriction checkbox](/assets/images/help/repository/restrict-branch.png)
   - Search for and select the people, teams, or apps who will have permission to push to the protected branch. ![Branch restriction search](/assets/images/help/repository/restrict-branch-search.png)
1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**. ![Allow force pushes option](/assets/images/help/repository/allow-force-pushes.png)
1. Optionally, select **Allow deletions**. ![Allow branch deletions option](/assets/images/help/repository/allow-branch-deletions.png)
1. Click **Create**.

### Editing a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to edit, click **Edit**. ![Edit button](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Make your desired changes to the branch protection rule.
1. Click **Save changes**. ![Save changes button](/assets/images/help/repository/save-branch-protection-rule.png)

### Deleting a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to delete, click **Delete**. ![Delete button](/assets/images/help/repository/delete-branch-protection-rule.png)
