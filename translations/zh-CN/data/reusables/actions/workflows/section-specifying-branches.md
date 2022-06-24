
使用 `workflow_run` 事件时，可以指定触发工作流程必须在哪些分支上运行才能触发工作流程。

`branches` 和 `branches-ignore` 筛选器接受使用 `*`、`**`、`+`、`?`、`!` 等字符的 glob 模式来匹配多个分支名称。 如果名称包含其中任一字符，而您想要逐字匹配，则需要使用 `\` *转义*每个特殊字符。 有关 glob 模式的更多信息，请参阅“[过滤器模式备忘清单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

例如，仅当名为 `Build` 的工作流程在名称以 `releases/` 开头的分支上运行时，具有以下触发器的工作流程才会运行：

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

A workflow with the following trigger will only run when the workflow named `Build` runs on a branch that is not named `canary`:

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

You cannot use both the `branches` and `branches-ignore` filters for the same event in a workflow. If you want to both include and exclude branch patterns for a single event, use the `branches` filter along with the `!` character to indicate which branches should be excluded.

您定义模式事项的顺序。

- A matching negative pattern (prefixed with `!`) after a positive match will exclude the branch.
- A matching positive pattern after a negative match will include the branch again.

For example, a workflow with the following trigger will run when the workflow named `Build` runs on a branch that is named `releases/10` or `releases/beta/mona` but will not `releases/10-alpha`, `releases/beta/3-alpha`, or `main`.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
