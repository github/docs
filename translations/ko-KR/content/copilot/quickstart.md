---
title: GitHub Copilot용 빠른 시작
intro: '{% data variables.product.prodname_copilot %}은 코딩할 때 인라인 제안을 제공하여 작업에 도움이 될 수 있습니다.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: d2131a506990a959f803b13353b794a9dd347174
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193477'
---
## 소개

{% data variables.product.prodname_copilot %}은 AI 쌍 프로그래머입니다. {% data variables.product.prodname_copilot %}을 사용하여 편집기 내에서 전체 줄 또는 전체 함수에 대한 제안을 받을 수 있습니다.

이 가이드에서는 개인 계정을 통해 {% data variables.product.prodname_copilot %}에 등록하고 {% data variables.product.prodname_copilot %} 확장을 {% data variables.product.prodname_vscode %}에 설치하고 첫 번째 제안을 받는 방법을 보여줍니다. {% data variables.product.prodname_copilot %}에 대한 자세한 내용은 "[{% data variables.product.prodname_copilot %} 정보](/copilot/overview-of-github-copilot/about-github-copilot)"를 참조하세요. 다양한 환경에서 {% data variables.product.prodname_copilot %}을 사용하는 방법에 대한 자세한 내용은 "[시작하기](/copilot/getting-started-with-github-copilot)"를 참조하세요.

## 필수 조건

{% data reusables.copilot.copilot-prerequisites %}
- {% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_copilot %}을 사용하려면 {% data variables.product.prodname_vscode %}가 설치되어 있어야 합니다. 자세한 내용은 [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) 설명서를 참조하세요.

## {% data variables.product.prodname_copilot %} 등록

{% data variables.product.prodname_copilot %}을(를) 사용하기 전에 개인 계정에 대한 평가판 또는 구독을 설정해야 합니다. 

{% note %}

**참고:** {% data variables.product.prodname_copilot %} 구독이 있는 {% data variables.product.prodname_ghe_cloud %} 계정이 소유한 조직의 구성원이고 조직에서 {% data variables.product.prodname_copilot %} 좌석을 할당받은 경우 "[{% data variables.product.prodname_vscode %}에 대한 {% data variables.product.prodname_copilot %} 확장 설치](/copilot/quickstart#installing-the-github-copilot-extension-for-visual-studio-code)"를 진행할 수 있습니다.

{% endnote %}

{% data reusables.copilot.signup-procedure %}

## {% data variables.product.prodname_vscode %}용 {% data variables.product.prodname_copilot %} 확장 설치

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

## 첫 번째 제안 받기

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 다음 샘플은 JavaScript이지만 다른 언어도 비슷하게 작동합니다.

1. {% data variables.product.prodname_vscode %}를 엽니다.
{% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %}은 아래와 같이 회색 텍스트로 전체 함수 본문을 자동으로 제안합니다. 정확한 제안은 다를 수 있습니다.
![첫 번째 제안 {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## 다음 단계

{% data variables.product.prodname_copilot %}을 성공적으로 설치하고 첫 번째 제안을 받았지만 아직 시작일 뿐입니다. {% data variables.product.prodname_copilot %}을 사용하여 다음 단계를 수행하는 데 유용한 리소스는 다음과 같습니다.

- [시작하기](/copilot/getting-started-with-github-copilot): {% data variables.product.prodname_vscode %}에서 첫 번째 제안을 받는 방법을 알아보았습니다. 이 가이드에서는 지원되는 모든 환경에서 {% data variables.product.prodname_copilot %}의 다양한 기능을 설정하고 탐색하는 방법을 보여 줍니다.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): {% data variables.product.prodname_copilot %}이 작업에 도움이 되는 실제 예제를 참조하세요.
- [{% data variables.product.prodname_copilot %} 구성](/copilot/configuring-github-copilot): 이 가이드에서는 {% data variables.product.prodname_copilot %}을 개인 기본 설정으로 구성하는 방법에 대한 세부 정보를 제공합니다.


## 추가 참고 자료

- [{% data variables.product.prodname_copilot %} 정보](/copilot/overview-of-github-copilot/about-github-copilot)
