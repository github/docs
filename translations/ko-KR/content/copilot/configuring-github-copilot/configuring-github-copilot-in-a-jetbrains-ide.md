---
title: JetBrains IDE에서 GitHub Copilot 구성
intro: 'JetBrains IDE에서 {% data variables.product.prodname_copilot %}을 활성화, 구성 및 비활성화할 수 있습니다.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
ms.openlocfilehash: 9f0f35bf5aebbf1899bd3991b0bca9e62f1da6ed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193574'
---
## JetBrains IDE의 {% data variables.product.prodname_copilot %} 정보

Jetbrains IDE를 사용하는 경우 {% data variables.product.prodname_copilot %}은 개발자가 입력할 때 코드를 자동으로 완성할 수 있습니다. 설치 후 {% data variables.product.prodname_copilot %}을 활성화 또는 비활성화할 수 있으며, IDE 내에서 또는 {% data variables.product.prodname_dotcom_the_website %}에서 고급 설정을 구성할 수 있습니다. 이 문서에서는 IntelliJ IDE에서 {% data variables.product.prodname_copilot %}를 구성하는 방법을 설명하지만 다른 Jetbrains IDE의 사용자 인터페이스는 다를 수 있습니다.

{% data reusables.copilot.dotcom-settings %}

## 필수 조건

JetBrains IDE에서 {% data variables.product.prodname_copilot %}을 구성하려면 {% data variables.product.prodname_copilot %} 플러그 인을 설치해야 합니다. 자세한 내용은 "[JetBrains IDE에서 {% data variables.product.prodname_copilot %} 시작하기](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)"를 참조하세요.

## {% data variables.product.prodname_copilot %}의 바로 가기 키

{% data variables.product.prodname_copilot %}을 사용할 때 JetBrains IDE의 인라인 제안에 기본 바로 가기 키를 사용할 수 있습니다. 또는 각 특정 명령에 대해 바로 가기를 기본 설정 바로 가기 키로 다시 바인딩할 수 있습니다. JetBrains IDE에서 바로 가기 키를 다시 바인딩하는 방법에 대한 자세한 내용은 JetBrains 설명서를 참조하세요. 예를 들어 [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) 설명서를 볼 수 있습니다.

{% mac %}

| 작업 | 바로 가기 |
|:---|:---|
|인라인 제안 수락|<kbd>탭</kbd>|
|인라인 제안 거부|<kbd>Esc</kbd>|
|다음 인라인 제안 표시|<kbd>옵션(⌥) 또는 Alt</kbd>+<kbd>]</kbd>|
|이전 인라인 제안 표시|<kbd>옵션(⌥) 또는 Alt</kbd>+<kbd>[</kbd>|
|인라인 제안 트리거|<kbd>옵션(⌥)</kbd>+<kbd>\</kbd>|
|{% data variables.product.prodname_copilot %} 열기(별도 창의 추가 제안)|<kbd>옵션(⌥) 또는 Alt</kbd>+<kbd>Return</kbd> |

{% endmac %}

{% windows %}

| 작업 | 바로 가기 |
|:---|:---|
|인라인 제안 수락|<kbd>탭</kbd>|
|인라인 제안 거부|<kbd>Esc</kbd>|
|다음 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>]</kbd>|
|이전 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>[</kbd>|
|인라인 제안 트리거|<kbd>Alt</kbd>+<kbd>\</kbd>|
|{% data variables.product.prodname_copilot %} 열기(별도 창의 추가 제안)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endwindows %}

{% linux %}

| 작업 | 바로 가기 |
|:---|:---|
|인라인 제안 수락|<kbd>탭</kbd>|
|인라인 제안 거부|<kbd>Esc</kbd>|
|다음 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>]</kbd>|
|이전 인라인 제안 표시|<kbd>Alt</kbd>+<kbd>[</kbd>|
|인라인 제안 트리거|<kbd>Alt</kbd>+<kbd>\</kbd>|
|{% data variables.product.prodname_copilot %} 열기(별도 창의 추가 제안)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endlinux %}

## {% data variables.product.prodname_copilot %} 사용 또는 사용 안 함

JetBrains IDE 내에서 {% data variables.product.prodname_copilot %}을 사용하거나 사용하지 않도록 설정할 수 있습니다. JetBrains 창의 아래쪽 패널에 있는 {% data variables.product.prodname_copilot %} 상태 아이콘은 {% data variables.product.prodname_copilot %}이 사용하도록 설정되었는지 여부를 나타냅니다. 사용하도록 설정하면 아이콘이 강조 표시됩니다. 사용하지 않도록 설정하면 아이콘이 회색으로 표시됩니다.

1. {% data variables.product.prodname_copilot %}을 사용하거나 사용하지 않도록 설정하려면 JetBrains 창의 아래쪽 패널에서 상태 아이콘을 클릭합니다.
   ![JetBrains의 상태 아이콘](/assets/images/help/copilot/status-icon-jetbrains.png)
2. {% data variables.product.prodname_copilot %}을 사용하지 않도록 설정하는 경우 전역적으로 또는 현재 편집 중인 파일의 언어에 대해 사용하지 않도록 설정할지 묻는 메시지가 표시됩니다. 전역적으로 사용하지 않도록 설정하려면 **완성 사용 안 함** 을 클릭합니다. 또는 언어별 단추를 클릭하여 지정된 언어에 대해 {% data variables.product.prodname_copilot %}을 사용하지 않도록 설정합니다.
   ![전역적으로 또는 현재 언어에 대해 {% data variables.product.prodname_copilot %} 사용 안 함](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## {% data variables.product.prodname_copilot %}에 대한 고급 설정 구성

JetBrains IDE에서 {% data variables.product.prodname_copilot %}에 대한 고급 설정(예: IDE에서 코드 완성을 표시하는 방법, {% data variables.product.prodname_copilot %}에 대해 사용하거나 사용하지 않도록 설정할 언어)을 관리할 수 있습니다.

1. JetBrains IDE에서 **파일** 메뉴를 클릭한 다음 **설정** 을 클릭합니다.
1. **언어 및 프레임워크** 에서 **{% data variables.product.prodname_copilot %}** 을 클릭합니다.
1. 개인 기본 설정에 따라 설정을 편집합니다.
   - 코드 제안의 동작 및 모양을 조정하고 업데이트를 자동으로 확인할지 여부를 변경하려면 해당 확인란을 선택하거나 선택 취소합니다.
   - 자동 업데이트를 수신하도록 선택한 경우 안정적이고 덜 빈번한 업데이트를 받을지 또는 덜 안정적일 수 있는 야간 업데이트를 받을지 선택할 수 있습니다. **업데이트 채널** 드롭다운을 클릭하고 안정적인 업데이트의 경우 **안정적** 을 선택하고 야간 업데이트의 경우 **야간** 업데이트를 선택합니다.
   - "사용 안 함 언어"에서 확인란을 사용하여 {% data variables.product.prodname_copilot %}을(를) 사용하지 않도록 설정할 언어를 선택하거나 선택 취소합니다.

## {% data variables.product.prodname_copilot %}에 대한 프록시 설정 구성

Jetbrains IDE의 HTTP 프록시 서버를 통해 연결하도록 {% data variables.product.prodname_copilot %}을(를) 구성할 수 있습니다. {% data variables.product.prodname_copilot %}은(는) 기본 인증을 사용하거나 사용하지 않고 기본 HTTP 프록시 설정을 지원합니다. 

1. JetBrains IDE에서 **파일** 메뉴를 클릭한 다음 **설정** 을 클릭합니다.
1. **모양 & 동작** 에서 **시스템 설정을** 클릭한 다음 **HTTP 프록시** 를 클릭합니다.
1. **수동 프록시 구성** 확인란을 선택한 다음 **HTTP** 확인란을 선택합니다.
1. "호스트 이름" 필드에 프록시 서버의 호스트 이름을 입력하고 "포트 번호" 필드에 프록시 서버의 포트 번호를 입력합니다.

    ![JetBrains의 HTTP 프록시 설정 스크린샷](/assets/images/help/copilot/proxy-configuration-jetbrains.png)

1. 필요에 따라 왼쪽 사이드바에서 **도구를** 클릭한 다음 **서버 인증서를** 클릭합니다. 그런 다음 신뢰할 수 없는 인증서를 자동으로 수락할지 여부에 따라 "신뢰할 수 없는 인증서 자동 허용" 확인란을 선택하거나 선택 취소합니다.

    ![JetBrains의 서버 인증서 설정 스크린샷](/assets/images/help/copilot/server-certificates-jetbrains.png)

{% data reusables.copilot.dotcom-settings %}
