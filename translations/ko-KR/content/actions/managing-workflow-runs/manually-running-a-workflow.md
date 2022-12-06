---
title: 수동으로 워크플로 실행
intro: '워크플로가 `workflow_dispatch` 이벤트에서 실행되도록 구성된 경우 {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %} 또는 REST API의 작업 탭을 사용하여 워크플로를 실행할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: efee0122375b04b6790f630685766312dcad28bc
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045708'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 수동으로 실행하도록 워크플로 구성

워크플로를 수동으로 실행하려면 워크플로가 `workflow_dispatch` 이벤트에서 실행되도록 구성해야 합니다. `workflow_dispatch` 이벤트를 트리거하려면 워크플로가 기본 분기에 있어야 합니다. `workflow_dispatch` 이벤트 구성에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows#workflow_dispatch)”를 참조하세요.

{% data reusables.repositories.permissions-statement-write %}

## 워크플로 실행

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 왼쪽 사이드바에서 실행할 워크플로를 클릭합니다.

   {% ifversion workflow-nav-2022 -%} ![ 작업 선택 워크플로](/assets/images/help/repository/actions-select-workflow-2022.png) {%- else -%} ![작업 선택 워크플로](/assets/images/help/repository/actions-select-workflow.png) {%- endif %}
1. 워크플로 실행 목록 위에서 **워크플로 실행** 을 선택합니다.
![작업 워크플로 디스패치](/assets/images/actions-workflow-dispatch.png)
1. **분기** 드롭다운을 사용하여 워크플로의 분기를 선택하고 입력 매개 변수를 입력합니다. **워크플로 실행** 을 클릭합니다.
![작업을 수동으로 실행 워크플로](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

워크플로를 실행하려면 `workflow run` 하위 명령을 사용합니다. `workflow` 매개 변수를 실행할 워크플로의 이름, ID 또는 파일 이름으로 바꿉니다. `"Link Checker"`, `1234567` 또는 `"link-check-test.yml"`). 워크플로를 지정하지 않으면 {% data variables.product.prodname_cli %}에서 워크플로를 선택할 수 있는 대화형 메뉴를 반환합니다.

```shell
gh workflow run WORKFLOW
```

워크플로에서 입력을 수락하면 {% data variables.product.prodname_cli %}에서 입력하라는 메시지가 표시됩니다. 또는 `-f` 또는 `-F`를 사용하여 `key=value` 형식에 입력을 추가할 수 있습니다. `-F`를 사용하여 파일에서 읽습니다.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

표준 입력을 사용하여 입력을 JSON으로 전달할 수도 있습니다.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

리포지토리의 기본 분기가 아닌 분기에서 워크플로를 실행하려면 `--ref` 플래그를 사용합니다.

```shell
gh workflow run WORKFLOW --ref BRANCH
```

워크플로 실행의 진행률을 보려면 `run watch` 하위 명령을 사용하고 대화형 목록에서 실행을 선택합니다.

```shell
gh run watch
```

{% endcli %}

## REST API를 사용하여 워크플로 실행

REST API를 사용하는 경우 `inputs`와 `ref`를 요청 본문 매개 변수로 구성합니다. 입력을 생략하면 워크플로 파일에 정의된 기본값이 사용됩니다.

{% note %}

**참고:** `workflow_dispatch` 이벤트에 대해 최대 10개의 `inputs`을 정의할 수 있습니다.

{% endnote %}

REST API 사용에 대한 자세한 내용은 “[워크플로 디스패치 이벤트 만들기](/rest/reference/actions/#create-a-workflow-dispatch-event)”를 참조하세요.
