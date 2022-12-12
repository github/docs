---
title: Codespaces 로그
intro: '{% data variables.product.prodname_codespaces %}에서 사용하는 로깅 위치 개요입니다.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Logging
shortTitle: Codespaces logs
ms.openlocfilehash: 3e02023cd1ba05960e9f9b345265c281e714e6a5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090380"
---
{% data variables.product.prodname_codespaces %}에 대한 정보는 다음과 같은 세 가지 로그로 출력됩니다.

- Codespace 로그
- 생성 로그
- 확장 로그({% data variables.product.prodname_vscode %} desktop) 또는 브라우저 콘솔 로그(웹의 {% data variables.product.prodname_vscode %})

## <a name="codespace-logs"></a>Codespace 로그

이러한 로그에는 codespace, 컨테이너, 세션 및 {% data variables.product.prodname_vscode %} 환경에 관한 자세한 정보가 포함됩니다. 연결 문제 및 기타 예기치 않은 동작을 진단하는 데 도움이 됩니다. 예를 들어 codespace가 동결되지만 "Windows 다시 로드" 옵션에서는 codespace를 몇 분 동안 고정되지 않거나, codespace에서 임의로 연결이 끊어지지만 즉시 다시 연결되는 경우가 있습니다.

{% webui %}

1. 브라우저에서 {% data variables.product.prodname_codespaces %}를 사용하는 경우 디버그할 codespace에 연결되어 있는지 확인하세요.
1. {% data variables.product.prodname_vscode %} 명령 팔레트(`Shift + Command + P`(Mac)/`Ctrl + Shift + P`(Windows))를 열고 **로그 내보내기** 를 입력합니다. 목록에서 **Codespaces: 로그 내보내기** 를 선택하여 로그를 다운로드합니다.
1. 로그의 zip 보관 파일을 저장할 위치를 정의한 다음 **저장**(데스크톱)이나 **확인**(웹)을 클릭합니다.
1. 브라우저에서 {% data variables.product.prodname_codespaces %}를 사용하는 경우 탐색기 보기에서 로그의 zip 보관 파일을 마우스 오른쪽 단추로 클릭하고 **다운로드...** 를 선택하여 파일을 로컬 컴퓨터에 다운로드합니다.

{% endwebui %}

{% vscode %}

1. {% data variables.product.prodname_vscode %} 명령 팔레트(`Shift + Command + P`(Mac)/`Ctrl + Shift + P`(Windows))를 열고 **로그 내보내기** 를 입력합니다. 목록에서 **Codespaces: 로그 내보내기** 를 선택하여 로그를 다운로드합니다.
1. 로그의 zip 보관 파일을 저장할 위치를 정의한 다음 **저장**(데스크톱)이나 **확인**(웹)을 클릭합니다.

{% endvscode %}

{% cli %}

현재는 {% data variables.product.prodname_cli %}를 사용하여 이러한 로그에 액세스할 수 없습니다. 액세스하려면 {% data variables.product.prodname_vscode %} 또는 브라우저에서 codespace를 열어야 합니다.

{% endcli %}

## <a name="creation-logs"></a>생성 로그

이러한 로그에는 컨테이너, 개발 컨테이너 및 관련 구성에 대한 정보가 포함됩니다. 구성 및 설정 문제를 디버깅하는 데 도움이 됩니다.


{% webui %}

1. 디버그할 codespace에 연결합니다.
2. {% data variables.product.prodname_vscode_command_palette %}명령 팔레트(`Shift + Command + P`(Mac)/`Ctrl + Shift + P`(Windows))를 열고 **생성 로그** 를 입력합니다. 목록에서 **Codespaces: 생성 로그 보기** 를 선택하여 `creation.log` 파일을 엽니다.

로그를 지원과 공유하고 싶다면, 생성 로그의 텍스트를 텍스트 편집기에 복사하고 파일을 로컬로 저장하면 됩니다.

{% endwebui %}

{% vscode %}

명령 팔레트(`Shift + Command + P`Mac)/`Ctrl + Shift + P`(Windows)를 열고 **생성 로그** 를 입력합니다. 목록에서 **Codespaces: 생성 로그 보기** 를 선택하여 `creation.log` 파일을 엽니다.

로그를 지원과 공유하고 싶다면, 생성 로그의 텍스트를 텍스트 편집기에 복사하고 파일을 로컬로 저장하면 됩니다.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

생성 로그를 보려면 `gh codespace logs` 하위 명령을 사용합니다. 명령을 입력한 후 표시되는 codespace 목록에서 선택합니다.

```shell
gh codespace logs
```

이 명령에 대한 자세한 내용은 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_codespace_logs)를 참조하세요.

로그를 지원과 공유하고 싶다면 출력을 파일에 저장하면 됩니다.

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

## <a name="extension-logs"></a>확장 로그

이러한 로그는 {% data variables.product.prodname_vscode %} 데스크톱 사용자만 사용할 수 있습니다. {% data variables.product.prodname_codespaces %} 확장 또는 {% data variables.product.prodname_vscode %} 편집기에 생성 또는 연결을 방해하는 문제가 있는 것처럼 보일 때 유용합니다.

1. {% data variables.product.prodname_vscode %}에서 명령 팔레트를 엽니다.
1. **로그** 를 입력하고 목록에서 **개발자: 확장 로그 폴더 열기** 를 선택하여 시스템의 파일 탐색기에서 확장 로그 폴더를 엽니다.

이 보기에서는 {% data variables.product.prodname_vscode %}에서 사용하는 다양한 확장에서 생성된 로그에 액세스할 수 있습니다. 사용하도록 설정한 다른 확장 외에 GitHub Codespaces, GitHub 인증 및 Git에 대한 로그도 표시됩니다.

## <a name="browser-console-logs"></a>브라우저 콘솔 로그

이러한 로그는 브라우저에서 {% data variables.product.prodname_codespaces %}를 사용하여 문제를 디버그하려는 경우에만 유용합니다. {% data variables.product.prodname_codespaces %} 생성 및 연결 관련 문제를 디버깅하는 데 유용합니다.

1. 디버그할 codespace의 브라우저 창에서 개발자 도구 창을 엽니다.
1. "콘솔" 탭을 표시하고 왼쪽 가로 막대에서 **오류** 를 클릭하여 오류만 표시합니다.
1. 오른쪽의 로그 영역에서 마우스 오른쪽 단추를 클릭하고 **다른 이름으로 저장** 을 선택하여 오류 복사본을 로컬 컴퓨터에 저장합니다.
  ![오류 저장](/assets/images/help/codespaces/browser-console-log-save.png)
