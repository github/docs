---
title: 프로젝트(베타)의 표시 유형 관리
intro: 프로젝트를 볼 수 있는 사용자를 제어할 수 있습니다.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 85b586bbb86e8d6e286e86263eca3f44d174391f
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135322"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-visibility"></a>프로젝트 표시 유형 정보

프로젝트(베타)는 퍼블릭 또는 프라이빗일 수 있습니다. 퍼블릭 프로젝트의 경우 인터넷의 모든 사용자가 프로젝트를 볼 수 있습니다. 프라이빗 프로젝트의 경우 최소한 읽기 권한이 부여된 사용자만 프로젝트를 볼 수 있습니다.

프로젝트 표시 유형만 영향을 받습니다. 프로젝트에서 항목을 보려면 항목이 속한 리포지토리에 필요한 권한이 있어야 합니다. 프로젝트에 프라이빗 리포지토리의 항목이 포함된 경우 리포지토리의 협력자가 아닌 사용자는 해당 리포지토리의 항목을 볼 수 없습니다.

![숨겨진 항목이 있는 프로젝트](/assets/images/help/projects/hidden-items.png)

프로젝트 관리자만 프로젝트 표시 유형을 제어할 수 있습니다.

프라이빗 조직 소유 프로젝트에서 현재 프로젝트를 업데이트하는 사용자의 아바타가 프로젝트 UI에 표시됩니다.

프로젝트 관리자는 프로젝트에 대한 쓰기 및 관리자 액세스를 관리하고 개별 사용자의 읽기 액세스를 제어할 수도 있습니다. 자세한 내용은 “[프로젝트에 대한 액세스 관리](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)”를 참조하세요.

## <a name="changing-project-visibility"></a>프로젝트 표시 유형 변경

{% data reusables.projects.project-settings %}
1. **표시 유형** 아래에서 **프라이빗** 또는 **퍼블릭** 을 선택합니다.
