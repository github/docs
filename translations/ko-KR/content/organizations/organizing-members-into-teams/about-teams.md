---
title: 팀 정보
intro: 팀은 연계 액세스 권한 및 멘션이 있는 회사 또는 그룹의 구조를 반영하는 조직 멤버의 그룹입니다.
redirect_from:
  - /articles/about-teams
  - /github/setting-up-and-managing-organizations-and-teams/about-teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 3f6d408a9dfbb3564f16b97c7d3ef559672b18f1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099333'
---
![조직의 팀 목록](/assets/images/help/teams/org-list-of-teams.png)

조직 소유자 및 팀 유지 관리자는 팀에게 조직 리포지토리에 대한 관리 권한, 읽기 권한 또는 쓰기 권한을 부여할 수 있습니다. 조직 멤버는 팀의 이름을 멘션하여 전체 팀에게 알림을 보낼 수 있습니다. 조직 멤버는 또한 해당 팀의 검토를 요청하여 전체 팀에게 알림을 보낼 수 있습니다. 조직 멤버는 끌어오기 요청이 열린 리포지토리에 대한 읽기 권한이 있는 특정 팀의 검토를 요청할 수 있습니다. 팀을 CODEOWNERS 파일에서 코드의 특정 유형 또는 영역에 대한 소유자로 지정할 수 있습니다.

자세한 내용은 다음을 참조하세요.
- “[조직 리포지토리에 대한 팀 액세스 관리](/articles/managing-team-access-to-an-organization-repository)”
- "[사람과 팀 멘션](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)"
- “[코드 소유자 정보](/articles/about-code-owners/)”

![팀 멘션 이미지](/assets/images/help/teams/team-mention.png)

{% ifversion ghes %}

또한 LDAP 동기화를 사용하여 {% 데이터 variables.location.product_location %} 팀 구성원 및 팀 역할을 설정된 LDAP 그룹과 동기화할 수 있습니다. 이렇게 하면 {% 데이터 variables.location.product_location %}에 수동으로 속하지 않고 LDAP 서버의 사용자에 대한 역할 기반 액세스 제어를 설정할 수 있습니다. 자세한 내용은 “[LDAP 동기화 사용](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)”을 참조하세요.

{% endif %}

{% data reusables.organizations.team-synchronization %}

## 팀 가시성

{% data reusables.organizations.types-of-team-visibility %}

개인 대시보드에서 속한 모든 팀을 볼 수 있습니다. 자세한 내용은 “[개인 대시보드 정보](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams)”를 참조하세요.

## 팀 페이지

각 팀은 조직 내에 고유한 페이지가 있습니다. 팀 페이지에서 팀 멤버, 자식 팀 및 팀의 리포지토리를 볼 수 있습니다. 조직 소유자 및 팀 유지 관리자는 팀 설정에 액세스하고 팀 페이지에서 팀의 설명 및 프로필 사진을 업데이트할 수 있습니다.

조직 멤버는 팀과의 토론을 만들고 토론에 참여할 수 있습니다. 자세한 내용은 “[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)”를 참조하세요.

![팀 멤버 및 토론을 나열하는 팀 페이지](/assets/images/help/organizations/team-page-discussions-tab.png)

## 중첩 팀

여러 수준의 중첩 팀을 사용하여 그룹 또는 회사의 계층 구조를 {% data variables.product.product_name %} 조직 내에 반영할 수 있습니다. 부모 팀은 여러 자식 팀을 가질 수 있으며, 각 자식 팀은 하나의 부모 팀만 가집니다. 비밀 팀은 중첩할 수 없습니다.

자식 팀은 부모 팀의 액세스 권한을 상속하고 대규모 그룹에 대한 권한 관리를 간소화합니다. 또한 자식 팀의 멤버는 부모 팀이 @mentioned인 경우 알림을 받고 여러 사용자 그룹과의 통신을 단순화합니다.

예를 들어 팀 구조가 직원 > 엔지니어링 > 애플리케이션 엔지니어링 > ID인 경우 엔지니어링 팀에 리포지토리에 대한 쓰기 권한을 부여하면 애플리케이션 엔지니어링 및 ID도 해당 액세스 권한을 얻게 됩니다. ID 팀 또는 조직 계층 구조의 맨 아래에 있는 모든 팀을 @mention하는 경우 이러한 팀만 알림을 받게 됩니다.

![부모 팀 및 자식 팀이 있는 팀 페이지](/assets/images/help/teams/nested-teams-eng-example.png)

부모 팀의 사용 권한 및 멘션을 공유하는 사용자를 쉽게 이해하려면 부모 팀 페이지의 멤버 탭에서 부모 팀의 자식 팀에 포함된 모든 멤버를 볼 수 있습니다. 자식 팀의 멤버는 부모 팀의 직접 멤버가 아닙니다.

![자식 팀의 모든 멤버를 포함하는 부모 팀 페이지](/assets/images/help/teams/team-and-subteam-members.png)

팀을 만들 때 부모를 선택하거나 나중에 조직의 계층 구조에서 팀을 이동할 수 있습니다. 자세한 내용은 “[조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy)”을 참조하세요.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

## 조직에서 팀을 중첩하기 위한 준비

조직에 이미 기존 팀이 있는 경우 팀 위 또는 아래에 팀을 중첩하기 전에 각 팀의 리포지토리 액세스 권한을 감사해야 합니다. 또한 조직에 대해 구현하려는 새 구조를 고려해야 합니다.

팀 계층 구조의 맨 위에서 부모 팀 및 하위 팀에 포함된 모든 멤버에게 안전한 리포지토리 액세스 권한을 부모 팀에 부여해야 합니다. 계층 구조의 맨 아래로 이동하면 자식 팀에 좀 더 중요한 리포지토리에 대한 보다 세부적인 액세스 권한을 추가로 부여할 수 있습니다.

1. 기존 팀에서 모든 멤버 제거
2. 각 팀의 리포지토리 액세스 권한을 감사 및 조정하고 각 팀에 부모 권한 부여
3. 원하는 새 팀을 만들고, 각 새 팀의 부모를 선택하고, 리포지토리 액세스 권한 부여
4. 팀에 직접 사용자 추가

## 추가 참고 자료

- "[팀 만들기](/articles/creating-a-team)"
- "[팀에 조직 멤버 추가](/articles/adding-organization-members-to-a-team)"
