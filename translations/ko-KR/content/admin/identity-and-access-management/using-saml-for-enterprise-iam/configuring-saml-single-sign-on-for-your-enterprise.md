---
title: 엔터프라이즈에 대한 SAML Single Sign-On 구성
shortTitle: Configure SAML SSO
intro: '리포지토리, 문제 등의 {% ifversion ghec %}리소스에 대한 액세스를 제어하고 보호할 수 있습니다. 및 엔터프라이즈 조직 내 끌어오기 요청{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.prodname_ghe_managed %}{% endif %} by {% ifversion ghec %}ID 공급자(IdP)를 통해 {% elsif ghes or ghae %}구성{% endif %} SAML SSO(Single Sign-On)를 적용합니다.'
permissions: '{% ifversion ghes %}Site administrators{% elsif ghec or ghae %}Enterprise owners{% endif %} can configure SAML SSO for {% ifversion ghec or ghae %}an enterprise on {% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
ms.openlocfilehash: 804ba3b262aae15b862e1a14694b82339c8d34a4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183958'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## SAML SSO 정보

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

자세한 내용은 “[SAML Single Sign-On을 사용한 ID 및 액세스 관리 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”를 참조하세요.

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} 자세한 내용은 "[엔터프라이즈 계정에 대한 사용자의 SAML 액세스 보기 및 관리](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)"를 참조하세요.

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

{% elsif ghes or ghae %}

SAML SSO를 사용하면 SAML IdP에서 {% data variables.location.product_location %}에 대한 액세스를 중앙에서 제어하고 보호할 수 있습니다. 인증되지 않은 사용자가 브라우저에서 {% data variables.location.product_location %}를 방문하면 {% data variables.product.product_name %}는 사용자를 SAML IdP로 리디렉션하여 인증합니다. 사용자가 IdP의 계정으로 성공적으로 인증되면 IdP는 사용자를 {% data variables.location.product_location %}로 다시 리디렉션합니다. {% data variables.product.product_name %}는 IdP에서 응답의 유효성을 검사한 다음, 사용자에게 액세스 권한을 부여합니다.

사용자가 IdP에서 성공적으로 인증되면 {% data variables.location.product_location %}에 대한 사용자의 SAML 세션이 브라우저에서 24시간 동안 활성화됩니다. 24시간이 지나면 사용자는 IdP에서 다시 인증을 받아야 합니다.

{% data reusables.saml.saml-ghes-account-revocation %}

{% ifversion ghae %}

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} 자세한 내용은 “[엔터프라이즈에 대한 사용자 프로비저닝 구성](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”을 참조하세요.

{% endif %}

{% endif %}

## 지원되는 ID 공급자

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## SAML을 사용하는 사용자 이름 고려 사항

{% ifversion ghec %} {% data variables.product.prodname_emus %}를 사용하는 경우 {% endif %}{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)"을 참조하세요.

## 엔터프라이즈 계정의 조직에서 SAML Single Sign-On 적용

엔터프라이즈에 SAML SSO를 적용하면 엔터프라이즈 구성이 기존 조직 수준 SAML 구성을 재정의합니다. {% data reusables.saml.switching-from-org-to-enterprise %} 자세한 내용은 “[조직에서 엔터프라이즈 계정으로 SAML 구성 전환](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”을 참조하세요.

조직에 SAML SSO를 적용하면 {% data variables.product.company_short %}는 SAML IdP에서 성공적으로 인증되지 않은 조직의 멤버를 제거합니다. 엔터프라이즈에 SAML SSO가 필요한 경우 {% data variables.product.company_short %}는 SAML IdP에서 성공적으로 인증되지 않은 엔터프라이즈의 멤버를 제거하지 않습니다. 다음에 멤버가 엔터프라이즈의 리소스에 액세스할 때 멤버는 SAML IdP에서 인증을 받아야 합니다.

OKTA 사용하여 SAML을 사용하도록 설정하는 방법에 대한 자세한 내용은 "[Okta를 사용하여 엔터프라이즈 계정에 대해 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)"을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. "SAML Single Sign-On"에서 **SAML 인증 필요** 를 선택합니다.
  ![SAML SSO를 사용하도록 설정하기 위한 확인란](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. **로그온 URL** 필드에서 Single Sign-On 요청에 대한 IdP의 HTTPS 엔드포인트를 입력합니다. 이 값은 IdP 구성에서 사용할 수 있습니다.
![로그인할 때 멤버가 전달되는 URL의 필드](/assets/images/help/saml/saml_sign_on_url_business.png)
7. 필요에 따라 **발급자** 필드에 SAML 발급자 URL을 입력하여 보낸 메시지의 신뢰성을 확인합니다.
![SAML 발급자 이름 필드](/assets/images/help/saml/saml_issuer.png)
8. **퍼블릭 인증서** 아래에 인증서를 붙여넣어 SAML 응답을 확인합니다.
![ID 공급자의 퍼블릭 인증서 필드](/assets/images/help/saml/saml_public_certificate.png)
9. SAML 발급자의 요청 무결성을 확인하려면 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다. 그런 다음, "서명 메서드" 및 "다이제스트 메서드" 드롭다운에서 SAML 발급자가 사용하는 해시 알고리즘을 선택합니다.
![SAML 발급자가 사용하는 서명 메서드 및 다이제스트 메서드 해시 알고리즘에 대한 드롭다운](/assets/images/help/saml/saml_hashing_method.png)
10. 엔터프라이즈에 SAML SSO를 사용하도록 설정하기 전에 **SAML 구성 테스트** 를 클릭하여 입력한 정보가 올바른지 확인합니다. ![적용하기 전에 SAML 구성을 테스트하는 단추](/assets/images/help/saml/saml_test.png)
11. **저장** 을 클릭합니다.
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghes %}

## SAML SSO 구성

{% data variables.location.product_location %}에 SAML 인증을 사용하거나 사용하지 않도록 설정하거나 기존 구성을 편집할 수 있습니다. 관리 콘솔에서 {% data variables.product.product_name %}에 대한 인증 설정을 보고 편집할 수 있습니다. 자세한 내용은 “[관리 콘솔 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”를 참조하세요.

{% note %}

**참고**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. **SAML** 을 선택합니다.
   
   ![관리 콘솔에서 SAML 인증을 사용하도록 설정하는 옵션의 스크린샷](/assets/images/enterprise/management-console/auth-select-saml.png)
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![SAML IdP 외부에서 기본 제공 인증을 사용하도록 설정하는 옵션의 스크린샷](/assets/images/enterprise/management-console/saml-built-in-authentication.png)
1. 필요에 따라 요청되지 않은 응답 SSO를 사용하도록 설정하려면 **IdP 시작 SSO** 를 선택합니다. 기본적으로 {% data variables.product.prodname_ghe_server %}는 원치 않는 IdP(ID 공급자) 시작 요청에 대해 IdP에 `AuthnRequest`로 회신합니다.

   ![IdP에서 시작한 요청되지 않은 응답을 사용하도록 설정하는 옵션의 스크린샷](/assets/images/enterprise/management-console/saml-idp-sso.png)

   {% tip %}

   **참고**: 이 값을 **선택되지 않음** 상태로 유지하는 것이 좋습니다. 드물게 SAML 구현에서 서비스 공급자가 시작한 SSO를 지원하지 않는 경우와 {% data variables.contact.enterprise_support %}에서 권고하는 경우에 **만** 이 기능을 사용하도록 설정해야 합니다.

   {% endtip %}

1. SAML 공급자가 {% data variables.location.product_location %}에서 사용자에 대한 관리자 권한을 결정 **하지 않** 으려면 관리자 **강등/승격 사용 안** 함을 선택합니다.

   ![IdP의 “관리자” 특성에 따라 관리 권한을 사용하거나 사용하지 않도록 설정하는 옵션의 스크린샷](/assets/images/enterprise/management-console/disable-admin-demotion-promotion.png) {%- ifversion ghes > 3.3 %}
1. 필요에 따라 {% data variables.location.product_location %}이(가) SAML IdP에서 암호화된 어설션을 수신하도록 허용하려면 **암호화된 어설션 필요를** 선택합니다. IdP가 암호화된 어설션을 지원하고 관리 콘솔의 암호화 및 키 전송 메서드가 IdP에 구성된 값과 일치하는지 확인해야 합니다. 또한 IdP에 {% data variables.location.product_location %}의 공용 인증서를 제공해야 합니다. 자세한 내용은 “[암호화된 어설션 사용](/admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions)”을 참조하세요.

   ![관리 콘솔의 “인증” 섹션 내의 “암호화된 어설션 사용” 확인란 스크린샷](/assets/images/help/saml/management-console-enable-encrypted-assertions.png) {%- endif %}
1. **Single Sign-On URL** 필드에서 Single Sign-On 요청에 대한 IdP에 HTTP 또는 HTTPS 엔드포인트를 입력합니다. 이 값은 IdP 구성에서 제공됩니다. 내부 네트워크에서만 호스트를 사용할 수 있는 경우 내부 [이름 서버를 사용하도록 {% data variables.location.product_location %}을 구성해야 할](/enterprise/admin/guides/installation/configuring-dns-nameservers/) 수 있습니다.

   ![Single Sign-On URL에 대한 텍스트 필드의 스크린샷](/assets/images/enterprise/management-console/saml-single-sign-url.png)
1. 필요에 따라 **발급자** 필드에 SAML 발급자의 이름을 입력합니다. 이렇게 하면 {% data variables.location.product_location %}로 전송된 메시지의 신뢰성이 확인됩니다.

   ![SAML 발급자 URL의 텍스트 필드 스크린샷](/assets/images/enterprise/management-console/saml-issuer.png)
1. **서명 방법** 및 **다이제스트 메서드** 드롭다운 메뉴에서 SAML 발급자에서 사용하는 해시 알고리즘을 선택하여 {% data variables.location.product_location %}에서 요청의 무결성을 확인합니다. **이름 식별자 형식** 드롭다운 메뉴를 사용하여 형식을 지정합니다.

   ![서명 및 다이제스트 메서드를 선택하는 드롭다운 메뉴의 스크린샷](/assets/images/enterprise/management-console/saml-method.png)
1. **확인 인증서** 에서 **파일 선택** 을 클릭하고 인증서를 선택하여 IdP에서 SAML 응답의 유효성을 검사합니다.

   ![IdP에서 유효성 검사 인증서를 업로드하는 단추의 스크린샷](/assets/images/enterprise/management-console/saml-verification-cert.png)
1. 필요한 경우 IdP와 일치하도록 SAML 특성 이름을 수정하거나 기본 이름을 적용합니다.

   ![추가 SAML 특성을 입력하기 위한 필드 스크린샷](/assets/images/enterprise/management-console/saml-attributes.png)

{% elsif ghae %}

## SAML SSO 사용

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

다음 IdP는 {% data variables.product.product_name %}에 대한 SAML SSO를 구성하는 방법에 대한 설명서를 제공합니다. IdP가 나열되지 않은 경우 IdP에 문의하여 {% data variables.product.product_name %}에 대한 지원을 요청하세요.

 | IdP | 추가 정보 |
 | :- | :- |
 | Azure AD | "[Azure AD를 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)" |
| Okta | "[OKTA를 사용하여 엔터프라이즈에 대한 인증 및 프로비저닝 구성](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)" |

{% data variables.product.product_name %}를 초기화하는 동안 IdP에서 {% data variables.product.product_name %}를 SAML SP(서비스 공급자)로 구성해야 합니다. {% data variables.product.product_name %}를 유효한 SP로 구성하려면 IdP에 몇 가지 고유한 값을 입력해야 합니다. 자세한 내용은 "[SAML 구성 참조](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-metadata)"를 참조하세요.

## SAML SSO 구성 편집

IdP에 대한 세부 정보가 변경되면 {% data variables.location.product_location %}에 대한 SAML SSO 구성을 편집해야 합니다. 예를 들어 IdP에 대한 인증서가 만료되면 퍼블릭 인증서의 값을 편집할 수 있습니다.

{% ifversion ghae %}

{% note %}

**참고**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. "SAML Single Sign-On"에서 IdP에 대한 새 세부 정보를 입력합니다.
  ![엔터프라이즈에 대한 SAML SSO 구성의 IdP 세부 정보가 있는 텍스트 항목 필드](/assets/images/help/saml/ae-edit-idp-details.png)
1. 필요에 따라 {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 새 서명 또는 다이제스트 메서드를 구성합니다.
  ![서명 및 다이제스트 메서드를 변경하는 편집 아이콘](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - 드롭다운 메뉴를 사용하고 새 서명 또는 다이제스트 메서드를 선택합니다.
      ![새 서명 또는 다이제스트 메서드를 선택하기 위한 드롭다운 메뉴](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. 입력한 정보가 올바른지 확인하려면 **SAML 구성 테스트** 를 클릭합니다.
  ![“SAML 구성 테스트” 단추](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. **저장** 을 클릭합니다.
    ![SAML SSO 구성에 대한 "저장" 단추](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. 필요에 따라 {% data variables.location.product_location %}에 대한 사용자 계정을 자동으로 프로비전 및 프로비전 해제하려면 SCIM을 사용하여 사용자 프로비저닝을 다시 구성합니다. 자세한 내용은 “[엔터프라이즈에 대한 사용자 프로비저닝 구성](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”을 참조하세요.

{% endif %}

{% ifversion ghae %}

## SAML SSO 사용 안 함

{% warning %}

**경고**: {% data variables.location.product_location %}에 SAML SSO를 사용하지 않도록 설정하면 기존 SAML SSO 세션이 없는 사용자는 {% data variables.location.product_location %}에 로그인할 수 없습니다. {% data variables.location.product_location %}의 SAML SSO 세션은 24시간 후에 종료됩니다.

{% endwarning %}

{% note %}

**참고**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. "SAML Single Sign-On"에서 **SAML 인증 사용** 을 선택을 취소합니다.
  !["SAML 인증 사용" 확인란](/assets/images/help/saml/ae-saml-disabled.png)
1. SAML SSO를 사용하지 않도록 설정하고 초기화 중에 만든 기본 제공 사용자 계정으로 로그인하도록 하려면 **저장** 을 클릭합니다.
    ![SAML SSO 구성에 대한 "저장" 단추](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}

{% ifversion ghec or ghes %}

## 추가 참고 자료

{%- ifversion ghec %}
- "[조직에 대한 SAML Single Sign-On 관리](/organizations/managing-saml-single-sign-on-for-your-organization)" {%- endif %} {%- ifversion ghes %}
- "[사이트 관리자 승격 또는 강등](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator)" {%- endif %}

{% endif %}
