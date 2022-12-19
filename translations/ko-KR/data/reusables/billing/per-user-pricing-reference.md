---
ms.openlocfilehash: c8432b756590deab759f023a78453a482b8091fd
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145113607"
---
사용자별 가격 책정을 통해 각 사용자는 하나의 라이선스를 사용합니다. {% data variables.product.company_short %}는 기본 이메일 주소로 개인을 식별합니다.

{% data variables.product.company_short %}는 다음 사용자에 대해 요금을 청구합니다.

{%- ifversion ghec %}
- 엔터프라이즈에서 하나 이상의 조직의 멤버 또는 소유자인 Enterprise 소유자 {%- endif %}
- 소유자를 포함한 조직 멤버
- 조직이 소유한 프라이빗{% ifversion ghec %} 또는 내부{% endif %} 리포지토리의 외부 협력자(포크 제외)
- 조직 소유자 또는 멤버가 되기 위해 보류 중인 초대를 가진 모든 사람
- 조직 소유의 프라이빗{% ifversion ghec %} 또는 내부{% endif %} 리포지토리에서 외부 협력자가 되도록 보류 중인 초대가 있는 모든 사람(포크 제외) {%- ifversion ghec %}
- 배포하는 모든 {% data variables.product.prodname_ghe_server %} 인스턴스의 각 사용자 {% endif %}

{% data variables.product.company_short %}는 다음 사용자에 대해 요금을 청구하지 않습니다.

{%- ifversion ghec %}
- 엔터프라이즈에서 하나 이상의 조직의 멤버 또는 소유자가 아닌 Enterprise 소유자
- Enterprise 청구 관리자 {%- endif %}
- {% data variables.product.prodname_ghe_cloud %}의 개별 조직에 대한 조직 청구 관리자{% ifversion ghec %}{% endif %}
- {% ifversion ghec %} 엔터프라이즈 또는{% endif %} 조직 청구 관리자가 되기 위해 보류 중인 초대를 가진 사람
- 조직 소유의 퍼블릭 리포지토리에서 외부 협력자가 되도록 보류 중인 초대가 있는 모든 사용자

{% note %}

**참고**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}
