---
title: 모바일 디바이스에 대한 2단계 인증 배달 방법 변경
intro: 인증 코드 수신 방법을 문자 메시지 또는 모바일 애플리케이션 간에 전환할 수 있습니다.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
ms.openlocfilehash: 90f06f6e3a8b3c5614b78d7aee4055d903df2e80
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088306'
---
{% note %}

**참고:** 2단계 인증의 한 기본 방법을 변경하면 복구 코드를 포함하여 현재 2단계 인증 설정이 무효화됩니다. 새 복구 코드 집합을 안전하게 유지하세요. 2단계 인증에 대한 기본 방법을 변경해도 대체 SMS 구성(구성된 경우)에 영향을 주지 않습니다. 자세한 내용은 “[2단계 인증 구성 복원 방법](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number)”을 참조하세요.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. “기본 2단계 메서드” 옆에 있는 **변경** 을 클릭합니다.
  ![기본 전송 옵션 편집](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. “전송 옵션”에서 **2단계 인증 다시 구성** 을 클릭합니다.
    ![2FA 전송 옵션 전환](/assets/images/help/2fa/2fa-switching-methods.png)
5. TOTP 모바일 앱 또는 문자 메시지를 사용하여 2단계 인증을 설정할지 여부를 결정합니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”을 참조하세요.
    - TOTP 모바일 앱을 사용하여 2단계 인증을 설정하려면 **앱을 사용하여 설정** 을 클릭합니다.
    - SMS(문자 메시지)를 사용하여 2단계 인증을 설정하려면 **SMS를 사용하여 설정** 을 클릭합니다.

## 추가 참고 자료

- “[2단계 인증 정보](/articles/about-two-factor-authentication)”
- “[2단계 인증 복구 방법 구성](/articles/configuring-two-factor-authentication-recovery-methods)”
