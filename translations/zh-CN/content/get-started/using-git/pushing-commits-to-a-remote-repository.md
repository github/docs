---
title: 推送提交到远程仓库
intro: 使用 `git push` 将本地分支上的提交推送到远程存储库。
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: 61a3eb3e0b0147810b561b59b58879688dd4ba36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109488'
---
## 关于 `git push`
`git push` 命令采用两个参数：

* 远程名称（例如 `origin`）
* 分支名称（例如 `main`）

例如：

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

假设你通常运行 `git push origin main` 将本地更改到联机存储库。

## 重命名分支

若要重命名分支，同样使用 `git push` 命令，但要加上一个或多个参数：新分支的名称。 例如：

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

这会将 `LOCALBRANCHNAME` 推送到 `REMOTENAME`，但它已重命名为 `REMOTEBRANCHNAME`。

## 处理“非快进”错误

如果存储库的本地副本未同步或“落后于”你推送到的上游存储库，你会收到一条消息：`non-fast-forward updates were rejected`。
这意味着必须检索或“提取”上游更改，然后才可推送本地更改。

有关此错误的详细信息，请参阅“[处理非快进错误](/github/getting-started-with-github/dealing-with-non-fast-forward-errors)”。

## 推送标记

默认情况下，没有其他参数时，`git push` 会发送所有名称与远程分支相同的匹配分支。

要推送单一标记，可以发出与推送分支相同的命令：

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

要推送所有标记，可以输入命令：

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

## 删除远程分支或标记

删除分支的语法初看有点神秘：

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

请注意，冒号前有一个空格。 命令与重命名分支的步骤类似。 但这里是指示 Git 不要将任何内容推送到 `REMOTENAME` 上的 `BRANCHNAME`。 因此，`git push` 会删除远程存储库上的分支。

## 远程和复刻

你可能已经了解[可以为 GitHub 上的存储库“创建分支”](https://guides.github.com/overviews/forking/)。

在克隆拥有的存储库时，向其提供远程 URL，指示 Git 到何处提取和推送更新。 如果要协作处理原始存储库，可将新的远程 URL（通常称为 `upstream`）添加到本地 Git 克隆：

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

现在可以从其分支提取更新和分支：

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

在完成本地更改后，可将本地分支推送到 GitHub 并[发起拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)。

有关使用分支的详细信息，请参阅“[同步分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)”。

## 延伸阅读

- [《Pro Git》一书中的“远程”章节](https://git-scm.com/book/ch5-2.html)
- [`git remote` 主页](https://git-scm.com/docs/git-remote.html)
- [Git 速查表](/articles/git-cheatsheet)
- [Git 工作流](/github/getting-started-with-github/git-workflows)
- [Git 手册](https://guides.github.com/introduction/git-handbook/)
