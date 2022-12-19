---
title: GitHub 패키지 요금 청구 정보
intro: '계정에 포함된 스토리지 또는 데이터 전송량을 벗어나 {% data variables.product.prodname_registry %}를 사용하면 추가 사용량에 대한 요금이 청구됩니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
ms.openlocfilehash: 809065836c17701003917cb679ffc81cceb1b47f
ms.sourcegitcommit: 9b6371e5d55e4078c717e68536eca1fcd44a45e5
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180220'
---
## {% data variables.product.prodname_registry %} 요금 청구 정보

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} 자세한 내용은 “[지출 한도 정보](#about-spending-limits)”를 참조하세요.

{% note %}

**컨테이너 이미지 스토리지 요금 청구 업데이트:** {% data variables.product.prodname_container_registry %}의 컨테이너 이미지 스토리지 및 대역폭 무료 사용 기간이 연장되었습니다. {% data variables.product.prodname_container_registry %}를 사용하는 경우 청구가 시작되기 최소 1개월 전에 알림을 받게 되고 지불해야 하는 예상 금액이 제공됩니다. {% data variables.product.prodname_container_registry %}에 대한 자세한 내용은 “[컨테이너 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”을 참조하세요.

{% endnote %}

{% ifversion ghec %} Microsoft 기업계약을 통해 {% data variables.product.prodname_enterprise %}를 구매한 경우 Azure 구독 ID를 엔터프라이즈 계정에 연결하여 계정에 포함된 양을 초과하는 {% data variables.product.prodname_registry %} 사용량을 가능하게 하고 비용을 지불할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

데이터 전송은 매월 초기화되지만 스토리지 사용량은 초기화되지 않습니다.

제품 | Storage | 데이터 전송(월별)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500MB | 1GB
{% data variables.product.prodname_pro %} | 2GB | 10GB
조직용 {% data variables.product.prodname_free_team %} | 500MB | 1GB |
{% data variables.product.prodname_team %} | 2GB | 10GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

{% data variables.product.prodname_actions %}에서 트리거되어 밖으로 전송되는 모든 데이터와 모든 원본에서 안으로 전송되는 데이터는 무료입니다. `GITHUB_TOKEN`을 사용하여 {% data variables.product.prodname_registry %}에 로그인할 때 {% data variables.product.prodname_actions %}를 사용하여 패키지를 다운로드하는 것으로 확인됩니다.

||호스트형|자체 호스팅|
|-|-|-|
|`GITHUB_TOKEN`을 사용하여 액세스|무료|무료|
|{% data variables.product.pat_generic %}을(를) 사용하여 액세스|무료|$|

계정이 소유한 리포지토리에 대해 {% data variables.product.prodname_actions %}에서 생성된 빌드 아티팩트와 스토리지 사용량이 공유됩니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 요금 청구 정보](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”를 참조하세요.

{% data variables.product.prodname_dotcom %}는 패키지가 게시된 리포지토리를 소유한 계정에 사용량 요금을 부과합니다. 계정의 사용량이 한도를 초과하고 지출 한도를 0달러보다 높게 설정한 경우 일일 GB당 스토리지 비용으로 0.008달러, GB당 데이터 전송 비용으로 0.50달러를 지불하게 됩니다.

예를 들어 조직에서 {% data variables.product.prodname_team %}을 사용하고, 무제한 지출을 허용하며, 150GB 스토리지를 사용하고, 한 달 동안 50GB 데이터가 밖으로 전송된 경우 해당 월에 148GB 스토리지와 40GB 데이터 전송의 초과분이 발생합니다. 스토리지 초과분 비용은 일일 GB당 $0.008 USD, 즉 31일 기준 한 달에 약 $37 USD입니다. 데이터 전송 초과분 비용은 GB당 $0.50 USD, 즉 $20 USD입니다.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

월말에 {% data variables.product.prodname_dotcom %}는 데이터 전송을 가장 가까운 GB로 올림합니다.

{% data variables.product.prodname_dotcom %}은 해당 월의 GB당 시간별 사용량을 기준으로 매월 스토리지 사용량을 계산합니다. 예를 들어 3월 중 10일 동안은 3GB의 스토리지를 사용하고 3월 중 21일 동안은 12GB를 사용하는 경우 스토리지 사용량은 다음과 같이 계산됩니다.

- 3GB x 10일 x (하루 24시간) = 720GB/시간
- 12GB x 21일 x (하루 24시간) = 6,048GB/시간
- 720 GB-Hours + 6,048 GB-Hours = 총 6,768개 GB-Hours
- 6,768GB/시간 / (월별 744시간) = 9.0967GB/월

월말에 {% data variables.product.prodname_dotcom %}는 스토리지를 가장 가까운 MB로 올림합니다. 따라서 3월의 스토리지 사용량은 9.097GB가 됩니다.

청구 주기 중간에 이 계산을 사용하여 해당 월의 총 사용량을 예측할 수도 있습니다. 예를 들어 2GB의 무료 스토리지를 제공하는 {% data variables.product.prodname_team %}을(를) 사용하는 조직이 있고 4월 첫 5일 동안 0GB, 다음 10일 동안 1.5GB를 사용하고 청구 주기의 마지막 15일 동안 3GB를 사용하려는 경우 해당 월의 예상 스토리지 사용량은 다음과 같습니다.

- 0GB x 5일 x(하루 24시간) = 0GB-Hours
- 0.5GB x 10일 x(하루 24시간) = 120GB-Hours
- 3GB x 15일 x(하루 24시간) = 1080GB-Hours
- 0 GB-Hours + 120 GB-Hours + 1080 GB-Hours = 총 GB-Hours
- 1200 GB-Hours/(매월 744시간) = 1.6 GB-Months

실제 스토리지 용량이 2GB를 잠시 초과하더라도 한 달 동안 예상되는 1.6GB의 스토리지 사용량은 2GB 제한을 초과하지 않습니다.

{% data variables.product.prodname_registry %} 사용량은 계정의 기존 청구 날짜, 결제 방법, 영수증을 공유합니다. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## 지출 한도 정보

{% data reusables.package_registry.packages-spending-limit-detailed %}

지출 한도를 초과하지 않도록 {% data variables.product.prodname_dotcom %}은 현재 사용량을 확인하고 해당 시간 이전에 변경되지 않은 경우 예상 사용량을 월말에 계산하여 한 달 내내 스토리지 사용량을 지속적으로 확인합니다. 청구 주기 중 어느 시점에서든 예상 월별 사용량이 지출 한도를 초과하는 경우 {% data variables.product.prodname_registry %} 및 {% data variables.product.prodname_actions %}는 초과분 방지를 위해 비활성화됩니다.

청구 주기의 지정된 지점에서 최대 예상 스토리지 사용량을 포함하는 지출 한도를 설정해야 합니다. 예를 들어 {% data variables.product.prodname_team %}을(를) 사용하는 조직이 있고 지출 한도를 $50 USD로 설정한다고 상상해 보세요. {% data variables.product.prodname_team %}은(는) 2GB의 무료 스토리지를 제공합니다. {% data variables.product.prodname_dotcom %}을(를) 사용하는 스토리지의 경우 하루에 GB당 $0.008 USD, 31일 동안 GB당 약 $0.25 USD가 청구됩니다. 즉, 설정한 $50 지출 한도는 해당 기간에 200GB의 추가 스토리지 비용을 지불하게 됩니다. 청구 주기의 10일째에 202GB의 스토리지에 도달하면 해당 기간의 평균 소비량이 202GB 미만인 경우에도 이 청구 주기에서 지출 한도로 지불될 수 있는 최대 스토리지 금액에 도달했기 때문에 패키지 또는 {% data variables.product.prodname_actions %} 아티팩트가 다음 푸시에 실패합니다.

현재 청구 주기에서 지출 한도에 도달하지 않도록 하려면 현재 스토리지 사용량 중 일부를 삭제하여 남은 달의 예상 사용량을 확보할 수 있습니다. 이 방법은 청구 주기의 시작 부분에 더 효과적입니다. 청구 주기가 끝날수록 이 메서드가 예상 월별 사용량에 미치는 영향이 줄어듭니다.

계정의 지출 한도를 관리하고 변경하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_registry %}에 대한 지출 한도 관리"를 참조하세요](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages).

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
