
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

仅当名为 `Build` 的工作流程在未命名为 `canary` 的分支上运行时，具有以下触发器的工作流程才会运行：

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

不能同时对工作流程中的同一事件使用 `branches` 和 `branches-ignore` 筛选器。 如果要同时包含和排除单个事件的分支模式，请使用 `branches` 筛选器与 `!` 字符指示应排除哪些分支。

您定义模式事项的顺序。

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除分支。
- 否定匹配后的匹配肯定模式将再次包含分支。

例如，当名为 `Build` 的工作流程在名为 `releases/10` 或 `releases/beta/mona`（而不是 `releases/10-alpha`、`releases/beta/3-alpha` 或 `main`）的分支上运行时，将运行具有以下触发器的工作流程。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
