---
title: SAML Single Sign-On을 사용하는 ID 및 액세스 관리 정보
intro: 'IdP(ID 공급자)를 사용하여 사용자 ID 및 애플리케이션을 중앙에서 관리하는 경우 {% data variables.product.prodname_dotcom %}에서 조직의 리소스를 보호하도록 SAML(Security Assertion Markup Language) SSO(Single Sign-On)를 구성할 수 있습니다.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120619'
---
{% data reusables.saml.ghec-only %}

## SAML SSO 정보

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

조직 소유자가 개별 조직에 SAML SSO를 적용하거나, 엔터프라이즈 소유자가 엔터프라이즈 계정의 모든 조직에 SAML SSO를 적용할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

조직에 SAML SSO를 사용하도록 설정하기 전에 IdP를 조직에 연결해야 합니다. 자세한 내용은 "[조직에 ID 공급자 연결](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"을 참조하세요.

조직의 경우 SAML SSO를 사용하지 않도록 설정하거나, 사용하도록 설정하지만 적용하지 않거나, 사용하도록 설정하고 적용할 수 있습니다. 조직에 SAML SSO를 사용하도록 설정하고 조직의 구성원이 IdP를 사용하여 성공적으로 인증하면, SAML SSO 구성을 적용할 수 있게 됩니다. {% data variables.product.prodname_dotcom %} 조직에 SAML SSO를 적용하는 자세한 방법은 "[조직에 SAML SSO(Single Sign-On) 적용](/articles/enforcing-saml-single-sign-on-for-your-organization)"을 참조하세요.

구성원은 IdP를 이용해 주기적으로 인증하여 조직의 리소스를 인증하고 액세스 권한을 얻어야 합니다. 로그인 기간은 IdP에 의해 지정되며 일반적으로 24시간입니다. 이러한 주기적인 로그인 요구 사항은 액세스 기간을 제한하며, 사용자는 계속하려면 자신을 다시 식별해야 합니다.

명령줄에서 API 및 Git을 사용하여 조직의 보호된 리소스에 액세스하려면 멤버는 {% data variables.product.pat_generic %} 또는 SSH 키를 사용하여 권한을 부여하고 인증해야 합니다. 자세한 내용은 "[SAML Single Sign-On에 사용할 {% data variables.product.pat_generic %} 권한 부여](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" 및 "[SAML Single Sign-On에 사용할 SSH 키 권한 부여](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"를 참조하세요.

멤버가 SAML SSO를 사용하여 조직에 처음 액세스할 때 {% data variables.product.prodname_dotcom %}은 조직, {% data variables.location.product_location %}의 구성원 계정 및 IdP의 구성원 계정을 연결하는 레코드를 자동으로 만듭니다. 조직 또는 엔터프라이즈 계정의 구성원에 대해 연결된 SAML ID, 활성 세션, 권한 있는 자격 증명을 보고 철회할 수 있습니다. 자세한 내용은 "[조직에 대한 구성원의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)" 및 "[엔터프라이즈 계정에 대한 사용자의 SAML 액세스 보기 및 관리](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)"를 참조하세요.

구성원이 새 리포지토리를 만들 때 SAML SSO 세션으로 로그인하는 경우 해당 리포지토리의 기본 표시 유형은 프라이빗입니다. 그렇지 않으면 기본 표시 유형은 퍼블릭입니다. 리포지토리 표시 여부에 대한 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”를 참조하세요.

또한 조직 구성원은 {% data variables.product.prodname_oauth_app %}에 권한을 부여하기 위한 활성 SAML 세션이 있어야 합니다. {% data variables.contact.contact_support %}에 문의하면 이 요구 사항을 옵트아웃할 수 있습니다. {% data variables.product.product_name %}에서는 이 요구 사항 옵트아웃을 권장하지 않습니다. 조직에서 계정 인수와 데이터 손실 위험이 발생할 가능성이 높아지기 때문입니다.

{% data reusables.saml.saml-single-logout-not-supported %}

## 지원되는 SAML 서비스

{% data reusables.saml.saml-supported-idps %}

일부 IdP에서는 SCIM을 통해 {% data variables.product.prodname_dotcom %} 조직에 대한 액세스를 프로비전하는 기능을 지원합니다. 자세한 내용은 "[조직에 대한 SCIM 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)"를 참조하세요.

{% data reusables.scim.enterprise-account-scim %} 

## SAML SSO를 사용하여 조직에 구성원 추가

SAML SSO를 사용하도록 설정한 후에는 여러 가지 방법으로 조직에 새 멤버를 추가할 수 있습니다. 조직 소유자는 {% data variables.product.product_name %}에서 수동으로 또는 API를 사용하여 새 구성원을 초대할 수 있습니다. 자세한 내용은 "[조직에 조인하도록 사용자 초대](/articles/inviting-users-to-join-your-organization)" 및 "[구성원](/rest/reference/orgs#add-or-update-organization-membership)"을 참조하세요.

조직 소유자의 초대 없이 새 사용자를 프로비저닝하려면 URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`을 사용하면 됩니다(_ORGANIZATION_ 을 조직의 이름으로 바꿈). 예를 들어 IdP에 액세스할 수 있는 모든 사용자가 IdP의 대시보드에서 링크를 클릭하여 {% data variables.product.prodname_dotcom %} 조직에 가입할 수 있도록 IdP를 구성할 수 있습니다.

{% note %}

**참고:** 을 통해 `https://github.com/orgs/ORGANIZATION/sso/sign_up` 새 사용자를 프로비전하는 것은 SAML SSO가 엔터프라이즈 계정 수준에서 구성된 경우가 아니라 조직 수준에서 SAML SSO가 구성된 경우에만 지원됩니다. 엔터프라이즈 계정용 SAML SSO에 대한 자세한 내용은 "[엔터프라이즈 IAM용 SAML 정보](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)"를 참조하세요.

{% endnote %}

IdP가 SCIM을 지원하는 경우 {% data variables.product.prodname_dotcom %}은 IdP에 대한 액세스 권한을 부여할 때 구성원을 조직에 조인하도록 자동으로 초대할 수 있습니다. SAML IdP에서 {% data variables.product.prodname_dotcom %} 조직에 대한 구성원의 액세스 권한을 제거하면 {% data variables.product.prodname_dotcom %} 조직에서 해당 구성원이 자동으로 제거됩니다. 자세한 내용은 "[조직에 대한 SCIM 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)"를 참조하세요.

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## 추가 참고 자료

- "[SAML 구성 참조](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
- "[2단계 인증 및 SAML Single Sign-On 정보](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- “[SAML Single Sign-On을 사용한 인증](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”
