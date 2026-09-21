---
title: Stacked pull requests CLI commands
shortTitle: Stacked PRs CLI commands
intro: Find every command, flag, and exit code for the `gh stack` extension in {% data variables.product.prodname_cli %}.
versions:
  feature: pr-stacks
contentType: reference
category:
  - Create pull requests
---

{% data reusables.public-preview.public-preview %}

The `gh stack` extension for {% data variables.product.prodname_cli %} creates and manages stacks of pull requests from your local repository. For an introduction to stacks, see [AUTOTITLE](/pull-requests/reference/stacked-pull-requests).

## Installation

```shell
gh extension install github/gh-stack
```

The extension requires {% data variables.product.prodname_cli %} (`gh`) version 2.0 or later.

> [!NOTE]
> The `gh stack` extension uses your {% data variables.product.prodname_cli %} authentication. If you have not authenticated yet, run `gh auth login`.

## Command summary

| Command | Purpose |
|---------|---------|
| [`gh stack init`](#gh-stack-init) | Initialize a new stack in the current repository. |
| [`gh stack add`](#gh-stack-add) | Add a new branch on top of the current stack. |
| [`gh stack view`](#gh-stack-view) | View the current stack. |
| [`gh stack checkout`](#gh-stack-checkout) | Check out a stack by stack number, pull request number, pull request URL, or branch name. |
| [`gh stack modify`](#gh-stack-modify) | Interactively restructure the current stack. |
| [`gh stack unstack`](#gh-stack-unstack) | Remove a stack from local tracking and unstack it on {% data variables.product.github %}. |
| [`gh stack submit`](#gh-stack-submit) | Push all branches, then create or update pull requests and the stack on {% data variables.product.github %}. |
| [`gh stack sync`](#gh-stack-sync) | Fetch, rebase, push, and sync pull request state in a single command. |
| [`gh stack rebase`](#gh-stack-rebase) | Pull from the remote and run a cascading rebase across the stack. |
| [`gh stack push`](#gh-stack-push) | Push the active branches in the current stack to the remote. |
| [`gh stack link`](#gh-stack-link) | Link pull requests into a stack on {% data variables.product.github %} without local tracking. |
| [`gh stack merge`](#gh-stack-merge) | Merge one or more stacked pull requests at once. |
| [`gh stack switch`](#gh-stack-switch) | Interactively switch to another branch in the stack. |
| [`gh stack up`](#gh-stack-up) | Move up toward the top of the stack, away from the trunk. |
| [`gh stack down`](#gh-stack-down) | Move down toward the bottom of the stack, toward the trunk. |
| [`gh stack top`](#gh-stack-top) | Jump to the top of the stack. |
| [`gh stack bottom`](#gh-stack-bottom) | Jump to the bottom of the stack. |
| [`gh stack trunk`](#gh-stack-trunk) | Jump to the trunk branch. |
| [`gh stack alias`](#gh-stack-alias) | Create a short command alias so you can type less. |
| [`gh stack feedback`](#gh-stack-feedback) | Share feedback about the `gh stack` extension. |

## Stack management

### `gh stack init`

Initialize a new stack in the current repository.

```shell
gh stack init [flags] [branches...]
```

Initializes a new stack locally. In interactive mode (no arguments), the command prompts for a branch name and offers to use the current branch as the first layer.

When you provide explicit branch names, existing branches are adopted automatically and any missing branches are created. The trunk defaults to the repository's default branch unless you override it with `--base`.

The command enables `git rerere` automatically, so that conflict resolutions are remembered across rebases.

| Flag | Description |
|------|-------------|
| `-b, --base <branch>` | Trunk branch for the stack (defaults to the repository's default branch) |

**Examples:**

```shell
# Interactive — prompts for branch names
gh stack init

# Non-interactive — specify first branch upfront
gh stack init feature-auth

# Use a different trunk branch
gh stack init --base develop feature-auth

# Adopt or create multiple branches at once
gh stack init feature-auth feature-api feature-ui
```

### `gh stack add`

Add a new branch on top of the current stack.

```shell
gh stack add [flags] [branch]
```

For an existing stack, creates a new branch at the current HEAD, adds it to the top of the stack, and checks it out. You must run this command while on the topmost branch of a stack. If you do not provide a branch name, the command prompts for one.

When you run the command interactively from a branch that is not part of a stack, `add` offers to initialize a new stack instead. The branch name you supply, or the auto-generated name, becomes the first layer. If you don't supply a name, the standard `init` prompts are used.

You can optionally stage changes and create a commit as part of the `add` flow. When you provide `-m` without an explicit branch name, the branch name is generated automatically in date and slug format, such as `03-24-add_login`.

| Flag | Description |
|------|-------------|
| `-A, --all` | Stage all changes, including untracked files. Requires `-m`. |
| `-u, --update` | Stage changes to tracked files only. Requires `-m`. |
| `-m, --message <string>` | Create a commit with this message before creating the branch |

> [!NOTE]
> `-A` and `-u` are mutually exclusive.

**Examples:**

```shell
# Create a branch by name
gh stack add api-routes

# Prompt for a branch name interactively
gh stack add

# Stage all changes, commit, and auto-generate the branch name
gh stack add -Am "Add login endpoint"

# Stage only tracked files, commit, and auto-generate the branch name
gh stack add -um "Fix auth bug"

# Commit already-staged changes and auto-generate the branch name
gh stack add -m "Add user model"

# Stage all changes, commit, and use an explicit branch name
gh stack add -Am "Add tests" test-layer

# Stage only tracked files, commit, and use an explicit branch name
gh stack add -um "Update docs" docs-layer
```

### `gh stack view`

View the current stack.

```shell
gh stack view [flags]
```

Shows all branches in the stack, their ordering, pull request links, and the most recent commit with a relative timestamp. By default, the command opens a full-screen view in an interactive terminal and prints static output in a non-interactive terminal. The `--short` and `--json` flags print directly to standard output in either environment.

| Flag | Description |
|------|-------------|
| `-s, --short` | Compact one-line-per-branch output |
| `--json` | Output stack data as JSON |

**Examples:**

```shell
gh stack view
gh stack view --short
gh stack view --json
```

`gh stack view --short` uses OSC 8 hyperlinks for pull request numbers when the terminal supports them. Otherwise, the full URL is shown for copy and paste. Set `GH_STACK_HYPERLINKS=1` or `GH_STACK_HYPERLINKS=0` to override terminal detection.

### `gh stack checkout`

Check out a stack by its stack number, a pull request number, a pull request URL, or a branch name.

```shell
gh stack checkout [<stack-number> | <pr-number> | <pr-url> | <branch>]
```

A bare number is interpreted first as a stack or pull request number. These are repository-scoped identifiers shown in the {% data variables.product.github %} UI. If nothing matches the number, it is tried as a branch name.

When you reference a remote stack, the command fetches the stack on {% data variables.product.github %}, pulls the branches, and sets up the stack locally. If the stack already exists locally and matches, the command switches to the branch. If the local and remote stacks have different compositions, you are prompted to resolve the conflict.

When you provide a branch name, the command checks locally tracked stacks first. If the branch is not tracked locally, the command looks for the branch on remote stacks and pulls down the matching stack. If more than one stack matches, use a stack or pull request number to choose one explicitly.

When you run the command without arguments in an interactive terminal, it first checks whether the current branch belongs to a stack on the remote that is not tracked locally, and offers to check it out. If there is no unique match, or you decline, it opens a searchable picker listing every stack available to you, both the stacks tracked locally and the stacks that exist only on {% data variables.product.github %}. Each row shows the stack number, its bottom and top branch, base branch, a status bar summarizing how many of its pull requests are merged, open, closed, or not yet pushed, and whether the stack is available locally or only on the remote. Filter with the **All**, **Local**, and **Remote** tabs, or type `/` to search. Fully merged stacks are omitted. Selecting a remote-only stack clones it locally before switching to it.

**Examples:**

```shell
# Check out a stack by its stack number
gh stack checkout 7

# Check out a stack by pull request number
gh stack checkout 42

# Check out a stack by pull request URL
gh stack checkout https://github.com/owner/repo/pull/42

# Check out a stack by branch name
gh stack checkout feature-auth

# Interactive — pick from all available stacks (local and remote)
gh stack checkout
```

### `gh stack modify`

Interactively restructure the current stack.

```shell
gh stack modify [flags]
```

Opens an interactive terminal UI for restructuring a stack. All changes are staged in the interface and applied together when you press <kbd>Ctrl</kbd>+<kbd>S</kbd>. You cannot modify branches from merged pull requests.

| Flag | Description |
|------|-------------|
| `--continue` | Continue after resolving conflicts |
| `--abort` | Abort the modify session and restore the stack to its state before you ran the command |

**Preconditions**

The command checks these conditions before opening the interface:

1. You must have an active stack checked out locally.
1. Your working tree must be clean, with no uncommitted changes.
1. No rebase is in progress.
1. No pull request in the stack is queued for merge.
1. Commit history must be linear, with no merge commits and no diverged branches.

**Operations**

| Operation | Key | Effect |
|-----------|-----|--------|
| Drop | <kbd>x</kbd> | Remove branch and its commits from the stack. The local branch and associated pull request are preserved. |
| Fold down | <kbd>d</kbd> | Absorb commits into the branch below, toward the trunk. The folded branch is removed from the stack. |
| Fold up | <kbd>u</kbd> | Absorb commits into the branch above, away from the trunk. The folded branch is removed from the stack. |
| Insert below | <kbd>i</kbd> | Insert a new empty branch below the cursor, toward the trunk. |
| Insert above | <kbd>I</kbd> | Insert a new empty branch above the cursor, away from the trunk. |
| Move down | <kbd>Shift</kbd>+<kbd>↓</kbd> | Reorder the branch down, toward the trunk. |
| Move up | <kbd>Shift</kbd>+<kbd>↑</kbd> | Reorder the branch up, away from the trunk. |
| Rename | <kbd>r</kbd> | Rename the branch, using an inline prompt. |
| Undo | <kbd>z</kbd> | Undo the last staged action. |

**Apply phase**

When you press <kbd>Ctrl</kbd>+<kbd>S</kbd>, the staged changes are applied by renaming branches, inserting new branches, folding or dropping branches, and running a cascading rebase to create a linear commit history with the stack state you want.

If a rebase conflict occurs, you can either:

* Resolve the conflicts, stage the files, then run `gh stack modify --continue`.
* Run `gh stack modify --abort` to abort the operation and restore the stack to its previous state.

**After modifying**

If you have already created a stack of pull requests on {% data variables.product.github %}, run `gh stack submit` to push the updated branches and recreate the stack. The old stack is replaced automatically.

**Examples:**

```shell
# Open the interactive modify interface
gh stack modify

# Continue after resolving a conflict
gh stack modify --continue

# Abort and restore to the previous state
gh stack modify --abort
```

### `gh stack unstack`

Remove a stack from local tracking and unstack it on {% data variables.product.github %}. This command is also available as `gh stack delete`.

```shell
gh stack unstack [<stack-number>] [flags]
```

With no argument, the command targets the active stack, which is the stack that contains the currently checked out branch. It unstacks the stack on {% data variables.product.github %} and removes local tracking.

Provide a stack number, the identifier shown in the stack UI on {% data variables.product.github %}, to unstack a specific stack. This works from anywhere in the repository, whether or not the stack is checked out locally, because the stack is unstacked directly through the {% data variables.product.github %} API. When the stack is also available locally, its local tracking is removed as well.

Pull requests that are merged, merging, or queued for merge cannot be removed from a stack on {% data variables.product.github %} and remain part of the stack. When every pull request is removed, the stack is dissolved and any local tracking is removed. When some pull requests remain stacked, the stack is kept and local tracking, if any, is unchanged. Use `--local` to skip the remote operation and only remove local tracking.

This command is useful when you need to restructure a stack by removing a branch, inserting a branch, reordering branches, renaming branches, or making other large changes. After unstacking, use `gh stack init` to recreate the stack with the structure you want. Existing branches are adopted automatically.

| Flag | Description |
|------|-------------|
| `--local` | Only remove the stack locally, keeping it on {% data variables.product.github %} |

**Examples:**

```shell
# Unstack the current stack on GitHub and remove local tracking
gh stack unstack

# Unstack a specific stack by its number
gh stack unstack 7

# Only remove local tracking
gh stack unstack --local
```

## Remote operations

### `gh stack submit`

Push all branches, then create or update pull requests and the stack on {% data variables.product.github %}.

```shell
gh stack submit [flags]
```

Creates a pull request for every branch in the stack, pushing branches to the remote. After creating pull requests, `submit` automatically creates a stack on {% data variables.product.github %} to link the pull requests together. If the stack already exists on {% data variables.product.github %}, for example from a previous submit, new pull requests are added to the existing stack.

If every pull request in the stack has already been merged, that stack is complete and cannot be extended. In that case, `submit` automatically starts a new stack rooted at the trunk for your unmerged branches and creates it on {% data variables.product.github %}, leaving the merged stack untouched.

In an interactive terminal, `submit` opens a full-screen editor on a single screen.

* **Left panel.** Every branch without a pull request is included by default. Deselect any you do not want to submit with <kbd>Ctrl</kbd>+<kbd>X</kbd>. Because each pull request builds on the branch below it, deselecting a branch also deselects the ones stacked above it, and re-including a branch re-includes the ones below it that it depends on. Branches that already have a pull request, whether open, draft, queued, or merged, are shown for context but are locked. Edit those on the web.
* **Right panel.** For the focused branch, draft the title and description, and choose whether the pull request opens ready for review or as a draft. The description is pre-filled from your repository's pull request template or commits, with a markdown preview. To edit the description in an external editor, press <kbd>Ctrl</kbd>+<kbd>E</kbd>. The extension uses the first nonempty value from the `GH_EDITOR`, `VISUAL`, and `EDITOR` environment variables, in that order. If none is set, it uses `vi` if available on your `PATH`. Focusing a locked branch shows a read-only card with a link to its pull request. Press <kbd>o</kbd> to open it in the browser.

Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to submit all included pull requests at once. The editor supports both keyboard and mouse input. Pass `--auto`, or run the command in a non-interactive terminal such as CI, to skip the editor and use automatically generated titles.

If the branches already have open pull requests but no stack exists on {% data variables.product.github %}, you have the option to link the pull requests into a stack with <kbd>Ctrl</kbd>+<kbd>B</kbd>.

In the editor, new pull requests default to ready for review. You can flip any pull request to draft with the toggle. With `--auto`, new pull requests are created as drafts unless you pass `--open`.

| Flag | Description |
|------|-------------|
| `--auto` | Skip the editor and use automatically generated pull request titles |
| `--open` | Create new pull requests as ready for review instead of drafts, and mark existing pull requests as ready for review |
| `--remote <name>` | Remote to push to (defaults to the automatically detected remote) |

**Examples:**

```shell
gh stack submit
gh stack submit --auto
gh stack submit --open
```

### `gh stack sync`

Fetch, rebase, push, and sync pull request state in a single command.

```shell
gh stack sync [flags]
```

Synchronizes the entire stack.

1. **Fetch.** Fetches the latest changes from `origin`.
1. **Reconcile the remote stack.** Mirrors the stack on {% data variables.product.github %} locally. When pull requests have been added to the stack on {% data variables.product.github %}, so that the remote is ahead of your local stack, their branches are pulled down and appended to your local stack automatically. When the local and remote stacks have genuinely diverged, for example because you added a branch locally while different pull requests were added to the stack on {% data variables.product.github %}, you are prompted to resolve the difference. See [Diverged stacks](#diverged-stacks). In a non-interactive terminal, a divergence aborts the sync, and nothing is pushed or updated.
1. **Fast-forward trunk.** Fast-forwards the trunk branch to match the remote. This step is skipped if the branches have diverged.
1. **Cascade rebase.** Rebases all stack branches onto their updated parents, but only if trunk moved. If a conflict is detected, all branches are restored to their original state, and you are advised to run `gh stack rebase` to resolve conflicts interactively.
1. **Push.** Pushes all branches, using `--force-with-lease` if a rebase occurred.
1. **Sync pull requests.** Syncs pull request state from {% data variables.product.github %} and reports the status of each pull request.
1. **Sync the stack.** Links the stack's open pull requests into a stack on {% data variables.product.github %}, creating the remote stack object if it does not exist yet, or updating it if it is partially formed. This only happens when two or more pull requests exist. Sync never opens pull requests. Use `gh stack submit` for that.
1. **Prune.** In interactive terminals, prompts you to delete local branches for merged pull requests. Use `--prune` to prune automatically.

A clean remote-ahead update, where pull requests are added on top of your local stack, is pulled down automatically without prompting, so `sync` is safe to run in automation. Sync only prompts when the stacks have truly diverged.

#### Diverged stacks

When neither stack is a clean prefix of the other, for example because you added a branch locally while separate pull requests were added to the same stack on {% data variables.product.github %}, sync cannot merge the two automatically. In an interactive terminal, it offers three choices.

* **Use the remote stack as the source of truth.** Replaces your local stack composition with the remote's, pulling any missing branches. If you were on a branch that the remote stack no longer contains, you are moved to the nearest surviving branch. This requires a clean working state with no uncommitted changes.
* **Delete the stack on {% data variables.product.github %}.** Deletes the stack object on {% data variables.product.github %} and stops the sync. Your pull requests and local branches are untouched, and only the stack on {% data variables.product.github %} is removed. Recreate the stack with `gh stack submit`, running `gh stack modify` first if you want to change its structure. This is the way to make {% data variables.product.github %} match your local stack, because `submit`, unlike `sync`, also creates pull requests for any branches you have not submitted yet.
* **Cancel.** Aborts the sync without pushing branches or updating any pull requests.

In a non-interactive terminal, a divergence aborts the sync, exiting successfully, without pushing branches or updating pull requests. Resolve it by unstacking and recreating the stack.

| Flag | Description |
|------|-------------|
| `--remote <name>` | Remote to fetch from and push to (defaults to the automatically detected remote) |
| `--prune` | Delete local branches for merged pull requests |

**Examples:**

```shell
gh stack sync

# Sync and automatically prune merged branches
gh stack sync --prune
```

### `gh stack rebase`

Pull from the remote and run a cascading rebase across the stack.

```shell
gh stack rebase [flags] [branch]
```

Fetches the latest changes from `origin`, then ensures each branch in the stack has the tip of the previous layer in its commit history. Branches are rebased in order, from the trunk upward.

If a branch's pull request has been merged, the rebase automatically switches to `--onto` mode to correctly replay commits on top of the merge target.

If a rebase conflict occurs, the operation pauses and prints the conflicted files with line numbers. Resolve the conflicts, stage them with `git add`, then continue with `--continue`. To undo the entire rebase, use `--abort` to restore all branches to their state before the rebase.

| Flag | Description |
|------|-------------|
| `--downstack` | Only rebase branches from the trunk to the current branch |
| `--upstack` | Only rebase branches from the current branch to the top |
| `--no-trunk` | Skip the trunk. Only rebase stack branches onto each other, with no fetch and no trunk rebase. |
| `--continue` | Continue the rebase after resolving conflicts |
| `--abort` | Abort the rebase and restore all branches to their state before the rebase |
| `--remote <name>` | Remote to fetch from (defaults to the automatically detected remote) |
| `--committer-date-is-author-date` | Set the committer date to the author date during the rebase. Alias: `--preserve-dates`. |

| Argument | Description |
|----------|-------------|
| `[branch]` | Target branch (defaults to the current branch) |

**Examples:**

```shell
# Rebase the entire stack
gh stack rebase

# Only rebase branches below the current one
gh stack rebase --downstack

# Only rebase branches above the current one
gh stack rebase --upstack

# Rebase stack branches without pulling from or rebasing with trunk
gh stack rebase --no-trunk

# After resolving a conflict
gh stack rebase --continue

# Abort rebase and restore everything
gh stack rebase --abort

# Rebase and preserve committer date as author date
gh stack rebase --committer-date-is-author-date
```

### `gh stack push`

Push the active branches in the current stack to the remote.

```shell
gh stack push [flags]
```

Pushes every active branch, excluding merged and queued branches, in a single `git push`, using an explicit per-branch `--force-with-lease` check. The update is not atomic. Branches whose leases pass can be updated even if another branch is rejected. Fix the rejected branch and run the command again. Branches that were already updated remain unchanged. This command does not create or update pull requests. Use `gh stack submit` for that.

| Flag | Description |
|------|-------------|
| `--remote <name>` | Remote to push to (defaults to the automatically detected remote) |

**Examples:**

```shell
gh stack push
gh stack push --remote upstream
```

### `gh stack link`

Link pull requests into a stack on {% data variables.product.github %} without local tracking.

```shell
gh stack link [flags] <stack-number | branch-or-pr> <branch-or-pr> [...]
```

Creates or updates a stack on {% data variables.product.github %} from branch names or pull request numbers and URLs. This command does not create or modify any local tracking state. It is designed for people who manage branches with other tools locally, such as Jujutsu, Sapling, or git-town, and want to open a stack of pull requests. See [AUTOTITLE](/pull-requests/reference/use-other-tools-with-stacked-pull-requests).

You provide arguments in stack order, from bottom to top. Branch arguments are pushed to the remote automatically before pull requests are created or looked up. For branches that already have open pull requests, those pull requests are used. For branches without pull requests, new pull requests are created automatically with the correct base branch chaining. Existing pull requests whose base branch does not match the expected chain are corrected automatically.

If the pull requests are not yet in a stack, a new stack is created. If some of the pull requests are already in a stack, the existing stack is updated to include the new pull requests. Existing pull requests are never removed from a stack, because the update is additive only.

To grow an existing stack without listing its pull requests again, pass a stack number, the number shown in the stack UI on {% data variables.product.github %}, as the first argument. The remaining arguments are appended to the top of that stack. Arguments already in the stack are skipped, and arguments that belong to a different stack are rejected. Because stack and pull request numbers never overlap, a numeric first argument is treated as a stack only when it matches an existing stack. Otherwise it is treated as a pull request or branch.

| Flag | Description |
|------|-------------|
| `--base <branch>` | Base branch for the bottom of the stack (defaults to the repository's default branch). This flag is ignored when you add to an existing stack. |
| `--open` | Mark new and existing pull requests as ready for review |
| `--remote <name>` | Remote to push to (defaults to the automatically detected remote) |

**Examples:**

```shell
# Link branches into a stack (pushes, creates pull requests, creates stack)
gh stack link feature-auth feature-api feature-ui

# Link existing pull requests by number
gh stack link 10 20 30

# Link existing pull requests by URL
gh stack link https://github.com/owner/repo/pull/10 https://github.com/owner/repo/pull/20

# Add branches to an existing stack of pull requests
gh stack link 42 43 feature-auth feature-ui

# Append to the top of an existing stack by its stack number, with no need
# to list the pull requests already in stack 7 again
gh stack link 7 48 feature-ui

# Use a different base branch and mark pull requests as ready for review
gh stack link --base develop --open feat-a feat-b feat-c
```

### `gh stack merge`

Merge one or more stacked pull requests at once.

```shell
gh stack merge [<stack-number> | <pr-number>]
```

Merges every pull request in the stack, up to and including the pull request you choose, into the base branch. The merge is a single, all-or-nothing operation. If any pull request cannot be merged, none of them are merged.

With no argument, the command uses the active local stack. Provide a stack number to merge a stack that you do not have checked out, which is a purely remote operation, or provide a pull request number to merge directly up to that pull request.

In an interactive terminal, the command prompts you to choose which pull requests to merge, pick the merge method, and confirm. In a non-interactive terminal, or when you use `--yes`, the whole stack, or everything up to the pull request you specify, is merged without prompting, using the merge method you last used unless you specify one.

Only basic pull request state is checked before merging. Each pull request must be open and must not be a draft. {% data variables.product.github %} evaluates branch protection and repository rules when the merge runs, and any failure is reported back to you.

> [!NOTE]
> You cannot bypass merge requirements when you merge stacked pull requests.

If the base branch uses a merge queue, the stack is added to the queue instead of being merged directly. The queue chooses the merge method, so the prompt skips the merge method step, and the `--merge-method`, `--squash`, `--rebase`, and `--merge` flags are ignored with a warning. The pull requests you select are added to the queue together, but they merge as the queue processes them, so they can land in separate groups rather than all at once.

| Flag | Description |
|------|-------------|
| `--merge-method <method>` | Merge method to use: `merge`, `squash`, or `rebase` |
| `--merge`, `--squash`, `--rebase` | Shorthands for the corresponding merge method |
| `-y, --yes` | Merge without prompting for confirmation |

**Examples:**

```shell
# Merge the current stack, choosing pull requests interactively
gh stack merge

# Merge a stack you do not have checked out, by stack number
gh stack merge 7

# Merge everything up to and including pull request 42
gh stack merge 42

# Merge the whole current stack without prompting, squashing commits
gh stack merge --yes --squash
```

## Navigation

Navigation commands move you between branches in the current stack without having to remember branch names. The bottom of the stack is the branch closest to the trunk, and the top is the branch furthest from it. `up` moves away from the trunk, and `down` moves toward it.

All navigation commands clamp to the bounds of the stack. Moving up from the top, or down from the bottom, does nothing and displays a message.

### `gh stack switch`

Interactively switch to another branch in the stack.

```shell
gh stack switch
```

Shows an interactive picker listing all branches in the current stack, ordered from top, furthest from the trunk, to bottom, closest to the trunk, with their position number. Select a branch to check it out.

This command requires an interactive terminal.

**Examples:**

```shell
gh stack switch
#    → Select a branch in the stack to switch to
#      5. frontend
#      4. api-endpoints
#      3. auth-layer
#      2. db-schema
#      1. config-setup
```

### `gh stack up`

Move up toward the top of the stack, away from the trunk.

```shell
gh stack up [n]
```

Moves up `n` branches, defaulting to 1. If you are on the trunk branch, `up` moves to the first stack branch.

**Examples:**

```shell
# Move up one layer
gh stack up

# Move up three layers
gh stack up 3
```

### `gh stack down`

Move down toward the bottom of the stack, toward the trunk.

```shell
gh stack down [n]
```

Moves down `n` branches, defaulting to 1.

**Examples:**

```shell
# Move down one layer
gh stack down

# Move down two layers
gh stack down 2
```

### `gh stack top`

Jump to the top of the stack.

```shell
gh stack top
```

Checks out the branch furthest from the trunk.

### `gh stack bottom`

Jump to the bottom of the stack.

```shell
gh stack bottom
```

Checks out the branch closest to the trunk.

### `gh stack trunk`

Jump to the trunk branch.

```shell
gh stack trunk
```

Checks out the trunk branch of the current stack, such as `main`. You must be on a branch that is part of a stack.

## Utilities

### `gh stack alias`

Create a short command alias so you can type less.

```shell
gh stack alias [flags] [name]
```

Installs a small wrapper script into `~/.local/bin/` that forwards all arguments to `gh stack`. The default alias name is `gs`, but you can choose any name by passing it as an argument. After setup, you can run `gs push` instead of `gh stack push`.

On Windows, automatic alias creation is not supported. The command prints manual instructions for creating a batch file or PowerShell function.

| Flag | Description |
|------|-------------|
| `--remove` | Remove an alias you created previously |

**Examples:**

```shell
# Create the default alias (gs), so that "gs push" and "gs view" both work
gh stack alias

# Create a custom alias
gh stack alias gst

# Remove an alias
gh stack alias --remove
gh stack alias --remove gst
```

### `gh stack feedback`

Share feedback about the `gh stack` extension.

```shell
gh stack feedback [title]
```

Opens a discussion in the [gh-stack repository](https://github.com/github/gh-stack) so you can submit feedback. You can optionally provide a title for the discussion post.

**Examples:**

```shell
gh stack feedback
gh stack feedback "Support for reordering branches"
```

## Environment variables

| Variable | Values | Description |
|----------|--------|-------------|
| `GH_STACK_THEME` | `auto` (default), `light`, `dark` | Controls the color palette of the interactive screens for `submit`, `modify`, and `view`, and all colored command output. Colors adapt to your terminal background automatically. Set this variable to force the light or dark palette when a terminal does not report its background, which can happen in some SSH or `tmux` setups. |
| `GH_STACK_HYPERLINKS` | `0`, `1` | Disables or enables OSC 8 hyperlinks when terminal detection is incorrect. Unsupported terminals show the full URL by default. |

```shell
# Force the light palette for one command
GH_STACK_THEME=light gh stack view
```

## Exit codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Generic error |
| 2 | Not in a stack, or stack not found |
| 3 | Rebase conflict |
| 4 | {% data variables.product.github %} API failure |
| 5 | Invalid arguments or flags |
| 6 | Disambiguation required, because the branch belongs to multiple stacks |
| 7 | Rebase already in progress |
| 8 | Stack is locked by another process |
| 9 | Stacked pull requests are not enabled for this repository |
| 10 | Modify session interrupted, and recovery is required |

## Further reading

* [AUTOTITLE](/pull-requests/reference/stacked-pull-requests)
* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/creating-stacked-pull-requests)
* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests)
* [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/troubleshooting-stacked-pull-requests)
