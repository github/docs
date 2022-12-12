---
title: 팀에 사용자 추가
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: '팀이 만들어지면 조직 관리자는 {% 데이터 variables.location.product_location %}의 사용자를 팀에 추가하고 액세스할 수 있는 리포지토리를 결정할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 50cbffa994b09c1b52f084350b9418c8f9b73713
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097752'
---
각 팀에는 [조직이 소유한 리포지토리에 대해 개별적으로 정의된 자체 액세스 권한](/articles/permission-levels-for-an-organization)이 있습니다.

- 소유자 역할이 있는 멤버는 모든 팀에서 기존 조직 멤버를 제거하거나 추가할 수 있습니다.
- 관리자 권한이 부여된 팀 멤버는 해당 팀의 팀 멤버 자격과 리포지토리만 수정할 수 있습니다.

## 팀 설정

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## LDAP 그룹에 팀 매핑(사용자 인증을 위해 LDAP 동기화를 사용하는 인스턴스의 경우)

{% data reusables.enterprise_management_console.badge_indicator %}

LDAP 그룹에 동기화된 팀에 새 멤버를 추가하려면 사용자를 LDAP 그룹의 멤버로 추가하거나 LDAP 관리자에게 문의하세요.

{% endif %}
