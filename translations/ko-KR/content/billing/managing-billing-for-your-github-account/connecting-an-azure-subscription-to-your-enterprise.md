---
title: 엔터프라이즈에 Azure 구독 연결
intro: 'Microsoft 기업계약을 사용하여 {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} 및 {% data variables.product.prodname_github_codespaces %}를 사용하도록 설정하고 해당 사용 비용을 지불할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110884'
---
## Azure 구독 및 {% data variables.product.product_name %} 정보

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 청구](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)” 정보 및 “[{% data variables.product.prodname_registry %}에 대한 청구 정보](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”를 참조하세요.

{% note %}

**참고:** 엔터프라이즈 계정에 Microsoft 기업계약이 있는 경우 Azure 구독을 연결하는 것은 포함 금액 이상의 {% data variables.product.prodname_actions %} 및 {% data variables.product.prodname_registry %}를 사용하거나 {% data variables.product.prodname_codespaces %}를 사용하는 유일한 방법입니다.

{% endnote %}

Azure 구독을 연결한 후 지출 한도를 관리할 수도 있습니다.

- "[{% data variables.product.prodname_registry %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[{% data variables.product.prodname_actions %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- "[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)"

## 엔터프라이즈 계정에 Azure 구독 연결

Azure 구독을 연결하려면 구독에 대한 소유자 권한이 있어야 합니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. “결제 정보”에서 **Azure 구독 추가** 를 클릭합니다.
1. Microsoft 계정에 로그인하려면 프롬프트를 따릅니다.
1. “요청된 권한” 프롬프트를 검토합니다. 사용 약관에 동의하면 **동의** 를 클릭합니다.
1. “구독 선택”에서 엔터프라이즈에 연결하려는 Azure 구독 ID를 선택합니다.

   {% note %}

   **참고:** {% data variables.product.company_short %}의 구독 권한 유효성 검사에서 읽기 전용 액세스를 요청하여 사용 가능한 구독 목록을 표시합니다. Azure 구독을 선택하려면 구독에 대한 소유자 권한이 있어야 합니다. 기본 테넌트에 올바른 권한이 없는 경우 다른 테넌트 ID를 지정해야 할 수 있습니다. 자세한 내용은 Microsoft Docs의 [Microsoft ID 플랫폼 및 OAuth 2.0 권한 부여 코드 흐름](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code)을 참조하세요.

   {% endnote %}
1. **연결** 을 클릭합니다.

## 엔터프라이즈 계정에서 Azure 구독 연결 끊기

엔터프라이즈 계정에서 Azure 구독의 연결을 끊은 후에는 사용량이 플랜에 포함된 금액을 더 이상 초과할 수 없습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. “Azure 구독”에서 연결을 끊으려는 구독 ID의 오른쪽에서 **{% octicon "trash" aria-label="The trash icon" %}** 을 클릭합니다.
1. 프롬프트를 검토한 다음 **제거** 를 클릭합니다.
