---
title: 조직에서 SAML Single Sign-On 사용 및 테스트
intro: 조직 소유자 및 관리자는 SAML Single Sign-On을 사용하도록 설정하여 조직에 추가 보안 계층을 추가할 수 있습니다.
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
ms.openlocfilehash: cbdf8c92ca61f9836876c34ae9dd3b9be0cd7ee4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184085'
---
## SAML Single Sign-On 정보

조직에서 SAML SSO를 사용하도록 설정하되 모든 구성원이 반드시 사용할 필요는 없게 할 수 있습니다. 조직에서 SAML SSO를 사용하도록 설정하지만 적용하지 않으면 조직은 SAML SSO를 원활하게 채택할 수 있습니다. 조직 구성원 대다수가 SAML SSO를 사용하는 경우 조직 내에서 SAML SSO를 적용할 수 있습니다.

{% data reusables.saml.ghec-only %}

SAML SSO를 사용하도록 설정하지만 적용하지 않는 경우 SAML SSO를 사용하지 않도록 선택한 조직 구성원은 여전히 조직의 구성원일 수 있습니다. SAML SSO 적용에 대한 자세한 내용은 "[조직에 SAML SSO(Single Sign-On) 적용](/articles/enforcing-saml-single-sign-on-for-your-organization)"을 참조하세요.

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

## 조직에서 SAML Single Sign-On 사용 및 테스트

조직에서 SAML SSO를 적용하기 전에 조직의 준비 작업이 끝났는지 확인하세요. 자세한 내용은 "[조직에 SAML Single Sign On을 적용할 준비](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)"를 참조하세요.

{% data variables.product.company_short %}에서 SAML SSO에 대해 지원하는 ID 공급자(IdP)에 대한 자세한 내용은 "[ID 공급자를 조직에 연결](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"을 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. "SAML Single Sign-On"에서 **SAML 인증 사용** 을 선택합니다.
![SAML SSO를 사용하도록 설정하기 위한 확인란](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **참고:** SAML SSO를 사용하도록 설정한 후에는 IdP를 사용할 수 없을 때도 Single Sign-On 복구 코드를 다운로드하여 조직에 액세스할 수 있습니다. 자세한 내용은 "[조직의 SAML Single Sign-On 복구 코드 다운로드](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)"를 참조하세요.

  {% endnote %}

6. "로그온 URL" 필드에서 Single Sign-On 요청에 대한 IdP의 HTTPS 엔드포인트를 입력합니다. 이 값은 IdP 구성에서 사용할 수 있습니다.
![로그인할 때 구성원이 전달되는 URL의 필드](/assets/images/help/saml/saml_sign_on_url.png)
7. 필요한 경우 "발급자" 필드에 SAML 발급자의 이름을 입력합니다. 이렇게 하면 보낸 메시지의 신뢰성이 확인됩니다.
![SAML 발급자 이름 필드](/assets/images/help/saml/saml_issuer.png)
8. "퍼블릭 인증서"에 인증서를 붙여넣어 SAML 응답을 확인합니다.
![ID 공급자의 퍼블릭 인증서 필드](/assets/images/help/saml/saml_public_certificate.png)
9. {% octicon "pencil" aria-label="The edit icon" %}을 클릭한 다음 서명 메서드 및 다이제스트 메서드 드롭다운에서 SAML 발급자가 요청의 무결성을 확인하는 데 사용한 해시 알고리즘을 선택합니다.
![SAML 발급자가 사용하는 서명 메서드 및 다이제스트 메서드 해시 알고리즘에 대한 드롭다운](/assets/images/help/saml/saml_hashing_method.png)
10. 조직에 SAML SSO를 사용하도록 설정하기 전에 **SAML 구성 테스트** 를 클릭하여 입력한 정보가 올바른지 확인합니다. ![적용하기 전에 SAML 구성을 테스트하는 단추](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **팁:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. SAML SSO를 적용하고 IdP를 통해 인증되지 않은 모든 조직 구성원을 제거하려면 **_조직 이름_ 조직의 모든 구성원에 대해 SAML SSO 인증 필요를** 선택합니다. SAML SSO 적용에 대한 자세한 내용은 "[조직에 SAML SSO(Single Sign-On) 적용](/articles/enforcing-saml-single-sign-on-for-your-organization)"을 참조하세요.
![조직에 대한 SAML SSO를 요구하는 확인란 ](/assets/images/help/saml/saml_require_saml_sso.png)
12. **저장** 을 클릭합니다.
![SAML SSO 설정을 저장하는 단추](/assets/images/help/saml/saml_save.png)

## 추가 참고 자료

- "[SAML Single Sign-On을 사용하는 ID 및 액세스 관리 정보](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[SAML 구성 참조](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
