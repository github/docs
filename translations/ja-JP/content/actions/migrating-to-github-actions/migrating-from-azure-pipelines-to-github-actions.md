---
title: Azure PipelinesからGitHub Actionsへの移行
intro: '{% data variables.product.prodname_actions %}とAzure Pipelinesは、いくつかの点で設定が似ており、そのため{% data variables.product.prodname_actions %}への移行は比較的単純です。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121309'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

Azure Pipelinesと{% data variables.product.prodname_actions %}は、どちらも自動的にコードのビルド、テスト、公開、リリース、デプロイを行うワークフローを作成できます。 Azure Pipelinesと{% data variables.product.prodname_actions %}は、ワークフローの設定において似ているところがあります。

- ワークフローの設定ファイルはYAMLで書かれ、コードのリポジトリに保存されます。
- ワークフローには1つ以上のジョブが含まれます。
- ジョブには1つ以上のステップもしくは個別のコマンドが含まれます。
- ステップもしくはタスクは、再利用とコミュニティとの共有が可能です。

詳しくは、[{% data variables.product.prodname_actions %} のコア概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)に関するページをご覧ください。

## 主要な相違点

Azure Pipelinesから移行する際には、以下の差異を考慮してください。

- Azure Pipeline はレガシーの _クラシック エディター_ をサポートしています。これは CI の設定を、YAML ファイルでパイプラインの定義を作成する代わりに、GUI のエディタで定義できるようにするものです。 {% data variables.product.prodname_actions %}はワークフローの定義にYAMLファイルを使い、グラフィカルなエディタはサポートしていません。
- Azure Pipelinesでは、ジョブの定義中の一部の構造を省略できます。 たとえば、ジョブが1つだけしかないなら、ジョブを定義する必要はなく、ステップだけを定義すれば済みます。 {% data variables.product.prodname_actions %}は明示的な設定が必要であり、YAMLの構造は省略できません。
- Azure Pipelines は YAML ファイル中で定義される _ステージ_ をサポートしています。ステージは、デプロイのワークフローの作成に利用できます。 {% data variables.product.prodname_actions %}では、ステージは個別のYAMLワークフローファイルに分割しなければなりません。
- オンプレミスのAzure Pipelinesビルドエージェントは、機能で選択できます。 {% data variables.product.prodname_actions %}のセルフホストランナーは、ラベルで選択できます。

## ジョブとステップの移行

Azure Pipelinesのジョブとステップは、{% data variables.product.prodname_actions %}のジョブとステップによく似ています。 どちらのシステムでも、ジョブは以下の特徴を持ちます。

* ジョブは、順番に実行される一連のステップを持ちます。
* ジョブは、個別の仮想マシンまたは個別のコンテナで実行されます。
* ジョブは、デフォルトでは並列に実行されますが、順次実行するように設定することもできます。

## スクリプトのステップの移行

スクリプトやシェルのコマンドを、ワークフロー中のステップとして実行できます。 Azure Pipelines で、スクリプトの手順を `script` キーを使用して指定するか、`bash` キーか、`powershell` キーか、`pwsh` キーで指定できます。 スクリプトは [Bash タスク](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops)または [PowerShell タスク](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops)への入力として指定することもできます。

{% data variables.product.prodname_actions %} では、すべてのスクリプトは `run` キーを使って指定されます。 特定のシェルを選択するには、スクリプトを提供する際に `shell` キーを指定します。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)に関するページを参照してください。

以下が、それぞれのシステムの構文の例です。

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

## スクリプトのエラー処理の差異

Azure Pipelines では、`stderr` への出力があればスクリプトがエラーとなるように設定できます。 {% data variables.product.prodname_actions %}はこの設定をサポートしていません。

{% data variables.product.prodname_actions %}は、可能な場合にはシェルを"fail fast"に設定します。これは、スクリプト中のコマンドの1つがエラーコードで終了した場合に即座にスクリプトを停止させるものです。 これに対し、Azure Pipelinesではエラーの際に即座に終了させるためには、明示的に設定しなければなりません。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)に関するページを参照してください。

## Windows上でのデフォルトシェルの差異

Azure Pipelines では、Windows プラットフォーム上のスクリプトのための既定シェルはコマンドシェル (_cmd.exe_) です。 {% data variables.product.prodname_actions %}では、Windowsプラットフォーム上のスクリプトのためのデフォルトシェルはPowerShellです。 PowerShellは、組み込みコマンド、変数の展開、フロー制御で多少の差異があります。

シンプルなコマンドを実行するなら、コマンドシェルのスクリプトを変更なしにPowerShellで実行できるかもしれません。 しかしほとんどの場合は、PowerShellの構文でスクリプトをアップデートするか、{% data variables.product.prodname_actions %}に対してスクリプトをPowerShellではなくコマンドシェルで実行するように指定することになります。 `shell` を `cmd` として指定することでこれを実行できます。

以下が、それぞれのシステムの構文の例です。

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

詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)に関するページを参照してください。

## 条件と式の構文の移行

Azure Pipelinesと{% data variables.product.prodname_actions %}は、どちらもステップを条件付きで実行できます。 Azure Pipelines では、条件式は `condition` キーを使って指定します。 {% data variables.product.prodname_actions %}では、条件式は `if` キーを使って指定します。

Azure Pipelinesは、ステップを条件付きで実行するために、式の中で関数を使います。 それに対し、{% data variables.product.prodname_actions %}はinfix表記を使います。 たとえば、Azure Pipelines における `eq` 関数は、{% data variables.product.prodname_actions %} では `==` 演算子に置き換えなければなりません。

以下が、それぞれのシステムの構文の例です。

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

詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

## ジョブ間の依存関係

Azure Pipelinesと{% data variables.product.prodname_actions %}は、どちらもジョブの依存関係を設定できます。 どちらのシステムでも、デフォルトではジョブは並行に実行されますが、ジョブの依存関係を明示的に指定できます。 Azure Pipelines では、これは `dependsOn` キーで行われます。 {% data variables.product.prodname_actions %} では、`needs` キーを使って行います。

以下は、それぞれのシステムにおける構文の例です。 ワークフローは `initial` という名前の最初のジョブを開始し、そのジョブが完了すると `fanout1` と `fanout2` という名前の 2 つのジョブが実行されます。 最後に、これらのジョブが完了すると、ジョブ `fanin` が実行されます。

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

詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)に関するページを参照してください。

## タスクのアクションへの移行

Azure Pipelines は _タスク_ を使います。これは、複数のワークフローで再利用できるアプリケーションのコンポーネントです。 {% data variables.product.prodname_actions %} は _アクション_ を使います。これは、タスクの実行とワークフローのカスタマイズに利用できます。 どちらのシステムでも、実行するタスクやアクションの名前を、必要な入力のキー/値のペアとともに指定できます。

以下が、それぞれのシステムの構文の例です。

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

ワークフローで使用できるアクションは [、{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) にあります。または、独自のアクションを作成することもできます。 詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。
