---
title: 끌어오기 요청 검토 정보
intro: '검토를 통해 협력자는 끌어오기 요청에서 제안된 변경 사항에 대해 의견을 제시하거나, 변경 내용을 승인하거나, 끌어오기 요청이 병합되기 전에 추가 변경을 요청할 수 있습니다. 리포지토리 관리자는 병합하기 전에 모든 끌어오기 요청을 승인하도록 요구할 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
ms.openlocfilehash: b68da308dc1e405f2b8fff5b0dd85dadbeabef80
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179409'
---
## 끌어오기 요청 검토 정보

끌어오기 요청이 열리면 읽기 권한이 있는 모든 사용자가 제안되는 변경 내용을 검토하고 주석을 추가할 수 있습니다. 작성자가 끌어오기 요청에서 직접 적용할 수 있는 코드 줄에 대한 특정 변경 내용을 제안할 수도 있습니다. 자세한 내용은 “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”를 참조하세요.

{% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

리포지토리 소유자 및 협력자는 특정 사람의 끌어오기 요청 검토를 요청할 수 있습니다. 조직 구성원은 리포지토리에 대한 읽기 권한이 있는 팀에 끌어오기 요청 검토를 요청할 수도 있습니다. 자세한 내용은 “[끌어오기 요청 검토 요청](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)”을 참조하세요. 전체 팀 대신 자동으로 할당할 팀 구성원의 하위 집합을 지정할 수 있습니다. 자세한 내용은 “[팀의 코드 검토 설정 관리](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)”를 참조하세요.

검토를 통해 제안된 변경 내용을 논의할 수 있으며 변경 내용이 리포지토리의 기여 지침 및 기타 품질 표준을 충족하는지 확인할 수 있습니다. CODEOWNERS 파일에서 특정 형식 또는 영역의 코드를 소유하는 개인 또는 팀을 정의할 수 있습니다. 끌어오기 요청이 정의된 소유자가 있는 코드를 수정하면 해당 개인 또는 팀에 자동으로 검토자로 요청합니다. 자세한 내용은 “[코드 소유자 정보](/articles/about-code-owners/)”를 참조하세요.

{% ifversion fpt or ghec %}검토해야 하는 끌어오기 요청에 대한 미리 알림을 예약할 수 있습니다. 자세한 내용은 “[끌어오기 요청에 대한 예약된 미리 알림 관리](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)”를 참조하세요.{% endif %}

![줄 주석이 있는 변경 내용을 요청하는 검토의 헤더](/assets/images/help/pull_requests/review-header-with-line-comment.png)

검토에는 다음과 같은 세 가지 가능한 상태가 있습니다.
- **Comment**(주석): 변경 내용을 명시적으로 승인하거나 추가 변경 내용을 요청하지 않고 일반 피드백을 제출합니다.
- **Approve**(승인): 피드백을 제출하고 끌어오기 요청에 제안된 변경 내용 병합을 승인합니다.
- **Request changes**(변경 내용 요청): 끌어오기 요청을 병합하기 전에 해결해야 하는 피드백을 제출합니다.

![검토 상태 이미지](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

대화 타임라인에서 끌어오기 요청이 받은 모든 검토를 볼 수 있으며, 끌어오기 요청의 병합 상자에서 리포지토리 소유자 및 협력자의 검토를 볼 수 있습니다.

![병합 상자의 리뷰 이미지](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## 검토 다시 요청

{% data reusables.pull_requests.re-request-review %}

## 필수 검토

{% data reusables.pull_requests.required-reviews-for-prs-summary %} 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”를 참조하세요.

{% tip %}

**팁**: 필요한 경우 리포지토리에 대한 관리자 또는 쓰기 권한이 있는 사람이 끌어오기 요청 검토를 해제할 수 있습니다.  자세한 내용은 “[끌어오기 요청 검토 해제](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”를 참조하세요.

{% endtip %}

## 추가 참고 자료

- “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”
- “[끌어오기 요청 검토 보기](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)”
- “[리포지토리 기여자에 대한 지침 설정](/articles/setting-guidelines-for-repository-contributors)”
