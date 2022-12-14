---
title: sudo 모드
intro: '잠재적으로 중요한 작업을 수행하기 전에 계정에 대한 액세스를 확인하려면 {% 데이터 variables.location.product_location %}에서 인증을 요청합니다.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
ms.openlocfilehash: 4d83334dacc831876292c6a488bb7021de4a57a5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097938'
---
## sudo 모드 정보

{% 데이터 variables.location.product_location %}에 대해 잠재적으로 중요한 작업을 수행할 때 계정의 보안을 유지하려면 이미 로그인한 경우에도 인증해야 합니다. 예를 들어 {% data variables.product.company_short %}는 각 작업을 통해 새 사용자 또는 시스템이 계정에 액세스할 수 있으므로 다음 작업을 중요하게 간주합니다.

- 연결된 메일 주소 수정
- 타사 애플리케이션의 권한 부여
- 새 SSH 키 추가

중요한 작업을 수행하도록 인증하면 세션이 일시적으로 “sudo 모드”로 전환됩니다. sudo 모드에서는 인증 없이 중요한 작업을 수행할 수 있습니다. {% data variables.product.product_name %}은(는) 몇 시간 동안 기다렸다가 인증을 다시 요청합니다. 이 시간 동안 수행하는 중요한 작업은 타이머를 다시 설정합니다.

{% ifversion ghes %}

{% note %}

**참고**: {% 데이터 variables.location.product_location %}이(가) CAS 또는 SAML SSO와 같은 외부 인증 방법을 사용하는 경우 sudo 모드로 전환하라는 메시지가 표시되지 않습니다. 자세한 내용은 사이트 관리자에게 문의하세요.

{% endnote %}

{% endif %}

“sudo”는 Unix 시스템의 프로그램에 대한 참조로, 이름은 “**su** peruser **do**”의 약어입니다. 자세한 내용은 Wikipedia에서 “[sudo](https://wikipedia.org/wiki/Sudo)”를 참조하세요.

## sudo 모드에 대한 액세스 확인

sudo 모드에 대한 액세스를 확인하려면 {% ifversion totp-and-mobile-sudo-challenge %}can{% else %}must{% endif %} 인증을 암호로 합니다.{% ifversion totp-and-mobile-sudo-challenge %} 필요에 따라 {% ifversion fpt or ghec %}보안 키, {% data variables.product.prodname_mobile %} 또는 2FA 코드{% elsif ghes %}보안 키 또는 2FA 코드보안 키 또는 2FA 코드{% endif %}와 같은 다른 인증 방법을 사용할 수 있습니다.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [보안 키를 사용하여 액세스 확인](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [GitHub Mobile을 사용하여 액세스 확인](#confirming-access-using-github-mobile) {%- endif %}
- [2FA 코드를 사용하여 액세스 확인](#confirming-access-using-a-2fa-code)
- [암호를 사용하여 액세스 확인](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### 보안 키를 사용하여 액세스 확인

보안 키를 사용하여 계정에 대해 2FA(2단계 인증)를 구성하여 보안 키를 사용하여 sudo 모드에 대한 계정에 대한 액세스를 확인해야 합니다. 자세한 내용은 “[2단계 인증 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”을 참조하세요.

sudo 모드에 대해 인증하라는 메시지가 표시되면 **보안 키 사용** 을 클릭한 다음, 프롬프트를 따릅니다.

![sudo 모드에 대한 보안 키 옵션의 스크린샷](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### {% data variables.product.prodname_mobile %}을 사용하여 액세스 확인

앱을 사용하여 sudo 모드에 대한 계정에 대한 액세스를 확인하려면 {% data variables.product.prodname_mobile %}을 설치하고 로그인해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)”을 참조하세요.

1. sudo 모드에 대해 인증하라는 메시지가 표시되면 **GitHub Mobile 사용** 을 클릭합니다.

   ![sudo 모드에 대한 {% data variables.product.prodname_mobile %} 옵션의 스크린샷](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. {% data variables.product.prodname_mobile %}을 엽니다. {% 데이터 variables.product.prodname_mobile %}은(는) 요청을 승인하기 위해 {% 데이터 variables.location.product_location %}에 입력해야 하는 숫자를 표시합니다.

   ![{% data variables.product.prodname_mobile %}에서 {% data variables.product.product_name %}에 입력하여 sudo 모드 액세스를 승인하는 숫자 스크린샷](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. {% data variables.product.product_name %}에서 {% data variables.product.prodname_mobile %}에 표시된 숫자를 입력합니다.

{% endif %}

### 2FA 코드를 사용하여 액세스 확인

2FA 코드를 사용하여 sudo 모드에 대한 계정에 대한 액세스를 확인하려면 TOTP 모바일 앱{% ifversion fpt or ghec %} 또는 문자 메시지{% endif %}를 사용하여 2FA를 구성해야 합니다. 자세한 내용은 “[2단계 인증 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)”을 참조하세요.

sudo 모드를 인증하라는 메시지가 표시되면 TOTP 모바일 앱{% ifversion fpt or ghec %} 또는 문자 메시지{% endif %}에서 인증 코드를 입력한 다음, **확인** 을 클릭합니다.

![sudo 모드에 대한 2FA 코드 프롬프트 스크린샷](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### 암호를 사용하여 액세스 확인

{% endif %}

sudo 모드에 대해 인증하라는 메시지가 표시되면 암호를 입력한 다음, **확인** 을 클릭합니다.

![sudo 모드에 대한 암호 프롬프트 스크린샷](/assets/images/help/settings/sudo_mode_prompt_password.png)
