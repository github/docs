---
title: GitHub Marketplace 요금 청구 정보
intro: '{% data variables.product.prodname_marketplace %}에 유료 앱을 설치하는 경우 해당 구독은 계정의 기존 청구 날짜, 결제 방법 및 영수증을 공유합니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-marketplace
  - /articles/about-billing-for-github-marketplace
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Marketplace
shortTitle: Billing for GitHub Marketplace
ms.openlocfilehash: 815303fa5c0c1a006a0bd4bd017039cf1e035f15
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088045'
---
{% data variables.product.prodname_marketplace %}에는 무료 및 유료 가격 책정 플랜을 사용하는 앱이 포함되어 있습니다. 앱을 구매하고 설치한 후 언제든지 업그레이드, 다운그레이드 또는 취소할 수 있습니다.

{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

## {% data variables.product.prodname_marketplace %} 구매에 대한 결제 방법 및 청구 기간

{% data variables.product.prodname_dotcom %}의 모든 유료 플랜 및 구독에 대해 동일한 결제 방법이 사용됩니다.

개인 계정 또는 조직에 대해 저장된 결제 방법이 없는 경우 앱의 유료 플랜을 선택할 때 다음과 같이 동작합니다.
- 청구 날짜는 오늘입니다.
- 앱을 설치할 개인 계정 또는 조직에 결제 방법을 추가해야 합니다.
- 결제 방법에 구독의 전체 금액이 부과됩니다.
- 개인 계정 또는 조직에 대해 저장된 기본 또는 청구 메일 주소로 영수증이 전송됩니다.

개인 계정 또는 조직에 기존 결제 방법이 없는 경우 앱의 유료 플랜을 선택할 때 다음과 같이 동작합니다.
- 다음 청구 날짜까지 남은 시간을 기준으로 비례 배분된 금액이 저장된 결제 방법에 즉시 부과됩니다.
- 앱 구독의 월간 또는 연간 청구 날짜는 계정 또는 조직의 정기 청구 날짜와 동일합니다.
- 다음 청구 날짜에 유료 {% data variables.product.prodname_dotcom %} 플랜과 앱 구독의 요금이 영수증에 나열됩니다.

평가판에서 유료 플랜을 선택하는 경우 다음과 같이 동작합니다.
- 기존 결제 방법이 있거나 앱을 설치할 개인 계정 또는 조직에 대한 새 결제 방법을 추가해야 합니다.
- 다른 유료 플랜 또는 구독이 없는 경우 14일 평가판이 끝날 때 전체 구독 금액이 부과됩니다.
- 다른 유료 플랜 또는 구독이 있는 경우 14일 평가판이 끝나면 다음 청구 날짜까지 남은 시간을 기준으로 비례 배분된 금액이 저장된 결제 방법에 즉시 부과됩니다.
- 다른 유료 플랜 또는 구독이 있는 경우 다음 청구 날짜에 유료 {% data variables.product.prodname_dotcom %} 플랜과 앱 구독의 요금이 영수증에 나열됩니다.

{% data reusables.user-settings.context_switcher %}

## 단위 플랜 한도

단위 플랜(예: 사용자당 요금이 부과되는 플랜)을 선택하고 지불하는 단위를 초과할 경우 앱을 업그레이드할 때까지 통합자가 액세스할 수 없도록 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 앱의 요금 청구 플랜 업그레이드](/articles/upgrading-the-billing-plan-for-a-github-marketplace-app)”를 참조하세요.

## {% data variables.product.prodname_marketplace %} 앱 다운그레이드

앱 구독을 저렴한 플랜으로 다운그레이드하거나 유료 앱 구독을 취소하는 경우 현재 청구 기간이 끝날 때 변경 내용이 적용됩니다. 다음 청구 날짜에 구독이 새 플랜으로 이동됩니다.

무료 플랜을 사용 중인 앱을 취소하면 구독이 즉시 종료되고 앱에 액세스할 수 없게 됩니다.

{% data reusables.marketplace.downgrade-marketplace-only %}

유료 플랜을 사용 중인 평가판을 취소하면 구독이 즉시 취소되고 앱에 액세스할 수 없게 됩니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 앱 취소](/articles/canceling-a-github-marketplace-app)”를 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_marketplace %} 정보](/articles/about-github-marketplace)”
- “[{% data variables.product.prodname_marketplace %}에서 앱 구매 및 설치](/articles/purchasing-and-installing-apps-in-github-marketplace)”
- “[{% data variables.product.prodname_marketplace %} 지원](/articles/github-marketplace-support)”
