---
title: 使用双重身份验证访问 GitHub
intro: '启用 2FA 后，在登录到 {% data variables.product.product_name %} 时需要提供 2FA 验证码以及密码。'
redirect_from:
  - /articles/providing-your-2fa-security-code/
  - /articles/providing-your-2fa-authentication-code/
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc/
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2FA
---

启用双重身份验证后，您在通过浏览器访问 {% data variables.product.product_name %} 时需要提供验证码。 如果使用其他方法访问 {% data variables.product.product_name %}，如 API 或命令行，则需要使用其他形式的身份验证。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 向验证身份](/github/authenticating-to-github/about-authentication-to-github)”。

### 登录网站时提供 2FA 码

在使用密码登录 {% data variables.product.product_name %} 后，系统会提示您提供{% if currentVersion == "free-pro-team@latest" %}短信或{% endif %} TOTP 应用程序中的验证码。

{% data variables.product.product_name %} 仅在您注销后、使用新设备或会话过期时才会要求您再次提供 2FA 验证码。

#### 通过 TOTP 应用程序生成代码

如果选择使用 TOTP 应用程序在智能手机上设置双重身份验证，可随时为 {% data variables.product.product_name %} 生成验证码。 大多数情况下，只有启动应用程序才会生成新代码。 具体说明请参阅应用程序的文档。

如果在配置双重身份验证后删除移动应用程序，则需要提供恢复代码才可访问您的帐户。 更多信息请参阅“[丢失双重身份验证凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”

{% if currentVersion == "free-pro-team@latest" %}

#### 接收短信

如果设置通过短信进行双重身份验证，{% data variables.product.product_name %} 将通过短信向您发送验证码。

{% endif %}

### 通过命令行使用双重身份验证

在启用 2FA 后，您在命令行上访问 {% data variables.product.product_name %} 时必须使用个人访问令牌或 SSH 密钥，而不是密码。

#### 在命令行上使用 HTTPS 验证

启用 2FA 后，必须创建个人访问令牌以用作在命令行上使用 HTTPS URL 向 {% data variables.product.product_name %} 验证时的密码。

当命令行上提供用户名和密码时，使用您的 {% data variables.product.product_name %} 用户名和个人访问令牌。 命令行提示不会指出在要求密码时您应输入个人访问令牌。

更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

#### 在命令行上使用 SSH 验证

启用 2FA 不会更改您在命令行上使用 SSH URL 向 {% data variables.product.product_name %} 验证的方式。 有关设置和使用 SSH 密钥的更多信息，请参阅“[通过 SSH 连接 {% data variables.product.prodname_dotcom %}](/articles/connecting-to-github-with-ssh/)”。

### 使用双重身份验证通过 Subversion 访问仓库

通过 Subversion 访问仓库时，必须提供个人人访问令牌，而不是输入密码。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

### 疑难解答

如果失去对双重身份验证凭据的访问，您可以使用恢复代码或其他恢复方式（如已设置）重新获取对帐户的访问。 更多信息请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。

如果身份验证失败多次，您可能要与移动提供商同步手机的时钟。 通常，这需要在手机的时钟上选中 "Set automatically"（自动设置）选项，而不是提供自己的时区。

### 延伸阅读

- "[关于双重身份验证](/articles/about-two-factor-authentication)"
- "[配置双重身份验证](/articles/configuring-two-factor-authentication)"
- "[配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[丢失双重身份验证凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
