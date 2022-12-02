---
title: 포크 동기화
intro: 리포지토리의 포크를 동기화하여 업스트림 리포지토리를 최신 상태로 유지합니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
ms.openlocfilehash: 85b149e26cb65a428d7e9b66aea99d6b62430ae0
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188330'
---
## 웹 UI에서 포크 분기 동기화

{% ifversion syncing-fork-web-ui %}
1. {% data variables.product.product_name %}에서 업스트림 리포지토리와 동기화하려는 포크된 리포지토리의 기본 페이지로 이동합니다.
2. **포크 동기화** 드롭다운을 선택합니다.
    ![“포크 동기화” 드롭다운이 강조됨](/assets/images/help/repository/sync-fork-dropdown.png)
3. 업스트림 리포지토리에서의 커밋에 대한 세부 정보를 검토한 다음 **분기 업데이트** 를 클릭합니다.
    ![“분기 업데이트” 단추가 강조된 포크 동기화 모달](/assets/images/help/repository/update-branch-button.png) {% else %}
1. {% data variables.product.product_name %}에서 업스트림 리포지토리와 동기화하려는 포크된 리포지토리의 기본 페이지로 이동합니다.
2. **업스트림 가져오기** 드롭다운을 선택합니다.
    ![“업스트림 가져오기” 드롭다운](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. 업스트림 리포지토리에서의 커밋에 대한 세부 정보를 검토한 다음 **가져오기 및 병합** 을 클릭합니다.
    ![“가져오기 및 병합” 단추](/assets/images/help/repository/fetch-and-merge-button.png){% endif %}

업스트림 리포지토리의 변경으로 인해 충돌이 발생하는 경우 {% data variables.product.company_short %}는 충돌을 해결하기 위한 끌어오기 요청을 만들라는 메시지를 표시합니다.

## 포크 분기를 {% data variables.product.prodname_cli %}와 동기화

{% data reusables.cli.about-cli %} {% data variables.product.prodname_cli %}에 대한 자세한 내용은 “[{% data variables.product.prodname_cli %} 정보](/github-cli/github-cli/about-github-cli)”를 참조하세요.

부모에서 원격 포크를 업데이트하려면 `gh repo sync -b BRANCHNAME` 하위 명령을 사용하고 포크 및 분기 이름을 인수로 제공합니다.

```shell
$ gh repo sync owner/cli-fork -b BRANCH_NAME
```

업스트림 리포지토리의 변경으로 인해 충돌이 발생하는 경우 {% data variables.product.prodname_cli %}는 동기화할 수 없습니다. `-force` 플래그를 설정하여 대상 분기를 덮어쓸 수 있습니다.

## 명령줄에서 포크 분기 동기화

포크를 업스트림 리포지토리와 동기화하려면 먼저 Git에서 업스트림 리포지토리를 가리키는 원격을 구성해야 합니다. 자세한 내용은 "[포크에 대한 원격 리포지토리 구성"을 참조하세요](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 현재 작업 디렉터리를 로컬 프로젝트로 변경합니다.
3. 업스트림 리포지토리에서 분기 및 해당 커밋을 가져옵니다. `BRANCHNAME`에 대한 커밋은 로컬 분기 `upstream/BRANCHNAME`에 저장됩니다.

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
  >  * [new branch]      main     -> upstream/main
  ```

4. 포크의 로컬 기본 분기를 확인합니다. 이 경우 `main`을 사용합니다.

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. 업스트림 기본 분기(이 경우 `upstream/main`)의 변경 내용을 로컬 기본 분기에 병합합니다. 이렇게 하면 로컬 변경 내용이 손실되지 않고 포크의 기본 분기가 업스트림 리포지토리와 동기화됩니다.

  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```
  
  로컬 분기에 고유한 커밋이 없는 경우 Git에서 빠른 전달을 수행합니다. 자세한 내용은 Git 설명서의 [기본 분기 및 병합](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)을 참조하세요.
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  로컬 분기에 고유한 커밋이 있는 경우 충돌을 해결해야 할 수 있습니다. 자세한 내용은 “[병합 충돌 해결](/github/collaborating-with-pull-requests/addressing-merge-conflicts)”을 참조하세요.

{% tip %}

**팁**: 포크를 동기화하면 리포지토리의 로컬 복사본만 업데이트됩니다. {% data variables.location.product_location %}에서 포크를 업데이트하려면 [변경 내용을 푸시](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)해야 합니다.

{% endtip %}
