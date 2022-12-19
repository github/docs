---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883774"
---
키 | 형식 | 설명
----|------|------------
`action` | `string` | 수행된 작업입니다. 다음 중 하나일 수 있습니다.<ul><li>`resolved` - 끌어오기 요청의 주석 스레드가 확인된 것으로 표시되었습니다.</li><li>`unresolved` - 끌어오기 요청의 이전에 확인된 주석 스레드가 확인되지 않은 것으로 표시되었습니다.</li></ul>
`pull_request` | `object` | 스레드와 관련된 [끌어오기 요청](/rest/reference/pulls)입니다.
`thread` | `object` | 영향을 받은 스레드입니다.
