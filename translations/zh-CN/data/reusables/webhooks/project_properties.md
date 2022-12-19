---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876037"
---
密钥 | 类型 | 说明
----|------|-------------
`action`|`string` | 在项目上执行的操作。 可以是 `created`、`edited`、`closed`、`reopened` 或 `deleted` 的其中之一。
`changes`|`object` | 对项目的更改（如果操作为 `edited`）。
`changes[name][from]` |`string` | 先前版本的名称（如果操作为 `edited`）。
`changes[body][from]` |`string` | 正文的先前版本（如果操作为 `edited`）。
`project`|`object` | [项目](/rest/reference/projects)本身。
