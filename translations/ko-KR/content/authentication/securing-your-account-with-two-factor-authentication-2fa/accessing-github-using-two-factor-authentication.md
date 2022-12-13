---
title: 2단계 인증을 사용하여 GitHub에 액세스
intro: '2FA를 사용하도록 설정하면 {% data variables.product.product_name %}에 로그인할 때 암호뿐만 아니라 2FA 인증 코드를 제공하라는 메시지가 표시됩니다.'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
ms.openlocfilehash: 727e2ce5a1e0292b7f571aa29349e967cb8cd3f3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098462'
---
2단계 인증을 사용하도록 설정하면 브라우저를 통해 {% data variables.product.product_name %}에 액세스할 때 인증 코드를 제공해야 합니다. API 또는 명령줄과 같은 다른 방법을 사용하여 {% data variables.product.product_name %}에 액세스하는 경우 다른 형식의 인증을 사용해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github)”를 참조하세요.

## 웹 사이트에 로그인할 때 2FA 코드 제공

암호를 사용하여 {% data variables.product.product_name %}에 로그인한 후에는 {% ifversion fpt or ghec %}에서 문자 메시지 또는 {% endif %}TOTP 앱에서 인증 코드를 제공하라는 메시지가 표시됩니다.

{% data variables.product.product_name %}는 로그아웃했거나 새 디바이스를 사용 중이거나 세션이 만료된 경우에만 2FA 인증 코드를 다시 제공하도록 요청합니다.

### TOTP 애플리케이션을 통해 코드 생성

스마트폰에서 TOTP 애플리케이션을 사용하여 2단계 인증을 설정하도록 선택한 경우 언제든지 {% data variables.product.product_name %}에 대한 인증 코드를 생성할 수 있습니다. 대부분의 경우 애플리케이션을 시작하면 새 코드가 생성됩니다. 세부 지침은 애플리케이션의 설명서를 참조해야 합니다.

2단계 인증을 구성한 후 모바일 애플리케이션을 삭제하는 경우 계정에 액세스하려면 복구 코드를 제공해야 합니다. 자세한 내용은 “[2단계 인증 자격 증명을 분실한 경우 계정 복구](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”를 참조하세요.

{% ifversion fpt or ghec %}

### 문자 메시지 수신

문자 메시지를 통해 2단계 인증을 설정하는 경우 {% data variables.product.product_name %}에서 인증 코드가 포함된 문자 메시지를 보냅니다.

### {% data variables.product.prodname_mobile %}로 확인

{% data variables.product.prodname_mobile %}을 설치하고 로그인한 경우 {% data variables.product.prodname_mobile %}로 2단계 인증하도록 선택할 수 있습니다.

1. 사용자 이름과 암호를 사용하여 브라우저에서 {% data variables.product.product_name %}에 로그인합니다.
2. 계정에 보안 키를 추가한 경우 먼저 보안 키를 삽입하고 사용하라는 메시지가 표시됩니다. 보안 키 사용을 건너뛰려면 **{% data variables.product.prodname_mobile %}을 사용하여 인증** 을 클릭합니다.
  ![“{% data variables.product.prodname_mobile %}을 사용하여 인증”이 강조 표시된 {% data variables.product.product_name %}에 대한 2단계 인증 과제](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %}는 로그인 시도를 확인하는 푸시 알림을 보냅니다. 푸시 알림을 열거나 {% data variables.product.prodname_mobile %} 앱을 열면 이 로그인 시도를 승인하거나 거부하라는 메시지가 표시됩니다.
  {% note %}

  **참고**: 이 프롬프트를 사용하려면 로그인하는 브라우저 내에 표시되는 두 자리 숫자를 입력해야 할 수 있습니다.

  {% endnote %}

  ![{% data variables.product.prodname_mobile %}에 2자리 입력이 필요한 2단계 인증 과제](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - {% data variables.product.prodname_mobile %}을 사용하여 로그인 시도를 승인하면 브라우저에서 로그인 시도를 자동으로 완료합니다.
    - 로그인 시도를 거부하면 인증이 완료되지 않습니다. 자세한 내용은 “[계정 및 데이터 보안 유지](/authentication/keeping-your-account-and-data-secure)”를 참조하세요.

{% endif %}

## 명령줄에서 2단계 인증 사용

2FA를 사용하도록 설정한 후에는 더 이상 암호를 사용하여 명령줄의 {% data variables.product.product_name %}에 액세스하지 않습니다. 대신 Git 자격 증명 관리자, {% 데이터 variables.product.pat_generic %} 또는 SSH 키를 사용합니다.

### Git 자격 증명 관리자를 사용하여 명령줄에서 인증

[Git 자격 증명 관리자](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md)는 Windows, macOS 및 Linux에서 실행되는 보안 Git 자격 증명 도우미입니다. Git 자격 증명 도우미에 대한 자세한 내용은 Pro Git 설명서에서 [반복 방지](https://git-scm.com/docs/gitcredentials#_avoiding_repetition)를 참조하세요.

설치 지침은 컴퓨터의 운영 체제에 따라 달라집니다. 자세한 내용은 GitCredentialManager/git-credential-manager 리포지토리의 [다운로드 및 설치](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install)를 참조하세요.

### HTTPS를 사용하여 명령줄에서 인증

2FA를 사용하도록 설정한 후에는 HTTPS URL을 사용하여 명령줄에서 {% 데이터 variables.product.product_name %}에 인증할 때 암호로 사용할 {% 데이터 variables.product.pat_generic %}을(를) 만들어야 합니다.

명령줄에서 사용자 이름 및 암호를 묻는 메시지가 표시되면 {% 데이터 variables.product.product_name %} 사용자 이름 및 {% 데이터 variables.product.pat_generic %}을(를) 사용합니다. 명령줄 프롬프트는 암호를 요청할 때 {% 데이터 variables.product.pat_generic %}을(를) 입력하도록 지정하지 않습니다.

자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

### SSH를 사용하여 명령줄에서 인증

2FA를 사용하도록 설정해도 SSH URL을 사용하여 명령줄에서 {% data variables.product.product_name %}에 인증하는 방법은 변경되지 않습니다. SSH 키를 설정하고 사용하는 방법에 대한 자세한 내용은 “[SSH를 사용하여 {% data variables.product.prodname_dotcom %}에 연결](/articles/connecting-to-github-with-ssh/)”을 참조하세요.

## 2단계 인증으로 Subversion을 사용하여 리포지토리에 액세스

Subversion을 통해 리포지토리에 액세스할 때 암호를 입력하는 대신 {% 데이터 variables.product.pat_generic %}을(를) 제공해야 합니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

## 문제 해결

2단계 인증 자격 증명에 대한 액세스 권한이 없어지면 복구 코드 또는 다른 복구 방법(설정한 경우)을 사용하여 계정에 대한 액세스 권한을 다시 얻을 수 있습니다. 자세한 내용은 “[2FA 자격 증명을 분실한 경우 계정 복구](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”를 참조하세요.

인증에 여러 번 실패하는 경우 휴대폰의 시계를 모바일 공급자와 동기화해야 합니다. 종종 자신의 표준 시간대를 제공하는 대신 휴대 전화의 시계에서 “자동으로 설정” 옵션을 확인하는 것을 포함합니다.

## 추가 참고 자료

- “[2단계 인증 정보](/articles/about-two-factor-authentication)”
- “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”
- “[2단계 인증 복구 방법 구성](/articles/configuring-two-factor-authentication-recovery-methods)”
- “[2단계 인증 자격 증명을 분실한 경우 계정 복구](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”
