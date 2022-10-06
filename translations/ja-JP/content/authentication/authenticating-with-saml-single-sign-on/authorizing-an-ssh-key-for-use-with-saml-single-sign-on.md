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
ms.openlocfilehash: f4b11c123c01d56263de883cbdd0f87c48eee04b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147854284'
---
既存の SSH キーを認可することも、新しい SSH キーを作成して認可することもできます。 新しい SSH キーの作成の詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**注:** SSH キーの認可が Organization によって取り消された場合、同じキーを再度認可することはできません。 新しい SSH キーを生成して認可する必要があります。 新しい SSH キーの作成の詳細については、「[新しい SSH キーを生成して ssh-agent に追加する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
1. 認可する SSH キーの右側にある **[SSO の構成]** をクリックします。

   ![SSO トークンの認可ボタンのスクリーンショット](/assets/images/help/settings/ssh-sso-button.png)
1. SSH キーを認可する Organization の右側にある **[認可]** をクリックします。

   ![トークンの認可ボタンのスクリーンショット](/assets/images/help/settings/ssh-sso-authorize.png)

## 参考資料

- 「[既存の SSH キーの確認](/articles/checking-for-existing-ssh-keys)」
- 「[SAML のシングル サインオンでの認証について](/articles/about-authentication-with-saml-single-sign-on)」
