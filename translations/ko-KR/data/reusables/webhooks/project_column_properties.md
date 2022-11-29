---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088950"
---
키 | 형식 | 설명
----|------|-------------
`action`|`string` | 프로젝트 열에서 수행된 작업입니다. `created`, `edited`, `moved` 또는 `deleted` 중 하나일 수 있습니다.
`changes`|`object` | 작업이 `edited`인 경우 프로젝트 열에 대한 변경 사항입니다.
`changes[name][from]` |`string` | 작업이 `edited`인 경우 이전 버전의 이름입니다.
`after_id`|`integer` | 작업이 “이동”된 경우 현재 이 열에서 팔로우하는 열의 ID입니다. 프로젝트의 첫 번째 열인 경우 `null`입니다.
`project_column`|`object` | [프로젝트 열](/rest/reference/projects#columns)입니다.
