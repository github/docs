---
title: GitHub Desktop 설치
shortTitle: Installation
intro: GitHub Desktop은 지원되는 Windows 또는 macOS 운영 체제에 설치할 수 있습니다.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882781'
---
## {% data variables.product.prodname_desktop %} 설치 정보

현재 {% data variables.desktop.mac-osx-versions %} 및 {% data variables.desktop.windows-versions %}를 포함하는 지원되는 운영 체제에 {% data variables.product.prodname_desktop %}을 설치할 수 있습니다. {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에 계정이 있는 경우 계정을 {% data variables.product.prodname_desktop %}에 연결할 수 있습니다. 계정을 만드는 방법에 대한 자세한 내용은 “[새 {% data variables.product.prodname_dotcom %} 계정에 가입](/articles/signing-up-for-a-new-github-account/)”을 참조하거나 {% data variables.product.prodname_enterprise %} 사이트 관리자에게 문의하세요.

{% windows %}

네트워크 관리자는 그룹 정책 또는 다른 원격 설치 시스템과 함께 Windows Installer 패키지 파일(`.msi`)을 사용하여 Active Directory 관리형 네트워크에서 Windows를 실행하는 컴퓨터에 {% data variables.product.prodname_desktop %}을 배포할 수 있습니다.

Windows Installer 패키지는 독립형 설치 프로그램(`.exe`)을 추출하고 다음에 사용자가 워크스테이션에 로그인할 때 {% data variables.product.prodname_desktop %}을 설치하도록 Windows를 구성합니다. 사용자는 사용자 디렉터리에 {% data variables.product.prodname_desktop %}을 설치할 수 있는 권한이 있어야 합니다.

사용자가 {% data variables.product.prodname_desktop %}에 대한 Windows Installer 패키지를 직접 실행하는 경우 설치를 완료하려면 워크스테이션에서 로그아웃한 다음 다시 로그인해야 합니다.

{% endwindows %}

## {% data variables.product.prodname_desktop %} 다운로드 및 설치

{% mac %}

{% data variables.desktop.mac-osx-versions %}에 {% data variables.product.prodname_desktop %}을 설치할 수 있습니다.

{% data reusables.desktop.download-desktop-page %}
2. **macOS용 다운로드** 를 클릭합니다.
  ![macOS용 다운로드 단추](/assets/images/help/desktop/download-for-mac.png)
3. 컴퓨터의 `Downloads` 폴더에서 **{% data variables.product.prodname_desktop %}** Zip 파일을 두 번 클릭합니다.
  ![GitHubDesktop.zip 파일](/assets/images/help/desktop/mac-zipfile.png)
4. 파일의 압축을 푼 후 **{% data variables.product.prodname_desktop %}** 을 두 번 클릭합니다.
5. 설치가 완료되면 {% data variables.product.prodname_desktop %}이 시작됩니다.

{% endmac %}

{% windows %}

{% data variables.desktop.windows-versions %}에 {% data variables.product.prodname_desktop %}을 설치할 수 있습니다.

{% warning %}

**경고**: {% data variables.product.prodname_desktop %}을 실행하려면 64비트 운영 체제가 있어야 합니다.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. **Windows용 다운로드** 를 클릭합니다.
  ![Windows 다운로드 단추](/assets/images/help/desktop/download-for-windows.png)
3. 컴퓨터의 `Downloads` 폴더에서 **{% data variables.product.prodname_desktop %}** 설정 파일을 두 번 클릭합니다.
  ![GitHubDesktopSetup 파일](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. 설치가 완료되면 {% data variables.product.prodname_desktop %}이 시작됩니다.

{% endwindows %}
