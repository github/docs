---
ms.openlocfilehash: 4e50754bfa8075681d503e689df630855eedbbab
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084822"
---

使用 `push` 事件时，可以将工作流配置为在特定分支或标记上运行。

如果要包含分支名称模式或要同时包含和排除分支名称模式，请使用 `branches` 筛选器。 只希望排除分支名称时，请使用 `branches-ignore` 筛选器。 不能对工作流中的同一事件同时使用 `branches` 和 `branches-ignore` 筛选器。

如果要包含标记名称模式或要同时包含和排除标记名称模式，请使用 `tags` 筛选器。 只需要排除标记名称模式时，请使用 `tags-ignore` 筛选器。 不能对工作流中的同一事件同时使用 `tags` 和 `tags-ignore` 筛选器。

如果仅定义 `tags`/`tags-ignore` 或 `branches`/`branches-ignore`，则工作流不会针对影响未定义的 Git ref 的事件运行。如果两者 `tags`/`tags-ignore` 或 `branches`/`branches-ignore` 均未定义，则工作流将针对影响分支或标记的事件运行。 如果你同时定义 `branches`/`branches-ignore` 筛选器和 [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore) 筛选器，则工作流将只在这两个筛选器都满足条件时运行。

`branches`、`branches-ignore`、`tags` 和 `tags-ignore` 关键词接受使用 `*`、`**`、`+`、`?` 和 `!` 等字符匹配多个分支或标记名称的 glob 模式。 如果名称包含其中任一字符，而你想要逐字匹配，则需要使用 `\` 转义每个特殊字符。 有关 glob 模式的更多信息，请参阅“[筛选器模式速查表](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

#### 示例：包括分支和标记

在 `branches` 和 `tags` 中定义的模式根据 Git ref 的名称进行评估。 例如，当以下项出现 `push` 事件时，将运行以下工作流：

- 名为 `main` 的分支 (`refs/heads/main`)
- 名为 `mona/octocat` 的分支 (`refs/heads/mona/octocat`)
- 名称以 `releases/` 开头的分支，如 `releases/10` (`refs/heads/releases/10`)
- 名为 `v2` 的标记 (`refs/tags/v2`)
- 名称以 `v1.` 开头的标记，如 `v1.9.1` (`refs/tags/v1.9.1`)

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

#### 示例：排除分支和标记

当某个模式与 `branches-ignore` 或 `tags-ignore` 模式匹配时，工作流将不会运行。 在 `branches` 和 `tags` 中定义的模式根据 Git ref 的名称进行评估。 例如，只要出现 `push` 事件，就会运行以下工作流，除非以下项出现 `push` 事件：

- 名为 `mona/octocat` 的分支 (`refs/heads/mona/octocat`)
- 名称与 `releases/**-alpha` 匹配的分支，如 `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- 名为 `v2` 的标记 (`refs/tags/v2`)
- 名称以 `v1.` 开头的标记，如 `v1.9` (`refs/tags/v1.9`)

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

不能在一个工作流中使用 `branches` 和 `branches-ignore` 筛选同一事件。 同样，不能在一个工作流中使用 `tags` 和 `tags-ignore` 筛选同一事件。 如果要同时包括和排除一个事件的分支或标记模式，请使用 `branches` 或 `tags` 筛选器以及 `!` 字符来指示应排除哪些分支或标记。

如果使用字符 `!` 定义分支，则还必须至少定义一个没有 `!` 字符的分支。 如果只想排除分支，请改用 `branches-ignore`。 同样，如果使用字符 `!` 定义标记，则还必须至少定义一个没有 `!` 字符的标记。 如果只想排除标记，请改用 `tags-ignore`。

您定义模式事项的顺序。

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除 Git 引用。
- 否定匹配后的匹配肯定模式将再次包含 Git 引用。

以下工作流将在推送到 `releases/10` 或 `releases/beta/mona` 时运行，但不在推送到 `releases/10-alpha` 或 `releases/beta/3-alpha` 时运行，因为否定模式 `!releases/**-alpha` 遵循肯定模式。

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
