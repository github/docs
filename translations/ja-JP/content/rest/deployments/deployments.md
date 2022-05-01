---
title: デプロイメント
intro: Deployments APIを使うと、デプロイメント及びデプロイメント環境の作成と削除ができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

デプロイメントとは、特定の ref (ブランチ、SHA、タグ) を配備するためるリクエストです。 GitHub は、 外部サーバーがリッスンでき、新しいデプロイメントが作成されたときに実行される [`deployment` イベント](/developers/webhooks-and-events/webhook-events-and-payloads#deployment)をディスバッチします。 デプロイメントにより、開発者や Organization はデプロイメントを中心として、さまざまな種類のアプリケーション (ウェブ、ネイティブなど) を提供するための実装に関する詳細を気にすることなく、疎結合ツールを構築できます。

デプロイメントのステータスを使用すると、外部サービスがデプロイメントに `error`、`failure`、`pending`、`in_progress`、`queued`、`success` ステータスを付けることができ、[`deployment_status` イベント](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status)をリッスンするシステムがその情報を使用できます。

デプロイメントのステータスには、オプションとして `description` と `log_url` を含めることもできます。これによりデプロイメントのステータスがより有用なものになるので、非常におすすめです。 `log_url` はデプロイメントの出力の完全な URL で、`description` はデプロイメントで発生したことの概要を示すものです。

GitHub は、新しいデプロイメント、デプロイメントのステータスが作成されたときに、`deployment` イベント、`deployment_status` イベントをディスパッチします。 これらのイベントにより、サードパーティのインテグレーションがデプロイメントのリクエストに対する応答を受けとり、進展があるたびにステータスを更新できます。

以下は、これらの相互作用がどのように機能するかを示す簡単なシーケンス図です。

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

GitHub は、あなたのサーバーに実際にアクセスすることはないということは覚えておきましょう。 デプロイメントイベントとやり取りするかどうかは、サードパーティインテグレーション次第です。 複数のシステムがデプロイメントイベントをリッスンできます。コードをサーバーにプッシュする、ネイティブコードを構築するなどを行うかどうかは、それぞれのシステムが決めることができます。

{% ifversion not ghae %}`public_repo` スコープおよび{% endif %}`repo` スコープはコードにもアクセス権を付与するのに対し、</code>repo_deployment</0> [OAuth scope](/developers/apps/scopes-for-oauth-apps) は、リポジトリのコードにアクセス権を付与**せず**、デプロイメントおよびデプロイメントステータスに絞ってアクセス権を付与することに注意してください。

### 非アクティブのデプロイメント

デプロイメントのステータスを `success` に設定すると、同じ環境の同じリポジトリ内の一時的でない、非本番環境のデプロイメントはすべて `inactive` になります。 これを回避するには、デプロイメントのステータスを作成する前に、`auto_inactive` を `false` に設定します。

`state` を `inactive` に設定することで、一時的な環境が存在しなくなったことを伝えることができます。  `state` を `inactive` に設定すると、{% data variables.product.prodname_dotcom %} でデプロイメントが `destroyed` と表示され、アクセス権が削除されます。
