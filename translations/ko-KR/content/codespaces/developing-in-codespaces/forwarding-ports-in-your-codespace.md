---
title: codespace에서 포트 전달
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158911'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## 전달된 포트 정보

포트 전달은 codespace 내에서 실행 중인 TCP 포트에 대한 액세스 권한을 제공합니다. 예를 들어 codespace의 특정 포트에서 웹 애플리케이션을 실행하는 경우 해당 포트를 전달할 수 있습니다. 이렇게 하면 테스트 및 디버깅을 위해 로컬 컴퓨터의 브라우저에서 애플리케이션에 액세스할 수 있습니다.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. 포트 목록에서 **포트 추가** 를 클릭합니다.

   ![포트 단추 추가](/assets/images/help/codespaces/add-port-button.png)

1. 포트 번호 또는 주소를 입력한 다음 Enter 키를 누릅니다.

   ![포트 단추를 입력할 텍스트 상자](/assets/images/help/codespaces/port-number-text-box.png)

## HTTPS 전달 사용

기본적으로 {% data variables.product.prodname_github_codespaces %}는 HTTP를 사용하여 포트를 전달하지만 필요에 따라 HTTPS를 사용하도록 모든 포트를 업데이트할 수 있습니다. HTTPS를 사용하도록 공용 표시 유형으로 포트를 업데이트하면 포트의 표시 유형이 자동으로 프라이빗으로 변경됩니다.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 업데이트할 포트를 마우스 오른쪽 단추로 클릭한 다음 **포트 프로토콜 변경** 위로 마우스를 가져다 놓습니다.
  ![포트 프로토콜을 변경하는 옵션](/assets/images/help/codespaces/update-port-protocol.png)
1. 이 포트에 필요한 프로토콜을 선택합니다. 선택한 프로토콜은 codespace의 수명 동안 이 포트에 대해 기억됩니다.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 공유하려는 포트를 마우스 오른쪽 단추로 클릭하고 “포트 표시 유형” 메뉴를 선택한 다음 **조직에 공개** 또는 **공개** 를 클릭합니다.
  ![마우스 오른쪽 단추 클릭 메뉴에서 포트 표시 유형을 선택하는 옵션](/assets/images/help/codespaces/make-public-option.png)
1. 포트의 로컬 주소 오른쪽에 있는 복사 아이콘을 클릭합니다.
  ![포트 URL에 대한 복사 아이콘](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 복사한 URL을 포트를 공유하려는 사람에게 보냅니다.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. 포트 목록에서 **포트 추가** 를 클릭합니다.

   ![포트 단추 추가](/assets/images/help/codespaces/add-port-button.png)

1. 포트 번호 또는 주소를 입력한 다음 Enter 키를 누릅니다.

   ![포트 단추를 입력할 텍스트 상자](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 공유하려는 포트를 마우스 오른쪽 단추로 클릭하고 “포트 표시 유형” 메뉴를 선택한 다음 **조직에 공개** 또는 **공개** 를 클릭합니다.
  ![마우스 오른쪽 단추 클릭 메뉴에서 포트를 공개로 지정하는 옵션](/assets/images/help/codespaces/make-public-option.png)
1. 포트의 로컬 주소 오른쪽에 있는 복사 아이콘을 클릭합니다.
  ![포트 URL에 대한 복사 아이콘](/assets/images/help/codespaces/copy-icon-port-url.png)
1. 복사한 URL을 포트를 공유하려는 사람에게 보냅니다.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

포트를 전달하려면 `gh codespace ports forward` 하위 명령을 사용합니다. 연결하려는 원격 및 로컬 포트로 `codespace-port:local-port`를 바꿉니다. 명령을 입력한 후 표시되는 codespace 목록에서 선택합니다.

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

이 명령에 대한 자세한 내용은 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_codespace_ports_forward)를 참조하세.

전달된 포트의 세부 정보를 보려면 `gh codespace ports`를 입력 한 다음 codespace를 선택합니다.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

전달된 포트의 표시 유형을 변경하려면 `gh codespace ports visibility` 하위 명령을 사용합니다. {% data reusables.codespaces.port-visibility-settings %}

전달된 포트 번호로 `codespace-port`를 바꿉니다. `setting`을 `private``org` 또는`public`으로 바꿉니다. 명령을 입력한 후 표시되는 codespace 목록에서 선택합니다.

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

하나의 명령을 사용하여 여러 포트에 대한 표시 유형을 설정할 수 있습니다. 예를 들면 다음과 같습니다.

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

이 명령에 대한 자세한 내용은 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_codespace_ports_visibility)를 참조하세요.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

codespace에 대해 전달된 포트를 나열하면 포트 레이블을 볼 수 있습니다. 이렇게 하려면 명령을 사용한 `gh codespace ports` 다음 codespace를 선택합니다.

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## 포트 전달

codespace의 포트를 로컬 컴퓨터의 포트로 전달하는 방법에 대한 자세한 내용은 JetBrains 설명서의 "[보안 모델](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)" 문서의 "포트 전달" 섹션을 참조하세요.

또는 {% data variables.product.prodname_cli %}를 사용하여 포트를 전달할 수 있습니다. 자세한 내용은 이 페이지 맨 위에 있는 "{% data variables.product.prodname_cli %}" 탭을 클릭합니다.

{% endjetbrains %}
