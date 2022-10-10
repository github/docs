---
title: プランの変更を通知するようwebhookを設定する
intro: '[ドラフトの {% data variables.product.prodname_marketplace %} リストを作成](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)した後、顧客アカウント プランの変更が発生したときに通知する Webhook を構成できます。 Webhook を構成したら、アプリで [`marketplace_purchase` イベントの種類を処理](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)できます。'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089703'
---
{% data variables.product.prodname_marketplace %}のイベントwebhookは、アプリケーションの{% data variables.product.prodname_marketplace %}リストページからのみセットアップできます。 他のすべてのイベントは、[アプリケーションの開発者設定ページ](https://github.com/settings/developers)から設定できます。 まだ {% data variables.product.prodname_marketplace %} リストを作成していない場合は、「[{% data variables.product.prodname_marketplace %} のリストのドラフト](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)」を読んで方法を確認してください。

## Webhook の作成

{% data variables.product.prodname_marketplace %} リストの Webhook を作成するには、[{% data variables.product.prodname_marketplace %} リスト ページ](https://github.com/marketplace/manage)の左サイドバーにある **[Webhook]** をクリックします。 webhookを設定するのに必要な、以下のwebhookの設定オプションが表示されます。

### ペイロード URL

{% data reusables.webhooks.payload_url %}

### Content type

{% data reusables.webhooks.content_type %} GitHub は、`application/json` コンテンツ タイプの使用をお勧めします。

### Secret

{% data reusables.webhooks.secret %}

### アクティブ

デフォルトでは、webhookの配信は「Active」です。 「Active」の選択を解除すれば、開発の間webhookペイロードの配信を無効にできます。 webhookの配信を無効にした場合、レビューのためにアプリケーションをサブミットする前には「Active」を選択しなければなりません。

## webhookの配信の表示

{% data variables.product.prodname_marketplace %} Webhook を構成すると、アプリケーションの [{% data variables.product.prodname_marketplace %} リスト](https://github.com/marketplace/manage)の **[Webhook]** ページから `POST` 要求ペイロードを検査できるようになります。 GitHubは、失敗した配信の試行を再送信しません。 GitHubが送信したすべてのwebhookのペイロードを、アプリケーションが確実に受信できるようにしてください。

![最近の{% data variables.product.prodname_marketplace %} webhookの配信の調査](/assets/images/marketplace/marketplace_webhook_deliveries.png)
