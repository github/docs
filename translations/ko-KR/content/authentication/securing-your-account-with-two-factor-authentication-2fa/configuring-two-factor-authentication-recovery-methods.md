---
title: 2단계 인증 복구 메서드 구성
intro: 2단계 인증 자격 증명을 분실한 경우 계정에 액세스하기 위해 다양한 복구 방법을 설정할 수 있습니다.
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088288'
---
2단계 인증 복구 코드를 안전하게 저장하는 것 외에도 하나 이상의 추가 복구 방법을 구성하는 것이 좋습니다.

## 2단계 인증 복구 코드 다운로드

{% data reusables.two_fa.about-recovery-codes %} 2단계 인증을 사용하도록 설정한 후 언제든지 복구 코드를 다운로드할 수도 있습니다.

계정을 안전하게 유지하려면 복구 코드를 공유하거나 배포하지 마세요. 다음과 같은 보안 암호 관리자를 사용하여 저장하는 것이 좋습니다.
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

새 복구 코드를 생성하거나 2FA를 사용하지 않도록 설정하고 다시 사용하도록 설정하는 경우 보안 설정의 복구 코드가 자동으로 업데이트됩니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. 복구 코드를 안전한 장소에 저장합니다. 액세스 권한을 잃은 경우 복구 코드를 통해 계정에 다시 액세스할 수 있습니다.
    - 디바이스에 복구 코드를 저장하려면 **다운로드** 를 클릭합니다.
    - 복구 코드의 하드 카피를 저장하려면 **인쇄** 를 클릭합니다.
    - 암호 관리자에서 스토리지에 대한 복구 코드를 복사하려면 **복사** 를 클릭합니다.
  ![코드를 다운로드, 인쇄 또는 복사하는 옵션이 있는 복구 코드 목록](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## 새 복구 코드 집합 생성

복구 코드를 사용하여 계정에 대한 액세스 권한을 다시 얻으면 다시 사용할 수 없습니다. 16개의 복구 코드를 모두 사용한 경우 다른 코드 목록을 생성할 수 있습니다. 새 복구 코드 집합을 생성하면 이전에 생성한 모든 코드가 무효화됩니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. 다른 복구 코드 일괄 처리를 만들려면 **새 복구 코드 생성** 을 클릭합니다.
    ![새 복구 코드 생성 단추](/assets/images/help/2fa/generate-new-recovery-codes.png)

## 추가 2단계 인증 방법으로 보안 키 구성

보안 키를 보조 2단계 인증 방법으로 설정하고 보안 키를 사용하여 계정에 대한 액세스 권한을 다시 얻을 수 있습니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”을 참조하세요.

{% ifversion fpt or ghec %}

## 대체 인증 번호 설정

대체 디바이스에 두 번째 숫자를 제공할 수 있습니다. 기본 디바이스와 복구 코드에 둘 다 액세스할 수 없는 경우 백업 SMS 번호를 통해 계정에 다시 액세스할 수 있습니다.

인증을 문자 메시지로 구성했는지 TOTP 모바일 애플리케이션을 통해 구성했는지에 관계없이 대체 번호를 사용할 수 있습니다.

{% warning %}

**경고:** 대체 번호 사용은 최후의 수단입니다. 대체 인증 번호를 설정하는 경우 추가 복구 방법을 구성하는 것이 좋습니다.
- 악의적인 행위자가 이동 통신 사업자를 공격할 수 있으므로 SMS 인증은 위험합니다.
- SMS 메시지는 미국 이외의 특정 국가에서만 지원됩니다. 목록은 “[SMS 인증이 지원되는 국가](/articles/countries-where-sms-authentication-is-supported)”를 참조하세요.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. “대체 SMS 번호” 옆에 있는 **추가** 를 클릭합니다.
![대체 SMS 번호 추가 단추](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. “대체 SMS 번호”에서 **대체 SMS 번호 추가** 를 클릭합니다.
![대체 SMS 번호 텍스트 추가](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. 국가 번호를 선택하고 지역 번호를 포함하여 휴대폰 번호를 입력합니다. 정보가 올바르면 **대체 설정** 을 클릭합니다.
    ![대체 SMS 번호 설정](/assets/images/help/2fa/2fa-fallback-number.png)

설치 후 백업 디바이스는 확인 SMS를 받게 됩니다.

{% endif %}

## 추가 참고 자료

- “[2단계 인증 정보](/articles/about-two-factor-authentication)”
- “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”
- “[2단계 인증을 사용하여 {% data variables.product.prodname_dotcom %}에 액세스](/articles/accessing-github-using-two-factor-authentication)”
- “[2단계 인증 자격 증명을 분실한 경우 계정 복구](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”
