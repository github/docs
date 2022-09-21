---
title: Sudo モード
intro: '機密性の高い可能性があるアクションを実行する前にアカウントへのアクセスを確認するために、{% data variables.product.product_location %} は認証を求めます。'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
ms.openlocfilehash: 909552ff2252e14430050541da5f6bae582f66b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147540827'
---
## sudo モードについて

{% data variables.product.product_location %} に対して機密性の高いアクションを実行するときにアカウントのセキュリティを維持するには、既にサインインしている場合でも認証する必要があります。 たとえば、{% data variables.product.company_short %} では、各アクションで新しいユーザーまたはシステムがアカウントにアクセスできるようになるため、次のアクションは機密性が高いと見なされます。

- 関連付けられているメール アドレスの変更
- サード パーティ製アプリケーションの認可
- 新しい SSH キーの追加

機密性の高いアクションを実行するために認証すると、そのセッションは一時的に "sudo モード" になります。 sudo モードでは、認証なしで機密性の高いアクションを実行できます。 {% data variables.product.product_name %} は、数時間待機してから、再び認証を求めるメッセージを表示します。 この間に、機密性の高いアクションを実行するとタイマーがリセットされます。

{% ifversion ghes %}

{% note %}

**注**: {% data variables.product.product_location %} が CAS や SAML SSO などの外部認証方法を使用している場合、sudo モードに入るプロンプトは表示されません。 詳しい情報については、サイト管理者にお問い合わせください。

{% endnote %}

{% endif %}

"sudo" は Unix システム上のプログラムへの参照であり、名前は "**su** peruser **do**" の短縮形です。 詳しくは、Wikipedia の「[sudo](https://wikipedia.org/wiki/Sudo)」を参照してください。

## sudo モードのアクセスの確認

sudo モードのアクセスを確認するには、パスワードで認証{% ifversion totp-and-mobile-sudo-challenge %}することができます{% else %}する必要があります{% endif %}。{% ifversion totp-and-mobile-sudo-challenge %} 必要に応じて、{% ifversion fpt or ghec %}セキュリティ キー、{% data variables.product.prodname_mobile %}、または 2 要素認証コードなどの異なる認証方法を使用できます{% elsif ghes %}セキュリティ キーや 2 要素認証コードなどの異なる認証方法を使用できます{% endif %}。{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [セキュリティ キーを使用したアクセスの確認](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [GitHub Mobile を使用したアクセスの確認](#confirming-access-using-github-mobile) {%- endif %}
- [2 要素認証コードを使用したアクセスの確認](#confirming-access-using-a-2fa-code)
- [パスワードを使用したアクセスの確認](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### セキュリティ キーを使用したアクセスの確認

セキュリティ キーを使用して sudo モードのアカウントへのアクセスを確認するには、セキュリティ キーを使用してアカウントに 2 要素認証 (2FA) を設定する必要があります。 詳細については、「[2 要素認証の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)」を参照してください。

sudo モードの認証を求めるダイアログが表示されたら、 **[セキュリティ キーの使用]** をクリックし、プロンプトに従います。

![sudo モードのセキュリティ キー オプションのスクリーンショット](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### {% data variables.product.prodname_mobile %} を使用したアクセスの確認

アプリを使用して sudo モードのアカウントへのアクセスを確認するには、{% data variables.product.prodname_mobile %} をインストールしてサインインする必要があります。 詳しくは、「[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)」を参照してください。

1. sudo モードの認証を求められたら **[GitHub Mobile の使用]** をクリックします。

   ![sudo モードの {% data variables.product.prodname_mobile %} オプションのスクリーンショット](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. {% data variables.product.prodname_mobile %} を開きます。 {% data variables.product.prodname_mobile %} には、要求を承認するために {% data variables.product.product_location %} に入力する必要がある数値が表示されます。

   ![sudo モードへのアクセスを承認するために {% data variables.product.product_name %} に入力する {% data variables.product.prodname_mobile %} からの数値のスクリーンショット](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. {% data variables.product.product_name %} に、{% data variables.product.prodname_mobile %} で表示されている数値を入力します。

{% endif %}

### 2 要素認証コードを使用したアクセスの確認

TOTP モバイル アプリ、{% ifversion fpt or ghec %} またはテキスト メッセージ{% endif %}を使用して、2 要素認証コードを使用して sudo モードのアカウントへのアクセスを確認するには、2 要素認証を構成する必要があります。 詳細については、「[2 要素認証の構成](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)」を参照してください。

sudo モードの認証を求めるダイアログが表示されたら、TOTP モバイル アプリ、{% ifversion fpt or ghec %}またはテキスト メッセージ {% endif %} から認証コードを入力し、 **[確認]** をクリックします。

![sudo モードの 2 要素認証コード プロンプトのスクリーンショット](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### パスワードを使用したアクセスの確認

{% endif %}

sudo モードの認証を求めるダイアログが表示されたら、パスワードを入力し、 **[確認]** をクリックします。

![sudo モードのパスワード プロンプトのスクリーンショット](/assets/images/help/settings/sudo_mode_prompt_password.png)
