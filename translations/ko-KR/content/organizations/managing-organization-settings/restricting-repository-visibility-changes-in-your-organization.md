---
title: 조직의 리포지토리 표시 유형 변경 제한
intro: 조직의 데이터를 보호하려면 조직에서 리포지토리 공개 여부 변경에 대한 권한을 구성할 수 있습니다.
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119247'
---
리포지토리를 프라이빗에서 퍼블릭으로 변경하는 등, 조직의 리포지토리 표시 유형을 변경할 수 있는 사용자를 제한할 수 있습니다. 리포지토리 표시 유형에 대한 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요. 

조직 소유자에 대한 리포지토리 표시 유형만 변경하도록 기능을 제한하거나 리포지토리에 대해 관리자 액세스 권한이 있는 사용자만 표시 유형을 변경하도록 허용할 수 있습니다.

{% warning %}

**경고**: 사용하도록 설정하면 해당 유형의 리포지토리를 만들도록 허용하지 않더라도 관리자 액세스 권한이 있는 사용자가 기존 리포지토리에 대한 표시 유형을 선택할 수 있습니다. 만드는 동안 리포지토리의 표시 유형을 제한하는 방법에 대한 자세한 내용은 "[조직에서 리포지토리 만들기 제한](/articles/restricting-repository-creation-in-your-organization)"을 참조하세요.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. "리포지토리 표시 유형 변경"에서 **멤버가 이 조직의 리포지토리 표시 유형을 변경하도록 허용** 을 선택 취소합니다.
![멤버가 리포지토리 표시 유형을 변경할 수 있도록 허용하는 확인란](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. **저장** 을 클릭합니다.
