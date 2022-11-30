---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084794"
---
密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 执行的操作内容. 可以是 `added` 或 `removed`。
`scope`  |`string` | 成员的作用域。 目前只能是 `team`。
`member` |`object` | 已添加或删除的[用户](/rest/reference/users)。
`team`   |`object` | 成员身份的[团队](/rest/reference/teams)。
