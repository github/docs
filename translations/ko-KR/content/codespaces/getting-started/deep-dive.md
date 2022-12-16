---
title: '{% data variables.product.prodname_github_codespaces %}에 대한 심층 분석'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: '{% data variables.product.prodname_github_codespaces %}의 작동 방식을 이해합니다.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 01e4f3990cc47f61678811f7c4a77b86626fd8a5
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188266'
---
{% data variables.product.prodname_github_codespaces %}는 컨테이너를 사용하여 개발용 공용 언어, 도구, 유틸리티를 제공하는 즉각적인 클라우드 기반 개발 환경입니다. {% data variables.product.prodname_github_codespaces %}도 구성할 수 있으므로 프로젝트에 대한 사용자 지정된 개발 환경을 만들 수 있습니다. 프로젝트에 대한 사용자 지정 개발 환경을 구성하면 프로젝트의 모든 사용자에 대해 반복 가능한 codespace 구성을 사용할 수 있습니다.

## codespace 만들기

codespace를 만드는 진입점은 여러 가지가 있습니다.

- {% data variables.product.company_short %} 템플릿 또는 {% data variables.product.prodname_dotcom_the_website %}의 템플릿 리포지토리에서 새 프로젝트를 시작합니다.
- 새 기능 작업을 위해 리포지토리의 분기에서
- 열려 있는 끌어오기 요청에서 진행 중인 작업 탐색
- 리포지토리 기록의 커밋에서 특정 시점의 버그 조사

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
코드를 테스트해야 하거나 장기 실행 기능 작업을 수행하기 위해 동일한 codespace로 돌아갈 수 있는 경우 codespace의 유효 기간이 짧을 수 있습니다. 

자세한 내용은 "[리포지토리에 대한 codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)", "[템플릿에서 codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)" 및 "[기존 codespace 열기](/codespaces/developing-in-codespaces/opening-an-existing-codespace)"를 참조하세요.

{% note %}

**참고**: 리포지토리당 또는 분기당 둘 이상의 codespace를 만들 수 있습니다. 그러나 만들 수 있는 codespace 수와 동시에 실행할 수 있는 codespace의 수에는 제한이 있습니다. 코드스페이스 최대 수에 도달하고 다른 코드스페이스를 만들려고 하면 기존 코드스페이스를 제거해야 새 코드스페이스를 만들 수 있다는 메시지가 표시됩니다.

{% endnote %}

### codespace 만들기 프로세스

codespace를 만들 때 codespace를 사용할 수 있기 전에 백그라운드에서 다양한 단계가 발생합니다.

### 1단계: VM 및 스토리지가 codespace에 할당

codespace를 만들 때 템플릿에서 codespace를 만드는 경우 단순 [복제본](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) 은 리포지토리 또는 템플릿 리포지토리로 만들어집니다. 리포지토리는 전용 및 프라이빗인 Linux 가상 머신에 복제됩니다. 전용 VM이 있으면 해당 컴퓨터의 전체 컴퓨팅 리소스 집합을 사용할 수 있습니다. 필요하다면 이를 통해 컨테이너에 대한 전체 루트 액세스 권한을 사용할 수도 있습니다.

### 2단계: 새 컨테이너가 만들어짐

{% data variables.product.prodname_github_codespaces %}은(는) 컨테이너를 개발 환경으로 사용합니다. 이 컨테이너는 파일에서 `devcontainer.json` 정의할 수 있는 구성과 필요에 따라 Dockerfile을 기반으로 만들어집니다. {% data variables.product.company_short %}의 빈 템플릿 또는 파일이 없는 `devcontainer.json` 리포지토리에서 codespace를 만드는 경우 {% data variables.product.prodname_github_codespaces %}은 사용 가능한 언어 및 런타임이 많은 기본 이미지를 사용합니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요. 기본 이미지에 포함된 내용에 대한 자세한 내용은 리포지토리를 [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) 참조하세요.

{% note %}

**참고:** codespace에서 Git 후크를 사용하고 [git 템플릿 디렉터리](https://git-scm.com/docs/git-init#_template_directory)의 모든 내용을 codespace에 적용하려면 컨테이너를 만든 후 4단계에서 후크를 설정해야 합니다.

컨테이너를 만들기 전에 리포지토리가 호스트 VM에 복제되므로 4단계에서 `postCreateCommand`를 사용하여 `devcontainer.json` 구성 파일에 후크를 설정하지 않는 한 [git 템플릿 디렉터리](https://git-scm.com/docs/git-init#_template_directory)의 모든 내용은 codespace에 적용되지 않습니다. 자세한 내용은 “[4단계: 만들기 후 설정](#step-4-post-creation-setup)”을 참조하세요.

{% endnote %}

### 3단계: codespace에 연결

컨테이너가 만들어지고 다른 초기화가 실행되면 codespace에 연결됩니다. 다음을 사용하여 연결할 수 있습니다.

* 웹 브라우저
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [A JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### 4단계: 만들기 후 설정

codespace에 연결되면 파일에 지정된 구성에 따라 자동화된 설정이 계속 빌드될 `devcontainer.json` 수 있습니다. `postCreateCommand`와 `postAttachCommand`가 실행되는 것을 볼 수도 있습니다.

codespace에서 Git 후크를 사용하려면 와 같은 `postCreateCommand`수[명 주기 스크립트를`devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) 사용하여 후크를 설정합니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 [`devcontainer.json` 참조](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)를 참조하세요.

{% data variables.product.prodname_github_codespaces %}에 대한 퍼블릭 dot 파일 리포지토리가 있는 경우 새 codespace에서 사용하도록 설정할 수 있습니다. 사용하도록 설정하면 dot 파일이 컨테이너에 복제되고 설치 스크립트가 호출됩니다. 자세한 내용은 “[계정에 대한 {% data variables.product.prodname_github_codespaces %} 개인 설정](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)”을 참조하세요. 

마지막으로 리포지토리에서 codespace를 만든 경우 리포지토리의 전체 기록이 전체 복제본으로 복사됩니다. 템플릿에서 codespace를 만든 경우 템플릿 리포지토리의 전체 기록은 유지되지 않습니다. 대신 빈 템플릿을 사용하지 않는 한 템플릿 리포지토리의 콘텐츠에 대한 초기 커밋으로 시작합니다.

만들기 후 설정하는 동안에도 통합 터미널을 사용하고 파일을 편집할 수 있지만 작업과 실행 중인 명령 간의 경합 상태를 피하기 위해 주의해야 합니다.
## {% data variables.product.prodname_codespaces %} 수명 주기

### codespace에 파일 저장

사용 중인 편집기에서 변경 내용을 일반적인 방식으로 저장합니다.

{% data variables.product.prodname_vscode %}의 codespace에서 작업하는 경우 [자동 저장](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) 을 사용하도록 설정하여 변경 내용이 항상 저장되도록 할 수 있습니다. 

### codespace 닫기 또는 중지

codespace는 사용하는 동안 계속 실행되지만 비활성 기간 후에는 시간이 초과됩니다. 편집기 및 터미널 출력의 파일 변경 내용은 활동으로 계산되므로 터미널 출력이 계속되는 경우 codespace는 시간 초과되지 않습니다. 기본 비활성 시간 제한 기간은 30분입니다. 만든 codespace에 대한 개인 시간 제한 설정을 정의할 수 있지만 조직 시간 제한 정책에 의해 재정의될 수 있습니다. 자세한 내용은 “[Codespaces에 대한 시간 제한 기간 설정](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)”을 참조하세요. 

codespace 시간이 초과되면 실행이 중지되지만 브라우저 탭(브라우저에서 codespace를 사용하는 경우), {% data variables.product.prodname_vscode_shortname %} 내 또는 의 codespace 목록에서 다시 시작할 수 있습니다 [https://github.com/codespaces](https://github.com/codespaces).

codespace를 중지하려면 다음을 수행할 수 있습니다.

* 브라우저에서: 의 codespace 목록에서 중지하려는 codespace [https://github.com/codespaces](https://github.com/codespaces)의 오른쪽에 있는 줄임표(**...**)를 클릭하고 **codespace 중지** 를 클릭합니다.
* {% data variables.product.prodname_vscode_shortname %}에서 [{% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) 를 엽니다. 예를 들어 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (Windows/Linux) 또는 <kbd>Shift</kbd>+<kbd>명령</kbd>+<kbd>P</kbd> (Mac) `Codespaces: stop` 를 눌러 <kbd>Enter</kbd> 키를 누릅니다.
* JetBrains 클라이언트에서 {% data variables.product.prodname_github_codespaces %} 도구 창 맨 위에 있는 중지 단추를 클릭합니다. 자세한 내용은 "[Codespace 중지 및 시작](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)"의 "JetBrains IDE" 탭을 참조하세요.
* 터미널 창에서 {% data variables.product.prodname_cli %} 명령을 `gh codespace stop`사용합니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}와 함께 {% data variables.product.prodname_cli %} 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces).

중지 명령을 실행하지 않고(예: 브라우저 탭을 닫음) codespace를 종료하거나 상호 작용 없이 codespace를 실행 상태로 두면 codespace 및 실행 중인 프로세스가 비활성 시간 제한 기간 동안 계속됩니다. 

codespace를 닫거나 중지하면 codespace에 다시 연결할 때까지 커밋되지 않은 모든 변경 내용이 유지됩니다.

## 애플리케이션 실행

포트 전달은 codespace 내에서 실행 중인 TCP 포트에 대한 액세스 권한을 제공합니다. 예를 들어 codespace 내의 포트 4000에서 웹 애플리케이션을 실행하는 경우 해당 포트를 자동으로 전달하여 브라우저에서 애플리케이션에 액세스할 수 있도록 할 수 있습니다.

포트 전달은 원격 컴퓨터에서 액세스할 수 있는 포트를 결정합니다. 포트를 전달하지 않더라도 해당 포트는 codespace 자체 내에서 실행 중인 다른 프로세스에서 계속 액세스할 수 있습니다.

![codespace에서 포트 전달이 작동하는 방식을 보여 주는 다이어그램](/assets/images/help/codespaces/port-forwarding.png)

{% data variables.product.prodname_github_codespaces %} 내에서 실행되는 애플리케이션이 콘솔에 포트를 출력하면 {% data variables.product.prodname_github_codespaces %}는 localhost URL 패턴을 검색하고 포트를 자동으로 전달합니다. 터미널의 URL 또는 {% data variables.product.prodname_vscode_shortname %}의 오른쪽 아래 모서리에 나타나는 "알림" 알림 메시지의 링크를 클릭하여 브라우저에서 포트를 열 수 있습니다. 기본적으로 {% data variables.product.prodname_github_codespaces %}는 HTTP를 사용하여 포트를 전달합니다. 포트 전달에 대한 자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요.

포트는 자동으로 전달될 수 있지만 인터넷에 공개적으로 액세스할 수는 없습니다. 기본적으로 모든 포트는 공개되지 않지만 수동으로 조직에서 사용하도록 하거나 공개한 다음 URL을 통해 액세스를 공유할 수 있습니다. 자세한 내용은 “[포트 공유](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)”를 참조하세요.

codespace를 처음 사용할 때 애플리케이션을 실행하면 빠른 내부 개발 루프를 만들 수 있습니다. 편집할 때 변경 내용이 자동으로 저장되고 이를 전달된 포트에서 사용할 수 있습니다. 변경 내용을 보려면 브라우저에서 실행 중인 애플리케이션 탭으로 돌아가서 새로 고칩니다.

## 변경 내용 커밋 및 푸시

Git은 기본적으로 codespace에 설치되므로 기존 Git 워크플로를 사용할 수 있습니다. 터미널을 통해 또는 {% data variables.product.prodname_vscode_shortname %} 또는 JetBrains의 소스 제어 기능을 사용하여 codespace에서 Git로 작업할 수 있습니다.

기존 리포지토리로 작업하는 경우 리포지토리의 모든 분기, 커밋 또는 끌어오기 요청에서 codespace를 만들거나 활성 codespace 내에서 새 분기 또는 기존 분기로 전환할 수 있습니다. {% data variables.product.prodname_github_codespaces %}는 유효 기간이 짧도록 설계되었으므로 이를 격리된 환경으로 사용하여 실험하거나 팀 동료의 끌어오기 요청을 확인하거나 병합 충돌을 수정할 수 있습니다.

템플릿에서 만든 codespace에서 작업하는 경우 Git은 기본적으로 설치되지만 작업을 지속하고 다른 사용자와 공유하려면 codespace를 원격 리포지토리에 게시해야 합니다. {% data variables.product.company_short %}의 빈 템플릿에서 시작하는 경우 먼저 작업 영역을 Git 리포지토리로 초기화해야 합니다(예: 를 입력 `git init`하여 ). codespace 내에서 소스 제어 사용을 시작해야 합니다.

자세한 내용은 “[codespace에서 소스 제어 사용](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)”을 참조하세요.

{% note %}

**참고:** codespace의 커밋은 https://github.com/settings/profile 에 구성된 이름과 퍼블릭 이메일에서 나온 것입니다. 리포지토리로 범위가 지정된 토큰으로 환경에 `GITHUB_TOKEN`으로 포함되며 GitHub 자격 증명이 인증하는 데 사용됩니다.

{% endnote %}

## 확장 또는 플러그 인을 사용하여 codespace 개인 설정

codespace 내에 플러그 인 및 확장을 추가하여 각각 JetBrains 및 {% data variables.product.prodname_vscode_shortname %}에서 환경을 개인 설정할 수 있습니다.

### {% data variables.product.prodname_vscode_shortname %} 확장

{% data variables.product.prodname_vscode_shortname %} 데스크톱 애플리케이션 또는 웹 클라이언트의 codespace에서 작업하는 경우 {% data variables.product.prodname_vscode_marketplace %}에서 필요한 확장을 추가할 수 있습니다. {% data variables.product.prodname_github_codespaces %}에서 확장이 실행되는 방법에 대한 자세한 내용은 { [% data variables.product.prodname_vscode_shortname %} 설명서의 원격 개발 지원 및 {% 데이터 variables.product.prodname_github_codespaces %}](https://code.visualstudio.com/api/advanced-topics/remote-extensions) 를 참조하세요. 

{% data variables.product.prodname_vscode_shortname %}을(를) 이미 사용하고 있는 경우 [설정 동기화](https://code.visualstudio.com/docs/editor/settings-sync) 를 사용하여 로컬 인스턴스와 사용자가 만든 모든 codespace 간에 확장, 설정, 테마 및 바로 가기 키를 자동으로 동기화할 수 있습니다.

### JetBrains 플러그 인

JetBrains IDE의 codespace에서 작업하는 경우 JetBrains Marketplace에서 플러그 인을 추가할 수 있습니다.

1. **JetBrains 클라이언트** 를 클릭한 다음 **기본 설정을** 클릭합니다.
1. 기본 설정 대화 상자에서 **호스트의 플러그 인** 을 클릭하여 원격으로 실행되는 전체 JetBrains IDE에 플러그 인을 설치하거나 **플러그 인** 을 클릭하여 로컬 클라이언트에 플러그 인을 설치합니다(예: 사용자 인터페이스 테마 변경). 
1. **Marketplace** 탭을 클릭합니다.

   !['호스트의 플러그 인'에 대한 Marketplace 탭의 스크린샷](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. 필수 플러그 인 옆에 있는 **설치** 를 클릭합니다.

## 추가 정보

- "[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
- "[조직에서 {% data variables.product.prodname_github_codespaces %}의 비용 관리](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
- "[리포지토리에 개발 컨테이너 구성 추가](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)"
- "[codespace 수명 주기](/codespaces/getting-started/the-codespace-lifecycle)"
