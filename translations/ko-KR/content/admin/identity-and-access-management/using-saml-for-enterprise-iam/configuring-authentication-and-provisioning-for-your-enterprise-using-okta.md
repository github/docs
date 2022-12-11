---
title: OKTA를 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성
shortTitle: Configure with Okta
intro: 'IdP(ID 공급자)로 Okta를 사용하여 {% data variables.location.product_location %}에 대한 인증 및 사용자 프로비저닝을 중앙에서 관리할 수 있습니다.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 62a1436fcedc4d90f767d0c612e70810132aff58
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192675'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Okta를 사용한 인증 및 사용자 프로비저닝 정보

Okta를 {% data variables.product.product_name %}에 대한 IdP(ID 공급자)로 사용할 수 있습니다. 그러면 Okta 사용자가 Okta 자격 증명을 사용하여 {% data variables.product.product_name %}에 로그인할 수 있습니다.

Okta를 {% data variables.product.product_name %}의 IdP로 사용하려면 Okta에 {% data variables.product.product_name %} 앱을 추가하고, {% data variables.product.product_name %}에서 Okta를 IdP로 구성하고, Okta 사용자 및 그룹에 대한 액세스를 프로비전할 수 있습니다.

{% data reusables.saml.idp-saml-and-scim-explanation %}
- "[Okta 그룹을 팀에 매핑](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)"

SCIM을 사용하도록 설정하면 Okta에서 {% data variables.product.product_name %} 애플리케이션을 할당하는 모든 사용자가 다음 프로비저닝 기능을 사용할 수 있습니다.

{% data reusables.scim.ghes-beta-note %}

{% data variables.product.product_name %} 애플리케이션에 할당한 모든 Okta 사용자가 다음 프로비저닝 기능을 사용할 수 있습니다.

| 기능 | 설명 |
| --- | --- |
| 새 사용자 푸시 | Okta에서 새 사용자를 만들면 사용자가 {% data variables.product.product_name %}에 추가됩니다. |
| 사용자 비활성화 푸시 | Okta에서 사용자를 비활성화하면 {% data variables.product.product_name %}에서 엔터프라이즈에서 사용자를 일시 중단합니다. |
| 프로필 업데이트 푸시 | Okta에서 사용자 프로필을 업데이트하면 {% data variables.product.product_name %}에서 엔터프라이즈의 사용자 멤버 자격에 대한 메타데이터가 업데이트됩니다. |
| 사용자 다시 활성화 | Okta에서 사용자를 다시 활성화하면 {% data variables.product.product_name %}에서 엔터프라이즈에서 사용자를 일시 중단하지 않습니다. |

{% data variables.location.product_location %}에서 엔터프라이즈의 ID 및 액세스 관리에 대한 자세한 내용은 "[엔터프라이즈의 ID 및 액세스 관리](/admin/authentication/managing-identity-and-access-for-your-enterprise)"를 참조하세요.

## 필수 구성 요소

- Okta를 사용하여 {% data variables.product.product_name %}에 대한 인증 및 사용자 프로비저닝을 구성하려면 Okta 계정 및 테넌트가 있어야 합니다.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Okta에서 {% data variables.product.product_name %} 애플리케이션 추가


{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {%- ifversion ghae %}
1. 검색 필드에 “GitHub AE”를 입력한 다음 결과에서 **GitHub AE** 를 클릭합니다.

  ![“검색 결과”](/assets/images/help/saml/okta-ae-search.png)
1. **추가** 를 클릭합니다.

  ![“GitHub AE 앱 추가”](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. "기본 URL"의 경우 {% data variables.product.product_name %}에 엔터프라이즈의 URL을 입력합니다.

  ![“기준 URL 구성”](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. **완료** 를 클릭합니다.
{%- elsif scim-for-ghes %}
1. 검색 필드에 "GitHub Enterprise Server"를 입력한 다음, 결과에서 **GitHub Enterprise Server** 를 클릭합니다.
1. **추가** 를 클릭합니다.
1. "기본 URL"의 경우 {% data variables.location.product_location %}의 URL을 입력합니다.
1. **완료** 를 클릭합니다.
{% endif %}

## {% data variables.product.product_name %}에 SAML SSO 사용

{% data variables.product.product_name %}에 대해 SSO(Single Sign-On)를 사용하도록 설정하려면 Okta에서 제공하는 로그온 URL, 발급자 URL 및 공용 인증서를 사용하도록 {% data variables.product.product_name %}을 구성해야 합니다. {% data variables.product.product_name %}에 대한 Okta 앱에서 이러한 세부 정보를 찾을 수 있습니다.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% ifversion ghae %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. “로그온 URL”, “발급자”, “퍼블릭 인증서” 세부 정보를 기록해 둡니다. 
1. 세부 정보를 사용하여 {% data variables.product.product_name %}에서 엔터프라이즈에 SAML SSO를 사용하도록 설정합니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.
{% elsif scim-for-ghes %} {% data reusables.saml.okta-sign-on-tab %}
1. 세부 정보를 사용하여 {% data variables.location.product_location %}에 SAML SSO를 사용하도록 설정합니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.
{%- endif %}

{% note %}

**참고:** {% data variables.product.product_name %}에서 SAML 구성을 테스트하려면 Okta 사용자 계정을 {% data variables.product.product_name %} 앱에 할당해야 합니다.

{% endnote %}

## API 통합 사용

Okta 앱은 SCIM 프로비저닝을 위해 {% data variables.product.product_name %}에 REST API를 사용합니다. {% data variables.product.product_name %}에 대한 {% data variables.product.pat_generic %}를 사용하여 Okta를 구성하여 API에 대한 액세스를 사용하도록 설정하고 테스트할 수 있습니다.

1. {% data variables.product.product_name %}에서 범위가 있는 {% data variables.product.pat_v1 %}을(를) 생성합니다 `admin:enterprise` . 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)"를 참조하세요.
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. **API 통합 구성** 을 클릭합니다.

1. **API 통합 사용** 을 선택합니다.

  ![API 통합 사용](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. "API 토큰"의 경우 이전에 생성한 {% data variables.product.product_name %} {% data variables.product.pat_generic %}를 입력합니다.

1. **테스트 API 자격 증명** 을 클릭합니다. 

{% note %}

**참고:** 이 표시 `Error authenticating: No results for users returned`되면 {% data variables.product.product_name %}에 대해 SSO를 사용하도록 설정했는지 확인합니다. 자세한 내용은 "[{% data variables.product.product_name %}에 SAML SSO 사용](#enabling-saml-sso-for-github-ae)"을 참조하세요.

{% endnote %}

## SCIM 프로비저닝 설정 구성

이 프로시저에서는 OKTA 프로비저닝에 대한 SCIM 설정을 구성하는 방법을 보여 줍니다. 이러한 설정은 Okta 사용자 계정을 {% data variables.product.product_name %}에 자동으로 프로비전할 때 사용할 기능을 정의합니다.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. “설정”에서 **앱으로** 를 클릭합니다.

  ![“앱으로” 설정](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. “앱에 프로비저닝”의 오른쪽에서 **편집** 을 클릭합니다.
1. “사용자 만들기” 오른쪽에서 **사용** 을 선택합니다.
1. “사용자 특성 업데이트” 오른쪽에서 **사용** 을 선택합니다.
1. “사용자 비활성화” 오른쪽에서 **사용** 을 선택합니다.
1. **저장** 을 클릭합니다.

## Okta 사용자 및 그룹이 {% data variables.product.product_name %}에 액세스할 수 있도록 허용

개별 OKTA 사용자 또는 전체 그룹에 대해 {% data variables.product.product_name %}에 대한 액세스를 프로비저닝할 수 있습니다.

### OKTA 사용자에 대한 액세스 프로비저닝

Okta 사용자가 자격 증명을 사용하여 {% data variables.product.product_name %}에 로그인하려면 먼저 {% data variables.product.product_name %}에 대한 Okta 앱에 사용자를 할당해야 합니다.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %}

1. **할당** 을 클릭합니다.

  ![할당 탭](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. 할당 드롭다운 메뉴를 선택하고 **사용자에게 할당** 을 클릭합니다.

  ![“사람에게 할당” 단추](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. 필요한 사용자 계정 오른쪽에서 **할당** 을 클릭합니다.

  ![사용자 목록](/assets/images/help/saml/okta-ae-assign-user.png)

1. “역할” 오른쪽에서 사용자의 역할을 클릭한 다음 **저장하고 돌아가기** 를 클릭합니다.

  ![역할 선택](/assets/images/help/saml/okta-ae-assign-role.png)

1. **완료** 를 클릭합니다.

{% ifversion ghae %}
### OKTA 그룹에 대한 액세스 프로비저닝

{% data variables.product.product_name %}의 팀에 Okta 그룹을 매핑할 수 있습니다. 그러면 Okta 그룹의 구성원이 매핑된 {% data variables.product.product_name %} 팀의 구성원이 됩니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
{% endif %}

## 추가 참고 자료

- OKTA 설명서의 [SAML 이해](https://developer.okta.com/docs/concepts/saml/)
- OKTA 설명서의 [SCIM 이해](https://developer.okta.com/docs/concepts/scim/)
