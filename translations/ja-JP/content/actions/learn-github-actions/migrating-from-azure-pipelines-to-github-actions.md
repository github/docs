---
title: Azure PipelinesからGitHub Actionsへの移行
intro: '{% data variables.product.prodname_actions %}とAzure Pipelinesは、いくつかの点で設定が似ており、そのため{% data variables.product.prodname_actions %}への移行は比較的単純です。'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-azure-pipelines-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

Azure Pipelinesと{% data variables.product.prodname_actions %}は、どちらも自動的にコードのビルド、テスト、公開、リリース、デプロイを行うワークフローを作成できます。 Azure Pipelinesと{% data variables.product.prodname_actions %}は、ワークフローの設定において似ているところがあります。

- ワークフローの設定ファイルはYAMLで書かれ、コードのリポジトリに保存されます。
- ワークフローには1つ以上のジョブが含まれます。
- ジョブには1つ以上のステップもしくは個別のコマンドが含まれます。
- ステップもしくはタスクは、再利用とコミュニティとの共有が可能です。

詳しい情報については、「[{% data variables.product.prodname_actions %}の中核的概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)」を参照してください。

### 主要な差異

Azure Pipelinesから移行する際には、以下の差異を考慮してください。

- Azure Pipelineはレガシーの_クラシックエディタ_をサポートしています。これはCIの設定を、YAMLファイルでパイプラインの定義を作成する代わりに、GUIのエディタで定義できるようにするものです。 {% data variables.product.prodname_actions %}はワークフローの定義にYAMLファイルを使い、グラフィカルなエディタはサポートしていません。
- Azure Pipelinesでは、ジョブの定義中の一部の構造を省略できます。 たとえば、ジョブが1つだけしかないなら、ジョブを定義する必要はなく、ステップだけを定義すれば済みます。 {% data variables.product.prodname_actions %}は明示的な設定が必要であり、YAMLの構造は省略できません。
- Azure PipelinesはYAMLファイル中で定義される_ステージ_をサポートしています。ステージは、デプロイメントのワークフローの作成に利用できます。 {% data variables.product.prodname_actions %}では、ステージは個別のYAMLワークフローファイルに分割しなければなりません。
- オンプレミスのAzure Pipelinesビルドエージェントは、機能で選択できます。 {% data variables.product.prodname_actions %}のセルフホストランナーは、ラベルで選択できます。

### ジョブとステップの移行

Azure Pipelinesのジョブとステップは、{% data variables.product.prodname_actions %}のジョブとステップによく似ています。 どちらのシステムでも、ジョブは以下の特徴を持ちます。

* ジョブは、順番に実行される一連のステップを持ちます。
* ジョブは、個別の仮想マシンまたは個別のコンテナで実行されます。
* ジョブは、デフォルトでは並列に実行されますが、順次実行するように設定することもできます。

### スクリプトのステップの移行

スクリプトやシェルのコマンドを、ワークフロー中のステップとして実行できます。 Azure Pipelinesでは、スクリプトのステップは`script`キー、あるいは`bash`、`powershell`、`pwsh`といったキーで指定できます。 スクリプトはまた、[Bashタスク](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops)あるいは[PowerShellタスク](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops)への入力としても指定できます。

{% data variables.product.prodname_actions %}では、すべてのスクリプトは`run`キーを使って指定されます。 特定のシェルを選択するには、スクリプトを提供する際に`shell`キーを指定します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

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

### スクリプトのエラー処理の差異

Azure Pipelinesでは、`stderr`への出力があればスクリプトがエラーとなるように設定できます。 {% data variables.product.prodname_actions %}はこの設定をサポートしていません。

{% data variables.product.prodname_actions %}は、可能な場合にはシェルを"fail fast"に設定します。これは、スクリプト中のコマンドの1つがエラーコードで終了した場合に即座にスクリプトを停止させるものです。 これに対し、Azure Pipelinesではエラーの際に即座に終了させるためには、明示的に設定しなければなりません。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)」を参照してください。

### Windows上でのデフォルトシェルの差異

Azure Pipelinesでは、Windowsプラットフォーム上のスクリプトのためのデフォルトシェルはコマンドシェル(_cmd.exe_)です。 {% data variables.product.prodname_actions %}では、Windowsプラットフォーム上のスクリプトのためのデフォルトシェルはPowerShellです。 PowerShellは、組み込みコマンド、変数の展開、フロー制御で多少の差異があります。

シンプルなコマンドを実行するなら、コマンドシェルのスクリプトを変更なしにPowerShellで実行できるかもしれません。 しかしほとんどの場合は、PowerShellの構文でスクリプトをアップデートするか、{% data variables.product.prodname_actions %}に対してスクリプトをPowerShellではなくコマンドシェルで実行するように指定することになります。 それには、`shell`を`cmd`と指定します。

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

詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)」を参照してください。

### 条件と式の構文の移行

Azure Pipelinesと{% data variables.product.prodname_actions %}は、どちらもステップを条件付きで実行できます。 Azure Pipelinesでは、条件式は`condition`キーを使って指定します。 {% data variables.product.prodname_actions %}では、条件式は`if`キーを使って指定します。

Azure Pipelinesは、ステップを条件付きで実行するために、式の中で関数を使います。 それに対し、{% data variables.product.prodname_actions %}はinfix表記を使います。 たとえば、Azure Pipelinesにおける`eq`関数は、{% data variables.product.prodname_actions %}では`==`演算子に置き換えなければなりません。

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

詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

### ジョブ間の依存関係

Azure Pipelinesと{% data variables.product.prodname_actions %}は、どちらもジョブの依存関係を設定できます。 どちらのシステムでも、デフォルトではジョブは並行に実行されますが、ジョブの依存関係を明示的に指定できます。 Azure Pipelinesでは、これは`dependsOn`キーで行います。 {% data variables.product.prodname_actions %}では、`needs`キーを使って行います。

以下は、それぞれのシステムにおける構文の例です。 このワークフローは、`initial`という名前の最初のジョブを開始し、そのジョブが終わると`fanout1`と`fanout2`という名前の2つのジョブが実行されます。 最後に、それらのジョブが完了すると、`fanin`というジョブが実行されます。

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
</tr>
</table>

詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)」を参照してください。

### タスクのアクションへの移行

Azure Pipelinesは_タスク_を使います。これは、複数のワークフローで再利用できるアプリケーションのコンポーネントです。 {% data variables.product.prodname_actions %}は_アクション_を使います。これは、タスクの実行とワークフローのカスタマイズに利用できます。 どちらのシステムでも、実行するタスクやアクションの名前を、必要な入力のキー/値のペアとともに指定できます。

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
{% raw %}
```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/setup-python@v2
      with:
        python-version: '3.7'
        architecture: 'x64'
    - run: python script.py
```
{% endraw %}
</td>
</tr>
</table>

ワークフロー中で利用できるアクションは、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)で見つけることも、独自のactionsを作成することもできます。 詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

