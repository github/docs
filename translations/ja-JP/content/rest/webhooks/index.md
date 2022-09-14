---
title: Webhooks
intro: webhooks APIを使うと、リポジトリのwebhookの作成と管理ができます。
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
children:
  - /repo-config
  - /repo-deliveries
  - /repos
redirect_from:
  - /rest/reference/webhooks
ms.openlocfilehash: 9216b892bbc19752266cea22d88bec655363ecaf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882344'
---
リポジトリ Webhook を使用すると、リポジトリで特定のイベントが発生した場合に必ず HTTP `POST` ペイロードを受け取ることができます。 {% data reusables.webhooks.webhooks-rest-api-links %}

Organization のすべてのリポジトリからイベントを受信するため単一の webhook を設定する場合は、[Organization Webhooks](/rest/reference/orgs#webhooks) の API ドキュメントを参照してください。

REST API に加えて、{% data variables.product.prodname_dotcom %} もリポジトリの [PubSubHubbub](#pubsubhubbub) ハブとして機能できます。

## webhook の受信

{% data variables.product.product_name %} で webhook ペイロードを送信するには、インターネットからサーバーにアクセスできる必要があります。 暗号化されたペイロードを HTTPS 経由で送信できるように、SSL の使用も強く推奨します。

### webhook ヘッダー

{% data variables.product.product_name %} は、イベントタイプとペイロード識別子を区別するために、複数の HTTP ヘッダーも送信します。 詳細については、[Webhook のヘッダー](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers)に関する記事を参照してください。

## PubSubHubbub

GitHub は、すべてのリポジトリの [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) ハブとしても機能できます。 PSHB はシンプルな公開/サブスクライブプロトコルで、トピックが更新されたときにサーバーが更新を受信できるよう登録できます。 更新は HTTP POST リクエストでコールバック URL に送信されます。
GitHub リポジトリのプッシュに対するトピック URL のフォーマットは以下の通りです。

`https://github.com/{owner}/{repo}/events/{event}`

イベントには、任意の使用可能な webhook イベントを指定します。 詳細については、「[webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads)」を参照してください。

### 応答形式

既定の形式は、[既存の post-receive フックで想定される形式](/post-receive-hooks/)、つまり POST の `payload` パラメーターとして送信される JSON 本文になります。  `Accept` ヘッダーまたは `.json` 拡張子を使用して、Raw 形式の JSON 本文を受信するように指定することもできます。

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

### コールバック URL

コールバック URL では、`http://` プロトコルを使用できます。

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

#### パラメーター

名前 | 型 | 説明
-----|------|--------------
``hub.mode``|`string` | **[必須]** 。 `subscribe` または `unsubscribe` のいずれかです。
``hub.topic``|`string` |**[必須]** 。  GitHub リポジトリがサブスクライブする URI。  パスは、`/{owner}/{repo}/events/{event}` の形式にしてください。
``hub.callback``|`string` | トピックの更新を受信する URI。
``hub.secret``|`string` | 送信する本文コンテンツの ハッシュ署名を生成する共有秘密鍵。  生の要求本文と {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` または `X-Hub-Signature-256` ヘッダー{% elsif ghae %}`X-Hub-Signature-256` ヘッダー{% endif %}の内容と比較することで、GitHub からのプッシュを検証できます。 詳細については [PubSubHubbub のドキュメント](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify)を参照してください。
