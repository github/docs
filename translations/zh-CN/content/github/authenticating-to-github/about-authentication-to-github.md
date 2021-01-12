---
title: 关于向 GitHub 验证
intro: '您可以根据身份验证位置使用不同的凭据，向 {% data variables.product.product_name %} 验证来安全地访问帐户的资源。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于 {% data variables.product.prodname_dotcom %} 向验证身份

为确保帐户安全，必须先进行身份验证，然后才能访问 {% data variables.product.product_name %} 上的{% if currentVersion != "github-ae@latest" %}某些{% endif %}资源。 向 {% data variables.product.product_name %} 验证时，您提供或确认您唯一的凭据，以证明您就是声明者。

您可以通过多种方式访问 {% data variables.product.product_name %} 中的资源：浏览器中、通过 {% data variables.product.prodname_desktop %} 或其他桌面应用程序、使用 API 或通过命令行。 每种访问 {% data variables.product.product_name %} 的方式都支持不同的身份验证模式。

- {% if currentversion == "github-ae@latest" %}您的身份提供程序 (IdP){% else %}使用双重身份验证的用户名和密码{% endif %}
- 个人访问令牌
- SSH 密钥

### 在浏览器中进行身份验证

您可以 {% if currentVersion == "github-ae@latest" %}使用 IdP 在浏览器中向 {% data variables.product.product_name %} 验证。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”{% else %}。

- **仅用户名和密码**
    - 在 {% data variables.product.product_name %} 上创建用户帐户时，您将创建一个密码。 我们建议您使用密码管理器生成随机且唯一的密码。 更多信息请参阅“[创建强式密码](/github/authenticating-to-github/creating-a-strong-password)”。
- **双重身份验证 (2FA)**（推荐）
    - 如果您启用 2FA，我们还将提示您提供应用程序在移动设备上生成的代码，或在您成功输入用户名和密码后以短信 (SMS) 方式发送的代码。 更多信息请参阅“[使用双重身份验证访问 {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)”。
    - 除了使用移动应用程序或短信进行身份验证外，您还可以选择使用 WebAuthn 添加采用安全密钥的辅助身份验证方法。 更多信息请参阅“[使用安全密钥配置双重身份验证](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。
{% endif %}

### 向 {% data variables.product.prodname_desktop %} 验证身份

您可以使用浏览器向 {% data variables.product.prodname_desktop %} 验证身份。 更多信息请参阅“[向 {% data variables.product.prodname_dotcom %} 验证](/desktop/getting-started-with-github-desktop/authenticating-to-github)”。

### 使用 API 验证身份

您可以通过不同方式使用 API 进行身份验证。

- **个人访问令牌**
    - 在有限的情况（如测试）下可以使用个人访问令牌访问 API。 使用个人访问令牌可让您随时撤销访问。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
- **Web 应用程序流程**
    - 对于生产中的 OAuth 应用程序，应使用 Web 应用程序流程进行身份验证。 更多信息请参阅“[授权 OAuth 应用程序](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)”。
- **GitHub 应用程序**
    - 对于生产中的 GitHub 应用程序，您应代表应用安装进行身份验证。 更多信息请参阅“[向 {% data variables.product.prodname_github_apps %} 验证](/apps/building-github-apps/authenticating-with-github-apps/)”。

### 使用命令行进行身份验证

您可以通过两种方式从命令行访问 {% data variables.product.product_name %} 上的仓库：HTTPS 和 SSH ，两者采用不同的身份验证。 验证方法取决于克隆仓库时您是选择 HTTPS 还是 SSH 远程 URL。 有关使用哪种访问方式的更多信息，请参阅“[我应该使用哪个远程 URL？](/github/using-git/which-remote-url-should-i-use)”

* 即使您在防火墙或代理后面，也可以通过 HTTPS 处理 {% data variables.product.product_name %} 上的所有仓库。 除非您使用[凭据小助手](/github/using-git/caching-your-github-credentials-in-git)缓存了凭据，否则每次使用 Git 向 {% data variables.product.product_name %} 验证时，系统都会提示您输入凭据以向 {% data variables.product.product_name %} 验证。 {% data reusables.user_settings.password-authentication-deprecation %}

* 您可以通过 SSH 处理 {% data variables.product.product_name %} 上的所有仓库，尽管防火墙和代理可能拒绝允许 SSH 连接。 使用 SSH 需要在本地计算机上生成 SSH 公钥/私密对，并将公钥添加到 {% data variables.product.product_name %} 帐户。 除非您已[存储密钥](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)，否则每次使用 Git 向 {% data variables.product.product_name %} 验证时，系统都会提示您输入 SSH 密钥密码短语。 更多信息请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% if currentVersion == "free-pro-team@latest" %}要使用个人访问令牌或 SSH 密钥访问由使用 SAML 单点登录的组织所拥有的资源，还必须授权个人令牌或 SSH 密钥。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”或“[授权 SSH 密钥用于 SAML 单点登录](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。{% endif %}
