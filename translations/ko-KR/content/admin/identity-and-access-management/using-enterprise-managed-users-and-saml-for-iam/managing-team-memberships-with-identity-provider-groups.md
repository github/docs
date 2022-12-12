---
title: ID 공급자 그룹을 사용하여 팀 멤버 자격 관리
shortTitle: Manage teams with your IdP
intro: You can manage team membership on {% data variables.product.product_name %} through your identity provider (IdP) by connecting IdP groups with your {% data variables.product.prodname_emu_enterprise %}.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Enterprise
- SSO
- Teams
ms.openlocfilehash: 2dc5a5ae3a8aad9cf589e148764dec1991c2c8f7
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116596"
---
## <a name="about-team-management-with--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %}를 사용하는 팀 관리 정보

{% data variables.product.prodname_emus %}를 사용하면 IdP를 통해 엔터프라이즈 내에서 팀 멤버 자격을 관리할 수 있습니다. 엔터프라이즈 조직 중 하나의 팀을 IdP 그룹에 연결하면 IdP 그룹의 멤버 자격 변경 내용이 엔터프라이즈에 자동으로 반영되므로 수동 업데이트, 사용자 지정 스크립트 등의 필요성이 줄어듭니다. 

IdP 그룹 또는 새 팀 연결의 변경으로 인해 {% data variables.product.prodname_managed_user %}가 아직 멤버가 아닌 조직의 팀에 참가하게 되면 {% data variables.product.prodname_managed_user %}가 자동으로 조직에 추가됩니다. 조직 소유자는 조직 멤버 자격을 수동으로 관리할 수도 있습니다. 팀에서 그룹의 연결을 끊으면 팀 멤버 자격을 통해 조직의 멤버가 된 사용자는 다른 방법으로 조직의 멤버 자격을 할당받지 않은 경우 조직에서 제거됩니다.

엔터프라이즈의 팀을 하나의 IdP 그룹에 연결할 수 있습니다. 동일한 IdP 그룹을 엔터프라이즈의 여러 팀에 할당할 수 있습니다.

기존 팀을 IdP 그룹에 연결하는 경우 먼저 수동으로 추가된 멤버를 제거해야 합니다. 엔터프라이즈의 팀을 IdP 그룹에 연결한 후 IdP 관리자는 ID 공급자를 통해 팀 멤버 자격을 변경해야 합니다. {% data variables.product.prodname_dotcom_the_website %}에서는 팀 멤버 자격을 관리할 수 없습니다.

IdP에서 그룹 멤버 자격이 변경되면 IdP는 IdP에서 결정된 일정에 따라 {% data variables.product.prodname_dotcom_the_website %}의 변경 내용이 포함된 SCIM 요청을 보내므로 변경 내용이 즉각적이지 않을 수 있습니다. 팀 또는 조직 멤버 자격을 변경하는 모든 요청은 사용자 프로비저닝을 구성하는 데 사용되는 계정의 변경 내용으로 감사 로그에 등록됩니다.

IdP 그룹에 연결된 팀은 다른 팀의 부모나 다른 팀의 자녀가 될 수 없습니다. IdP 그룹에 연결하려는 팀이 부모 또는 자식 팀인 경우 새 팀을 만들거나 해당 팀을 부모 팀으로 만드는 중첩된 관계를 제거하는 것이 좋습니다.

IdP 그룹에 연결된 팀을 포함하여 엔터프라이즈의 모든 팀에 대한 리포지토리 액세스를 관리하려면 {% data variables.product.prodname_dotcom_the_website %}을 변경해야 합니다. 자세한 내용은 “[조직 리포지토리에 대한 팀 액세스 권한 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”를 참조하세요.

## <a name="creating-a-new-team-connected-to-an-idp-group"></a>IdP 그룹에 연결된 새 팀 만들기

조직의 모든 멤버는 새 팀을 만들고 팀을 IdP 그룹에 연결할 수 있습니다. 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. 팀을 연결하려면 “ID 공급자 그룹” 드롭다운 메뉴를 선택하고 연결할 팀을 클릭합니다.
    ![ID 공급자 그룹을 선택하는 드롭다운 메뉴](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## <a name="managing-the-connection-between-an-existing-team-and-an-idp-group"></a>기존 팀과 IdP 그룹 간 연결 관리

조직 소유자와 팀 유지 관리자는 IdP 그룹과 팀 간의 기존 연결을 관리할 수 있습니다.

{% note %}

**참고**: {% data variables.product.prodname_dotcom_the_website %}의 기존 팀을 IdP 그룹에 처음으로 연결하기 전에 {% data variables.product.prodname_dotcom_the_website %}에 있는 팀의 모든 멤버를 먼저 제거해야 합니다. 자세한 내용은 “[팀에서 조직 멤버 제거](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team)”를 참조하세요.

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. 필요에 따라 “ID 공급자 그룹”에서 연결을 끊을 IdP 그룹의 오른쪽에 있는 {% octicon "x" aria-label="X symbol" %}를 클릭합니다. 
    ![GitHub 팀에서 연결된 IdP 그룹 선택 취소](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. IdP 그룹을 연결하려면 “ID 공급자 그룹”에서 드롭다운 메뉴를 선택하고 목록에서 ID 공급자 그룹을 클릭합니다.
    ![ID 공급자 그룹을 선택하는 드롭다운 메뉴](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. **변경 내용 저장** 을 클릭합니다.

## <a name="viewing-idp-groups-group-membership-and-connected-teams"></a>IdP 그룹, 그룹 멤버 자격 및 연결된 팀 보기

IdP 그룹 목록을 검토하고, IdP 그룹에 연결된 팀을 확인하고, {% data variables.product.product_name %}에서 각 IdP 그룹의 멤버 자격을 확인할 수 있습니다. IdP에서 그룹의 멤버 자격을 편집해야 합니다.

{% data reusables.enterprise-accounts.access-enterprise %}
1. IdP 그룹 목록을 검토하려면 왼쪽 사이드바에서 {% octicon "key" aria-label="The key icon" %} **ID 공급자** 를 클릭합니다.
    ![엔터프라이즈 사이드바의 “ID 공급자” 탭을 보여 주는 스크린샷](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. IdP 그룹에 연결된 멤버와 팀을 보려면 그룹 이름을 클릭합니다.
    ![그룹 이름이 강조 표시된 IdP 그룹 목록을 보여 주는 스크린샷](/assets/images/help/enterprises/select-idp-group.png)
4. IdP 그룹에 연결된 팀을 보려면 **팀** 을 클릭합니다. 
    ![“팀” 단추를 보여 주는 스크린샷](/assets/images/help/enterprises/idp-groups-team-switcher.png)
