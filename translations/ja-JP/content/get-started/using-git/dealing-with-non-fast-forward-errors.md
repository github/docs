---
title: non-fast-forward エラーの扱い
intro: 時として、Git はリモートリポジトリへの変更の際、コミットに失敗することがあります。 その場合、プッシュが拒否されます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125797'
---
別の人が同じブランチにすでにプッシュしてしまった場合、Git はあなたの変更をプッシュできません:

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

リモート ブランチで行われた変更をローカルで行った変更に[フェッチしてマージ](/github/getting-started-with-github/getting-changes-from-a-remote-repository)することで、これを修正することができます。

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin <em>YOUR_BRANCH_NAME</em>
# Merges updates made online with your local work
```

または、単純に `git pull` を使って一度に両方のコマンドを実行することもできます。

```shell
$ git pull origin <em>YOUR_BRANCH_NAME</em>
# Grabs online updates and merges them with your local work
```
