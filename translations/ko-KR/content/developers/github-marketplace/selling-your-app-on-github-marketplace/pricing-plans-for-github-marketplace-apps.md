---
title: GitHub Marketplace 앱에 대한 요금제
intro: '가격 책정 플랜을 사용하면 앱에 다양한 수준의 서비스 또는 리소스를 제공할 수 있습니다. {% data variables.product.prodname_marketplace %} 목록에서 최대 10개의 가격 책정 플랜을 제공할 수 있습니다.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
  - /developers/github-marketplace/pricing-plans-for-github-marketplace-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Pricing plans for apps
ms.openlocfilehash: 498bb9085ece97aba562d2c97ba1488e9b521d05
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098590'
---
{% data variables.product.prodname_marketplace %} 가격 책정 플랜은 무료, 정액제 또는 단위당 요금제일 수 있습니다. 요금은 미국 달러로 설정, 표시 및 처리됩니다. 유료 플랜은 확인된 게시자가 게시한 앱으로 제한됩니다. 확인된 게시자가 되는 방법에 대한 자세한 내용은 “[조직에 대한 게시자 확인 신청](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)”을 참조하세요.

고객은 {% 데이터 variables.product.prodname_dotcom_the_website %}을(를) 떠나지 않고도 {% 데이터 variables.location.product_location %}에서 계정에 연결된 결제 방법을 사용하여 앱을 구매합니다. 청구 트랜잭션을 수행하기 위해 코드를 작성할 필요는 없지만 {% data variables.product.prodname_marketplace %} API의 이벤트를 처리해야 합니다. 자세한 내용은 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

{% data variables.product.prodname_marketplace %}에 나열하는 앱에 여러 플랜 옵션이 있는 경우 해당 가격 책정 플랜을 설정할 수 있습니다. 예를 들어 앱에 오픈 소스 플랜과 프로 플랜이라는 두 가지 플랜 옵션이 있는 경우 오픈 소스 플랜에는 무료 가격 책정 플랜을, 프로 플랜에는 정액제 가격 책정 플랜을 설정할 수 있습니다. 각 {% data variables.product.prodname_marketplace %} 목록에는 나열된 모든 플랜의 연간 및 월별 가격이 있어야 합니다.

요금제 생성 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 목록의 가격 책정 플랜 설정](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)”을 참조하세요.

{% data reusables.marketplace.free-plan-note %}

## 가격 책정 플랜 유형

### 무료 가격 책정 플랜

{% data reusables.marketplace.free-apps-encouraged %}

무료 플랜은 사용자에게 완전히 무료입니다. 무료 가격 책정 플랜을 설정한 경우에는 앱 사용에 무료 가격 책정 플랜을 선택하는 사용자에게 요금을 부과할 수 없습니다. 목록에 대해 무료 및 유료 플랜을 만들 수 있습니다.

모든 앱은 새 구매 및 취소에 대한 이벤트를 처리해야 합니다. 무료 플랜만 있는 앱은 평가판, 업그레이드 및 다운그레이드에 대한 이벤트를 처리할 필요가 없습니다. 자세한 내용은 “[앱에서 {% data variables.product.prodname_marketplace %} API 사용](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)”을 참조하세요.

{% data variables.product.prodname_marketplace %}에 무료 서비스로 이미 나열된 앱에 유료 플랜을 추가하는 경우 앱에 대한 확인을 요청하고 재무 온보딩을 거쳐야 합니다.

### 유료 가격 책정 플랜

유료 가격 책정 플랜에는 다음 두 가지 유형이 있습니다.

- 정액제 가격 책정 플랜은 매월 및 매년 설정된 요금을 청구합니다.

- 단위당 가격 책정 플랜은 사용자가 지정한 단위에 대해 매월 또는 매년 설정된 요금을 청구합니다. “단위”는 원하는 모든 항목이 될 수 있습니다(예: 사용자 또는 사람).

평가판을 제공할 수도 있습니다. 이러한 평가판은 고객에게 OAuth 또는 GitHub 앱의 평가판을 14일 동안 무료로 제공합니다. Marketplace 가격 책정 플랜을 설정할 때 정액제 또는 단위별 가격 책정 플랜에 대한 평가판을 제공하는 옵션을 선택할 수 있습니다.

## 무료 평가판

고객은 평가판이 포함된 Marketplace 목록에서 유료 플랜에 대해 평가판을 시작할 수 있습니다. 그러나 고객은 마켓플레이스 제품당 평가판을 하나 이상 만들 수 없습니다.

평가판을 사용하도록 고정된 기간은 14일입니다. 고객은 평가 기간이 끝나기 4일 전에(평가판 사용 11일차) 플랜이 업그레이드된다는 알림을 받습니다. 평가판 사용이 종료될 때 취소하지 않을 경우 고객은 사용한 평가판 플랜에 자동으로 등록됩니다.

자세한 내용은 “[새 구매 및 평가판 처리](/developers/github-marketplace/handling-new-purchases-and-free-trials/)”를 참조하세요.

{% note %}

**참고:** GitHub는 취소 이벤트를 받은 시점부터 취소된 평가판의 30일 이내에 개인 고객 데이터를 삭제할 것으로 기대합니다.

{% endnote %}
