---
title: アクティブな SAML セッションの表示と管理
intro: セキュリティ設定でアクティブな SAML セッションを表示および削除することができます。
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: Active SAML sessions
ms.openlocfilehash: ee30f76143ec28a810cd23150d115a3b1cd213c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120030'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. [Sessions] で、アクティブな SAML セッションを確認できます。
   ![アクティブな SAML セッションのリスト](/assets/images/help/settings/saml-active-sessions.png)
4. セッションの詳細を表示するには、 **[詳細情報]** をクリックします。
   ![SAML セッションの詳細を開くボタン](/assets/images/help/settings/saml-expand-session-details.png)
5. セッションを取り消すには、 **[SAML の取り消し]** をクリックします。
   ![SAML セッションを取り消すボタン](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **注:** セッションを取り消すと、その Organization に対する SAML 認証が削除されます。 Organization に再びアクセスするには、アイデンティティプロバイダを介してシングルサインオンする必要があります。 詳細については、「[SAML SSO での認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」を参照してください。

  {% endnote %}

## 参考資料

- 「[SAML SSO での認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」
