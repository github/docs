---
title: 로컬에서 끌어오기 요청 체크 아웃
intro: '누군가가 리포지토리의 포크 또는 분기에서 끌어오기 요청을 보내면 로컬에서 병합하여 병합 충돌을 해결하거나 {% data variables.product.product_name %}에 병합하기 전에 변경 내용을 테스트하고 확인할 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: 4102779dd822eb54105d26198f774de76d241f99
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009057'
---
{% note %}

  **참고:** 끌어오기 요청 작성자는 업스트림 리포지토리 유지 관리자 또는 업스트림 리포지토리에 대한 푸시 액세스 권한이 있는 사용자에게 사용자 소유 포크에서 끌어오기 요청의 비교 분기에 커밋 권한을 부여할 수 있습니다. 자세한 내용은 “[포크에서 만든 끌어오기 요청 분기에 대한 변경 허용](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)”을 참조하세요.

  {% endnote %}

## 로컬에서 활성 끌어오기 요청 수정

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. 끌어오기 요청 목록에서 수정하려는 끌어오기 요청을 클릭합니다.{% ifversion fpt or ghec %}
3. 끌어오기 요청을 열 위치를 선택하려면 **{% octicon "triangle-down" aria-label="The down triangle icon" %}으로 열기** 드롭다운을 선택하고 탭 중 하나를 클릭합니다.
  ![명령줄 끌어오기 요청 명령에 액세스할 수 있는 링크](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. 병합 상자에서 **명령줄 지침** 을 클릭합니다. 제안된 끌어오기 요청을 가져오는 단계의 순서를 따릅니다.
  ![명령줄 끌어오기 요청 명령에 액세스할 수 있는 링크](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. 필요에 따라 {% data variables.product.prodname_desktop %}에서 제안된 변경 내용을 보려면 **{% data variables.product.prodname_desktop %}에서 열기** 를 클릭합니다.
  ![데스크톱에서 로컬로 끌어오기 요청을 여는 링크](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

로컬로 끌어오기 요청을 체크 아웃하려면 `gh pr checkout` 하위 명령을 사용합니다. `pull-request`를 끌어오기 요청의 숫자, URL 또는 헤드 분기로 바꿉니다.

```shell
gh pr checkout PULL-REQUEST
```

{% endcli %}

## 로컬에서 비활성 끌어오기 요청 수정

끌어오기 요청 작성자가 요청에 응답하지 않거나 포크를 삭제한 경우에도 끌어오기 요청을 병합할 수 있습니다. 그러나 끌어오기 요청을 변경하고 작성자가 응답하지 않는 경우 끌어오기 요청을 업데이트하기 위한 몇 가지 추가 단계를 수행해야 합니다.

끌어오기 요청이 열리면 {% data variables.product.product_name %}는 모든 변경 내용을 원격으로 저장합니다. 즉, 끌어오기 요청의 커밋은 끌어오기 요청이 병합되기 전에도 리포지토리에서 사용할 수 있습니다. 열려 있는 끌어오기 요청을 가져와서 직접 다시 만들 수 있습니다.

누구나 이전에 열린 끌어오기 요청을 사용하여 작업을 계속하거나, 테스트하거나, 추가 변경 내용으로 새 끌어오기 요청을 열 수 있습니다. 그러나 푸시 액세스 권한이 있는 협력자만 끌어오기 요청을 병합할 수 있습니다.

{% data reusables.repositories.sidebar-issue-pr %}
2. “끌어오기 요청” 목록에서 병합하려는 끌어오기 요청을 클릭합니다.
3. 비활성 끌어오기 요청의 ID 번호를 찾습니다. 끌어오기 요청의 제목 바로 뒤의 숫자 시퀀스입니다.
  ![끌어오기 요청 ID 번호](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. ID 번호를 기반으로 하는 끌어오기 요청에 대한 참조를 가져와 프로세스에서 새 분기를 만듭니다.
  ```shell
  $ git fetch origin pull/ID/head:BRANCH_NAME
  ```
6. 이 끌어오기 요청을 기반으로 하는 새 분기로 전환합니다.
  ```shell
  [main] $ git checkout BRANCH_NAME
  > Switched to a new branch 'BRANCH_NAME'
  ```
7. 이 시점에서 이 분기를 사용하여 원하는 모든 작업을 수행할 수 있습니다. 일부 로컬 테스트를 실행하거나 다른 분기를 분기에 병합할 수 있습니다.
8. 준비가 되면 새 분기를 푸시할 수 있습니다.
  ```shell
  [pull-inactive-pull-request] $ git push origin BRANCH_NAME
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  >  * [new branch]      BRANCH_NAME -> BRANCH_NAME
  ```
9. 새 분기로 [새 끌어오기 요청을 만듭니다](/articles/creating-a-pull-request).

## 오류: 일부 참조를 푸시하지 못했습니다.

원격 `refs/pull/` 네임스페이스는 읽기 전용입니다. 커밋을 푸시하려고 하면 다음 오류가 표시됩니다.
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:USERNAME/REPOSITORY.git'
```

{% tip %}

**팁:** 원격 참조를 제거하거나 이름을 바꾸면 로컬 `refs/pull/origin/` 네임스페이스가 `git-remote`에 대한 호출의 영향을 받지 않습니다.

{% endtip %}
