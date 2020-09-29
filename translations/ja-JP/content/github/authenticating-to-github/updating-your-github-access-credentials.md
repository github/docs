---
title: GitHub アクセス認証情報を更新する
intro: '{% data variables.product.product_name %} 認証情報は、パスワードだけではなく、{% data variables.product.product_name %} に伝達するのに使うアクセストークン、SSH キーおよびアプリケーション API トークンを含みます。 必要があれば、すべてのアクセス認証情報をリセットできます。'
redirect_from:
  - /articles/rolling-your-credentials/
  - /articles/how-can-i-reset-my-password/
  - /articles/updating-your-github-access-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 新しいパスワードをリクエストする

1. 新しいパスワードをリクエストするには、{% if currentVersion == "free-pro-team@latest" %}https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %} にアクセスしてください。
2. 個人 {% data variables.product.product_name %} アカウントに関連するメールアドレスを入力し、次に [**Send password reset email**] をクリックします。バックアップメールアドレスが設定されている場合、そのアドレスにメールが送られます。 ![パスワードリセットのメールリクエストダイアログ](/assets/images/help/settings/password-recovery-email-request.png)
3. パスワードをリセットするためのリンクがメールで届きます。 メールを受信してから 3 時間以内に、このリンクをクリックする必要があります。 弊社からメールが届かない場合、スパムフォルダを確認してください。
4. メールのリンクをクリックすると、新しいパスワードを入力するように求められます。 ![パスワードリカバリボックス](/assets/images/help/settings/password_recovery_page.png)

{% tip %}

今後パスワードをなくさないように、[LastPass](https://lastpass.com/)、[1Password](https://1password.com/)、[Keeper](https://keepersecurity.com/) などの安全なパスワードマネージャーの使用をおすすめします。

{% endtip %}

### 既存のパスワードを変更する

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.product_name %} への {% data variables.product.signin_link %}
{% data reusables.user_settings.access_settings %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
{% data reusables.user_settings.security %}
{%- else %}
{% data reusables.user_settings.account_settings %}
{%- endif %}
4. [Change password] の下で、古いパスワード、新しい強靭なパスワードを入力し、新しいパスワードを確認します。 強靭なパスワードを作成するための参考として、「[強靭なパスワードを作成する](/articles/creating-a-strong-password)」を参照してください。
5. [**Update password**] をクリックします。

{% tip %}

セキュリティを強化するために、パスワードの変更に加えて 2 要素認証を有効にしてください。 詳細は「[2 要素認証について](/articles/about-two-factor-authentication)」を参照してください。

{% endtip %}

### アクセストークンを更新する

アクセストークンのレビューと削除の方法については、「[許可されたインテグレーションをレビューする](/articles/reviewing-your-authorized-integrations)」を参照してください。 新しいアクセストークンを作成するには、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

### SSH キーを更新する

SSH キーのレビューおよび削除については「[SSH キーをレビューする](/articles/reviewing-your-ssh-keys)」を参照してください。 新しい SSH キーの生成および追加については、「[SSH キーを生成する](/articles/generating-an-ssh-key)」を参照してください。

### API トークンをリセットする

{% data variables.product.product_name %} に登録したアプリケーションがある場合、OAuthトークンのリセットを考えることになります。 詳しい情報については、「[認証をリセットする](/rest/reference/apps#reset-an-authorization)」エンドポイントを参照してください。

### 許可されていないアクセスを防止する

アカウントを保護し権限のないアクセスを防止するためのさらなるヒントについては、「[許可されていないアクセスを防止する](/articles/preventing-unauthorized-access)」を参照してください。
