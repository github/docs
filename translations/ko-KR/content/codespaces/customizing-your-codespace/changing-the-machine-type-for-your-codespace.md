---
title: codespace에 대한 컴퓨터 유형 변경
shortTitle: Change the machine type
intro: codespace를 실행하는 컴퓨터 유형을 변경하여 수행 중인 작업에 적합한 리소스를 사용할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: b8614e9389aa617b3bfcfa3444f5a60aa7dd3c2e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159087'
---
## 컴퓨터 유형 정보

{% data reusables.codespaces.codespaces-machine-types %} codespace를 만들 때 또는 codespace를 만든 후 언제든지 다른 머신 유형을 선택할 수 있습니다. 

codespace를 만들 때 컴퓨터 유형을 선택하는 방법에 대한 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %} 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

## 컴퓨터 유형 변경

{% note %}

**참고**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   각 codespace에 대한 현재 컴퓨터 유형이 표시됩니다.

   ![‘내 codespace’ 목록](/assets/images/help/codespaces/your-codespaces-list.png)

{% data reusables.codespaces.ellipsis-settings %}
1. **컴퓨터 유형 변경** 을 클릭합니다.

   ![‘컴퓨터 유형 변경’ 메뉴 옵션](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. codespace에 여러 컴퓨터 유형을 사용할 수 있는 경우 사용하려는 컴퓨터 유형을 선택합니다.

   ![선택할 수 있는 컴퓨터 유형을 보여 주는 대화 상자](/assets/images/help/codespaces/change-machine-type-choice.png)
1. **codespace 업데이트** 를 클릭합니다. 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

{% data variables.product.prodname_cli %} 명령을 사용하여 `gh codespace edit --machine MACHINE-TYPE-NAME` codespace의 컴퓨터 유형을 변경할 수 있습니다. 이 명령을 사용하려면 먼저 codespace에 사용할 수 있는 컴퓨터 유형을 찾아야 합니다.

1. codespace 목록을 보려면 터미널에서 다음 명령을 입력합니다.
   
   ```
   gh codespace list
   ```
1. 필요에 따라 codespace의 현재 컴퓨터 유형을 찾으려면 다음 명령을 입력합니다.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   을 codespace의 영구 이름(예`octocat-literate-space-parakeet-mld5`: )으로 바꿉 있습니다`CODESPACE-NAME`. 영구 이름은 에서 반환`gh codespace list`된 목록의 **NAME** 열 아래에 나열됩니다.

   범위를 요청하라는 `codespace` 메시지가 표시되면 터미널의 지침을 따릅니다.

   현재 컴퓨터에 대한 세부 정보가 필드 아래에 `machine` 나열됩니다.
1. codespace에 사용할 수 있는 컴퓨터 유형을 찾으려면 다음 명령을 입력합니다.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   을 codespace의 영구 이름(예`octocat-literate-space-parakeet-mld5`: )으로 바꿉 있습니다`CODESPACE-NAME`.
1. codespace에 대한 컴퓨터 유형을 변경하려면 다음 명령을 입력합니다.

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   을 codespace에 사용할 수 있는 컴퓨터 형식의 이름으로 바꿉 `MACHINE-TYPE-NAME` 니다(예: `standardLinux32gb`). 
1. 화살표 키를 사용하여 변경할 codespace로 이동한 다음 Enter 키를 누릅니 <kbd>다</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## 추가 정보

- REST API 설명서의 "[Codespaces 컴퓨터](/rest/codespaces/machines)"
- [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) {% data variables.product.prodname_cli %} 설명서

{% endcli %}
