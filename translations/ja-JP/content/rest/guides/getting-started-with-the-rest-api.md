---
title: REST APIを使ってみる
intro: '認証とエンドポイントの例から始めて、REST APIを使用するための基礎を学びます。'
redirect_from:
  - /guides/getting-started/
  - /v3/guides/getting-started
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---


日常的なユースケースに取り組みながら、APIの中心的な概念を見ていきましょう。

### 概要

ほとんどのアプリケーションは、任意の言語において既存の[ラッパーライブラリ][wrappers]を使用しています。ただ、まずは基底となっているAPI HTTPメソッドについて知ることが大切です。

ちょっと試しにやってみるだけなら、[cURL][curl]を使うのが一番簡単です。{% if currentVersion == "free-pro-team@latest" %} 別のクライアントを使用している場合、リクエストで有効な [ユーザエージェントのヘッダ](/rest/overview/resources-in-the-rest-api#user-agent-required)を送信する必要があることに注意してください。{% endif %}

#### Hello World

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
>   "url": "{% data variables.product.api_url_pre %}/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

うーん、[JSON][json]っぽいですね。 `-i`フラグを追加して、ヘッダを入れてみましょう。

```shell
$ curl -i https://api.github.com/users/defunkt

> HTTP/1.1 200 OK
> Server: GitHub.com
> Date: Sun, 11 Nov 2012 18:43:28 GMT
> Content-Type: application/json; charset=utf-8
> Status: 200 OK
> ETag: "bfd85cbf23ac0b0c8a29bee02e7117c6"
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 57
> X-RateLimit-Reset: 1352660008
> X-GitHub-Media-Type: github.v3
> Vary: Accept
> Cache-Control: public, max-age=60, s-maxage=60
> X-Content-Type-Options: nosniff
> Content-Length: 692
> Last-Modified: Tue, 30 Oct 2012 18:58:42 GMT

> {
>   "login": "defunkt",
>   "id": 2,
>   "url": "{% data variables.product.api_url_pre %}/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

レスポンスヘッダの中に、ちょっと面白いものがありますね。 思っていたとおり、`Content-Type`は`application/json`です。

`X-`で始まるヘッダはすべてカスタムヘッダで、HTTPの仕様にはありません。 例:

* `X-GitHub-Media-Type`の値は`github.v3`です。 これは、レスポンスの[メディアタイプ][media types]を伝えています。 メディアタイプは、出力をAPI v3にするために役立ちました。 これについては、後ほど詳しく説明します。
* `X-RateLimit-Limit`と`X-RateLimit-Remaining`のヘッダに注目してください。 この2つのヘッダは、1つのローリング期間 (通常は1時間) に[1つのクライアントが行えるリクエストの数][rate-limiting]と、クライアントが既に消費したリクエストの数を示しています。

### 認証

認証されていないクライアントは、1時間に60件のリクエストを行うことができます。 1時間あたりのリクエストを増やすには、_認証_が必要です。 実のところ、{% data variables.product.product_name %} APIを使って何か面白いことがしたければ、[認証][authentication]は欠かせません。

#### 個人アクセストークンの使用

{% data variables.product.product_name %} APIで認証を行う最も簡単かつ最善の方法は、[OAuthトークン](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)経由でBasic認証を使用することです。 OAuthトークンには[個人アクセストークン][personal token]が含まれています。

`-u`フラグを使って、ユーザ名を設定します。

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

プロンプトが表示されたらOAuthトークンを入力できますが、そのための変数を設定することをお勧めします。

トークンをシェル履歴に残すことは避けるべきです。`-u "username:$token"`を使用して、`token`の変数を設定すると、トークンはシェル履歴に残りません。

```shell
$ curl -i -u <em>username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

認証の際、`X-RateLimit-Limit`ヘッダが示す通り、レート制限が1時間に5,000リクエストに上がったことがわかるはずです。 1時間あたりの呼び出し数が増えるだけでなく、認証するとAPIを使用してプライベート情報を読み書きできます。

[個人アクセストークンの設定ページ][tokens settings]から、簡単に[**個人アクセストークン**を作成][personal token]できます。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
![個人トークンの選択](/assets/images/personal_token.png)
{% endif %}

{% if currentVersion == "github-ae@latest" %}
![個人トークンの選択](/assets/images/help/personal_token_ghae.png)
{% endif %}

#### ユーザプロフィールの取得

認証が正しく行われると、{% data variables.product.product_name %}アカウントに関連づけられている権限を利用できます。 たとえば、あなたのプロフィールを取得してみましょう。

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

This time, in addition to the same set of public information we retrieved for [@defunkt][defunkt github] earlier, you should also see the non-public information for your user profile. For example, you'll see a `plan` object in the response which gives details about the {% data variables.product.product_name %} plan for the account.

#### OAuthトークンのアプリケーションへの使用

他のユーザに代わりAPIを使用してプライベートな情報を読み書きする必要があるアプリは、 [OAuth][oauth]を使用すべきです。

OAuthは_トークン_を使用します。 トークンには、次の2つの重要な機能があります。

* **アクセスを取り消せる**: ユーザはサードパーティアプリケーションへの認可をいつでも取り消すことができます
* **制限付きアクセス**: ユーザはサードパーティーアプリケーションを認可する前に、トークンが提供する特定のアクセスを確認できます

トークンは[web フロー][webflow]から作成してください。 アプリケーションはユーザを{% data variables.product.product_name %}に送信してログインします。 それから{% data variables.product.product_name %}はアプリケーションの名前と、ユーザが認可した場合のアクセス権レベルを示すダイアログを表示します。 ユーザがアクセスを認可すると、{% data variables.product.product_name %}はユーザをアプリケーションにリダイレクトします。

![GitHubのOAuthプロンプト](/assets/images/oauth_prompt.png)

**OAuthトークンはパスワードと同様に扱ってください。**他のユーザと共有したり、安全でない場所に保存したりしてはいけません。 ここにあるトークンのサンプルは架空のものであり、不要な被害を防ぐため名前を変更しています。

さて、これで認証された呼び出しのコツをつかみました。それでは次は[リポジトリ API][repos-api]に進みましょう。

### リポジトリ

{% data variables.product.product_name %} APIを有意義に使用する場合、そのほとんどにおいて何らかのリポジトリ情報が関与します。 以前にユーザ情報をフェッチしたのと同じ方法で、[リポジトリ情報を`GET`][get repo] できます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

同様に、[認証済みのユーザにリポジトリを表示][user repos api]できます。

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/user/repos
```

また、[別のユーザにリポジトリを一覧表示][other user repos api]できます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

あるいは、[Organizationにリポジトリを一覧表示][org repos api]することもできます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

これらの呼び出しから返される情報は、認証時にトークンが持っているスコープにより異なります。

{% if currentVersion != "github-ae@latest" %}
* A token with `public_repo` [scope][scopes] returns a response that includes all public repositories we have access to see on github.com.{% endif %}
* A token with `repo` [scope][scopes] returns a response that includes all {% if currentVersion != "github-ae@latest" %}public{% else %}internal{% endif %} and private repositories we have access to see on {% data variables.product.product_location %}.

As the [docs][repos-api] indicate, these methods take a `type` parameter that can filter the repositories returned based on what type of access the user has for the repository. こうすることで、直接所有するリポジトリ、Organizationのリポジトリ、またはチームによりユーザがコラボレーションするリポジトリに限定してフェッチすることができます。

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

この例では、octocatが所有するリポジトリのみを取得し、コラボレーションするリポジトリは取得しません。 URLが引用符で囲まれていることに注目してください。 シェルの設定によっては、cURLはURLを引用符で囲まないとクエリ文字列型を無視することがあります。

#### リポジトリの作成

既存のリポジトリ情報をフェッチすることは一般的なユースケースですが、
{% data variables.product.product_name %}APIは新規リポジトリの作成もサポートしています。 [リポジトリを作成する][create repo]には、
詳細情報や設定オプションを含んだいくつかのJSONを`POST`する必要があります。

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

In this minimal example, we create a new private repository for our blog (to be served on [GitHub Pages][pages], perhaps). Though the blog {% if currentVersion != "github-ae@latest" %}will be public{% else %}is accessible to all enterprise members{% endif %}, we've made the repository private. In this single step, we'll also initialize it with a README and a [nanoc][nanoc]-flavored [.gitignore template][gitignore templates].

生成されたリポジトリは、`https://github.com/<your_username>/blog`にあります。 オーナーであるOrganization以下にリポジトリを作成するには、APIメソッドを `/user/repos`から`/orgs/<org_name>/repos`に変更するだけです。

次に、新しく作成したリポジトリをフェッチしましょう。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/1.1 404 Not Found

> {
>    "message": "Not Found"
> }
```

あれれ？ どこにいったのでしょう。 リポジトリを_プライベート_にして作成したので、表示するには認証する必要があります。 古参のHTTPユーザの方なら、`403`が出ると思っていたかもしれません。 プライベートリポジトリについての情報を漏らしたくはないので、この場合{% data variables.product.product_name %} APIは`404`を返します。「このリポジトリが存在するかは肯定も否定もできない」というようなことです。

### 問題

{% data variables.product.product_name %}のIssue用UIは、「必要十分」なワークフローを提供しつつ、邪魔にならないということを目指しています。 {% data variables.product.product_name %} [Issues API][issues-api]を使えば、他のツールからデータを引き出したり、Issueを作成したりして、あなたのTeamに合ったワークフローを作成できます。

GitHub.comと同じように、Issues APIは認証されたユーザがIssueを表示するためのメソッドをいくつか提供します。 [すべてのIssueを表示][get issues api]するには、`GET /issues`を呼び出します。

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/issues
```

[あなたの{% data variables.product.product_name %} Organizationのうちの1つ][get issues api]のみを取得するには、`GET
/orgs/<org>/issues`を呼び出します。

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

また、[1つのリポジトリにあるすべてのIssue][repo issues api]を取得することもできます。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

#### ページネーション

Railsのような規模のプロジェクトになれば、万単位のIssueがあります。 [ページネーション][pagination]を行い、API呼び出しを複数回行ってデータを取得する必要があります。 直近で行った呼び出しを繰り返してみましょう。今回はレスポンスヘッダに注目してください。

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/1.1 200 OK

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next", &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel="last"
> ...
```

[`Link`ヘッダ][link-header]は、外部リソースへのリンクに対するレスポンスを提供します。今回の場合は、追加のデータページです。 呼び出しで30 (デフォルトのページサイズ) を超えるIssueを検出したので、APIは次のページと最後のページの場所を伝えます。

#### Issue の作成

Issueのリストでページネーションを行う方法を確認したので、次はAPIから[Issueを作成][create issue]しましょう。

Issueを作成するには認証される必要があるので、ヘッダにOAuthトークンを渡します。 また、タイトル、本文、およびJSONの本文にあるラベルを、Issueを作成したい、リポジトリ以下の`/issues`パスに渡します。

```shell
$ curl -i -H 'Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}' \
$    -d '{ \
$         "title": "New logo", \
$         "body": "We should have one", \
$         "labels": ["design"] \
$       }' \
$    {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues

> HTTP/1.1 201 Created
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

### 条件付きリクエスト

良きAPI利用者であるために非常に大切なのは、変更されていない情報をキャッシュして、レート制限を尊重するということです。 APIは[条件付きリクエスト][conditional-requests]をサポートしており、正しく振る舞うために役立ちます。 最初に呼び出した、Chris Wanstrathのプロフィールを取り上げてみましょう。

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/1.1 200 OK
> ETag: "bfd85cbf23ac0b0c8a29bee02e7117c6"
```

JSONの本文に加え、HTTPステータスコード `200`と`ETag`ヘッダに注目してください。 [ETag][etag]はレスポンスのフィンガープリントです。 後続の呼び出しにこれを渡すと、変更されたリソースだけを渡すようAPIに伝えることができます。

```shell
$ curl -i -H 'If-None-Match: "bfd85cbf23ac0b0c8a29bee02e7117c6"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/1.1 304 Not Modified
```

`304`ステータスは、直近のリクエストからリソースが変更されておらず、レスポンスには本文が含まれないことを示しています。 特典として、`304`レスポンスは[レート制限][rate-limiting]にカウントされません。

ヤッター！ これで{% data variables.product.product_name %} APIの基本が理解できました！

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
