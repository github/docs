---
title: webhookの作成
intro: 'webhookの構築、webhookが{% data variables.product.prodname_dotcom %}上で待ち受けるイベントの選択、webhookのペイロードを受信して管理するサーバーのセットアップ方法を学んでください。'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: f07c5de7acd3c5be5236765236d24a6938e3b91f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112366'
---
[Webhook の基本][webhooks-overview]を理解したので、Webhook で動作する独自の統合を構築するプロセスを見ていきましょう。 このチュートリアルでは、1日あたりに受け取るIssueの数に基づいて、リポジトリの人気の度合いをリストするリポジトリwebhookを作成します。

webhookの作成は、2ステップのプロセスです。 まず、webhookを{% data variables.product.product_name %}を通じてどのように動作させたいのかをセットアップする必要があります。これはすなわち、どのイベントを待ち受けるのかということです。 その後、ペイロードを受信して管理するようにサーバーをセットアップします。


{% data reusables.webhooks.webhooks-rest-api-links %}

## ローカルホストをインターネットに公開する

このチュートリアルでは、{% data variables.product.prodname_dotcom %}からメッセージを受信するためにローカルサーバーを使用します。 そのためには、まずローカル開発環境をインターネットに公開する必要があります。 そのためにngrokを使用しましょう。 ngrokは無料で、主要なオペレーティングシステムで利用できます。 詳細については、[`ngrok` のダウンロード ページ](https://ngrok.com/download)を参照してください。

`ngrok` をインストールしたら、コマンド ラインで `./ngrok http 4567` を実行してローカル ホストを公開できます。 4567は、サーバーがメッセージを受信するポート番号です。 以下のような行が表示されるはずです。

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

`*.ngrok.io` URL をメモします。 webhookのセットアップで利用します。

## Webhook を設定する

webhookは、Organizationもしくは特定のリポジトリにインストールできます。

webhookをセットアップするには、リポジトリもしくはOrganizationのsettings（設定）ページにアクセスしてください。 そこから **[Webhook]** 、 **[Webhook の追加]** の順にクリックします。

または、[Webhook API を使用して][webhook-api] Webhook をビルドして管理することもできます。

webhookには、利用を開始する前にいくつかの設定オプションが必要です。 以下、それぞれの設定について見ていきます。

## ペイロード URL

{% data reusables.webhooks.payload_url %}

このチュートリアル用にローカルで開発しているため、`*.ngrok.io` URL の後に `/payload` を設定します。 たとえば、`http://7e9ea9dc.ngrok.io/payload` のようにします。

## Content type

{% data reusables.webhooks.content_type %} このチュートリアルでは、`application/json` の既定のコンテンツ タイプで問題ありません。

## Secret

{% data reusables.webhooks.secret %}

## SSL の検証

{% data reusables.webhooks.webhooks_ssl %}

## アクティブ

デフォルトでは、webhookの配信は「Active」です。 「Active」の選択を解除することで、webhookのペイロードの配信を無効化できます。

## イベント

イベントは、webhookの中核です。 これらのwebhookは、リポジトリで特定のアクションが行われたときに動作し、それがサーバーのペイロードURLで受信され、処理が行われます。

webhook イベントとそれらがいつ実行されるかの完全なリストについては、[Webhook API][hooks-api] のリファレンスを参照してください。

ここでの Webhook はリポジトリ内の Issue を扱うので、 **[個別のイベントを選択する]** をクリックしてから、 **[Issue]** をクリックします。 トリガーされた Webhook の発行イベントを受け取るには、**[アクティブ]** を選択します。 また、デフォルトオプションを使ってすべてのイベントを選択することもできます。

完了したら、 **[Webhook の追加]** をクリックします。 

これでwebhookができたので、ローカルサーバーをセットアップしてwebhookをテストしましょう。 その方法については、[サーバーの構成](/webhooks/configuring/)に進んでください。

### ワイルドカードイベント

すべてのイベントに対して Webhook を設定するには、ワイルドカード (`*`) 文字を使って Webhook イベントを指定します。 ワイルドカードイベントを追加すると、設定されたすべての既存のイベントはワイルドカードイベントで置き換えられ、サポートされるすべてのイベントについてペイロードが送信されます。 また、将来追加される可能性のある新しいイベントも自動的に受信されるようになります。

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
