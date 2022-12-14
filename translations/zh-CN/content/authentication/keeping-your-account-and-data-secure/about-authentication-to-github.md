---
title: 关于向 GitHub 验证
intro: '您可以根据身份验证位置使用不同的凭据，向 {% data variables.product.product_name %} 验证来安全地访问帐户的资源。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
ms.openlocfilehash: d40d3e18c75c2e5d8f16ebbb4fd9b6fdf03e2a73
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718091'
---
## 关于 {% data variables.product.prodname_dotcom %} 向验证身份

为确保帐户安全，必须先进行身份验证，然后才能访问 {% data variables.product.product_name %} 上的{% ifversion not ghae %}某些{% endif %}资源。 向 {% data variables.product.product_name %} 验证时，您提供或确认您唯一的凭据，以证明您就是声明者。

您可以通过多种方式访问 {% data variables.product.product_name %} 中的资源：浏览器中、通过 {% data variables.product.prodname_desktop %} 或其他桌面应用程序、使用 API 或通过命令行。 每种访问 {% data variables.product.product_name %} 的方式都支持不同的身份验证模式。
{%- ifversion not fpt %}
- 标识提供者 (IdP){% endif %}{% ifversion not ghae %}
- 用于双因素身份验证的用户名和密码{% endif %}
- 个人访问令牌
- SSH 密钥

## 在浏览器中进行身份验证

{% ifversion ghae %}

你可以使用 IdP 在浏览器中向 {% data variables.product.product_name %} 验证。 有关详细信息，请参阅“[关于通过 SAML 单一登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”。

{% else %}

{% ifversion fpt or ghec %}

如果您是 {% data variables.product.prodname_emu_enterprise %} 的成员，您将使用 IdP 在浏览器中向 {% data variables.product.product_name %} 验证。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[作为托管用户进行身份验证](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %}”。{% else %}."{% endif %} 

如果你不是 {% data variables.product.prodname_emu_enterprise %} 的成员，你将使用 {% data variables.product.prodname_dotcom_the_website %} 用户名和密码进行身份验证。 还可以使用双因素身份验证和 SAML 单一登录，组织和企业所有者可能需要这一点。

{% else %}

你可以在浏览器中以多种方式向 {% data variables.product.product_name %} 验证。

{% endif %}

- **仅用户名和密码**
    - 在 {% data variables.product.product_name %} 上创建帐户时，你将创建一个密码。 我们建议您使用密码管理器生成随机且唯一的密码。 有关详细信息，请参阅“[创建强密码](/github/authenticating-to-github/creating-a-strong-password)”。{% ifversion fpt or ghec %}
  - 如果未启用 2FA，{% data variables.product.product_name %} 将在首次从无法识别的设备（例如新浏览器配置文件、已删除 Cookie 的浏览器或新计算机）登录时请求其他验证。

   提供用户名和密码后，系统将要求你提供一个验证码，我们会通过电子邮件发送给你。 如果已安装 {% data variables.product.prodname_mobile %} 应用程序，则将改为收到通知。 有关详细信息，请参阅“[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)”。{% endif %}
- **双因素身份验证 (2FA)** （推荐）
    - 如果你启用 2FA，则在成功输入用户名和密码后，我们还将提示你提供基于时间的一次性密码 (TOTP) 应用程序在移动设备{% ifversion fpt or ghec %}上生成的代码或以短信 (SMS){% endif %} 形式发送的代码。 有关详细信息，请参阅“[使用双因素身份验证访问 {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)”。
    - 除了使用 TOTP 应用程序{% ifversion fpt or ghec %}或短信{% endif %}进行身份验证外，你还可以选择使用 WebAuthn 添加采用{% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %}或{% endif %}安全密钥的备用身份验证方法。 有关详细信息，请参阅 {% ifversion fpt or ghec %}“[使用 {% data variables.product.prodname_mobile %} 配置双因素身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)”和 {% endif %}“[使用安全密钥配置双因素身份验证](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。{% ifversion ghes %}
- **外部身份验证**
  - 站点管理员可以将 {% data variables.product.product_location %} 配置为使用外部身份验证，而不是用户名和密码。 有关详细信息，请参阅“[外部身份验证方法](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)”。{% endif %}{% ifversion fpt or ghec %}
- **SAML 单一登录**
  - 在可以访问使用 SAML 单一登录的组织或企业帐户拥有的资源之前，可能还需要通过 IdP 进行身份验证。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于使用 SAML 单一登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}."{% endif %}{% endif %}

{% endif %}

## 向 {% data variables.product.prodname_desktop %} 验证身份
您可以使用浏览器向 {% data variables.product.prodname_desktop %} 验证身份。 有关详细信息，请参阅“[向 {% data variables.product.prodname_dotcom %} 进行身份验证](/desktop/getting-started-with-github-desktop/authenticating-to-github)”。

## 使用 API 验证身份

您可以通过不同方式使用 API 进行身份验证。

- **个人访问令牌**
    - 在有限的情况（如测试）下可以使用个人访问令牌访问 API。 使用个人访问令牌可让您随时撤销访问。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
- **Web 应用程序流程**
    - 对于生产中的 OAuth 应用程序，应使用 Web 应用程序流程进行身份验证。 有关详细信息，请参阅“[授权 OAuth 应用](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)”。
- **GitHub 应用**
    - 对于生产中的 GitHub 应用程序，您应代表应用安装进行身份验证。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/apps/building-github-apps/authenticating-with-github-apps/)”。

## 使用命令行进行身份验证

您可以通过两种方式从命令行访问 {% data variables.product.product_name %} 上的仓库：HTTPS 和 SSH ，两者采用不同的身份验证。 验证方法取决于克隆仓库时您是选择 HTTPS 还是 SSH 远程 URL。 有关访问方式的详细信息，请参阅“[关于远程存储库](/github/getting-started-with-github/about-remote-repositories)”。

### HTTPS

即使您在防火墙或代理后面，也可以通过 HTTPS 处理 {% data variables.product.product_name %} 上的所有仓库。

如果您使用 {% data variables.product.prodname_cli %} 进行身份验证，您可以使用个人访问令牌或通过 Web 浏览器进行身份验证。 有关使用 {% data variables.product.prodname_cli %} 进行身份验证的详细信息，请参阅 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)。

如果您不使用 {% data variables.product.prodname_cli %} 进行身份验证，则必须使用个人访问令牌进行身份验证。 {% data reusables.user-settings.password-authentication-deprecation %}除非你使用[凭据小助手](/github/getting-started-with-github/caching-your-github-credentials-in-git)缓存了凭据，否则每次使用 Git 向 {% data variables.product.product_name %} 验证时，系统都会提示你输入凭据以向 {% data variables.product.product_name %} 验证。

### SSH

您可以通过 SSH 处理 {% data variables.product.product_name %} 上的所有仓库，尽管防火墙和代理可能拒绝允许 SSH 连接。

如果您使用 {% data variables.product.prodname_cli %} 进行身份验证，CLI 会在您的机器上找到 SSH 公共密钥，并提示您选择一个用于上传。 如果 {% data variables.product.prodname_cli %} 找不到用于上传的 SSH 公钥，则可以生成新的 SSH 公钥/私钥对，并将公钥上传到您在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户。 然后，您可以使用个人访问令牌进行身份验证，也可以通过 Web 浏览器进行身份验证。 有关使用 {% data variables.product.prodname_cli %} 进行身份验证的详细信息，请参阅 [`gh auth login`](https://cli.github.com/manual/gh_auth_login)。

如果您在没有 {% data variables.product.prodname_cli %} 的情况下进行身份验证，则需要在本地计算机上生成 SSH 公钥/私钥对，并将公钥添加到您在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户。 有关详细信息，请参阅“[生成新的 SSH 密钥并将其添加到 ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。 除非你已[存储密钥](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)，否则每次使用 Git 向 {% data variables.product.product_name %} 进行身份验证时，系统都会提示你输入 SSH 密钥密码。

{% ifversion fpt or ghec %}
### SAML 单点登录授权

若要使用个人访问令牌或 SSH 密钥访问由使用 SAML 单一登录的组织所拥有的资源，还必须授权个人令牌或 SSH 密钥。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[授权个人访问令牌以用于 SAML 单一登录](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”或“[授权 SSH 密钥以用于 SAML 单一登录](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}."{% endif %}{% endif %}

## {% data variables.product.company_short %} 的令牌格式

以前缀开头的 {% data variables.product.company_short %} 议题令牌表示令牌的类型。

| 令牌类型 | 前缀 | 详细信息 |
| :- | :- | :- |
| 个人访问令牌 | `ghp_` | “[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)” |
| OAuth 访问令牌 | `gho_` | “[授权 {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps)” |
| {% data variables.product.prodname_github_app %} 的用户到服务器令牌 | `ghu_` | “[针对 {% data variables.product.prodname_github_apps %} 识别和授权用户](/developers/apps/identifying-and-authorizing-users-for-github-apps)” |
| {% data variables.product.prodname_github_app %} 的服务器到服务器令牌 | `ghs_` | “[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)” |
| {% data variables.product.prodname_github_app %} 的刷新令牌 | `ghr_` | “[刷新用户到服务器访问令牌](/developers/apps/refreshing-user-to-server-access-tokens)” |

