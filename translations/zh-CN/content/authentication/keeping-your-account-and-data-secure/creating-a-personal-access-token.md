---
title: 创建个人访问令牌
intro: 您应该通过命令行或 API 创建个人访问令牌来代替密码。
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: 创建 PAT
---

{% note %}

**Note:** If you use {% data variables.product.prodname_cli %} to authenticate to {% data variables.product.product_name %} on the command line, you can skip generating a personal access token and authenticate via the web browser instead. For more information about authenticating with {% data variables.product.prodname_cli %}, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

在使用[GitHub API 或](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)命令[行](#using-a-token-on-the-command-line)时，可使用个人访问令牌 (PAT) 代替密码向 {% data variables.product.product_name %} 进行身份验证。

{% ifversion fpt %}如果要使用 PAT 访问使用 SAML SSO 的组织所拥有的资源，则必须授权 PAT。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”和“[授权个人访问令牌用于 SAML 单点登录](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”。{% endif %}

{% ifversion fpt %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

A token with no assigned scopes can only access public information. 要使用令牌从命令行访问仓库，请选择 `repo（仓库）`。 For more information, see “[Available scopes](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)”.

## 创建令牌

{% ifversion fpt %}1. [验证您的电子邮件地址](/github/getting-started-with-github/verifying-your-email-address)（如果尚未验证）。{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
{% data reusables.user_settings.generate_new_token %}
5. 给令牌一个描述性名称。 ![Token description field](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae-issue-4374 %}
6. To give your token an expiration, select the **Expiration** drop-down menu, then click a default or use the calendar picker. ![Token expiration field](/assets/images/help/settings/token_expiration.png){% endif %}
7. 选择要授予此令牌的作用域或权限。 要使用令牌从命令行访问仓库，请选择 **repo（仓库）**。
   {% ifversion fpt or ghes %}
   ![选择令牌作用域](/assets/images/help/settings/token_scopes.gif)
   {% elsif ghae %}
   ![选择令牌作用域](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
8. 单击 **Generate token（生成令牌）**。 ![生成令牌按钮](/assets/images/help/settings/generate_token.png)
   {% ifversion fpt %}
   ![新建的令牌](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif ghes > 3.1 or ghae-next %}
   ![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **警告：** 像对待密码一样对待您的令牌，确保其机密性。 使用 API 时，应将令牌用作环境变量，而不是将其硬编码到程序中。

   {% endwarning %}

{% ifversion fpt %}9. 要使用令牌向实施 SAML SSO 的组织验证，[请授权该令牌用于 SAML 单点登录组织](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)。{% endif %}

## 在命令行上使用令牌

{% data reusables.command_line.providing-token-as-password %}

个人访问令牌只能用于 HTTPS Git 操作。 如果您的仓库使用 SSH 远程 URL，则需要[将远程 URL 从 SSH 切换到 HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)。

如果没有提示您输入用户名和密码，说明您的凭据可能已缓存在计算机上。 您可以[在密钥链中更新您的凭据](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)，用令牌替换您的旧密码。

您可以使用 Git 客户端缓存 PAT，而不必为每个 HTTPS Git 操作手动输入 PAT。 Git 会将您的凭据临时存储在内存中，直到过期为止。 您还可以将令牌存储在 Git 可以在每个请求之前读取的纯文本文件中。 更多信息请参阅“[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)”。

## 延伸阅读

- "[About authentication to GitHub](/github/authenticating-to-github/about-authentication-to-github)"{% ifversion fpt or ghae-issue-4374 or ghes > 3.2 %}
- "[Token expiration and revocation](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"{% endif %}
