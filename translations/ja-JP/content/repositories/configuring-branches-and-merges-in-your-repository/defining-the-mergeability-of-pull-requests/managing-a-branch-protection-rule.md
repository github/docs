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
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
---
## About branch protection rules

{% data reusables.repositories.branch-rules-example %}

You can create a rule for all current and future branches in your repository with the wildcard syntax `*`. Because {% data variables.product.company_short %} uses the `File::FNM_PATHNAME` flag for the `File.fnmatch` syntax, the wildcard does not match directory separators (`/`). For example, `qa/*` will match all branches beginning with `qa/` and containing a single slash. You can include multiple slashes with `qa/**/*`, and you can extend the `qa` string with `qa**/**/*` to make the rule more inclusive. For more information about syntax options for branch rules, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

If a repository has multiple protected branch rules that affect the same branches, the rules that include a specific branch name have the highest priority. If there is more than one protected branch rule that references the same specific branch name, then the branch rule created first will have higher priority.

Protected branch rules that mention a special character, such as `*`, `?`, or `]`, are applied in the order they were created, so older rules with these characters have a higher priority.

To create an exception to an existing branch rule, you can create a new branch protection rule that is higher priority, such as a branch rule for a specific branch name.

For more information about each of the available branch protection settings, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."

## Creating a branch protection rule

When you create a branch rule, the branch you specify doesn't have to exist yet in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
1. Optionally, enable required pull requests.
   - Under "Protect matching branches", select **Require a pull request before merging**.
     ![Pull request review restriction checkbox](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Optionally, to require approvals before a pull request can be merged, select **Require approvals**, click the **Required number of approvals before merging** drop-down menu, then select the number of approving reviews you would like to require on the branch.
     ![Drop-down menu to select number of required review approvals](/assets/images/help/repository/number-of-required-review-approvals-updated.png)
{% else %}
1. Optionally, enable required pull request reviews.
   - Under "Protect matching branches", select **Require pull request reviews before merging**.
     ![Pull request review restriction checkbox](/assets/images/help/repository/PR-reviews-required.png)
   - Click the **Required approving reviews** drop-down menu, then select the number of approving reviews you would like to require on the branch. 
     ![Drop-down menu to select number of required review approvals](/assets/images/help/repository/number-of-required-review-approvals.png)
{% endif %}
   - Optionally, to dismiss a pull request approval review when a code-modifying commit is pushed to the branch, select **Dismiss stale pull request approvals when new commits are pushed**.
     ![Dismiss stale pull request approvals when new commits are pushed checkbox](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Optionally, to require review from a code owner when the pull request affects code that has a designated owner, select **Require review from Code Owners**. For more information, see "[About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners)."
     ![Require review from code owners](/assets/images/help/repository/PR-review-required-code-owner.png)
{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
   - Optionally, to allow specific actors to push code to the branch without creating pull requests when they're required, select **Allow specified actors to bypass required pull requests**. Then, search for and select the actors who should be allowed to skip creating a pull request.
     ![Allow specific actors to bypass pull request requirements checkbox]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %}
{% endif %}
   - Optionally, if the repository is part of an organization, select **Restrict who can dismiss pull request reviews**. Then, search for and select the actors who are allowed to dismiss pull request reviews. For more information, see "[Dismissing a pull request review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."
     ![Restrict who can dismiss pull request reviews checkbox]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
{% ifversion last-pusher-require-approval %}
   - Optionally, to require someone other than the last person to push to a branch to approve a pull request prior to merging, select **Require approval from someone other than the last pusher**. For more information, see "[About protected branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-pull-request-reviews-before-merging)."
     ![Require review from someone other than the last pusher](/assets/images/help/repository/last-pusher-review-required.png)
{% endif %}
1. Optionally, enable required status checks. For more information, see "[About status checks](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."
   - Select **Require status checks to pass before merging**.
     ![Required status checks option](/assets/images/help/repository/required-status-checks.png)
   - Optionally, to ensure that pull requests are tested with the latest code on the protected branch, select **Require branches to be up to date before merging**.
     ![Loose or strict required status checkbox](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Search for status checks, selecting the checks you want to require.
     ![Search interface for available status checks, with list of required checks](/assets/images/help/repository/required-statuses-list.png)
1. Optionally, select **Require conversation resolution before merging**.
  ![Require conversation resolution before merging option](/assets/images/help/repository/require-conversation-resolution.png)
1. Optionally, select **Require signed commits**.
  ![Require signed commits option](/assets/images/help/repository/require-signed-commits.png)
1. Optionally, select **Require linear history**.
  ![Required linear history option](/assets/images/help/repository/required-linear-history.png)
{%- ifversion fpt or ghec %}
1. Optionally, to merge pull requests using a merge queue, select **Require merge queue**. {% data reusables.pull_requests.merge-queue-references %}
  ![Require merge queue option](/assets/images/help/repository/require-merge-queue.png)
  {% tip %}

  **Tip:** The pull request merge queue feature is currently in limited public beta and subject to change. Organizations owners can request early access to the beta by joining the [waitlist](https://github.com/features/merge-queue/signup).

  {% endtip %}
{%- endif %}
{%- ifversion required-deployments %}
1. Optionally, to choose which environments the changes must be successfully deployed to before merging, select **Require deployments to succeed before merging**, then select the environments.
   ![Require successful deployment option](/assets/images/help/repository/require-successful-deployment.png)
{%- endif %}
{% ifversion lock-branch %}
1. Optionally, select **Lock branch** to make branch read-only.
![Screenshot of the checkbox to lock a branch](/assets/images/help/repository/lock-branch.png) 
   -  Optionally, to allow fork syncing, select **Allow fork syncing**.
![Screenshot of the checkbox to allow fork syncing](/assets/images/help/repository/lock-branch-forksync.png) 
{%- endif %}
1. Optionally, select {% ifversion bypass-branch-protections %}**Do not allow bypassing the above settings**.
![Do not allow bypassing the above settings checkbox](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %}**Apply the rules above to administrators**.
![Apply the rules above to administrators checkbox](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. Optionally,{% ifversion fpt or ghec %} if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %},{% endif %} enable branch restrictions.
   - Select **Restrict who can push to matching branches**.
     ![Branch restriction checkbox](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - Optionally, to also restrict the creation of matching branches, select **Restrict pushes that create matching branches**.
     ![Branch creation restriction checkbox](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - Search for and select the people, teams, or apps who will have permission to push to the protected branch or create a matching branch.
     ![Branch restriction search]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. Optionally, under "Rules applied to everyone including administrators", select **Allow force pushes**.
  ![Allow force pushes option](/assets/images/help/repository/allow-force-pushes.png)
{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
  Then, choose who can force push to the branch.
    - Select **Everyone** to allow everyone with at least write permissions to the repository to force push to the branch, including those with admin permissions.
    - Select **Specify who can force push** to allow only specific actors to force push to the branch. Then, search for and select those actors.
      ![Screenshot of the options to specify who can force push]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %}
{% endif %}

    For more information about force pushes, see "[Allow force pushes](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes)."
1. Optionally, select **Allow deletions**.
  ![Allow branch deletions option](/assets/images/help/repository/allow-branch-deletions.png)
1. Click **Create**.

## Editing a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to edit, click **Edit**.
  ![Edit button](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Make your desired changes to the branch protection rule.
1. Click **Save changes**.
  ![Save changes button](/assets/images/help/repository/save-branch-protection-rule.png)

## Deleting a branch protection rule

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. To the right of the branch protection rule you want to delete, click **Delete**.
    ![Delete button](/assets/images/help/repository/delete-branch-protection-rule.png)
