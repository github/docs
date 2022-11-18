---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088993"
---
키 | 형식 | 설명
----|------|-------------
`action` |`string` | 수행된 작업입니다. `added` 또는 `removed`일 수 있습니다.
`scope`  |`string` | 멤버 자격의 범위입니다. 현재는 `team`만 될 수 있습니다.
`member` |`object` | 추가되거나 제거된 [사용자](/rest/reference/users)입니다.
`team`   |`object` | 멤버 자격을 위한 [팀](/rest/reference/teams)입니다.
