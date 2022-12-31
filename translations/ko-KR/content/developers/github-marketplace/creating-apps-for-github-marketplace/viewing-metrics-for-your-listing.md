---
title: 목록에 대한 메트릭 보기
intro: '{% data variables.product.prodname_marketplace %} 인사이트 페이지에는 {% data variables.product.prodname_github_app %}에 대한 메트릭이 표시됩니다. 메트릭을 사용하여 {% data variables.product.prodname_github_app %}의 성능을 추적하고 가격 책정, 계획, 평가판 및 마케팅 캠페인의 효과를 시각화하는 방법에 대해 보다 합리적인 의사 결정을 내릴 수 있습니다.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/github-marketplace-insights
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing metrics
ms.openlocfilehash: 92fde52b0edbc7c11ac22d641bc4d9c4bd02709f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089750'
---
{% data variables.product.prodname_github_app %}이(가) 나열된 과거 일간(24시간), 주간, 월간 또는 전체 기간에 대한 메트릭을 볼 수 있습니다.

{% note %}

**참고:** 데이터를 집계하는 데 시간이 걸리므로 표시된 날짜가 약간 지연됩니다. 기간을 선택하면 페이지 맨 위에 있는 메트릭에 대한 정확한 날짜를 볼 수 있습니다.

{% endnote %}

## 성능 메트릭

인사이트 페이지에는 선택한 기간 동안 다음과 같은 성능 메트릭이 표시됩니다.

* **구독 값:** 구독에 대해 가능한 총 수익(미국 달러)입니다. 이 값은 플랜 또는 무료 평가판이 취소되지 않고 모든 신용 거래가 성공적으로 이루어진 경우의 가능한 수익을 나타냅니다. 구독 값에는 해당 기간에 금융 거래가 없는 경우에도 선택한 기간에 무료 평가판으로 시작하는 플랜의 전체 값이 포함됩니다. 구독 값에는 선택한 기간에 업그레이드된 플랜의 전체 값도 포함되지만 비례 배분된 금액은 포함되지 않습니다. 개별 거래를 보고 다운로드하려면 “[GitHub Marketplace 트랜잭션](/marketplace/github-marketplace-transactions/)”을 참조하세요.
* **방문자:** GitHub 앱 목록에서 페이지를 본 사용자 수입니다. 이 수치에는 로그인한 방문자와 로그아웃한 방문자가 모두 포함됩니다.
* **페이지 보기:** GitHub 앱 목록에서 받은 페이지의 보기 수입니다. 방문자 한 명이 둘 이상의 페이지 보기를 생성할 수 있습니다.

{% note %}

**참고:** 예상 구독 값은 이 기간 동안 처리된 트랜잭션보다 훨씬 높을 수 있습니다. 

{% endnote %}

### 전환 성능

* **방문 페이지에 대한 고유 방문자:** GitHub 앱의 방문 페이지를 본 사용자 수입니다.
* **체크 아웃 페이지에 대한 고유 방문자:** GitHub 앱의 체크 아웃 페이지 중 하나를 본 사용자 수입니다.
* **새 구독에 대한 체크 아웃 페이지:** 유료 구독, 무료 평가판 및 무료 구독의 총 수입니다. 구독 유형별 특정 수치에 대한 “총 구독 분석”을 참조하세요.

![Marketplace 인사이트](/assets/images/marketplace/marketplace_insights.png)

{% data variables.product.prodname_marketplace %} 인사이트에 액세스하려면 다음을 수행합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. 인사이트를 보려는 {% data variables.product.prodname_github_app %}을(를) 선택합니다.
{% data reusables.user-settings.edit_marketplace_listing %}
6. **인사이트** 탭을 클릭합니다.
7. 필요에 따라 인사이트 페이지의 오른쪽 상단 모서리에 있는 기간 드롭다운을 클릭하여 다른 기간을 선택합니다.
![Marketplace 기간](/assets/images/marketplace/marketplace_insights_time_period.png)
