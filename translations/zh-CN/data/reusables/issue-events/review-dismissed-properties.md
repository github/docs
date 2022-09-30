---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145100768"
---
`dismissed_review` | `object` | 被驳回审查的信息。
`dismissed_review[state]` | `string` | 拉取请求被驳回时的状态。 可以是以下选项之一：`commented`、`approved` 或 `changes_requested`。
`dismissed_review[review_id]` | `string` | 拉取请求审查的唯一标识符。
`dismissed_review[dismissal_message]` | `string` | 驳回审查时用户包含的消息。
`dismissed_review[dismissal_commit_id]` | `string` | 驳回审查的提交的唯一标识符（如果存在）。
