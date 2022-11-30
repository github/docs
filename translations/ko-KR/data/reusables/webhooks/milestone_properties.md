---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145088990"
---
키 | 형식 | 설명
----|------|-------------
`action` |`string` | 수행된 작업입니다. `created`, `closed`, `opened`(닫힌 마일스톤이 다시 열림), `edited` 또는 `deleted` 중 하나일 수 있습니다.
`milestone`  |`object` | 마일스톤 자체입니다.
`changes`|`object`| 작업이 `edited`인 경우 마일스톤에 대한 변경 사항입니다.
`changes[description][from]`|`string` | 작업이 `edited`인 경우 설명의 이전 버전입니다.
`changes[due_on][from]`|`string` | 작업이 `edited`인 경우 기한의 이전 버전입니다.
`changes[title][from]`|`string` | 작업이 `edited`인 경우 제목의 이전 버전입니다.
