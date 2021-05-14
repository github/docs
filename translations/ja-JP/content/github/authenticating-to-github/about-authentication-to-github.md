---
title: GitHub への認証方法について
intro: '認証先に応じて異なる認証情報を使用し、{% data variables.product.product_name %} への認証を行うことで、アカウントのリソースに安全にアクセスできます。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### {% data variables.product.prodname_dotcom %} への認証について

アカウントを安全に保つには、{% data variables.product.product_name %} の {% if currentVersion != "github-ae@latest" %} 特定 {% endif %} のリソースにアクセスする前に認証する必要があります。 {% data variables.product.product_name %} への認証を行うときは、自分が確かに本人であることを証明するために、固有の認証情報を提供または確認します。

{% data variables.product.product_name %} のリソースには、ブラウザ内、{% data variables.product.prodname_desktop %} または別のデスクトップアプリケーション経由、API 経由、またはコマンドライン経由など、さまざまな方法でアクセスできます。 {% data variables.product.product_name %} へのアクセス方法は、それぞれ異なる認証モードをサポートしています。

- {% if currentVersion == "github-ae@latest" %} ID プロバイダ (IdP) {% else %} 2 要素認証を使用したユーザ名とパスワード{% endif %}
- 個人アクセストークン
- SSH キー

### ブラウザで認証する

IdP を使用して、ブラウザ {% if currentVersion == "github-ae@latest" %} で {% data variables.product.product_name %} に認証できます。 詳しい情報については、いくつかの方法で{% else %}「[SAML シングルサインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」を参照してください。

- **ユーザ名とパスワードのみ**
    - {% data variables.product.product_name %} でユーザアカウントを作成するときにパスワードを作成します。 パスワードマネージャを使用して、ランダムで一意のパスワードを生成することをお勧めします。 詳しい情報については、「[強力なパスワードを作成する](/github/authenticating-to-github/creating-a-strong-password)」を参照してください。
- **2 要素認証 (2FA)**（推奨）
    - 2FA を有効にすると、ユーザ名とパスワードを入力した後に、モバイルデバイスのアプリケーションによって生成されたコードか、テキストメッセージ (SMS) として送信されたコードの入力も求められます。 詳しい情報については [2 要素認証を用いた {% data variables.product.prodname_dotcom %}へのアクセス](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)を参照してください。
    - モバイルアプリケーションまたはテキストメッセージでの認証に加えて、必要に応じて、WebAuthn を使用したセキュリティキーを使用した第2の認証方法を追加できます。 詳しい情報については、「[セキュリティキーを使用した 2 要素認証を設定する](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。
{% endif %}

### {% data variables.product.prodname_desktop %} で認証する

お使いのブラウザを使用して {% data variables.product.prodname_desktop %} で認証できます。 詳しい情報については「[{% data variables.product.prodname_dotcom %}への認証を行う](/desktop/getting-started-with-github-desktop/authenticating-to-github)」を参照してください。

### API で認証する

さまざまな方法で API を使用して認証できます。

- **個人アクセストークン**
    - テストなどの限られた状況では、個人アクセストークンを使用して API にアクセスできます。 個人アクセストークンを使用すると、いつでもアクセスを取り消すことができます。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
- **Web アプリケーションフロー**
    - 製品としての OAuth App の場合、Web アプリケーションフローを使用して認証する必要があります。 詳しい情報については、「[OAuth App を認証する](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)」を参照してください。
- **GitHub Apps**
    - 製品としての GitHub App の場合、アプリケーションのインストールに代わって認証する必要があります。 詳しい情報については、「[{% data variables.product.prodname_github_apps %} で認証する](/apps/building-github-apps/authenticating-with-github-apps/)」を参照してください。

### コマンドラインで認証する

コマンドラインから {% data variables.product.product_name %} のリポジトリにアクセスするには、HTTPS と SSH の 2 つの方法がありますが、それぞれ認証方法が異なります。 認証方法は、リポジトリのクローンを作成するときに HTTPS または SSH リモート URL を選択したかどうかに基づいて決まります。 For more information about which way to access, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

* ファイアウォールまたはプロキシの内側からでも、HTTPS を介して {% data variables.product.product_name %} 上のすべてのリポジトリを操作できます。 Git を使用して {% data variables.product.product_name %} で認証するたびに[認証情報ヘルパー](/github/getting-started-with-github/caching-your-github-credentials-in-git)でキャッシュしない限り、{% data variables.product.product_name %} で認証するための資格情報を入力するように求められます。 {% data reusables.user_settings.password-authentication-deprecation %}

* SSH 接続はファイアウォールとプロキシから許可されない場合がありますが、SSH 経由で {% data variables.product.product_name %} 上のすべてのリポジトリを操作できます。 SSH を使用するには、ローカルマシンで SSH 公開鍵/秘密鍵ペアを生成し、公開鍵を {% data variables.product.product_name %} アカウントに追加する必要があります。 Git を使用して {% data variables.product.product_name %} で認証するたびに、[キーを保存](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)していない限り、SSH キーのパスフレーズの入力を求められます。 詳しい情報については、「[新しい SSH キーを生成して ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %} 個人アクセストークンまたは SSH キーを使用して、SAML シングルサインオンを使用する Organization が所有するリソースにアクセスするには、個人トークンまたは SSH キーも承認する必要があります。 詳しい情報については、[SAML シングルサインオンで利用するために個人アクセストークンを認証する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングルサインオンで使用するために SSH キーを認証する](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}

### {% data variables.product.company_short %}'s token formats

{% data variables.product.company_short %} issues tokens that begin with a prefix to indicate the token's type.

| Token type                                                                      | Prefix | 詳細情報                                                                                                                                                              |
|:------------------------------------------------------------------------------- |:------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 個人アクセストークン                                                                      | `ghp_` | [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)                                                                              |
| OAuth access token                                                              | `gho_` | "[Authorizing {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps)"                                                       |
| User-to-server token for a {% data variables.product.prodname_github_app %}   | `ghu_` | "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/developers/apps/identifying-and-authorizing-users-for-github-apps)" |
| Server-to-server token for a {% data variables.product.prodname_github_app %} | `ghs_` | "[Authenticating with {% data variables.product.prodname_github_apps %}](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)"   |
| Refresh token for a {% data variables.product.prodname_github_app %}          | `ghr_` | "[Refreshing user-to-server access tokens](/developers/apps/refreshing-user-to-server-access-tokens)"                                                             |

{% endif %}
