---
title: 处理非快进错误
intro: 有时，Git 无法在不丢失提交的情况下对远程仓库进行更改。 发生此情况时，推送会被拒绝。
redirect_from:
  - /articles/dealing-with-non-fast-forward-errors
  - /github/using-git/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/dealing-with-non-fast-forward-errors
  - /github/getting-started-with-github/using-git/dealing-with-non-fast-forward-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Non-fast-forward error
ms.openlocfilehash: 59e1957bf2376462c1267527b1bc29ed9de49db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109492'
---
如果其他人已推送与您相同的分支，Git 将无法推送您的更改：

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

可以通过[提取和合并](/github/getting-started-with-github/getting-changes-from-a-remote-repository)远程分支上所做的更改以及本地所做的更改来解决此问题：

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

或者，只需使用 `git pull` 一次执行这两个命令：

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```
