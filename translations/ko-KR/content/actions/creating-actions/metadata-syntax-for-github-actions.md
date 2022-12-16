---
title: GitHub Actions에 대한 메타데이터 구문
shortTitle: Metadata syntax
intro: 리포지토리에서 작업을 수행하는 작업을 만들 수 있습니다. 작업에는 YAML 구문을 사용하는 메타데이터 파일이 필요합니다.
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107415'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_actions %}에 대한 YAML 구문

모든 작업에는 메타데이터 파일이 필요합니다. 메타데이터 파일 이름은 `action.yml` 또는 `action.yaml`이어야 합니다. 메타데이터 파일의 데이터는 작업에 대한 입력, 출력, 실행 구성을 정의합니다.

작업 메타데이터 파일은 YAML 구문을 사용합니다. YAML을 처음 사용하는 경우 “[5분 안에 YAML 알아보기](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)”를 읽을 수 있습니다.

## `name`

**필수** 작업의 이름입니다. {% data variables.product.prodname_dotcom %}는 각 작업을 시각적으로 식별하는 데 도움이 되도록 **작업** 탭에 `name`을 표시합니다.

## `author`

**선택 사항** 작업 작성자의 이름입니다.

## `description`

**필수** 다음은 작업에 대한 간단한 설명입니다.

## `inputs`

**선택 사항** 입력 매개 변수를 사용하면 런타임 중에 작업에서 사용할 데이터를 지정할 수 있습니다. {% data variables.product.prodname_dotcom %}는 입력 매개 변수를 환경 변수로 저장합니다. 대문자가 있는 입력 ID는 런타임 중에 소문자로 변환됩니다. 소문자 입력 ID를 사용하는 것이 좋습니다.

### 예제: 입력 지정

이 예제에서는 numOctocats 및 octocatEyeColor라는 두 가지 입력을 구성합니다. numOctocats 입력은 필요하지 않으며 기본값은 ‘1’로 설정됩니다. octocatEyeColor 입력은 필수이며 기본값이 없습니다. 이 작업을 사용하는 워크플로 파일은 `with` 키워드를 사용하여 octocatEyeColor에 대한 입력 값을 설정해야 합니다. `with` 구문에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)”을 참조하세요.

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

워크플로 파일에서 입력을 지정하거나 기본 입력 값을 사용하는 경우 {% data variables.product.prodname_dotcom %}는 이름이 `INPUT_<VARIABLE_NAME>`인 입력에 대한 환경 변수를 만듭니다. 만들어진 환경 변수는 입력 이름을 대문자로 변환하고 공백을 `_` 문자로 바꿉니다.

[작업이 ](/actions/creating-actions/creating-a-composite-action)을 사용하여 작성된 경우 자동으로 `INPUT_<VARIABLE_NAME>`을 가져오지 않습니다. 변환이 발생하지 않으면 이러한 입력을 수동으로 변경할 수 있습니다.

Docker 컨테이너 작업에서 환경 변수에 액세스하려면 작업 메타데이터 파일에서 `args` 키워드를 사용하여 입력을 전달해야 합니다. Docker 컨테이너 작업의 작업 메타데이터 파일에 대한 자세한 내용은 “[Docker 컨테이너 작업 만들기](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)”를 참조하세요.

예를 들어 워크플로가 `numOctocats` 및 `octocatEyeColor` 입력을 정의한 경우 작업 코드는 `INPUT_NUMOCTOCATS` 및 `INPUT_OCTOCATEYECOLOR` 환경 변수를 사용하여 입력 값을 읽을 수 있습니다.

### `inputs.<input_id>`

**필수** 입력과 연결할 `string` 식별자입니다. `<input_id>` 값은 입력 메타데이터의 맵입니다. `<input_id>`은 `inputs` 개체 내에서 고유한 식별자여야 합니다. `<input_id>`은 문자 또는 `_`로 시작해야 하며 영숫자, `-` 또는 `_`만 포함해야 합니다.

### `inputs.<input_id>.description`

**필수** 입력 매개 변수에 대한 `string` 설명입니다.

### `inputs.<input_id>.required`

**선택 사항** 작업에 입력 매개 변수가 필요한지 여부를 나타내는 `boolean`입니다. 매개 변수가 필요한 경우 `true`로 설정합니다.

### `inputs.<input_id>.default`

**선택 사항** 기본값을 나타내는 `string`입니다. 기본값은 입력 매개 변수가 워크플로 파일에 지정되지 않은 경우에 사용됩니다.

### `inputs.<input_id>.deprecationMessage`

**선택 사항** 입력 매개 변수를 사용하면 `string`이 경고 메시지로 기록됩니다. 이 경고를 사용하여 입력이 더 이상 사용되지 않음을 알리고 대안을 언급할 수 있습니다.

## Docker 컨테이너 및 JavaScript 작업의 `outputs`

**선택 사항** 출력 매개 변수를 사용하면 작업이 설정하는 데이터를 선언할 수 있습니다. 워크플로에서 나중에 실행되는 작업은 이전에 실행한 작업의 출력 데이터 세트를 사용할 수 있습니다.  예를 들어 두 개의 입력(x + y = z)을 추가하는 작업을 수행하는 경우 이 작업은 입력으로 사용할 다른 작업에 대한 합계(z)를 출력할 수 있습니다.

{% data reusables.actions.output-limitations %}

작업 메타데이터 파일에서 출력을 선언하지 않은 경우에도 출력을 설정하고 워크플로에서 사용할 수 있습니다. 작업에서의 출력 설정에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)”을 참조하세요.

### 예제: Docker 컨테이너 및 JavaScript 작업에 대한 출력 선언

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**필수** 출력과 연결할 `string` 식별자입니다. `<output_id>` 값은 출력 메타데이터의 맵입니다. `<output_id>`은 `outputs` 개체 내에서 고유한 식별자여야 합니다. `<output_id>`은 문자 또는 `_`로 시작해야 하며 영숫자, `-` 또는 `_`만 포함해야 합니다.

### `outputs.<output_id>.description`

**필수** 출력 매개 변수에 대한 `string` 설명입니다.

## 복합 작업의 `outputs`

**선택 사항** `outputs`은 `outputs.<output_id>` 및 `outputs.<output_id>.description`와 동일한 매개 변수를 사용하지만(“[`outputs`Docker 컨테이너 및 JavaScript 작업에 대한](#outputs-for-docker-container-and-javascript-actions)” 참조) `value` 토큰도 포함되어 있습니다.

{% data reusables.actions.output-limitations %}

### 예제: 복합 작업에 대한 출력 선언

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**필수** 출력 매개 변수가 매핑될 값입니다. `string` 또는 컨텍스트가 있는 식으로 설정할 수 있습니다. 예를 들어 `steps` 컨텍스트를 사용하여 출력의 `value`를 단계의 출력 값으로 설정할 수 있습니다.

컨텍스트 구문을 사용하는 방법에 대한 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

## `runs`

**필수** JavaScript 작업, 복합 작업 또는 Docker 컨테이너 작업인지와 작업 실행 방식을 지정합니다.

## JavaScript 작업에 대한 `runs`

**필수** 작업 코드의 경로와 코드를 실행하는 데 사용되는 런타임을 구성합니다.

### 예: Node.js {% ifversion fpt or ghes > 3.3 또는 ghae > 3.3 or ghec %}v16{% else %}v12{% endif %} 사용

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**필수** [`main`](#runsmain)에 지정된 코드를 실행하는 데 사용되는 런타임입니다.

- Node.js v12에 사용합니다 `node12` .{ % ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- Node.js v16의 경우 `node16`을 사용합니다.{% endif %}

### `runs.main`

**필수** 작업 코드가 포함된 파일입니다. [`using`](#runsusing)에 지정된 런타임은 이 파일을 실행합니다.

### `runs.pre`

**선택 사항** `main:` 작업이 시작되기 전에 작업 시작 시 스크립트를 실행할 수 있습니다. 예를 들어 `pre:`를 사용하여 필수 조건 설정 스크립트를 실행할 수 있습니다. [`using`](#runsusing) 구문으로 지정된 런타임은 이 파일을 실행합니다. `pre:` 작업은 기본적으로 항상 실행되지만 [`runs.pre-if`](#runspre-if)를 사용하여 이를 재정의할 수 있습니다.

이 예제에서 `pre:` 작업은 `setup.js`라는 스크립트를 실행합니다.

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**선택 사항** `pre:` 작업 실행을 위한 조건을 정의할 수 있습니다. `pre:` 작업은 `pre-if`의 조건이 충족되는 경우에만 실행됩니다. 설정하지 않으면 `pre-if`의 기본값은 `always()`입니다. `pre-if`에서 상태 검사 함수는 작업 자체의 상태가 아니라 동작의 상태를 기준으로 평가합니다.

아직 실행된 단계가 없으므로 `step` 컨텍스트를 사용할 수 없습니다.

이 예제에서는 `cleanup.js`는 Linux 기반 실행기에서만 실행됩니다.

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**선택 사항** `main:` 동작이 완료된 후 작업이 끝날 때 스크립트를 실행할 수 있습니다. 예를 들어 `post:`을 사용하여 특정 프로세스를 종료하거나 필요하지 않은 파일을 제거할 수 있습니다. [`using`](#runsusing) 구문으로 지정된 런타임은 이 파일을 실행합니다.

이 예제에서 `post:` 작업은 `cleanup.js`라는 스크립트를 실행합니다.

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

`post:` 작업은 기본적으로 항상 실행되지만 `post-if`를 사용하여 이를 재정의할 수 있습니다.

### `runs.post-if`

**선택 사항** `post:` 작업 실행을 위한 조건을 정의할 수 있습니다. `post:` 작업은 `post-if`의 조건이 충족되는 경우에만 실행됩니다. 설정하지 않으면 `post-if`의 기본값은 `always()`입니다. `post-if`에서 상태 검사 함수는 작업 자체의 상태가 아니라 동작의 상태를 기준으로 평가합니다.

예를 들어 `cleanup.js`은 Linux 기반 실행기에서만 실행됩니다.

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## 복합 작업의 `runs`

**필수** 복합 작업의 경로를 구성합니다.

### `runs.using`

**필수** 값을 `'composite'`로 설정해야 합니다.

### `runs.steps`

**필수** 이 작업에서 실행하려는 단계입니다. 이는 `run` 단계 또는 `uses` 단계일 수 있습니다.

#### `runs.steps[*].run`

**선택적** 실행할 명령입니다. 인라인 또는 작업 리포지토리의 스크립트일 수 있습니다.

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

또는 `$GITHUB_ACTION_PATH`를 사용할 수 있습니다.

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

자세한 내용은 “[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”를 참조하세요.

#### `runs.steps[*].shell`

**선택적** 명령을 실행할 셸입니다. [여기](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell)에 나열된 모든 셸을 사용할 수 있습니다. `run`이 설정된 경우 필수입니다.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**선택 사항** `if` 조건을 사용하여 조건이 충족되지 않는 한 단계가 실행되지 않도록 할 수 있습니다. 지원되는 컨텍스트 및 식을 사용하여 조건부를 만들 수 있습니다.

{% data reusables.actions.expression-syntax-if %} 자세한 내용은 “[식](/actions/learn-github-actions/expressions)”을 참조하세요.

**예제: 컨텍스트 사용**

 이 단계는 이벤트 유형이 `pull_request`이고 이벤트 작업이 `unassigned`인 경우에만 실행됩니다.

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**예제: 상태 검사 함수 사용**

`my backup step`은 복합 작업의 이전 단계가 실패한 경우에만 실행됩니다. 자세한 내용은 “[식](/actions/learn-github-actions/expressions#status-check-functions)”을 참조하세요.

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**선택 사항** 복합 단계의 이름입니다.

#### `runs.steps[*].id`

**선택 사항** 단계의 고유 식별자입니다. `id`를 사용하여 컨텍스트에서 단계를 참조할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

#### `runs.steps[*].env`

**선택 사항** 해당 단계에 대해서만 환경 변수의 `map`을 설정합니다. 워크플로에 저장된 환경 변수를 수정하려면 복합 단계에서 `echo "{name}={value}" >> $GITHUB_ENV`를 사용합니다.

#### `runs.steps[*].working-directory`

**선택 사항** 명령이 실행되는 작업 디렉터리를 지정합니다.

#### `runs.steps[*].uses`

**선택 사항** 작업 단계의 일부로 실행할 작업을 선택합니다. 작업은 재사용 가능한 코드 단위입니다. 워크플로와 동일한 리포지토리, 퍼블릭 리포지토리 또는 [게시된 Docker 컨테이너 이미지](https://hub.docker.com/)에 정의된 작업을 사용할 수 있습니다.

Git 참조, SHA 또는 Docker 태그 번호를 지정하여 사용 중인 작업의 버전을 포함하는 것이 좋습니다. 버전을 지정하지 않으면 작업 소유자가 업데이트를 게시할 때 워크플로가 중단되거나 예기치 않은 동작이 발생할 수 있습니다.
- 릴리스된 작업 버전의 커밋 SHA를 사용하는 것이 안정성 및 보안 측면에서 가장 안전합니다.
- 특정 주요 작업 버전을 사용하면 호환성을 유지하면서 중요한 수정 및 보안 패치를 받을 수 있습니다. 또한 워크플로가 계속 작동하도록 합니다.
- 작업의 기본 분기를 사용하는 것이 편리할 수 있지만 다른 사용자가 호환성이 손상되는 변경으로 새 주 버전을 릴리스하는 경우 워크플로가 중단될 수 있습니다.

일부 작업에는 [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith) 키워드를 사용하여 설정해야 하는 입력이 필요합니다. 작업의 추가 정보 파일을 검토하여 필요한 입력을 확인합니다.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**선택 사항** 작업에 의해 정의된 입력 매개 변수의 `map`입니다. 각 입력 매개 변수는 키/값 쌍입니다. 자세한 내용은 [예제: 입력 지정](#example-specifying-inputs)을 참조하세요.

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat
```

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

**선택적**  단계가 실패할 때 작업이 실패하지 않도록 합니다. 이 단계가 실패해도 작업이 통과되도록 하려면 `true`로 설정합니다.

{% endif %}

## Docker 컨테이너 작업의 `runs`

**필수** Docker 컨테이너 작업에 사용되는 이미지를 구성합니다.

### 예제: 리포지토리에서 Dockerfile 사용

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### 예제: 퍼블릭 Docker 레지스트리 컨테이너 사용

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**필수** 값을 `'docker'`로 설정해야 합니다.

### `runs.pre-entrypoint`

**선택 사항** `entrypoint` 작업이 시작되기 전에 스크립트를 실행할 수 있습니다. 예를 들어 `pre-entrypoint:`를 사용하여 필수 조건 설정 스크립트를 실행할 수 있습니다. {% data variables.product.prodname_actions %}는 `docker run`을 사용하여 이 작업을 시작하고 동일한 기본 이미지를 사용하는 새 컨테이너 내에서 스크립트를 실행합니다. 즉, 런타임 상태가 주 `entrypoint` 컨테이너와 다르며 필요한 모든 상태는 작업 영역 `HOME` 또는 `STATE_` 변수로 액세스해야 합니다. `pre-entrypoint:` 작업은 기본적으로 항상 실행되지만 [`runs.pre-if`](#runspre-if)를 사용하여 이를 재정의할 수 있습니다.

[`using`](#runsusing) 구문으로 지정된 런타임은 이 파일을 실행합니다.

이 예제에서 `pre-entrypoint:` 작업은 `setup.sh`라는 스크립트를 실행합니다.

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**필수** 작업을 실행하기 위한 컨테이너로 사용할 Docker 이미지입니다. 값은 Docker 기본 이미지 이름, 리포지토리의 로컬 `Dockerfile`, Docker Hub 또는 다른 레지스트리의 퍼블릭 이미지일 수 있습니다. 리포지토리에 로컬인 `Dockerfile`을 참조하려면 파일 이름이 `Dockerfile`이어야 하고 작업 메타데이터 파일에 상대적인 경로를 사용해야 합니다. `docker` 애플리케이션은 이 파일을 실행합니다.

### `runs.env`

**선택 사항** 컨테이너 환경에서 설정할 환경 변수의 키/값 맵을 지정합니다.

### `runs.entrypoint`

**선택 사항** `Dockerfile`의 Docker `ENTRYPOINT`를 재정의하거나 아직 지정하지 않은 경우 설정합니다. `Dockerfile`이 `ENTRYPOINT`를 지정하지 않거나 `ENTRYPOINT` 명령어를 재정의하려는 경우 `entrypoint`를 사용합니다. `entrypoint`를 생략하면 Docker `ENTRYPOINT` 명령에서 지정한 명령이 실행됩니다. Docker `ENTRYPOINT` 명령에는 _shell_ 형식과 _exec_ 형식이 있습니다. Docker `ENTRYPOINT` 문서에서는 `ENTRYPOINT` 명령의 _exec_ 형식을 사용하는 것이 좋습니다.

`entrypoint` 실행 방식에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 Dockerfile 지원](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)”을 참조하세요.

### `runs.post-entrypoint`

**선택 사항** `runs.entrypoint` 작업이 완료되면 정리 스크립트를 실행할 수 있습니다. {% data variables.product.prodname_actions %}는 `docker run`을 사용하여 이 작업을 시작합니다. {% data variables.product.prodname_actions %}는 동일한 기본 이미지를 사용하여 새 컨테이너 내에서 스크립트를 실행하기 때문에 런타임 상태는 기본 `entrypoint` 컨테이너와 다릅니다. 작업 영역인 `HOME`에서 또는 `STATE_` 변수로 필요한 모든 상태에 액세스할 수 있습니다. `post-entrypoint:` 작업은 기본적으로 항상 실행되지만 [`runs.post-if`](#runspost-if)를 사용하여 이를 재정의할 수 있습니다.

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**선택 사항** Docker 컨테이너에 대한 입력을 정의하는 문자열 배열입니다. 입력에는 하드 코드된 문자열이 포함될 수 있습니다. {% data variables.product.prodname_dotcom %}은 컨테이너가 시작될 때 `args`를 컨테이너의 `ENTRYPOINT`에 전달합니다.

`args`는 `Dockerfile`의 `CMD` 명령 대신 사용됩니다. `Dockerfile`에서 `CMD`를 사용하는 경우 기본 설정에 따라 정렬된 지침을 사용합니다.

{% data reusables.actions.dockerfile-guidelines %}

환경 변수를 작업에 전달해야 하는 경우 작업이 명령 셸을 실행하여 변수 대체를 수행하는지 확인하세요. 예를 들어 `entrypoint` 특성이 `"sh -c"`로 설정된 경우 `args`는 명령 셸에서 실행됩니다. 또는 `Dockerfile`이 `ENTRYPOINT`를 사용하여 동일한 명령(`"sh -c"`)을 실행하는 경우 `args`는 명령 셸에서 실행됩니다.

{% data variables.product.prodname_actions %}를 사용하여 `CMD` 명령을 사용하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 Dockerfile 지원](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)”을 참조하세요.

#### 예제: Docker 컨테이너에 대한 인수 정의

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

**선택 사항** 색상과 [깃털](https://feathericons.com/) 아이콘을 사용하여 배지를 만들어 작업을 맞춤화하고 구별할 수 있습니다. 배지는 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)에서 작업 이름 옆에 표시됩니다.

### 예제: 작업에 대한 브랜딩 구성

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

배지의 배경색입니다. `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple` 또는 `gray-dark` 중 하나일 수 있습니다.

### `branding.icon`

사용할 v4.28.0 [깃털](https://feathericons.com/) 아이콘의 이름입니다. 브랜드 아이콘과 다음은 생략됩니다.

<table>
<tr>
<td>커피</td>
<td>열</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>육각형</td>
<td>key</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>도구(tool)</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

현재 지원되는 모든 아이콘의 전체 목록은 다음과 같습니다.

<!--
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo.
-->

<table>
<tr>
<td>활동</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>앵커</td>
<td>aperture</td>
<td>보관</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-left-circle</td>
<td>arrow-left</td>
<td>arrow-right-circle</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>위쪽-화살표</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>battery</td>
<td>bell-off</td>
<td>벨</td>
</tr>
<tr>
<td>bluetooth</td>
<td>굵게</td>
<td>book-open</td>
<td>설명서</td>
</tr>
<tr>
<td>책갈피(bookmark)</td>
<td>box</td>
<td>briefcase</td>
<td>달력</td>
</tr>
<tr>
<td>camera-off</td>
<td>카메라</td>
<td>캐스트</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>선택</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>클립보드</td>
</tr>
<tr>
<td>clock</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>코드</td>
</tr>
<tr>
<td>명령을 사용합니다.</td>
<td>compass</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-up</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>crop</td>
<td>crosshair</td>
<td>데이터베이스</td>
</tr>
<tr>
<td>delete</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>다운로드로 사용 가능한 제품 설명서에서 데이터 공급자 설치 섹션을 참조하세요</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>편집</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>fast-forward</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>파일</td>
<td>film</td>
<td>filter</td>
</tr>
<tr>
<td>flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>폴더</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>  git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
<td>help-circle</td>
</tr>
<tr>
<td>home</td>
<td>이미지</td>
<td>inbox</td>
<td>정보</td>
</tr>
<tr>
<td>기울임꼴</td>
<td>계층</td>
<td>레이아웃</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>모니터</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>이동</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>탐색</td>
<td>octagon</td>
<td>패키지</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>일시 중지</td>
<td>percent</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>power</td>
<td>printer</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>RSS</td>
</tr>
<tr>
<td>저장</td>
<td>scissors</td>
<td>search</td>
<td>send</td>
</tr>
<tr>
<td>서버</td>
<td>설정</td>
<td>share-2</td>
<td>공유</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>순서 섞기</td>
<td>sidebar</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>슬라이더</td>
<td>smartphone</td>
<td>speaker</td>
</tr>
<tr>
<td>square</td>
<td>별표</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>일몰</td>
<td>태블릿</td>
<td>태그</td>
</tr>
<tr>
<td>대상</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>삼각형</td>
</tr>
<tr>
<td>트럭</td>
<td>tv</td>
<td>형식</td>
<td>umbrella</td>
</tr>
<tr>
<td>밑줄</td>
<td>잠금 해제</td>
<td>upload-cloud</td>
<td>upload</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>사용자</td>
<td>사용자</td>
<td>video-off</td>
<td>비디오</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>볼륨</td>
<td>보기</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
