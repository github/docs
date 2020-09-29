---
title: 丢失 2FA 凭据时恢复帐户
intro: 如果无法访问双重身份验证凭据，您可以使用恢复代码或其他恢复选项重新获取对帐户的访问权限。
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials/
  - /articles/authenticating-with-an-account-recovery-token/
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**警告**：{% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

### 使用双因素身份验证恢复代码

使用您的恢复代码之一自动重新进入您的帐户。 您可能已将恢复代码保存到密码管理器或计算机的下载文件夹中。 恢复代码的默认文件名为 `github-recovery-codes.txt`。 有关恢复代码的更多信息，请参阅“[配置双因素身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)”。

{% data reusables.two_fa.username-password %}{% if currentVersion == "free-pro-team@latest" %}
2. 在“Having Problems?（有问题？）”下，单击 **Enter a two-factor recovery code（输入双重恢复代码）**。 ![Link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png){% else %}
2. 在 2FA 页面上的“Don't have your phone?（没有您的电话？）”下，单击 **Enter a two-factor recovery code（输入双因素恢复代码）**。 ![Link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
3. 输入恢复代码之一，然后单击 **Verify（验证）**。 ![输入恢复代码的字段和验证按钮](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% if currentVersion == "free-pro-team@latest" %}
### 使用后备号码进行身份验证

如果无法访问主要 TOTP 应用程序或电话号码，则可以提供发送到后备号码的双因素身份验证码，以自动重新获得对帐户的访问权限。
{% endif %}

### 使用安全密钥进行身份验证

如果您使用安全密钥配置双重身份验证，则可以使用安全密钥作为辅助身份验证方法来自动重新获得对帐户的访问权限。 更多信息请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。

{% if currentVersion == "free-pro-team@latest" %}
### 使用经过验证的设备、SSH 令牌或个人访问令牌进行身份验证
如果您无法访问双重身份验证凭据，并且没有双重身份验证恢复代码，则可以将一次性密码发送到经验证的电子邮件地址，以开始验证过程，重新获得对帐户的访问权限。

{% note %}

**注**：出于安全原因，使用一次性密码验证来重新获得帐户访问权限可能需要 3-5 个工作日。 在此期间提交的其他请求将不予审查。

{% endnote %}

在这 3-5 天的等待期内，您随时可以使用双重身份验证凭据或双重身份验证恢复代码重新获得对帐户的访问权限。

{% data reusables.two_fa.username-password %}
2. 在“Having Problems?（有问题？）”下，单击 **Can't access your two factor device or valid recovery codes?（无法访问双重设备或有效的恢复代码？）**。 ![没有 2fa 设备或恢复码时的链接](/assets/images/help/2fa/no-access-link.png)
3. 单击 **I understand, get started（我理解，开始）**请求重置身份验证设置。 ![重置身份验证设置按钮](/assets/images/help/2fa/reset-auth-settings.png)
4. 单击 **Send one-time password（发送一次性密码）**向与您的帐户关联的所有电子邮件地址发送一次性密码。 ![发送一次性密码按钮](/assets/images/help/2fa/send-one-time-password.png)
5. 在“One-time password（一次性密码）”下，键入恢复电子邮件 {% data variables.product.prodname_dotcom %} 发送的临时密码。 ![一次性密码字段](/assets/images/help/2fa/one-time-password-field.png)
6. 单击 **Verify email address（验证电子邮件地址）**。
7. 选择替代验证因素。
    - 如果您之前已经使用当前设备登录此帐户，并且想使用该设备进行验证，请单击 **Verify this device（验证此设备）**。
    - 如果您之前已在此帐户上设置 SSH 密钥，并且想使用此 SSH 密钥进行验证，请单击 **SSH key（SSH 密钥）**。
    - 如果您之前已经设置个人访问令牌，并且想使用个人访问令牌进行验证，请单击 **Personal access token（个人访问令牌）**。 ![替代验证按钮](/assets/images/help/2fa/alt-verifications.png)
8. {% data variables.contact.github_support %} 的成员将在 3-5 个工作日内审查您的请求并给您发送电子邮件。 如果您的请求获得批准，您将收到一个完成帐户恢复过程的链接。 如果您的请求被拒绝，电子邮件将说明就任何其他问题联系支持的方式。

### 使用帐户恢复令牌进行身份验证

如果无法访问 {% data variables.product.product_name %} 帐户的双因素身份验证方法，您可以从合作伙伴的恢复提供程序提取帐户恢复令牌，并请求 {% data variables.product.prodname_dotcom %} 支持人员进行审查。

如果您无法访问双因素身份验证方法或恢复代码，并且已通过 Facebook 使用“异地恢复帐户”存储帐户恢复令牌，则可以使用您的令牌重新获得对帐户的访问权限。

如果无法重新获得对帐户的访问权限，请生成一次性密码以重新获得访问权限。 更多信息请参阅“[使用经过验证的设备、SSH 令牌或个人访问令牌进行身份验证](#authenticating-with-a-verified-device-ssh-token-or-personal-access-token)”。

{% warning %}

**警告：**
- 提取帐户恢复令牌之前，您应尝试使用[双因素身份验证码](/articles/accessing-github-using-two-factor-authentication)或双因素身份验证恢复代码重新获得对帐户的访问权限。 更多信息请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。

{% endwarning %}

1. 在 Facebook 中，导航到 [Security Settings（安全设置）](https://www.facebook.com/settings?tab=security)，然后单击 **Recover Accounts Elsewhere（异地恢复帐户）**。 ![含有异地恢复帐户链接的 Facebook 安全设置页面](/assets/images/help/settings/security-facebook-security-settings-page.png)
2. 单击与您的 {% data variables.product.product_name %} 帐户关联的恢复令牌。 ![Facebook 中存储的恢复令牌列表](/assets/images/help/settings/security-github-rae-token-on-facebook.png)
3. 要取回帐户恢复令牌，请单击 **Recover This Account（恢复此帐户）**。 此时将打开一个新窗口，将您返回到 {% data variables.product.product_name %}。 ![含有恢复令牌相关信息的模态框和恢复此帐户按钮](/assets/images/help/settings/security-recover-account-facebook.png)
4. 联系 {% data variables.contact.contact_support %}，告知他们您的帐户恢复令牌已准备好进行审查。
{% endif %}

### 延伸阅读

- "[关于双重身份验证](/articles/about-two-factor-authentication)"
- "[配置双重身份验证](/articles/configuring-two-factor-authentication)"
- "[配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)"
- “[使用双重身份验证访问 {% data variables.product.prodname_dotcom %}](/articles/accessing-github-using-two-factor-authentication)”。
