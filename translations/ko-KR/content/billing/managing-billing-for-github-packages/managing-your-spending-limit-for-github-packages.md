---
title: GitHub Packages에 대한 지출 한도 관리
intro: '{% data variables.product.prodname_registry %} 사용량에 대한 지출 한도를 설정할 수 있습니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Packages
  - Spending limits
  - User account
shortTitle: Your spending limit
ms.openlocfilehash: 0919283804124e2e925793dd3d4969b80f46ed30
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884151'
---
## {% data variables.product.prodname_registry %}에 대한 지출 한도 정보

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} {% data variables.product.prodname_registry %} 사용량의 가격 책정에 대한 자세한 내용은 “[{% data variables.product.prodname_registry %}에 대한 청구 정보](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”를 참조하세요.

{% ifversion ghec %} Microsoft 기업계약을 통해 {% data variables.product.prodname_enterprise %}를 구매한 경우 Azure 구독 ID를 엔터프라이즈 계정에 연결하여 계정에 포함된 금액을 초과하는 {% data variables.product.prodname_registry %} 사용량을 사용하고 비용을 지불할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

$0 이외의 지출 한도를 설정하는 즉시 현재 청구 기간의 기존 초과분에 대한 책임이 있습니다. 예를 들어 조직에서 {% data variables.product.prodname_team %}을 사용하고 초과분을 허용하지 않으며 한 달 동안 스토리지 사용량을 1.9GB에서 2.1GB로 늘리는 새 버전의 프라이빗 패키지를 게시하는 경우 버전을 게시하면 제품에 포함된 2GB보다 약간 더 많이 사용됩니다.

초과분 사용을 설정하지 않았으므로 패키지 버전을 게시하려는 다음 시도가 실패합니다. 해당 달에 0.1GB 초과분에 대한 청구서를 받지 않습니다. 그러나 초과분을 사용하도록 설정하는 경우 첫 번째 청구서에는 현재 청구 기간의 기존 초과분 0.1GB와 누적된 추가 초과분이 포함됩니다.

## 개인 계정의 {% data variables.product.prodname_registry %}에 대한 지출 한도 관리

누구나 자신의 개인 계정의 {% data variables.product.prodname_registry %}에 대한 지출 한도를 관리할 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## 조직의 {% data variables.product.prodname_registry %}에 대한 지출 한도 관리

조직 소유자 및 청구 관리자는 조직의 {% data variables.product.prodname_registry %}에 대한 지출 한도를 관리할 수 있습니다.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## 엔터프라이즈 계정의 {% data variables.product.prodname_registry %}에 대한 지출 한도 관리

Enterprise 소유자 및 청구 관리자는 엔터프라이즈 계정의 {% data variables.product.prodname_registry %}에 대한 지출 한도를 관리할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. “{% data variables.product.prodname_actions %} 및 패키지 월별 사용량” 위에서 **Spending Limit**(지출 한도)을 클릭합니다.
  ![지출 한도 탭](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 사용량 및 지출 한도 메일 알림 관리
{% data reusables.billing.email-notifications %}
