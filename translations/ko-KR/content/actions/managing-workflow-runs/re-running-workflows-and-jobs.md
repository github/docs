---
title: 워크플로 및 작업 다시 실행
shortTitle: Re-run workflows and jobs
intro: '워크플로 실행{% ifversion re-run-jobs %}, 워크플로 실행에서 실패한 모든 작업 또는 워크플로 실행의 특정 작업{% endif %}을 처음 실행한 후 최대 30일 후에 다시 실행할 수 있습니다.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 49928ed03ba17e77bdef88644d3039bc9bdf5462
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045716'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 워크플로 및 작업 다시 실행 정보

워크플로{% ifversion re-run-jobs %} 또는 워크플로의 작업{% endif %}의 다시 실행은 워크플로 실행을 트리거한 원래 이벤트의 동일한 `GITHUB_SHA`(커밋 SHA) 및 `GITHUB_REF`(Git ref)를 사용합니다. {% ifversion actions-stable-actor-ids %}워크플로는 다시 실행을 시작한 행위자의 권한이 아니라 처음에 워크플로를 트리거한 행위자의 권한을 사용합니다. {% endif %}처음 실행하고 최대 30일 후에 워크플로{% ifversion re-run-jobs %} 또는 워크플로의 작업{% endif %}을 다시 실행할 수 있습니다.{% ifversion re-run-jobs %} 로그가 보존 한도를 초과하면 워크플로에서 작업을 다시 실행할 수 없습니다. 자세한 내용은 “[사용량 제한, 청구 및 관리](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy)”를 참조하세요.{% endif %}{% ifversion debug-reruns %} 워크플로에서 워크플로 또는 작업을 다시 실행할 때 다시 실행하기 위해 디버그 로깅을 사용하도록 설정할 수 있습니다. 이렇게 하면 다시 실행에 대한 실행기 진단 로깅 및 단계 디버그 로깅이 사용하도록 설정됩니다. 디버그 로깅에 대한 자세한 내용은 “[디버그 로깅 사용](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)”을 참조하세요.{% endif %}

## 워크플로에서 모든 작업 다시 실행

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% ifversion fpt 또는 ghes > 3.4 또는 ghae 또는 ghec -%}
1. 워크플로의 오른쪽 위 모서리에서 **{% octicon "sync" aria-label="동기화 아이콘" %} 작업** 드롭다운 메뉴를 다시 실행하고 **모든 작업을 다시 실행** 합니다.

   작업이 실패하지 않으면 **{% octicon "sync" aria-label="동기화 아이콘" %} 다시 실행 작업** 드롭다운 메뉴가 표시되지 않습니다. 대신 **모든 작업 다시 실행** 을 클릭합니다.

   ![다시 실행 검사 드롭다운 메뉴](/assets/images/help/repository/rerun-checks-drop-down.png) {%- endif %} {% ifversion ghes < 3.5 또는 ghae -%}
1. 워크플로의 오른쪽 위 모서리에서 **작업 다시 실행** 드롭다운 메뉴를 사용하고 **모든 작업 다시 실행** 을 선택합니다.

   ![다시 실행 검사 드롭다운 메뉴](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {%- endif %} {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

실패한 워크플로 실행을 다시 실행하려면 `run rerun` 하위 명령을 사용합니다. `run-id`를 다시 실행하려는 실패한 실행의 ID로 바꿉니다.  `run-id`를 지정하지 않으면 {% data variables.product.prodname_cli %}가 최근 실패한 실행을 선택할 수 있는 대화형 메뉴를 반환합니다.

```shell
gh run rerun RUN_ID
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun RUN_ID --debug
```

{% endif %}

워크플로 실행의 진행률을 보려면 `run watch` 하위 명령을 사용하고 대화형 목록에서 실행을 선택합니다.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## 워크플로에서 실패한 작업 다시 실행

워크플로 실행의 작업이 실패한 경우 실패한 작업만 다시 실행할 수 있습니다. 워크플로에서 실패한 작업을 다시 실행하면 실패한 모든 작업 및 해당 종속 작업에 대해 새 워크플로 실행이 시작됩니다. 이전 워크플로 실행에서 성공한 작업에 대한 모든 출력은 다시 실행에 사용됩니다. 초기 실행에서 만든 모든 아티팩트가 다시 실행될 때 사용할 수 있습니다. 이전 실행에서 전달된 모든 환경 보호 규칙은 다시 실행에서 자동으로 전달됩니다.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 워크플로의 오른쪽 위 모서리에서 **{% octicon "sync" aria-label="동기화 아이콘" %} 작업** 드롭다운 메뉴를 다시 **실행하고 실패한 작업을 다시 실행** 합니다.

   ![다시 실행 검사 드롭다운 메뉴](/assets/images/help/repository/rerun-checks-drop-down.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

워크플로 실행에서 실패한 작업을 다시 실행하려면 `--failed` 플래그와 함께 `run rerun` 하위 명령을 사용합니다. `run-id`를 실패한 작업을 다시 실행하려는 실행의 ID로 바꿉니다. `run-id`를 지정하지 않으면 {% data variables.product.prodname_cli %}가 최근 실패한 실행을 선택할 수 있는 대화형 메뉴를 반환합니다.

```shell
gh run rerun RUN_ID --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun RUN_ID --failed --debug
```

{% endif %} {% endcli %}

## 워크플로에서 특정 작업 다시 실행

워크플로에서 특정 작업을 다시 실행하면 작업 및 종속 항목에 대해 새 워크플로 실행이 시작됩니다. 이전 워크플로 실행의 다른 작업에 대한 출력은 다시 실행에 사용됩니다. 초기 실행에서 만든 모든 아티팩트가 다시 실행될 때 사용할 수 있습니다. 이전 실행에서 전달된 모든 환경 보호 규칙은 다시 실행에서 자동으로 전달됩니다.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 다시 실행하려는 작업 옆에 있는 {% octicon "sync" aria-label="The re-run icon" %} 아이콘을 클릭합니다.
   ![선택한 작업 다시 실행](/assets/images/help/repository/re-run-selected-job.png)

   또는 작업을 클릭하여 로그를 봅니다. 로그에서 {% octicon "sync" aria-label="The re-run icon" %} 아이콘을 클릭합니다.
   ![선택한 작업 다시 실행](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

워크플로 실행에서 특정 작업을 다시 실행하려면 `--job` 플래그와 함께 `run rerun` 하위 명령을 사용합니다. `job-id`를 다시 실행하려는 작업의 ID로 바꿉니다.

```shell
gh run rerun --job JOB_ID
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job JOB_ID --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## 재사용 가능한 워크플로를 사용하여 워크플로 및 작업 다시 실행

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt 또는 ghes > 3.4 또는 ghae 또는 ghec %}
## 이전 워크플로 실행 검토

워크플로를 실행할 때 이전 시도의 결과를 볼 수 있습니다. API를 사용하여 이전 워크플로 실행을 볼 수도 있습니다. 자세한 내용은 “[워크플로 실행 가져오기](/rest/reference/actions#get-a-workflow-run)”를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. 이전 실행 시도는 **최신** 드롭다운 메뉴에 표시됩니다.
   ![이전 실행 시도](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. 모든 이전 실행 시도가 왼쪽 창에 표시됩니다.
    ![워크플로 다시 실행](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. 항목을 클릭하여 결과를 봅니다.

{% endif %}
