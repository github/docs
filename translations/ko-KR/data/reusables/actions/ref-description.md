---
ms.openlocfilehash: b4949218acc89828772bf2bea3998dfde3a10e95
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079964"
---
워크플로 실행을 트리거한 분기 또는 태그 이름입니다. `push`에 의해 트리거된 워크플로의 경우 푸시된 분기 또는 태그 참조입니다. `pull_request`에 의해 트리거된 워크플로의 경우 끌어오기 요청 병합 분기입니다. `release`에 의해 트리거된 워크플로의 경우 생성된 릴리스 태그입니다. 다른 트리거의 경우 워크플로 실행을 트리거한 분기 또는 태그 참조입니다. 이벤트 유형에 대해 분기 또는 태그를 사용할 수 있는 경우에만 설정됩니다. 지정된 참조는 완전한 형식을 가집니다. 즉, 분기의 경우 `refs/heads/<branch_name>`, 끌어오기 요청의 경우 `refs/pull/<pr_number>/merge`, 태그의 경우 `refs/tags/<tag_name>` 형식을 따릅니다. 예들 들어 `refs/heads/feature-branch-1`입니다.
