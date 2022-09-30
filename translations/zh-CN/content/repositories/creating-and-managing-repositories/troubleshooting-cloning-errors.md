---
title: 排查克隆错误
intro: 如果您在克隆存储库时遇到问题，请检查这些常见错误。
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 60a5ff0350fed34841099c18f495b185b75f9832
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147093140'
---
## HTTPS 克隆错误

对 Git 使用 HTTPS 时有几种常见错误。 这些错误通常表示您有旧版 Git，或无法访问仓库。

下面是您可能收到的 HTTPS 错误示例：

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: did you run git
> update-server-info on the server?
```

### 检查 Git 版本

与 {% data variables.product.product_name %} 交互没有最低 Git 版本要求，但我们发现 1.7.10 版是一个方便、稳定的版本，适用于许多平台。 你可以始终在 [Git 网站上下载最新版本](https://git-scm.com/downloads)。

### 确保远程正确

您要提取的仓库必须存在于 {% data variables.product.product_location %} 上，且 URL 区分大小写。

可以打开命令行并键入 `git remote -v` 来查找本地存储库的 URL：

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

也可通过 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 应用程序更改 URL。

### 提供访问令牌

要访问 {% data variables.product.prodname_dotcom %}，您必须使用个人访问令牌而不是密码进行身份验证。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

{% data reusables.command_line.provide-an-access-token %}

### 检查权限

提示输入用户名和密码时，确保使用可以访问仓库的帐户。

{% tip %}

提示：如果不想在每次与远程存储库交互时都输入用户名和密码，可以打开[凭据缓存](/github/getting-started-with-github/caching-your-github-credentials-in-git)。 如果已在使用凭据缓存，请确保您的计算机缓存了正确的凭据。 不正确或过期的凭据将导致身份验证失败。

{% endtip %}

### 改用 SSH

如果您以前设置了 SSH 密钥，便可使用 SSH 克隆 URL，而不使用 HTTPS。  有关详细信息，请参阅“[关于远程存储库](/github/getting-started-with-github/about-remote-repositories)”。

## 错误：未找到仓库

{% ifversion fpt or ghae or ghec %}如果在克隆存储库时看到此错误，这意味着存储库不存在或者你无权访问它。{% else %}如果在克隆存储库时看到此错误，这意味着存储库不存在或者你无权访问它，或者 {% data variables.product.product_location %} 处于专用模式。{% endif %} 此错误有一些解决方案，具体取决于错误原因。

### 检查拼写

拼写错误可能发生，并且仓库名称区分大小写。  如果尝试克隆 `git@{% data variables.command_line.codeblock %}:user/repo.git`，但存储库已实际命名为 `User/Repo`，则会收到此错误。

要避免此错误，克隆时，始终从仓库页面复制和粘贴克隆 URL。 有关详细信息，请参阅“[克隆存储库](/articles/cloning-a-repository)”。

若要更新现有存储库上的的远程存储，请参阅“[管理远程存储库](/github/getting-started-with-github/managing-remote-repositories)”。

### 检查权限

如果您尝试克隆私有仓库，但没有查看仓库的权限，您将收到此错误。

确保您通过以下方式之一中，拥有仓库的访问权限：

* 仓库所有者
* 存储库上的[协作者](/articles/inviting-collaborators-to-a-personal-repository)
* 拥有存储库访问权限的[团队成员](/articles/adding-organization-members-to-a-team)（如果存储库属于组织）

### 检查 SSH 访问权限

在极少数情况下，您可能没有仓库的适当 SSH 访问权限。

应确保正在使用的 SSH 密钥已连接到你在 {% data variables.product.product_name %} 上的个人帐户。 可以通过在命令行中键入以下内容检查此项：

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %} 如果存储库属于某一组织并且你使用的是 OAuth 应用生成的 SSH 密钥，则 OAuth 应用访问权限可能已被组织所有者所限制。 有关详细信息，请参阅“[关于 OAuth 应用访问限制](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)”。
{% endif %}

有关详细信息，请参阅“[将新的 SSH 密钥添加到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account)”。

{% ifversion ghes %}
### 检查实例是否处于私有模式

如果站点管理员已对你的 GitHub Enterprise 实例启用专用模式，将禁用通过 `git://` 进行的匿名克隆。 如果您无法克隆仓库，请联系您的站点管理员。
{% endif %}

### 检查仓库是否确实存在

如果所有其他内容失败，确保仓库在 {% data variables.product.product_location %} 上确实存在！
如果您尝试推送不存在的仓库，您将收到此错误。

## 错误：远程 HEAD 引用不存在的 ref，无法检出

如果已在 {% data variables.product.product_location %} 上删除仓库的默认分支，会发生此错误。

检测此错误很简单；当您尝试克隆以下仓库时，Git 会警告您：

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

要修复此错误，您需要成为 {% data variables.product.product_location %} 上仓库的管理员。
你将要[更改存储库的默认分支](/github/administering-a-repository/changing-the-default-branch)。

之后，您可以从命令行获取所有可用分支的列表：

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

然后，您可以切换到新分支：

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
