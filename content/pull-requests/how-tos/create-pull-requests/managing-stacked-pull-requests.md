---
title: Managing stacked pull requests
shortTitle: Manage stacked PRs
intro: Restructure stacked pull requests, rebase their branches, and make changes to lower layers using {% data variables.product.prodname_cli %}.
versions:
  feature: pr-stacks
contentType: how-tos
category:
  - Create pull requests
---

{% data reusables.public-preview.public-preview %}

As you iterate on a stack, you often need to make changes in a lower layer, rebase to keep a linear history, or restructure its branches. The `gh stack` extension in {% data variables.product.prodname_cli %} handles these tasks with cascading operations that update every affected branch. See [AUTOTITLE](/pull-requests/reference/stacked-prs-cli-commands).

## Making changes to a lower layer

When you are working on the top layer and need to change something lower in the stack, make the change in the branch it belongs in and rebase, rather than working around it at the current layer.

1. Navigate to the branch that needs the change.

   ```shell copy
   gh stack down
   ```

   You can also check out a specific branch with `gh stack checkout BRANCH-NAME`.

1. Make the change and commit it.

   ```shell copy
   git add .
   git commit -m "helpful-commit-message"
   ```

1. Rebase the branches above to pick up the change.

   ```shell copy
   gh stack rebase --upstack
   ```

1. Push the updated branches and return to where you were working.

   ```shell copy
   gh stack push
   gh stack top
   ```

## Rebasing your stack

A stack must have a linear history between its branches before it can merge. Running `gh stack rebase` performs a cascading rebase where each branch is rebased on top of the branch below it, starting from `main`, so every branch picks up the latest changes from all lower layers.

1. Rebase the stack. By default, this rebases every branch from the bottom to the top.

   ```shell copy
   gh stack rebase
   ```

   To limit the rebase, use `--downstack` to rebase from the lowest layer up to the current branch, or `--upstack` to rebase from the current branch up to the top.

1. Push the updated branches. This uses `--force-with-lease` to safely update the rebased branches.

   ```shell copy
   gh stack push
   ```

If a rebase encounters a conflict, `gh stack rebase` stops and lists the conflicted files. 

* Resolve the markers in the affected files, stage them with `git add`, then run `gh stack rebase --continue`. 
* To start over, run `gh stack rebase --abort` to restore all branches to their pre-rebase state.

> [!NOTE]
> You can also trigger a server-side rebase from the pull request, but those commits are not signed. If your repository requires signed commits, rebase from {% data variables.product.prodname_cli %} so the commits follow your local Git commit signature configuration.

### Rebasing from the {% data variables.product.github %} website

When a stack is not linear, a **Rebase stack** button appears in the merge box. Selecting it triggers a server-side cascading rebase that:

1. Rebases the entire stack on top of the latest trunk, such as `main`.
1. Rebases every unmerged branch on top of its base branch, working from the bottom of the stack upward.
1. Force-pushes each rebased branch to update the remote.

After the rebase completes, every pull request reflects the updated branches and CI checks are re-triggered.

> [!NOTE]
> Commits created by a server-side rebase are **not** signed. If your repository requires signed commits, rebase from {% data variables.product.prodname_cli %} with `gh stack rebase` so the commits follow your local Git commit signature configuration, then push with `gh stack push`.

## Restructuring a stack

You may want to change the composition of a stack. For example if you need to drop a branch, combine branches, insert a branch, reorder, or rename, use the interactive command `gh stack modify`.

Before you run `gh stack modify`, ensure the following: 

* You have an active stack checked out.
* Your working tree is clean.
* No rebase is in progress.
* No pull request is queued to merge.
* The commit history is linear.

1. Open the modify terminal UI.

   ```shell copy
   gh stack modify
   ```

1. Select a branch and stage an operation. Reordering and structural changes (drop, fold, insert, rename) cannot be mixed in the same session.

   - `x` — drop a branch and its commits
   - `d` — fold the branch into the one below it
   - `u` — fold the branch into the one above it
   - `i` / `I` — insert a new branch below or above the cursor
   - `r` — rename a branch
   - <kbd>Shift</kbd>+<kbd>↑</kbd> / <kbd>Shift</kbd>+<kbd>↓</kbd> — reorder a branch
   - `z` — undo the last staged action

1. Apply your staged changes by saving. Nothing is modified until you save.

   Use <kbd>ctrl/cmd</kbd>+<kbd>s</kbd>.

   If a conflict occurs while applying, resolve it and run `gh stack modify --continue`, or run `gh stack modify --abort` to restore the pre-modify state.

1. Push the updated branches and recreate the stack on {% data variables.product.github %}.

   ```shell copy
   gh stack submit
   ```

## Unstacking from the {% data variables.product.github %} website

To dissolve a stack from the website, for example to reorder or reorganize it, use the **Unstack** option on the stack.

Unstacking removes the **open, draft, and closed** pull requests from the stack. Each keeps its current base branch but is no longer linked to the others, and the stack map and stack merge requirements disappear from them.

**Merged and queued pull requests stay in the stack.** Once a pull request has merged, or is queued for merge, as part of a stack, it can't be unstacked. A stack is dissolved entirely only when none of its pull requests have merged or are queued for merge; otherwise it persists with those pull requests still in it.

To reorder or restructure a stack without dissolving it, use the `gh stack modify` command instead. See [Restructuring a stack](#restructuring-a-stack).

## Syncing your local environment after merges

When a pull request at the bottom of the stack merges, update your local state with a single sync command. To automatically prune local branches for merged pull requests at the same time, add the `--prune` option.

```shell copy
gh stack sync --prune
```

This fetches the latest changes, fast-forwards the trunk, rebases the remaining branches onto it, pushes the updated branches, and syncs the pull request status from {% data variables.product.github %}. 

### Pulling in pull requests added to the stack on {% data variables.product.github %}

If someone else adds pull requests to the stack on {% data variables.product.github %}, `gh stack sync` fetches the new branches and appends them to your local stack so it mirrors the remote. A clean remote-ahead update like this is pulled down automatically, so `gh stack sync` is safe to run in automation.

### Resolving a diverged stack

Your local and remote stacks diverge when neither is a clean extension of the other, for example, when you add a branch locally while different pull requests are added to the same stack on {% data variables.product.github %}. When this happens, `gh stack sync` can't merge the two automatically. In an interactive terminal, it offers three choices:

* **Use the remote stack as the source of truth.** Replaces your local stack composition with the remote's, pulling any missing branches. If you were on a branch the remote stack no longer contains, you're moved to the nearest surviving branch. This requires a clean working tree with no uncommitted changes.
* **Delete the stack on {% data variables.product.github %}.** Deletes the stack object on {% data variables.product.github %} and stops the sync. Your pull requests and local branches are untouched. Recreate the stack with `gh stack submit`, which also creates pull requests for any branches you haven't submitted yet. Run `gh stack modify` first if you want to change its structure.
* **Cancel.** Aborts the sync without pushing branches or updating any pull requests.

In a non-interactive terminal, such as CI, a divergence aborts the sync without pushing branches or updating pull requests. Resolve it by unstacking and recreating the stack.

## Next steps

* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-stacked-pull-requests)
* [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/merging-stacked-pull-requests)
