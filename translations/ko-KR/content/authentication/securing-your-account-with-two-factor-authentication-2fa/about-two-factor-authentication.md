---
title: 2단계 인증 사용 정보
intro: '{% data reusables.two_fa.about-2fa %} 2FA를 사용하면 사용자 이름 및 암호로 로그인하고 자신만 알고 있거나 액세스할 수 있는 다른 형태의 인증을 제공해야 합니다.'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
ms.openlocfilehash: 21ccfaa2490592d8350c8abd831f3d3fe7e33041
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098925'
---
{% data variables.product.product_name %}의 경우 두 번째 인증 형식은 모바일 디바이스의 애플리케이션에서 생성하거나{% ifversion fpt or ghec %} 문자 메시지(SMS){% endif %}로 전송되는 코드입니다. 2FA를 사용하도록 설정한 후 {% 데이터 variables.product.product_name %}은(는) 누군가가 {% 데이터 variables.location.product_location %}에서 계정에 로그인하려고 할 때마다 인증 코드를 생성합니다. 해당 사용자가 계정에 로그인할 수 있는 유일한 방법은 암호를 알고 있고 휴대폰에서 인증 코드에 액세스할 수 있는 경우입니다.

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %} 보안 키 외에도 TOTP 모바일 앱 또는 문자 메시지를 구성한 후 2FA에 {% data variables.product.prodname_mobile %}를 사용할 수도 있습니다. {% data variables.product.prodname_mobile %}은 퍼블릭 키 암호화를 사용하여 계정을 보호하므로 {% data variables.product.prodname_mobile %}에 로그인하는 데 사용한 모바일 디바이스를 두 번째 요소로 사용할 수 있습니다.
{% endif %}

2단계 인증 자격 증명에 대한 액세스 권한이 손실될 경우 추가 복구 방법을 구성할 수도 있습니다. 2FA 설정에 대한 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication)” 및 “[2단계 인증 복구 방법 구성](/articles/configuring-two-factor-authentication-recovery-methods)”을 참조하세요.

{% data variables.product.product_name %}뿐만 아니라 2FA를 지원하는 다른 웹 사이트 및 앱에서 계정의 안전을 위해 2FA를 사용하도록 설정하는 것이 **매우** 좋습니다. 2FA를 사용하여 {% data variables.product.product_name %} 및 {% data variables.product.prodname_desktop %}에 액세스할 수 있습니다.

자세한 내용은 “[2단계 인증을 사용하여 {% data variables.product.prodname_dotcom %}에 액세스](/articles/accessing-github-using-two-factor-authentication)”를 참조하세요.

## 2단계 인증 복구 코드

{% data reusables.two_fa.about-recovery-codes %} 자세한 내용은 “[2FA 자격 증명을 분실한 경우 계정 복구](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”를 참조하세요.

{% ifversion fpt or ghec %}

{% warning %}

**경고**: {% data reusables.two_fa.support-may-not-help %} 자세한 내용은 “[2FA 자격 증명을 분실한 경우 계정 복구](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”를 참조하세요.

{% endwarning %}

{% endif %}

## 조직에서 2단계 인증 요구

조직 소유자는 조직 구성원{% ifversion fpt or ghec %}, 청구 관리자,{% endif %} 및 외부 협력자가 2단계 인증을 사용하여 개인 계정을 보호하도록 요구할 수 있습니다. 자세한 내용은 “[조직에서 2단계 인증 필요](/articles/requiring-two-factor-authentication-in-your-organization)”를 참조하세요.

{% data reusables.two_fa.auth_methods_2fa %}
