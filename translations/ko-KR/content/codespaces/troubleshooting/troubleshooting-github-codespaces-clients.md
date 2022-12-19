---
title: GitHub Codespaces 클라이언트 문제 해결
shortTitle: Codespaces clients
intro: '이 문서에서는 {% data variables.product.prodname_github_codespaces %}에 사용하는 클라이언트에서 발생할 수 있는 문제에 대한 문제 해결 정보를 제공합니다.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
ms.openlocfilehash: 35bd9dd859612307c1f9e49ea8ed9771e4f5efcd
ms.sourcegitcommit: bf4e3590ab71b0a1bfa8d74b00183f63193acbbf
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186173'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## {% data variables.product.prodname_vscode %} 웹 클라이언트 문제 해결

Chromium 기반이 아닌 브라우저에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 데 문제가 발생하는 경우 Google Chrome 또는 Microsoft Edge와 같은 Chromium 기반 브라우저로 전환해 보세요. 또는 또는 와 같이 [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari)브라우저 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) 이름으로 레이블이 지정된 문제를 검색하여 리포지토리에서 브라우저의 알려진 문제를 확인합니다.

Chromium 기반 브라우저에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 데 문제가 발생하는 경우 리포지토리에서 {% data variables.product.prodname_vscode_shortname %}에 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) 또 다른 알려진 문제가 발생하는지 확인할 수 있습니다.

### 로컬로 {% data variables.product.prodname_vscode_shortname %}에서 작업하는 경우의 차이점

브라우저에서 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트를 사용하여 codespace를 열면 {% data variables.product.prodname_vscode_shortname %} 데스크톱 애플리케이션의 로컬 작업 영역에서 작업하는 경우와 몇 가지 차이점이 있습니다. 예를 들어 일부 키 바인딩은 다르거나 누락되며 일부 확장은 다르게 동작할 수 있습니다. 요약은 {% data variables.product.prodname_vscode_shortname %} 문서의 "[알려진 제한 사항 및 적응](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)"을 참조하세요.

리포지토리의 {% data variables.product.prodname_vscode_shortname %} 환경에서 알려진 문제를 확인하고 새 문제를 기록할 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 수 있습니다.

### {% data variables.product.prodname_vscode %} 참가자

{% data variables.product.prodname_vscode %} 참가자는 {% data variables.product.prodname_vscode_shortname %}의 가장 빈번한 릴리스입니다. 모든 최신 기능 및 버그 수정 사항이 있지만 때때로 빌드가 중단되는 새로운 문제가 포함될 수도 있습니다.

참가자 빌드를 사용하고 손상된 동작을 발견한 경우 {% data variables.product.prodname_vscode %}를 Stable로 전환하고 다시 시도하는 것이 좋습니다.

편집기 왼쪽 아래에서 {% octicon "gear" aria-label="The manage icon" %}을 클릭하고 **안정적인 버전으로 전환...을** 선택합니다. {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트가 로드되지 않거나 {% octicon "gear" aria-label="The manage icon" %} 아이콘을 사용할 수 없는 경우 codespace URL에 추가하고 `?vscodeChannel=stable` 해당 URL에 codespace를 로드하여 {% data variables.product.prodname_vscode %} 안정으로 강제로 전환할 수 있습니다.

{% data variables.product.prodname_vscode %} 안정에서 문제가 해결되지 않으면 알려진 문제를 확인하고 필요한 경우 리포지토리에서 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) {% data variables.product.prodname_vscode_shortname %} 환경에 새 문제를 기록합니다.

{% endwebui %}

{% vscode %}

## {% data variables.product.prodname_vscode_shortname %} 문제 해결

{% data variables.product.prodname_vscode_shortname %} 데스크톱 애플리케이션에서 codespace를 열면 로컬 작업 영역에서 작업하는 것과 비교할 때 몇 가지 차이점이 있을 수 있지만 환경은 비슷해야 합니다.

문제가 발생하면 리포지토리의 {% data variables.product.prodname_vscode_shortname %} 환경에서 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) 알려진 문제를 확인하고 새 문제를 기록할 수 있습니다.

### {% data variables.product.prodname_vscode %} 참가자

{% data variables.product.prodname_vscode %} 참가자는 {% data variables.product.prodname_vscode_shortname %}의 가장 빈번한 릴리스입니다. 모든 최신 기능 및 버그 수정 사항이 있지만 때때로 빌드가 중단되는 새로운 문제가 포함될 수도 있습니다.

참가자 빌드를 사용하고 손상된 동작을 발견한 경우 {% data variables.product.prodname_vscode %}를 Stable로 전환하고 다시 시도하는 것이 좋습니다.

{% data variables.product.prodname_vscode %} 안정으로 전환하려면 {% data variables.product.prodname_vscode %} 참가자 애플리케이션을 닫고 {% data variables.product.prodname_vscode %} 안정적인 애플리케이션을 열고 codespace를 다시 엽니다.

{% data variables.product.prodname_vscode %} 안정에서 문제가 해결되지 않으면 알려진 문제를 확인하고 필요한 경우 리포지토리에서 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) {% data variables.product.prodname_vscode_shortname %} 환경에 새 문제를 기록합니다.

{% endvscode %}

{% jetbrains %}

## JetBrains IDE 문제 해결

### 성능 문제

JetBrains IDE를 실행하려면 코어가 4개 이상인 {% 데이터 variables.product.prodname_github_codespaces %} 컴퓨터 유형을 사용하는 것이 좋습니다. 자세한 내용은 “[codespace에 대한 머신 유형 변경](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)”을 참조하세요.

코어가 4개 이상인 컴퓨터를 사용 중이고 JetBrains에서 발생하는 성능이 약간 느려지는 경우 최대 Java 힙 크기를 늘려야 할 수 있습니다. 

최대 힙 크기를 원격 호스트 RAM의 2862MiB(3GB)에서 60% 사이로 설정하는 것이 좋습니다.

다음은 코드베이스의 크기와 애플리케이션을 실행하는 데 필요한 메모리에 따라 조정할 수 있는 몇 가지 지침을 초기 시작 지점으로 제공합니다. 예를 들어 크거나 복잡한 코드베이스가 있는 경우 힙 크기를 더 늘려야 할 수 있습니다. 더 큰 애플리케이션이 있는 경우 애플리케이션에 더 많은 메모리를 허용하도록 더 낮은 힙 크기를 설정할 수 있습니다.

| 머신 형식   | 최대 힙 크기 |
| -------------- | ----------------- |
| 4 코어         | 3GB              |
| 8 코어         | 4GB              |
| 코어 16개 또는 32개 | 8GB              |

1. 탐색 모음 왼쪽의 애플리케이션 창 위쪽에서 codespace의 이름을 클릭합니다.

   ![JetBrains의 리소스 단추 스크린샷](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. 성능 탭에서 CPU 로드 및 메모리 세부 정보를 확인합니다. 이는 컴퓨터가 오버로드되었는지 여부를 나타냅니다.
 
   ![JetBrains의 Localhost 단추 스크린샷](/assets/images/help/codespaces/jetbrains-performance.png)

1. 설정 탭을 클릭하고 힙 크기를 편집하여 codespace에 사용 가능한 메모리의 60% 이하로 늘립니다.

   ![최대 힙 크기 설정의 스크린샷](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. **저장 및 다시 시작을** 클릭합니다.

### MacOS Ventura에서 클라이언트를 열 수 없습니다. 

MacOS Ventura에서 JetBrains 게이트웨이에서 codespace에 처음으로 연결하려고 하면 JetBrains 클라이언트 애플리케이션이 "손상되어 열 수 없습니다"라는 메시지가 표시될 수 있습니다.

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

이 경우 다음을 수행합니다.

1. **취소** 를 클릭하여 이 메시지를 해제합니다.
1. 화면 왼쪽 위에 있는 Apple 아이콘을 클릭하고 **시스템 설정을** 클릭합니다. 
1. **개인 정보 & 보안을** 클릭하고 "보안" 섹션까지 아래로 스크롤합니다.

   ![개인 정보 & 보안 대화 상자의 스크린샷](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   JetBrains 클라이언트의 사용이 차단되었다는 메시지가 표시됩니다. 

1. **어쨌든 열기** 를 클릭하여 인식된 애플리케이션에 JetBrains 클라이언트를 추가합니다. 
   메시지가 다시 표시되지만 이번에는 **열기** 단추가 표시됩니다.

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. **취소** 를 다시 클릭합니다.
1. JetBrains 게이트웨이 애플리케이션에 돌아가기 필요한 codespace에 다시 연결합니다.
   이제 JetBrains 클라이언트가 성공적으로 열립니다. Mac에서 실행하도록 클라이언트 애플리케이션에 권한을 부여한 후에는 나중에 codespace에 연결할 때 메시지가 표시되지 않습니다.

### SSH 연결 문제

codespace에서 실행되는 SSH 서버를 통해 연결하려면 디렉터리(MacOS 및 Linux) 또는 `%HOMEPATH%\.ssh` 디렉터리(Windows)에 `~/.ssh` 이미 {% data variables.product.prodname_dotcom %} 계정에 추가된 SSH 키가 있어야 합니다. 이 디렉터리에 키가 없으면 {% data variables.product.prodname_cli %}에서 키를 생성합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 새 SSH 키 추가](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui)”를 참조하세요.

키 유효성 검사에 문제가 발생하는 경우 {% data variables.product.prodname_cli %}의 버전을 업그레이드해 보세요. 자세한 내용은 {% data variables.product.prodname_cli %}에 대한 추가 정보에서 [업그레이드 지침을](https://github.com/cli/cli#installation) 참조하세요.

### JetBrains IDE 문제

사용 중인 JetBrains IDE 또는 JetBrains 게이트웨이 애플리케이션과 관련된 문제에 대한 도움말은 JetBrains 웹 사이트의 "[제품 지원](https://www.jetbrains.com/support/)"을 참조하세요.

{% endjetbrains %}
