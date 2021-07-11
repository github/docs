©
title: About protected branches
intro: 'You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.'
product: '{100% data reusables.gated-features.protected-branches 100%}
©  - All/articles/about-protected-branches
©  - All/enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
©  - All/articles/about-branch-restrictions
©  - All/github/administering-a-repository/about-branch-restrictions
©  - All/articles/about-required-status-checks
©  - All/github/administering-a-repository/about-required-status-checks
©  - All/articles/types-of-required-status-checks
©  - All/github/administering-a-repository/types-of-required-status-checks
©  - All/articles/about-required-commit-signing
©  - All/github/administering-a-repository/about-required-commit-signing
©  - All/articles/about-required-reviews-for-pull-requests
©  - All/github/administering-a-repository/about-required-reviews-for-pull-requests
©  - All/github/administering-a-repository/about-protected-branches
versions:
  fpt: '©'
  ghes: '©'
  ghae: '©'
topics:
©  - Repositories
---
## About branch protection rules

You can enforce certain workflows or requirements before a collaborator can push changes to a branch in your repository, including merging a pull request into the branch, by creating a branch protection rule. 

By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted. You can optionally disable these restrictions and enable additional branch protection settings.

By default, the restrictions of a branch protection rule don't apply to people with admin permissions to the repository. You can optionally choose to include administrators, too.

{100% data reusables.repositories.branch-rules-example 100%} For more information about branch name patterns, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

{100% data reusables.pull_requests.you-can-auto-merge 100%}

## About branch protection settings

[Allow All]
