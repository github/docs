---
title: 부모 팀 추가 또는 변경 요청
intro: 팀에 유지 관리자 권한이 있는 경우 조직의 계층 구조에서 부모 팀 아래에 팀을 중첩하도록 요청할 수 있습니다.
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add or change parent team
ms.openlocfilehash: d277f8177e6a09e308792b1f7c01832851aec878
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880470'
---
팀의 부모를 추가하거나 변경하도록 요청하면 부모 팀의 유지 관리자에게 요청이 전송됩니다. 새 부모 팀의 유지 관리자가 요청을 승인하면 팀은 조직의 계층 구조에서 부모 팀 아래에 자식 팀으로 중첩됩니다.

조직 소유자이거나 자식 팀 및 부모 팀에 팀 유지 관리자 권한이 있는 경우, 승인을 요청하지 않고 부모 팀을 추가하거나 팀의 설정 페이지에서 팀의 부모를 변경할 수 있습니다. 자세한 내용은 “[조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy)”을 참조하세요.

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. 팀 목록에서 부모 아래에 중첩할 팀의 이름을 클릭합니다.
  ![조직의 팀 목록](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. “부모 팀”에서 “부모 팀 선택” 드롭다운 메뉴를 사용하여 새 부모 팀의 이름을 클릭합니다.
  ![조직의 팀을 나열하는 드롭다운 메뉴](/assets/images/help/teams/choose-parent-team.png)
7. **변경 내용 저장** 을 클릭합니다.
{% data reusables.repositories.changed-repository-access-permissions %}
9. **변경 내용 확인** 을 클릭하여 팀의 부모를 추가하거나 변경하는 요청을 보냅니다.
  ![리포지토리 액세스 권한의 변경 내용에 대한 정보가 포함된 모달 상자](/assets/images/help/teams/confirm-new-parent-team.png)

## 추가 참고 자료

- “[팀 정보](/articles/about-teams)”
- “[조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy)”
- “[자식 팀 추가 요청](/articles/requesting-to-add-a-child-team)”
