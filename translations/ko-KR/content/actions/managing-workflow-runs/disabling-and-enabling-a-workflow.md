---
title: 워크플로를 사용/사용하지 않도록 설정
intro: '{% data variables.product.prodname_dotcom %} UI, REST API 또는 {% data variables.product.prodname_cli %}를 사용하여 워크플로를 사용하지 않도록 설정하고 다시 사용하도록 설정할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 38b6f4b4cf006d8c49a904a3dd9c2d75d8addaff
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045700'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

워크플로를 사용하지 않도록 설정하면 리포지토리에서 파일을 삭제하지 않고도 워크플로가 트리거되지 않도록 할 수 있습니다. {% data variables.product.prodname_dotcom %}에서 워크플로를 다시 쉽게 다시 사용하도록 설정할 수 있습니다.

워크플로를 일시적으로 사용하지 않도록 설정하는 것은 많은 시나리오에서 유용할 수 있습니다. 워크플로를 사용하지 않도록 설정하는 것이 도움이 될 수 있는 몇 가지 예는 다음과 같습니다.

- 너무 많거나 잘못된 요청을 생성하여 외부 서비스에 부정적인 영향을 주는 워크플로 오류
- 중요하지 않고 계정에서 너무 많은 시간을 사용하는 워크플로
- 다운된 서비스에 요청을 보내는 워크플로
- 필요하지 않은 포크된 리포지토리의 워크플로(예: 예약된 워크플로)

{% warning %}

**경고:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

REST API를 사용하여 워크플로를 사용하거나 사용하지 않도록 설정할 수도 있습니다. 자세한 내용은 “[작업 REST API](/rest/reference/actions#workflows)”를 참조하세요.

## 워크플로 사용 안 함

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 왼쪽 사이드바에서 사용하지 않도록 설정할 워크플로를 클릭합니다.

   {% ifversion workflow-nav-2022 -%} ![ 작업 선택 워크플로](/assets/images/help/repository/actions-select-workflow-2022.png) {%- else -%} ![작업 선택 워크플로](/assets/images/help/repository/actions-select-workflow.png) {%- endif %}
1. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭합니다.

   {% ifversion workflow-nav-2022 -%} ![ 작업 케밥 메뉴](/assets/images/help/repository/actions-workflow-menu-kebab-2022.png) {%- else -%} ![작업 케밥 메뉴](/assets/images/help/repository/actions-workflow-menu-kebab.png) {%- endif %}
1. **워크플로 사용 안 함** 을 클릭합니다.

   {% ifversion workflow-nav-2022 -%} ![ 작업에서 워크플로](/assets/images/help/repository/actions-disable-workflow-2022.png) 를 사용하지 않도록 설정 {%- else -%} ![작업에서 워크플로를 사용하지 않도록 설정](/assets/images/help/repository/actions-disable-workflow.png)

   비활성화된 워크플로는 {% 옥티콘 "stop" aria-label="중지 아이콘" %}으로 표시되어 상태를 나타냅니다.

   ![작업 목록 사용 안 함 워크플로](/assets/images/help/repository/actions-find-disabled-workflow.png) {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

워크플로를 사용하지 않도록 설정하려면 `workflow disable` 하위 명령을 사용합니다. `workflow`를 사용하지 않도록 설정할 워크플로의 이름, ID 또는 파일 이름으로 바꿉니다. `"Link Checker"`, `1234567` 또는 `"link-check-test.yml"`). 워크플로를 지정하지 않으면 {% data variables.product.prodname_cli %}에서 워크플로를 선택할 수 있는 대화형 메뉴를 반환합니다.

```shell
gh workflow disable WORKFLOW
```

{% endcli %}

## 워크플로 사용

{% webui %}

이전에 사용하지 않도록 설정한 워크플로를 다시 사용하도록 설정할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 왼쪽 사이드바에서 사용할 워크플로를 클릭합니다.

   {% ifversion workflow-nav-2022 -%} ![ 작업 선택 사용 안 함 워크플로](/assets/images/help/repository/actions-select-disabled-workflow-2022.png) {%- else -%} ![작업 선택 비활성화된 워크플로](/assets/images/help/repository/actions-select-disabled-workflow.png) {%- endif %}
1. **워크플로 사용** 을 클릭합니다.

   {% ifversion workflow-nav-2022 -%} ![ 작업 사용 워크플로](/assets/images/help/repository/actions-enable-workflow-2022.png) {%- else -%} ![작업으로 워크플로](/assets/images/help/repository/actions-enable-workflow.png) {%- endif %} 사용

{% endwebui %}

{% cli %}

워크플로를 사용하도록 설정하려면 `workflow enable` 하위 명령을 사용합니다. `workflow`를 사용하도록 설정할 워크플로의 이름, ID 또는 파일 이름으로 바꿉니다. `"Link Checker"`, `1234567` 또는 `"link-check-test.yml"`). 워크플로를 지정하지 않으면 {% data variables.product.prodname_cli %}에서 워크플로를 선택할 수 있는 대화형 메뉴를 반환합니다.

```shell
gh workflow enable WORKFLOW
```

{% endcli %}
