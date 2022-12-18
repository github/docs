---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107575"
---
{% note %}

**참고**: 현재 일부 기능은 {% data variables.product.pat_v1_plural %}에서만 작동합니다.

- {% data variables.product.pat_v1_plural %}만 사용자 또는 사용자가 구성원이 아닌 조직이 소유하지 않은 공용 리포지토리에 대한 쓰기 권한이 있습니다. {% ifversion ghec or ghes or ghae %}
- {% data variables.product.pat_v1_plural %}만 엔터프라이즈가 소유한 내부 리포지토리에 대한 쓰기 권한이 자동으로 부여됩니다. {% data variables.product.pat_v2_caps %}s은(는) 내부 리포지토리에 대한 액세스 권한을 부여해야 합니다. {% endif %}
- 외부 협력자는 {% data variables.product.pat_v1_plural %}만 사용하여 공동 작업자인 조직 리포지토리에 액세스할 수 있습니다. {% ifversion ghec or ghes or ghae %}
- {% data variables.product.pat_v1_plural %}만 엔터프라이즈에 액세스할 수 있습니다. ({% data variables.product.pat_v2_caps %}은(는) 엔터프라이즈가 소유한 조직에 액세스할 수 있습니다.) {% endif %}
- 다음 API는 {% data variables.product.pat_v1_plural %}만 지원합니다. {% data variables.product.pat_v2 %}에 대해 지원되는 REST API 작업 목록은 "[{% data variables.product.pat_v2 %}s에 사용할 수 있는 엔드포인트"를](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens) 참조하세요.
  - GraphQL API{% ifversion ghec or ghes or ghae %}
  - 엔터프라이즈 관리자를 위한 REST API{% endif %}{% ifversion ghec 또는 fpt %}
  - 원본 가져오기를 관리하는 REST API{% endif %}
  - {% data variables.product.prodname_projects_v1_caps %}을(를) 관리하는 REST API
  - {% data variables.product.prodname_registry %}을(를) 관리하는 REST API
  - 알림을 관리하는 REST API
  - 리포지토리를 전송하는 REST API
  - 템플릿에서 리포지토리를 만드는 REST API
  - REST API를 사용하여 인증된 사용자에 대한 리포지토리 만들기

{% endnote %}
