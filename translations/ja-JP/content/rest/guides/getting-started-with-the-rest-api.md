---
title: REST APIを使ってみる
intro: 認証とエンドポイントの例から始めて、REST APIを使用するための基礎を学びます。
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: 始めましょう - REST API
---


日常的なユースケースに取り組みながら、APIの中心的な概念を見ていきましょう。

{% data reusables.rest-api.dotcom-only-guide-note %}

## 概要

ほとんどのアプリケーションは、任意の言語において既存の[ラッパーライブラリ][wrappers]を使用しています。ただ、まずは基底となっているAPI HTTPメソッドについて知ることが大切です。

ちょっと試しにやってみるだけなら、[cURL][curl]を使うのが一番簡単です。{% ifversion fpt or ghec %}別のクライアントを使用している場合、リクエストで有効な [ユーザエージェントのヘッダ](/rest/overview/resources-in-the-rest-api#user-agent-required)を送信する必要があることに注意してください。{% endif %}

### Hello World

まずはセットアップをテストすることから始めましょう。 コマンドプロンプトを開き、次のコマンドを入力します。

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

レスポンスは、私たちの設計思想からランダムに選択されます。

次に、[Chris Wanstrathの][defunkt github][GitHubプロフィール][users api]を`GET`します。

```shell
# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

> {
>   "login": "defunkt",
>   "id": 2,
>   "node_id": "MDQ6VXNlcjI=",
>   "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>   "gravatar_id": "",
>   "url": "https://api.github.com/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

うーん、[JSON][json]っぽいですね。 `-i`フラグを追加して、ヘッダを入れてみましょう。

```shell
$ curl -i https://api.github.com/users/defunkt

> HTTP/2 200
> server: GitHub.com
> date: Thu, 08 Jul 2021 07:04:08 GMT
> content-type: application/json; charset=utf-8
> cache-control: public, max-age=60, s-maxage=60
> vary: Accept, Accept-Encoding, Accept, X-Requested-With
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
> last-modified: Fri, 01 Nov 2019 21:56:00 GMT
> x-github-media-type: github.v3; format=json
> access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset
> access-control-allow-origin: *
> strict-transport-security: max-age=31536000; includeSubdomains; preload
> x-frame-options: deny
> x-content-type-options: nosniff
> x-xss-protection: 0
> referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
> content-security-policy: default-src 'none'
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 53
> x-ratelimit-reset: 1625731053
> x-ratelimit-resource: core
> x-ratelimit-used: 7
> accept-ranges: bytes
> content-length: 1305
> x-github-request-id: 9F60:7019:ACC5CD5:B03C931:60E6A368
>
> {
>  "login": "defunkt",
>  "id": 2,
>  "node_id": "MDQ6VXNlcjI=",
>  "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>  "gravatar_id": "",
>  "url": "https://api.github.com/users/defunkt",
>  "html_url": "https://github.com/defunkt",
>
>   ...
> }
```

レスポンスヘッダの中に、ちょっと面白いものがありますね。 思っていたとおり、`Content-Type`は`application/json`です。

`X-`で始まるヘッダはすべてカスタムヘッダで、HTTPの仕様にはありません。 例:

* `X-GitHub-Media-Type`の値は`github.v3`です。 これは、レスポンスの[メディアタイプ][media types]を伝えています。 メディアタイプは、出力をAPI v3にするために役立ちました。 これについては、後ほど詳しく説明します。
* `X-RateLimit-Limit`と`X-RateLimit-Remaining`のヘッダに注目してください。 この2つのヘッダは、1つのローリング期間 (通常は1時間) に[1つのクライアントが行えるリクエストの数][rate-limiting]と、クライアントが既に消費したリクエストの数を示しています。

## 認証

認証されていないクライアントは、1時間に60件のリクエストを行うことができます。 1時間あたりのリクエストを増やすには、_認証_が必要です。 In fact, doing anything interesting with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API requires [authentication][authentication].

### 個人アクセストークンの使用

The easiest and best way to authenticate with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API is by using Basic Authentication [via OAuth tokens](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens). OAuthトークンには[個人アクセストークン][personal token]が含まれています。

`-u`フラグを使って、ユーザ名を設定します。

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

プロンプトが表示されたらOAuthトークンを入力できますが、そのための変数を設定することをお勧めします。

You can use `-u "your_username:$token"` and set up a variable for `token` to avoid leaving your token in shell history, which should be avoided.

```shell
$ curl -i -u <em>your_username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

認証の際、`X-RateLimit-Limit`ヘッダが示す通り、レート制限が1時間に5,000リクエストに上がったことがわかるはずです。 1時間あたりの呼び出し数が増えるだけでなく、認証するとAPIを使用してプライベート情報を読み書きできます。

[個人アクセストークンの設定ページ][tokens settings]から、簡単に[**個人アクセストークン**を作成][personal token]できます。

{% ifversion fpt or ghes > 3.1 or ghae-issue-4374 or ghec %}
{% warning %}

To help keep your information secure, we highly recommend setting an expiration for your personal access tokens.

{% endwarning %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
![個人トークンの選択](/assets/images/personal_token.png)
{% endif %}

{% ifversion ghae %}
![個人トークンの選択](/assets/images/help/personal_token_ghae.png)
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4374 or ghec %}
API requests using an expiring personal access token will return that token's expiration date via the `GitHub-Authentication-Token-Expiration` header. You can use the header in your scripts to provide a warning message when the token is close to its expiration date.
{% endif %}

### ユーザプロフィールの取得

When properly authenticated, you can take advantage of the permissions associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. たとえば、あなたのプロフィールを取得してみましょう。

```shell
$ curl -i -u <em>your_username</em>:<em>your_token</em> {% data variables.product.api_url_pre %}/user

> {
>   ...
>   "plan": {
>     "space": 2516582,
>    "collaborators": 10,
>    "private_repos": 20,
>    "name": "medium"
>  }
>   ...
> }
```

今回は、以前に[@defunkt][defunkt github]について取得した公開情報の同じセットに加えて、あなたのユーザプロフィールのパブリックではない情報もあるはずです。 たとえば、アカウントの{% data variables.product.product_name %}プランに関する詳細を持つ`plan`オブジェクトがレスポンス中にあります。

### OAuthトークンのアプリケーションへの使用

他のユーザに代わりAPIを使用してプライベートな情報を読み書きする必要があるアプリは、 [OAuth][oauth]を使用すべきです。

OAuthは_トークン_を使用します。 トークンには、次の2つの重要な機能があります。

* **アクセスを取り消せる**: ユーザはサードパーティアプリケーションへの認可をいつでも取り消すことができます
* **制限付きアクセス**: ユーザはサードパーティーアプリケーションを認可する前に、トークンが提供する特定のアクセスを確認できます

トークンは[web フロー][webflow]から作成してください。 アプリケーションはユーザを{% data variables.product.product_name %}に送信してログインします。 それから{% data variables.product.product_name %}はアプリケーションの名前と、ユーザが認可した場合のアクセス権レベルを示すダイアログを表示します。 ユーザがアクセスを認可すると、{% data variables.product.product_name %}はユーザをアプリケーションにリダイレクトします。

![GitHubのOAuthプロンプト](/assets/images/oauth_prompt.png)

**OAuthトークンはパスワードと同様に扱ってください。**他のユーザと共有したり、安全でない場所に保存したりしてはいけません。 ここにあるトークンのサンプルは架空のものであり、不要な被害を防ぐため名前を変更しています。

さて、これで認証された呼び出しのコツをつかみました。それでは次は[リポジトリ API][repos-api]に進みましょう。

## リポジトリ

Almost any meaningful use of the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API will involve some level of Repository information. 以前にユーザ情報をフェッチしたのと同じ方法で、[リポジトリの詳細を`GET`][get repo]できます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

同様に、[認証済みのユーザのリポジトリを表示][user repos api]できます。

```shell
$ curl -i -H "Authorization: token {% ifversion fpt or ghes > 3.1 or ghae or ghec %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/user/repos
```

また、[別のユーザのリポジトリを一覧表示][other user repos api]できます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

あるいは、[Organizationのリポジトリを一覧表示][org repos api]することもできます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

これらの呼び出しから返される情報は、認証時にトークンが持っているスコープにより異なります。

{%- ifversion fpt or ghec or ghes %}
* A token with `public_repo` [scope][scopes] returns a response that includes all public repositories we have access to see on {% data variables.product.product_location %}.
{%- endif %}
* A token with `repo` [scope][scopes] returns a response that includes all {% ifversion fpt %}public or private{% elsif ghec or ghes %}public, private, or internal{% elsif ghae %}private or internal{% endif %} repositories we have access to see on {% data variables.product.product_location %}.

[Docs][repos-api]に記載されている通り、これらのメソッドは`type`パラメータを取り、これによって、ユーザがリポジトリに対して持つアクセス権に基づき、返されるリポジトリをフィルタリングできます。 こうすることで、直接所有するリポジトリ、Organizationのリポジトリ、またはチームによりユーザがコラボレーションするリポジトリに限定してフェッチすることができます。

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

この例では、octocatが所有するリポジトリのみを取得し、コラボレーションするリポジトリは取得しません。 URLが引用符で囲まれていることに注目してください。 シェルの設定によっては、cURLはURLを引用符で囲まないとクエリ文字列型を無視することがあります。

### リポジトリの作成

既存のリポジトリ情報をフェッチすることは一般的なユースケースですが、
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API supports creating new repositories as well. [リポジトリを作成する][create repo]には、
詳細情報や設定オプションを含んだいくつかのJSONを`POST`する必要があります。

```shell
$ curl -i -H "Authorization: token {% ifversion fpt or ghes > 3.1 or ghae or ghec %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

この最小限の例では、ブログ用の新しいプライベートリポジトリを作成しています ([GitHub Pages][pages]で提供されるかもしれません)。 このブログは{% ifversion not ghae %}パブリックになり{% else %}すべてのEnterpriseメンバーからアクセスできるようになり{% endif %}ますが、このリポジトリはプライベートにしました。 このステップでは、READMEと[nanoc][nanoc]フレーバーの[.gitignore テンプレート][gitignore templates]によるリポジトリの初期化も行います。

生成されたリポジトリは、`https://github.com/<your_username>/blog`にあります。 オーナーであるOrganization以下にリポジトリを作成するには、APIメソッドを `/user/repos`から`/orgs/<org_name>/repos`に変更するだけです。

次に、新しく作成したリポジトリをフェッチしましょう。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

あれれ？ どこにいったのでしょう。 リポジトリを_プライベート_にして作成したので、表示するには認証する必要があります。 古参のHTTPユーザの方なら、`403`が出ると思っていたかもしれません。 Since we don't want to leak information about private repositories, the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API returns a `404` in this case, as if to say "we can neither confirm nor deny the existence of this repository."

## Issue

{% data variables.product.product_name %}のIssue用UIは、「必要十分」なワークフローを提供しつつ、邪魔にならないということを目指しています。 {% data variables.product.product_name %} [Issues API][issues-api]を使えば、他のツールからデータを引き出したり、Issueを作成したりして、あなたのTeamに合ったワークフローを作成できます。

GitHub.comと同じように、Issues APIは認証されたユーザがIssueを表示するためのメソッドをいくつか提供します。 [すべてのIssueを表示][get issues api]するには、`GET /issues`を呼び出します。

```shell
$ curl -i -H "Authorization: token {% ifversion fpt or ghes > 3.1 or ghae or ghec %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/issues
```

[あなたの{% data variables.product.product_name %} Organizationのうちの1つのIssue][get issues api]のみを取得するには、`GET
/orgs/<org>/issues`を呼び出します。

```shell
$ curl -i -H "Authorization: token {% ifversion fpt or ghes > 3.1 or ghae or ghec %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

また、[1つのリポジトリにあるすべてのIssue][repo issues api]を取得することもできます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

### ページネーション

Railsのような規模のプロジェクトになれば、万単位のIssueがあります。 [ページネーション][pagination]を行い、API呼び出しを複数回行ってデータを取得する必要があります。 直近で行った呼び出しを繰り返してみましょう。今回はレスポンスヘッダに注目してください。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next", &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel="last"
> ...
```

[`Link`ヘッダ][link-header]は、外部リソースへのリンクに対するレスポンスの方法を提供します。今回の場合は、追加のデータページです。 呼び出しで30 (デフォルトのページサイズ) を超えるIssueを検出したので、APIは次のページと最後のページの場所を伝えます。

### Issue の作成

Issueのリストでページネーションを行う方法を確認したので、次はAPIから[Issueを作成][create issue]しましょう。

Issueを作成するには認証される必要があるので、ヘッダにOAuthトークンを渡します。 また、タイトル、本文、およびJSONの本文にあるラベルを、Issueを作成したい、リポジトリ以下の`/issues`パスに渡します。

```shell
$ curl -i -H 'Authorization: token {% ifversion fpt or ghes > 3.1 or ghae or ghec %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}' \
$    -d '{ \
$         "title": "New logo", \
$         "body": "We should have one", \
$         "labels": ["design"] \
$       }' \
$    {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues

> HTTP/2 201
> Location: {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17
> X-RateLimit-Limit: 5000

> {
>   "pull_request": {
>     "patch_url": null,
>     "html_url": null,
>     "diff_url": null
>   },
>   "created_at": "2012-11-14T15:25:33Z",
>   "comments": 0,
>   "milestone": null,
>   "title": "New logo",
>   "body": "We should have one",
>   "user": {
>     "login": "pengwynn",
>     "gravatar_id": "7e19cd5486b5d6dc1ef90e671ba52ae0",
>     "avatar_url": "https://secure.gravatar.com/avatar/7e19cd5486b5d6dc1ef90e671ba52ae0?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
>     "id": 865,
>     "url": "{% data variables.product.api_url_pre %}/users/pengwynn"
>   },
>   "closed_at": null,
>   "updated_at": "2012-11-14T15:25:33Z",
>   "number": 17,
>   "closed_by": null,
>   "html_url": "https://github.com/pengwynn/api-sandbox/issues/17",
>   "labels": [
>     {
>       "color": "ededed",
>       "name": "design",
>       "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/labels/design"
>     }
>   ],
>   "id": 8356941,
>   "assignee": null,
>   "state": "open",
>   "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17"
> }
```

レスポンスでは、新しく作成されたIssueに2つのポインタを提供し、それは両方とも`Location`レスポンスヘッダとJSONレスポンスの `url`フィールドにあります。

## 条件付きリクエスト

良きAPI利用者であるために非常に大切なのは、変更されていない情報をキャッシュして、レート制限を尊重するということです。 APIは[条件付きリクエスト][conditional-requests]をサポートしており、正しいことを行うための役に立ちます。 最初に呼び出した、Chris Wanstrathのプロフィールを取り上げてみましょう。

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
```

JSONの本文に加え、HTTPステータスコード `200`と`ETag`ヘッダに注目してください。 [ETag][etag]はレスポンスのフィンガープリントです。 後続の呼び出しにこれを渡すと、変更されたリソースだけを渡すようAPIに伝えることができます。

```shell
$ curl -i -H 'If-None-Match: "61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

`304`ステータスは、直近のリクエストからリソースが変更されておらず、レスポンスには本文が含まれないことを示しています。 特典として、`304`レスポンスは[レート制限][rate-limiting]にカウントされません。

ヤッター！ Now you know the basics of the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API!

* Basic & OAuth認証
* リポジトリおよびIssueのフェッチと作成
* 条件付きリクエスト

続きのAPIガイドで[認証の基本][auth guide]を学びましょう！

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[media types]: /rest/overview/media-types
[oauth]: /apps/building-integrations/setting-up-and-registering-oauth-apps/
[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[repos-api]: /rest/reference/repos
[repos-api]: /rest/reference/repos
[pages]: http://pages.github.com
[nanoc]: http://nanoc.ws/
[gitignore templates]: https://github.com/github/gitignore
[issues-api]: /rest/reference/issues
[link-header]: https://www.w3.org/wiki/LinkHeader
[conditional-requests]: /rest#conditional-requests
[rate-limiting]: /rest#rate-limiting
[rate-limiting]: /rest#rate-limiting
[users api]: /rest/reference/users#get-a-user
[defunkt github]: https://github.com/defunkt
[defunkt github]: https://github.com/defunkt
[json]: http://en.wikipedia.org/wiki/JSON
[authentication]: /rest#authentication
[personal token]: /articles/creating-an-access-token-for-command-line-use
[personal token]: /articles/creating-an-access-token-for-command-line-use
[tokens settings]: https://github.com/settings/tokens
[pagination]: /rest#pagination
[get repo]: /rest/reference/repos#get-a-repository
[create repo]: /rest/reference/repos#create-a-repository-for-the-authenticated-user
[create issue]: /rest/reference/issues#create-an-issue
[auth guide]: /guides/basics-of-authentication
[user repos api]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[other user repos api]: /rest/reference/repos#list-repositories-for-a-user
[org repos api]: /rest/reference/repos#list-organization-repositories
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[repo issues api]: /rest/reference/issues#list-repository-issues
[etag]: http://en.wikipedia.org/wiki/HTTP_ETag
