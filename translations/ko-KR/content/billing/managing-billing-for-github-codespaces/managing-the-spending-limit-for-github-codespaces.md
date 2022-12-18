---
title: GitHub Codespaces에 대한 지출 한도 관리
intro: '조직에서 {% data variables.product.prodname_github_codespaces %} 사용량에 대한 지출 한도를 설정할 수 있습니다.'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160298'
---
## {% data variables.product.prodname_github_codespaces %} 지출 한도 정보

{% data reusables.codespaces.codespaces-free-for-personal-intro %} 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

지출 한도에 도달하면 더 이상 새 codespace를 만들 수 없으며 기존 codespace를 시작할 수 없습니다. 여전히 실행 중인 기존 codespace는 짧은 시간 안에 종료되지만 지출 한도에 도달한 후에는 사용 요금이 청구되지 않습니다.

{% ifversion ghec %}
## Azure 구독 사용
Microsoft 기업계약 통해 {% data variables.product.prodname_enterprise %}을(를) 구매한 경우 Azure 구독 ID를 엔터프라이즈 계정에 연결하여 {% data variables.product.prodname_github_codespaces %} 사용량을 사용하도록 설정하고 지불할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

## 개인 계정에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 지출 한도 관리

자신의 개인 계정에 대한 {% data variables.product.prodname_github_codespaces %}에 대한 지출 한도를 설정할 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## 조직 계정에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 지출 한도 관리

조직 소유자 및 청구 관리자는 조직의 {% data variables.product.prodname_github_codespaces %}에 대한 지출 한도를 관리할 수 있습니다.

{% note %}

**참고**: 엔터프라이즈 계정이 소유한 조직은 엔터프라이즈 설정에 지정된 대로 자체 지출 한도를 지정할 수 없습니다.

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## 엔터프라이즈 계정에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 지출 한도 관리

엔터프라이즈 소유자 및 청구 관리자는 엔터프라이즈 계정의 {% data variables.product.prodname_github_codespaces %}에 대한 지출 한도를 관리할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **지출 한도를** 클릭합니다.

   ![지출 한도 탭](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 지출 한도에 도달한 경우 변경 내용 내보내기

{% data reusables.codespaces.exporting-changes %}

## 사용량 및 지출 한도 메일 알림 관리

Email 알림은 지출이 계정 지출 한도의 75%, 90%, 100%에 도달하면 계정 소유자 및 청구 관리자에게 전송됩니다. 

"청구 & 플랜/월별 지출 한도" 페이지의 맨 아래로 이동하고 **지출 한도 경고** 확인란을 선택 취소하여 언제든지 이러한 알림을 끌 수 있습니다.

개인 계정의 경우에만 개인 계정에 포함된 무료 사용량의 75%, 90%, 100%를 사용했을 때 전송되는 이메일 알림을 끄도록 선택할 수 있습니다. 이렇게 하려면 **포함된 리소스 경고** 확인란의 선택을 취소합니다.

![청구 메일 알림 설정 스크린샷](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## 추가 참고 자료

- “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
- "[조직에서 {% data variables.product.prodname_github_codespaces %}의 비용 관리](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
