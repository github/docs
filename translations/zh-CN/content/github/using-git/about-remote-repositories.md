---
title: 关于远程仓库
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
intro: 'GitHub 的协作开发方法取决于从您的本地仓库发布提交，以供其他人查看、提取和更新。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

远程 URL 是 Git 一种指示“您的代码存储位置”的绝佳方式。 该 URL 可能是您在 GitHub 上的仓库，也可以是另一个用户的复刻，甚至在完全不同的服务器上。

您只能推送到两类 URL 地址：

* HTTPS URL，如 `https://{% data variables.command_line.backticks %}/user/repo.git`
* SSH URL，如 `git@{% data variables.command_line.backticks %}:user/repo.git`

Git 将远程 URL 与名称相关联，您的默认远程通常名为 `origin`。

有关这些 URL 之间差异的信息，请参阅“[我应使用哪种远程 URL？](/articles/which-remote-url-should-i-use)”

### 创建远程

您可以使用 `git remote add` 命令将远程 URL 与名称匹配。 例如，在命令行中输入以下命令：

```shell
git remote add origin <em> &lt;REMOTE_URL> </em>
```

这会将名称 `origin` 与 `REMOTE_URL` 关联。

您可以使用命令 `git remote set-url` 来[更改远程 URL](/articles/changing-a-remote-s-url)。
