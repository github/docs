---
title: GitHub Marketplace API에 대한 웹후크 이벤트
intro: '{% data variables.product.prodname_marketplace %} 앱은 Marketplace 구매 이벤트 웹후크에서 사용자의 플랜 변경에 대한 정보를 받습니다. Marketplace 구매 이벤트는 사용자가 결제 플랜을 구매, 취소 또는 변경할 때 트리거됩니다.'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 31afac532a1b10c462085f0403d4ed210750ca77
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105678'
---
## {% data variables.product.prodname_marketplace %} 구매 웹후크 페이로드

웹후크 `POST` 요청에는 특별한 헤더가 있습니다. 자세한 내용은 “[웹후크 배달 헤더](/webhooks/event-payloads/#delivery-headers)”를 참조하세요. GitHub는 배달 시도가 실패하면 다시 전송하지 않습니다. 앱이 GitHub에서 보낸 모든 웹후크 페이로드를 받을 수 있는지 확인합니다.

취소 및 다운그레이드는 다음 청구 기간의 첫 날에 적용됩니다. 다운그레이드 및 취소에 대한 이벤트는 새 플랜이 다음 청구 기간의 시작 부분에 적용될 때 전송됩니다. 새 구매 및 업그레이드에 대한 이벤트는 즉시 시작됩니다. 웹후크 페이로드에서 `effective_date`를 사용하여 변경이 시작되는 시점을 확인합니다.

{% data reusables.marketplace.marketplace-malicious-behavior %}

각 `marketplace_purchase` 웹후크 페이로드에는 다음 정보가 있습니다.


키 | 형식 | 설명
----|------|-------------
`action` | `string` | 웹후크를 생성하기 위해 수행된 작업. `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled` 또는 `changed`일 수 있습니다. 자세한 내용은 아래 웹후크 페이로드 예제를 참조하세요. **참고:** `pending_change` 및 `pending_change_cancelled` 페이로드는 [페이로드 예제`changed`](#example-webhook-payload-for-a-changed-event)에 표시된 것과 동일한 키를 포함하고 있습니다.
`effective_date` | `string` | `action`이 적용되는 날짜
`sender` | `object` | 웹후크를 트리거한 `action`을 수행한 사람
`marketplace_purchase` | `object` | {% data variables.product.prodname_marketplace %} 구매 정보

`marketplace_purchase` 개체에는 다음 키가 있습니다.

키 | 형식 | 설명
----|------|-------------
`account` | `object` | 구독과 연결된 `organization` 및 `user` 계정. 조직 계정에는 조직의 관리 메일 주소인 `organization_billing_email`이(가) 포함됩니다. 개인 계정의 메일 주소를 찾으려면 [인증된 사용자 가져오기](/rest/reference/users#get-the-authenticated-user) 엔드포인트를 사용할 수 있습니다.
`billing_cycle` | `string` | `yearly` 또는 `monthly`일 수 있습니다. `account` 소유자가 무료 GitHub 플랜을 사용 중이고 무료 {% data variables.product.prodname_marketplace %} 플랜을 구입하면 `billing_cycle`은 `nil`입니다.
`unit_count`  | `integer` | 구매한 단위 수
`on_free_trial` | `boolean` | `account`가 평가판을 사용 중이면 `true`
`free_trial_ends_on` | `string` | 평가판이 만료될 날짜
`next_billing_date` | `string` | 다음 청구 기간이 시작되는 날짜. `account` 소유자가 무료 GitHub.com 플랜을 사용 중이고 무료 {% data variables.product.prodname_marketplace %} 플랜을 구입하면 `next_billing_date`는 `nil`입니다.
`plan` | `object` | `user` 또는 `organization`이 구매한 플랜

`plan` 개체에는 다음 키가 있습니다.

키 | 형식 | 설명
----|------|-------------
`id` | `integer` | 플랜의 고유 식별자
`name` | `string` | 플랜의 이름
`description` | `string` | 플랜에 대한 설명
`monthly_price_in_cents` | `integer` | 플랜의 월별 비용(단위: 미국 통화 센트). 예를 들어 매월 10달러의 비용이 드는 목록은 1000센트가 됩니다.
`yearly_price_in_cents` | `integer` | 플랜의 연간 비용(단위: 미국 통화 센트). 예를 들어 매월 100달러의 비용이 드는 목록은 120000센트가 됩니다.
`price_model` | `string` | 이 목록의 가격 책정 모델. `FLAT_RATE`, `PER_UNIT` 또는 `FREE` 중 하나일 수 있습니다.
`has_free_trial` | `boolean` | 목록이 평가판을 제공하는 경우 `true`
`unit_name` | `string` | 단위의 이름. 가격 책정 모델이 `per-unit`이 아닌 경우에는 `nil`입니다.
`bullet` | `array of strings` | 가격 책정 플랜에 설정된 글머리 기호의 이름

<br/>

### `purchased` 이벤트에 대한 예제 웹후크 페이로드
이 예제에서는 `purchased` 이벤트 페이로드를 제공합니다.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### `changed` 이벤트에 대한 예제 웹후크 페이로드

플랜의 변경 내용에는 업그레이드와 다운그레이드가 포함되어 있습니다. 이 예제는 `changed`, `pending_change` 및 `pending_change_cancelled` 이벤트 페이로드를 나타냅니다. 이 작업은 이 세 가지 이벤트 중 어떤 이벤트가 발생했는지 식별합니다.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### `cancelled` 이벤트에 대한 예제 웹후크 페이로드

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
