---
title: 조직에 대한 기본 권한 설정
intro: 조직이 소유한 리포지토리에 대한 기본 권한을 설정할 수 있습니다.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "146179929"
---
## 조직의 기본 권한 정보

조직의 리포지토리에 액세스할 때 조직의 모든 구성원에게 적용되는 기본 권한을 설정할 수 있습니다. 기본 권한은 외부 협력자에게는 적용되지 않습니다.

{% ifversion fpt or ghec %}기본적으로 조직의 구성원은 조직의 리포지토리에 대한 **읽기** 권한을 갖습니다.{% endif %}

조직의 리포지토리에 대한 관리자 액세스 권한이 있는 사용자가 구성원에게 리포지토리에 대한 더 높은 수준의 액세스 권한을 부여하는 경우 이 상위 수준 액세스 권한이 기본 권한을 재정의합니다.

{% ifversion custom-repository-roles %} 조직의 기본 권한보다 액세스 권한이 낮은 상속된 역할을 사용하여 사용자 지정 리포지토리 역할을 만든 경우 해당 역할에 할당된 모든 구성원은 상속된 역할이 아닌 조직의 기본 사용 권한이 기본적으로 부여됩니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
{% endif %}

## 기본 권한 설정

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. "기본 권한"에서 드롭다운을 사용하여 새 기본 권한을 선택합니다.
  ![기본 권한 드롭다운에서 새 권한 수준 선택](/assets/images/help/organizations/base-permissions-drop-down.png)
6. 변경 내용을 검토합니다. 확인하려면 **기본 권한을 권한으로 변경** 을 클릭합니다.
  ![기본 권한 변경 검토 및 확인](/assets/images/help/organizations/base-permissions-confirm.png)

## 추가 참고 자료

- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
- “[조직의 리포지토리에 외부 협력자 추가](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”
