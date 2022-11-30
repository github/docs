---
title: '리포지토리에서 {% data variables.projects.projects_v1_boards %}를 사용하지 않도록 설정'
intro: '자신이나 팀이 작업을 다르게 관리하는 경우 리포지토리 관리자는 리포지토리에 대한 {% data variables.projects.projects_v1_boards %}를 끌 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Disable {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 8c550cd9ebc767327298e39dc0b3a6a11368dc3f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109525'
---
{% data variables.projects.projects_v1_boards %}를 사용하지 않도록 설정하면 타임라인 또는 [감사 로그](/articles/reviewing-your-security-log/)에 {% data variables.projects.projects_v1_board %} 정보가 더 이상 표시되지 않습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. "기능"에서 **프로젝트** 확인란의 선택을 취소합니다.
  ![프로젝트 제거 확인란](/assets/images/help/projects/disable-projects-checkbox.png)

{% data variables.projects.projects_v1_boards %}를 사용하지 않도록 설정하면 기존 {% data variables.projects.projects_v1_boards %}는 이전 URL에서 액세스할 수 없습니다. {% data reusables.organizations.disable_project_board_results %}
