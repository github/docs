---
title: 삭제된 조직 복원
intro: '{% 데이터 variables.location.product_location %}에서 이전에 삭제된 조직을 부분적으로 복원할 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: a39d517de4335b25a151b42902f208959e69f9a1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098742'
---
## 조직 복원 정보

감사 로그 Elasticsearch 인덱스에 이벤트에 대한 `org.delete` 데이터가 포함되어 있는 한 사이트 관리자 대시보드를 사용하여 {% 데이터 variables.location.product_location %}에서 이전에 삭제된 조직을 복원할 수 있습니다.

조직을 복원한 직후에는 조직이 삭제 전과 정확히 일치하지 않습니다. 조직이 소유한 리포지토리를 수동으로 복원해야 합니다. 자세한 내용은 “[삭제된 리포지토리 복원](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)”을 참조하세요.

감사 로그를 사용하여 팀 및 조직 멤버를 수동으로 다시 추가할 수도 있습니다. 자세한 내용은 “[멤버 및 팀 복원](#restoring-members-and-teams)”을 참조하세요.

## 조직 복원

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. “사용자, 조직, 엔터프라이즈, 팀, 리포지토리, gist, 애플리케이션 검색”에서 조직을 검색합니다.

  ![검색 필드 및 검색 단추 스크린샷](/assets/images/enterprise/stafftools/search-field.png)

1. “삭제된 계정”에서 복원할 조직 오른쪽에 있는 {% octicon "kebab-horizontal" aria-label="The edit icon" %} 드롭다운 메뉴를 선택하고 **다시 만들기** 를 클릭합니다.

   ![삭제된 조직의 드롭다운 메뉴 스크린샷](/assets/images/enterprise/stafftools/recreate-organization.png)

## 멤버 및 팀 복원

감사 로그를 사용하여 조직의 이전 멤버 및 팀 목록을 찾은 다음, 수동으로 다시 만들 수 있습니다. 감사 로그 사용 방법에 대한 자세한 내용은 “[엔터프라이즈 전체의 사용자 감사](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)”를 참조하세요.

아래의 모든 검색 구문에서 ORGANIZATION을 조직 이름으로 바꾸고, TEAM을 팀 이름으로 바꿉니다.

### 조직 멤버 복원

1. 조직에 추가되었다가 제거된 사용자를 모두 찾으려면 감사 로그에서 `action:org.add_member org:ORGANIZATION` 및 `action:org.remove_member org:ORGANIZATION`을 검색합니다.
1. 여전히 멤버여야 하는 각 사용자를 조직에 수동으로 추가합니다. 자세한 내용은 “[조직에 사용자 추가](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)”를 참조하세요.

### 팀 복원

1. 각 팀 이름을 찾으려면 감사 로그에서 `action:team.create org:ORGANIZATION`을 검색합니다.
1. 팀을 수동으로 다시 만듭니다. 자세한 내용은 “[팀 만들기](/organizations/organizing-members-into-teams/creating-a-team)”를 참조하세요.
1. 각 팀에 추가된 멤버를 찾으려면 `action:team.add_member team:"ORGANIZATION/TEAM"`을 검색합니다.
1. 팀 멤버를 수동으로 다시 추가합니다. 자세한 내용은 “[팀에 조직 멤버 추가](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)”를 참조하세요.
1. 팀에 액세스 권한이 부여된 리포지토리를 찾으려면 `action:team.add_repository team:"ORGANIZATION/TEAM"`을 검색합니다.
1. 각 리포지토리에 대해 팀에 부여된 액세스 수준을 찾으려면 `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`을 검색합니다.
1. 팀에 액세스 권한을 수동으로 다시 부여합니다. 자세한 내용은 “[조직 리포지토리에 대한 팀 액세스 권한 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”를 참조하세요.
