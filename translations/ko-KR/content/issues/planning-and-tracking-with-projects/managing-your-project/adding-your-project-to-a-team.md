---
title: '팀에 {% data variables.projects.project_v2 %} 추가'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: 팀에 프로젝트를 추가하여 권한을 관리하고 프로젝트 검색 가능성을 향상시킬 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
ms.openlocfilehash: 21e0944c95949aedf9a0039ef7b576b8840635b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108801'
---
## 팀에 프로젝트 추가 정보

팀에 프로젝트를 추가하여 전체 팀 협력자에게 해당 프로젝트에 대한 액세스 권한을 부여할 수 있습니다. 팀에 프로젝트를 추가하면 해당 프로젝트가 팀의 프로젝트 페이지에 나열되므로 구성원이 특정 팀에서 사용하는 프로젝트를 쉽게 식별할 수 있습니다.

팀에 추가된 모든 프로젝트에 대한 읽기 권한이 부여됩니다. 이 권한은 프로젝트 및 개별 팀 구성원에 대한 기존 권한에 추가되어 더 높은 사용 권한이 유지되도록 합니다. 팀 및 개별 기여자 권한 설정에 대한 자세한 내용은 "[프로젝트에 대한 액세스 관리"를 참조하세요](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects).

## 팀에 프로젝트 추가

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. {% octicon "project" aria-label="The Projects icon" %} **Projects** 를 클릭합니다.
   
   ![팀 프로젝트 탭을 보여 주는 스크린샷](/assets/images/help/organizations/team-project-board-button.png)
   
1. **프로젝트 추가** 를 클릭합니다.
   
   !["프로젝트 추가" 단추를 보여 주는 스크린샷](/assets/images/help/organizations/team-project-add-project.png)
   
1. 추가하려는 프로젝트의 이름을 입력한 다음 일치 항목 목록에서 프로젝트를 선택합니다.  
   
   {% note %}
   
   **참고:** 이 변경으로 인해 팀 구성원에 대한 프로젝트 권한이 증가하면 {% data variables.product.product_name %}에서 선택 사항을 확인하라는 메시지가 표시됩니다.
   
   {% endnote %}
   
   !["프로젝트 추가" 양식을 보여 주는 스크린샷](/assets/images/help/organizations/team-project-search.png)
   

## 팀에서 프로젝트 제거

{% data reusables.projects.project-settings %}
1. **액세스 관리** 를 클릭합니다.
   
   ![“액세스 관리” 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/manage-access.png)
   
1. 프로젝트에서 제거하려는 팀 옆에 있는 **제거** 를 클릭합니다.
   
   ![협력자 제거를 보여 주는 스크린샷](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## 추가 정보

- [조직에 대한 팀 액세스 관리 {% data variables.product.prodname_project_v1 %}](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
