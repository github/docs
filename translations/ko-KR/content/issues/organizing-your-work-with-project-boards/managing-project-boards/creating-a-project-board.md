---
title: '{% data variables.product.prodname_project_v1 %} 만들기'
intro: '{% data variables.projects.projects_v1_boards_caps %}를 사용하여 특정 기능 작업의 추적 및 우선 순위 지정, 포괄적인 로드맵 또는 릴리스 검사 목록과 같이 필요에 맞게 사용자 지정된 워크플로를 만들 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Issues
  - Projects
  - Project management
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e4f47a007c18b07142040a0a18ad7f45b73d5273
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109792'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} 자세한 내용은 “[리포지토리를 {% data variables.product.prodname_project_v1 %}에 연결](/articles/linking-a-repository-to-a-project-board)”을 참조하세요.

{% data variables.projects.projects_v1_board %}를 만든 후에는 문제, 끌어오기 요청, 메모를 추가할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %}에 문제 추가 및 끌어오기 요청](/articles/adding-issues-and-pull-requests-to-a-project-board)” 및 “[{% data variables.product.prodname_project_v1 %}에 노트 추가](/articles/adding-notes-to-a-project-board)”를 참조하세요.

{% data variables.projects.projects_v1_board %}가 이슈 및 끌어오기 요청의 상태와 동기화되도록 워크플로 자동화를 구성할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 정보](/articles/about-automation-for-project-boards)”를 참조하세요.

{% data reusables.project-management.project-board-import-with-api %}

## 사용자 소유 {% data variables.projects.projects_v1_board %} 만들기

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. 프로필 페이지의 상단에 있는 기본 탐색에서 {% octicon "project" aria-label="The project board icon" %} **프로젝트** 를 클릭합니다.
![프로젝트 탭](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## 조직 전체 {% data variables.projects.projects_v1_board %} 만들기

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

**참고:** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## 리포지토리 {% data variables.projects.projects_v1_board %} 만들기

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. 리포지토리 이름에서 {% octicon "project" aria-label="The project board icon" %} **프로젝트** 를 클릭합니다.
![프로젝트 탭](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## 추가 참고 자료

- “[프로젝트 보드 정보](/articles/about-project-boards)”
- “[프로젝트 보드 편집](/articles/editing-a-project-board)”{% ifversion fpt or ghec %}
- “[프로젝트 보드 복사](/articles/copying-a-project-board)”{% endif %}
- “[프로젝트 보드 닫기](/articles/closing-a-project-board)”
- “[프로젝트 보드에 대한 자동화 정보](/articles/about-automation-for-project-boards)”
