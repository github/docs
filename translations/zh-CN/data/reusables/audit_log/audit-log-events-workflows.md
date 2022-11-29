---
ms.openlocfilehash: 830540b45884edcec609f94aeeaaf5b661a95a51
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163209"
---
| 操作 | 说明
|--------|------------
| `workflows.approve_workflow_job` | 工作流作业已获批。 有关详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。
| `workflows.cancel_workflow_run` | 工作流运行已取消。 有关详细信息，请参阅“[取消工作流](/actions/managing-workflow-runs/canceling-a-workflow)”。
| `workflows.delete_workflow_run` | 工作流运行已删除。 有关详细信息，请参阅“[删除工作流运行](/actions/managing-workflow-runs/deleting-a-workflow-run)”。
| `workflows.disable_workflow` | 工作流已禁用。
| `workflows.enable_workflow` | 在之前经 `disable_workflow` 禁用后，工作流已启用。
| `workflows.reject_workflow_job` | 工作流作业被拒绝。 有关详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。
| `workflows.rerun_workflow_run` | 工作流运行已重新运行。 有关详细信息，请参阅“[重新运行工作流](/actions/managing-workflow-runs/re-running-a-workflow)”。
| `workflows.completed_workflow_run` | 工作流状态已更改为 `completed`。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
| `workflows.created_workflow_run` | 工作流运行已创建。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[创建示例工作流](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”。
| `workflows.prepared_workflow_job` | 工作流作业已启动。 包括提供给作业的机密列表。 只能使用 REST API 查看。 它在 {% data variables.product.prodname_dotcom %} Web 接口中不可见，也不包含在 JSON/CSV 导出中。 有关详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows)”。
