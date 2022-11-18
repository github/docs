---
title: 플랜 변경 처리
intro: '{% data variables.product.prodname_marketplace %} 앱을 업그레이드 또는 다운그레이드하면 업그레이드 또는 다운그레이드 흐름이 시작되는 `changed` 작업으로 [`marketplace_purchase` 이벤트](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) 웹후크가 트리거됩니다.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /developers/github-marketplace/handling-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: fd5cc838c01130ab9e8a1f7c040b254655cbaef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135862'
---
청구와 관련된 업그레이드 및 다운그레이드에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %} API와 통합](/marketplace/integrating-with-the-github-marketplace-api/)”을 참조하세요.

## 1단계. 가격 책정 플랜 변경 이벤트

고객이 {% data variables.product.prodname_marketplace %} 주문을 다음과 같이 변경하면 GitHub가 `changed` 작업과 함께 `marketplace_purchase` 웹후크를 앱에 보냅니다.
* 더 비싼 가격 책정 플랜으로 업그레이드하거나 더 저렴한 플랜으로 다운그레이드합니다.
* 기존 플랜에 사용자를 추가하거나 제거합니다.
* 청구 기간을 변경합니다.

변경 내용이 적용되면 GitHub가 웹후크를 보냅니다. 예를 들어 고객이 플랜을 다운그레이드하면 GitHub는 고객의 청구 기간이 끝날 때 웹후크를 보냅니다. GitHub는 고객이 새 서비스에 바로 액세스할 수 있도록 플랜을 업그레이드할 때 즉시 앱에 웹후크를 보냅니다. 월별에서 연간으로 청구 기간을 전환하면 업그레이드로 간주됩니다. 업그레이드 또는 다운그레이드로 간주되는 작업에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %}에서 고객에게 청구](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)”를 참조하세요.

`marketplace_purchase` 웹후크에서 `effective_date`, `marketplace_purchase` 및 `previous_marketplace_purchase`를 읽어 플랜의 시작 날짜를 업데이트하고 고객의 청구 기간 및 가격 책정 플랜을 변경합니다. `marketplace_purchase` 이벤트 페이로드의 예는 “[{% data variables.product.prodname_marketplace %} 웹후크 이벤트](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)”를 참조하세요.

앱에서 평가판을 제공하는 경우 평가판 만료 시 `changed` 작업과 함께 `marketplace_purchase` 웹 후크를 받습니다. 고객의 평가판이 만료되면 평가판 플랜의 유료 버전으로 고객을 업그레이드합니다.

## 2단계. 고객 계정 업데이트

고객이 {% data variables.product.prodname_marketplace %} 주문에 대해 변경한 청구 기간 및 가격 책정 플랜 변경 내용을 반영하도록 고객의 계정 정보를 업데이트해야 합니다. `changed` 작업 웹후크를 받으면 Marketplace 앱의 웹 사이트 또는 앱의 UI에 가격 책정 플랜, `seat_count`(단위당 가격 책정 플랜) 및 청구 기간으로 업그레이드를 표시합니다.

고객이 플랜을 다운그레이드하면 고객이 플랜 제한을 초과했는지 여부를 검토하고 UI를 통해 또는 전화 또는 메일로 연락하여 고객과 소통하는 것이 좋습니다.

업그레이드를 권장하기 위해 앱의 UI에 업그레이드 URL을 표시할 수 있습니다. 자세한 내용은 “[업그레이드 URL 정보](#about-upgrade-urls)”를 참조하세요.

{% note %}

**참고:** 앱에 각 계정에 대한 올바른 플랜, 청구 기간 정보 및 단위 수(단위당 가격 책정)가 있는지 확인하기 위해 `GET /marketplace_listing/plans/:id/accounts`를 사용하여 주기적인 동기화를 수행하는 것이 좋습니다.

{% endnote %}

## 업그레이드 결제 실패

{% data reusables.marketplace.marketplace-failed-purchase-event %}

## 업그레이드 URL 정보

업그레이드 URL을 사용하여 GitHub에서 업그레이드하도록 앱의 UI에서 사용자를 리디렉션할 수 있습니다.

```text
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

예를 들어 고객이 5인 플랜을 사용 중인데 10인 플랜으로 이전해야 하는 경우 앱의 UI에 “업그레이드 방법”이라는 단추를 표시하거나 업그레이드 URL에 대한 링크가 있는 배너를 표시할 수 있습니다. 업그레이드 URL은 고객을 목록 플랜의 업그레이드 확인 페이지로 연결합니다.

고객이 구매하려는 플랜에 `LISTING_PLAN_NUMBER`를 사용합니다. 새 가격 책정 플랜을 만들면 목의 각 플랜에 고유한 `LISTING_PLAN_NUMBER` 및 {% data variables.product.prodname_marketplace %}에서 각 플랜에 고유한 `LISTING_PLAN_ID`가 받습니다. 목록의 가격 책정 플랜을 식별하는 [목록 플랜](/rest/reference/apps#list-plans)에서 이러한 숫자를 찾을 수 있습니다. `LISTING_PLAN_ID` 및 “[플랜에 대한 계정 나열](/rest/reference/apps#list-accounts-for-a-plan)” 엔드포인트를 사용하여 `CUSTOMER_ACCOUNT_ID`를 가져옵니다.


{% note %}

**참고:** 고객이 추가 단위(예: 사용자)로 업그레이드하는 경우에도 고객을 구매에 적합한 플랜으로 보낼 수 있지만 현재는 `unit_count` 매개 변수를 지원할 수 없습니다.

{% endnote %}
