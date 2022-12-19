---
title: 끌어오기 요청에 대한 커밋 Squash 구성
intro: '리포지토리의 {% 데이터 variables.location.product_location %}에서 모든 끌어오기 요청 병합에 커밋 스쿼시를 적용, 허용 또는 사용하지 않도록 설정할 수 있습니다.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 4de4c0b6da1461358d80e39f1cb00d3b831321b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099222'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. {% ifversion fpt 또는 ghec 또는 ghes > 3.5 또는 ghae > 3.4 %}"끌어오기 요청"{% else %}"병합 단추"{% endif %}에서 **스쿼시 병합 허용을** 선택합니다. 이렇게 하면 기여자가 모든 커밋을 단일 커밋으로 Squash하여 끌어오기 요청을 병합할 수 있습니다. 병합 시 기여자에게 표시되는 기본 커밋 메시지는 끌어오기 요청에 커밋이 1개만 있다면 커밋 제목과 메시지이며, 끌어오기 요청에 커밋이 2개 이상 있다면 끌어오기 요청 제목과 커밋 목록입니다. {% ifversion ghes = 3.6 %} 끌어오기 요청에 있는 커밋 수에 상관없이 항상 끌어오기 요청의 제목을 사용하고 싶다면 **스쿼시 병합 커밋에 PR 제목을 기본으로 사용** 을 선택하세요.{% endif %}{% ifversion default-merge-squash-commit-message %} ![끌어오기 요청 스쿼시된 커밋](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![병합 커밋 허용 확인란이 강조 표시된 끌어오기 요청 설정의 스크린샷](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![끌어오기 요청 스쿼시된 커밋](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. 필요하다면 **스쿼시 병합 허용** 에서 드롭다운을 이용해, 병합할 때 기여자에게 표시되는 기본 스쿼시 메시지의 양식을 선택합니다. 기본 메시지는 끌어오기 요청에 커밋이 1개만 있다면 커밋 제목과 메시지를 사용하고, 끌어오기 요청에 커밋이 2개 이상 있다면 끌어오기 요청 제목과 커밋 목록을 사용합니다. 끌어오기 요청 제목만 사용할 수도 있고, 끌어오기 요청 제목 및 커밋 세부 정보이나 끌어오기 요청 제목 및 설명을 사용할 수 있습니다.
![기본 스쿼시 메시지 드롭다운이 강조 표시된 스크린샷](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

둘 이상의 병합 메서드를 선택하는 경우 협력자는 끌어오기 요청을 병합할 때 사용할 병합 커밋 유형을 선택할 수 있습니다. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## 추가 참고 자료

- “[끌어오기 요청 병합 정보](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”
- “[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”
