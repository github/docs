---
title: 목록에 대한 가격 책정 플랜 설정
intro: '{% data variables.product.prodname_marketplace %}에 앱을 나열할 때 앱을 무료 서비스로 제공하거나 앱을 판매하도록 선택할 수 있습니다. 앱을 판매하려는 경우 다양한 기능 계층에 대해 다른 가격 책정 플랜을 만들 수 있습니다.'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /developers/github-marketplace/setting-pricing-plans-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Set listing pricing plans
ms.openlocfilehash: bc8d84a55c9597da051ab11752dd7e412761d5d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089670'
---
## 가격 책정 플랜 설정 정보

{% data variables.product.prodname_marketplace %}은(는) 여러 가지 유형의 가격 책정 플랜을 제공합니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %}에 대한 가격 책정 플랜](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)”을 참조하세요.

앱에 대한 유료 플랜을 제공하려면 게시자 확인 프로세스를 완료하고 특정 기준을 충족하는 조직에서 앱을 소유해야 합니다. 자세한 내용은 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)” 및 “[{% data variables.product.prodname_marketplace %}에 앱을 나열하기 위한 요구 사항](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)”을 참조하세요.

앱이 이미 유료 플랜으로 게시되어 있고 확인된 게시자인 경우 마켓플레이스 앱 목록 설정의 “가격 책정 플랜 편집” 페이지에서 새 유료 플랜을 게시할 수 있습니다. 

![이 플랜 게시 단추](/assets/images/marketplace/publish-this-plan-button.png)

앱이 이미 유료 플랜으로 게시되었지만 확인된 게시자가 아닌 경우 확인된 게시자가 될 때까지 새 유료 플랜을 게시할 수 없습니다. 확인된 게시자가 되는 방법에 대한 자세한 내용은 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”을 참조하세요.

## 가격 책정 플랜 저장 정보

가격 책정 플랜을 초안 또는 게시된 상태로 저장할 수 있습니다. 승인을 위해 {% data variables.product.prodname_marketplace %} 목록을 제출하지 않은 경우 게시된 플랜은 목록이 승인되고 {% data variables.product.prodname_marketplace %}에 표시될 때까지 초안 플랜과 동일한 방식으로 작동합니다. 초안 플랜을 사용하면 {% data variables.product.prodname_marketplace %} 목록 페이지에서 사용할 수 있도록 하지 않고도 새 가격 책정 플랜을 만들고 저장할 수 있습니다. 게시된 목록에 가격 책정 플랜을 게시하면 고객이 즉시 구매할 수 있습니다. 최대 10개의 가격 책정 플랜을 게시할 수 있습니다.

청구 고객에 대한 지침은 “[청구 고객](/developers/github-marketplace/billing-customers)”을 참조하세요.

## 가격 책정 플랜 만들기

{% data variables.product.prodname_marketplace %} 목록에서 가격 책정 플랜을 만들려면 [{% data variables.product.prodname_marketplace %} 목록 페이지](https://github.com/marketplace/manage)의 왼쪽 사이드바에서 **플랜 및 가격 책정** 을 클릭합니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 목록 초안 만들기](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)”를 참조하세요.

**새 초안 플랜** 을 클릭하면 가격 책정 플랜을 사용자 지정할 수 있는 양식이 표시됩니다. 가격 책정 플랜을 만들려면 다음 필드를 구성해야 합니다.

- **플랜 이름** - 가격 책정 플랜의 이름이 {% data variables.product.prodname_marketplace %} 앱의 방문 페이지에 표시됩니다. 플랜의 리소스, 플랜을 사용할 회사의 크기 또는 원하는 모든 항목에 맞게 가격 책정 플랜의 이름을 사용자 지정할 수 있습니다.

- **가격 책정 모델** - 무료, 정액제 및 단위당 세 가지 유형의 가격 책정 플랜이 있습니다. 모든 플랜에서 마켓플레이스 API의 새 구매 및 취소 이벤트를 처리해야 합니다. 또한 유료 플랜의 경우:

  - 월별 및 연간 구독에 대한 가격을 미국 달러로 설정해야 합니다.
  - 앱은 플랜 변경 이벤트를 반드시 처리해야 합니다.
  - 유료 플랜을 사용하여 목록을 게시하려면 확인을 요청해야 합니다.
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  자세한 내용은 “[{% data variables.product.prodname_marketplace %} 앱에 대한 가격 책정 플랜](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)” 및 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

- **사용 가능** - {% data variables.product.prodname_marketplace %} 가격 책정 플랜은 **개인 및 조직 계정**, **개인 계정에만** 또는 **조직 계정에만** 적용할 수 있습니다. 예를 들어 가격 책정 플랜이 단위당이고 여러 사용자를 제공하는 경우 개인 계정에서 조직의 사용자에게 사용자를 할당할 방법이 없기 때문에 **조직 계정만** 선택할 수 있습니다.

- **간단한 설명** - 가격 책정 플랜의 세부 정보에 대한 간략한 요약을 작성합니다. 설명에는 플랜이 의도한 고객 유형 또는 계획에 포함된 리소스가 포함될 수 있습니다.

- **글머리 기호** - 가격 책정 플랜에 대한 자세한 내용이 포함된 최대 4개의 글머리 기호를 작성할 수 있습니다. 글머리 기호에는 앱의 사용 사례가 포함되거나 플랜에 포함된 리소스 또는 기능에 대한 자세한 정보가 나열될 수 있습니다.

{% data reusables.marketplace.free-plan-note %}

## {% data variables.product.prodname_marketplace %} 목록의 가격 책정 플랜 변경

{% data variables.product.prodname_marketplace %} 목록에 대한 가격 책정 플랜이 더 이상 필요하지 않거나 가격 책정 세부 정보를 조정해야 하는 경우 제거할 수 있습니다.

![가격 책정 플랜을 제거하는 단추](/assets/images/marketplace/marketplace_remove_this_plan.png)

{% data variables.product.prodname_marketplace %}에 이미 나열된 앱에 대한 가격 책정 플랜을 게시한 후에는 플랜을 변경할 수 없습니다. 대신 가격 책정 플랜을 제거하고 새로 만들어야 합니다. 제거된 가격 책정 플랜을 이미 구매한 고객은 옵트아웃하고 새 가격 책정 플랜으로 전환할 때까지 계속 사용합니다. 가격 책정 플랜에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 가격 책정 플랜](/marketplace/selling-your-app/github-marketplace-pricing-plans/)”을 참조하세요.

가격 책정 플랜을 제거하면 사용자는 해당 플랜을 사용하여 앱을 구입할 수 없습니다. 제거된 가격 책정 플랜의 기존 사용자는 플랜 구독을 취소할 때까지 계속 플랜을 유지합니다.

{% note %}

**참고:** {% data variables.product.product_name %}은(는) 제거된 가격 책정 플랜에서 사용자를 제거할 수 없습니다. 사용자가 제거된 가격 책정 플랜에서 새 가격 책정 플랜으로 업그레이드하거나 다운그레이드하도록 권장하는 캠페인을 실행할 수 있습니다.

{% endnote %}

가격 책정 플랜을 사용 중지하지 않고 GitHub Marketplace 무료 평가판을 사용하지 않도록 설정할 수 있지만, 이렇게 하면 해당 플랜에 대한 향후 무료 평가판을 시작할 수 없습니다. 가격 책정 플랜에 대해 무료 평가판을 사용하지 않도록 선택하는 경우 이미 등록한 사용자는 무료 평가판을 완료할 수 있습니다.

가격 책정 플랜을 사용 중지한 후에는 제거된 가격 책정 플랜과 동일한 이름으로 새 가격 책정 플랜을 만들 수 있습니다. 예를 들어 “Pro” 가격 책정 플랜이 있지만 정액제 요금을 변경해야 하는 경우 “Pro” 가격 책정 플랜을 제거하고 업데이트된 가격으로 새 “Pro” 가격 책정 플랜을 만들 수 있습니다. 사용자는 새 가격 책정 플랜을 즉시 구매할 수 있습니다.

확인된 게시자가 아닌 경우 앱에 대한 가격 책정 플랜을 변경할 수 없습니다. 확인된 게시자가 되는 방법에 대한 자세한 내용은 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”을 참조하세요.
