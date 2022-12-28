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
ms.openlocfilehash: 2a038134260ba9a6a7a0307bc3261157968ec1ea
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179958'
---
モバイル アプリ{% ifversion fpt or ghec %}またはテキスト メッセージ{% endif %}を使って、2 要素認証を構成することができます。 また、セキュリティキーを追加することも可能です。

2 要素認証の構成には、時間ベースのワンタイム パスワード (TOTP) アプリケーションを使うことを強くお勧めします。{% ifversion fpt or ghec %}TOTP アプリケーションは、特に米国外の場所で、SMS よりも高い信頼性があります。{% endif %}TOTP アプリは、クラウド内にある認証コードのセキュア バックアップをサポートしており、デバイスにアクセスできなくなった場合に復元することができます。

{% warning %}

**警告:**
- 2 要素認証が必要な Organization のプライベート リポジトリに対してメンバー{% ifversion fpt or ghec %}、支払いマネージャー、{% endif %}または外部コラボレーターである場合、{% data variables.location.product_location %} 上で 2 要素認証を無効にする前に Organization から離脱する必要があります。
- 2 要素認証を無効化すると、Organization や Organization のプライベートリポジトリのフォークへのアクセスも失います。 Organization およびフォークへのアクセスを再取得するには、2 要素認証を再有効化し、Organization オーナーに連絡します。

{% endwarning %}

{% ifversion fpt or ghec %}

{% data variables.enterprise.prodname_emu_enterprise %} のメンバーである場合、セットアップ ユーザーとしてサインインした場合を除き、あなたの {% data variables.enterprise.prodname_managed_user %} アカウントに 2 要素認証を構成することはできません。 セットアップ ユーザー以外のユーザーの場合、管理者は ID プロバイダー (IdP) 上で 2 要素認証を構成する必要があります。

{% endif %}

## TOTP モバイルアプリを使って 2要素認証を設定する

時間ベースのワンタイムパスワード (TOTP) アプリケーションは、認証コードを自動的に生成します。このコードは、一定の時間が過ぎた後は変化します。 以下のような、クラウドベースの TOTP アプリの利用をおすすめします:
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**ヒント**: 複数のデバイスで TOTP による認証を構成する場合は、設定時に各デバイスを使って同時に QR コードをスキャンします。 2 要素認証がすでに有効化されており、別のデバイスを追加したい場合は、セキュリティ設定から 2 要素認証を再設定する必要があります。

{% endtip %}

1. TOTP アプリをダウンロードします。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes > 3.7 %}
5. [認証アプリのセットアップ] で、次のいずれかの操作を行います。
    - QR コードを、モバイルデバイスのアプリでスキャンする。 スキャン後、アプリは {% data variables.product.product_name %} で入力する 6 桁の数字を表示します。
    - QR コードをスキャンできない場合は、 **[enter this text code]\(このテキスト コードを入力する\)** をクリックして、代わりに TOTP アプリに手動で入力できるコードを表示します。
    ![このコードの入力をクリックする](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. TOTP モバイル アプリケーションによって {% data variables.location.product_location %} にアカウントが保存され、数秒ごとに新しい認証コードが生成されます。 {% data variables.product.product_name %} 上で、[Enter the six-digit code from the application]\(アプリケーションから 6 桁のコードを入力する\) の下にあるフィールドにこのコードを入力します。 
![TOTP のコードの入力フィールド](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- else %}
5. [Two-factor authentication]\(2 要素認証\) の下にある **[Set up using an app]\(アプリを使って設定する\)** を選び、 **[Continue]\(続行\)** をクリックします。
6. [Authentication verification]\(認証の確認\) で、次のいずれかを実行します。
    - QR コードを、モバイルデバイスのアプリでスキャンする。 スキャン後、アプリは {% data variables.product.product_name %} で入力する 6 桁の数字を表示します。
    - QR コードをスキャンできない場合は、 **[enter this text code]\(このテキスト コードを入力する\)** をクリックして、代わりに TOTP アプリに手動で入力できるコードを表示します。
    ![このコードの入力をクリックする](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. TOTP モバイル アプリケーションによって {% data variables.location.product_location %} にアカウントが保存され、数秒ごとに新しい認証コードが生成されます。 {% data variables.product.product_name %} 上で、[Enter the six-digit code from the application]\(アプリケーションから 6 桁のコードを入力する\) の下にあるフィールドにこのコードを入力します。
![TOTP のコードの入力フィールド](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- endif %} {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## テキストメッセージを使って 2 要素認証を設定する

TOTP モバイルアプリを使って認証できない場合は、SMS メッセージで認証できます。 フォールバックデバイスのために、別の番号を提供することも可能です。 主に使うデバイスにもリカバリコードにもアクセスできなくなった場合、バックアップの SMS 番号でアカウントにアクセスできます。

この方法を使う前に、テキストメッセージが受信できることを確認してください。 携帯電話の料金がかかる場合があります。

{% warning %}

**警告:** 2 要素認証には、SMS ではなく TOTP アプリケーションを使うことを **強くお勧めします**。 {% data variables.product.product_name %} は、SMS メッセージの送信をサポートしていない国があります。 テキストメッセージによる認証を設定する前に、SMS による認証を {% data variables.product.product_name %} がサポートしている国のリストを確認してください。 詳細については、「[SMS 認証がサポートされている国](/articles/countries-where-sms-authentication-is-supported)」を参照してください。

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. [認証アプリのセットアップ] の下にある **[SMS 認証]** を選びます

  ![2 要素認証の SMS 代替オプション](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. [SMS 認証の設定] で国番号を選び、市外局番も含めて携帯電話番号を入力します。 情報が正しければ、 **[Send authentication code]\(認証コードの送信\)** をクリックします。

  ![2 要素認証 SMS 画面](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. セキュリティコードが書かれたテキストメッセージが送信されます。 {% data variables.product.product_name %} の [Enter the six-digit code sent to your phone]\(電話に送信された 6 桁のコードを入力してください\) の下にあるフィールドにコードを入力し、 **[Continue]\(続行\)** をクリックします。

  ![2 要素認証の SMS の [続ける] フィールド](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## セキュリティキーを使って 2 要素認証を設定する

{% data reusables.two_fa.after-2fa-add-security-key %}

ほとんどのデバイスとブラウザでは、USB または NFC を介して物理セキュリティキーを使用できます。 一部のブラウザでは、デバイス上の指紋リーダー、顔認識、またはパスワード/ PIN をセキュリティキーとして使用できます。

セキュリティ キーを使用した認証は、TOTP アプリケーション{% ifversion fpt or ghec %} またはテキスト メッセージ {% endif %} を使用した認証の *セカンダリ* です。 セキュリティキーをなくした場合でも、モバイルデバイスのコードを使ってサインインできます。

1. TOTP モバイル アプリ{% ifversion fpt or ghec %}または SMS {% endif %}を介して、あらかじめ 2 要素認証を構成しておく必要があります。
2. コンピュータに WebAuthn 準拠のセキュリティキーが挿入されていることを確認してください。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. [Security keys]\(セキュリティ キー\) の横にある **[Add]\(追加\)** をクリックします。
  ![セキュリティ キーの追加オプション](/assets/images/help/2fa/add-security-keys-option.png)
6. [Security keys]\(セキュリティ キー\) の下にある **[Register new security key]\(新しいセキュリティ キーの登録\)** をクリックします。
  ![新しいセキュリティ キーの登録](/assets/images/help/2fa/security-key-register.png)
7. セキュリティ キーのニックネームを入力して、 **[Add]\(追加\)** をクリックします。
  ![セキュリティ キーにニックネームを付ける](/assets/images/help/2fa/security-key-nickname.png)
8. お手持ちのセキュリティキーのドキュメンテーションに従い、セキュリティキーをアクティベートします。
  ![セキュリティ キーのプロンプト](/assets/images/help/2fa/security-key-prompt.png)
9.  リカバリコードをダウンロードしていて、アクセスできることを確認してください。 まだコードをダウンロードしていないか、コードのセットをもう 1 つ生成したい場合は、コードをダウンロードして、安全な場所に保存します。 詳しくは、「[2 要素認証の回復コードのダウンロード](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)」をご覧ください。
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_mobile %} を使った 2 要素認証の構成

Web ブラウザーで {% data variables.product.prodname_dotcom %} アカウントにサインインするときに、2 要素認証に {% data variables.product.prodname_mobile %} を使うことができます。 {% data variables.product.prodname_mobile %} を使った 2 要素認証は TOTP を利用せず、代わりに公開キー暗号化を使ってアカウントをセキュリティで保護します。

TOTP アプリケーションまたは SMS を構成した後は、{% data variables.product.prodname_mobile %} を使って認証することもできます。 今後、{% data variables.product.prodname_mobile %} にアクセスできなくなった場合でも、セキュリティ キーまたは TOTP アプリケーションを使ってサインインすることができます。

1. TOTP モバイル アプリまたは SMS を介して 2 要素認証をあらかじめ構成している必要があります。
2. [{% data variables.product.prodname_mobile %}](https://github.com/mobile) をインストールします。
3. {% data variables.product.prodname_mobile %} から {% data variables.product.product_name %} アカウントにサインインします。

サインイン後は、デバイスを 2 要素認証に使用できるようになります。
{% endif %}

## 参考資料

- "[2 要素認証について](/articles/about-two-factor-authentication)"
- "[2 要素認証復旧方法を設定する](/articles/configuring-two-factor-authentication-recovery-methods)"
- 「[2 要素認証を使用した {% data variables.product.prodname_dotcom %} へのアクセス](/articles/accessing-github-using-two-factor-authentication)」
- 「[2 要素認証クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)」
- [{% data variables.product.pat_generic %}の作成](/github/authenticating-to-github/creating-a-personal-access-token)
