---
title: 팀에 조직 멤버 추가
intro: '소유자 또는 팀 유지 관리자 권한이 있는 사용자는 팀에 조직 구성원을 추가할 수 있습니다. 또한 소유자 권한이 있는 사용자는 팀 및 조직에 {% ifversion fpt or ghec %}구성원이 아닌 사용자가 참가하도록 초대{% else %}구성원이 아닌 사용자를 추가{% endif %}할 수 있습니다.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
ms.openlocfilehash: 0a0dcd6b925c2209ae583197963db84ba881c7ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125540'
---
{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
6. 팀 멤버 목록 위에서 **멤버 추가** 를 클릭합니다.
![멤버 추가 단추](/assets/images/help/teams/add-member-button.png) {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## 추가 참고 자료

- “[팀 정보](/articles/about-teams)”
- “[조직 리포지토리에 대한 팀 액세스 관리](/articles/managing-team-access-to-an-organization-repository)”
