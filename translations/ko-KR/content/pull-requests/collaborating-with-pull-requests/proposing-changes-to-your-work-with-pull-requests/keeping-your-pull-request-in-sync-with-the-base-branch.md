---
title: 끌어오기 요청을 베이스 분기와 동기화 상태로 유지
intro: 끌어오기 요청을 연 후 변경 내용이 포함된 헤드 분기를 기본 분기에서 변경된 내용과 함께 업데이트할 수 있습니다.
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139599'
---
## 끌어오기 요청을 동기화 상태로 유지 정보

끌어오기 요청을 병합하기 전에 다른 변경 내용이 베이스 분기에 병합되어 끌어오기 요청의 헤드 분기가 동기화되지 않을 수 있습니다. 끌어오기 요청을 베이스 분기의 최신 변경 내용으로 업데이트하면 병합 전에 문제를 포착하는 데 도움이 될 수 있습니다.

명령줄 또는 끌어오기 요청 페이지에서 끌어오기 요청의 헤드 분기를 업데이트할 수 있습니다. 모두 true이면 **Update branch**(분기 업데이트) 단추가 표시됩니다.

* 끌어오기 요청 분기와 베이스 분기 간에 병합 충돌이 없습니다.
* 끌어오기 요청 분기는 베이스 분기를 사용하여 최신 상태로 유지되지 않습니다.
* 베이스 분기는 병합하기 전에{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} 분기를 최신 상태로 유지하거나 항상 분기 업데이트를 사용하도록 설정해야 합니다{% endif %}.

자세한 내용은 “[병합하기 전에 상태 검사 필요](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}” 및 “[끌어오기 요청 분기를 업데이트하기 위한 제안 관리](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches)”를 참조하세요.{% endif %}

베이스 분기에 끌어오기 요청 분기에서 병합 충돌을 일으키는 변경 내용이 있는 경우 모든 충돌이 해결될 때까지 분기를 업데이트할 수 없습니다. 자세한 내용은 “[병합 충돌 정보](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)”를 참조하세요.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} 끌어오기 요청 페이지에서 기존 병합 또는 다시 지정을 사용하여 끌어오기 요청의 분기를 업데이트할 수 있습니다. 기존 병합은 베이스 분기를 끌어오기 요청의 헤드 분기에 병합하는 병합 커밋을 야기합니다. 다시 지정은 사용자 고유의 분기의 변경 내용을 베이스 분기의 최신 버전에 적용합니다. 병합 커밋이 만들어지지 않으므로 결과는 선형 기록이 있는 분기입니다.
{% else %} 끌어오기 요청 페이지에서 분기를 업데이트하면 기존 병합이 수행됩니다. 결과 병합 커밋은 베이스 분기를 끌어오기 요청의 헤드 분기에 병합합니다.
{% endif %}

## 끌어오기 요청 분기 업데이트

{% data reusables.repositories.sidebar-pr %}

1. “Pull requests”(끌어오기 요청) 목록에서 업데이트하려는 끌어오기 요청을 클릭합니다.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. 페이지 하단의 병합 섹션에서 다음을 수행할 수 있습니다.
   - **Update branch**(분기 업데이트)를 클릭하여 기존 병합을 수행합니다.
   ![분기를 업데이트하는 단추](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - 분기 업데이트 드롭다운 메뉴를 클릭하고, **Update with rebase**(다시 지정을 사용하여 업데이트)를 클릭한 다음, **Rebase branch**(분기 다시 지정)를 클릭하여 베이스 분기를 기반으로 다시 지정하여 업데이트합니다.
   ![병합 및 다시 지정 옵션을 보여 주는 드롭다운 메뉴](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. 페이지 하단의 병합 섹션에서 **Update branch**(분기 업데이트)를 클릭하여 기존 병합을 수행합니다.
  ![분기를 업데이트하는 단추](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## 추가 참고 자료

- [끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- “[끌어오기 요청의 단계 변경](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)”
- “[포크에서 만든 끌어오기 요청 분기에 변경 내용 커밋](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)”
