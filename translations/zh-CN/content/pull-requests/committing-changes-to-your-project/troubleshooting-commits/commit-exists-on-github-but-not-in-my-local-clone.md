---
title: 存在于 GitHub 上但不存在于本地克隆中的提交
intro: '有时，提交可以在 {% data variables.product.product_name %} 上查看到，但不存在于仓库的本地克隆中。'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 9374b17a111bc3f88bf81d60de97e354c0bcf8ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129447'
---
使用 `git show` 在命令行上查看特定提交时，可能会收到灾难性错误。

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

## 本地仓库已过期

您的本地仓库可能还没有提交。 要将信息从远程存储库提取到本地克隆，请使用 `git fetch`：

```shell
$ git fetch <em>remote</em>
```

这可以安全地将信息从远程存储库复制到本地克隆，而无需对已签出的文件进行任何更改。可以使用 `git fetch upstream` 从创建分支的存储库中获取信息，或使用 `git fetch origin` 从仅克隆的存储库中获取信息。

{% tip %}

提示：有关详细信息，请阅读 [Pro Git](https://git-scm.com/book) 手册中的[管理远程库并提取数据](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)。

{% endtip %}

## 包含提交的分支已被删除

如果存储库的协作者已删除包含提交的分支或者已强制推送该分支，则缺失的提交可能已为孤立状态（即无法从任何引用访问它），它也因此不会被提取到本地克隆中。

如果幸好有某个协作者的本地克隆存储库中包含了该缺失的提交，则他们可以将其推送回 {% data variables.product.product_name %}。  他们需要确保通过本地分支引用该提交，然后将其作为新分支推送到 {% data variables.product.product_name %}。

假设某人仍有包含该提交的本地分支（称为 `B`）。  这可能会跟踪已被强制推送或删除的分支，它们只是还没有更新。  要保留该提交，可以将该本地分支推送到 {% data variables.product.product_name %} 上的新分支（称为 `recover-B`）。  在此例中，假设他们有一个名为 `upstream` 的远程库，通过该远程库他们可以获得对 `github.com/$account/$repository` 的推送访问权限。

他们运行：

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

现在，可以运行：

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## 避免强制推送

除非万不得已，否则应避免向仓库强制推送。 如果可以向仓库推送的人不止一个，这个原则尤为重要。 如果有人强制推送到仓库，则强制推送可能会覆盖其他人基于其工作的承诺。 强制推送会更改存储库历史记录，并可能损坏拉取请求。

## 延伸阅读

- [Pro Git 手册中的“使用远程库”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- [Pro Git 手册中的“数据恢复”](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
