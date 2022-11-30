---
title: 조직에서 구성원 제거
intro: 조직의 구성원이 더 이상 조직 소유의 리포지토리에 액세스할 필요가 없는 경우 조직에서 제거할 수 있습니다.
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove a member
permissions: Organization owners can remove members from an organization.
ms.openlocfilehash: 4266172bc2bae6fb95506b98309533919309ccfc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064700'
---
{% ifversion fpt or ghec %}

{% warning %}

**경고:** 조직에서 구성원을 제거하는 경우:
- 유료 라이선스 수는 자동으로 다운그레이드되지 않습니다. 조직에서 사용자를 제거한 후 더 적은 수의 라이선스 비용을 지불하려면 "[조직의 유료 시트 다운그레이드](/articles/downgrading-your-organization-s-paid-seats)"의 단계를 따릅니다.
- 제거된 구성원은 조직 프라이빗 리포지토리의 프라이빗 포크에 대한 액세스 권한을 잃게 되지만 로컬 복사본은 계속 가질 수 있습니다. 그러나 로컬 복사본을 조직의 리포지토리와 동기화할 수는 없습니다. 사용자가 조직에서 제거된 후 3개월 이내에 [조직 구성원으로 복귀](/articles/reinstating-a-former-member-of-your-organization)하는 경우 사용자의 프라이빗 포크를 복원할 수 있습니다. 무엇보다도 귀하는 리포지토리에 대한 액세스 권한을 상실한 사용자가 기밀 정보 또는 지적 재산권을 삭제하도록 할 책임이 있습니다.
- 프라이빗 리포지토리가 다른 조직으로 포크되면 이러한 조직은 포크 네트워크에 대한 액세스를 제어할 수 있습니다. 즉, 사용자는 포크를 통해 명시적으로 액세스할 수 있으므로 원래 조직에 대한 액세스 권한을 잃은 후에도 포크에 대한 액세스는 유지하게 됩니다. {%- ifversion ghec %}
-  제거된 구성원이 동일한 엔터프라이즈 계정에서 소유한 다른 조직의 구성원이 아닌 경우, 해당 구성원은 조직의 내부 리포지토리의 프라이빗 포크에 액세스할 수 없게 됩니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.
{%- endif %}
- 제거된 구성원이 보냈지만 아직 수락되지 않은 조직 초대는 모두 취소되며 액세스할 수 없게 됩니다.

{% endwarning %}

{% else %}

{% warning %}

**경고:** 조직에서 구성원을 제거하는 경우:
 - 제거된 구성원은 조직 프라이빗 리포지토리의 프라이빗 포크에 대한 액세스 권한을 잃게 되지만 로컬 복사본은 계속 가질 수 있습니다. 그러나 로컬 복사본을 조직의 리포지토리와 동기화할 수는 없습니다. 사용자가 조직에서 제거된 후 3개월 이내에 [조직 구성원으로 복귀](/articles/reinstating-a-former-member-of-your-organization)하는 경우 사용자의 프라이빗 포크를 복원할 수 있습니다. 무엇보다도 귀하는 리포지토리에 대한 액세스 권한을 상실한 사용자가 기밀 정보 또는 지적 재산권을 삭제하도록 할 책임이 있습니다.
- 제거된 구성원이 엔터프라이즈 내 다른 조직의 구성원이 아닌 경우, 해당 구성원은 조직의 내부 리포지토리의 프라이빗 포크에 액세스할 수 없게 됩니다.
 - 제거된 사용자가 보냈지만 아직 수락되지 않은 조직 초대는 모두 취소되며 액세스할 수 없게 됩니다.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}

조직에서 제거하려는 사용자가 쉽게 전환하고 기밀 정보 또는 지적 재산권을 삭제할 수 있도록, 조직 탈퇴 모범 사례 검사 목록을 공유하는 것이 좋습니다. 예를 들어 "[퇴사 모범 사례](/articles/best-practices-for-leaving-your-company/)"를 참조하세요.

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

## 사용자의 구성원 자격 취소

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 조직에서 제거할 단일 또는 복수의 구성원을 선택합니다.
  ![구성원 두 명이 선택된 구성원 목록](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 구성원 목록 위에 있는 드롭다운 메뉴를 사용하여 **조직에서 제거** 를 클릭합니다.
  ![구성원을 제거하는 옵션이 있는 드롭다운 메뉴](/assets/images/help/teams/user-bulk-management-options.png)
6. 조직에서 제거할 단일 또는 복수의 구성원을 검토한 다음 **구성원 제거** 를 클릭합니다.
  ![제거할 구성원 목록 및 구성원 제거 단추](/assets/images/help/teams/confirm-remove-members-bulk.png)

## 추가 참고 자료

- "[팀에서 조직 구성원 제거](/articles/removing-organization-members-from-a-team)"{% ifversion remove-enterprise-members %}
- "[엔터프라이즈에서 구성원 제거](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)"{% endif %}
