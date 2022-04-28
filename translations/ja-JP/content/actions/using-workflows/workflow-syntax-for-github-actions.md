---
title: GitHub Actionsのワークフロー構文
shortTitle: ワークフロー構文
intro: ワークフローは、1つ以上のジョブからなる設定可能な自動化プロセスです。 ワークフローの設定を定義するには、YAMLファイルを作成しなければなりません。
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフロー用のYAML構文について

ワークフローファイルはYAML構文を使用し、ファイル拡張子が`.yml`または`.yaml`である必要があります。 {% data reusables.actions.learn-more-about-yaml %}

ワークフローファイルは、リポジトリの`.github/workflows`ディレクトリに保存する必要があります。

## `name`

ワークフローの名前。 {% data variables.product.prodname_dotcom %}では、リポジトリのアクションページにワークフローの名前が表示されます。 `name`を省略すると、{% data variables.product.prodname_dotcom %}はリポジトリのルートに対するワークフローファイルの相対パスをその値に設定します。

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

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-ghes-beta %}

Use `on.workflow_call` to define the inputs and outputs for a reusable workflow. You can also map the secrets that are available to the called workflow. For more information on reusable workflows, see "[Reusing workflows](/actions/using-workflows/reusing-workflows)."

### `on.workflow_call.inputs`

When using the `workflow_call` keyword, you can optionally specify inputs that are passed to the called workflow from the caller workflow. For more information about the `workflow_call` keyword, see "[Events that trigger workflows](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)."

In addition to the standard input parameters that are available, `on.workflow_call.inputs` requires a `type` parameter. 詳しい情報については[`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype)を参照してください。

If a `default` parameter is not set, the default value of the input is `false` for a boolean, `0` for a number, and `""` for a string.

Within the called workflow, you can use the `inputs` context to refer to an input.

If a caller workflow passes an input that is not specified in the called workflow, this results in an error.

#### サンプル

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

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

#### `on.workflow_call.inputs.<input_id>.type`

Required if input is defined for the `on.workflow_call` keyword. The value of this parameter is a string specifying the data type of the input. This must be one of: `boolean`, `number`, or `string`.

### `on.workflow_call.outputs`

A map of outputs for a called workflow. Called workflow outputs are available to all downstream jobs in the caller workflow. Each output has an identifier, an optional `description,` and a `value.` The `value` must be set to the value of an output from a job within the called workflow.

In the example below, two outputs are defined for this reusable workflow: `workflow_output1` and `workflow_output2`. These are mapped to outputs called `job_output1` and `job_output2`, both from a job called `my_job`.

#### サンプル

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

For information on how to reference a job output, see [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `on.workflow_call.secrets`

A map of the secrets that can be used in the called workflow.

Within the called workflow, you can use the `secrets` context to refer to a secret.

If a caller workflow passes a secret that is not specified in the called workflow, this results in an error.

#### サンプル

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

A string identifier to associate with the secret.

#### `on.workflow_call.secrets.<secret_id>.required`

A boolean specifying whether the secret must be supplied.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

{% endif %}

## `env`

ワークフロー中のすべてのジョブのステップから利用できる環境変数の`map`です。 1つのジョブのステップ、あるいは1つのステップからだけ利用できる環境変数を設定することもできます。 詳しい情報については「[`jobs.<job_id>.env`](#jobsjob_idenv)」及び「[`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)を参照してください。

Variables in the `env` map cannot be defined in terms of other variables in the map.

{% data reusables.repositories.actions-env-var-note %}

### サンプル

```yaml
env:
  SERVER: production
```

## `defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `concurrency`

{% data reusables.actions.jobs.section-using-concurrency %}

{% endif %}
## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

{% endif %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

{% endif %}
## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

ジョブ中のすべてのステップから利用できる環境変数の`map`です。 ワークフロー全体あるいは個別のステップのための環境変数を設定することもできます。 詳しい情報については[`env`](#env)及び[`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)を参照してください。

{% data reusables.repositories.actions-env-var-note %}

### サンプル

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

1つのジョブには、`steps` (ステップ) と呼ばれる一連のタスクがあります。 ステップでは、コマンドを実行する、設定タスクを実行する、あるいはリポジトリやパブリックリポジトリ、Dockerレジストリで公開されたアクションを実行することができます。 すべてのステップでアクションを実行するとは限りませんが、すべてのアクションはステップとして実行されます。 各ステップは、ランナー環境のそれ自体のプロセスで実行され、ワークスペースとファイルシステムにアクセスします。 ステップはそれ自体のプロセスで実行されるため、環境変数を変更しても、ステップ間では反映されません。 {% data variables.product.prodname_dotcom %}には、ジョブを設定して完了するステップが組み込まれています。

ワークフローの利用限度内であれば、実行するステップ数に限度はありません。 For more information, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

### サンプル

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

ステップの一意の識別子。 `id`を使って、コンテキストのステップを参照することができます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

### `jobs.<job_id>.steps[*].if`

条件文の`if`を使って、条件が満たされなければステップを実行しないようにできます。 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.actions.expression-syntax-if %} For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

#### Example: Using contexts

 このステップは、イベントの種類が`pull_request`でイベントアクションが`unassigned`の場合にのみ実行されます。

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Example: Using status check functions

`my backup step`は、ジョブの前のステップが失敗した場合にのみ実行されます。 For more information, see "[Expressions](/actions/learn-github-actions/expressions#job-status-check-functions)."

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### Example: Using secrets

Secrets cannot be directly referenced in `if:` conditionals. Instead, consider setting secrets as job-level environment variables, then referencing the environment variables to conditionally run steps in the job.

If a secret has not been set, the return value of an expression referencing the secret (such as {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} in the example) will be an empty string.

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

For more information, see "[Context availability](/actions/learn-github-actions/contexts#context-availability)" and "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

### `jobs.<job_id>.steps[*].name`

{% data variables.product.prodname_dotcom %}で表示されるステップの名前。

### `jobs.<job_id>.steps[*].uses`

ジョブでステップの一部として実行されるアクションを選択します。 アクションとは、再利用可能なコードの単位です。 ワークフロー、パブリックリポジトリ、または[公開されているDockerコンテナイメージ](https://hub.docker.com/)と同じリポジトリで定義されているアクションを使用できます。

Git ref、SHA、またはDockerタグ番号を指定して、使用しているアクションのバージョンを含めることを強く推奨します。 バージョンを指定しないと、アクションのオーナーがアップデートを公開したときに、ワークフローが中断したり、予期せぬ動作をしたりすることがあります。
- リリースされたアクションバージョンのコミットSHAを使用するのが、安定性とセキュリティのうえで最も安全です。
- 特定のメジャーアクションバージョンを使用すると、互換性を維持したまま重要な修正とセキュリティパッチを受け取ることができます。 ワークフローが引き続き動作することも保証できます。
- アクションのデフォルトブランチを使用すると便利なこともありますが、別のユーザが破壊的変更を加えた新しいメジャーバージョンをリリースすると、ワークフローが動作しなくなる場合があります。

入力が必要なアクションもあり、入力を[`with`](#jobsjob_idstepswith)キーワードを使って設定する必要があります。 必要な入力を判断するには、アクションのREADMEファイルをお読みください。

アクションは、JavaScriptのファイルもしくはDockerコンテナです。 使用するアクションがDockerコンテナの場合は、Linux環境で実行する必要があります。 詳細については[`runs-on`](#jobsjob_idruns-on)を参照してください。

#### Example: Using versioned actions

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

#### Example: Using a public action

`{owner}/{repo}@{ref}`

You can specify a branch, ref, or SHA in a public {% data variables.product.prodname_dotcom %} repository.

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

#### Example: Using a public action in a subdirectory

`{owner}/{repo}/{path}@{ref}`

パブリック{% data variables.product.prodname_dotcom %}リポジトリで特定のブランチ、ref、SHAにあるサブディレクトリ。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Example: Using an action in the same repository as the workflow

`./path/to/dir`

ワークフローのリポジトリにあるアクションを含むディレクトリのパス。 アクションを使用する前にリポジトリをチェックアウトする必要があります。

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Example: Using a Docker Hub action

`docker://{image}:{tag}`

[Docker Hub](https://hub.docker.com/)で公開されているDockerイメージ。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### Example: Using the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}

`docker://{host}/{image}:{tag}`

{% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} の Docker イメージ

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### Example: Using a Docker public registry action

`docker://{host}/{image}:{tag}`

パブリックレジストリのDockerイメージ。 この例では、`gcr.io` にある Google Container Registry を使用しています。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Example: Using an action inside a different private repository than the workflow

ワークフローはプライベートリポジトリをチェックアウトし、アクションをローカルで参照する必要があります。 個人アクセストークンを生成し、暗号化されたシークレットとしてトークンを追加します。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」および「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

例にある `PERSONAL_ACCESS_TOKEN` をシークレットの名前に置き換えます。

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

オペレーティングシステムのシェルを使用してコマンドラインプログラムを実行します。 `name`を指定しない場合、ステップ名はデフォルトで`run`コマンドで指定された文字列になります。

コマンドは、デフォルトでは非ログインシェルを使用して実行されます。 別のシェルを選択して、コマンドを実行するシェルをカスタマイズできます。 For more information, see [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

`run`キーワードは、それぞれがランナー環境での新しいプロセスとシェルです。 複数行のコマンドを指定すると、各行が同じシェルで実行されます。 例:

* 1行のコマンド：

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* 複数行のコマンド：

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

`working-directory`キーワードを使えば、コマンドが実行されるワーキングディレクトリを指定できます。

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

`shell`キーワードを使用して、ランナーのオペレーティングシステムのデフォルトシェルを上書きできます。 組み込みの`shell`キーワードを使用するか、カスタムセットのシェルオプションを定義することができます。 The shell command that is run internally executes a temporary file that contains the commands specified in the `run` keyword.

| サポートされているプラットフォーム | `shell` パラメータ | 説明                                                                                                                                                                                                        | 内部で実行されるコマンド                                    |
| ----------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| すべて               | `bash`        | 非Windowsプラットフォームのデフォルトシェルで、`sh`へのフォールバックがあります。 Windowsでbashシェルを指定すると、Windows用Gitに含まれるbashシェルが使用されます。                                                                                                      | `bash --noprofile --norc -eo pipefail {0}`      |
| すべて               | `pwsh`        | PowerShell Coreです。 {% data variables.product.prodname_dotcom %}はスクリプト名に拡張子`.ps1`を追加します。                                                                                                                   | `pwsh -command ". '{0}'"`                       |
| すべて               | `python`      | Pythonのコマンドを実行します。                                                                                                                                                                                        | `python {0}`                                    |
| Linux / macOS     | `sh`          | 非Windowsプラットフォームにおいてシェルが提供されておらず、パス上で`bash`が見つからなかった場合のフォールバック動作です。                                                                                                                                       | `sh -e {0}`                                     |
| Windows           | `cmd`         | {% data variables.product.prodname_dotcom %}はスクリプト名に拡張子`.cmd`を追加し、`{0}`を置き換えます。                                                                                                                           | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows           | `pwsh`        | これはWindowsで使われるデフォルトのシェルです。 PowerShell Coreです。 {% data variables.product.prodname_dotcom %}はスクリプト名に拡張子`.ps1`を追加します。 セルフホストのWindowsランナーに_PowerShell Core_がインストールされていない場合、その代わりに_PowerShell Desktop_が使われます。 | `pwsh -command ". '{0}'"`.                      |
| Windows           | `powershell`  | PowerShell Desktop. {% data variables.product.prodname_dotcom %}はスクリプト名に拡張子`.ps1`を追加します。                                                                                                                  | `powershell -command ". '{0}'"`.                |

#### Example: Running a script using bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Example: Running a script using Windows `cmd`

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Example: Running a script using PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### PowerShell Desktopを使用してスクリプトを実行する例

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Example: Running a python script

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### カスタムシェル

`command […options] {0} [..more_options]`を使用すると、テンプレート文字列に`shell`値を設定できます。 {% data variables.product.prodname_dotcom %}は、空白区切りで最初の文字列をコマンドとして解釈し、`{0}`にある一時的なスクリプトのファイル名を挿入します。

例:

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

使われるコマンドは（この例では`perl`）は、ランナーにインストールされていなければなりません。

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% elsif fpt or ghec %}
GitHubホストランナーに含まれるソフトウェアに関する情報については「[GitHubホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners#supported-software)」を参照してください。
{% endif %}

#### 終了コードとエラーアクションの環境設定

組み込みのshellキーワードについては、{% data variables.product.prodname_dotcom %}がホストする実行環境で以下のデフォルトが提供されます。 シェルスクリプトを実行する際には、以下のガイドラインを使ってください。

- `bash`/`sh`:
  - `set -eo pipefail`を使用したフェイルファースト動作 : `bash`及び組み込みの`shell`のデフォルト。 Windows以外のプラットフォームでオプションを指定しない場合のデフォルトでもあります。
  - フェイルファーストをオプトアウトし、シェルのオプションにテンプレート文字列を指定して完全に制御することもできます。 たとえば、`bash {0}`とします。
  - shライクのシェルは、スクリプトで実行された最後のコマンドの終了コードで終了します。これが、アクションのデフォルトの動作でもあります。 runnerは、この終了コードに基づいてステップのステータスを失敗/成功としてレポートします。

- `powershell`/`pwsh`
  - 可能な場合のフェイルファースト動作。 `pwsh`および`powershell`の組み込みシェルの場合は、スクリプトの内容の前に`$ErrorActionPreference = 'stop'` が付加されます。
  - ここでは、アクションステータスがスクリプトの最後の終了コードを反映するように、PowerShellスクリプトに`if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }`を付加しています。
  - 必要な場合には、組み込みシェルを使用せずに、`pwsh -File {0}`や`powershell -Command "& '{0}'"`などのカスタムシェルを指定すれば、いつでもオプトアウトすることができます。

- `cmd`
  - 各エラーコードをチェックしてそれぞれに対応するスクリプトを書く以外、フェイルファースト動作を完全にオプトインする方法はないようです。 デフォルトでその動作を指定することはできないため、この動作はスクリプトに記述する必要があります。
  - `cmd.exe`は、実行した最後のプログラムのエラーレベルで終了し、runnerにそのエラーコードを返します。 この動作は、これ以前の`sh`および`pwsh`のデフォルト動作と内部的に一貫しており、`cmd.exe`のデフォルトなので、この動作には影響しません。

### `jobs.<job_id>.steps[*].with`

アクションによって定義される入力パラメータの`map`。 各入力パラメータはキー/値ペアです。 入力パラメータは環境変数として設定されます。 変数の前には`INPUT_`が付けられ、大文字に変換されます。

#### サンプル

`hello_world`アクションで定義される3つの入力パラメータ (`first_name`、`middle_name`、`last_name`) を定義します。 `hello-world`アクションからは、これらの入力変数は`INPUT_FIRST_NAME`、`INPUT_MIDDLE_NAME`、`INPUT_LAST_NAME`という環境変数としてアクセスできます。

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

Dockerコンテナへの入力を定義する`文字列`。 {% data variables.product.prodname_dotcom %}は、コンテナの起動時に`args`をコンテナの`ENTRYPOINT`に渡します。 このパラメータは、`文字列の配列`をサポートしません。

#### サンプル

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

`args`は、`Dockerfile`中の`CMD`命令の場所で使われます。 `Dockerfile`中で`CMD`を使うなら、以下の優先順位順のガイドラインを利用してください。

1. 必須の引数をアクションのREADME中でドキュメント化し、`CMD`命令から除外してください。
1. `args`を指定せずにアクションを利用できるよう、デフォルトを使ってください。
1. アクションが`--help`フラグやそれに類するものを備えているなら、アクションを自己ドキュメント化するためのデフォルトとして利用してください。

### `jobs.<job_id>.steps[*].with.entrypoint`

`Dockerfile`中のDockerの`ENTRYPOINT`をオーバーライドします。あるいは、もしそれが指定されていなかった場合に設定します。 shellやexec形式を持つDockerの`ENTRYPOINT`命令とは異なり、`entrypoint`キーワードは実行する実行可能ファイルを定義する単一の文字列だけを受け付けます。

#### サンプル

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

`entrypoint`キーワードはDockerコンテナアクションで使われることを意図したものですが、入力を定義しないJavaScriptのアクションでも使うことができます。

### `jobs.<job_id>.steps[*].env`

ランナー環境でステップが使う環境変数を設定します。 ワークフロー全体あるいはジョブのための環境変数を設定することもできます。 詳しい情報については「[`env`](#env)」及び「[`jobs.<job_id>.env`](#jobsjob_idenv)」を参照してください。

{% data reusables.repositories.actions-env-var-note %}

パブリックなアクションは、READMEファイル中で期待する環境変数を指定できます。 環境変数に秘密情報を設定しようとしている場合、秘密情報は`secrets`コンテキストを使って設定しなければなりません。 For more information, see "[Using environment variables](/actions/automating-your-workflow-with-github-actions/using-environment-variables)" and "[Contexts](/actions/learn-github-actions/contexts)."

#### サンプル

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

ステップが失敗してもジョブが失敗にならないようにします。 `true`に設定すれば、このステップが失敗した場合にジョブが次へ進めるようになります。

### `jobs.<job_id>.steps[*].timeout-minutes`

プロセスがkillされるまでにステップが実行できる最大の分数。

## `jobs.<job_id>.timeout-minutes`

{% data variables.product.prodname_dotcom %}で自動的にキャンセルされるまでジョブを実行する最長時間 (分)。 デフォルト: 360

If the timeout exceeds the job execution time limit for the runner, the job will be canceled when the execution time limit is met instead. For more information about job execution time limits, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration#usage-limits)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

{% note %}

**Note:** {% data reusables.actions.github-token-expiration %} For self-hosted runners, the token may be the limiting factor if the job timeout is greater than 24 hours. For more information on the `GITHUB_TOKEN`, see "[About the `GITHUB_TOKEN` secret](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)."

{% endnote %}

## `jobs.<job_id>.strategy`

Use `jobs.<job_id>.strategy` to use a matrix strategy for your jobs. {% data reusables.actions.jobs.about-matrix-strategy %} For more information, see "[Using a matrix for your jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)."

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### Example: Using a single-dimension matrix

{% data reusables.actions.jobs.single-dimension-matrix %}

#### Example: Using a multi-dimension matrix

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### Example: Using contexts to create matrices

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### Example: Expanding configurations

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### Example: Adding configurations

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

ジョブが失敗した時に、ワークフローの実行が失敗にならないようにします。 `true`に設定すれば、ジョブが失敗した時にワークフローの実行が次へ進めるようになります。

### Example: Preventing a specific failing matrix job from failing a workflow run

ジョブマトリックス中の特定のジョブが失敗しても、ワークフローの実行が失敗にならないようにすることができます。 For example, if you wanted to only allow an experimental job with `node` set to `15` to fail without failing the workflow run.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-18.04
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

ワークフロー中のジョブのためのサービスコンテナをホストするために使われます。 サービスコンテナは、データベースやRedisのようなキャッシュサービスの作成に役立ちます。 ランナーは自動的にDockerネットワークを作成し、サービスコンテナのライフサイクルを管理します。

コンテナを実行するようにジョブを設定した場合、あるいはステップがコンテナアクションを使う場合は、サービスもしくはアクションにアクセスするためにポートをマップする必要はありません。 Dockerは自動的に、同じDockerのユーザ定義ブリッジネットワーク上のコンテナ間のすべてのポートを公開します。 サービスコンテナは、ホスト名で直接参照できます。 ホスト名は自動的に、ワークフロー中のサービスに設定したラベル名にマップされます。

ランナーマシン上で直接実行されるようにジョブを設定し、ステップがコンテナアクションを使わないのであれば、必要なDockerサービスコンテナのポートはDockerホスト（ランナーマシン）にマップしなければなりません サービスコンテナには、localhostとマップされたポートを使ってアクセスできます。

ネットワーキングサービスコンテナ間の差異に関する詳しい情報については「[サービスコンテナについて](/actions/automating-your-workflow-with-github-actions/about-service-containers)」を参照してください。

### Example: Using localhost

この例では、nginxとredisという2つのサービスを作成します。 Dockerホストのポートを指定して、コンテナのポートを指定しなかった場合、コンテナのポートは空いているポートにランダムに割り当てられます。 {% data variables.product.prodname_dotcom %}は、割り当てられたコンテナポートを{% raw %}`${{job.services.<service_name>.ports}}`{% endraw %}コンテキストに設定します。 以下の例では、サービスコンテナのポートへは{% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} 及び{% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} コンテキストでアクセスできます。

```yaml
services:
  nginx:
    image: nginx
    # Dockerホストのポート8080をnginxコンテナのポート80にマップする
    ports:
      - 8080:80
  redis:
    image: redis
    # Dockerホストのポート6379をRedisコンテナのランダムな空きポートにマップする
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

アクションを実行するサービスコンテナとして使用するDockerイメージ。 The value can be the Docker Hub image name or a  registry name.

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### サンプル

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

サービスコンテナ中の環境変数の`map`を設定します。

### `jobs.<job_id>.services.<service_id>.ports`

サービスコンテナで公開するポートの`array`を設定します。

### `jobs.<job_id>.services.<service_id>.volumes`

使用するサービスコンテナにボリュームの`array`を設定します。 volumes (ボリューム) を使用すると、サービス間で、または1つのジョブのステップ間でデータを共有できます。 指定できるのは、名前付きDockerボリューム、匿名Dockerボリューム、またはホスト上のバインドマウントです。

ボリュームを指定するには、ソースパスとターゲットパスを指定してください。

`<source>:<destinationPath>`.

`<source>`は、ホストマシン上のボリューム名または絶対パス、`<destinationPath>`はコンテナでの絶対パスです。

#### サンプル

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

追加のDockerコンテナリソースのオプション。 オプションの一覧は、「[`docker create`のオプション](https://docs.docker.com/engine/reference/commandline/create/#options)」を参照してください。

{% warning %}

**Warning:** The `--network` option is not supported.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-ghes-beta %}

The location and version of a reusable workflow file to run as a job. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Use one of the following syntaxes:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### サンプル

{% data reusables.actions.uses-keyword-example %}

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

### `jobs.<job_id>.with`

When a job is used to call a reusable workflow, you can use `with` to provide a map of inputs that are passed to the called workflow.

Any inputs that you pass must match the input specifications defined in the called workflow.

Unlike [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith), the inputs you pass with `jobs.<job_id>.with` are not be available as environment variables in the called workflow. Instead, you can reference the inputs by using the `inputs` context.

#### サンプル

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

A pair consisting of a string identifier for the input and the value of the input. The identifier must match the name of an input defined by [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) in the called workflow. The data type of the value must match the type defined by [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) in the called workflow.

Allowed expression contexts: `github`, and `needs`.

### `jobs.<job_id>.secrets`

When a job is used to call a reusable workflow, you can use `secrets` to provide a map of secrets that are passed to the called workflow.

Any secrets that you pass must match the names defined in the called workflow.

#### サンプル

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

### `jobs.<job_id>.secrets.<secret_id>`

A pair consisting of a string identifier for the secret and the value of the secret. The identifier must match the name of a secret defined by [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) in the called workflow.

Allowed expression contexts: `github`, `needs`, and `secrets`.
{% endif %}

## フィルタパターンのチートシート

特別なキャラクタをパス、ブランチ、タグフィルタで利用できます。

- `*`ゼロ個以上のキャラクタにマッチしますが、`/`にはマッチしません。 たとえば`Octo*`は`Octocat`にマッチします。
- `**`ゼロ個以上の任意のキャラクタにマッチします。
- `?`: Matches zero or one of the preceding character.
- `+`: 直前の文字の 1 つ以上に一致します。
- `[]` 括弧内にリストされた、あるいは範囲に含まれる1つのキャラクタにマッチします。 範囲に含めることができるのは`a-z`、`A-Z`、`0-9`のみです。 たとえば、`[0-9a-z]`という範囲は任意の数字もしくは小文字にマッチします。 たとえば`[CB]at`は`Cat`あるいは`Bat`にマッチし、`[1-2]00`は`100`や`200`にマッチします。
- `!`: パターンの先頭に置くと、肯定のパターンを否定にします。 先頭のキャラクタではない場合は、特別な意味を持ちません。

YAMLにおいては、`*`、`[`、`!`は特別なキャラクタです。 パターンを`*`、`[`、`!`で始める場合、そのパターンをクオートで囲まなければなりません。

```yaml
# 有効
- '**/README.md'

# 無効 - ワークフローの実行を妨げる
# 解析エラーを作成する
- **/README.md
```

For more information about branch, tag, and path filter syntax, see "[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)", "[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)", and "[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)."

### ブランチやタグにマッチするパターン

| パターン                                                    | 説明                                                                                             | マッチの例                                                                                                                 |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `feature/*`                                             | ワイルドカードの`*`は任意のキャラクタにマッチしますが、スラッシュ（`/`）にはマッチしません。                                              | `feature/my-branch`<br/><br/>`feature/your-branch`                                                        |
| `feature/**`                                            | ワイルドカードの`**`は、ブランチ及びタグ名のスラッシュ（`/`）を含む任意のキャラクタにマッチします。                                          | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | ブランチあるいはタグ名に完全に一致したときにマッチします。                                                                  | `main`<br/><br/>`releases/mona-the-octocat`                                                               |
| `'*'`                                                   | スラッシュ（`/`）を含まないすべてのブランチ及びタグ名にマッチします。 `*`はYAMLにおける特別なキャラクタです。 パターンを`*`で始める場合は、クオートを使わなければなりません。 | `main`<br/><br/>`releases`                                                                                |
| `'**'`                                                  | すべてのブランチ及びタグ名にマッチします。 これは `branches`あるいは`tags`フィルタを使わない場合のデフォルトの動作です。                          | `all/the/branches`<br/><br/>`every/tag`                                                                   |
| `'*feature'`                                            | `*`はYAMLにおける特別なキャラクタです。 パターンを`*`で始める場合は、クオートを使わなければなりません。                                      | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature`                                   |
| `v2*`                                                   | `v2`で始めるブランチ及びタグ名にマッチします。                                                                      | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9`                                                          |
| `v[12].[0-9]+.[0-9]+`                                   | Matches all semantic versioning branches and tags with major version 1 or 2.                   | `v1.10.1`<br/><br/>`v2.0.0`                                                                               |

### ファイルパスにマッチするパターン

パスパターンはパス全体にマッチしなければならず、リポジトリのルートを出発点とします。

| パターン                                                                    | マッチの説明                                                                                                      | マッチの例                                                                                                                    |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `'*'`                                                                   | ワイルドカードの`*`は任意のキャラクタにマッチしますが、スラッシュ（`/`）にはマッチしません。 `*`はYAMLにおける特別なキャラクタです。 パターンを`*`で始める場合は、クオートを使わなければなりません。 | `README.md`<br/><br/>`server.rb`                                                                             |
| `'*.jsx?'`                                                              | `?`はゼロ個以上の先行するキャラクタにマッチします。                                                                                 | `page.js`<br/><br/>`page.jsx`                                                                                |
| `'**'`                                                                  | ワイルドカードの`**`は、スラッシュ（`/`）を含む任意のキャラクタにマッチします。 これは `path`フィルタを使わない場合のデフォルトの動作です。                               | `all/the/files.md`                                                                                                       |
| `'*.js'`                                                                | ワイルドカードの`*`は任意のキャラクタにマッチしますが、スラッシュ（`/`）にはマッチしません。 リポジトリのルートにあるすべての`.js`ファイルにマッチします。                         | `app.js`<br/><br/>`index.js`                                                                                 |
| `'**.js'`                                                               | リポジトリ内のすべての`.js`ファイルにマッチします。                                                                                | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js`                                       |
| `docs/*`                                                                | リポジトリのルートの`docs`のルートにあるすべてのファイルにマッチします。                                                                     | `docs/README.md`<br/><br/>`docs/file.txt`                                                                    |
| `docs/**`                                                               | リポジトリのルートの`docs`内にあるすべてのファイルにマッチします。                                                                        | `docs/README.md`<br/><br/>`docs/mona/octocat.txt`                                                            |
| `docs/**/*.md`                                                          | `docs`ディレクトリ内にある`.md`というサフィックスを持つファイルにマッチします。                                                               | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`          |
| `'**/docs/**'`                                                          | リポジトリ内にある`docs`ディレクトリ内のすべてのファイルにマッチします、                                                                     | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`             |
| `'**/README.md'`                                                        | リポジトリ内にあるREADME.mdファイルにマッチします。                                                                              | `README.md`<br/><br/>`js/README.md`                                                                          |
| `'**/*src/**'`                                                          | リポジトリ内にある`src`というサフィックスを持つフォルダ内のすべてのファイルにマッチします。                                                            | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`                                                              |
| `'**/*-post.md'`                                                        | リポジトリ内にある`-post.md`というサフィックスを持つファイルにマッチします。                                                                 | `my-post.md`<br/><br/>`path/their-post.md`                                                                   |
| `'**/migrate-*.sql'`                                                    | リポジトリ内の`migrate-`というプレフィックスと`.sql`というサフィックスを持つファイルにマッチします。                                                  | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql`             |
| `*.md`<br/><br/>`!README.md`                                | 感嘆符（`!`）をパターンの前に置くと、そのパターンの否定になります。 あるファイルがあるパターンにマッチし、ファイル中でその後に定義されている否定パターンにマッチした場合、そのファイルは含まれません。       | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | パターンは順番にチェックされます。 先行するパターンを否定するパターンで、ファイルパスが再度含まれるようになります。                                                  | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`                                            |
