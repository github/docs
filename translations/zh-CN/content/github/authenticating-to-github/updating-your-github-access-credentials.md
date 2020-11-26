---
title: 更新 GitHub 访问凭据
intro: '{% data variables.product.product_name %} credentials include{% if currentVersion != "github-ae@latest" %} not only your password, but also{% endif %} the access tokens, SSH keys, and application API tokens you use to communicate with {% data variables.product.product_name %}. 如果您有需要，可以自行重置所有这些访问凭据。'
redirect_from:
  - /articles/rolling-your-credentials/
  - /articles/how-can-i-reset-my-password/
  - /articles/updating-your-github-access-credentials
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion != "github-ae@latest" %}
### 请求新密码

1. 要请求新密码，请访问 {% if currentVersion == "free-pro-team@latest" %}https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}。
2. 输入与您的个人 {% data variables.product.product_name %} 帐户关联的电子邮件地址，然后单击 **Send password reset email（发送密码重置电子邮件）**。如果您已配置，该电子邮件将发送到备用电子邮件地址。 ![密码重置电子邮件请求对话框](/assets/images/help/settings/password-recovery-email-request.png)
3. 我们将向您发送一封电子邮件，其中含有可让您重置密码的链接。 您必须在收到电子邮件后的 3 小时内单击此链接。 如果您没有收到来自我们的电子邮件，请确保检查垃圾邮件文件夹。
4. 单击电子邮件中的该链接后，系统将要求您输入新密码。 ![密码恢复框](/assets/images/help/settings/password_recovery_page.png)

{% tip %}

为避免将来丢失您的密码，我们建议使用安全密码管理器，如 [LastPass](https://lastpass.com/)、[1Password](https://1password.com/) 或 [Keeper](https://keepersecurity.com/)。

{% endtip %}

### 更改现有的密码

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %}到 {% data variables.product.product_name %}。
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
4. 在“Change password（更改密码）”下，输入旧密码、强新密码并确认新密码。 有关创建强密码的帮助，请参阅“[创建强密码](/articles/creating-a-strong-password)”
5. 单击 **Update password（更新密码）**。

{% tip %}

为实现更高的安全性，除了更改密码以外，还可启用双重身份验证。 有关更多详细信息，请参阅[关于双重身份验证](/articles/about-two-factor-authentication)。

{% endtip %}
{% endif %}
### 更新访问令牌

有关审查和删除访问令牌的说明，请参阅“[审查授权的集成](/articles/reviewing-your-authorized-integrations)”。 要生成新的访问令牌，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

### 更新 SSH 密钥

有关审查和删除 SSH 密钥的说明，请参阅“[审查 SSH 密钥](/articles/reviewing-your-ssh-keys)”。 要生成和添加新的 SSH 密钥，请参阅“[生成 SSH 密钥](/articles/generating-an-ssh-key)”。

### 重置 API 令牌

如果您向 {% data variables.product.product_name %} 注册了任何应用程序，则需要重置其 OAuth 令牌。 更多信息请参阅“[重置授权](/rest/reference/apps#reset-an-authorization)”端点。

{% if currentVersion != "github-ae@latest" %}
### 防止未授权的访问

有关保护您的帐户和阻止未授权访问的更多提示，请参阅“[阻止未授权的访问](/articles/preventing-unauthorized-access)”。
{% endif %}
