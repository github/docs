---
title: 我应使用哪个远程 URL？
redirect_from:
  - /articles/which-url-should-i-use/
  - /articles/which-remote-url-should-i-use
intro: '克隆 {% data variables.product.product_location %} 上的仓库有几种方法。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

当您登录到帐户查看仓库时，可以用于将项目克隆到计算机上的 URL 在仓库详细信息下方提供：

有关设置或更改远程 URL 的信息，请参阅“[更改远程仓库的 URL](/articles/changing-a-remote-s-url)”。

### 使用 HTTPS URL 克隆

`https://` 克隆 URL 在所有仓库中提供，与可见性无关。 即使您在防火墙或代理后面，`https://` 克隆 URL 也有效。

当您在命令行中使用 HTTPS URL 对远程仓库执行 `git clone`、`git fetch`、`git pull` 或 `git push` 命令时，Git 将要求您输入 {% data variables.product.product_name %} 用户名和密码。 {% data reusables.user_settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**提示**：

- 您可以使用凭据小助手，让 Git 在每次与 {% data variables.product.prodname_dotcom %} 通信时记住您的 {% data variables.product.prodname_dotcom %} 凭据。 更多信息请参阅“[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/using-git/caching-your-github-credentials-in-git)”。

- 要克隆仓库而不在命令行中对 {% data variables.product.product_name %} 进行身份验证，您可以使用 {% data variables.product.prodname_desktop %} 进行克隆。 更多信息请参阅“[将仓库从 {% data variables.product.prodname_dotcom %} 克隆到 {% data variables.product.prodname_dotcom %} Desktop](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)”。

{% endtip %}

 {% if currentVersion == "free-pro-team@latest" %}如果您希望使用 SSH，但不能通过端口 22 进行连接，则可通过 HTTPS 端口使用 SSH。 更多信息请参阅“[通过 HTTPS 端口使用 SSH](/github/authenticating-to-github/using-ssh-over-the-https-port)”。{% endif %}

### 使用 SSH URL 克隆

SSH URL 通过 SSH（一种安全协议）提供 Git 仓库的访问权限。 要使用这些 URL，您必须在计算机上生成 SSH 密钥对，并将**公**钥添加到您的 {% data variables.product.product_name %} 帐户。 更多信息请参阅“[通过 SSH 连接 {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/connecting-to-github-with-ssh)”。

使用 SSH URL 对远程仓库执行 `git clone`、`git fetch`、`git pull` 或 `git push` 命令时，系统将提示您输入密码，并且必须提供您的 SSH 密钥密码。 更多信息请参阅“[使用 SSH 密钥密码](/github/authenticating-to-github/working-with-ssh-key-passphrases)”。

{% if currentVersion == "free-pro-team@latest" %}如果要访问使用 SAML 单点登录 (SSO) 的组织，您在进行身份验证之前必须授权 SSH 密钥以访问组织。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”和“[授权 SSH 密码以用于 SAML 单点登录](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。{% endif %}

{% tip %}

**提示**：您可以使用 SSH URL 将仓库克隆到计算机，或作为将代码部署到生产服务器的安全方法。 您还可以将 SSH 代理转发与部署脚本一起使用，以避免管理服务器上的密钥。 更多信息请参阅“[使用 SSH 代理转发](/developers/overview/using-ssh-agent-forwarding)”。

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}

### 使用 {% data variables.product.prodname_cli %} 克隆

您还可以安装 {% data variables.product.prodname_cli %} 以在终端中使用 {% data variables.product.product_name %} 工作流程。 更多信息请参阅 [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) 文档。

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### 使用 Subversion 克隆

您还可以使用 [Subversion](https://subversion.apache.org/) 客户端访问 {% data variables.product.prodname_dotcom %} 上的任何仓库。 Subversion 提供不同于 Git 的功能集。 更多信息请参阅“[Subversion 与 Git 之间有何差异？](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)”
您还可以

从 Subversion 客户端访问 {% data variables.product.prodname_dotcom %} 上的仓库。 更多信息请参阅“[Subversion 客户端的支持](/github/importing-your-projects-to-github/support-for-subversion-clients)”。
{% endif %}

### 延伸阅读

- _Pro Git_ 书籍网站中的[使用远程](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
