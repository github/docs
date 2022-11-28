---
title: Github Codespaces에서 Visual Studio Code 명령 팔레트 사용
intro: '{% data variables.product.prodname_vscode %}의 명령 팔레트 기능을 사용하여 {% data variables.product.prodname_github_codespaces %}의 여러 명령에 액세스할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: acd462dd1c0b60dced529d7471b9c8638e2f6e91
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180813'
---
## {% data variables.product.prodname_vscode_command_palette %} 정보

{% data variables.product.prodname_vscode_command_palette_shortname %}는 {% data variables.product.prodname_vscode %}의 초점 기능 중 하나이며 {% data variables.product.prodname_github_codespaces %}에서 사용할 수 있습니다. 명령 팔레트를 사용하면 {% data variables.product.prodname_github_codespaces %} 및 {% data variables.product.prodname_vscode_shortname %}에 대한 많은 명령에 액세스할 수 있습니다. {% data variables.product.prodname_vscode_command_palette_shortname %} 사용에 대한 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[사용자 인터페이스](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)”를 참조하세요.

## {% data variables.product.prodname_vscode_command_palette_shortname %}에 액세스

여러 가지 방법으로 {% data variables.product.prodname_vscode_command_palette_shortname %}에 액세스할 수 있습니다.

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>(Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>(Windows/Linux).

  이 명령은 Firefox에서 예약된 바로 가기 키입니다.
- <kbd>F1</kbd>
- 애플리케이션 메뉴에서 **보기 > 명령 팔레트…** 를 클릭합니다.

  ![애플리케이션 메뉴](/assets/images/help/codespaces/codespaces-view-menu.png)

## {% data variables.product.prodname_codespaces %}에 대한 명령

{% data variables.product.prodname_github_codespaces %}와 관련된 모든 명령을 보려면 [{% data variables.product.prodname_vscode_command_palette_shortname %}에 액세스](#accessing-the-command-palette)한 다음 “Codespaces”를 입력하기 시작합니다.

![{% data variables.product.prodname_github_codespaces %}에 관련된 모든 명령 목록](/assets/images/help/codespaces/codespaces-command-palette.png)

### codespace 일시 중단 또는 중지

새 비밀을 추가하거나 컴퓨터 유형을 변경하는 경우 codespace를 중지하고 다시 시작하여 변경 내용을 적용해야 합니다. 

codespace의 컨테이너를 일시 중단하거나 중지하려면 [{% data variables.product.prodname_vscode_command_palette_shortname %}에 액세스](#accessing-the-command-palette)한 다음 “stop”을 입력하기 시작합니다. **Codespaces: 현재 codespace 중지** 를 선택합니다.

![codespace를 중지하는 명령](/assets/images/help/codespaces/codespaces-stop.png)

### 미리 정의된 개발 컨테이너 구성 추가

미리 정의된 개발 컨테이너 구성을 추가하려면 [{% data variables.product.prodname_vscode_command_palette_shortname %}에 액세스](#accessing-the-command-palette)한 다음 " 개발 컨테이너"를 입력하기 시작합니다. **Codespaces: 개발 컨테이너 구성 파일 추가...** 를 선택합니다.

![개발 컨테이너를 추가하는 명령](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Codespace 다시 빌드

개발 컨테이너를 추가하거나 구성 파일(`devcontainer.json` 및 `Dockerfile`)을 편집하는 경우 변경 내용을 적용하려면 codespace를 다시 빌드해야 합니다. 

컨테이너를 다시 빌드하려면 [{% data variables.product.prodname_vscode_command_palette_shortname %}에 액세스](#accessing-the-command-palette)한 다음 “rebuild”를 입력하기 시작합니다. **Codespaces: 컨테이너 다시 빌드** 를 선택합니다.

![codespace를 다시 빌드하는 명령](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Codespaces 로그

{% data variables.product.prodname_vscode_command_palette_shortname %}를 사용하여 codespace 만들기 로그에 액세스하거나 모든 로그를 내보낼 수 있습니다. 

{% data variables.product.prodname_github_codespaces %}에 대한 로그를 검색하려면 [{% data variables.product.prodname_vscode_command_palette_shortname %}에 액세스](#accessing-the-command-palette)한 후 "log" 입력을 시작합니다. **Codespaces: 로그 내보내** 기를 선택하여 {% data variables.product.prodname_github_codespaces %}과 관련된 모든 로그를 내보내거나 **Codespaces: 만들기 로그 보기를** 선택하여 설정과 관련된 로그를 봅니다.

![로그에 액세스하는 명령](/assets/images/help/codespaces/codespaces-logs.png)

## 추가 정보

- "[{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
