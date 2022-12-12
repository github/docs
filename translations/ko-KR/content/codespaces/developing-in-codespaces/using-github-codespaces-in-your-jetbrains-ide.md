---
title: JetBrains IDE에서 GitHub Codespaces 사용
shortTitle: JetBrains IDEs
intro: JetBrains 게이트웨이를 사용하여 codespace에 연결하고 즐겨 찾는 JetBrains IDE에서 작업할 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160158'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## JetBrains IDE의 {% data variables.product.prodname_codespaces %} 정보

JetBrains IDE를 사용하여 코드 작업을 수행하는 경우 codespace에서 작업을 활용할 수 있습니다. JetBrains 게이트웨이 애플리케이션을 사용하여 이 작업을 수행합니다.

JetBrains 게이트웨이를 설치한 후 JetBrains를 기본 편집기로 설정한 다음 {% data variables.product.prodname_dotcom_the_website %}에서 codespace를 열 때마다 JetBrains 게이트웨이가 시작되어 JetBrains IDE를 선택하고 codespace에 연결할 수 있습니다.

{% note %}

**참고**: JetBrains 게이트웨이에서는 기존 codespace만 사용할 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}에서 또는 {% data variables.product.prodname_cli %}를 사용하여 codespace를 만들 수 있습니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

{% endnote %}

### JetBrains 원격 개발 연결 프로세스

JetBrains IDE에서 codespace를 사용하는 기본 프로세스는 다음과 같습니다.

* JetBrains 게이트웨이 애플리케이션에서 활성 또는 중지된 codespace 중 하나를 선택합니다. 
* 그런 다음 사용할 JetBrains IDE를 선택합니다. 
* 선택한 JetBrains IDE는 codespace 및 소스 코드를 호스트하는 원격 가상 머신에 다운로드됩니다.
* 그런 다음 JetBrains 씬 클라이언트 애플리케이션이 로컬 머신에 다운로드되어 시작됩니다.
* 클라이언트 애플리케이션은 전체 백 엔드 IDE에 연결합니다.
* 로컬 환경에서와 동일한 방식으로 클라이언트 애플리케이션에서 코드를 작업할 수 있습니다.

## 필수 구성 요소

JetBrains IDE의 codespace에서 작업하려면 다음이 필요합니다.

* 유효한 JetBrains 라이선스
* JetBrains 게이트웨이 애플리케이션
* {% data variables.product.prodname_cli %} 버전 2.18.0 이상 
* SSH 서버를 실행하는 기존 codespace

### JetBrains 라이선스

JetBrains 게이트웨이에서 codespace에 연결하려면 지원되는 JetBrains IDE 중 하나 이상에 대한 라이선스가 있어야 합니다.

### JetBrains 게이트웨이

JetBrains 도구 상자 애플리케이션에서 JetBrains 게이트웨이를 설치하고 업데이트할 수 있습니다.

1. [JetBrains 도구 상자를](https://www.jetbrains.com/toolbox-app) 다운로드하여 설치합니다.
1. JetBrains 도구 상자를 엽니다.
1. 사용 가능한 도구 목록에서 **게이트웨이** 를 찾고 **설치** 를 클릭합니다.

   ![JetBrains 도구 상자의 스크린샷](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

JetBrains 게이트웨이에 대한 {% data variables.product.prodname_github_codespaces %} 플러그 인을 사용하려면 JetBrains 게이트웨이에서 codespace를 열기 전에 {% data variables.product.prodname_cli %} 버전 2.18.0 이상을 설치하고 구성해야 합니다.

이 명령을 사용하여 {% data variables.product.prodname_cli %}의 버전을 확인합니다.

```shell{:copy}
gh --version
```

자세한 내용은 "[GitHub CLI 정보"를](/github-cli/github-cli/about-github-cli) 참조하세요.

### SSH 서버를 실행하는 Codespace

연결할 기존 codespace가 있어야 합니다. {% data reusables.codespaces.ways-to-create-a-codespace %} 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

{% data reusables.codespaces.ssh-server-installed %}

파일 및 기본 컨테이너 이미지에 `devcontainer.json` 대한 자세한 내용은 "[개발 컨테이너 소개"를 참조하세요.](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)

{% note %}

**참고**: SSH를 통해 codespace에 연결하는 데 도움이 필요한 경우 "[{% 데이터 variables.product.prodname_github_codespaces %} 클라이언트 문제 해결"을 참조하세요](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues).

{% endnote %}

## JetBrains 게이트웨이 설정

{% data variables.product.prodname_github_codespaces %}에 JetBrains Gateway를 처음 사용할 때는 {% data variables.product.prodname_codespaces %} 플러그 인을 설치해야 합니다. 또한 JetBrains 게이트웨이가 {% data variables.product.prodname_dotcom %} 계정을 사용하여 {% data variables.product.prodname_dotcom_the_website %}에 액세스하도록 허용해야 합니다. 

1. JetBrains 게이트웨이 애플리케이션을 엽니다.
1. **추가 공급자 설치** 에서 {% data variables.product.prodname_github_codespaces %}에 대한 **설치** 링크를 클릭합니다.

   ![JetBrains 게이트웨이 초기 보기의 스크린샷](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. **Codespace에 연결을** 클릭합니다.

   !['Codespace에 연결' 단추가 있는 게이트웨이의 스크린샷](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. "JetBrains 게이트웨이 시작" 대화 상자 **에서 {% data variables.product.prodname_dotcom %}로 로그인** 을 클릭합니다.

   ![로그인 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. 일회성 코드 옆에 있는 아이콘을 클릭하여 복사한 다음 로그인 링크를 클릭합니다.

   ![일회성 로그인 코드 스크린샷](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. 현재 {% data variables.product.prodname_dotcom %}에 로그인하지 않은 경우 로그인 페이지가 표시됩니다. 
   * 세부 정보를 입력하고 **로그인** 을 클릭합니다.
   * 예를 들어 2단계 인증 코드를 입력하여 인증을 확인합니다.
1. "디바이스 활성화" 페이지에서 복사한 코드를 붙여넣고 **계속** 을 클릭합니다.
1. 조직에 속한 경우 "조직에 대한 Single Sign-On" 페이지가 표시됩니다. JetBrains 게이트웨이에 액세스할 권한을 부여하려는 **조직 옆에 있는** 권한 부여를 클릭한 다음 **계속** 을 클릭합니다.
1. "JetBrains에 대한 {% data variables.product.prodname_github_codespaces %} 권한 부여" 페이지에서 **권한 부여 {% data variables.product.prodname_dotcom %}** 을 클릭합니다.
1. JetBrains Gateway 애플리케이션으로 돌아가 현재 활성 또는 중지된 codespace 목록에서 codespace를 엽니다. 다음 절차의 3단계를 참조하세요.

## JetBrains IDE에서 codespace 열기

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   codespace에 처음 연결할 때 백 엔드 IDE가 원격 머신에 다운로드됩니다. 몇 분이 걸릴 수 있습니다. 다음에 동일한 codespace에 연결할 때 이 단계는 필요하지 않으므로 연결 프로세스가 더 빨라질 수 있습니다. 

   그런 다음 백 엔드 IDE가 시작됩니다. 다시 말하지만, 실행 중인 백 엔드 IDE에 다시 연결하는 경우 이 단계는 나중에 필요하지 않습니다. 
   
   그런 다음 클라이언트 애플리케이션이 시작됩니다.

## 추가 정보

- "[codespace에서 개발](/codespaces/developing-in-codespaces/developing-in-a-codespace) 중"
- "[JetBrains에 {% data variables.product.prodname_github_codespaces %} 플러그 인 사용](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)"
- "[{% data variables.product.prodname_copilot %}에서 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"
- "[{% data variables.product.prodname_github_codespaces %} 클라이언트 문제 해결](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)"
