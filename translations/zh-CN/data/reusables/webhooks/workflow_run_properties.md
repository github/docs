---
ms.openlocfilehash: 792c3f0b0cce96a57cf623f818ef296409c5d4a5
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876008"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 执行的操作内容. 可以是 `requested` 或 `completed` 之一。
`workflow_run`| `object` | 工作流程运行。 包含如下所述的信息：`artifacts_url`、`check_suite_id`、`conclusion`、`head_branch` 和 `head_sha`。
