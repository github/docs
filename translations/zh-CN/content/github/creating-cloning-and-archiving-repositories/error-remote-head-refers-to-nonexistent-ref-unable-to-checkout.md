---
title: '错误：远程 HEAD 引用不存在的 ref，无法检出'
intro: '如果已在 {% data variables.product.product_location %} 上删除仓库的默认分支，会发生此错误。'
redirect_from:
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

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

要修复此错误，您需要成为 {% data variables.product.product_location %} 上仓库的管理员。 您需要[更改仓库的默认分支](/github/administering-a-repository/changing-the-default-branch)。

之后，您可以从命令行获取所有可用分支的列表：

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-master
```

然后，您可以切换到新分支：

```shell
$ git checkout new-master
# Create and checkout a tracking branch
> Branch new-master set up to track remote branch new-master from origin.
> Switched to a new branch 'new-master'
> Switched to a new branch 'new-main'
```
