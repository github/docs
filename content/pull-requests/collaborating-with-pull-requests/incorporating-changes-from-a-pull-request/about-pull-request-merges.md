---
title: About pull request merges
intro: 'You can [merge pull requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) by retaining all the commits in a feature branch, squashing all commits into a single commit, or by rebasing individual commits from the `head` branch onto the `base` branch.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---
## Merge your commits

{% data reusables.pull_requests.default_merge_option %}

## Squash and merge your commits

{% data reusables.pull_requests.squash_and_merge_summary %}

### Merge message for a squash merge

{% ifversion default-merge-squash-commit-message %}
When you squash and merge, {% data variables.product.prodname_dotcom %} generates a default commit message, which you can edit. Depending on how the repository is configured and the number of commits in the pull request, not including merge commits, this message may include the pull request title, pull request description, or information about the commits.
{% else %}
When you squash and merge, {% data variables.product.prodname_dotcom %} generates a default commit message, which you can edit. The default message depends on the number of commits in the pull request, not including merge commits.

Number of commits | Summary | Description |
----------------- | ------- | ----------- |
One commit | The title of the commit message for the single commit, followed by the pull request number | The body text of the commit message for the single commit
More than one commit | The pull request title, followed by the pull request number | A list of the commit messages for all of the squashed commits, in date order
{% endif %}

Number of commits | Summary | Description |
----------------- | ------- | ----------- |
One commit | The title of the commit message for the single commit, followed by the pull request number | The body text of the commit message for the single commit
More than one commit | The pull request title, followed by the pull request number | A list of the commit messages for all of the squashed commits, in date order

{% ifversion default-merge-squash-commit-message %}
People with maintainer or admin access to a repository can configure their repository's default merge message for all squashed commits to use the pull request title, the pull request title and commit details, or the pull request title and description. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)".{% endif %}

{% ifversion ghes = 3.6 %}
People with admin access to a repository can configure the repository to use the title of the pull request as the default merge message for all squashed commits. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)".
{% endif %}

### Squashing and merging a long-running branch

If you plan to continue work on the [head branch](/get-started/quickstart/github-glossary#head-branch) of a pull request after the pull request is merged, we recommend you don't squash and merge the pull request.

When you create a pull request, {% data variables.product.prodname_dotcom %} identifies the most recent commit that is on both the head branch and the [base branch](/get-started/quickstart/github-glossary#base-branch): the common ancestor commit. When you squash and merge the pull request, {% data variables.product.prodname_dotcom %} creates a commit on the base branch that contains all of the changes you made on the head branch since the common ancestor commit.

Because this commit is only on the base branch and not the head branch, the common ancestor of the two branches remains unchanged. If you continue to work on the head branch, then create a new pull request between the two branches, the pull request will include all of the commits since the common ancestor, including commits that you squashed and merged in the previous pull request. If there are no conflicts, you can safely merge these commits. However, this workflow makes merge conflicts more likely. If you continue to squash and merge pull requests for a long-running head branch, you will have to resolve the same conflicts repeatedly.

## Rebase and merge your commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

You aren't able to automatically rebase and merge on {% data variables.location.product_location %} when:
- The pull request has merge conflicts.
- Rebasing the commits from the base branch into the head branch runs into conflicts.
- Rebasing the commits is considered "unsafe," such as when a rebase is possible without merge conflicts but would produce a different result than a merge would.

If you still want to rebase the commits but can't rebase and merge automatically on {% data variables.location.product_location %} you must:
- Rebase the topic branch (or head branch) onto the base branch locally on the command line
- [Resolve any merge conflicts on the command line](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).
- Force-push the rebased commits to the pull request's topic branch (or remote head branch).

Anyone with write permissions in the repository, can then [merge the changes](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) using the rebase and merge button on {% data variables.location.product_location %}.

## Indirect merges

A pull request can be merged automatically if its head branch is directly or indirectly merged into the base branch externally. In other words, if the head branch's tip commit becomes reachable from the tip of the target branch. For example:

- Branch `main` is at commit **C**.
- Branch `feature` has been branched off of `main` and is currently at commit **D**. This branch has a pull request targeting `main`.
- Branch `feature_2` is branched off of `feature` and is now at commit **E**. This branch also has a pull request targeting `main`.

If pull request **E** --> `main` is merged first, pull request **D** --> `main` will be marked as merged _automatically_ because all of the commits from `feature` are now reachable from `main`. Merging `feature_2` into `main` and pushing `main` to the server from the command line will mark _both_ pull requests as merged.

Indirect merges can only occur either when the commits in the pull request's head branch are pushed directly to the repository's default branch, or when the commits in the pull request's head branch are present in another pull request and are merged into the repository's default branch using the **Create a merge commit** option.

If a pull request containing commits present in another pull request's head branch is merged using the **Squash and merge** or **Rebase and merge** options, a new commit is created on the base branch and the other pull request will not be automatically merged.

Pull requests that are merged indirectly are marked as `merged` even if [branch protection rules](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#about-branch-protection-rules) have not been satisfied.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)"
