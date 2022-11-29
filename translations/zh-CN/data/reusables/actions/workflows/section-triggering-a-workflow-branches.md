---
ms.openlocfilehash: 476305b7c40430f20edb235a1c1ce73482464c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146064233"
---
使用 `pull_request` 和 `pull_request_target` 事件时，可以将工作流配置为仅针对面向特定分支的拉取请求运行。

如果要包含分支名称模式或同时包含和排除分支名称模式，请使用 `branches` 筛选器。 只希望排除分支名称时，请使用 `branches-ignore` 筛选器。 不能对工作流中的同一事件同时使用 `branches` 和 `branches-ignore` 筛选器。

如果同时定义 `branches`/`branches-ignore` 筛选器和 [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore) 筛选器，则工作流将只在这两个筛选器都满足条件时运行。

`branches` 和 `branches-ignore` 关键词接受使用 `*`、`**`、`+`、`?` 和 `!` 等字符匹配多个路径名称的 glob 模式。 如果名称包含其中任一字符，而你想要逐字匹配，则需要使用 `\` 转义每个特殊字符。 有关 glob 模式的更多信息，请参阅“[筛选器模式备忘清单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

#### 示例：包括分支

在 `branches` 中定义的模式根据 Git 引用的名称进行评估。 例如，每当有针对面向以下内容拉取请求的 `pull_request` 事件时，以下工作流都会运行：

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

当模式与 `branches-ignore` 模式匹配时，工作流将不会运行。 在 `branches` 中定义的模式根据 Git 引用的名称进行评估。 例如，除非拉取请求面向以下内容，否则每当有 `pull_request` 事件时，以下工作流都会运行：

- 名为 `mona/octocat` 的分支 (`refs/heads/mona/octocat`)
- 名称匹配 `releases/**-alpha` 的分支，如 `releases/beta/3-alpha` (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### 示例：包括和排除分支

不能在单个工作流中使用 `branches` 和 `branches-ignore` 筛选同一事件。 如果要同时包括和排除单个事件的分支模式，请使用 `branches` 筛选器以及 `!` 字符来指示应排除哪些分支或标记。

如果使用字符 `!` 定义分支，则还必须至少定义一个没有 `!` 字符的分支。 如果只想排除分支，请改用 `branches-ignore`。

您定义模式事项的顺序。

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除 Git 引用。
- 否定匹配后的匹配肯定模式将再次包含 Git 引用。

以下工作流将在针对面向 `releases/10` 或 `releases/beta/mona` 的拉取请求的 `pull_request` 事件上运行，但不针对面向 `releases/10-alpha` 或 `releases/beta/3-alpha` 的拉取请求，由于负模式，`!releases/**-alpha` 将遵循正模式。

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
