---
title: 끌어오기 요청의 베이스 분기 변경
intro: 끌어오기 요청을 연 후 기본 분기를 변경하여 끌어오기 요청의 변경 내용을 다른 분기와 비교할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137751'
---
{% warning %}

**경고**: 끌어오기 요청의 베이스 분기를 변경하면 일부 커밋이 타임라인에서 제거될 수 있습니다. 주석이 참조한 코드 줄이 더 이상 끌어오기 요청의 변경 내용에 포함되지 않을 수 있으므로 검토 주석이 오래되었을 수 있습니다.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. “끌어오기 요청” 목록에서 수정하려는 끌어오기 요청을 클릭합니다.
3. 끌어오기 요청의 제목 옆에 있는 **편집** 을 클릭합니다. ![끌어오기 요청 편집 단추](/assets/images/help/pull_requests/pull-request-edit.png)
4. 베이스 분기 드롭다운 메뉴에서 [변경 내용을 비교](/github/committing-changes-to-your-project/comparing-commits#comparing-branches)하려는 베이스 분기를 선택합니다. ![베이스 분기 드롭다운 메뉴 ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. 베이스 분기를 변경하는 방법에 대한 정보를 읽고 **베이스 변경** 을 클릭합니다. ![베이스 분기 변경 확인 단추 ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**팁:** 끌어오기 요청을 열면 {% data variables.product.product_name %}는 분기가 참조하는 커밋으로 베이스를 설정합니다. 나중에 분기가 업데이트되면 {% data variables.product.product_name %}는 베이스 분기의 커밋을 업데이트하지 않습니다.

{% endtip %}

## 추가 참고 자료

- “[끌어오기 요청 만들기](/articles/creating-a-pull-request)”
- “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”
- “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”
