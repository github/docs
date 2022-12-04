---
title: '{% data variables.projects.projects_v2 %}의 표시 유형 관리'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: '{% data variables.projects.project_v2 %}를 프라이빗 또는 퍼블릭 표시 유형으로 설정하는 방법을 알아봅니다.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109786'
---
## 프로젝트 표시 유형 정보

프로젝트는 퍼블릭 또는 프라이빗일 수 있습니다. 퍼블릭 프로젝트의 경우 인터넷의 모든 사용자가 프로젝트를 볼 수 있습니다. 프라이빗 프로젝트의 경우 최소한 읽기 권한이 부여된 사용자만 프로젝트를 볼 수 있습니다.

프로젝트 표시 유형만 영향을 받습니다. 프로젝트에서 항목을 보려면 항목이 속한 리포지토리에 필요한 권한이 있어야 합니다. 프로젝트에 프라이빗 리포지토리의 항목이 포함된 경우 리포지토리의 협력자가 아닌 사용자는 해당 리포지토리의 항목을 볼 수 없습니다.

![숨겨진 항목이 있는 프로젝트](/assets/images/help/projects/hidden-items.png)

프로젝트 관리자 및 조직 소유자는 프로젝트 표시 유형을 제어할 수 있습니다. 조직 소유자{% ifversion project-visibility-policy %} 및 엔터프라이즈 소유자{% endif %}는 프로젝트 표시 유형을 조직 소유자로만 변경하는 기능을 제한할 수 있습니다.

퍼블릭 및 프라이빗 프로젝트에서는 프로젝트에 대한 쓰기 권한이 있는 사용자만 인사이트를 볼 수 있습니다.

프라이빗 조직 소유 프로젝트에서 현재 프로젝트를 업데이트하는 사용자의 아바타가 프로젝트 UI에 표시됩니다.

프로젝트 관리자는 프로젝트에 대한 쓰기 및 관리자 액세스를 관리하고 개별 사용자의 읽기 액세스를 제어할 수도 있습니다. 자세한 내용은 “[프로젝트에 대한 액세스 관리](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)”를 참조하세요.

## 프로젝트 표시 유형 변경

{% data reusables.projects.project-settings %}
1. “위험 영역”의 **표시 유형** 옆에 있는 **프라이빗** 또는 **퍼블릭** 을 선택합니다.
   ![표시 유형 컨트롤을 보여 주는 스크린샷](/assets/images/help/projects-v2/visibility.png)

## 추가 참고 자료

- [조직의 프로젝트 표시 유형 변경 허용](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
