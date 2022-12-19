---
title: 엔터프라이즈의 GitHub Advanced Security 기능 관리
intro: '엔터프라이즈가 소유한 모든 조직에서 코드를 보호하고 분석하는 {% data variables.product.prodname_GH_advanced_security %} 기능을 제어할 수 있습니다.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107207'
---
## {% data variables.product.prodname_advanced_security %} 기능 관리 정보

{% data variables.product.prodname_advanced_security %} 기능을 사용하여 엔터프라이즈 조직의 보안을 강화할 수 있습니다. {% data variables.product.prodname_advanced_security %}의 관리를 간소화하려면 엔터프라이즈가 소유한 조직 내의 모든 기존 및/또는 새 리포지토리에 대해 각 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.

{% ifversion ghes or ghec %} {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스를 구입하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_GH_advanced_security %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security). {% elsif ghae %} 베타 릴리스 중에 {% data variables.product.prodname_ghe_managed %}에서 {% data variables.product.prodname_GH_advanced_security %}에 대한 요금은 부과되지 않습니다. {% endif %}

조직에 대해 {% data variables.product.prodname_GH_advanced_security %}을(를) 허용하지 않은 경우 해당 조직은 모든 기존 리포지토리 또는 모든 새 리포지토리에 기능을 사용하도록 설정하여 영향을 받지 않습니다. 조직에 {% data variables.product.prodname_GH_advanced_security %}을(를) 허용하지 않는 방법에 대한 자세한 내용은 "[엔터프라이즈에서 고급 보안에 대한 정책 적용"을 참조하세요](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

기존 리포지토리에 대해 하나 이상의 보안 및 분석 기능을 사용하도록 설정하면 몇 분 내에 {% data variables.product.prodname_dotcom %}에 결과가 표시됩니다.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## {% data variables.product.prodname_advanced_security %} 기능 관리

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 왼쪽 사이드바에서 **코드 보안 & 분석을** 클릭합니다. 
1. 필요에 따라 모든 기존 리포지토리에 대해 기능을 사용하거나 사용하지 않도록 설정합니다.

   - 기능 오른쪽에서 **모두 사용 안 함** 또는 **모두 사용을** 클릭합니다. {% ifversion ghes or ghec %} "{% data variables.product.prodname_GH_advanced_security %}"에 대한 컨트롤을 사용할 수 없는 경우 {% data variables.product.prodname_GH_advanced_security %} 라이선스에 사용 가능한 사용자가 없습니다. {% endif %}
   
   !["보안 및 분석 구성" 기능에 대한 "모두 사용" 또는 "모두 사용 안 함" 단추의 스크린샷](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - 변경 내용을 확인하려면 **모두 사용/사용 안 함** 또는 **적격 리포지토리에 대해 사용/사용 안 함을** 클릭합니다.
   
     ![조직의 모든 적격 리포지토리에 기능을 사용하도록 설정하는 단추의 스크린샷](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. 필요에 따라 새 리포지토리가 추가되면 기능을 자동으로 사용하거나 사용하지 않도록 설정하려면 기능 아래의 확인란을 선택합니다.
   
   ![새 리포지토리에 기능을 사용하도록 설정하기 위한 확인란의 스크린샷](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. 필요에 따라 멤버가 비밀을 푸시하려고 할 때 표시되는 메시지에 리소스 링크를 포함하려면 **커밋이 차단될 때 CLI 및 웹 UI에서 리소스 링크 추가** 를 선택한 다음 URL을 입력하고 **링크 저장** 을 클릭합니다.
  
  {% note %}

  **참고**: 조직에 대해 사용자 지정 링크를 구성하면 조직 수준 값이 엔터프라이즈에 대한 사용자 지정 링크 집합을 재정의합니다. 자세한 내용은 "[비밀 검사를 사용하여 푸시 보호"를 참조하세요](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

  {% endnote %}

   ![사용자 지정 링크를 사용하도록 설정하기 위한 확인란 및 텍스트 필드를 보여주는 스크린샷](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

