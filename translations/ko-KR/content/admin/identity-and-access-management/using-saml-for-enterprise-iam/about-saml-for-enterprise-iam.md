---
title: 엔터프라이즈 IAM에 대한 SAML 정보
shortTitle: About SAML for IAM
intro: 'SAML SSO(Single Sign-On) {% ifversion ghae %}와 SCIM(System for Cross-domain Identity Management) {% endif %}을 사용하여 조직 소유의 액세스 {% ifversion ghec %}에 대한 액세스를 중앙에서 관리할 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}에서 {% data variables.location.product_location %}{% elsif ghae %}에서 {% data variables.location.product_location %}{% endif %}로 엔터프라이즈에 의해 전송됩니다.'
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
ms.openlocfilehash: ea9db1269f389bdc126c8693ffeeb4b11dc42f99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192691'
---
## {% ifversion ghec or ghae %}{% endif %}{% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}에 대한 SAML SSO 정보

{% ifversion ghec %}

엔터프라이즈 구성원이 {% data variables.location.product_location %}에서 자신의 사용자 계정을 관리하는 경우 엔터프라이즈 또는 조직에 대한 추가 액세스 제한으로 SAML 인증을 구성할 수 있습니다. {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

또는 {% data variables.product.prodname_emus %}를 사용하여 엔터프라이즈 구성원의 계정을 프로비전하고 관리할 수 있습니다. 엔터프라이즈에 SAML SSO 또는 {% data variables.product.prodname_emus %} 중 무엇이 더 적합한지 판단하려면 "[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)"를 참조하세요.

{% data reusables.enterprise-accounts.about-recovery-codes %} 자세한 내용은 “[엔터프라이즈에 대한 복구 코드 관리](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)를 참조하세요.

SAML SSO를 사용하도록 설정한 후 사용하는 IdP에 따라 추가 ID 및 액세스 관리 기능을 사용하도록 설정할 수 있습니다. 

Azure AD를 IdP로 사용하는 경우 팀 동기화를 사용하여 각 조직 내에서 팀 멤버 자격을 관리할 수 있습니다. {% data reusables.identity-and-permissions.about-team-sync %}

{% note %}

**참고:** {% data variables.product.prodname_emus %}을(를) 사용하도록 계정을 만들지 않으면 엔터프라이즈 계정에 대해 SCIM을 구성할 수 없습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)”를 참조하세요.

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} 자세한 내용은 “[조직에서 엔터프라이즈 계정으로 SAML 구성 전환](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”을 참조하세요.

{% elsif ghes %}

SAML SSO를 사용하면 ID 관리를 위해 외부 시스템을 통해 {% data variables.location.product_location %}을(를) 인증하고 액세스할 수 있습니다.

SAML은 인증 및 권한 부여를 위한 XML 기반 표준입니다. {% data variables.location.product_location %}에 대해 SAML을 구성하면 인증을 위한 외부 시스템을 IdP(ID 공급자)라고 합니다. 인스턴스는 SAML SP(서비스 공급자) 역할을 합니다. SAML 표준에 관한 자세한 내용은 Wikipedia의 [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)를 참조하세요.

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

IdP(ID 공급자)에서 {% data variables.product.product_name %}에 대한 애플리케이션을 구성한 후 IdP의 애플리케이션에 사용자 및 그룹을 할당하여 {% data variables.location.product_location %}에 대한 액세스를 프로비전할 수 있습니다. {% data variables.product.product_name %}에 대한 SAML SSO의 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

{% endif %}

{% ifversion ghes < 3.6 %}

애플리케이션을 할당하거나 할당을 취소할 때 IdP는 {% data variables.product.product_name %}과 자동으로 통신하지 않습니다. {% data variables.product.product_name %}는 누군가가 {% data variables.product.product_name %}로 처음 이동하고 IdP를 통해 인증하여 로그인할 때 SAML JIT(Just-In-Time)를 사용하여 사용자 계정을 만듭니다. {% data variables.product.product_name %}에 대한 액세스 권한을 부여할 때 사용자에게 수동으로 알려야 할 수 있습니다.

{% endif %}

{% ifversion ghes %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% endif %}

{% data variables.product.product_name %}에서 SAML SSO 구성에 대한 자세한 내용은 "[엔터프라이즈에 대한 SAML Single Sign-On 구성"을 참조하세요](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise). {% ifversion ghec or ghae or scim-for-ghes %} 특정 IdP를 사용하여 {% data variables.location.product_location %}에 대한 인증 및 {% ifversion ghae or ghes %}사용자 {% endif %}프로비저닝을 구성하는 방법을 알아보려면 "[엔터프라이즈 IAM에 SAML 사용](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"의 개별 IdP 문서를 참조하세요. {% endif %}

{% ifversion ghae 또는 scim-for-ghes %}

## 사용자 계정 만들기 정보

{% data reusables.scim.after-you-configure-saml %} 자세한 내용은 “[엔터프라이즈에 대한 사용자 프로비저닝 구성](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”을 참조하세요.

{% data reusables.saml.saml-ghes-account-revocation %}

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

- OASIS 웹 사이트의 [SAML Wiki](https://wiki.oasis-open.org/security) {%- ifversion ghae 또는 scim-for-ghes %}
- [도메인 간 ID 관리 시스템: IETF 웹 사이트의 프로토콜(RFC 7644)](https://tools.ietf.org/html/rfc7644) {%- endif %} {%- ifversion ghae %}
- "[IP 허용 목록을 사용하여 엔터프라이즈로 네트워크 트래픽 제한](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}
