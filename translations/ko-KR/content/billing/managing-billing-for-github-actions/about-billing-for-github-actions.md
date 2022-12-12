---
title: GitHub Actions 요금 청구 정보
intro: '계정에 포함된 스토리지 또는 시간(분)을 벗어나 {% data variables.product.prodname_actions %}를 사용하면 추가 사용량에 대한 요금이 청구됩니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191888'
---
## {% data variables.product.prodname_actions %} 요금 청구 정보

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} 자세한 내용은 “[지출 한도 정보](#about-spending-limits)”를 참조하세요.

{% ifversion ghec %} Microsoft 기업계약을 통해 {% data variables.product.prodname_enterprise %}를 구매한 경우 Azure 구독 ID를 엔터프라이즈 계정에 연결하여 계정에 포함된 양을 초과하는 {% data variables.product.prodname_actions %} 사용량을 가능하게 하고 비용을 지불할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

시간(분)은 매월 재설정되지만 스토리지 사용량은 재설정되지 않습니다.

### 포함된 스토리지 및 시간(분)

{% ifversion actions-hosted-runners %} {% note %}

**참고**: 2코어 이상의 Windows 및 Ubuntu 실행기에는 시간(분) 권한을 사용할 수 없습니다. 이러한 실행기에는 공용 리포지토리를 포함하여 항상 요금이 청구됩니다. 자세한 내용은 “[실행기에 대한 분당 요금](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)”을 참조하세요.

{% endnote %} {% endif %}

|제품 | Storage | 분(월별)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500MB | 2,000 |
| {% data variables.product.prodname_pro %} | 1GB | 3,000 |
| 조직용 {% data variables.product.prodname_free_team %} | 500MB | 2,000 |
| {% data variables.product.prodname_team %} | 2GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50GB | 50,000 |

{% data variables.product.prodname_dotcom %} 호스트에서 Windows 및 macOS 실행기를 실행하는 작업은 Linux 실행기의 작업이 사용하는 속도의 2~10배에 이르는 시간(분)을 사용합니다. 예를 들어 1,000개의 Windows 시간(분)을 사용하면 계정에 포함된 2,000개의 시간(분)을 사용하게 됩니다. 1,000개의 macOS 시간(분)을 사용하면 계정에 포함된 10,000개 시간(분)을 사용하게 됩니다.

### 시간(분) 승수

| 운영 체제 | 시간(분) 승수 |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

리포지토리에서 사용하는 스토리지는 {% data variables.product.prodname_actions %} 아티팩트와 {% data variables.product.prodname_registry %}에서 사용하는 총 스토리지입니다. 스토리지 비용은 계정에서 소유한 모든 리포지토리의 총사용량입니다. {% data variables.product.prodname_registry %}의 가격에 대한 자세한 내용은 “[{% data variables.product.prodname_registry %} 요금 청구 정보](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”를 참조하세요.

 계정의 사용량이 한도를 초과하고 지출 한도를 $0 USD보다 높게 설정한 경우 {% data variables.product.prodname_dotcom %} 호스팅 실행기에서 사용하는 운영 체제에 따라 매일 GB당 스토리지 및 분당 사용량 비용으로 $$0.008 USD를 지불하게 됩니다. {% data variables.product.prodname_dotcom %}는 각 작업에서 사용하는 분 및 부분 분을 가장 가까운 전체 분까지 반올림합니다.

{% note %}

**참고:** 아래 표시된 분당 요금에는 분 승수가 적용되지 않습니다.

{% endnote %}

### 분당 요금

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- 사용자 또는 조직 계정의 모든 리포지토리에서 동시에 실행할 수 있는 작업 수는 GitHub 플랜에 따라 다릅니다. 자세한 내용은 {% data variables.product.prodname_dotcom %} 호스팅 실행기의 경우 “[사용량 한도 및 청구](/actions/reference/usage-limits-billing-and-administration)”, 자체 호스팅 실행기 사용량 한도의 경우 “[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”를 참조하세요.
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- {% data variables.actions.hosted_runner %}의 경우 {% data variables.actions.hosted_runner %}에 고정 공용 IP 주소를 할당하는 구성에 대한 추가 비용이 없습니다. {% data variables.actions.hosted_runner %}에 대한 자세한 내용은 “[{% data variables.actions.hosted_runner %} 사용](/actions/using-github-hosted-runners/using-larger-runners)”을 참조하세요.
- {% data variables.actions.hosted_runner %}에는 시간(분) 권한을 사용할 수 없습니다.
- {% data variables.actions.hosted_runner %}s는 퍼블릭 리포지토리에 대해 무료가 아닙니다.
{% endif %}

## 시간(분) 및 스토리지 지출 계산

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

월말에 {% data variables.product.prodname_dotcom %}는 계정에 포함된 양을 초과하여 사용된 스토리지 및 시간(분)의 비용을 계산합니다.

### 샘플 시간(분) 비용 계산

예를 들어 조직에서 {% data variables.product.prodname_team %}을 사용하고 무제한 지출을 허용하는 경우 5,000분을 사용하면 총 스토리지 및 시간(분) 초과 비용은 작업을 실행하는 데 사용된 운영 체제에 따라 $56 USD가 될 수 있습니다.

- 5,000(3,000 Linux 및 2,000 Windows)분 = $56 USD($24 USD + $32 USD)
  - 3,000 Linux 분 x 분당 $0.008 USD = $24 USD
  - 2,000 Windows 분 x 분당 $0.016 USD = $32 USD

{% data variables.product.prodname_dotcom %}는 해당 월의 시간별 사용량을 기준으로 월별 스토리지 사용량을 계산합니다.

### 샘플 스토리지 비용 계산

예를 들어 3월 중 10일 동안은 3GB의 스토리지를 사용하고 3월 중 21일 동안은 12GB를 사용하는 경우 스토리지 사용량은 다음과 같이 계산됩니다.

- 3GB x 10일 x (하루 24시간) = 720GB/시간
- 12GB x 21일 x (하루 24시간) = 6,048GB/시간
- 720GB/시간 + 6,048GB/시간 = 6,768GB/시간
- 6,768GB/시간 / (월별 744시간) = 9.0967GB/월

월말에 {% data variables.product.prodname_dotcom %}는 스토리지를 가장 가까운 MB로 올림합니다. 따라서 3월의 스토리지 사용량은 9.097GB가 됩니다.

{% data variables.product.prodname_actions %} 사용량은 계정의 기존 청구 날짜, 결제 방법, 영수증을 공유합니다. {% data reusables.dotcom_billing.view-all-subscriptions %}

## 지출 한도 정보

{% data reusables.actions.actions-spending-limit-detailed %}

계정의 지출 한도를 관리하고 변경하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)”를 참조하세요.

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
