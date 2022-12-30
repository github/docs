---
title: GitHub Actions에 대한 워크플로 명령
shortTitle: Workflow commands
intro: 워크플로 또는 작업 코드에서 셸 명령을 실행할 때 워크플로 명령을 사용할 수 있습니다.
defaultTool: bash
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
  - /actions/learn-github-actions/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b34a96bb62a885031584f3da017fd86b7469a277
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160834'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 워크플로 명령 정보

작업은 실행기 컴퓨터와 통신하여 환경 변수를 설정하고, 다른 작업에서 사용하는 값을 출력하고, 출력 로그에 디버그 메시지를 추가하는 등 다양한 작업을 수행할 수 있습니다.

대부분의 워크플로 명령은 특정 형식으로 `echo` 명령을 사용하는 반면 파일에 작성하여 호출할 수 있는 명령도 있습니다. 자세한 내용은 [“환경 파일](#environment-files)”을 참조하세요.

### 예제

{% bash %}

```bash{:copy}
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**참고:** 워크플로 명령 및 매개 변수 이름은 대/소문자를 구분하지 않습니다.

{% endnote %}

{% warning %}

**경고:** 명령 프롬프트를 사용하는 경우 워크플로 명령을 사용할 때 큰따옴표(`"`)를 생략합니다.

{% endwarning %}

## 워크플로 명령을 사용하여 도구 키트 함수에 액세스

[작업/도구 키트](https://github.com/actions/toolkit)에는 워크플로 명령으로 실행할 수 있는 여러 함수가 포함되어 있습니다. `::` 구문을 사용하여 YAML 파일 내에서 워크플로 명령을 실행합니다. 그러면 해당 명령이 `stdout`을 통해 실행기로 전송됩니다.

{%- ifversion actions-save-state-set-output-envs %} 예를 들어 아래와 같이 코드를 사용하여 오류 주석을 만드는 대신

```javascript{:copy}
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### 예제: 오류에 대한 주석 만들기

워크플로에서 `error` 명령을 사용하여 동일한 오류 주석을 만들 수 있습니다.

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: echo "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: Write-Output "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endpowershell %} {%- else %} 예를 들어 아래와 같이 코드를 사용하여 출력을 설정하는 대신 다음을 수행합니다.

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### 예제: 값 설정

워크플로의 `set-output` 명령을 사용하여 동일한 값을 설정할 수 있습니다.

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: Write-Output "::set-output name=SELECTED_COLOR::green"
        id: random-color-generator
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %}

{% endif %}

다음 표에서는 워크플로 내에서 사용할 수 있는 도구 키트 함수를 보여 줍니다.

| 도구 키트 함수 | 동등한 워크플로 명령 |
| ----------------- |  ------------- |
| `core.addPath`    | `GITHUB_PATH` 환경 파일을 사용하여 액세스할 수 있음 |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | `GITHUB_ENV` 환경 파일을 사용하여 액세스할 수 있음 |
| `core.getInput`   | `INPUT_{NAME}` 환경 변수를 사용하여 액세스할 수 있음 |
| `core.getState`   | `STATE_{NAME}` 환경 변수를 사용하여 액세스할 수 있음 |
| `core.isDebug`    |  `RUNNER_DEBUG` 환경 변수를 사용하여 액세스할 수 있음 |
{%- ifversion actions-job-summaries %} | `core.summary` | 환경 파일 `GITHUB_STEP_SUMMARY` | 사용하여 액세스할 수 있음 {%- endif %} | `core.saveState`  | {% ifversion actions-save-state-set-output-envs %} 환경 파일 `GITHUB_STATE`{% else %}`save-state`{% endif %} | | | |`echo` `core.setCommandEcho` | 사용하여 액세스할 수 있습니다. `core.setFailed`  | 및 `exit 1` | | `core.setOutput` 대한 `::error` 바로 가기로 사용됨  | {% ifversion actions-save-state-set-output-envs %} 환경 파일 `GITHUB_OUTPUT`{% else %}`set-output`{% endif %} | | | |  | `add-mask` `core.setSecret`| | `core.startGroup` | `group` 사용하여 액세스할 수 있습니다.`core.warning`    | `warning` |

{% ifversion actions-save-state-set-output-envs %} {% else %}
## 출력 매개 변수 설정

작업의 출력 매개 변수를 설정합니다.

```{:copy}
::set-output name={name}::{value}
```

필요에 따라 작업의 메타데이터 파일에서 출력 매개 변수를 선언할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)”을 참조하세요.

환경 변수를 만들고 워크플로 명령에서 사용하여 출력 매개 변수를 설정하기 위해 여러 줄 문자열을 이스케이프할 수 있습니다. 자세한 내용은 "[환경 변수 설정"을 참조하세요](#setting-an-environment-variable).

### 예제: 출력 매개 변수 설정

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %} {% endif %}

## 디버그 메시지 설정

디버그 메시지를 로그에 출력합니다. 로그에서 이 명령으로 설정된 디버그 메시지를 보려면 이름이 `ACTIONS_STEP_DEBUG`이며 값이`true`인 비밀을 만들어야 합니다. 자세한 내용은 “[디버그 로깅 사용](/actions/managing-workflow-runs/enabling-debug-logging)”을 참조하세요.

```{:copy}
::debug::{message}
```

### 예제: 디버그 메시지 설정

{% bash %}

```bash{:copy}
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

## 알림 메시지 설정

알림 메시지를 만들고 메시지를 로그에 출력합니다. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### 예제: 알림 메시지 설정

{% bash %}

```bash{:copy}
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## 경고 메시지 설정

경고 메시지를 만들고 메시지를 로그에 출력합니다. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### 예제: 경고 메시지 설정

{% bash %}

```bash{:copy}
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## 오류 메시지 설정

오류 메시지를 만들고 메시지를 로그에 출력합니다. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### 예제: 오류 메시지 설정

{% bash %}

```bash{:copy}
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## 로그 줄 그룹화

로그에 확장 가능한 그룹을 만듭니다. 그룹을 만들려면 `group` 명령을 사용하고 `title`을 지정합니다. `group` 명령과 `endgroup` 명령 간 로그에 인쇄하는 모든 항목은 로그의 확장 가능한 항목 내에서 중첩됩니다.

```{:copy}
::group::{title}
::endgroup::
```

### 예제: 로그 선 그룹화

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    steps:
      - name: Group of log lines
        run: |
            echo "::group::My title"
            echo "Inside group"
            echo "::endgroup::"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    steps:
      - name: Group of log lines
        run: |
            Write-Output "::group::My title"
            Write-Output "Inside group"
            Write-Output "::endgroup::"
```

{% endpowershell %}

![워크플로 실행 로그의 폴딩 가능 그룹](/assets/images/actions-log-group.png)

## 로그에서 값 마스킹

```{:copy}
::add-mask::{value}
```

값을 마스킹하면 문자열 또는 변수가 로그에 출력되지 않습니다. 마스킹되어 공백으로 구분된 각 단어는 `*` 문자로 대체됩니다. 마스크의 `value`에 환경 변수 또는 문자열을 사용할 수 있습니다. 값을 마스킹하면 비밀로 처리되고 실행기에서 편집됩니다. 예를 들어 값을 마스킹한 후에는 해당 값을 출력으로 설정할 수 없습니다.

### 예제: 문자열 마스킹

로그에서 `"Mona The Octocat"`을 출력하면 `"***"`가 표시됩니다.

{% bash %}

```bash{:copy}
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

{% warning %}

**경고:** 비밀을 빌드 로그에 출력하거나 다른 워크플로 명령에서 사용하기 전에 ‘add-mask’에 등록해야 합니다.

{% endwarning %}

### 예제: 환경 변수 마스킹

로그에 `MY_NAME` 변수 또는 `"Mona The Octocat"` 값을 출력할 때 `"Mona The Octocat"` 대신 `"***"`가 표시됩니다.

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: bash-version
        run: echo "::add-mask::$MY_NAME"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: powershell-version
        run: Write-Output "::add-mask::$env:MY_NAME"
```

{% endpowershell %}

## 워크플로 명령 중지 및 시작

워크플로 명령 처리를 중지합니다. 이 특수 명령을 사용하면 워크플로 명령을 실수로 실행하지 않고 모든 항목을 기록할 수 있습니다. 예를 들어 주석이 있는 전체 스크립트를 출력하기 위해 로깅을 중지할 수 있습니다.

```{:copy}
::stop-commands::{endtoken}
```

워크플로 명령의 처리를 중지하려면 고유한 토큰을 `stop-commands`에 전달합니다. 워크플로 명령 처리를 계속하려면 워크플로 명령을 중지하는 데 사용한 것과 동일한 토큰을 전달합니다.

{% warning %}

**경고:** 사용 중인 토큰이 임의로 생성되고 각 실행에 대해 고유해야 합니다.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### 예제: 워크플로 명령 중지 및 시작

{% bash %}

{% raw %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: Disable workflow commands
        run: |
          echo '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          stopMarker=$(uuidgen)
          echo "::stop-commands::$stopMarker"
          echo '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          echo "::$stopMarker::"
          echo '::warning:: This is a warning again, because stop-commands has been turned off.'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: Disable workflow commands
        run: |
          Write-Output '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          $stopMarker = New-Guid
          Write-Output "::stop-commands::$stopMarker"
          Write-Output '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          Write-Output "::$stopMarker::"
          Write-Output '::warning:: This is a warning again, because stop-commands has been turned off.'
```

{% endraw %}

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %} {% else %}
## 명령 출력 에코

워크플로 명령의 에코를 사용하거나 사용하지 않도록 설정합니다. 예를 들어 워크플로에서 `set-output` 명령을 사용하는 경우 출력 매개 변수를 설정하지만 워크플로 실행의 로그에 명령 자체가 표시되지 않습니다. 명령 에코를 사용하도록 설정하면 로그에 `::set-output name={name}::{value}`와 같은 명령이 표시됩니다.

```{:copy}
::echo::on
::echo::off
```

명령 에코는 기본적으로 사용하지 않도록 설정됩니다. 그러나 명령을 처리하는 동안 오류가 발생하면 워크플로 명령이 에코됩니다.

출력이 이미 로그에 에코되므로 `add-mask`, `debug`, `warning`, `error` 명령은 에코를 지원하지 않습니다.

`ACTIONS_STEP_DEBUG` 비밀을 사용하여 단계 디버그 로깅을 사용 설정하여 전역적으로 명령 에코를 사용하도록 설정할 수도 있습니다. 자세한 내용은 “[디버그 로깅 사용](/actions/managing-workflow-runs/enabling-debug-logging)”을 참조하세요. 반면 `echo` 워크플로 명령을 사용하면 리포지토리의 모든 워크플로에 대해 명령 에코를 사용하도록 설정하는 대신 보다 세분화된 수준에서 명령 에코를 사용하도록 설정할 수 있습니다.

### 예제: 명령 에코 전환

{% bash %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          echo '::set-output name=action_echo::disabled'
          echo '::echo::on'
          echo '::set-output name=action_echo::enabled'
          echo '::echo::off'
          echo '::set-output name=action_echo::disabled'
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          write-output "::set-output name=action_echo::disabled"
          write-output "::echo::on"
          write-output "::set-output name=action_echo::enabled"
          write-output "::echo::off"
          write-output "::set-output name=action_echo::disabled"
```

{% endpowershell %}

위의 예제에서는 다음 줄을 로그에 출력합니다.

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

명령 에코가 실행될 때만 사용하도록 설정되었기 때문에 두 번째 `set-output` 및 `echo` 워크플로 명령만 로그에 포함됩니다. 항상 에코되는 것은 아니지만 출력 매개 변수는 모든 경우에 설정됩니다.
 
{% endif %}

## 이전 및 사후 작업에 값 보내기

{% ifversion actions-save-state-set-output-envs %} {% else %}에 있는 `GITHUB_STATE`파일에 기록하여 워크플로 `pre:` 또는 `post:` 작업과 공유하기 위한 환경 변수를 만들 수 있습니다.}명령을 사용하여 `save-state` 워크플로 `pre:` 또는 `post:` 작업과 공유하기 위한 환경 변수를 만들 수 있습니다{% endif %}. 예를 들어 `pre:` 작업을 사용하여 파일을 만들고, 파일 위치를 `main:` 작업에 전달한 다음, `post:` 작업을 사용하여  파일을 삭제할 수 있습니다. 또는 `main:` 작업을 사용하여 파일을 만들고, 파일 위치를 `post:` 작업에 전달한 다음, `post:` 작업을 사용하여 파일을 삭제할 수 있습니다.

여러 `pre:` 또는 `post:` 작업이 있는 경우 {% ifversion actions-save-state-set-output-envs %}이(가) {% else %}`save-state`에 기록`GITHUB_STATE`된 작업에서 저장된 값에만 액세스할 수 있습니다{% endif %}. `post:` 작업에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)”을 참조하세요.

{% ifversion actions-save-state-set-output-envs %} 파일은 `GITHUB_STATE` 작업 내에서만 사용할 수 있습니다{% else %}명령은 `save-state` 작업 내에서만 실행할 수 있으며 YAML 파일{% endif %}에서는 사용할 수 없습니다. 저장된 값은 접두사가 `STATE_`인 환경 값으로 저장됩니다.

{% ifversion actions-save-state-set-output-envs %} 이 예제에서는 JavaScript를 사용하여 파일에 씁니다 `GITHUB_STATE` . 결과 환경 변수의 이름은 `STATE_processID`이며 값은 `12345`가 됩니다.

```javascript{:copy}
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

{% else %} 이 예제에서는 JavaScript를 사용하여 명령을 실행합니다 `save-state` . 결과 환경 변수의 이름은 `STATE_processID`이며 값은 `12345`가 됩니다.

```javascript{:copy}
console.log('::save-state name=processID::12345')
```
{% endif %}

그런 다음 `main` 작업에서 실행되는 정리 스크립트에서만 `STATE_processID` 변수를 사용할 수 있습니다. 이 예제는 `main`에서 실행되며 JavaScript를 사용하여 `STATE_processID` 환경 변수에 할당된 값을 표시합니다.

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## 환경 파일

워크플로를 실행하는 동안 실행기는 특정 작업을 수행하는 데 사용할 수 있는 임시 파일을 생성합니다. 파일의 경로는 환경 변수를 통해 노출됩니다. 파일에 코드를 작성할 때에는 명령의 적절한 처리를 보장하기 위해 UTF-8 인코딩을 사용해야 합니다. 동일한 파일에 여러 명령을 줄 바꿈으로 구분하여 작성할 수 있습니다.

다음 예제의 대부분의 명령은 셸 변수 이름과 같은 `$` 문자를 보간하려고 시도하는 에코 문자열에 큰따옴표를 사용합니다. 항상 따옴표 붙은 문자열에 리터럴 값을 사용하려면 대신 작은따옴표를 사용할 수 있습니다.

{% powershell %}

{% note %}

**참고:** PowerShell 버전 5.1 이하(`shell: powershell`)는 기본적으로 UTF-8을 사용하지 않으므로 UTF-8 인코딩을 지정해야 합니다. 예를 들면 다음과 같습니다.

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core 버전 6 이상(`shell: pwsh`)은 기본적으로 UTF-8을 사용합니다. 예를 들면 다음과 같습니다.

```yaml{:copy}
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" >> $env:GITHUB_PATH
```

{% endnote %}

{% endpowershell %}

## 환경 변수 설정

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- PowerShell 버전 6 이상 사용:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- PowerShell 버전 5.1 이하 사용:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

환경 변수를 정의하거나 업데이트하고 이를 `GITHUB_ENV` 환경 파일에 작성하여 워크플로 작업의 후속 단계에서 환경 변수를 사용할 수 있도록 할 수 있습니다. 환경 변수를 만들거나 업데이트하는 단계는 새 값에 액세스할 수 없지만 작업의 모든 후속 단계에는 액세스 권한이 있습니다. 환경 변수의 이름은 대/소문자를 구분하며 문장 부호를 포함할 수 있습니다. 자세한 내용은 “[환경 변수](/actions/learn-github-actions/environment-variables)”를 참조하세요.

### 예제

{% bash %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      echo "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" >> $env:GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      Write-Output "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endpowershell %}

### 다중 선 문자열

다중 선 문자열의 경우 다음 구문에 구분 기호를 사용할 수 있습니다.

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

{% warning %}

**경고:** 사용 중인 구분 기호가 임의로 생성되고 각 실행에 대해 고유해야 합니다. 자세한 내용은 “[스크립트 삽입의 위험에 대한 이해](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)”를 참조하세요.

{% endwarning %}

#### 예제

이 예제에서는 `EOF`를 구분 기호로 사용하고 `JSON_RESPONSE` 환경 변수를 `curl` 응답의 값으로 설정합니다.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.com >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

```yaml{:copy}
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      "JSON_RESPONSE<<EOF" >> $env:GITHUB_ENV
      (Invoke-WebRequest -Uri "https://example.com").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}
## 출력 매개 변수 설정

단계의 출력 매개 변수를 설정합니다. 나중에 출력 값을 검색하려면 단계를 정의해야 합니다 `id` .

{% bash %}

```bash{:copy}
echo "{name}={value}" >> $GITHUB_OUTPUT
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{name}=value" >> $env:GITHUB_OUTPUT
```

{% endpowershell %}

### 예제

{% bash %}

이 예제에서는 출력 매개 변수를 `SELECTED_COLOR` 설정하고 나중에 검색하는 방법을 보여 줍니다.

{% raw %}
```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: echo "SELECTED_COLOR=green" >> $GITHUB_OUTPUT
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %} 이 예제에서는 출력 매개 변수를 `SELECTED_COLOR` 설정하고 나중에 검색하는 방법을 보여 줍니다.

```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: |
            "SELECTED_COLOR=green" >> $env:GITHUB_OUTPUT
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %} {% endif %}

{% ifversion actions-job-summaries %}

## 작업 요약 추가

{% bash %}

```bash{:copy}
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"{markdown content}" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

워크플로 실행의 요약 페이지에 표시되도록 각 작업에 대해 몇 가지 사용자 지정 Markdown을 설정할 수 있습니다. 작업 요약을 사용하여 테스트 결과 요약과 같은 고유한 콘텐츠를 표시하고 그룹화할 수 있으므로 워크플로 실행 결과를 보는 사용자가 로그로 이동하여 실행과 관련된 중요한 정보(예: 실패)를 확인할 필요가 없습니다.

작업 요약은 [{% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)을 지원하며, 단계별 Markdown 콘텐츠를 `GITHUB_STEP_SUMMARY` 환경 파일에 추가할 수 있습니다. `GITHUB_STEP_SUMMARY`는 작업의 각 단계에 대해 고유합니다. `GITHUB_STEP_SUMMARY`가 참조하는 단계별 파일에 대한 자세한 내용은 "[환경 파일](#environment-files)"을 참조하세요.

작업이 완료되면 작업의 모든 단계에 대한 요약이 단일 작업 요약으로 그룹화되고 워크플로 실행 요약 페이지에 표시됩니다. 여러 작업이 요약을 생성하는 경우 작업 요약은 작업 완료 시간을 기준으로 정렬됩니다.

### 예제

{% bash %}

```bash{:copy}
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"### Hello world! :rocket:" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

![Markdown 요약 예제](/assets/images/actions-job-summary-simple-example.png)

### 여러 줄 Markdown 콘텐츠

여러 줄 Markdown 콘텐츠의 경우 `>>`를 사용하여 현재 단계에 대한 콘텐츠를 지속적으로 추가할 수 있습니다. 추가 작업마다 줄 바꿈 문자가 자동으로 추가됩니다.

#### 예제

{% bash %}

```yaml
- name: Generate list using Markdown
  run: |
    echo "This is the lead in sentence for the list" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY # this is a blank line
    echo "- Lets add a bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- Lets add a second bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- How about a third one?" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Generate list using Markdown
  run: |
    "This is the lead in sentence for the list" >> $env:GITHUB_STEP_SUMMARY
    "" >> $env:GITHUB_STEP_SUMMARY # this is a blank line
    "- Lets add a bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- Lets add a second bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- How about a third one?" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### 작업 요약 덮어쓰기

현재 단계의 콘텐츠를 모두 지우려면 `>`를 사용하여 이전에 추가한 콘텐츠를 덮어쓸 수 있습니다.

#### 예제

{% bash %}

```yaml
- name: Overwrite Markdown
  run: |
    echo "Adding some Markdown content" >> $GITHUB_STEP_SUMMARY
    echo "There was an error, we need to clear the previous Markdown with some new content." > $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Overwrite Markdown
  run: |
    "Adding some Markdown content" >> $env:GITHUB_STEP_SUMMARY
    "There was an error, we need to clear the previous Markdown with some new content." > $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### 작업 요약 제거

현재 단계에 대한 요약을 완전히 제거하려면 `GITHUB_STEP_SUMMARY`가 참조하는 파일을 삭제할 수 있습니다.

#### 예제

{% bash %}

```yaml
- name: Delete all summary content
  run: |
    echo "Adding Markdown content that we want to remove before the step ends" >> $GITHUB_STEP_SUMMARY
    rm $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Delete all summary content
  run: |
    "Adding Markdown content that we want to remove before the step ends" >> $env:GITHUB_STEP_SUMMARY
    rm $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

단계가 완료되면 작업 요약이 업로드되고 후속 단계에서 이전에 업로드한 Markdown 콘텐츠를 수정할 수 없습니다. 요약에서는 실수로 추가되었을 수 있는 모든 비밀이 자동으로 마스킹됩니다. 작업 요약에 삭제해야 하는 중요한 정보가 포함된 경우 전체 워크플로 실행을 삭제하여 모든 작업 요약을 제거할 수 있습니다. 자세한 내용은 "[워크플로 실행 삭제](/actions/managing-workflow-runs/deleting-a-workflow-run)"를 참조하세요.

### 단계 격리 및 한도

작업 요약은 단계 간에 격리되며 각 단계는 최대 1MiB 크기로 제한됩니다. 단일 단계의 잠재적으로 잘못된 형식의 Markdown이 후속 단계에 대한 Markdown 렌더링을 중단시킬 수 없도록 단계 간에 격리가 적용됩니다. 한 단계에 1MiB 이상의 콘텐츠가 추가되면 해당 단계의 업로드가 실패하고 오류 주석이 생성됩니다. 작업 요약 업로드 오류는 단계 또는 작업의 전체 상태에 영향을 미치지 않습니다. 작업별로 단계의 작업 요약이 최대 20개 표시됩니다.

{% endif %}

## 시스템 경로 추가

디렉터리를 시스템 `PATH` 변수 앞에 추가하고 현재 작업의 모든 후속 작업에 사용할 수 있도록 자동으로 설정합니다. 현재 실행 중인 작업은 업데이트된 경로 변수에 액세스할 수 없습니다. 작업에 대해 현재 정의된 경로를 보려면 단계 또는 작업에서 `echo "$PATH"`를 사용할 수 있습니다.

{% bash %}

```bash{:copy}
echo "{path}" >> $GITHUB_PATH
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{path}" >> $env:GITHUB_PATH
```

{% endpowershell %}

### 예제

{% bash %}

이 예제에서는 사용자 `$HOME/.local/bin` 디렉터리를 `PATH`에 추가하는 방법을 보여 줍니다.

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

이 예제에서는 사용자 `$env:HOMEPATH/.local/bin` 디렉터리를 `PATH`에 추가하는 방법을 보여 줍니다.

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
