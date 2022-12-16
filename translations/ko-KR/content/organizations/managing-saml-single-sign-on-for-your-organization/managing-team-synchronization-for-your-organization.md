---
title: 조직의 팀 동기화 관리
intro: '{% data variables.product.product_name %}에서 IdP(ID 공급자)와 조직 간의 팀 동기화를 사용하거나 사용하지 않도록 설정할 수 있습니다.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team synchronization
ms.openlocfilehash: 027669f75f3671394503e5036b8f6c86351697cf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093152'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## 팀 동기화 정보

IdP와 {% data variables.product.product_name %} 간의 팀 동기화를 사용하도록 설정하여 조직 소유자와 팀 유지 관리자가 조직의 팀을 IdP 그룹과 연결할 수 있습니다.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

엔터프라이즈 계정이 소유한 조직에 대해 팀 동기화를 사용하도록 설정할 수도 있습니다. 자세한 내용은 “[엔터프라이즈의 조직에 대한 팀 동기화 관리](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”를 참조하세요.

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## 팀 동기화 사용

팀 동기화를 사용하도록 설정하는 단계는 사용하려는 IdP에 따라 다릅니다. 모든 IdP에 적용되는 팀 동기화를 사용하도록 설정하기 위한 필수 조건이 있습니다. 각 개별 IdP에는 추가 필수 구성 요소가 있습니다.

### 필수 조건

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

조직 및 지원되는 IdP에 SAML Single Sign-On을 사용하도록 설정해야 합니다. 자세한 내용은 “[조직에 대한 SAML Single Sign-On 적용](/articles/enforcing-saml-single-sign-on-for-your-organization)”을 참조하세요.

연결된 SAML ID가 있어야 합니다. 연결된 ID를 만들려면 SAML SSO 및 지원되는 IdP를 한 번 이상 사용하여 조직에 인증해야 합니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/articles/authenticating-with-saml-single-sign-on)”를 참조하세요.

SAML 설정에는 **발급자** 필드에 대한 유효한 IdP URL이 포함 **되어야** 합니다. 

![SAML 발급자 필드](/assets/images/help/saml/saml_issuer.png)



### Azure AD에 팀 동기화 사용

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
6. 조직에 연결하려는 ID 공급자 테넌트 정보를 검토한 다음, **승인** 을 클릭합니다.
  ![요청을 승인하거나 취소하는 옵션을 사용하여 특정 IdP 테넌트에 팀 동기화를 사용하도록 설정하는 보류 중인 요청](/assets/images/help/teams/approve-team-synchronization.png)

### OKTA에 팀 동기화 사용

OKTA 팀 동기화를 사용하려면 조직에 대해 OKTA를 사용하는 SAML 및 SCIM이 이미 설정되어 있어야 합니다.

OKTA와의 잠재적 팀 동기화 오류를 방지하려면 {% data variables.product.prodname_dotcom %}에서 팀 동기화를 사용하도록 설정하기 전에 선택한 OKTA 그룹의 구성원인 모든 조직 구성원에 대해 SCIM 연결된 ID가 올바르게 설정되어 있는지 확인하는 것이 좋습니다. 

조직 구성원에게 연결된 SCIM ID가 없는 경우 팀 동기화가 예상대로 작동하지 않으며 사용자가 예상대로 팀에서 추가되거나 제거되지 않을 수 있습니다. 이러한 사용자 중 SCIM 연결된 ID가 누락된 경우 다시 프로비저닝해야 합니다.

누락된 SCIM 연결된 ID가 없는 사용자를 프로비저닝하는 방법에 대한 도움말은 “[조직의 ID 및 액세스 관리 문제 해결](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)”을 참조하세요.

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. 조직 구성원이 SAML 및 SCIM ID를 연결하도록 조직에 SAML을 적용하는 것이 좋습니다. 자세한 내용은 “[조직에 대한 SAML Single Sign-On 적용](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)”을 참조하세요.
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. 조직의 이름 아래에 유효한 SSWS 토큰과 OKTA 인스턴스의 URL을 입력합니다.
  ![팀 동기화 OKTA 조직 양식 사용](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. 조직에 연결하려는 ID 공급자 테넌트 정보를 검토한 다음, **만들기** 를 클릭합니다.
  ![팀 동기화 만들기 단추 사용](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## 팀 동기화를 사용하지 않도록 설정

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. “팀 동기화”에서 **팀 동기화 사용 안 함** 을 클릭합니다.
  ![팀 동기화 사용 안 함](/assets/images/help/teams/disable-team-synchronization.png)
