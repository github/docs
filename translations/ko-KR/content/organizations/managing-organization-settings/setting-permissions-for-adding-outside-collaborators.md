---
title: 외부 협력자를 추가하기 위한 권한 설정
intro: 조직의 데이터와 조직에서 사용되는 유료 라이선스 수를 보호하기 위해 누가 외부 협력자를 조직 리포지토리에 추가할 수 있는지를 구성할 수 있습니다.
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: ec9133f5a4be38999d1b2051d538dadff4923abf
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109146'
---
기본적으로 리포지토리에 대한 관리자 액세스 권한이 있는 사용자는 외부 협력자를 초대하여 리포지토리에서 작업할 수 있습니다. 외부 협력자를 추가하는 기능을 조직 소유자에게만 제한하도록 선택할 수 있습니다.

{% ifversion ghec %} {% note %}

**참고:** {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직만 외부 협력자를 조직 소유자에게 초대하는 기능을 제한할 수 있습니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}엔터프라이즈 계정이 조직을 소유하고 있는 경우 엔터프라이즈 소유자가 엔터프라이즈 수준에서 정책을 설정하면 사용자{% else %}사용자{% endif %}가 이 설정을 구성하지 못할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise #enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your -enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}”을 참조하세요.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. “리포지토리 외부 협력자”에서 **리포지토리 관리자가 외부 협력자를 이 조직의 리포지토리에 초대하도록 허용** 을 선택 취소합니다.
  ![리포지토리 관리자가 외부 협력자를 조직 리포지토리에 초대할 수 있도록 허용하는 확인란](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. **저장** 을 클릭합니다.
