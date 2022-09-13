---
title: その他の認証方法
intro: 本番環境以外でのテストには、Basic 認証を使用できます。
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: 9698e18a2d57eceb328ae32f94bdb9f72b7b6fa7
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717845'
---
{% ifversion fpt or ghes or ghec %} この API には認証のための方法が複数用意されていますが、運用アプリケーションには [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) を使用することを強くお勧めします。 他の方式は、スクリプトまたはテスト (完全な OAuth では過剰になる場合) に使うために提供されています。 認証に {% data variables.product.product_name %} を使うサードパーティのアプリケーションでは、{% data variables.product.product_name %} の認証情報を要求することも収集することもしてはなりません。
代わりに、[OAuth Web フロー](/apps/building-oauth-apps/authorizing-oauth-apps/)を使う必要があります。

{% endif %}

{% ifversion ghae %}

認証するには、[OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) トークン ([OAuth Web フロー](/apps/building-oauth-apps/authorizing-oauth-apps/)を介したパーソナル アクセス トークンなどの個人用アクセス トークン) を使うことをお勧めします。

{% endif %}

## 基本認証

API では、[RFC2617](http://www.ietf.org/rfc/rfc2617.txt) で定義されている基本認証がサポートされていますが、わずかな相違点があります。
主な相違点は、RFC では、認証されていないリクエストに `401 Unauthorized` レスポンスで応える必要があるという点です。 これにより、多くの場所でユーザー データの存在が明らかになります。 その代わりに、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API は、`404 Not Found` で応答します。
これにより、`401 Unauthorized` を応答を想定する HTTP ライブラリに問題が発生する可能性があります。 解決策は、`Authorization` ヘッダーを手動で作成することです。

### OAuth と個人アクセストークンを使用する

GitHub API への認証には OAuth トークンを使用することをお勧めします。 OAuth トークンには [個人用アクセス トークンが][personal-access-tokens]含まれていて、ユーザーはいつでもアクセスを取り消すことができます。

```shell
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
```

このアプローチは、ツールが Basic 認証のみをサポートしているが、OAuth アクセストークンのセキュリティ機能を利用したい場合に役立ちます。

### ユーザ名とパスワードを使用する

{% ifversion fpt or ghec %}

{% note %}

**注:** {% data variables.product.prodname_dotcom %} は、2020 年 11 月 13 日以降、{% data variables.product.prodname_dotcom_the_website %} アカウントの API へのパスワード認証を廃止しました。これには、{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、または {% data variables.product.prodname_ghe_cloud %} プランに対するものが含まれます。 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIでは、トークンを使ってやりたいことに応じて、OAuthアクセストークン、GitHub Appインストールアクセストークン、あるいは個人アクセストークンのようなAPIトークンで認証を受けなければならなくなりました。 詳細については、[トラブルシューティング](/rest/overview/troubleshooting#basic-authentication-errors)に関するページを参照してください。
 
{% endnote %}

{% endif %}

{% ifversion ghes %} {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API で基本認証を使用するには、アカウントに関連付けられているユーザー名とパスワードを送信するだけです。

たとえば、[cURL][curl] を介して API にアクセスする場合、`<username>` を実際の {% data variables.product.product_name %} ユーザー名に置き換えて次のコマンドを実行すると、認証が行われます。
（cURL からパスワードの入力を求められます。）

```shell
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
```
ご自分が 2 要素認証を有効にしている場合は、[2 要素認証の使用](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)方法を理解していることを確認してください。

{% endif %}

{% ifversion fpt or ghec %}
### SAML SSO を認証する

{% note %}

**注:** 他のユーザーに代わってトークンを生成するインテグレーションおよび OAuth アプリケーションは、自動的に承認されます。

{% endnote %}

{% note %}

**注:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

API を使用して、認証に [SAML SSO][saml-sso] を適用する組織にアクセスする場合は、個人用アクセス トークン (PAT) を作成し、その組織の[トークンを承認する][allowlist]必要があります。 `X-GitHub-SSO` で指定された URL にアクセスして、組織のトークンを承認します。

```shell
$ curl -v -H "Authorization: Bearer <em>TOKEN</em>" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

複数の組織からのデータを要求する場合 (たとえば、[ユーザーが作成した問題のリストを要求する][user-issues])、`X-GitHub-SSO` ヘッダーは個人用アクセス トークンの承認を要求する組織を示します。

```shell
$ curl -v -H "Authorization: Bearer <em>TOKEN</em>" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

値 `organizations` は、個人用アクセス トークンの承認が必要な組織を表す組織 ID のコンマ区切りのリストです。
{% endif %}

{% ifversion fpt or ghes or ghec %}
## 2 要素認証を使用する

2 要素認証を有効にしている場合、REST API の _ほとんど_ のエンドポイントの [Basic 認証](#basic-authentication) では、ユーザー名とパスワードではなく個人用アクセス トークン {% ifversion ghes %} または OAuth トークンを使う必要があります{% endif %}。

[{% data variables.product.product_name %} 開発者設定](https://github.com/settings/tokens/new){% endif %}{% ifversion ghes %} を使用して新しい個人用トークン {% ifversion fpt or ghec %} を生成することも、OAuth Authorizations API の "[Create a new authorization][/rest/reference/oauth-authorizations#create-a-new-authorization]" エンドポイントを使用して新しい OAuth トークンを生成することもできます{% endif %}。 詳細については、[コマンド ライン用の個人用アクセス トークンの使用](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)に関するページを参照してください。 そうすれば、それらのトークンを使用して、[OAuth トークンを使用した認証を ][oauth-auth]{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API で行うことができます。{% ifversion ghes %}ユーザー名とパスワードで認証する必要があるのは、OAuth トークンを作成するときまたは OAuth 認証 API を使用するときのみです。{% endif %}

{% endif %}

{% ifversion ghes %}
### 2 要素認証で OAuth Authorizations API を使用する

OAuth Authorizations API を呼び出す場合、Basic 認証では、トークンの代わりにワンタイムパスワード（OTP）とユーザ名とパスワードを使用する必要があります。 OAuth Authorizations API で認証しようとすると、サーバーは `401 Unauthorized` とこれらのヘッダーの 1 つで応答し、2 要素認証コードが必要であることを通知します。

`X-GitHub-OTP: required; SMS` または `X-GitHub-OTP: required; app`。  

このヘッダは、アカウントの 2 要素認証コードの受け取り方法を示します。 アカウントの設定方法に応じて、SMS 経由で OTP コードを受け取るか、Google 認証システムや 1Password などのアプリケーションを使用します。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication)」を参照してください。 ヘッダーで次のように OTP を渡します。

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
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
