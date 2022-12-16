---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145067252"
---
`issue`|`object` | [이슈](/rest/reference/issues) 자체입니다.
`changes`|`object`| 작업이 `edited`인 경우 이슈에 대한 변경 사항입니다.
`changes[title][from]`|`string` | 작업이 `edited`인 경우 제목의 이전 버전입니다.
`changes[body][from]`|`string` | 작업이 `edited`인 경우 본문의 이전 버전입니다.
`assignee`|`object` | 문제에서 할당되거나 할당되지 않은 선택적 사용자입니다.
`label`|`object` | 이슈에서 추가 또는 제거된 선택적 레이블입니다.
