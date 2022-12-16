---
title: GitHub Marketplace 앱 취소
intro: '언제든지 계정에서 {% data variables.product.prodname_marketplace %} 앱을 취소하고 제거할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/canceling-a-github-marketplace-app
  - /articles/canceling-an-app-for-your-personal-account
  - /articles/canceling-an-app-for-your-organization
  - /articles/canceling-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/canceling-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Cancellation
  - Marketplace
  - Organizations
  - Trials
  - User account
shortTitle: Cancel a Marketplace app
ms.openlocfilehash: 9295f8ab1c5d9f4f3bef027dd6def79fcaa51df4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088039'
---
앱을 취소하는 경우 구독은 현재 청구 기간이 끝날 때까지 활성 상태를 유지합니다. 다음 청구 날짜에 취소가 적용됩니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 요금 청구 정보](/articles/about-billing-for-github-marketplace)”를 참조하세요.

유료 플랜을 사용 중인 평가판을 취소하면 구독이 즉시 취소되고 앱에 액세스할 수 없게 됩니다. 평가 기간 내에 평가판을 취소하지 않으면 평가 기간이 끝날 때 선택한 플랜의 요금이 계정에 대해 저장된 결제 방법에 부과됩니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 요금 청구 정보](/articles/about-billing-for-github-marketplace)”를 참조하세요.

{% data reusables.marketplace.downgrade-marketplace-only %}

## 개인 계정의 앱 취소

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.cancel-app-billing-settings %} {% data reusables.marketplace.cancel-app %}

## 개인 계정의 앱 평가판 취소

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.cancel-free-trial-billing-settings %} {% data reusables.marketplace.cancel-app %}

## 조직의 앱 취소

{% data reusables.marketplace.marketplace-org-perms %}


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.cancel-app-billing-settings %} {% data reusables.marketplace.cancel-app %}

## 조직의 앱 평가판 취소

{% data reusables.marketplace.marketplace-org-perms %}


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.cancel-free-trial-billing-settings %} {% data reusables.marketplace.cancel-app %}
