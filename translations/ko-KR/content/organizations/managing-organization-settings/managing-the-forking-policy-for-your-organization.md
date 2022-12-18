---
title: 조직에 대한 포크 정책 관리
intro: '조직 소유의 모든 프라이빗{% ifversion ghes or ghae or ghec %} 및 내부{% endif %} 리포지토리의 포크를 허용하거나 막을 수 있습니다.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
ms.openlocfilehash: 11aad8ee3c08b62f6bc352f91b6d804f35eee6e6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119300'
---
기본적으로 새 조직은 프라이빗{% ifversion ghes or ghec or ghae %} 및 내부{% endif %} 리포지토리의 포크를 허용하지 않도록 구성됩니다.

조직 수준에서 프라이빗{% ifversion ghes or ghec or ghae %} 및 내부{% endif %} 리포지토리의 포크를 허용하는 경우 특정 프라이빗{% ifversion ghes or ghec or ghae %} 또는 내부{% endif %} 리포지토리를 포크하는 기능을 구성할 수도 있습니다. 자세한 내용은 “[리포지토리의 포크 정책 관리](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)”를 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. "리포지토리 포크"에서 **프라이빗 {% ifversion ghec or ghes or ghae %}및 내부 {% endif %}리포지토리의 포크 허용** 을 선택합니다.

   {%- ifversion fpt %} ![조직에서 포크를 허용하거나 허용하지 않는 확인란](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![조직에서 포크를 허용하거나 허용하지 않는 확인란](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. **저장** 을 클릭합니다.

## 추가 참고 자료

- “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”
- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
