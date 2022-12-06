---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145088953"
---
키 | 형식 | 설명
----|------|-------------
`action`|`string` | 프로젝트 카드에서 수행한 작업입니다. `created`, `edited`, `moved`, `converted` 또는 `deleted`일 수 있습니다.
`changes`|`object` | 작업이 `edited` 또는 `converted`인 경우 프로젝트 카드에 대한 변경 사항입니다.
`changes[note][from]` |`string` | 작업이 `edited` 또는 `converted`인 경우 메모의 이전 버전입니다.
`after_id`|`integer` | 작업이 “이동”된 경우 카드가 팔로우하는 카드의 ID입니다. 열의 첫 번째 카드인 경우 `null`입니다.
`project_card`|`object` | [프로젝트 카드](/rest/reference/projects#cards) 자체입니다.
