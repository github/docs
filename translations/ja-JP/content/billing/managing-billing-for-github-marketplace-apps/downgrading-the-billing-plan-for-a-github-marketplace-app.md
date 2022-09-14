---
title: GitHub Marketplace アプリケーションの支払いプランをダウングレード
intro: '別の支払いプランを使用したい場合は、{% data variables.product.prodname_marketplace %} アプリケーションをいつでもダウングレードできます。'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088032'
---
アプリケーションをダウングレードしても、現在の支払いサイクルが終了するまでプランは有効のままです。 ダウングレードは次回の支払い日に有効となります。 詳細については、「[{% data variables.product.prodname_marketplace %} の請求について](/articles/about-billing-for-github-marketplace)」を参照してください。

{% data reusables.marketplace.downgrade-marketplace-only %}

## 個人アカウントのアプリケーションをダウングレードする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## Organization のアプリケーションをダウングレードする

{% data reusables.marketplace.marketplace-org-perms %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.downgrade-app-billing-settings %} {% data reusables.marketplace.choose-new-plan %} {% data reusables.marketplace.choose-new-quantity %} {% data reusables.marketplace.issue-plan-changes %}

## 参考資料

- 「[{% data variables.product.prodname_marketplace %} アプリケーションのキャンセル](/articles/canceling-a-github-marketplace-app/)」
