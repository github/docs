---
title: GitHub Actions のワークフロー コマンド
shortTitle: Workflow commands
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
ms.openlocfilehash: b34a96bb62a885031584f3da017fd86b7469a277
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160833'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフローコマンドについて

アクションは、 環境変数を設定する、他のアクションに利用される値を出力する、デバッグメッセージを出力ログに追加するなどのタスクを行うため、ランナーマシンとやりとりできます。

ほとんどのワークフロー コマンドが特定の形式で `echo` コマンドを使用しますが、他のコマンドはファイルへの書き込みによって呼び出されます。 詳しくは、「[環境ファイル](#environment-files)」を参照してください。

### 例

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

**注:** ワークフロー コマンドとパラメーター名では、大文字と小文字は区別されません。

{% endnote %}

{% warning %}

**警告:** コマンド プロンプトを使用している場合は、ワークフロー コマンドを使うときに二重引用符 (`"`) を省略してください。

{% endwarning %}

## ワークフローコマンドを使ったツールキット関数へのアクセス

[actions/toolkit](https://github.com/actions/toolkit) には、ワークフロー コマンドとして実行できる多数の関数が含まれています。 `::` 構文を使用して、YAML ファイル内でワークフロー コマンドを実行してください。そうすると、それらのコマンドが `stdout` を通じてランナーに送信されます。

{%- ifversion actions-save-state-set-output-envs %} たとえば、コードを使用してエラー注釈を作成する代わりに、以下のようにします。

```javascript{:copy}
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### 例: エラーの注釈の作成

ワークフローで `error` コマンドを使用して、同じエラー注釈を作成できます。

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

{% endpowershell %} {%- else %} たとえば、コードを使用して出力を設定する代わりに、以下のようにします。

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### 例: 値の設定

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

{% endif %}

以下の表は、ワークフロー内で使えるツールキット関数を示しています。

| ツールキット関数 | 等価なワークフローのコマンド |
| ----------------- |  ------------- |
| `core.addPath`    | `GITHUB_PATH` 環境ファイルを使用してアクセス可能 |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | `GITHUB_ENV` 環境ファイルを使用してアクセス可能 |
| `core.getInput`   | `INPUT_{NAME}` 環境変数を使用してアクセス可能 |
| `core.getState`   | `STATE_{NAME}` 環境変数を使用してアクセス可能 |
| `core.isDebug`    |  `RUNNER_DEBUG` 環境変数を使用してアクセス可能 |
{%- ifversion actions-job-summaries %} | `core.summary` | 環境ファイル `GITHUB_STEP_SUMMARY` を使用してアクセス可能 | {%- endif %} |`core.saveState`  | {% ifversion actions-save-state-set-output-envs %} 環境ファイル `GITHUB_STATE`{% else %}`save-state`{% endif %} を使用してアクセス可能 | | `core.setCommandEcho` | `echo` | | `core.setFailed` | `::error` と `exit 1` のショートカットとして使用 | | `core.setOutput`  |{% ifversion actions-save-state-set-output-envs %}環境ファイル `GITHUB_OUTPUT`{% else %}`set-output`{% endif %} を使用してアクセス可能 | | `core.setSecret`  | `add-mask``core.startGroup` | `group``core.warning`    | `warning` |

{% ifversion actions-save-state-set-output-envs %}{% else %}
## 出力パラメータの設定

アクションの出力パラメータを設定します。

```{:copy}
::set-output name={name}::{value}
```

あるいは、出力パラメータをアクションのメタデータファイル中で宣言することもできます。 詳細については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)」を参照してください。

環境変数を作成し、ワークフロー コマンドで使用することで、出力パラメーターを設定するための複数行文字列をエスケープできます。 詳しくは、「[環境変数の設定](#setting-an-environment-variable)」を参照してください。

### 例: 出力パラメーターの設定

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

## デバッグメッセージの設定

デバッグメッセージをログに出力します。 このコマンドによって設定されたデバッグ メッセージをログで表示するには、`ACTIONS_STEP_DEBUG` という名前のシークレットを作成し、値を `true` に設定する必要があります。 詳細については、「[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)」(デバッグ ログの有効化) を参照してください。

```{:copy}
::debug::{message}
```

### 例: デバッグ メッセージの設定

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

## 通知メッセージの設定

通知メッセージを作成し、ログにそのメッセージを出力します。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### 例: 通知メッセージの設定

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

## 警告メッセージの設定

警告メッセージを作成し、ログにそのメッセージを出力します。 {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### 例: 警告メッセージの設定

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

### 例: エラー メッセージの設定

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

展開可能なグループをログ中に作成します。 グループを作成するには、`group` コマンドを使用して `title` を指定します。 ログに出力する `group` と `endgroup` コマンド間のすべての内容は、ログで展開可能なエントリ内で入れ子になります。

```{:copy}
::group::{title}
::endgroup::
```

### 例: ログの行のグループ化

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

値をマスクすることにより、文字列または値がログに出力されることを防ぎます。 空白で区切られた、マスクされる各単語は、`*` という文字に置き換えられます。 マスクの `value` には、環境変数または文字列を使用できます。 値をマスクすると、シークレットとして扱われ、ランナーで編集されます。 たとえば、値をマスクした後は、その値を出力として設定することはできません。

### 例: 文字列のマスク

ログに `"Mona The Octocat"` を出力すると、`"***"` と表示されます。

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

**警告:** シークレットをビルド ログに出力したり、その他のワークフロー コマンド内で使ったりする前に、シークレットを "add-mask" に必ず登録してください。

{% endwarning %}

### 例: 環境変数のマスク

ログに変数 `MY_NAME` または値 `"Mona The Octocat"` を出力すると、`"Mona The Octocat"` の代わりに `"***"` と表示されます。

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

ワークフロー コマンドの処理を停止するには、固有のトークンを `stop-commands` に渡します。 ワークフロー コマンドの処理を再開するには、ワークフロー コマンドを停止するために使用したトークンと同じものを渡します。

{% warning %}

**警告:** ランダムに生成された、実行ごとに固有のトークンを使用するようにしてください。

{% endwarning %}

```{:copy}
::{endtoken}::
```

### 例: ワークフロー コマンドの停止と開始

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

{% ifversion actions-save-state-set-output-envs %}{% else %}
## コマンド出力のエコー

ワークフロー コマンドのエコーを有効または無効にします。 たとえば、ワークフローで `set-output` コマンドを使用すると、出力パラメーターが設定されますが、ワークフロー実行のログにはコマンド自体は表示されません。 コマンドのエコーを有効にした場合、`::set-output name={name}::{value}` のようにコマンドがログに表示されます。

```{:copy}
::echo::on
::echo::off
```

コマンドのエコーは既定では無効になっています。 ただし、コマンドの処理中にエラーが発生した場合は、ワークフロー コマンドがエコーされます。

`add-mask`、`debug`、`warning`、`error` コマンドは、出力が既にログにエコーされるようになっているため、エコーをサポートしていません。

`ACTIONS_STEP_DEBUG` シークレットを使用してステップのデバッグ ログを有効にすることで、コマンドのエコーをグローバルに有効にすることもできます。 詳しくは、「[デバッグ ロギングの有効化](/actions/managing-workflow-runs/enabling-debug-logging)」をご覧ください。 対照的に、`echo` ワークフロー コマンドを使用すると、リポジトリ内のすべてのワークフローに対してコマンドのエコーを有効にするのではなく、より詳細なレベルで有効にすることができます。

### 例: コマンドのエコーの切り替え

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

上記の例では、次の行がログに出力されます。

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

ログには 2 番目の `set-output` と `echo` ワークフロー コマンドのみが含まれています。これは、それらのコマンドが実行されたときにのみコマンドのエコーが有効になったからです。 出力パラメーターは、常にエコーされるとは限りませんが、すべての場合において設定されます。
 
{% endif %}

## pre及びpostアクションへの値の送信

{% ifversion actions-save-state-set-output-envs %}`GITHUB_STATE` にあるファイルに書き込むことで、ワークフローの `pre:` または `post:` アクションと共有するための環境変数を作成できます。{% else %}`save-state` コマンドを使用して、ワークフローの `pre:`または `post:` アクションと共有するための環境変数を作成できます{% endif %}。 たとえば、`pre:` アクションでファイルを作成し、そのファイルの場所を `main:` アクションに渡し、`post:` アクションを使用してファイルを削除できます。 あるいは、`main:` アクションでファイルを作成し、そのファイルの場所を `post:` アクションに渡し、さらに `post:` アクションを使用してファイルを削除することもできます。

複数の `pre:` または `post:` アクションがある場合は、{% ifversion actions-save-state-set-output-envs %}`GITHUB_STATE` に書き込まれた{% else %}`save-state` が使用された{% endif %}アクションで保存された値にのみアクセスできます。 `post:` アクションについて詳しくは、「[{% data variables.product.prodname_actions %} のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions#runspost)」をご覧ください。

{% ifversion actions-save-state-set-output-envs %}`GITHUB_STATE` ファイルはアクション内でのみ使用できます{% else %}`save-state` コマンドはアクション内でのみ実行でき、YAML ファイルでは使用できません{% endif %}。 保存された値は、`STATE_` というプレフィックスが付いた環境変数として保存されます。

{% ifversion actions-save-state-set-output-envs %} この例では、JavaScript を使用して `GITHUB_STATE` ファイルに書き込みます。 結果の環境変数は、`STATE_processID` という名前になり、値が `12345` になります。

```javascript{:copy}
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

{% else %} この例では、JavaScript を使用して `save-state` コマンドを実行します。 結果の環境変数は、`STATE_processID` という名前になり、値が `12345` になります。

```javascript{:copy}
console.log('::save-state name=processID::12345')
```
{% endif %}

この後、`STATE_processID` 変数は `main` アクションで実行されるクリーンアップ スクリプトでのみ利用できます。 この例は `main` で実行され、JavaScript を使用して `STATE_processID` 環境変数に割り当てられた値を表示します。

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## 環境ファイル

ワークフローの実行中に、ランナーは特定のアクションを実行する際に使用できる一時ファイルを生成します。 これらのファイルへのパスは、環境変数を介して公開されます。 コマンドを適切に処理するには、これらのファイルに書き込むときに UTF-8 エンコーディングを使用する必要があります。 複数のコマンドを、改行で区切って同じファイルに書き込むことができます。

次の例のほどんどのコマンドでは、エコー文字列に二重引用符を使います。これにより、シェル変数名に対して `$` などの文字の補間が試行されます。 引用符で囲まれた文字列でリテラル値を常に使用するには、代わりに単一引用符を使用できます。

{% powershell %}

{% note %}

**注:** PowerShell バージョン 5.1 以下 (`shell: powershell`) では UTF-8 が既定で使用されないため、UTF-8 エンコードを指定する必要があります。 次に例を示します。

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core バージョン 6 以上 (`shell: pwsh`) では、UTF-8 が既定で使用されます。 次に例を示します。

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

- PowerShell バージョン 6 以上を使用:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- PowerShell バージョン 5.1 以下を使用:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

環境変数を定義または更新し、これを `GITHUB_ENV` 環境ファイルに書き込むことで、ワークフロー ジョブの後続のステップで環境変数が利用できるようになります。 環境変数を作成または更新するステップは、新しい値にアクセスできませんが、ジョブにおける後続のすべてのステップはアクセスできます。 環境変数の名前では、大文字と小文字が区別され、句読点を含めることができます。 詳しくは、「[環境変数](/actions/learn-github-actions/environment-variables)」をご覧ください。

### 例

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

{% warning %}

**警告:** ランダムに生成された、実行ごとに固有の区切り記号を使用するようにしてください。 詳細については、「[スクリプト インジェクションのリスクを理解する](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)」を参照してください。

{% endwarning %}

#### 例

この例では、区切り文字として `EOF` を使用し、`JSON_RESPONSE` 環境変数を `curl` の応答の値に設定します。

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
## 出力パラメータの設定

ステップの出力パラメーターを設定します。 後で出力値を取得するには、ステップで `id` を定義する必要があることに注意してください。

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

### 例

{% bash %}

この例では、`SELECTED_COLOR` 出力パラメーターを設定し、後でそれを取得する方法を示します。

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

{% raw %} この例では、`SELECTED_COLOR` 出力パラメーターを設定し、後でそれを取得する方法を示します。

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

## ジョブの概要の追加

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

ジョブごとにいくつかのカスタム Markdown を設定して、ワークフロー実行の概要ページに表示されるようにすることができます。 ジョブの概要を使用して、テスト結果の概要といった独自の内容を表示およびグループ化できます。これにより、ワークフロー実行の結果を表示するユーザーが、実行に関連する重要な情報 (エラーなど) を確認するためにログを調べる必要がなくなります。

ジョブの概要では [{% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/) がサポートされていて、ステップの Markdown コンテンツを `GITHUB_STEP_SUMMARY` 環境ファイルに追加できます。 `GITHUB_STEP_SUMMARY` は、ジョブのステップごとに固有のものです。 `GITHUB_STEP_SUMMARY` が参照するステップごとのファイルについて詳しくは、「[環境ファイル](#environment-files)」をご覧ください。

ジョブが完了すると、ジョブにおけるすべてのステップの概要が 1 つのジョブの概要にグループ化され、ワークフロー実行の概要ページに表示されます。 複数のジョブが概要を生成する場合、ジョブの概要の順序はジョブの完了時間順になります。

### 例

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

![Markdown の概要の例](/assets/images/actions-job-summary-simple-example.png)

### 複数行の Markdown コンテンツ

複数行の Markdown コンテンツの場合は、`>>` を使用して、現在のステップのコンテンツを連続して追加できます。 追加操作のたびに、改行文字が自動的に追加されます。

#### 例

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

### ジョブの概要の上書き

現在のステップのすべてのコンテンツをクリアするには、`>` を使用して、以前に追加したコンテンツを上書きします。

#### 例

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

### ジョブの概要の削除

現在のステップの概要を完全に削除するには、`GITHUB_STEP_SUMMARY` が参照するファイルを削除します。

#### 例

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

ステップが完了すると、ジョブの概要がアップロードされ、後続のステップは以前にアップロードされた Markdown コンテンツを変更できません。 概要では、誤って追加された可能性があるシークレットが自動的にマスクされます。 ジョブの概要に削除する必要がある機密情報が含まれている場合は、ワークフロー実行全体を削除して、そのジョブの概要をすべて削除できます。 詳しくは、「[ワークフロー実行の削除](/actions/managing-workflow-runs/deleting-a-workflow-run)」をご覧ください。

### ステップの分離と制限

ジョブの概要はステップ間で分離されていて、各ステップのサイズは最大 1 MiB に制限されています。 分離がステップ間で適用されるため、1 つのステップにおいて Markdown の形式が誤っている可能性があっても、後続のステップで Markdown のレンダリングが中断することはありません。 ステップに 1 MiB を超えるコンテンツが追加された場合、ステップのアップロードは失敗し、エラーの注釈が作成されます。 ジョブの概要のアップロード エラーは、ステップまたはジョブの全体的な状態には影響しません。 ジョブごとに、ステップのジョブの概要が最大 20 件表示されます。

{% endif %}

## システムパスの追加

システムの `PATH` 変数の先頭にディレクトリを追加し、自動的に現在のジョブにおける後続のすべてのアクションで利用できるようにします。現在実行中のアクションは、更新されたパス変数にアクセスできません。 ジョブに現在定義されているパスを確認するには、ステップまたはアクションで `echo "$PATH"` を使うことができます。

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

### 例

{% bash %}

この例では、ユーザーの `$HOME/.local/bin` ディレクトリを `PATH` に追加する方法を示しています。

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

この例では、ユーザーの `$env:HOMEPATH/.local/bin` ディレクトリを `PATH` に追加する方法を示しています。

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
