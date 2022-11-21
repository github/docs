---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878574"
---
키 | 형식 | 설명
----|------|-------------
`action`|`string` | 프로젝트에서 수행된 작업입니다. `created`, `edited`, `closed`, `reopened` 또는 `deleted` 중 하나일 수 있습니다.
`changes`|`object` | 작업이 `edited`인 경우 프로젝트에 대한 변경 사항입니다.
`changes[name][from]` |`string` | 작업이 `edited`인 경우 이전 버전의 이름입니다.
`changes[body][from]` |`string` | 작업이 `edited`인 경우 이전 버전의 본문입니다.
`project`|`object` | [프로젝트](/rest/reference/projects)입니다.
