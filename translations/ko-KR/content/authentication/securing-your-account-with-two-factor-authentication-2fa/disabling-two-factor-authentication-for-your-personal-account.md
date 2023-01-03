---
title: 개인 계정에 대해 2단계 인증을 사용하지 않도록 설정
intro: 개인 계정에 대해 2단계 인증을 사용하지 않도록 설정하면 자신이 속한 조직에 대한 액세스 권한이 손실될 수 있습니다.
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/disabling-two-factor-authentication-for-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Disable 2FA
ms.openlocfilehash: 17135ec9a9458eeb2fc460e69dfc6af39d83ee1d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088273'
---
2단계 인증을 사용하여 계정을 보호하는 것이 좋습니다. 2FA를 사용하지 않도록 설정해야 하는 경우 최대한 빨리 다시 사용하도록 설정하는 것이 좋습니다.

{% warning %}

**경고:** 2단계 인증이 필요하고 2FA를 사용하지 않도록 설정한 조직의 퍼블릭 리포지토리에 대한 구성원{% ifversion fpt or ghec %}, 청구 관리자,{% endif %} 또는 외부 협력자인 경우 조직에서 자동으로 제거되고 조직의 리포지토리에 대한 액세스 권한이 손실됩니다. 조직에 대한 액세스 권한을 다시 얻으려면 2단계 인증을 다시 사용하도록 설정하고 조직 소유자에게 문의하세요.

{% endwarning %}

조직에서 2단계 인증이 필요하고 조직의 프라이빗 리포지토리에서 구성원, 소유자 또는 외부 공동 작업자인 경우 2단계 인증을 사용하지 않도록 설정하려면 먼저 조직을 떠나야 합니다.

조직에서 자신을 제거하려면 다음을 수행합니다.
 - 조직 구성원 또는 소유자는 “[조직에서 자신을 제거](/articles/removing-yourself-from-an-organization/)”를 참조하세요.
 - 외부 협력자는 조직 소유자 또는 리포지토리 관리자에게 조직의 리포지토리에서 사용자를 제거하도록 요청합니다. 자세한 내용은 “[조직에서 사용자의 역할 보기](/articles/viewing-people-s-roles-in-an-organization)” 및 “[조직 리포지토리에서 외부 협력자 제거](/articles/removing-an-outside-collaborator-from-an-organization-repository/)”를 참조하세요.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. **사용 안 함** 을 클릭합니다.
  ![2단계 인증 사용 안 함 단추](/assets/images/help/2fa/disable-two-factor-authentication.png)

## 추가 참고 자료

- “[2단계 인증 정보](/articles/about-two-factor-authentication)”
- “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”
- “[2단계 인증 복구 방법 구성](/articles/configuring-two-factor-authentication-recovery-methods)”
