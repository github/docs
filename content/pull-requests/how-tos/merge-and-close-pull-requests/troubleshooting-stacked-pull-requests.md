---
title: Troubleshooting stacked pull requests
shortTitle: Troubleshoot stacked PRs
intro: Resolve common problems with stacked pull requests, including rebase conflicts, blocked merges, interrupted operations, and merge queue issues.
versions:
  feature: pr-stacks
contentType: how-tos
category:
  - Merge and close pull requests
---

{% data reusables.public-preview.public-preview %}

This article covers common issues you may encounter when working with stacked pull requests and how to resolve them. 

## A rebase reports a conflict

When a cascading rebase encounters a conflict, `gh stack rebase` stops and lists the conflicted files.

To resolve the conflict and continue:

1. Open each conflicted file and resolve the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

1. Stage the resolved files.

   ```shell
   git add .
   ```

1. Continue the rebase. The remaining branches are rebased automatically.

   ```shell
   gh stack rebase --continue
   ```

If the conflict is too complex or you want to start over, abort the rebase to restore all branches to their pre-rebase state.

```shell
gh stack rebase --abort
```

## A sync stopped because of a conflict

If a conflict is detected while running `gh stack sync`, all branches are restored to their original state so nothing is left partially updated. Resolve the conflict interactively by running a rebase directly, then push the updated branches.

```shell
gh stack rebase
gh stack push
```

## A modify session won't start

`gh stack modify` requires a clean starting state. If it won't start, confirm that:

* You have an active stack checked out.
* Your working tree is clean.
* No rebase is in progress.
* No pull request is queued to merge.
* The commit history is linear. If it isn't, run `gh stack rebase` first.

## A modify session was interrupted

If `gh stack modify` is interrupted, for example, by a conflict you don't want to resolve or a terminal crash, you can restore the stack to the state it was in before you started. A pre-modify snapshot is cached locally for recovery.

```shell
gh stack modify --abort
```

If a conflict occurred while applying changes and you want to keep going instead, resolve the conflict, stage the files with `git add`, then run `gh stack modify --continue`.

## A pull request can't be merged

A pull request in a stack can only merge when it, and every pull request below it, meets all merge requirements, and the stack has a fully linear history. If the merge is blocked, check that:

* The pull request and all pull requests below it have required reviews and passing checks.
* The stack has a linear history. If changes were pushed to a lower branch or the trunk moved ahead, the history may no longer be linear.

To restore a linear history, run `gh stack rebase` and then `gh stack push`, or click **Rebase stack** in the merge box. For instructions, see [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests).

## Merging stopped partway through the stack

Pre-merge checks run before any merge, but a merge can still fail. For example, because of an unexpected conflict or an intermittent failure. If a failure occurs part way through, merging stops at that pull request.

* Pull requests below it that merged successfully remain landed on the base branch.
* The failed pull request and the pull requests above it stay open.

Resolve the issue on the failed pull request, then retry the merge to land the rest of the stack.

## A pull request was removed from the merge queue

Stacks are kept together in the merge queue. If a pull request is removed or ejected from the queue, all pull requests above it in the stack are also ejected and removed. Re-add the stack to the queue once the underlying issue is resolved.

A large stack may also split across consecutive merge groups: the merge queue allows a merge group to exceed its configured maximum size by up to 50 percent to keep a stack together, and any pull requests that don't fit continue in subsequent groups until the full stack has landed.

## You closed a pull request in the middle of the stack

Closing a pull request in the middle of a stack blocks all pull requests above it from being mergeable. The stack relationship is preserved, so to open a different pull request or change the stack's structure, you must first dissolve the stack and then re-create it.

You can unstack from the {% data variables.product.github %} website, or restructure the stack with `gh stack modify`. Unstacking removes only the open, draft, and closed pull requests; merged and queued pull requests remain in the stack. See [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests#unstacking-from-the-github-website) and [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests#restructuring-a-stack).

## Commits aren't signed after a rebase

A rebase triggered from the pull request runs on {% data variables.product.github %}'s servers, and those commits are **not** signed. If your repository requires signed commits, rebase from {% data variables.product.prodname_cli %} instead. 

* Running `gh stack rebase` uses your local Git operations, so the generated commits follow your local Git commit signature configuration. 
* After rebasing, push the updated branches with `gh stack push`.

## You can't create a stack across forks

{% data reusables.pull_requests.pr-stack-cross-fork-unsupported %}
