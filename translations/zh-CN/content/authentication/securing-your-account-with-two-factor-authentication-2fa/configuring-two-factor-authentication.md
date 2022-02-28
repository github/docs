---
title: 配置双重身份验证
intro: 您可以选择多个选项，以向帐户添加第二个身份验证源。
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: 配置 2FA
---

您可以使用移动应用程序{% ifversion fpt or ghec %} 或通过短信{% endif %}配置双重身份验证。 您也可以添加安全密钥。

我们强力建议使用基于时间的一次性密码 (TOTP) 应用程序来配置 2FA。{% ifversion fpt or ghec %} TOTP 应用程序比 SMS 更可靠，特别是对于美国以外的地区。{% endif %} TOTP 应用程序支持在云中安全备份您的验证码，在无法访问设备的情况下也可以进行恢复。

{% warning %}

**警告：**
- 如果您是要求双重身份验证的组织中的成员{% ifversion fpt or ghec %}、帐单管理员{% endif %}或其私有仓库的外部协作者，则必须离开该组织后才能在 {% data variables.product.product_location %} 上禁用 2FA。
- 如果禁用 2FA，您将自动失去对该组织以及您在该组织私有仓库中所拥有的任何私有复刻的访问权限。 要恢复对该组织和复刻的访问权限，请重新启用双重身份验证并联系组织所有者。

{% endwarning %}

{% ifversion fpt or ghec %}

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you cannot configure 2FA for your {% data variables.product.prodname_managed_user %} account. 2FA should be configured through your identity provider.

{% endif %}

## 使用 TOTP 移动应用程序配置双重身份验证

基于时间的一次性密码 (TOTP) 应用程序可自动生成在特定时间后变化的验证码。 我们建议使用基于云的 TOTP 应用程序，例如：
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**提示**：要在多个设备上通过 TOTP 配置身份验证，请在设置过程中，同时使用每个设备扫描 QR 码。 如果已启用 2FA，但您要添加其他设备，则必须从安全设置中重新配置 2FA。

{% endtip %}

1. 下载 TOTP 应用程序。
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
{%- ifversion fpt or ghes > 3.1 %}
5. 在“Two-factor authentication（双重身份验证）”下选择 **Set up using an app（使用应用程序设置）**并点击 **Continue（继续）**。
6. 在“Authentication verification（身份验证）”下，执行以下操作之一：
    - 使用移动设备的应用程序扫描 QR 码。 扫描完成后，应用程序会显示六位数代码，您可以在 {% data variables.product.product_name %} 输入该代码。
    - 如果无法扫描 QR 码，请单击 **enter this text code（输入此文本代码）**以查看可复制的代码，然后在 TOTP app 上手动输入。 ![单击输入此代码](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. The TOTP mobile application saves your account on {% data variables.product.product_location %} and generates a new authentication code every few seconds. 在 {% data variables.product.product_name %} 上，请在“Enter the six-digit code from the application（从应用程序输入六位数代码）”下的字段中输入代码。 如果您的恢复代码未自动显示，请单击 **Continue（继续）**。 ![TOTP 输入代码字段](/assets/images/help/2fa/2fa_wizard_app_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{%- else %}
5. 在双重身份验证页面上，单击 **Set up using an app（使用应用程序设置）**。
6. 将恢复代码保存在安全的位置。 在失去访问权限时，恢复代码可帮助您恢复帐户登录。
    - 要在设备上保存恢复代码，请单击 **Download（下载）**。
    - 要保存恢复代码的硬拷贝，请单击 **Print（打印）**。
    - 要复制恢复代码以存储在密码管理器中，请单击**复制**。 ![可选择下载、打印或复制代码的恢复代码列表](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)
7. 保存双重身份验证恢复代码后，单击 **Next（下一步）**。
8. 在双重身份验证页面上，执行以下操作之一：
    - 使用移动设备的应用程序扫描 QR 码。 扫描完成后，应用程序会显示六位数代码，您可以在 {% data variables.product.product_name %} 输入该代码。
    - 如果无法扫描 QR 码，请单击 **enter this text code（输入此文本代码）**以查看可复制的代码，然后在 {% data variables.product.product_name %} 上手动输入。 ![单击输入此代码](/assets/images/help/2fa/totp-click-enter-code.png)
9. The TOTP mobile application saves your account on {% data variables.product.product_location %} and generates a new authentication code every few seconds. 在 {% data variables.product.product_name %} 中的 2FA 页面上，键入代码并单击 **Enable（启用）**。 ![TOTP 启用字段](/assets/images/help/2fa/totp-enter-code.png)
{%- endif %}
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## 使用短信配置双重身份验证

如果无法使用 TOTP 移动应用程序进行身份验证，您可以使用短信进行身份验证。 也可以提供后备设备的号码作为第二号码。 在无法访问主设备和恢复代码时，可通过备用短信号码恢复帐户登录。

在使用此方法之前，请确保您可以接收短信。 运营商可能会收取短信费用。

{% warning %}

**警告：**我们**强烈建议**使用 TOTP 应用程序进行双重身份验证，而不是使用 SMS。 {% data variables.product.product_name %} 并非支持向每个国家/地区的手机发送短信。 通过短信配置身份验证之前，请查看 {% data variables.product.product_name %} 支持通过 SMS 验证的国家/地区列表。 更多信息请参阅“[支持 SMS 身份验证的国家/地区](/articles/countries-where-sms-authentication-is-supported)”。

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
{% data reusables.two_fa.enable-two-factor-authentication %}
4. 在“Two-factor authentication（双重身份验证）”下选择 **Set up using SMS（使用 SMS 设置）**并点击 **Continue（继续）**。
5. 在“Authentication verification（身份验证）”下，选择您的国家/地区代码并键入您的手机号码，包括区号。 确认信息无误后，单击 **Send authentication code（发送验证码）**。

  ![2FA SMS 屏幕](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. 您将收到含安全码的短信。 在 {% data variables.product.product_name %} 上，请在“Enter the six-digit code sent to your phone（输入发送到手机的六位数代码）”下的字段中输入代码，然后单击 **Continue（继续）**。

  ![2FA SMS 继续字段](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png)
{% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %}
{% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## 使用安全密钥配置双重身份验证

{% data reusables.two_fa.after-2fa-add-security-key %}

在大多数设备和浏览器上，您可以通过 USB 或 NFC 使用物理安全密钥。 某些浏览器可以使用设备上的指纹读取器、面部识别或密码/PIN 作为安全密钥。

安全密钥验证是 TOTP 应用程序{% ifversion fpt or ghec %} 或短信{% endif %}验证的*备用*选择。 如果您丢失了安全密钥，仍可以使用手机的代码进行登录。

1. 必须已通过 TOTP 移动应用程序{% ifversion fpt or ghec %} 或通过 SMS{% endif %} 配置了 2FA。
2. 确保您的计算机中已插入 WebAuthn 兼容安全密钥。
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
5. 在“Security keys（安全密钥）”旁边，单击 **添加**。 ![添加安全密钥选项](/assets/images/help/2fa/add-security-keys-option.png)
6. 在“Security keys（安全密钥）”下，单击 **Register new security key（注册新安全密钥）**。 ![注册新安全密钥](/assets/images/help/2fa/security-key-register.png)
7. 键入安全密钥的昵称，然后单击 **Add（添加）**。 ![为安全密钥提供昵称](/assets/images/help/2fa/security-key-nickname.png)
8. 按照安全密钥的文档激活安全密钥。 ![提示安全密钥](/assets/images/help/2fa/security-key-prompt.png)
9.  确认您已下载并且能够访问恢复代码。 如果尚未下载，或者要生成另一组代码，请下载代码并将其保存在安全位置。 如果无法访问自己的帐户，您可以使用恢复代码来恢复帐户访问。 更多信息请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。 ![下载恢复代码按钮](/assets/images/help/2fa/2fa-recover-during-setup.png)
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configuring two-factor authentication using {% data variables.product.prodname_mobile %}

You can use {% data variables.product.prodname_mobile %} for 2FA when signing into your {% data variables.product.prodname_dotcom %} account in a web browser. 2FA with {% data variables.product.prodname_mobile %} does not rely on TOTP, and instead uses public-key cryptography to secure your account.

Once you have configured a TOTP application, or SMS, you can also use {% data variables.product.prodname_mobile %} to authenticate. If, in the future, you no longer have access to {% data variables.product.prodname_mobile %}, you will still be able to use security keys or TOTP applications to sign in.

1. You must have already configured 2FA via a TOTP mobile app or via SMS.
2. Install [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Sign in to your {% data variables.product.product_name %} account from {% data variables.product.prodname_mobile %}.

After signing in, you can now use your device for 2FA.
{% endif %}

## 延伸阅读

- "[关于双重身份验证](/articles/about-two-factor-authentication)"
- "[配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)"
- “[使用双重身份验证访问 {% data variables.product.prodname_dotcom %}](/articles/accessing-github-using-two-factor-authentication)”。
- “[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”
- “[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
