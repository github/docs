---
title: 查看和管理活动的 SAML 会话
intro: 可以在设置中查看和撤销活动的 SAML 会话。
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
ms.contentlocale: zh-CN
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165577'
---
可以查看已登录到帐户的设备列表，并撤销无法识别的任何 SAML 会话。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. 在“Web 会话”下，可以看到活动的 SAML 会话。

   ![活动 SAML 会话列表的屏幕截图](/assets/images/help/settings/saml-active-sessions.png)

1. 若要查看会话详细信息，请单击“查看更多”。
   ![活动 SAML 会话的屏幕截图，其中突出显示了用于打开 SAML 会话详细信息的按钮](/assets/images/help/settings/saml-expand-session-details.png)

1. 若要撤销会话，请单击“撤销 SAML”。

   ![“会话详细信息”页的屏幕截图，其中突出显示了用于撤销 SAML 会话的按钮](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **注意：** 撤销会话时，将删除对该组织的 SAML 身份验证。 要再次访问该组织，您需要通过身份提供程序单点登录。 有关详细信息，请参阅“[关于通过 SAML SSO 进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”。

  {% endnote %}

## 延伸阅读

- “[关于使用 SAML SSO 进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”
