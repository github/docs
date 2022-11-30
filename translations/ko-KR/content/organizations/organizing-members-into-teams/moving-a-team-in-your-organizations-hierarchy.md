---
title: 조직의 계층 구조에서 팀 이동
intro: 팀 유지 관리자 및 조직 소유자는 부모 팀 아래에 팀을 중첩하거나 중첩된 팀의 부모를 변경하거나 제거할 수 있습니다.
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
ms.openlocfilehash: 205ab40d04d613c54b498b9712e5f199e1433558
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125503'
---
조직 소유자는 모든 팀의 부모를 변경할 수 있습니다. 팀 유지 관리자가 자식 팀과 부모 팀 모두의 유지 관리자인 경우 팀의 부모를 변경할 수 있습니다. 자식 팀의 유지 관리자 권한이 없는 팀 유지 관리자는 부모 또는 자식 팀을 추가하도록 요청할 수 있습니다. 자세한 내용은 “[부모 팀 추가 또는 변경 요청](/articles/requesting-to-add-or-change-a-parent-team)” 및 “[자식 팀 추가 요청](/articles/requesting-to-add-a-child-team)”을 참조하세요.

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**팁:**
- 팀의 부모는 비밀 팀으로 변경할 수 없습니다. 자세한 내용은 “[팀 정보](/articles/about-teams)”를 참조하세요.
- 부모 팀은 자식 팀 중 하나에 중첩할 수 없습니다.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. 팀 목록에서 부모를 변경하려는 팀의 이름을 클릭합니다.
  ![조직의 팀 목록](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. 드롭다운 메뉴를 사용하여 부모 팀을 선택하거나 기존 부모를 제거하려면 **선택한 값 지우기** 를 선택합니다.
  ![조직의 팀을 나열하는 드롭다운 메뉴](/assets/images/help/teams/choose-parent-team.png)
7. **업데이트** 를 클릭합니다.
{% data reusables.repositories.changed-repository-access-permissions %}
9. **새 부모 팀 확인** 을 클릭합니다.
  ![리포지토리 액세스 권한의 변경 내용에 대한 정보가 포함된 모달 상자](/assets/images/help/teams/confirm-new-parent-team.png)

## 추가 참고 자료

- “[팀 정보](/articles/about-teams)”
