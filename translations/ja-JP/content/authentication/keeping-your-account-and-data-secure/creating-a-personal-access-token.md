---
title: 個人アクセストークンを使用する
intro: You can create a personal access token to use in place of a password with the command line or with the API.
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
---

{% note %}

**ノート:**

- If you use {% data variables.product.prodname_cli %} to authenticate to {% data variables.product.product_name %} on the command line, you can skip generating a personal access token and authenticate via the web browser instead. For more information about authenticating with {% data variables.product.prodname_cli %}, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).
-  [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) is a secure, cross-platform alternative to using personal access tokens (PATs) and eliminates the need to manage PAT scope and expiration. For installation instructions, see [Download and install](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) in the GitCredentialManager/git-credential-manager repository.

{% endnote %}

個人アクセストークン（PAT）は、[GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) または[コマンドライン](#using-a-token-on-the-command-line)を使用するときに {% data variables.product.product_name %} への認証でパスワードの代わりに使用できます。

{% ifversion fpt or ghec %}PAT を使用して、SAML SSO を使用する Organization が所有するリソースにアクセスする場合は、PAT を認証する必要があります。 For more information, see "[About authentication with SAML single sign-on](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" and "[Authorizing a personal access token for use with SAML single sign-on](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

A token with no assigned scopes can only access public information. トークンを使用してコマンドラインからリポジトリにアクセスするには、[`repo`] を選択します。 For more information, see "[Available scopes](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)".

## トークンの作成

{% ifversion fpt or ghec %}1. まだ検証していない場合は[メールアドレスを検証](/github/getting-started-with-github/verifying-your-email-address)します。{% endif %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
{% data reusables.user-settings.generate_new_token %}
5. トークンにわかりやすい名前を付けます。 ![Token description field](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae or ghec %}
6. To give your token an expiration, select the **Expiration** drop-down menu, then click a default or use the calendar picker. ![Token expiration field](/assets/images/help/settings/token_expiration.png){% endif %}
7. このトークンに付与するスコープ、すなわち権限を選択します。 トークンを使用してコマンドラインからリポジトリにアクセスするには、[**repo**] を選択します。
   {% ifversion fpt or ghes or ghec %}
   ![トークンスコープの選択](/assets/images/help/settings/token_scopes.gif)
   {% elsif ghae %}
   ![トークンスコープの選択](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
8. [**Generate token**] をクリックします。 ![[Generate token] ボタン](/assets/images/help/settings/generate_token.png)
   {% ifversion fpt or ghec %}
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif ghes or ghae %}
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![新しく作成されたトークン](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **警告:** トークンはパスワードのように扱い、秘密にしてください。 API を操作する場合は、トークンをプログラムにハードコーディングするのではなく、環境変数として使用してください。

   {% endwarning %}

{% ifversion fpt or ghec %}9. To use your token to authenticate to an organization that uses SAML single sign-on, authorize the token. For more information, see "[Authorizing a personal access token for use with SAML single sign-on](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}

## コマンドラインでトークンを使用する

{% data reusables.command_line.providing-token-as-password %}

個人アクセストークンは HTTPS Git 操作だけにしか使用できません。 SSH リモート URL を使用するリポジトリの場合、[リモートを SSH から HTTPS に切り替える](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)必要があります。

ユーザ名とパスワードの入力を求められない場合、資格情報がコンピュータにキャッシュされている可能性があります。 古いパスワードをトークンに交換するよう[キーチェーンで資格情報を更新](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)できます。

Instead of manually entering your PAT for every HTTPS Git operation, you can cache your PAT with a Git client. Git will temporarily store your credentials in memory until an expiry interval has passed. You can also store the token in a plain text file that Git can read before every request. 詳細は「[Git に {% data variables.product.prodname_dotcom %} の認証情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)」を参照してください。

## 参考リンク

- "[About authentication to GitHub](/github/authenticating-to-github/about-authentication-to-github)"{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- "[Token expiration and revocation](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"{% endif %}
