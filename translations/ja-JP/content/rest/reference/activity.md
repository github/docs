---
title: アクティビティ
redirect_from:
  - /v3/activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## イベント

イベント API は、{% data variables.product.prodname_dotcom %} イベントへの読み取り専用 API です。 これらのイベントは、サイト上のさまざまなアクティビティストリームを強化します。

イベント API は、{% data variables.product.product_name %} でのアクティビティによってトリガーされるさまざまなタイプのイベントを返すことができます。 The Events API can return different types of events triggered by activity on {% data variables.product.product_name %}. For more information about the specific events that you can receive from the Events API, see "[{% data variables.product.prodname_dotcom %} Event types](/developers/webhooks-and-events/github-event-types)." 詳しい情報については、「[Issue イベント API](/rest/reference/issues#events)」を参照してください。

イベントは「ETag」ヘッダでポーリングするために最適化されています。 新しいイベントがトリガーされていない場合は、「304 Not Modified」というレスポンスが表示され、現在のレート制限は変更されません。 また、ポーリングを許可する頻度（秒単位）を指定する「X-Poll-Interval」ヘッダもあります。 サーバー負荷が高い場合、長時間かかることがあります。 ヘッダに従ってください。

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/1.1 200 OK
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# ETag 値を囲む引用符は重要
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

イベントはページネーションをサポートしていますが、`per_page` オプションはサポートされていません。 固定ページサイズは 30 項目です。 最大 10 ページ、合計 300 イベントのフェッチがサポートされています。 詳細については、「[ページネーションをトラバースする](/rest/guides/traversing-with-pagination) 」を参照してください。

過去 90 日以内に作成されたイベントのみがタイムラインに含まれます。 90 日以上経過しているイベントは含まれません（タイムラインのイベントの総数が300 未満の場合でも）。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## フィード

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'feeds' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Atom フィードの取得例

Atom 形式のフィードを取得するには、`Accept` ヘッダで `application/atom+xml` タイプを指定する必要があります。 たとえば、GitHub のセキュリティアドバイザリの Atom フィードを取得するには、次のように記述します。

    curl -H "Accept: application/atom+xml" https://github.com/security-advisories

#### レスポンス

```shell
Status: 200 OK
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">
  <id>tag:github.com,2008:/security-advisories</id>
  <link rel="self" type="application/atom+xml" href="https://github.com/security-advisories.atom"/>
  <title>GitHub Security Advisory Feed</title>
  <author>
    <name>GitHub</name>
  </author>
  <updated>2019-01-14T19:34:52Z</updated>
     <entry>
      <id>tag:github.com,2008:GHSA-abcd-12ab-23cd</id>
      <published>2018-07-26T15:14:52Z</published>
      <updated>2019-01-14T19:34:52Z</updated>
      <title type="html">[GHSA-abcd-12ab-23cd] Moderate severity vulnerability that affects Octoapp</title>
        <category term="NPM"/>
      <content type="html">
        &lt;p&gt;Octoapp node module before 4.17.5 suffers from a Modification of Assumed-Immutable Data (MAID) vulnerability via defaultsDeep, merge, and mergeWith functions, which allows a malicious user to modify the prototype of &quot;Object&quot; via &lt;strong&gt;proto&lt;/strong&gt;, causing the addition or modification of an existing property that will exist on all objects.&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Affected Packages&lt;/strong&gt;&lt;/p&gt;

  &lt;dl&gt;
      &lt;dt&gt;Octoapp&lt;/dt&gt;
      &lt;dd&gt;Ecosystem: npm&lt;/dd&gt;
      &lt;dd&gt;Severity: moderate&lt;/dd&gt;
      &lt;dd&gt;Versions: &amp;lt; 4.17.5&lt;/dd&gt;
        &lt;dd&gt;Fixed in: 4.17.5&lt;/dd&gt;
  &lt;/dl&gt;

          &lt;p&gt;&lt;strong&gt;References&lt;/strong&gt;&lt;/p&gt;

  &lt;ul&gt;
      &lt;li&gt;https://nvd.nist.gov/vuln/detail/CVE-2018-123&lt;/li&gt;
  &lt;/ul&gt;

      </content>
    </entry>
</feed>
```

## 通知

ユーザは、Watch しているリポジトリでの会話の通知を受け取ります。

* Issue とそのコメント
* プルリクエストとそのコメント
* コミットに関するコメント

ユーザが関わっている場合、Watch 解除したリポジトリでの会話の通知も送信されます。

* **@メンション**
* Issue の割り当て
* ユーザの作者のコミット、またはコミット
* ユーザが参加しているディスカッション

すべての通知 API 呼び出しには、`notifications` または `repo` API スコープが必要です。  これを行うと、一部の Issue およびコミットコンテンツへの読み取り専用アクセス権が付与されます。 それぞれのエンドポイントから Issue とコミットにアクセスするには、`repo` スコープが必要です。

通知は「スレッド」として返されます。  スレッドには、Issue、プルリクエスト、またはコミットの現在のディスカッションに関する情報が含まれています。

通知は、`Last-Modified` ヘッダでポーリングするために最適化されています。  新しい通知がない場合は、`304 Not Modified` レスポンスが表示され、現在のレート制限は変更されません。  `X-Poll-Interval` ヘッダで、ポーリングを許可する頻度（秒単位）を指定します。  サーバー負荷が高い場合、長時間かかることがあります。  ヘッダに従ってください。

``` shell
# リクエストに認証を追加
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/1.1 200 OK
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Last-Modified ヘッダを正確に渡す
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

### 通知理由

通知 API からレスポンスを取得するとき、各ペイロードには `reason` というタイトルのキーがあります。 これらは、通知をトリガーするイベントに対応しています。

通知を受け取る `reason`（理由）には、次のようなものがあります。

| 理由名                | 説明                                                                                                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assign`           | Issue に割り当てられた。                                                                                                                                                             |
| `作者`               | スレッドを作成した。                                                                                                                                                                  |
| `コメント`             | スレッドにコメントした。                                                                                                                                                                |
| `招待`               | リポジトリへのコントリビューションへの招待を承諾した。                                                                                                                                                 |
| `manual`           | スレッドをサブスクライブした（Issue またはプルリクエストを介して）。                                                                                                                                       |
| `メンション`            | コンテンツで具体的に**@メンション**された。                                                                                                                                                    |
| `review_requested` | 自分、または自分が所属している Team が、プルリクエストのレビューを求められた。{% if currentVersion == "free-pro-team@latest" %}
| `security_alert`   | {% data variables.product.prodname_dotcom %} が、リポジトリに[セキュリティの脆弱性](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)を発見した。{% endif %}
| `state_change`     | スレッドの状態を変更した（たとえば、Issue をクローズしたり、プルリクエストをマージしたりした）。                                                                                                                         |
| `subscribed`       | リポジトリを Watch している。                                                                                                                                                          |
| `team_mention`     | メンションされた Team に所属していた。                                                                                                                                                      |

`reason` はスレッドごとに変更され、後の通知の `reason` が異なる場合は変更される可能性があることに注意してください。

たとえば、Issue の作者である場合は、その Issue に関するその後の通知には、`author`（作者）の `reason`（理由）が含まれます。 その後、同じ Issue について**@メンション**されている場合、その後に取得する通知に `mention`（メンション）する `reason`（理由）が含まれます。 その `reason` は、再度メンションされたかどうかにかかわらず、`mention` として残ります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'notifications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Star

リポジトリに Star を付けると、ユーザがリポジトリをブックマークできます。 おおよその関心レベルを示すために、リポジトリの横に Star が表示されます。 Star は通知やアクティビティフィードには影響しません。

### Star と Watch

2012年8月に、{% data variables.product.prodname_dotcom %} での [Watch 方法を変更](https://github.com/blog/1204-notifications-stars)しました。 多くの API クライアントアプリケーションは、このデータへのアクセスに元の「Watchしているユーザ」のエンドポイントを使用しています。 現在、その代わりに「Star」エンドポイントを使用できます（以下で説明）。 詳しい情報については、[Watchしているユーザ API の変更に関する投稿](https://developer.github.com/changes/2012-09-05-watcher-api/)と「[リポジトリを Watch している API](/rest/reference/activity#watching)」を参照してください。

### Star 付きのカスタムメディアタイプ

Star 付きの REST APIでサポートされているカスタムメディアタイプが 1 つあります。 このカスタムメディアタイプを使用すると、Star が作成された時刻を示す `starred_at` タイムスタンププロパティを含むレスポンスを受け取ります。 レスポンスには、カスタムメディアタイプが含まれていない場合に返されるリソースを含む 2 番目のプロパティもあります。 リソースを含むプロパティは、`user` または `repo` のいずれかになります。

    application/vnd.github.v3.star+json

メディアタイプの詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'starring' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Watch

リポジトリを Watch すると、ユーザは登録され、新しいディスカッションやユーザのアクティビティフィードのイベントに関する通知を受け取ります。 基本的なリポジトリブックマークについては、「[リポジトリの Star 付け](/rest/reference/activity#starring)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'watching' %}{% include rest_operation %}{% endif %}
{% endfor %}
