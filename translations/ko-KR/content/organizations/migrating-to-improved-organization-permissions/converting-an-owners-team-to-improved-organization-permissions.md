---
title: 소유자 팀을 향상된 조직 권한으로 변환
intro: 2015년 9월 이후에 조직을 만든 경우 기본적으로 조직은 조직 권한을 향상했습니다. 2015년 9월 이전에 만든 조직은 이전 소유자 및 관리 팀을 향상된 권한 모델로 마이그레이션해야 할 수 있습니다. 이제 “소유자”는 조직의 개인 구성원에게 주어지는 관리 역할입니다. 레거시 소유자 팀의 구성원에게는 자동으로 소유자 권한이 부여됩니다.
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert Owners team
ms.openlocfilehash: ff4845a8d36ecc757a989ef669b645543addff2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880382'
---
레거시 소유자 팀을 변환하는 몇 가지 옵션이 있습니다.

- 구성원이 조직에서 특별한 상태를 가지고 있음을 나타내는 새 이름을 팀에 지정합니다.
- 조직의 리포지토리에 필요한 액세스 권한을 부여하는 팀에 모든 구성원이 추가되었는지 확인한 후 팀을 삭제합니다.

## 소유자 팀에 새 이름 지정

{% tip %}

   **참고:** “admin”은 조직의 [특정 리포지토리에 대한 특정 액세스 권한](/articles/repository-permission-levels-for-an-organization)이 있는 조직 구성원을 위한 용어이므로 선택한 팀 이름에서 해당 용어를 사용하지 않는 것이 좋습니다.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. 팀 이름 필드에서 소유자 팀의 새 이름을 선택합니다. 예를 들면 다음과 같습니다.
    - 조직의 구성원에 소유자 팀의 구성원이 거의 없는 경우 팀 이름을 “Core”로 지정할 수 있습니다.
    - 조직의 모든 구성원이 소유자 팀의 구성원이어서 [ 팀을 @mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)할 수 있는 경우 팀의 이름을 “Employees”로 지정할 수 있습니다.
  ![소유자 팀의 이름이 Core로 변경된 팀 이름 필드](/assets/images/help/teams/owners-team-new-name.png)
6. 팀 설명 아래에서 **저장 및 계속** 을 클릭합니다.
![저장 및 계속 단추](/assets/images/help/teams/owners-team-save-and-continue.png)
7. 필요에 따라 [팀을 공개합니다](/articles/changing-team-visibility).

## 레거시 소유자 팀 삭제

{% warning %}

**경고:** 다른 팀의 구성원이 아닌 소유자 팀의 구성원이 있는 경우 팀을 삭제하면 해당 구성원이 조직에서 제거됩니다. 팀을 삭제하기 전에 구성원이 이미 조직의 직접 구성원인지 또는 필요한 리포지토리에 대한 협력자 액세스 권한이 있는지 확인합니다.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. 페이지 아래쪽에서 경고를 검토하고 **소유자 팀 삭제** 를 클릭합니다.
  ![소유자 팀을 삭제하기 위한 링크](/assets/images/help/teams/owners-team-delete.png)
