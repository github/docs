---
title: webhookの作成
intro: 'webhookの構築、webhookが{% data variables.product.prodname_dotcom %}上で待ち受けるイベントの選択、webhookのペイロードを受信して管理するサーバーのセットアップ方法を学んでください。'
redirect_from:
  - /webhooks/creating
  - /developers/webhooks-and-events/creating-webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---

Now that we understand [the basics of webhooks][webhooks-overview], let's go through the process of building out our own webhook-powered integration. In this tutorial, we'll create a repository webhook that will be responsible for listing out how popular our repository is, based on the number of issues it receives per day.

webhookの作成は、2ステップのプロセスです。 You'll first need to set up how you want your webhook to behave through {% data variables.product.product_name %}: what events should it listen to. その後、ペイロードを受信して管理するようにサーバーをセットアップします。


{% data reusables.webhooks.webhooks-rest-api-links %}

### Exposing localhost to the internet

For the purposes of this tutorial, we're going to use a local server to receive messages from {% data variables.product.prodname_dotcom %}. So, first of all, we need to expose our local development environment to the internet. We'll use ngrok to do this. ngrok is available, free of charge, for all major operating systems. For more information, see [the ngrok download page](https://ngrok.com/download).

After installing ngrok, you can expose your localhost by running `./ngrok http 4567` on the command line. 4567 is the port number on which our server will listen for messages. 以下のような行が表示されるはずです。

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Make a note of the `*.ngrok.io` URL. We'll use it to set up our webhook.

### Setting up a webhook

webhookは、Organizationもしくは特定のリポジトリにインストールできます。

webhookをセットアップするには、リポジトリもしくはOrganizationのsettings（設定）ページにアクセスしてください。 そこから**Webhooks**をクリックし、続いて**Add webhook（webhookの追加）**をクリックしてください。

あるいは、[Webhooks APIを通じて][webhook-api]webhookの構築と管理を行うこともできます。

webhookには、利用を開始する前にいくつかの設定オプションが必要です。 以下、それぞれの設定について見ていきます。

### Payload URL

{% data reusables.webhooks.payload_url %}

Since we're developing locally for our tutorial, we'll set it to the `*.ngrok.io` URL, followed by `/payload`. For example, `http://7e9ea9dc.ngrok.io/payload`.

### Content type

{% data reusables.webhooks.content_type %} このチュートリアルでは、デフォルトのコンテントタイプを`application/json`にしておけば問題ありません。

### Secret

{% data reusables.webhooks.secret %}

### SSL verification

{% data reusables.webhooks.webhooks_ssl %}

### Active

デフォルトでは、webhookの配信は「Active」です。 「Active」の選択を解除することで、webhookのペイロードの配信を無効化できます。

### イベント

イベントは、webhookの中核です。 これらのwebhookは、リポジトリで特定のアクションが行われたときに動作し、それがサーバーのペイロードURLで受信され、処理が行われます。

webhookイベントと、それらのイベントがいつ動作するのかの完全なリストは[webhook API][hooks-api]リファレンスにあります。

Since our webhook is dealing with issues in a repository, we'll click **Let me select individual events** and then **Issues**. トリガーされたwebhookに対するIssueイベントを受信できるよう、必ず**Active**を選択してください。 また、デフォルトオプションを使ってすべてのイベントを選択することもできます。

完了したら、**Add webhook（webhookの追加）**をクリックしてください。

Now that you've created the webhook, it's time to set up our local server to test the webhook. その方法は[サーバーの設定](/webhooks/configuring/)を見てください。

#### Wildcard event

すべてのイベントに対してwebhookを設定するには、ワイルドカード（`*`）文字を使ってwebhookイベントを指定してください。 ワイルドカードイベントを追加すると、設定されたすべての既存のイベントはワイルドカードイベントで置き換えられ、サポートされるすべてのイベントについてペイロードが送信されます。 また、将来追加される可能性のある新しいイベントも自動的に受信されるようになります。

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
