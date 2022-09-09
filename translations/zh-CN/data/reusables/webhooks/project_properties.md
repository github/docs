---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084782"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 在项目上执行的操作。 可以是 `created`、`edited`、`closed`、`reopened` 或 `deleted` 的其中之一。
`changes`|`object` | 对项目的更改（如果操作为 `edited`）。
`changes[name][from]` |`string` | 先前版本的名称（如果操作为 `edited`）。
`changes[body][from]` |`string` | 正文的先前版本（如果操作为 `edited`）。
`project`|`object` | [项目](/rest/reference/projects)本身。
