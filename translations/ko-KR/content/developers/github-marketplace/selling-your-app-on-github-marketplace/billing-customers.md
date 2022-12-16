---
title: 고객에게 청구
intro: '{% data variables.product.prodname_marketplace %}의 앱은 GitHub의 청구 지침을 준수하고 권장 서비스를 지원해야 합니다. 지침을 따르면 고객이 큰 문제 없이 청구 프로세스를 탐색할 수 있습니다.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /developers/github-marketplace/billing-customers
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 86f012c4a74d010ddaed9ec495ae2f5d8a8dd9eb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089646'
---
## 청구 기간 이해

고객은 앱을 구매할 때 월별 또는 연간 청구 기간을 선택할 수 있습니다. 고객이 청구 기간 및 플랜 선택을 변경할 때마다 `marketplace_purchase` 이벤트가 트리거 됩니다. `marketplace_purchase` 웹후크 페이로드를 참조하여 고객이 선택한 청구 기간과 다음 청구 날짜가 시작되는 시점(`effective_date`)을 확인할 수 있습니다. 웹후크 페이로드에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %} API에 대한 웹후크 이벤트](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)”를 참조하세요.

## 앱의 UI에서 청구 서비스 제공

고객은 앱의 웹 사이트에서 다음 작업을 수행할 수 있어야 합니다.
- 고객은 개인 및 조직 계정에 대한 {% data variables.product.prodname_marketplace %} 플랜을 별도로 수정하거나 취소할 수 있어야 합니다.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## 업그레이드, 다운그레이드 및 취소에 대한 청구 서비스

명확하고 일관된 청구 프로세스를 유지하려면 업그레이드, 다운그레이드 및 취소에 대한 다음 지침을 따르세요. {% data variables.product.prodname_marketplace %} 구매 이벤트에 대한 자세한 지침은 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

`marketplace_purchase` 웹후크의 `effective_date` 키를 사용하여 플랜이 변경될 시점을 결정하고 [플랜이 적용되는 계정 목록](/rest/reference/apps#list-accounts-for-a-plan)을 주기적으로 동기화할 수 있습니다.

### 업그레이드

고객이 가격 책정 플랜을 업그레이드하거나 청구 기간을 매월에서 매년으로 변경하면 변경 내용을 즉시 적용해야 합니다. 새 플랜에 비례 배분 할인을 적용하고 청구 기간을 변경해야 합니다.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

업그레이드 및 다운그레이드 워크플로를 앱에 빌드에 대한 자세한 내용은 “[플랜 변경 처리](/developers/github-marketplace/handling-plan-changes)”를 참조하세요.

### 다운그레이드 및 취소

다운그레이드는 고객이 유료 플랜에서 무료 플랜으로 이전하거나, 현재 플랜보다 요금이 더 낮은 플랜을 선택하거나, 청구 기간을 매년에서 매월로 변경하면 발생합니다. 다운그레이드 또는 취소가 발생하는 경우 환불을 제공할 필요가 없습니다. 대신 현재 플랜은 현재 청구 기간의 마지막 날까지 활성 상태로 유지됩니다. 이 `marketplace_purchase` 이벤트는 고객의 다음 청구 기간이 시작되는 시점에서 새 플랜이 적용될 때 전송됩니다.

고객이 플랜을 취소하는 경우 다음 작업을 수행해야 합니다.
- 무료 플랜(있는 경우)으로 자동으로 다운그레이드합니다.
  
  {% data reusables.marketplace.cancellation-clarification %}
- 나중에 플랜을 계속 유지하고 싶어하는 경우 GitHub 통해 플랜을 업그레이드할 수 있도록 합니다.

앱에 취소 워크플로를 빌드하는 방법에 대한 자세한 내용은 “[플랜 취소 처리](/developers/github-marketplace/handling-plan-cancellations)”를 참조하세요.
