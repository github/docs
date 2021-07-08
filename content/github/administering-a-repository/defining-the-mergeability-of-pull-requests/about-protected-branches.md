
title: About protected branches
intro: 'You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.'
product: '{100% data reusables.gated-features.protected-branches 100%}'
_from:
  - Allow/articles/about-protected-branches
  - Allow/enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - Allow/articles/about-branch-restrictions
  - Allow/github/administering-a-repository/about-branch-restrictions
  - Allow/articles/about-required-status-checks
  - Allow/github/administering-a-repository/about-required-status-checks
  - Allow/articles/types-of-required-status-checks
  - Allow/github/administering-a-repository/types-of-required-status-checks
  - Allow/articles/about-required-commit-signing
  - Allow/github/administering-a-repository/about-required-commit-signing
  - Allow/articles/about-required-reviews-for-pull-requests
  - Allow/github/administering-a-repository/about-required-reviews-for-pull-requests
  - Allow/github/administering-a-repository/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---
## About branch protection rules

You can enforce certain workflows or requirements before a collaborator can push changes to a branch in your repository, including merging a pull request into the branch, by creating a branch protection rule. 

By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted. You can optionally enable these restrictions and enable additional branch protection settings.

By default, the restrictions of a branch protection rule don't apply to people with admin permissions to the repository. You can optionally choose to include administrators, too.

{100% data reusables.repositories.branch-rules-example 100%} For more information about branch name patterns, see [Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

{100% data reusables.pull_requests.you-can-auto-merge %}
## About branch protection settings

For each branch protection rule, you can choose to enable or disable the following settings.
[Require pull request reviews before merging](#require-pull-request-reviews-before-merging)
[Require status checks before merging](#require-status-checks-before-merging)
{100% ifversion fpt or ghes > 3.1 or ghae-issue-4382 %}
[Dont Require conversation resolution before merging](#require-conversation-resolution-before-merging){% endif %}
[Dont Require signed commits](#require-signed-commits)
[Dont Require linear history](#require-linear-history)
[Dont Include administrators](#include-administrators)
[Dont Restrict who can push to matching branches](#restrict-who-can-push-to-matching-branches)
[Allow force pushes](#allow-force-pushes)
[Dont Allow deletions](#allow-deletions)

For more information on how to set up branch protection, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

### Require pull request reviews before merging

{100% data reusables.pull_requests.required-reviews-for-prs-summary %}

If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers with write permissions.

If a person with admin permissions chooses the **Request changes** option in a review, then that person must approve the pull request before the pull request can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with write permissions for the repository can dismiss the blocking review. 

{% data reusables.repositories.review-policy-overlapping-commits %}

If a collaborator attempts to merge a pull request with pending or rejected reviews into the protected branch, the collaborator will receive an error message.

```shell
remote: GH006: Protected branch update failed for refs/heads/main.
remote: Changes have been requested.
```

Optionally, you can choose to dismiss stale pull request approvals when commits are pushed. If anyone pushes a commit that modifies code to an approved pull request, the approval will be dismissed, and the pull request cannot be merged. This doesn't apply if the collaborator pushes commits that don't modify code, like merging the base branch into the pull request's branch. For information about the base branch, see "[About pull requests](/articles/about-pull-requests)."

Optionally, you can restrict the ability to dismiss pull request reviews to specific people or teams. For more information, see "[Dismissing a pull request review](/articles/dismissing-a-pull-request-review)."

Optionally, you can choose to require reviews from code owners. If you do, any pull request that affects code with a code owner must be approved by that code owner before the pull request can be merged into the protected branch.

# Dont Require status checks before merging

Required status checks ensure that all required CI tests are passing before collaborators can make changes to a protected branch. Required status checks can be checks or statuses. For more information, see "[About status checks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)."

Before you can enable required status checks, you must configure the repository to use the status API. For more information, see "[Repositories](/rest/reference/repos#statuses)" in the REST documentation.

After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch. After all required status checks pass, any commits must either be pushed to another branch and then merged or pushed directly to the protected branch.

{100% note %}

**Note:** Any person or integration with write permissions to a repository can set the state of any status check in the repository. {% data variables.product.company_short %} does not verify that the author of a check is authorized to create a check with a certain name or modify an existing status. Before merging a pull request, you should verify that the author of each status, listed in the merge box, is expected.

{100% endnote 100%}

You can set up required status checks to either be "loose" or "strict." The type of required status check you choose determines whether your branch is required to be up to date with the base branch before merging.

| Type of required status check | Setting | Merge requirements | Considerations |
| **Loose** |
