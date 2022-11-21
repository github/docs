---
title: '조직의 {% data variables.product.prodname_project_v1 %}에 외부 협력자 추가'
intro: '조직 소유자 또는 {% data variables.projects.projects_v1_board %} 관리자는 외부 협력자를 추가하고 {% data variables.projects.projects_v1_board %}에 대한 해당 사용 권한을 사용자 지정할 수 있습니다.'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a collaborator
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 517e0c6f71d1b70eb19dc85dfe3334ff0144c814
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109783'
---
{% data reusables.projects.project_boards_old %}

외부 협력자는 명시적으로 조직의 멤버가 아니지만 조직의 {% data variables.projects.projects_v1_board %}에 대한 권한이 있는 사람입니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. “사용자 이름, 전체 이름 또는 메일 주소로 검색”에서 외부 협력자 이름, 사용자 이름 또는 {% data variables.product.prodname_dotcom %} 메일을 입력합니다.
   ![검색 필드에 Octocat의 사용자 이름이 입력된 협력자 섹션](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}
