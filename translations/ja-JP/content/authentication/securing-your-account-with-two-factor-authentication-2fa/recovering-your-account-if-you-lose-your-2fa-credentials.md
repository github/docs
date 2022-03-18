---
title: 2 要素認証クレデンシャルをなくした際のアカウントの回復
intro: 2 要素認証の認証情報にアクセスできなくなった場合、リカバリコードまたはその他のリカバリ方法を使用して、アカウントへのアクセスを回復できます。
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recover an account with 2FA
---

{% ifversion fpt or ghec %}

{% warning %}

**警告**:

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## 2 要素認証リカバリコードを使用する

リカバリコードのうち 1 つを使用して、アカウントへのエントリを自動で再取得します。 リカバリコード は、多くの場合、パスワードマネージャまたはご使用のコンピュータのダウンロードフォルダに保存されています。 リカバリコードのデフォルトのファイル名は `github-recovery-codes.txt` です。 リカバリコードの詳しい情報については「[2 要素認証リカバリ方法を設定する](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)」を参照してください。

1. 認証を求めるためにユーザ名とパスワードを入力してください。

    {% warning %}

    **Warning**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}

{% ifversion fpt or ghec %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png)
{%- else %}
1. [2FA] ページで、[Don't have your phone?] の下にある [**Enter a two-factor recovery code**] をクリックします。

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. リカバリコードを 1 つ入力して、[**Verify**] をクリックします。

   ![リカバリコードを入力するフィールドおよび [Verify] ボタン](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## フォールバック番号による認証

プライマリ TOTP アプリケーションや電話番号へのアクセスをなくした場合でも、 フォールバック番号に送信されている 2 要素認証コードを入力すれば、アカウントへのアクセスを自動で再取得できます。
{% endif %}

## セキュリティキーによる認証

セキュリティキーを使用して 2 要素認証を設定した場合は、セキュリティキーをセカンダリ認証方式として使用すると、アカウントへのアクセスを自動で再取得できます。 詳しい情報については、「[2 要素認証を設定する](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。

{% ifversion fpt or ghec %}
## 検証済みのデバイス、SSHトークン、または個人アクセストークンを使用した認証

If you know your password for {% data variables.product.product_location %} but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process and regain access to your account.

{% note %}

**Note**: For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. {% data variables.product.company_short %} will not review additional requests submitted during this time.

{% endnote %}

2要素認証の認証情報または 2 要素認証のリカバリコードを使用して、3〜5 日間の待機期間中にいつでもアカウントへのアクセスを回復できます。

1. 認証を求めるためにユーザ名とパスワードを入力してください。

    {% warning %}

    **Warning**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link if you don't have your 2fa device or recovery codes](/assets/images/help/2fa/no-access-link.png)
1. To the right of "Locked out?", click **Try recovering your account**.

   ![Screenshot of link to try recovering your account](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. [**I understand, get started**] をクリックして、認証設定のリセットをリクエストします。

    ![Screenshot of button to start reset of authentication settings](/assets/images/help/2fa/reset-auth-settings.png)
1. Click **Send one-time password** to send a one-time password to all eligible addresses associated with your account. Only verified emails are eligible for account recovery. If you've restricted password resets to your primary and/or backup addresses, these addresses are the only addresses eligible for account recovery.

   ![Screenshot of button to send one-time password](/assets/images/help/2fa/send-one-time-password.png)
1. Under "One-time password", type the temporary password from the recovery email {% data variables.product.prodname_dotcom %} sent.

   ![Screenshot of field to type one-time password](/assets/images/help/2fa/one-time-password-field.png)
1. [**Verify email address**] をクリックします。

   ![Screenshot of button to verify email address](/assets/images/help/2fa/verify-email-address.png)
1. 別の検証要素を選択します。
    - 以前に現在のデバイスを使用してこのアカウントにログインしたことがあり、検証にそのデバイスを使用する場合は、[**Verify with this device**] をクリックします。
    - If you've previously set up an SSH key on this account and would like to use the SSH key for verification, click **SSH key**.
    - If you've previously set up a personal access token and would like to use the personal access token for verification, click **Personal access token**.

   ![Screenshot of buttons for alternative verification](/assets/images/help/2fa/alt-verifications.png)
1. A member of {% data variables.contact.github_support %} will review your request and email you within three business days. リクエストが承認されると、アカウントリカバリプロセスを完了するためのリンクが送信されます。 リクエストが拒否された場合、追加の質問がある場合のサポートへの問い合わせ方法がメールに記載されます。

{% endif %}
