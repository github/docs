
When using the `workflow_run` event, you can specify which workflows can trigger your workflow.

The `workflows` filters accept glob patterns that use characters like `*`, `**`, `+`, `?`, `!` and others to match more than one workflow name. If a name contains any of these characters and you want a literal match, you need to _escape_ each of these special characters with `\`. For more information about glob patterns, see the [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

For example, a workflow with the following trigger will only run when the workflow named `Build` runs:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
```

A workflow with the following trigger will only run when a workflow whose name starts with `Build` completed:

```yaml
on:
  workflow_run:
    workflows: ["Build*"]
    types: [completed]
```

A workflow with the following trigger will only run when the workflow named `Build C++` completed:

```yaml
on:
  workflow_run:
    workflows: ["Build C\+\+"]
    types: [completed]
```
