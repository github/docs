---
title: OKTA를 사용하여 엔터프라이즈에 대한 SAML Single Sign-On 구성
intro: 'Okta에서 SAML(Security Assertion Markup Language) SSO(Single Sign-On)를 사용하여 {% data variables.product.product_name %}에서 엔터프라이즈 계정에 대한 액세스를 자동으로 관리할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109666'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## OKTA를 사용하는 SAML 정보

IdP(ID 공급자)인 OKTA와 함께 SAML SSO를 사용하도록 엔터프라이즈 계정을 구성하여, 단일 중앙 인터페이스에서 {% data variables.product.product_name %} 및 다른 웹 애플리케이션에서의 엔터프라이즈 계정에 대한 액세스를 제어할 수 있습니다.

SAML SSO는 조직, 리포지토리, 문제 및 끌어오기 요청과 같은 엔터프라이즈 계정 리소스에 대한 액세스를 제어하고 보호합니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.

{% data reusables.saml.switching-from-org-to-enterprise %} 자세한 내용은 “[조직에서 엔터프라이즈 계정으로 SAML 구성 전환](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”을 참조하세요.

또는 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직에 OKTA 사용하여 SAML SSO를 구성할 수도 있습니다. 자세한 내용은 “[Okta를 사용하여 SAML Single Sign-On 및 SCIM 구성](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)”을 참조하세요.

## OKTA에 {% data variables.product.prodname_ghe_cloud %} 애플리케이션 추가

{% data reusables.saml.okta-sign-into-your-account %}
1. OKTA Integration Network에서 [{% data variables.product.prodname_ghe_cloud %} - 엔터프라이즈 계정](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) 애플리케이션으로 이동하고 **통합 추가** 를 클릭합니다.
{% data reusables.saml.okta-dashboard-click-applications %}
1. 필요하다면 "애플리케이션 레이블" 오른쪽에 애플리케이션을 설명하는 이름을 입력합니다.
1. "{% data variables.product.prodname_dotcom %} 엔터프라이즈" 오른쪽에 엔터프라이즈 계정의 이름을 입력합니다. 예를 들어 엔터프라이즈 계정의 URL이 `https://github.com/enterprises/octo-corp`라면 `octo-corp`를 입력합니다.
1. **완료** 를 클릭합니다.

## SAML SSO 사용 및 테스트

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. 설정 오른쪽에서 **편집** 을 클릭합니다.
1. "그룹" 오른쪽에 있는 "구성된 SAML 특성"에서 드롭다운 메뉴를 사용하여 **regex 일치** 를 선택합니다.
1. 드롭다운 메뉴 오른쪽에 `.*.*`을 입력합니다.
1. **저장** 을 클릭합니다.
{% data reusables.saml.okta-view-setup-instructions %}
1. 설치 지침에 있는 정보를 사용하여 엔터프라이즈 계정에 SAML을 사용하도록 설정합니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.
