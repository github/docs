---
ms.openlocfilehash: f49d42aa3fafbdbde2a650f84bc3b48a61e26182
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764244"
---
{% comment %} 

항상 이 절차 위에 보안 경고를 포함하세요. 컨텍스트가 자체 호스팅 실행기인지 아니면 더 큰 실행기인지에 따라 다음 중 하나에 해당합니다.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

엔터프라이즈는 액세스 관리를 위해 실행기를 그룹에 추가할 수 있습니다. 엔터프라이즈는 엔터프라이즈 계정의 특정 조직{% ifversion restrict-groups-to-workflows %} 또는 특정 워크플로{% endif %}에 액세스할 수 있는 실행기 그룹을 만들 수 있습니다. 조직 소유자는 엔터프라이즈 실행기 그룹에 추가 세분화된 리포지토리{% ifversion restrict-groups-to-workflows %} 또는 워크플로{% endif %} 액세스 정책을 할당할 수 있습니다. REST API를 사용하여 실행기 그룹을 만드는 방법에 대한 자세한 내용은 [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups)의 엔터프라이즈 엔드포인트를 참조하세요.

실행기는 생성될 때 기본 그룹에 자동으로 할당되며 한 번에 한 그룹의 구성원만 될 수 있습니다. 등록 프로세스 중에 특정 그룹에 실행기를 할당하거나 나중에 실행기를 기본 그룹에서 사용자 지정 그룹으로 이동할 수 있습니다.

그룹을 만들 때 실행기 그룹에 액세스할 수 있는 조직을 정의하는 정책을 선택해야 합니다.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. 조직 액세스에 대한 정책을 선택하려면 **조직 액세스** 드롭다운을 선택하고 정책을 클릭합니다. 특정 조직 목록 또는 엔터프라이즈의 모든 조직에 액세스할 수 있도록 실행기 그룹을 구성할 수 있습니다.{% ifversion ghes %} 기본적으로 프라이빗 리포지토리만 실행기 그룹의 실행기에 액세스할 수 있지만 이를 재정의할 수 있습니다.{% endif %}

   {%- ifversion ghec or ghes %}

   ![실행기 그룹 옵션 추가](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png) {%- elsif ghae %}

   ![실행기 그룹 옵션 추가](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png) {%- endif %} {% data reusables.actions.runner-group-assign-policy-workflow %}
1. **그룹 저장** 을 클릭하여 그룹을 만들고 정책을 적용합니다.

