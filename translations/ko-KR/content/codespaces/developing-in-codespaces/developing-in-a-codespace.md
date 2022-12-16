---
title: codespace에서 개발
intro: '브라우저, {% data variables.product.prodname_vscode %}, JetBrains IDE 또는 명령 셸을 사용하여 codespace에서 작업할 수 있습니다.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: e941373ade8c2f8365e7b654733b7ee029a6a7dd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159071'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## {% data variables.product.prodname_github_codespaces %}를 사용한 개발 정보

선택한 도구를 사용하여 codespace에서 코드를 개발할 수 있습니다. 

* {% data variables.product.prodname_cli %}을(를) 사용하여 시작된 SSH 연결을 통해 명령 셸입니다.
* JetBrains 게이트웨이를 통해 JetBrains IDE 중 하나입니다.
* {% data variables.product.prodname_vscode %} 데스크톱 애플리케이션입니다.
* {% data variables.product.prodname_vscode %}의 브라우저 기반 버전입니다.

{% webui %}

이 문서의 탭을 사용하면 이러한 각 작업 방법에 대한 정보 간에 전환할 수 있습니다. 현재 웹 브라우저 버전의 {% data variables.product.prodname_vscode %}에 대한 탭에 있습니다.

## 브라우저의 codespace에서 작업

브라우저에서 {% data variables.product.prodname_codespaces %}을(를) 사용하면 완전한 기능을 갖춘 개발 환경을 제공합니다. 코드를 편집하고, 디버그하고, Git 명령을 사용하고, 애플리케이션을 실행할 수 있습니다.

![브라우저의 codespace에 대한 주석이 추가된 스크린샷](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %} {% data reusables.codespaces.use-chrome %} 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %} 클라이언트 문제 해결"을 참조하세요.](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

이 문서의 탭을 사용하면 이러한 각 작업 방법에 대한 정보 간에 전환할 수 있습니다. 현재 {% data variables.product.prodname_vscode %}에 대한 탭에 있습니다.

## {% data variables.product.prodname_vscode_shortname %}의 codespace에서 작업

{% data variables.product.prodname_github_codespaces %}는 {% data variables.product.prodname_vscode %}의 전체 개발 경험을 제공합니다. {% data reusables.codespaces.use-visual-studio-features %}

![VS Code의 codespace에 주석이 추가된 스크린샷](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

{% data variables.product.prodname_vscode_shortname %} 사용에 대한 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서에서 [사용자 인터페이스 가이드](https://code.visualstudio.com/docs/getstarted/userinterface)를 참조하세요.

{% data reusables.codespaces.connect-to-codespace-from-vscode %} 

문제 해결 정보는 "[Codespaces 클라이언트 문제 해결"을 참조하세요.](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains %}

이 문서의 탭을 사용하면 이러한 각 작업 방법에 대한 정보 간에 전환할 수 있습니다. 현재 JetBrains IDE 탭에 있습니다.

## JetBrains IDE의 codespace에서 작업

JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %}을 사용하려면 JetBrains Gateway를 이미 설치해야 합니다. JetBrains 게이트웨이 설치에 대한 자세한 내용은 [JetBrains 웹 사이트를 참조하세요](https://www.jetbrains.com/remote-development/gateway/).

선택한 JetBrains IDE를 사용하여 codespace에서 작업할 수 있습니다. codespace를 만든 후 JetBrains Gateway 애플리케이션을 사용하여 원하는 IDE에서 codespace를 열 수 있습니다.

JetBrains IDE를 사용하여 codespace에서 개발하는 동안 코드를 편집하고, 디버그하고, Git 명령을 사용할 수 있습니다. 다양한 JetBrains IDE에 대한 자세한 내용은 [JetBrains 설명서를 참조하세요](https://www.jetbrains.com/help/).

### IntelliJ IDEA 사용자 인터페이스

{% data variables.product.prodname_github_codespaces %} 설명서 내에서 IntelliJ IDEA를 대표적인 JetBrains IDE로 사용합니다. JetBrains IDE에 따라 레이아웃이 다를 수 있습니다.

![JetBrains IntelliJ IDEA의 codespace에 대한 주석이 추가된 스크린샷](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

1. **탐색 모음** - 현재 선택한 파일 또는 디렉터리의 경로를 표시합니다. 탐색 모음 오른쪽에 있는 단추를 사용하여 프로젝트 빌드, 실행 또는 디버깅, Git 명령 실행 등 다양한 작업을 수행하여 변경 내용을 커밋하고 푸시합니다.
2. **프로젝트 도구 창** - 프로젝트의 구조를 보여 줍니다. 그러면 편집기에서 파일을 열 수 있습니다.
3. **{% data variables.product.prodname_github_codespaces %} 도구 창** - 도구 창 왼쪽의 막대에서 {% data variables.product.prodname_github_codespaces %} 플러그 인을 클릭하여 표시됩니다. 표시 이름 및 컴퓨터 유형을 포함하여 codespace에 대한 정보를 표시합니다. 이 도구 창의 맨 위에 있는 단추를 사용하면 다음을 수행할 수 있습니다.
   * codespace 중지 및 연결 끊기
   * "사용자 codespaces" 웹 페이지 표시
   * codespace 만들기 로그 보기
   * 개발 컨테이너 다시 빌드
4. **편집기** - 파일을 편집하는 위치입니다. 탭을 새 창으로 이동하는 등의 옵션에 액세스하려면 파일의 탭을 마우스 오른쪽 단추로 클릭할 수 있습니다.
5. **터미널** - 주 창 아래쪽의 도구 창 표시줄에서 **터미널** 을 클릭하여 표시됩니다(상태 표시줄 바로 위). 통합 터미널을 사용하면 전용 터미널 애플리케이션으로 전환하지 않고도 명령줄 작업을 수행할 수 있습니다.
6. **상태 표시줄** - 상태 표시줄 왼쪽의 아이콘을 마우스로 가리키면 도구 목록이 표시됩니다. 아이콘을 클릭하여 도구 창 막대를 숨기거나 표시합니다. 상태 표시줄의 오른쪽에는 현재 Git 분기를 포함하여 프로젝트에 대한 정보가 표시됩니다.

IntelliJ IDEA 사용자 인터페이스에 대한 자세한 내용은 [IntelliJ IDEA용 JetBrains 설명서를 참조하세요](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html).

### 리포지토리에 대한 codespace 사용자 지정

리포지토리에 대한 개발 컨테이너 구성을 만들거나 업데이트하여 리포지토리에 대해 만들어진 codespace를 사용자 지정할 수 있습니다. codespace 내에서 이 작업을 수행할 수 있습니다. 개발 컨테이너 구성을 변경한 후 codespace에 대한 Docker 컨테이너를 다시 빌드하여 현재 codespace에 변경 내용을 적용할 수 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

### codespace 맞춤화

[dotfiles](https://dotfiles.github.io/tutorials/) 리포지토리를 사용하여 만든 모든 codespace에 대한 codespace 환경의 측면을 개인 설정할 수 있습니다. 자세한 내용은 “[계정에 대한 {% data variables.product.prodname_github_codespaces %} 개인 설정](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)”을 참조하세요.

### 변경 내용 커밋

codespace를 변경한 후 새 코드 또는 구성 변경 내용을 커밋하고 푸시할 수 있습니다. 리포지토리에 변경 내용을 푸시하면 이 리포지토리에서 codespace를 만드는 다른 모든 사용자가 동일한 구성을 갖도록 합니다. 즉, 리포지토리에 대해 만든 codespace의 구성을 수정하기 위해 수행하는 모든 사용자 지정을 리포지토리를 사용하는 모든 사용자가 사용할 수 있습니다.

자세한 내용은 “[codespace에서 소스 제어 사용](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes)”을 참조하세요.

## 추가 정보

* "[JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
* "[JetBrains에 {% data variables.product.prodname_github_codespaces %} 플러그 인 사용](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)"
* "[{% data variables.product.prodname_github_codespaces %} 클라이언트 문제 해결](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)"

{% endjetbrains %}

{% cli %}

이 문서의 탭을 사용하면 이러한 각 작업 방법에 대한 정보 간에 전환할 수 있습니다. 현재 {% data variables.product.prodname_cli %}에 대한 탭에 있습니다.

## 명령 셸의 codespace에서 작업

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}을(를) 사용하여 새 codespace를 만들거나 기존 codespace를 시작한 다음 SSH를 시작할 수 있습니다. 연결되면 기본 명령줄 도구를 사용하여 명령줄에서 작업할 수 있습니다.

{% data variables.product.prodname_cli %}을(를) 설치하고 {% data variables.product.prodname_dotcom %} 계정으로 인증한 후 명령을 `gh codespace [<SUBCOMMAND>...] --help` 사용하여 도움말 정보를 찾아볼 수 있습니다. 또는 에서 [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace)동일한 참조 정보를 볼 수 있습니다.

자세한 내용은 "[GitHub CLI에서 {% data variables.product.prodname_github_codespaces %} 사용"을](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli) 참조하세요.

{% endcli %}
