---
ms.openlocfilehash: 6b8d3bb77c6a40a43ab22ffd0e60e61cd049fa61
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879025"
---
키 | 형식 | 설명
----|------|------------
`action` | `string` | 수행된 작업입니다. 다음 중 하나일 수 있습니다.<ul><li>`submitted` - 끌어오기 요청 검토가 보류 중이 아닌 상태로 제출됩니다.</li><li>`edited` - 검토 본문이 편집되었습니다.</li><li>`dismissed` - 검토가 해제되었습니다.</li></ul>
`pull_request` | `object` | 검토와 관련된 [끌어오기 요청](/rest/reference/pulls)입니다.
`review` | `object` | 영향을 받은 검토입니다.
`changes[body][from]`|`string` | 작업이 `edited`인 경우 이전 버전의 본문입니다.
