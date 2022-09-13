---
title: SAMLシングルサインオンで利用するためにSSHキーを認可する
intro: SAML シングルサインオン (SSO) を使う Organization で SSH キーを使うためには、まずそのキーを認可しなければなりません。
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SSH Key with SAML
ms.openlocfilehash: 11df62f1a4adc5a0de1f54efbccafe71ad0feb83
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120038'
---
既存の SSH キーを認可することも、新しい SSH キーを作成して認可することもできます。 新しい SSH キーの作成の詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**注:** SSH キーの認可が Organization によって取り消された場合、同じキーを再度認可することはできません。 新しい SSH キーを生成して認可する必要があります。 新しい SSH キーの作成の詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. 承認する SSH キーの横にある **[SSO を有効化]** または **[SSO を無効化]** をクリックします。
![SSO トークンの承認ボタン](/assets/images/help/settings/ssh-sso-button.png)
4. SSH キーを認可する Organization を見つけます。
5. **[承認]** をクリックします。
![トークンの承認ボタン](/assets/images/help/settings/ssh-sso-authorize.png)

## 参考資料

- 「[既存の SSH キーの確認](/articles/checking-for-existing-ssh-keys)」
- 「[SAML のシングル サインオンでの認証について](/articles/about-authentication-with-saml-single-sign-on)」
