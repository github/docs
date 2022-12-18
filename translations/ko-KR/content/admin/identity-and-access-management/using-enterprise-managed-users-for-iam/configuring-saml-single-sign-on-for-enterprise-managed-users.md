---
title: Enterprise Managed Users에 대한 SAML Single Sign-On 구성
shortTitle: SAML for managed users
intro: 'SAML(Security Assertion Markup Language) SSO(Single Sign-On)를 구성하여 {% data variables.product.prodname_dotcom %}에서 엔터프라이즈 계정에 대한 액세스를 자동으로 관리할 수 있습니다.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: d83c6ea74ae6a27fc5f91ebdc5dcae83e0c22eb2
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180055'
---
## {% data variables.product.prodname_emus %}에 대한 SAML Single Sign-On 정보

{% data variables.product.prodname_emus %}를 사용하면 엔터프라이즈에서 회사 ID 공급자를 사용하여 모든 멤버를 인증합니다. {% data variables.product.prodname_dotcom %}에 {% data variables.product.prodname_dotcom %} 사용자 이름과 암호로 로그인하는 대신 엔터프라이즈 멤버는 IdP를 통해 로그인합니다.

{% data variables.product.prodname_emus %}에서 지원하는 IdP는 다음과 같습니다.

{% data reusables.enterprise-accounts.emu-supported-idps %}

SAML SSO를 구성한 후에는 ID 공급자를 사용할 수 없는 경우 엔터프라이즈에 대한 액세스 권한을 복구할 수 있도록 복구 코드를 저장하는 것이 좋습니다.


{% data reusables.enterprise_user_management. SAML-OIDC-migration-for-EMU %}

{% note %}

**참고:** SAML SSO를 사용하는 경우 기존 SAML 구성에 대한 {% data variables.product.prodname_dotcom %}에서 업데이트할 수 있는 유일한 설정은 SAML 인증서입니다. 로그온 URL 또는 발급자를 업데이트해야 하는 경우 먼저 SAML SSO를 사용하지 않도록 설정한 다음, 새 설정으로 SAML SSO를 다시 구성해야 합니다.

{% endnote %}

## {% data variables.product.prodname_emus %}에 대한 SAML Single Sign-On 구성

{% data variables.enterprise.prodname_emu_enterprise %}에 대해 SAML SSO를 구성하려면 IdP에서 애플리케이션을 구성한 다음, GitHub.com 엔터프라이즈를 구성해야 합니다. SAML SSO를 구성한 후 사용자 프로비저닝을 구성할 수 있습니다. 

IdP에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션을 설치하고 구성하려면 지원되는 IdP에 대한 테넌트 및 관리 액세스 권한이 있어야 합니다.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [ID 공급자 구성](#configuring-your-identity-provider)
2. [엔터프라이즈 구성](#configuring-your-enterprise)
3. [프로비전을 사용하도록 설정](#enabling-provisioning)

### ID 공급자 구성

IdP를 구성하려면 IdP에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션을 구성하기 위해 제공하는 지침을 따릅니다.

1. {% data variables.product.prodname_emu_idp_application %} 애플리케이션을 설치하려면 아래 IdP의 링크를 클릭합니다.

     - [Azure Active Directory의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [OKTA의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션](https://www.okta.com/integrations/github-enterprise-managed-user)

1. {% data variables.product.prodname_emu_idp_application %} 애플리케이션 및 IdP를 구성하려면 아래 링크를 클릭하고 IdP에서 제공하는 지침을 따릅니다.

     - [{% data variables.product.prodname_emus %}에 대한 Azure Active Directory 자습서](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [{% data variables.product.prodname_emus %}에 대한 OKTA 설명서](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. 따라서 엔터프라이즈를 테스트 및 구성하고, {% data variables.product.prodname_dotcom %}에서 SAML SSO를 구성할 사용자 또는 자신을 IdP의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 할당할 수 있습니다.

1. {% data variables.product.prodname_dotcom %}에서 엔터프라이즈를 계속 구성할 수 있도록 하려면 IdP에 설치한 애플리케이션에서 다음 정보를 찾고 기록해 둡니다.

    | 값 | 기타 이름 | 설명 |
    | :- | :- | :- |
    | IdP 로그온 URL | 로그인 URL, IdP URL | IdP의 애플리케이션 URL |
    | IdP 식별자 URL | 발급자 | SAML 인증을 위한 서비스 공급자에 대한 IdP 식별자 |
    | 서명 인증서, Base64 인코딩 | 공용 인증서 | IdP가 인증 요청에 서명하는 데 사용하는 퍼블릭 인증서 |

### 엔터프라이즈 구성

ID 공급자에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션을 설치하고 구성한 후 엔터프라이즈를 구성할 수 있습니다. 

1. 사용자 이름 **@<em>SHORT-CODE</em>_admin** 을 사용하여 새 엔터프라이즈의 설치 사용자로 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. “SAML Single Sign-On”에서 **SAML 인증 필요** 를 선택합니다.
  ![SAML SSO를 사용하도록 설정하기 위한 확인란](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. **로그온 URL** 에서 IdP를 구성하는 동안 기록해 둔 Single Sign-On 요청에 대한 IdP의 HTTPS 엔드포인트를 입력합니다.
![멤버가 로그인할 때 전달될 URL의 필드](/assets/images/help/saml/saml_sign_on_url_business.png)

1. **발급자** 에서 IdP를 구성하는 동안 기록해 둔 SAML 발급자 URL을 입력하여 보낸 메시지의 신뢰성을 확인합니다.
![SAML 발급자 이름 필드](/assets/images/help/saml/saml_issuer.png)

1. **퍼블릭 인증서** 에서 IdP를 구성하는 동안 기록해 둔 인증서를 붙여넣어 SAML 응답을 확인합니다.
![ID 공급자의 퍼블릭 인증서 필드](/assets/images/help/saml/saml_public_certificate.png)

1. SAML 발급자의 요청 무결성을 확인하려면 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다. 그런 다음, “서명 방법” 및 “다이제스트 방법” 드롭다운에서 SAML 발급자가 사용하는 해시 알고리즘을 선택합니다.
![SAML 발급자가 사용하는 서명 방법 및 다이제스트 방법 해시 알고리즘에 대한 드롭다운](/assets/images/help/saml/saml_hashing_method.png)

1. 엔터프라이즈에 SAML SSO를 사용하도록 설정하기 전에 입력한 정보가 올바른지 확인하려면 **SAML 구성 테스트** 를 클릭합니다. ![적용하기 전에 SAML 구성을 테스트하는 단추](/assets/images/help/saml/saml_test.png)

1. **저장** 을 클릭합니다.

    {% note %}

    **참고:** 엔터프라이즈에 대한 SAML SSO가 필요한 경우 설치 사용자는 더 이상 엔터프라이즈에 액세스할 수 없지만 GitHub에 로그인한 상태로 유지됩니다. IdP에서 프로비전된 {% data variables.enterprise.prodname_managed_users %}만 엔터프라이즈에 액세스할 수 있습니다.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### 프로비전을 사용하도록 설정

SAML SSO를 사용하도록 설정한 후 프로비저닝을 사용하도록 설정합니다. 자세한 내용은 “[Enterprise Managed Users에 대한 SCIM 프로비저닝 구성](//admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)”을 참조하세요.

