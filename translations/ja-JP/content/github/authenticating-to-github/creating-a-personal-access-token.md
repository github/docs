---
title: 個人アクセストークンを使用する
intro: コマンドラインまたは API を使用して、パスワードの代わりに使用する個人アクセストークンを作成する必要があります。
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

個人アクセストークン（PAT）は、[GitHub API](/v3/auth/#via-oauth-and-personal-access-tokens) または[コマンドライン](#using-a-token-on-the-command-line)を使用するときに {% data variables.product.product_name %} への認証でパスワードの代わりに使用できます。

{% if currentVersion == "free-pro-team@latest" %}If you want to use a PAT to access resources owned by an organization that uses SAML SSO, you must authorize the PAT. 詳しい情報については「[SAMLシングルサインオンでの認証について](/articles/about-authentication-with-saml-single-sign-on)」及び「[SAMLシングルサインオンで利用する個人アクセストークンの認可](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### トークンの作成

{% if currentVersion == "free-pro-team@latest" %}1. まだ検証していない場合は[メールアドレスを検証](/articles/verifying-your-email-address)します。{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. [**Generate new token**] をクリックします。 ![[Generate new token] ボタン](/assets/images/help/settings/generate_new_token.png)
5. トークンにわかりやすい名前を付けます。 ![トークンの説明フィールド](/assets/images/help/settings/token_description.png)
6. このトークンに付与するスコープ、すなわち権限を選択します。 トークンを使用してコマンドラインからリポジトリにアクセスするには、[**repo**] を選択します。 ![トークンスコープの選択](/assets/images/help/settings/token_scopes.gif)
7. [**Generate token**] をクリックします。 ![[Generate token] ボタン](/assets/images/help/settings/generate_token.png)
8. {% octicon "clippy" aria-label="The copy to clipboard icon" %}をクリックしてトークンをクリップボードにコピーします。 For security reasons, after you navigate off the page, you will not be able to see the token again.{% if currentVersion == "free-pro-team@latest" %} ![Newly created token](/assets/images/help/settings/personal_access_tokens.png){% else %}
![Newly created token](/assets/images/help/settings/personal_access_tokens_ghe.png){% endif %}

   {% warning %}

   **警告:** トークンはパスワードのように扱い、秘密にしてください。 API を操作する場合は、トークンをプログラムにハードコーディングするのではなく、環境変数として使用してください。

   {% endwarning %}
{% if currentVersion == "free-pro-team@latest" %}9. SAML SSO を使用する Organization への認証にトークンを使用するには、[Organization への SAML シングルサインオンに使用できるようトークンを認証します](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)。{% endif %}

### コマンドラインでトークンを使用する

{% data reusables.command_line.providing-token-as-password %}

個人アクセストークンは HTTPS Git 操作だけにしか使用できません。 SSH リモート URL を使用するリポジトリの場合、[リモートを SSH から HTTPS に切り替える](/articles/changing-a-remote-s-url/#switching-remote-urls-from-ssh-to-https)必要があります。

ユーザ名とパスワードの入力を求められない場合、資格情報がコンピュータにキャッシュされている可能性があります。 古いパスワードをトークンに交換するよう[キーチェーンで資格情報を更新](/articles/updating-credentials-from-the-osx-keychain)できます。

### 参考リンク

- 「[GitHub への認証について](/github/authenticating-to-github/about-authentication-to-github)」
