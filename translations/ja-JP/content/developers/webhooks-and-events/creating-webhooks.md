---
title: webhookの作成
intro: 'webhookの構築、webhookが{% data variables.product.prodname_dotcom %}上で待ち受けるイベントの選択、webhookのペイロードを受信して管理するサーバーのセットアップ方法を学んでください。'
redirect_from:
  - /webhooks/creating
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - webhook
---



[webhookの基礎][webhooks-overview]を理解したので、webhookで動作する独自のインテグレーションオン構築プロセスを見ていきましょう。 このチュートリアルでは、1日あたりに受け取るIssueのの数に基づいて、リポジトリの人気の度合いをリストする役目を持つリポジトリwebhookを作成します。

webhookの作成は、2ステップのプロセスです。 まず、webhookを{% data variables.product.product_name %}を通じてどのように動作させたいのかをセットアップする必要があります。これはすなわち、どのイベントを待ち受けるのかということです。 その後、ペイロードを受信して管理するようにサーバーをセットアップします。


{% data reusables.webhooks.webhooks-rest-api-links %}

### webhookのセットアップ

webhookは、Organizationもしくは特定のリポジトリにインストールできます。

webhookをセットアップするには、リポジトリもしくはOrganizationのsettings（設定）ページにアクセスしてください。 そこから**Webhooks**をクリックし、続いて**Add webhook（webhookの追加）**をクリックしてください。

あるいは、[Webhooks APIを通じて][webhook-api]webhookの構築と管理を行うこともできます。

webhookには、利用を開始する前にいくつかの設定オプションが必要です。 以下、それぞれの設定について見ていきます。

### ペイロードURL

{% data reusables.webhooks.payload_url %}

チュートリアルではローカルで開発をしているので、`http://localhost:4567/payload`に設定しましょう。 その理由は[サーバーの設定](/webhooks/configuring/)ドキュメントで説明します。

### コンテントタイプ

{% data reusables.webhooks.content_type %} このチュートリアルでは、デフォルトのコンテントタイプを`application/json`にしておけば問題ありません。

### シークレット

{% data reusables.webhooks.secret %}

### SSLの検証

{% data reusables.webhooks.webhooks_ssl %}

### Active

デフォルトでは、webhookの配信は「Active」です。 「Active」の選択を解除することで、webhookのペイロードの配信を無効化できます。

### イベント

イベントは、webhookの中核です。 これらのwebhookは、リポジトリで特定のアクションが行われたときに動作し、それがサーバーのペイロードURLで受信され、処理が行われます。

webhookイベントと、それらのイベントがいつ動作するのかの完全なリストは[webhook API][hooks-api]リファレンスにあります。

ここでのwebhookはリポジトリ内のIssueを扱うので、**Let me select individual events（個別のイベントを選択する）**をクリックし、そして**Issue**をクリックしてください。 トリガーされたwebhookに対するIssueイベントを受信できるよう、必ず**Active**を選択してください。 また、デフォルトオプションを使ってすべてのイベントを選択することもできます。

完了したら、**Add webhook（webhookの追加）**をクリックしてください。 ふう！ これでwebhookができたので、ローカルサーバーをセットアップしてwebhookをテストしましょう。 その方法は[サーバーの設定](/webhooks/configuring/)を見てください。

#### ワイルドカードイベント

すべてのイベントに対してwebhookを設定するには、ワイルドカード（`*`）文字を使ってwebhookイベントを指定してください。 ワイルドカードイベントを追加すると、設定されたすべての既存のイベントはワイルドカードイベントで置き換えられ、サポートされるすべてのイベントについてペイロードが送信されます。 また、将来追加される可能性のある新しいイベントも自動的に受信されるようになります。

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
