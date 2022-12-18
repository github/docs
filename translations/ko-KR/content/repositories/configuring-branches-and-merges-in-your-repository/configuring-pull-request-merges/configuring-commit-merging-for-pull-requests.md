---
title: 끌어오기 요청에 대한 커밋 병합 구성
intro: '리포지토리의 {% 데이터 variables.location.product_location %}에서 모든 끌어오기 요청 병합에 대해 병합 커밋과 병합을 적용, 허용 또는 사용하지 않도록 설정할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 491e64b66bdf1f4f5f9bf0ddde49cf8abab19938
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097806'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. {% ifversion fpt 또는 ghec 또는 ghes > 3.5 또는 ghae > 3.4 %}"끌어오기 요청"{% else %}"병합 단추"{% endif %}에서 **병합 커밋 허용** 을 선택합니다. 이렇게 하면 기여자가 커밋의 전체 기록과 끌어오기 요청을 병합할 수 있습니다.{% ifversion default-merge-squash-commit-message %} ![병합 커밋 허용 확인란이 강조 표시된 끌어오기 요청 설정의 스크린샷](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %} ![병합 커밋 허용 확인란이 강조 표시된 끌어오기 요청 설정의 스크린샷](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. 필요하다면 **병합 커밋 허용** 에서 드롭다운을 이용해, 병합할 때 기여자에게 표시되는 커밋 메시지의 양식을 선택합니다. 기본 메시지에는 끌어오기 요청 번호와 제목이 포함됩니다. 예들 들어 `Merge pull request #123 from patch-1`입니다. 끌어오기 요청 제목만 사용할 수도 있고, 끌어오기 요청 제목과 설명을 사용할 수도 있습니다. 
![기본 커밋 메시지 드롭다운이 강조 표시된 스크린샷](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

둘 이상의 병합 메서드를 선택하는 경우 협력자는 끌어오기 요청을 병합할 때 사용할 병합 커밋 유형을 선택할 수 있습니다. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## 추가 참고 자료

- “[끌어오기 요청 병합 정보](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”
- “[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”
