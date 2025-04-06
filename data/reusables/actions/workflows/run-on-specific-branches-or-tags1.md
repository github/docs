
When using the `push` event, you can configure a workflow to run on specific branches or tags.

Use the `branches` filter when you want to include branch name patterns or when you want to both include and exclude branch names patterns. Use the `branches-ignore` filter when you only want to exclude branch name patterns. You cannot use both the `branches` and `branches-ignore` filters for the same event in a workflow.

Use the `tags` filter when you want to include tag name patterns or when you want to both include and exclude tag names patterns. Use the `tags-ignore` filter when you only want to exclude tag name patterns. You cannot use both the `tags` and `tags-ignore` filters for the same event in a workflow.

If you define only `tags`/`tags-ignore` or only `branches`/`branches-ignore`, the workflow won't run for events affecting the undefined Git ref. If you define neither  `tags`/`tags-ignore` or `branches`/`branches-ignore`, the workflow will run for events affecting either branches or tags. If you define both `branches`/`branches-ignore` and [`paths`/`paths-ignore`](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), the workflow will only run when both filters are satisfied.

The `branches`, `branches-ignore`, `tags`, and `tags-ignore` keywords accept glob patterns that use characters like `*`, `**`, `+`, `?`, `!` and others to match more than one branch or tag name. If a name contains any of these characters and you want a literal match, you need to _escape_ each of these special characters with `\`. For more information about glob patterns, see the "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."
