---
ms.openlocfilehash: 792c3f0b0cce96a57cf623f818ef296409c5d4a5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145067047"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 执行的操作内容. 可以是 `requested` 或 `completed` 之一。
`workflow_run`| `object` | 工作流程运行。 包含如下所述的信息：`artifacts_url`、`check_suite_id`、`conclusion`、`head_branch` 和 `head_sha`。
