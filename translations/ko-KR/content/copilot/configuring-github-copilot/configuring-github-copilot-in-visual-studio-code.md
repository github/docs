---
title: Visual Studio Code에서 GitHub Copilot 구성
intro: '{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_copilot %}을 활성화, 구성 및 비활성화할 수 있습니다.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: 0c91f9c11f98669ba6bcbf84113a629ae6d53044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080181'
---
## {% data variables.product.prodname_vscode %}의 {% data variables.product.prodname_copilot %} 정보

{% data variables.product.prodname_vscode %}를 사용하는 경우 {% data variables.product.prodname_copilot %}은 개발자가 입력할 때 코드를 자동으로 완성할 수 있습니다. 설치 후 {% data variables.product.prodname_copilot %}을 활성화 또는 비활성화할 수 있으며, {% data variables.product.prodname_vscode %} 내에서 또는 {% data variables.product.prodname_dotcom_the_website %}에서 고급 설정을 구성할 수 있습니다.

## 필수 조건

{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_copilot %}을 구성하려면 {% data variables.product.prodname_copilot %} 플러그 인을 설치해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_copilot %} 시작하기](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)”를 참조하세요.

## {% data variables.product.prodname_copilot %}의 바로 가기 키

{% data variables.product.prodname_copilot %}을 사용할 때 {% data variables.product.prodname_vscode %}에서 기본 바로 가기 키를 사용할 수 있습니다. 또는 각 특정 명령에 대해 선호하는 바로 가기 키를 사용하여 바로 가기 키 편집기에서 바로 가기 키를 다시 바인딩할 수 있습니다. 바로 가기 키 편집기에서 명령 이름으로 각 바로 가기 키를 검색할 수 있습니다.

{% mac %}

| 작업 | 바로 가기 | 명령 이름 |
|:---|:---|:---|
|인라인 제안 수락|<kbd>탭</kbd>|editor.action.inlineSuggest.commit|
|인라인 제안 거부|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|다음 인라인 제안 표시| <kbd>옵션(⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|이전 인라인 제안 표시| <kbd>옵션(⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|인라인 제안 트리거| <kbd>옵션(⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|{% data variables.product.prodname_copilot %} 열기(별도 창의 추가 제안)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} 설정/해제|_기본 바로 가기 키 없음_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| 작업 | 바로 가기 | 명령 이름 |
|:---|:---|:---|
|인라인 제안 수락|<kbd>탭</kbd>|editor.action.inlineSuggest.commit|
|인라인 제안 거부|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|다음 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|이전 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|인라인 제안 트리거|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|{% data variables.product.prodname_copilot %} 열기(별도 창의 추가 제안)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} 설정/해제|_기본 바로 가기 키 없음_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| 작업 | 바로 가기 | 명령 이름 |
|:---|:---|:---|
|인라인 제안 수락|<kbd>탭</kbd>|editor.action.inlineSuggest.commit|
|인라인 제안 거부|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|다음 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|이전 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|인라인 제안 트리거|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|{% data variables.product.prodname_copilot %} 열기(별도 창의 추가 제안)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} 설정/해제|_기본 바로 가기 키 없음_|github.copilot.toggleCopilot|

{% endlinux %}

## 바로 가기 키 다시 바인딩

{% data variables.product.prodname_copilot %}을 사용할 때 {% data variables.product.prodname_vscode %}에서 기본 바로 가기 키를 사용하지 않으려면 각 특정 명령에 대해 원하는 바로 가기 키를 사용하여 바로 가기 키 편집기에서 바로 가기 키를 다시 바인딩할 수 있습니다.

1. **파일** 메뉴를 클릭하고 **기본 설정** 을 클릭한 다음 **바로 가기 키** 를 클릭합니다.
![Visual Studio Code 바로 가기 키 스크린샷](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. "바로 가기 키" 편집기에서 변경할 바로 가기 키의 명령 이름을 검색합니다.
![바로 가기 키 검색 창의 스크린샷](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. 변경할 명령 옆에 있는 연필 아이콘을 클릭합니다.
![바로 가기 키 편집기의 스크린샷](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. 명령에 사용할 키 입력을 입력한 다음 <kbd>Enter</kbd>/<kbd>Return</kbd> 키를 누릅니다.
![바로 가기 키 편집 텍스트 상자의 스크린샷](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## 인라인 제안 사용 또는 사용 안 함

{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_copilot %}의 인라인 제안을 사용하거나 사용하지 않도록 선택할 수 있습니다. 

1. **파일** 메뉴에서 **기본 설정** 으로 이동하고 **설정** 을 클릭합니다.
![{% data variables.product.prodname_vscode %} 설정의 스크린샷](/assets/images/help/copilot/vsc-settings.png)
1. 설정 탭의 왼쪽 패널에서 **확장** 을 클릭한 다음 **Copilot** 을 선택합니다.
1. "인라인 제안:사용" 아래에서 확인란을 선택하거나 선택 취소하여 인라인 제안을 사용하거나 사용하지 않도록 설정합니다.

## 특정 언어에 대해 {% data variables.product.prodname_copilot %} 사용 또는 사용 안 함

{% data variables.product.prodname_copilot %}을 사용하거나 사용하지 않도록 설정할 언어를 지정할 수 있습니다.

1. {% data variables.product.prodname_vscode %}에서 **확장** 탭을 클릭한 다음 **, Copilot** 섹션으로 이동합니다. 자세한 내용은 "[인라인 제안 사용 및 사용 안 함](#enabling-and-disabling-inline-suggestions)"을 참조하세요.
1. "지정된 언어에 대해 Copilot 사용 또는 사용 안 함" 아래에서 **settings.json에서 편집** 을 클릭합니다.
1. _settings.json_ 파일에서 {% data variables.product.prodname_copilot %}을 사용하거나 사용하지 않도록 설정할 언어를 추가하거나 제거합니다. 예를 들어 {% data variables.product.prodname_copilot %}에서 Python을 사용하도록 설정하려면 `"python": true` 목록에 추가합니다. 마지막 목록 항목을 제외한 모든 항목에 후행 쉼표가 있어야 합니다.

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

{% data reusables.copilot.dotcom-settings %}
