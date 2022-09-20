---
ms.openlocfilehash: b4949218acc89828772bf2bea3998dfde3a10e95
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079538"
---
触发工作流程的分支或标记参考。 对于 `push` 触发的工作流，这是推送的分支或标记参考。 对于 `pull_request` 触发的工作流，这是拉取请求合并分支。 对于 `release` 触发的工作流，这是创建的发布标记。 对于其他触发器，这是触发工作流运行的分支或标记参考。 此变量仅在分支或标记可用于事件类型时才会设置。 给定的参考格式完整，这意味着对于分支，其格式为 `refs/heads/<branch_name>`，对于拉取请求，其格式为 `refs/pull/<pr_number>/merge`，对于标签，其格式为 `refs/tags/<tag_name>`。 例如，`refs/heads/feature-branch-1`。
