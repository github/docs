---
title: アクティブな SAML セッションの表示と管理
intro: 設定でアクティブな SAML セッションを表示および取り消すことができます。
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
type: how_to
shortTitle: Active SAML sessions
ms.openlocfilehash: e69ad366de7cdfb14b6a2a13ae3bdc134111616a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165596'
---
アカウントにログインしているデバイスの一覧を表示し、認識できない SAML セッションをすべて取り消すことができます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. [Web セッション] の下で、アクティブな SAML セッションを確認できます。

   ![アクティブな SAML セッションの一覧のスクリーンショット](/assets/images/help/settings/saml-active-sessions.png)

1. セッションの詳細を表示するには、 **[詳細情報]** をクリックします。
   ![SAML セッションの詳細を開くボタンが強調されたアクティブな SAML セッションのスクリーンショット](/assets/images/help/settings/saml-expand-session-details.png)

1. セッションを取り消すには、 **[SAML の取り消し]** をクリックします。

   ![SAML セッションを取り消すボタンが強調されたセッションの詳細ページのスクリーンショット](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **注:** セッションを取り消すと、その Organization に対する SAML 認証が削除されます。 Organization に再びアクセスするには、アイデンティティプロバイダを介してシングルサインオンする必要があります。 詳細については、「[SAML SSO での認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」を参照してください。

  {% endnote %}

## 参考資料

- 「[SAML SSO での認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」
