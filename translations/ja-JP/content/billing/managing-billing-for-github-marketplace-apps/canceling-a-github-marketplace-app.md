---
title: GitHub Marketplace アプリケーションのキャンセル
intro: '{% data variables.product.prodname_marketplace %}のアプリケーションは、いつでもアカウントからキャンセルおよび削除できます。'
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088038'
---
アプリケーションをキャンセルすると、そのプランは現在の支払いサイクルが終わるまで有効のままとなり、 次の支払いサイクルで無効となります。 詳細については、「[{% data variables.product.prodname_marketplace %} の請求について](/articles/about-billing-for-github-marketplace)」を参照してください。

有料プランの無料トライアルをキャンセルすると、そのプランはすぐにキャンセルされ、キャンセルしたアプリケーションにアクセスできなくなります。 無料トライアル期間中にキャンセルしない場合、アカウントで設定された支払い方法で、トライアル期間の終了時にプランに対して課金されます。 詳細については、「[{% data variables.product.prodname_marketplace %} の請求について](/articles/about-billing-for-github-marketplace)」を参照してください。

{% data reusables.marketplace.downgrade-marketplace-only %}

## 個人アカウントのアプリケーションをキャンセルする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.cancel-app-billing-settings %} {% data reusables.marketplace.cancel-app %}

## 個人アカウントのアプリケーション無料トライアルをキャンセルする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.marketplace.cancel-free-trial-billing-settings %} {% data reusables.marketplace.cancel-app %}

## Organization の無料トライアルをキャンセルする

{% data reusables.marketplace.marketplace-org-perms %}


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.cancel-app-billing-settings %} {% data reusables.marketplace.cancel-app %}

## Organization のアプリケーション無料トライアルをキャンセルする

{% data reusables.marketplace.marketplace-org-perms %}


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.marketplace.cancel-free-trial-billing-settings %} {% data reusables.marketplace.cancel-app %}
