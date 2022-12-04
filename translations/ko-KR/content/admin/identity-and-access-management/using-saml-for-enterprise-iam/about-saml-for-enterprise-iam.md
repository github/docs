---
title: 엔터프라이즈 IAM에 대한 SAML 정보
shortTitle: About SAML for IAM
intro: 'SAML SSO(Single Sign-On) {% ifversion ghae %}와 SCIM(도메인 간 ID 관리) {% endif %}을(를) 사용하여 조직 소유의 액세스 {% ifversion ghec %}에 대한 액세스를 중앙에서 관리할 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}에서 {% data variables.location.product_location %}{% elsif ghae %}에서 {% data variables.location.product_location %}{% endif %}로 엔터프라이즈에 의해 전송됩니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
ms.openlocfilehash: d719ef81948cef75018b0976fc97ef45c267469f
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180031'
---
## {% ifversion ghec or ghae %}{% endif %}{% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}에 대한 SAML SSO 정보

{% ifversion ghec %}

엔터프라이즈 구성원이 {% data variables.location.product_location %}에서 자신의 사용자 계정을 관리하는 경우 엔터프라이즈 또는 조직에 대한 추가 액세스 제한으로 SAML 인증을 구성할 수 있습니다. {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

또는 {% data variables.product.prodname_emus %}를 사용하여 엔터프라이즈 구성원의 계정을 프로비전하고 관리할 수 있습니다. 엔터프라이즈에 SAML SSO 또는 {% data variables.product.prodname_emus %} 중 무엇이 더 적합한지 판단하려면 "[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)"를 참조하세요.

{% data reusables.enterprise-accounts.about-recovery-codes %} 자세한 내용은 “[엔터프라이즈에 대한 복구 코드 관리](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)를 참조하세요.

SAML SSO를 사용하도록 설정한 후 사용하는 IdP에 따라 추가 ID 및 액세스 관리 기능을 사용하도록 설정할 수 있습니다. 

Azure AD를 IdP로 사용하는 경우 팀 동기화를 사용하여 각 조직 내에서 팀 멤버 자격을 관리할 수 있습니다. {% data reusables.identity-and-permissions.about-team-sync %} 자세한 내용은 “[엔터프라이즈 계정의 조직에 대한 팀 동기화 관리](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”를 참조하세요.

{% note %}

**참고:** 엔터프라이즈가 {% data variables.product.prodname_emus %}에 대해 사용하도록 설정되어 있지 않으면 엔터프라이즈 수준에서 SCIM을 사용할 수 없습니다.

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} 자세한 내용은 “[조직에서 엔터프라이즈 계정으로 SAML 구성 전환](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”을 참조하세요.

{% elsif ghes %}

SAML SSO를 사용하면 ID 관리를 위해 외부 시스템을 통해 {% data variables.location.product_location %}을(를) 인증하고 액세스할 수 있습니다.

SAML은 인증 및 권한 부여를 위한 XML 기반 표준입니다. {% data variables.location.product_location %}에 SAML을 구성하면 인증을 위한 외부 시스템을 IdP(ID 공급자)라고 합니다. 인스턴스는 SAML SP(서비스 공급자) 역할을 합니다. SAML 표준에 관한 자세한 내용은 Wikipedia의 [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)를 참조하세요.

{% data variables.product.product_name %}의 SAML SSO 구성에 관한 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

{% data reusables.saml.saml-ghes-account-revocation %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

IdP(ID 공급자)에서 {% data variables.product.product_name %}에 대한 애플리케이션을 구성한 후 IdP의 사용자 및 그룹에 애플리케이션을 할당하여 {% data variables.location.product_location %}에 대한 액세스를 프로비전할 수 있습니다. {% data variables.product.product_name %}에 대한 SAML SSO의 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

{% data reusables.scim.after-you-configure-saml %} 자세한 내용은 “[엔터프라이즈에 대한 사용자 프로비저닝 구성](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”을 참조하세요.

특정 IdP를 사용하여 {% data variables.location.product_location %}에 대한 인증 및 사용자 프로비저닝을 구성하는 방법을 알아보려면 "[ID 공급자를 사용하여 인증 및 프로비저닝 구성"을 참조하세요](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider).

{% endif %}

## 지원되는 IdP

{% ifversion ghec %}

다음 IdP를 테스트하고 공식적으로 지원합니다. SAML SSO의 경우 SAML 2.0 표준을 구현하는 모든 ID 공급자를 제한적으로 지원합니다. 자세한 내용은 OASIS 웹 사이트의 [SAML Wiki](https://wiki.oasis-open.org/security)를 참조하세요.

IdP | SAML | 팀 동기화 | 
--- | :--: | :-------: |
AD FS(Active Directory Federation Services) | {% octicon "check-circle-fill" aria-label= "The check icon" %} | |
Azure AD(Azure Active Directory) | {% octicon "check-circle-fill" aria-label="The check icon" %} | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %} | |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

IdP가 암호화된 어설션을 지원하는 경우 인증 프로세스 중에 보안을 강화하기 위해 {% data variables.product.product_name %}에서 암호화된 어설션을 구성할 수 있습니다.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

다음 IdP는 {% data variables.product.prodname_ghe_managed %}와의 통합을 위해 공식적으로 지원됩니다.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## {% data variables.product.prodname_ghe_managed %} 팀을 OKTA 그룹에 매핑

OKTA를 IdP로 사용하는 경우 OKTA 그룹을 {% data variables.product.product_name %}의 팀에 매핑할 수 있습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.

{% endif %}

## 추가 참고 자료

- OASIS 웹 사이트의 [SAML Wiki](https://wiki.oasis-open.org/security)
- [도메인 간 ID 관리 시스템: IETF 웹 사이트의 프로토콜(RFC 7644)](https://tools.ietf.org/html/rfc7644) {%- ifversion ghae %}
- "[IP 허용 목록으로 네트워크 트래픽을 엔터프라이즈로 제한](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}
