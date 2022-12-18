---
title: Git 다시 지정 후 병합 충돌 해결
intro: '`git rebase` 작업을 수행할 때 일반적으로 커밋을 이동합니다. 이로 인해 병합 충돌이 유도되는 상황이 생길 수 있습니다. 즉, 커밋 중 두 개에서 동일한 파일의 동일한 줄을 수정했으며 Git에서 적용할 변경 내용을 알지 못한다는 의미입니다.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve conflicts after rebase
ms.openlocfilehash: 8798282fb804f7b2389d98f69ba2b0e855a2289a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115972'
---
`git rebase`를 사용하여 커밋을 다시 정렬하고 조작한 후 병합 충돌이 발생하면 Git은 터미널에 다음 메시지를 출력하여 알려줍니다.

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

여기서 Git은 충돌을 일으키는 커밋을 알려 줍니다(`fa39187`). 다음 세 가지 옵션이 제공됩니다.

* `git rebase --abort`를 실행하여 다시 지정을 완전히 실행 취소할 수 있습니다. Git은 `git rebase` 호출 이전의 분기 상태로 되돌립니다.
* `git rebase --skip`을 실행하여 커밋을 완전히 건너뛸 수 있습니다. 즉, 문제가 있는 커밋에 의해 도입된 변경 내용은 포함되지 않습니다. 이 옵션을 선택하는 경우는 매우 드뭅니다.
* 충돌을 해결할 수 있습니다.

충돌을 해결하려면 [명령줄에서 병합 충돌을 해결하기 위한 표준 절차](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)를 따를 수 있습니다. 완료되면 Git에서 다시 지정의 나머지를 계속 처리할 수 있도록 `git rebase --continue`를 호출해야 합니다.
