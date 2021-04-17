---
title: HTTPS 克隆错误
intro: '对 Git 使用 HTTPS 时有几种常见错误。 这些错误通常表示您有旧版 Git，或无法访问仓库。'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403/
  - /articles/error-the-requested-url-returned-error-401/
  - /articles/error-did-you-run-git-update-server-info-on-the-server/
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs/
  - /articles/https-cloning-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 仓库
---

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

与 {% data variables.product.product_name %} 交互没有最低 Git 版本要求，但我们发现 1.7.10 版是一个方便、稳定的版本，适用于许多平台。 您可随时[在 Git 网站上下载最新版本](https://git-scm.com/downloads)。

### 确保远程正确

您要提取的仓库必须存在于 {% data variables.product.product_location %} 上，且 URL 区分大小写。

您可以打开命令行并输入 `git remote -v` 来查找本地仓库的 URL：

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

要访问 {% data variables.product.prodname_dotcom %}，您必须使用个人访问令牌而不是密码进行身份验证。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

{% data reusables.command_line.provide-an-access-token %}

### 检查您的权限

提示输入用户名和密码时，确保使用可以访问仓库的帐户。

{% tip %}

**提示**：如果不想在每次与远程仓库交互时都输入用户名和密码，您可以打开[凭据缓存](/github/getting-started-with-github/caching-your-github-credentials-in-git)。 如果已在使用凭据缓存，请确保您的计算机缓存了正确的凭据。 不正确或过期的凭据将导致身份验证失败。

{% endtip %}

### 改用 SSH

如果您以前设置了 SSH 密钥，便可使用 SSH 克隆 URL，而不使用 HTTPS。  更多信息请参阅“[关于远程仓库](/github/getting-started-with-github/about-remote-repositories)”。
