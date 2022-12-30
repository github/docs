---
title: 앱 테스트
intro: 'GitHub는 고객에게 이상적인 환경을 제공할 수 있도록 {% data variables.product.prodname_marketplace %}에 목록을 제출하기 전에 API 및 웹후크를 사용하여 앱을 테스트할 것을 권장합니다. 온보딩 전문가가 앱을 승인하기 전에 청구 흐름을 적절하게 처리해야 합니다.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: c542f5bd46e4555a4459c669e2f9d75e29b63ffe
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112492'
---
## 앱 테스트

초안 {% data variables.product.prodname_marketplace %} 목록을 사용하여 각 청구 흐름을 시뮬레이션할 수 있습니다. 초안 상태의 목록은 승인을 위해 제출되지 않았음을 의미합니다. 초안 {% data variables.product.prodname_marketplace %} 목록을 사용한 구입은 모두 실제 거래를 생성하지 _않고_ GitHub는 귀하의 신용 카드에 청구하지 않습니다. 초안 목록에 게시된 플랜에 대해서만 구매를 시뮬레이션할 수 있으며 초안 계획에 대해서는 시뮬레이션할 수 없습니다. 자세한 내용은 “[앱 목록 초안 작성](/developers/github-marketplace/drafting-a-listing-for-your-app)” 및 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

### 초안 목록과 함께 개발 앱을 사용하여 변경 내용 테스트

{% data variables.product.prodname_marketplace %} 목록은 단일 앱 등록과만 연결할 수 있으며 각 앱은 자체 {% data variables.product.prodname_marketplace %} 목록에만 액세스할 수 있습니다. 이러한 이유로 프로덕션 앱과 동일한 구성으로 별도의 개발 앱을 구성하고 테스트에 사용할 수 있는 _초안_ {% data variables.product.prodname_marketplace %} 목록을 만드는 것이 좋습니다. 초안 {% data variables.product.prodname_marketplace %} 목록을 사용하면 프로덕션 앱의 활성 사용자에게 영향을 주지 않고 변경 내용을 테스트할 수 있습니다. 테스트에만 사용하므로 개발 {% data variables.product.prodname_marketplace %} 목록을 제출할 필요가 없습니다.

공개 앱에 대한 초안 {% data variables.product.prodname_marketplace %} 목록만 만들 수 있으므로 개발 앱은 공개로 설정해야 합니다. 공개 앱은 앱의 URL을 공유하지 않는 한 게시된 {% data variables.product.prodname_marketplace %} 목록 외부에서 검색할 수 없습니다. 초안 상태의 Marketplace 목록은 앱 소유자에게만 표시됩니다.

초안 목록이 있는 개발 앱이 있으면 {% data variables.product.prodname_marketplace %} API 및 웹후크와 통합하면서 앱에 대한 변경 내용을 테스트하는 데 사용할 수 있습니다.

{% warning %}

{% data variables.product.prodname_marketplace %}에 있는 앱을 사용하여 구매를 테스트하지 마세요.

{% endwarning %}

### Marketplace 구매 이벤트 시뮬레이션

테스트 시나리오에서는 평가판을 제공하는 목록 플랜을 설정하고 무료 구독과 유료 구독 간에 전환해야 할 수 있습니다. 다운그레이드 및 취소는 다음 청구 기간까지 적용되지 않으므로 GitHub에서는 `changed` 및 `cancelled` 플랜 작업을 바로 강제로 적용할 수 있도록 “보류 중인 변경 적용”을 위한 개발자 전용 기능을 제공합니다. https://github.com/settings/billing#pending-cycle: 에서 _초안_ 마켓플레이스 목록을 사용하여 앱에 대해 **보류 중인 변경 적용** 에 액세스할 수 있습니다.

![보류 중인 변경 적용](/assets/images/github-apps/github-apps-apply-pending-changes.png)

## API 테스트

대부분의 {% data variables.product.prodname_marketplace %} API 엔드포인트의 경우 테스트에 사용할 수 있는 하드 코딩된 모조 데이터를 반환하는 스텁된 API 엔드포인트도 제공합니다. 스텁된 데이터를 받으려면 경로(예: `/user/marketplace_purchases/stubbed`)에 `/stubbed`가 포함된 스텁된 URL을 지정해야 합니다. 이러한 스텁된 데이터 접근 방식을 지원하는 엔드포인트 목록은 [{% data variables.product.prodname_marketplace %} 엔드포인트](/rest/reference/apps#github-marketplace)를 참조하세요.

## 웹후크 테스트

GitHub에서는 배포된 페이로드를 테스트하기 위한 도구를 제공합니다. 자세한 내용은 “[웹후크 테스트](/webhooks/testing/)”를 참조하세요.
