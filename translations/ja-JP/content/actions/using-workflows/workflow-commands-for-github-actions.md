---
title: GitHub Actionsのワークフローコマンド
shortTitle: ワークフロー コマンド
intro: ワークフロー内あるいはアクションのコード内でシェルコマンドを実行する際には、ワークフローコマンドを利用できます。
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフローコマンドについて

アクションは、 環境変数を設定する、他のアクションに利用される値を出力する、デバッグメッセージを出力ログに追加するなどのタスクを行うため、ランナーマシンとやりとりできます。

ほとんどのワークフローコマンドは特定の形式で `echo` コマンドを使用しますが、他のワークフローコマンドはファイルへの書き込みによって呼び出されます。 詳しい情報については、「[環境ファイル](#environment-files)」を参照してください。

### サンプル

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

**ノート:** ワークフローコマンドおよびパラメータ名では、大文字と小文字は区別されません。

{% endnote %}

{% warning %}

**警告：** コマンドプロンプトを使っているなら、ワークフローコマンドを使う際にダブルクォート文字（`"`）は省いてください。

{% endwarning %}

## ワークフローコマンドを使ったツールキット関数へのアクセス

[actions/toolkit](https://github.com/actions/toolkit)には、ワークフローコマンドとして実行できる多くの関数があります。 `::`構文を使って、YAMLファイル内でワークフローコマンドを実行してください。それらのコマンドは`stdout`を通じてランナーに送信されます。 たとえば、コードを使用して出力を設定する代わりに、以下のようにします。

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Example: Setting a value

ワークフローで `set-output` コマンドを使用して、同じ値を設定できます。

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

以下の表は、ワークフロー内で使えるツールキット関数を示しています。

| ツールキット関数              | 等価なワークフローのコマンド                                             |
| --------------------- | ---------------------------------------------------------- |
| `core.addPath`        | Accessible using environment file `GITHUB_PATH`            |
| `core.debug`          | `debug` |{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
| `core.notice`         | `notice` 
{% endif %}
| `core.error`          | `error`                                                    |
| `core.endGroup`       | `endgroup`                                                 |
| `core.exportVariable` | Accessible using environment file `GITHUB_ENV`             |
| `core.getInput`       | 環境変数の`INPUT_{NAME}`を使ってアクセス可能                              |
| `core.getState`       | 環境変数の`STATE_{NAME}`を使ってアクセス可能                              |
| `core.isDebug`        | 環境変数の`RUNNER_DEBUG`を使ってアクセス可能                              |
{%- ifversion actions-job-summaries %}
| `core.summary` | Accessible using environment variable `GITHUB_STEP_SUMMARY` |
{%- endif %}
| `core.saveState`  | `save-state` | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Used as a shortcut for `::error` and `exit 1` | | `core.setOutput`  | `set-output` | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

## 出力パラメータの設定

アクションの出力パラメータを設定します。

```{:copy}
::set-output name={name}::{value}
```

あるいは、出力パラメータをアクションのメタデータファイル中で宣言することもできます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)」を参照してください。

### Example: Setting an output parameter

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %}

## デバッグメッセージの設定

デバッグメッセージをログに出力します。 ログでこのコマンドにより設定されたデバッグメッセージを表示するには、`ACTIONS_STEP_DEBUG` という名前のシークレットを作成し、値を `true` に設定する必要があります。 詳しい情報については、「[デバッグログの有効化](/actions/managing-workflow-runs/enabling-debug-logging)」を参照してください。

```{:copy}
::debug::{message}
```

### Example: Setting a debug message

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

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}

## Setting a notice message

Creates a notice message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a notice message

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
{% endif %}

## 警告メッセージの設定

警告メッセージを作成し、ログにそのメッセージを出力します。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting a warning message

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

## エラーメッセージの設定

エラーメッセージを作成し、ログにそのメッセージを出力します。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Example: Setting an error message

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

## ログの行のグループ化

展開可能なグループをログ中に作成します。 グループを作成するには、`group`コマンドを使って`title`を指定してください。 `group`と`endgroup`コマンド間でログに出力したすべての内容は、ログ中の展開可能なエントリ内にネストされます。

```{:copy}
::group::{title}
::endgroup::
```

### Example: Grouping log lines

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

![ワークフローの実行ログ中の折りたたみ可能なグループ](/assets/images/actions-log-group.png)

## ログ中での値のマスク

```{:copy}
::add-mask::{value}
```

値をマスクすることにより、文字列または値がログに出力されることを防ぎます。 空白で分離された、マスクされた各語は "`*`" という文字で置き換えられます。 マスクの `value` には、環境変数または文字列を持ちいることができます。 When you mask a value, it is treated as a secret and will be redacted on the runner. For example, after you mask a value, you won't be able to set that value as an output.

### Example: Masking a string

ログに `"Mona The Octocat"` を出力すると、`"***"` が表示されます。

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

### Example: Masking an environment variable

変数 `MY_NAME` または値 `"Mona The Octocat"` をログに出力すると。`"Mona The Octocat"` の代わりに `"***"` が表示されます。

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

## ワークフローコマンドの停止と開始

ワークフローコマンドの処理を停止します。 この特殊コマンドを使うと、意図せずワークフローコマンドを実行することなくいかなるログも取れます。 たとえば、コメントがあるスクリプト全体を出力するためにログ取得を停止できます。

```{:copy}
::stop-commands::{endtoken}
```

To stop the processing of workflow commands, pass a unique token to `stop-commands`. To resume processing workflow commands, pass the same token that you used to stop workflow commands.

{% warning %}

**Warning:** Make sure the token you're using is randomly generated and unique for each run.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Example: Stopping and starting workflow commands

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

## Echoing command outputs

Enables or disables echoing of workflow commands. For example, if you use the `set-output` command in a workflow, it sets an output parameter but the workflow run's log does not show the command itself. If you enable command echoing, then the log shows the command, such as `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

Command echoing is disabled by default. However, a workflow command is echoed if there are any errors processing the command.

The `add-mask`, `debug`, `warning`, and `error` commands do not support echoing because their outputs are already echoed to the log.

You can also enable command echoing globally by turning on step debug logging using the `ACTIONS_STEP_DEBUG` secret. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)". In contrast, the `echo` workflow command lets you enable command echoing at a more granular level, rather than enabling it for every workflow in a repository.

### Example: Toggling command echoing

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

The example above prints the following lines to the log:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Only the second `set-output` and `echo` workflow commands are included in the log because command echoing was only enabled when they were run. Even though it is not always echoed, the output parameter is set in all cases.

## pre及びpostアクションへの値の送信

`save-state`コマンドを使って、ワークフローの`pre:`あるいは`post:`アクションと共有するための環境変数を作成できます。 たとえば、`pre:`アクションでファイルを作成し、そのファイルの場所を`main:`アクションに渡し、`post:`アクションを使ってそのファイルを削除できます。 あるいは、ファイルを`main:`アクションで作成し、そのファイルの場所を`post:`アクションに渡し、`post:`アクションを使ってそのファイルを削除することもできます。

複数の`pre:`あるいは`post:`アクションがある場合、保存された値にアクセスできるのは`save-state`が使われたアクションの中でのみです。 `post:`アクションに関する詳しい情報については「[{% data variables.product.prodname_actions %}のためのメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)」を参照してください。

`save-state`コマンドはアクション内でしか実行できず、YAMLファイルでは利用できません。 保存された値は、`STATE_`プレフィックス付きで環境変数として保存されます。

以下の例はJavaScriptを使って`save-state`コマンドを実行します。 結果の環境変数は`STATE_processID`という名前になり、`12345`という値を持ちます。

```javascript{:copy}
console.log('::save-state name=processID::12345')
```

そして、`STATE_processID`変数は`main`アクションの下で実行されるクリーンアップスクリプトからのみ利用できます。 以下の例は`main`を実行し、JavaScriptを使って環境変数`STATE_processID`に割り当てられた値を表示します。

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Environment files

ワークフローの実行中に、ランナーは特定のアクションを実行する際に使用できる一時ファイルを生成します。 これらのファイルへのパスは、環境変数を介して公開されます。 コマンドを適切に処理するには、これらのファイルに書き込むときに UTF-8 エンコーディングを使用する必要があります。 複数のコマンドを、改行で区切って同じファイルに書き込むことができます。

{% powershell %}

{% note %}

**Note:** PowerShell versions 5.1 and below (`shell: powershell`) do not use UTF-8 by default, so you must specify the UTF-8 encoding. 例:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core versions 6 and higher (`shell: pwsh`) use UTF-8 by default. 例:

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

## 環境変数の設定

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Using PowerShell version 6 and higher:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- Using PowerShell version 5.1 and below:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

You can make an environment variable available to any subsequent steps in a workflow job by defining or updating the environment variable and writing this to the `GITHUB_ENV` environment file. The step that creates or updates the environment variable does not have access to the new value, but all subsequent steps in a job will have access. The names of environment variables are case-sensitive, and you can include punctuation. 詳しい情報については、「[環境変数](/actions/learn-github-actions/environment-variables)」を参照してください。

### サンプル

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

### 複数行の文字列

複数行の文字列の場合、次の構文で区切り文字を使用できます。

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

#### サンプル

This example uses `EOF` as a delimiter, and sets the `JSON_RESPONSE` environment variable to the value of the `curl` response.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.lab >> $GITHUB_ENV
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
      (Invoke-WebRequest -Uri "https://example.lab").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-job-summaries %}

## Adding a job summary

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

You can set some custom Markdown for each job so that it will be displayed on the summary page of a workflow run. You can use job summaries to display and group unique content, such as test result summaries, so that someone viewing the result of a workflow run doesn't need to go into the logs to see important information related to the run, such as failures.

Job summaries support [{% data variables.product.prodname_dotcom %} flavored Markdown](https://github.github.com/gfm/), and you can add your Markdown content for a step to the `GITHUB_STEP_SUMMARY` environment file. `GITHUB_STEP_SUMMARY` is unique for each step in a job. For more information about the per-step file that `GITHUB_STEP_SUMMARY` references, see "[Environment files](#environment-files)."

When a job finishes, the summaries for all steps in a job are grouped together into a single job summary and are shown on the workflow run summary page. If multiple jobs generate summaries, the job summaries are ordered by job completion time.

### サンプル

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

![Markdown summary example](/assets/images/actions-job-summary-simple-example.png)

### Multiline Markdown content

For multiline Markdown content, you can use `>>` to continuously append content for the current step. With every append operation, a newline character is automatically added.

#### サンプル

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

### Overwriting job summaries

To clear all content for the current step, you can use `>` to overwrite any previously added content.

#### サンプル

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

### Removing job summaries

To completely remove a summary for the current step, the file that `GITHUB_STEP_SUMMARY` references can be deleted.

#### サンプル

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

After a step has completed, job summaries are uploaded and subsequent steps cannot modify previously uploaded Markdown content. Summaries automatically mask any secrets that might have been added accidentally. If a job summary contains sensitive information that must be deleted, you can delete the entire workflow run to remove all its job summaries. For more information see "[Deleting a workflow run](/actions/managing-workflow-runs/deleting-a-workflow-run)."

### Step isolation and limits

Job summaries are isolated between steps and each step is restricted to a maximum size of 1MiB. Isolation is enforced between steps so that potentially malformed Markdown from a single step cannot break Markdown rendering for subsequent steps. If more than 1MiB of content is added for a step, then the upload for the step will fail and an error annotation will be created. Upload failures for job summaries do not affect the overall status of a step or a job. A maximum of 20 job summaries from steps are displayed per job.

{% endif %}

## システムパスの追加

Prepends a directory to the system `PATH` variable and automatically makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. ジョブに現在定義されているパスを見るには、ステップもしくはアクション中で`echo "$PATH"`を使うことができます。

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

### サンプル

{% bash %}

この例は、ユーザの`$HOME/.local/bin`ディレクトリを`PATH`に追加する方法を示しています。

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

This example demonstrates how to add the user `$env:HOMEPATH/.local/bin` directory to `PATH`:

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
