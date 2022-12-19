---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116191"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 已执行的操作。 可以是：<ul><li>`completed` - 检查套件中的所有检查运行已完成。</li><li>`requested` - 新代码被推送到应用程序的存储库时发生。 收到 `requested` 操作事件时，需要 [创建新的检查运行](/rest/reference/checks#create-a-check-run)。</li><li>`rerequested` - 有人请求从拉取请求 UI 重新运行整个检查套件时发生。 收到 `rerequested` 操作事件时，需要 [创建新的检查运行](/rest/reference/checks#create-a-check-run)。 有关 GitHub UI 的详细信息，请参阅“[关于状态检查](/articles/about-status-checks#checks)”。</li></ul>
`check_suite`|`object` | [check_suite](/rest/reference/checks#suites)。
`check_suite[head_branch]`|`string` | 更改所在的头部分支的名称。
`check_suite[head_sha]`|`string` | 此检查套件的最新提交的 SHA。
`check_suite[status]`|`string` | 检查套件中所有检查运行的摘要状态。 可以是 `queued`、`requested`、`in_progress` 或 `completed`。
`check_suite[conclusion]`|`string`| 检查套件中所有检查运行的摘要结论。 可以是 `success`、`failure`、`neutral`、`cancelled`、`timed_out`、`action_required` 或 `stale`。 在检查运行有 `completed` 之前，此值将是 `null`。
`check_suite[url]`|`string` | 指向检查套件 API 资源的 URL。
`check_suite[pull_requests]`|`array`| 匹配此检查套件的拉取请求数组。 如果它们具有相同的 `head_branch`，则拉取请求与检查套件匹配。<br/><br/>**注意：**<ul><li>如果后续推送到 PR，则检查套件的 `head_sha` 可能与拉取请求的 `sha` 不同。</li><li>当检查套件的 `head_branch` 位于分支存储库中时，它将为 `null`，并且 `pull_requests` 数组将为空。</li></ul>
