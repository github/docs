---
title: Visual Studio에서 GitHub Copilot 구성
intro: '{% data variables.product.prodname_vs %}에서 {% data variables.product.prodname_copilot %}을 활성화, 구성 및 비활성화할 수 있습니다.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: 05ac86405caadf3085b15a2aed9b54acb84f91f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193470'
---
## {% data variables.product.prodname_vs %}의 {% data variables.product.prodname_copilot %} 정보

{% data variables.product.prodname_vs %}를 사용하는 경우 {% data variables.product.prodname_copilot %}은 개발자가 입력할 때 코드를 자동으로 완성할 수 있습니다. 설치 후 {% data variables.product.prodname_copilot %}을 활성화 또는 비활성화할 수 있으며, {% data variables.product.prodname_vs %} 내에서 또는 {% data variables.product.prodname_dotcom_the_website %}에서 고급 설정을 구성할 수 있습니다.

## 필수 조건

{% data variables.product.prodname_vs %}에서 {% data variables.product.prodname_copilot %}을 구성하려면 {% data variables.product.prodname_copilot %} 플러그 인을 설치해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_vs %}에서 {% data variables.product.prodname_copilot %} 시작하기](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio)”를 참조하세요.

## {% data variables.product.prodname_copilot %}의 바로 가기 키

{% data variables.product.prodname_copilot %}을 사용할 때 {% data variables.product.prodname_vs %}에서 기본 바로 가기 키를 사용할 수 있습니다. 또는 각 특정 명령에 대해 원하는 바로 가기 키를 사용하여 {% data variables.product.prodname_vs %}에 대한 도구 설정의 바로 가기를 다시 바인딩할 수 있습니다. 바로 가기 키 편집기에서 명령 이름으로 각 바로 가기 키를 검색할 수 있습니다.

| 작업 | 바로 가기 | 명령 이름 |
|:---|:---|:---|
|다음 인라인 제안 표시|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|이전 인라인 제안 표시|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|인라인 제안 트리거|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## 바로 가기 키 다시 바인딩

{% data variables.product.prodname_copilot %}을 사용할 때 {% data variables.product.prodname_vs %}에서 기본 바로 가기 키를 사용하지 않으려면 각 특정 명령에 대해 원하는 바로 가기 키를 사용하여 키보드 편집기에서 바로 가기 키를 다시 바인딩할 수 있습니다.

1. {% data variables.product.prodname_vs %} 도구 모음의 **도구** 아래에서 **옵션** 을 클릭합니다.
   
   ![{% data variables.product.prodname_vs %} 도구 모음의 “옵션” 옵션 스크린샷](/assets/images/help/copilot/vs-toolbar-options.png)

1. "옵션" 대화 상자의 **환경** 아래에서 **키보드** 를 클릭합니다.
   
   !["옵션" 대화 상자의 키보드 옵션 스크린샷](/assets/images/help/copilot/vs-options-dialogue.png)

1. "다음 문자열을 포함하는 명령 표시:"에서 다시 바인딩할 명령을 검색합니다.
   
   ![검색 창이 포함된 show 명령의 스크린샷](/assets/images/help/copilot/vs-show-commands-containing.png)

1. "바로 가기 키 누르기"에서 명령에 할당할 바로 가기를 입력한 다음 **할당** 을 클릭합니다.

   ![바로 가기 키 할당의 스크린샷](/assets/images/help/copilot/vs-rebind-shortcut.png)```

{% data reusables.copilot.enabling-or-disabling-vs %}

## {% data variables.product.prodname_copilot %}에 대한 ReSharper 구성

ReSharper를 사용하는 경우 {% data variables.product.prodname_copilot %}의 네이티브 IntelliSense를 사용하도록 ReSharper를 구성하면 {% data variables.product.prodname_copilot %}이 가장 잘 작동할 수 있습니다. ReSharper에 대한 자세한 내용은 [ReSharper 설명서](https://www.jetbrains.com/resharper/documentation/documentation.html)를 참조하세요.

1. {% data variables.product.prodname_vs %} 도구 모음의 **도구** 아래에서 **옵션** 을 클릭합니다.
   ![{% data variables.product.prodname_vs %} 도구 모음의 “옵션” 옵션 스크린샷](/assets/images/help/copilot/vs-toolbar-options.png)
1. "옵션" 대화 상자의 **환경** 아래에서 **IntelliSense** 를 클릭한 다음 **일반** 을 클릭합니다.
    !["옵션" 대화 상자의 IntelliSense 옵션 스크린샷](/assets/images/help/copilot/vs-options-intellisense.png)
1. "일반" 아래에서 **Visual Studio** 를 선택하고 **저장** 을 클릭합니다.

{% data reusables.copilot.dotcom-settings %}
