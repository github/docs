---
title: 팀의 코드 검토 설정 관리
intro: 팀이 끌어오기 요청을 검토하도록 요청하면 알림을 제한하여 팀의 잡음을 줄일 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
  - /organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Code review settings
permissions: Team maintainers and organization owners can configure code review settings.
ms.openlocfilehash: eb4711251f7bebc9088ae711ba8a36dc60acba56
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108828'
---
## 코드 검토 설정 정보

{% ifversion only-notify-requested-members %} 팀과 관련된 잡음을 줄이고 끌어오기 요청 검토에 대한 개별 책임을 명확히 하기 위해 코드 검토 설정을 구성할 수 있습니다.

- 팀 알림
- 자동 할당

## 팀 알림 정보

요청된 팀 구성원에게만 알리도록 선택하면 팀이 끌어오기 요청에 대한 검토 요청을 받았을 때 해당 특정 팀 구성원도 검토하도록 요청을 받는 경우 전체 팀에 알림 보내기를 사용하지 않도록 설정합니다. 이 기능은 리포지토리에 팀이 코드 소유자로 구성된 경우에 특히 유용하지만 리포지토리에 대한 기여자는 끌어오기 요청에 적절한 검토자가 될 특정 개인을 알고 있는 경우가 많습니다. 자세한 내용은 “[코드 사용자 정보](/github/creating-cloning-and-archiving-repositories/about-code-owners)”를 참조하세요.

## 자동 할당 정보
{% endif %}

자동 할당을 사용 설정하면 팀이 끌어오기 요청을 검토하도록 요청될 때마다 팀이 검토자로 제거되고 팀 구성원의 지정된 하위 집합이 팀 위치에 할당됩니다. 코드 검토 할당을 사용하면 팀 전체 또는 팀 구성원의 하위 집합에 대한 검토가 요청될 때 알림을 받을지 여부를 결정할 수 있습니다.

코드 소유자가 자동으로 검토를 요청하는 경우 코드 소유자의 검토를 요구하도록 분기 보호 규칙이 구성되지 않은 한 팀은 여전히 제거되고 개인으로 대체됩니다. 이와 같은 분기 보호 규칙이 있는 경우 팀 요청을 제거할 수 없으므로 개별 요청이 추가로 표시됩니다.

### 라우팅 알고리즘

코드 검토 할당은 가능한 두 알고리즘 중 하나에 따라 검토자를 자동으로 선택하고 할당합니다. 

라운드 로빈 알고리즘은 가장 오래된 검토 요청을 받은 사용자를 기준으로 검토자를 선택하며, 현재 보유하고 있는 미해결 리뷰 수에 관계없이 팀의 모든 구성원 간에 교대로 전환하는 데 초점을 맞춥니다. 

부하 분산 알고리즘은 각 구성원이 최근에 받은 검토 요청의 총 수에 따라 검토자를 선택하고 각 구성원의 미해결 검토 수를 고려합니다. 부하 분산 알고리즘은 각 팀 구성원이 30일 동안 동일한 수의 끌어오기 요청을 검토하도록 합니다.

상태를 “바쁨”으로 설정한 팀 구성원은 검토하도록 선택되지 않습니다. 모든 팀 구성원이 바쁜 경우 끌어오기 요청은 팀 자체에 할당된 상태로 유지됩니다. 사용자 상태에 대한 자세한 내용은 “[상태 설정](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)”을 참조하세요.

{% ifversion only-notify-requested-members %}
## 팀 알림 구성

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. 왼쪽 사이드바에서 **{% octicon "code-review" aria-label="The code-review icon" %} 코드 검토** 를 클릭합니다.
{% else %}
1. 왼쪽 사이드바에서 **코드 검토**
![코드 검토 단추](/assets/images/help/teams/review-button.png)를 클릭하세요. {% endif %}
1. **요청된 팀 구성원에게 알림만**
![코드 검토 팀 알림](/assets/images/help/teams/review-assignment-notifications.png)을 선택합니다.
1. **변경 내용 저장** 을 클릭합니다.
{% endif %}

## 자동 할당 구성
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. 왼쪽 사이드바에서 **{% octicon "code-review" aria-label="The code-review icon" %} 코드 검토** 를 클릭합니다.
{% else %}
1. 왼쪽 사이드바에서 **코드 검토**
![코드 검토 단추](/assets/images/help/teams/review-button.png)를 클릭하세요. {% endif %}
1. **자동 할당 사용** 을 선택합니다.
![자동 할당 단추](/assets/images/help/teams/review-assignment-enable.png)
1. “검토할 팀 구성원 수를 얼마나 지정해야 하나요?”에서 드롭다운 메뉴를 사용하고 각 끌어오기 요청에 할당할 여러 검토자를 선택합니다.
![검토자 수 드롭다운](/assets/images/help/teams/review-assignment-number.png)
1. “라우팅 알고리즘”에서 드롭다운 메뉴를 사용하고 사용할 알고리즘을 선택합니다. 자세한 내용은 “[라우팅 알고리즘](#routing-algorithms)”을 참조하세요.
![라우팅 알고리즘 드롭다운](/assets/images/help/teams/review-assignment-algorithm.png)
1. 필요에 따라 항상 팀의 특정 구성원을 건너뛰려면 **특정 팀 구성원 할당 안 함** 을 선택합니다. 그런 다음, 항상 건너뛸 팀 구성원을 한 명 이상 선택합니다.
![특정 팀 구성원 할당 안 함 확인란 및 드롭다운](/assets/images/help/teams/review-assignment-skip-members.png) {% ifversion ghes < 3.4 %}
1. 필요에 따라 각 끌어오기 검토 요청의 코드 검토 할당으로 선택한 팀 구성원에게만 알리려면 “알림”에서 **팀 구성원을 할당할 경우 전체 팀에 알리지 않음** 을 선택합니다.
{%- endif %} {% ifversion fpt or ghec or ghes or ghae > 3.3 %}
1. 필요에 따라 요청 할당 시 자식 팀의 구성원을 잠재적 검토자로 포함하려면 **자식 팀 구성원** 을 선택합니다.
1. 필요에 따라 할당할 총 멤버 수에 대한 검토가 이미 요청된 구성원 수를 계산하려면 **기존 요청 계산** 을 선택합니다.
1. 필요에 따라 팀 구성원 할당 시 팀에서 검토 요청을 제거하려면 **팀 검토 요청** 을 선택합니다.
{%- endif %}
1. **변경 내용 저장** 을 클릭합니다.

## 자동 할당 사용 안 함
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. **자동 할당 사용** 을 선택하여 확인 표시를 제거합니다.
![코드 검토 할당 단추](/assets/images/help/teams/review-assignment-enable.png)
1. **변경 내용 저장** 을 클릭합니다.
