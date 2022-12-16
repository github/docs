---
title: Codespaces에 대한 지출 한도 관리
intro: '{% data variables.product.prodname_codespaces %} 사용량에 대한 지출 한도를 설정할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Enterprise
- Organizations
- Spending limits
- User account
- Billing
shortTitle: Spending limits
ms.openlocfilehash: 340dae657304e5a2c9fb31d3a205e0b45f47a7b5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088066"
---
## <a name="about-spending-limits-for--data-variablesproductprodname_codespaces-"></a>{% data variables.product.prodname_codespaces %}에 대한 지출 한도 정보

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

지출 한도에 도달하면 조직 또는 리포지토리에서 더 이상 새 codespace를 만들 수 없으며 기존 codespace를 시작할 수 없습니다. 계속 실행 중인 기존 codespace는 종료되지 않습니다. 지출 한도를 변경하지 않으면 한도를 초과한 양에 대한 요금이 부과되지 않습니다.

{% data variables.product.prodname_codespaces %} 사용량의 가격에 대한 자세한 내용은 “[{% data variables.product.prodname_codespaces %} 요금 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)”를 참조하세요.

{% ifversion ghec %}
## <a name="using-your-azure-subscription"></a>Azure 구독 사용
Microsoft 기업계약을 통해 {% data variables.product.prodname_enterprise %}를 구매한 경우 Azure 구독 ID를 엔터프라이즈 계정에 연결하여 {% data variables.product.prodname_codespaces %} 사용량을 가능하게 하고 비용을 지불할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-organization"></a>{% data variables.product.prodname_codespaces %}에 대한 조직의 지출 한도 관리

조직 소유자와 청구 관리자는 {% data variables.product.prodname_codespaces %}에 대한 조직의 지출 한도를 관리할 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-enterprise-account"></a>{% data variables.product.prodname_codespaces %}에 대한 엔터프라이즈 계정의 지출 한도 관리

엔터프라이즈 소유자와 청구 관리자는 {% data variables.product.prodname_codespaces %}에 대한 엔터프라이즈 계정의 지출 한도를 관리할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. “{% data variables.product.prodname_codespaces %} 월별 사용량” 위에 있는 **지출 한도** 를 클릭합니다.
  ![지출 한도 탭](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>지출 한도에 도달한 경우 변경 내용 내보내기

{% data reusables.codespaces.exporting-changes %}
## <a name="managing-usage-and-spending-limit-email-notifications"></a>사용량 및 지출 한도 메일 알림 관리

지출이 계정 지출 한도의 50%, 75%, 90%, 100%에 도달하면 계정 소유자와 청구 관리자에게 메일 알림이 전송됩니다. 

언제든지 **지출 한도** 페이지 맨 아래로 이동하여 알림을 사용하지 않도록 설정할 수 있습니다.

![청구 메일 알림 설정 스크린샷](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## <a name="further-reading"></a>추가 참고 자료

- “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
- “[조직에서 Codespaces 요금 청구 관리](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)”
