---
title: 配置双重身份验证恢复方法
intro: 您可以设置多种恢复方法，以便在丢失双重身份验证凭据的情况下访问您的帐户。
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes/
  - /articles/setting-a-fallback-authentication-number/
  - /articles/about-recover-accounts-elsewhere/
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere/
  - /articles/generating-and-storing-an-account-recovery-token/
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2fa
---
除了安全存储双重身份验证恢复代码之外，我们强烈建议您配置一种或多种其他恢复方法。

### 下载双重身份验证恢复代码

{% data reusables.two_fa.about-recovery-codes %} 也可以在启用双重身份验证后随时下载恢复代码。

为确保您的帐户安全，请勿分享或分发您的恢复代码。 我们建议使用安全密码管理器保存它们，例如：
- [1Password](https://1password.com/)
- [Keeper](https://keepersecurity.com/)
- [LastPass](https://lastpass.com/)

如果您生成新的恢复代码或禁用并重新启用 2FA，则安全设置中的恢复代码会自动更新。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
4. 将恢复代码保存在安全的位置。 在失去访问权限时，恢复代码可帮助您恢复帐户登录。
    - 要在设备上保存恢复代码，请单击 **Download（下载）**。
    - 要保存恢复代码的硬拷贝，请单击 **Print（打印）**。
    - 要复制恢复代码以存储在密码管理器中，请单击**复制**。 ![可选择下载、打印或复制代码的恢复代码列表](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

### 生成一组新的恢复代码

使用某个恢复代码恢复帐户访问后，该代码无法再用。 用完全部 16 个恢复代码后，可以生成另一个代码列表。 生成一组新的恢复代码将导致此前生成的任何代码失效。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.two_fa.show-recovery-codes %}
3. 要创建另一批恢复代码，请单击 **Generate new recovery codes（生成新的恢复代码）**。 ![生成新恢复代码按钮](/assets/images/help/2fa/generate-new-recovery-codes.png)

### 将安全密钥配置为附加双重身份验证方法

您可以将安全密钥设置为辅助双重身份验证方法，以便使用安全密钥恢复帐户访问。 更多信息请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。

{% if currentVersion == "free-pro-team@latest" %}

### 设置后备身份验证号码

您可以提供后备设备的号码作为第二号码。 在无法访问主设备和恢复代码时，可通过备用短信号码恢复帐户登录。

无论您配置的身份验证方法是通过短信还是通过 TOTP 移动应用程序，都可以使用后备号码。

{% warning %}

**警告：**使用后备号码是最后的选择。 如果您设置了后备身份验证号码，我们建议您配置其他恢复方法。
- 不法之徒可能会攻击手机运营商，因此 SMS 身份验证存在风险。
- 只有美国以外的某些国家/地区支持短信验证；有关支持列表详情，请参阅“[支持 SMS 身份验证的国家/地区](/articles/countries-where-sms-authentication-is-supported)”。

{% endwarning %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. 在“Fallback SMS number（后备 SMS 号码）”旁边，单击 **Add（添加）**。 ![添加后备 SMS 号码按钮](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. 在“Fallback SMS number（后备 SMS 号码）”下，单击 **Add fallback SMS number（添加后备 SMS 号码）**。 ![添加后备 SMS 号码文本](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. 选择您的国家/地区代码并键入您的手机号码，包括区号。 确认信息无误后，单击 **Set fallback（设置后备号码）**。 ![设置后备 SMS 号码](/assets/images/help/2fa/2fa-fallback-number.png)

设置完成后，备用设备将收到确认短信。

### 添加具有异地恢复帐户功能的后备身份验证方法

您可以为帐户生成额外的身份验证凭据，并通过合作伙伴的恢复提供程序存储它。

#### 关于异地恢复帐户

通过异地恢复帐户功能，您可以为 {% data variables.product.product_name %} 帐户添加额外的安全因素，以应对无法访问双重身份验证方法或恢复代码的情况。

异地恢复帐户功能允许您将 {% data variables.product.product_name %} 帐户与您的 Facebook 帐户相关联。 您可以使用 Facebook 以_帐户恢复令牌_的形式存储 {% data variables.product.product_name %} 帐户的身份验证凭据。

如果因无法访问双重身份验证方法或恢复代码而无法访问 {% data variables.product.product_name %} 帐户，您可以从恢复提供程序取回您的帐户恢复令牌，以帮助证明您是您的 {% data variables.product.product_name %} 帐户的所有者。

取回令牌后，{% data variables.contact.contact_support %} 可能会对帐户禁用双重身份验证。 然后，您可以提供或重置密码以恢复帐户访问。

生成或取回帐户恢复令牌时，帐户的审核日志中会添加一个事件。 更多信息请参阅“[查看安全日志](/articles/reviewing-your-security-log)”。

#### 生成并存储帐户恢复令牌

您可以生成帐户恢复令牌并通过合作伙伴的恢复提供程序存储它。

1. 登录到您的 Facebook 帐户，然后返回

{% data variables.product.product_name %} 上的企业设置来设置公告横幅。
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
4. 要生成新令牌，请在“Recovery tokens（恢复令牌）”下，单击 **Store new token（存储新令牌）**。 ![用于存储新恢复令牌的按钮](/assets/images/help/settings/store-new-recovery-token.png)
5. 阅读有关帐户恢复令牌的信息，然后单击 **Connect with https://www.facebook.com（连接 https://www.facebook.com）**。 ![用于将恢复令牌与 Facebook 连接的按钮](/assets/images/help/settings/connect-recovery-token-with-facebook.png)
6. 重定向到 Facebook 后，阅读有关使用 Facebook 开启帐户恢复的信息，然后单击 **Save as [_YOUR NAME_]（另存为名称）**。 （如果您在短期内保存多个令牌，Facebook 可能会在您保存第一个令牌后跳过此确认步骤。） ![含有开启帐户恢复按钮的 Facebook 页面](/assets/images/help/settings/security-turn-on-rae-facebook.png)

{% endif %}

### 延伸阅读

- "[关于双重身份验证](/articles/about-two-factor-authentication)"
- "[配置双重身份验证](/articles/configuring-two-factor-authentication)"
- “[使用双重身份验证访问 {% data variables.product.prodname_dotcom %}](/articles/accessing-github-using-two-factor-authentication)”。
- "[丢失双重身份验证凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
