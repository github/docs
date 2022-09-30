---
title: GItHub Marketplace API用のRESTエンドポイント
intro: '{% data variables.product.prodname_marketplace %}上でのアプリケーションの管理を支援するために、以下の{% data variables.product.prodname_marketplace %} APIエンドポイントを使ってください。'
redirect_from:
  - /apps/marketplace/github-marketplace-api-endpoints
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /developers/github-marketplace/rest-endpoints-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: REST API
ms.openlocfilehash: aac7df5600863521c482b8a13c31abf8fd103ecf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145112494'
---
以下は、Marketplaceのリストで利用できる便利なエンドポイントです。

* [プランのリスト](/rest/reference/apps#list-plans)
* [プランのアカウントのリスト](/rest/reference/apps#list-accounts-for-a-plan)
* [アカウントのサブスクリプション プランの取得](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [認証されたユーザーのサブスクリプションのリスト](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

{% data variables.product.prodname_marketplace %} APIを使用する際の認証の受け方の詳細については、以下のページを参照してください。

* [OAuth App の認可オプション](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [GitHub App の認可オプション](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**注:** [REST API のレート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)は、すべての {% data variables.product.prodname_marketplace %} API エンドポイントに適用されます。

{% endnote %}
