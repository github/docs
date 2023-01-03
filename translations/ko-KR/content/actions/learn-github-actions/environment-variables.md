---
title: 환경 변수
intro: '{% data variables.product.prodname_dotcom %}은 각 {% data variables.product.prodname_actions %} 워크플로 실행에 대한 기본 환경 변수를 설정합니다. 워크플로 파일에서 사용자 지정 환경 변수를 설정할 수도 있습니다.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 578b85facbb8fc6a7ff45f0d56a460eb3e2ab217
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179542'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 환경 변수 정보

환경 변수를 사용하여 워크플로에서 참조하려는 정보를 저장할 수 있습니다. 워크플로 단계 또는 작업 내에서 환경 변수를 참조하고, 변수는 워크플로를 실행하는 실행기 컴퓨터에서 보간됩니다. 작업 또는 워크플로 단계에서 실행되는 명령은 환경 변수를 만들고 읽고 수정할 수 있습니다.

사용자 고유의 사용자 지정 환경 변수를 설정하고 {% data variables.product.prodname_dotcom %}가 자동으로 설정하는 기본 환경 변수를 사용할 수 있으며 실행기의 작업 환경에서 설정된 다른 모든 환경 변수도 사용할 수 있습니다. 환경 변수는 대/소문자를 구분합니다. 

사용자 지정 환경 변수를 설정하려면 워크플로 파일에서 정의해야 합니다. 사용자 지정 환경 변수의 범위는 정의된 요소로 제한됩니다. 다음과 같이 범위가 지정된 환경 변수를 정의할 수 있습니다.

* 전체 워크플로(워크플로 파일의 최상위 수준에서 [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env)를 사용하여)
* 워크플로 내 작업의 컨텐츠([`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv)를 사용하여)
* 작업 내의 특정 단계([`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv)를 사용하여)

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

위의 예제에서는 `echo` 명령, 즉 `$DAY_OF_WEEK`, `$Greeting` 및 `$First_Name`에 사용되는 세 가지 사용자 지정 환경 변수를 보여 줍니다. 해당 환경 변수의 값은 각각 워크플로, 작업 및 단계 수준에서 설정되고 범위가 지정됩니다. 

워크플로 작업이 실행기 컴퓨터로 전송된 후 환경 변수 보간이 수행되므로 실행기에서 사용되는 셸에 적절한 구문을 사용해야 합니다. 이 예제에서 워크플로는 `ubuntu-latest`를 지정합니다. 기본적으로 Linux 실행기는 bash 셸을 사용하므로 `$NAME` 구문을 사용해야 합니다. 워크플로에서 Windows 실행기를 지정한 경우 PowerShell에 대한 구문 `$env:NAME`을 사용합니다. 셸에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell)”을 참조하세요.

{% note %}

**참고**: 단계에서 <span style="white-space: nowrap;">`run: env`</span>를 사용한 다음 단계의 출력을 검사하여 워크플로 단계에서 사용할 수 있는 전체 환경 변수 집합을 나열할 수 있습니다.

{% endnote %}

## 컨텍스트를 사용하여 환경 변수 값에 액세스

환경 변수 외에도 {% data variables.product.prodname_actions %}를 사용하면 컨텍스트로 값을 설정하고 읽을 수 있습니다. 환경 변수 및 컨텍스트는 워크플로의 여러 지점에서 사용하기 위한 것입니다.

환경 변수는 항상 가상 머신 실행기에서 보간됩니다. 그러나 워크플로의 일부는 {% data variables.product.prodname_actions %}에 의해 처리되며 실행기로 전송되지 않습니다. 워크플로 파일의 해당 부분에서는 환경 변수를 사용할 수 없으며 대신 컨텍스트를 사용할 수 있습니다. 예를 들어 작업 또는 단계가 실행기로 전송되는지 여부를 결정하는 `if` 조건이 항상 {% data variables.product.prodname_actions %}에 의해 처리됩니다. 조건문의 컨텍스트를 사용하여 `if` 환경 변수의 값에 액세스할 수 있습니다.

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

첫 번째 예제의 이 수정에서는 `if` 조건부를 도입했습니다. 워크플로 단계는 이제 `DAYS_OF_WEEK`가 “월요일”로 설정된 경우에만 실행됩니다. [`env`컨텍스트](/actions/learn-github-actions/contexts#env-context)를 사용하여 `if` 조건문에서 이 값에 액세스합니다.

{% note %}

**참고**: 컨텍스트는 일반적으로 {% raw %}`${{ context.property }}`{% endraw %}와 같이 달러 기호와 중괄호를 사용하여 표시됩니다. `if` 조건에서 {% raw %}`${{` 및 `}}`{% endraw %}는 선택 사항이지만, 사용하는 경우 위와 같이 전체 비교 문을 묶어야 합니다. 

{% endnote %}

일반적으로 작업 실행기에서 작업을 보내기 전에 처리되는 워크플로의 일부에서 환경 변수 값에 액세스하기 위해 `env` 컨텍스트 또는 `github` 컨텍스트를 사용합니다. 


| Context | 사용 사례 | 예제 |
| --- | --- | --- |
| `env` | 워크플로에 정의된 사용자 지정 환경 변수를 참조합니다. | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | 워크플로 실행 및 실행을 트리거한 이벤트에 대한 정보를 참조합니다. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |


 
워크플로에서 다양한 용도로 사용할 수 있는 다른 많은 컨텍스트가 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요. 워크플로 내에서 특정 컨텍스트를 사용할 수 있는 위치에 대한 자세한 내용은 “[컨텍스트 가용성](/actions/learn-github-actions/contexts#context-availability)”을 참조하세요.

### 다른 형식의 변수

워크플로의 대부분의 위치에서 사용할 수 있는 변수 유형은 환경 변수(예: `$MY_VARIABLE`) 또는 동등한 컨텍스트 속성(예: <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>)뿐입니다. 예외는 다음과 같습니다.

* 워크플로에 값을 전달할 수 있는 `workflow_call` 이벤트 및 `workflow_dispatch` 이벤트에 대한 입력입니다. 자세한 내용은 [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) 및 [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs)을 참조하세요.
* 워크플로의 작업 간에 값을 전달할 수 있는 작업 출력입니다. 자세한 내용은 [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)를 참조하세요.
* 문자열의 일부를 바꿀 수 있는 형식 식의 변수입니다. 자세한 내용은 [`format`](/actions/learn-github-actions/expressions#format)를 참조하세요.

## 환경 변수의 명명 규칙

사용자 지정 환경 변수를 설정하는 경우 기본 환경 변수 이름을 사용할 수 없습니다. 해당 전체 목록은 아래의 “[기본 환경 변수](#default-environment-variables)”를 참조하세요. 해당 기본 환경 변수 중 하나의 값을 재정의하려고 하면 할당이 무시됩니다.

파일 시스템의 위치를 가리키는 새 환경 변수에는 `_PATH` 접미사가 있어야 합니다. `GITHUB_ENV` 및 `GITHUB_WORKSPACE` 기본 환경 변수는 이 규칙의 예외입니다.

## 기본 환경 변수

{% data variables.product.prodname_dotcom %} 집합의 기본 환경 변수는 워크플로의 모든 단계에서 사용할 수 있습니다. 

작업에서는 하드 코딩된 파일 경로를 사용하는 대신 환경 변수를 사용하여 파일 시스템에 액세스하는 것이 좋습니다. {% data variables.product.prodname_dotcom %}세트는 모든 실행기 환경에서 사용할 작업에 대한 환경 변수를 설정합니다.

| 환경 변수 | 설명 |
| ---------------------|------------ |
| `CI` | 항상 `true`로 설정합니다. |
| `GITHUB_ACTION` | 현재 실행 중인 작업의 이름 또는 단계의 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)입니다. 예를 들어 작업의 경우 `__repo-owner_name-of-action-repo`입니다.<br><br>{% data variables.product.prodname_dotcom %}는 특수 문자를 제거하고 현재 단계에서 스크립트를 실행할 때 `id` 없이 `__run` 이름을 사용합니다. 동일한 작업에서 동일한 스크립트 또는 작업을 두 번 이상 사용하는 경우 밑줄 앞에 오는 시퀀스 번호로 구성된 접미사가 이름에 포함됩니다. 예를 들어 실행하는 첫 번째 스크립트에는 이름이 `__run`으로 지정되고 두 번째 스크립트의 이름은 `__run_2`로 지정됩니다. 마찬가지로 두 번째 `actions/checkout` 호출은 `actionscheckout2`입니다. |
| `GITHUB_ACTION_PATH` | 작업이 있는 경로입니다. 이 속성은 복합 작업에서만 지원됩니다. 이 경로를 사용하여 작업과 동일한 리포지토리에 있는 파일에 액세스할 수 있습니다. 예: `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | 작업을 실행하는 단계의 경우 작업의 소유자 및 리포지토리 이름입니다. 예: `actions/checkout`. |
| `GITHUB_ACTIONS` | {% data variables.product.prodname_actions %}가 워크플로를 실행하는 경우 항상 `true`로 설정됩니다. 이 변수를 사용하여 테스트가 로컬로 실행되는 경우와 {% data variables.product.prodname_actions %}로 실행되는 경우를 구분할 수 있습니다.
| `GITHUB_ACTOR` | 워크플로를 시작한 사용자 또는 앱의 이름입니다. 예: `octocat`. |
| `GITHUB_API_URL` | API URL을 반환합니다. 예: `{% data variables.product.api_url_code %}`
| `GITHUB_BASE_REF` | 워크플로 실행에서 끌어오기 요청의 기본 ref 또는 대상 분기의 이름입니다. 워크플로 실행을 트리거하는 이벤트가 `pull_request` 또는 `pull_request_target`인 경우에만 설정됩니다. 예: `main`. |
| `GITHUB_ENV` | 워크플로 명령에서 환경 변수를 설정하는 파일에 대한 실행기 경로입니다. 이 파일은 현재 단계와 작업의 각 단계에 대한 변경 내용에 고유합니다. 예: `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)”을 참조하세요. | 
| `GITHUB_EVENT_NAME` | 워크플로를 트리거한 이벤트의 이름입니다. 예: `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | 전체 이벤트 웹후크 페이로드가 포함된 실행기에서 파일의 경로입니다. 예: `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | GraphQL API URL을 반환합니다. 예: `{% data variables.product.graphql_url_code %}`
| `GITHUB_HEAD_REF` | 워크플로 실행에서 끌어오기 요청의 헤드 ref 또는 원본 분기입니다. 이 속성은 워크플로 실행을 트리거하는 이벤트가 `pull_request` 또는 `pull_request_target`인 경우에만 설정됩니다. 예: `feature-branch-1`. |
| `GITHUB_JOB` | 현재 작업의 [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)입니다. 예: `greeting_job`. |
| `GITHUB_PATH` | 워크플로 명령에서 시스템 `PATH` 변수를 설정하는 파일에 대한 실행기 경로입니다. 이 파일은 현재 단계와 작업의 각 단계에 대한 변경 내용에 고유합니다.  예: `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)”을 참조하세요. |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} | | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `GITHUB_REPOSITORY` | 소유자 및 리포지토리 이름입니다. 예: `octocat/Hello-World`. | | `GITHUB_REPOSITORY_OWNER` | 리포지토리 소유자의 이름입니다. 예: `octocat`. | | `GITHUB_RETENTION_DAYS` | 워크플로 실행 로그 및 아티팩트가 유지되는 일 수입니다. 예: `90`. | | `GITHUB_RUN_ATTEMPT` | 리포지토리 내 각 워크플로 실행 시도의 고유한 숫자입니다. 이 숫자는 워크플로의 실행의 첫 시도 시 1부터 시작하며 다시 실행할 때마다 증가합니다. 예: `3`. | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %}(예: `1658821493`). | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %}(예: `3`). | | `GITHUB_SERVER_URL`| {% data variables.product.product_name %} 서버의 URL입니다. 예: `https://{% data variables.product.product_url %}`
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} | {%- ifversion actions-job-summaries %} | `GITHUB_STEP_SUMMARY` | 실행기에서 워크플로 명령의 작업 요약이 포함된 파일에 대한 경로입니다. 이 파일은 현재 단계와 작업의 각 단계에 대한 변경 내용에 고유합니다. 예: `/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)”을 참조하세요. | {%- endif %} | `GITHUB_WORKFLOW` | 워크플로의 이름입니다. 예: `My test workflow`. 워크플로 파일이 `name`을 지정하지 않으면 이 변수의 값은 리포지토리에 있는 워크플로 파일의 전체 경로입니다. | | `GITHUB_WORKSPACE` | 단계에 대한 실행기의 기본 작업 디렉터리 및 [`checkout`](https://github.com/actions/checkout) 작업을 사용할 때 리포지토리의 기본 위치입니다. 예: `/home/runner/work/my-repo-name/my-repo-name`. | {%- ifversion actions-runner-arch-envvars %} | `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} | {%- endif %} | `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} | | `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} 예를 들어 | | `Hosted Agent` `RUNNER_OS` | {% data reusables.actions.runner-os-description %} 예를 들어 | | `Windows` `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} 예를 들어 | `D:\a\_temp` {%- ifversion not ghae %} | `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} 예를 들어 | `C:\hostedtoolcache\windows` {%- endif %}

{% note %}

**참고:** 

* 작업 내에서 워크플로 실행의 URL을 사용해야 하는 경우 `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID` 환경 변수를 결합할 수 있습니다.
* 대부분의 기본 환경 변수에는 해당하는 컨텍스트 속성과 비슷한 이름의 컨텍스트 속성이 있습니다. 예를 들어 {% raw %}`${{ github.ref }}`{% endraw %} 컨텍스트 속성을 사용하여 워크플로를 처리하는 동안 `GITHUB_REF` 환경 변수의 값을 읽을 수 있습니다.

{% endnote %}

## 운영 체제 검색

`RUNNER_OS` 기본 환경 변수 및 해당 컨텍스트 속성 <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span>를 사용하여 다른 운영 체제에 사용할 수 있는 단일 워크플로 파일을 작성할 수 있습니다. 예를 들어 실행기에서 사용하는 셸에 따라 다른 환경 변수의 구문을 변경하지 않고 운영 체제를 `macos-latest`에서 `windows-latest`로 변경하면 다음 워크플로를 성공적으로 실행할 수 있습니다.

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

이 예제에서 두 `if` 문은 `runner` 컨텍스트의 `os` 속성을 확인하여 실행기의 운영 체제를 확인합니다. `if` 조건은 {% data variables.product.prodname_actions %}에 의해 처리되며, 실행기로 전송되는 검사에서 `true`로 확인되는 단계만 처리됩니다. 여기서는 검사 중 하나가 항상 `true`이고 다른 하나가 `false`이므로 단계 중 하나만 실행기에 전송됩니다. 작업이 실행기로 전송되면 단계가 실행되고 명령의 `echo`의 환경 변수가 적절한 구문(Windows PowerShell의 경우 `$env:NAME`, Linux와 MacOS의 bash와 sh인 경우 `$NAME`)을 사용하여 보간됩니다. 이 예제에서 문 `runs-on: macos-latest`는 두 번째 단계가 실행될 것임을 의미합니다.

## 워크플로의 단계와 작업 간에 값 전달

 작업의 한 단계에서 값을 생성하는 경우 기존 또는 새 환경 변수에 값을 할당한 다음 이를 `GITHUB_ENV` 환경 파일에 작성하여 동일한 작업의 후속 단계에서 값을 사용할 수 있습니다. 환경 파일은 작업에서 직접 사용하거나 `run` 키워드를 사용하여 워크플로 파일의 셸 명령에서 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)”을 참조하세요. 
 
 워크플로의 한 작업 단계에서 워크플로의 다른 작업의 단계로 값을 전달하려는 경우 값을 작업 출력으로 정의할 수 있습니다. 그런 다음, 다른 작업의 단계에서 이 작업 출력을 참조할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)”을 참조하세요. 
 
