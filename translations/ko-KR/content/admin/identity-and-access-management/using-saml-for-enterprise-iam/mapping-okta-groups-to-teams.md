---
title: OKTA 그룹을 팀에 매핑
shortTitle: Map Okta groups to teams
intro: '{% data variables.product.prodname_ghe_managed %}의 팀에 OKTA 그룹을 매핑하여 팀 구성원을 자동으로 추가하고 제거할 수 있습니다.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116540'
---
{% data reusables.saml.okta-ae-sso-beta %}

## 팀 매핑 정보

OKTA를 IdP로 사용하는 경우 OKTA 그룹을 {% data variables.product.prodname_ghe_managed %}의 팀에 매핑할 수 있습니다. OKTA 그룹의 멤버가 자동으로 매핑된 {% data variables.product.prodname_ghe_managed %} 팀의 멤버가 됩니다. 이 매핑을 구성하려면 그룹 및 해당 멤버를 {% data variables.product.prodname_ghe_managed %}에 푸시하도록 OKTA “GitHub AE” 앱을 구성할 수 있습니다. 그러면 {% data variables.product.prodname_ghe_managed %}에서 OKTA 그룹에 매핑할 팀을 선택할 수 있습니다.

## 필수 조건

사용자 또는 OKTA 관리자는 OKTA 전역 관리자 또는 권한 있는 역할 관리자여야 합니다.
 
OKTA SAML Single Sign-On을 사용하도록 설정해야 합니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

SAML SSO 및 OKTA를 사용하여 엔터프라이즈 계정에 인증해야 합니다. 자세한 내용은 “[Authenticating with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)”(SAML Single Sign-On을 사용한 인증 정보)을 참조하세요.

## “GitHub AE” 앱에 OKTA 그룹 할당

1. OKTA 대시보드에서 그룹의 설정을 엽니다.
1. **앱 관리** 를 클릭합니다.
  ![앱에 그룹 추가](/assets/images/help/saml/okta-ae-group-add-app.png)

1. “GitHub AE” 오른쪽에서 **할당** 을 클릭합니다.

  ![앱 할당](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. **완료** 를 클릭합니다.

## {% data variables.product.prodname_ghe_managed %}에 OKTA 그룹 푸시

OKTA 그룹을 푸시하고 그룹을 팀에 매핑하면 그룹의 모든 멤버가 {% data variables.product.prodname_ghe_managed %}에 로그인할 수 있습니다.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. **그룹 푸시** 를 클릭합니다.

  ![그룹 푸시 탭](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. 그룹 푸시 드롭다운 메뉴를 선택하고 **이름으로 그룹 찾기** 를 클릭합니다.

  ![그룹 추가 단추](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. {% data variables.product.prodname_ghe_managed %}에 푸시할 그룹의 이름을 입력한 다음 **저장** 을 클릭합니다.

  ![그룹 이름 추가](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## OKTA 그룹에 팀 매핑

엔터프라이즈의 팀을 이전에 {% data variables.product.prodname_ghe_managed %}에 푸시한 OKTA 그룹에 매핑할 수 있습니다. OKTA 그룹의 멤버는 자동으로 {% data variables.product.prodname_ghe_managed %} 팀의 멤버가 됩니다. OKTA 그룹의 멤버 자격에 대한 후속 변경 내용은 {% data variables.product.prodname_ghe_managed %} 팀과 자동으로 동기화됩니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. “ID 공급자 그룹”에서 드롭다운 메뉴를 선택하고 ID 공급자 그룹을 클릭합니다.
    ![ID 공급자 그룹을 선택하는 드롭다운 메뉴](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. **변경 내용 저장** 을 클릭합니다.

## 매핑된 팀의 상태 확인

Enterprise 소유자는 사이트 관리자 대시보드를 사용하여 {% data variables.product.prodname_ghe_managed %}에서 OKTA 그룹이 팀에 매핑되는 방법을 확인할 수 있습니다.

1. 대시보드에 액세스하려면 페이지의 오른쪽 위 모서리에서 {% octicon "rocket" aria-label="The rocket ship" %}을 클릭합니다.
  ![사이트 관리자 설정에 액세스하기 위한 로켓 아이콘](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. 왼쪽 창에서 **외부 그룹** 을 클릭합니다.

  ![그룹 이름 추가](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. 그룹에 대한 자세한 내용을 보려면 외부 그룹 목록에서 그룹을 클릭합니다.

  ![외부 그룹 목록](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. 그룹의 세부 정보에는 OKTA 그룹의 이름, 그룹의 멤버인 OKTA 사용자 목록, {% data variables.product.prodname_ghe_managed %}에 매핑된 해당 팀이 포함됩니다. 

  ![외부 그룹 목록](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## 매핑된 그룹에 대한 감사 로그 이벤트 보기

 매핑된 그룹에 대한 SSO 활동을 모니터링하려면 {% data variables.product.prodname_ghe_managed %} 감사 로그에서 다음 이벤트를 검토할 수 있습니다.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

자세한 내용은 “[조직의 감사 로그 검토](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)”를 참조하세요.
