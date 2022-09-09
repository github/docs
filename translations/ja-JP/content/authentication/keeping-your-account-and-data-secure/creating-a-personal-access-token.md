---
title: 個人用アクセス トークンの作成
intro: コマンドラインまたは API を使うと、パスワードの代わりに使用する個人用アクセス トークンを作成できます。
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a PAT
ms.openlocfilehash: 437e06ba2fdf82252702106600ac6da73ee4c792
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064427'
---
{% note %}

**注:**

- {% data variables.product.prodname_cli %} を使用してコマンド ラインで {% data variables.product.product_name %} に対して認証を行う場合は、個人用アクセス トークンの生成をスキップして、代わりに Web ブラウザー経由で認証できます。 {% data variables.product.prodname_cli %} を使用した認証の詳細については、「[`gh auth login`](https://cli.github.com/manual/gh_auth_login)」を参照してください。
-  [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) は、個人用アクセス トークン (PAT) の代わりに使用できる、セキュリティで保護されたクロスプラットフォームのツールであり、PAT スコープと有効期限を管理する必要がなくなります。 詳細については、GitCredentialManager/git-credential-manager リポジトリの「[Download and install (ダウンロードとインストール)](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install)」を参照してください。

{% endnote %}

個人用アクセス トークン (PAT) は、[GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) または[コマンド ライン](#using-a-token-on-the-command-line)を使用する場合に、{% data variables.product.product_name %} に対する認証でパスワードの代わりに使用できます。

{% ifversion fpt or ghec %}PAT を使用して、SAML SSO を使用する Organization が所有するリソースにアクセスする場合は、PAT を認証する必要があります。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} のドキュメントの{% else %}{% endif %}「[SAML のシングル サインオンでの認証について](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)」および「[SAML シングル サインオンで利用するために個人アクセス トークンを認可する](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

スコープが割り当てられていないトークンでは、パブリック情報にのみアクセスできます。 トークンを使用してコマンドラインからリポジトリにアクセスするには、[`repo`] を選択します。 詳細については、「[Available scopes (使用可能なスコープ)](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)」を参照してください。

## トークンを作成する

{% ifversion fpt or ghec %}1. まだ検証していない場合は、[電子メール アドレスを検証](/github/getting-started-with-github/verifying-your-email-address)します。{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
5. トークンにわかりやすい名前を付けます。
   ![トークン記述フィールド](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae or ghec %}
6. トークンに有効期限を設定するには、 **[有効期限]** ドロップダウン メニューを選択し、既定をクリックするか、カレンダー ピッカーを使用します。
   ![トークンの有効期限フィールド](/assets/images/help/settings/token_expiration.png){% endif %}
7. このトークンに付与するスコープ、すなわち権限を選択します。 トークンを使用してコマンドラインからリポジトリにアクセスするには、 **[リポジトリ]** を選択します。
   {% ifversion fpt or ghes or ghec %} ![トークンのスコープの選択](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![トークンのスコープの選択](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. **[トークンの生成]** をクリックします。
   ![[Generate token]\(トークンの生成\) ボタン](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png) {% endif %} {% warning %}

   **警告:** トークンはパスワードと同様に取り扱い、秘密にしてください。 API を操作する場合は、トークンをプログラムにハードコーディングするのではなく、環境変数として使用してください。 

   {% endwarning %}

{% ifversion fpt or ghec %}9. SAML シングル サインオンを使用する Organization に対してトークンを使用して認証を行うには、トークンを認可します。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} のドキュメントの{% else %}{% endif %}「[SAML シングル サインオンで利用するために個人アクセス トークンを認可する](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

## コマンドラインでトークンを使用する

{% data reusables.command_line.providing-token-as-password %}

個人アクセストークンは HTTPS Git 操作だけにしか使用できません。 リポジトリで SSH リモート URL が使用されている場合は、[リモートを SSH から HTTPS に切り替える](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)必要があります。

ユーザ名とパスワードの入力を求められない場合、資格情報がコンピュータにキャッシュされている可能性があります。 [キーチェーンの資格情報を更新して](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)、古いパスワードをトークンに置き換えることができます。

HTTPS での Git 操作ごとに PAT を手動で入力する代わりに、Git クライアントを使用して PAT をキャッシュできます。 Git では、有効期限が経過するまで、資格情報をメモリに一時的に格納します。 また、Git ですべての要求の前に読み取ることができるプレーンテキスト ファイルにトークンを格納することもできます。 詳細については、「[Git に {% data variables.product.prodname_dotcom %} の認証情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)」を参照してください。

## 参考資料

- 「[About authentication to GitHub (GitHub に対する認証について)](/github/authenticating-to-github/about-authentication-to-github)」{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- 「[Token expiration and revocation (トークンの有効期限と取り消し)](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)」{% endif %}
