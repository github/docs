---
ms.openlocfilehash: db7736a3360eff9a995e2c6ebcf159229af2151e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145067106"
---
密钥 | 类型 | 说明
----|------|-------------
`action` |`string` | 执行的操作内容. 目前只能是 `created`。
`location` |`object` | 参与事件的位置。
`alert` |`object` | 参与事件的 [`secret scanning alert`](/rest/reference/secret-scanning#get-a-secret-scanning-alert)。
