---
ms.openlocfilehash: d7d401ed18395e4dd30f45df07e850338fa43da9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145123188"
---
- {% data variables.product.prodname_marketplace %}에서 구매한 유료 플랜을 취소하는 고객은 앱의 무료 요금제(있는 경우)로 자동으로 다운그레이드되어야 합니다. {% data reusables.marketplace.cancellation-clarification %} 고객이 이전 플랜을 다시 활성화하는 것이 좋습니다.
- 다음 형식으로 [업그레이드 URL](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/#about-upgrade-urls)을 제공하는 경우 고객은 앱의 사용자 인터페이스에서 업그레이드 할 수 있어야 합니다. `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- 고객은 사용자(단위별 가격 책정 플랜)를 구매했거나 요금제에서 무제한 협력자를 제공하는 경우 앱의 웹 사이트에서 앱에 액세스할 수 있는 사용자를 수정할 수 있어야 합니다.
- 고객은 앱의 웹 사이트의 청구, 프로필 또는 계정 설정 섹션에서 계정에 대한 다음과 같은 변경 내용을 즉시 볼 수 있어야 합니다.
  - 현재 계획 및 가격
  - 구입한 새 플랜
  - 평가판의 업그레이드, 다운그레이드, 취소 및 남은 일 수
  - 청구 주기에 대한 변경 내용(매월 또는 매년)
  - 고정 요금제 및 단위당 요금제에 대한 사용량 및 나머지 리소스 예를 들어 가격 책정 플랜이 단위당인 경우 앱의 사이트에 사용된 단위와 사용 가능한 단위가 표시되어야 합니다.
