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
ms.openlocfilehash: 1a93d77d4da76a6efbc96ba5d80d0fe7e800c08a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088271'
---
{% ifversion fpt or ghec %}

{% warning %}

**警告**: 

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## 2 要素認証リカバリコードを使用する

リカバリコードのうち 1 つを使用して、アカウントへのエントリを自動で再取得します。 リカバリコード は、多くの場合、パスワードマネージャまたはご使用のコンピュータのダウンロードフォルダに保存されています。 回復コードの既定のファイル名は `github-recovery-codes.txt` です。 回復コードの詳細については、「[2 要素認証の回復方法の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)」を参照してください。

1. 認証を求めるためにユーザ名とパスワードを入力してください。

    {% warning %}

    **警告**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}

{% ifversion fpt or ghec %}
1. [問題が発生ししていますか。] で、 **[Use a recovery code or request a reset]\(回復コードの使用またはリセットの要求\)** をクリックします。

   ![回復コードを使用するためのリンクのスクリーンショット](/assets/images/help/2fa/2fa-recovery-code-link.png) {%- else %}
1. [2FA] ページの [Don't have your phone?]\(携帯電話を持っていない\) の下の **[Enter a two-factor recovery code]\(2 要素回復コードを入力\)** をクリックします。

   ![回復コードを使用するためのリンクのスクリーンショット](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. いずれかの回復コードを入力し、 **[確認]** をクリックします。

   ![リカバリコードを入力するフィールドおよび [Verify] ボタン](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## フォールバック番号による認証

プライマリ TOTP アプリケーションや電話番号へのアクセスをなくした場合でも、 フォールバック番号に送信されている 2 要素認証コードを入力すれば、アカウントへのアクセスを自動で再取得できます。
{% endif %}

## セキュリティキーによる認証

セキュリティキーを使用して 2 要素認証を設定した場合は、セキュリティキーをセカンダリ認証方式として使用すると、アカウントへのアクセスを自動で再取得できます。 詳細については、「[2 要素認証の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。

{% ifversion fpt or ghec %}
## 検証済みのデバイス、SSHトークン、または個人アクセストークンを使用した認証

{% data variables.product.product_location %} のパスワードがわかっているが、2 要素認証資格情報または 2 要素認証回復コードがない場合は、確認済みのメール アドレスにワンタイム パスワードを送信して、確認プロセスを開始し、アカウントへのアクセスを回復できます。

{% note %}

**注**: セキュリティ上の理由から、ワンタイム パスワードで認証してアカウントへのアクセスを回復するには、最大 3 営業日かかることがあります。 {% data variables.product.company_short %} では、この期間中に送信された追加の要求は確認されません。

{% endnote %}

2要素認証の認証情報または 2 要素認証のリカバリコードを使用して、3〜5 日間の待機期間中にいつでもアカウントへのアクセスを回復できます。

1. 認証を求めるためにユーザ名とパスワードを入力してください。

    {% warning %}

    **警告**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}
1. [問題が発生ししていますか。] で、 **[Use a recovery code or request a reset]\(回復コードの使用またはリセットの要求\)** をクリックします。

   ![2fa デバイスまたは回復コードがない場合のリンクのスクリーンショット](/assets/images/help/2fa/no-access-link.png)
1. [Locked out?]\(ロックアウトされましたか。\) の右側にある **[Try recovering your account]\(アカウントの回復を試みる\)** をクリックします。

   ![アカウントの回復を試みるリンクのスクリーンショット](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. **[I understand, get started]\(承諾して開始する\)** をクリックして、認証設定のリセットを要求します。

    ![認証設定のリセットを開始するボタンのスクリーンショット](/assets/images/help/2fa/reset-auth-settings.png)
1. **[Send one-time password](\ワンタイム パスワードの送信\)** をクリックして、アカウントに関連付けられているすべての対象アドレスにワンタイム パスワードを送信します。 アカウントの回復の対象となるのは、確認済みのメールのみです。 パスワードのリセットをプライマリ アドレスやバックアップ アドレスに制限している場合、これらのアドレスのみがアカウントの回復の対象となります。

   ![ワンタイム パスワードを送信するボタンのスクリーンショット](/assets/images/help/2fa/send-one-time-password.png)
1. [One-time password] の下で、送信されたリカバリメール{% data variables.product.prodname_dotcom %}の一時パスワードを入力します。

   ![ワンタイム パスワードを入力するフィールドのスクリーンショット](/assets/images/help/2fa/one-time-password-field.png)
1. **[メール アドレスを確認]** をクリックします。

   ![メール アドレスを確認するボタンのスクリーンショット](/assets/images/help/2fa/verify-email-address.png)
1. 別の検証要素を選択します。
    - 現在使用しているデバイスで以前このアカウントにログインしたことがあり、そのデバイスを検証に使用する場合は、 **[Verify with this device]\(このデバイスで検証\)** をクリックします。
    - 以前にこのアカウントで SSH キーを設定していて、検証にその SSH キーを使用する場合は、 **[SSH キー]** をクリックします。
    - 以前に個人用アクセス トークンを設定し、その個人用アクセス トークンを検証に使用する場合は、 **[個人用アクセス トークン]** をクリックします。

   ![代替検証用のボタンのスクリーンショット](/assets/images/help/2fa/alt-verifications.png)
1. {% data variables.contact.github_support %} のメンバーが要求を確認し、3 営業日以内にメールでお知らせします。 リクエストが承認されると、アカウントリカバリプロセスを完了するためのリンクが送信されます。 リクエストが拒否された場合、追加の質問がある場合のサポートへの問い合わせ方法がメールに記載されます。

{% endif %}
