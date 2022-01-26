---
title: webhook
intro: The webhooks API allows you to create and manage webhooks for your repositories.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Repository webhooks allow you to receive HTTP `POST` payloads whenever certain events happen in a repository. {% data reusables.webhooks.webhooks-rest-api-links %}

Organization のすべてのリポジトリからイベントを受信するため単一の webhook を設定する場合は、[Organization Webhooks](/rest/reference/orgs#webhooks) の API ドキュメントを参照してください。

In addition to the REST API, {% data variables.product.prodname_dotcom %} can also serve as a [PubSubHubbub](#pubsubhubbub) hub for repositories.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## リポジトリ webhook

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repos' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repository webhook configuration

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-config' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Repository webhook deliveries

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-deliveries' %}{% include rest_operation %}{% endif %}
{% endfor %}

## webhook の受信

{% data variables.product.product_name %} で webhook ペイロードを送信するには、インターネットからサーバーにアクセスできる必要があります。 暗号化されたペイロードを HTTPS 経由で送信できるように、SSL の使用も強く推奨します。

### webhook ヘッダー

{% data variables.product.product_name %} は、イベントタイプとペイロード識別子を区別するために、複数の HTTP ヘッダーも送信します。 詳細は「[webhook ヘッダー](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers)」を参照してください。

## PubSubHubbub

GitHub は、すべてのリポジトリに対する [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) のハブとして機能することもできます。 PSHB はシンプルな公開/サブスクライブプロトコルで、トピックが更新されたときにサーバーが更新を受信できるよう登録できます。 更新は HTTP POST リクエストでコールバック URL に送信されます。 GitHub リポジトリのプッシュに対するトピック URL のフォーマットは以下の通りです。

`https://github.com/{owner}/{repo}/events/{event}`

イベントには、任意の使用可能な webhook イベントを指定します。 詳しい情報については、「[webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads)」を参照してください。

### レスポンスのフォーマット

デフォルトのフォーマットは、[既存の post-receive フックから予想できます](/post-receive-hooks/)。すなわち、POST で `payload` パラメータとして送信される JSON の本文です。  また、`Accept` ヘッダまたは `.json` 拡張子で、Raw 形式の JSON 本文を受信するよう指定できます。

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### コールバック URL

コールバック URL は `http://` プロトコルを使用できます。

    # Send updates to postbin.org
    http://postbin.org/123

### サブスクライブ

GitHub PubSubHubbub のエンドポイントは `{% data variables.product.api_url_code %}/hub` です。 curl でリクエストに成功すると、以下のように表示されます。

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub リクエストは複数回送信できます。 フックがすでに存在する場合は、リクエストに従って変更されます。

#### パラメータ

| 名前             | 種類       | 説明                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hub.mode`     | `string` | **必須**。 `subscribe` または `unsubscribe`。                                                                                                                                                                                                                                                                                                                                                   |
| `hub.topic`    | `string` | **必須**。  GitHub リポジトリがサブスクライブする URI。  パスのフォーマットは `/{owner}/{repo}/events/{event}` としてください。                                                                                                                                                                                                                                                                                               |
| `hub.callback` | `string` | トピックの更新を受信する URI。                                                                                                                                                                                                                                                                                                                                                                        |
| `hub.secret`   | `string` | 送信する本文コンテンツの ハッシュ署名を生成する共有秘密鍵。  GitHubからきたプッシュを、そのリクエストのボディを{% ifversion fpt or ghes > 2.22 or ghec %}`X-Hub-Signature`もしくは`X-Hub-Signature-256`ヘッダ{% elsif ghes < 3.0 %}`X-Hub-Signature`ヘッダ{% elsif ghae %}`X-Hub-Signature-256`ヘッダ{% endif %}と比較して、検証できます。 詳細は、 [PubSubHubbub のドキュメント](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify)を参照してください。 |
