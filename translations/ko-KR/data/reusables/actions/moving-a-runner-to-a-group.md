---
ms.openlocfilehash: 81cfff3e9391616c64b73a3d7fc3d180e6760502
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109753"
---
등록 프로세스 중에 실행기 그룹을 지정하지 않으면 새 실행기는 기본 그룹에 자동으로 할당된 다음 다른 그룹으로 이동할 수 있습니다.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. “실행기” 목록에서 구성하려는 실행기를 클릭합니다.
2. **실행기 그룹** 드롭다운을 선택합니다.
3. “그룹으로 실행기 이동”에서 실행기의 대상 그룹을 선택합니다.
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. 설정 페이지의 {% ifversion ghes or ghae %}“실행기 그룹”{% endif %} 섹션에서 이동하려는 실행기의 현재 그룹을 찾아 그룹 구성원 목록을 확장합니다.
    ![실행기 그룹 구성원 보기](/assets/images/help/settings/actions-org-runner-group-members.png)
2. 자체 호스트된 실행기 옆의 확인란을 선택한 다음 **그룹으로 이동** 을 클릭하여 이동 가능한 대상을 확인합니다.
    ![실행기 그룹 구성원 이동](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. 실행기를 이동하려면 대상 그룹을 클릭합니다.
    ![실행기 그룹 구성원 이동](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}
