---
ms.openlocfilehash: 19ffef89b0f09653fc396f4cfc99e47e2162548b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109071"
---
{% comment %} 

항상 이 절차 위에 보안 경고를 포함하세요. 컨텍스트가 자체 호스팅 실행기인지 아니면 더 큰 실행기인지에 따라 다음 중 하나에 해당합니다.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

엔터프라이즈의 실행기 그룹의 경우 엔터프라이즈의 조직에서 실행기 그룹에 액세스할 수 있는 항목을 변경{% ifversion restrict-groups-to-workflows %}하거나 실행기 그룹에서 실행할 수 있는 워크플로를 제한{% endif %}할 수 있습니다. 조직의 실행기 그룹의 경우 조직에서 실행기 그룹에 액세스할 수 있는 리포지토리를 변경{% ifversion restrict-groups-to-workflows %}하거나 실행기 그룹에서 실행할 수 있는 워크플로를 제한{% endif %}할 수 있습니다.

### 실행기 그룹에 액세스할 수 있는 조직 또는 리포지토리 변경

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. 엔터프라이즈의 실행기 그룹의 경우 **조직 액세스** 에서 실행기 그룹에 액세스할 수 있는 조직을 수정합니다. 조직의 실행기 그룹의 경우 **리포지토리 액세스** 에서 실행기 그룹에 액세스할 수 있는 리포지토리를 수정합니다.

{% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.actions.configure-runner-group-access %} {% endif %}

{% ifversion restrict-groups-to-workflows %}
### 실행기 그룹에 액세스할 수 있는 워크플로 변경
선택한 워크플로 또는 모든 워크플로를 실행하도록 실행기 그룹을 구성할 수 있습니다. 예를 들어 이 설정을 사용하여 실행기에서 저장된 비밀을 보호하거나 실행기 그룹이 재사용 가능한 특정 워크플로만 실행하도록 제한하여 배포 워크플로를 표준화할 수 있습니다. 엔터프라이즈에서 공유한 조직의 실행기 그룹을 구성하는 경우 이 설정을 재정의할 수 없습니다. {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. **워크플로 액세스** 에서 드롭다운 메뉴를 선택하고 **선택한 워크플로** 를 클릭합니다.
1. {% octicon "gear" aria-label="the gear icon" %} 아이콘을 클릭합니다.
1. 실행기 그룹에 액세스할 수 있는 워크플로의 목록을 쉼표로 구분하여 입력합니다. 전체 경로를 사용합니다(리포지토리 이름 및 소유자 포함). 분기, 태그 또는 전체 SHA에 워크플로를 고정합니다. 예: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`

   선택한 워크플로 내에서 직접 정의된 작업만 실행기 그룹에 액세스할 수 있습니다.
   
   조직 소유의 실행기 그룹은 엔터프라이즈의 다른 조직에서 워크플로에 액세스할 수 없습니다. 대신 엔터프라이즈 소유 실행기 그룹을 만들어야 합니다.

1. **저장** 을 클릭합니다.

{% endif %}
