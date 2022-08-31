---
title: 2 要素認証を設定する
intro: 複数のオプションから選択して、アカウントの 2 番目の認証方法を追加できます。
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA
---

モバイルアプリまたは{% ifversion fpt or ghec %}テキストメッセージ{% endif %}を使って、2 要素認証を設定できます。 また、セキュリティキーを追加することも可能です。

2 要素認証の設定には、時間ベースのワンタイムパスワード (TOTP) アプリケーションを使うことを強くおすすめします。{% ifversion fpt or ghec %}TOTP アプリケーションは、特に米国外において、SMS より信頼性があります。{% endif %}TOTP アプリは、クラウド内にある認証コードのセキュアなバックアップをサポートしており、デバイスにアクセスできなくなった場合に回復できます。

{% warning %}

**警告:**
- 2 要素認証が必要なメンバー{% ifversion fpt or ghec %}、支払いマネージャー、{% endif %}または Organization のプライベートリポジトリへの外部コラボレーターは、2 要素認証を無効化する前に {% data variables.product.product_location %} で Organization から離脱する必要があります。
- 2 要素認証を無効化すると、Organization や Organization のプライベートリポジトリのフォークへのアクセスも失います。 Organization およびフォークへのアクセスを再取得するには、2 要素認証を再有効化し、Organization オーナーに連絡します。

{% endwarning %}

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you cannot configure 2FA for your {% data variables.product.prodname_managed_user %} account unless you're signed in as the setup user. For users other than the setup user, an administrator must configure 2FA on your identity provider (IdP).

{% endif %}

## TOTP モバイルアプリを使って 2要素認証を設定する

時間ベースのワンタイムパスワード (TOTP) アプリケーションは、認証コードを自動的に生成します。このコードは、一定の時間が過ぎた後は変化します。 以下のような、クラウドベースの TOTP アプリの利用をおすすめします:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**参考**: 複数のデバイスで TOTP により認証を設定するには、セットアップ時に、QR コード を各デバイスで同時にスキャンします。 2 要素認証がすでに有効化されており、別のデバイスを追加したい場合は、セキュリティ設定から 2 要素認証を再設定する必要があります。

{% endtip %}

1. TOTP アプリをダウンロードします。
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
{%- ifversion fpt or ghec or ghes %}
5. Under "Two-factor authentication", select **Set up using an app** and click **Continue**.
6. Under "Authentication verification", do one of the following:
    - QR コードを、モバイルデバイスのアプリでスキャンする。 スキャン後、アプリは {% data variables.product.product_name %} で入力する 6 桁の数字を表示します。
    - If you can't scan the QR code, click **enter this text code** to see a code that you can manually enter in your TOTP app instead. ![[enter this code] をクリック](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. The TOTP mobile application saves your account on {% data variables.product.product_location %} and generates a new authentication code every few seconds. On {% data variables.product.product_name %}, type the code into the field under "Enter the six-digit code from the application". If your recovery codes are not automatically displayed, click **Continue**. ![TOTP enter code field](/assets/images/help/2fa/2fa_wizard_app_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{%- else %}
5. [Two-factor authentication] のページで、[**Set up using an app**] をクリックします。
6. リカバリコードを安全な場所に保存します。 リカバリコードは、アカウントにアクセスできなくなった場合に、再びアクセスするために役立ちます。
    - リカバリコードをデバイスに保存するには、[**Download**] をクリックします。
    - リカバリコードのハードコピーを保存するには、[**Print**] をクリックします。
    - パスワードマネージャーに保存するためにリカバリコードをコピーするには [**Copy**] をクリックします。 ![コードのダウンロード、印刷、コピーのオプションがある、リカバリコードのリスト](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)
7. 2要素のリカバリコードを保存したら、**Next**をクリックします。
8. [Two-factor authentication] ページで、次のいずれかを実行します:
    - QR コードを、モバイルデバイスのアプリでスキャンする。 スキャン後、アプリは {% data variables.product.product_name %} で入力する 6 桁の数字を表示します。
    - QR コードをスキャンできない場合は、[**enter this text code**] をクリックしてコードを表示し、それをコピーして {% data variables.product.product_name %} に手入力してください。 ![[enter this code] をクリック](/assets/images/help/2fa/totp-click-enter-code.png)
9. The TOTP mobile application saves your account on {% data variables.product.product_location %} and generates a new authentication code every few seconds. {% data variables.product.product_name %} の 2 要素認証ページでコードを入力し、[**Enable**] をクリックします。 ![[TOTP Enable] フィールド](/assets/images/help/2fa/totp-enter-code.png)
{%- endif %}
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## テキストメッセージを使って 2 要素認証を設定する

TOTP モバイルアプリを使って認証できない場合は、SMS メッセージで認証できます。 フォールバックデバイスのために、別の番号を提供することも可能です。 主に使うデバイスにもリカバリコードにもアクセスできなくなった場合、バックアップの SMS 番号でアカウントにアクセスできます。

この方法を使う前に、テキストメッセージが受信できることを確認してください。 携帯電話の料金がかかる場合があります。

{% warning %}

**警告:** 2 要素認証には、SMS ではなく TOTP アプリケーションを使うことを**強くおすすめします**。 {% data variables.product.product_name %} は、SMS メッセージの送信をサポートしていない国があります。 テキストメッセージによる認証を設定する前に、SMS による認証を {% data variables.product.product_name %} がサポートしている国のリストを確認してください。 詳細は「[SMS 認証がサポートされている国](/articles/countries-where-sms-authentication-is-supported)」を参照してください。

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. Under "Two-factor authentication", select **Set up using SMS** and click **Continue**.
5. Under "Authentication verification", select your country code and type your mobile phone number, including the area code. 入力した情報が正しいことを確認してから、[**Send authentication code**] をクリックします。

  ![2 要素認証 SMS 画面](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. セキュリティコードが書かれたテキストメッセージが送信されます。 On {% data variables.product.product_name %}, type the code into the field under "Enter the six-digit code sent to your phone" and click **Continue**.

  ![[2FA SMS continue] フィールド](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## セキュリティキーを使って 2 要素認証を設定する

{% data reusables.two_fa.after-2fa-add-security-key %}

ほとんどのデバイスとブラウザでは、USB または NFC を介して物理セキュリティキーを使用できます。 一部のブラウザでは、デバイス上の指紋リーダー、顔認識、またはパスワード/ PIN をセキュリティキーとして使用できます。

セキュリティキーによる認証は、TOTP アプリケーション{% ifversion fpt or ghec %}またはテキストメッセージ{% endif %}による認証の*二次的な*方法です。 セキュリティキーをなくした場合でも、モバイルデバイスのコードを使ってサインインできます。

1. TOTP モバイルアプリ{% ifversion fpt or ghec %}または SMS{% endif %} 経由で、あらかじめ 2 要素認証を設定しておく必要があります。
2. コンピュータに WebAuthn 準拠のセキュリティキーが挿入されていることを確認してください。
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
5. [Security keys] の隣にある [**Add**] をクリックします。 ![セキュリティキーの追加オプション](/assets/images/help/2fa/add-security-keys-option.png)
6. [Security keys] で、[**Register new security key**] をクリックします。 ![新しいセキュリティキーを登録する](/assets/images/help/2fa/security-key-register.png)
7. セキュリティキーのニックネームを入力して、[**Add**] をクリックします。 ![セキュリティキーにニックネームを付ける](/assets/images/help/2fa/security-key-nickname.png)
8. お手持ちのセキュリティキーのドキュメンテーションに従い、セキュリティキーをアクティベートします。 ![セキュリティキーのプロンプト](/assets/images/help/2fa/security-key-prompt.png)
9.  リカバリコードをダウンロードしていて、アクセスできることを確認してください。 まだコードをダウンロードしていないか、コードのセットをもう 1 つ生成したい場合は、コードをダウンロードして、安全な場所に保存します。 アカウントにアクセスできなくなった場合、リカバリコードを使ってアカウントへのアクセスを回復できます。 詳しい情報については[2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。 ![[Download recovery codes] ボタン](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configuring two-factor authentication using {% data variables.product.prodname_mobile %}

You can use {% data variables.product.prodname_mobile %} for 2FA when signing into your {% data variables.product.prodname_dotcom %} account in a web browser. 2FA with {% data variables.product.prodname_mobile %} does not rely on TOTP, and instead uses public-key cryptography to secure your account.

Once you have configured a TOTP application, or SMS, you can also use {% data variables.product.prodname_mobile %} to authenticate. If, in the future, you no longer have access to {% data variables.product.prodname_mobile %}, you will still be able to use security keys or TOTP applications to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
2. Install [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Sign in to your {% data variables.product.product_name %} account from {% data variables.product.prodname_mobile %}.

After signing in, you can now use your device for 2FA.
{% endif %}

## 参考リンク

- [2 要素認証について](/articles/about-two-factor-authentication)
- [2 要素認証のリカバリ方法の設定](/articles/configuring-two-factor-authentication-recovery-methods)
- [2 要素認証を使用して {% data variables.product.prodname_dotcom %} にアクセスする](/articles/accessing-github-using-two-factor-authentication)
- [2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)
