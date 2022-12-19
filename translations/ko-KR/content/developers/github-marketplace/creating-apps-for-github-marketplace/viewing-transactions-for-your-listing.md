---
title: 목록에 대한 트랜잭션 보기
intro: '{% data variables.product.prodname_marketplace %} 트랜잭션 페이지에서 {% data variables.product.prodname_marketplace %} 목록에 대한 모든 트랜잭션을 다운로드하고 볼 수 있습니다. {% data variables.product.prodname_github_app %}이 나열된 지난 하루(24시간), 주간, 월간 또는 전체 기간에 대한 메트릭을 볼 수 있습니다.'
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089742'
---
{% note %}

**참고:** 데이터를 집계하는 데 시간이 걸리므로 표시된 날짜가 약간 지연됩니다. 기간을 선택하면 페이지 맨 위에 있는 메트릭에 대한 정확한 날짜를 볼 수 있습니다.

{% endnote %}


트랜잭션 데이터를 보거나 다운로드하여 구독 활동을 추적할 수 있습니다. **CSV 내보내기** 단추를 클릭하여 `.csv` 파일을 다운로드합니다. 트랜잭션 페이지 내에서 보고 검색할 기간을 선택할 수도 있습니다.

## 트랜잭션 데이터 필드

* **date:** `yyyy-mm-dd` 형식의 트랜잭션 날짜입니다.
* **app_name:** 앱 이름입니다.
* **user_login:** 구독하는 사용자의 로그인입니다.
* **user_id:** 구독하는 사용자의 ID입니다.
* **user_type:** GitHub 계정 유형으로 `User` 또는 `Organization`입니다.
* **country:** 세 음절로 된 국가 번호입니다.
* **amount_in_cents:** 트랜잭션 금액(센트)입니다. 값이 플랜 금액보다 작으면 사용자가 업그레이드되고 새 플랜이 비례 배분됩니다. 값이 0이면 사용자가 플랜을 취소했음을 나타냅니다.
* **renewal_frequency:** 구독 갱신 빈도 중 하나로 `Monthly` 또는 `Yearly`입니다.
* **marketplace_listing_plan_id:** 구독 플랜의 `id`입니다.
* **region:** 청구 주소에 있는 지역의 이름입니다.
* **postal_code:** 청구 주소에 있는 우편 번호 값입니다.

![Marketplace 인사이트](/assets/images/marketplace/marketplace_transactions.png)

## {% data variables.product.prodname_marketplace %} 트랜잭션 액세스

{% data variables.product.prodname_marketplace %} 트랜잭션에 액세스합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. 트랜잭션을 보려는 {% data variables.product.prodname_github_app %}을(를) 선택합니다.
{% data reusables.user-settings.edit_marketplace_listing %}
6. **트랜잭션** 탭을 클릭합니다.
7. 필요에 따라 트랜잭션 페이지의 오른쪽 상단 모서리에 있는 기간 드롭다운을 클릭하여 다른 기간을 선택합니다.
![Marketplace 기간](/assets/images/marketplace/marketplace_insights_time_period.png)
