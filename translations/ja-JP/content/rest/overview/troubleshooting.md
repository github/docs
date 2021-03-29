---
title: トラブルシューティング
intro: REST API で発生する最も一般的な問題の解決方法を学びます。
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---



API で不可解な問題が発生した場合、発生したと思われる問題の解決策をこちらの一覧から確認できます。

### 既存リポジトリの `404` エラー

通常、クライアントが正しく認証されていない場合、`404` エラーが送信されます。 このような場合、`403 Forbidden` が表示されるはずであると考えるかもしれません。 しかし、プライベートリポジトリに関する_いずれの_情報も提供されないため、API は代わりに `404` エラーを返します。

トラブルシューティングを行うには、[正しく認証されていること](/guides/getting-started/)、[OAuth アクセストークンに必要なスコープがあること](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)、そして[サードパーティアプリケーションの制限][oap-guide]によってアクセスがブロックされていないことを確認してください。

### 表示されない結果がある

リソース（_例:_ ユーザ、Issue _など_）のリストにアクセスするほとんどの API 呼び出しは、ページネーションをサポートしています。 リクエストをして、すべての結果を受け取っていない場合は、おそらく最初のページしか表示されていません。 より多くの結果を受け取るには、残りのページをリクエストする必要があります。

ページネーション URL のフォーマットを推測*しない*ことが重要です。 すべての API 呼び出しで同じ構造が使用されるわけではありません。 代わりに、すべてのリクエストで送信される [Link Header](/rest#pagination) からページネーション情報を抽出します。

{% if currentVersion == "free-pro-team@latest" %}
### Basic 認証のエラー

2020 年 11 月 13 日に、 REST API に対するユーザ名およびパスワードによる認証と OAuth 認証 API は非推奨となり、使用できなくなりました。

#### Basic 認証での `username`/`password` の使用

API 呼び出しに `username` と `password` を使用している場合、これは認証されなくなります。 例:

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

エンドポイントをテストするとき、またはローカル開発を実行するときには、かわりに[個人アクセストークン](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)を使用してください。

```bash
curl -H 'Authorization: token my_access_token' https://api.github.com/user/repos
```

OAuth App の場合は、[Web アプリケーションフロー](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)を使用して、API 呼び出しのヘッダーで使用する OAuth トークンを生成する必要があります。

```bash
curl -H 'Authorization: token my-oauth-token' https://api.github.com/user/repos
```

#### OAuth 認証 API の呼び出し

[OAuth 認証 API](/enterprise-server/rest/reference/oauth-authorizations) を呼び出して OAuth アプリの認証を管理する、あるいはアクセストークンを生成する場合は、次の例のようにします。

```bash
curl -u my_username:my_password -X POST "https://api.github.com/authorizations" -d '{"scopes":["public_repo"], "note":"my token", "client_id":"my_client_id", "client_secret":"my_client_secret"}'
```

次に、[Web アプリケーションフロー](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)に切り替えて、アクセストークンを生成します。

{% endif %}

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
