---
title: 2 要素認証を設定する
intro: 複数のオプションから選択して、アカウントの 2 番目の認証方法を追加できます。
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app/
  - /articles/configuring-two-factor-authentication-via-text-message/
  - /articles/configuring-two-factor-authentication-via-fido-u2f/
  - /articles/configuring-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can configure two-factor authentication using a mobile app{% if currentVersion == "free-pro-team@latest" %} or via text message{% endif %}. また、セキュリティキーを追加することも可能です。

We strongly recommend using a time-based one-time password (TOTP) application to configure 2FA.{% if currentVersion == "free-pro-team@latest" %} TOTP applications are more reliable than SMS, especially for locations outside the United States.{% endif %} TOTP apps support the secure backup of your authentication codes in the cloud and can be restored if you lose access to your device.

{% warning %}

**警告:**
- If you're a member{% if currentVersion == "free-pro-team@latest" %}, billing manager,{% endif %} or outside collaborator to a private repository of an organization that requires two-factor authentication, you must leave the organization before you can disable 2FA on {% data variables.product.product_location %}.
- 2 要素認証を無効化すると、Organization や Organization のプライベートリポジトリのフォークへのアクセスも失います。 Organization およびフォークへのアクセスを再取得するには、2 要素認証を再有効化し、Organization オーナーに連絡します。

{% endwarning %}

### TOTP モバイルアプリを使って 2要素認証を設定する

時間ベースのワンタイムパスワード (TOTP) アプリケーションは、認証コードを自動的に生成します。このコードは、一定の時間が過ぎた後は変化します。 以下のような、クラウドベースの TOTP アプリの利用をおすすめします:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)

{% tip %}

**参考**: 複数のデバイスで TOTP により認証を設定するには、セットアップ時に、QR コード を各デバイスで同時にスキャンします。 2 要素認証がすでに有効化されており、別のデバイスを追加したい場合は、セキュリティ設定から 2 要素認証を再設定する必要があります。

{% endtip %}

1. TOTP アプリをダウンロードします。
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
5. [Two-factor authentication] のページで、[**Set up using an app**] をクリックします。
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
8. [Two-factor authentication] ページで、次のいずれかを実行します:
    - QR コードを、モバイルデバイスのアプリでスキャンする。 スキャン後、アプリは {% data variables.product.product_name %} で入力する 6 桁の数字を表示します。
    - QR コードをスキャンできない場合は、[**enter this text code**] をクリックしてコードを表示し、それをコピーして {% data variables.product.product_name %} に手入力してください。 ![[enter this code] をクリック](/assets/images/help/2fa/totp-click-enter-code.png)
9. The TOTP mobile application saves your
{% data variables.product.product_name %} account and generates a new authentication code every few seconds. {% data variables.product.product_name %} の 2 要素認証ページでコードを入力し、[**Enable**] をクリックします。
    ![[TOTP Enable] フィールド](/assets/images/help/2fa/totp-enter-code.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% if currentVersion == "free-pro-team@latest" %}

### テキストメッセージを使って 2 要素認証を設定する

TOTP モバイルアプリを使って認証できない場合は、SMS メッセージで認証できます。 フォールバックデバイスのために、別の番号を提供することも可能です。 主に使うデバイスにもリカバリコードにもアクセスできなくなった場合、バックアップの SMS 番号でアカウントにアクセスできます。

この方法を使う前に、テキストメッセージが受信できることを確認してください。 携帯電話の料金がかかる場合があります。

{% warning %}

**警告:** 2 要素認証には、SMS ではなく TOTP アプリケーションを使うことを**強くおすすめします**。 {% data variables.product.product_name %} は、SMS メッセージの送信をサポートしていない国があります。 テキストメッセージによる認証を設定する前に、SMS による認証を {% data variables.product.product_name %} がサポートしている国のリストを確認してください。 詳細は「[SMS 認証がサポートされている国](/articles/countries-where-sms-authentication-is-supported)」を参照してください。

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. [Two-factor authentication] のページで、[**Set up using SMS**] をクリックします。
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
7. 国コードを選択し、携帯電話番号を入力します。 入力した情報が正しいことを確認してから、[**Send authentication code**] をクリックします。 ![2 要素認証 SMS 画面](/assets/images/help/2fa/2fa_sms_photo.png)
8. セキュリティコードが書かれたテキストメッセージが送信されます。 そのコードを 2 要素認証ページに入力し、[**Enable**] をクリックします。 ![[2FA SMS continue] フィールド](/assets/images/help/2fa/2fa-sms-code-enable.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

### セキュリティキーを使って 2 要素認証を設定する

{% data reusables.two_fa.after-2fa-add-security-key %}

ほとんどのデバイスとブラウザでは、USB または NFC を介して物理セキュリティキーを使用できます。 一部のブラウザでは、デバイス上の指紋リーダー、顔認識、またはパスワード/ PIN をセキュリティキーとして使用できます。

Authentication with a security key is *secondary* to authentication with a TOTP application{% if currentVersion == "free-pro-team@latest" %} or a text message{% endif %}. セキュリティキーをなくした場合でも、モバイルデバイスのコードを使ってサインインできます。

1. You must have already configured 2FA via a TOTP mobile app{% if currentVersion == "free-pro-team@latest" %} or via SMS{% endif %}.
2. Ensure that you have a WebAuthn compatible security key inserted into your computer.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
5. [Security keys] の隣にある [**Add**] をクリックします。 ![セキュリティキーの追加オプション](/assets/images/help/2fa/add-security-keys-option.png)
6. [Security keys] で、[**Register new security key**] をクリックします。 ![新しいセキュリティキーを登録する](/assets/images/help/2fa/security-key-register.png)
7. セキュリティキーのニックネームを入力して、[**Add**] をクリックします。 ![セキュリティキーにニックネームを付ける](/assets/images/help/2fa/security-key-nickname.png)
8. お手持ちのセキュリティキーのドキュメンテーションに従い、セキュリティキーをアクティベートします。 ![セキュリティキーのプロンプト](/assets/images/help/2fa/security-key-prompt.png)
9.  リカバリコードをダウンロードしていて、アクセスできることを確認してください。 まだコードをダウンロードしていないか、コードのセットをもう 1 つ生成したい場合は、コードをダウンロードして、安全な場所に保存します。 アカウントにアクセスできなくなった場合、リカバリコードを使ってアカウントへのアクセスを回復できます。 詳しい情報については[2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。 ![[Download recovery codes] ボタン](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

### 参考リンク

- [2 要素認証について](/articles/about-two-factor-authentication)
- [2 要素認証のリカバリ方法の設定](/articles/configuring-two-factor-authentication-recovery-methods)
- [2 要素認証を使用して {% data variables.product.prodname_dotcom %} にアクセスする](/articles/accessing-github-using-two-factor-authentication)
- [2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)
