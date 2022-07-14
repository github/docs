
使用 `push` 事件时，您可以将工作流程配置为在特定分支或标签上运行。

如果要包括分支名称模式，或者要同时包含和排除分支名称模式，请使用 `branches` 筛选器。 只需要排除分支名称模式时，请使用 `branches-ignore` 过滤器。 不能同时对工作流程中的同一事件使用 `branches` 和 `branches-ignore` 筛选器。

如果要包括分支名称模式，或者要同时包含和排除分支名称模式，请使用 `tags` 筛选器。 当您只想排除标记名称模式时，请使用 `tags-ignore` 筛选器。 不能同时对工作流程中的同一事件使用 `tags` 和 `tags-ignore` 筛选器。

如果只定义 `tags`/`tags-ignore` 或只定义 `branches`/`branches-ignore`，则影响未定义 Git ref 的事件不会触发工作流程运行。 如果未定义 `tags`/`tags-ignore` 或 `branches`/`branches-ignore`，则工作流程将针对影响分支或标记的事件运行。 如果同时定义 `branches`/`branches-ignore` 和 [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)，则工作流程仅在同时满足两个筛选器时才会运行。

`branches`、`branches-ignore`、`tags` 和 `tags-ignore` 关键词接受使用 `*`、`**`、`+`、`?`、`!` 等字符匹配多个分支或标记名称的 glob 模式。 如果名称包含其中任一字符，而您想要逐字匹配，则需要使用 `\` *转义*每个特殊字符。 有关 glob 模式的更多信息，请参阅“[过滤器模式备忘清单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

#### 示例：包括分支和标记

在 `branches` 和 `tags` 中定义的模式根据 Git ref 的名称进行评估。 例如，每当有 `push` 事件时，就会运行以下工作流程：

- 名为 `main` 的分支 (`refs/heads/main`)
- 名为 `mona/octocat` 的分支 (`refs/heads/mona/octocat`)
- 名称以 `releases/` 开头的分支，如 `releases/10` (`refs/heads/releases/10`)
- 名为 `v2` 的标记 (`refs/tags/v2`)
- 名称以 `v1.`开头的标记，如 `v1.9.1` (`refs/tags/v1.9.1`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v2
      - v1.*
```

#### 示例：不包括分支和标记

当模式与 `branches-ignore` or `tags-ignore` 模式匹配时，工作流程不会运行。 在 `branches` 和 `tags` 中定义的模式根据 Git ref 的名称进行评估。 例如，每当存在 `push` 事件时，都会运行以下工作流程，除非 `push` 事件是：

- 名为 `mona/octocat` 的分支 (`refs/heads/mona/octocat`)
- 名称与 `releases/**-alpha` 匹配的分支，如 `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- 名为 `v2` 的标记 (`refs/tags/v2`)
- 名称以 `v1.`开头的标记，如 `v1.9` (`refs/tags/v1.9`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:        
      - v2
      - v1.*
```

#### 示例：包括和排除分支和标记

不能使用 `branches` 和 `branches-ignore` 来筛选单个工作流程中的同一事件。 同样，您不能使用 `tags` 和 `tags-ignore` 在单个工作流程中筛选同一事件。 如果要同时包含和排除单个事件的分支模式，请使用 `branches` 或 `tags` 筛选器与 `!` 字符指示应排除哪些分支或标记。

如果使用 `!` 字符定义分支，还必须定义至少一个不带 `!` 字符的分支。 如果只想排除分支，请改用 `paths-ignore`。 类似地，如果使用 `!` 字符定义标记，还必须定义至少一个不带 `!` 字符的标记。 如果只想排除标记，请改用 `paths-ignore`。

您定义模式事项的顺序。

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除 Git 引用。
- 否定匹配后的匹配肯定模式将再次包含 Git 引用。

以下工作流程将在到 `releases/10` 或 `releases/beta/mona` 的推送上运行，而不会在到 `releases/10-alpha` 或 `releases/beta/3-alpha` 的推送上运行，因为否定模式 `!releases/**-alpha` 后跟肯定模式。

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
