---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008731"
---
`number`|`integer` | 끌어오기 요청 번호입니다.
`changes`|`object`| 작업이 `edited`인 경우 커밋에 대한 변경 내용입니다.
`changes[title][from]`|`string` | 작업이 `edited`인 경우 제목의 이전 버전입니다.
`changes[body][from]`|`string` | 작업이 `edited`인 경우 본문의 이전 버전입니다.
`pull_request`|`object` | [끌어오기 요청](/rest/reference/pulls) 자체입니다. {% ifversion fpt or ghec %} `reason`|`string` | 작업이 `dequeued`.{ 인 경우 병합 큐에서 끌어오기 요청이 제거된 이유 % endif %}
