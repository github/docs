---
title: 끌어오기 요청 검토 해제
intro: 리포지토리에 검토가 필요한 경우 더 이상 유효하지 않거나 검토자가 승인할 수 없는 끌어오기 요청 검토를 해제할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Dismiss a PR review
ms.openlocfilehash: 658f0b69a24c622a3b5f75d6e330d132040d62c5
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878689'
---
{% data reusables.pull_requests.dismiss_review %} 이렇게 하면 검토 상태가 검토 주석으로 변경됩니다. 검토를 해제할 때 검토를 해제한 이유를 설명하는 주석을 추가해야 합니다. 주석이 끌어오기 요청 대화에 추가됩니다.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. “대화” 탭에서 해제하려는 검토로 스크롤한 다음 {% octicon "chevron-down" aria-label="The down button" %}를 클릭합니다. ![병합 상자의 펼침 단추 아이콘](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **검토 해제** 를 클릭합니다.
![병합 상자의 Kebab 아이콘](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. 검토를 해제하는 이유를 입력한 다음 **검토 해제** 를 클릭합니다.
  ![검토 해제 단추](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## 추가 참고 자료

- “[끌어오기 요청 검토 정보](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”
- “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”
- “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”
