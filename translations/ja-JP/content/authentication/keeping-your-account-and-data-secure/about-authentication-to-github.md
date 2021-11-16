---
title: GitHub への認証方法について
intro: '認証先に応じて異なる認証情報を使用し、{% data variables.product.product_name %} への認証を行うことで、アカウントのリソースに安全にアクセスできます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
---

## {% data variables.product.prodname_dotcom %} への認証について

アカウントを安全に保つには、{% data variables.product.product_name %} の {% ifversion not ghae %} 特定 {% endif %} のリソースにアクセスする前に認証する必要があります。 {% data variables.product.product_name %} への認証を行うときは、自分が確かに本人であることを証明するために、固有の認証情報を提供または確認します。

{% data variables.product.product_name %} のリソースには、ブラウザ内、{% data variables.product.prodname_desktop %} または別のデスクトップアプリケーション経由、API 経由、またはコマンドライン経由など、さまざまな方法でアクセスできます。 {% data variables.product.product_name %} へのアクセス方法は、それぞれ異なる認証モードをサポートしています。

- {% ifversion ghae %} ID プロバイダ (IdP) {% else %} 2 要素認証を使用したユーザ名とパスワード{% endif %}
- 個人アクセストークン
- SSH キー

## ブラウザで認証する

IdP を使用して、ブラウザ {% ifversion ghae %} で {% data variables.product.product_name %} に認証できます。 詳しい情報については、いくつかの方法で{% else %}「[SAML シングルサインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」を参照してください。

{% ifversion fpt or ghec %}
- If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you will authenticate to {% data variables.product.product_name %} in your browser using your IdP. For more information, see "[Authenticating as a managed user](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %} If you're not a member of an {% data variables.product.prodname_emu_enterprise %}, you will authenticate using your browser on {% data variables.product.prodname_dotcom_the_website %}.
{% endif %}

- **ユーザ名とパスワードのみ**
    - {% data variables.product.product_name %} でユーザアカウントを作成するときにパスワードを作成します。 パスワードマネージャを使用して、ランダムで一意のパスワードを生成することをお勧めします。 詳しい情報については、「[強力なパスワードを作成する](/github/authenticating-to-github/creating-a-strong-password)」を参照してください。
- **2 要素認証 (2FA)**（推奨）
    - 2FA を有効にすると、ユーザ名とパスワードを入力した後に、モバイルデバイスのアプリケーションによって生成されたコードか、テキストメッセージ (SMS) として送信されたコードの入力も求められます。 詳しい情報については [2 要素認証を用いた {% data variables.product.prodname_dotcom %}へのアクセス](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)を参照してください。
    - モバイルアプリケーションまたはテキストメッセージでの認証に加えて、必要に応じて、WebAuthn を使用したセキュリティキーを使用した第2の認証方法を追加できます。 詳しい情報については、「[セキュリティキーを使用した 2 要素認証を設定する](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。
{% endif %}

## {% data variables.product.prodname_desktop %} で認証する

お使いのブラウザを使用して {% data variables.product.prodname_desktop %} で認証できます。 詳しい情報については「[{% data variables.product.prodname_dotcom %}への認証を行う](/desktop/getting-started-with-github-desktop/authenticating-to-github)」を参照してください。

## API で認証する

さまざまな方法で API を使用して認証できます。

- **個人アクセストークン**
    - テストなどの限られた状況では、個人アクセストークンを使用して API にアクセスできます。 個人アクセストークンを使用すると、いつでもアクセスを取り消すことができます。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
- **Web アプリケーションフロー**
    - 製品としての OAuth App の場合、Web アプリケーションフローを使用して認証する必要があります。 詳しい情報については、「[OAuth App を認証する](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)」を参照してください。
- **GitHub Apps**
    - 製品としての GitHub App の場合、アプリケーションのインストールに代わって認証する必要があります。 詳しい情報については、「[{% data variables.product.prodname_github_apps %} で認証する](/apps/building-github-apps/authenticating-with-github-apps/)」を参照してください。

## コマンドラインで認証する

コマンドラインから {% data variables.product.product_name %} のリポジトリにアクセスするには、HTTPS と SSH の 2 つの方法がありますが、それぞれ認証方法が異なります。 認証方法は、リポジトリのクローンを作成するときに HTTPS または SSH リモート URL を選択したかどうかに基づいて決まります。 アクセス方法の詳細については、「[リモートリポジトリについて](/github/getting-started-with-github/about-remote-repositories)」を参照してください。

### HTTPS

ファイアウォールまたはプロキシの内側からでも、HTTPS を介して {% data variables.product.product_name %} 上のすべてのリポジトリを操作できます。

If you authenticate with {% data variables.product.prodname_cli %}, you can either authenticate with a personal access token or via the web browser. For more information about authenticating with {% data variables.product.prodname_cli %}, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

If you authenticate without {% data variables.product.prodname_cli %}, you must authenticate with a personal access token. {% data reusables.user_settings.password-authentication-deprecation %} Every time you use Git to authenticate with {% data variables.product.product_name %}, you'll be prompted to enter your credentials to authenticate with {% data variables.product.product_name %}, unless you cache them a [credential helper](/github/getting-started-with-github/caching-your-github-credentials-in-git).

### SSH

SSH 接続はファイアウォールとプロキシから許可されない場合がありますが、SSH 経由で {% data variables.product.product_name %} 上のすべてのリポジトリを操作できます。

If you authenticate with {% data variables.product.prodname_cli %}, the CLI will find SSH public keys on your machine and will prompt you to select one for upload. If {% data variables.product.prodname_cli %} does not find a SSH public key for upload, it can generate a new SSH public/private keypair and upload the public key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Then, you can either authenticate with a personal access token or via the web browser. For more information about authenticating with {% data variables.product.prodname_cli %}, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

If you authenticate without {% data variables.product.prodname_cli %}, you will need to generate an SSH public/private keypair on your local machine and add the public key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. 詳しい情報については、「[新しい SSH キーを生成して ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。 Git を使用して {% data variables.product.product_name %} で認証するたびに、[キーを保存](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)していない限り、SSH キーのパスフレーズの入力を求められます。

### Authorizing for SAML single sign-on

{% ifversion fpt or ghec %}個人アクセストークンまたは SSH キーを使用して、SAML シングルサインオンを使用する Organization が所有するリソースにアクセスするには、個人トークンまたは SSH キーも認証する必要があります。 詳しい情報については、[SAML シングルサインオンで利用するために個人アクセストークンを認証する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングルサインオンで使用するために SSH キーを認証する](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}

## {% data variables.product.company_short %} のトークンフォーマット

{% data variables.product.company_short %} は、トークンの種別を示すプレフィックスで始まるトークンを発行します。

| トークン種別                                                               | プレフィックス | 詳細情報                                                                                                                                              |
|:-------------------------------------------------------------------- |:------- |:------------------------------------------------------------------------------------------------------------------------------------------------- |
| 個人アクセストークン                                                           | `ghp_`  | [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)                                                              |
| OAuth アクセストークン                                                       | `gho_`  | 「[{% data variables.product.prodname_oauth_apps %} を認可する](/developers/apps/authorizing-oauth-apps)」                                             |
| {% data variables.product.prodname_github_app %} のユーザからサーバーへのトークン  | `ghu_`  | 「[{% data variables.product.prodname_github_apps %} のユーザの特定と認可](/developers/apps/identifying-and-authorizing-users-for-github-apps)」            |
| {% data variables.product.prodname_github_app %} のサーバーからサーバーへのトークン | `ghs_`  | 「[{% data variables.product.prodname_github_apps %} で認証する](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)」 |
| {% data variables.product.prodname_github_app %} のトークンのリフレッシュ      | `ghr_`  | 「[ユーザからサーバーに対するアクセストークンをリフレッシュする](/developers/apps/refreshing-user-to-server-access-tokens)」                                                      |

{% endif %}
