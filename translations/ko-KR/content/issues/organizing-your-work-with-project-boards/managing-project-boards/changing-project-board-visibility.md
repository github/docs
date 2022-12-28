---
title: '{% data variables.product.prodname_project_v1 %} 표시 유형 변경'
intro: '조직 소유자 또는 {% data variables.projects.projects_v1_board %} 관리자는 {% data variables.projects.projects_v1_board %}를 {% ifversion ghae %}내부{% else %}퍼블릭{% endif %} 또는 프라이빗으로 만들 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Change visibility
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 445675ee14c1d1fb47ded4321ae6ac8816fa6d6f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109101'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% note %}

**{% ifversion classic-project-visibility-permissions %}참고{% else %}참고{% endif %}:** {% ifversion classic-project-visibility-permissions %}

* {% data reusables.projects.owners-can-limit-visibility-permissions %}
* {% endif %}{% data variables.projects.projects_v1_board %}를 {% ifversion ghae %}내부{% else %}퍼블릭{% endif %}으로 만들면 조직 구성원에게 기본적으로 읽기 권한이 부여됩니다. 특정 조직 구성원에게 쓰기 또는 관리자 권한을 부여하려면 소속된 팀에 액세스 권한을 부여하거나 {% data variables.projects.projects_v1_board %}에 공동 작업자로 추가할 수 있습니다. 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”을 참조하세요.

{% endnote %}

1. {% ifversion ghae %}내부{% else %}공개{% endif %} 또는 비공개로 만들려는 프로젝트 보드로 이동합니다.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.choose-visibility %}
1. **저장** 을 클릭합니다.
