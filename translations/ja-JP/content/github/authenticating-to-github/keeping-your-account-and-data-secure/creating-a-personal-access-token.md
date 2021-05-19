---
title: 個人アクセストークンを使用する
intro: コマンドラインまたは API を使用して、パスワードの代わりに使用する個人アクセストークンを作成する必要があります。
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
個人アクセストークン（PAT）は、[GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) または[コマンドライン](#using-a-token-on-the-command-line)を使用するときに {% data variables.product.product_name %} への認証でパスワードの代わりに使用できます。

{% if currentVersion == "free-pro-team@latest" %}PAT を使用して、SAML SSO を使用する Organization が所有するリソースにアクセスする場合は、PAT を認証する必要があります。 詳しい情報については「[SAMLシングルサインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」及び「[SAMLシングルサインオンで利用する個人アクセストークンの認可](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### トークンの作成

{% if currentVersion == "free-pro-team@latest" %}1. まだ検証していない場合は[メールアドレスを検証](/github/getting-started-with-github/verifying-your-email-address)します。{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. [**Generate new token**] をクリックします。 ![[Generate new token] ボタン](/assets/images/help/settings/generate_new_token.png)
5. トークンにわかりやすい名前を付けます。 ![トークンの説明フィールド](/assets/images/help/settings/token_description.png)
6. このトークンに付与するスコープ、すなわち権限を選択します。 トークンを使用してコマンドラインからリポジトリにアクセスするには、[**repo**] を選択します。
   {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
   ![トークンスコープの選択](/assets/images/help/settings/token_scopes.gif)
   {% elsif currentVersion == "github-ae@latest" %}
   ![トークンスコープの選択](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
7. [**Generate token**] をクリックします。 ![[Generate token] ボタン](/assets/images/help/settings/generate_token.png)
8. {% octicon "clippy" aria-label="The copy to clipboard icon" %} を使用して、トークンをクリップボードにコピーします。 セキュリティ上の理由から、ページから移動した後は、トークンを再度表示することはできません。
   {% if currentVersion == "free-pro-team@latest" %}
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **警告:** トークンはパスワードのように扱い、秘密にしてください。 API を操作する場合は、トークンをプログラムにハードコーディングするのではなく、環境変数として使用してください。

   {% endwarning %}

{% if currentVersion == "free-pro-team@latest" %}9. SAML SSO を使用する Organization への認証にトークンを使用するには、[Organization への SAML シングルサインオンに使用できるようトークンを認証します](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)。{% endif %}

### コマンドラインでトークンを使用する

{% data reusables.command_line.providing-token-as-password %}

個人アクセストークンは HTTPS Git 操作だけにしか使用できません。 SSH リモート URL を使用するリポジトリの場合、[リモートを SSH から HTTPS に切り替える](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)必要があります。

ユーザ名とパスワードの入力を求められない場合、資格情報がコンピュータにキャッシュされている可能性があります。 古いパスワードをトークンに交換するよう[キーチェーンで資格情報を更新](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)できます。

### 参考リンク

- 「[GitHub への認証について](/github/authenticating-to-github/about-authentication-to-github)」
