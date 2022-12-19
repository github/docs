---
title: 엔터프라이즈에서 GitHub Copilot에 대한 정책 적용
intro: '엔터프라이즈 조직 내에서 {% data variables.product.prodname_copilot_for_business %}에 대한 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193438'
---
## 엔터프라이즈의 {% data variables.product.prodname_copilot %}에 대한 정책 정보

{% data reusables.copilot.about-copilot %}

엔터프라이즈 조직 내에서 {% data variables.product.prodname_copilot_for_business %}에 대한 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다. 

{% data variables.product.prodname_copilot_for_business %}에 대한 구독을 설정한 경우 엔터프라이즈 내 조직에 대해 {% data variables.product.prodname_copilot %}에 대한 액세스 권한을 부여하고 취소할 수 있습니다. 조직에 {% data variables.product.prodname_copilot %}에 대한 액세스 권한을 부여하면 해당 조직의 관리자는 개인 및 팀에 대한 액세스 권한을 부여할 수 있습니다. 자세한 내용은 "[조직에서 {% data variables.product.prodname_copilot %} 설정 구성"을 참조하세요](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization).

{% data variables.product.prodname_copilot_for_business %} 구독은 엔터프라이즈 내 사용자에게 할당된 {% data variables.product.prodname_copilot %} 사용자 수에 따라 매월 청구됩니다. 자세한 내용은 "[{% data variables.product.prodname_copilot %} {% data variables.product.prodname_ghe_cloud %}에 대한 가격 책정](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud)"을 참조하세요.

{% data variables.product.prodname_copilot %}에는 {% data variables.product.prodname_dotcom %}에서 퍼블릭 코드와 일치하는 코드 제안을 검색하는 필터가 포함되어 있습니다. {% data variables.product.prodname_copilot_for_business %}를 사용하면 엔터프라이즈 수준에서 필터를 사용하거나 사용하지 않도록 설정할지 또는 조직 관리자가 조직 수준에서 결정할 수 있는지 선택할 수 있습니다. 필터를 사용하도록 설정하면 {% data variables.product.prodname_copilot %}은 {% data variables.product.prodname_dotcom %}의 퍼블릭 코드에 대해 약 150자의 주변 코드로 코드 제안을 확인합니다. 일치 항목 또는 근접 일치 항목이 있는 경우 제안이 표시되지 않습니다.

## 엔터프라이즈에서 {% data variables.product.prodname_copilot_for_business %}의 사용을 관리하는 정책 적용 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. "{% data variables.product.prodname_copilot %}에 대한 조직 액세스 관리"에서 {% data variables.product.prodname_copilot %} 구독에 대한 액세스를 구성합니다. 
    - 엔터프라이즈의 모든 조직에 대해 {% data variables.product.prodname_copilot %}을(를) 사용하지 않도록 설정하려면 **사용 안** 함을 선택합니다.
    - 현재와 미래의 엔터프라이즈의 모든 조직에 대해 {% data variables.product.prodname_copilot %}을(를) 사용하도록 설정하려면 **모든 조직에 대해 허용을** 선택합니다.
    - 특정 조직에 대해 {% data variables.product.prodname_copilot %}을(를) 사용하도록 설정하려면 **특정 조직에 대해 허용을** 선택합니다.
    
    ![{% data variables.product.prodname_copilot %} 조직 액세스 설정의 스크린샷](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. **특정 조직에 대해 허용** 을 선택한 경우 {% data variables.product.prodname_copilot %}을(를) 사용하도록 설정할 조직을 선택합니다. 또는 {% data variables.product.prodname_copilot %} 액세스를 사용하지 않도록 설정할 조직을 선택할 수 있습니다.
    - **조직 권한 설정을** 클릭하고 **사용** 또는 **사용 안 함을** 선택하여 지정된 조직에 대한 {% data variables.product.prodname_copilot %} 액세스 권한을 부여하거나 거부합니다.

    ![{% data variables.product.prodname_copilot %} 조직 사용 권한 사용 또는 사용 안 함 설정 스크린샷](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. **변경 내용 저장** 을 클릭합니다.
  
   ![{% data variables.product.prodname_copilot %} 조직 권한 저장 스크린샷](/assets/images/help/copilot/save-org-settings-enterprise.png)

## 엔터프라이즈의 공용 코드와 일치하는 {% data variables.product.prodname_copilot %} 제안의 사용을 관리하는 정책 적용

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. "공용 코드와 일치하는 제안"에서 드롭다운 메뉴를 클릭하고 적용할 정책을 선택합니다.
    - 공용 코드와 일치하는 {% data variables.product.prodname_copilot %} 제안을 허용하려면 **허용을** 선택합니다.
    - 공용 코드와 일치하는 {% data variables.product.prodname_copilot %} 제안을 차단하려면 **차단을** 선택합니다.
    - 각 조직에서 공용 코드와 일치하는 {% data variables.product.prodname_copilot %} 제안 사용에 대한 자체 정책을 설정할 수 있도록 허용하려면 **정책 없음(각 조직에서 결정하도록 허용)을** 선택합니다.
    
    ![공용 코드 설정과 일치하는 {% data variables.product.prodname_copilot %} 제안 스크린샷](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## 추가 정보

- "[{% data variables.product.prodname_copilot_for_business %} 개인정보처리방침](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"
