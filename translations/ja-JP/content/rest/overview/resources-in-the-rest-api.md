---
title: REST API のリソース
intro: '{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIが提供するリソースにアクセスする方法を学んでください。'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: c7928ce90b887d6fa3bd5342fc1633b3e30983f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192850'
---
{% ifversion api-date-versioning %}
## API バージョン

使用可能なリソースは、REST API のバージョンによって異なる場合があります。 `X-GitHub-Api-Version` ヘッダーを使用して、API のバージョンを指定する必要があります。 詳しい情報については、「[API のバージョン](/rest/overview/api-versions)」を参照してください。

{% endif %}

## スキーマ

{% ifversion fpt or ghec %}すべての API アクセスは HTTPS 経由であり、{% else %}API は {% endif %}`{% data variables.product.api_url_code %}` からアクセスされます。  すべてのデータは JSON として送受信されます。

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

空白のフィールドは、省略されるのではなく `null` として含まれます。

すべてのタイムスタンプは、 ISO 8601フォーマットのUTC時間で返されます。

    YYYY-MM-DDTHH:MM:SSZ

タイムスタンプのタイムゾーンの詳細については、[このセクション](#timezones)を参照してください。

### 要約表現

リソースのリストをフェッチすると、レスポンスにはそのリソースの属性の _サブセット_ が含まれます。 これは、リソースの「要約」表現です。 （一部の属性では、API が提供する計算コストが高くなります。
パフォーマンス上の理由から、要約表現はそれらの属性を除外します。
これらの属性を取得するには、「詳細な」表現をフェッチします。）

**例**: リポジトリのリストを取得すると、各リポジトリの要約表現が表示されます。 ここで、[octokit](https://github.com/octokit) 組織が所有するリポジトリの一覧を取得します。

    GET /orgs/octokit/repos

### 詳細な表現

個々のリソースをフェッチすると、通常、レスポンスにはそのリソースの _すべて_ の属性が含まれます。 これは、リソースの「詳細」表現です。 (承認によって、表現に含まれる詳細の内容に影響する場合があることにご注意ください。)

**例**: 個別のリポジトリを取得すると、リポジトリの詳細表現が表示されます。 ここで、[octokit/octokit.rb](https://github.com/octokit/octokit.rb) リポジトリを取得します。

    GET /repos/octokit/octokit.rb

ドキュメントには、各 API メソッドのレスポンス例が記載されています。 レスポンス例は、そのメソッドによって返されるすべての属性を示しています。

## 認証

{% ifversion ghae %} [Web アプリケーション フロー](/developers/apps/authorizing-oauth-apps#web-application-flow)を通じて OAuth2 トークンを作成して、{% data variables.product.product_name %} REST API に対して認証することをお勧めします。 {% else %}{% data variables.product.product_name %} REST API を使用して認証する方法は 2 つあります。{% endif %} 認証を必要とするリクエストは、場所によって `403 Forbidden` ではなく `404 Not Found` を返します。  これは、許可されていないユーザにプライベートリポジトリが誤って漏洩するのを防ぐためです。

### [基本認証]

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### OAuth2 トークン（ヘッダに送信）

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

注: GitHub では、Authorization ヘッダを使用して OAuth トークンを送信することをお勧めしています。

{% endnote %}

{% note %}

**注:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

[OAuth2 の詳細](/apps/building-oauth-apps/)を確認します。  OAuth2 トークンは、実稼働アプリケーションの [Web アプリケーション フロー](/developers/apps/authorizing-oauth-apps#web-application-flow)を使用して取得できます。

{% ifversion fpt or ghes or ghec %}
### OAuth2 キー/シークレット

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

`client_id` と `client_secret` を使用しても、ユーザーとして認証されることは _ありません_。OAuth アプリを識別してレート制限を引き上げるだけです。 アクセス許可はユーザにのみ付与され、アプリケーションには付与されません。また、認証されていないユーザに表示されるデータのみが返されます。 このため、サーバー間のシナリオでのみ OAuth2 キー/シークレットを使用する必要があります。 OAuth アプリケーションのクライアントシークレットをユーザーに漏らさないようにしてください。

{% ifversion ghes %} プライベート モードでは、OAuth2 キーとシークレットを使用して認証することはできません。認証しようとすると `401 Unauthorized` が返されます。 詳細については、「[プライベート モードの有効化](/admin/configuration/configuring-your-enterprise/enabling-private-mode)」を参照してください。
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

[認証されていないレート制限の詳細](#increasing-the-unauthenticated-rate-limit-for-oauth-apps)を確認します。

{% endif %}

### ログイン失敗の制限

無効な資格情報で認証すると、`401 Unauthorized` が返されます。

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

無効な認証情報を含むリクエストを短期間に複数回検出すると、API は、`403 Forbidden` で、そのユーザに対するすべての認証試行 (有効な認証情報による試行を含む) を一時的に拒否します。

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## パラメーター

多くの API メソッドはオプションのパラメータを選択しています。 `GET` リクエストでは、パスのセグメントとして指定されていないパラメーターは、HTTP クエリ文字列型パラメータとして渡すことができます。

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

この例では、'vmg' の値と 'redcarpet' の値がパスの `:owner` パラメーターと `:repo` パラメーターに指定されているいっぽうで、`:state` はクエリ文字列で渡されています。

`POST`、`PATCH`、`PUT`、`DELETE` の要求については、URL に含まれていないパラメーターは Content-Type が 'application/json' の JSON としてエンコードする必要があります。

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## ルート エンドポイント

ルート エンドポイントに `GET` 要求を発行して、REST API がサポートするすべてのエンドポイント カテゴリを取得できます。

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## GraphQL グローバルノード ID

REST API を使用して `node_id` を検索し、GraphQL 演算で使用する方法の詳細については、「[グローバル ノード ID の使用](/graphql/guides/using-global-node-ids)」に関するガイドを参照してください。

## クライアントエラー

要求の本文を受信する API 呼び出しのクライアント エラーには、次の 3 つの種類があります。

1. 無効な JSON を送信すると、`400 Bad Request` 応答が返されます。

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. 間違った種類の JSON 値を送信すると、`400 Bad
   Request` 応答が発生します。

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. 無効なフィールドを送信すると、`422 Unprocessable Entity` 応答が発生します。

        HTTP/2 422
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

すべてのエラー オブジェクトにはリソースとフィールドのプロパティがあるため、クライアントは何が問題かを認識することができます。  また、フィールドの問題点を知らせるエラー コードもあります。  発生する可能性のある検証エラー コードは次のとおりです。

エラーコード名 | 説明
-----------|-----------|
`missing` | リソースが存在しません。
`missing_field` | リソースの必須フィールドが設定されていません。
`invalid` | フィールドのフォーマットが無効です。  詳細については、ドキュメントを参照してください。
`already_exists` | 別のリソースに、このフィールドと同じ値があります。  これは、一意のキー（ラベル名など）が必要なリソースで発生する可能性があります。
`unprocessable` | 入力が無効です。

リソースは、カスタム検証エラー (ここで`code` は `custom`) を送信する場合もあります。 カスタム エラーには常にエラーを説明する `message` フィールドがあり、ほとんどのエラーには、エラーの解決に役立つ可能性があるコンテンツを指す `documentation_url` フィールドも含まれます。

## HTTP リダイレクト

{% data variables.product.product_name %} REST API では、必要に応じて HTTP リダイレクトが使用されます。 クライアントは、要求がリダイレクトされる可能性があることを想定する必要があります。 HTTP リダイレクトの受信はエラーでは *なく*、クライアントはそのリダイレクトに従う必要があります。 リダイレクトのレスポンスには、クライアントが要求を繰り返す必要があるリソースの URI を含む `Location` ヘッダー フィールドがあります。

状態コード | 説明
-----------|-----------|
`301` | Permanent redirection（恒久的なリダイレクト）。 要求に使用した URI は、`Location` ヘッダー フィールドで指定されたものに置き換えられています。 このリソースに対する今後のすべてのリクエストは、新しい URI に送信する必要があります。
`302`, `307` | Temporary redirection（一時的なリダイレクト）。 要求は、`Location` ヘッダー フィールドで指定された URI に逐語的に繰り返される必要がありますが、クライアントは今後の要求で元の URI を引き続き使用する必要があります。

その他のリダイレクトステータスコードは、HTTP 1.1 仕様に従って使用できます。

## HTTP 動詞

{% data variables.product.product_name %} REST API では、可能な限り、各アクションに適した HTTP 動詞を使用しようとします。 HTTP 動詞では大文字と小文字が区別されることにご注意ください。

動詞 | 説明
-----|-----------
`HEAD` | HTTP ヘッダ情報のみを取得するために、任意のリソースに対して発行できます。
`GET` | リソースを取得するために使用します。
`POST` | リソースを作成するために使用します。
`PATCH` | 部分的な JSON データでリソースを更新するために使用します。 たとえば、Issue リソースには `title` 属性と `body` 属性があります。 `PATCH` 要求は、リソースを更新するために 1 つ以上の属性を受け入れることができます。
`PUT` | リソースまたはコレクションを置き換えるために使用します。 `body` 属性のない `PUT` 要求の場合は、必ず `Content-Length` ヘッダーを 0 に設定してください。
`DELETE` |リソースを削除するために使用します。

## ハイパーメディア

すべてのリソースには、他のリソースにリンクしている 1 つ以上の `*_url` プロパティがある場合があります。  これらは、適切な API クライアントが自身で URL を構築する必要がないように、明示的な URL を提供することを目的としています。  API クライアントでは、これらを使用することを強くお勧めしています。  そうすることで、開発者が将来の API のアップグレードを容易に行うことができます。  すべての URL は、適切な [RFC 6570][rfc] URI テンプレートであることが想定されています。

その後、[uri_template][uri] gem などを使用して、これらのテンプレートを展開できます。

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## 改ページ位置の自動修正

REST API からの応答にたくさんの結果が含まれるとき、{% data variables.product.company_short %} ではページが分割され、結果のサブセットが返されます。 応答のリンク ヘッダーを利用し、データの追加ページを要求できます。 `per_page` クエリ パラメーターがエンドポイントでサポートされる場合、1 ページで返される結果の数を制御できます。 ページネーションの詳細については、「[REST API でページネーションを使用する](/rest/guides/using-pagination-in-the-rest-api)」を参照してください。

## Timeouts

{% data variables.product.prodname_dotcom %} が API を処理するのに 10 秒以上かかると、次に示すように、{% data variables.product.prodname_dotcom %} はリクエストを終了させ、タイムアウトの応答が返されます。

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %} は、API の速度と信頼性を保護するためにタイムアウト ウィンドウを変更する権利を留保します。

## レート制限

{% data variables.location.product_location %} へのさまざまな種類の API 要求は、異なるレート制限に従います。 

加えて、Search APIには専用の制限があります。 詳細については、REST API のドキュメントの「[検索](/rest/reference/search#rate-limit)」を参照してください。

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### 個人アカウントからの要求

{% data variables.product.pat_generic %}で認証するダイレクト API 要求は、ユーザーからサーバーへの要求です。 OAuth AppあるいはGitHub Appは、ユーザが認可した後、user-to-serverリクエストをユーザの代わりに発行することもできます。 詳しい情報については、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」、「[OAuth App の承認](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)」、「[GitHub App の承認](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)」を参照してください。

{% data variables.product.product_name %}は、すべてのuser-to-serverリクエストを認証されたユーザと関連づけます。 OAuth App及びGitHubについては、これはアプリケーションを認可したユーザです。 すべてのuser-to-serverリクエストは、認証されたユーザのレート制限に対してカウントされます。

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

認証されていないリクエストでは、レート制限により 1 時間あたり最大 60 リクエストまで可能です。 認証されていないリクエストは、リクエストを発行した人ではなく、発信元の IP アドレスに関連付けられます。

{% endif %}

{% endif %}

### GitHub Appからのリクエスト

GitHub Appからのリクエストは、user-to-serverあるいはserver-to-serverリクエストのいずれかになります。 GitHub アプリのレート制限の詳細については、「[GitHub アプリのレート制限](/developers/apps/building-github-apps/rate-limits-for-github-apps)」を参照してください。 

### GitHub Actionsからのリクエスト

GitHub Actions ワークフロー内の要求の認証には、組み込みの `GITHUB_TOKEN` を使用できます。 詳細については、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。

`GITHUB_TOKEN` を使用する場合、レート制限は、リポジトリごとに 1 時間あたり 1,000 要求です。{% ifversion fpt or ghec %}{% data variables.location.product_location %} 上の Enterprise アカウントに属するリソースへのアクセスについては、{% data variables.product.prodname_ghe_cloud %} のレート制限が適用され、その制限はリポジトリごとに 1 時間あたり 15,000 要求です。{% endif %}

### レート制限のステータスのチェック

レート制限APIとレスポンスのHTTPヘッダは、任意の時点におけるユーザまたはユーザのアプリケーションが利用できるAPIコール数の信頼できるソースです。

#### レート制限API

レート制限APIを使って、現在の制限に達することなくレート制限のステータスをチェックできます。 詳細については、「[レート制限](/rest/reference/rate-limit)」を参照してください。

#### レート制限HTTPヘッダ

API リクエストの返された HTTP ヘッダは、現在のレート制限ステータスを示しています。

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

ヘッダー名 | [説明]
-----------|-----------|
`x-ratelimit-limit` | 1 時間あたりのリクエスト数の上限。
`x-ratelimit-remaining` | 現在のレート制限ウィンドウに残っているリクエストの数。
`x-ratelimit-used` | 現在のレート制限ウィンドウに残っているリクエストの数。
`x-ratelimit-reset` | 現在のレート制限ウィンドウが [UTC エポック秒単位](http://en.wikipedia.org/wiki/Unix_time)でリセットされる時刻。

時刻に別の形式を使用する必要がある場合は、最新のプログラミング言語で作業を完了できます。 たとえば、Web ブラウザでコンソールを開くと、リセット時刻を JavaScript の Date オブジェクトとして簡単に取得できます。

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

レート制限を超えると、次のようなエラーレスポンスが返されます。

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### OAuth Appの認証されていないレート制限の増加

OAuth Appが認証されていない呼び出しをより高いレート制限で行う必要がある場合は、エンドポイントルートの前にアプリのクライアント ID とシークレットを渡すことができます。

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

**注**: クライアント シークレットを他のユーザーと共有したり、クライアント側のブラウザー コードに含めたりしないでください。 こちらに示す方法は、サーバー間の呼び出しにのみ使用してください。

{% endnote %}

### レート制限内に収める

基本認証または OAuth を使用してレート制限を超えた場合は、API 応答をキャッシュし、[条件付き要求](#conditional-requests)を使用することで問題を解決できる可能性があります。

### セカンダリレート制限

{% data variables.product.product_name %} で高品質のサービスを提供するにあたって、API を使用するときに、いくつかのアクションに追加のレート制限が適用される場合があります。 たとえば、API を使用してコンテンツを急速に作成する、webhook を使用する代わりに積極的にポーリングする、複数の同時リクエストを行う、計算コストが高いデータを繰り返しリクエストするなどの行為によって、セカンダリレート制限が適用される場合があります。

セカンダリレート制限は、API の正当な使用を妨げることを意図したものではありません。 通常のレート制限が、ユーザにとって唯一の制限であるべきです。 優良な API ユーザーにふさわしい振る舞いをしているかどうかを確認するには、「[ベスト プラクティスのガイドライン](/guides/best-practices-for-integrators/)」を参照してください。

アプリケーションがこのレート制限をトリガーすると、次のような有益なレスポンスを受け取ります。

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## User agent の必要性

すべての API 要求に有効な `User-Agent` ヘッダーを含める必要があります。 `User-Agent` ヘッダーのない要求は拒否されます。 `User-Agent` ヘッダの値には、{% data variables.product.product_name %} のユーザー名またはアプリケーション名を使用してください。 そうすることで、問題がある場合にご連絡することができます。

次に例を示します。

```shell
User-Agent: Awesome-Octocat-App
```

cURL は、既定で有効な `User-Agent` ヘッダーを送信します。 cURL を介して (または別のクライアントを介して) 無効な `User-Agent` ヘッダーを指定すると、`403 Forbidden` 応答を受け取ります。

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

## 条件付きリクエスト

ほとんどの応答では `ETag` ヘッダーが返されます。 多くの応答では `Last-Modified` ヘッダーも返されます。 これらのヘッダーの値を使用して、それぞれ `If-None-Match` のヘッダーと `If-Modified-Since` のヘッダーを使用してそれらのリソースに対する後続の要求を行うことができます。 リソースが変更されていない場合、サーバーは `304 Not Modified` を返します。

{% ifversion fpt or ghec %}

{% tip %}

**注**: 条件付き要求を作成して 304 レスポンスを受け取る場合、[レート制限](#rate-limiting)にはカウントされないため、可能な限り使用することをお勧めします。

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## クロス オリジン リソース共有

API では、任意のオリジンからの AJAX 要求に対して、オリジン間リソース共有 (CORS) がサポートされています。
「[CORS W3C の推奨事項](http://www.w3.org/TR/cors/)」、または HTML 5 セキュリティ ガイドの「[この概要](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki)」をお読みください。

`http://example.com` をヒットするブラウザーから送信されたサンプル要求を次に示します。

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

CORS プリフライトリクエストは次のようになります。

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## JSON-P コールバック

`?callback` パラメーターを任意の GET 呼び出しに送信して、結果を JSON 関数でラップできます。  これは通常、クロス ドメインの問題を回避することにより、ブラウザーが {% data variables.product.product_name %} のコンテンツを Web ページに埋め込む場合に使用されます。  応答には、通常の API と同じデータ出力と、関連する HTTP ヘッダー情報が含まれます。

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
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

すべてのヘッダーは HTTP ヘッダーと同じ文字列型の値ですが、例外の 1 つとして "Link" があります。  Link ヘッダーは事前に解析され、`[url, options]` タプルの配列として渡されます。

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

## タイムゾーン

新しいコミットの作成など、新しいデータを作成する一部のリクエストでは、タイムスタンプを指定または生成するときにタイムゾーン情報を提供できます。 そういったAPI 呼び出しのタイムゾーン情報を決定する際に、優先順位に従って次のルールを適用します。

* [ISO 8601 タイムスタンプにタイムゾーン情報を明示的に提供する](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [`Time-Zone` ヘッダーの使用](#using-the-time-zone-header)
* [ユーザーが最後に認識されたタイムゾーンを使用する](#using-the-last-known-timezone-for-the-user)
* [他のタイムゾーン情報を含まない UTC を既定値に設定する](#defaulting-to-utc-without-other-timezone-information)

これらのルールは、APIに渡されたデータに対してのみ適用され、APIが返す日付には適用されないことに注意してください。 "[スキーマ](#schema)" にあるように、API が返すタイムスタンプは UTC 時間であり、ISO 8601 形式です。

### ISO 8601 タイムスタンプにタイムゾーン情報を明示的に提供する

タイムスタンプを指定できる API 呼び出しの場合、その正確なタイムスタンプを使用します。 その例として、[Commits API](/rest/reference/git#commits) があります。

これらのタイムスタンプは `2014-02-27T15:05:06+01:00` のようになります。 これらのタイムスタンプを指定する方法については、[この例](/rest/reference/git#example-input)も参照してください。

### `Time-Zone` ヘッダーの使用

[Olson データベースの名前の一覧](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)に従ってタイムゾーンを定義する `Time-Zone` ヘッダーを指定できます。

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

つまり、このヘッダが定義するタイムゾーンで API 呼び出しが行われた時のタイムスタンプが生成されます。 たとえば、[Contents API](/rest/reference/repos#contents) は追加または変更ごとに git コミットを生成し、タイムスタンプとして現在の時刻を使用します。 このヘッダは、現在のタイムスタンプの生成に使用されたタイムゾーンを決定します。

### ユーザが最後に認識されたタイムゾーンを使用する

`Time-Zone` ヘッダーが指定されておらず、API への認証された呼び出しを行う場合、認証されたユーザーが最後に認識されたタイムゾーンが使用されます。 最後に認識されたタイムゾーンは、{% data variables.product.product_name %} Web サイトを閲覧するたびに更新されます。

### 他のタイムゾーン情報を含まない UTC をデフォルトにする

上記の手順で情報が得られない場合は、UTC をタイムゾーンとして使用して git コミットを作成します。
