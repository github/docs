---
title: OAuth アプリケーションの認可
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access/
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps/
  - /v3/oauth/
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps/
  - /apps/building-oauth-apps/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data variables.product.product_name %} のOAuthの実装は、標準の[認可コード許可タイプ](https://tools.ietf.org/html/rfc6749#section-4.1){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}およびWebブラウザを利用できないアプリケーションのためのOAuth 2.0の[Device Authorization Grant](https://tools.ietf.org/html/rfc8628){% endif %}をサポートしています。

アプリケーションをテストする場合のように、標準的な方法でのアプリケーションの認可をスキップしたい場合には[非Webアプリケーションフロー](#non-web-application-flow)を利用できます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

OAuthアプリケーションを認可する場合は、そのアプリケーションにどの認可フローが最も適切かを考慮してください。

- [Webアプリケーションフロー](#web-application-flow): ブラウザで実行される標準的なOAuthアプリケーションのためのユーザを認可するために使われます。 （[暗黙の許可タイプ](https://tools.ietf.org/html/rfc6749#section-4.2)はサポートされません）
- [でバイスフロー](#device-flow): CLIツールなど、ヘッドレスアプリケーションに使われます。

{% else %}

ブラウザ上で実行される標準的なアプリケーションでは、認可コードを取得してトークンと交換するために[Webアプリケーションフロー](#web-application-flow)を利用してください。 （[暗黙の許可タイプ](https://tools.ietf.org/html/rfc6749#section-4.2)はサポートされません）

{% endif %}

### Web アプリケーションフロー

{% note %}

**ノート:** GitHub Appを構築しているなら、OAuth Webアプリケーションフローを使うこともできますが、セットアップには多少の重要な違いがあります。 詳しい情報については「[GitHub Appのユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

{% endnote %}

アプリケーションのユーザの認可のためのWebアプリケーションフローは以下のとおりです。

1. ユーザはGitHubのアイデンティティをリクエストするためにリダイレクトされます
2. ユーザはGitHubによってサイトにリダイレクトして戻されます
3. アプリケーションはユーザのアクセストークンと共にAPIにアクセスします

#### 1. ユーザのGitHubアイデンティティのリクエスト

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub Appが`login`パラメータを指定すると、ユーザに対して利用できる特定のアカウントでサインインしてアプリケーションを認可するよう求めます。

##### パラメータ

| 名前             | 種類       | 説明                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `string` | **必須**。 ユーザが{% if currentVersion == "free-pro-team@latest" %}[登録](https://github.com/settings/applications/new){% else %}登録{% endif %}されたときに受け取るクライアントID。                                                                                                                                                                                                                                                     |
| `redirect_uri` | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 [リダイレクトURL](#redirect-urls)に関する詳細については下を参照してください。                                                                                                                                                                                                                                                                                                                                 |
| `login`        | `string` | サインインとアプリケーションの認可に使われるアカウントを指示します。                                                                                                                                                                                                                                                                                                                                                                            |
| `scope`        | `string` | スペース区切りの[スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)のリスト。 渡されなかった場合、ユーザの`スコープ`のデフォルトは空のリストになり、アプリケーションにはどのスコープも認可されません。 アプリケーションに対して認可したスコープがあるユーザに対しては、スコープのリストを含むOAuthの認可ページは示されません。 その代わりに、フローのこのステップはユーザがアプリケーションに認可したスコープ群で自動的に完了します。 たとえば、ユーザがすでにWebフローを2回行っており、1つのトークンで`user`スコープを、もう1つのトークンで`repo`スコープを認可している場合、3番目のWebフローで`scope`が渡されなければ、`user`及び`repo`スコープを持つトークンが返されます。 |
| `state`        | `string` | {% data reusables.apps.state_description %}
| `allow_signup` | `string` | OAuthフローの間に、認証されていないユーザに対してGitHubへのサインアップの選択肢が提示されるかどうか。 デフォルトは `true` です。 ポリシーでサインアップが禁止されている場合は`false`を使ってください。                                                                                                                                                                                                                                                                                             |

#### 2. GitHubによるサイトへのユーザのリダイレクト

ユーザがリクエストを受け付けると、{% data variables.product.product_name %}は一時的な`コード`をcodeパラメータに、そして前のステップで渡された状態を`state`パラメータに入れてリダイレクトさせ、サイトに戻します。 一時コードは10分後に期限切れになります。 状態が一致しない場合は、リクエストを作成したサードパーティとユーザはこのプロセスを中止しなければなりません。

この`コード`のアクセストークンとの交換

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### パラメータ

| 名前              | 種類       | 説明                                                                                                                          |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `string` | **必須。** {% data variables.product.prodname_github_app %}に対して{% data variables.product.product_name %}から受け取ったクライアントID。     |
| `client_secret` | `string` | **必須。** {% data variables.product.prodname_github_app %}に対して{% data variables.product.product_name %}から受け取ったクライアントシークレット。 |
| `code`          | `string` | **必須。** ステップ1でレスポンスとして受け取ったコード。                                                                                             |
| `redirect_uri`  | `string` | 認可の後にユーザが送られるアプリケーション中のURL。                                                                                                 |
| `state`         | `string` | ステップ1で提供した推測できないランダムな文字列。                                                                                                   |

##### レスポンス

デフォルトでは、レスポンスは以下の形式になります。

    access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

Acceptヘッダに応じて、異なる形式でコンテンツを受け取ることもできます。

    Accept: application/json
    {"access_token":"e72e16c7e42f292c6912e7710c838347ae178b4a", "scope":"repo,gist", "token_type":"bearer"}
    
    Accept: application/xml
    <OAuth>
      <token_type>bearer</token_type>
      <scope>repo,gist</scope>
      <access_token>e72e16c7e42f292c6912e7710c838347ae178b4a</access_token>
    </OAuth>

#### 3. アクセストークンを使ったAPIへのアクセス

このアクセストークンを使えば、ユーザの代わりにAPIへのリクエストを発行できます。

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

たとえば、curlでは以下のようにAuthorizationヘッダを設定できます。

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### デバイスフロー

{% note %}

**ノート:** デバイスフローはパブリックベータであり、変更されることがあります。{% if currentVersion == "free-pro-team@latest" %} このベータの機能を有効化するには、「[アプリケーションのベータ機能のアクティベート](/developers/apps/activating-beta-features-for-apps)」を参照してください。{% endif %}

{% endnote %}

デバイスフローを使えば、CLIツールやGit認証情報マネージャーなどのヘッドレスアプリケーションのユーザを認可できます。

#### デバイスフローの概要

1. アプリケーションはデバイスとユーザの検証コードをリクエストし、ユーザがユーザ検証コードを入力する認可URLを取得します。
2. アプリケーションは{% data variables.product.device_authorization_url %}でユーザ検証コードを入力するようユーザに求めます。
3.  アプリケーションはユーザ認証のステータスをポーリングします。 ユーザがデバイスを認可すると、アプリケーションは新しいアクセストークンと共にAPIコールを発行できるようになります。

#### ステップ1: アプリケーションによるGitHubからのデバイス及びユーザ検証コードの要求

    POST {% data variables.product.oauth_host_code %}/login/device/code

アプリケーションは、次のステップでユーザに認可を求めるために使うユーザ検証コードと検証URLをリクエストしなければなりません。 このリクエストには、アプリケーションがアクセストークンの受け取りとユーザの認可のステータスチェックに使わなければならないデバイス検証コードも返されます。

##### 入力パラメータ

| 名前          | 種類       | 説明                                                                           |
| ----------- | -------- | ---------------------------------------------------------------------------- |
| `client_id` | `string` | **必須。** {% data variables.product.product_name %}から受け取るアプリケーションのためのクライアントID。 |
| `scope`     | `string` | アプリケーションがアクセスをリクエストしているスコープ。                                                 |

##### レスポンス

{% if currentVersion == "free-pro-team@latest" %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "https://github.com/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% else %}
  ```JSON
  {
    "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
    "user_code": "WDJB-MJHT",
    "verification_uri": "http(s)://[hostname]/login/device",
    "expires_in": 900,
    "interval": 5
  }
  ```
{% endif %}

##### レスポンスのパラメータ

| 名前                 | 種類        | 説明                                                                                                                                                                                                                                             |
| ------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `device_code`      | `string`  | デバイス検証コードは40文字で、デバイスの検証に使われます。                                                                                                                                                                                                                 |
| `user_code`        | `string`  | ユーザ検証コードは、ユーザがブラウザに入力できるようにデバイスに表示されます。 このコードは8文字で、途中にハイフンがあります。                                                                                                                                                                               |
| `verification_uri` | `string`  | ユーザが`user_code`を入力しなければならない検証URL: {% data variables.product.device_authorization_url %}。                                                                                                                                                     |
| `expires_in`       | `integer` | `device_code`及び`user_code`が期限切れになるまでの秒数。 デフォルトは900秒、すなわち15分です。                                                                                                                                                                                 |
| `interval`         | `integer` | デバイスの認可を完了するための新しいアクセストークンのリクエスト（`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`）を発行できるようになるまでに経過しなければならない最小の秒数。 たとえばintervalが5であれば、5秒が経過するまでは新しいリクエストを発行できません。 5秒間に複数のリクエストを発行すると、レート制限に達して`slow_down`エラーが返されます。 |

#### ステップ2: ブラウザでユーザコードの入力をユーザに促す

デバイスはユーザ検証コードを表示し、ユーザに対してこのコードを{% data variables.product.device_authorization_url %}で入力するように求めます。

  ![デバイスに表示されたユーザ検証コードの入力フィールド](/assets/images/github-apps/device_authorization_page_for_user_code.png)

#### ステップ3: ユーザがデバイスを認証したか、アプリケーションがGitHubをポーリング

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

アプリケーションは、デバイス及びユーザコードが期限切れになるか、有効なユーザコードでアプリケーションが認可されるまで、`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`をポーリングするデバイス認可リクエストを発行します。 アプリケーションは、レート制限エラーを避けるために、ステップ1で取得したポーリングの最小`interval`を使います。 詳しい情報については「[デバイスフローのためのレート制限](#rate-limits-for-the-device-flow)」を参照してください。

ユーザは、15分（あるいは900秒）以内に有効なコードを入力しなければなりません。 15分が経過すると、新たなデバイス認可コードを`POST {% data variables.product.oauth_host_code %}/login/device/code`でリクエストしなければなりません。

ユーザが認可されると、アプリケーションはユーザの代わりにAPIにリクエストを発行するために利用できるアクセストークンを受け取ります。

##### 入力パラメータ

| 名前            | 種類       | 説明                                                                                                                     |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `client_id`   | `string` | **必須。** {% data variables.product.prodname_oauth_app %}に対して{% data variables.product.product_name %}から受け取ったクライアントID。 |
| `device_code` | `string` | **必須。** `POST {% data variables.product.oauth_host_code %}/login/device/code`リクエストから受け取ったデバイス検証コード。                    |
| `grant_type`  | `string` | **必須。** 許可タイプは`urn:ietf:params:oauth:grant-type:device_code`でなければなりません。                                                |

##### レスポンス

```json
{
 "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "token_type": "bearer",
  "scope": "user"
}
```

#### デバイスフローのレート制限

ユーザがブラウザ上で検証コードをサブミットする場合、アプリケーションごとに1時間に50回のサブミットというレート制限があります。

リクエスト間で要求される最小の時間間隔（あるいは`interval`）内で複数のアクセストークンリクエスト（`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`）を発行すると、レート制限に達し、`slow_down`のエラーレスポンスが返されます。 `slow_down`エラーレスポンスは、最後の`interval`に5秒を追加します。 詳しい情報については[デバイスフローのエラー](#errors-for-the-device-flow)を参照してください。

#### デバイスフローのエラーコード

| エラーコード                         | 説明                                                                                                                                                                                                                                                                                                                           |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorization_pending`        | このエラーコードは、認可リクエストが保留中で、ユーザがユーザコードをまだ入力していない場合に生じます。 アプリケーションには[`interval`](#response-parameters)を超えない範囲で`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`リクエストをポーリングし続けることが期待されます。この際には、リクエスト間に最小の秒数を空けることが必要です。                                                                                  |
| `slow_down`                    | `slow_down`エラーが返された場合、最小の`interval`、あるいは`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`を利用するリクエストの間に必要な時間間隔に5秒が追加されます。 たとえば、開始時のインターバルとしてリクエスト間に最小で5秒の間隔が必要だった場合に、`slow_down`エラーレスポンスが返されたなら、OAuthアクセストークンを求める新しいリクエストを発行するまでに最短でも10秒待たなければならなくなります。 エラーレスポンスには、使用しなければならない新しい`interval`が含まれます。 |
| `expired_token`                | デバイスコードの有効期限が切れると、`token_expired`エラーが返されます。 デバイスコードを求める新しいリクエストを発行しなければなりません。                                                                                                                                                                                                                                                |
| `unsupported_grant_type`       | OAuthトークンリクエストの`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`でポーリングする際には、許可タイプを`urn:ietf:params:oauth:grant-type:device_code`として、入力パラメータに含めなければなりません。                                                                                                                                          |
| `incorrect_client_credentials` | デバイスフローでは、アプリケーションのクライアントIDを渡さなければなりません。これは、アプリケーションの設定ページにあります。 デバイスフローでは`client_secret`は必要ありません。                                                                                                                                                                                                                           |
| `incorrect_device_code`        | 渡されたdevice_codeが有効ではありません。                                                                                                                                                                                                                                                                                                   |
| `access_denied`                | 認可プロセスの間でユーザがキャンセルをクリックした場合、`access_denied`エラーが返され、ユーザは検証コードを再度利用することができなくなります。                                                                                                                                                                                                                                              |

詳しい情報については、「[OAuth 2.0デバイス認可の許可](https://tools.ietf.org/html/rfc8628#section-3.5)」を参照してください。

{% endif %}

### 非Webアプリケーションフロー

テストのような限定的な状況では、非Web認証が利用できます。 必要な場合は、[個人アクセストークン設定ページ](/articles/creating-an-access-token-for-command-line-use)を使い、[Basic認証](/v3/auth#basic-authentication)を利用して個人アクセストークンを作成できます。 この手法を使えば、ユーザはいつでもアクセスを取り消せます。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
{% note %}

**ノート:** 非Webアプリケーションフローを使ってOAuth2トークンを作成する場合で、ユーザが2要素認証を有効化しているなら[2要素認証の利用](/v3/auth/#working-with-two-factor-authentication)方法を必ず理解しておいてください。

{% endnote %}
{% endif %}

### リダイレクトURL

`redirect_uri`パラメータはオプションです。 指定しなかった場合、GitHubはOAuthアプリケーションで設定されているコールバックURLにユーザをリダイレクトさせます。 指定する場合、リダイレクトURLのホストとポートはコールバックURLと完全に一致していなければなりません。 リダイレクトURLのパスは、コールバックURLのサブディレクトリを参照していなければなりません。

    CALLBACK: http://example.com/path
    
    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

#### ローカルホストのリダイレクトURL

オプションの`redirect_uri`パラメータは、ローカルホストURLにも使用できます。 アプリケーションがローカルホストのURLとポートを指定した場合、アプリケーションを認可した後ユーザは渡されたURLとポートにリダイレクトされます。 `redirect_uri`は、アプリケーションのコールバックURLで指定されたポートにマッチしている必要はありません。

`http://localhost/path`というコールバックURLに対して、以下の`redirect_uri`が利用できます。

   http://localhost:1234/path

### OAuthアプリケーションに複数のトークンを作成する

ユーザ／アプリケーション／スコープの組み合わせに対して複数のトークンを作成し、特定のユースケースに対応できます。

OAuthアプリケーションが、サインインにGitHubを利用し、基本的なユーザ情報しか必要としないワークフローを1つサポートするだけであれば、これは有益です。 別のワークフローはユーザのプライベートリポジトリへのアクセスを必要としていてもかまいません。 複数のトークンを使えば、OAuthアプリケーションはそれぞれのユースケースに対してWebフローを実行でき、必要なスコープだけをリクエストします。 ユーザがサインインにアプリケーションだけを使うなら、ユーザは自分のプライベートリポジトリへのアクセスをOAuthアプリケーションに許可する必要はありません。

ユーザ／アプリケーション／スコープの組み合わせごとに、発行できるトークン数には制限があります。 アプリケーションが制限のいずれかを超えるトークンをリクエストした場合、_リクエストされたのと同じスコープを持つ_古いトークンは働かなくなります。

{% data reusables.apps.deletes_ssh_keys %}

### ユーザにアクセスをレビューしてもらう

OAuthアプリケーションへの認可情報へリンクし、ユーザがアプリケーションの認可をレビューし、取り消しできるようにすることができます。

このリンクを構築するには、アプリケーションを登録したときにGitHubから受け取ったOAuthアプリケーションの`client_id`が必要です。

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Tip:** OAuthアプリケーションがユーザのためにアクセスできるリソースについてさらに学ぶには、「[ユーザのためにリソースを見つける](/v3/guides/discovering-resources-for-a-user/)」を参照してください。

{% endtip %}

### トラブルシューティング

* 「[認可リクエストエラーのトラブルシューティング](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)」
* 「[OAuthアプリケーションのアクセストークンのリクエストエラー](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)」
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
* 「[デバイスフローのエラー](#errors-for-the-device-flow)」
{% endif %}
