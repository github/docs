---
ms.openlocfilehash: 9c62e7c7c015ddaf1fb84d7c27eadce9e1a42487
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098587"
---
使用存储库的 `GITHUB_TOKEN` 执行任务时，`GITHUB_TOKEN` 触发的事件不会创建新的工作流运行。 这可以防止意外创建递归工作流程运行。 例如，如果工作流运行使用存储库的 `GITHUB_TOKEN` 推送代码，则即使存储库包含配置为在 `push` 事件发生时运行的工作流，新工作流也不会运行。
