---
title: GitHub Copilot 사용량 보기
intro: '엔터프라이즈의 모든 조직에서 {% data variables.product.prodname_copilot %}에 액세스할 수 있는 사용자 수를 볼 수 있습니다.'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_copilot %} in their enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
shortTitle: View your usage
ms.openlocfilehash: 9b481cfd11a3c96ce98175d3b30e3b26889c4148
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193422'
---
## {% data variables.product.prodname_copilot %} 사용량 정보

엔터프라이즈에서 {% data variables.product.prodname_copilot %}에 대한 사용량 정보를 보고, 조직별로 세분화하거나, 조직에서 사용자 할당 상태를 세분화할 수 있습니다. 엔터프라이즈 수준에서 이 정보에는 각 조직에 할당된 사용자 수와 현재 청구 주기에 대한 각 조직과 관련된 총 지출이 포함됩니다. 조직 수준에서 이 정보에는 총 사용자 수, 이전 청구 주기에서 이월된 좌석, 현재 주기 동안 추가된 새 좌석 및 현재 주기가 끝날 때 제거할 좌석이 포함됩니다. 

조직 관리자가 현재 청구 주기 동안 부분적으로 하나 이상의 사용자를 할당한 경우 엔터프라이즈 수준 정보에는 10진수의 좌석이 표시됩니다. 예를 들어 조직에서 3개의 좌석이 할당된 청구 주기를 시작한 다음, 주기 중간에 추가 좌석을 할당한 경우 좌석 사용량 정보에는 3.5개의 좌석이 표시됩니다. 주기 시작 시 할당된 좌석을 나타내는 "3"과 주기 중간에 할당된 추가 좌석을 나타내는 "0.5"입니다. 

지출 정보에는 현재 청구 주기에 대한 각 조직의 총 지출이 표시됩니다. 현재 주기에 대한 조직의 총 지출은 일반적으로 할당된 사용자 수이며, 좌석당 비용(매월 19달러)을 곱합니다. 그러나 동일한 조직 구성원에게 여러 조직의 좌석이 할당된 경우 각 조직에 해당 좌석 사용량이 반영되지만 기업은 한 번만 청구되므로 지출은 처음 좌석이 할당된 조직에만 반영됩니다.

## {% data variables.product.prodname_copilot_for_business %}에 대한 사용량 보기

### 엔터프라이즈 수준

{% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. "{% data variables.product.prodname_copilot_short %} 월별 사용량"에서 {% data variables.product.prodname_copilot %} 사용량의 분석을 확인합니다.
    - "좌석 사용량"에서 현재 청구 주기 동안 부분적으로 할당된 좌석을 나타내는 10진수를 사용하여 조직당 현재 할당된 총 사용자 수를 볼 수 있습니다.
    - "지출"에서 조직당 현재 청구 주기에 대한 {% data variables.product.prodname_copilot_for_business %}의 총 비용을 볼 수 있습니다.

   ![{% data variables.product.prodname_copilot %} 사용량 페이지의 스크린샷](/assets/images/help/copilot/monthly-usage-enterprise.png)

### 조직 수준

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 “액세스” 섹션에서 **{% octicon "credit-card" aria-label="The credit card icon" %} 청구 및 플랜** 을 클릭합니다.
1. "{% data variables.product.prodname_copilot_short %}"에서 {% data variables.product.prodname_copilot %} 사용량 분석 및 조직의 향후 변경 내용을 확인합니다.
 
   ![조직 수준 {% 데이터 variables.product.prodname_copilot %} 좌석 사용량 페이지의 스크린샷](/assets/images/help/copilot/org-level-seat-view.png)
