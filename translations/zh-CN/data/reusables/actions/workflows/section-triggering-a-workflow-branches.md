使用 `pull_request` 和 `pull_request_target` 事件时，可以将工作流程配置为仅针对面向特定分支的拉取请求运行。

如果要包括分支名称模式，或者要同时包含和排除分支名称模式，请使用 `branches` 筛选器。 只需要排除分支名称模式时，请使用 `branches-ignore` 过滤器。 不能同时对工作流程中的同一事件使用 `branches` 和 `branches-ignore` 筛选器。

如果同时定义 `branches`/`branches-ignore` 和 [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)，则工作流程仅在同时满足两个筛选器时才会运行。

`branches` 和 `branches-ignore` 关键词接受使用 `*`、`**`、`+`、`?`、`!` 等字符的 glob 模式来匹配多个分支名称。 如果名称包含其中任一字符，而您想要逐字匹配，则需要使用 `\` 转义每个特殊字符。 有关 glob 模式的更多信息，请参阅“[过滤器模式备忘清单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

#### 示例：包括分支

在 `branches` 中定义的模式根据 Git ref 的名称进行评估。 例如，每当存在针对拉取请求目标的 `pull_request` 事件时，就会运行以下工作流程：

- 名为 `main` 的分支 (`refs/heads/main`)
- 名为 `mona/octocat` 的分支 (`refs/heads/mona/octocat`)
- 名称以 `releases/` 开头的分支，如 `releases/10` (`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### 示例：排除分支

当模式与 `branches-ignore` 模式匹配时，工作流程不会运行。 在 `branches` 中定义的模式根据 Git ref 的名称进行评估。 例如，每当存在 `pull_request` 事件时，除非针对拉取请求，否则会运行以下工作流程：

- 名为 `mona/octocat` 的分支 (`refs/heads/mona/octocat`)
- 名称与 `releases/**-alpha` 匹配的分支，如 `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### 示例：包括和排除分支

不能使用 `branches` 和 `branches-ignore` 来筛选单个工作流程中的同一事件。 如果要同时包含和排除单个事件的分支模式，请使用 `branches` 筛选器与 `!` 字符指示应排除哪些分支。

如果使用 `!` 字符定义分支，还必须定义至少一个不带 `!` 字符的分支。 如果只想排除分支，请改用 `paths-ignore`。

您定义模式事项的顺序。

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除 Git 引用。
- 否定匹配后的匹配肯定模式将再次包含 Git 引用。

对于针对 `releases/10` 或 `releases/beta/mona` 的拉取请求，以下工作流程将在发生 `pull_request` 事件时运行，但对于针对 `releases/10-alpha` 或 `releases/beta/3-alpha` 的拉取请求不会运行，因为否定模式 `!releases/**-alpha` 后跟肯定模式。

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
