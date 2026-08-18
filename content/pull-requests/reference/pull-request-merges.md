---
title: Pull request merges
intro: Learn strategies for merging pull requests, including merge commits, squash merges, and rebases, to manage repository history effectively.
redirect_from:
  - /pull-requests/concepts/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Merge and close pull requests
contentType: reference
---

Pull requests can be merged in different ways. The best strategy depends on how your team wants the repository history to look and how much detail you want to preserve from the pull request branch.

| Strategy | Result | Choose when |
| --- | --- | --- |
| Merge commit | Preserves every commit from the pull request branch and adds an explicit merge point. | Your team values complete history, or the individual commits are meaningful on their own. |
| Squash and merge | Combines all commits in the pull request into a single commit on the base branch. | A pull request represents one logical change, especially with many small fixup commits. |
| Rebase and merge | Adds each commit onto the base branch without a merge commit, for a linear history. | Your team wants a linear history and the commits are already organized clearly. |

## Merge your commits

{% data reusables.pull_requests.default_merge_option %}

A merge commit preserves the full commit history from the pull request branch. This makes it easier to see every commit that led to the final change, including review fixes and intermediate work. It also creates an explicit merge point in the base branch history.

Choose this strategy when your team values complete history or when the individual commits in a pull request are meaningful on their own.

## Squash and merge your commits

{% data reusables.pull_requests.squash_and_merge_summary %}

Squashing turns all commits in the pull request into one commit on the base branch. This keeps the default branch history concise and can make it easier to scan later. The tradeoff is that intermediate commits from the pull request are not preserved as separate commits on the base branch.

Choose this strategy when a pull request represents one logical change, especially if the branch includes many small fixup commits.

### Merge message for a squash merge

When you squash and merge, {% data variables.product.prodname_dotcom %} generates a default commit message that you can edit. The default message can include the pull request title, pull request description, or commit information, depending on repository settings and the number of commits in the pull request.

Maintainers and administrators can configure the default message for squashed commits. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests).

### Squashing and merging a long-running branch

Squash merging works best for short-lived branches. If you keep working on the same head branch after a squash merge, later pull requests can include commits that were already squashed into the base branch. This can make merge conflicts more likely and can force you to resolve the same conflicts more than once.

For long-running branches, consider using a merge commit or rebasing the branch before opening the next pull request.

## Rebase and merge your commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Rebasing adds each commit from the pull request branch onto the base branch without creating a merge commit. This produces a linear history while preserving the individual commits from the pull request.

Choose this strategy when your team wants a linear history and the pull request commits are already organized clearly. If {% data variables.product.github %} cannot safely rebase the pull request automatically, you can rebase locally, resolve conflicts, and push the updated branch. See [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line) and [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request).

## Indirect merges

A pull request can be marked as merged if its head branch commits become reachable from the base branch outside that pull request. This can happen when the same commits are merged through another pull request or pushed directly to the default branch.

Indirect merges are uncommon, but they can affect automation and branch protection expectations. Pull requests merged indirectly are marked as `merged` even if branch protection rules on that pull request were not satisfied.

## Further reading

* [AUTOTITLE](/pull-requests/reference/pull-requests)
* [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests)
