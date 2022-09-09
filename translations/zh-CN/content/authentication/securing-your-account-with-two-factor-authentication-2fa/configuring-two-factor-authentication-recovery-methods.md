---
title: 配置双重身份验证恢复方法
intro: 您可以设置多种恢复方法，以便在丢失双重身份验证凭据的情况下访问您的帐户。
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084601'
---
除了安全存储双重身份验证恢复代码之外，我们强烈建议您配置一种或多种其他恢复方法。

## 下载双重身份验证恢复代码

{% data reusables.two_fa.about-recovery-codes %} 也可以在启用双重身份验证后随时下载恢复代码。

为确保您的帐户安全，请勿分享或分发您的恢复代码。 我们建议使用安全密码管理器保存它们，例如：
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

如果您生成新的恢复代码或禁用并重新启用 2FA，则安全设置中的恢复代码会自动更新。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. 将恢复代码保存在安全的位置。 在失去访问权限时，恢复代码可帮助您恢复帐户登录。
    - 若要将恢复代码保存在设备上，请单击“下载”。
    - 若要保存恢复代码的打印件，请单击“打印”。
    - 若要复制恢复代码以存储在密码管理器中，请单击“复制”。
  ![可选择下载、打印或复制代码的恢复代码列表](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## 生成一组新的恢复代码

使用某个恢复代码恢复帐户访问后，该代码无法再用。 用完全部 16 个恢复代码后，可以生成另一个代码列表。 生成一组新的恢复代码将导致此前生成的任何代码失效。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. 若要创建另一批恢复代码，请单击“生成新的恢复代码”。
    ![生成新恢复代码按钮](/assets/images/help/2fa/generate-new-recovery-codes.png)

## 将安全密钥配置为附加双重身份验证方法

您可以将安全密钥设置为辅助双重身份验证方法，以便使用安全密钥恢复帐户访问。 有关详细信息，请参阅“[配置双因素身份验证](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。

{% ifversion fpt or ghec %}

## 设置后备身份验证号码

您可以提供后备设备的号码作为第二号码。 在无法访问主设备和恢复代码时，可通过备用短信号码恢复帐户登录。

无论您配置的身份验证方法是通过短信还是通过 TOTP 移动应用程序，都可以使用后备号码。

{% warning %}

警告：只有在万不得已的情况下才使用后备号码。 如果您设置了后备身份验证号码，我们建议您配置其他恢复方法。
- 不法之徒可能会攻击手机运营商，因此 SMS 身份验证存在风险。
- 只有美国以外的某些国家/地区支持短信验证；有关支持列表，请参阅“[支持短信身份验证的国家/地区](/articles/countries-where-sms-authentication-is-supported)”。

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. 在“后备短信号码”旁，单击“添加”。
![添加后备短信号码按钮](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. 在“后备短信号码”下，单击“添加后备短信号码”。
![添加后备短信号码文本](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. 选择您的国家/地区代码并键入您的手机号码，包括区号。 确认信息无误后，单击“设置后备号码”。
    ![设置后备短信号码](/assets/images/help/2fa/2fa-fallback-number.png)

设置完成后，备用设备将收到确认短信。

{% endif %}

## 延伸阅读

- [关于双因素身份验证](/articles/about-two-factor-authentication)
- [配置双因素身份验证](/articles/configuring-two-factor-authentication)
- [使用双因素身份验证访问 {% data variables.product.prodname_dotcom %}](/articles/accessing-github-using-two-factor-authentication)
- [丢失双因素身份验证凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
