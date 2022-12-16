---
title: 리포지토리에 대한 포크 정책 관리
intro: '특정 프라이빗{% ifversion ghae or ghes or ghec %} 또는 조직이 소유한 내부{% endif %} 리포지토리의 포크를 허용하거나 금지할 수 있습니다.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
ms.openlocfilehash: 18355227ad40567de3824f3cc286763cd081e153
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136696'
---
조직 소유자는 특정 리포지토리에 대한 포크를 허용하거나 허용하지 않도록 하기 전에 조직 수준에서 프라이빗{% ifversion ghae or ghes or ghec %} 및 내부{% endif %} 리포지토리의 포크를 허용해야 합니다. 자세한 내용은 “[조직의 포크 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. “기능”에서 **포크 허용** 을 선택합니다.
  ![프라이빗 리포지토리의 포크를 허용하거나 허용하지 않는 확인란](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## 추가 참고 자료

- “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”
- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
