---
title: 마일스톤별로 문제 및 끌어오기 요청 필터링
intro: '문제와 끌어오기 요청은 연결된 마일스톤에 따라 필터링할 수 있습니다. [문제 또는 끌어오기 요청을 마일스톤과 연결](/articles/associating-milestones-with-issues-and-pull-requests)한 후에는 해당 마일스톤을 기준으로 항목을 찾을 수 있습니다. 마일스톤 내에서 문제 및 끌어오기 요청의 우선 순위를 지정할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135292'
---
{% tip %}

**팁:**

- 검색 표시줄을 사용하여 문제 및 끌어오기 요청을 필터링하려면 마일스톤 검색 구문을 사용할 수 있습니다. My Milestone이라는 마일스톤의 경우 검색 구문은 다음과 같습니다. `milestone:"My Milestone"`.
- 필터 선택을 취소하려면 **현재 검색 쿼리, 필터 및 정렬 지우기** 를 클릭합니다.
-  {% data variables.product.prodname_cli %}를 사용하여 문제 또는 끌어오기 요청을 필터링할 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_cli %} 설명서의 "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" 또는 "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)"를 참조하세요.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. **마일스톤** 을 선택하여 리포지토리에 사용할 수 있는 모든 마일스톤의 목록을 확인합니다.
  ![마일스톤 단추](/assets/images/help/issues/issues_milestone_button.png)
4. 목록에서 관심이 있는 마일스톤을 선택합니다. 마일스톤 페이지에서 연결된 모든 문제 및 끌어오기 요청을 포함하여 마일스톤 관련 정보를 볼 수 있습니다. 자세한 내용은 “[마일스톤 정보](/articles/about-milestones)”를 참조하세요.

## 추가 참고 자료

- "[문제 및 끌어오기 요청 필터링 및 검색](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
- “[프로젝트 보드에서 카드 필터링](/articles/filtering-cards-on-a-project-board)”
