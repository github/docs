---
title: 조직 멤버를 외부 협력자로 변환
intro: 조직의 현재 멤버가 컨설턴트 또는 임시 직원과 같이 특정 리포지토리에만 액세스해야 하는 경우 외부 협력자로 변환할 수 있습니다.
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
  - /organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 0b4683615b525fed757b8832b83b8ac09df8a361
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098518'
---
## 조직 구성원을 외부 협력자로 변환하는 정보

조직의 멤버를 외부 협력자로 변환할 수 있습니다. 외부 협력자에 대한 자세한 내용은 “[조직의 리포지토리에 외부 협력자 추가](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”를 참조하세요.

{% ifversion fpt or ghec %}조직이 엔터프라이즈 소유인 경우 조직 멤버에서 외부 협력자로의 변환{% elsif ghes or ghae %}변환{% endif %}이 제한될 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서{% endif %}에서 “[엔터프라이즈에서 리포지토리 관리 정책 적용]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}”을 참조하세요.{% elsif fpt %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

조직 구성원을 외부 협력자로 변환한 후에는 현재 팀 구성원이 허용하는 리포지토리에만 액세스할 수 있습니다. 사용자는 더 이상 조직의 명시적 구성원이 아니며 더 이상 다음을 수행할 수 없습니다.

- 팀 만들기
- 모든 조직 멤버 및 팀 보기
- @mention 표시되는 팀
- 팀 유지 관리자 되기

자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

리포지토리에 대한 조직 구성원의 액세스를 검토하여 해당 액세스가 예상대로 이루어지도록 하는 것이 좋습니다. 자세한 내용은 “[조직 리포지토리에 대한 개인 액세스 권한 관리](/articles/managing-an-individual-s-access-to-an-organization-repository)”를 참조하세요.

조직 구성원을 외부 협력자로 변환할 때 조직 구성원으로서의 권한은 3개월 동안 저장되므로 구성원 권한을 복원할 수 있습니다. {% ifversion fpt or ghec %}다시 참가하도록 초대하는 경우{% else %}해당 시간 내에 조직에 다시 추가{% endif %}합니다. 자세한 내용은 “[조직의 이전 멤버 복원](/articles/reinstating-a-former-member-of-your-organization)”을 참조하세요.

## 조직 멤버를 외부 협력자로 변환

{% note %}

**참고:** 조직 소유자{% ifversion not fpt %} 또는 엔터프라이즈 소유자{% endif %}가 외부 협력자를 추가하는 기능을 제한한 경우 조직 구성원을 외부 협력자로 변환할 수 없습니다.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 외부 협력자로 변환하려는 사람 또는 사용자를 선택합니다.
  ![두 멤버가 선택된 멤버 목록](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 멤버 목록 위에서 드롭다운 메뉴를 사용하고 **외부 협력자로 변환** 을 클릭합니다.
  ![멤버를 외부 협력자로 변환하는 옵션이 있는 드롭다운 메뉴](/assets/images/help/teams/user-bulk-management-options.png)
6. 구성원을 외부 협력자로 변환하는 방법에 대한 정보를 읽은 다음, **외부 협력자로 변환** 을 클릭합니다.
  ![외부 협력자 권한에 대한 정보 및 외부 협력자로 변환 단추](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## 추가 참고 자료

- “[조직의 리포지토리에 외부 협력자 추가](/articles/adding-outside-collaborators-to-repositories-in-your-organization)”
- “[조직 리포지토리에서 외부 협력자 제거](/articles/removing-an-outside-collaborator-from-an-organization-repository)”
- "[외부 협력자를 조직 멤버로 변환](/articles/converting-an-outside-collaborator-to-an-organization-member)"
