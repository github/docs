---
title: 查看和管理活动的 SAML 会话
intro: 您可以在安全设置中查看和撤销活动的 SAML 会话。
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099900'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. 在“Sessions（会话）”下，您可以看到活动的 SAML 会话。
   ![活动 SAML 会话列表](/assets/images/help/settings/saml-active-sessions.png)
4. 若要查看会话详细信息，请单击“查看更多”。
   ![用于打开 SAML 会话详细信息的按钮](/assets/images/help/settings/saml-expand-session-details.png)
5. 若要撤销会话，请单击“撤销 SAML”。
   ![撤销 SAML 会话的按钮](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **注意：** 撤销会话时，将删除对该组织的 SAML 身份验证。 要再次访问该组织，您需要通过身份提供程序单点登录。 有关详细信息，请参阅“[关于通过 SAML SSO 进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”。

  {% endnote %}

## 延伸阅读

- “[关于使用 SAML SSO 进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”
