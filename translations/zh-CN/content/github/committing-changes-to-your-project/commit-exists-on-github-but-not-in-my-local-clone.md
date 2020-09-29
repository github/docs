---
title: 存在于 GitHub 上但不存在于本地克隆中的提交
intro: '有时，提交可以在 {% data variables.product.product_name %} 上查看到，但不存在于仓库的本地克隆中。'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

使用 `git show` 在命令行上查看特定提交时，可能会收到致命错误。

例如，可能会在本地收到 `bad object` 错误：

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

但是，当您在 {% data variables.product.product_location %} 上查看该提交时，却可以看到它，并且不会遇到任何问题：

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

有几种可能的解释：

* 本地仓库已过期。
* 包含提交的分支已被删除，因此该提交的引用不再有效。
* 有人强制推送了提交。

### 本地仓库已过期

您的本地仓库可能还没有提交。 要将信息从远程仓库提取到本地克隆，请使用 `git fetch`：

```shell
$ git fetch <em>remote</em>
```

这将安全地将信息从远程仓库复制到本地克隆，无需对已检出的文件进行任何更改。 您可以使用 `git fetch upstream`从已复刻的仓库获取信息，或使用 `git fetch origin`从仅克隆的仓库获取信息。

{% tip %}

**提示**：更多信息请参阅 [Pro Git](https://git-scm.com/book) 手册中的[管理远程仓库和获取数据](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) 。

{% endtip %}

### 包含提交的分支已被删除

如果仓库的协作者已删除包含提交的分支或者已强制推送该分支，则缺失的提交可能已成为孤立状态（即无法从任何引用访问它），因此它不会被提取到您的本地克隆中。

如果幸好有某个协作者的本地克隆仓库中包含了该缺失的提交，则他们可以将其推送回 {% data variables.product.product_name %}。  他们需要确保通过本地分支引用该提交，然后将其作为新分支推送到 {% data variables.product.product_name %}。

假设某人仍有包含该提交的本地分支（称为 `B`）。  它们可能追随已被强制推送或删除的分支，只是它们还没有更新。  要保留该提交，他们可以将该本地分支推送到 {% data variables.product.product_name %} 上的新分支（称为 `recover-B`）。  在此例中，假设他们有一个名为 `upstream` 的远程仓库，通过该仓库他们可以推送到 `github.com/$account/$repository`。

他们运行：

```shell
$ git branch recover-B B
# 创建引用该提交的新本地分支
$ git push upstream B:recover-B
# 将本地分支 B 推送到新上游分支，创建对提交的新引用
```

现在，*您*可以运行：

```shell
$ git fetch upstream recover-B
# 将提交提取到您的本地仓库。
```

### 避免强制推送

除非万不得已，否则应避免向仓库强制推送。 如果可以向仓库推送的人不止一个，这个原则尤为重要。

### 延伸阅读

- [_Pro Git_ 手册中的“处理远程仓库”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- [_Pro Git_ 手册中的“数据恢复”](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
