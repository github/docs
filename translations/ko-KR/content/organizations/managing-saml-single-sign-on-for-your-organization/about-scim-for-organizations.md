---
title: 조직에 대한 SCIM 정보
intro: SCIM(System for Cross-domain Identity Management)을 사용하면 관리자가 시스템 간 사용자 ID 정보 교환을 자동화할 수 있습니다.
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 8071909478d52770f2e8107df31e61b7111f73c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068293'
---
## 조직에 대한 SCIM 정보

조직에서 [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)를 사용하는 경우 SCIM을 구현하여 {% data variables.product.product_name %}에 대한 조직 멤버의 액세스 권한을 추가, 관리, 제거할 수 있습니다. 예를 들어, 관리자는 SCIM을 사용하여 조직 멤버의 프로비전을 해제하고 자동으로 조직에서 멤버를 제거할 수 있습니다.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

SCIM을 구현하지 않고 SAML SSO를 사용하는 경우 자동 프로비저닝 해제를 이용할 수 없습니다. IdP에서 액세스 권한이 제거된 후 조직 멤버의 세션이 만료되는 경우 조직 멤버가 조직에서 자동으로 제거되지 않습니다. 권한 있는 토큰은 세션이 만료된 후에도 조직에 대한 액세스 권한을 부여합니다. SCIM을 사용하지 않는 경우 멤버의 액세스 권한을 완전히 제거하려면 조직 소유자가 IdP에서 멤버의 액세스 권한을 제거하고 {% data variables.product.prodname_dotcom %}의 조직에서 멤버를 수동으로 제거해야 합니다.

{% data reusables.scim.changes-should-come-from-idp %}

## 지원되는 ID 공급자

이러한 IdP(ID 공급자)는 조직의 {% data variables.product.product_name %} SCIM API와 호환됩니다. 자세한 내용은 {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 설명서에서 [SCIM](/rest/scim)을 참조하세요.
- Azure AD
- Okta
- OneLogin

## 조직에 대한 SCIM 구성 정보

{% data reusables.scim.dedicated-configuration-account %}

{% data variables.product.prodname_oauth_app %}에 권한을 부여하기 전에 활성 SAML 세션이 있어야 합니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”를 참조하세요.

{% note %}

**참고:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## 추가 참고 자료

- “[조직에 대한 구성원의 SAML 액세스 보기 및 관리](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)”
