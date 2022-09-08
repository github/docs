---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084783"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 在项目列上执行的操作。 可以是 `created`、`edited`、`moved` 或 `deleted` 其中之一。
`changes`|`object` | 如果操作为 `edited`，则为对项目列的更改。
`changes[name][from]` |`string` | 如果操作为 `edited`，则为先前版本的名称。
`after_id`|`integer` | 此列现在所遵循的列的 ID，如果操作为 "moved"。 如果是项目中的第一列，则为 `null`。
`project_column`|`object` | [项目列](/rest/reference/projects#columns)本身。
