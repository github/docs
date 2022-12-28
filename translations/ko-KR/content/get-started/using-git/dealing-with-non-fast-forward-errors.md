---
title: non-fast-forward 오류 처리
intro: Git에서 커밋을 잃지 않고 원격 리포지토리를 변경할 수 없는 경우가 있습니다. 이 경우 푸시가 거부됩니다.
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
ms.openlocfilehash: 45405455b20d71ca01d61f23d949be4ec5964356
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009028'
---
다른 사용자가 사용자와 동일한 분기에 푸시한 경우 Git에서 변경 내용을 푸시할 수 없습니다.

```shell
$ git push origin main
> To https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.
```

원격 분기의 변경 내용을 로컬로 변경한 내용과 [페치하고 병합](/github/getting-started-with-github/getting-changes-from-a-remote-repository)하여 이 문제를 해결할 수 있습니다.

```shell
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin YOUR_BRANCH_NAME
# Merges updates made online with your local work
```

또는 두 명령을 한 번에 모두 수행하는 데만 `git pull`을 사용할 수 있습니다.

```shell
$ git pull origin YOUR_BRANCH_NAME
# Grabs online updates and merges them with your local work
```
