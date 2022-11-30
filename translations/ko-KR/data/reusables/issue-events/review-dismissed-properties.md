---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123503"
---
`dismissed_review` | `object` | 해제된 검토에 대한 정보입니다.
`dismissed_review[state]` | `string` | 끌어오기 요청이 해제되었을 때의 상태입니다. `commented`는 `approved`, `changes_requested` 중 하나일 수 있습니다.
`dismissed_review[review_id]` | `string` | 끌어오기 요청 검토의 고유 식별자입니다.
`dismissed_review[dismissal_message]` | `string` | 검토를 해제할 때 사용자가 포함하는 메시지입니다.
`dismissed_review[dismissal_commit_id]` | `string` | 검토가 있는 경우 검토를 해제한 커밋의 고유 식별자입니다.
