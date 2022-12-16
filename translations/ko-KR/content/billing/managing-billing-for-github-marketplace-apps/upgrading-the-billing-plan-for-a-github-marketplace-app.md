---
title: GitHub Marketplace 앱의 청구 플랜 업그레이드
intro: '언제든지 {% data variables.product.prodname_marketplace %} 앱을 다른 플랜으로 업그레이드할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-the-billing-plan-for-a-github-marketplace-app
  - /articles/upgrading-an-app-for-your-personal-account
  - /articles/upgrading-an-app-for-your-organization
  - /articles/upgrading-the-billing-plan-for-a-github-marketplace-app
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/upgrading-the-billing-plan-for-a-github-marketplace-app
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Marketplace
  - Organizations
  - Upgrades
  - User account
shortTitle: Upgrade billing plan
ms.openlocfilehash: bf24ee931df72fbe113fbc1fcc2c10be48fa74c5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088027'
---
앱을 업그레이드하는 경우 다음 청구 날짜까지 남은 시간을 기준으로 비례 배분된 금액이 결제 방법에 부과됩니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %} 요금 청구 정보](/articles/about-billing-for-github-marketplace)”를 참조하세요.

## 개인 계정의 앱 업그레이드

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.upgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## 조직의 앱 업그레이드

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.upgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}
