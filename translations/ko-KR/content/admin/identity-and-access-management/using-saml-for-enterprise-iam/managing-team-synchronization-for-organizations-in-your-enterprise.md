---
title: 엔터프라이즈의 조직에 대한 팀 동기화 관리
intro: 'Azure AD와 {% data variables.product.product_name %} 간에 팀 동기화를 사용하도록 설정하여 엔터프라이즈 계정이 소유한 조직이 IdP 그룹을 통해 팀 멤버 자격을 관리하도록 할 수 있습니다.'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Manage team synchronization
ms.openlocfilehash: 1e29d70b0b8fcf78a8b03834e9436112634c636f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076937'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## 엔터프라이즈 계정에 대한 팀 동기화 정보

Azure AD와 함께 엔터프라이즈 수준의 SAML을 IdP로 사용하는 경우 엔터프라이즈 계정에 대한 팀 동기화를 활성화하여 조직 소유자 및 팀 유지 관리자가 엔터프라이즈 계정이 소유한 조직의 팀을 IdP 그룹과 동기화할 수 있도록 할 수 있습니다.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

개별 조직에 대한 팀 동기화를 구성하고 관리할 수도 있습니다. 자세한 내용은 “[조직의 팀 동기화 관리](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”를 참조하세요.

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## 필수 조건

사용자 또는 Azure AD 관리자는 Azure AD의 전역 관리자 또는 권한 있는 역할 관리자여야 합니다.
 
지원되는 IdP를 사용하여 엔터프라이즈 계정의 조직에 SAML Single Sign-On을 적용해야 합니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

SAML SSO 및 지원되는 IdP를 사용하여 엔터프라이즈 계정에 인증해야 합니다. 자세한 내용은 “[Authenticating with SAML single sign-on](/articles/authenticating-with-saml-single-sign-on)”(SAML Single Sign-On을 사용한 인증 정보)을 참조하세요.

## Azure AD에 대한 팀 동기화 관리

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. 엔터프라이즈 계정에 연결하려는 IdP 테넌트에 대한 세부 정보를 검토한 다음, **승인** 을 클릭합니다.
  ![요청을 승인하거나 취소하는 옵션을 사용하여 특정 IdP 테넌트에 팀 동기화를 사용하도록 설정하는 보류 중인 요청](/assets/images/help/teams/approve-team-synchronization.png)
8. 팀 동기화를 비활성화하려면 **팀 동기화 사용 안 함** 을 클릭합니다.
  ![팀 동기화 사용 안 함](/assets/images/help/teams/disable-team-synchronization.png)
