---
title: 엔터프라이즈 계정의 SAML Single Sign-On 복구 코드 다운로드
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116620"
---
IdP를 사용할 수 없는 경우 복구 코드를 사용하여 {% data variables.product.product_location %}에서 엔터프라이즈에 로그인하고 액세스할 수 있습니다. 자세한 내용은 “[ID 공급자를 사용할 수 없는 경우 엔터프라이즈 계정에 액세스](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)”를 참조하세요.

SAML SSO를 구성할 때 복구 코드를 저장하지 않은 경우에도 엔터프라이즈 설정에서 코드에 액세스할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. “SAML 인증 필요”에서 **복구 코드 저장** 을 클릭합니다.
![적용하기 전에 SAML 구성을 테스트하는 단추의 스크린샷](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. 복구 코드를 저장하려면 **다운로드**, **인쇄** 또는 **복사** 를 클릭합니다.
![복구 코드를 다운로드, 인쇄 또는 복사하는 단추의 스크린샷](/assets/images/help/saml/saml_recovery_code_options.png)
