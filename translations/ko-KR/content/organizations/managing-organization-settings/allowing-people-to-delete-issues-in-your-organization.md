---
title: 사용자가 조직에서 문제를 삭제할 수 있도록 허용
intro: 조직 소유자는 특정 사용자가 조직 소유의 리포지토리에서 이슈를 삭제하도록 허용할 수 있습니다.
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878446'
---
기본적으로 조직의 리포지토리에서 문제를 삭제할 수 없습니다. 조직 소유자는 먼저 조직의 모든 리포지토리에 대해 이 기능을 사용하도록 설정해야 합니다.

활성화되면 조직 소유자와 조직 소유 리포지토리에서 관리자 액세스 권한이 있는 사용자가 문제를 삭제할 수 있습니다. 리포지토리에서 관리자 액세스 권한이 있는 사용자는 관리자 액세스 권한이 부여된 조직 구성원 및 외부 협력자를 포함합니다. 자세한 내용은 "[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)" 및 "[문제 삭제](/articles/deleting-an-issue)"를 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. "문제 삭제"에서 **구성원이 이 조직의 문제를 삭제할 수 있도록 허용** 을 선택합니다.
![사용자가 문제를 삭제할 수 있도록 하는 확인란](/assets/images/help/settings/issue-deletion.png)
6. **저장** 을 클릭합니다.
