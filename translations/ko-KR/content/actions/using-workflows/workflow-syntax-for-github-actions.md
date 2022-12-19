---
title: GitHub Actions에 대한 워크플로 구문
shortTitle: Workflow syntax
intro: 워크플로는 하나 이상의 작업으로 구성된 구성 가능한 자동화된 프로세스입니다. 워크플로 구성을 정의하려면 YAML 파일을 만들어야 합니다.
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/reference/workflow-syntax-for-github-actions
  - /actions/learn-github-actions/workflow-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: ca5a79fbaeeafa474283cbabd67108cb22b6f985
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192050'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 워크플로에 대한 YAML 구문 정보

워크플로 파일은 YAML 구문을 사용하며 파일 확장명이 `.yml` 또는 `.yaml`이어야 합니다. {% data reusables.actions.learn-more-about-yaml %}

워크플로 파일을 리포지토리의 `.github/workflows` 디렉터리에 저장해야 합니다.

## `name`

워크플로의 이름입니다. {% data variables.product.prodname_dotcom %}은(는) 리포지토리의 "작업" 탭에 워크플로의 이름을 표시합니다. 를 생략 `name`하면 {% data variables.product.prodname_dotcom %}는 리포지토리의 루트를 기준으로 워크플로 파일 경로로 설정합니다.

{% ifversion actions-run-name %}
## `run-name`

워크플로의 이름은 워크플로에서 생성됩니다. {% data variables.product.prodname_dotcom %}은(는) 리포지토리의 "작업" 탭에 있는 워크플로 실행 목록에 워크플로 실행 이름을 표시합니다. 가 생략되었거나 공백인 경우 `run-name` 실행 이름은 워크플로 실행에 대한 이벤트별 정보로 설정됩니다. 예를 들어 또는 `pull_request` 이벤트에 의해 `push` 트리거되는 워크플로의 경우 커밋 메시지로 설정됩니다.

이 값은 식을 포함할 수 있으며 및 [`inputs`](/actions/learn-github-actions/contexts#inputs-context) 컨텍스트를 참조할 [`github`](/actions/learn-github-actions/contexts#github-context) 수 있습니다.

### 예제

{% raw %}
```yaml
run-name: Deploy to ${{ inputs.deploy_target }} by @${{ github.actor }}
```
{% endraw %} {% endif %}

## `on`

{% data reusables.actions.workflows.section-triggering-a-workflow %}

### `on.<event_name>.types`

{% data reusables.actions.workflows.section-triggering-a-workflow-types %}

### `on.<pull_request|pull_request_target>.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### `on.push.<branches|tags|branches-ignore|tags-ignore>`

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### `on.<push|pull_request|pull_request_target>.<paths|paths-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### `on.schedule`

{% data reusables.actions.workflows.section-triggering-a-workflow-schedule %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

`on.workflow_call`을 사용하여 재사용 가능한 워크플로에 대한 입력 및 출력을 정의합니다. 호출된 워크플로에 사용할 수 있는 비밀을 매핑할 수도 있습니다. 재사용 가능한 워크플로에 대한 자세한 내용은 “[워크플로 재사용](/actions/using-workflows/reusing-workflows)”을 참조하세요.

### `on.workflow_call.inputs`

`workflow_call` 키워드를 사용하는 경우 필요에 따라 호출자 워크플로에서 호출된 워크플로로 전달되는 입력을 지정할 수 있습니다. `workflow_call` 키워드에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)”를 참조하세요.

사용할 수 있는 표준 입력 매개 변수 외에도 `on.workflow_call.inputs`에는 `type` 매개 변수가 필요합니다. 자세한 내용은 [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype)를 참조하세요.

`default` 매개 변수가 설정되지 않은 경우 입력의 기본값은 부울의 경우 `false`, 숫자의 경우 `0`, 문자열의 경우 `""`입니다.

호출된 워크플로 내에서 `inputs` 컨텍스트를 사용하여 입력을 참조할 수 있습니다.

호출자 워크플로가 호출된 워크플로에 지정되지 않은 입력을 전달하면 오류가 발생합니다.

#### 예제

{% raw %}
```yaml
on:
  workflow_call:
    inputs:
      username:
        description: 'A username passed from the caller workflow'
        default: 'john-doe'
        required: false
        type: string

jobs:
  print-username:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input name to STDOUT
        run: echo The username is ${{ inputs.username }}
```
{% endraw %}

자세한 내용은 “[워크플로 다시 사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.

#### `on.workflow_call.inputs.<input_id>.type`

`on.workflow_call` 키워드에 대한 입력이 정의된 경우 필요합니다. 이 매개 변수의 값은 입력의 데이터 형식을 지정하는 문자열입니다. `boolean`, `number` 또는 `string` 중 하나여야 합니다.

### `on.workflow_call.outputs`

호출된 워크플로에 대한 출력의 맵입니다. 호출된 워크플로 출력은 호출자 워크플로의 모든 다운스트림 작업에 사용할 수 있습니다. 각 출력에는 식별자, 선택적 `description,`, `value.`가 있습니다. `value`는 호출된 워크플로 내의 작업에서 출력 값으로 설정해야 합니다.

아래 예제에서는 재사용 가능한 워크플로에 대해 `workflow_output1` 및 `workflow_output2`, 두 개의 출력이 정의됩니다. 해당 출력은 `my_job` 작업의 `job_output1` 출력과 `job_output2`에 매핑됩니다.

#### 예제

{% raw %}
```yaml
on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}
```
{% endraw %}

작업 출력을 참조하는 방법에 대한 자세한 내용은 [`jobs.<job_id>.outputs`](#jobsjob_idoutputs)를 참조하세요. 자세한 내용은 “[워크플로 다시 사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.

### `on.workflow_call.secrets`

호출된 워크플로에서 사용할 수 있는 비밀의 맵입니다.

호출된 워크플로 내에서 `secrets` 컨텍스트를 사용하여 비밀을 참조할 수 있습니다.

호출자 워크플로가 호출된 워크플로에 지정되지 않은 비밀을 전달하면 오류가 발생합니다.

#### 예제

{% raw %}
```yaml
on:
  workflow_call:
    secrets:
      access-token:
        description: 'A token passed from the caller workflow'
        required: false

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest

    steps:
      - name: Pass the received secret to an action
        uses: ./.github/actions/my-action
        with:
          token: ${{ secrets.access-token }}
```
{% endraw %}

#### `on.workflow_call.secrets.<secret_id>`

비밀과 연결할 문자열 식별자입니다.

#### `on.workflow_call.secrets.<secret_id>.required`

비밀을 제공해야 하는지 여부를 지정하는 부울입니다.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## `env`

워크플로의 모든 작업 단계에서 사용할 수 있는 환경 변수의 `map`입니다. 단일 작업의 단계 또는 단일 단계에만 사용할 수 있는 환경 변수를 설정할 수도 있습니다. 자세한 내용은 [`jobs.<job_id>.env`](#jobsjob_idenv) 및 [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)을 참조하세요.

`env` 맵의 변수는 맵의 다른 변수를 기준으로 정의할 수 없습니다.

{% data reusables.repositories.actions-env-var-note %}

### 예제

```yaml
env:
  SERVER: production
```

## `defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

## `concurrency`

{% data reusables.actions.jobs.section-using-concurrency %}

## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

작업의 모든 단계에서 사용할 수 있는 환경 변수의 `map`입니다. 전체 워크플로 또는 개별 단계에 환경 변수를 설정할 수도 있습니다. 자세한 내용은 [`env`](#env) 및 [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)을 참조하세요.

{% data reusables.repositories.actions-env-var-note %}

### 예제

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

## `jobs.<job_id>.defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job %}

### `jobs.<job_id>.defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job-run %}

## `jobs.<job_id>.steps`

작업에는 `steps`라는 일련의 작업이 포함됩니다. 단계에 따라 퍼블릭 리포지토리에서 명령을 실행하거나, 설치 작업을 실행하거나, 또는 Docker 레지스트리에 게시된 작업에서 작업을 실행할 수 있습니다. 모든 단계가 작업을 실행하는 것은 아니지만 모든 작업은 한 단계로 실행됩니다. 각 단계는 실행기 환경에서 자체 프로세스로 실행되며 작업 영역 및 파일 시스템에 액세스할 수 있습니다. 단계가 자체 프로세스에서 실행되므로 여러 단계 간에는 환경 변수에 대한 변경 내용이 유지되지 않습니다. {% data variables.product.prodname_dotcom %}는 작업을 설정하고 완료하는 기본 제공 단계를 제공합니다.

워크플로 사용량 한도 내에 있는 한 무제한의 단계를 실행할 수 있습니다. 자세한 내용은 {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %} 호스팅 러너의 경우 “[사용량 한도 및 청구](/actions/reference/usage-limits-billing-and-administration)”,{% endif %} 자체 호스팅 러너 사용량 한 한도의 경우 “[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}”를 참조하세요.{% elsif ghae %}.{% endif %}

### 예제

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

### `jobs.<job_id>.steps[*].id`

단계의 고유 식별자입니다. `id`를 사용하여 컨텍스트에서 단계를 참조할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

### `jobs.<job_id>.steps[*].if`

`if` 조건을 사용하여 조건이 충족되지 않는 한 단계가 실행되지 않도록 할 수 있습니다. {% data reusables.actions.if-supported-contexts %}

{% data reusables.actions.expression-syntax-if %} 자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions)”을 참조하세요.

#### 예제: 컨텍스트 사용

 이 단계는 이벤트 유형이 `pull_request`이고 이벤트 작업이 `unassigned`인 경우에만 실행됩니다.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### 예제: 상태 검사 함수 사용

`my backup step`은 작업의 이전 단계가 실패할 때만 실행됩니다. 자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions#status-check-functions)”을 참조하세요.

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### 예제: 비밀 사용

비밀은 `if:` 조건에서 직접 참조할 수 없습니다. 대신 비밀을 작업 수준 환경 변수로 설정한 다음 환경 변수를 참조하여 작업의 단계를 조건부로 실행하는 것이 좋습니다.

비밀이 설정되지 않은 경우 비밀을 참조하는 식의 반환 값(예: 예제의 {% raw %}`${{ secrets.SuperSecret }}`{% endraw %})은 빈 문자열이 됩니다.

{% raw %}
```yaml
name: Run a step if a secret has been set
on: push
jobs:
  my-jobname:
    runs-on: ubuntu-latest
    env:
      super_secret: ${{ secrets.SuperSecret }}
    steps:
      - if: ${{ env.super_secret != '' }}
        run: echo 'This step will only run if the secret has a value set.'
      - if: ${{ env.super_secret == '' }}
        run: echo 'This step will only run if the secret does not have a value set.'
```
{% endraw %}

자세한 내용은 “[컨텍스트 가용성](/actions/learn-github-actions/contexts#context-availability)” 및 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

### `jobs.<job_id>.steps[*].name`

{% data variables.product.prodname_dotcom %}에 표시할 단계의 이름입니다.

### `jobs.<job_id>.steps[*].uses`

작업 단계의 일부로 실행할 작업을 선택합니다. 작업은 재사용 가능한 코드 단위입니다. 워크플로와 동일한 리포지토리, 퍼블릭 리포지토리 또는 [게시된 Docker 컨테이너 이미지](https://hub.docker.com/)에 정의된 작업을 사용할 수 있습니다.

Git 참조, SHA 또는 Docker 태그를 지정하여 사용 중인 작업의 버전을 포함하는 것이 좋습니다. 버전을 지정하지 않으면 작업 소유자가 업데이트를 게시할 때 워크플로가 중단되거나 예기치 않은 동작이 발생할 수 있습니다.
- 릴리스된 작업 버전의 커밋 SHA를 사용하는 것이 안정성 및 보안 측면에서 가장 안전합니다.
- 작업이 주 버전 태그를 게시하는 경우 호환성을 유지하면서 중요한 수정 및 보안 패치를 받아야 합니다. 이 동작은 작업 작성자의 재량에 따라 결정됩니다.
- 작업의 기본 분기를 사용하는 것이 편리할 수 있지만 다른 사용자가 호환성이 손상되는 변경으로 새 주 버전을 릴리스하는 경우 워크플로가 중단될 수 있습니다.

일부 작업에는 [`with`](#jobsjob_idstepswith) 키워드를 사용하여 설정해야 하는 입력이 필요합니다. 작업의 추가 정보 파일을 검토하여 필요한 입력을 확인합니다.

작업은 JavaScript 파일 또는 Docker 컨테이너입니다. 사용 중인 작업이 Docker 컨테이너인 경우 Linux 환경에서 작업을 실행해야 합니다. 자세한 내용은 [`runs-on`](#jobsjob_idruns-on)를 참조하세요.

#### 예제: 버전이 지정된 작업 사용

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: {% data reusables.actions.action-checkout %}
  # Reference a specific version
  - uses: {% data reusables.actions.action-checkout %}.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### 예제: 퍼블릭 작업 사용

`{owner}/{repo}@{ref}`

퍼블릭 {% data variables.product.prodname_dotcom %} 리포지토리에서 분기, 참조 또는 SHA를 지정할 수 있습니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@main
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### 예제: 하위 디렉터리에서 퍼블릭 작업 사용

`{owner}/{repo}/{path}@{ref}`

특정 분기, 참조 또는 SHA의 퍼블릭 {% data variables.product.prodname_dotcom %} 리포지토리의 하위 디렉터리입니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### 예제: 워크플로와 동일한 리포지토리에서 작업 사용

`./path/to/dir`

워크플로 리포지토리의 작업이 포함된 디렉터리의 경로입니다. 작업을 사용하기 전에 리포지토리를 체크 아웃해야 합니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### 예제: Docker Hub 작업 사용

`docker://{image}:{tag}`

[Docker Hub](https://hub.docker.com/)에 게시된 Docker 이미지입니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### 예제: {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} 사용

`docker://{host}/{image}:{tag}`

{% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}의 Docker 이미지입니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### 예제: Docker 퍼블릭 레지스트리 작업 사용

`docker://{host}/{image}:{tag}`

퍼블릭 레지스트리의 Docker 이미지입니다. 이 예제에서는 `gcr.io`에서 Google Container Registry를 사용합니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### 예제: 워크플로와 다른 프라이빗 리포지토리 내에서 작업 사용

워크플로는 프라이빗 리포지토리를 체크 아웃하고 작업을 로컬로 참조해야 합니다. {% data variables.product.pat_generic %}을(를) 생성하고 토큰을 암호화된 비밀로 추가합니다. 자세한 내용은 "[{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)" 및 "[암호화된 비밀](/actions/reference/encrypted-secrets) 만들기"를 참조하세요.

예제에서 `PERSONAL_ACCESS_TOKEN`을 비밀 이름으로 바꿉니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```

### `jobs.<job_id>.steps[*].run`

운영 체제의 셸을 사용하여 명령줄 프로그램을 실행합니다. `name`을 입력하지 않으면 단계 이름은 기본적으로 `run` 명령에 지정된 텍스트로 설정됩니다.

명령은 기본적으로 로그인하지 않는 셸을 사용하여 실행됩니다. 다른 셸을 선택하고 명령을 실행하는 데 사용되는 셸을 사용자 지정할 수 있습니다. 자세한 내용은 [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell)를 참조하세요.

각 `run` 키워드는 실행기 환경의 새 프로세스 및 셸을 나타냅니다. 다중 선 명령을 제공하면 각 선이 동일한 셸에서 실행됩니다. 예를 들면 다음과 같습니다.

* 단일 선 명령:

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* 다중 선 명령:

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

`working-directory` 키워드를 사용하여 명령을 실행할 위치의 작업 디렉터리를 지정할 수 있습니다.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

`shell` 키워드를 사용하여 실행기 운영 체제의 기본 셸 설정을 재정의할 수 있습니다. 기본 제공 `shell` 키워드를 사용하거나 사용자 지정 셸 옵션 집합을 정의할 수 있습니다. 내부적으로 실행되는 셸 명령은 `run` 키워드에 지정된 명령이 포함된 임시 파일을 실행합니다.

| 지원되는 플랫폼 | `shell` 매개 변수 | 설명 | 내부적으로 명령 실행 |
|--------------------|-------------------|-------------|------------------------|
| Linux / macOS | unspecified | 비 Windows 플랫폼의 기본 셸입니다. `bash`가 명시적으로 지정된 경우와는 다른 명령을 실행한다는 점에 유의하세요. `bash`를 경로에서 찾을 수 없는 경우, `sh`로 처리됩니다. | `bash -e {0}` |
| 모두 | `bash` | `sh`로의 대체가 있는 비 Windows 플랫폼의 기본 셸입니다. Windows에서 bash 셸을 지정할 때 Windows용 Git에 포함된 bash 셸이 사용됩니다. | `bash --noprofile --norc -eo pipefail {0}` |
| 모두 | `pwsh` | PowerShell Core입니다. {% data variables.product.prodname_dotcom %}가 스크립트 이름에 `.ps1` 확장을 추가합니다. | `pwsh -command ". '{0}'"` |
| 모두 | `python` | Python 명령을 실행합니다. | `python {0}` |
| Linux / macOS | `sh` | 셸이 제공되지 않고 경로에 `bash`가 없는 경우 비 Windows 플랫폼에 대한 대체 동작입니다. | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %}는 스크립트 이름에 `.cmd` 확장을 추가하고 `{0}`로 대체합니다. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | Windows에서 사용되는 기본 셸입니다. PowerShell Core입니다. {% data variables.product.prodname_dotcom %}가 스크립트 이름에 `.ps1` 확장을 추가합니다. 자체 호스팅 Windows 실행기에 _PowerShell Core_ 가 설치되어 있지 않으면 _PowerShell Desktop_ 이 대신 사용됩니다.| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | PowerShell 데스크톱입니다. {% data variables.product.prodname_dotcom %}가 스크립트 이름에 `.ps1` 확장을 추가합니다. | `powershell -command ". '{0}'"`. |

#### 예제: bash를 사용하여 스크립트 실행

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### 예제: Windows를 사용하여 스크립트 실행`cmd`

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### 예제: PowerShell Core를 사용하여 스크립트 실행

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### 예제: PowerShell Desktop을 사용하여 스크립트 실행

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### 예제: Python 스크립트 실행

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### 사용자 지정 셸

`command […options] {0} [..more_options]`를 사용하여 `shell` 값을 템플릿 문자열로 설정할 수 있습니다. {% data variables.product.prodname_dotcom %}는 문자열의 공백으로 구분된 첫 번째 단어를 명령으로 해석하고 `{0}`에 임시 스크립트의 파일 이름을 삽입합니다.

예를 들면 다음과 같습니다.

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

이 예제에서 사용된 `perl` 명령을 실행기에 설치해야 합니다.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% elsif fpt or ghec %} GitHub 호스팅 실행기에 포함된 소프트웨어에 대한 자세한 내용은 “[GitHub 호스팅 실행기 사양](/actions/reference/specifications-for-github-hosted-runners#supported-software)”을 참조하세요.
{% endif %}

#### 종료 코드 및 오류 작업 기본 설정

기본 제공 셸 키워드의 경우 {% data variables.product.prodname_dotcom %}호스팅 실행기에서 실행되는 다음 기본값을 입력합니다. 셸 스크립트를 실행할 때는 해당 지침을 사용해야 합니다.

- `bash`/`sh`:
  - `set -eo pipefail`을 사용하는 페일 패스트(Fail-fast) 동작: 이 옵션은 `shell: bash`가 명시적으로 지정된 경우에 설정됩니다. 기본적으로 적용되지 않습니다.
  - 셸 옵션에 템플릿 문자열을 제공하여 셸 매개 변수를 완전히 제어할 수 있습니다. 예: `bash {0}`.
  - sh-like 셸은 스크립트에서 실행된 마지막 명령의 종료 코드를 통해 종료되며, 이는 작업에 대한 기본 동작이기도 합니다. 실행기는 이 종료 코드에 따라 단계의 상태를 실패/성공으로 보고합니다.

- `powershell`/`pwsh`
  - 가능한 경우 빠른 페일 패스트 동작입니다. `pwsh` 및 기본 제공 `powershell` 셸의 경우 스크립트 내용 앞에 `$ErrorActionPreference = 'stop'` 추가됩니다.
  - 작업 상태가 스크립트의 마지막 종료 코드를 반영하도록 powershell 스크립트에 `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }`를 추가합니다.
  - 사용자는 항상 기본 제공 셸을 사용하지 않고 필요에 따라 `pwsh -File {0}` 또는 `powershell -Command "& '{0}'"`와 같은 사용자 지정 셸 옵션을 제공하여 옵트아웃할 수 있습니다.

- `cmd`
  - 스크립트를 작성하여 각 오류 코드를 확인하고 그에 따라 응답하는 것 외에는 페일 패스트(Fail-fast) 동작에 완전히 옵트인하는 방법이 없는 것 같습니다. 기본적으로 이 동작을 실제로 제공할 수 없으므로 스크립트에 이 동작을 작성해야 합니다.
  - `cmd.exe`는 실행한 마지막 프로그램의 오류 수준으로 종료되고 실행기에 오류 코드를 반환합니다. 이 동작은 내부적으로 이전 `sh` 및 `pwsh` 기본 동작과 일치하며 `cmd.exe` 기본값이므로 이 동작은 그대로 유지됩니다.

### `jobs.<job_id>.steps[*].with`

작업에 정의된 입력 매개 변수의 `map`입니다. 각 입력 매개 변수는 키/값 쌍입니다. 입력 매개 변수는 환경 변수로 설정됩니다. 변수가 `INPUT_`접두어로 추가되고 대문자로 변환됩니다.

#### 예제

`hello_world` 작업에 정의된 세 개의 입력 매개 변수(`first_name`, `middle_name`, `last_name`)를 정의합니다. 입력 변수는 `hello-world` 작업에서 `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME`, `INPUT_LAST_NAME` 환경 변수에서 액세스할 수 있습니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat
```

### `jobs.<job_id>.steps[*].with.args`

Docker 컨테이너에 대한 입력을 정의하는 `string`입니다. {% data variables.product.prodname_dotcom %}은 컨테이너가 시작될 때 `args`를 컨테이너의 `ENTRYPOINT`에 전달합니다. 이 매개 변수는 `array of strings`를 지원하지 않습니다.

#### 예제

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: octo-org/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

`args`는 `Dockerfile`의 `CMD` 명령 대신 사용됩니다. `Dockerfile`에서 `CMD`를 사용하는 경우 기본 설정에 따라 정렬된 지침을 사용합니다.

1. 작업의 README에서 필요한 인수를 문서화하고 `CMD` 명령에서 생략합니다.
1. 어떤 `args`도 지정하지 않고 작업을 사용할 수 있는 기본값을 사용합니다.
1. 작업이 `--help` 플래그 또는 이와 유사한 항목을 노출하는 경우 이를 기본값으로 사용하여 작업을 자체 문서화합니다.

### `jobs.<job_id>.steps[*].with.entrypoint`

`Dockerfile`의 Docker `ENTRYPOINT`를 재정의하거나 아직 지정하지 않은 경우 설정합니다. 셸 및 exec 형식인 Docker `ENTRYPOINT` 명령과 달리 `entrypoint` 키워드는 실행될 실행 파일을 정의하는 단일 문자열만 허용합니다.

#### 예제

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

`entrypoint` 키워드는 Docker 컨테이너 작업에 사용되어야 하지만 입력을 정의하지 않는 JavaScript 작업에 사용할 수도 있습니다.

### `jobs.<job_id>.steps[*].env`

실행기 환경에서 사용할 단계에 대한 환경 변수를 설정합니다. 전체 워크플로 또는 작업에 대한 환경 변수를 설정할 수도 있습니다. 자세한 내용은 [`env`](#env) 및 [`jobs.<job_id>.env`](#jobsjob_idenv)을 참조하세요.

{% data reusables.repositories.actions-env-var-note %}

퍼블릭 작업은 README 파일에서 예상되는 환경 변수를 지정할 수 있습니다. 환경 변수에서 비밀을 설정하는 경우 `secrets` 컨텍스트를 사용하여 비밀을 설정해야 합니다. 자세한 내용은 “[환경 변수 사용](/actions/automating-your-workflow-with-github-actions/using-environment-variables)” 및 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

#### 예제

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

### `jobs.<job_id>.steps[*].continue-on-error`

단계가 실패해도 작업이 실패하지 않도록 방지합니다. 이 단계가 실패해도 작업이 통과되도록 `true`로 설정합니다.

### `jobs.<job_id>.steps[*].timeout-minutes`

프로세스를 종료하기 전에 단계를 실행할 최대 시간(분)입니다.

## `jobs.<job_id>.timeout-minutes`

{% data variables.product.prodname_dotcom %}가 자동으로 취소되기 전에 작업을 실행할 수 있는 최대 시간(분)입니다. 기본값: 360

시간 제한이 실행기의 작업 실행 시간 제한을 초과하는 경우 실행 시간 한도에 다다르면 작업이 취소됩니다. 작업 실행 시간 제한에 대한 자세한 내용은 {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %} 호스트 러너의 경우 “[사용 제한 및 청구](/actions/reference/usage-limits-billing-and-administration#usage-limits)” 및 {% endif %} 셀프 호스트 사용 제한은 “[셀프 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}”를 참조하세요.{% elsif ghae %}.”{% endif %}

{% note %}

**참고:** {% data reusables.actions.github-token-expiration %} 자체 호스팅 실행기의 경우 작업 시간 제한이 24시간을 초과하는 경우 토큰이 제한 요인이 될 수 있습니다. 자세한 내용은 `GITHUB_TOKEN`“[`GITHUB_TOKEN` 비밀 정보](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)”를 참조하세요.

{% endnote %}

## `jobs.<job_id>.strategy`

`jobs.<job_id>.strategy`를 사용하여 작업에 행렬 전략을 사용합니다. {% data reusables.actions.jobs.about-matrix-strategy %} 자세한 내용은 “[작업에 행렬 사용](/actions/using-jobs/using-a-matrix-for-your-jobs)”을 참조하세요.

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### 예: 1차원 행렬 사용

{% data reusables.actions.jobs.single-dimension-matrix %}

#### 예: 다차원 행렬 사용

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### 예제: 컨텍스트를 사용하여 행렬 만들기

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### 예: 구성 확장

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### 예: 구성 추가

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

작업이 실패해도 워크플로 실행이 실패하지 않도록 방지합니다. 이 작업이 실패해도 워크플로 실행이 통과하도록 `true`로 설정합니다.

### 예제: 특정 실패 매트릭스 작업으로 인해 워크플로 실행에 실패하지 않도록 방지

워크플로 실행에 실패하지 않고 작업 행렬의 특정 작업이 실패하도록 허용할 수 있습니다. 예를 들어 워크플로 실행에 실패하지 않도록 `node`가 `15`로 설정된 실험 작업만 실패하도록 허용하려는 경우입니다.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-latest]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-latest
        experimental: true
```
{% endraw %}

## `jobs.<job_id>.container`

{% data reusables.actions.docker-container-os-support %}

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

### `jobs.<job_id>.container.image`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

### `jobs.<job_id>.container.env`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

### `jobs.<job_id>.container.ports`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

### `jobs.<job_id>.container.volumes`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

### `jobs.<job_id>.container.options`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}

## `jobs.<job_id>.services`

{% data reusables.actions.docker-container-os-support %}

워크플로에서 작업에 대한 서비스 컨테이너를 호스트하는 데 사용됩니다. 서비스 컨테이너는 데이터베이스 또는 Redis와 같은 캐시 서비스를 만드는 데 유용합니다. 실행기는 Docker 네트워크를 자동으로 만들고 서비스 컨테이너의 수명 주기를 관리합니다.

컨테이너에서 실행되도록 작업을 구성하거나 단계에서 컨테이너 작업을 사용하는 경우 포트를 매핑하여 서비스 또는 작업에 액세스할 필요가 없습니다. Docker는 동일한 Docker 사용자 정의 브리지 네트워크의 컨테이너 간 모든 포트를 자동으로 노출합니다. 호스트 이름으로 서비스 컨테이너를 직접 참조할 수 있습니다. 호스트 이름은 워크플로에서 서비스에 대해 구성하는 레이블 이름에 자동으로 매핑됩니다.

실행기 컴퓨터에서 직접 실행되도록 작업을 구성하고 단계에서 컨테이너 작업을 사용하지 않는 경우 필요한 Docker 서비스 컨테이너 포트를 Docker 호스트(실행기 머신)에 매핑해야 합니다. localhost 및 매핑된 포트를 사용하여 서비스 컨테이너에 액세스할 수 있습니다.

네트워킹 서비스 컨테이너 간의 차이점에 대한 자세한 내용은 “[서비스 컨테이너 정보](/actions/automating-your-workflow-with-github-actions/about-service-containers)”를 참조하세요.

### 예제: localhost 사용

이 예제에서는 nginx 및 redis라는 두 가지 서비스를 만듭니다. 컨테이너 포트가 아닌 Docker 호스트 포트를 지정하면 컨테이너 포트가 사용 중이 아닌 포트에 임의로 할당됩니다. {% data variables.product.prodname_dotcom %}는 {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} 컨텍스트에서 할당된 컨테이너 포트를 설정합니다. 이 예제에서는 {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} 및 {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} 컨텍스트를 사용하여 서비스 컨테이너 포트에 액세스할 수 있습니다.

```yaml
services:
  nginx:
    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:
      - 8080:80
  redis:
    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

작업을 실행하기 위해 서비스 컨테이너로 사용할 Docker 이미지입니다. 값은 Docker Hub 이미지 이름 또는 레지스트리 이름일 수 있습니다.

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### 예제

{% raw %}
```yaml
services:
  myservice1:
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.github_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}

### `jobs.<job_id>.services.<service_id>.env`

서비스 컨테이너의 `map` 환경 변수를 설정합니다.

### `jobs.<job_id>.services.<service_id>.ports`

서비스 컨테이너에 노출할 포트의 `array`를 설정합니다.

### `jobs.<job_id>.services.<service_id>.volumes`

사용할 서비스 컨테이너에 대한 볼륨의 `array`를 설정합니다. 볼륨을 사용하여 서비스 또는 작업의 여러 단계 간에 데이터를 공유할 수 있습니다. 명명된 Docker 볼륨, 익명 Docker 볼륨 또는 호스트의 바인딩 탑재를 지정할 수 있습니다.

볼륨을 지정하려면 원본 및 대상 경로를 지정합니다.

`<source>:<destinationPath>`.

`<source>`는 호스트 컴퓨터의 볼륨 이름 또는 절대 경로이며 `<destinationPath>`는 컨테이너의 절대 경로입니다.

#### 예제

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

추가 Docker 컨테이너 리소스 옵션입니다. 옵션 목록은 “[`docker create` 옵션](https://docs.docker.com/engine/reference/commandline/create/#options)”을 참조하세요.

{% warning %}

**경고:** 이 `--network` 옵션은 지원되지 않습니다.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

작업으로 실행할 재사용 가능한 워크플로 파일의 위치 및 버전입니다. {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} 다음 구문 중 하나를 사용합니다.{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### 예제

{% data reusables.actions.uses-keyword-example %}

자세한 내용은 “[워크플로 다시 사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.

### `jobs.<job_id>.with`

작업을 사용하여 재사용 가능한 워크플로를 호출하는 경우 `with`사용하여 워크플로에 전달되는 입력 맵을 제공할 수 있습니다.

전달하는 모든 입력은 호출된 워크플로에 정의된 입력 사양과 일치해야 합니다.

[`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith)와는 달리, `jobs.<job_id>.with`를 통해 전달하는 입력은 호출된 워크플로에서 환경 변수로 사용할 수 없습니다. 대신 `inputs` 컨텍스트를 사용하여 입력을 참조할 수 있습니다.

#### 예제

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

입력 및 입력 값에 대한 문자열 식별자로 구성된 쌍입니다. 식별자는 호출된 워크플로의 [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id)에 정의된 입력의 이름과 일치해야 합니다. 값의 데이터 형식은 호출된 워크플로의 [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype)에 정의된 형식과 일치해야 합니다.

허용되는 언어 식 컨텍스트: `github`및 `needs`

### `jobs.<job_id>.secrets`

작업을 사용하여 재사용 가능한 워크플로를 호출하는 경우 `secrets`를 사용하여 호출된 워크플로에 전달되는 비밀 맵을 제공할 수 있습니다.

전달하는 모든 비밀은 호출된 워크플로에 정의된 이름과 일치해야 합니다.

#### 예제

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %}

### `jobs.<job_id>.secrets.inherit`

`inherit` 키워드를 사용하여 호출 워크플로의 모든 비밀을 호출된 워크플로에 전달합니다. 여기에는 호출 워크플로가 액세스할 수 있는 모든 비밀, 즉 조직, 리포지토리, 환경 비밀이 포함됩니다. `inherit` 키워드는 동일한 조직 내의 리포지토리 또는 동일한 엔터프라이즈 내의 조직 간에 비밀을 전달하는 데 사용할 수 있습니다.

#### 예제

{% raw %}

```yaml
on:
  workflow_dispatch:

jobs:
  pass-secrets-to-workflow:
    uses: ./.github/workflows/called-workflow.yml
    secrets: inherit
```

```yaml
on:
  workflow_call:

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest
    steps:
      - name: Use a repo or org secret from the calling workflow.
        run: echo ${{ secrets.CALLING_WORKFLOW_SECRET }}
```

{% endraw %}

{%endif%}

### `jobs.<job_id>.secrets.<secret_id>`

비밀의 문자열 식별자와 비밀 값으로 구성된 쌍입니다. 식별자는 호출된 워크플로의 [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id)에 정의된 비밀의 이름과 일치해야 합니다.

허용되는 언어 식 컨텍스트: `github`, `needs`, `secrets`
{% endif %}

## 필터 패턴 치트 시트

경로, 분기, 태그 필터에서 특수 문자를 사용할 수 있습니다.

- `*`: 0개 이상의 문자와 일치하지만 `/` 문자와 일치하지 않습니다. 예를 들어 `Octo*`은 `Octocat`와 일치합니다.
- `**`: 0개 이상의 문자와 일치합니다.
- `?`: 0개 또는 1개의 앞의 문자와 일치합니다.
- `+`: 0개 이상의 앞의 문자와 일치합니다.
- `[]` 대괄호에 나열되거나 범위에 포함된 1개의 문자와 일치합니다. 범위에는 `a-z`, `A-Z`, `0-9`만이 포함될 수 있습니다. 예를 들어 `[0-9a-z]` 범위가 모든 숫자 또는 소문자와 일치하는 경우가 있습니다. 예를 들어 `[CB]at` 일치 `Cat` 또는 `Bat` 및 `[1-2]00`이 `100` 및`200`과 일치하는 경우가 있습니다.
- `!`: 패턴이 시작되면 이전의 양수 패턴이 무효화됩니다. 첫 번째 문자가 아니라면 특별한 의미가 없습니다.

`*`, `[`, `!`는 YAML의 특수 문자입니다. 패턴을 `*`, `[`, `!`로 시작하는 경우 패턴을 따옴표로 묶어야 합니다. 또한 `[` 및/또는 `]`가 포함된 패턴이 있는 [흐름 시퀀스](https://yaml.org/spec/1.2.2/#flow-sequences)를 사용하는 경우 패턴은 따옴표로 묶어야 합니다.

```yaml
# Valid
branches:
  - '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
branches:
  - **/README.md

# Valid
branches: [ main, 'release/v[0-9].[0-9]' ]

# Invalid - creates a parse error
branches: [ main, release/v[0-9].[0-9] ]
```

분기, 태그, 경로 필터 구문에 대한 자세한 내용은 “[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)”, “[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)”, “[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)”를 참조하세요.

### 분기 및 태그와 일치하는 패턴

| 패턴 | 설명 | 일치하는 예제 |
|---------|------------------------|---------|
| `feature/*` | `*` 와일드카드는 문자와 일치하지만 슬래시(`/`)와는 일치하지 않습니다. |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | `**` 와일드카드는 분기 및 태그 이름의 슬래시(`/`)를 비롯한 모든 문자와 일치합니다. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | 분기 또는 태그 이름의 정확한 이름과 일치합니다. | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | 슬래시(`/`)를 포함하지 않는 모든 분기 및 태그 이름과 일치합니다. `*` 문자는 YAML의 특수 문자입니다. 패턴을 `*`시작할 때 따옴표를 사용해야 합니다. | `main`<br/><br/>`releases` |
| `'**'` | 모든 분기 및 태그 이름과 일치합니다. 이는 `branches` 또는 `tags` 필터를 사용하지 않는 경우 기본 동작입니다. | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | `*` 문자는 YAML의 특수 문자입니다. 패턴을 `*`시작할 때 따옴표를 사용해야 합니다. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | `v2`로 시작하는 분기 및 태그 이름과 일치합니다. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | 모든 주 버전이 1 또는 2인 의미 체계 버전 관리 분기 및 태그와 일치합니다. | `v1.10.1`<br/><br/>`v2.0.0` |

### 파일 경로와 일치하는 패턴

경로 패턴은 전체 경로와 일치해야 하며 리포지토리의 루트에서 시작해야 합니다.

| 패턴 | 일치 항목에 대한 설명 | 일치하는 예제 |
|---------|------------------------|-----------------|
| `'*'` | `*` 와일드카드는 문자와 일치하지만 슬래시(`/`)와는 일치하지 않습니다. `*` 문자는 YAML의 특수 문자입니다. 패턴을 `*`시작할 때 따옴표를 사용해야 합니다. | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | `?` 문자는 0개 또는 1개의 앞의 문자와 일치합니다. | `page.js`<br/><br/>`page.jsx` |
| `'**'` | `**` 와일드카드는 슬래시(`/`)를 포함한 모든 문자와 일치합니다. 이는 `path` 필터를 사용하지 않는 경우 기본 동작입니다. | `all/the/files.md` |
| `'*.js'` | `*` 와일드카드는 문자와 일치하지만 슬래시(`/`)와는 일치하지 않습니다. 리포지토리의 루트에 있는 모든 `.js` 파일을 일치합니다. | `app.js`<br/><br/>`index.js`
| `'**.js'` | 리포지토리의 모든 `.js` 파일에 일치합니다. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | 리포지토리 루트의 `docs` 디렉터리의 루트 내 모든 파일입니다. | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | 리포지토리 루트의 `/docs` 디렉터리의 모든 파일입니다. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | `docs` 디렉터리 내 모든 위치의 `.md` 접미사가 있는 파일입니다. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | 리포지토리 내 모든 위치의 `docs` 디렉터리의 모든 파일입니다. | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | 리포지토리 내 모든 위치의 README.md 파일입니다. | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | 리포지토리 내 모든 위치의 접미사가 `src`인 폴더의 모든 파일입니다. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | 리포지토리 내 모든 위치의 접미사가 `-post.md`인 파일입니다. | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | 리포지토리 내 모든 위치의 접두사가 `migrate-`이고 접미사가 `.sql`인 파일입니다. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | 패턴 앞에 느낌표(`!`)를 사용하면 무효화됩니다. 파일이 패턴과 일치하고 파일의 뒷부분에서 정의된 음수 패턴과 일치하면 파일이 포함되지 않습니다. | `hello.md`<br/><br/>_일치하지 않는 항목_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | 패턴은 순차적으로 검사됩니다. 이전 패턴을 무효화하는 패턴은 파일 경로를 다시 포함합니다. | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|
