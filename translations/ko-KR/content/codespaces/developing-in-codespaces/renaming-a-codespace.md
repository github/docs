---
title: codespace 이름 바꾸기
intro: '{% data variables.product.prodname_cli %}를 사용하여 codespace 표시 이름을 원하는 이름으로 변경할 수 있습니다.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Rename a codespace
ms.openlocfilehash: 0e597896f55c2afc89608546963c3b973d0c8a20
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009188"
---
## codespace 이름 바꾸기 정보

각 codespace에는 자동 생성된 표시 이름이 할당됩니다. 여러 codespace가 있는 경우 표시 이름을 사용하여 codespace를 구분할 수 있습니다. 예: `literate space parakeet`. codespace의 표시 이름을 변경할 수 있습니다.

codespace의 표시 이름을 찾으려면 다음을 수행합니다.

- {% data variables.product.product_name %}에서 https://github.com/codespaces codespace 목록을 봅니다.

  ![GitHub의 codespace 목록 스크린샷](/assets/images/help/codespaces/codespaces-list-display-name.png)

- {% data variables.product.prodname_vscode %} 데스크톱 애플리케이션 또는 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트에서 원격 탐색기를 클릭합니다. 표시 이름은 리포지토리 이름 아래에 표시됩니다. 예: `symmetrical space telegram` 아래 스크린샷.

  ![VS Code의 원격 탐색기 스크린샷](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- 로컬 머신의 터미널 창에서 다음 {% data variables.product.prodname_cli %} 명령(`gh codespace list`)을 사용합니다. 

### 영구 codespace 이름

codespace를 만들 때 표시 이름 외에도 codespace에 영구 이름이 할당됩니다. 이름은 {% data variables.product.company_short %} 핸들, 리포지토리 이름 및 일부 임의 문자의 조합입니다. 예: `octocat-myrepo-gmc7`. 이 이름은 변경할 수 없습니다.

codespace의 영구 이름을 찾으려면 다음을 수행합니다.

* {% data variables.product.product_name %}의 경우 https://github.com/codespaces 의 **브라우저에서 열기** 옵션을 마우스로 가리키면 팝업에 영구 이름이 표시됩니다. 

   ![마우스로 가리킬 때 표시되는 codespace 이름 스크린샷](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* codespace에서 터미널에서 다음 명령을 사용합니다. `echo $CODESPACE_NAME`
* 로컬 머신의 터미널 창에서 다음 {% data variables.product.prodname_cli %} 명령(`gh codespace list`)을 사용합니다.

## codespace 이름 바꾸기

codespace의 표시 이름을 변경하는 것은 오랜 기간 동안 사용할 여러 codespace가 있는 경우에 유용할 수 있습니다. 적절한 이름을 사용하면 특정 용도로 사용하는 codespace를 식별할 수 있습니다. {% data variables.product.prodname_cli %}를 사용하여 codespace의 표시 이름을 변경할 수 있습니다.

codespace의 이름을 변경하려면 `gh codespace edit` 하위 명령을 사용합니다.

```shell
gh codespace edit -c PERMANENT-NAME-OF-CODESPACE -d NEW-DISPLAY-NAME
```

이 예제에서는 `permanent name of the codespace`를 codespace의 영구 이름으로 바꿉니다. `new display name`을 원하는 표시 이름으로 바꿉니다.