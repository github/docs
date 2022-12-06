---
title: 활성 SAML 세션 보기 및 관리
intro: 설정에서 활성 SAML 세션을 보고 취소할 수 있습니다.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
type: how_to
shortTitle: Active SAML sessions
ms.openlocfilehash: e69ad366de7cdfb14b6a2a13ae3bdc134111616a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165593'
---
계정에 로그인한 디바이스 목록을 보고 인식하지 못하는 SAML 세션을 취소할 수 있습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. "웹 세션"에서 활성 SAML 세션을 볼 수 있습니다.

   ![활성 SAML 세션 목록의 스크린샷](/assets/images/help/settings/saml-active-sessions.png)

1. 세션 세부 정보를 보려면 **자세히 보기** 를 클릭합니다.
   ![SAML 세션 세부 정보를 여는 단추가 강조 표시된 활성 SAML 세션의 스크린샷](/assets/images/help/settings/saml-expand-session-details.png)

1. 세션을 해지하려면 **SAML 취소** 를 클릭합니다.

   ![SAML 세션을 취소하는 단추가 강조 표시된 세션 세부 정보 페이지의 스크린샷](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **참고:** 세션을 취소하면 해당 조직에 대한 SAML 인증을 제거합니다. 조직에 다시 액세스하려면 ID 공급자를 통해 Single Sign-On해야 합니다. 자세한 내용은 “[SAML SSO를 사용한 인증 정보](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”를 참조하세요.

  {% endnote %}

## 추가 참고 자료

- “[SAML SSO를 사용한 인증 정보](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”
