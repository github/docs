---
title: 향상된 조직 권한으로 관리 팀 마이그레이션
intro: 2015년 9월 이후에 조직을 만든 경우 기본적으로 조직은 조직 권한을 향상했습니다. 2015년 9월 이전에 만든 조직은 이전 소유자 및 관리 팀을 향상된 권한 모델로 마이그레이션해야 할 수 있습니다. 레거시 관리 팀의 구성원은 해당 팀이 향상된 조직 권한 모델로 마이그레이션될 때까지 리포지토리를 만드는 기능을 자동으로 유지합니다.
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125588'
---
기본적으로 모든 조직 멤버는 리포지토리를 만들 수 있습니다. [리포지토리 만들기 권한](/articles/restricting-repository-creation-in-your-organization)을 조직 소유자로 제한하고, 레거시 조직 권한 구조 하에서 조직을 만든 경우에도 레거시 관리 팀의 멤버는 여전히 리포지토리를 만들 수 있습니다.

레거시 관리 팀은 레거시 조직 권한 구조에서 관리자 권한 수준으로 만든 팀입니다. 이러한 팀의 멤버는 조직에 대한 리포지토리를 만들 수 있었고, 향상된 조직 권한 구조에서 이 기능을 유지했습니다.

레거시 관리 팀을 향상된 조직 권한으로 마이그레이션하여 이 기능을 제거할 수 있습니다.

자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

{% warning %}

**경고:** 조직에서 모든 멤버에 대한 [리포지토리 만들기 권한](/articles/restricting-repository-creation-in-your-organization)을 사용하지 않도록 설정한 경우 레거시 관리 팀의 일부 멤버가 리포지토리 만들기 권한을 잃을 수 있습니다. 조직에서 멤버 리포지토리 만들기를 사용하도록 설정한 경우 레거시 관리 팀을 향상된 조직 권한으로 마이그레이션해도 팀 멤버가 리포지토리를 만드는 능력에는 영향을 미치지 않습니다.

{% endwarning %}

## 조직의 모든 레거시 관리 팀 마이그레이션

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. 조직의 레거시 관리 팀을 검토한 다음, **모든 팀 마이그레이션** 을 클릭합니다.
  ![모든 팀 마이그레이션 단추](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. 이러한 팀 멤버의 가능한 권한 변경에 대한 정보를 읽은 다음, **모든 팀 마이그레이션** 을 클릭합니다.
  ![마이그레이션 확인 단추](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

## 단일 관리 팀 마이그레이션

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. 팀 설명 상자에서 **팀 마이그레이션** 을 클릭합니다.
  ![팀 마이그레이션 단추](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
