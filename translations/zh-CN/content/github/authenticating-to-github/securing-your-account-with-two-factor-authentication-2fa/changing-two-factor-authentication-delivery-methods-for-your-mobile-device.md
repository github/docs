---
title: 更改移动设备的双重身份验证递送方式
intro: 您可以选择通过短信或移动应用程序接收验证码。
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods/
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  free-pro-team: '*'
topics:
  - 2FA
---

{% note %}

**注：**更改双重身份验证方法会使当前的双因素方法设置无效。 但是，这不会影响您的恢复代码或后备 SMS 配置。 如果需要，您可以在个人帐户的安全设置页面中更新恢复代码或后备 SMS 配置。

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. 在“SMS delivery（SMS 递送）旁边，单击 **Edit（编辑）**。 ![编辑 SMS 递送选项](/assets/images/help/2fa/edit-sms-delivery-option.png)
4. 在“Delivery options（递送选项）”下，单击 **Reconfigure two-factor authentication（重新配置双重身份验证）**。 ![切换 2FA 递送选项](/assets/images/help/2fa/2fa-switching-methods.png)
5. 决定是使用 TOTP 移动应用程序还是使用短信设置双重身份验证。 更多信息请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication)”。
    - 要使用 TOTP 移动应用程序设置双重身份验证，请单击 **Set up using an app（使用应用程序设置）**。
    - 要使用短信 (SMS) 设置双重身份验证，请单击 **Set up using SMS（使用 SMS 设置）**。

### 延伸阅读

- "[关于双重身份验证](/articles/about-two-factor-authentication)"
- "[配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)"
