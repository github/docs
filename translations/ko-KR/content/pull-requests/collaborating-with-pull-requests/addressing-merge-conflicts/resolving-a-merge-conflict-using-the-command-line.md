---
title: 명령줄을 사용하여 병합 충돌 해결
intro: 명령줄 및 텍스트 편집기를 사용하여 병합 충돌을 해결할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 411b02950a4cdc023f47fd2d84f8623d35cc4ac2
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009347'
---
병합 충돌은 파일의 동일한 줄을 변경하거나 한 사람이 파일을 편집하고 다른 사용자가 동일한 파일을 삭제할 때 발생합니다. 자세한 내용은 “[병합 충돌 정보](/articles/about-merge-conflicts/)”를 참조하세요.

{% tip %}

**팁:** {% data variables.product.product_name %}에서 충돌 편집기를 사용하여 끌어오기 요청의 일부인 분기 간에 경쟁하는 줄 변경 병합 충돌을 해결할 수 있습니다. 자세한 내용은 “[GitHub에서 병합 충돌 해결](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)”을 참조하세요.

{% endtip %}

## 경쟁하는 줄 변경 병합 충돌

경쟁하는 줄 변경으로 인한 병합 충돌을 해결하려면 새 커밋의 다른 분기에서 통합할 변경 내용을 선택해야 합니다.

예를 들어 사용자와 다른 사용자가 동일한 Git 리포지토리의 다른 분기에 있는 동일한 줄에서 _styleguide.md_ 파일을 편집한 경우 이러한 분기를 병합하려고 할 때 병합 충돌 오류가 발생합니다. 이러한 분기를 병합하려면 먼저 이 병합 충돌을 새 커밋으로 해결해야 합니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 병합 충돌이 있는 로컬 Git 리포지토리로 이동합니다.
  ```shell
  cd REPOSITORY-NAME
  ```
3. 병합 충돌의 영향을 받는 파일 목록을 생성합니다. 이 예제에서 *styleguide.md* 파일에 병합 충돌이 있습니다.
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. [{% 데이터 variables.product.prodname_vscode %}](https://code.visualstudio.com/)과 같이 즐겨 찾는 텍스트 편집기를 열고 병합 충돌이 있는 파일로 이동합니다.
5. 파일에서 병합 충돌의 시작을 보려면 충돌 표식 `<<<<<<<`에 대해 파일을 검색하세요. 텍스트 편집기에서 파일을 열면 `<<<<<<< HEAD` 줄 뒤에 헤드 또는 베이스 분기의 변경 내용이 표시됩니다. 다음으로 변경 내용을 다른 분기의 변경 내용과 구분하는 `=======`이 표시되고 그 뒤에 `>>>>>>> BRANCH-NAME`이 표시됩니다. 이 예제에서 한 사람은 베이스 또는 헤드 분기에 “문제 열기”라고 썼고 다른 사람은 비교 분기 또는 `branch-a`에 “IRC에 질문하기”를 썼습니다.

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} 이 예제에서 두 변경 내용 모두 최종 병합에 통합됩니다.

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. 변경 내용을 추가하거나 스테이징합니다.
  ```shell
  $ git add .
  ```
8. 주석을 사용하여 변경 내용을 커밋합니다.
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

이제 명령줄에서 분기를 병합하거나 {% data variables.product.product_name %}에서 [원격 리포지토리](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)에 변경 내용을 푸시하고 끌어오기 요청에 [변경 내용을 병합](/articles/merging-a-pull-request/)할 수 있습니다.

## 파일 병합 충돌 제거됨

한 분기에서 파일을 삭제하고 다른 사용자가 동일한 파일을 편집하는 파일의 경쟁하는 변경으로 인해 발생하는 병합 충돌을 해결하려면 제거된 파일을 새 커밋에서 삭제할지 또는 유지할지를 선택해야 합니다.

예를 들어 *README.md* 와 같은 파일을 편집하고 다른 사용자가 동일한 Git 리포지토리의 다른 분기에서 동일한 파일을 제거한 경우 이러한 분기를 병합하려고 할 때 병합 충돌 오류가 발생합니다. 이러한 분기를 병합하려면 먼저 이 병합 충돌을 새 커밋으로 해결해야 합니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 병합 충돌이 있는 로컬 Git 리포지토리로 이동합니다.
  ```shell
  cd REPOSITORY-NAME
  ```
2. 병합 충돌의 영향을 받는 파일 목록을 생성합니다. 이 예제에서 *README.md* 파일에 병합 충돌이 있습니다.
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. [{% 데이터 variables.product.prodname_vscode %}](https://code.visualstudio.com/)과 같이 즐겨 찾는 텍스트 편집기를 열고 병합 충돌이 있는 파일로 이동합니다.
6. 제거된 파일을 유지할지 여부를 결정합니다. 텍스트 편집기에서 제거된 파일에 대한 최신 변경 내용을 볼 수 있습니다.

 제거된 파일을 리포지토리에 다시 추가하려면 다음을 수행합니다.
  ```shell
  $ git add README.md
  ```
 리포지토리에서 이 파일을 제거하려면 다음을 수행합니다.
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. 주석을 사용하여 변경 내용을 커밋합니다.
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

이제 명령줄에서 분기를 병합하거나 {% data variables.product.product_name %}에서 [원격 리포지토리](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)에 변경 내용을 푸시하고 끌어오기 요청에 [변경 내용을 병합](/articles/merging-a-pull-request/)할 수 있습니다.

## 추가 참고 자료

- “[병합 충돌 정보](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)”
- “[로컬에서 끌어오기 요청 체크 아웃](/articles/checking-out-pull-requests-locally/)”
