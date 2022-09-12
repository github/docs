---
title: 从 Azure Pelines 迁移到 GitHub Actions
intro: '{% data variables.product.prodname_actions %} 和 Azure Pipelines 具有一些相似的配置，这使得迁移到 {% data variables.product.prodname_actions %} 很简单。'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145100219'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

Azure Pipelines 和 {% data variables.product.prodname_actions %} 都允许您创建能自动构建、测试、发布、发行和部署代码的工作流程。 Azure Pelines 和 {% data variables.product.prodname_actions %} 的工作流程配置有一些相似之处：

- 工作流程配置文件以 YAML 编写并存储在代码仓库中。
- 工作流程包括一项或多项作业。
- 作业包括一个或多个步骤或单个命令。
- 步骤或任务可以重复使用并与社区共享。

有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的核心概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)”。

## 主要差异

从 Azure Pipelines 迁移时，考虑以下差异：

- Azure Pipelines 支持旧版经典编辑器，这样你便可以在 GUI 编辑器中定义 CI 配置，而不是在 YAML 文件中创建管道定义。 {% data variables.product.prodname_actions %} 使用 YAML 文件来定义工作流程，不支持图形编辑器。
- Azure Pelines 允许您在作业定义中省略一些结构。 例如，如果您只有一个作业，则无需定义作业，只需要定义其步骤。 {% data variables.product.prodname_actions %} 需要明确的配置，且不能省略 YAML 结构。
- Azure Pipelines 支持 YAML 文件中定义的阶段，可用于创建部署工作流。 {% data variables.product.prodname_actions %} 要求您将阶段分成单独的 YAML 工作流程文件。
- 可以使用功能选择本地 Azure Pipelines 构建代理。 通过标签可以选择 {% data variables.product.prodname_actions %} 自托管的运行器。

## 迁移作业和步骤

Azure Pelines 中的作业和步骤非常类似于 {% data variables.product.prodname_actions %} 中的作业和步骤。 在这两个系统中，作业具有以下特征：

* 作业包含一系列按顺序运行的步骤。
* 作业在单独的虚拟机或单独的容器中运行。
* 默认情况下作业并行运行，但可以配置为按顺序运行。

## 迁移脚本步骤

可以将脚本或 shell 命令作为工作流程中的步骤运行。 在 Azure Pipelines 中，可以使用 `script` 键或 `bash`、`powershell` 或 `pwsh` 键指定脚本步骤。 也可以将脚本指定为 [Bash 任务](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops)或 [PowerShell 任务](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops)的输入。

在 {% data variables.product.prodname_actions %} 中，所有脚本都使用 `run` 键指定。 若要选择特定的 shell，可以在提供脚本时指定 `shell` 键。 有关详细信息，请参阅 [{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)。

下面是每个系统的语法示例：

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

## 脚本错误处理中的差异

在 Azure Pipelines 中，可将脚本配置为“在有任何输出发送到 `stderr` 时出错”。 {% data variables.product.prodname_actions %} 不支持此配置。

{% data variables.product.prodname_actions %} 尽可能将 shell 配置为“快速失败”，如果脚本中的一个命令退出并有错误代码，则会立即停止脚本。 相反，Azure Pipelines 需要明确配置为在出错时立即退出。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)”。

## Windows 上默认 shell 的差异

在 Azure Pipelines 中，Windows 平台上脚本的默认 shell 是命令 shell (cmd.exe)。 在 {% data variables.product.prodname_actions %} 中，Windows 平台上脚本的默认 shell 是 PowerShell 。 PowerShell 在内置命令、变量扩展和流控制方面存在若干差异。

如果您运行的是简单的命令，则可以在 PowerShell 中运行命令 shell 脚本，而无需进行任何更改。 但在大多数情况下，您需要使用 PowerShell 语法更新脚本，或者指示 {% data variables.product.prodname_actions %} 使用命令 shell 而不是 PowerShell 来运行脚本。 为此，可以将 `shell` 指定为 `cmd`。

下面是每个系统的语法示例：

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

有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)”。

## 迁移条件和表达式语法

Azure Pipelines 和 {% data variables.product.prodname_actions %} 可以有条件地运行步骤。 在 Azure Pipelines 中，条件表达式使用 `condition` 键来指定。 在 {% data variables.product.prodname_actions %} 中，条件表达式使用 `if` 键来指定。

Azure Pelines 使用表达式中的函数来有条件地执行步骤。 相反，{% data variables.product.prodname_actions %} 使用 infix 表示法。 例如，必须将 Azure Pipelines 中的 `eq` 函数替换为 {% data variables.product.prodname_actions %} 中的 `==` 运算符。

下面是每个系统的语法示例：

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

有关详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

## 作业之间的依赖关系

Azure Pipelines 和 {% data variables.product.prodname_actions %} 允许您为作业设置依赖项。 在这两个系统中，默认情况下作业并行运行，但可以明确指定作业依赖项。 在 Azure Pipelines 中，这通过 `dependsOn` 键来完成。 在 {% data variables.product.prodname_actions %} 中，这通过 `needs` 键来完成。

下面是每个系统的语法示例： 工作流启动第一个名为 `initial` 的作业，当该作业完成时，两个分别名为 `fanout1` 和 `fanout2` 的作业将会运行。 最后，当这些作业完成后，作业 `fanin` 将会运行。

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

有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

## 将任务迁移到操作

Azure Pipelines 使用“任务”，这是可在多个工作流中重复使用的应用程序组件。 {% data variables.product.prodname_actions %} 使用“操作”，这可用于执行任务和自定义工作流。 在这两个系统中，您可以指定要运行的任务或操作的名称，以及任何必需的输入作为键/值对。

下面是每个系统的语法示例：

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

你可以在 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 中找到可用于工作流的操作，也可以创建自己的操作。 有关详细信息，请参阅“[创建操作](/actions/creating-actions)”。
