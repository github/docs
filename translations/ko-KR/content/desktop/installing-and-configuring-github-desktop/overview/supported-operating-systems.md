---
title: 지원되는 운영 체제
intro: '지원되는 모든 운영 체제에 {% data variables.product.prodname_desktop %}을 설치할 수 있습니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  fpt: '*'
shortTitle: Supported OS
ms.openlocfilehash: 13e148ccf8e254c4e40f9e20ad6c5af083e21d8c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117276'
---
## 지원되는 운영 체제 정보

{% data variables.product.prodname_desktop %}를 지원하는 운영 체제는 다음과 같습니다.
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. {% data variables.product.prodname_desktop %}을 실행하려면 64비트 운영 체제가 있어야 합니다.

## macOS의 문제 해결
macOS에서 {% data variables.product.prodname_desktop %}을 사용하는 데 문제가 발생하는 경우 시도해 볼 해결 방법은 다음과 같습니다. 자세한 내용은 [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md)를 참조하세요.

### 계정에 로그인한 후 `The username or passphrase you entered is not correct` 오류 발생

이 오류는 {% data variables.product.prodname_desktop %}이 키체인에 저장된 자격 증명에 액세스할 수 없는 경우 발생할 수 있습니다.

이 오류를 해결하려면 다음 단계를 수행합니다.

1. “Keychain Access”(키체인 접근) 앱을 엽니다.
2. **login**(로그인)을 마우스 오른쪽 단추로 클릭한 다음 **Lock Keychain “login”** (키체인 “로그인” 잠금)을 클릭합니다.
  ![Lock Keychain “login”(키체인 “로그인” 잠금) 옵션](/assets/images/help/desktop/mac-lock-keychain.png)
3. **login**(로그인)을 마우스 오른쪽 단추로 클릭한 다음 **Unlock Keychain “login”** (키체인 “로그인” 잠금 해제)을 클릭합니다. 모든 화면 프롬프트에 따라 Keychain “login”(키체인 “로그인”) 잠금 해제를 완료합니다.
  !["키 집합 "로그인" 잠금 해제" 옵션](/assets/images/help/desktop/mac-unlock-keychain.png)
4. {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에서 계정을 다시 인증합니다.

### 업데이트를 확인한 후 `Could not create temporary directory: Permission denied` 오류 발생

이 오류는 `~/Library/Caches/com.github.GitHubClient.ShipIt` 디렉터리에 대한 사용 권한이 누락되어 발생할 수 있습니다. {% data variables.product.prodname_desktop %}은 이 디렉터리를 사용하여 애플리케이션 업데이트의 일부로 임시 파일을 만들고 압축을 풉니다.

이 오류를 해결하려면 다음 단계를 수행합니다.

1. {% data variables.product.prodname_desktop %}을 닫습니다.
2. “Finder”를 열고 `~/Library/Caches/`로 이동합니다.
3. `com.github.GitHubClient.ShipIt`를 마우스 오른쪽 단추로 클릭한 다음 **Get Info**(정보 가져오기)를 클릭합니다.
4. “Sharing & Permissions”(공유 및 사용 권한)의 왼쪽에 있는 화살표를 클릭합니다.
5. 사용자 계정 오른쪽에 있는 권한이 “Read & Write”(읽기 및 쓰기)가 아닌 경우 텍스트를 클릭한 다음 **Read & Write**(읽기 및 쓰기)를 클릭합니다.
  ![“Sharing & Permissions”(공유 및 사용 권한) 옵션](/assets/images/help/desktop/mac-adjust-permissions.png)
6. {% data variables.product.prodname_desktop %}을 열고 업데이트를 확인합니다.

## Windows의 문제 해결
Windows에서 {% data variables.product.prodname_desktop %}을 사용하는 데 문제가 발생하는 경우 시도해 볼 해결 방법은 다음과 같습니다. 자세한 내용은 [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md)를 참조하세요.

### `The revocation function was unable to check revocation for the certificate.`개 오류

이 오류는 회사 네트워크에서 Windows가 인증서 해지 상태를 검사하지 못하도록 차단하는 {% data variables.product.prodname_desktop %} 을 사용하는 경우 발생할 수 있습니다.

문제를 해결하려면 시스템 관리자에게 문의하세요.

### 폴더 리디렉션으로 구성된 리포지토리를 복제하는 동안 `git clone failed` 오류 발생

{% data variables.product.prodname_desktop %}은 폴더 리디렉션으로 구성된 리포지토리를 지원하지 않습니다.

### `cygheap base mismatch detected`개 오류

이 오류는 필수 ASLR이 사용하도록 설정되면 발생할 수 있습니다. 필수 ASLR을 사용하도록 설정하면 프로세스 포크를 에뮬레이트하기 위해 {% data variables.product.prodname_desktop %}이 의존하는 MSYS2 코어 라이브러리에 영향을 줍니다.

이 오류를 해결하려면 필수 ASLR을 사용하지 않도록 설정하거나 MSYS2에 종속된 `<Git>\usr\bin` 아래의 모든 실행 파일을 명시적으로 허용합니다.
