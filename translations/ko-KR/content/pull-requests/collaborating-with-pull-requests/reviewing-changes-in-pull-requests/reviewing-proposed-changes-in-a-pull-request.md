---
title: 끌어오기 요청에서 제안된 변경 내용 검토
intro: '끌어오기 요청에서 커밋, 변경된 파일 및 기본 파일과 분기 비교 간의 차이점을 검토하고 논의할 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: 8ea199ad1dc2f574f8820bde3e0529112645bc23
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158591'
---
## 끌어오기 요청 검토 정보

끌어오기 요청의 변경 내용을 한 번에 하나의 파일씩 검토할 수 있습니다. 끌어오기 요청에서 파일을 검토하는 동안 특정 변경 내용에 대한 개별 주석을 남길 수 있습니다. 각 파일 검토를 완료한 후 파일을 확인한 것으로 표시할 수 있습니다. 이렇게 하면 파일이 축소되므로 검토해야 하는 파일을 식별할 수 있습니다. 끌어오기 요청 헤더의 진행률 표시줄에는 확인한 파일의 수가 표시됩니다. 원하는 수만큼 파일을 검토한 후에는 요약 주석과 함께 검토를 제출하여 끌어오기 요청을 승인하거나 추가 변경을 요청할 수 있습니다.

{% data reusables.search.requested_reviews_search_tip %}

## 검토 시작

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   {% octicon "gear" aria-label="The Settings gear" %}를 클릭하고 통합 보기 또는 분할 보기를 선택하여 이 탭에서 차이 보기의 형식을 변경할 수 있습니다. 선택한 항목은 다른 끌어오기 요청에 대한 차이를 볼 때 적용됩니다.

   ![차이 보기 설정](/assets/images/help/pull_requests/diff-view-settings.png)

   공백 차이를 숨기도록 선택할 수도 있습니다. 선택한 항목은 이 끌어오기 요청에만 적용되며 다음에 이 페이지를 방문할 때 기억됩니다.
{% endif %}
1. 필요에 따라 파일을 필터링하여 검토하려는 파일만 표시하거나{% ifversion pr-tree-view %} 파일 트리를 사용하여 특정 파일로 이동합니다{% endif %}. 자세한 내용은 “[끌어오기 요청의 파일 필터링](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)”을 참조하세요.
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. 완료되면 **검토 시작** 을 클릭합니다. 이미 검토를 시작한 경우 **검토 주석 추가** 를 클릭할 수 있습니다.

   ![검토 시작 단추](/assets/images/help/pull_requests/start-a-review-button.png)

검토를 제출하기 전에는 줄 주석이 _보류 중_ 이며 자신에게만 표시됩니다. 검토를 제출하기 전에 언제든지 보류 중인 주석을 편집할 수 있습니다. 보류 중인 모든 주석을 포함하여 보류 중인 검토를 취소하려면 대화 탭의 타임라인 끝까지 아래로 스크롤한 다음 **검토 취소** 를 클릭합니다.

![검토 취소 단추](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

[{% data variables.product.prodname_github_codespaces %}](/codespaces/overview)를 사용하여 끌어오기 요청을 테스트, 실행, 검토할 수 있습니다.

1. “[끌어오기 요청 열기](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)”에 설명된 대로 codespace에서 끌어오기 요청을 엽니다.
1. 작업 표시줄에서 **GitHub Pull Request**(GitHub 끌어오기 요청) 보기를 클릭합니다. 이 보기는 codespace에서 끌어오기 요청을 열 때만 나타납니다.

   ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/github-pr-view.png)

1. 특정 파일을 검토하려면 사이드바에서 **Open File**(파일 열기) 아이콘을 클릭합니다.

   ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/changes-in-files.png)

1. 검토 설명을 추가하려면 줄 번호 옆에 있는 **+** 아이콘을 클릭합니다. 검토 설명을 입력한 다음 **Start Review**(검토 시작)를 클릭합니다.

   ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/start-review.png)

1. 검토 설명 추가가 완료되면 사이드바에서 설명을 제출하거나, 변경을 승인하거나, 변경을 요청할 수 있습니다.

   ![codespace에서 PR을 여는 옵션](/assets/images/help/codespaces/submit-review.png)

{% data variables.product.prodname_github_codespaces %}에서 끌어오기 요청을 검토하는 방법에 대한 자세한 내용은 "[끌어오기 요청에 {% data variables.product.prodname_github_codespaces %} 사용"을 참조하세요.](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## 종속성 변경 검토

끌어오기 요청에 종속성에 대한 변경이 포함된 경우 매니페스트 또는 잠금 파일에 대한 종속성 검토를 사용하여 변경된 내용을 확인하고 변경 내용에 보안 취약성이 있는지 확인할 수 있습니다. 자세한 내용은 “[끌어오기 요청에서 종속성 변경 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”를 참조하세요.

{% data reusables.repositories.changed-files %}

1. 매니페스트 또는 잠금 파일의 헤더 오른쪽에서 **{% octicon "file" aria-label="The rich diff icon" %}** 서식 있는 차이 단추를 클릭하여 종속성 검토를 표시합니다.

   ![서식 있는 차이 단추](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## 파일을 확인한 것으로 표시

파일 검토를 완료한 후 파일을 확인한 것으로 표시할 수 있으며, 그러면 파일이 축소됩니다. 파일을 확인한 후 파일이 변경되면 확인한 것으로 표시되지 않습니다.

{% data reusables.repositories.changed-files %}
2. 검토를 완료한 파일의 헤더 오른쪽에서 **확인함** 을 선택합니다.

   ![확인함 확인란](/assets/images/help/pull_requests/viewed-checkbox.png)

## 요청 제출

끌어오기 요청에서 원하는 모든 파일을 검토한 후 검토를 제출합니다.

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. 남기고자 하는 검토 유형을 선택합니다.

   ![검토 옵션이 있는 라디오 단추](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - 변경 내용을 명시적으로 승인하거나 추가 변경을 요청하지 않은 채 일반 피드백을 남기려면 **주석** 을 선택합니다.
    - 피드백을 제출하고 끌어오기 요청에서 제안된 변경 내용의 병합을 승인하려면 **승인** 을 선택합니다.
    - 끌어오기 요청을 병합하기 전에 해결해야 하는 피드백을 제출하려면 **변경 내용 요청** 을 선택합니다.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 추가 참고 자료

- “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”
- “[검토 상태별 끌어오기 요청 필터링](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)”
