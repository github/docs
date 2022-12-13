---
title: GitHub Codespaces 관련 지출 한도 관리
intro: 조직에서 {% data variables.product.prodname_github_codespaces %} 사용량에 대한 지출 한도를 설정할 수 있습니다.
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
redirect_from:
- /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
ms.openlocfilehash: e9765c3aa4d02e0246a420532d93c6d4bbac4fcf
ms.sourcegitcommit: f21fd2e4622528489b02916e5faa5c1fc2d51a87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/13/2022
ms.locfileid: "148045118"
---
## {% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 정보

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

{% data reusables.codespaces.codespaces-monthly-billing %} 

지출 한도에 도달하면 조직 또는 리포지토리에서 더 이상 새 codespace를 만들 수 없으며 기존 codespace를 시작할 수 없습니다. 계속 실행 중인 기존 codespace는 종료되지 않습니다. 지출 한도를 변경하지 않으면 한도를 초과한 양에 대한 요금이 부과되지 않습니다.

{% 데이터 variables.product.prodname_github_codespaces %} 사용량에 대한 가격 책정에 대한 자세한 내용은 "[{% 데이터 variables.product.prodname_github_codespaces %}에 대한 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)"를 참조하세요.

{% ifversion ghec %}
## Azure 구독 사용
Microsoft 기업계약 통해 {% 데이터 variables.product.prodname_enterprise %}을(를) 구매한 경우 Azure 구독 ID를 엔터프라이즈 계정에 연결하여 {% 데이터 variables.product.prodname_github_codespaces %} 사용량을 사용하도록 설정하고 결제할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

## {% data variables.product.prodname_codespaces %}에 대한 조직의 지출 한도 관리

조직 소유자 및 청구 관리자는 조직의 {% 데이터 variables.product.prodname_github_codespaces %}에 대한 지출 한도를 관리할 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## {% data variables.product.prodname_codespaces %}에 대한 엔터프라이즈 계정의 지출 한도 관리

엔터프라이즈 소유자 및 청구 관리자는 엔터프라이즈 계정의 {% 데이터 variables.product.prodname_github_codespaces %}에 대한 지출 한도를 관리할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **지출 한도를** 클릭합니다.
  ![지출 한도 탭](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 지출 한도에 도달한 경우 변경 내용 내보내기

{% data reusables.codespaces.exporting-changes %}
## 사용량 및 지출 한도 메일 알림 관리

지출이 계정 지출 한도의 50%, 75%, 90%, 100%에 도달하면 계정 소유자와 청구 관리자에게 메일 알림이 전송됩니다. 

언제든지 **지출 한도** 페이지 맨 아래로 이동하여 알림을 사용하지 않도록 설정할 수 있습니다.

![청구 메일 알림 설정 스크린샷](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## 추가 참고 자료

- “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
- "[조직에서 {% 데이터 variables.product.prodname_github_codespaces %}의 비용 관리](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
