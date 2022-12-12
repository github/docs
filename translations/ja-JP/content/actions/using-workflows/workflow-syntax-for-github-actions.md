---
title: GitHub Actions のワークフロー構文
shortTitle: Workflow syntax
intro: ワークフローは、1 つ以上のジョブからなる設定可能な自動化プロセスです。 ワークフローの設定を定義するには、YAMLファイルを作成しなければなりません。
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
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192049'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフロー用のYAML構文について

ワークフロー ファイルでは YAML 構文が使用され、ファイル拡張子 `.yml` または `.yaml` が必要です。 {% data reusables.actions.learn-more-about-yaml %}

ワークフロー ファイルは、リポジトリの `.github/workflows` ディレクトリに保存する必要があります。

## `name`

ワークフローの名前。 {% data variables.product.prodname_dotcom %} では、ワークフローの名前がリポジトリの [アクション] タブに表示されます。`name` を省略すると、{% data variables.product.prodname_dotcom %} により、リポジトリのルートに相対的なワークフロー ファイル パスに設定されます。

{% ifversion actions-run-name %}
## `run-name`

ワークフローから生成されたワークフロー実行の名前。 {% data variables.product.prodname_dotcom %} では、リポジトリの [アクション] タブのワークフロー実行のリストにワークフロー実行名が表示されます。`run-name` が省略されているか空白のみの場合、実行名はワークフロー実行のイベント固有の情報に設定されます。 たとえば、`push` または `pull_request` イベントによってトリガーされるワークフローの場合、コミット メッセージとして設定されます。

この値には式を含めることができ、[`github`](/actions/learn-github-actions/contexts#github-context) および [`inputs`](/actions/learn-github-actions/contexts#inputs-context) コンテキストを参照することもできます。

### 例

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

`on.workflow_call` は、再利用可能なワークフローの入力と出力を定義するために使います。 呼び出し対象のワークフローで使用できるシークレットをマップすることもできます。 再利用可能なワークフローの詳細については、「[ワークフローの再利用](/actions/using-workflows/reusing-workflows)」を参照してください。

### `on.workflow_call.inputs`

`workflow_call` キーワードを使う場合は、必要に応じて、呼び出し元ワークフローから呼び出し対象のワークフローに渡される入力を指定できます。 `workflow_call` キーワードの詳細については、「[ワークフローをトリガーするイベント](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)」を参照してください。

`on.workflow_call.inputs` には、使用可能な標準入力パラメーターに加えて `type` パラメーターが必要です。 詳細については、「[`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype)」を参照してください。

`default` パラメーターが設定されていない場合、入力の既定値は `false` (ブール値の場合)、`0` (数値の場合)、`""` (文字列の場合) です。

呼び出し対象のワークフロー内で `inputs` コンテキストを使って入力を参照できます。

呼び出し対象のワークフローで指定されていない入力が呼び出し元ワークフローによって渡されると、エラーが発生します。

#### 例

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

詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。

#### `on.workflow_call.inputs.<input_id>.type`

`on.workflow_call` キーワードに対して入力が定義されている場合は必須です。 このパラメーターの値は、入力のデータ型を指定する文字列です。 これは、`boolean`、`number`、または `string` のいずれかである必要があります。

### `on.workflow_call.outputs`

呼び出し対象のワークフローの出力のマップ。 呼び出し対象のワークフロー出力は、呼び出し元ワークフロー内のすべてのダウンストリーム ジョブで使用できます。 各出力には、識別子、省略可能な `description,`、`value.` があります。呼び出し対象のワークフロー内のジョブからの出力の値には `value` を設定する必要があります。

次の例では、この再利用可能なワークフローに対して 2 つの出力 `workflow_output1` と `workflow_output2` が定義されています。 これらは、どちらも `my_job` というジョブから `job_output1` と `job_output2` という出力にマップされます。

#### 例

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

ジョブ出力を参照する方法については、[`jobs.<job_id>.outputs`](#jobsjob_idoutputs) を参照してください。 詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。

### `on.workflow_call.secrets`

呼び出し対象のワークフローで使用できるシークレットのマップ。

呼び出し対象のワークフロー内で `secrets` コンテキストを使ってシークレットを参照できます。

呼び出し対象のワークフローで指定されていないシークレットが呼び出し元ワークフローによって渡されると、エラーが発生します。

#### 例

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

シークレットに関連付ける文字列識別子。

#### `on.workflow_call.secrets.<secret_id>.required`

シークレットを指定する必要があるかどうかを指定するブール値。
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## `env`

ワークフロー中のすべてのジョブのステップから利用できる環境変数の `map` です。 1つのジョブのステップ、あるいは1つのステップからだけ利用できる環境変数を設定することもできます。 詳細については、[`jobs.<job_id>.env`](#jobsjob_idenv) および [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv) を参照してください。

`env` マップ内の変数は、マップ内の他の変数の観点からは定義できません。

{% data reusables.repositories.actions-env-var-note %}

### 例

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

ジョブ中のすべてのステップから利用できる環境変数の `map` です。 ワークフロー全体あるいは個別のステップのための環境変数を設定することもできます。 詳細については、[`env`](#env) および [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv) を参照してください。

{% data reusables.repositories.actions-env-var-note %}

### 例

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

1 つのジョブには、`steps` と呼ばれる一連のタスクがあります。 ステップでは、コマンドを実行する、設定タスクを実行する、あるいはリポジトリやパブリックリポジトリ、Dockerレジストリで公開されたアクションを実行することができます。 すべてのステップでアクションを実行するとは限りませんが、すべてのアクションはステップとして実行されます。 各ステップは、ランナー環境のそれ自体のプロセスで実行され、ワークスペースとファイルシステムにアクセスします。 ステップはそれ自体のプロセスで実行されるため、環境変数を変更しても、ステップ間では反映されません。 {% data variables.product.prodname_dotcom %}には、ジョブを設定して完了するステップが組み込まれています。

ワークフローの利用限度内であれば、実行するステップ数に限度はありません。 詳細については、{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %} がホストするランナーの「[使用量制限と課金](/actions/reference/usage-limits-billing-and-administration)」と{% endif %}セルフホステッド ランナーの使用制限の「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」{% ifversion fpt or ghec or ghes %}{% elsif ghae %}を参照してください。{% endif %}

### 例

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

ステップの一意の識別子。 `id` を使って、コンテキストのステップを参照することができます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

### `jobs.<job_id>.steps[*].if`

`if` 条件文を使って、条件が満たされなければ、ステップを実行しないようにすることができます。 {% data reusables.actions.if-supported-contexts %}

{% data reusables.actions.expression-syntax-if %} 詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

#### 例: コンテキストの使用

 このステップは、イベントの種類が `pull_request` で、イベント アクションが `unassigned` である場合にのみ実行されます。

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### 例: ステータス チェック関数の使用

`my backup step` は、ジョブの前のステップが失敗した場合にのみ実行されます。 詳細については、「[式](/actions/learn-github-actions/expressions#status-check-functions)」を参照してください。

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### 例: シークレットの使用

`if:` 条件文でシークレットを直接参照することはできません。 代わりに、シークレットをジョブ レベルの環境変数として設定し、ジョブのステップを条件付きで実行するために環境変数を参照することを検討してください。

シークレットが設定されていない場合、シークレットを参照する式の戻り値 (例では {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} など) は空の文字列になります。

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

詳細については、「[コンテキストの可用性](/actions/learn-github-actions/contexts#context-availability)」と「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

### `jobs.<job_id>.steps[*].name`

{% data variables.product.prodname_dotcom %}で表示されるステップの名前。

### `jobs.<job_id>.steps[*].uses`

ジョブでステップの一部として実行されるアクションを選択します。 アクションとは、再利用可能なコードの単位です。 ワークフローと同じリポジトリ、パブリック リポジトリ、または[公開されている Docker コンテナー イメージ](https://hub.docker.com/)で定義されているアクションを使用できます。

Git ref、SHA、または Docker タグを指定することで、使っているアクションのバージョンを含めることを、強くお勧めします。 バージョンを指定しないと、アクションのオーナーがアップデートを公開したときに、ワークフローが中断したり、予期せぬ動作をしたりすることがあります。
- リリースされたアクションバージョンのコミットSHAを使用するのが、安定性とセキュリティのうえで最も安全です。
- アクションでメジャー バージョン タグが発行される場合は、互換性を維持しながら、重要な修正プログラムとセキュリティ パッチを受け取ることを予期する必要があります。 この動作は、アクションの作成者が判断するものであることに注意してください。
- アクションのデフォルトブランチを使用すると便利なこともありますが、別のユーザが破壊的変更を加えた新しいメジャーバージョンをリリースすると、ワークフローが動作しなくなる場合があります。

一部のアクションでは、[`with`](#jobsjob_idstepswith) キーワードを使用して設定する必要がある入力が必要です。 必要な入力を判断するには、アクションのREADMEファイルをお読みください。

アクションは、JavaScriptのファイルもしくはDockerコンテナです。 使用するアクションがDockerコンテナの場合、ジョブはLinux環境で実行する必要があります。 詳細については、[`runs-on`](#jobsjob_idruns-on) を参照してください。

#### 例: バージョン管理されたアクションの使用

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

#### 例: パブリック アクションの使用

`{owner}/{repo}@{ref}`

パブリック {% data variables.product.prodname_dotcom %} リポジトリのブランチ、参照、または SHA を指定できます。

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

#### 例: サブディレクトリのパブリック アクションの使用

`{owner}/{repo}/{path}@{ref}`

パブリック{% data variables.product.prodname_dotcom %}リポジトリで特定のブランチ、ref、SHAにあるサブディレクトリ。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### 例: ワークフローと同じリポジトリにあるアクションの使用

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

#### 例: Docker Hub アクションの使用

`docker://{image}:{tag}`

[Docker Hub](https://hub.docker.com/) で公開されている Docker イメージ。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### 例: {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} の使用

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
#### 例: Docker パブリック レジストリ アクションの使用

`docker://{host}/{image}:{tag}`

パブリックレジストリのDockerイメージ。 この例では、`gcr.io` にある Google Container Registry を使っています。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### 例: ワークフローとは異なるプライベート リポジトリ内でのアクションの使用

ワークフローはプライベートリポジトリをチェックアウトし、アクションをローカルで参照する必要があります。 {% data variables.product.pat_generic %} を生成し、暗号化されたシークレットとしてトークンを追加します。 詳しくは、「[{% data variables.product.pat_generic %} の作成](/github/authenticating-to-github/creating-a-personal-access-token)」と「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

この例の `PERSONAL_ACCESS_TOKEN` をシークレットの名前に置き換えます。

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

オペレーティングシステムのシェルを使用してコマンドラインプログラムを実行します。 `name` を指定しない場合、ステップ名は既定では `run` コマンドで指定されたテキストになります。

コマンドは、デフォルトでは非ログインシェルを使用して実行されます。 別のシェルを選択して、コマンドを実行するシェルをカスタマイズできます。 詳細については、「[`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell)」を参照してください。

`run` キーワードは、それぞれがランナー環境での新しいプロセスとシェルを表します。 複数行のコマンドを指定すると、各行が同じシェルで実行されます。 次に例を示します。

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

`working-directory` キーワードを使えば、コマンドが実行される作業ディレクトリを指定できます。

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

`shell` キーワードを使って、ランナーのオペレーティング システムの既定のシェル設定をオーバーライドできます。 組み込みの `shell` キーワードを使いことも、カスタム セットのシェル オプションを定義することもできます。 内部で実行されるシェル コマンドによって、`run` キーワードで指定されたコマンドを含む一時ファイルが実行されます。

| サポートされているプラットフォーム | `shell` パラメーター | 説明 | 内部で実行されるコマンド |
|--------------------|-------------------|-------------|------------------------|
| Linux/macOS | unspecified | Windows 以外のプラットフォームの既定のシェル。 これにより、`bash` を明示的に指定した場合とは異なるコマンドが実行されることに注意してください。 `bash` がパスに見つからない場合、これは `sh` のように扱われます。 | `bash -e {0}` |
| すべて | `bash` | `sh` へのフォールバックが設定された、Windows 以外のプラットフォームの既定のシェル。 Windowsでbashシェルを指定すると、Windows用Gitに含まれるbashシェルが使用されます。 | `bash --noprofile --norc -eo pipefail {0}` |
| すべて | `pwsh` | PowerShell Coreです。 {% data variables.product.prodname_dotcom %} によってスクリプト名に拡張子 `.ps1` が追加されます。 | `pwsh -command ". '{0}'"` |
| すべて | `python` | Pythonのコマンドを実行します。 | `python {0}` |
| Linux/macOS | `sh` | Windows 以外のプラットフォームにおいて、シェルが提供されておらず、パスで `bash` が見つからなかった場合のフォールバック動作。 | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %} によってスクリプト名に拡張子 `.cmd` が追加され、`{0}` が置き換えられます。 | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | これはWindowsで使われるデフォルトのシェルです。 PowerShell Coreです。 {% data variables.product.prodname_dotcom %} によってスクリプト名に拡張子 `.ps1` が追加されます。 セルフホステッド Windows ランナーに _PowerShell Core_ がインストールされていない場合は、代わりに _PowerShell Desktop_ が使われます。| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | PowerShell Desktop. {% data variables.product.prodname_dotcom %} によってスクリプト名に拡張子 `.ps1` が追加されます。 | `powershell -command ". '{0}'"`. |

#### 例: bash を使ったスクリプトの実行

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### 例: Windows `cmd` を使ったスクリプトの実行

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### 例: PowerShell Core を使ったスクリプトの実行

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

#### 例: Python スクリプトの実行

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### カスタムシェル

`command […options] {0} [..more_options]` を使って、テンプレート文字列に `shell` 値を設定できます。 {% data variables.product.prodname_dotcom %} では、空白区切りで最初の文字列をコマンドとして解釈し、`{0}` にある一時的なスクリプトのファイル名を挿入します。

次に例を示します。

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

使われるコマンド (この例では `perl`) は、ランナーにインストールされている必要があります。

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% elsif fpt or ghec %} GitHub ホステッド ランナーに含まれるソフトウェアの詳細については、[GitHub ホステッド ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners#supported-software)に関するページを参照してください。
{% endif %}

#### 終了コードとエラーアクションの環境設定

組み込みのshellキーワードについては、{% data variables.product.prodname_dotcom %}がホストする実行環境で以下のデフォルトが提供されます。 シェルスクリプトを実行する際には、以下のガイドラインを使ってください。

- `bash`/`sh`:
  - `set -eo pipefail` を使うフェイルファスト動作: `shell: bash` が明示的に指定されていると、このオプションが設定されます。 既定では適用されません。
  - シェル オプションにテンプレート文字列を指定することで、シェル パラメーターを完全に制御できます。 たとえば、`bash {0}` のようにします。
  - shライクのシェルは、スクリプトで実行された最後のコマンドの終了コードで終了します。これが、アクションのデフォルトの動作でもあります。 runnerは、この終了コードに基づいてステップのステータスを失敗/成功としてレポートします。

- `powershell`/`pwsh`
  - 可能な場合のフェイルファースト動作。 `pwsh` と `powershell` の組み込みのシェルでは、スクリプトの内容の前に `$ErrorActionPreference = 'stop'` を追加します。
  - PowerShell スクリプトに `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` を追加して、アクションの状態にスクリプトの最後の終了コードが反映されるようにします。
  - ユーザーは、組み込みのシェルを使わずに、必要に応じて `pwsh -File {0}` や `powershell -Command "& '{0}'"` のようなカスタム シェル オプションを指定するといつでもオプトアウトできます。

- `cmd`
  - 各エラーコードをチェックしてそれぞれに対応するスクリプトを書く以外、フェイルファースト動作を完全にオプトインする方法はないようです。 デフォルトでその動作を指定することはできないため、この動作はスクリプトに記述する必要があります。
  - `cmd.exe` は実行した最後のプログラムのエラー レベルで終了し、ランナーにエラー コードが返されます。 この動作は、内部的には前の `sh` と `pwsh` の既定の動作と一致しており、`cmd.exe` の既定であるため、この動作は変更されません。

### `jobs.<job_id>.steps[*].with`

アクションによって定義される入力パラメーターの `map`。 各入力パラメータはキー/値ペアです。 入力パラメータは環境変数として設定されます。 変数の前には `INPUT_` が付けられ、大文字に変換されます。

#### 例

`hello_world` アクションによって定義される 3 つの入力パラメーター (`first_name`、`middle_name`、`last_name`) を定義します。 これらの入力変数には、`INPUT_FIRST_NAME`、`INPUT_MIDDLE_NAME`、`INPUT_LAST_NAME` の環境変数として `hello-world` アクションからアクセスできます。

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

Docker コンテナーの入力を定義する `string`。 {% data variables.product.prodname_dotcom %} により、コンテナーの起動時に `args` がコンテナーの`ENTRYPOINT` に渡されます。 `array of strings` はこのパラメーターではサポートされていません。

#### 例

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

`args` は、`Dockerfile` 内の `CMD` 命令の代わりに使用されます。 ご自分の `Dockerfile` で `CMD` を使用する場合は、以下の優先順のガイドラインを使用してください。

1. アクションの README 中で必須の引数をドキュメント化し、`CMD` 命令から除外します。
1. `args` を指定せずにアクションを利用できるよう、既定値を使用します。
1. アクションによって `--help` フラグなどが公開される場合、アクションを自己文書化するための既定としてこれを使います。

### `jobs.<job_id>.steps[*].with.entrypoint`

`Dockerfile` 内の Docker の `ENTRYPOINT` をオーバーライドするか、まだ指定されていない場合は設定します。 shell や exec 形式を持つ Docker の `ENTRYPOINT` 命令とは異なり、`entrypoint` キーワードでは、実行する実行可能ファイルを定義する単一の文字列だけを受け付けます。

#### 例

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

`entrypoint` キーワードは Docker コンテナー アクションで使われることを意図したものですが、入力を定義しない JavaScript のアクションでも使うことができます。

### `jobs.<job_id>.steps[*].env`

ランナー環境でステップが使う環境変数を設定します。 ワークフロー全体あるいはジョブのための環境変数を設定することもできます。 詳細については、[`env`](#env) および [`jobs.<job_id>.env`](#jobsjob_idenv) を参照してください。

{% data reusables.repositories.actions-env-var-note %}

パブリックなアクションは、READMEファイル中で期待する環境変数を指定できます。 環境変数にシークレットを設定しようとしている場合、シークレットは `secrets` コンテキストを使って設定する必要があります。 詳細については、「[環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)」と「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

#### 例

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

ステップが失敗してもジョブが失敗にならないようにします。 `true` に設定すれば、このステップが失敗した場合にジョブを成功させることができます。

### `jobs.<job_id>.steps[*].timeout-minutes`

プロセスがkillされるまでにステップが実行できる最大の分数。

## `jobs.<job_id>.timeout-minutes`

{% data variables.product.prodname_dotcom %}で自動的にキャンセルされるまでジョブを実行する最長時間 (分)。 デフォルト: 360

タイムアウトがランナーのジョブ実行の制限時間を超えた場合、代わりに、実行の制限時間に達したときにジョブが取り消されます。 ジョブ実行の制限時間の詳細については、{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %} ホステッド ランナーに関しては「[使用量制限と課金](/actions/reference/usage-limits-billing-and-administration#usage-limits)」{% endif %}、セルフホステッド ランナーの使用制限に関しては「[セルフホステッド ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。{% ifversion fpt or ghec or ghes %}{% elsif ghae %}{% endif %}

{% note %}

**注:** {% data reusables.actions.github-token-expiration %} セルフホステッド ランナーでは、ジョブのタイムアウトが 24 時間を超える場合、トークンが制限要因になる可能性があります。 `GITHUB_TOKEN` の詳細については、「[`GITHUB_TOKEN` シークレットについて](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)」を参照してください。

{% endnote %}

## `jobs.<job_id>.strategy`

ジョブにマトリックス戦略を使うには、`jobs.<job_id>.strategy` を使用します。 {% data reusables.actions.jobs.about-matrix-strategy %} 詳細については、[ジョブにマトリックスを使用する](/actions/using-jobs/using-a-matrix-for-your-jobs)に関する記事を参照してください。

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### 例: 1 次元マトリックスの使用

{% data reusables.actions.jobs.single-dimension-matrix %}

#### 例: 多次元マトリックスの使用

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### 例: コンテキストを使ったマトリックスの作成

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### 例: 構成の展開

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### 例: 構成の追加

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

ジョブが失敗した時に、ワークフローの実行が失敗にならないようにします。 `true` に設定すれば、このジョブが失敗したときにワークフローの実行を成功させることができます。

### 例: 失敗した特定のマトリックス ジョブがワークフローの実行を失敗させないようにする

ジョブマトリックス中の特定のジョブが失敗しても、ワークフローの実行が失敗にならないようにすることができます。 たとえば、`node` が `15` に設定された実験的なジョブが失敗しても、ワークフローの実行を失敗させないようにしたいとしましょう。

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

ワークフロー中のジョブのためのサービスコンテナをホストするために使われます。 サービスコンテナは、データベースやRedisのようなキャッシュサービスの作成に役立ちます。 ランナーは自動的にDockerネットワークを作成し、サービスコンテナのライフサイクルを管理します。

コンテナを実行するようにジョブを設定した場合、あるいはステップがコンテナアクションを使う場合は、サービスもしくはアクションにアクセスするためにポートをマップする必要はありません。 Dockerは自動的に、同じDockerのユーザ定義ブリッジネットワーク上のコンテナ間のすべてのポートを公開します。 サービスコンテナは、ホスト名で直接参照できます。 ホスト名は自動的に、ワークフロー中のサービスに設定したラベル名にマップされます。

ランナーマシン上で直接実行されるようにジョブを設定し、ステップがコンテナアクションを使わないのであれば、必要なDockerサービスコンテナのポートはDockerホスト（ランナーマシン）にマップしなければなりません サービスコンテナには、localhostとマップされたポートを使ってアクセスできます。

ネットワーク サービス コンテナーの違いの詳細については、「[サービス コンテナーについて](/actions/automating-your-workflow-with-github-actions/about-service-containers)」を参照してください。

### 例: localhost の使用

この例では、nginxとredisという2つのサービスを作成します。 Dockerホストのポートを指定して、コンテナのポートを指定しなかった場合、コンテナのポートは空いているポートにランダムに割り当てられます。 {% data variables.product.prodname_dotcom %} では、割り当てられたコンテナー ポートを {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} のコンテキストに設定します。 この例では、{% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} と {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} のコンテキストを使って、サービス コンテナー ポートにアクセスできます。

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

アクションを実行するサービスコンテナとして使用するDockerイメージ。 値には、Docker Hub イメージ名またはレジストリ名を指定できます。

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### 例

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

サービス コンテナーで環境変数の `map` を設定します。

### `jobs.<job_id>.services.<service_id>.ports`

サービス コンテナーで公開するポートの `array` を設定します。

### `jobs.<job_id>.services.<service_id>.volumes`

使うサービス コンテナーにボリュームの `array` を設定します。 volumes (ボリューム) を使用すると、サービス間で、または1つのジョブのステップ間でデータを共有できます。 指定できるのは、名前付きDockerボリューム、匿名Dockerボリューム、またはホスト上のバインドマウントです。

ボリュームを指定するには、ソースパスとターゲットパスを指定してください。

`<source>:<destinationPath>`.

`<source>` は、ホスト マシン上のボリューム名または絶対パスであり、`<destinationPath>` は、コンテナー内の絶対パスです。

#### 例

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

追加のDockerコンテナリソースのオプション。 オプションのリストについては、「[`docker create` オプション](https://docs.docker.com/engine/reference/commandline/create/#options)」を参照してください。

{% warning %}

**警告:** `--network` オプションはサポートされていません。

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

ジョブとして実行する再利用可能なワークフロー ファイルの場所とバージョン。 {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}次の構文のいずれかを使います。{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### 例

{% data reusables.actions.uses-keyword-example %}

詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。

### `jobs.<job_id>.with`

ジョブを使って再利用可能なワークフローを呼び出す場合は、`with` を使って、呼び出し対象のワークフローに渡される入力のマップを指定することができます。

渡す入力は、呼び出し対象のワークフローで定義されている入力仕様と一致する必要があります。

[`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith) とは異なり、`jobs.<job_id>.with` を使って渡す入力は、呼び出し対象のワークフローの環境変数として使用できません。 代わりに、`inputs` コンテキストを使って入力を参照できます。

#### 例

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

入力の文字列識別子と入力の値で構成されるペア。 識別子は、呼び出し対象のワークフローで [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) によって定義された入力の名前と一致する必要があります。 値のデータ型は、呼び出し対象のワークフローで [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) によって定義された型と一致する必要があります。

使用できる式コンテキスト: `github` と `needs`。

### `jobs.<job_id>.secrets`

ジョブを使って再利用可能なワークフローを呼び出す場合は、`secrets` を使用して、呼び出し対象のワークフローに渡されるシークレットのマップを指定することができます。

渡すシークレットは、呼び出し対象のワークフローで定義されている名前と一致する必要があります。

#### 例

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

`inherit` キーワードは、呼び出し元ワークフローのすべてのシークレットを呼び出し対象のワークフローに渡すために使います。 これには、呼び出し元ワークフローからアクセスできるすべてのシークレット (つまり組織、リポジトリ、環境のシークレット) が含まれます。 `inherit` キーワードを使って、同じ組織内のリポジトリ間、または同じ企業内の組織間でシークレットを渡すことができます。

#### 例

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

シークレットの文字列識別子とシークレットの値で構成されるペア。 識別子は、呼び出し対象のワークフローで [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) によって定義されたシークレットの名前と一致する必要があります。

使用できる式コンテキスト: `github`、`needs`、`secrets`。
{% endif %}

## フィルター パターンのチート シート

特別なキャラクタをパス、ブランチ、タグフィルタで利用できます。

- `*`: 0 個以上の文字と一致しますが、`/` 文字とは一致しません。 たとえば、`Octo*` は `Octocat` と一致します。
- `**`: 0 個以上の任意の文字と一致します。
- `?`: 0 個または 1 個の直前の文字と一致します。
- `+`: 1 個以上の直前の文字と一致します。
- `[]` 括弧内に一覧表示されているか、範囲に含まれている 1 つの文字と一致します。 範囲には、`a-z`、`A-Z`、`0-9` のみを含めることができます。 たとえば、範囲 `[0-9a-z]` は任意の数字または小文字と一致します。 たとえば、`[CB]at` は `Cat` または`Bat` と、`[1-2]00` は `100` および `200` と一致します。
- `!`: パターンの先頭に置くと、前の肯定のパターンを否定にします。 先頭のキャラクタではない場合は、特別な意味を持ちません。

文字 `*`、`[`、`!` は YAML の特殊文字です。 パターンを `*`、`[`、`!` で開始する場合は、パターンを引用符で囲む必要があります。 また、使用する[フロー シーケンス](https://yaml.org/spec/1.2.2/#flow-sequences)に `[` と `]` の一方または両方を含むパターンがある場合は、パターンを引用符で囲む必要があります。

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

ブランチ、タグ、パスのフィルター構文の詳細については、「[`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore)」、「[`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore)」、「[`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)」を参照してください。

### ブランチやタグにマッチするパターン

| パターン | 説明 | 一致の例 |
|---------|------------------------|---------|
| `feature/*` | ワイルドカード `*` は任意の文字と一致しますが、スラッシュ (`/`) とは一致しません。 |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | ワイルドカード `**` は、ブランチおよびタグ名のスラッシュ (`/`) を含む任意の文字と一致します。 | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | ブランチあるいはタグ名に完全に一致したときにマッチします。 | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | スラッシュ (`/`) を含まないすべてのブランチおよびタグ名と一致します。 `*` 文字は YAML の特殊文字です。 パターンを `*` で開始する場合は、引用符を使う必要があります。 | `main`<br/><br/>`releases` |
| `'**'` | すべてのブランチ及びタグ名にマッチします。 これは、`branches` または `tags` フィルターを使わない場合の既定の動作です。 | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | `*` 文字は YAML の特殊文字です。 パターンを `*` で開始する場合は、引用符を使う必要があります。 | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | `v2` で始まるブランチおよびタグ名と一致します。 | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | メジャー バージョンが 1 または 2 のすべてのセマンティック バージョニング ブランチおよびタグと一致します。 | `v1.10.1`<br/><br/>`v2.0.0` |

### ファイルパスにマッチするパターン

パスパターンはパス全体にマッチしなければならず、リポジトリのルートを出発点とします。

| パターン | マッチの説明 | 一致の例 |
|---------|------------------------|-----------------|
| `'*'` | ワイルドカード `*` は任意の文字と一致しますが、スラッシュ (`/`) とは一致しません。 `*` 文字は YAML の特殊文字です。 パターンを `*` で開始する場合は、引用符を使う必要があります。 | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | `?` 文字は 0 個または 1 個の直前の文字と一致します。 | `page.js`<br/><br/>`page.jsx` |
| `'**'` | ワイルドカード `**` は、スラッシュ (`/`) を含む任意の文字と一致します。 これは、`path` フィルターを使わない場合の既定の動作です。 | `all/the/files.md` |
| `'*.js'` | ワイルドカード `*` は任意の文字と一致しますが、スラッシュ (`/`) とは一致しません。 リポジトリのルートにあるすべての `.js` ファイルと一致します。 | `app.js`<br/><br/>`index.js`
| `'**.js'` | リポジトリにあるすべての `.js` ファイルと一致します。 | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | リポジトリのルートにある `docs` ディレクトリのルート内のすべてのファイル。 | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | リポジトリのルートにある `/docs` ディレクトリ内の任意のファイル。 | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | `docs` ディレクトリ内の任意の場所にある `.md` サフィックスが付いたファイル。 | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | リポジトリの任意の場所にある `docs` ディレクトリ内の任意のファイル。 | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | リポジトリ内にあるREADME.mdファイルにマッチします。 | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | リポジトリの任意の場所にある `src` サフィックスが付いたフォルダ内の任意のファイル。 | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | リポジトリの任意の場所にあるサフィックス `-post.md` が付いたファイル。 | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | リポジトリの任意の場所にあるプレフィックス `migrate-` とサフィックス `.sql` が付いたファイル。 | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | 感嘆符 (`!`) をパターンの前で使うと否定になります。 あるファイルがあるパターンにマッチし、ファイル中でその後に定義されている否定パターンにマッチした場合、そのファイルは含まれません。 | `hello.md`<br/><br/>_［次の値に一致しない］_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | パターンは順番にチェックされます。 先行するパターンを否定するパターンで、ファイルパスが再度含まれるようになります。 | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|
