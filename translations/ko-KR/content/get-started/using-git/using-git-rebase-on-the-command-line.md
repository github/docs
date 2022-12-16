---
title: 명령줄에서 Git 다시 지정 사용
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: 명령줄에서 `git rebase`를 사용하는 방법에 대한 간단한 자습서는 다음과 같습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145134655'
---
## Git 다시 지정 사용

이 예제에서는 `exec`를 제외하고 사용 가능한 모든 `git rebase` 명령을 다룹니다.

터미널에 `git rebase --interactive HEAD~7`를 입력하여 다시 지정을 시작합니다. 즐겨 찾는 텍스트 편집기에 다음 줄이 표시됩니다.

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

이 예제에서는 다음을 사용합니다.

* `squash`를 사용하여 다섯 번째 커밋(`fa39187`)을 `"Patch A"` 커밋(`1fc6c95`)에 스쿼시합니다.
* 마지막 커밋(`7b36971`)을 `"Patch B"` 커밋(`6b2481b`) 위로 이동하고 `pick`으로 유지합니다.
* `"A fix for Patch B"` 커밋(`c619268`)을 `"Patch B"` 커밋(`6b2481b`)에 병합하고, `fixup`을 사용하여 커밋 메시지를 무시합니다.
* `edit`을 사용하여 세 번째 커밋(`dd1475d`)을 두 개의 더 작은 커밋으로 분할합니다.
* `reword`를 사용하여 철자가 틀린 커밋(`4ca2acc`)의 커밋 메시지를 수정합니다.

휴우! 할 일이 많은 것처럼 들리지만 한 번에 한 단계씩 수행하면 쉽게 변경할 수 있습니다.

시작하려면 파일의 명령을 다음과 같이 수정해야 합니다.

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

각 줄의 명령을 `pick`에서 관심이 있는 명령으로 변경했습니다.

이제 편집기를 저장하고 닫습니다. 그러면 대화형 다시 지정이 시작됩니다.

Git은 아무것도 수행할 필요가 없으므로 첫 번째 다시 지정 명령 `pick 1fc6c95`를 건너뜁니다. 다음 명령 `squash fa39187`로 이동합니다. 이 작업에는 입력이 필요하므로 Git에서 텍스트 편집기가 다시 열립니다. 열리는 파일은 다음과 같습니다.

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

이 파일은 Git이 다음과 같이 말하는 것과 같습니다. “지금 이 `squash`로 하려는 게 바로 이것이에요.” 첫 번째 커밋의 메시지(`"Patch A"`) 및 두 번째 커밋의 메시지(`"something to add to patch A"`)를 나열합니다. 이러한 커밋 메시지에 만족하면 파일을 저장하고 편집기를 닫을 수 있습니다. 만족하지 않으면 간단하게 텍스트를 변경하여 커밋 메시지를 변경할 수 있습니다.

편집기가 닫히면 다시 지정이 계속됩니다.

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git은 두 `pick` 명령(`pick 7b36971` 및 `pick 6b2481b`)을 처리합니다. 상호 작용이 필요하지 않으므로 *또한* `fixup` 명령(`fixup c619268`)을 처리합니다. `fixup`은 `c619268`의 변경 내용을 그 이전의 커밋인 `6b2481b`에 병합합니다. 두 변경 내용 모두 동일한 커밋 메시지를 포함하게 됩니다(`"Patch B"`).

Git은 `edit dd1475d` 작업에 도달하면 멈춘 후 터미널에 다음 메시지를 출력합니다.

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

이 시점에서 프로젝트의 파일을 편집하여 추가로 내용을 변경할 수 있습니다. 변경할 때마다 새 커밋을 수행해야 하며, `git commit --amend` 명령을 입력하여 수행할 수 있습니다. 모든 변경 작업을 마쳤으면 `git rebase --continue`를 실행할 수 있습니다.

그러면 Git이 `reword 4ca2acc` 명령에 도달합니다.  텍스트 편집기가 한 번 더 열리고 다음 정보가 표시됩니다.

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

이전과 마찬가지로 Git은 편집할 커밋 메시지를 표시합니다. 텍스트를 변경하고(`"i cant' typ goods"`), 파일을 저장하고, 편집기를 닫을 수 있습니다. 다시 지정이 완료되고 터미널로 돌아갑니다.

## 다시 지정된 코드를 GitHub에 푸시

Git 기록을 변경했으므로 일반적인 `git push origin`은 작동하지 **않게** 됩니다. 최신 변경 내용을 “강제 푸시”하여 명령을 수정해야 합니다.

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

강제 푸시는 분기에 대한 커밋의 기록 시퀀스를 변경하기 때문에 심각한 영향을 미칩니다. 특히 리포지토리에 여러 사람이 액세스하는 경우 주의해서 사용해야 합니다.

{% endwarning %}

## 추가 참고 자료

* “[Git 다시 지정 후 병합 충돌 해결](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)”
