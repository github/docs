---
title: SAML Single Sign-On에 사용할 개인용 액세스 토큰 권한 부여
intro: 'SAML SSO(Single Sign-On)를 사용하는 조직에서 {% 데이터 variables.product.pat_v1 %}을(를) 사용하려면 먼저 토큰에 권한을 부여해야 합니다.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: '{% data variables.product.pat_generic_caps %} with SAML'
ms.openlocfilehash: 56ad08fd915869ae842ffa85dba24c123cef8c6d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093667'
---
토큰이 SAML SSO(Single Sign-On)를 사용하는 조직에 액세스하려면 먼저 만든 후 {% 데이터 variables.product.pat_v1 %}에 권한을 부여해야 합니다. 새 {% 데이터 variables.product.pat_v1 %}을(를) 만드는 방법에 대한 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요. {% ifversion pat-v2 %} {% 데이터 variables.product.pat_v2_caps %}s은(는) 조직에 대한 액세스 권한이 부여되기 전에 토큰을 만드는 동안 권한이 부여됩니다. {% endif %}

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %}
3. 권한을 부여하려는 토큰 옆에 있는 **SSO 구성** 을 클릭합니다. {% data reusables.saml.authenticate-with-saml-at-least-once-once %}

   ![{% 데이터 variables.product.pat_v1 %}에 대한 SSO를 구성하는 드롭다운 메뉴의 스크린샷](/assets/images/help/settings/sso-allowlist-button.png)
4. 토큰에 대한 권한을 부여하려는 조직의 오른쪽에 있는 **권한 부여** 를 클릭합니다.
   ![토큰 권한 부여 단추](/assets/images/help/settings/token-authorize-button.png)

## 추가 참고 자료

- "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"
- “[SAML Single Sign-On을 사용한 인증](/articles/about-authentication-with-saml-single-sign-on)”
