---
title: 2FA 자격 증명이 손실된 경우 계정 복구
intro: 2단계 인증 자격 증명에 대한 액세스 권한이 없어지면 복구 코드 또는 다른 복구 옵션을 사용하여 계정에 대한 액세스 권한을 다시 얻을 수 있습니다.
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recover an account with 2FA
ms.openlocfilehash: 94993cb3d22419a4d2de9405852768d77b2c7b36
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097937'
---
{% ifversion fpt or ghec %}

{% warning %}

**경고**: 

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## 2단계 인증 복구 코드 사용

복구 코드 중 하나를 사용하여 계정에 자동으로 다시 들어갈 수 있습니다. 복구 코드를 암호 관리자 또는 컴퓨터의 다운로드 폴더에 저장했을 수 있습니다. 복구 코드의 기본 파일 이름은 `github-recovery-codes.txt`입니다. 복구 코드에 대한 자세한 내용은 “[2단계 인증 복구 방법 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)”을 참조하세요.

1. 사용자 이름 및 암호를 입력하면 인증 메시지가 표시됩니다.

    {% warning %}

    **경고**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}

{% ifversion fpt or ghec %}
1. “문제가 있나요?”에서 **복구 코드 사용 또는 초기화 요청** 을 클릭합니다.

   ![복구 코드 사용 링크 스크린샷](/assets/images/help/2fa/2fa-recovery-code-link.png) {%- else %}
1. 2FA 페이지의 “휴대폰이 없나요?”에서 **2단계 복구 코드 입력** 을 클릭합니다.

   ![복구 코드를 사용하는 링크의 스크린샷](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. 복구 코드 중 하나를 입력한 다음 **확인** 을 클릭합니다.

   ![복구 코드 입력 필드 및 확인 단추](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## 다른 번호로 인증

기본 TOTP 앱 또는 전화 번호에 액세스할 수 없는 경우 대체 번호로 전송된 2단계 인증 코드를 입력하여 계정에 대한 액세스 권한을 자동으로 다시 얻을 수 있습니다.
{% endif %}

## 보안 키로 인증

보안 키를 사용하는 2단계 인증을 구성한 경우 보안 키를 보조 인증 수단으로 사용하여 계정에 대한 액세스 권한을 자동으로 다시 얻을 수 있습니다. 자세한 내용은 “[2단계 인증 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”을 참조하세요.

{% ifversion fpt or ghec %}
## 확인된 디바이스, SSH 토큰 또는 {% 데이터 variables.product.pat_generic %}을(를) 사용하여 인증

{% 데이터 variables.location.product_location %}에 대한 암호를 알고 있지만 2단계 인증 자격 증명 또는 2단계 인증 복구 코드가 없는 경우 확인된 전자 메일 주소로 일회용 암호를 전송하여 확인 프로세스를 시작하고 계정에 대한 액세스 권한을 다시 얻을 수 있습니다.

{% note %}

**참고**: 보안상의 이유로 일회성 암호로 인증하여 계정에 대한 액세스 권한을 다시 획득하는 데는 영업일 기준 최대 3일이 소요될 수 있습니다. {% data variables.product.company_short %}는 이 시간 동안 제출된 추가 요청을 검토하지 않습니다.

{% endnote %}

2단계 인증 자격 증명 또는 2단계 인증 복구 코드를 사용하여 3-5일 대기 기간 동안 언제든지 계정에 대한 액세스 권한을 다시 얻을 수 있습니다.

1. 사용자 이름 및 암호를 입력하면 인증 메시지가 표시됩니다.

    {% warning %}

    **경고**: {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}
1. “문제가 있나요?”에서 **복구 코드 사용 또는 초기화 요청** 을 클릭합니다.

   ![2fa 디바이스 또는 복구 코드가 없는 경우 링크 스크린샷](/assets/images/help/2fa/no-access-link.png)
1. “액세스가 차단되었나요?” 오른쪽에서 **계정 복구 시도** 를 클릭합니다.

   ![계정 복구를 시도하는 링크의 스크린샷](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. **이해했습니다. 시작하기** 를 클릭하여 인증 설정 초기화를 요청합니다.

    ![인증 설정 초기화 시작 단추 스크린샷](/assets/images/help/2fa/reset-auth-settings.png)
1. **일회성 암호 전송** 를 클릭하여 계정과 연결된 모든 적격 주소로 일회성 암호를 전송합니다. 확인된 메일로만 계정을 복구할 수 있습니다. 암호 재설정을 기본 및/또는 백업 주소로 제한한 경우 해당 주소로만 계정을 복구할 수 있습니다.

   ![일회성 암호 전송 단추의 스크린샷](/assets/images/help/2fa/send-one-time-password.png)
1. “일회성 암호”에서 전송한 복구 메일 {% data variables.product.prodname_dotcom %}의 임시 암호를 입력합니다.

   ![일회용 암호를 입력하는 필드의 스크린샷](/assets/images/help/2fa/one-time-password-field.png)
1. **메일 주소 확인** 을 클릭합니다.

   ![메일 주소 확인 단추의 스크린샷](/assets/images/help/2fa/verify-email-address.png)
1. 대체 확인 요소를 선택합니다.
    - 이전에 현재 디바이스를 사용하여 이 계정에 로그인한 적이 있으며 해당 디바이스를 통해 인증하려는 경우 **이 디바이스로 확인** 을 클릭합니다.
    - 이전에 해당 계정에 SSH 키를 설정했으며 SSH 키를 사용하여 인증하려는 경우 **SSH 키** 를 클릭합니다.
    - 이전에 {% 데이터 variables.product.pat_generic %}을(를) 설정했으며 확인에 {% 데이터 variables.product.pat_generic %}을(를) 사용하려는 경우 **{% 데이터 variables.product.pat_generic_caps %}** 을(를) 클릭합니다.

   ![대체 인증 단추 스크린샷](/assets/images/help/2fa/alt-verifications.png)
1. {% data variables.contact.github_support %} 구성원이 영업일 기준 3일 이내에 요청을 검토하고 메일을 보내드립니다. 요청이 승인되면 계정 복구 프로세스를 완료하는 링크가 전송됩니다. 요청이 거부되면 메일에 추가 질문과 함께 고객 지원팀에 문의하는 방법이 포함됩니다.

{% endif %}
