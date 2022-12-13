---
title: 엔터프라이즈에 대한 사용자 프로비저닝 구성
shortTitle: Configure user provisioning
intro: IDP(ID 공급자)의 사용자에게 {% 데이터 variables.location.product_location %}에 대한 애플리케이션을 할당할 때 {% 데이터 variables.location.product_location %}에 사용자 계정을 자동으로 프로비전하는 엔터프라이즈용 SCIM(도메인 간 ID 관리) 시스템을 구성할 수 있습니다.
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
versions:
  ghae: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
- SSO
redirect_from:
- /admin/authentication/configuring-user-provisioning-for-your-enterprise
- /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: a193150129cd0d8007e88a0c8f88767857f36284
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148099165"
---
## 엔터프라이즈에 대한 사용자 프로비저닝 정보

{% data reusables.saml.ae-uses-saml-sso %} 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

IdP에서 애플리케이션을 할당하거나 할당 취소할 때 사용자 계정을 자동으로 만들거나 일시 중단하고 {% data variables.product.product_name %}에 대한 액세스 권한을 부여하도록 SCIM을 사용하여 사용자 프로비저닝을 구성할 수 있습니다. SCIM에 관한 자세한 내용은 IETF 웹 사이트에서 [SCIM(System for Cross-domain Identity Management): 프로토콜(RFC 7644)](https://tools.ietf.org/html/rfc7644)을 참조하세요.

SCIM을 사용하여 사용자 프로비저닝을 구성하지 않으면 사용자에게 애플리케이션을 할당하거나 할당 취소할 때 IdP가 {% data variables.product.product_name %}와 자동으로 통신하지 않습니다. SCIM을 사용하지 않으면 {% data variables.product.product_name %}는 누군가가 처음으로 {% data variables.product.product_name %}로 이동하고 IdP를 통해 인증하여 로그인할 때 SAML JIT(Just-In-Time) 프로비저닝을 사용하여 사용자 계정을 만듭니다.

프로비저닝을 구성하면 IdP의 사용자에게 {% 데이터 variables.product.product_name %}에 대한 애플리케이션을 할당하거나 할당 해제할 때 IdP가 {% 데이터 variables.location.product_location %}과(와) 통신할 수 있습니다. 애플리케이션을 할당하면 IdP에서 {% 데이터 variables.location.product_location %}에게 계정을 만들고 사용자에게 온보딩 전자 메일을 보내라는 메시지를 표시합니다. 애플리케이션을 할당 취소하면 IdP는 {% data variables.product.product_name %}와 통신하여 SAML 세션을 무효화하고 멤버 계정을 사용하지 않도록 설정합니다.

엔터프라이즈에 대한 프로비저닝을 구성하려면 {% data variables.product.product_name %}에서 프로비저닝을 사용하도록 설정한 다음, IdP에서 프로비저닝 애플리케이션을 설치하고 구성해야 합니다.

IdP의 프로비전 애플리케이션은 엔터프라이즈에 대한 SCIM API를 통해 {% data variables.product.product_name %}와 통신합니다. 자세한 내용은 {% data variables.product.prodname_dotcom %} REST API 설명서의 “[GitHub Enterprise 관리](/rest/reference/enterprise-admin#scim)”를 참조하세요.

## 지원되는 ID 공급자

다음 IdP는 {% data variables.product.prodname_ghe_managed %}를 사용한 SSO에 대해 지원됩니다.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

팀 매핑을 지원하는 IdP의 경우 IdP의 사용자 그룹에 {% data variables.product.product_name %}에 대한 애플리케이션을 할당하거나 할당 취소할 수 있습니다. 이 그룹은 {% 데이터 variables.location.product_location %}의 조직 소유자 및 팀 유지 관리자가 {% 데이터 variables.product.product_name %} 팀에 매핑할 수 있습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.

## 필수 조건

IdP에서 {% 데이터 variables.location.product_location %}에 대한 액세스를 자동으로 프로비전 및 프로비전 해제하려면 먼저 {% 데이터 variables.product.product_name %}을(를) 초기화할 때 SAML SSO를 구성해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %} 초기화](/admin/configuration/initializing-github-ae)”를 참조하세요.

{% data variables.product.product_name %}에 대한 사용자 프로비저닝을 위해 애플리케이션을 구성하려면 IdP에 대한 관리 액세스 권한이 있어야 합니다.

## 엔터프라이즈에 대한 사용자 프로비저닝 사용

1. 엔터프라이즈 소유자로 {% 데이터 variables.location.product_location %}에 로그인한 상태에서 **admin:enterprise** 범위를 사용하여 {% 데이터 variables.product.pat_v1 %}을(를) 만듭니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.
  {% note %}

  **참고**:
    - {% 데이터 variables.product.pat_generic %}을(를) 만들려면 초기화 중에 만든 첫 번째 엔터프라이즈 소유자의 계정을 사용하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %} 초기화](/admin/configuration/initializing-github-ae)”를 참조하세요.
    - IdP에서 SCIM용 애플리케이션을 구성하려면 이 {% 데이터 variables.product.pat_generic %}이(가) 필요합니다. 이 지침의 뒷부분에서 토큰이 다시 필요할 때까지 토큰을 암호 관리자에 안전하게 저장합니다.

  {% endnote %} {% warning %}

  **경고**: {% 데이터 variables.product.pat_generic %}을(를) 만드는 엔터프라이즈 소유자의 사용자 계정이 비활성화되거나 프로비전 해제된 경우 IdP는 더 이상 엔터프라이즈에 대한 사용자 계정을 자동으로 프로비저닝 및 프로비저닝 해제하지 않습니다. 다른 엔터프라이즈 소유자는 새 {% 데이터 variables.product.pat_generic %}을(를) 만들고 IdP에서 프로비저닝을 다시 구성해야 합니다.

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. “SCIM 사용자 프로비저닝”에서 **SCIM 사용자 프로비저닝 필요** 를 선택합니다.
  ![엔터프라이즈 보안 설정에 있는 “SCIM 사용자 프로비저닝 필요” 확인란](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. **저장** 을 클릭합니다.
  ![엔터프라이즈 보안 설정에 있는 “SCIM 사용자 프로비저닝 필요” 아래 저장 단추](/assets/images/help/enterprises/settings-scim-save.png)
1. IdP에서 {% data variables.product.product_name %}에 대한 애플리케이션의 사용자 프로비저닝을 구성합니다.

  다음 IdP는 {% data variables.product.product_name %}에 대한 프로비저닝을 구성하는 방법에 관한 설명서를 제공합니다. IdP가 나열되지 않으면 IdP에 문의하여 {% data variables.product.product_name %}에 대한 지원을 요청하세요.

  | IdP | 추가 정보 |
  | :- | :- |
  | Azure AD | Microsoft Docs의 [자습서: 자동 사용자 프로비저닝을 위한 {% data variables.product.prodname_ghe_managed %} 구성](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial). {% data variables.product.prodname_ghe_managed %}에 대해 Azure AD를 구성하려면 “[Azure AD를 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)”을 참조하세요.|
| Okta | (베타) {% data variables.product.prodname_ghe_managed %}에 대해 OKTA를 구성하려면 “[OKTA를 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)”을 참조하세요.|

  IdP의 애플리케이션에는 {% 데이터 variables.location.product_location %}에서 사용자 계정을 프로비저닝하거나 프로비저닝 해제하는 데 두 개의 값이 필요합니다.

  | 값 | 기타 이름 | 설명 | 예제 |
  | :- | :- | :- | :- |
  | URL | 테넌트 URL | {% data variables.product.prodname_ghe_managed %}에서 엔터프라이즈에 대한 SCIM 프로비저닝 API의 URL | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | 공유 암호 | {% 데이터 variables.product.pat_generic_caps %}, 비밀 토큰 | 엔터프라이즈 소유자를 대신하여 프로비저닝 작업을 수행하기 위한 IdP의 애플리케이션 토큰 | 1단계에서 만든 {% 데이터 variables.product.pat_generic_caps %} |
