---
title: '조직 구성원의 {% data variables.product.prodname_project_v1 %}에 대한 액세스 관리'
intro: '조직 소유자 또는 {% data variables.projects.projects_v1_board %} 관리자는 모든 조직 구성원의 {% data variables.projects.projects_v1_board %}에 대한 기본 사용 권한 수준을 설정할 수 있습니다.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage access for members
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c0b280f6c1b28532b191282db465b5ae5b3c274
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109442'
---
{% data reusables.projects.project_boards_old %}

기본적으로 조직 구성원은 조직 소유자 또는 {% data variables.projects.projects_v1_board %} 관리자가 특정 {% data variables.projects.projects_v1_boards %}에 대해 다른 권한을 설정하지 않는 한, 조직의 {% data variables.projects.projects_v1_boards %}에 대한 쓰기 권한이 있습니다.

## 모든 조직 멤버에 대한 기준 권한 수준 설정

{% tip %}

**팁:** 조직 구성원에게 {% data variables.projects.projects_v1_board %}에 대해 더 높은 권한을 부여할 수 있습니다. 자세한 내용은 “[조직에 대한 프로젝트 보드 권한](/articles/project-board-permissions-for-an-organization)”을 참조하세요.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. "조직 멤버 권한"에서 모든 조직 멤버에 대한 기준 권한 수준(**읽기**, **쓰기**, **관리** 또는 **없음**)을 선택합니다.
![모든 조직 멤버에 대한 기준 프로젝트 보드 권한](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. **저장** 을 클릭합니다.

## 추가 참고 자료

- “[조직 {% data variables.product.prodname_project_v1 %}에 대한 개인의 액세스 관리](/articles/managing-an-individual-s-access-to-an-organization-project-board)”
- “[조직 {% data variables.product.prodname_project_v1 %}에 대한 팀 액세스 관리](/articles/managing-team-access-to-an-organization-project-board)”
- “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”
