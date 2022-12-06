---
title: Azure Pipelines에서 GitHub Actions로 마이그레이션
intro: '{% data variables.product.prodname_actions %} 및 Azure Pipelines는 여러 구성 유사성을 공유하므로 {% data variables.product.prodname_actions %}로 마이그레이션하는 것이 비교적 간단합니다.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-azure-pipelines-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Azure Pipelines
  - Migration
  - CI
  - CD
shortTitle: Migrate from Azure Pipelines
ms.openlocfilehash: 5890afb4c0f0e8eae6b5981a39e68f272bff7440
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121308'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

Azure Pipelines 및 {% data variables.product.prodname_actions %}를 사용하면 코드를 자동으로 빌드, 테스트, 게시, 릴리스 및 배포하는 워크플로를 만들 수 있습니다. Azure Pipelines 및 {% data variables.product.prodname_actions %}는 워크플로 구성에서 몇 가지 유사점을 공유합니다.

- 워크플로 구성 파일은 YAML로 작성되며 코드의 리포지토리에 저장됩니다.
- 워크플로에는 하나 이상의 작업이 포함됩니다.
- 작업에는 하나 이상의 단계 또는 개별 명령이 포함됩니다.
- 단계 또는 작업을 다시 사용하고 커뮤니티와 공유할 수 있습니다.

자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 핵심 개념](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”을 참조하세요.

## 주요 차이점

Azure Pipelines에서 마이그레이션할 때는 다음과 같은 차이점을 고려해야 합니다.

- Azure Pipelines는 YAML 파일에 파이프라인 정의를 만드는 대신 GUI 편집기에서 CI 구성을 정의할 수 있는 레거시 클래식 편집기를 지원합니다. {% data variables.product.prodname_actions %}는 YAML 파일을 사용하여 워크플로를 정의하며 그래픽 편집기를 지원하지 않습니다.
- Azure Pipelines를 사용하면 작업 정의에서 일부 구조를 생략할 수 있습니다. 예를 들어 단일 작업만 있는 경우 작업을 정의할 필요가 없으며 단계를 정의하기만 하면 됩니다. {% data variables.product.prodname_actions %}에는 명시적 구성이 필요하며 YAML 구조를 생략할 수 없습니다.
- Azure Pipelines는 배포 워크플로를 만드는 데 사용할 수 있는 YAML 파일에 정의된 스테이지를 지원합니다. {% data variables.product.prodname_actions %}에서는 스테이지를 별도의 YAML 워크플로 파일로 구분해야 합니다.
- 기능으로 온-프레미스 Azure Pipelines 빌드 에이전트를 선택할 수 있습니다. {% data variables.product.prodname_actions %} 자체 호스팅 실행기를 레이블로 선택할 수 있습니다.

## 작업 및 단계 마이그레이션

Azure Pipelines의 작업 및 단계는 {% data variables.product.prodname_actions %}의 작업 및 단계와 매우 유사합니다. 두 시스템 모두에서 작업은 다음과 같은 특징을 갖습니다.

* 순차적으로 실행되는 일련의 단계를 포함합니다.
* 작업은 별도의 가상 머신 또는 별도의 컨테이너에서 실행됩니다.
* 기본적으로 동시에 실행되지만 순차적으로 실행되도록 구성할 수 있습니다.

## 스크립트 단계 마이그레이션

워크플로의 단계로 스크립트 또는 셸 명령을 실행할 수 있습니다. Azure Pipelines에서 `script` 키를 사용하여, 혹은 `bash`, `powershell` 또는 `pwsh` 키와 함께 스크립트 단계를 지정할 수 있습니다. 스크립트는 [Bash 작업](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops) 또는 [PowerShell 작업](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops)에 대한 입력으로 지정할 수도 있습니다.

{% data variables.product.prodname_actions %}에서 모든 스크립트는 `run` 키를 사용하여 지정됩니다. 특정 셸을 선택하려면 스크립트를 제공할 때 `shell` 키를 지정합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: scripts
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in the default shell"
      - bash: echo "This step runs in bash"
      - pwsh: Write-Host "This step runs in PowerShell Core"
      - task: PowerShell@2
        inputs:
          script: Write-Host "This step runs in PowerShell"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  scripts:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in the default shell"
      - run: echo "This step runs in bash"
        shell: bash
      - run: Write-Host "This step runs in PowerShell Core"
        shell: pwsh
      - run: Write-Host "This step runs in PowerShell"
        shell: powershell
```
{% endraw %}
</td>
</tr>
</table>

## 스크립트 오류 처리의 차이점

Azure Pipelines에서 출력이 `stderr`로 전달된 경우 스크립트를 오류로 구성할 수 있습니다. {% data variables.product.prodname_actions %}는 이 구성을 지원하지 않습니다.

{% data variables.product.prodname_actions %}는 가능하면 ‘빠르게 실패’하도록 셸을 구성합니다. 이렇게 하면 스크립트의 명령 중 하나가 오류 코드와 함께 종료되면 즉시 스크립트가 중지됩니다. 반면, Azure Pipelines에서 오류 발생 시 즉시 종료하려면 명시적 구성이 필요합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)”을 참조하세요.

## Windows 기본 셸의 차이점

Azure Pipelines에서 Windows 플랫폼의 스크립트에 대한 기본 셸은 명령 셸(_cmd.exe_)입니다. {% data variables.product.prodname_actions %}에서 Windows 플랫폼의 스크립트에 대한 기본 셸은 PowerShell입니다. PowerShell에는 기본 제공 명령, 변수 확장 및 흐름 제어에 몇 가지 차이점이 있습니다.

간단한 명령을 실행하는 경우 PowerShell에서 명령 셸 스크립트를 변경하지 않고 실행할 수 있습니다. 그러나 대부분의 경우 PowerShell 구문을 사용하여 스크립트를 업데이트하거나 PowerShell 대신 명령 셸을 사용하여 스크립트를 실행하도록 {% data variables.product.prodname_actions %}에 지시해야 합니다. `shell`을 `cmd`로 지정하여 이 작업을 수행할 수 있습니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_command
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in CMD on Windows by default"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_command:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in PowerShell on Windows by default"
      - run: echo "This step runs in CMD on Windows explicitly"
        shell: cmd
```
{% endraw %}
</td>
</tr>
</table>

자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)”을 참조하세요.

## 조건 및 식 구문 마이그레이션

Azure Pipelines 및 {% data variables.product.prodname_actions %}는 둘 다 조건부로 단계를 실행할 수 있습니다. Azure Pipelines 조건식은 `condition` 키를 사용하여 지정됩니다. {% data variables.product.prodname_actions %}에서 조건식은 `if` 키를 사용하여 지정됩니다.

Azure Pipelines는 식 내의 함수를 사용하여 조건부로 단계를 실행합니다. 반면에 {% data variables.product.prodname_actions %}는 접두사 표기법을 사용합니다. 예를 들어 Azure Pipelines의 `eq` 함수를 {% data variables.product.prodname_actions %}의 `==` 연산자로 바꿔야 합니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: conditional
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This step runs with str equals 'ABC' and num equals 123"
        condition: and(eq(variables.str, 'ABC'), eq(variables.num, 123))
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: ${{ env.str == 'ABC' && env.num == 123 }}
```
{% endraw %}
</td>
</tr>
</table>

자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions)”을 참조하세요.

## 작업 간의 종속성

Azure Pipelines와 {% data variables.product.prodname_actions %}를 사용하면 작업에 대한 종속성을 설정할 수 있습니다. 두 시스템 모두에서 작업은 기본적으로 병렬로 실행되지만 작업 종속성을 명시적으로 지정할 수 있습니다. Azure Pipelines에서 이 작업은 `dependsOn` 키로 수행됩니다. {% data variables.product.prodname_actions %}에서 이 작업은 `needs` 키로 수행됩니다.

다음은 각 시스템에 대한 구문의 예입니다. 워크플로는 이름이 `initial`인 첫 번째 작업을 시작하고 해당 작업이 완료되면 이름이 `fanout1` 및 `fanout2`인 두 개의 작업이 실행됩니다. 마지막으로 해당 작업이 완료되면 `fanin` 작업이 실행됩니다.

<table class="d-block">
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: initial
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This job will be run first."
  - job: fanout1
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout2."
  - job: fanout2
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout1."
  - job: fanin:
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: [fanout1, fanout2]
    steps:
      - script: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  initial:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."
  fanout1:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout2."
  fanout2:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout1."
  fanin:
    runs-on: ubuntu-latest
    needs: [fanout1, fanout2]
    steps:
      - run: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
</tr>
</table>

자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”을 참조하세요.

## 작업(action)으로 작업(task) 마이그레이션

Azure Pipelines는 여러 워크플로에서 다시 사용할 수 있는 애플리케이션 구성 요소인 작업(task)을 사용합니다. {% data variables.product.prodname_actions %}는 작업(task)을 수행하고 워크플로를 사용자 지정하는 데 사용할 수 있는 작업(action)을 사용합니다. 두 시스템 모두에서 실행할 작업(task) 또는 작업(action)의 이름과 필요한 입력을 키/값 쌍으로 지정할 수 있습니다.

다음은 각 시스템에 대한 구문의 예입니다.

<table>
<tr>
<th>
Azure Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_python
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - task: UsePythonVersion@0
        inputs:
          versionSpec: '3.7'
          architecture: 'x64'
      - script: python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

워크플로에서 사용할 수 있는 작업을 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)에서 찾거나 사용자 고유의 작업을 만들 수 있습니다. 자세한 내용은 “[작업 만들기](/actions/creating-actions)”를 참조하세요.
