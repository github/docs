---
ms.openlocfilehash: a35ad50ac71e34c7aecdc8f58720f962375acabd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065813"
---

使用 `workflow_run` 事件时，可以指定触发工作流必须在哪些分支上运行才能触发工作流。

`branches` 和 `branches-ignore` 筛选器接受使用 `*`、`**`、`+`、`?` 和 `!` 等字符匹配多个分支名称的 glob 模式。 如果名称包含其中任一字符，而你想要逐字匹配，则需要使用 `\` 转义每个特殊字符。 有关 glob 模式的更多信息，请参阅“[筛选器模式备忘清单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

例如，仅当名为 `Build` 的工作流在名称以 `releases/` 开头的分支上运行时，具有以下触发器的工作流才会运行：

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

仅当名为 `Build` 的工作流不在名为 `canary` 的分支上运行时，具有以下触发器的工作流才会运行：

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

不能对工作流中的同一事件同时使用 `branches` 和 `branches-ignore` 筛选器。 如果要同时包括和排除单个事件的分支模式，请使用 `branches` 筛选器以及 `!` 字符来指示应排除哪些分支。

您定义模式事项的顺序。

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除分支。
- 否定匹配后的匹配肯定模式将再次包含分支。

例如，当名为 `Build` 的工作流在名为 `releases/10` 或 `releases/beta/mona` 但不在名为 `releases/10-alpha`、`releases/beta/3-alpha` 或 `main` 的分支上运行时，具有以下触发器的工作流将运行。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
