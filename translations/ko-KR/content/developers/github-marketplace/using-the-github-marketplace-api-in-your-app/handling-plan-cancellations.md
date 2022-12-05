---
title: 플랜 취소 처리
intro: '{% data variables.product.prodname_marketplace %} 앱을 취소하면 취소 흐름이 시작되는 `cancelled` 작업으로 [`marketplace_purchase` 이벤트](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) 웹후크가 트리거됩니다.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
ms.openlocfilehash: 253506f1ac32f55649dd533559a7a16508cca98f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089614'
---
청구와 관련된 경우 취소에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %}에서 고객에게 청구](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)”를 참조하세요.

## 1단계. 취소 이벤트

고객이 {% data variables.product.prodname_marketplace %} 주문을 취소하도록 선택하는 경우 GitHub는 취소가 적용될 때 `cancelled` 작업과 함께 [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) 웹후크를 앱에 보냅니다. 고객이 평가판 사용 중에 취소하면 앱이 이벤트를 즉시 받습니다. 고객이 유료 플랜을 취소하면 고객의 청구 기간이 끝날 때 취소가 발생합니다.

## 2단계. 고객 계정 비활성화

고객이 무료 또는 유료 플랜을 취소하는 경우 앱은 취소를 완료하기 위해 다음 단계를 수행해야 합니다.

1. 플랜을 취소한 고객의 계정을 비활성화합니다.
1. 고객에 대해 앱이 받은 OAuth 토큰을 해지합니다.
1. 앱이 OAuth 앱인 경우 리포지토리용으로 만든 웹후크를 모두 제거합니다.
1. `cancelled` 이벤트를 받은 후 30일 이내에 모든 고객 데이터를 제거합니다.

{% note %}

**참고:** [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) 웹후크의 `effective_date`을(를) 사용하여 변경될 시점을 결정하고 [플랜이 적용되는 계정 목록](/rest/reference/apps#list-accounts-for-a-plan)을 주기적으로 동기화하는 것이 좋습니다. 웹후크에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 웹후크 이벤트](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)”를 참조하세요.

{% endnote %}
