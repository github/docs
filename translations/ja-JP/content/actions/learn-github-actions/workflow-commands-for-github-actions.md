---
title: GitHub Actionsのワークフローコマンド
shortTitle: ワークフロー コマンド
intro: ワークフロー内あるいはアクションのコード内でシェルコマンドを実行する際には、ワークフローコマンドを利用できます。
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## ワークフローコマンドについて

アクションは、 環境変数を設定する、他のアクションに利用される値を出力する、デバッグメッセージを出力ログに追加するなどのタスクを行うため、ランナーマシンとやりとりできます。

ほとんどのワークフローコマンドは特定の形式で `echo` コマンドを使用しますが、他のワークフローコマンドはファイルへの書き込みによって呼び出されます。 詳しい情報については、「[環境ファイル](#environment-files)」を参照してください。

``` bash
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% note %}

**ノート:** ワークフローコマンドおよびパラメータ名では、大文字と小文字は区別されません。

{% endnote %}

{% warning %}

**警告：** コマンドプロンプトを使っているなら、ワークフローコマンドを使う際にダブルクォート文字（`"`）は省いてください。

{% endwarning %}

## ワークフローコマンドを使ったツールキット関数へのアクセス

[actions/toolkit](https://github.com/actions/toolkit)には、ワークフローコマンドとして実行できる多くの関数があります。 `::`構文を使って、YAMLファイル内でワークフローコマンドを実行してください。それらのコマンドは`stdout`を通じてランナーに送信されます。 たとえば、コードを使用して出力を設定する代わりに、以下のようにします。

```javascript
core.setOutput('SELECTED_COLOR', 'green');
```

ワークフローで `set-output` コマンドを使用して、同じ値を設定できます。

{% raw %}
``` yaml
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

以下の表は、ワークフロー内で使えるツールキット関数を示しています。

| ツールキット関数              | 等価なワークフローのコマンド                                                        |
| --------------------- | --------------------------------------------------------------------- |
| `core.addPath`        | Accessible using environment file `GITHUB_PATH`                       |
| `core.debug`          | `debug` |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}
| `core.notice`         | `notice` 
{% endif %}
| `core.error`          | `error`                                                               |
| `core.endGroup`       | `endgroup`                                                            |
| `core.exportVariable` | Accessible using environment file `GITHUB_ENV`                        |
| `core.getInput`       | 環境変数の`INPUT_{NAME}`を使ってアクセス可能                                         |
| `core.getState`       | 環境変数の`STATE_{NAME}`を使ってアクセス可能                                         |
| `core.isDebug`        | 環境変数の`RUNNER_DEBUG`を使ってアクセス可能                                         |
| `core.saveState`      | `save-state`                                                          |
| `core.setFailed`      | `::error`及び`exit 1`のショートカットとして使われる                                    |
| `core.setOutput`      | `set-output`                                                          |
| `core.setSecret`      | `add-mask`                                                            |
| `core.startGroup`     | `group`                                                               |
| `core.warning`        | `warning`                                                             |

## 出力パラメータの設定

```
::set-output name={name}::{value}
```

アクションの出力パラメータを設定します。

あるいは、出力パラメータをアクションのメタデータファイル中で宣言することもできます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions#outputs)」を参照してください。

### サンプル

``` bash
echo "::set-output name=action_fruit::strawberry"
```

## デバッグメッセージの設定

```
::debug::{message}
```

デバッグメッセージをログに出力します。 ログでこのコマンドにより設定されたデバッグメッセージを表示するには、`ACTIONS_STEP_DEBUG` という名前のシークレットを作成し、値を `true` に設定する必要があります。 詳しい情報については、「[デバッグログの有効化](/actions/managing-workflow-runs/enabling-debug-logging)」を参照してください。

### サンプル

``` bash
echo "::debug::Set the Octocat variable"
```

{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 or ghec %}

## Setting a notice message

```
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

Creates a notice message and prints the message to the log. {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### サンプル

``` bash
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endif %}

## 警告メッセージの設定

```
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

警告メッセージを作成し、ログにそのメッセージを出力します。 {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### サンプル

``` bash
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

## エラーメッセージの設定

```
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

エラーメッセージを作成し、ログにそのメッセージを出力します。 {% data reusables.actions.message-annotation-explanation %}

{% data reusables.actions.message-parameters %}

### サンプル

``` bash
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

## ログの行のグループ化

```
::group::{title}
::endgroup::
```

展開可能なグループをログ中に作成します。 グループを作成するには、`group`コマンドを使って`title`を指定してください。 `group`と`endgroup`コマンド間でログに出力したすべての内容は、ログ中の展開可能なエントリ内にネストされます。

### サンプル

```bash
echo "::group::My title"
echo "Inside group"
echo "::endgroup::"
```

![ワークフローの実行ログ中の折りたたみ可能なグループ](/assets/images/actions-log-group.png)

## ログ中での値のマスク

```
::add-mask::{value}
```

値をマスクすることにより、文字列または値がログに出力されることを防ぎます。 空白で分離された、マスクされた各語は "`*`" という文字で置き換えられます。 マスクの `value` には、環境変数または文字列を持ちいることができます。

### 文字列をマスクするサンプル

ログに `"Mona The Octocat"` を出力すると、`"***"` が表示されます。

```bash
echo "::add-mask::Mona The Octocat"
```

### 環境変数をマスクするサンプル

変数 `MY_NAME` または値 `"Mona The Octocat"` をログに出力すると。`"Mona The Octocat"` の代わりに `"***"` が表示されます。

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

## ワークフローコマンドの停止と開始

`::stop-commands::{endtoken}`

ワークフローコマンドの処理を停止します。 この特殊コマンドを使うと、意図せずワークフローコマンドを実行することなくいかなるログも取れます。 たとえば、コメントがあるスクリプト全体を出力するためにログ取得を停止できます。

To stop the processing of workflow commands, pass a unique token to `stop-commands`. To resume processing workflow commands, pass the same token that you used to stop workflow commands.

{% warning %}

**Warning:** Make sure the token you're using is randomly generated and unique for each run. As demonstrated in the example below, you can generate a unique hash of your `github.token` for each run.

{% endwarning %}

```
::{endtoken}::
```

### Example stopping and starting workflow commands

{% raw %}

```yaml
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: disable workflow commands
        run: |
          echo '::warning:: this is a warning'
          echo "::stop-commands::`echo -n ${{ github.token }} | sha256sum | head -c 64`"
          echo '::warning:: this will NOT be a warning'
          echo "::`echo -n ${{ github.token }} | sha256sum | head -c 64`::"
          echo '::warning:: this is a warning again'
```

{% endraw %}

## pre及びpostアクションへの値の送信

`save-state`コマンドを使って、ワークフローの`pre:`あるいは`post:`アクションと共有するための環境変数を作成できます。 たとえば、`pre:`アクションでファイルを作成し、そのファイルの場所を`main:`アクションに渡し、`post:`アクションを使ってそのファイルを削除できます。 あるいは、ファイルを`main:`アクションで作成し、そのファイルの場所を`post:`アクションに渡し、`post:`アクションを使ってそのファイルを削除することもできます。

複数の`pre:`あるいは`post:`アクションがある場合、保存された値にアクセスできるのは`save-state`が使われたアクションの中でのみです。 `post:`アクションに関する詳しい情報については「[{% data variables.product.prodname_actions %}のためのメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions#post)」を参照してください。

`save-state`コマンドはアクション内でしか実行できず、YAMLファイルでは利用できません。 保存された値は、`STATE_`プレフィックス付きで環境変数として保存されます。

以下の例はJavaScriptを使って`save-state`コマンドを実行します。 結果の環境変数は`STATE_processID`という名前になり、`12345`という値を持ちます。

``` javascript
console.log('::save-state name=processID::12345')
```

そして、`STATE_processID`変数は`main`アクションの下で実行されるクリーンアップスクリプトからのみ利用できます。 以下の例は`main`を実行し、JavaScriptを使って環境変数`STATE_processID`に割り当てられた値を表示します。

``` javascript
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## 環境ファイル

ワークフローの実行中に、ランナーは特定のアクションを実行する際に使用できる一時ファイルを生成します。 これらのファイルへのパスは、環境変数を介して公開されます。 コマンドを適切に処理するには、これらのファイルに書き込むときに UTF-8 エンコーディングを使用する必要があります。 複数のコマンドを、改行で区切って同じファイルに書き込むことができます。

{% warning %}

**Warning:** On Windows, legacy PowerShell (`shell: powershell`) does not use UTF-8 by default. 正しいエンコーディングを使用してファイルを書き込むようにしてください。 たとえば、パスを設定するときに UTF-8 エンコーディングを設定する必要があります。

```yaml
jobs:
  legacy-powershell-example:
    uses: windows-2019
    steps:
      - shell: powershell
        run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

Or switch to PowerShell Core, which defaults to UTF-8:

```yaml
jobs:
  modern-pwsh-example:
    uses: windows-2019
    steps:
      - shell: pwsh
        run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Append # no need for -Encoding utf8
```

More detail about UTF-8 and PowerShell Core found on this great [Stack Overflow answer](https://stackoverflow.com/a/40098904/162694):

> ### Optional reading: The cross-platform perspective: PowerShell _Core_:
> 
> [PowerShell is now cross-platform](https://blogs.msdn.microsoft.com/powershell/2016/08/18/powershell-on-linux-and-open-source-2/), via its **[PowerShell _Core_](https://github.com/PowerShell/PowerShell)** edition, whose encoding - sensibly - ***defaults to ***BOM-less UTF-8******, in line with Unix-like platforms.

{% endwarning %}

## 環境変数の設定

``` bash
echo "{name}={value}" >> $GITHUB_ENV
```

Creates or updates an environment variable for any steps running next in a job. The step that creates or updates the environment variable does not have access to the new value, but all subsequent steps in a job will have access. 環境変数では、大文字と小文字が区別され、句読点を含めることができます。

{% note %}

**Note:** Environment variables must be explicitly referenced using the [`env` context](/actions/reference/context-and-expression-syntax-for-github-actions#env-context) in expression syntax or through use of the `$GITHUB_ENV` file directly; environment variables are not implicitly available in shell commands.

{% endnote %}

### サンプル

{% raw %}
```
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

### 複数行の文字列

複数行の文字列の場合、次の構文で区切り文字を使用できます。

```
{name}<<{delimiter}
{value}
{delimiter}
```

#### サンプル

この例では、区切り文字として `EOF` を使用し、`JSON_RESPONSE` 環境変数を cURL レスポンスの値に設定します。
```yaml
steps:
  - name: Set the value
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://httpbin.org/json >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

## システムパスの追加

``` bash
echo "{path}" >> $GITHUB_PATH
```

Prepends a directory to the system `PATH` variable and automatically makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. ジョブに現在定義されているパスを見るには、ステップもしくはアクション中で`echo "$PATH"`を使うことができます。

### サンプル

この例は、ユーザの`$HOME/.local/bin`ディレクトリを`PATH`に追加する方法を示しています。

``` bash
echo "$HOME/.local/bin" >> $GITHUB_PATH
```
