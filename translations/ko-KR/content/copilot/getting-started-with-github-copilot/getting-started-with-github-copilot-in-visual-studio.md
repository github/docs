---
title: Visual Studio에서 GitHub Copilot 시작하기
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: '{% data variables.product.prodname_copilot %}을 {% data variables.product.prodname_vs %}에 설치하고 메모와 코드를 작성할 때 제안 사항을 확인하는 방법을 알아봅니다.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 65384a5cafae1c739b52847d1a826c0138e91fd9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193019'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} 및 Visual Studio 정보

{% data reusables.copilot.procedural-intro %}

{% data variables.product.prodname_vs %}를 사용하는 경우 편집기 내에서 직접 {% data variables.product.prodname_copilot %}의 제안을 보고 통합할 수 있습니다. 이 가이드에서는 Windows용 {% data variables.product.prodname_vs %} 내에서 {% data variables.product.prodname_copilot %}을 사용하는 방법을 보여 줍니다.

## 사전 요구 사항

{% data reusables.copilot.subscription-prerequisite %}

- {% data variables.product.prodname_vs %}에서 {% data variables.product.prodname_copilot %}을 사용하려면 {% data variables.product.prodname_vs %} 2022 17.2 이상이 설치되어 있어야 합니다. 자세한 내용은 [Visual Studio IDE 설명서](https://visualstudio.microsoft.com/vs/)를 참조하세요.

{% note %}

**참고**: {% data variables.product.prodname_copilot %}은 현재 Mac용 Visual Studio를 통해 사용할 수 없습니다.

{% endnote %}

## {% data variables.product.prodname_vs %} 확장 설치

{% data variables.product.prodname_copilot %}을 사용하려면 먼저 {% data variables.product.prodname_vs %} 확장을 설치해야 합니다.
1. Visual Studio 도구 모음에서 **확장** 을 클릭한 다음 **확장 관리** 를 클릭합니다.
   ![Visual Studio 도구 모음의 스크린샷](/assets/images/help/copilot/visual-studio-toolbar.png)
1. “확장 관리” 창에서 **Visual Studio Marketplace** 를 클릭하고 {% data variables.product.prodname_copilot %} 확장을 검색한 다음 **다운로드** 를 클릭합니다.
   ![다운로드 버튼이 강조 표시된 Visual Studio용 GitHub Copilot 확장 스크린샷](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. “확장 관리” 창을 닫은 다음 {% data variables.product.prodname_vs %}를 종료하고 다시 시작합니다.
1. 필요에 따라 {% data variables.product.prodname_copilot %}이 설치되어 사용되고 있는지 확인하려면 **확장 관리** 로 돌아가 **설치** 를 클릭하여 현재 설치된 확장을 확인한 다음 **{% data variables.product.prodname_copilot %}** 을 클릭하여 상태 정보를 확인합니다.
  ![GitHub Copilot이 강조 표시된 채 Visual Studio에 설치된 확장의 스크린샷](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. {% data variables.product.prodname_vs %}에서 새 프로젝트를 열거나 만듭니다. 
1. “Microsoft {% data variables.product.prodname_vs %}” 대화 상자에서 디바이스 활성화 코드를 복사하려면 **확인** 을 클릭합니다.
   ![Microsoft {% data variables.product.prodname_vs %} 대화 상자의 스크린샷](/assets/images/help/copilot/vs-auth-dialogue.png)
1. 브라우저에서 디바이스 활성화 창이 열립니다. 디바이스 코드를 붙여넣은 다음 **계속** 을 클릭합니다.

   - Windows 또는 Linux에 코드를 붙여넣려면 <kbd>Ctrl</kbd>+<kbd>v</kbd>를 누릅니다.
   - macOS에 코드를 붙여넣려면 <kbd>command</kbd>+<kbd>v</kbd>를 누릅니다.
1. {% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_copilot %}에 필요한 권한을 요청합니다. 이러한 권한을 승인하려면 **{% data variables.product.prodname_copilot %} 플러그 인 권한 승인** 을 클릭합니다.
1. 권한을 승인하면 {% data variables.product.prodname_vs %}에 확인 메시지가 표시됩니다.
   ![{% data variables.product.prodname_vs %} 권한 확인 스크린샷](/assets/images/help/copilot/vs-confirmation.png)

## 첫 번째 제안 보기

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %} 다음 샘플은 C#이지만 다른 언어도 비슷하게 작동합니다.

{% data reusables.copilot.create-c-file %}
1. C# 파일에 다음 함수 시그니처를 입력합니다. {% data variables.product.prodname_copilot %}은 아래와 같이 회색 표시된 텍스트로 전체 함수 본문을 자동으로 제안합니다. 정확한 제안은 다를 수 있습니다.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Visual Studio Code {% data reusables.copilot.accept-suggestion %} 첫 번째](/assets/images/help/copilot/first-suggestion-visual-studio.png) 제안 스크린샷
 
## 대체 제안 보기
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. C# 파일에 다음 함수 시그니처를 입력합니다. {% data variables.product.prodname_copilot %}에 제안 사항이 표시됩니다.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. 대체 제안을 사용할 수 있는 경우 <kbd>Alt</kbd>+<kbd>]</kbd>(또는<kbd>Alt</kbd>+<kbd>[</kbd>)를 눌러 이를 확인할 수 있습니다.
1. 필요에 따라 제안을 마우스로 가리키면 제안을 선택하기 위한 {% data variables.product.prodname_copilot %} 명령 팔레트를 볼 수 있습니다.
{% data reusables.copilot.accept-or-reject-suggestion %}

## 주석에서 코드 제안 생성

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. C# 파일에 다음 주석을 입력합니다. {% data variables.product.prodname_copilot %}은 함수의 구현을 제안합니다.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## 추가 참고 자료

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
