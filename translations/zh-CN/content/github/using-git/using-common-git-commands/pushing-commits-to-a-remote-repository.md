---
title: 推送提交到远程仓库
intro: 使用 `git push` 将本地分支上的提交推送到远程仓库。
redirect_from:
  - /articles/pushing-to-a-remote/
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
`git push` 命令使用两个参数：

* 远程命令，如 `origin`
* 分支名称，如 `main`

例如：

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

例如，您通常运行 `git push origin main` 来推送本地更改到在线仓库。

### 重命名分支

要重命名分支，同样使用 `git push` 命令，但要加上一个或多个参数：新分支的名称。 例如：

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

这会将 `LOCALBRANCHNAME` 推送到 `REMOTENAME`，但其名称将改为 `REMOTEBRANCHNAME`。

### 处理“非快进”错误

如果仓库的本地副本未同步或“落后于”您推送到的上游分支，您会收到一条消息表示：`non-fast-forward updates were rejected`。 这意味着您必须检索或“提取”上游更改，然后才可推送本地更改。

有关此错误的更多信息，请参阅“[处理非快进错误](/articles/dealing-with-non-fast-forward-errors)”。

### 推送标记

默认情况下，没有其他参数时，`git push` 会发送所有名称与远程分支相同的匹配分支。

要推送单一标记，可以发出与推送分支相同的命令：

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

要推送所有标记，可以输入命令：

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

### 删除远程分支或标记

删除分支的语法初看有点神秘：

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

请注意，冒号前有一个空格。 命令与重命名分支的步骤类似。 但这里是告诉 Git _不要_推送任何内容到 `REMOTENAME` 上的 `BRANCHNAME`。 因此，`git push` 会删除远程仓库上的分支。

### 远程和复刻

您可能已经知道，[您可以对 GitHub 上的仓库“复刻”](https://guides.github.com/overviews/forking/)。

在克隆您拥有的仓库时，向其提供远程 URL，告知 Git 到何处提取和推送更新。 如果要协作处理原始仓库，可添加新的远程 URL（通常称为 `upstream`）到本地 Git 克隆：

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

现在可以从*其*复刻提取更新和分支：

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

在完成本地更改后，可以推送本地分支到 GitHub 并[发起拉取请求](/articles/about-pull-requests)。

有关使用复刻的更多信息，请参阅“[同步复刻](/articles/syncing-a-fork)”。

### 延伸阅读

- ["Pro Git" 书中的“远程”一章](https://git-scm.com/book/ch5-2.html)
- [`git remote` 手册页](https://git-scm.com/docs/git-remote.html)
- "[Git 小抄](/articles/git-cheatsheet)"
- "[Git 工作流程](/articles/git-workflows)"
- "[Git 手册](https://guides.github.com/introduction/git-handbook/)"
