---
title: 기존 codespace 열기
intro: 닫거나 중지한 codespace를 다시 열고 작업으로 돌아갈 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: b139b7f4e8a696416c97b3c400d09a9f26371b9c
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188298'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% data variables.product.prodname_dotcom_the_website %}, JetBrains IDE, {% data variables.product.prodname_vscode %}에서 또는 {% data variables.product.prodname_cli %}를 사용하여 활성 또는 중지된 codespace를 다시 열 수 있습니다. 삭제된 codespace는 다시 열 수 없습니다. 자세한 내용은 "[codespace 수명 주기"를 참조하세요](/codespaces/getting-started/the-codespace-lifecycle).

[github.com/codespaces](https://github.com/codespaces) "Codespaces" 페이지에서 모든 codespace를 볼 수 있습니다. 이 페이지에서 다음을 수행할 수 있습니다.

- codespace를 열거나 중지하거나 삭제합니다.
- codespace(개인 계정 또는 속한 조직)를 소유(및 청구할 수 있음)를 확인합니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”를 참조하세요.
- {% data variables.product.company_short %}의 템플릿 중 하나를 선택하거나 **새 codespace를 클릭하여 새 codespace** 를 만듭니다. 자세한 내용은 "[템플릿에서 codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)" 및 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

## 기존 codespace 열기

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 기본 편집기에서 codespace를 열려면 codespace의 이름을 클릭합니다. {% data reusables.codespaces.about-changing-default-editor %} 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 기본 편집기 설정](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)"을 참조하세요.
   
   기본값이 아닌 편집기에서 codespace를 열려면 다음을 수행합니다.
   
   1. 열려는 codespace의 오른쪽에 있는 줄임표(**...**)를 클릭합니다.
   1. **열기를** 클릭합니다.
   1. **애플리케이션에서 열기를** 클릭합니다.

   !["Visual Studio Code 열기"가 강조 표시된 "열기" 대화 상자의 스크린샷](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   다음에서 codespace를 열 수 있습니다.
   * 브라우저
   * {% data variables.product.prodname_vscode %}
   * JetBrains 게이트웨이
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   **JupyterLab을** 선택하는 경우 Codespace에 JupyterLab 애플리케이션을 설치해야 합니다. {% data reusables.codespaces.jupyterlab-in-default-image %}

{% endwebui %}

{% vscode %}

{% note %}

**참고:** {% data reusables.codespaces.using-codespaces-in-vscode %} 자세한 내용은 "[{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_github_codespaces %} 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code).

{% endnote %}

1. {% data variables.product.prodname_vscode_shortname %} 데스크톱 애플리케이션에서 명령<kbd>Shift</kbd>P(Mac) 또는 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>++<kbd>P</kbd>(Windows/Linux)를 사용하여 <kbd>명령</kbd>+ 팔레트를 엽니다.<kbd></kbd>
1. "Codespaces"를 입력하고 다음 명령 중 하나를 선택합니다.
   - {% data variables.product.prodname_vscode_shortname %}의 새 창에서 **codespace를 열려면 Codespaces: 새 창에서 Codespace 열기** 를 선택합니다.
   - 웹 편집기에서 codespace를 열려면 **Codespaces: 브라우저에서 열기를** 선택합니다.
1. 열려는 codespace를 클릭합니다.
   
   ![Visual Studio Code codespace 목록의 스크린샷](/assets/images/help/codespaces/open-codespace-from-vscode.png)

{% data variables.product.prodname_vscode_shortname %}에서 원격 탐색기 보기로 이동하고 열려는 codespace를 마우스 오른쪽 단추로 클릭하여 위에 나열된 명령에 액세스할 수도 있습니다.

!["브라우저에서 열기"가 강조 표시된 원격 탐색기에서 선택한 codespace의 스크린샷](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. 터미널에서 다음 {% data variables.product.prodname_cli %} 명령 중 하나를 입력합니다.
   - {% data variables.product.prodname_vscode_shortname %}에서 codespace를 열려면 다음을 입력합니다.

     ```shell{:copy}
     gh codespace code
     ```
     
     {% note %}

     **참고**: 로컬 컴퓨터에 {% data variables.product.prodname_vscode_shortname %}이(가) 설치되어 있어야 합니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 "Visual Studio Code [설정](https://code.visualstudio.com/docs/setup/setup-overview)"을 참조하세요.

     {% endnote %}
     
   - 브라우저에서 codespace를 열려면 다음을 입력합니다.
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - JupyterLab에서 codespace를 열려면 다음을 입력합니다.
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **참고**: {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. 화살표 키를 사용하여 열려는 codespace로 이동합니다.
1. codespace를 열려면 Enter 키를 누릅니 <kbd>다</kbd>.

자세한 내용은 {% data variables.product.prodname_cli %} 설명서를 참조 [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) 하세요.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
