---
ms.openlocfilehash: 4f04b4395ec12d834bc4d8f350b302c09badea6d
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163177"
---
| 操作 | 说明
|------------------|-------------------
| `cancel_workflow_run` | 工作流程运行取消时触发。 有关详细信息，请参阅“[取消工作流](/actions/managing-workflow-runs/canceling-a-workflow)”。
| `completed_workflow_run` | 当工作流状态更改为 `completed` 时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
| `created_workflow_run` | 工作流程运行创建时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[创建示例工作流](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”。
| `delete_workflow_run` | 工作流程运行被删除时触发。 有关详细信息，请参阅“[删除工作流运行](/actions/managing-workflow-runs/deleting-a-workflow-run)”。
| `disable_workflow` | 工作流程禁用时触发。
| `enable_workflow` | 在此前经 `disable_workflow` 禁用后，在工作流启用时触发。
| `rerun_workflow_run` | 工作流程运行重新运行时触发。 有关详细信息，请参阅“[重新运行工作流](/actions/managing-workflow-runs/re-running-a-workflow)”。
| `prepared_workflow_job` | 工作流程作业启动时触发。 包括提供给作业的机密列表。 只能使用 REST API 查看。 它在 {% data variables.product.prodname_dotcom %} Web 接口中不可见，也不包含在 JSON/CSV 导出中。 有关详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows)”。
| `approve_workflow_job` | 在工作流作业被批准后触发。 有关详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。
| `reject_workflow_job` | 在工作流作业被拒绝后触发。 有关详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。
