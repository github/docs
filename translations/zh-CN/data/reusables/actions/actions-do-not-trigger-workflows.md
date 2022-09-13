---
ms.openlocfilehash: d503b739b31064e743351c490bfbdc2dda14028f
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865927"
---
使用存储库的 `GITHUB_TOKEN` 执行任务时，`GITHUB_TOKEN`{% ifversion actions-token-updated-triggers %} 触发事件，除 `workflow_dispatch` 和 `repository_dispatch` 以外，{% endif %} 将不会创建新的工作流运行。 这可以防止意外创建递归工作流程运行。 例如，如果工作流运行使用存储库的 `GITHUB_TOKEN` 推送代码，则即使存储库包含配置为在 `push` 事件发生时运行的工作流，新工作流也不会运行。
