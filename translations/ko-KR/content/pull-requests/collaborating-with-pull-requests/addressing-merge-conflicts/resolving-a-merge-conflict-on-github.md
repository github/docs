---
title: GitHub에서 병합 충돌 해결
intro: 충돌 편집기를 사용하여 GitHub에서 경쟁하는 줄 변경을 포함하는 간단한 병합 충돌을 해결할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
ms.openlocfilehash: 48613d8c8974d14a1de70e0dee5a7f4819d37fd9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137839'
---
사용자가 Git 리포지토리의 다른 분기에서 동일한 파일의 동일한 줄을 다르게 변경하는 경우와 같이 경쟁하는 줄 변경으로 인해 발생하는 {% data variables.product.product_name %}의 병합 충돌만 해결할 수 있습니다. 다른 모든 유형의 병합 충돌의 경우 명령줄에서 로컬로 충돌을 해결해야 합니다. 자세한 내용은 “[명령줄을 사용하여 병합 충돌 해결](/articles/resolving-a-merge-conflict-using-the-command-line/)”을 참조하세요.

{% ifversion ghes or ghae %} 사이트 관리자가 리포지토리 간의 끌어오기 요청에 대해 병합 충돌 편집기를 사용하지 않도록 설정하면 {% data variables.product.product_name %}에서 충돌 편집기를 사용할 수 없으며 명령줄에서 병합 충돌을 해결해야 합니다. 예를 들어 병합 충돌 편집기를 사용하지 않도록 설정한 경우 포크와 업스트림 리포지토리 간의 끌어오기 요청에 사용할 수 없습니다.
{% endif %}

{% warning %}

**경고:** {% data variables.product.product_name %}의 병합 충돌을 해결하면 끌어오기 요청의 전체 [베이스 분기](/github/getting-started-with-github/github-glossary#base-branch)가 [헤드 분기](/github/getting-started-with-github/github-glossary#head-branch)에 병합됩니다. 이 분기에 커밋하려는지 확인합니다. 헤드 분기가 리포지토리의 기본 분기인 경우 끌어오기 요청의 헤드 분기 역할을 할 새 분기를 만드는 옵션이 제공됩니다. 헤드 분기가 보호되면 충돌 해결을 병합할 수 없으므로 새 헤드 분기를 만들라는 메시지가 표시됩니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches)”를 참조하세요.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. “끌어오기 요청” 목록에서 해결하려는 병합 충돌이 있는 끌어오기 요청을 클릭합니다.
1. 끌어오기 요청의 아래쪽에서 **충돌 해결** 을 클릭합니다.
![병합 충돌 해결 단추](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **팁:** **충돌 해결** 단추가 비활성화된 경우 끌어오기 요청의 병합 충돌이 너무 복잡하여 {% data variables.product.product_name %}{% ifversion ghes or ghae %} 또는 사이트 관리자가 리포지토리{% endif %} 간의 끌어오기 요청에 대해 충돌 편집기를 사용하지 않도록 설정했습니다. 대체 Git 클라이언트를 사용하거나 명령줄에서 Git을 사용하여 병합 충돌을 해결해야 합니다. 자세한 내용은 “[명령줄을 사용하여 병합 충돌 해결](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)”을 참조하세요.

 {% endtip %} {% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} ![ 충돌 표식이 있는 병합 충돌 예제 보기](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. 파일에 둘 이상의 병합 충돌이 있는 경우 다음 충돌 표식 집합으로 아래로 스크롤하고 4단계와 5단계를 반복하여 병합 충돌을 해결합니다.
1. 파일의 모든 충돌을 해결했으면 **해결됨으로 표시** 를 클릭합니다.
 ![해결됨으로 표시 단추 클릭](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. 충돌이 있는 파일이 둘 이상 있는 경우 페이지 왼쪽의 “충돌하는 파일”에서 편집할 다음 파일을 선택하고 끌어오기 요청의 병합 충돌을 모두 해결할 때까지 4~7단계를 반복합니다.
 ![해당하는 경우 다음 충돌 파일 선택](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. 모든 병합 충돌을 해결했으면 **병합 커밋** 을 클릭합니다. 그러면 전체 베이스 분기가 헤드 분기에 병합됩니다.
 ![병합 충돌 해결 단추](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. 메시지가 표시되면 커밋하려는 분기를 검토합니다.

   헤드 분기가 리포지토리의 기본 분기인 경우 충돌을 해결하기 위해 변경한 내용으로 이 분기를 업데이트하거나 새 분기를 만들어 끌어오기 요청의 헤드 분기로 사용할 수 있습니다.
 ![업데이트할 분기를 검토하라는 메시지 표시](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   새 분기를 만들도록 선택한 경우 분기의 이름을 입력합니다.

   끌어오기 요청의 헤드 분기가 보호되는 경우 새 분기를 만들어야 합니다. 보호된 분기를 업데이트하는 옵션은 표시되지 않습니다.

   **분기 만들기 및 내 끌어오기 요청 업데이트** 또는 **I understand, continue updating _BRANCH_** 를 클릭합니다. 단추 텍스트는 수행 중인 작업에 해당합니다.
1. 끌어오기 요청을 병합하려면 **끌어오기 요청 병합** 을 선택합니다. 다른 끌어오기 요청 병합 옵션에 대한 자세한 내용은 “[끌어오기 요청 병합](/articles/merging-a-pull-request/)”을 참조하세요.

## 추가 참고 자료

- “[끌어오기 요청 병합 정보](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”
