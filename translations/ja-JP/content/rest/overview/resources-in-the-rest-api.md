---
title: REST API のリソース
intro: '{% data variables.product.prodname_dotcom %} API で提供されるリソースをナビゲートする方法を学びます。'
redirect_from:
  - /rest/initialize-the-repo/
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


公式の {% data variables.product.product_name %} REST API を構成するリソースについて説明しています。 ご不明な点やご要望がございましたら、{% data variables.contact.contact_support %} までご連絡ください。

### 最新バージョン

デフォルトでは、`{% data variables.product.api_url_code %}` へのすべてのリクエストが REST API の **v3** [バージョン](/developers/overview/about-githubs-apis)を受け取ります。 [`Accept` ヘッダを介してこのバージョンを明示的にリクエストする](/rest/overview/media-types#request-specific-version)ことをお勧めします。

    Accept: application/vnd.github.v3+json

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

GitHub の GraphQL API についての情報は、[v4 ドキュメント](/graphql)を参照してください。 GraphQL への移行についての情報は、「[REST から移行する](/graphql/guides/migrating-from-rest-to-graphql)」を参照してください。

{% endif %}

### スキーマ

{% if currentVersion == "free-pro-team@latest" %}すべての API アクセスは HTTPS 経由で行われ、{% else %}API は{% endif %} `{% data variables.product.api_url_code %}` からアクセスされます。  すべてのデータは
JSON として送受信されます。

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/1.1 200 OK
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> Status: 200 OK
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4987
> X-RateLimit-Reset: 1350085394{% if enterpriseServerVersions contains currentVersion %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

空白のフィールドは、省略されるのではなく `null` として含まれます。

すべてのタイムスタンプは ISO 8601 形式で返されます。

    YYYY-MM-DDTHH:MM:SSZ

タイムスタンプのタイムゾーンの詳細については、[このセクション](#timezones)を参照してください。

#### 要約表現

リソースのリストをフェッチすると、レスポンスにはそのリソースの属性の_サブセット_が含まれます。 これは、リソースの「要約」表現です。 （一部の属性では、API が提供する計算コストが高くなります。 パフォーマンス上の理由から、要約表現はそれらの属性を除外します。 これらの属性を取得するには、「詳細な」表現をフェッチします。）

**例**: リポジトリのリストを取得すると、各リポジトリの要約表現が表示されます。 ここでは、[octokit](https://github.com/octokit) Organization が所有するリポジトリのリストを取得します。

    GET /orgs/octokit/repos

#### 詳細な表現

個々のリソースをフェッチすると、通常、レスポンスにはそのリソースの_すべて_の属性が含まれます。 これは、リソースの「詳細」表現です。 （承認によって、表現に含まれる詳細の内容に影響する場合があることにご注意ください。）

**例**: 個別のリポジトリを取得すると、リポジトリの詳細な表現が表示されます。 ここでは、[octokit/octokit.rb](https://github.com/octokit/octokit.rb) リポジトリをフェッチします。

    GET /repos/octokit/octokit.rb

ドキュメントには、各 API メソッドのレスポンス例が記載されています。 レスポンス例は、そのメソッドによって返されるすべての属性を示しています。

### 認証

{% if currentVersion == "github-ae@latest" %} {% data variables.product.product_name %} REST API への認証には、[Webアプリケーションフロー](/developers/apps/authorizing-oauth-apps#web-application-flow)で OAuth2 トークンを作成することをお勧めします。 {% else %}{% data variables.product.product_name %} REST API を使用して認証する方法は 2 つあります。{% endif %} 認証を必要とするリクエストは、場所によって `403 Forbidden` ではなく `404 Not Found` を返します。  これは、許可されていないユーザにプライベートリポジトリが誤って漏洩するのを防ぐためです。

#### Basic 認証

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

#### OAuth2 トークン（ヘッダに送信）

```shell
$ curl -H "Authorization: token <em>OAUTH-TOKEN</em>" {% data variables.product.api_url_pre %}
```

{% note %}

注: GitHub では、Authorization ヘッダを使用して OAuth トークンを送信することをお勧めしています。

{% endnote %}

[OAuth2 の詳細](/apps/building-oauth-apps/)をお読みください。  OAuth2 トークンは、本番アプリケーションの [Web アプリケーションフロー](/developers/apps/authorizing-oauth-apps#web-application-flow)で取得できることに注意してください。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
#### OAuth2 キー/シークレット

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

`client_id` と `client_secret` を使用してもユーザとして認証_されず_、OAuth アプリケーションを識別してレート制限を増やすだけです。 アクセス許可はユーザにのみ付与され、アプリケーションには付与されません。また、認証されていないユーザに表示されるデータのみが返されます。 このため、サーバー間のシナリオでのみ OAuth2 キー/シークレットを使用する必要があります。 OAuth アプリケーションのクライアントシークレットをユーザーに漏らさないようにしてください。

プライベートモードでは、OAuth2 キーとシークレットを使用して認証することはできません。認証しようとすると `401 Unauthorized` が返されます。 詳しい情報については、 「[プライベートモードを有効化する](/enterprise/admin/installation/enabling-private-mode)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

[認証されていないレート制限の詳細](#increasing-the-unauthenticated-rate-limit-for-oauth-applications)をお読みください。

{% endif %}

#### ログイン失敗の制限

無効な認証情報で認証すると、`401 Unauthorized` が返されます。

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/1.1 401 Unauthorized

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

API は、無効な認証情報を含むリクエストを短期間に複数回検出すると、`403 Forbidden` で、そのユーザに対するすべての認証試行（有効な認証情報を含む）を一時的に拒否します。

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
-u <em>valid_username</em>:<em>valid_token</em> {% endif %}{% if enterpriseServerVersions contains currentVersion %}-u <em>valid_username</em>:<em>valid_password</em> {% endif %}
> HTTP/1.1 403 Forbidden
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

### パラメータ

多くの API メソッドはオプションのパラメータを選択しています。 `GET` リクエストでは、パスのセグメントとして指定されていないパラメータは、HTTP クエリ文字列型パラメータとして渡すことができます。

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

この例では、パスの `:owner` と `:repo` パラメータに「vmg」と「redcarpet」の値が指定され、クエリ文字列型で `:state` が渡されます。

`POST`、`PATCH`、`PUT`、および `DELETE` リクエストでは、URL に含まれていないパラメータは、Content-Type が「application/json」の JSON としてエンコードする必要があります。

```shell
$ curl -i -u username -d '{"scopes":["public_repo"]}' {% data variables.product.api_url_pre %}/authorizations
```

### ルートエンドポイント

ルートエンドポイントに `GET` リクエストを発行して、REST API がサポートするすべてのエンドポイントカテゴリを取得できます。

```shell
$ curl {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
-u <em>username</em>:<em>token</em> {% endif %}{% if enterpriseServerVersions contains currentVersion %}-u <em>username</em>:<em>password</em> {% endif %}{% data variables.product.api_url_pre %}
```

### GraphQL グローバルノード ID

REST API を介して `node_id` を検索し、それらを GraphQL 操作で使用する方法について詳しくは、「[グローバルノード ID を使用する](/graphql/guides/using-global-node-ids)」のガイドを参照してください。

### クライアントエラー

リクエストの本文を受信する API 呼び出しのクライアントエラーには、次の 3 つのタイプがあります。

1. 無効なJSONを送信すると、`400 Bad Request` レスポンスが返されます。
   
        HTTP/1.1 400 Bad Request
        Content-Length: 35
       
        {"message":"Problems parsing JSON"}

2. 間違ったタイプの JSON 値を送信すると、`400 Bad Request` レスポンスが返されます。
   
        HTTP/1.1 400 Bad Request
        Content-Length: 40
       
        {"message":"Body should be a JSON object"}

3. 無効なフィールドを送信すると、`422 Unprocessable Entity` レスポンスが返されます。
   
        HTTP/1.1 422 Unprocessable Entity
        Content-Length: 149
       
        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

すべてのエラーオブジェクトにはリソースとフィールドのプロパティがあるため、クライアントは問題の内容を認識することができます。  また、フィールドの問題点を知らせるエラーコードもあります。  発生する可能性のある検証エラーコードは次のとおりです。

| エラーコード名          | 説明                                                                          |
| ---------------- | --------------------------------------------------------------------------- |
| `missing`        | リソースが存在しません。                                                                |
| `missing_field`  | リソースの必須フィールドが設定されていません。                                                     |
| `invalid`        | フィールドのフォーマットが無効です。  Review the documentation for more specific information. |
| `already_exists` | 別のリソースに、このフィールドと同じ値があります。  これは、一意のキー（ラベル名など）が必要なリソースで発生する可能性があります。          |
| `unprocessable`  | 入力が無効です。                                                                    |

リソースはカスタム検証エラー（`code` が `custom`）を送信する場合もあります。 カスタムエラーには常にエラーを説明する `message` フィールドがあり、ほとんどのエラーには、エラーの解決に役立つ可能性があるコンテンツを指す `documentation_url` フィールドも含まれます。

### HTTP リダイレクト

API v3 は、必要に応じて HTTP リダイレクトを使用します。 クライアントは、リクエストがリダイレクトされる可能性があることを想定する必要があります。 HTTP リダイレクトの受信はエラー*ではなく*、クライアントはそのリダイレクトに従う必要があります。 リダイレクトのレスポンスには、クライアントがリクエストを繰り返す必要があるリソースの URI を含む `Location` ヘッダフィールドがあります。

| ステータスコード    | 説明                                                                                                                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `301`       | Permanent redirection（恒久的なリダイレクト）。 リクエストに使用した URI は、`Location`ヘッダフィールドで指定されたものに置き換えられています。 このリソースに対する今後のすべてのリクエストは、新しい URI に送信する必要があります。 |
| `302`、`307` | Temporary redirection（一時的なリダイレクト）。 リクエストは、`Location` ヘッダフィールドで指定された URI に逐語的に繰り返される必要がありますが、クライアントは今後のリクエストで元の URI を引き続き使用する必要があります。     |

その他のリダイレクトステータスコードは、HTTP 1.1 仕様に従って使用できます。

### HTTP メソッド

API v3 は、可能な限り各アクションに適切な HTTPメソッドを使用しようとします。

| メソッド     | 説明                                                                                                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HEAD`   | HTTP ヘッダ情報のみを取得するために、任意のリソースに対して発行できます。                                                                                                                          |
| `GET`    | リソースを取得するために使用します。                                                                                                                                               |
| `POST`   | リソースを作成するために使用します。                                                                                                                                               |
| `PATCH`  | 部分的な JSON データでリソースを更新するために使用します。 たとえば、Issue リソースには `title` と `body` の属性があります。 A `PATCH` request may accept one or more of the attributes to update the resource. |
| `PUT`    | リソースまたはコレクションを置き換えるために使用します。 `body` 属性のない `PUT` リクエストでは、必ず `Content-Length` ヘッダをゼロに設定してください。                                                                     |
| `DELETE` | リソースを削除するために使用します。                                                                                                                                               |

### ハイパーメディア

すべてのリソースには、他のリソースにリンクしている 1 つ以上の `*_url` プロパティがある場合があります。  これらは、適切な API クライアントが自分で URL を構築する必要がないように、明示的な URL を提供することを目的としています。  API クライアントには、これらを使用することを強くお勧めしています。  そうすることで、開発者が今後の API のアップグレードを容易に行うことができます。  すべての URL は、適切な [RFC 6570][rfc] URI テンプレートであることが前提となります。

次に、[uri_template][uri] などを使用して、これらのテンプレートを展開できます。

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"
    
    >> tmpl.expand :all => 1
    => "/notifications?all=1"
    
    >> tmpl.expand :all => 1, :participating => 1
    => "/notifications?all=1&participating=1"

### ページネーション

複数のアイテムを返すリクエストは、デフォルトで 30 件ごとにページ分けされます。  `page` パラメータを使用すると、さらにページを指定できます。 一部のリソースでは、`per_page` パラメータを使用してカスタムページサイズを最大 100 に設定することもできます。 技術的な理由により、すべてのエンドポイントが `per_page` パラメータを尊重するわけではないことに注意してください。例については、[イベント](/rest/reference/activity#events)を参照してください。

```shell
$ curl '{% data variables.product.api_url_pre %}/user/repos?page=2&per_page=100'
```

ページ番号は 1 から始まり、`page` パラメータを省略すると最初のページが返されることに注意してください。

カーソルベースのページネーションを使用するエンドポイントもあります。 カーソルとは、結果セットで場所を示す文字列です。 カーソルベースのページネーションでは、結果セットで「ページ」という概念がなくなるため、特定のページに移動することはできません。 かわりに、`before` または `after` パラメータを使用して結果の中を移動できます。

ページネーションの詳細については、[ページネーションでトラバースする][pagination-guide]のガイドをご覧ください。

#### リンクヘッダ

{% note %}

**注釈:** 独自の URL を作成するのではなく、Link ヘッダ値を使用して呼び出しを形成することが重要です。

{% endnote %}

[Link ヘッダ](http://tools.ietf.org/html/rfc5988)には、ページネーション情報が含まれています。 例:

    Link: <{% data variables.product.api_url_code %}/user/repos?page=3&per_page=100>; rel="next",
      <{% data variables.product.api_url_code %}/user/repos?page=50&per_page=100>; rel="last"

_この例は、読みやすいように改行されています。_

エンドポイントでカーソルベースのページネーションを使用する場合:

    Link: <{% data variables.product.api_url_code %}/orgs/ORG/audit-log?after=MTYwMTkxOTU5NjQxM3xZbGI4VE5EZ1dvZTlla09uWjhoZFpR&before=>; rel="next",

この `Link` レスポンスヘッダには、1 つ以上の[ハイパーメディア](/rest#hypermedia)リンク関係が含まれています。その一部には、[URI テンプレート](http://tools.ietf.org/html/rfc6570)としての拡張が必要な場合があります。

使用可能な `rel` の値は以下のとおりです。

| 名前      | 説明                |
| ------- | ----------------- |
| `次`     | 結果のすぐ次のページのリンク関係。 |
| `last`  | 結果の最後のページのリンク関係。  |
| `first` | 結果の最初のページのリンク関係。  |
| `prev`  | 結果の直前のページのリンク関係。  |

### レート制限

Basic 認証または OAuth を使用する API リクエストの場合、1 時間あたり最大 5,000 件のリクエストを作成できます。 認証されたリクエストは、[Basic 認証](#basic-authentication)または [OAuth トークン](#oauth2-token-sent-in-a-header)のどちらが使用されたかに関係なく、認証されたユーザに関連付けられます。 つまり、ユーザが認証したすべての OAuth アプリケーションは、同じユーザが所有する異なるトークンで認証する場合、1 時間あたり 5,000 リクエストという同じ割り当てを共有します。

{% if currentVersion == "free-pro-team@latest" %}

{% data variables.product.prodname_ghe_cloud %} アカウントに属するユーザの場合、同じ {% data variables.product.prodname_ghe_cloud %} アカウントが所有するリソースに OAuth トークンを使用して行うリクエストについては、1 時間当たりのリクエスト制限が 15,000 件まで増加します。

{% endif %}

認証されていないリクエストでは、レート制限により 1 時間あたり最大 60 リクエストまで可能です。 認証されていないリクエストは、リクエストを行っているユーザではなく、発信元の IP アドレスに関連付けられます。

{% data reusables.enterprise.rate_limit %}

[Search API にはカスタムのレート制限ルール](/rest/reference/search#rate-limit)があることに注意してください。

API リクエストの返された HTTP ヘッダは、現在のレート制限ステータスを示しています。

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

| ヘッダ名                    | 説明                                                                            |
| ----------------------- | ----------------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | 1 時間あたりのリクエスト数の上限。                                                            |
| `X-RateLimit-Remaining` | 現在のレート制限ウィンドウに残っているリクエストの数。                                                   |
| `X-RateLimit-Reset`     | 現在のレート制限ウィンドウが [UTC エポック秒](http://en.wikipedia.org/wiki/Unix_time)でリセットされる時刻。 |

時刻に別の形式を使用する必要がある場合は、最新のプログラミング言語で作業を完了できます。 たとえば、Web ブラウザでコンソールを開くと、リセット時刻を JavaScript の Date オブジェクトとして簡単に取得できます。

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

レート制限を超えると、次のようなエラーレスポンスが返されます。

```shell
> HTTP/1.1 403 Forbidden
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> Status: 403 Forbidden
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 0
> X-RateLimit-Reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

API ヒットを発生させることなく、[レート制限ステータスを確認](/rest/reference/rate-limit)できます。

#### OAuth アプリケーションの認証されていないレート制限を増やす

OAuth アプリケーションが認証されていない呼び出しをより高いレート制限で行う必要がある場合は、エンドポイントルートの前にアプリのクライアント ID とシークレットを渡すことができます。

```shell
$ curl -u my_client_id:my_client_secret {% data variables.product.api_url_pre %}/user/repos
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4966
> X-RateLimit-Reset: 1372700873
```

{% note %}

**注釈:** クライアントシークレットを他のユーザと共有したり、クライアント側のブラウザコードに含めたりしないでください。 こちらに示す方法は、サーバー間の呼び出しにのみ使用してください。

{% endnote %}

#### レート制限内に収める

Basic 認証または OAuth を使用してレート制限を超えた場合、API レスポンスをキャッシュし、[条件付きリクエスト](#conditional-requests)を使用することで問題を解決できます。

#### 不正利用レート制限

{% data variables.product.product_name %} で高品質のサービスを提供するにあたって、API を使用するときに、いくつかのアクションに追加のレート制限が適用される場合があります。 たとえば、API を使用してコンテンツを急速に作成する、webhook を使用する代わりに積極的にポーリングする、複数の同時リクエストを行う、計算コストが高いデータを繰り返しリクエストするなどの行為によって、不正利用レート制限が適用される場合があります。

不正利用レート制限は、API の正当な使用を妨げることを意図したものではありません。 通常のレート制限が、ユーザにとって唯一の制限であるべきです。 優良な API ユーザにふさわしい振る舞いをしているかどうかを確認するには、[ベストプラクティスのガイドライン](/guides/best-practices-for-integrators/)をご覧ください。

アプリケーションがこのレート制限をトリガーすると、次のような有益なレスポンスを受け取ります。

```shell
> HTTP/1.1 403 Forbidden
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have triggered an abuse detection mechanism and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#abuse-rate-limits"
> }
```

{% if currentVersion == "free-pro-team@latest" %}

### User agent の必要性

すべての API リクエストには、有効な `User-Agent` ヘッダを含める必要があります。 `User-Agent` ヘッダのないリクエストは拒否されます。 `User-Agent` ヘッダの値には、{% data variables.product.product_name %} のユーザ名またはアプリケーション名を使用してください。 そうすることで、問題がある場合にご連絡することができます。

次に例を示します。

```shell
User-Agent: Awesome-Octocat-App
```

cURL はデフォルトで有効な `User-Agent` ヘッダを送信します。 cURL（または代替クライアント）を介して無効な `User-Agent` ヘッダを提供すると、`403 Forbidden` レスポンスが返されます。

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

### 条件付きリクエスト

ほとんどのレスポンスでは `ETag` ヘッダが返されます。 多くのレスポンスでは `Last-Modified` ヘッダも返されます。 これらのヘッダーの値を使用して、それぞれ `If-None-Match` ヘッダと `If-Modified-Since` ヘッダを使い、それらのリソースに対して後続のリクエストを行うことができます。 リソースが変更されていない場合、サーバーは `304 Not Modified` を返します。

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**注釈**: 条件付きリクエストを作成して 304 レスポンスを受信しても、[レート制限](#rate-limiting)にはカウントされないため、可能な限り使用することをお勧めします。

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/1.1 200 OK
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 200 OK
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/1.1 304 Not Modified
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 304 Not Modified
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/1.1 304 Not Modified
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 304 Not Modified
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873
```

### オリジン間リソース共有

API は、任意のオリジンからの AJAX リクエストに対して、オリジン間リソース共有（CORS）をサポートします。 [CORS W3C Recommendation](http://www.w3.org/TR/cors/)、または HTML 5 セキュリティガイドの[こちらの概要](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki)をご確認ください。

`http://example.com` にアクセスするブラウザから送信されたサンプルリクエストは次のとおりです。

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/1.1 302 Found
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

CORS プリフライトリクエストは次のようになります。

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

### JSON-P コールバック

`?callback` パラメータを任意の GET 呼び出しに送信して、結果を JSON 関数でラップできます。  これは通常、ブラウザがクロスドメインの問題を回避することにより、{% data variables.product.product_name %} のコンテンツを Web ページに埋め込む場合に使用されます。  レスポンスには、通常の API と同じデータ出力と、関連する HTTP ヘッダ情報が含まれます。

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "X-RateLimit-Limit": "5000",
>     "X-RateLimit-Remaining": "4966",
>     "X-RateLimit-Reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

JavaScript ハンドラを記述して、コールバックを処理できます。 以下は、試すことができる最も簡易な例です。

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }
    
    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';
    
    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>
    
    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

すべてのヘッダは HTTP ヘッダと同じ文字列型の値ですが、例外の 1つとして「Link」があります。  Link ヘッダは事前に解析され、`[url, options]` タプルの配列として渡されます。

リンクは次のようになります。

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... コールバック出力では次のようになります。

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

### タイムゾーン

新しいコミットの作成など、新しいデータを作成する一部のリクエストでは、タイムスタンプを指定または生成するときにタイムゾーン情報を提供できます。 API 呼び出しのタイムゾーン情報を決定する際に、優先順位に従って次のルールを適用します。

* [ISO 8601 タイムスタンプにタイムゾーン情報を明示的に提供する](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [`Time-Zone` ヘッダを使用する](#using-the-time-zone-header)
* [ユーザが最後に認識されたタイムゾーンを使用する](#using-the-last-known-timezone-for-the-user)
* [他のタイムゾーン情報を含まない UTC をデフォルトにする](#defaulting-to-utc-without-other-timezone-information)

#### ISO 8601 タイムスタンプにタイムゾーン情報を明示的に提供する

タイムスタンプを指定できる API 呼び出しの場合、その正確なタイムスタンプを使用します。 これは[コミット API](/rest/reference/git#commits) の例です。

これらのタイムスタンプは、`2014-02-27T15:05:06+01:00` のようになります。 これらのタイムスタンプを指定する方法については、[こちらの例](/rest/reference/git#example-input)も参照してください。

#### `Time-Zone` ヘッダを使用する

[Olson データベースの名前のリスト](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)に従ってタイムゾーンを定義する `Time-Zone` ヘッダを提供することができます。

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

つまり、このヘッダが定義するタイムゾーンで API 呼び出しが行われた時のタイムスタンプが生成されます。 たとえば、[コンテンツ API](/rest/reference/repos#contents) は追加または変更ごとに git コミットを生成し、タイムスタンプとして現在の時刻を使用します。 このヘッダは、現在のタイムスタンプの生成に使用されたタイムゾーンを決定します。

#### ユーザが最後に認識されたタイムゾーンを使用する

`Time-Zone` ヘッダが指定されておらず、API への認証された呼び出しを行う場合、認証されたユーザが最後に認識されたタイムゾーンが使用されます。 最後に認識されたタイムゾーンは、{% data variables.product.product_name %} Web サイトを閲覧するたびに更新されます。

#### 他のタイムゾーン情報を含まない UTC をデフォルトにする

上記の手順で情報が得られない場合は、UTC をタイムゾーンとして使用して git コミットを作成します。

[rfc]: http://tools.ietf.org/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

[pagination-guide]: /guides/traversing-with-pagination
