---
title: About pull request merges
intro: 'You can [merge pull requests](/articles/merging-a-pull-request) by retaining all the commits in a feature branch, squashing all commits into a single commit, or by rebasing individual commits from the `head` branch onto the `base` branch.'
redirect_from:
  - /articles/about-pull-request-merge-squashing/
  - /articles/about-pull-request-merges
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

{% data reusables.pull_requests.default_merge_option %}

### Squash and merge your pull request commits

{% data reusables.pull_requests.squash_and_merge_summary %}

#### Merge message for a squash merge

When you squash and merge, {% data variables.product.prodname_dotcom %} generates a commit message which you can change if you want to. The message default depends on whether the pull request contains multiple commits or just one.

Number of commits | Summary | Description |
----------------- | ------- | ----------- |
One commit | The title of the commit message for the single commit, followed by the pull request number | The body text of the commit message for the single commit
More than one commit | The pull request title, followed by the pull request number | A list of the commit messages for all of the squashed commits, in date order

#### Squashing and merging a long-running branch

If you plan to continue work on the [head branch](/github/getting-started-with-github/github-glossary#head-branch) of a pull request after the pull request is merged, we recommend you don't squash and merge the pull request.

When you create a pull request, {% data variables.product.prodname_dotcom %} identifies the most recent commit that is on both the head branch and the [base branch](/github/getting-started-with-github/github-glossary#base-branch): the common ancestor commit. When you squash and merge the pull request, {% data variables.product.prodname_dotcom %} creates a commit on the base branch that contains all of the changes you made on the head branch since the common ancestor commit. 

Because this commit is only on the base branch and not the head branch, the common ancestor of the two branches remains unchanged. If you continue to work on the head branch, then create a new pull request between the two branches, the pull request will include all of the commits since the common ancestor, including commits that you squashed and merged in the previous pull request. If there are no conflicts, you can safely merge these commits. However, this workflow makes merge conflicts more likely. If you continue to squash and merge pull requests for a long-running head branch, you will have to resolve the same conflicts repeatedly.

### Rebase and merge your pull request commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

You aren't able to automatically rebase and merge on {% data variables.product.product_location %} when:
- The pull request has merge conflicts.
- Rebasing the commits from the base branch into the head branch runs into conflicts.
- Rebasing the commits is considered "unsafe," such as when a rebase is possible without merge conflicts but would produce a different result than a merge would.

If you still want to rebase the commits but can't rebase and merge automatically on {% data variables.product.product_location %} you must:
- Rebase the topic branch (or head branch) onto the base branch locally on the command line
- [Resolve any merge conflicts on the command line](/articles/resolving-a-merge-conflict-using-the-command-line/).
- Force-push the rebased commits to the pull request's topic branch (or remote head branch).

Anyone with write permissions in the repository, can then [merge the changes](/articles/merging-a-pull-request/) using the rebase and merge button on {% data variables.product.product_location %}.

### Further reading

- "[About pull requests](/articles/about-pull-requests/)"
- "[Addressing merge conflicts](/articles/addressing-merge-conflicts)"
