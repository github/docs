---
title: codespace 중지 및 시작
intro: codespace를 중지하고 시작하여 리소스를 저장하고 작업을 일시 중지할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 290a39d9d60420230bd9b11d5e2d10119ccc1c72
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158807'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## codespace 중지 및 시작 정보

{% data reusables.codespaces.stopping-a-codespace %}

codespace를 만들거나 액세스하는 위치에 관계없이 에서 브라우저 https://github.com/codespaces에서 보고 관리할 수 있습니다. 

## Codespace 중지

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. 중지하려는 codespace 오른쪽에서 elipsis(**...**)를 클릭합니다.
 1. **codespace 중지** 를 클릭합니다.
   ![codespace를 중지하는 옵션의 스크린샷](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 codespace를 중지하려면 하위 명령을 사용한 `gh codespace stop` 다음, 표시되는 목록에서 중지할 codespace를 선택합니다.

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. **Codespaces: 옵션 목록에서 Codespace 중지** 를 입력 `stop` 하고 선택합니다.
1. codespace 목록에서 중지할 codespace를 선택합니다.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. {% data variables.product.prodname_github_codespaces %} 도구 창에서 중지 아이콘을 클릭합니다.

   ![로그 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

{% endjetbrains %}

## codespace 다시 시작

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. 다시 시작하려는 codespace의 이름을 클릭합니다.
![중지된 codespace의 스크린샷](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

codespace를 다시 시작하면 {% data variables.product.prodname_vscode %} 또는 브라우저에서 열도록 선택할 수 있습니다. 

 - codespace를 다시 시작하고 {% data variables.product.prodname_vscode %}에서 열려면 하위 명령을 사용한 `gh codespace code` 다음, 표시된 목록에서 다시 시작할 codespace를 선택합니다.

 ```shell{:copy} 
 gh codespace code
 ```

 - codespace를 다시 시작하고 브라우저에서 열려면 하위 명령을 사용한 `gh codespace open --web` 다음 표시되는 목록에서 다시 시작할 codespace를 선택합니다.

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. **Codespaces: 옵션 목록에서 Codespace에 연결을** 입력 `connect` 하고 선택합니다.
1. codespace 목록에서 다시 시작할 codespace를 선택합니다.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## 추가 정보

- "[codespace 수명 주기](/codespaces/developing-in-codespaces/the-codespace-lifecycle)"
