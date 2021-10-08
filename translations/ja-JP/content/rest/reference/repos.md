---
title: リポジトリ
intro: 'Repos APIを使うと、パブリック及びプライベートの{% data variables.product.product_name %}リポジトリのワークフローの作成、管理、制御ができます。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt %}
## Autolinks

{% tip %}

**Note:** The Autolinks API is in beta and may change.

{% endtip %}

To help streamline your workflow, you can use the API to add autolinks to external resources like JIRA issues and Zendesk tickets. For more information, see "[Configuring autolinks to reference external resources](/github/administering-a-repository/configuring-autolinks-to-reference-external-resources)."

{% data variables.product.prodname_github_apps %} require repository administration permissions with read or write access to use the Autolinks API.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'autolinks' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## ブランチ

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branches' %}{% include rest_operation %}{% endif %}
{% endfor %}

## コラボレータ

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## コメント

### コミットコメントのカスタムメディアタイプ

以下がコミットコメントでサポートされているメディアタイプです。 You can read more about the use of media types in the API [here](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## コミット

Repo Commits API は、リポジトリ内の子コミットのリスティング、表示、比較をサポートしています。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt %}
## コミュニティ

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## コンテンツ

これらの API エンドポイントを使用すると、リポジトリ内の Base64 でエンコードされたコンテンツを作成、変更、削除できます。 Raw 形式またはレンダリングされた HTML (サポートされている場合) をリクエストするには、リポジトリのコンテンツにカスタムメディアタイプを使用します。

### リポジトリコンテンツのカスタムメディアタイプ

[READMEs](/rest/reference/repos#get-a-repository-readme), [files](/rest/reference/repos#get-repository-content), and [symlinks](/rest/reference/repos#get-repository-content) support the following custom media types:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

ファイルのコンテンツを取得するには、`.raw` メディアタイプを使ってください。

Markdown や AsciiDoc などのマークアップファイルでは、`.html` メディアタイプを使用して、レンダリングされた HTML を取得できます。 マークアップ言語は、オープンソースの[マークアップライブラリ](https://github.com/github/markup)を使用して HTML にレンダリングされます。

[All objects](/rest/reference/repos#get-repository-content) support the following custom media type:

    application/vnd.github.VERSION.object

コンテンツのタイプに関係なく、一貫したオブジェクトフォーマットを取得するには、`object` メディアタイプパラメータを使用します。 たとえば、レスポンスはディレクトリに対するオブジェクトの配列ではなく、オブジェクトの配列を含む `entries` 属性のオブジェクトになります。

API でのメディアタイプの使用について詳しくは、[こちら](/rest/overview/media-types)をご覧ください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## デプロイキー

{% data reusables.repositories.deploy-keys %}

デプロイキーは、以下の API エンドポイントを使用するか、GitHub を使用することでセットアップできます。 GitHub でデプロイキーを設定する方法については、「[デプロイキーを管理する](/developers/overview/managing-deploy-keys)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## デプロイメント

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

Note that the `repo_deployment` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to deployments and deployment statuses **without** granting access to repository code, while the {% ifversion not ghae %}`public_repo` and{% endif %}`repo` scopes grant permission to code as well.


### 非アクティブのデプロイメント

When you set the state of a deployment to `success`, then all prior non-transient, non-production environment deployments in the same repository with the same environment name will become `inactive`. これを回避するには、デプロイメントのステータスを作成する前に、`auto_inactive` を `false` に設定します。

`state` を `inactive` に設定することで、一時的な環境が存在しなくなったことを伝えることができます。  `state` を `inactive` に設定すると、{% data variables.product.prodname_dotcom %} でデプロイメントが `destroyed` と表示され、アクセス権が削除されます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'deployments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
## 環境

Environments APIを使うと、環境を作成、設定、削除できます。 環境に関する詳しい情報については「[環境](/actions/reference/environments)」を参照してください。 環境のシークレットの管理については「[シークレット](/rest/reference/actions#secrets)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'environments' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## フォーク

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 招待

Repository Invitations API を使用すると、他のユーザにリポジトリでコラボレーションするようユーザや外部サービスを招待できます。 招待されたユーザ (または招待されたユーザを代行する外部サービス) は、招待を受諾または拒否できます。

`repo` スコープはコードにも招待にもアクセス権を付与するのに対し、`repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) は招待のみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。

### ユーザをリポジトリに招待する

コラボレータを追加するには、API エンドポイントを使用します。 詳しい情報については「[リポジトリコラボレータを追加する](/rest/reference/repos#add-a-repository-collaborator)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghae or ghes > 3.2 %}

## Git LFS

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'lfs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## マージ

Repo Merging API は、リポジトリ内にあるブランチのマージをサポートしています。 これは、ローカルリポジトリにおいて 1 つのブランチを別のブランチにマージし、それを {% data variables.product.product_name %} にプッシュするのと本質的には同じことです。 この利点は、マージがサーバー側で行われ、ローカルリポジトリが必要ないことです。 これは自動化や、ローカルリポジトリの保守が煩雑で非効率的なツールに適しています。

認証されたユーザは、このエンドポイントを通じて実行されたあらゆるマージの作者になります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'merging' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ページ

{% data variables.product.prodname_pages %} API は、{% data variables.product.prodname_pages %} の設定や、ビルドのステータスについての情報を取得します。 サイトとビルドに関する情報は、{% ifversion not ghae %}Webサイトがパブリックの場合であっても{% endif %}認証を受けたユーザだけがアクセスできます。 For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

レスポンスに `status` キーを持つ {% data variables.product.prodname_pages %} API エンドポイントにおいては、値は以下のいずれかになります。
* `null`: サイトはまだビルドされていません。
* `queued`: ビルドがリクエストされたが、まだ開始していません。
* `building`: ビルドが進行中です。
* `built`: サイトがビルドされています。
* `errored`: ビルド中にエラーが発生したことを示します。

GitHub Pages サイトの情報を返す {% data variables.product.prodname_pages %} API エンドポイントにおいては、JSON のレスポンスには以下が含まれます。
* `html_url`: レンダリングされた Pages サイトの絶対 URL (スキームを含む) 。 たとえば、`https://username.github.io` などです。
* `source`: レンダリングされた Pages サイトのソースブランチおよびディレクトリを含むオブジェクト。 これは以下のものが含まれます。
   - `branch`: [サイトのソースファイル](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)を公開するために使用するリポジトリのブランチ。 たとえば、_main_ or _gh-pages_ などです。
   - `path`: サイトの公開元のリポジトリディレクトリ。 `/` または `/docs` のどちらかとなります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pages' %}{% include rest_operation %}{% endif %}
{% endfor %}

## リリース

{% note %}

**注釈:** Releases API は Downloads API を置き換えるものです。 リリースを返し、アセットをリリースする、この API のエンドポイントからダウンロード数と ブラウザのダウンロード URL を取得できます。

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'releases' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 統計

Repository Statistics API を使用すると、{% data variables.product.product_name %} がさまざまなタイプのリポジトリのアクティビティを視覚化するために用いるデータをフェッチできます。

### キャッシングについて

リポジトリの統計情報を計算するのは負荷が高い操作なので、可能な限りキャッシュされたデータを返すようにしています。  リポジトリの統計をクエリした際にデータがキャッシュされていなかった場合は、`202` レスポンスを受け取ります。また、この統計をまとめるため、バックグラウンドでジョブが開始します。 このジョブが完了するまで少し待ってから、リクエストを再度サブミットしてください。 ジョブが完了していた場合、リクエストは `200` レスポンスを受けとり、レスポンスの本文には統計情報が含まれています。

リポジトリの統計情報は、リポジトリのデフォルトブランチに SHA でキャッシュされ、デフォルトのブランチにプッシュすると統計情報のキャッシュがリセットされます。

### 統計で除外されるコミットのタイプ

API によって公開される統計は、[別のリポジトリグラフ](/github/visualizing-repository-data-with-graphs/about-repository-graphs)で表示される統計と同じものです。

要約すると、
- すべての統計は、マージコミットが除外されます。
- コントリビューター統計では、空のコミットも除外されます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ステータス

ステータス API を使用すると、外部サービスがコミットに `error`、 `failure`、`pending`、`success` ステータスを付けることができ、このステータスはコミットが含まれるプルリクエストに反映されます。

ステータスには、オプションとして `description` と `target_url` を含めることもできます。これにより GitHub UI でステータスをより有用なものにできるので、非常におすすめです。

たとえば、継続的インテグレーションサービスの典型的な使用方法の一つが、ステータスを使用してコミットに合格と不合格の印を付けることです。  `target_url` でビルドの出力先の完全な URL、`description` でビルドで発生したことの概要を示すといったようにします。

ステータスには、どのサービスがそのステータスを提供しているかを示す `context` を含めることができます。 たとえば、継続的インテグレーションサービスのプッシュステータスに `ci` のコンテキストを、セキュリティ監査ツールのプッシュステータスに `security` のコンテキストを含めることができます。  その後、[特定のリファレンス複合的なステータス](/rest/reference/repos#get-the-combined-status-for-a-specific-reference)を使用して、コミットの全体のステータスを取得できます。

`repo` スコープはコードにもステータスにもアクセス権を付与するのに対し、`repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) はステータスのみに絞ってアクセス権を付与し、リポジトリのコードにはアクセス権を付与**しない**ことに注意してください。

GitHub App を開発していて、外部サービスについて詳細な情報を提供したい場合は、[Checks API](/rest/reference/checks) を使用できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt %}
## トラフィック

プッシュアクセスを持つリポジトリに対し、トラフィック API はリポジトリグラフが提供する情報へのアクセスを提供します。 For more information, see "<a href="/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository" class="dotcom-only">Viewing traffic to a repository</a>."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## webhook

Repository webhooks allow you to receive HTTP `POST` payloads whenever certain events happen in a repository. {% data reusables.webhooks.webhooks-rest-api-links %}

Organization のすべてのリポジトリからイベントを受信するため単一の webhook を設定する場合は、[Organization Webhooks](/rest/reference/orgs#webhooks) の API ドキュメントを参照してください。

In addition to the REST API, {% data variables.product.prodname_dotcom %} can also serve as a [PubSubHubbub](#pubsubhubbub) hub for repositories.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

### webhook の受信

{% data variables.product.product_name %} で webhook ペイロードを送信するには、インターネットからサーバーにアクセスできる必要があります。 暗号化されたペイロードを HTTPS 経由で送信できるように、SSL の使用も強く推奨します。

#### webhook ヘッダー

{% data variables.product.product_name %} は、イベントタイプとペイロード識別子を区別するために、複数の HTTP ヘッダーも送信します。 See [webhook headers](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) for details.

### PubSubHubbub

GitHub は、すべてのリポジトリに対する [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) のハブとして機能することもできます。 PSHB はシンプルな公開/サブスクライブプロトコルで、トピックが更新されたときにサーバーが更新を受信できるよう登録できます。 更新は HTTP POST リクエストでコールバック URL に送信されます。 GitHub リポジトリのプッシュに対するトピック URL のフォーマットは以下の通りです。

`https://github.com/{owner}/{repo}/events/{event}`

イベントには、任意の使用可能な webhook イベントを指定します。 詳しい情報については、「[webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads)」を参照してください。

#### レスポンスのフォーマット

デフォルトのフォーマットは、[既存の post-receive フックから予想できます](/post-receive-hooks/)。すなわち、POST で `payload` パラメータとして送信される JSON の本文です。  また、`Accept` ヘッダまたは `.json` 拡張子で、Raw 形式の JSON 本文を受信するよう指定できます。

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### コールバック URL

コールバック URL は `http://` プロトコルを使用できます。

    # Send updates to postbin.org
    http://postbin.org/123

#### サブスクライブ

GitHub PubSubHubbub のエンドポイントは `{% data variables.product.api_url_code %}/hub` です。 curl でリクエストに成功すると、以下のように表示されます。

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub リクエストは複数回送信できます。 フックがすでに存在する場合は、リクエストに従って変更されます。

##### パラメータ

| 名前             | 種類       | 説明                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hub.mode`     | `string` | **必須**。 `subscribe` または `unsubscribe`。                                                                                                                                                                                                                                                                                                                                           |
| `hub.topic`    | `string` | **必須**。  GitHub リポジトリがサブスクライブする URI。  パスのフォーマットは `/{owner}/{repo}/events/{event}` としてください。                                                                                                                                                                                                                                                                                       |
| `hub.callback` | `string` | トピックの更新を受信する URI。                                                                                                                                                                                                                                                                                                                                                                |
| `hub.secret`   | `string` | 送信する本文コンテンツの ハッシュ署名を生成する共有秘密鍵。  GitHubからきたプッシュを、そのリクエストのボディを{% ifversion fpt or ghes > 2.22 %}`X-Hub-Signature`もしくは`X-Hub-Signature-256`ヘッダ{% elsif ghes < 3.0 %}`X-Hub-Signature`ヘッダ{% elsif ghae %}`X-Hub-Signature-256`ヘッダ{% endif %}と比較して、検証できます。 詳細は、 [PubSubHubbub のドキュメント](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify)を参照してください。 |
