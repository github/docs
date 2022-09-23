---
title: GitHub アクセス認証情報を更新する
intro: '{% data variables.product.product_name %} 認証情報には、{% ifversion not ghae %}パスワードだけではなく、{% endif %}{% data variables.product.product_name %} に伝達するのに使うアクセス トークン、SSH キー、およびアプリケーション API トークンが含まれます。 必要があれば、すべてのアクセス認証情報をリセットできます。'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
ms.openlocfilehash: 650c0027b679690def6d1c77d727a87b8688b889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508417'
---
{% ifversion not ghae %}
## 新しいパスワードをリクエストする

1. 新しいパスワードを要求するには、{% ifversion fpt or ghec %} https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %} にアクセスしてください。
2. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}にあるアカウントに関連付けられているメール アドレスを入力し、 **[パスワード リセット メールの送信]** をクリックします。 構成済みの場合、メールはバックアップ メール アドレスに送信されます。
  ![パスワード リセットのメール要求ダイアログ](/assets/images/help/settings/password-recovery-email-request.png)
3. パスワードをリセットするためのリンクがメールで届きます。 メールを受信してから 3 時間以内に、このリンクをクリックする必要があります。 弊社からメールが届かない場合、スパムフォルダを確認してください。
4. 2 要素認証を有効にしている場合は、2 要素認証の資格情報の入力を求められます。{% ifversion fpt or ghec %}
   * {% data variables.product.prodname_mobile %} の場合は、ID を確認するためのプッシュ通知が送信されます。 プッシュ通知または {% data variables.product.prodname_mobile %} アプリを開き、ブラウザーのパスワード リセット ページに表示される 2 桁のコードを入力します。
   ![2 要素 {% data variables.product.prodname_mobile %} 認証プロンプト](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * GitHub Mobile の使用をスキップして検証するには、 **[2 要素認証または回復コードの入力]** をクリックします。
      ![[2 要素認証または回復コードの入力] が強調表示された {% data variables.product.product_name %} の 2 要素 GitHub Mobile 認証プロンプト](/assets/images/help/2fa/2fa-github-mobile-password-reset.png) {% endif %}
   * 認証コードまたはいずれかの回復コードを入力し、 **[確認]** をクリックします。
      ![2 要素認証プロンプト](/assets/images/help/2fa/2fa-password-reset.png)
     * アカウントにセキュリティ キーを追加した場合は、認証コードを入力する代わりに **[セキュリティ キーの使用]** をクリックできます。
     {% ifversion fpt or ghec %}
     * [{% data variables.product.prodname_mobile %}](https://github.com/mobile) を設定している場合は、代わりに **[GitHub Mobile での認証]** をクリックします。
     {% endif %}
5. 新しいパスワードを入力し、新しいパスワードを確認して、 **[パスワードの変更]** をクリックします。 強力なパスワードの作成については、「[強力なパスワードの作成](/articles/creating-a-strong-password)」を参照してください。
  {% ifversion fpt or ghec %}![パスワード回復ボックス](/assets/images/help/settings/password-recovery-page.png){% else %} ![パスワード回復ボックス](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

今後パスワードが失われるのを防ぐために、[LastPass](https://lastpass.com/) や [1Password](https://1password.com/) などのセキュリティで保護されたパスワード マネージャーを使用することをお勧めします。

{% endtip %}

## 既存のパスワードを変更する

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.product_name %} への {% data variables.product.signin_link %}
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
4. [Change password] の下で、古いパスワード、新しい強靭なパスワードを入力し、新しいパスワードを確認します。 強力なパスワードの作成については、「[強力なパスワードの作成](/articles/creating-a-strong-password)」を参照してください。
5. **[パスワードの更新]** をクリックします。

{% tip %}

セキュリティを強化するために、パスワードの変更に加えて 2 要素認証を有効にしてください。 詳細については、「[2 要素認証について](/articles/about-two-factor-authentication)」を参照してください。

{% endtip %} {% endif %}
## アクセストークンを更新する

アクセス トークンの確認と削除の手順については、「[承認された統合の確認](/articles/reviewing-your-authorized-integrations)」を参照してください。 新しいアクセス トークンを生成するには、「[個人用アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

{% ifversion not ghae %}

アカウントのパスワードをリセットし、さらに {% data variables.product.prodname_mobile %} アプリからのサインアウトをトリガーする場合は、"GitHub iOS" または "GitHub Android" OAuth アプリの承認を取り消すことができます。 これにより、ご自分のアカウントに関連付けられている {% data variables.product.prodname_mobile %} アプリのすべてのインスタンスがサインアウトされます。 詳細については、「[承認された統合の確認](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)」を参照してください。

{% endif %}

## SSH キーを更新する

SSH キーの確認と削除の手順については、「[SSH キーの確認](/articles/reviewing-your-ssh-keys)」を参照してください。 新しい SSH キーを生成して追加するには、「[SSH キーの生成](/articles/generating-an-ssh-key)」を参照してください。

## API トークンをリセットする

{% data variables.product.product_name %} に登録したアプリケーションがある場合、OAuthトークンのリセットを考えることになります。 詳細については、「[承認のリセット](/rest/reference/apps#reset-an-authorization)」エンドポイントを参照してください。

{% ifversion not ghae %}
## 許可されていないアクセスを防止する

アカウントのセキュリティ保護と不正アクセスの防止に関する詳細なヒントについては、「[不正アクセスの防止](/articles/preventing-unauthorized-access)」を参照してください。
{% endif %}
