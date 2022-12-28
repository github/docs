---
title: 관리 팀을 향상된 조직 권한으로 변환
intro: 2015년 9월 이후에 조직을 만든 경우 기본적으로 조직은 조직 권한을 향상했습니다. 2015년 9월 이전에 만든 조직은 이전 소유자 및 관리 팀을 향상된 권한 모델로 마이그레이션해야 할 수 있습니다. 레거시 관리 팀의 구성원은 해당 팀이 향상된 조직 권한 모델로 마이그레이션될 때까지 리포지토리를 만드는 기능을 자동으로 유지합니다.
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
ms.openlocfilehash: 183ccd5d1252265ed6ac94924703ceb75ed8adad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125599'
---
레거시 관리 팀의 구성원이 이러한 구성원을 위한 새 팀을 만들고, 팀이 조직의 리포지토리에 필요한 액세스 권한을 가지도록 한 다음, 레거시 관리 팀을 삭제하여 리포지토리를 만들 수 있는 기능을 제거할 수 있습니다.

자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

{% warning %}

**경고:**
- 다른 팀의 구성원이 아닌 레거시 관리 팀의 구성원이 있는 경우 팀을 삭제하면 해당 구성원이 조직에서 제거됩니다. 팀을 삭제하기 전에 구성원이 이미 조직의 직접 구성원인지 또는 필요한 리포지토리에 대한 협력자 액세스 권한이 있는지 확인합니다.
- 레거시 관리 팀의 구성원이 만든 프라이빗 포크의 손실을 방지하려면 레거시 관리 팀을 삭제하기 전에 아래 1~3단계를 따라야 합니다.
- “admin”은 조직의 [특정 리포지토리에 대한 특정 액세스 권한](/articles/repository-permission-levels-for-an-organization)이 있는 조직 구성원을 위한 용어이므로 선택한 팀 이름에서 해당 용어를 사용하지 않는 것이 좋습니다.

{% endwarning %}

1. [새 팀을 만듭니다](/articles/creating-a-team).
2. 레거시 관리 팀의 [각 구성원을 새 팀에 추가](/articles/adding-organization-members-to-a-team)합니다.
3. [새 팀에 레거시 팀이 액세스할 수 있는 각 리포지토리에 대한 동등한 액세스 권한을 부여](/articles/managing-team-access-to-an-organization-repository)합니다.
4. [레거시 관리 팀을 삭제합니다](/articles/deleting-a-team).
