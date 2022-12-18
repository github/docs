---
title: codespace 이름 바꾸기
intro: '{% data variables.product.prodname_dotcom_the_website %} 또는 {% data variables.product.prodname_cli %}를 통해 codespace 표시 이름을 원하는 이름으로 변경할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
ms.openlocfilehash: dcb4558cce7ca0768524917a46cde2a49bacd1ce
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158719'
---
## codespace 이름 바꾸기 정보

각 codespace에는 자동 생성된 표시 이름이 할당됩니다. 여러 codespace가 있는 경우 표시 이름을 사용하여 codespace를 구분할 수 있습니다. 예: `literate space parakeet`. codespace의 표시 이름을 변경할 수 있습니다.

codespace의 표시 이름을 찾으려면 다음을 수행합니다.

- {% data variables.product.product_name %}에서 https://github.com/codespaces codespace 목록을 봅니다.

  ![GitHub의 codespace 목록 스크린샷](/assets/images/help/codespaces/codespaces-list-display-name.png)

- {% data variables.product.prodname_vscode %} 데스크톱 애플리케이션 또는 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트에서 원격 탐색기를 클릭합니다. 표시 이름은 목록의 두 번째 항목입니다. 예: `symmetrical space telegram` 아래 스크린샷.

  ![VS Code의 원격 탐색기 스크린샷](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- 로컬 머신의 터미널 창에서 다음 {% data variables.product.prodname_cli %} 명령(`gh codespace list`)을 사용합니다. 

### 영구 codespace 이름

codespace를 만들 때 표시 이름 외에도 codespace에 영구 이름이 할당됩니다. 이름은 {% data variables.product.company_short %} 핸들과 자동 생성된 표시 이름의 조합입니다. 예: `octocat-literate-space-parakeet-mld5` 영구 이름은 변경할 수 없습니다.

codespace의 영구 이름을 찾으려면 다음을 수행합니다.

* {% data variables.product.product_name %}에서 codespace의 표시 이름을 마우스로 가리키면 팝업에 https://github.com/codespaces영구 이름이 표시됩니다. 

   ![마우스로 가리킬 때 표시되는 codespace 이름 스크린샷](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* codespace에서 터미널에서 다음 명령을 사용합니다. `echo $CODESPACE_NAME`
* 로컬 머신의 터미널 창에서 다음 {% data variables.product.prodname_cli %} 명령(`gh codespace list`)을 사용합니다.

## codespace 이름 바꾸기

codespace의 표시 이름을 변경하는 것은 오랜 기간 동안 사용할 여러 codespace가 있는 경우에 유용할 수 있습니다. 적절한 이름을 사용하면 특정 용도로 사용하는 codespace를 식별할 수 있습니다. 

{% cli %}

{% data variables.product.prodname_cli %}를 사용하여 codespace의 표시 이름을 변경할 수 있습니다.

codespace의 이름을 변경하려면 `gh codespace edit` 하위 명령을 사용합니다.

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

이 예제 `PERMANENT-CODESPACE-NAME` 에서 을 표시 이름을 변경하려는 codespace의 영구 이름으로 바꿉 있습니다. 을 이 codespace에 사용할 표시 이름으로 바꿉 있습니다 `NEW-DISPLAY-NAME` .

자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}와 함께 {% data variables.product.prodname_cli %} 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace).

{% endcli %}

{% webui %}

{% data variables.product.prodname_dotcom_the_website %}에서 codespace의 표시 이름을 변경할 수 있습니다.

{% data reusables.codespaces.your-codespaces-procedure-step %}

    The current display name for each of your codespaces is displayed.

{% data reusables.codespaces.ellipsis-settings %}
1. **이름 바꾸기** 를 클릭합니다.

1. 프롬프트의 "표시 이름을 로 변경..."에서 원하는 표시 이름을 입력하고 **확인을** 클릭합니다.

{% endwebui %}
