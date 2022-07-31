When using the `pull_request` and `pull_request_target` events, you can configure a workflow to run only for pull requests that target specific branches.

Use the `branches` filter when you want to include branch name patterns or when you want to both include and exclude branch names patterns. Use the `branches-ignore` filter when you only want to exclude branch name patterns. You cannot use both the `branches` and `branches-ignore` filters for the same event in a workflow.

If you define both `branches`/`branches-ignore` and [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore), the workflow will only run when both filters are satisfied.

The `branches` and `branches-ignore` keywords accept glob patterns that use characters like `*`, `**`, `+`, `?`, `!` and others to match more than one branch name. If a name contains any of these characters and you want a literal match, you need to escape each of these special characters with `\`. For more information about glob patterns, see the "[Filter pattern cheat sheet](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

#### Example: Including branches

The patterns defined in `branches` are evaluated against the Git ref's name. For example, the following workflow would run whenever there is a `pull_request` event for a pull request targeting:

- A branch named `main` (`refs/heads/main`)
- A branch named `mona/octocat` (`refs/heads/mona/octocat`)
- A branch whose name starts with `releases/`, like `releases/10` (`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### Example: Excluding branches

When a pattern matches the `branches-ignore` pattern, the workflow will not run. The patterns defined in `branches` are evaluated against the Git ref's name. For example, the following workflow would run whenever there is a `pull_request` event unless the pull request is targeting:

- A branch named `mona/octocat` (`refs/heads/mona/octocat`)
- A branch whose name matches `releases/**-alpha`, like `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### Example: Including and excluding branches

You cannot use `branches` and `branches-ignore` to filter the same event in a single workflow. If you want to both include and exclude branch patterns for a single event, use the `branches` filter along with the `!` character to indicate which branches should be excluded.

If you define a branch with the `!` character, you must also define at least one branch without the `!` character. If you only want to exclude branches, use `branches-ignore` instead.

The order that you define patterns matters.

- A matching negative pattern (prefixed with `!`) after a positive match will exclude the Git ref.
- A matching positive pattern after a negative match will include the Git ref again.

The following workflow will run on `pull_request` events for pull requests that target `releases/10` or `releases/beta/mona`, but not for pull requests that target `releases/10-alpha` or `releases/beta/3-alpha` because the negative pattern `!releases/**-alpha` follows the positive pattern.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
