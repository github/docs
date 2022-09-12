---
title: 更改移动设备的双重身份验证递送方式
intro: 您可以选择通过短信或移动应用程序接收验证码。
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
ms.openlocfilehash: 90f06f6e3a8b3c5614b78d7aee4055d903df2e80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084607'
---
{% note %}

注意：更改双因素身份验证的主要方法会使你当前的双因素身份验证设置（包括恢复代码）失效。 确保新恢复代码集的安全。 更改双重身份验证的主要方法不会影响回退 SMS 配置（如果已配置）。 有关详细信息，请参阅“[配置双因素身份验证的恢复方法](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)”。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. 在“主要双因素方法”旁边，单击“更改”。
  ![编辑主要传递选项](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. 在“传递选项”下，单击“重新配置双因素身份验证”。
    ![切换 2FA 传递选项](/assets/images/help/2fa/2fa-switching-methods.png)
5. 决定是使用 TOTP 移动应用程序还是使用短信设置双重身份验证。 有关详细信息，请参阅“[配置双因素身份验证](/articles/configuring-two-factor-authentication)”。
    - 要使用 TOTP 移动应用设置双因素身份验证，请单击“使用应用设置”。
    - 要使用短信 (SMS) 设置双因素身份验证，请单击“使用短信设置”。

## 延伸阅读

- [关于双因素身份验证](/articles/about-two-factor-authentication)
- [配置双因素身份验证的恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)
