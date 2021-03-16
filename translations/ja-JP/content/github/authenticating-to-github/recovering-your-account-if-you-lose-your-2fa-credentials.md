---
title: 2 要素認証クレデンシャルをなくした際のアカウントの回復
intro: '2 要素認証の認証情報にアクセスできなくなった場合、リカバリコードまたはその他のリカバリ方法を使用して、アカウントへのアクセスを回復できます。'
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials/
  - /articles/authenticating-with-an-account-recovery-token/
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**警告**: {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

### 2 要素認証リカバリコードを使用する

リカバリコードのうち 1 つを使用して、アカウントへのエントリを自動で再取得します。 リカバリコード は、多くの場合、パスワードマネージャまたはご使用のコンピュータのダウンロードフォルダに保存されています。 リカバリコードのデフォルトのファイル名は `github-recovery-codes.txt` です。 リカバリコードの詳しい情報については「[2 要素認証リカバリ方法を設定する](/articles/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)」を参照してください。

{% data reusables.two_fa.username-password %}{% if currentVersion == "free-pro-team@latest" %}
2. [Having Problems?] の下で、[**Enter a two-factor recovery code**] をクリックします。 ![Link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png){% else %}
2. [2FA] ページで、[Don't have your phone?] の下にある [**Enter a two-factor recovery code**] をクリックします。 ![Link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
3. リカバリコードを 1 つ入力して、[**Verify**] をクリックします。 ![リカバリコードを入力するフィールドおよび [Verify] ボタン](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% if currentVersion == "free-pro-team@latest" %}
### フォールバック番号による認証

プライマリ TOTP アプリケーションや電話番号へのアクセスをなくした場合でも、 フォールバック番号に送信されている 2 要素認証コードを入力すれば、アカウントへのアクセスを自動で再取得できます。
{% endif %}

### セキュリティキーによる認証

セキュリティキーを使用して 2 要素認証を設定した場合は、セキュリティキーをセカンダリ認証方式として使用すると、アカウントへのアクセスを自動で再取得できます。 詳しい情報については、「[2 要素認証を設定する](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
### 検証済みのデバイス、SSHトークン、または個人アクセストークンを使用した認証
2 要素認証の認証情報にアクセスできなくなり、2要素認証リカバリコードを持っていない場合は、検証プロセスを開始してアカウントへのアクセスを回復するために、認証済みメールアドレスにワンタイムパスワードを送信できます。

{% note %}

**注釈**: セキュリティ上の理由から、ワンタイムパスワードで認証してアカウントへのアクセスを回復するには、3〜5 営業日かかる場合があります。 この間に送信された追加のリクエストはレビューされません。

{% endnote %}

2要素認証の認証情報または 2 要素認証のリカバリコードを使用して、3〜5 日間の待機期間中にいつでもアカウントへのアクセスを回復できます。

{% data reusables.two_fa.username-password %}
2. [Having Problems?] の下で、[**Can't access your two factor device or valid recovery codes?**] をクリックします。 ![2fa デバイスまたはリカバリコードがない場合のリンク](/assets/images/help/2fa/no-access-link.png)
3. [**I understand, get started**] をクリックして、認証設定のリセットをリクエストします。 ![認証設定のリセットボタン](/assets/images/help/2fa/reset-auth-settings.png)
4. [**Send one-time password**] をクリックして、アカウントに関連付けられているすべてのメールアドレスにワンタイムパスワードを送信します。 ![ワンタイムパスワードの送信ボタン](/assets/images/help/2fa/send-one-time-password.png)
5. [One-time password] の下で、送信されたリカバリメール{% data variables.product.prodname_dotcom %}の一時パスワードを入力します。 ![ワンタイムパスワードフィールド](/assets/images/help/2fa/one-time-password-field.png)
6. [**Verify email address**] をクリックします。
7. 別の検証要素を選択します。
    - 以前に現在のデバイスを使用してこのアカウントにログインしたことがあり、検証にそのデバイスを使用する場合は、[**Verify this device**] をクリックします。
    - 以前にこのアカウントで SSH キーを設定しており、検証にその SSH キーを使用する場合は、[** SSH key**] をクリックします。
    - 以前に個人アクセストークンを設定しており、検証にその個人アクセストークンを使用する場合は、[**Personal access token**] をクリックします。 ![代替検証ボタン](/assets/images/help/2fa/alt-verifications.png)
8. {% data variables.contact.github_support %}のメンバーがリクエストをレビューし、3〜5 営業日以内にメールでお知らせします。 リクエストが承認されると、アカウントリカバリプロセスを完了するためのリンクが送信されます。 リクエストが拒否された場合、追加の質問がある場合のサポートへの問い合わせ方法がメールに記載されます。

### アカウントリカバリトークンによる認証

{% data variables.product.product_name %} アカウントの 2 要素認証方式へのアクセスをなくした場合でも、アカウントリカバリトークンをパートナーリカバリプロバイダから再取得して、{% data variables.product.prodname_dotcom %} Support にレビューを依頼することができます。

2 要素認証方式やリカバリコードへのアクセスがない場合でも、Recovery Accounts Elsewhere を使用して Facebook にアカウントリカバリトークンを格納してあれば、トークンを使用してアカウントへのアクセスを再取得できる可能性があります。

アカウントへのアクセスを回復できない場合は、ワンタイムパスワードを生成してアクセスを回復します。 詳しい情報については、「[検証済みのデバイス、SSHトークン、または個人アクセストークンを使用した認証](#authenticating-with-a-verified-device-ssh-token-or-personal-access-token)」を参照してください。

{% warning %}

**警告:**
- アカウントリカバリトークンを再取得する前に、[2 要素認証コード](/articles/accessing-github-using-two-factor-authentication)か 2 要素認証リカバリコードを使用してアカウントへのアクセスの再取得を試行してください。 詳しい情報については[2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。

{% endwarning %}

1. Facebook で、[セキュリティ設定](https://www.facebook.com/settings?tab=security)に移動し、[**Recovery Accounts Elsewhere**] をクリックします。 ![Facebook のセキュリティ設定ページと Recovery Accounts Elsewhere リンク](/assets/images/help/settings/security-facebook-security-settings-page.png)
2. {% data variables.product.product_name %}アカウントに関連付けられているリカバリトークンをクリックします。 ![Facebook に格納されているリカバリトークンのリスト](/assets/images/help/settings/security-github-rae-token-on-facebook.png)
3. アカウントリカバリトークンを引き換えるため、[**Recover This Account**] をクリックします。 新しいウィンドウが開き、{% data variables.product.product_name %}に戻ります。 ![リカバリトークンについての情報を表示するモーダルボックスおよび [Recover This Account] ボタン](/assets/images/help/settings/security-recover-account-facebook.png)
4. お問い合わせ
{% data variables.contact.contact_support %} に連絡して、アカウントリカバリトークンはレビューの準備ができていることを知らせます。
{% endif %}

### 参考リンク

- [2 要素認証について](/articles/about-two-factor-authentication)
- [2 要素認証の設定](/articles/configuring-two-factor-authentication)
- [2 要素認証のリカバリ方法の設定](/articles/configuring-two-factor-authentication-recovery-methods)
- [2 要素認証を使用して {% data variables.product.prodname_dotcom %} にアクセスする](/articles/accessing-github-using-two-factor-authentication)
