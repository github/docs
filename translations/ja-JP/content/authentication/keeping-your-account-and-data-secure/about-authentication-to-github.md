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
ms.openlocfilehash: d40d3e18c75c2e5d8f16ebbb4fd9b6fdf03e2a73
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718094'
---
## {% data variables.product.prodname_dotcom %} の認証について

アカウントを安全に保つには、{% data variables.product.product_name %} の{% ifversion not ghae %}特定の{% endif %}リソースにアクセスする前に認証する必要があります。 {% data variables.product.product_name %} への認証を行うときは、自分が確かに本人であることを証明するために、固有の認証情報を提供または確認します。

{% data variables.product.product_name %} のリソースには、ブラウザ内、{% data variables.product.prodname_desktop %} または別のデスクトップアプリケーション経由、API 経由、またはコマンドライン経由など、さまざまな方法でアクセスできます。 {% data variables.product.product_name %} へのアクセス方法は、それぞれ異なる認証モードをサポートしています。
{%- ifversion not fpt %}
- ID プロバイダー (IdP){% endif %}{% ifversion not ghae %}
- 2 要素認証のユーザー名とパスワード{% endif %}
- 個人用アクセス トークン
- SSH キー

## ブラウザで認証する

{% ifversion ghae %}

{% data variables.product.product_name %} への認証は、IdP を使ってブラウザー内で行うことができます。 詳細については、「[SAML のシングル サインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」を参照してください。

{% else %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_emu_enterprise %} のメンバーである場合は、IdP を使ってブラウザーで {% data variables.product.product_name %} に対して認証します。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの[マネージド ユーザーとして認証](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %}に関するトピックを参照してください{% else %}。{% endif %} 

{% data variables.product.prodname_emu_enterprise %} のメンバーでない場合は、{% data variables.product.prodname_dotcom_the_website %} のユーザー名とパスワードを使って認証します。 また、2 要素認証と SAML シングル サインオンを使うこともできます。これは、組織と企業の所有者が必要とする場合があります。

{% else %}

{% data variables.product.product_name %} への認証は、ブラウザー内で多数の方法を使って行うことができます。

{% endif %}

- **ユーザー名とパスワードのみ**
    - {% data variables.product.product_name %} でアカウントを作成するときにパスワードを作成します。 パスワードマネージャを使用して、ランダムで一意のパスワードを生成することをお勧めします。 詳細については、「[強力なパスワードの作成](/github/authenticating-to-github/creating-a-strong-password)」を参照してください。{% ifversion fpt or ghec %}
  - 2FA を有効にしていない場合、{% data variables.product.product_name %} では、認識できないデバイス (新しいブラウザー プロファイル、Cookie が削除されたブラウザー、新しいコンピューターなど) から初めてサインインしたときに、追加の検証を求められます。

   ユーザー名とパスワードを指定すると、メールで送信される確認コードの入力を求められます。 {% data variables.product.prodname_mobile %} アプリケーションがインストールされている場合は、代わりにここで通知を受け取ります。 詳細については、「[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)」を参照してください。{% endif %}
- **2 要素認証 (2FA)** (推奨)
    - 2FA を有効にした場合は、ユーザー名とパスワードを正常に入力した後、モバイル デバイスで時間ベースのワンタイム パスワード (TOTP) アプリケーションによって生成されるか{% ifversion fpt or ghec %}、テキスト メッセージ (SMS)として送信される{% endif %}コードも指定するように求められます。 詳細については、「[2 要素認証を使用した {% data variables.product.prodname_dotcom %} へのアクセス](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)」を参照してください。
    - TOTP アプリケーション{% ifversion fpt or ghec %}またはテキスト メッセージ{% endif %}を使った認証に加えて、必要に応じて代替の方法として、{% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %} での認証か、{% endif %}WebAuthn を使ったセキュリティ キーを追加できます。 詳細については、{% ifversion fpt or ghec %}[{% data variables.product.prodname_mobile %} を使って 2 要素認証を構成する](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)に関するページと{% endif %}「[セキュリティ キーを使って 2 要素認証を設定する](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。{% ifversion ghes %}
- **外部認証**
  - サイト管理者は、ユーザー名とパスワードの代わりに外部認証を使うように {% data variables.product.product_location %} を構成することがあります。 詳細については、[外部認証方法](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)に関するトピックを参照してください。{% endif %}{% ifversion fpt or ghec %}
- **SAML シングル サインオン**
  - SAML シングル サインオンを使う組織またはエンタープライズ アカウントが所有するリソースにアクセスするには、その前に IdP による認証も必要になる場合があります。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[SAML シングル サインオンによる認証について](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}」を参照してください{% else %}。{% endif %}{% endif %}

{% endif %}

## {% data variables.product.prodname_desktop %} で認証する
お使いのブラウザを使用して {% data variables.product.prodname_desktop %} で認証できます。 詳細については、「[{% data variables.product.prodname_dotcom %} への認証](/desktop/getting-started-with-github-desktop/authenticating-to-github)」を参照してください。

## API で認証する

さまざまな方法で API を使用して認証できます。

- **個人用アクセス トークン**
    - テストなどの限られた状況では、個人アクセストークンを使用して API にアクセスできます。 個人アクセストークンを使用すると、いつでもアクセスを取り消すことができます。 詳細については、[個人アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)に関する記事を参照してください。
- **Web アプリケーション フロー**
    - 製品としての OAuth App の場合、Web アプリケーションフローを使用して認証する必要があります。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)」を参照してください。
- **GitHub アプリ**
    - 製品としての GitHub App の場合、アプリケーションのインストールに代わって認証する必要があります。 詳細については、「[{% data variables.product.prodname_github_apps %} による認証](/apps/building-github-apps/authenticating-with-github-apps/)」を参照してください。

## コマンドラインで認証する

コマンドラインから {% data variables.product.product_name %} のリポジトリにアクセスするには、HTTPS と SSH の 2 つの方法がありますが、それぞれ認証方法が異なります。 認証方法は、リポジトリのクローンを作成するときに HTTPS または SSH リモート URL を選択したかどうかに基づいて決まります。 アクセス方法の詳細については、「[リモート リポジトリについて](/github/getting-started-with-github/about-remote-repositories)」を参照してください。

### HTTPS

ファイアウォールまたはプロキシの内側からでも、HTTPS を介して {% data variables.product.product_name %} 上のすべてのリポジトリを操作できます。

{% data variables.product.prodname_cli %} で認証する場合は、個人用アクセス トークンまたは Web ブラウザーを使って認証できます。 {% data variables.product.prodname_cli %} を使用した認証の詳細については、「[`gh auth login`](https://cli.github.com/manual/gh_auth_login)」を参照してください。

{% data variables.product.prodname_cli %} なしで認証する場合は、個人用アクセス トークンで認証する必要があります。 {% data reusables.user-settings.password-authentication-deprecation %} Git を使って {% data variables.product.product_name %} で認証するたびに、[資格情報ヘルパー](/github/getting-started-with-github/caching-your-github-credentials-in-git)でキャッシュしない限り、{% data variables.product.product_name %} で認証するための資格情報を入力するように求められます。

### SSH

SSH 接続はファイアウォールとプロキシから許可されない場合がありますが、SSH 経由で {% data variables.product.product_name %} 上のすべてのリポジトリを操作できます。

{% data variables.product.prodname_cli %} で認証すると、CLI によってマシン上で SSH 公開キーが検索され、アップロード用のものを選ぶようにダイアログが表示されます。 {% data variables.product.prodname_cli %} でアップロード用の SSH 公開キーが見つからない場合は、新しい SSH 公開/秘密キーペアを生成し、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上のアカウントに公開キーをアップロードできます。 その後、個人用アクセス トークンまたは Web ブラウザーを使って認証することができます。 {% data variables.product.prodname_cli %} を使用した認証の詳細については、「[`gh auth login`](https://cli.github.com/manual/gh_auth_login)」を参照してください。

{% data variables.product.prodname_cli %} なしで認証する場合は、ローカル コンピューターで SSH 公開/秘密キーペアを生成し、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のアカウントに公開キーを追加する必要があります。 詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。 Git を使って {% data variables.product.product_name %} で認証するたびに、[キーを保存](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)していない限り、SSH キー パスフレーズを入力するように求められます。

{% ifversion fpt or ghec %}
### SAML シングル サインオンの認可

個人用アクセス トークンまたは SSH キーを使って、SAML シングル サインオンを使う組織が所有するリソースにアクセスするには、個人用トークンまたは SSH キーも認可する必要があります。 詳細については、{% data variables.product.prodname_ghe_cloud %} のドキュメントの「[SAML シングル サインオンで利用するために個人用アクセス トークンを認可する](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」または「[SAML シングル サインオンで利用するために SSH キーを認可する](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}」を参照してください{% else %}。{% endif %}{% endif %}

## {% data variables.product.company_short %} のトークンフォーマット

{% data variables.product.company_short %} は、トークンの種別を示すプレフィックスで始まるトークンを発行します。

| トークンの種類 | Prefix | 詳細情報 |
| :- | :- | :- |
| 個人用アクセス トークン | `ghp_` | 「[個人用アクセス トークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」 |
| OAuth アクセス トークン | `gho_` | 「[{% data variables.product.prodname_oauth_apps %} の承認](/developers/apps/authorizing-oauth-apps)」 |
| {% data variables.product.prodname_github_app %} のユーザからサーバーへのトークン | `ghu_` | 「[{% data variables.product.prodname_github_apps %} のユーザーの識別と認可](/developers/apps/identifying-and-authorizing-users-for-github-apps)」 |
| {% data variables.product.prodname_github_app %} のサーバーからサーバーへのトークン | `ghs_` | 「[{% data variables.product.prodname_github_apps %} による認証](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)」 |
| {% data variables.product.prodname_github_app %} のトークンのリフレッシュ | `ghr_` | 「[ユーザーからサーバーへのアクセス トークンの更新](/developers/apps/refreshing-user-to-server-access-tokens)」 |

