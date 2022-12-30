---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876020"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 已执行的操作。 可以是以下选项之一： <ul><li> `queued` - 创建了一个新作业。</li><li> `in_progress` - 已开始在运行器上处理作业。</li><li> `completed` - 作业的 `status` 为 `completed`。</li></ul>
`workflow_job`|`object`| 工作流作业。 许多 `workflow_job` 键（例如 `head_sha`、`conclusion` 和 `started_at`）与 [`check_run`](#check_run) 对象中的键相同。
`workflow_job[status]`|`string`| 作业的当前状态。 可以是 `queued`、`in_progress` 或 `completed`。
`workflow_job[labels]`|`array`| 作业的自定义标签。 由工作流 YAML 中的 [`"runs-on"` 属性](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) 指定。
`workflow_job[runner_id]`|`integer`| 运行此作业的运行器的 ID。 如果 `workflow_job[status]` 为 `queued`，此项将为 `null`。
`workflow_job[runner_name]`|`string`| 运行此作业的运行器的名称。 如果 `workflow_job[status]` 为 `queued`，此项将为 `null`。
`workflow_job[runner_group_id]`|`integer`| 运行此作业的运行器组的 ID。 如果 `workflow_job[status]` 为 `queued`，此项将为 `null`。
`workflow_job[runner_group_name]`|`string`| 运行此作业的运行器组的名称。 如果 `workflow_job[status]` 为 `queued`，此项将为 `null`。
