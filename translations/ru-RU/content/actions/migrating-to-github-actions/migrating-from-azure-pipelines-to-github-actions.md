---
title: Миграция с Azure Pipelines на GitHub Actions
intro: '{% data variables.product.prodname_actions %} и Azure Pipelines имеют несколько сходств в конфигурации, что делает миграцию на {% data variables.product.prodname_actions %} относительно простой.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121307'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

Azure Pipelines и {% data variables.product.prodname_actions %} позволяют создавать рабочие процессы, которые автоматически выполняют сборку, тестирование, публикацию, выпуск и развертывание кода. Azure Pipelines и {% data variables.product.prodname_actions %} используют некоторые сходства в конфигурации рабочего процесса.

- Файлы конфигурации рабочего процесса записываются в YAML и хранятся в репозитории кода.
- В рабочем процессе может быть одно или несколько заданий.
- Задания включают один или несколько шагов или отдельных команд.
- Шаги или задачи можно повторно использовать и предоставлять сообществу.

Дополнительные сведения см. в разделе [Основные понятия {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions).

## Основные различия

При миграции с Azure Pipelines необходимо учитывать следующие различия.

- Azure Pipelines поддерживает устаревший _классический редактор_, который позволяет определить конфигурацию CI в редакторе графического пользовательского интерфейса вместо создания определения конвейера в файле YAML. {% data variables.product.prodname_actions %} использует файлы YAML для определения рабочих процессов и не поддерживает графический редактор.
- Azure Pipelines позволяет пропускать некоторые структуры в определениях заданий. Например, если у вас есть только одно задание, вам не нужно определять само задание, достаточно определить его шаги. {% data variables.product.prodname_actions %} требует явной настройки, и в структуре YAML нельзя делать пропуски.
- Azure Pipelines поддерживает _этапы_, определенные в файле YAML, которые можно использовать для создания рабочих процессов развертывания. {% data variables.product.prodname_actions %} требует разделять этапы на отдельные файлы рабочих процессов YAML.
- Локальные агенты сборки Azure Pipelines можно выбирать с определенными возможностями. Локальные средства выполнения {% data variables.product.prodname_actions %} можно выбирать с определенными метками.

## Миграция заданий и шагов

Задания и шаги в Azure Pipelines очень похожи на задания и шаги в {% data variables.product.prodname_actions %}. В обеих системах задания имеют следующие характеристики.

* Задания содержат ряд шагов, которые выполняются последовательно.
* Задания выполняются на отдельных виртуальных машинах или в отдельных контейнерах.
* По умолчанию задания выполняются параллельно, но можно настроить их последовательное выполнение.

## Миграция шагов скрипта

Скрипт или команду оболочки можно выполнять как шаг рабочего процесса. В Azure Pipelines шаги скрипта можно указать с помощью ключа `script` или с использованием ключей `bash`, `powershell` или `pwsh`. Скрипты также можно указать в качестве входных данных [задачи Bash](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops) или [задачи PowerShell](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops).

В {% data variables.product.prodname_actions %} все скрипты указываются с помощью ключа `run`. Чтобы выбрать конкретную оболочку, можно указать ключ `shell` при предоставлении скрипта. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

Ниже приведен пример синтаксиса для каждой системы.

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

## Различия в обработке ошибок скрипта

В Azure Pipelines скрипты можно настроить так, чтобы они выдавали ошибку, если какие-либо выходные данные отправляются в `stderr`. {% data variables.product.prodname_actions %} не поддерживает эту конфигурацию.

{% data variables.product.prodname_actions %} настраивает оболочки для "завершения работы при первой ошибке", когда это возможно, поэтому если одна из команд в скрипте завершает работу с кодом ошибки, это приводит к немедленной остановке скрипта. В отличие от этого, в Azure Pipelines необходима явная настройка для немедленного выхода при ошибке. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference).

## Различия в оболочке по умолчанию в Windows

В Azure Pipelines оболочкой по умолчанию для скриптов на платформах Windows платформах является командная оболочка (_cmd.exe_). В {% data variables.product.prodname_actions %}оболочкой по умолчанию для скриптов на платформах Windows является PowerShell. PowerShell имеет некоторые различия во встроенных командах, расширении переменных и управлении потоком.

Если вы выполняете простую команду, то можете запустить скрипт командной оболочки в PowerShell без каких-либо изменений. Но в большинстве случаев вам потребуется обновить скрипт с учетом синтаксиса PowerShell или указать {% data variables.product.prodname_actions %}, что скрипт следует запускать с помощью командной оболочки вместо PowerShell. Это можно сделать, задав для `shell` значение `cmd`.

Ниже приведен пример синтаксиса для каждой системы.

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

Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell).

## Миграция условных выражений и синтаксис выражений

Azure Pipelines и {% data variables.product.prodname_actions %} могут выполнять шаги условно. В Azure Pipelines условные выражения задаются с помощью ключа `condition`. В {% data variables.product.prodname_actions %}условные выражения задаются с помощью ключа `if`.

Azure Pipelines использует функции в выражениях для условного выполнения шагов. В отличие от этого, {% data variables.product.prodname_actions %} использует нотацию infix. Например, необходимо заменить функцию `eq` в Azure Pipelines оператором `==` в {% data variables.product.prodname_actions %}.

Ниже приведен пример синтаксиса для каждой системы.

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

Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).

## Зависимости между заданиями

И Azure Pipelines, и {% data variables.product.prodname_actions %} позволяют задавать зависимости для задания. В обеих системах задания по умолчанию выполняются параллельно, но зависимости заданий можно указывать явным образом. В Azure Pipelines это делается с помощью ключа `dependsOn`. В {% data variables.product.prodname_actions %}это делается с помощью ключа `needs`.

Ниже приведен пример синтаксиса для каждой системы. Рабочие процессы запускают первое задание с именем `initial`, и после завершения этого задания будут выполняться два задания с именами `fanout1` и `fanout2`. И наконец, после завершения этих заданий, будет выполняться задание `fanin`.

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

Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds).

## Миграция задач в действия

Azure Pipelines использует _задачи_, являющиеся компонентами приложения, которые можно повторно использовать в нескольких рабочих процессах. {% data variables.product.prodname_actions %} использует _действия_, которые можно использовать для выполнения задач и настройки рабочего процесса. В обеих системах можно указать имя задачи или действия для выполнения, а также все необходимые входные данные в виде пар "ключ-значение".

Ниже приведен пример синтаксиса для каждой системы.

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

Вы можете найти действия для использования в рабочих процессах в [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) или создать свои собственные действия. Дополнительные сведения см. в статье "[Создание действий](/actions/creating-actions)".
