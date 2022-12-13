---
title: GitHub Marketplace 앱의 청구 플랜 다운그레이드
intro: '다른 청구 플랜을 사용하려는 경우 언제든지 {% data variables.product.prodname_marketplace %} 앱을 다운그레이드할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /articles/downgrading-an-app-for-your-personal-account
  - /articles/downgrading-an-app-for-your-organization
  - /articles/downgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/downgrading-the-billing-plan-for-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Downgrades
  - Marketplace
  - Organizations
  - User account
shortTitle: Downgrade billing plan
ms.openlocfilehash: c50995729c266cbfdac13b81da4f0ffaa0b4ff85
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088033'
---
앱을 다운그레이드하는 경우 구독은 현재 청구 기간이 끝날 때까지 활성 상태를 유지합니다. 다음 청구 날짜에 다운그레이드가 적용됩니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 요금 청구 정보](/articles/about-billing-for-github-marketplace)”를 참조하세요.

{% data reusables.marketplace.downgrade-marketplace-only %}

## 개인 계정의 앱 다운그레이드

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## 조직의 앱 다운그레이드

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## 추가 참고 자료

- “[{% data variables.product.prodname_marketplace %} 앱 취소](/articles/canceling-a-github-marketplace-app/)”
