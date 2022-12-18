---
title: GitHub 액세스 자격 증명 업데이트
intro: '{% data variables.product.product_name %} 자격 증명에는{% ifversion not ghae %} 암호뿐만 아니라{% endif %} 액세스 토큰, SSH 키, {% data variables.product.product_name %}과 통신하는 데 사용하는 애플리케이션 API 토큰이 포함됩니다. 필요한 경우 이러한 모든 액세스 자격 증명을 직접 다시 설정할 수 있습니다.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
ms.openlocfilehash: 34817cbaabea47815bfa2a8f26001cd9c46aadc9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098279'
---
{% ifversion not ghae %}
## 새 암호 요청

1. 새 암호를 요청하려면 {% ifversion fpt or ghec %} https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}을 방문하세요.
2. {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에 계정과 연결된 전자 메일 주소를 입력한 다음 **암호 재설정 전자 메일 보내기** 를 클릭합니다. 이메일을 구성한 경우 이메일이 백업 이메일 주소로 발송됩니다.
  ![암호 재설정 이메일 요청 대화 상자](/assets/images/help/settings/password-recovery-email-request.png)
3. 암호를 재설정할 수 있는 링크를 이메일로 보내드립니다. 이메일을 받은 후 3시간 이내에 이 링크를 클릭해야 합니다. 이메일을 받지 못했다면 스팸 폴더를 확인하세요.
4. 2단계 인증을 사용하도록 설정한 경우 2FA 자격 증명을 묻는 메시지가 표시됩니다. {% ifversion fpt or ghec %}
   * {% data variables.product.prodname_mobile %}이 있는 경우 ID를 확인하기 위한 푸시 알림이 전송됩니다. 푸시 알림 또는 {% data variables.product.prodname_mobile %} 앱을 열고 브라우저의 암호 재설정 페이지에 표시된 두 자리 코드를 입력합니다.
   ![2단계 {% data variables.product.prodname_mobile %} 인증 프롬프트](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * GitHub Mobile을 사용하여 확인을 건너뛰려면 **2단계 인증 또는 복구 코드 입력** 을 클릭합니다.
      ![“2단계 인증 또는 복구 코드 입력”이 강조 표시된 {% data variables.product.product_name %}의 2단계 GitHub Mobile 인증 프롬프트](/assets/images/help/2fa/2fa-github-mobile-password-reset.png) {% endif %}
   * 인증 코드 또는 복구 코드 중 하나를 입력하고 **확인** 을 클릭합니다.
      ![2단계 인증 프롬프트](/assets/images/help/2fa/2fa-password-reset.png)
     * 계정에 보안 키를 추가한 경우 인증 코드를 입력하는 대신 **보안 키 사용** 을 클릭합니다.
     {% ifversion fpt or ghec %}
     * [{% data variables.product.prodname_mobile %}](https://github.com/mobile)을 설정한 경우 대신 **GitHub Mobile에서 인증** 을 클릭합니다.
     {% endif %}
5. 새 암호를 입력하고 새 암호를 확인한 다음 **암호 변경** 을 클릭합니다. 강력한 암호를 만드는 방법에 대한 도움말은 "[강력한 암호 만들기](/articles/creating-a-strong-password)"를 참조하세요.
  {% ifversion fpt or ghec %}![암호 복구 상자](/assets/images/help/settings/password-recovery-page.png){% else %} ![암호 복구 상자](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

나중에 암호를 분실하지 않으려면 [LastPass](https://lastpass.com/) 또는 [1Password](https://1password.com/)와 같은 보안 암호 관리자를 사용하는 것이 좋습니다.

{% endtip %}

## 기존 암호 변경

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} ~ {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
4. "암호 변경"에서 이전 암호와 강력한 새 암호를 입력하고 새 암호를 확인합니다. 강력한 암호를 만드는 방법에 대한 도움말은 "[강력한 암호 만들기](/articles/creating-a-strong-password)"를 참조하세요.
5. **암호 업데이트** 를 클릭합니다.

{% tip %}

보안을 강화하려면 암호를 변경하는 것 외에 2단계 인증을 사용하도록 설정합니다. 자세한 내용은 [2단계 인증 정보](/articles/about-two-factor-authentication)를 참조하세요.

{% endtip %} {% endif %}
## 액세스 토큰 업데이트

액세스 토큰 검토 및 삭제에 대한 지침은 "[권한 있는 통합 검토](/articles/reviewing-your-authorized-integrations)"를 참조하세요. 새 액세스 토큰을 생성하려면 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

{% ifversion not ghae %}

계정 암호를 재설정한 후 {% data variables.product.prodname_mobile %} 앱에서 로그아웃을 트리거하려는 경우 "GitHub iOS" 또는 "GitHub Android" OAuth 앱의 권한 부여를 취소할 수 있습니다. 그러면 계정과 연결된 {% data variables.product.prodname_mobile %} 앱의 모든 인스턴스가 로그아웃됩니다. 자세한 내용은 "[권한 있는 통합 검토](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)"를 참조하세요.

{% endif %}

## SSH 키 업데이트

SSH 키 검토 및 삭제에 대한 지침은 "[SSH 키 검토](/articles/reviewing-your-ssh-keys)"를 참조하세요. 새 SSH 키를 생성하고 추가하려면 "[SSH 키 생성](/articles/generating-an-ssh-key)"을 참조하세요.

## API 토큰 다시 설정

{% data variables.product.product_name %}에 등록된 애플리케이션이 있는 경우 해당 OAuth 토큰을 다시 설정해야 합니다. 자세한 내용은 "[권한 부여 다시 설정](/rest/reference/apps#reset-an-authorization)" 엔드포인트를 참조하세요.

{% ifversion not ghae %}
## 무단 액세스 방지

계정 보호 및 무단 액세스 방지에 대한 자세한 팁은 "[무단 액세스 방지](/articles/preventing-unauthorized-access)"를 참조하세요.
{% endif %}
