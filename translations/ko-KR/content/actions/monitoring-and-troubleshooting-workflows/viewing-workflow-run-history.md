---
title: 워크플로 실행 기록 보기
shortTitle: Workflow run history
intro: 워크플로의 각 실행에 대한 로그를 볼 수 있습니다. 로그에는 워크플로의 각 작업 및 단계에 대한 상태가 포함됩니다.
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6f8b63c5e136f14bc39d0a835507e151978fad11
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009512'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### 최근 워크플로 실행 보기

최근 워크플로 실행을 나열하려면 `run list` 하위 명령을 사용합니다.

```shell
gh run list
```

반환할 최대 실행 수를 지정하려면 `-L` 또는 `--limit` 플래그를 지정할 수 있습니다. 기본값은 `10`입니다.

```shell
gh run list --limit 5
```

지정된 워크플로에 대한 실행만 반환하려면 `-w` 또는 `--workflow` 플래그를 사용할 수 있습니다.  `workflow`를 워크플로 이름, 워크플로 ID 또는 워크플로 파일 이름으로 바꿉니다. `"Link Checker"`, `1234567` 또는 `"link-check-test.yml"`).

```shell
gh run list --workflow WORKFLOW
```

### 특정 워크플로 실행에 대한 세부 정보 보기

특정 워크플로 실행에 대한 세부 정보를 표시하려면 `run view` 하위 명령을 사용합니다. `run-id`를 보려는 실행의 ID로 바꿉니다. `run-id`를 지정하지 않으면 {% data variables.product.prodname_cli %}이(가) 최근 실행을 선택할 수 있는 대화형 메뉴를 반환합니다.

```shell
gh run view RUN_ID
```

출력에 작업 단계를 포함하려면 `-v` 또는 `--verbose` 플래그를 사용합니다.

```shell
gh run view RUN_ID --verbose
```

실행의 특정 작업에 대한 세부 정보를 보려면 `-j` 또는 `--job` 플래그를 사용합니다.  `job-id`를 보려는 작업의 ID로 바꿉니다.

```shell
gh run view --job JOB_ID
```

작업에 대한 전체 로그를 보려면 `--log` 플래그를 사용합니다.

```shell
gh run view --job JOB_ID --log
```

실행에 실패하면 `--exit-status` 플래그를 사용하여 0이 아닌 상태로 종료합니다. 예를 들면 다음과 같습니다.

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
