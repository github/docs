---
ms.openlocfilehash: 621271104f28983cd2cc1319a302fc1654e54acb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065811"
---

使用 `push` 和 `pull_request` 事件时，可以配置工作流以根据更改的文件路径运行。 路径筛选器不会针对标记的推送进行评估。

如果想要包括文件路径模式或想要同时包括和排除文件路径模式，请使用 `paths` 筛选器。 如果只想排除文件路径模式，请使用 `paths-ignore` 筛选器。 不能对工作流中的同一事件同时使用 `paths` 和 `paths-ignore` 筛选器。

如果同时定义 `branches`/`branches-ignore` 筛选器和 `paths` 筛选器，则工作流将只在这两个筛选器都满足条件时运行。

`paths` 和 `paths-ignore` 关键字接受使用 `*` 和 `**` 通配符匹配多个路径名的 glob 模式。 有关详细信息，请参阅“[筛选器模式备忘单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

#### 示例：包括路径

如果至少一个路径与 `paths` 筛选器中的模式匹配，则工作流将运行。 例如，只要推送 JavaScript 文件 (`.js`)，就会运行以下工作流。

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

注意：如果因[路径筛选](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[分支筛选](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)或[提交消息](/actions/managing-workflow-runs/skipping-workflow-runs)而跳过某工作流，则与该工作流关联的检查将保持为“挂起”状态。 要求这些检查成功的拉取请求将被阻止合并。 有关详细信息，请参阅“[处理已跳过但需要检查](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)”。

{% endnote %}

#### 示例：排除路径

当所有路径名称匹配 `paths-ignore` 中的模式时，工作流不会运行。 如果任何路径名与 `paths-ignore` 中的模式不匹配，即使某些路径名与模式匹配，工作流也会运行。

具有以下路径筛选器的工作流将仅在 `push` 事件上运行，这些事件包括至少一个位于存储库根目录的 `docs` 目录外的文件。

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### 示例：包括和排除路径

不能在单个工作流中使用 `paths` 和 `paths-ignore` 筛选同一事件。 如果要同时包括和排除单个事件的路径模式，请使用 `paths` 筛选器和 `!` 字符来指示应排除哪些路径。

如果使用 `!` 字符定义路径，则还必须定义至少一个不带 `!` 字符的路径。 如果只想排除路径，请改用 `paths-ignore`。

您定义模式事项的顺序：

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除路径。
- 否定匹配后的匹配肯定模式将再次包含路径。

只要 `push` 事件包括 `sub-project` 目录或其子目录中的文件，此示例就会运行，除非该文件在 `sub-project/docs` 目录中。 例如，更改了 `sub-project/index.js` 或 `sub-project/src/index.js` 的推送将会触发工作流运行，但只更改 `sub-project/docs/readme.md` 的推送不会触发。

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Git 差异比较

{% note %}

**注意：** 如果推送超过 1,000 项提交，或者如果 {% data variables.product.prodname_dotcom %} 因超时未生成差异，则工作流将始终运行。

{% endnote %}

筛选器通过评估更改的文件并针对 `paths-ignore` 或 `paths` 列表运行它们来确定是否应运行工作流。 如果没有更改文件，工作流程将不会运行。

{% data variables.product.prodname_dotcom %} 会针对推送使用双点差异，针对拉取请求使用三点差异，生成已更改文件列表：
- **拉取请求：** 三点差异比较主题分支的最近版本与其中使用基本分支最新同步主题分支的提交。
- **推送到现有分支：** 双点差异直接相互比较头部和基础 SHA。
- **推送到新分支：** 根据已推送最深提交的上级父项的两点差异。

差异限制为 300 个文件。 如果更改的文件与过滤器返回的前 300 个文件不匹配，工作流程将不会运行。 您可能需要创建更多的特定过滤器，以便工作流程自动运行。

有关详细信息，请参阅“[关于比较拉取请求中的分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”。
