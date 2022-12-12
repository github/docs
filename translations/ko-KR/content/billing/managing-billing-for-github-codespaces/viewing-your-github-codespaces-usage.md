---
title: GitHub Codespaces 사용량 확인
shortTitle: Viewing your usage
intro: '{% data variables.product.prodname_github_codespaces %}에서 사용하는 컴퓨팅 시간과 스토리지를 볼 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 67e29ee71b1881ee2ae6e9ca872fd7969f86afca
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158743'
---
## 개인 계정에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 사용량 보기

현재 월별 청구 주기에서 지금까지 사용한 개인 계정에 포함된 사용량을 확인할 수 있습니다. 결제 방법을 설정하고 지출 한도를 설정하고 포함된 모든 사용량을 사용한 경우 현재 월에 대한 청구서를 확인할 수도 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. "{% data variables.product.prodname_codespaces %}"에서 현재 청구 월에 지금까지 사용한 {% data variables.product.prodname_github_codespaces %} 컴퓨팅 사용량 및 GB 개월 스토리지의 핵심 시간을 확인할 수 있습니다.

   ![개인 사용의 초기 보기 스크린샷](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   "핵심 시간" 및 "GB 개월"에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보"를 참조하세요](/enterprise-cloud@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

1. 필요에 따라 **사용 시간** 및 **스토리지** 를 클릭하여 자세한 내용을 확인합니다.

   ![개인 사용량의 확장된 보기 스크린샷](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   **포함된** 열은 계정에 무료로 포함된 컴퓨팅 사용량의 핵심 시간 또는 GB 개월의 스토리지를 보여 줍니다. 지금까지 이번 달에 사용했습니다. **유료** 열은 사용한 청구된 코어 사용 시간 또는 GB 개월의 스토리지 수를 보여 줍니다. 수치는 1시간마다 한 번씩 업데이트됩니다.

   위의 스크린샷에서 해당 월의 포함된 스토리지의 전체 할당량이 사용되었습니다. 포함된 컴퓨팅 사용량 또는 스토리지를 모두 사용한 경우(먼저 도달한 경우) 현재 청구 월 동안 {% data variables.product.prodname_github_codespaces %}을 계속 사용하려면 결제 방법 및 지출 한도를 설정해야 합니다. 자세한 내용은 "[결제 방법 추가 또는 편집](/enterprise-cloud@latest/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)" 및 "[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리"를 참조하세요](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account).

{% data reusables.codespaces.usage-report-download %}

## 조직 계정에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 사용량 보기

조직 소유자 및 청구 관리자는 조직의 {% 데이터 variables.product.prodname_github_codespaces %} 사용량을 볼 수 있습니다.

{% data reusables.organizations.billing-settings %}
1. “{% data variables.product.prodname_codespaces %}”에서 이번 달에 지금까지 사용된 컴퓨팅 시간 및 스토리지의 세부 정보를 확인합니다.

   ![컴퓨팅 사용량 및 스토리지 세부 정보의 스크린샷](/assets/images/help/billing/codespaces-compute-storage.png)

   현재 지출 한도를 보고 업데이트할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”를 참조하세요.

   {% note %}

   **참고**: 
   * 여기에 표시된 비용은 현재 월별 청구 기간 내의 누적 비용입니다. 이 페이지에 표시된 {% data variables.product.prodname_github_codespaces %}에 대한 요금제 비용은 매월 청구 기간이 시작될 때 0으로 다시 설정됩니다. 이전 달의 미결제 비용은 표시되지 않습니다.
   * 이 페이지의 수치는 매시간 업데이트됩니다.

   {% endnote %}

{% data reusables.codespaces.usage-report-download %}

{% ifversion ghec %}
## 엔터프라이즈 계정의 {% data variables.product.prodname_codespaces %} 사용량 보기

엔터프라이즈 소유자 및 청구 관리자는 엔터프라이즈 계정에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 사용량을 볼 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. "{% data variables.product.prodname_codespaces %} 월별 사용량"에서 엔터프라이즈 계정의 각 조직의 사용량 세부 정보를 확인합니다.
{% data reusables.codespaces.usage-report-download %} {% endif %}

## 추가 참고 자료

- “[조직의 codespace 나열](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)”
