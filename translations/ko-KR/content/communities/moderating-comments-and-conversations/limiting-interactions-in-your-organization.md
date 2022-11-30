---
title: 조직에서 상호 작용 제한
intro: 조직 소유의 모든 퍼블릭 리포지토리에서 특정 사용자에 대해 제한된 작업 기간을 일시적으로 적용할 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limit interactions in org
ms.openlocfilehash: 03bfad7a0da3386b6205517deb66e6b923de8386
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066684'
---
## 임시 상호 작용 제한 정보

조직에서 상호 작용을 제한하면 조직 소유의 모든 퍼블릭 리포지토리에 대한 임시 상호 작용을 제한할 수 있습니다. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 제한 기간이 지나면 사용자는 조직의 퍼블릭 리포지토리에서 정상적인 작업을 계속할 수 있습니다.

{% data reusables.community.types-of-interaction-limits %}

조직의 구성원은 제한 유형의 영향을 받지 않습니다.

조직 전체의 활동 제한을 사용하도록 설정하면 개별 리포지토리에서 상호 작용 제한을 사용하거나 사용하지 않도록 설정할 수 없습니다. 개별 리포지토리의 활동 제한에 대한 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.

조직 담당자 및 조정자는 특정 시간 동안 사용자를 차단할 수도 있습니다. 차단이 시간이 지나면 사용자의 차단이 자동으로 해제됩니다. 자세한 내용은 “[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”을 참조하세요.

## 조직에서 상호 작용 제한


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 조직 담당자의 경우: 사이드바의 “액세스” 섹션에서 **{% octicon "report" aria-label="The report icon" %} 조정** 을 선택한 다음 **상호 작용 제한** 을 클릭합니다.

   조직 조정자의 경우: 사이드바에서 **상호 작용 제한** 을 클릭합니다.

{% data reusables.community.set-interaction-limit %} ![임시 상호 작용 제한 옵션](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## 추가 참고 자료
- “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- “[조직 리포지토리에 대한 개인 액세스 권한 관리](/articles/managing-an-individual-s-access-to-an-organization-repository)”
- "[개인 계정 리포지토리에 대한 권한 수준](/articles/permission-levels-for-a-user-account-repository)"
- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
- “[조직에서 조정자 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)”
