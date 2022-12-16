---
title: 리포지토리 내에서 분기 만들기 및 삭제
intro: '{% data variables.product.product_name %}에서 직접 분기를 만들거나 삭제할 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526632'
---
## 분기 만들기
{% data variables.product.product_name %}에서 여러 가지 방법으로 분기를 만들 수 있습니다.

{% note %}

**참고:** 푸시 액세스 권한이 있는 리포지토리에서만 분기를 만들 수 있습니다.

{% endnote %}

{% ifversion create-branch-from-overview %}
### 분기를 통해 분기 만들기 개요
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. **새 분기** 를 클릭합니다.
   ![새 분기 단추가 강조 표시된 분기 개요 페이지의 스크린샷](/assets/images/help/branches/new-branch-button.png)
2. 대화 상자에서 분기 이름을 입력하고 필요에 따라 분기 원본을 변경합니다.  
   리포지토리가 포크인 경우 업스트림 리포지토리를 분기 원본으로 선택하는 옵션도 있습니다.
   ![분기 원본이 강조 표시된 포크에 대한 분기 만들기 모달의 스크린샷](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. **분기 만들기** 를 클릭합니다.
   ![분기 만들기 단추가 강조 표시된 분기 만들기 모달의 스크린샷](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### 분기 드롭다운을 사용하여 분기 만들기
{% data reusables.repositories.navigate-to-repo %}
1. 필요에 따라 리포지토리의 기본 분기가 아닌 다른 분기에서 새 분기를 만들려면 {% octicon "git-branch" aria-label="The branch icon" %} **분기** 를 클릭한 다음, 다른 분기를 선택합니다.
    ![개요 페이지의 분기 링크](/assets/images/help/branches/branches-overview-link.png)
1. 분기 선택기 메뉴를 클릭합니다.
    ![분기 선택기 메뉴](/assets/images/help/branch/branch-selection-dropdown.png)
1. 새 분기의 고유한 이름을 입력한 다음, **분기 만들기** 를 선택합니다.
    ![분기 만들기 텍스트 상자](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### 문제에 대한 분기 만들기
문제 페이지에서 직접 문제를 해결할 분기를 만들고 바로 시작할 수 있습니다. 자세한 내용은 “[문제 해결을 위한 분기 만들기](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)”를 참조하세요.
{% endif %}

## 분기 삭제

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**참고:** 삭제하려는 분기가 리포지토리의 기본 분기인 경우 분기를 삭제하기 전에 새 기본 분기를 선택해야 합니다. 자세한 내용은 “[기본 분기 변경](/github/administering-a-repository/changing-the-default-branch)”을 참조하세요.

{% endnote %}

삭제하려는 분기가 열려 있는 끌어오기 요청과 연결된 경우 분기를 삭제하기 전에 끌어오기 요청을 병합하거나 닫아야 합니다. 자세한 내용은 "[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)" 또는 "[끌어오기 요청 닫기](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)"를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. 삭제할 분기로 스크롤한 다음, {% octicon "trash" aria-label="The trash icon to delete the branch" %}를 클릭합니다.
    ![분기 삭제](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. 하나 이상의 열려 있는 끌어오기 요청과 연결된 분기를 삭제하려는 경우 끌어오기 요청을 닫을 것인지 확인해야 합니다.
   
   ![분기 삭제 확인](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} 자세한 내용은 "[분기 정보](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)"를 참조하세요.

## 추가 참고 자료

- “[분기 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)”
- "[리포지토리에서 분기 보기](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[끌어오기 요청에서 분기 삭제 및 복원](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
