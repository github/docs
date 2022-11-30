---
title: 팀과 ID 공급자 그룹 동기화
intro: '{% data variables.product.product_name %} 팀을 지원되는 IdP(ID 공급자) 그룹과 동기화하여 팀 멤버를 자동으로 추가하고 제거할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
  feature: scim-for-ghes
topics:
  - Organizations
  - Teams
shortTitle: Synchronize with an IdP
ms.openlocfilehash: c4ea8dc13eee674b962108ba52c71e67e8462b87
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106983'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## 팀 동기화 정보

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion ghec %}최대 5개의 IdP 그룹을 {% data variables.product.product_name %} 팀에 연결할 수 있습니다.{% elsif ghae %}{% data variables.product.product_name %}의 팀을 하나의 IdP 그룹에 연결할 수 있습니다. 그룹의 모든 사용자는 자동으로 팀에 추가되며 부모 조직에도 구성원으로 추가됩니다. 팀과 그룹의 연결을 끊으면 팀 멤버 자격을 통해 조직의 구성원이 된 사용자가 조직에서 제거됩니다.{% endif %} 여러 {% data variables.product.product_name %} 팀에 IdP 그룹을 할당할 수 있습니다.

{% ifversion ghec %}팀 동기화는 5,000명 이상의 구성원이 있는 IdP 그룹을 지원하지 않습니다.{% endif %}

{% data variables.product.prodname_dotcom %} 팀이 IdP 그룹에 연결되면 IdP 관리자는 ID 공급자를 통해 팀 구성원 자격을 변경해야 합니다. {% data variables.product.product_name %}{% ifversion ghec %}에서 또는 API{% endif %}를 사용하여 팀 구성원 자격을 관리할 수 없습니다.

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion ghec %} IdP를 통해 변경된 모든 팀 구성원 자격은 팀 동기화 봇의 변경 내용으로 {% data variables.product.product_name %}의 감사 로그에 표시됩니다. IdP는 1시간마다 {% data variables.product.prodname_dotcom %}에 팀 구성원 자격 데이터를 보냅니다.
IdP 그룹에 팀을 연결하면 일부 팀 구성원이 제거될 수 있습니다. 자세한 내용은 “[동기화된 팀의 구성원에 대한 요구 사항](#requirements-for-members-of-synchronized-teams)”을 참조하세요.
{% endif %}

{% ifversion ghae %} IdP에서 그룹 구성원 자격이 변경되면 IdP는 결정된 일정에 따라 {% data variables.product.product_name %}에 대한 변경 내용이 포함된 SCIM 요청을 보냅니다. {% data variables.product.prodname_dotcom %} 팀 또는 조직 구성원 자격을 변경하는 모든 요청은 감사 로그에 사용자 프로비저닝을 구성하는 데 사용되는 계정의 변경 내용으로 등록됩니다. 이 계정에 대한 자세한 내용은 “[엔터프라이즈에 대한 사용자 프로비저닝 구성](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”을 참조하세요. SCIM 요청 일정에 대한 자세한 내용은 Microsoft Docs의 “[사용자 프로비저닝 상태 확인](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)”을 참조하세요. {% endif %}

부모 팀은 IdP 그룹과 동기화할 수 없습니다. IdP 그룹에 연결하려는 팀이 부모 팀인 경우 새 팀을 만들거나, 팀을 부모 팀으로 만드는 중첩된 관계를 제거하는 것이 좋습니다. 자세한 내용은 “[팀 정보](/articles/about-teams#nested-teams)”, “[팀 만들기](/organizations/organizing-members-into-teams/creating-a-team)” 및 “[조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organizations-hierarchy)”을 참조하세요.

IdP 그룹에 연결된 팀을 포함하여 모든 {% data variables.product.prodname_dotcom %} 팀의 리포지토리 액세스를 관리하려면 {% data variables.product.product_name %}를 변경해야 합니다. 자세한 내용은 “[팀 정보](/articles/about-teams)” 및 “[조직 리포지토리에 대한 팀 액세스 관리](/articles/managing-team-access-to-an-organization-repository)”를 참조하세요. 

{% ifversion ghec %}또한 API를 사용하여 팀 동기화를 관리할 수도 있습니다. 자세한 내용은 “[팀 동기화](/rest/reference/teams#team-sync)”를 참조하세요.{% endif %}

{% ifversion ghec %}
## 동기화된 팀의 구성원에 대한 요구 사항

팀을 IdP 그룹에 연결한 후 팀 동기화는 다음 경우에만 {% data variables.product.product_name %}의 해당 팀에 IdP 그룹의 각 구성원을 추가합니다.
- 사용자가 {% data variables.product.product_name %} 조직의 구성원입니다.
- {% data variables.product.product_name %}에서 개인 계정으로 이미 로그인했으며 SAML Single Sign-On을 통해 조직 또는 엔터프라이즈 계정에 한 번 이상 인증한 적이 있습니다.
- 사용자의 SSO ID는 IdP 그룹의 구성원입니다.  

이 조건을 충족하지 않는 기존 팀 또는 그룹 구성원은 {% data variables.product.product_name %}의 팀에서 자동으로 제거되고 리포지토리에 대한 액세스 권한이 손실됩니다. 또한 사용자의 연결된 ID를 취소하면 IdP 그룹에 매핑된 모든 팀에서 사용자가 제거됩니다. 자세한 내용은 “[조직에 대한 구성원의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)” 및 “[엔터프라이즈에 대한 사용자의 SAML 액세스 보기 및 관리](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)”를 참조하세요.

제거된 팀 구성원은 SSO를 사용하여 조직 또는 엔터프라이즈 계정에 인증하고 연결된 IdP 그룹으로 이동하고 나면, 자동으로 팀에 다시 추가할 수 있습니다.

팀 구성원을 실수로 제거하지 않도록 하려면 조직 또는 엔터프라이즈 계정에 SAML SSO를 적용하고 구성원 자격 데이터를 동기화할 새 팀을 만들며, 기존 팀을 동기화하기 전에 IdP 그룹 구성원 자격을 확인하는 것이 좋습니다. 자세한 내용은 “[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)”(조직에 SAML Single Sign-On 적용) 및 “[Configuring SAML single sign-on for your enterprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”(엔터프라이즈에 SAML Single Sign-On 구성)를 참조하세요.

{% endif %}

## 필수 조건

{% ifversion ghec %} {% data variables.product.product_name %} 팀을 ID 공급자 그룹에 연결하려면, 먼저 조직 또는 엔터프라이즈 소유자가 조직 또는 엔터프라이즈 계정에 대해 팀 동기화를 사용하도록 설정해야 합니다. 자세한 내용은 “[조직에 대한 팀 동기화 관리](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)” 및 “[엔터프라이즈 계정의 조직에 대한 팀 동기화 관리](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”를 참조하세요.

실수로 팀 구성원을 제거하지 않으려면 IdP에 대한 관리 포털을 방문하여 현재 각 팀 구성원이 이 팀에 연결하려는 IdP 그룹에 있는지 확인합니다. ID 공급자에 대한 액세스 권한이 없는 경우 IdP 관리자에게 문의할 수 있습니다.

SAML SSO를 사용하여 인증해야 합니다. 자세한 내용은 “[Authenticating with SAML single sign-on](/articles/authenticating-with-saml-single-sign-on)”(SAML Single Sign-On을 사용한 인증 정보)을 참조하세요.

{% elsif ghae %} {% data variables.product.product_name %} 팀을 IdP 그룹에 연결하려면 먼저 지원되는 SCIM(도메인 간 ID 관리)을 사용하여 {% data variables.location.product_location %}에 대한 사용자 프로비저닝을 구성해야 합니다. 자세한 내용은 “[엔터프라이즈에 대한 사용자 프로비저닝 구성](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”을 참조하세요.

SCIM을 사용하여 {% data variables.product.product_name %}에 대한 사용자 프로비저닝을 구성한 후 {% data variables.product.product_name %} 애플리케이션을 {% data variables.product.product_name %}에서 사용하려는 모든 IdP 그룹에 할당할 수 있습니다. 자세한 내용은 Microsoft Docs [GitHub AE에 대한 자동 사용자 프로비저닝 구성](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae)을 참조하세요.

{% elsif scim-for-ghes %} {% data variables.location.product_location %}에 대한 SCIM을 사용하여 사용자 프로비저닝을 구성해야 합니다. 자세한 내용은 "[엔터프라이즈용 SCIM을 사용하여 사용자 프로비저닝 구성"을 참조하세요](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% data reusables.scim.ghes-beta-note %} {% endif %}

## IdP 그룹을 팀에 연결

IdP 그룹을 {% data variables.product.product_name %} 팀에 연결하면 그룹의 모든 사용자가 자동으로 팀에 추가됩니다. {% ifversion ghae %}또한 이미 부모 조직 구성원의 구성원이 아닌 모든 사용자도 조직에 추가됩니다. {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. “ID 공급자 그룹”에서 드롭다운 메뉴를 사용하여 최대 5개의 ID 공급자 그룹을 선택합니다.
    ![ID 공급자 그룹을 선택하는 드롭다운 메뉴](/assets/images/help/teams/choose-an-idp-group.png){% elsif ghae %}
6. “ID 공급자 그룹”에서 드롭다운 메뉴를 사용하여 목록에서 ID 제공자 그룹을 선택합니다.
    ![ID 공급자 그룹을 선택하는 드롭다운 메뉴](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. **변경 내용 저장** 을 클릭합니다.

## 팀에서 IdP 그룹 연결 끊기

{% data variables.product.prodname_dotcom %} 팀에서 IdP 그룹의 연결을 끊으면 IdP 그룹을 통해 {% data variables.product.prodname_dotcom %} 팀에 할당된 팀 구성원이 팀에서 제거됩니다. {% ifversion ghae %} 팀 연결로 인해 부모 조직의 구성원이었던 모든 사용자도 조직에서 제거됩니다.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. “ID 공급자 그룹”에서 연결을 끊을 IdP 그룹의 오른쪽에 있는 {% octicon "x" aria-label="X symbol" %}를 클릭합니다. 
    ![GitHub 팀에서 연결된 IdP 그룹 선택 취소](/assets/images/help/teams/unselect-idp-group.png){% elsif ghae %}
6. “ID 공급자 그룹”에서 연결을 끊을 IdP 그룹의 오른쪽에 있는 {% octicon "x" aria-label="X symbol" %}를 클릭합니다. 
    ![GitHub 팀에서 연결된 IdP 그룹 선택 취소](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. **변경 내용 저장** 을 클릭합니다.
