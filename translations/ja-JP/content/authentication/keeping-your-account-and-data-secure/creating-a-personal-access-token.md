---
title: 個人用アクセス トークンの作成
intro: 'コマンド ラインまたは API を使うと、パスワードの代わりに使用する{% data variables.product.pat_generic %}を作成できます。'
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
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107750'
---
{% warning %}

**警告**: アクセス トークンは、パスワードと同様の扱いとしてください。

コマンド ラインから {% data variables.product.company_short %} にアクセスするには、{% data variables.product.pat_generic %}を作成する代わりに {% data variables.product.prodname_cli %} または [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) を使用することを検討してください。

スクリプトで{% data variables.product.pat_generic %}を使用する場合、トークンをシークレットとして格納し、{% data variables.product.prodname_actions %} を介してスクリプトを実行することを検討してください。 詳しい情報については、「[暗号化スクリプト](/actions/security-guides/encrypted-secrets)」を参照してください。{%- ifversion ghec or fpt %}また、トークンを {% data variables.product.prodname_codespaces %} シークレットとして格納し、{% data variables.product.prodname_codespaces %} でスクリプトを実行することもできます。 詳しくは、「[codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」を参照してください。{% endif %}

これらのオプションが使用できない場合は、[1Password CLI](https://developer.1password.com/docs/cli/secret-references/) などの別のサービスを使用してトークンを安全に格納することを検討してください。

{% endwarning %}

## {% data variables.product.pat_generic %}について

{% data variables.product.pat_generic_caps %}は、[GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) または[コマンド ライン](#using-a-token-on-the-command-line)を使用する場合に、{% data variables.product.product_name %} に対する認証でパスワードの代わりに使用できます。 {% data variables.product.pat_generic_caps %}は、{% data variables.product.company_short %} リソースに自動的にアクセスすることを目的としています。 Organization に代わってリソースにアクセスするため、または有効期間の長い統合を行う場合、{% data variables.product.prodname_github_app %} を使用する必要があります。 詳細については、「[About apps](/developers/apps/getting-started-with-apps/about-apps)」 (アプリについて) を参照してください。

{% ifversion pat-v2 %}

現在、{% data variables.product.company_short %} では、2 種類の{% data variables.product.pat_generic %} ({% data variables.product.pat_v2 %} と {% data variables.product.pat_v1_plural %}) がサポートされています。 {% data variables.product.company_short %} では、可能な限り、{% data variables.product.pat_v1_plural %} ではなく {% data variables.product.pat_v2 %} を使用することをお勧めします。 {% data variables.product.pat_v2_caps %} には、{% data variables.product.pat_v1_plural %} に勝るいくつかの利点があります。

- 各トークンは、1 人のユーザーまたは 1 つの Organization が所有するリソースにのみアクセスできます。
- 各トークンは、特定のリポジトリにのみアクセスできます。
- 各トークンには特定のアクセス許可が付与されます。これにより、{% data variables.product.pat_v1_plural %} に付与されるスコープよりも細かく制御できます。
- 各トークンには、有効期限が必要です。
- Organization オーナーは、Organization 内のリソースにアクセスできる {% data variables.product.pat_v2 %} の承認を要求できます。{% ifversion ghec or ghes or ghae %}
- Enterprise オーナーは、Enterprise が所有する Organization 内のリソースにアクセスできる {% data variables.product.pat_v2 %} の承認を要求できます。{% endif %}

さらに、Organization オーナーは、{% data variables.product.pat_v1 %} のアクセスを自分の Organization{% ifversion ghec or ghes or ghae %} に制限でき、Enterprise オーナーは、{% data variables.product.pat_v1 %} のアクセスを Enterprise または Enterprise が所有する Organization に制限できます{% endif %}。

{% data reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## {% data variables.product.pat_v2 %} の作成

{% note %}

**注**: {% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. まだ検証していない場合は、[メール アドレスを検証](/github/getting-started-with-github/verifying-your-email-address)します。{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
1. 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s]** の下にある **[Fine-grained トークン]** をクリックします。
1. **[新しいトークンの生成]** をクリックします。
1. 必要に応じて、 **[トークン名]** にトークンの名前を入力します。
1. **[有効期限]** で、トークンの有効期限を選びます。
1. 必要に応じて、 **[説明]** で、トークンの目的を説明するメモを追加します。
1. **[リソース所有者]** で、リソース所有者を選びます。 トークンは、選んだリソース所有者が所有するリソースにのみアクセスできます。 {% data variables.product.pat_v2 %} にオプトインしない限り、所属している Organization は表示されません。 詳しい情報については、「[Organization の{% data variables.product.pat_generic %}の設定](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)」を参照してください。{% ifversion ghec or ghae %} 選んだ Organization が SAML シングル サインオン (SSO) を要求し、アクティブな SAML セッションがまだない場合、SAML SSO を実行するように要求されることがあります。{% endif %}
1. 必要に応じて、リソース所有者が {% data variables.product.pat_v2 %} の承認を要求する Organization である場合、リソース所有者の下にあるボックスに、要求の正当な理由を入力します。
1. **[リポジトリ アクセス]** で、トークンでアクセスするリポジトリを選びます。 ニーズを満たす最小限のリポジトリ アクセスを選ぶ必要があります。 トークンには、GitHub 上のすべてのパブリック リポジトリへの読み取り専用アクセスが常に含まれています。
1. 前の手順で **[リポジトリの選択のみ]** を選んだ場合は、 **[選択されたリポジトリ]** ドロップダウンで、トークンでアクセスするリポジトリを選びます。
1. **[アクセス許可]** で、トークンに付与するアクセス許可を選びます。 指定したリソース所有者とリポジトリ アクセスに応じて、リポジトリ、Organization、アカウントのアクセス許可があります。 ニーズに必要な最小限のアクセス許可を選ぶ必要があります。 各 REST API 操作に必要なアクセス許可の詳細については、「[{% data variables.product.pat_v2 %} に必要なアクセス許可](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)」を参照してください。
1. **[トークンの生成]** をクリックします。

リソース所有者として Organization を選び、その Organization が {% data variables.product.pat_v2 %} の承認を要求する場合、Organization 管理者によって確認されるまで、トークンは `pending` としてマークされます。 トークンは、承認されるまでパブリック リソースの読み取りのみを実行できます。 Organization のオーナーである場合、要求は自動的に承認されます。 詳しい情報については、「[Organization 内の{% data variables.product.pat_generic %}の確認と取り消し](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)」を参照してください。

{% endif %}

## {% data variables.product.pat_v1 %} の作成

{% ifversion pat-v2 %}

{% note %}

**注**: Organization オーナーは、{% data variables.product.pat_v1 %} のアクセスを自分の Organization に制限できます。 {% data variables.product.pat_v1 %} を使用して、{% data variables.product.pat_v1 %} のアクセスが無効の Organization 内のリソースにアクセスしようとすると、要求は 403 応答で失敗します。 代わりに、{% data variables.product.prodname_github_app %}、{% data variables.product.prodname_oauth_app %}、または {% data variables.product.pat_v2 %} を使用する必要があります。

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**注**: {% data variables.product.pat_v1 %} は、アクセスできるすべてのリポジトリにアクセスできます。 {% data variables.product.company_short %} では、代わりに、特定のリポジトリに制限できる {% data variables.product.pat_v2 %} を使用することをお勧めします。 {% data variables.product.pat_v2_caps %} を使用すると、広範なスコープの代わりにきめ細かなアクセス許可を指定することもできます。

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. まだ検証していない場合は、[メール アドレスを検証](/github/getting-started-with-github/verifying-your-email-address)します。{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% ifversion pat-v2 %}1。 左側のサイドバーの **[{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s]** で、 **[トークン (クラシック)]** を選びます。{% else %}{% data reusables.user-settings.personal_access_tokens %}{% endif %} {% ifversion pat-v2%}1。 **[新しいトークンの生成]** を選び、 **[新しいトークン (クラシック)]** をクリックします。{% else %}{% data reusables.user-settings.generate_new_token %}{% endif %}
5. トークンにわかりやすい名前を付けます。
   ![トークンの [説明] フィールド](/assets/images/help/settings/token_description.png)
6. トークンに有効期限を設定するには、 **[有効期限]** ドロップダウン メニューを選択し、既定をクリックするか、カレンダー ピッカーを使用します。
   ![トークンの [有効期限] フィールド](/assets/images/help/settings/token_expiration.png)
7. このトークンに付与するスコープを選びます。 トークンを使用してコマンドラインからリポジトリにアクセスするには、 **[リポジトリ]** を選択します。 スコープが割り当てられていないトークンでは、パブリック情報にのみアクセスできます。 詳細については、「[Available scopes (使用可能なスコープ)](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)」を参照してください。
   {% ifversion fpt or ghes or ghec %} ![トークンのスコープの選択](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![トークンのスコープの選択](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. **[トークンの生成]** をクリックします。
   ![[トークンの生成] ボタン](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt or ghec %}
1. トークンを使用して、SAML シングル サインオンを使用する Organization が所有するリソースにアクセスするには、トークンを承認します。 詳しい情報については、{% data variables.product.prodname_ghe_cloud %} ドキュメント内の「[SAML シングル サインオンで使用するために{% data variables.product.pat_generic %}を承認する](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}」を参照してください{% else %}。{% endif %}{% endif %}

## コマンドラインでトークンを使用する

{% data reusables.command_line.providing-token-as-password %}

{% data variables.product.pat_generic_caps %}は、HTTPS Git 操作にのみ使用できます。 リポジトリで SSH リモート URL が使用されている場合は、[リモートを SSH から HTTPS に切り替える](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)必要があります。

ユーザ名とパスワードの入力を求められない場合、資格情報がコンピュータにキャッシュされている可能性があります。 [キーチェーンの資格情報を更新して](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)、古いパスワードをトークンに置き換えることができます。

すべての HTTPS Git 操作で{% data variables.product.pat_generic %}を手動で入力する代わりに、Git クライアントを使用して{% data variables.product.pat_generic %}をキャッシュできます。 Git では、有効期限が経過するまで、資格情報をメモリに一時的に格納します。 また、Git ですべての要求の前に読み取ることができるプレーンテキスト ファイルにトークンを格納することもできます。 詳細については、「[Git に {% data variables.product.prodname_dotcom %} の認証情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)」を参照してください。

## 参考資料

- 「[GitHub への認証方法について](/github/authenticating-to-github/about-authentication-to-github)」
- 「[トークンの有効期限と失効](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)」
