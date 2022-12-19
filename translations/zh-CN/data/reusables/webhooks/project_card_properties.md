---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084784"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 在项目卡上执行的操作。 可以是 `created`、`edited`、`moved`、`converted` 或 `deleted`。
`changes`|`object` | 如果操作为 `edited` 或 `converted`，则是对项目卡的更改。
`changes[note][from]` |`string` | 如果操作是 `edited` 或 `converted`，则为先前版本的说明。
`after_id`|`integer` | 此卡现在所遵循的卡的 ID，如果操作为 "moved"。 如果它是列中的第一张卡，将为 `null`。
`project_card`|`object` | [项目卡](/rest/reference/projects#cards)本身。
