---
title: Github Codespaces에서 GitHub Copilot 사용하기
intro: '확장을 추가하여 {% data variables.product.prodname_github_codespaces %}에서 {% data variables.product.prodname_copilot %}을(를) 사용할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158727'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트에서 {% data variables.product.prodname_copilot %} 사용

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## {% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_copilot %} 사용

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## JetBrains IDE에 {% data variables.product.prodname_copilot %} 설치

AI 쌍 프로그래머인 [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)는 모든 codespace에서 사용할 수 있습니다. 자세한 내용은 "[GitHub Copilot 정보](/copilot/overview-of-github-copilot/about-github-copilot)"를 참조하세요.

JetBrains IDE의 codespace에서 {% data variables.product.prodname_copilot %}를 사용하려면 codespace 내에서 [{% data variables.product.prodname_copilot %} 플러그 인](https://plugins.jetbrains.com/plugin/17718-github-copilot) 을 설치합니다.

{% note %}

**참고**: 새 codespace를 만들 때마다 {% data variables.product.prodname_copilot %} 플러그 인을 설치해야 합니다.

{% endnote %}

1. JetBrains 클라이언트 애플리케이션에서 설정(Windows/Linux) 또는 기본 설정(Mac) 대화 상자를 엽니다.

   - **Windows/Linux**: **파일을** 클릭한 다음 **설정을** 클릭하거나 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>를 누릅니다.
   - **Mac**: MacOS 메뉴 모음에서 **JetBrains 클라이언트** 를 클릭한 다음 **기본 설정을** 클릭하거나 <kbd>명령을</kbd>+ 누릅니다.<kbd></kbd>

1. 설정/기본 설정 대화 상자의 왼쪽 메뉴에서 **호스트의 플러그 인을** 클릭합니다. 그런 다음 **Marketplace** 탭을 클릭합니다.

   !['호스트의 플러그 인'에 대한 Marketplace 탭의 스크린샷](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. 검색 상자에 "copilot"를 입력한 다음 {% data variables.product.prodname_copilot %} 플러그 인에 대한 **설치** 단추를 클릭합니다.

   ![{% data variables.product.prodname_copilot %} 플러그 인 스크린샷](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. "타사 플러그 인 개인 정보 취급 방침" 대화 상자에서 **동의** 를 클릭합니다.
1. **IDE 다시 시작** 을 클릭합니다.

   ![{% data variables.product.prodname_copilot %} 플러그 인 스크린샷](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. 원격으로 실행 중인 백 엔드 IDE를 다시 시작하라는 메시지가 표시되면 **다시 시작을 클릭합니다** . 이렇게 하면 JetBrains 클라이언트 애플리케이션이 닫힙니다.
1. JetBrains 게이트웨이 애플리케이션에서 codespace를 다시 엽니다. 자세한 내용은 "[JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %} 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide).
1. JetBrains IDE가 다시 시작되면 **도구** 메뉴를 클릭합니다. **{% data variables.product.prodname_copilot %}** 을 클릭한 다음 **{% data variables.product.prodname_dotcom %}에 로그인** 을 클릭합니다. 

    ![JetBrains 도구 메뉴의 스크린샷](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. “{% data variables.product.prodname_dotcom %}에 로그인” 대화 상자에서 디바이스 코드를 복사하고 디바이스 활성화 창을 열려면 **복사하여 열기** 를 클릭합니다.

    ![디바이스 코드 복사 및 열기 스크린샷](/assets/images/help/copilot/device-code-copy-and-open.png)

1. 브라우저에서 디바이스 활성화 창이 열립니다. 디바이스 코드를 붙여넣은 다음 **계속** 을 클릭합니다.

   - Windows 또는 Linux에 코드를 붙여넣려면 <kbd>Ctrl</kbd>+<kbd>v</kbd>를 누릅니다.
   - macOS에 코드를 붙여넣려면 <kbd>command</kbd>+<kbd>v</kbd>를 누릅니다.
1. {% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_copilot %}에 필요한 권한을 요청합니다. 이러한 권한을 승인하려면 **{% data variables.product.prodname_copilot %} 플러그 인 권한 승인** 을 클릭합니다.
1. 사용 권한이 승인되면 JetBrains IDE에 확인 메시지가 표시됩니다. {% data variables.product.prodname_copilot %}을 사용하려면 **확인** 을 클릭합니다.

   ![JetBrains IDE 권한 확인 스크린샷](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## 추가 정보

- "[JetBrains IDE에서 GitHub Copilot 시작](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)"

{% endjetbrains %}
