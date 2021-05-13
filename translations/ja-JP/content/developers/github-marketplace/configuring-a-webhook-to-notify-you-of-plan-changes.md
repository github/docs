---
title: プランの変更を通知するようwebhookを設定する
intro: '[ドラフトの{% data variables.product.prodname_marketplace %}リストを作成](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)したあと、顧客のアカウントのプランに変更があった場合に通知するよう、webhookを設定できます。 webhookを設定すると、アプリケーション中で[`marketplace_purchase`イベントタイプを処理](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)できるようになります。'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing/
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



{% data variables.product.prodname_marketplace %}のイベントwebhookは、アプリケーションの{% data variables.product.prodname_marketplace %}リストページからのみセットアップできます。 他のすべてのイベントは、[アプリケーションの開発者設定ページ](https://github.com/settings/developers)から設定できます。 {% data variables.product.prodname_marketplace %}のリストを作成していない場合は、「[ドラフトの{% data variables.product.prodname_marketplace %}リストの作成](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)」を読んで、その方法を学んでください。

### webhookの作成

{% data variables.product.prodname_marketplace %}リストのwebhookを作成するには、[{% data variables.product.prodname_marketplace %}リストページ](https://github.com/marketplace/manage)の左のサイドバーで**Webhook**をクリックしてください。 webhookを設定するのに必要な、以下のwebhookの設定オプションが表示されます。

#### Payload URL

{% data reusables.webhooks.payload_url %}

#### Content type

{% data reusables.webhooks.content_type %} GitHubは、`application/json`コンテンツタイプの利用をおすすめします。

#### Secret

{% data reusables.webhooks.secret %}

#### Active

デフォルトでは、webhookの配信は「Active」です。 「Active」の選択を解除すれば、開発の間webhookペイロードの配信を無効にできます。 webhookの配信を無効にした場合、レビューのためにアプリケーションをサブミットする前には「Active」を選択しなければなりません。

### webhookの配信の表示

{% data variables.product.prodname_marketplace %} webhookを設定すると、アプリケーションの[{% data variables.product.prodname_marketplace %}リスト](https://github.com/marketplace/manage)の**Webhook**ページから、`POST`リクエストのペイロードを調べることができるようになります。 GitHubは、失敗した配信の試行を再送信しません。 GitHubが送信したすべてのwebhookのペイロードを、アプリケーションが確実に受信できるようにしてください。

![最近の{% data variables.product.prodname_marketplace %} webhookの配信の調査](/assets/images/marketplace/marketplace_webhook_deliveries.png)
