---
title: GitHub Codespaces 로그
intro: '{% data variables.product.prodname_github_codespaces %}에서 사용하는 로그의 개요입니다.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160101'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% data variables.product.prodname_github_codespaces %}에 대한 정보는 다양한 로그에 출력됩니다.

{% webui %}

- Codespace 로그
- 생성 로그
- 브라우저 콘솔 로그({% 데이터 variables.product.prodname_vscode_shortname %} 웹 클라이언트의 경우)

{% data variables.product.prodname_github_codespaces %}에서 {% data variables.product.prodname_vscode_shortname %}을(를) 사용하는 경우 확장 로그를 사용할 수 있습니다. 자세한 내용은 위의 "{% data variables.product.prodname_vscode %}" 탭을 클릭합니다.

{% endwebui %}

{% vscode %}

- Codespace 로그
- 생성 로그
- 확장 로그({% data variables.product.prodname_vscode_shortname %} 데스크톱 애플리케이션의 경우) 

브라우저에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 경우 브라우저 로그를 사용할 수 있습니다. 자세한 내용은 위의 "웹 브라우저" 탭을 클릭합니다.

{% endvscode %}

{% cli %}

- Codespace 로그
- 생성 로그

{% data variables.product.prodname_vscode_shortname %} 또는 웹 브라우저에서 {% data variables.product.prodname_github_codespaces %}를 사용하는 경우 다른 로그를 사용할 수 있습니다. 자세한 내용은 위의 탭을 클릭합니다.

{% endcli %}

{% jetbrains %}

- 생성 로그

{% data variables.product.prodname_vscode_shortname %} 또는 웹 브라우저에서 {% data variables.product.prodname_github_codespaces %}를 사용하는 경우 다른 로그를 사용할 수 있습니다. 자세한 내용은 위의 탭을 클릭합니다.

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. 브라우저에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 경우 디버그하려는 codespace에 연결되어 있는지 확인합니다.
1. {% data variables.product.prodname_vscode_command_palette_shortname %}(<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>(Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Windows/Linux))를 열고 **Export logs** 라고 입력합니다. 목록에서 **Codespaces: 로그 내보내기** 를 선택하여 로그를 다운로드합니다.
1. 로그의 zip 보관 파일을 저장할 위치를 정의한 다음 **저장**(데스크톱)이나 **확인**(웹)을 클릭합니다.
1. 브라우저에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 경우 탐색기 보기에서 로그의 zip 보관 파일을 마우스 오른쪽 단추로 클릭하고 **다운로드...** 를 선택합니다. 파일을 로컬 컴퓨터에 다운로드합니다.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. {% data variables.product.prodname_vscode_command_palette_shortname %}(<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>(Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Windows/Linux))를 열고 **Export logs** 라고 입력합니다. 목록에서 **Codespaces: 로그 내보내기** 를 선택하여 로그를 다운로드합니다.
1. 로그의 zip 보관 파일을 저장할 위치를 정의한 다음 **저장**(데스크톱)이나 **확인**(웹)을 클릭합니다.

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

현재는 {% data variables.product.prodname_cli %}를 사용하여 이러한 로그에 액세스할 수 없습니다. 액세스하려면 {% data variables.product.prodname_vscode_shortname %} 또는 브라우저에서 codespace를 엽니다.

{% endcli %}

## 생성 로그

이러한 로그에는 컨테이너, 개발 컨테이너 및 관련 구성에 대한 정보가 포함됩니다. 구성 및 설정 문제를 디버깅하는 데 도움이 됩니다.

{% webui %}

1. 디버그할 codespace에 연결합니다.
2. {% data variables.product.prodname_vscode_command_palette_shortname %}(<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>(Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Windows/Linux))를 열고 **Creation logs** 라고 입력합니다. 목록에서 **Codespaces: 생성 로그 보기** 를 선택하여 `creation.log` 파일을 엽니다.

로그를 지원과 공유하고 싶다면, 생성 로그의 텍스트를 텍스트 편집기에 복사하고 파일을 로컬로 저장하면 됩니다.

{% endwebui %}

{% vscode %}

{% data variables.product.prodname_vscode_command_palette_shortname %}(<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>(Mac)/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Windows/Linux))를 열고 **Creation logs** 라고 입력합니다. 목록에서 **Codespaces: 생성 로그 보기** 를 선택하여 `creation.log` 파일을 엽니다.

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

{% vscode %}

## 확장 로그

이러한 로그는 {% data variables.product.prodname_vscode_shortname %} 데스크톱 사용자에게만 사용할 수 있습니다. {% data variables.product.prodname_github_codespaces %} 확장 또는 {% data variables.product.prodname_vscode_shortname %} 편집기에서 생성 또는 연결을 방해하는 문제가 있는 것처럼 보이는 경우에 유용합니다.

1. {% data variables.product.prodname_vscode_shortname %}에서 명령 팔레트를 엽니다.
1. **로그** 를 입력하고 목록에서 **개발자: 확장 로그 폴더 열기** 를 선택하여 시스템의 파일 탐색기에서 확장 로그 폴더를 엽니다.

이 보기에서 {% data variables.product.prodname_vscode_shortname %}에서 사용하는 다양한 확장에서 생성된 로그에 액세스할 수 있습니다. 사용하도록 설정한 다른 확장 외에도 {% data variables.product.prodname_github_codespaces %}, {% data variables.product.prodname_dotcom %} 인증 및 Git에 대한 로그가 표시됩니다.

{% endvscode %}

{% webui %}

## 브라우저 콘솔 로그

이러한 로그는 브라우저에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 데 문제가 있는 경우에만 유용합니다. {% data variables.product.prodname_github_codespaces %}을(를) 만들고 연결하는 문제를 디버깅하는 데 유용합니다.

1. 디버그할 codespace의 브라우저 창에서 개발자 도구 창을 엽니다.
1. "콘솔" 탭을 표시하고 왼쪽 사이드바에서 **오류를** 클릭하여 오류만 표시합니다.
1. 오른쪽의 로그 영역에서 마우스 오른쪽 단추를 클릭하고 **다른 이름으로 저장** 을 선택하여 오류 복사본을 로컬 컴퓨터에 저장합니다.
  ![오류 저장](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. {% data variables.product.prodname_github_codespaces %} 도구 창에서 로그 아이콘을 클릭합니다.

   ![로그 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## JetBrains 로그

JetBrains 클라이언트 애플리케이션의 **도움말** 메뉴로 이동하고 호스트 및 클라이언트 **로그 수집** 을 클릭하여 원격 JetBrains IDE 및 로컬 클라이언트 애플리케이션에 대한 로그를 다운로드할 수 있습니다.

{% endjetbrains %}

## 추가 참고 자료

- “[{% data variables.product.prodname_github_codespaces %}에 대한 조직의 감사 로그 검토](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)”
- “[{% data variables.product.prodname_github_codespaces %}에 대한 보안 로그 검토](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)”
