---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145087535"
---
키 | 형식 | 설명
----|------|-------------
`action` | `string` | 수행된 작업입니다. `created`, `reopened_by_user`, `closed_by_user`, `fixed`, `appeared_in_branch`, `reopened` 중 하나일 수 있습니다.
`alert` | `object` | 이벤트에 관련된 코드 검사 경고입니다.
`ref` | `string` | 코드 검사 경고의 Git 참조입니다. 작업이 `reopened_by_user` 또는 `closed_by_user`인 경우 이벤트가 `sender`에 의해 트리거되었으며 이 값은 비어 있습니다.
`commit_oid` | `string` | 코드 검사 경고의 커밋 SHA입니다. 작업이 `reopened_by_user` 또는 `closed_by_user`인 경우 이벤트가 `sender`에 의해 트리거되었으며 이 값은 비어 있습니다.
