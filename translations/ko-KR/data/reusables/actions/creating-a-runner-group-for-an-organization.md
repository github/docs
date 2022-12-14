---
ms.openlocfilehash: b62a0e5829c03ff7879fda2d714c4a7652d762b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109672"
---
{% comment %} 

항상 이 절차 위에 보안 경고를 포함하세요. 컨텍스트가 자체 호스팅 실행기인지 아니면 더 큰 실행기인지에 따라 다음 중 하나에 해당합니다.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

모든 조직에는 단일 기본 실행기 그룹이 있습니다. 엔터프라이즈 계정 내의 조직은 그룹을 추가로 만들 수 있습니다. 조직 관리자는 실행기 그룹에 대한 개별 리포지토리 액세스를 허용할 수 있습니다. REST API를 사용하여 실행기 그룹을 만드는 방법에 대한 자세한 내용은 “[자체 호스트된 실행기 그룹](/rest/reference/actions#self-hosted-runner-groups)”을 참조하세요.

실행기는 생성될 때 기본 그룹에 자동으로 할당되며 한 번에 한 그룹의 구성원만 될 수 있습니다. 실행기를 기본 그룹에서 사용자가 만든 모든 그룹으로 이동할 수 있습니다.

그룹을 만들 때 리포지토리{% ifversion restrict-groups-to-workflows %} 및 워크플로{% endif %}가 실행기 그룹에 액세스할 수 있게 정의하는 정책을 선택해야 합니다.

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. “실행기 그룹” 섹션에서 **새 실행기 그룹** 을 클릭합니다.
1. 실행기 그룹의 이름을 입력합니다.
 {% data reusables.actions.runner-group-assign-policy-repo %} {% data reusables.actions.runner-group-assign-policy-workflow %} {%- ifversion restrict-groups-to-workflows %} 조직 소유 실행기 그룹은 엔터프라이즈의 다른 조직에서 워크플로에 액세스할 수 없습니다. 대신 엔터프라이즈 소유 실행기 그룹을 만들어야 합니다. {% endif %} {% data reusables.actions.create-runner-group %} {% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. {% ifversion ghes or ghae %}“실행기”{% endif %}에서 **새로 추가** 를 클릭한 다음 **새 그룹** 을 클릭합니다.

    ![실행기 그룹 추가](/assets/images/help/settings/actions-org-add-runner-group.png)
1. 실행기 그룹의 이름을 입력하고 리포지토리 액세스에 대한 정책을 할당합니다.

   특정 리포지토리 목록 또는 조직의 모든 리포지토리에 액세스할 수 있도록 실행기 그룹을 구성할 수 있습니다.{% ifversion ghec or ghes %} 기본적으로 프라이빗 리포지토리만 실행기 그룹의 실행기에 액세스할 수 있지만 이를 재정의할 수 있습니다. 엔터프라이즈에서 공유한 조직의 실행기 그룹을 구성하는 경우 이 설정을 재정의할 수 없습니다.{% endif %}
   
   ![실행기 그룹 옵션 추가](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. **그룹 저장** 을 클릭하여 그룹을 만들고 정책을 적용합니다.
{% endif %}
