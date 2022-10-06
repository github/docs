---
title: GitHub Marketplace アプリケーションの支払いプランをアップグレードする
intro: '{% data variables.product.prodname_marketplace %} アプリケーションを別のプランにいつでもアップグレードすることができます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088026'
---
アプリケーションをアップグレードすると、支払い方法により、次の請求日までの残り時間に基づいて比例配分額を請求されます。 詳細については、「[{% data variables.product.prodname_marketplace %} の請求について](/articles/about-billing-for-github-marketplace)」を参照してください。

## 個人アカウントのアプリケーションをアップグレードする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.upgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## Organization のアプリケーションをアップグレードする

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.upgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}
