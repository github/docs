---
title: GitHub에서 인증 받기
shortTitle: Authentication
intro: '{% data variables.product.prodname_dotcom %}에 대해 인증하여 {% data variables.product.prodname_desktop %}에서 계정의 리소스에 안전하게 액세스할 수 있습니다.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
  - /desktop/installing-and-configuring-github-desktop/authenticating-to-github
versions:
  fpt: '*'
ms.openlocfilehash: 96a0277b6a921e103a73dd35e14495b51e9aaede
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094459'
---
## 인증 정보

계정을 안전하게 유지하기 위해, {% data variables.product.prodname_desktop %}을 사용하여 {% data variables.product.prodname_dotcom %}의 리소스에 액세스하려면 먼저 인증해야 합니다.

인증하기 전에 {% data reusables.desktop.get-an-account %}

{% mac %}

## {% data variables.product.prodname_dotcom %}에서 계정 인증

{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %}
3. “{% data variables.product.prodname_dotcom_the_website %}”의 오른쪽에서 **로그인** 을 클릭합니다.
  ![GitHub에 대한 로그인 단추](/assets/images/help/desktop/mac-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}


{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. {% data variables.product.prodname_dotcom %}가 계정을 인증한 후 프롬프트에 따라 {% data variables.product.prodname_desktop %}으로 돌아갑니다.

## {% data variables.product.prodname_ghe_server %}에서 계정 인증


{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. {% 데이터 variables.location.product_location_enterprise %}에 계정을 추가하려면 "엔터프라이즈 주소" 아래에 인스턴스의 URL을 입력한 다음 **계속** 을 클릭합니다.
  ![GitHub Enterprise 로그인 단추](/assets/images/help/desktop/mac-sign-in-button-enterprise.png) {% data reusables.desktop.sign-in-browser %}
1. {% 데이터 variables.location.product_location_enterprise %} 계정에 인증하려면 계정 자격 증명을 입력하고 **로그인** 을 클릭합니다.
  ![브라우저의 {% data variables.product.prodname_ghe_server %} 로그인 단추](/assets/images/help/desktop/enterprise-sign-in-button-browser.png)

  또는 {% 데이터 variables.location.product_location_enterprise %} 계정에 이미 로그인한 경우 프롬프트에 따라 {% 데이터 variables.product.prodname_desktop %}로 돌아가 인증을 완료합니다. 

{% endmac %}

{% windows %}

## {% data variables.product.prodname_dotcom %}에서 계정 인증

{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %}
3. “GitHub.com” 오른쪽에서 **로그인** 을 클릭합니다.
  ![GitHub에 대한 로그인 단추](/assets/images/help/desktop/windows-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}

  {% data reusables.user-settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. {% data variables.product.prodname_dotcom %}가 계정을 인증한 후 프롬프트에 따라 {% data variables.product.prodname_desktop %}으로 돌아갑니다.

## {% data variables.product.prodname_enterprise %}에서 계정 인증


{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. {% data variables.product.prodname_enterprise %} 계정을 추가하려면 “엔터프라이즈 주소”에 자격 증명을 입력한 다음, **계속** 을 클릭합니다.
  ![GitHub Enterprise 로그인 단추](/assets/images/help/desktop/windows-sign-in-button-enterprise.png) {% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

## 인증 문제 해결

{% data variables.product.prodname_desktop %}에 인증 오류가 발생하면 오류 메시지를 사용하여 문제를 해결할 수 있습니다.

인증 오류가 발생하면 먼저 {% data variables.product.prodname_desktop %}에서 로그아웃하고 계정에 다시 로그인해 보세요.

일부 오류의 경우 {% data variables.product.prodname_desktop %}에 오류 메시지가 표시됩니다. 메시지가 표시되지 않거나 오류에 대한 자세한 정보를 확인하려면 다음 단계에 따라 {% data variables.product.prodname_desktop %} 로그 파일을 확인합니다.

{% mac %}

1. **도움말** 드롭다운 메뉴에서 **Finder에 로그 표시** 를 클릭합니다.
  ![Finder에 로그 표시 단추](/assets/images/help/desktop/mac-show-logs.png)
2. 인증 오류가 발생한 날짜에서 로그 파일을 선택합니다.

{% endmac %}

{% windows %}

1. **도움말** 드롭다운 메뉴에서 **탐색기에 로그 표시** 를 클릭합니다.
  ![탐색기에 로그 표시 단추](/assets/images/help/desktop/windows-show-logs.png)
2. 인증 오류가 발생한 날짜에서 로그 파일을 선택합니다.

{% endwindows %}

오류 메시지가 나타나는 경우 아래의 문제 해결 정보를 검토하세요.

### 잘못된 자격 증명

```shell
Error: Bad credentials
```

이 오류는 저장된 계정 자격 증명에 문제가 있음을 의미합니다.

문제를 해결하려면 {% data variables.product.prodname_desktop %}에서 로그아웃한 다음 다시 로그인합니다.

### 빈 토큰

```shell
info: [ui] [AppStore.withAuthenticatingUser] account found for repository: node - USERNAME (empty token)
```

이 오류는 {% data variables.product.prodname_desktop %}이 시스템 키체인에서 만든 액세스 토큰을 찾을 수 없음을 의미합니다.

문제를 해결하려면 {% data variables.product.prodname_desktop %}에서 로그아웃한 다음 다시 로그인합니다.

### 리포지토리를 찾을 수 없음

```shell
fatal: repository 'https://github.com/<user>/<repo>.git' not found

(The error was parsed as 8: The repository does not seem to exist anymore. You may not have access, or it may have been deleted or renamed.)
```

이 오류는 복제하려는 리포지토리에 액세스할 수 있는 권한이 없음을 의미합니다.

문제를 해결하려면 권한을 관리하는 조직 내 담당자에게 문의하세요.

### 원격 리포지토리에서 읽을 수 없음

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

이 오류는 유효한 SSH 키가 설정되어 있지 않음을 의미합니다.

문제를 해결하려면 “[새 SSH 키 생성 및 SSH 에이전트에 추가](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요.

### 복제 실패

```shell
fatal: clone of 'git@github.com:<user>/<repo>' into submodule path '<path>' failed
Failed to clone 'src/github.com/<user>/<repo>'. Retry scheduled
Cloning into '<path>'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

이 오류는 복제하려는 리포지토리에 액세스 권한이 없거나 유효한 SSH 키가 설정되어 있지 않은 하위 모듈이 있음을 의미합니다.

하위 모듈에 액세스할 수 없는 경우 리포지토리에 대한 액세스 권한을 관리하는 담당자에게 문의하여 문제를 해결합니다.

유효한 SSH 키가 설정되어 있지 않은 경우 “[새 SSH 키 생성 및 SSH 에이전트에 추가](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”를 참조하세요.

{% windows %}

### AskPass 응답을 읽을 수 없음

```shell
error: unable to read askpass response from '/Users/<path>/GitHub Desktop.app/Contents/Resources/app/static/ask-pass-trampoline.sh'
fatal: could not read Username for 'https://github.com': terminal prompts disabled
```

이 오류는 다양한 이벤트로 인해 발생할 수 있습니다.

`Command Processor` 레지스트리 항목이 수정되면 {% data variables.product.prodname_desktop %}에서 `Authentication failed` 오류가 발생합니다. 레지스트리 항목이 수정되었는지 확인하려면 다음 단계를 수행합니다.

1. 레지스트리 편집기(`regedit.exe`)를 열고 다음 위치로 이동합니다.
  `HKEY_CURRENT_USER\Software\Microsoft\Command Processor\`
  `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. 둘 중 한 위치에 `Autorun` 값이 있는지 확인합니다.
3. `Autorun` 값이 있는 경우 삭제합니다.

Windows 사용자 이름에 확장 유니코드 문자가 있는 경우 AskPass 응답 오류가 발생할 수 있습니다. 문제를 해결하려면 새 Windows 사용자 계정을 만들고 파일을 해당 계정으로 마이그레이션합니다. 자세한 내용은 Microsoft 설명서의 “[Windows에 사용자 계정 만들기](https://support.microsoft.com/en-us/help/13951/windows-create-user-account)”를 참조하세요.

{% endwindows %}

## 추가 참고 자료
- “[GitHub에 대한 인증 정보](/github/authenticating-to-github/about-authentication-to-github)”
