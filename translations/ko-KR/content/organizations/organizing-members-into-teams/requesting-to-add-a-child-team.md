---
title: 자식 팀 추가 요청
intro: 팀에 유지 관리자 권한이 있는 경우 조직의 계층 구조에서 자신의 팀 아래에 기존 팀을 중첩하도록 요청할 수 있습니다.
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
ms.openlocfilehash: e8012645bb4cdedc2a3aa8f7196adc18253a2600
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878961'
---
팀을 자식으로 추가하도록 요청하면 자식 팀의 유지 관리자에게 요청이 전송됩니다. 자식 팀의 유지 관리자가 요청을 승인하면 자식 팀은 조직의 계층 구조에서 부모 팀 아래에 중첩됩니다.

조직 소유자이거나 자식 팀과 부모 팀 모두에 팀 유지 관리자 권한이 있는 경우 승인을 요청하지 않고 자식 팀을 추가하거나 자식 팀의 설정 페이지에서 자식 팀의 부모를 변경할 수 있습니다. 자세한 내용은 “[조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy)”을 참조하세요.

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. 팀 목록에서 자식 팀을 추가할 팀의 이름을 클릭합니다.
  ![조직의 팀 목록](/assets/images/help/teams/click-team-name.png)
5. 팀 페이지의 맨 위에서 {% octicon "people" aria-label="The people icon" %} **팀** 을 클릭합니다.
  ![팀 페이지의 팀 탭](/assets/images/help/teams/team-teams-tab.png)
6. **팀 추가** 를 클릭합니다.
  ![팀 페이지의 팀 추가 단추](/assets/images/help/teams/add-a-team.png)
7. 자식 팀으로 추가할 팀의 이름을 입력하고 드롭다운 목록에서 선택합니다.
  ![자식 팀의 이름을 입력하는 텍스트 상자 및 자식 팀의 이름을 선택하는 드롭다운 메뉴](/assets/images/help/teams/type-child-team-name.png) {% data reusables.repositories.changed-repository-access-permissions %}
9. **변경 내용 확인** 을 클릭하여 자식 팀 추가 요청을 보냅니다.
  ![리포지토리 액세스 권한의 변경 내용에 대한 정보가 포함된 모달 상자](/assets/images/help/teams/confirm-new-parent-team.png)

## 추가 참고 자료

- “[팀 정보](/articles/about-teams)”
- “[조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy)”
- “[부모 팀 추가 또는 변경 요청](/articles/requesting-to-add-or-change-a-parent-team)”
