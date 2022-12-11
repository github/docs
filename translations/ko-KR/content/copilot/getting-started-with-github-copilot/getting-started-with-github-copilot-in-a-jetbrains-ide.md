---
title: JetBrains IDE에서 GitHub Copilot 시작하기
shortTitle: JetBrains IDE
intro: 'JetBrains IDE에 {% data variables.product.prodname_copilot %}을 설치하고 메모와 코드를 작성할 때 제안 사항을 확인하는 방법을 알아봅니다.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: f5b90fb18645b69f86e9e45e08ba47e534678ae4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192785'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} 및 JetBrains IDE 정보

{% data reusables.copilot.procedural-intro %}

JetBrains IDE를 사용하는 경우 편집기 내에서 직접 {% data variables.product.prodname_copilot %}의 제안을 보고 통합할 수 있습니다. 이 가이드에서는 macOS, Windows 또는 Linux용 JetBrains IDE 내에서 {% data variables.product.prodname_copilot %}을 사용하는 방법을 보여 줍니다.

## 필수 조건

{% data reusables.copilot.subscription-prerequisite %}

{% data reusables.copilot.jetbrains-ides %}

## JetBrains IDE에 {% data variables.product.prodname_copilot %} 확장 설치

JetBrains IDE에서 {% data variables.product.prodname_copilot %}을 사용하려면 {% data variables.product.prodname_copilot %} 확장을 설치해야 합니다. 다음 절차에서는 IntelliJ IDEA에서 {% data variables.product.prodname_copilot %} 플러그 인 설치를 안내합니다. 지원되는 다른 IDE에 플러그 인을 설치하는 단계는 다를 수 있습니다.

1. JetBrains IDE의 Windows용 **파일** 메뉴 또는 Mac용 IDE 이름(예: **PyCharm** 또는 **IntelliJ**)에서 Windows **설정** 또는 Mac용 **기본 설정** 을 클릭합니다.
2. **설정/기본 설정** 대화 상자의 왼쪽 메뉴에서 **플러그 인** 을 클릭합니다.
3. **설정/기본 설정** 대화 상자의 맨 위에서 **Marketplace** 를 클릭합니다. 검색 창에서 **{% data variables.product.prodname_copilot %}** 을 검색한 다음 **설치** 를 클릭합니다.
   ![Marketplace 검색 스크린샷](/assets/images/help/copilot/jetbrains-marketplace.png)
1. {% data variables.product.prodname_copilot %}이 설치되면 **IDE 다시 시작** 을 클릭합니다.
1. JetBrains IDE가 다시 시작되면 **도구** 메뉴를 클릭합니다. **{% data variables.product.prodname_copilot %}** 을 클릭한 다음 **{% data variables.product.prodname_dotcom %}에 로그인** 을 클릭합니다. 
    ![JetBrains 도구 메뉴의 스크린샷](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. “{% data variables.product.prodname_dotcom %}에 로그인” 대화 상자에서 디바이스 코드를 복사하고 디바이스 활성화 창을 열려면 **복사하여 열기** 를 클릭합니다.
    ![디바이스 코드 복사하여 열기 스크린샷](/assets/images/help/copilot/device-code-copy-and-open.png)
1. 브라우저에서 디바이스 활성화 창이 열립니다. 디바이스 코드를 붙여넣은 다음 **계속** 을 클릭합니다.

   - Windows 또는 Linux에 코드를 붙여넣려면 <kbd>Ctrl</kbd>+<kbd>v</kbd>를 누릅니다.
   - macOS에 코드를 붙여넣려면 <kbd>command</kbd>+<kbd>v</kbd>를 누릅니다.
1. {% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_copilot %}에 필요한 권한을 요청합니다. 이러한 권한을 승인하려면 **{% data variables.product.prodname_copilot %} 플러그 인 권한 승인** 을 클릭합니다.
1. 사용 권한이 승인되면 JetBrains IDE에 확인 메시지가 표시됩니다. {% data variables.product.prodname_copilot %}을 사용하려면 **확인** 을 클릭합니다.
   ![JetBrains IDE 권한 확인 스크린샷](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## 첫 번째 제안 보기

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 다음 샘플은 Java이지만 다른 언어도 비슷하게 작동합니다.

{% data reusables.copilot.create-java-file %}
1. Java 파일에서 `class Test`를 입력하여 클래스를 만듭니다.
   {% data variables.product.prodname_copilot %}은 아래와 같이 회색 표시된 텍스트로 클래스 본문을 자동으로 제안합니다. 정확한 제안은 다를 수 있습니다.
   ![Java 클래스 본문 제안](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %} 스크린샷
1. {% data variables.product.prodname_copilot %}에게 함수 본문을 제안하라는 메시지를 표시하려면 `main` 함수의 대괄호 아래에 다음 줄을 입력합니다. 정확한 제안은 다를 수 있습니다.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Java 함수 본문 제안](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %} 스크린샷

{% data variables.product.prodname_copilot %}은 코드의 컨텍스트와 스타일을 일치시키려고 시도합니다. 제안된 코드는 언제든지 편집할 수 있습니다.

## 대체 제안 보기

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. {% data variables.product.prodname_copilot %}에게 제안 사항을 표시하라는 메시지를 표시하려면 Java 파일에 다음 줄을 입력합니다.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | OS | 다음 제안 참조 | 이전 제안 참조 |
   | :- | :- | :- |
   | macOS | <kbd>옵션</kbd>+<kbd>]</kbd> | <kbd>옵션</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## 새 탭에서 여러 제안 표시

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. {% data variables.product.prodname_copilot %}에게 제안 사항을 표시하라는 메시지를 표시하려면 Java 파일에 다음 줄을 입력합니다.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. 여러 개의 추가 제안 사항이 있는 새 탭을 엽니다.
    - macOS에서 <kbd>command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>를 누른 다음 **GitHub Copilot 열기** 를 클릭하거나 <kbd>command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd>를 눌러 바로 새 탭을 엽니다.
    - Windows 또는 Linux에서 <kbd>Ctrl</kbd>+<kbd>Enter</kbd> 키를 누른 다음 **GitHub Copilot 열기** 를 클릭합니다.
  ![Copilot를 여는 대화 상자의 스크린샷](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. 제안을 수락하려면 제안 위에서 **솔루션 수락** 을 클릭합니다. 모든 제안을 거부하려면 탭을 닫습니다.

## 주석에서 코드 제안 생성

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. {% data variables.product.prodname_copilot %}에게 Java 파일의 함수 구현을 제안하라는 메시지를 표시하려면 다음 줄을 입력합니다.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Java 함수 본문 제안 스크린샷](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## {% data variables.product.prodname_copilot %} 사용 및 사용 안 함

모든 언어 또는 개별 언어에 대해 {% data variables.product.prodname_copilot %}을 사용하거나 사용하지 않도록 설정할 수 있습니다. JetBrains IDE 창의 아래쪽 패널에 있는 {% data variables.product.prodname_copilot %} 상태 아이콘은 {% data variables.product.prodname_copilot %}가 활성화되었는지 여부를 나타냅니다. 사용하도록 설정하면 아이콘이 강조 표시됩니다. 사용하지 않도록 설정하면 아이콘이 회색으로 표시됩니다.

1. {% data variables.product.prodname_copilot %}을 사용하거나 사용하지 않도록 설정하려면 JetBrains 창의 아래쪽 패널에서 상태 아이콘을 클릭합니다.
   ![IntelliJ IDEA의 상태 아이콘 스크린샷](/assets/images/help/copilot/status-icon-jetbrains.png)
2. {% data variables.product.prodname_copilot %}을 사용하지 않도록 설정하는 경우 전역적으로 또는 현재 편집 중인 파일의 언어에 대해 사용하지 않도록 설정할지 묻는 메시지가 표시됩니다.

   - {% data variables.product.prodname_copilot %}에서 제안을 전역적으로 사용하지 않도록 설정하려면 **완료 사용하지 않음** 을 클릭합니다.
   - 지정된 언어에 대한 {% data variables.product.prodname_copilot %}에서 제안을 사용하지 않으려면 **_언어_ 에 대한 완성을 사용하지 않음** 을 클릭합니다.
   ![전역적으로 또는 현재 언어에 대해 {% data variables.product.prodname_copilot %}을 사용하지 않도록 설정하는 옵션의 스크린샷](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## 추가 참고 자료

- [{% data variables.product.prodname_copilot %} 웹 사이트](https://copilot.github.com/)
- [{% data variables.product.prodname_copilot %} 정보](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
