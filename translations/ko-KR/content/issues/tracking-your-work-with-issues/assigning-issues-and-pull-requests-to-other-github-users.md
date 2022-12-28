---
title: 다른 GitHub 사용자에게 문제 할당 및 끌어오기 요청
intro: 담당자는 특정 문제 및 끌어오기 요청에 대해 작업하는 사용자를 명확히 합니다.
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Assign issues & PRs
ms.openlocfilehash: 0e1f4029ddcd180e892e43257ae3a75d0046ce1d
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878454'
---
## 문제 및 끌어오기 요청 담당자 정보

각 문제 또는 끌어오기 요청에 여러 사람을 할당할 수 있습니다(자신, 문제 또는 끌어오기 요청에 댓글을 달았던 사람, 리포지토리에 대한 쓰기 권한이 있는 사람, 리포지토리에 대한 읽기 권한이 있는 조직 구성원). 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 대한 액세스 권한](/articles/access-permissions-on-github)”을 참조하세요.

공용 리포지토리 및 유료 계정에 대한 프라이빗 리포지토리의 문제 및 끌어오기 요청에 최대 10명을 할당할 수 있습니다. 무료 요금제의 프라이빗 리포지토리는 문제 또는 끌어오기 요청당 한 명으로 제한됩니다.

## 개별 문제 또는 끌어오기 요청 할당

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 다른 사람에게 할당하려는 문제 또는 끌어오기 요청을 엽니다.
4. 문제 또는 끌어오기 요청에 할당된 사람이 없는 경우 **자신에게 할당** 을 클릭하여 자신에게 할당하세요.
  ![자신에게 할당 항목](/assets/images/help/issues/assign_yourself.png)
5. 오른쪽 메뉴에서 **담당자** 를 클릭합니다.
   ![담당자 메뉴 항목](/assets/images/help/issues/assignee_menu.png)
6. 사용자에게 문제 또는 끌어오기 요청을 할당하려면 사용자 이름을 입력하다가 해당 이름이 나타나면 클릭합니다. 문제 또는 끌어오기 요청에 최대 10명의 담당자를 선택하고 추가할 수 있습니다.
  ![문제 할당 드롭다운](/assets/images/help/issues/issues_assigning_dropdown.png)

## 여러 문제 또는 끌어오기 요청 할당

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 다른 사람에게 할당하려는 항목 옆에 있는 확인란을 선택합니다.
  ![문제 메타데이터 확인란](/assets/images/help/issues/issues_assign_checkbox.png)
4. 오른쪽 위 모퉁이에서 **할당** 을 클릭합니다.
5. 사용자에게 항목을 할당하려면 사용자 이름을 입력하다가 해당 이름이 나타나면 클릭합니다. 문제 또는 끌어오기 요청에 최대 10명의 담당자를 선택하고 추가할 수 있습니다.
  ![문제 할당 드롭다운](/assets/images/help/issues/issues_assigning_dropdown.png)

## 추가 참고 자료

* “[담당자별로 이슈 및 끌어오기 요청 필터링](/articles/filtering-issues-and-pull-requests-by-assignees)”
