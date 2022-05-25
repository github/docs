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
shortTitle: 更改 2FA 递送方式
---

{% note %}

**注意：** 更改双重身份验证的主要方法会使您当前的双重身份验证设置（包括恢复代码）失效。 确保新恢复代码集的安全。 更改双重身份验证的主要方法不会影响回退 SMS 配置（如果已配置）。 更多信息请参阅“[配置双重身份验证恢复方法](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)”。

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
3. 在“Primary two-factor method（主要双重方法）”旁边，点击 **Change（更改）**。 ![编辑主要递送选项](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. 在“Delivery options（递送选项）”下，单击 **Reconfigure two-factor authentication（重新配置双重身份验证）**。 ![切换 2FA 递送选项](/assets/images/help/2fa/2fa-switching-methods.png)
5. 决定是使用 TOTP 移动应用程序还是使用短信设置双重身份验证。 更多信息请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication)”。
    - 要使用 TOTP 移动应用程序设置双重身份验证，请单击 **Set up using an app（使用应用程序设置）**。
    - 要使用短信 (SMS) 设置双重身份验证，请单击 **Set up using SMS（使用 SMS 设置）**。

## 延伸阅读

- "[关于双重身份验证](/articles/about-two-factor-authentication)"
- "[配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)"
