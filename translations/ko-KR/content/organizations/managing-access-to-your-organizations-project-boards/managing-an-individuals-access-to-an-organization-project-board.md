---
title: '조직 {% data variables.product.prodname_project_v1 %}에 대한 개인의 액세스 관리'
intro: '조직 소유자 또는 {% data variables.projects.projects_v1_board %} 관리자는 조직 소유의 {% data variables.projects.projects_v1_board %}에 대한 개별 구성원의 액세스를 관리할 수 있습니다.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ceecfd317322f65541591f833c04f86d5b483c0e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109533'
---
{% data reusables.projects.project_boards_old %}

{% note %}

**참고:** {% data reusables.project-management.cascading-permissions %} 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”을 참조하세요. 

{% endnote %}

## 조직 구성원에게 {% data variables.projects.projects_v1_board %}에 대한 액세스 권한 부여

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. “사용자 이름, 전체 이름 또는 메일 주소로 검색”에서 협력자 이름, 사용자 이름 또는 {% data variables.product.prodname_dotcom %} 메일을 입력합니다.
   ![검색 필드에 Octocat의 사용자 이름이 입력된 협력자 섹션](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## {% data variables.projects.projects_v1_board %}에 대한 조직 구성원의 액세스 변경

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## {% data variables.projects.projects_v1_board %}에 대한 조직 구성원의 액세스 제거

{% data variables.projects.projects_v1_board %}에서 협력자를 제거하면 다른 역할에 대한 사용 권한에 따라 해당 작업자가 계속 보드에 액세스할 수 있습니다. {% data variables.projects.projects_v1_board %}에 대한 액세스 권한을 완전히 제거하려면 해당 사용자가 가진 각 역할에 대한 액세스 권한을 제거해야 합니다. 예를 들어 사용자는 조직 구성원 또는 팀 구성원으로 {% data variables.projects.projects_v1_board %}에 액세스할 수 있습니다. 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”을 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## 추가 참고 자료

- “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”
