---
title: 关于远程仓库
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'GitHub 的协作开发方法取决于从您的本地仓库发布提交到 {% data variables.product.product_name %}，以供其他人查看、提取和更新。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130888'
---
## 关于远程仓库

远程 URL 是 Git 一种指示“您的代码存储位置”的绝佳方式。 该 URL 可能是您在 GitHub 上的仓库，也可以是另一个用户的复刻，甚至在完全不同的服务器上。

您只能推送到两类 URL 地址：

* HTTPS URL（例如 `https://{% data variables.command_line.backticks %}/user/repo.git`）
* SSH URL（例如 `git@{% data variables.command_line.backticks %}:user/repo.git`）

Git 将远程 URL 与名称相关联，你的默认远程通常名为 `origin`。

## 创建远程仓库

可以使用 `git remote add` 命令将远程 URL 与名称匹配。
例如，在命令行中输入以下命令：

```shell
git remote add origin &lt;REMOTE_URL>
```

这会将名称 `origin` 与 `REMOTE_URL` 相关联。

可以使用命令 `git remote set-url` [更改远程 URL](/get-started/getting-started-with-git/managing-remote-repositories)。

## 选择远程仓库的 URL

克隆 {% data variables.location.product_location %} 上可用的存储库有几种方法。

当您登录到帐户查看仓库时，可以用于将项目克隆到计算机上的 URL 在仓库详细信息下方提供。

有关设置或更改远程 URL 的信息，请参阅“[管理远程存储库](/get-started/getting-started-with-git/managing-remote-repositories)”。

## 使用 HTTPS URL 克隆

`https://` 克隆 URL 在所有存储库上都可用，无论可见性如何。 即使你在防火墙或代理后面，`https://` 克隆 URL 也有效。

在命令行上使用 HTTPS URL 将 `git clone`、`git fetch`、`git pull` 或 `git push` 执行到远程存储库时，Git 将要求你提供 {% data variables.product.product_name %} 用户名和密码。 {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**提示**：
- 您可以使用凭据小助手，让 Git 在每次与 {% data variables.product.prodname_dotcom %} 通信时记住您的 {% data variables.product.prodname_dotcom %} 凭据。 有关详细信息，请参阅“[在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)”。
- 要克隆仓库而不在命令行中对 {% data variables.product.product_name %} 进行身份验证，您可以使用 {% data variables.product.prodname_desktop %} 进行克隆。 有关详细信息，请参阅“[将存储库从 {% data variables.product.prodname_dotcom %} 克隆到 {% data variables.product.prodname_dotcom %} 桌面](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)”。

{% endtip %}

 {% ifversion fpt or ghec %}如果希望使用 SSH，但不能通过端口 22 进行连接，则可通过 HTTPS 端口使用 SSH。 有关详细信息，请参阅“[在 HTTPS 端口使用 SSH](/github/authenticating-to-github/using-ssh-over-the-https-port)”。{% endif %}

## 使用 SSH URL 克隆

SSH URL 通过 SSH（一种安全协议）提供 Git 仓库的访问权限。 若要使用这些 URL，必须在计算机上生成 SSH 密钥对，并将“公共”密钥添加到你在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}上的帐户。 有关详细信息，请参阅“[通过 SSH 连接到 {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/connecting-to-github-with-ssh)”。

使用 SSH URL 将 `git clone`、`git fetch`、`git pull` 或 `git push` 执行到远程存储库时，系统将提示你输入密码，并且必须提供 SSH 密钥密码。 有关详细信息，请参阅“[使用 SSH 密钥密码](/github/authenticating-to-github/working-with-ssh-key-passphrases)”。

{% ifversion fpt or ghec %}如果要访问使用 SAML 单一登录 (SSO) 的组织，在进行身份验证之前，还必须授权 SSH 密钥以访问组织。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于使用 SAML 单一登录进行身份验证](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”和“[授权 SSH 密钥以用于 SAML 单一登录](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}."{% endif %}{% endif %}

{% tip %}

提示：可以使用 SSH URL 将存储库克隆到计算机，或作为将代码部署到生产服务器的安全方法。 您还可以将 SSH 代理转发与部署脚本一起使用，以避免管理服务器上的密钥。 有关详细信息，请参阅“[使用 SSH 代理转发](/developers/overview/using-ssh-agent-forwarding)”。

{% endtip %}

## 使用 {% data variables.product.prodname_cli %} 克隆

您还可以安装 {% data variables.product.prodname_cli %} 以在终端中使用 {% data variables.product.product_name %} 工作流程。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)”。

{% ifversion not ghae %}
## 使用 Subversion 克隆

还可以使用 [Subversion](https://subversion.apache.org/) 客户端访问 {% data variables.product.prodname_dotcom %} 上的任何存储库。 Subversion 提供不同于 Git 的功能集。 有关详细信息，请参阅“[Subversion 和 Git 有哪些区别？](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)”

您也可以从 Subversion 客户端访问 {% data variables.product.prodname_dotcom %} 上的仓库。 有关详细信息，请参阅“[对 Subversion 客户端的支持](/github/importing-your-projects-to-github/support-for-subversion-clients)”。
{% endif %}
