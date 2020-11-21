---
title: その他の認証方式
intro: 本番環境以外でのテストには、Basic 認証を使用できます。
redirect_from:
  - /v3/auth
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
API は複数の認証方式を提供していますが、本番アプリケーションには [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) を使用することを強くお勧めします。 他の方式は、スクリプトまたはテスト（完全な OAuth では過剰になる場合）に使用するために提供されています。 Third party applications that rely on
{% data variables.product.product_name %} for authentication should not ask for or collect {% data variables.product.product_name %} credentials.
代わりに、[OAuth web フロー](/apps/building-oauth-apps/authorizing-oauth-apps/)を使用してください。

{% endif %}

{% if currentVersion == "github-ae@latest" %}

To authenticate we recommend using [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) tokens, such a personal access token through the [OAuth web flow](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

### Basic 認証

API は、[RFC2617](http://www.ietf.org/rfc/rfc2617.txt) で定義されている Basic 認証をサポートしていますが、若干の違いがあります。 主な違いは、RFC では、認証されていないリクエストに `401 Unauthorized` レスポンスで応える必要がある点です。 これにより、多くの場所でユーザデータの存在が明らかになります。 代わりに、{% data variables.product.product_name %} API は `404 Not Found` で応答します。 これにより、`401 Unauthorized` レスポンスを想定する HTTP ライブラリで問題が発生する可能性があります。 これは `Authorization` ヘッダを手動で作成することで解決できます。

#### OAuth と個人アクセストークンを使用する

GitHub API への認証には OAuth トークンを使用することをお勧めします。 OAuth トークンには[個人アクセストークン][personal-access-tokens]が含まれており、ユーザはいつでもアクセスを取り消すことができます。

```shell
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
```

このアプローチは、ツールが Basic 認証のみをサポートしているが、OAuth アクセストークンのセキュリティ機能を利用したい場合に役立ちます。

#### ユーザ名とパスワードを使用する

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} has discontinued password authentication to the API starting on November 13, 2020 for all {% data variables.product.prodname_dotcom_the_website %} accounts, including those on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_ghe_cloud %} plan. You must now authenticate to the {% data variables.product.prodname_dotcom %} API with an API token, such as an OAuth access token, GitHub App installation access token, or personal access token, depending on what you need to do with the token. For more information, see "[Troubleshooting](/rest/overview/troubleshooting#basic-authentication-errors)."

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
To use Basic Authentication with the
{% data variables.product.product_name %} API, simply send the username and
password associated with the account.

たとえば、[cURL][curl] を介して API にアクセスしている場合、`<username>` を {% data variables.product.product_name %} のユーザ名に置き換えると、次のコマンドで認証されます。 （cURL からパスワードの入力を求められます。）

```shell
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
```
2 要素認証を有効にしている場合は、[2 要素認証の使用方法](/v3/auth/#working-with-two-factor-authentication)を理解した上で行ってください。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### SAML SSO を認証する

{% note %}

**注釈:** 他のユーザに代わってトークンを生成するインテグレーションおよび OAuth アプリケーションは、自動的に承認されます。

{% endnote %}

認証に[SAML SSO][saml-sso]を強制しているOrganizationにアクセスするためAPIを使用している場合は、個人アクセストークン (PAT) を作成し、Organizationに対して[そのトークンを認証する][allowlist]必要があります。 `X-GitHub-SSO` で指定された URL にアクセスして、Organization のトークンを承認します。

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

複数の Organization からのデータをリクエストする場合（たとえば、[ユーザが作成した Issue のリストをリクエストする場合][user-issues]）、`X-GitHub-SSO` ヘッダは、個人アクセストークンを承認する必要がある Organization を示します。

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

`organizations` の値は、個人アクセストークンの承認が必要な Organization の Organization IDのカンマ区切りのリストです。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
### 2 要素認証を使用する

When you have two-factor authentication enabled, [Basic Authentication](#basic-authentication) for _most_ endpoints in the REST API requires that you use a personal access token{% if enterpriseServerVersions contains currentVersion %} or OAuth token instead of your username and password{% endif %}.

You can generate a new personal access token {% if currentVersion == "free-pro-team@latest" %}using [{% data variables.product.product_name %} developer settings](https://github.com/settings/tokens/new){% endif %}{% if enterpriseServerVersions contains currentVersion %} or with the "\[Create a new authorization\]\[/rest/reference/oauth-authorizations#create-a-new-authorization\]" endpoint in the OAuth Authorizations API to generate a new OAuth token{% endif %}. 詳しい情報については、「[コマンドラインの個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)」を参照してください。 Then you would use these tokens to [authenticate using OAuth token][oauth-auth] with the {% data variables.product.prodname_dotcom %} API.{% if enterpriseServerVersions contains currentVersion %} The only time you need to authenticate with your username and password is when you create your OAuth token or use the OAuth Authorizations API.{% endif %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
#### 2 要素認証で OAuth Authorizations API を使用する

OAuth Authorizations API を呼び出す場合、Basic 認証では、トークンの代わりにワンタイムパスワード（OTP）とユーザ名とパスワードを使用する必要があります。 OAuth Authorizations API で認証しようとすると、サーバは `401 Unauthorized` とこれらのヘッダの 1 つで応答し、2 要素認証コードが必要であることを通知します。

`X-GitHub-OTP: required; SMS` または `X-GitHub-OTP: required; app`

このヘッダは、アカウントの 2 要素認証コードの受け取り方法を示します。 アカウントの設定方法に応じて、SMS 経由で OTP コードを受け取るか、Google 認証システムや 1Password などのアプリケーションを使用します。 詳しい情報については「[2 要素認証の設定](/articles/configuring-two-factor-authentication)」を参照してください。 ヘッダーで次のように OTP を渡します。

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic <em>PASSWORD</em>' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: <em>OTP</em>' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /v3/#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /v3/issues/#list-issues-assigned-to-the-authenticated-user
