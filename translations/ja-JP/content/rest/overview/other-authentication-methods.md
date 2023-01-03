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
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172718'
---
{% ifversion fpt or ghes or ghec %} この API には認証のための方法が複数用意されていますが、運用アプリケーションには [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) を使用することを強くお勧めします。 他の方式は、スクリプトまたはテスト (完全な OAuth では過剰になる場合) に使うために提供されています。 認証に {% data variables.product.product_name %} を使うサードパーティのアプリケーションでは、{% data variables.product.product_name %} の認証情報を要求することも収集することもしてはなりません。
代わりに、[OAuth Web フロー](/apps/building-oauth-apps/authorizing-oauth-apps/)を使う必要があります。

{% endif %}

{% ifversion ghae %}

認証には、[OAuth Web フロー](/apps/building-oauth-apps/authorizing-oauth-apps/)を介した{% data variables.product.pat_generic %}などの [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) トークンを使うことをお勧めします。

{% endif %}

## 基本認証

API では、[RFC2617](http://www.ietf.org/rfc/rfc2617.txt) で定義されている基本認証がサポートされていますが、わずかな相違点があります。
主な相違点は、RFC では、認証されていないリクエストに `401 Unauthorized` レスポンスで応える必要があるという点です。 これにより、多くの場所でユーザー データの存在が明らかになります。 その代わりに、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API は、`404 Not Found` で応答します。
これにより、`401 Unauthorized` を応答を想定する HTTP ライブラリに問題が発生する可能性があります。 解決策は、`Authorization` ヘッダーを手動で作成することです。

### {% data variables.product.pat_generic %}の使用

{% ifversion pat-v2%}{% data variables.product.pat_v2 %}{% else %}{% data variables.product.pat_generic %}{% endif %}を使って GitHub API に対する認証を行うことをお勧めします。

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

この方法は、ツールは基本認証のみをサポートしているが、{% data variables.product.pat_generic %}のセキュリティ機能を利用したい場合に役立ちます。

{% ifversion not ghae %}
### ユーザ名とパスワードを使用する

{% ifversion fpt or ghec %} {% note %}

**注:** {% data variables.product.prodname_dotcom %} は、2020 年 11 月 13 日以降、{% data variables.product.prodname_dotcom_the_website %} アカウントの API へのパスワード認証を廃止しました。これには、{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、または {% data variables.product.prodname_ghe_cloud %} プランに対するものが含まれます。 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API に対する認証は、トークンで行う必要があることに応じて、OAuth アクセス トークン、GitHub App インストール アクセス トークン、{% data variables.product.pat_generic %}などの API トークンを使って行う必要があります。 詳細については、[トラブルシューティング](/rest/overview/troubleshooting#basic-authentication-errors)に関するページを参照してください。
 
{% endnote %} {% else %}

{% data variables.product.product_name %} API で基本認証を使うには、アカウントに関連付けられているユーザー名とパスワードを送信するだけです。

たとえば、[cURL][curl] を介して API にアクセスする場合、`<username>` を実際の {% data variables.product.product_name %} ユーザー名に置き換えて次のコマンドを実行すると、認証が行われます。
（cURL からパスワードの入力を求められます。）

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
ご自分が 2 要素認証を有効にしている場合は、[2 要素認証の使用](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)方法を理解していることを確認してください。
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### SAML SSO を認証する

{% note %}

**注:** 他のユーザーに代わってトークンを生成するインテグレーションおよび OAuth アプリケーションは、自動的に承認されます。

{% endnote %}

{% note %}

**注:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

API を使って、認証に [SAML SSO][saml-sso] を適用する組織にアクセスする場合は、{% data variables.product.pat_generic %}を作成し、その組織の[トークンを承認する][allowlist]必要があります。 `X-GitHub-SSO` で指定された URL にアクセスして、組織のトークンを承認します。

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

複数の組織からのデータを要求する場合 (たとえば、[ユーザーが作成した issue のリストの要求][user-issues])、`X-GitHub-SSO` ヘッダーは{% data variables.product.pat_generic %}の承認を必要とする組織を示します。

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

値 `organizations` は、{% data variables.product.pat_generic %}の承認が必要な組織を表す組織 ID のコンマ区切りのリストです。
{% endif %}

{% ifversion fpt or ghes or ghec %}
## 2 要素認証を使用する

2 要素認証を有効にしている場合、REST API での "ほとんどの" エンドポイントに対する[基本認証](#basic-authentication)では、{% data variables.product.pat_generic %}{% ifversion ghes %}またはユーザー名とパスワードではなく OAuth トークン{% endif %}を使う必要があります。

{% ifversion fpt or ghec %}[{% data variables.product.product_name %} 開発者設定](https://github.com/settings/tokens/new)を使って、{% endif %}新しい{% data variables.product.pat_generic %}を生成できます。{% ifversion ghes %}または、OAuth Authorizations API の「[新しい承認を作成する][/rest/reference/oauth-authorizations#create-a-new-authorization]」エンドポイントで新しい OAuth トークンを生成できます。{% endif %} 詳しくは、[コマンド ライン用の{% data variables.product.pat_generic %}の作成](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)に関する記事をご覧ください。 そうすれば、それらのトークンを使用して、[OAuth トークンを使用した認証を ][oauth-auth]{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API で行うことができます。{% ifversion ghes %}ユーザー名とパスワードで認証する必要があるのは、OAuth トークンを作成するときまたは OAuth 認証 API を使用するときのみです。{% endif %}

{% endif %}

{% ifversion ghes %}
### 2 要素認証で OAuth Authorizations API を使用する

OAuth Authorizations API を呼び出す場合、Basic 認証では、トークンの代わりにワンタイムパスワード（OTP）とユーザ名とパスワードを使用する必要があります。 OAuth Authorizations API で認証しようとすると、サーバーは `401 Unauthorized` とこれらのヘッダーの 1 つで応答し、2 要素認証コードが必要であることを通知します。

`X-GitHub-OTP: required; SMS` または `X-GitHub-OTP: required; app`。  

このヘッダは、アカウントの 2 要素認証コードの受け取り方法を示します。 アカウントの設定方法に応じて、SMS 経由で OTP コードを受け取るか、Google 認証システムや 1Password などのアプリケーションを使用します。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication)」を参照してください。 ヘッダーで次のように OTP を渡します。

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
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
