---
title: SAML Single Sign-On에 사용할 SSH 키 권한 부여
intro: SAML SSO(Single Sign-On)를 사용하는 조직에서 SSH 키를 사용하려면 먼저 키에 권한을 부여해야 합니다.
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SSH Key with SAML
ms.openlocfilehash: e70274e580c58f86b7d1983cb116e6ce90bc7a40
ms.sourcegitcommit: e4f7dad219a53ee7e430c7aabc77a1b134d23df0
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/06/2022
ms.locfileid: '148010300'
---
기존 SSH 키에 권한을 부여하거나 새 SSH 키를 만든 후 권한을 부여할 수 있습니다. SSH 키 생성에 대한 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요.

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**참고:** 조직에서 SSH 키에 부여한 권한을 철회하는 경우 동일한 키를 다시 인증할 수 없습니다. 새 SSH 키를 만들고 권한을 부여해야 합니다. SSH 키 생성에 대한 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
1. 권한을 부여하려는 SSH 키의 오른쪽에서 **SSO 구성** 을 클릭합니다. {% data reusables.saml.authenticate-with-saml-at-least-once %}

   ![SSO 토큰 권한 부여 단추의 스크린샷](/assets/images/help/settings/ssh-sso-button.png)
1. SSH 키에 대한 권한을 부여하려는 조직의 오른쪽에 있는 **권한 부여** 를 클릭합니다.

   ![토큰 권한 부여 단추의 스크린샷](/assets/images/help/settings/ssh-sso-authorize.png)

## 추가 참고 자료

- “[기존 SSH 키 확인](/articles/checking-for-existing-ssh-keys)”
- “[SAML Single Sign-On을 사용한 인증](/articles/about-authentication-with-saml-single-sign-on)”
