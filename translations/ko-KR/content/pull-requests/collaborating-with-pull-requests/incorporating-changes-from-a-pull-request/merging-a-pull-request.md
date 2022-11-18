---
title: 끌어오기 요청 병합
intro: 작업이 완료되면 끌어오기 요청을 업스트림 분기에 병합합니다. 리포지토리에 대한 푸시 액세스 권한이 있는 사용자는 누구나 병합을 완료할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: a41d467fa765e54cb1cb9254394237cc32c9a7b0
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009161'
---
## 끌어오기 요청 병합 정보

끌어오기 요청에서 헤드 분기에서 변경한 내용을 기본 분기에 병합할 것을 제안합니다. 기본적으로 헤드 분기가 기본 분기와 충돌하지 않는 한 언제든지 끌어오기 요청을 병합할 수 있습니다. 그러나 끌어오기 요청을 특정 분기에 병합할 수 있는 경우에 제한이 있을 수 있습니다. 예를 들어 필요한 상태 검사가 전달되는 경우에만 끌어오기 요청을 기본 분기에 병합할 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches)”를 참조하세요.

{% data reusables.pull_requests.you-can-auto-merge %}

끌어오기 요청에 병합 충돌이 있거나 병합하기 전에 변경 내용을 테스트하려는 경우 [로컬에서 끌어오기 요청을 확인](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)하고 명령줄을 사용하여 병합할 수 있습니다.

초안 끌어오기 요청을 병합할 수 없습니다. 초안 끌어오기 요청에 대한 자세한 내용은 “[끌어오기 요청 정보](/articles/about-pull-requests#draft-pull-requests)”를 참조하세요.

끌어오기 요청을 병합할 때 끌어오기 요청의 헤드 분기가 자동으로 삭제되도록 리포지토리를 구성할 수 있습니다. 자세한 내용은 “[분기 자동 삭제 관리](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)”를 참조하세요.

{% note %}

**참고:** {% data reusables.pull_requests.retargeted-on-branch-deletion %} 자세한 내용은 "[분기 정보](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)"를 참조하세요.

{% endnote %}

끌어오기 요청은 빠른 전달 옵션을 사용하여 병합되는 [squash된 커밋 또는 다시 지정 커밋이 있는 끌어오기 요청](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)을 제외하고 [`--no-ff` 옵션](https://git-scm.com/docs/git-merge#_fast_forward_merge)을 사용하여 병합됩니다.

{% data reusables.pull_requests.close-issues-using-keywords %}

토픽 분기의 변경 내용을 업스트림 분기에 병합하지 않으려면 병합하지 않고 [끌어오기 요청을 닫을](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) 수 있습니다.

## 끌어오기 요청 병합

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. “끌어오기 요청” 목록에서 병합하려는 끌어오기 요청을 클릭합니다.
3. 리포지토리에 대해 사용하도록 설정된 병합 옵션에 따라 다음을 수행할 수 있습니다.
    - **병합 끌어오기 요청** 을 클릭하여 [모든 커밋을 기본 분기에 병합](/articles/about-pull-request-merges/)합니다. **병합 끌어오기 요청** 옵션이 표시되지 않으면 병합 드롭다운 메뉴를 클릭하고 **병합 커밋 만들기** 를 선택합니다.
    ![병합-끌어오기-요청-버튼](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - 병합 드롭다운 메뉴를 클릭하고 **Squash 및 병합** 을 선택한 다음, **Squash 및 병합** 단추를 클릭하여 [커밋을 하나의 커밋으로 Squash](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits)합니다.
    ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - 병합 드롭다운 메뉴를 클릭하고 **다시 지정 및 병합** 을 선택한 다음, **다시 지정 및 병합** 단추를 클릭하여 [커밋을 기본 분기에 개별적으로 다시 지정](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)합니다.
    ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **참고:** 다시 지정 및 병합은 항상 커밋한 사람의 정보를 업데이트하고 새 커밋 SHA를 만듭니다. 자세한 내용은 “[끌어오기 요청 병합 정보](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)”를 참조하세요.

    {% endnote %}
4. 메시지가 표시되면 커밋 메시지를 입력하거나 기본 메시지를 수락합니다.

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![커밋 메시지 필드](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **참고:** 병합을 다시베이스하는 데 전자 메일 선택기를 사용할 수 없습니다. 병합 커밋{% ifversion squash-merge-email %}을(를) 만들지 않습니다. squash 병합의 경우 끌어오기 요청 작성자이고 계정과 연결된 전자 메일 주소가 두 개 이상인 경우에만 전자 메일 선택기가 표시됩니다. {% else %}, 또는 squash 병합의 경우 끌어오기 요청을 만든 사용자가 스쿼시된 커밋의 작성자로 크레딧을 제공합니다. {% endif %}

   {% endnote %}

6. **병합 확인**, **squash 및 병합 확인** 또는 **다시 지정 및 병합 확인** 을 클릭합니다.
6. 필요에 따라 [분기를 삭제](/articles/deleting-unused-branches)합니다. 이렇게 하면 리포지토리의 분기 목록이 깔끔하게 유지됩니다.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

끌어오기 요청을 병합하려면 `gh pr merge` 하위 명령을 사용합니다. `pull-request`를 끌어오기 요청의 숫자, URL 또는 헤드 분기로 바꿉니다.

```shell
gh pr merge PULL-REQUEST
```

대화형 프롬프트에 따라 병합을 완료합니다. 선택할 수 있는 병합 메서드에 대한 자세한 내용은 "[끌어오기 요청 병합 정보](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"를 참조하세요.

또는 플래그를 사용하여 대화형 프롬프트를 건너뛸 수 있습니다. 예를 들어 이 명령은 커밋 메시지 "my squash commit"을 사용하여 커밋을 단일 커밋으로 스쿼시하고 스쿼시된 커밋을 기본 분기에 병합한 다음, 로컬 및 원격 분기를 삭제합니다.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## 추가 참고 자료

- "[끌어오기 요청 되돌리기](/articles/reverting-a-pull-request)"
- {% data variables.product.prodname_desktop %}을 사용하여 "[분기 동기화](/desktop/guides/contributing-to-projects/syncing-your-branch/)"
- “[끌어오기 요청 병합 정보](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”
- “[병합 충돌 처리](/github/collaborating-with-pull-requests/addressing-merge-conflicts)”
