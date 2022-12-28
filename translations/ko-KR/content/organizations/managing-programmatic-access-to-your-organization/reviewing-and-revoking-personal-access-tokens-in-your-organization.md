---
title: 조직에서 개인용 액세스 토큰 검토 및 해지
intro: '조직 소유자는 조직에 액세스할 수 있는 {% 데이터 variables.product.pat_v2 %}s을(를) 검토할 수 있습니다. 또한 특정 {% 데이터 variables.product.pat_v2 %}의 액세스를 취소할 수 있습니다.'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: b45401441473f892ba61cf199852588e2a3b3d67
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131379'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## {% data variables.product.pat_v2 %}s 검토 및 해지 정보

조직 소유자는 조직이 소유한 리소스에 액세스할 수 있는 모든 {% 데이터 variables.product.pat_v2 %}s을(를) 볼 수 있습니다. 조직 소유자는 {% data variables.product.pat_v2 %}s에서 액세스를 취소할 수도 있습니다. {% data variables.product.pat_v2 %}이(가) 해지되면 토큰에서 만든 SSH 키는 계속 작동하며 토큰은 조직 내에서 공용 리소스를 읽을 수 있습니다.

토큰이 해지되면 토큰을 만든 사용자는 이메일 알림을 받게 됩니다.

조직 소유자는 {% data variables.product.pat_v1_plural %}이 아닌 {% data variables.product.pat_v2 %}s만 보고 취소할 수 있습니다. 조직 {% ifversion ghec or ghes or ghae %}또는 엔터프라이즈 {% endif %}가 {% data variables.product.pat_v1_plural %}에 의해 액세스를 제한하지 않는 한, 모든 {% data variables.product.pat_v1 %}은 토큰이 만료될 때까지 조직 리소스에 액세스할 수 있습니다. {% data variables.product.pat_v1_plural %}로 액세스를 제한하는 방법에 대한 자세한 내용은 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)"{% ifversion ghec or ghes or ghae %} 및 "[엔터프라이즈에서 {% data variables.product.pat_generic %}s에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)"{% endif %}을 참조하세요.

{% ifversion ghec %} 조직 소유자는 조직에 SAML Single Sign-On이 필요한 경우 {% data variables.product.pat_v1_plural %}을(를) 보고 취소할 수도 있습니다. 자세한 내용은 "[엔터프라이즈에 대한 사용자의 SAML 액세스 보기 및 관리"를 참조하세요](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials). REST API를 사용하여 이 작업을 수행하는 방법에 대한 자세한 내용은 "[조직에 대한 SAML SSO 권한 부여 나열](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization)" 및 "[조직에 대한 SAML SSO 권한 부여 제거](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization)"를 참조하세요. {% endif %}

## {% data variables.product.pat_v2 %}s 검토 및 해지

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 에서 **활성 토큰을** 클릭합니다. 조직에 액세스할 수 있는 {% 데이터 variables.product.pat_v2 %}s이(가) 표시됩니다.
1. 검토하거나 취소할 토큰의 이름을 클릭합니다.
1. 토큰에 있는 액세스 및 권한을 검토합니다.
1. 조직에 대한 토큰의 액세스를 취소하려면 **해** 지를 클릭합니다.

또는 한 번에 여러 토큰을 해지할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바의 **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** 에서 **활성 토큰을** 클릭합니다. 조직에 액세스할 수 있는 {% 데이터 variables.product.pat_v2 %}s이(가) 표시됩니다.
{% data reusables.user-settings.patv2-filters %}
1. 취소할 각 토큰을 선택합니다.
1. **선택한 토큰...** 드롭다운 메뉴를 선택하고 **해지...** 를 클릭합니다.
