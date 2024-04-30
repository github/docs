---
title: Available rules for rulesets
intro: 'Learn which rules you can add to a ruleset to protect specific branches and tags in a repository.'
product: '{% data reusables.gated-features.repo-rules %}'
versions:
  feature: repo-rules
permissions: '{% data reusables.repositories.repo-rules-permissions %}'
topics:
  - Repositories
shortTitle: Available rules
---

You can create branch or tag rulesets to control how users can interact with selected branches and tags in a repository. {% ifversion push-rulesets %}You can also create push rulesets to block pushes to a private or internal repository and that repository's entire fork network.{% endif %}

When you create a ruleset, you can allow certain users to bypass the rules in the ruleset. This can be users with certain roles, specific teams, or {% data variables.product.prodname_github_apps %}.

{% ifversion push-rulesets %}

For push rulesets, bypass permissions apply to a repository and the repository's entire fork network. {% data reusables.repositories.rulesets-push-rulesets-bypass-permissions %}

{% endif %}

For more information on creating rulesets and bypass permissions, see {% ifversion ghec %}"[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization)" and {% endif %}"[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)."

## Restrict creations

If selected, only users with bypass permissions can create branches or tags whose name matches the pattern you specify.

## Restrict updates

If selected, only users with bypass permissions can push to branches or tags whose name matches the pattern you specify.

## Restrict deletions

If selected, only users with bypass permissions can delete branches or tags whose name matches the pattern you specify. This rule is selected by default.

## Require linear history

Enforcing a linear commit history prevents collaborators from pushing merge commits to the targeted branches or tags. This means that any pull requests merged into the branch or tag must use a squash merge or a rebase merge. A strictly linear commit history can help teams revert changes more easily. For more information about merge methods, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

Before you can require a linear commit history, your repository must allow squash merging or rebase merging. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges)."

{% ifversion repo-rules-merge-queue %}

## Require merge queue

> [!NOTE]
> - Configuring a merge queue via rulesets is in public beta and subject to change.
> - This rule is not available for rulesets created at the organization level. For more information about creating rulesets at the repository level, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)."

You can require that merges must be performed with a merge queue at the repository level. For more information about merge queues, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue#about-merge-queues)."

### Additional settings

You can configure various settings for your merge queue rule.

- **Merge method**: Method to use when merging changes from pull requests.
- **Build concurrency**: Limit the number of queued pull requests requesting checks and workflow runs at the same time.
  - This setting controls when merge queue dispatches the `merge_group.checks_requested` webhook event, which triggers {% data variables.product.prodname_actions %} workflows that are configured to run on `merge_group`. For more information, see "[AUTOTITLE](/webhooks/webhook-events-and-payloads#merge_group)."
  - For example, if there are 5 pull requests added to the queue and the build concurrency setting is 3, merge queue will dispatch the `checks_requested` event for the first 3 pull requeusts. When it receives a result for one of those pull requests, merge queue will dispatch the event for the 4th pull request, and so on.
- **Minimum/maximum group size**: The number of pull requests that will be merged together in a group.
- **Wait time to meet minimum group size (minutes)**: The time the merge queue will wait after the first pull request is added to the queue for the minimum group size to be met. After this time has elapsed, the minimum group size will be ignored and a smaller group will be merged.
- **Require all queue entries to pass required checks**:
    - When this setting is enabled, each item in the merge group must pass all required checks.
    - When this setting is disabled, only the commit at the head of the merge group, i.e. the commit containing changes from all of the pull requests in the group, must pass its required checks to merge.
- **Status check timeout (minutes)**: Maximum time for a required status check to report a conclusion. After this much time has elapsed, checks that have not reported a conclusion will be assumed to have failed

{% endif %}

## Require deployments to succeed before merging

{% ifversion repo-rules-enterprise %}

> [!NOTE] This rule is not available for rulesets created at the organization level.

{% endif %}

You can require that changes are successfully deployed to specific environments before a branch can be merged. For example, you can use this rule to ensure that changes are successfully deployed to a staging environment before the changes merge to your default branch.

## Require signed commits

When you enable required commit signing on a branch, contributors {% ifversion fpt or ghec %}and bots{% endif %} can only push commits that have been signed and verified to the branch. For more information, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

Branch protection rules and rulesets behave differently when you create a branch: with rulesets, we check only the commits that aren't accessible from other branches, whereas with branch protection rules, we do not verify signed commits unless you restrict pushes that create matching branches. With both, when you update a branch, we still check all the commits in the specified range, even if a commit is reachable from other branches.

With both methods, we use the `verified_signature?` to confirm if a commit has a valid signature. If not, the update is not accepted.

{% ifversion fpt or ghec %}

> [!NOTE]
> - If you have enabled vigilant mode in your account settings, which indicates that your commits will always be signed, any commits that {% data variables.product.prodname_dotcom %} identifies as "Partially verified" are permitted on branches that require signed commits. For more information about vigilant mode, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits)."
> - If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% else %}

> [!NOTE] If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% endif %}

You can always push local commits to the branch if the commits are signed and verified. {% ifversion fpt or ghec %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% ifversion fpt or ghec %}squash and {% endif %}merge pull requests locally. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)."

{% ifversion fpt or ghec %} For more information about merge methods, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github)."{% endif %}

## Require a pull request before merging

You can require that all changes to the target branch be associated with a pull request. The pull request doesn't necessarily have to be approved, but it must be opened.

### Additional settings

{% ifversion pull-request-mergeability-security-changes %}
{% data reusables.pull_requests.security-changes-mergeability %}
{% endif %}

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

If you enable required reviews, collaborators can only push changes to a branch via a pull request that is approved by the required number of reviewers with write permissions.

If someone chooses the **Request changes** option in a review, then that person must approve the pull request before the pull request can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with write permissions for the repository can dismiss the blocking review.

{% data reusables.repositories.review-policy-overlapping-commits %}

Optionally, you can choose to dismiss stale pull request approvals when commits are pushed that affect the diff in the pull request. {% data variables.product.company_short %} records the state of the diff at the point when a pull request is approved. This state represents the set of changes that the reviewer approved. If the diff changes from this state (for example, because a contributor pushes new changes to the pull request branch or clicks **Update branch**, or because a related pull request is merged into the target branch), the approving review is dismissed as stale, and the pull request cannot be merged until someone approves the work again. For information about the target branch branch, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

Optionally, you can choose to require reviews from code owners. If you do, any pull request that modifies content with a code owner must be approved by that code owner before the pull request can be merged into the protected branch. Note that if code has multiple owners, an approval from _any_ of the code owners will be sufficient to meet this requirement. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."

{% ifversion last-pusher-require-approval %}
Optionally, you can require an approval from someone other than the last person to push to a branch before a pull request can be merged. This means at least one other authorized reviewer has approved any changes. For example, the "last reviewer" can check that the latest set of changes incorporates feedback from other reviews, and does not add new, unreviewed content.

For complex pull requests that require many reviews, requiring an approval from someone other than the last person to push can be a compromise that avoids the need to dismiss all stale reviews: with this option, "stale" reviews are not dismissed, and the pull request remains approved as long as someone other than the person who made the most recent changes approves it. Users who have already reviewed a pull request can reapprove after the most recent push to meet this requirement. If you are concerned about pull requests being "hijacked" (where unapproved content is added to approved pull requests), it is safer to dismiss stale reviews.
{% endif %}

Optionally, you can require all comments on the pull request to be resolved before it can be merged to a branch. This ensures that all comments are addressed or acknowledged before merge.

## Require status checks to pass before merging

Required status checks ensure that all required CI tests are passing before collaborators can make changes to a branch or tag targeted by your ruleset. Required status checks can be checks or statuses. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."

You can use the commit status API to allow external services to mark commits with an appropriate status. For more information, see "[AUTOTITLE](/rest/commits/statuses)."

After enabling required status checks, all required status checks must pass before collaborators can merge changes into the branch or tag.

Any person or integration with write permissions to a repository can set the state of any status check in the repository, but in some cases you may only want to accept a status check from a specific {% data variables.product.prodname_github_app %}. When you add a required status check rule, you can select an app as the expected source of status updates. The app must be installed in the repository with the `statuses:write` permission, must have recently submitted a check run, and must be associated with a pre-existing required status check in the ruleset. If the status is set by any other person or integration, merging won't be allowed. If you select "any source", you can still manually verify the author of each status, listed in the merge box.

{% ifversion repo-rules-enterprise %}

> [!NOTE] For organization-level status checks, the app must be installed with the `statuses:write` permission. Only apps with this permission are displayed when configuring rulesets at the organization-level.

{% endif %}

You can think of required status checks as being either "loose" or "strict." The type of required status check you choose determines whether your branch is required to be up to date with the base branch before merging.

| Type of required status check | Setting | Merge requirements | Considerations |
| --- | --- | --- | --- |
| **Strict** | The **Require branches to be up to date before merging** checkbox is checked. | The topic branch **must** be up to date with the base branch before merging. | This is the default behavior for required status checks. More builds may be required, as you'll need to bring the head branch up to date after other collaborators update the target branch.|
| **Loose** | The **Require branches to be up to date before merging** checkbox is **not** checked. | The branch **does not** have to be up to date with the base branch before merging. | You'll have fewer required builds, as you won't need to bring the head branch up to date after other collaborators merge pull requests. Status checks may fail after you merge your branch if there are incompatible changes with the base branch. |
| **Disabled** | The **Require status checks to pass before merging** checkbox is **not** checked. | The branch has no merge restrictions. | If required status checks aren't enabled, collaborators can merge the branch at any time, regardless of whether it is up to date with the base branch. This increases the possibility of incompatible changes.

For troubleshooting information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/troubleshooting-required-status-checks)."

{% ifversion code-scanning-merge-protection-rulesets %}

## Set {% data variables.product.prodname_code_scanning %} merge protection

If your repositories are configured with {% data variables.product.prodname_code_scanning %}, you can use rulesets to prevent pull requests from being merged when one of the following conditions is met:

{% data reusables.code-scanning.merge-protection-rulesets-conditions %}

For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/set-code-scanning-merge-protection)." For more general information about {% data variables.product.prodname_code_scanning %}, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)."

{% endif %}

## Block force pushes

You can prevent users from force pushing to the targeted branches or tags. This rule is enabled by default.

If someone force pushes to a branch or tag, commits that other collaborators have based their work on may be removed from the history of the branch or tag. This may lead to merge conflicts or corrupted pull requests. Force pushing can also be used to delete branches or point a branch to commits that were not approved in a pull request.

Enabling force pushes will not override any other rules. For example, if a branch requires a linear commit history, you cannot force push merge commits to that branch.

{% ifversion ghes %}You cannot enable force pushes for a branch if a site administrator has blocked force pushes to all branches in your repository. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)."

If a site administrator has blocked force pushes to the default branch only, you can still enable force pushes for any other branch or tag.{% endif %}

{% ifversion repo-rules-required-workflows %}

## Require workflows to pass before merging

{% data reusables.repositories.rulest-workflows-intro-paragraph %}

For more information about troubleshooting common ruleset workflow configuration settings, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/troubleshooting-rules#troubleshooting-ruleset-workflows)."

### Using a workflow file

To use this rule, you must first create a workflow file. The workflow file needs to be in a repository that matches the visibility of the repositories you want to run it in. Specifically, a public workflow can run on any repository in your organization, an internal workflow can only run on internal and private repositories, and a private workflow can only run on private repositories. For more information, see "[AUTOTITLE](/actions/using-workflows/about-workflows)."

If the workflow file is in an internal or private repository and you want to use the workflow in other repositories in the organization, you will need to allow access to the workflow from outside the repository. For more information, see "[Allowing access to components in an internal repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)" or "[Allowing access to components in a private repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."

When you add this rule to a ruleset, in your organization settings, you specify the source repository and the workflow you want to enforce.

### Using "Evaluate" mode for ruleset workflows

If a ruleset workflow runs in "Evaluate" mode and passes, you can set the ruleset workflow to "Active" mode and merge your pull request without triggering a new workflow run.

If you open a pull request before you create the ruleset in "Evaluate" mode, you can still merge the pull request since the ruleset is not enforced.

For more information about enforcement statuses, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#about-using-enforcement-statuses)."

### Supported event triggers

{% data reusables.repositories.ruleset-workflow-event-triggers %}

### Targeting specific branches with your ruleset workflow

Applying this rule will block direct pushes because the ruleset workflows run as part of the pull request and merge queue experience. For this reason you should not apply this rule to a ruleset that targets all branches in the repository.

This rule should only be added to rulesets that target branches where all changes to the branch are performed by pull requests.

{% endif %}

{% ifversion repo-rules-enterprise %}

## Metadata restrictions

{% data reusables.repositories.rulesets-metadata-restrictions-notes %}

Organizations on a {% data variables.product.prodname_enterprise %} plan can access additional rules to control how commit metadata must be formatted. You can use literal strings or regular expression syntax to define a pattern that the commit metadata must conform to. For example, you can require that commit messages contain a {% data variables.product.company_short %} issue number, or that the committer or author has an email address ending in `@octoorg.com`. You can also control the format of new branch names and tag names. For a selection of useful regular expressions for commit metadata, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-regular-expressions-for-commit-metadata)."

If a contributor tries to update a branch or tag with a commit that doesn't meet your requirements, the contributor will see an error telling them what was wrong with their commit. This error can appear both in the command line, when the user pushes, and on {% data variables.product.prodname_dotcom_the_website %}, when the user tries to make a commit or merge a pull request. Commits are immutable in Git: once a contributor has created a commit, they cannot edit the commit's metadata, so they may need to perform a rebase to rewrite their commit history with new commits before they can successfully contribute their work to the repository.

Metadata restrictions are useful for enforcing consistency between the commits in a branch's history. This can be useful for enforcing adherence to best practices, such as the [Conventional Commits](https://www.conventionalcommits.org/) specification, or for integrating with tooling that relies on commit metadata. For example, it is easier to run scripts based on the contents of a commit message if each message conforms to a predictable format. {% ifversion ghes %}You may want to use metadata restrictions as an alternative for setting up custom pre-receive hook scripts. For more information, see "[AUTOTITLE]
(/admin/policies/enforcing-policy-with-pre-receive-hooks/about-pre-receive-hooks)."{% endif %}

### Important considerations for metadata restrictions

Metadata restrictions block "ref updates." If a contributor pushes work that includes a commit that doesn't meet the requirements, the push is not rejected, but the branch or tag they are targeting is not updated. Technically, the commits still enter your repository: the commits will be "retrievable" (you can navigate to them in your repository), but not "reachable" (they are not connected to the history of a branch or tag). If the contributor's push also includes work on other branches or tags, with commits that meet the requirements of those branches or tags, then those references will be successfully updated.

Metadata restrictions can increase friction for people contributing to a repository. Generally, if you impose metadata restrictions, you should do so on a limited set of branches to avoid impacting contributors' daily work. For example, instead of requiring consistent commit messages on any topic branch that a contributor might work on, you should require consistent commit messages on `main` only, then require pull requests into `main`.

If you use squash merges, you should be aware that metadata restrictions are evaluated before the merge, so all commits on the pull request must meet the requirements. For metadata restrictions that apply to committer emails, the pattern must also include `noreply@github.com` for squash merges to satisfy the restriction.

When you add metadata restrictions to an existing branch or tag, the rules are enforced for new commits pushed to the branch or tag from that point forward, but they are not enforced against the existing history of the branch or tag.

{% endif %}

{% ifversion push-rulesets %}

## Restrict file paths

Prevent commits that include changes in specified file paths from being pushed to the repository.

{% data reusables.repositories.rulesets-push-rules-path-example %}

## Restrict file path length

Prevent commits that include file paths that exceed a specified character limit from being pushed to the repository.

## Restrict file extensions

Prevent commits that include files with specified file extensions from being pushed to the repository.

## Restrict file size

Prevent commits that exceed a specified file size limit from being pushed to the repository.

{% endif %}
