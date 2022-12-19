---
title: Visual Studio Code에서 GitHub Copilot 시작하기
shortTitle: Visual Studio Code
intro: '{% data variables.product.prodname_copilot %}을 {% data variables.product.prodname_vscode %}에 설치하고 메모와 코드를 작성할 때 제안 사항을 확인하는 방법을 알아봅니다.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ec117cce02fab8917aef958c69077c521d9c1974
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192771'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} 및 {% data variables.product.prodname_vscode %} 정보

{% data reusables.copilot.procedural-intro %}

{% data variables.product.prodname_vscode %}를 사용하는 경우 편집기 내에서 직접 {% data variables.product.prodname_copilot %}의 제안을 보고 통합할 수 있습니다. 이 가이드에서는 macOS, Windows 또는 Linux용 {% data variables.product.prodname_vscode %} 내에서 {% data variables.product.prodname_copilot %}을 사용하는 방법을 보여 줍니다.

## 필수 조건

{% data reusables.copilot.subscription-prerequisite %}

- {% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_copilot %}을 사용하려면 {% data variables.product.prodname_vscode %}가 설치되어 있어야 합니다. 자세한 내용은 [{% data variables.product.prodname_vscode %} 다운로드 페이지](https://code.visualstudio.com/Download)를 참조하세요.

## {% data variables.product.prodname_vscode %} 확장 설치

{% data variables.product.prodname_copilot %}을 사용하려면 먼저 {% data variables.product.prodname_vscode %} 확장을 설치해야 합니다.

1. {% data variables.product.prodname_vscode %} Marketplace에서 [{% data variables.product.prodname_copilot %} 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 페이지로 이동하여 **설치** 를 클릭합니다.
   ![{% data variables.product.prodname_copilot %} 확장 {% data variables.product.prodname_vscode %} 설치](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. {% data variables.product.prodname_vscode %}를 열도록 요청하는 팝업이 나타납니다. **{% data variables.product.prodname_vscode %} 열기** 를 클릭합니다.
1. {% data variables.product.prodname_vscode %}의 "확장: {% data variables.product.prodname_copilot %}" 팁에서 **설치** 를 클릭합니다.
   ![{% data variables.product.prodname_vscode %}의 열기 단추](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. {% data variables.product.prodname_dotcom %} 계정에서 이전에 {% data variables.product.prodname_vscode %}에 권한을 부여하지 않은 경우 {% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_dotcom %}에 로그인하라는 메시지가 표시됩니다.
   - 이전에 {% data variables.product.prodname_dotcom %} 계정에서 {% data variables.product.prodname_vscode %}에 권한을 부여한 경우 {% data variables.product.prodname_copilot %}에 자동으로 권한이 부여됩니다.
   ![{% data variables.product.prodname_vscode %} 권한 부여 화면의 스크린샷](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. 브라우저에서 {% data variables.product.prodname_dotcom %}가 {% data variables.product.prodname_copilot %}에 필요한 권한을 요청합니다. 이러한 권한을 승인하려면 **{% data variables.product.prodname_vscode %} 권한 부여** 를 클릭합니다.
1. {% data variables.product.prodname_vscode %}의 "{% data variables.product.prodname_vscode %}" 대화 상자에서 인증을 확인하려면 **열기** 를 클릭합니다.
   

## 첫 번째 제안 보기

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 다음 샘플은 JavaScript이지만 다른 언어도 비슷하게 작동합니다.

{% data reusables.copilot.create-js-file %}
1. JavaScript 파일에 다음 함수 헤더를 입력합니다. {% data variables.product.prodname_copilot %}은 아래와 같이 회색 표시된 텍스트로 전체 함수 본문을 자동으로 제안합니다. 정확한 제안은 다를 수 있습니다.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![첫 번째 제안의 스크린샷 {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## 대체 제안 보기

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. JavaScript 파일에 다음 함수 헤더를 입력합니다. {% data variables.product.prodname_copilot %}에 제안 사항이 표시됩니다.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | OS | 다음 제안 참조 | 이전 제안 참조 |
   | :- | :- | :- |
   |macOS|<kbd>옵션(⌥) 또는 Alt</kbd>+<kbd>]</kbd>|<kbd>옵션(⌥) 또는 Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. 또는 제안을 마우스로 가리키면 제안을 선택하기 위한 {% data variables.product.prodname_copilot %} 명령 팔레트를 볼 수 있습니다.
{% data reusables.copilot.accept-or-reject-suggestion %}

## 새 탭에서 여러 제안 표시

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. JavaScript 파일에 다음 함수 헤더를 입력합니다. {% data variables.product.prodname_copilot %}에 제안 사항이 표시됩니다.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. 여러 추가 옵션이 있는 새 탭을 열려면 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>를 누릅니다.
1. 제안을 수락하려면 제안 위에서 **솔루션 수락** 을 클릭합니다. 모든 제안을 거부하려면 탭을 닫습니다.

## 주석에서 코드 제안 생성

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. JavaScript 파일에 다음 주석을 입력합니다. {% data variables.product.prodname_copilot %}은(는) 함수의 구현을 제안합니다.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## 프레임워크 사용

{% data variables.product.prodname_copilot %}을 사용하여 API 및 프레임워크에 대한 제안을 생성할 수도 있습니다. 다음 예제에서는 {% data variables.product.prodname_copilot %}을 사용하여 현재 시간을 반환하는 간단한 Express 서버를 만듭니다.

{% data reusables.copilot.create-js-file %}
1. JavaScript 파일에 다음 주석을 입력하고 <kbd>Enter</kbd> 키를 누릅니다. {% data variables.product.prodname_copilot %}이 Express 앱의 구현을 제안합니다.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. 각 줄을 수락하려면 <kbd>Tab</kbd> 키를 누릅니다.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## 추가 참고 자료

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
