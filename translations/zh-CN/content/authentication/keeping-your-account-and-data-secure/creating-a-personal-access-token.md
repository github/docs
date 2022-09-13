---
title: 创建个人访问令牌
intro: 可以通过命令行或 API 创建个人访问令牌来代替密码。
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a PAT
ms.openlocfilehash: 437e06ba2fdf82252702106600ac6da73ee4c792
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064424'
---
{% note %}

**注意：**

- 如果在命令行上使用 {% data variables.product.prodname_cli %} 向 {% data variables.product.product_name %} 进行身份验证，可跳过生成个人访问令牌，并通过 Web 浏览器进行身份验证。 有关使用 {% data variables.product.prodname_cli %} 进行身份验证的详细信息，请参阅 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)。
-  [Git 凭据管理器](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md)是使用个人访问令牌 (PAT) 的安全跨平台替代方案，无需管理 PAT 范围和到期日期。 有关安装说明，请参阅 GitCredentialManager/git-credential-manager 存储库中的[下载和安装](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install)。

{% endnote %}

使用 [GitHub API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) 或[命令行](#using-a-token-on-the-command-line)时，可使用个人访问令牌 (PAT) 替代密码向 {% data variables.product.product_name %} 进行身份验证。

{% ifversion fpt or ghec %}如果要使用 PAT 访问使用 SAML SSO 的组织所拥有的资源，则必须授权 PAT。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于使用 SAML 单一登录进行身份验证](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”和“[授权个人访问令牌以用于 SAML 单一登录](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}”。{% endif %}{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

没有指定范围的令牌只能访问公共信息。 若要使用令牌从命令行访问存储库，请选择 `repo`。 有关详细信息，请参阅“[可用范围](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)”。

## 创建令牌

{% ifversion fpt or ghec %}1。 [验证电子邮件地址](/github/getting-started-with-github/verifying-your-email-address)（如果尚未验证）。{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
5. 给令牌一个描述性名称。
   ![令牌描述字段](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae or ghec %}
6. 若要为令牌提供到期时间，请选择“到期”下拉菜单，然后单击默认值或使用日历选择器。
   ![令牌到期字段](/assets/images/help/settings/token_expiration.png){% endif %}
7. 选择要授予此令牌的作用域或权限。 若要使用令牌从命令行访问存储库，请选择“存储库”。
   {% ifversion fpt or ghes or ghec %}![选择令牌范围](/assets/images/help/settings/token_scopes.gif){% elsif ghae %}![选择令牌范围](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png){% endif %}
8. 单击“生成令牌”。
   ![“生成令牌”按钮](/assets/images/help/settings/generate_token.png){% ifversion fpt or ghec %}![新建的令牌](/assets/images/help/settings/personal_access_tokens.png){% elsif ghes or ghae %}![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe.png){% else %}![新建的令牌](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %} {% warning %}

   警告：请将令牌视为密码，并保密。 使用 API 时，应将令牌用作环境变量，而不是将其硬编码到程序中。 

   {% endwarning %}

{% ifversion fpt or ghec %}9. 要使用您的令牌向使用 SAML 单点登录的组织验证，请对令牌进行授权。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[授权个人访问令牌以用于 SAML 单一登录](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}”。{% endif %}{% endif %}

## 在命令行上使用令牌

{% data reusables.command_line.providing-token-as-password %}

个人访问令牌只能用于 HTTPS Git 操作。 如果存储库使用 SSH 远程 URL，则需要[将远程 URL 从 SSH 切换到 HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https)。

如果没有提示您输入用户名和密码，说明您的凭据可能已缓存在计算机上。 可[在密钥链中更新凭据](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain)，从而用令牌替换旧密码。

您可以使用 Git 客户端缓存 PAT，而不必为每个 HTTPS Git 操作手动输入 PAT。 Git 会将您的凭据临时存储在内存中，直到过期为止。 您还可以将令牌存储在 Git 可以在每个请求之前读取的纯文本文件中。 有关详细信息，请参阅“[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)”。

## 延伸阅读

- [关于 GitHub 身份验证](/github/authenticating-to-github/about-authentication-to-github){% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- “[令牌过期和吊销](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)”{% endif %}
