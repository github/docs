---
title: SAML 구성을 조직에서 엔터프라이즈 계정으로 전환
intro: 조직 수준 SAML 구성을 엔터프라이즈 수준 SAML 구성으로 바꾸기 위한 특별한 고려 사항 및 모범 사례를 알아봅니다.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: From organization to enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
ms.openlocfilehash: 8e1df23616d6cd5de90a45be336bf62981185256
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097848'
---
## 엔터프라이즈 계정에 대한 SAML Single Sign-On 정보

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %} 

조직 수준에서 SAML SSO를 구성하는 경우 각 조직은 IdP에서 고유한 SSO 테넌트를 사용하여 구성해야 합니다. 즉, 해당 멤버는 성공적으로 인증된 각 조직에 대한 고유한 SAML ID 레코드와 연결됩니다. 대신 엔터프라이즈 계정에 대해 SAML SSO를 구성하는 경우 각 엔터프라이즈 멤버는 엔터프라이즈 계정이 소유한 모든 조직에 사용되는 하나의 SAML ID를 사용합니다.

엔터프라이즈 계정에 대해 SAML SSO를 구성한 후 새 구성은 엔터프라이즈 계정이 소유한 조직의 기존 SAML SSO 구성을 재정의합니다.

엔터프라이즈 소유자가 엔터프라이즈 계정에 SAML을 사용하도록 설정하면 엔터프라이즈 멤버에게 알림이 표시되지 않습니다. SAML SSO가 이전에 조직 수준에서 적용된 경우 멤버는 조직 리소스로 직접 이동할 때 큰 차이점을 알 수 없습니다. 멤버에게 SAML을 통해 인증하라는 메시지가 계속 표시됩니다. 멤버가 IdP 대시보드를 통해 조직 리소스로 이동하는 경우 조직 수준 앱의 이전 타일 대신 엔터프라이즈 수준 앱의 새 타일을 클릭해야 합니다. 그러면 멤버가 이동할 조직을 선택할 수 있습니다. 

이전에 조직에 대해 권한이 부여된 {% 데이터 variables.product.pat_generic %}s, SSH 키, {% 데이터 variables.product.prodname_oauth_apps %}, {% 데이터 variables.product.prodname_github_apps %}은(는) 조직에 대한 권한을 계속 부여받습니다. 그러나 멤버는 조직에 대해 SAML SSO와 함께 사용할 권한이 부여되지 않은 모든 PAT, SSH 키, {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %}에 권한을 부여해야 합니다.

SAML SSO가 엔터프라이즈 계정에 대해 구성된 경우 SCIM 프로비저닝은 현재 지원되지 않습니다. 현재 엔터프라이즈 계정이 소유한 조직에 SCIM을 사용하는 경우 엔터프라이즈 수준 구성으로 전환하면 이 기능을 사용할 수 없습니다.

엔터프라이즈 계정에 대한 SAML SSO를 구성하기 전에 조직 수준 SAML 구성을 제거할 필요는 없지만 제거하는 것이 좋을 수 있습니다. 나중에 엔터프라이즈 계정에 대해 SAML을 사용하지 않도록 설정하면 남아 있는 조직 수준 SAML 구성이 적용됩니다. 조직 수준 구성을 제거하면 나중에 예기치 않은 문제를 방지할 수 있습니다.

## SAML 구성을 조직에서 엔터프라이즈 계정으로 전환

1. 엔터프라이즈 계정에 SAML SSO를 적용하면 모든 조직 멤버는 엔터프라이즈 계정에 사용되는 IdP 앱에 할당되거나 해당 앱에 대한 액세스 권한을 부여받습니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”을 참조하세요.
1. 필요에 따라 엔터프라이즈 계정이 소유한 조직에 대한 기존 SAML 구성을 제거합니다. 구성을 제거할지 여부를 결정하는 데 도움이 되도록 “[엔터프라이즈 계정에 대한 SAML Single Sign-On 정보](#about-saml-single-sign-on-for-enterprise-accounts)”를 참조하세요.
1. 조직 수준 SAML 구성을 유지한 경우에는 혼동을 방지하기 위해 IdP에서 조직 수준 앱의 타일을 숨기는 것이 좋습니다.
1. 엔터프라이즈 멤버에게 변경 내용을 알립니다.
   -  멤버는 더 이상 IdP 대시보드에서 조직의 SAML 앱을 클릭하여 조직에 액세스할 수 없습니다. 멤버는 엔터프라이즈 계정에 대해 구성된 새 앱을 사용해야 합니다.
   - 멤버는 이전에 조직에 대해 SAML SSO에서 사용할 권한이 부여되지 않은 PAT 또는 SSH 키에 권한을 부여해야 합니다. 자세한 내용은 "[SAML Single Sign-On에 사용할 {% 데이터 variables.product.pat_generic %} 권한 부여](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" 및 "[SAML Single Sign-On에서 사용할 SSH 키 권한 부여](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"를 참조하세요.
   - 멤버는 이전에 조직에 대해 권한이 부여된 {% data variables.product.prodname_oauth_apps %}에 다시 권한을 부여해야 할 수 있습니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”를 참조하세요.
