---
title: 2단계 인증 구성
intro: 여러 옵션 중에서 선택하여 계정에 두 번째 인증 원본을 추가할 수 있습니다.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA
ms.openlocfilehash: 2a038134260ba9a6a7a0307bc3261157968ec1ea
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179959'
---
모바일 앱{% ifversion fpt or ghec %}을 사용하거나 문자 메시지{% endif %}를 통해 2단계 인증을 구성할 수 있습니다. 보안 키를 추가할 수도 있습니다.

TOTP(시간 제약이 있는 일회성 암호) 애플리케이션을 사용하여 2FA를 구성하는 것이 좋습니다.{% ifversion fpt or ghec %} TOTP 애플리케이션은 SMS보다 안정성이 높으며, 특히 미국 외 지역에서 안정적입니다.{% endif %} TOTP 앱은 클라우드에서 인증 코드의 보안 백업을 지원하며 디바이스에 대한 액세스 권한을 잃은 경우 복원할 수 있습니다.

{% warning %}

**경고:**
- 2단계 인증이 필요한 조직의 프라이빗 리포지토리에 대한 구성원{% ifversion fpt or ghec %}, 청구 관리자,{% endif %} 또는 외부 협력자인 경우 {% data variables.location.product_location %}에서 2FA를 사용하지 않도록 설정하려면 먼저 조직을 떠나야 합니다.
- 2FA를 사용하지 않도록 설정하면 조직의 프라이빗 리포지토리에 있는 모든 프라이빗 포크 및 조직에 대한 액세스 권한을 자동으로 잃게 됩니다. 조직 및 포크에 대한 액세스 권한을 다시 얻으려면 2단계 인증을 다시 사용하도록 설정하고 조직 소유자에게 문의하세요.

{% endwarning %}

{% ifversion fpt or ghec %}

{% data variables.enterprise.prodname_emu_enterprise %}의 구성원인 경우 설치 사용자로 로그인하지 않는 한 {% data variables.enterprise.prodname_managed_user %} 계정에 대해 2FA를 구성할 수 없습니다. 설치 사용자 이외의 사용자에 대해 관리자는 IdP(ID 공급자)에서 2FA를 구성해야 합니다.

{% endif %}

## TOTP 모바일 앱을 사용하여 2단계 인증 구성

TOTP(시간 제약이 있는 일회성 암호) 애플리케이션은 특정 시간 후에 변경되는 인증 코드를 자동으로 생성합니다. 다음과 같은 클라우드 기반 TOTP 앱을 사용하는 것이 좋습니다.
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**팁**: 여러 디바이스에서 TOTP를 통해 인증을 구성하려면 설치하는 동안 각 디바이스를 사용하여 QR 코드를 동시에 스캔하세요. 2FA가 이미 활성화되어 있고 다른 디바이스를 추가하려는 경우 보안 설정에서 2FA를 다시 구성해야 합니다.

{% endtip %}

1. TOTP 앱을 다운로드합니다.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes > 3.7 %}
5. "인증자 앱 설정"에서 다음 중 하나를 수행합니다.
    - 모바일 디바이스의 앱으로 QR 코드를 스캔합니다. 스캔하면 앱에 {% data variables.product.product_name %}에 입력할 수 있는 6자리 코드가 표시됩니다.
    - QR 코드를 스캔할 수 없는 경우 **이 텍스트 코드 입력** 을 클릭하여 TOTP 앱에 수동으로 입력할 수 있는 코드를 확인합니다.
    ![이 코드 입력 클릭](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. TOTP 모바일 애플리케이션은 {% data variables.location.product_location %}에 계정을 저장하고 몇 초마다 새 인증 코드를 생성합니다. {% data variables.product.product_name %}에서 “애플리케이션의 6자리 코드 입력” 아래의 필드에 코드를 입력합니다. 
![TOTP 입력 코드 필드](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- else %}
5. “2단계 인증”에서 **앱을 사용하여 설정** 을 선택하고 **계속** 을 클릭합니다.
6. “인증 확인”에서 다음 중 하나를 수행합니다.
    - 모바일 디바이스의 앱으로 QR 코드를 스캔합니다. 스캔하면 앱에 {% data variables.product.product_name %}에 입력할 수 있는 6자리 코드가 표시됩니다.
    - QR 코드를 스캔할 수 없는 경우 **이 텍스트 코드 입력** 을 클릭하여 TOTP 앱에 수동으로 입력할 수 있는 코드를 확인합니다.
    ![이 코드 입력 클릭](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. TOTP 모바일 애플리케이션은 {% data variables.location.product_location %}에 계정을 저장하고 몇 초마다 새 인증 코드를 생성합니다. {% data variables.product.product_name %}에서 “애플리케이션의 6자리 코드 입력” 아래의 필드에 코드를 입력합니다.
![TOTP 입력 코드 필드](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- endif %} {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## 문자 메시지를 사용하여 2단계 인증 구성

TOTP 모바일 앱을 사용하여 인증할 수 없는 경우 SMS 메시지를 사용하여 인증할 수 있습니다. 대체 디바이스에 대한 두 번째 번호를 제공할 수도 있습니다. 기본 디바이스와 복구 코드에 둘 다 액세스할 수 없는 경우 백업 SMS 번호를 통해 계정에 다시 액세스할 수 있습니다.

이 방법을 사용하기 전에 문자 메시지를 받을 수 있는지 확인하세요. 이동 통신 사업자 요금이 부과될 수 있습니다.

{% warning %}

**경고:** 2단계 인증에 SMS 대신 TOTP 애플리케이션을 사용하는 것을 **강력하게 권장합니다**. {% data variables.product.product_name %}는 일부 국가의 휴대폰으로 SMS 메시지 전송을 지원하지 않습니다. 문자 메시지를 통해 인증을 구성하기 전에{% data variables.product.product_name %}가 SMS를 통해 인증을 지원하는 국가 목록을 검토하세요. 자세한 내용은 “[SMS 인증이 지원되는 국가](/articles/countries-where-sms-authentication-is-supported)”를 참조하세요.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. "인증자 앱 설정" 아래에서 **SMS 인증** 을 선택합니다.

  ![2FA SMS 대체 옵션](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. "SMS 인증 설정"에서 국가 코드를 선택하고 지역 코드를 포함하여 휴대폰 번호를 입력합니다. 정보가 올바르면 **인증 코드 보내기** 를 클릭합니다.

  ![2FA SMS 화면](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. 보안 코드가 포함된 텍스트 메시지를 수신합니다. {% data variables.product.product_name %}에서 “휴대폰으로 전송된 6자리 코드 입력” 아래의 필드에 코드를 입력하고 **계속** 을 클릭합니다.

  ![2FA SMS 계속 필드](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## 보안 키를 사용하여 2단계 인증 구성

{% data reusables.two_fa.after-2fa-add-security-key %}

대부분 디바이스 및 브라우저에서는 USB 또는 NFC를 통해 물리적 보안 키를 사용할 수 있습니다. 일부 브라우저는 디바이스에서 지문 판독기, 얼굴 인식 또는 암호/PIN을 보안 키로 사용할 수 있습니다.

보안 키를 사용한 인증은 TOTP 애플리케이션{% ifversion fpt or ghec %} 또는 문자 메시지{% endif %}를 사용한 인증에 대한 보조 수단입니다. 보안 키를 분실한 경우에도 휴대폰의 코드를 사용하여 로그인할 수 있습니다.

1. TOTP 모바일 앱{% ifversion fpt or ghec %} 또는 SMS{% endif %}를 통해 2FA를 이미 구성했을 것입니다.
2. WebAuthn 호환 보안 키를 컴퓨터에 삽입했는지 확인합니다.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. “보안 키” 옆에 있는 **추가** 를 클릭합니다.
  ![보안 키 추가 옵션](/assets/images/help/2fa/add-security-keys-option.png)
6. “보안 키”에서 **새 보안 키 등록** 을 클릭합니다.
  ![새 보안 키 등록](/assets/images/help/2fa/security-key-register.png)
7. 보안 키에 대한 애칭을 입력한 다음 **추가** 를 클릭합니다.
  ![보안 키에 대한 애칭 제공](/assets/images/help/2fa/security-key-nickname.png)
8. 보안 키의 설명서에 따라 보안 키를 활성화합니다.
  ![보안 키 프롬프트](/assets/images/help/2fa/security-key-prompt.png)
9.  복구 코드를 다운로드했으며 복구 코드에 액세스할 수 있는지 확인합니다. 아직 다운로드하지 않았거나 다른 코드 집합을 생성하려는 경우 코드를 다운로드하여 안전한 장소에 저장합니다. 자세한 내용은 "[2FA 복구 코드 다운로드"를 참조하세요.](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_mobile %}을 사용하여 2단계 인증 구성

웹 브라우저에서 {% data variables.product.prodname_dotcom %} 계정에 로그인할 때 2FA에 {% data variables.product.prodname_mobile %}을 사용할 수 있습니다. {% data variables.product.prodname_mobile %}을 사용한 2FA는 TOTP를 사용하지 않고 대신 퍼블릭 키 암호화를 사용하여 계정을 보호합니다.

TOTP 애플리케이션 또는 SMS를 구성한 후에는 {% data variables.product.prodname_mobile %}을 사용하여 인증할 수도 있습니다. 나중에 {% data variables.product.prodname_mobile %}에 더 이상 액세스할 수 없는 경우에도 보안 키 또는 TOTP 애플리케이션을 사용하여 로그인할 수 있습니다.

1. TOTP 모바일 앱 또는 SMS를 통해 2FA를 이미 구성했을 것입니다.
2. [{% data variables.product.prodname_mobile %}](https://github.com/mobile)을 설치합니다.
3. {% data variables.product.prodname_mobile %}에서 {% data variables.product.product_name %} 계정에 로그인합니다.

로그인한 후 이제 디바이스를 2FA에 사용할 수 있습니다.
{% endif %}

## 추가 참고 자료

- “[2단계 인증 정보](/articles/about-two-factor-authentication)”
- “[2단계 인증 복구 방법 구성](/articles/configuring-two-factor-authentication-recovery-methods)”
- “[2단계 인증을 사용하여 {% data variables.product.prodname_dotcom %}에 액세스](/articles/accessing-github-using-two-factor-authentication)”
- “[2FA 자격 증명을 분실한 경우 계정 복구](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”
- "[{% data variables.product.pat_generic %}을(를) 만듭니다](/github/authenticating-to-github/creating-a-personal-access-token)."
