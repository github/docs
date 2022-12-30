---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147080978"
---
이름 | Type | 설명
-----|------|--------------
`id` | `integer` | 이벤트의 고유한 식별자입니다.
`node_id` | `string` | 이벤트의 [전역 노드 ID](/graphql/guides/using-global-node-ids)입니다.
`url`| `string` | 이벤트를 가져오기 위한 REST API URL입니다.
`actor` | `object`| 이벤트를 생성한 사람입니다.
`event` | `string` | 발생한 이벤트의 실제 유형을 식별합니다.
`commit_id` | `string` | 이 문제를 참조한 커밋의 SHA입니다.
`commit_url` | `string` | 이 문제를 참조한 커밋에 대한 GitHub REST API 링크입니다.
`created_at` | `string` | 이벤트가 발생한 시기를 나타내는 타임스탬프입니다.
