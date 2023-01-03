---
title: 엔터프라이즈용 SCIM을 사용하여 사용자 프로비저닝 구성
shortTitle: Configure SCIM user provisioning
intro: '{% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}에 대해 SCIM(도메인 간 ID 관리)을 구성할 수 있습니다. {% ifversion scim-for-ghes %}인스턴스{% elsif ghae %}{% data variables.product.product_name %}{% endif %}에 대한 애플리케이션을 ID 공급자(IdP)의 사용자에게 할당할 때 사용자 계정을 자동으로 프로비전합니다.'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
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
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: ded93a01d14d1a5e26cdf35efed4f13afc832ca1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192667'
---
{% data reusables.scim.ghes-beta-note %}

## {% data variables.product.product_name %}에 대한 사용자 프로비저닝 정보

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

{% endif %}

{% ifversion scim-for-ghes %} {% data variables.location.product_location %}에 SAML SSO(Single Sign-On)를 사용하는 경우 {% elsif ghae %}사용자 계정을 자동으로 만들거나 일시 중단하고{ % ifversion scim-for-ghes %}에 대한 액세스 권한을 인스턴스에 부여하도록 SCIM을 구성할 수 있습니다{% data variables.product.product_name %}{% endif %}에 대한 액세스 권한을 IdP에 할당하거나 할당 취소할 때{% elsif ghae %} SCIM에 관한 자세한 내용은 IETF 웹 사이트에서 [SCIM(System for Cross-domain Identity Management): 프로토콜(RFC 7644)](https://tools.ietf.org/html/rfc7644)을 참조하세요.

SCIM을 사용하여 사용자 프로비저닝을 구성하지 않으면 사용자에게 애플리케이션을 할당하거나 할당 취소할 때 IdP가 {% data variables.product.product_name %}와 자동으로 통신하지 않습니다. SCIM을 사용하지 않으면 {% data variables.product.product_name %}는 누군가가 처음으로 {% data variables.product.product_name %}로 이동하고 IdP를 통해 인증하여 로그인할 때 SAML JIT(Just-In-Time) 프로비저닝을 사용하여 사용자 계정을 만듭니다.

프로비저닝을 구성하면 IdP의 사용자에게 {% data variables.product.product_name %}에 대한 애플리케이션을 할당하거나 할당 취소할 때 IdP가 {% data variables.location.product_location %}와 통신할 수 있습니다. 애플리케이션을 할당하면 IdP에서 {% data variables.location.product_location %}에게 계정을 만들고 사용자에게 온보딩 전자 메일을 보내라는 메시지를 표시합니다. 애플리케이션을 할당 취소하면 IdP는 {% data variables.product.product_name %}와 통신하여 SAML 세션을 무효화하고 멤버 계정을 사용하지 않도록 설정합니다.

엔터프라이즈에 대한 프로비저닝을 구성하려면 {% data variables.product.product_name %}에서 프로비저닝을 사용하도록 설정한 다음, IdP에서 프로비저닝 애플리케이션을 설치하고 구성해야 합니다.

{% ifversion scim-for-ghes %}

IdP의 프로비저닝 애플리케이션은 SCIM API를 사용하여 {% data variables.product.product_name %}와 통신합니다. 자세한 내용은 REST API 설명서의 "[SCIM](/rest/enterprise-admin/scim)"을 참조하세요.

{% endif %}

## ID 및 클레임 정보

IdP 관리자가 사용자에게 {% data variables.location.product_location %}에 대한 액세스 권한을 부여한 후 사용자는 IDP를 통해 인증하여 SAML SSO를 사용하여 {% data variables.product.product_name %}에 액세스할 수 있습니다.

인증하는 동안 {% ifversion scim-for-ghes %}인스턴스{% elsif ghae %}{% data variables.product.product_name %}{% endif %}는 사용자를 SAML ID와 연결하려고 시도합니다. 기본적으로 {% ifversion scim-for-ghes %}인스턴스{% elsif ghae %}{% data variables.product.product_name %}{% endif %}는 IdP의 클레임을 계정의 사용자 이름과 비교합니다 `NameID` . {% data variables.product.product_name %}은(는) 비교의 값을 `NameID` 정규화합니다. 사용자 이름 정규화에 대한 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항"을 참조하세요](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization).

인스턴스에 일치하는 사용자 이름을 가진 기존 계정이 없으면 사용자가 로그인하지 못합니다.{% ifversion scim-for-ghes %} 이 일치를 위해 {% data variables.product.product_name %}는 IdP `username` 의 SAML `NameId` 클레임을 인스턴스에서 SCIM이 프로비전한 각 사용자 계정에 대한 클레임과 비교합니다.{ % endif %}

{% ifversion scim-for-ghes %}

{% note %}

**참고**: SAML 인증 중에 일부 환경에서는 고유 식별 클레임 이외의 값을 `NameID` 사용할 수 있습니다. 현재 SCIM 프로비저닝을 사용하는 경우 SAML 사용자 특성에 대한 사용자 지정 매핑은 지원되지 않습니다.

{% endnote %}

{% endif %}

{% data variables.product.product_name %}이(가) IdP에서 사용자를 성공적으로 식별했지만 이메일 주소, 이름 또는 성 등의 계정 세부 정보가 일치하지 않으면 인스턴스는 IdP의 값으로 세부 정보를 덮어씁니다. SCIM에서 프로비전된 기본 이메일 이외의 전자 메일 주소도 사용자 계정에서 삭제됩니다.

## 지원되는 ID 공급자

{% ifversion ghes %}

프라이빗 베타 중에 계정 팀은 지원되는 IdP에서 {% data variables.product.product_name %}에 대한 SCIM 구성에 대한 설명서를 제공합니다.

{% elsif ghae %}

다음 IdP는 {% data variables.product.product_name %}에 대한 SCIM을 사용하여 사용자 프로비저닝을 지원합니다.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

팀 매핑을 지원하는 IdP의 경우 IdP의 사용자 그룹에 {% data variables.product.product_name %}에 대한 애플리케이션을 할당하거나 할당 취소할 수 있습니다. 그러면 {% data variables.location.product_location %}의 조직 소유자 및 팀 유지 관리자가 이러한 그룹을 사용하여 {% data variables.product.product_name %} 팀에 매핑할 수 있습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.

{% endif %}

## 필수 조건

{% ifversion ghae %}

- {% data variables.product.product_name %}을(를) 초기화할 때 SAML SSO를 구성해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %} 초기화](/admin/configuration/initializing-github-ae)”를 참조하세요.

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- IdP에 계정이 없는 사용자에 대해 기본 제공 인증을 허용해야 합니다. 자세한 내용은 “[공급자 외부 사용자에게 기본 제공 인증 허용](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)”을 참조하세요.

- IdP는 SP(서비스 공급자)에 대한 SCIM 호출을 지원해야 합니다.

{% endif %}

- {% data variables.product.product_name %}에 대한 사용자 프로비저닝을 위해 애플리케이션을 구성하려면 IdP에 대한 관리 액세스 권한이 있어야 합니다.

## 엔터프라이즈에 대한 사용자 프로비저닝 사용

{% ifversion scim-for-ghes %}

인스턴스에서 프로비저닝 작업을 수행하려면 기본 제공 사용자 계정을 만들고 엔터프라이즈 소유자에게 계정을 승격합니다.

{% data variables.product.product_name %} 인스턴스에서 SCIM을 사용하도록 설정하면 모든 사용자 계정이 일시 중단됩니다. 기본 제공 사용자 계정은 프로비저닝 작업을 계속 수행합니다. IdP에서 인스턴스에 대한 사용자 액세스 권한을 부여한 후 IdP는 SCIM을 사용하여 인스턴스와 통신하여 사용자 계정을 일시 중단하지 않습니다.

{% endif %}

{%- ifversion ghae %}
1. 엔터프라이즈 소유자로 {% data variables.location.product_location %}에 로그인한 동안 **admin:enterprise** 범위를 사용하여 {% data variables.product.pat_v1 %}을(를) 만듭니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.
  {% note %}

  **참고**:
    - {% data variables.product.pat_generic %}을(를) 만들려면 초기화 중에 만든 첫 번째 엔터프라이즈 소유자에 대한 계정을 사용하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %} 초기화](/admin/configuration/initializing-github-ae)”를 참조하세요.
    - IdP에서 SCIM에 대한 애플리케이션을 구성하려면 이 {% data variables.product.pat_generic %}이 필요합니다. 이 지침의 뒷부분에서 토큰이 다시 필요할 때까지 토큰을 암호 관리자에 안전하게 저장합니다.

  {% endnote %} {% warning %}

  **경고**: {% data variables.product.pat_generic %}을(를) 만드는 엔터프라이즈 소유자의 사용자 계정이 비활성화되거나 프로비전 해제된 경우 IdP는 더 이상 엔터프라이즈에 대한 사용자 계정을 자동으로 프로비저닝 및 프로비저닝 해제하지 않습니다. 다른 엔터프라이즈 소유자는 새 {% data variables.product.pat_generic %}을(를) 만들고 IdP에서 프로비저닝을 다시 구성해야 합니다.

  {% endwarning %} {%- elsif scim-for-ghes %}
1. 기본 제공 사용자 계정을 만들어 인스턴스에서 프로비저닝 작업을 수행합니다. 자세한 내용은 “[공급자 외부 사용자에게 기본 제공 인증 허용](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)”을 참조하세요.
1. 엔터프라이즈 소유자에게 전용 사용자 계정을 승격합니다. 자세한 내용은 “[엔터프라이즈를 관리할 사용자 초대](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account)”를 참조하세요.
1. 인스턴스에 새 엔터프라이즈 소유자로 로그인합니다.
1. **admin:enterprise** 범위를 사용하여 {% data variables.product.pat_v1 %}을(를) 만듭니다. {% data variables.product.pat_v1 %}의 만료 날짜를 지정하지 마세요. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

   {% warning %}
   
   **경고**: {% data variables.product.pat_v1 %}의 만료 날짜를 지정하지 않도록 합니다. 만료 날짜를 지정하면 만료 날짜가 지나면 SCIM이 더 이상 작동하지 않습니다.
   
   {% endwarning %} {% note %}

   **참고**: SCIM 구성을 테스트하고 IdP에서 SCIM용 애플리케이션을 구성하려면 이 {% data variables.product.pat_generic %}이 필요합니다. 이 지침의 뒷부분에서 토큰이 다시 필요할 때까지 토큰을 암호 관리자에 안전하게 저장합니다.

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. SCIM을 사용하도록 설정하려면 {% data variables.contact.contact_enterprise_sales %}에서 계정 관리자가 제공한 명령을 실행합니다.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. SCIM이 작동하고 있는지 확인하려면 다음 명령을 실행합니다. _PAT FROM STEP 3_ 및 _YOUR INSTANCE의 HOSTNAME_ 을 실제 값으로 대체합니다.

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   명령은 빈 배열을 반환해야 합니다.
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. “SCIM 사용자 프로비저닝”에서 **SCIM 사용자 프로비저닝 필요** 를 선택합니다.
  ![엔터프라이즈 보안 설정에 있는 “SCIM 사용자 프로비저닝 필요” 확인란](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. **저장** 을 클릭합니다.
  ![엔터프라이즈 보안 설정](/assets/images/help/enterprises/settings-scim-save.png) {%- endif %} 내의 "SCIM 사용자 프로비저닝 필요" 아래의 저장 단추
1. IdP의 {% data variables.product.product_name %}에 대한 애플리케이션에서 사용자 프로비저닝을 구성합니다. {% ifversion scim-for-ghes %} 지원되는 IdP에 대한 설명서를 요청하려면 {% data variables.contact.contact_enterprise_sales %}에서 계정 관리자에게 문의하세요. IdP가 지원되지 않는 경우 애플리케이션을 만들고 SCIM을 수동으로 구성해야 합니다. {% elsif ghae %}

  다음 IdP는 {% data variables.product.product_name %}에 대한 프로비저닝을 구성하는 방법에 관한 설명서를 제공합니다. IdP가 나열되지 않으면 IdP에 문의하여 {% data variables.product.product_name %}에 대한 지원을 요청하세요.

  | IdP | 추가 정보 |
  | :- | :- |
  | Azure AD | [자습서: Microsoft Docs 자동 사용자 프로비저닝을 위해 {% data variables.product.prodname_ghe_managed %}을 구성](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial)합니다. {% data variables.product.product_name %}에 대한 Azure AD 구성하려면 "[Azure AD 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성"을 참조하세요](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad). |
  | Okta | (베타) {% data variables.product.product_name %}에 대해 Okta를 구성하려면 "[Okta를 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성"을 참조하세요](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta). |

  IdP의 애플리케이션에는 {% data variables.location.product_location %}에서 사용자 계정을 프로비전하거나 프로비전 해제하는 두 가지 값이 필요합니다.

  | 값 | 기타 이름 | 설명 | 예제 |
  | :- | :- | :- | :- |
  | URL | 테넌트 URL | {% data variables.product.product_name %}에서 엔터프라이즈용 SCIM 프로비저닝 API에 대한 URL | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | 공유 암호 | {% data variables.product.pat_generic_caps %}, 비밀 토큰 | 엔터프라이즈 소유자를 대신하여 프로비저닝 작업을 수행하기 위한 IdP의 애플리케이션 토큰 | 1단계에서 만든 {% 데이터 variables.product.pat_generic_caps %} |
  {%- endif %}
