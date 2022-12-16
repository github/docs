---
title: 엔터프라이즈 계정의 Single Sign-On 복구 코드 다운로드
shortTitle: Download recovery codes
intro: 'IdP(ID 공급자)를 사용할 수 없는 경우 {% data variables.product.product_name %}에 액세스할 수 있도록 엔터프라이즈 계정의 SSO(Single Sign-On) 복구 코드를 다운로드해야 합니다.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 9513cb174c8fd0575672cd9535e5a32b77a9aecf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098405'
---
IdP를 사용할 수 없는 경우 복구 코드를 사용하여 {% 데이터 variables.location.product_location %}에서 엔터프라이즈에 로그인하고 액세스할 수 있습니다. 자세한 내용은 “[ID 공급자를 사용할 수 없는 경우 엔터프라이즈 계정에 액세스](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”를 참조하세요.

SSO를 구성할 때 복구 코드를 저장하지 않은 경우에도 엔터프라이즈 설정에서 코드에 액세스할 수 있습니다.



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. {% ifversion oidc-for-emu %}{% endif %} “SAML 인증 필요”{% ifversion oidc-for-emu %} 또는 “OIDC 인증 필요”{% endif %}에서 **복구 코드 저장** 을 클릭합니다.{% ifversion oidc-for-emu %} {% note %}
  
  **참고:** OIDC SSO는 {% data variables.product.prodname_emus %}에만 사용할 수 있습니다. 자세한 내용은 “[Enterprise Managed Users 정보](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”를 참조하세요.
  
  {% endnote %}{% endif %}
  
  ![적용하기 전에 SAML 구성을 테스트하는 단추의 스크린샷](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. 복구 코드를 저장하려면 **다운로드**, **인쇄** 또는 **복사** 를 클릭합니다.
  ![복구 코드를 다운로드, 인쇄 또는 복사하는 단추의 스크린샷](/assets/images/help/saml/saml_recovery_code_options.png)
