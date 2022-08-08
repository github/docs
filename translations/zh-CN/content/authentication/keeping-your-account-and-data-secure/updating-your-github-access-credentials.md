---
title: 更新 GitHub 访问凭据
intro: '{% data variables.product.product_name %} 凭据不仅{% ifversion not ghae %}包括密码，还{% endif %}包括您用于与 {% data variables.product.product_name %} 通信的访问令牌、SSH 密钥和应用程序 API 令牌。 如果您有需要，可以自行重置所有这些访问凭据。'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 更新访问凭据
---

{% ifversion not ghae %}
## 请求新密码

1. 要请求新密码，请访问 {% ifversion fpt or ghec %}https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}。
2. 输入与您在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上的帐户关联的电子邮件地址，然后单击“**Send password reset email（发送密码重置电子邮件）**。如果您配置了备份电子邮件地址，则电子邮件将发送到备份电子邮件地址。 ![密码重置电子邮件请求对话框](/assets/images/help/settings/password-recovery-email-request.png)
3. 我们将向您发送一封电子邮件，其中含有可让您重置密码的链接。 您必须在收到电子邮件后的 3 小时内单击此链接。 如果您没有收到来自我们的电子邮件，请确保检查垃圾邮件文件夹。
4. 如果您启用了双重身份验证，将提示您获得 2FA 凭据：
{% ifversion fpt or ghec %}
   * 如果您有 {% data variables.product.prodname_mobile %}，您将收到一个推送通知以验证您的身份。 打开推送通知或 {% data variables.product.prodname_mobile %} 应用程序，然后输入浏览器密码重置页面上显示给您的两位数代码。 ![双重 {% data variables.product.prodname_mobile %} 身份验证提示](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * 要跳过使用 GitHub Mobile 进行验证，请单击 **Enter two-factor authentication or recovery code（输入双重身份验证或恢复代码）**。 ![{% data variables.product.product_name %} 上的双重 GitHub Mobile 身份验证提示， 突出显示"输入双重身份验证或恢复代码"](/assets/images/help/2fa/2fa-github-mobile-password-reset.png)
{% endif %}
   * 键入您的身份验证代码或恢复代码之一，然后单击 **Verify（验证）**。 ![双重身份验证提示](/assets/images/help/2fa/2fa-password-reset.png)
     * 如果您已向帐户添加了安全密钥，则单击 **Use security key（使用安全密钥）**，而无需键入身份验证码。
     {% ifversion fpt or ghec %}
     * 如果已设置 [{% data variables.product.prodname_mobile %}](https://github.com/mobile)，请单击 **Authenticate with GitHub Mobile（通过 GitHub Mobile 进行身份验证）**。
     {% endif %}
5. 键入新密码，确认新密码，然后单击 **Change password（更改密码）**。 有关创建强密码的帮助，请参阅“[创建强密码](/articles/creating-a-strong-password)”
  {% ifversion fpt or ghec %}![Password recovery box](/assets/images/help/settings/password-recovery-page.png){% else %}
  ![密码恢复框](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

为避免将来丢失您的密码，我们建议使用安全密码管理器，如 [LastPass](https://lastpass.com/) 或 [1Password](https://1password.com/)。

{% endtip %}

## 更改现有的密码

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %}到 {% data variables.product.product_name %}。
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
4. 在“Change password（更改密码）”下，输入旧密码、强新密码并确认新密码。 有关创建强密码的帮助，请参阅“[创建强密码](/articles/creating-a-strong-password)”
5. 单击 **Update password（更新密码）**。

{% tip %}

为实现更高的安全性，除了更改密码以外，还可启用双重身份验证。 有关更多详细信息，请参阅[关于双重身份验证](/articles/about-two-factor-authentication)。

{% endtip %}
{% endif %}
## 更新访问令牌

有关审查和删除访问令牌的说明，请参阅“[审查授权的集成](/articles/reviewing-your-authorized-integrations)”。 要生成新的访问令牌，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

{% ifversion not ghae %}

如果您已重置帐户密码，并且还想触发从 {% data variables.product.prodname_mobile %} 应用程序注销，则可以撤销对“GitHub iOS”或“GitHub Android”OAuth 应用程序 的授权。 这将注销与您的帐户关联的 {% data variables.product.prodname_mobile %} 应用程序的所有实例。 有关其他信息，请参阅“[>审查授权的集成](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)”。

{% endif %}

## 更新 SSH 密钥

有关审查和删除 SSH 密钥的说明，请参阅“[审查 SSH 密钥](/articles/reviewing-your-ssh-keys)”。 要生成和添加新的 SSH 密钥，请参阅“[生成 SSH 密钥](/articles/generating-an-ssh-key)”。

## 重置 API 令牌

如果您向 {% data variables.product.product_name %} 注册了任何应用程序，则需要重置其 OAuth 令牌。 更多信息请参阅“[重置授权](/rest/reference/apps#reset-an-authorization)”端点。

{% ifversion not ghae %}
## 防止未授权的访问

有关保护您的帐户和阻止未授权访问的更多提示，请参阅“[阻止未授权的访问](/articles/preventing-unauthorized-access)”。
{% endif %}
