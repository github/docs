---
title: 2 要素認証リカバリ方法を設定する
intro: 2 要素認証のクレデンシャルを紛失した場合に備え、アカウントへのアクセスを回復するさまざまな方法を設定できます。
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088289'
---
2 要素認証リカバリコードを安全に保管することに加え、別のリカバリ方法を 1 つ以上設定することを強くおすすめします。

## 2 要素認証リカバリコードのダウンロード

{% data reusables.two_fa.about-recovery-codes %}また、2 要素認証の有効化後は、リカバリコードをいつでもダウンロードできます。

アカウントを安全に保つため、リカバリコードを共有や配布しないでください。 以下のような、安全なパスワードマネージャで保存することをおすすめします:
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

新しいリカバリコードを生成するか、2 要素認証を無効化してから再有効化すると、セキュリティ設定にあるリカバリコードが自動的に更新されます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. 回復用コードを安全な場所に保存する。 リカバリコードは、アカウントにアクセスできなくなった場合に、再びアクセスするために役立ちます。
    - 回復用コードをデバイスに保存するには、 **[Download]\(ダウンロード\)** をクリックします。
    - 回復用コードのハード コピーを保存するには、 **[Print]\(印刷\)** をクリックします。
    - パスワード マネージャーに格納するために回復用コードをコピーするには、 **[Copy]\(コピー\)** をクリックします。
  ![コードのダウンロード、印刷、コピーのオプションがある、回復用コードの一覧](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## リカバリコードのセットを新しく生成する

アクセス回復のためにリカバリコードを一度使うと、再利用はできません。 16 個のリカバリコードをすべて使った場合は、別のコードのリストを生成できます。 リカバリコードのセットを新しく生成すると、以前生成したコードはすべて無効になります。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. 回復用コードのバッチをもう 1 つ作成するには、 **[Generate new recovery codes]\(新しい回復用コードの生成\)** をクリックします。
    ![[Generate new recovery codes]\(新しい回復用コードの生成\) ボタン](/assets/images/help/2fa/generate-new-recovery-codes.png)

## セキュリティキーを追加の 2 要素認証方式として設定する

2 要素認証の二次的な方法としてセキュリティキーを設定し、そのセキュリティキーを使ってアカウントへのアクセスを回復することができます。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。

{% ifversion fpt or ghec %}

## フォールバック認証番号を設定する

フォールバックデバイスのために、別の番号を提供できます。 主に使うデバイスにもリカバリコードにもアクセスできなくなった場合、バックアップの SMS 番号でアカウントにアクセスできます。

認証をテキストメッセージから設定しても、TOTP モバイルアプリケーションから設定しても、フォールバック番号を使うことは可能です。

{% warning %}

**警告:** フォールバック番号を使用することは最後の手段です。 フォールバック認証番号を設定した場合は、別のリカバリ方法も設定するようおすすめします。
- 悪意のある人が携帯電話会社を攻撃する可能性があるため、SMS 認証にはリスクがあります。
- SMS メッセージは、米国を除く特定の国でのみサポートされています。一覧については、「[SMS 認証がサポートされている国](/articles/countries-where-sms-authentication-is-supported)」を参照してください。

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. [Fallback SMS number]\(フォールバック SMS 番号\) の横にある **[Add]\(追加\)** をクリックします。
![[Add fallback SMS number]\(フォールバック SMS 番号の追加\) ボタン](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. [Fallback SMS number]\(フォールバック SMS 番号\) で **[Add fallback SMS number]\(フォールバック SMS 番号の追加\)** をクリックします。
![[Add fallback SMS number]\(フォールバック SMS 番号の追加\) テキスト](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. 国コードを選択し、携帯電話番号を入力します。 情報が正しい場合は、 **[Set fallback]\(フォールバックの設定\)** をクリックします。
    ![フォールバック SMS 番号の設定](/assets/images/help/2fa/2fa-fallback-number.png)

設定後、バックアップデバイスが確認の SMS を受信します。

{% endif %}

## 参考資料

- "[2 要素認証について](/articles/about-two-factor-authentication)"
- "[2 要素認証を設定する](/articles/configuring-two-factor-authentication)"
- 「[2 要素認証を使用した {% data variables.product.prodname_dotcom %} へのアクセス](/articles/accessing-github-using-two-factor-authentication)」
- "[2 要素認証資格情報を失った場合のアカウントの復旧](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
