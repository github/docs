---
title: 创建个人访问令牌
intro: 您应该通过命令行或 API 创建个人访问令牌来代替密码。
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

在使用[GitHub API 或](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)命令[行](#using-a-token-on-the-command-line)时，可使用个人访问令牌 (PAT) 代替密码向 {% data variables.product.product_name %} 进行身份验证。

{% if currentVersion == "free-pro-team@latest" %}如果要使用 PAT 访问使用 SAML SSO 的组织所拥有的资源，则必须授权 PAT。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/articles/about-authentication-with-saml-single-sign-on)”和“[授权个人访问令牌用于 SAML 单点登录](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### 创建令牌

{% if currentVersion == "free-pro-team@latest" %}1. [验证您的电子邮件地址](/articles/verifying-your-email-address)（如果尚未验证）。{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. 单击 **Generate new token（生成新令牌）**。 ![生成新令牌按钮](/assets/images/help/settings/generate_new_token.png)
5. 给令牌一个描述性名称。 ![令牌说明字段](/assets/images/help/settings/token_description.png)
6. 选择要授予此令牌的作用域或权限。 要使用令牌从命令行访问仓库，请选择 **repo（仓库）**。
   {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
   ![选择令牌作用域](/assets/images/help/settings/token_scopes.gif)
   {% elsif currentVersion == "github-ae@latest" %}
   ![选择令牌作用域](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
7. 单击 **Generate token（生成令牌）**。 ![生成令牌按钮](/assets/images/help/settings/generate_token.png)
8. 单击
{% octicon "clippy" aria-label="The copy to clipboard icon" %} 以将令牌复制到剪贴板。 出于安全原因，在离开页面后，您将无法再次看到令牌。
   {% if currentVersion == "free-pro-team@latest" %}
   ![新建的令牌](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
   ![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}

   {% warning %}

   **警告：** 像对待密码一样对待您的令牌，确保其机密性。 使用 API 时，应将令牌用作环境变量，而不是将其硬编码到程序中。

   {% endwarning %}
{% if currentVersion == "free-pro-team@latest" %}9. 要使用令牌向实施 SAML SSO 的组织验证，[请授权该令牌用于 SAML 单点登录组织](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)。{% endif %}

### 在命令行上使用令牌

{% data reusables.command_line.providing-token-as-password %}

个人访问令牌只能用于 HTTPS Git 操作。 如果您的仓库使用 SSH 远程 URL，则需要[将远程 URL 从 SSH 切换到 HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)。

如果没有提示您输入用户名和密码，说明您的凭据可能已缓存在计算机上。 您可以[在密钥链中更新您的凭据](/articles/updating-credentials-from-the-osx-keychain)，用令牌替换您的旧密码。

### 延伸阅读

- “[关于向 GitHub 验证身份](/github/authenticating-to-github/about-authentication-to-github)”
