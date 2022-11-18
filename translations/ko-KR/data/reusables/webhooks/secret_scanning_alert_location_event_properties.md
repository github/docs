---
ms.openlocfilehash: db7736a3360eff9a995e2c6ebcf159229af2151e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069127"
---
키 | 형식 | 설명
----|------|-------------
`action` |`string` | 수행된 작업입니다. 현재는 `created`만 될 수 있습니다.
`location` |`object` | 이벤트에 관련된 위치입니다.
`alert` |`object` | 이벤트에 관련된 [`secret scanning alert`](/rest/reference/secret-scanning#get-a-secret-scanning-alert)입니다.
