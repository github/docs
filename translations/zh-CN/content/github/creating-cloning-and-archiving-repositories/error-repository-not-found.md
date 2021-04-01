---
title: '错误：未找到仓库'
intro: '{% if currentversion == "free-proteam@latest" or currentversion == "github-ae@latest" %}如果您在克隆仓库时看到这个错误，意味着仓库不存在或您没有权限访问它。{% else %}如果您在克隆仓库时看到此错误，意味着仓库不存在、您没有访问权限，或者 {% data variables.product.product_location %} 处于隐私模式。{% endif %} 对此错误有一些解决办法，具体取决于错误原因。'
redirect_from:
  - /articles/error-repository-not-found
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 仓库
---

### 检查拼写

拼写错误可能发生，并且仓库名称区分大小写。  如果您尝试克隆 `git@{% data variables.command_line.codeblock %}:user/repo.git`，但仓库实际被命名为 `User/Repo`，您会收到此错误。

要避免此错误，克隆时，始终从仓库页面复制和粘贴克隆 URL。 更多信息请参阅“[克隆仓库](/articles/cloning-a-repository)”。

要在现有仓库上更新远程，请参阅“[管理远程仓库](/github/getting-started-with-github/managing-remote-repositories)”。

### 检查权限

如果您尝试克隆私有仓库，但没有查看仓库的权限，您将收到此错误。

确保您通过以下方式之一中，拥有仓库的访问权限：

* 仓库所有者
* 仓库[协作者](/articles/inviting-collaborators-to-a-personal-repository)
* 拥有仓库访问权限的[团队成员](/articles/adding-organization-members-to-a-team)（如果仓库属于组织）

### 检查 SSH 访问权限

在极少数情况下，您可能没有仓库的适当 SSH 访问权限。

您应确保正在使用的 SSH 密钥已连接到您的 {% data variables.product.product_name %} 用户帐户。 您可以通过在命令行中输入以下内容检查此项：

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

如果仓库属于组织，并且您使用的是 OAuth App 生成的 SSH 密钥，则 OAuth App 访问权限可能已被组织所有者限制。 更多信息请参阅“<a href="/github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions" class="dotcom-only">关于 OAuth App 访问限制</a>”。

更多信息请参阅[添加 SSH 密钥到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account)。

{% if enterpriseServerVersions contains currentVersion %}
### 检查实例是否处于私有模式

如果您的站点管理员已对您的 GitHub Enterprise 实例启用私有模式，将禁用通过 `git://` 进行匿名克隆。 如果您无法克隆仓库，请联系您的站点管理员。
{% endif %}

### 检查仓库是否确实存在

如果所有其他内容失败，确保仓库在 {% data variables.product.product_location %} 上确实存在！ 如果您尝试推送不存在的仓库，您将收到此错误。
