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
shortTitle: Configure 2FA
ms.openlocfilehash: e7d6f4e9518bdd7ef7012e996f8ad72179711949
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063560'
---
你可以使用移动应用{% ifversion fpt or ghec %} 或通过短信{% endif %}配置双重身份验证。 您也可以添加安全密钥。

我们强烈建议使用基于时间的一次性密码 (TOTP) 应用程序来配置 2FA。{% ifversion fpt or ghec %} TOTP 应用程序比 SMS 更可靠，特别是对于美国以外的地区。{% endif %} TOTP 应用支持在云中安全备份你的验证码，并且在无法访问设备的情况下也可以进行还原。

{% warning %}

**警告：**
- 如果你是要求双重身份验证的组织中的成员{% ifversion fpt or ghec %}、账单管理员{% endif %}或其专用存储库的外部协作者，则必须离开该组织后才能在 {% data variables.product.product_location %} 上禁用 2FA。
- 如果禁用 2FA，您将自动失去对该组织以及您在该组织私有仓库中所拥有的任何私有复刻的访问权限。 要恢复对该组织和复刻的访问权限，请重新启用双重身份验证并联系组织所有者。

{% endwarning %}

{% ifversion fpt or ghec %}

如果你是{% data variables.product.prodname_emu_enterprise %}的成员，则无法为你的{% data variables.product.prodname_managed_user %}帐户配置 2FA，除非你以设置用户的身份登录。 对于除设置用户以外的用户，管理员必须针对你的标识提供者 (IdP) 配置 2FA。

{% endif %}

## 使用 TOTP 移动应用程序配置双重身份验证

基于时间的一次性密码 (TOTP) 应用程序可自动生成在特定时间后变化的验证码。 我们建议使用基于云的 TOTP 应用程序，例如：
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

提示：若要在多个设备上通过 TOTP 配置身份验证，请在设置过程中，同时使用每个设备扫描 QR 码。 如果已启用 2FA，但您要添加其他设备，则必须从安全设置中重新配置 2FA。

{% endtip %}

1. 下载 TOTP 应用程序。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes %}
5. 在“双重身份验证”下，选择“使用应用进行设置”，然后单击“继续” 。
6. 在“Authentication verification（身份验证）”下，执行以下操作之一：
    - 使用移动设备的应用程序扫描 QR 码。 扫描完成后，应用程序会显示六位数代码，您可以在 {% data variables.product.product_name %} 输入该代码。
    - 如果无法扫描 QR 码，请单击“输入此文本代码”以查看可在 TOTP 应用中手动输入的代码。
    ![单击“输入此代码”](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. TOTP 移动应用程序将保存您在 {% data variables.product.product_location %} 上的帐户并每隔几秒生成新的验证码。 在 {% data variables.product.product_name %} 上，请在“Enter the six-digit code from the application（从应用程序输入六位数代码）”下的字段中输入代码。 如果恢复代码未自动显示，请单击“继续”。
![TOTP 输入代码字段](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {%- else %}
5. 在“双重身份验证”页上，单击“使用应用进行设置”。
6. 将恢复代码保存在安全的位置。 在失去访问权限时，恢复代码可帮助您恢复帐户登录。
    - 若要将恢复代码保存在设备上，请单击“下载”。
    - 若要保存恢复代码的打印件，请单击“打印”。
    - 若要复制恢复代码以存储在密码管理器中，请单击“复制”。
    ![可选择下载、打印或复制代码的恢复代码列表](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)
7. 保存双重身份验证恢复代码后，单击“下一步”。
8. 在双重身份验证页面上，执行以下操作之一：
    - 使用移动设备的应用程序扫描 QR 码。 扫描完成后，应用程序会显示六位数代码，您可以在 {% data variables.product.product_name %} 输入该代码。
    - 如果无法扫描 QR 码，请单击“输入此文本代码”以查看可复制的代码，然后在 {% data variables.product.product_name %} 上手动输入。
    ![单击“输入此代码”](/assets/images/help/2fa/totp-click-enter-code.png)
9. TOTP 移动应用程序将保存您在 {% data variables.product.product_location %} 上的帐户并每隔几秒生成新的验证码。 在 {% data variables.product.product_name %} 中的 2FA 页面上，键入代码并单击“启用”。
    ![TOTP“启用”字段](/assets/images/help/2fa/totp-enter-code.png) {%- endif %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## 使用短信配置双重身份验证

如果无法使用 TOTP 移动应用程序进行身份验证，您可以使用短信进行身份验证。 也可以提供后备设备的号码作为第二号码。 在无法访问主设备和恢复代码时，可通过备用短信号码恢复帐户登录。

在使用此方法之前，请确保您可以接收短信。 运营商可能会收取短信费用。

{% warning %}

警告：我们强烈建议使用 TOTP 应用程序进行双重身份验证，而不是使用 SMS 。 {% data variables.product.product_name %} 并非支持向每个国家/地区的手机发送短信。 通过短信配置身份验证之前，请查看 {% data variables.product.product_name %} 支持通过 SMS 验证的国家/地区列表。 有关详细信息，请参阅“[支持 SMS 身份验证的国家/地区](/articles/countries-where-sms-authentication-is-supported)”。

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. 在“双重身份验证”下，选择“使用 SMS 进行设置”，然后单击“继续” 。
5. 在“Authentication verification（身份验证）”下，选择您的国家/地区代码并键入您的手机号码，包括区号。 确认信息无误后，单击“发送验证码”。

  ![2FA SMS 屏幕](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. 您将收到含安全码的短信。 在 {% data variables.product.product_name %} 上，请在“输入发送到手机的六位数代码”下的字段中键入代码，然后单击“继续”。

  ![2FA SMS“继续”字段](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## 使用安全密钥配置双重身份验证

{% data reusables.two_fa.after-2fa-add-security-key %}

在大多数设备和浏览器上，您可以通过 USB 或 NFC 使用物理安全密钥。 某些浏览器可以使用设备上的指纹读取器、面部识别或密码/PIN 作为安全密钥。

使用安全密钥进行身份验证是使用 TOTP 应用程序{% ifversion fpt or ghec %}或短信进行身份验证的备用选择{% endif %}。 如果您丢失了安全密钥，仍可以使用手机的代码进行登录。

1. 必须已通过 TOTP 移动应用{% ifversion fpt or ghec %} 或通过 SMS{% endif %} 配置了 2FA。
2. 确保您的计算机中已插入 WebAuthn 兼容安全密钥。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. 在“安全密钥”旁边，单击“添加”。
  ![添加安全密钥选项](/assets/images/help/2fa/add-security-keys-option.png)
6. 在“安全密钥”下，单击“注册新安全密钥”。
  ![注册新安全密钥](/assets/images/help/2fa/security-key-register.png)
7. 键入安全密钥的昵称，然后单击“添加”。
  ![为安全密钥提供昵称](/assets/images/help/2fa/security-key-nickname.png)
8. 按照安全密钥的文档激活安全密钥。
  ![提示输入安全密钥](/assets/images/help/2fa/security-key-prompt.png)
9.  确认您已下载并且能够访问恢复代码。 如果尚未下载，或者要生成另一组代码，请下载代码并将其保存在安全位置。 如果无法访问自己的帐户，您可以使用恢复代码来恢复帐户访问。 有关详细信息，请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。
    ![“下载恢复代码”按钮](/assets/images/help/2fa/2fa-recover-during-setup.png) {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## 使用 {% data variables.product.prodname_mobile %} 配置双重身份验证

在 Web 浏览器中登录 {% data variables.product.prodname_dotcom %} 帐户时，您可以使用 {% data variables.product.prodname_mobile %} 进行双重身份验证。 向 {% data variables.product.prodname_mobile %} 进行双重身份验证不依赖于 TOTP，而是使用公钥加密来保护您的帐户。

配置 TOTP 应用程序或 SMS 后，您还可以使用 {% data variables.product.prodname_mobile %} 进行身份验证。 如果将来您不再有权访问 {% data variables.product.prodname_mobile %}，您仍然可以使用安全密钥或 TOTP 应用程序登录。

1. 您必须已经通过 TOTP 移动应用程序或短信配置双重身份验证。
2. 安装 [{% data variables.product.prodname_mobile %}](https://github.com/mobile)。
3. 从 {% data variables.product.prodname_mobile %} 登录到您的 {% data variables.product.product_name %} 帐户。

登录后，您现在可以将设备用于 2FA。
{% endif %}

## 延伸阅读

- [关于双因素身份验证](/articles/about-two-factor-authentication)
- [配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)
- [使用双重身份验证访问 {% data variables.product.prodname_dotcom %}](/articles/accessing-github-using-two-factor-authentication)
- [丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
- [创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)
