---
title: SAMLシングルサインオンで利用するために個人アクセストークンを認可する
intro: SAMLシングルサインオン (SSO) を使う Organization で個人アクセストークンを使うためには、まずそのキーを認可しなければなりません。
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: PAT with SAML
ms.openlocfilehash: a6e1d4c2e1fa5cf1f4738e06127c5e7875a2ef5d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116190'
---
既存の個人用アクセス トークンを承認することも、[新しい個人用アクセス トークンを作成](/github/authenticating-to-github/creating-a-personal-access-token)して承認することもできます。

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %}
3. 承認するトークンの横にある **[SSO の構成]** をクリックします。
   ![個人用アクセス トークンの SSO を構成するドロップダウン メニューのスクリーンショット](/assets/images/help/settings/sso-allowlist-button.png)
4. トークンを承認する Organization の右側にある **[承認]** をクリックします。
   ![トークンの承認ボタン](/assets/images/help/settings/token-authorize-button.png)

## 参考資料

- 「[個人用アクセス トークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」
- 「[SAML のシングル サインオンでの認証について](/articles/about-authentication-with-saml-single-sign-on)」
