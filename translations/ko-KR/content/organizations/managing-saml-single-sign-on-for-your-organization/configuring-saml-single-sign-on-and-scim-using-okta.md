---
title: OKTA를 사용하여 SAML Single Sign-On 및 SCIM 구성
intro: 'OKTA와 함께 SAML(Security Assertion Markup Language) SSO(Single Sign-On) 및 SCIM(System for Cross-domain Identity Management)을 사용하여 {% data variables.location.product_location %}에서 조직에 대한 액세스를 자동으로 관리할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
ms.openlocfilehash: c1b6ab48122c97cb1f805399430cc181ed3f30d1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192739'
---
## OKTA를 사용하는 SAML 및 SCIM 정보

IDP(ID 공급자)인 Okta와 함께 SAML SSO 및 SCIM을 사용하도록 조직을 구성하여 {% data variables.location.product_location %} 및 하나의 중앙 인터페이스에서 다른 웹 애플리케이션에서 조직에 대한 액세스를 제어할 수 있습니다.

{% data reusables.saml.ghec-only %}

SAML SSO는 리포지토리, 문제 및 끌어오기 요청과 같은 조직 리소스에 대한 액세스를 제어하고 보호합니다. SCIM은 Okta를 변경할 때 {% data variables.location.product_location %}에서 조직에 대한 구성원의 액세스를 자동으로 추가, 관리 및 제거합니다. 자세한 내용은 "[SAML Single Sign-On을 사용한 ID 및 액세스 관리 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" 및 "[조직용 SCIM 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)"를 참조하세요.

SCIM을 사용하도록 설정한 후에는 OKTA에서 {% data variables.product.prodname_ghe_cloud %} 애플리케이션을 할당하는 모든 사용자가 다음 프로비전 기능을 사용할 수 있습니다.

| 기능 | 설명 |
| --- | --- |
| 새 사용자 푸시 | Okta에서 새 사용자를 만들면 {% data variables.location.product_location %}에서 조직에 가입하는 이메일을 받게 됩니다. |
| 사용자 비활성화 푸시 | Okta에서 사용자를 비활성화하면 Okta는 {% data variables.location.product_location %}에서 조직에서 사용자를 제거합니다. |
| 프로필 업데이트 푸시 | Okta에서 사용자 프로필을 업데이트하면 Okta는 {% data variables.location.product_location %}에서 조직의 사용자 멤버 자격에 대한 메타데이터를 업데이트합니다. |
| 사용자 다시 활성화 | Okta에서 사용자를 다시 활성화하면 Okta는 사용자가 {% data variables.location.product_location %}에서 조직에 다시 가입하도록 전자 메일 초대를 보냅니다. |

또는 OKTA를 사용하여 엔터프라이즈용 SAML SSO를 구성할 수 있습니다. 엔터프라이즈 계정용 SCIM은 Enterprise Managed User에만 사용할 수 있습니다. 자세한 내용은 "[OKTA를 사용하여 엔터프라이즈용 SAML Single Sign-On 구성](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" 및 "[OKTA를 통한 Enterprise Managed User에 대한 SCIM 프로비전 구성](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)"을 참조하세요.

## Okta에서 SAML 구성

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {% data reusables.saml.okta-add-ghec-org-integration %}
1. 양식을 작성하여 {% data variables.product.prodname_dotcom %}에 조직의 이름과 OAuth 앱 통합 애플리케이션의 고유한 이름을 제공합니다.
{% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. "SAML 2.0 구성 방법" 가이드의 로그온 URL, 발급자 URL 및 공용 인증서를 사용하여 {% data variables.product.prodname_dotcom %}에서 SAML SSO를 사용하도록 설정하고 테스트합니다. 자세한 내용은 "[조직에서 SAML SSO를 사용하도록 설정하고 테스트](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)"를 참조하세요.

## OKTA에서 SCIM을 사용하는 액세스 프로비전 구성

{% data reusables.scim.dedicated-configuration-account %}

1. 조직 소유자이고 이상적으로는 SCIM 구성에만 사용되는 계정을 사용하여 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
1. 조직에 대한 활성 SAML 세션을 만들려면 `https://github.com/orgs/ORGANIZATION-NAME/sso`로 이동합니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”를 참조하세요.
1. OKTA로 이동합니다.
{% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.okta-applications-click-ghec-application-label %} {% data reusables.saml.okta-provisioning-tab %} {% data reusables.saml.okta-configure-api-integration %} {% data reusables.saml.okta-enable-api-integration %}
1. **{% data variables.product.prodname_ghe_cloud %} - 조직을 사용하여 인증** 을 클릭합니다.
1. 조직 이름의 오른쪽에서 **권한 부여** 를 클릭합니다.

  ![OKTA SCIM 통합에 조직 액세스 권한을 부여하기 위한 "권한 부여" 단추](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)
1. **OktaOAN 권한 부여** 를 클릭합니다.
{% data reusables.saml.okta-save-provisioning %} {% data reusables.saml.okta-edit-provisioning %}

## 추가 참고 자료

- "[OKTA를 사용하여 엔터프라이즈 계정용 SAML Single Sign-On 구성](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)"
- OKTA 설명서의 [SAML 이해](https://developer.okta.com/docs/concepts/saml/)
- OKTA 설명서의 [SCIM 이해](https://developer.okta.com/docs/concepts/scim/)
