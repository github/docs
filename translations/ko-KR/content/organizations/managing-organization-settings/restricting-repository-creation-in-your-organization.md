---
title: 조직에서 리포지토리 만들기 제한
intro: 조직의 데이터를 보호하려면 조직에서 리포지토리를 만들 수 있는 권한을 구성할 수 있습니다.
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068318'
---
멤버가 조직에서 리포지토리를 만들 수 있는지 여부를 선택할 수 있습니다. {% ifversion ghec or ghes or ghae %}멤버가 리포지토리를 만들 수 있도록 허용하는 경우 멤버가 만들 수 있는 리포지토리 형식을 선택할 수 있습니다.{% elsif fpt %}멤버가 리포지토리를 만들 수 있도록 허용하는 경우 멤버가 퍼블릭 및 프라이빗 리포지토리를 둘 다 만들 수 있는지 또는 퍼블릭 리포지토리만 만들 수 있는지를 선택할 수 있습니다.{% endif %} 조직 소유자는 항상 모든 유형의 리포지토리를 만들 수 있습니다.

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직에서는 멤버가 프라이빗 리포지토리만 만들도록 제한할 수도 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)를 참조하세요.
{% endif %}

{% ifversion ghec or ghae or ghes %} 엔터프라이즈 소유자는 조직의 리포지토리 만들기 정책에 사용할 수 있는 옵션을 제한할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)”을 참조하세요.
{% endif %}

{% warning %}

**경고**: 이 설정은 리포지토리를 만들 때 사용할 수 있는 표시 유형 옵션만 제한하며 나중에 리포지토리 표시 유형을 변경하는 기능을 제한하지 않습니다. 기존 리포지토리의 표시 유형에 대한 변경을 제한하는 방법에 대한 자세한 내용은 "[조직의 리포지토리 표시 유형 변경 제한](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)"을 참조하세요.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. "리포지토리 만들기"에서 하나 이상의 옵션을 선택합니다.

   {%- ifversion ghes or ghec or ghae %} ![리포지토리 만들기 옵션](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![리포지토리 만들기 옵션](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **참고:** 멤버가 프라이빗 리포지토리만 만들도록 제한하려면 조직에서 {% data variables.product.prodname_ghe_cloud %}를 사용해야 합니다. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. **저장** 을 클릭합니다.
