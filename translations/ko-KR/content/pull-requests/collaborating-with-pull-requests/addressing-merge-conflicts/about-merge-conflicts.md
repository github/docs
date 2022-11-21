---
title: 병합 충돌 정보
intro: 병합 충돌은 경합 커밋이 있는 분기를 병합할 때 발생하며 Git가 최종 병합에 통합할 변경 내용을 결정하는 데 사용자의 도움이 필요합니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
  - /github/about-merge-conflicts
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
ms.openlocfilehash: 816830ccd05a29803667c163f850fa5a086a49cd
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009084'
---
Git은 종종 분기 간의 차이점을 해결하고 자동으로 병합할 수 있습니다. 일반적으로 변경 내용은 다른 줄에 있거나 다른 파일에 있으므로 컴퓨터가 쉽게 병합할 수 있습니다. 그러나 경우에 따라 Git에서 사용자의 도움 없이는 해결할 수 없는 경쟁하는 변경 내용이 있습니다. 병합 충돌은 사용자가 같은 파일의 같은 줄을 다르게 변경하거나 한 사람이 파일을 편집하고 다른 사람이 같은 파일을 삭제할 때 발생합니다.

{% data variables.product.product_name %}에서 끌어오기 요청을 병합하려면 먼저 모든 병합 충돌을 해결해야 합니다. 끌어오기 요청에서 비교 분기와 베이스 분기 간에 병합 충돌이 있는 경우 **끌어오기 요청 병합** 단추 위에 변경 내용이 충돌하는 파일 목록을 볼 수 있습니다. **끌어오기 요청 병합** 단추는 비교 분기와 베이스 분기 간의 모든 충돌을 해결할 때까지 비활성화됩니다.

![병합 충돌 오류 메시지](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

## 병합 충돌 해결

병합 충돌을 해결하려면 충돌하는 파일을 수동으로 편집하여 최종 병합에서 유지하려는 변경 내용을 선택해야 합니다. 병합 충돌을 해결하는 몇 가지 방법이 있습니다.

- 사용자가 Git 리포지토리의 다른 분기에서 동일한 파일의 동일한 줄을 다르게 변경하는 경우와 같이 경쟁하는 줄 변경으로 인해 병합 충돌이 발생하는 경우 충돌 편집기를 사용하여 {% data variables.product.product_name %}에서 해결할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 병합 충돌 해결](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)”을 참조하세요.
- 다른 모든 유형의 병합 충돌의 경우 리포지토리의 로컬 복제본에서 병합 충돌을 해결하고 {% data variables.product.product_name %}의 분기로 변경 내용을 푸시해야 합니다. 명령줄 또는 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 와 같은 도구를 사용하여 변경 사항을 푸시할 수 있습니다. 자세한 내용은 “[명령줄에서 병합 충돌 해결](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)”을 참조하세요.

명령줄에 병합 충돌이 있는 경우 컴퓨터에서 로컬로 병합 충돌을 해결할 때까지 {% data variables.product.product_name %}에 로컬 변경 내용을 푸시할 수 없습니다. 병합 충돌이 있는 명령줄에서 분기를 병합하려고 하면 오류 메시지가 표시됩니다. 자세한 내용은 “[명령줄을 사용하여 병합 충돌 해결](/articles/resolving-a-merge-conflict-using-the-command-line/)”을 참조하세요.
```shell
$ git merge BRANCH-NAME
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## 추가 참고 자료

- “[끌어오기 요청 병합 정보](/articles/about-pull-request-merges/)”
- “[끌어오기 요청 정보](/articles/about-pull-requests/)”
- “[명령줄을 사용하여 병합 충돌 해결](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)”
- “[GitHub에서 병합 충돌 해결](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)”
