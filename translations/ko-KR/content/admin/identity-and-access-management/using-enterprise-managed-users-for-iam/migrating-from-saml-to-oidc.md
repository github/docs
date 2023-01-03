---
title: SAML에서 OIDC로 마이그레이션
shortTitle: Migrating from SAML to OIDC
intro: 'SAML을 사용하여 {% data variables.enterprise.prodname_emu_enterprise %}의 멤버를 인증하는 경우 OIDC(OpenID Connect)로 마이그레이션하고 IdP의 조건부 액세스 정책에 대한 지원을 활용할 수 있습니다.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180047'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## {% data variables.enterprise.prodname_emu_enterprise %}을(를) SAML에서 OIDC로 마이그레이션하는 방법

{% data variables.enterprise.prodname_emu_enterprise %}이(가) SAML SSO를 사용하여 Azure Active Directory(Azure AD)로 인증하는 경우 OIDC로 마이그레이션할 수 있습니다. {% data reusables.enterprise-accounts.emu-cap-validates %}

SAML에서 OIDC로 마이그레이션하는 경우 {% data variables.enterprise.prodname_managed_users %} 및 이전에 SAML에 대해 프로비전되었지만 {% data variables.product.prodname_emu_idp_oidc_application %} 애플리케이션에서 프로비전되지 않은 그룹은 표시 이름에 "(SAML)"이 추가됩니다.

{% data variables.product.prodname_emus %}를 새로 사용하고 엔터프라이즈에 대한 인증을 아직 구성하지 않은 경우 마이그레이션할 필요가 없으며 OIDC Single Sign-On을 즉시 설정할 수 있습니다. 자세한 내용은 "[Enterprise Managed User에 대한 OIDC 구성](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"을 참조하세요.

## 엔터프라이즈 마이그레이션

{% note %}

**참고:** 설치 사용자로 로그인하려면 복구 코드가 필요합니다. 복구 코드가 아직 없는 경우 엔터프라이즈 소유자로 로그인되어 있는 동안 코드에 액세스할 수 있습니다. 자세한 내용은 "[엔터프라이즈 계정의 Single Sign-On 복구 코드 다운로드](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)"를 참조하세요.

{% endnote %}

1. 마이그레이션을 시작하기 전에 Azure에 로그인하고 기존 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에서 프로비전을 사용하지 않도록 설정합니다.
1. Azure AD에서 [CA(조건부 액세스) 네트워크 위치 정책](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition)을 사용하고 엔터프라이즈 계정에서 또는 {% data variables.product.prodname_dotcom_the_website %}에서 엔터프라이즈 계정이 소유한 조직에서 IP 허용 목록을 현재 사용 중인 경우 IP 허용 목록 기능을 사용하지 마세요. 자세한 내용은 “[엔터프라이즈에서 보안 설정 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)” 및 “[조직에 허용되는 IP 주소 관리](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)”를 참조하세요.
1.  사용자 이름 **@<em>SHORT-CODE</em>_admin** 을 사용하여 엔터프라이즈의 설치 사용자로 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다. 
1. ID 공급자로 진행하라는 메시지가 표시되면 **복구 코드 사용** 을 클릭하고 엔터프라이즈의 복구 코드 중 하나를 사용하여 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 페이지 아래쪽의 "OpenID Connect Single Sign-On으로 마이그레이션"옆에 있는 **Azure를 사용하여 구성** 을 클릭합니다.  
   {% warning %} 

   **경고:** 마이그레이션은 최대 1시간이 걸릴 수 있으며 마이그레이션 중에 프로비전된 사용자가 없는 것이 중요합니다. 엔터프라이즈의 보안 설정 페이지로 돌아가서 마이그레이션이 아직 진행 중인지 확인할 수 있습니다. "SAML 인증 필요"가 여전히 체크되어 있으면 마이그레이션이 계속 진행 중인 것입니다.

   {% endwarning %}

   !["Azure를 사용하여 구성" 단추를 보여 주는 스크린샷](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. 두 경고를 모두 읽고 클릭하여 계속합니다.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. 새 탭 또는 창에서 {% data variables.product.prodname_dotcom_the_website %}에서 설치 사용자로 로그인하는 동안 **admin:enterprise** 범위와 **만료 없이** {% data variables.product.pat_v1 %}을 만들고 클립보드에 복사합니다. 새 토큰을 만드는 방법에 대한 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).
1. Azure Portal의 {% data variables.product.prodname_emu_idp_oidc_application %} 애플리케이션에 대한 설정의 "테넌트 URL" 아래에 `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`을 입력하여 YOUR_ENTERPRISE를 엔터프라이즈 계정의 이름으로 바꿉니다.  
   
   예를 들어 엔터프라이즈 계정의 URL이 `https://github.com/enterprises/octo-corp`이면 엔터프라이즈 계정의 이름은 `octo-corp`입니다.
1. "비밀 토큰"에서 {% data variables.product.pat_v1 %}을 이전에 만든 **admin:enterprise** 범위에 붙여넣습니다.
1. 구성을 테스트하려면 **연결 테스트** 를 클릭합니다.
1. 변경 내용을 저장하려면 양식 맨 위에서 **저장** 을 클릭합니다.
1. Azure Portal에서 이전 {% data variables.product.prodname_emu_idp_application %} 애플리케이션의 사용자 및 그룹을 새 {% data variables.product.prodname_emu_idp_oidc_application %} 애플리케이션으로 복사합니다.
1. 새 사용자를 하나 프로비전하여 구성을 테스트합니다.
1. 테스트에 성공하면 **프로비전 시작** 을 클릭하여 모든 사용자에 대한 프로비전을 시작합니다.
