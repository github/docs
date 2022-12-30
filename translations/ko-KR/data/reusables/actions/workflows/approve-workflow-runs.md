---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163827"
---
리포지토리에 대한 쓰기 권한이 있는 유지 관리자는 다음 프로시저를 사용하여 승인이 필요한 기여자의 끌어오기 요청에 대한 워크플로를 검토하고 실행할 수 있습니다.

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. 끌어오기 요청에서 제안된 변경 내용을 검사하고 끌어오기 요청 분기에서 워크플로를 실행하는 것이 익숙한지 확인합니다. 특히 워크플로 파일에 영향을 주는 `.github/workflows/` 디렉터리의 제안된 변경 내용에 유의해야 합니다.
1. 끌어오기 요청 분기에서 워크플로를 실행하는 데 익숙한 경우 {% octicon "comment-discussion" aria-label="The discussion icon" %} **대화** 탭으로 돌아가서 “승인을 기다리는 워크플로”에서 **승인 및 실행** 을 클릭합니다.

   ![워크플로 승인 및 실행](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)