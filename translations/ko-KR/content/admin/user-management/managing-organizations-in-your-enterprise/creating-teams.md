---
title: 팀 만들기
intro: 'Teams는 조직에서 구성원 그룹을 만들고 리포지토리에 대한 액세스를 제어할 수 있는 기능을 제공합니다. 팀 구성원에게 특정 리포지토리에 대한 읽기, 쓰기 또는 관리자 권한을 부여할 수 있습니다.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: ea7eb694232970fc3027321aee7ba1ef64485fe1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098821'
---
팀은 많은 {% data variables.product.prodname_dotcom %} 협업 기능(예: 적절한 당사자에게 입력 또는 주의 요청을 알리는 팀 @mentions)의 핵심입니다. 자세한 내용은 “[조직 내 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

팀은 회사 내 그룹을 나타내거나 특정 관심사 또는 전문 지식을 가진 사용자를 포함할 수 있습니다. 예를 들어 {% 데이터 variables.location.product_location %}에 대한 접근성 전문가 팀은 여러 부서의 사람들로 구성됩니다. 팀은 회사의 기존 부서 계층 구조를 보완하는 기능적 문제를 나타낼 수 있습니다.

조직은 회사 또는 그룹의 계층 구조를 반영하기 위해 여러 수준의 중첩된 팀을 만들 수 있습니다. 자세한 내용은 “[팀 정보](/enterprise/user/articles/about-teams/#nested-teams)”를 참조하세요.

## 팀 만들기

신중한 팀 조합은 리포지토리 액세스를 제어하는 강력한 방법입니다. 예를 들어 조직에서 릴리스 엔지니어링 팀만 리포지토리의 기본 분기에 코드를 푸시하도록 허용하는 경우 릴리스 엔지니어링 팀에만 조직의 리포지토리에 대한 **관리자** 권한을 부여하고 다른 모든 팀에는 **읽기** 권한을 부여할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% ifversion ghes %}

## LDAP 동기화를 사용할 수 있는 팀 만들기

사용자 인증을 위해 LDAP를 사용하는 인스턴스에서는 LDAP 동기화를 통해 팀 멤버를 관리할 수 있습니다. **LDAP 그룹** 필드에서 그룹의 DN(**고유 이름**)을 설정하면 팀이 LDAP 서버의 LDAP 그룹에 매핑됩니다. LDAP 동기화를 사용하여 팀의 구성원을 관리하는 경우 {% 데이터 variables.location.product_location %}에서 팀을 관리할 수 없습니다. 매핑된 팀은 LDAP 동기화를 사용할 수 있는 경우 구성된 간격마다 주기적으로, 백그라운드에서 멤버를 동기화합니다. 자세한 내용은 “[LDAP 동기화 사용](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)”을 참조하세요.

LDAP 동기화를 사용할 수 있는 팀을 만들려면 사이트 관리자이자 조직 소유자여야 합니다.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**참고:**
- LDAP 동기화는 팀의 멤버 목록만 관리합니다. {% data variables.product.prodname_ghe_server %} 내에서 팀의 리포지토리와 권한을 관리해야 합니다.
- DN에 대한 LDAP 그룹 매핑이 제거되면(예: LDAP 그룹이 삭제된 경우) 동기화된 {% data variables.product.prodname_ghe_server %} 팀에서 모든 멤버가 제거됩니다. 이 문제를 해결하려면 팀을 새 DN에 매핑하고 팀 멤버를 다시 추가한 다음, [매핑을 수동으로 동기화](/enterprise/admin/authentication/using-ldap#manually-syncing-ldap-accounts)합니다.
- LDAP 동기화를 사용할 수 있는 경우 사용자가 리포지토리에서 제거되면 액세스 권한을 잃게 되지만 해당 포크는 삭제되지 않습니다. 사용자가 3개월 이내에 원래 조직 리포지토리에 액세스할 수 있는 팀에 추가되면 다음 동기화 시 포크에 대한 액세스 권한이 자동으로 복원됩니다.

{% endwarning %}

1. [LDAP 동기화를 사용](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)할 수 있는지 확인합니다.
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %}
6. 팀을 매핑할 LDAP 그룹의 DN을 검색합니다. DN을 모르는 경우 LDAP 그룹의 이름을 입력합니다. {% data variables.product.prodname_ghe_server %}는 일치 항목을 검색하고 자동 완성합니다.
![LDAP 그룹 DN에 매핑](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png) {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% endif %}
