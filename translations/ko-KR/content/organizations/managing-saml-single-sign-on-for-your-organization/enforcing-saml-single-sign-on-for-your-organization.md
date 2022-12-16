---
title: 조직에 SAML SSO(Single Sign-On) 적용
intro: 조직 소유자와 관리자는 SAML SSO를 적용하여 모든 조직 구성원이 IdP(ID 공급자)를 통해 인증하게 만들 수 있습니다.
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enforce SAML single sign-on
ms.openlocfilehash: 78c6ca3297705511e419a96742a8887d01d7b70d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125623'
---
## 조직에 SAML SSO 적용 정보

SAML SSO를 사용하도록 설정하면 {% data variables.product.prodname_dotcom %}은(는) {% data variables.product.prodname_dotcom_the_website %}에서 조직의 리소스를 방문하는 구성원에게 IdP에서 인증하라는 메시지를 표시합니다. 그러면 IdP의 개인 계정을 IdP의 ID에 연결합니다. 구성원은 IdP로 인증하기 전에 조직의 리소스에 계속 액세스할 수 있습니다.

![조직에 액세스하기 위해 SAML SSO를 통해 인증하라는 메시지가 표시된 배너](/assets/images/help/saml/sso-has-been-enabled.png)

조직에 SAML SSO를 적용할 수도 있습니다. {% data reusables.saml.when-you-enforce %} 적용은 조직에서 IdP를 통해 인증되지 않은 모든 구성원 및 관리자를 제거합니다. {% data variables.product.company_short %}은(는) 제거된 각 사용자에게 메일 알림을 보냅니다. 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} 사용자가 3개월 이내에 조직에 다시 가입하면 사용자의 액세스 권한 및 설정이 복원됩니다. 자세한 내용은 “[조직의 이전 멤버 복원](/articles/reinstating-a-former-member-of-your-organization)”을 참조하세요.

SAML SSO를 적용할 때 조직의 IdP에 외부 ID가 설정되지 않은 봇 및 서비스 계정도 제거됩니다. 봇 및 서비스 계정에 대한 자세한 내용은 “[SAML Single Sign-On을 사용하여 봇 및 서비스 계정 관리](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)”를 참조하세요.

조직이 엔터프라이즈 계정으로 소유되는 경우 엔터프라이즈 계정에 SAML을 요구하면 조직 수준 SAML 구성을 재정의하고 엔터프라이즈의 모든 조직에 SAML SSO를 적용합니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

{% tip %}

**팁:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## 조직에 SAML SSO 적용

1. 조직에서 SAML SSO를 사용하도록 설정하고 테스트한 다음 IdP를 한 번 이상 인증합니다. 자세한 내용은 “[조직에서 SAML SSO를 사용하도록 설정하고 테스트](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)”를 참조하세요.
1. 조직에 SAML SSO를 적용할 준비를 합니다. 자세한 내용은 “[조직에 SAML Single Sign On을 적용할 준비](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)”를 참조하세요.
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. “SAML Single Sign-On”에서 **조직의 모든 구성원에게 SAML SSO 인증 필요** 를 선택합니다.
    ![“SAML SSO 인증 필요” 확인란](/assets/images/help/saml/require-saml-sso-authentication.png)
1. 조직 구성원이 IdP를 통해 인증되지 않은 경우 {% data variables.product.company_short %}에 구성원이 표시됩니다. SAML SSO를 적용하는 경우 {% data variables.product.company_short %}은(는) 조직에서 구성원을 제거합니다. 경고를 검토하고 **구성원 제거 및 SAML Single Sign-On이 필요** 를 클릭합니다.
    ![조직에서 제거할 구성원 목록이 있는 “SAML SSO 적용 확인” 대화 상자](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. “Single Sign-On 복구 코드”에서 복구 코드를 검토합니다. 암호 관리자와 같은 안전한 위치에 복구 코드를 저장합니다.

## 추가 참고 자료

- “[조직에 대한 구성원의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”
