---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065661"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 已执行的操作。 可以是以下选项之一： <ul><li> `created` - 创建了一个新的检查运行。</li><li> `completed` - 检查运行的 `status` 是 `completed`。</li><li> `rerequested` - 有人请求从拉取请求 UI 重新运行检查运行。 有关 GitHub UI 的详细信息，请参阅“[关于状态检查](/articles/about-status-checks#checks)”。 收到 `rerequested` 操作时，需要 [创建新的检查运行](/rest/reference/checks#create-a-check-run)。 只有有人请求重新运行检查的 {% data variables.product.prodname_github_app %} 才会收到 `rerequested` 有效负载。</li><li> `requested_action` - 有人请求执行应用提供的操作。 只有有人请求执行操作的 {% data variables.product.prodname_github_app %} 才会收到 `requested_action` 有效负载。 若要详细了解检查运行和请求的操作，请参阅“[检查运行和请求的操作](/rest/reference/checks#check-runs-and-requested-actions)。”</li></ul>
`check_run`|`object` | [check_run](/rest/reference/checks#get-a-check-run)。
`check_run[status]`|`string` | 检查运行的当前状态。 可以是 `queued`、`in_progress` 或 `completed`。
`check_run[conclusion]`|`string` | 已完成检查运行的结果。 可以是 `success`、`failure`、`neutral`、`cancelled`、`timed_out`、`action_required` 或 `stale` 之一。 在检查运行有 `completed` 之前，此值将是 `null`。
`check_run[name]`|`string` | 检查运行的名称。
`check_run[check_suite][id]`|`integer` | 此检查运行所属检查套件的 ID。
`check_run[check_suite][pull_requests]`|`array`| 匹配此检查套件的拉取请求数组。 如果它们具有相同的 `head_branch`，则拉取请求与检查套件匹配。<br/><br/>**注意：**<ul><li>如果后续推送到 PR，则检查套件的 `head_sha` 可能与拉取请求的 `sha` 不同。</li><li>当检查套件的 `head_branch` 位于分支存储库中时，它将为 `null`，并且 `pull_requests` 数组将为空。</li></ul>
`check_run[check_suite][deployment]`|`object`| 部署到仓库环境。 仅当检查运行由引用环境的 {% data variables.product.prodname_actions %} 工作流作业创建时才会填充。
`requested_action`|`object` | 用户请求的操作。
`requested_action[identifier]`|`string` | 用户请求的操作的集成器引用。
