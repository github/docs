---
title: 끌어오기 요청에 대한 커밋 다시 지정 구성
intro: '리포지토리의 {% 데이터 variables.location.product_location %}에서 모든 끌어오기 요청 병합에 대해 커밋 재배정을 적용, 허용 또는 사용하지 않도록 설정할 수 있습니다.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
ms.openlocfilehash: 8559b0244e8b194378c625c34fe1ef0853d652b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098741'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. {% ifversion fpt 또는 ghec 또는 ghes > 3.5 또는 ghae > 3.4 %}"끌어오기 요청"{% else %}"병합 단추"{% endif %}에서 **다시베이스 병합 허용을** 선택합니다. 이렇게 하면 기여자가 개별 커밋을 기본 분기에 다시 지정하여 끌어오기 요청을 병합할 수 있습니다. 
{% ifversion default-merge-squash-commit-message %} ![다시 지정 병합 허용 확인란이 강조 표시된 끌어오기 요청 설정의 스크린샷](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %} ![다시 지정 병합 허용 확인란이 강조 표시된 끌어오기 요청 설정의 스크린샷](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![끌어오기 요청 다시 지정된 커밋](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

다른 병합 방법도 선택하면 협력자가 끌어오기 요청을 병합할 때 병합 커밋 유형을 선택할 수 있습니다. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
