---
title: OAuth アプリの承認
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: d35b65add4259df72d9ae8b179829a148abd7174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106710'
---
{% data variables.product.product_name %} の OAuth の実装では、標準の[認可コード許可タイプ](https://tools.ietf.org/html/rfc6749#section-4.1)および Web ブラウザーを利用できないアプリケーションのために、OAuth 2.0 の [Device Authorization Grant](https://tools.ietf.org/html/rfc8628) をサポートしています。

アプリケーションをテストする場合のように、標準的な方法でのアプリケーションの認可をスキップする場合は、[非 Web アプリケーション フロー](#non-web-application-flow)を利用できます。

OAuthアプリケーションを認可する場合は、そのアプリケーションにどの認可フローが最も適切かを考慮してください。

- [Web アプリケーション フロー](#web-application-flow): ブラウザーで実行される標準的な OAuth App のユーザーを認可するために使われます。 ([暗黙的な許可の種類](https://tools.ietf.org/html/rfc6749#section-4.2)はサポートされていません。)
- [デバイスフロー](#device-flow): CLI ツールなど、ヘッドレス アプリケーションに使われます。

## Web アプリケーションフロー

{% note %}

**注:** GitHub App を構築している場合は、OAuth Web アプリケーション フローを使うこともできますが、セットアップにはいくつか重要な違いがあります。 詳細については、「[GitHub App のユーザーの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

{% endnote %}

アプリケーションのユーザの認可のためのWebアプリケーションフローは以下のとおりです。

1. ユーザはGitHubのアイデンティティをリクエストするためにリダイレクトされます
2. GitHubによるサイトへのユーザのリダイレクト
3. アプリケーションはユーザのアクセストークンと共にAPIにアクセスします

### 1. ユーザーの GitHub ID を要求する

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub アプリで `login` パラメーターを指定すると、ユーザーは、使用できるアカウントでサインインしてアプリを認可するように求められます。

#### パラメーター

名前 | 型 | 説明
-----|------|--------------
`client_id`|`string` | **[必須]** 。 ユーザーが{% ifversion fpt or ghec %}[登録](https://github.com/settings/applications/new){% else %}登録{% endif %}されたときに GitHub から受け取るクライアント ID。
`redirect_uri`|`string` | 認可の後にユーザが送られるアプリケーション中のURL。 [リダイレクト URL](#redirect-urls) に関する詳細については、下を参照してください。
`login` | `string` | サインインとアプリケーションの認可に使われるアカウントを指示します。
`scope`|`string` | [スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)のスペース区切りリスト。 渡されなかった場合、ユーザーの `scope` は既定で空のリストになり、アプリケーションにはどのスコープも認可されません。 アプリケーションに対して認可したスコープがあるユーザに対しては、スコープのリストを含むOAuthの認可ページは示されません。 その代わりに、フローのこのステップはユーザがアプリケーションに認可したスコープ群で自動的に完了します。 たとえば、ユーザーが既に Web フローを 2 回実行しており、1 つのトークンで `user` スコープを、もう 1 つのトークンで `repo` スコープを認可している場合、3 番目の Web フローで `scope` が渡されなければ、`user` および `repo` スコープを持つトークンが返されます。
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | OAuthフローの間に、認証されていないユーザに対してGitHubへのサインアップの選択肢が提示されるかどうか。 既定値は、`true` です。 ポリシーでサインアップが禁止されている場合は、`false` を使用します。

### 2. GitHub によってユーザーが元のサイトにリダイレクトされる

ユーザーがリクエストを受け付けると、{% data variables.product.product_name %} によって一時的な `code` が code パラメーターに、前のステップで渡された状態が `state` パラメーターに入れられて、元のサイトにリダイレクトされます。 一時コードは10分後に期限切れになります。 状態が一致しない場合は、リクエストを作成したサードパーティとユーザはこのプロセスを中止しなければなりません。

この `code` をアクセス トークンと交換します。

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### パラメーター

名前 | 型 | 説明
-----|------|--------------
`client_id` | `string` | **必須。** {% data variables.product.prodname_oauth_app %} に対して {% data variables.product.product_name %} から受け取ったクライアント ID。
`client_secret` | `string` | **必須。** {% data variables.product.prodname_oauth_app %} に対して {% data variables.product.product_name %} から受け取ったクライアント シークレット。
`code` | `string` | **必須。** 手順 1 に対する応答として受け取ったコード。
`redirect_uri` | `string` | 認可の後にユーザが送られるアプリケーション中のURL。

#### [応答]

デフォルトでは、レスポンスは以下の形式になります。

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. アクセス トークンを使って API にアクセスする

このアクセストークンを使えば、ユーザの代わりにAPIへのリクエストを発行できます。

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

たとえば、curlでは以下のようにAuthorizationヘッダを設定できます。

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## デバイスフロー

{% note %}

**注:** デバイス フローはパブリック ベータ版であり、変更される可能性があります。

{% endnote %}

デバイスフローを使えば、CLIツールやGit認証情報マネージャーなどのヘッドレスアプリケーションのユーザを認可できます。

{% ifversion device-flow-is-opt-in %}

デバイス フローを使用してユーザーを認可および特定するには、まずアプリケーションの設定でデバイス フローを有効にする必要があります。 アプリケーションでデバイス フローを有効にする方法の詳細については、OAuth App の場合は「[OAuth App の変更](/developers/apps/managing-oauth-apps/modifying-an-oauth-app)」を、GitHub App の場合は「[GitHub App の変更](/developers/apps/managing-github-apps/modifying-a-github-app)」を参照してください。

{% endif %}

### デバイスフローの概要

1. アプリケーションはデバイスとユーザの検証コードをリクエストし、ユーザがユーザ検証コードを入力する認可URLを取得します。
2. アプリケーションは{% data variables.product.device_authorization_url %}でユーザ検証コードを入力するようユーザに求めます。
3.  アプリケーションはユーザ認証のステータスをポーリングします。 ユーザがデバイスを認可すると、アプリケーションは新しいアクセストークンと共にAPIコールを発行できるようになります。

### ステップ1: アプリケーションによるGitHubからのデバイス及びユーザ検証コードの要求

    POST {% data variables.product.oauth_host_code %}/login/device/code

アプリケーションは、次のステップでユーザに認可を求めるために使うユーザ検証コードと検証URLをリクエストしなければなりません。 このリクエストには、アプリケーションがアクセストークンの受け取りとユーザの認可のステータスチェックに使わなければならないデバイス検証コードも返されます。

#### 入力パラメーター

名前 | 型 | 説明
-----|------|--------------
`client_id` | `string` | **必須。** {% data variables.product.product_name %} から受け取るアプリケーションのクライアント ID。
`scope` | `string` | アプリケーションがアクセスをリクエストしているスコープ。

#### [応答]

デフォルトでは、レスポンスは以下の形式になります。

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### 応答パラメーター

名前 | 型 | 説明
-----|------|--------------
`device_code` | `string` | デバイス検証コードは40文字で、デバイスの検証に使われます。
`user_code` | `string` | ユーザ検証コードは、ユーザがブラウザに入力できるようにデバイスに表示されます。 このコードは8文字で、途中にハイフンがあります。
`verification_uri` | `string` | ユーザーが `user_code` を入力しなければならない検証 URL: {% data variables.product.device_authorization_url %}。
`expires_in` | `integer`| `device_code` と `user_code` の有効期限か切れるまでの秒数。 デフォルトは900秒、すなわち15分です。
`interval` | `integer` | デバイスの認可を完了するために新しいアクセス トークンのリクエスト (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) を発行する前に経過する必要がある最小秒数。 たとえばintervalが5であれば、5秒が経過するまでは新しいリクエストを発行できません。 5 秒間に複数のリクエストを発行すると、レート制限に達して `slow_down` エラーが返されます。

### ステップ2: ブラウザでユーザコードの入力をユーザに促す

デバイスはユーザ検証コードを表示し、ユーザに対してこのコードを{% data variables.product.device_authorization_url %}で入力するように求めます。

  ![デバイスに表示されたユーザ検証コードの入力フィールド](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### ステップ3: ユーザがデバイスを認証したか、アプリケーションがGitHubをポーリング

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

アプリケーションでは、デバイスおよびユーザー コードが期限切れになるか、有効なユーザー コードでアプリケーションが認可されるまで、`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` をポーリングするデバイス認可リクエストを発行します。 アプリケーションでは、レート制限エラーを避けるために、ステップ 1 で取得したポーリングの最小 `interval` を使います。 詳細については、「[デバイス フローのレート制限](#rate-limits-for-the-device-flow)」を参照してください。

ユーザは、15分（あるいは900秒）以内に有効なコードを入力しなければなりません。 15 分が経過すると、新たなデバイス認可コードを `POST {% data variables.product.oauth_host_code %}/login/device/code` でリクエストしなければなりません。

ユーザが認可されると、アプリケーションはユーザの代わりにAPIにリクエストを発行するために利用できるアクセストークンを受け取ります。

#### 入力パラメーター

名前 | 型 | 説明
-----|------|--------------
`client_id` | `string` | **必須。** {% data variables.product.prodname_oauth_app %} に対して {% data variables.product.product_name %} から受け取ったクライアント ID。
`device_code` | `string` | **必須。** `POST {% data variables.product.oauth_host_code %}/login/device/code` リクエストから受け取ったデバイス検証コード。
`grant_type` | `string` | **必須。** 付与タイプは `urn:ietf:params:oauth:grant-type:device_code` でなければなりません。

#### [応答]

デフォルトでは、レスポンスは以下の形式になります。

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### デバイスフローのレート制限

ユーザがブラウザ上で検証コードをサブミットする場合、アプリケーションごとに1時間に50回のサブミットというレート制限があります。

リクエスト間で要求される最小の時間間隔 (つまり `interval`) 内で複数のアクセス トークン リクエスト (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) を発行すると、レート制限に達し、`slow_down` エラー応答が返されます。 `slow_down` エラー応答によって、最後の `interval` に 5 秒が追加されます。 詳細については、「[デバイス フローのエラー](#errors-for-the-device-flow)」を参照してください。

### デバイスフローのエラーコード

| エラー コード | 説明 |
|----|----|
| `authorization_pending`| このエラーコードは、認可リクエストが保留中で、ユーザがユーザコードをまだ入力していない場合に生じます。 アプリケーションには、[`interval`](#response-parameters) を超えない範囲で `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` リクエストをポーリングし続けることが期待されます。この際には、リクエスト間に最小の秒数を空けることが必要です。 |
| `slow_down` | `slow_down` エラーが返された場合、最小の `interval`、あるいは `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` を使用するリクエスト間に必要な時間間隔に 5 秒が追加されます。 たとえば、開始時の間隔としてリクエスト間に最小で 5 秒が必要だった場合に、`slow_down` エラー応答が返されると、OAuth アクセス トークンを求める新しいリクエストの発行までに最短でも 10 秒待たなければならなくなります。 エラー応答には、使用する必要がある新しい `interval` 情報が含まれます。
| `expired_token` | デバイス コードの有効期限が切れた場合は、`token_expired` エラーが表示されます。 デバイスコードを求める新しいリクエストを発行しなければなりません。
| `unsupported_grant_type` | OAuth トークン リクエストの `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` でポーリングする際には、付与タイプを `urn:ietf:params:oauth:grant-type:device_code` として、入力パラメーターに含めなければなりません。
| `incorrect_client_credentials` | デバイスフローでは、アプリケーションのクライアントIDを渡さなければなりません。これは、アプリケーションの設定ページにあります。 デバイス フローに `client_secret` は必要ありません。
| `incorrect_device_code` | 渡されたdevice_codeが有効ではありません。
| `access_denied` | 認可プロセス中にユーザーがキャンセルをクリックした場合、`access_denied` エラーが返され、ユーザーは検証コードを再び利用することができなくなります。{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | アプリケーションの設定で、デバイス フローが有効になっていません。 詳細については、「[デバイス フロー](#device-flow)」を参照してください。{% endif %}

詳細については、「[OAuth 2.0 デバイス認証の付与](https://tools.ietf.org/html/rfc8628#section-3.5)」を参照してください。

## 非Webアプリケーションフロー

テストのような限定的な状況では、非Web認証が利用できます。 必要な場合は、[{% data variables.product.pat_generic %} の設定ページ](/articles/creating-an-access-token-for-command-line-use)を使い、[基本認証](/rest/overview/other-authentication-methods#basic-authentication)を使って {% data variables.product.pat_generic %} を作成できます。 この手法を使えば、ユーザはいつでもアクセスを取り消せます。

{% ifversion fpt or ghes or ghec %} {% note %}

**注:** 非 Web アプリケーション フローを使って OAuth2 トークンを作成する場合で、ユーザーが 2 要素認証を有効化しているなら、[2 要素認証の利用](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)方法を必ず理解しておいてください。

{% endnote %} {% endif %}

## リダイレクト URI

`redirect_uri` パラメーターは省略可能です。 指定しなかった場合、GitHub では OAuth アプリケーションで設定されているコールバック URL にユーザーをリダイレクトします。 指定する場合、リダイレクト URL のホスト (サブドメインを除く) とポートは、コールバック URL と完全に一致している必要があります。 リダイレクト URL のパスは、コールバック URL のサブディレクトリを参照していなければなりません。

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    GOOD: http://oauth.example.com/path
    GOOD: http://oauth.example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### ループバック リダイレクト URI

オプションの `redirect_uri` パラメーターは、ループバック URL にも使用できます。 アプリケーションでループバック URL とポートを指定した場合、アプリケーションを認可した後、ユーザーは指定した URL とポートにリダイレクトされます。 `redirect_uri` は、アプリのコールバック URL で指定されたポートと一致している必要はありません。

`http://127.0.0.1/path` コールバック URL には、次の `redirect_uri` を使用できます。

```
http://127.0.0.1:1234/path
```

OAuth の RFC では、[`localhost` の使用は推奨されておらず](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)、代わりにループバック リテラル `127.0.0.1` または IPv6 `::1` を使うことが推奨されています。

## OAuthアプリケーションに複数のトークンを作成する

ユーザ／アプリケーション／スコープの組み合わせに対して複数のトークンを作成し、特定のユースケースに対応できます。

OAuthアプリケーションが、サインインにGitHubを利用し、基本的なユーザ情報しか必要としないワークフローを1つサポートするだけであれば、これは有益です。 別のワークフローはユーザのプライベートリポジトリへのアクセスを必要としていてもかまいません。 複数のトークンを使えば、OAuthアプリケーションはそれぞれのユースケースに対してWebフローを実行でき、必要なスコープだけをリクエストします。 ユーザがサインインにアプリケーションだけを使うなら、ユーザは自分のプライベートリポジトリへのアクセスをOAuthアプリケーションに許可する必要はありません。

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## ユーザにアクセスをレビューしてもらう

OAuthアプリケーションへの認可情報へリンクし、ユーザがアプリケーションの認可をレビューし、取り消しできるようにすることができます。

このリンクを構築するには、アプリケーションを登録したときに GitHub から受け取った OAuth App の `client_id` が必要です。

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**ヒント:** OAuth App でアクセスできるユーザーのリソースについてさらに学ぶには、「[ユーザーのリソースを調べる](/rest/guides/discovering-resources-for-a-user)」を参照してください。

{% endtip %}

## トラブルシューティング

* 「[認可リクエスト エラーのトラブルシューティング](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)」
* 「[OAuth App アクセス トークンのリクエスト エラーのトラブルシューティング](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)」
* [デバイス フロー エラー](#error-codes-for-the-device-flow)
* [トークンの有効期限と失効](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)

## 参考資料

- [{% data variables.product.prodname_dotcom %} の認証について](/github/authenticating-to-github/about-authentication-to-github)
