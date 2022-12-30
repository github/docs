---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008728"
---
키 | Type | 설명
----|------|-------------
`action`|`string` | 수행된 작업입니다. 다음 중 하나일 수 있습니다.<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: 작업이 `closed`이고 `merged` 키가 `false`인 경우 끌어오기 요청이 닫히고 커밋이 병합되지 않았습니다. 작업이 `closed`이고 `merged` 키가 `true`인 경우 끌어오기 요청이 병합됩니다.</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued`: 끌어오기 요청이 병합 큐에서 제거될 때 트리거됩니다.</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued`: 끌어오기 요청이 병합 큐에 추가될 때 트리거됩니다.</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: 끌어오기 요청의 헤드 분기가 업데이트될 때 트리거됩니다. 기본 분기에서 헤드 분기가 업데이트되는 경우, 새 커밋이 헤드 분기로 푸시되는 경우 또는 기본 분기가 변경되는 경우를 예로 들 수 있습니다.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
