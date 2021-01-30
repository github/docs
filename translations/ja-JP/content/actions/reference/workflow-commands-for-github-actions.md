---
title: GitHub Actionsのワークフローコマンド
shortTitle: ワークフロー コマンド
intro: ワークフロー内あるいはアクションのコード内でシェルコマンドを実行する際には、ワークフローコマンドを利用できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### ワークフローコマンドについて

アクションは、 環境変数を設定する、他のアクションに利用される値を出力する、デバッグメッセージを出力ログに追加するなどのタスクを行うため、ランナーマシンとやりとりできます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
ほとんどのワークフローコマンドは特定の形式で `echo` コマンドを使用しますが、他のワークフローコマンドはファイルへの書き込みによって呼び出されます。 詳しい情報については、「[環境ファイル](#environment-files)」を参照してください。
{% else %}
ワークフローコマンドは、特定のフォーマットで `echo` コマンドを使います。
{% endif %}

``` bash
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% note %}

**ノート:** ワークフローコマンドおよびパラメータ名では、大文字と小文字は区別されません。

{% endnote %}

{% warning %}

**警告：** コマンドプロンプトを使っているなら、ワークフローコマンドを使う際にダブルクォート文字（`"`）は省いてください。

{% endwarning %}

### ワークフローコマンドを使ったツールキット関数へのアクセス

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

| ツールキット関数                                                                                                                                                             | 等価なワークフローのコマンド                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `core.addPath`                                                                                                                                                       |                                    |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}環境ファイル `GITHUB_PATH` を使用してアクセス可能{% else %} `add-path` {% endif %} |                                    |
|                                                                                                                                                                      |                                    |
| `core.debug`                                                                                                                                                         | `debug`                            |
| `core.error`                                                                                                                                                         | `エラー`                              |
| `core.endGroup`                                                                                                                                                      | `endgroup`                         |
| `core.exportVariable`                                                                                                                                                |                                    |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}環境ファイル `GITHUB_ENV` を使用してアクセス可能{% else %} `set-env` {% endif %}   |                                    |
|                                                                                                                                                                      |                                    |
| `core.getInput`                                                                                                                                                      | 環境変数の`INPUT_{NAME}`を使ってアクセス可能      |
| `core.getState`                                                                                                                                                      | 環境変数の`STATE_{NAME}`を使ってアクセス可能      |
| `core.isDebug`                                                                                                                                                       | 環境変数の`RUNNER_DEBUG`を使ってアクセス可能      |
| `core.saveState`                                                                                                                                                     | `save-state`                       |
| `core.setFailed`                                                                                                                                                     | `::error`及び`exit 1`のショートカットとして使われる |
| `core.setOutput`                                                                                                                                                     | `set-output`                       |
| `core.setSecret`                                                                                                                                                     | `add-mask`                         |
| `core.startGroup`                                                                                                                                                    | `group`                            |
| `core.warning`                                                                                                                                                       | `warning file`                     |

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### 環境変数の設定

`::set-env name={name}::{value}`

ジョブの中で次に実行される任意のアクションの環境変数を作成または更新します。 環境変数を作成または更新するアクションは、新しい値にアクセスできませんが、ジョブの中でそれ以降に続くすべてのアクションは、その新しい値にアクセスできます。 環境変数では、大文字と小文字が区別され、句読点を含めることができます。

#### サンプル

``` bash
echo "::set-env name=action_state::yellow"
```
{% endif %}

### 出力パラメータの設定

`::set-output name={name}::{value}`

アクションの出力パラメータを設定します。

あるいは、出力パラメータをアクションのメタデータファイル中で宣言することもできます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions#outputs)」を参照してください。

#### サンプル

``` bash
echo "::set-output name=action_fruit::strawberry"
```

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### システムパスの追加

`::add-path::{path}`

現在のジョブ内にある、続くすべてのアクションにおいて、システム `PATH` 変数の前に、ディレクトリを付加します。 現在実行中のアクションは、新しいパス変数にアクセスできません。

#### サンプル

``` bash
echo "::add-path::/path/to/dir"
```
{% endif %}

### デバッグメッセージの設定

`::debug::{message}`

デバッグメッセージをログに出力します。 ログでこのコマンドにより設定されたデバッグメッセージを表示するには、`ACTIONS_STEP_DEBUG` という名前のシークレットを作成し、値を `true` に設定する必要があります。 詳しい情報については、「[デバッグログの有効化](/actions/managing-workflow-runs/enabling-debug-logging)」を参照してください。

#### サンプル

``` bash
echo "::debug::Set the Octocat variable"
```

### 警告メッセージの設定

`::warning file={name},line={line},col={col}::{message}`

警告メッセージを作成し、ログにそのメッセージを出力します。 警告が発生する場所を、ファイル名 (`file`)、行番号 (`line`)、および列 (`col`) 番号で指定することもできます。

#### サンプル

``` bash
echo "::warning file=app.js,line=1,col=5::Missing semicolon"
```

### エラーメッセージの設定

`::error file={name},line={line},col={col}::{message}`

エラーメッセージを作成し、ログにそのメッセージを出力します。 警告が発生する場所を、ファイル名 (`file`)、行番号 (`line`)、および列 (`col`) 番号で指定することもできます。

#### サンプル

``` bash
echo "::error file=app.js,line=10,col=15::Something went wrong"
```

### Grouping log lines

```
::group::{title}
::endgroup::
```

Creates an expandable group in the log. To create a group, use the `group` command and specify a `title`. Anything you print to the log between the `group` and `endgroup` commands is nested inside an expandable entry in the log.

#### サンプル

```bash
echo "::group::My title"
echo "Inside group"
echo "::endgroup::"
```

![Foldable group in workflow run log](/assets/images/actions-log-group.png)

### ログ中での値のマスク

`::add-mask::{value}`

値をマスクすることにより、文字列または値がログに出力されることを防ぎます。 空白で分離された、マスクされた各語は "`*`" という文字で置き換えられます。 マスクの `value` には、環境変数または文字列を持ちいることができます。

#### 文字列をマスクするサンプル

ログに `"Mona The Octocat"` を出力すると、`"***"` が表示されます。

```bash
echo "::add-mask::Mona The Octocat"
```

#### 環境変数をマスクするサンプル

変数 `MY_NAME` または値 `"Mona The Octocat"` をログに出力すると。`"Mona The Octocat"` の代わりに `"***"` が表示されます。

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

### ワークフローコマンドの停止と開始

`::stop-commands::{endtoken}`

ワークフローコマンドの処理を停止します。 この特殊コマンドを使うと、意図せずワークフローコマンドを実行することなくいかなるログも取れます。 たとえば、コメントがあるスクリプト全体を出力するためにログ取得を停止できます。

#### ワークフローコマンドの停止の例

``` bash
echo "::stop-commands::pause-logging"
```

ワークフローコマンドを開始するには、ワークフローコマンドを停止するのに使ったトークンを渡します。

`::{endtoken}::`

#### ワークフローコマンドの開始の例

``` bash
echo "::pause-logging::"
```

### pre及びpostアクションへの値の送信

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
## 環境ファイル

ワークフローの実行中に、ランナーは特定のアクションを実行する際に使用できる一時ファイルを生成します。 これらのファイルへのパスは、環境変数を介して公開されます。 コマンドを適切に処理するには、これらのファイルに書き込むときに UTF-8 エンコーディングを使用する必要があります。 複数のコマンドを、改行で区切って同じファイルに書き込むことができます。

{% warning %}

**警告:** Powershell はデフォルト設定で UTF-8 を使用しません。 正しいエンコーディングを使用してファイルを書き込むようにしてください。 たとえば、パスを設定するときに UTF-8 エンコーディングを設定する必要があります。

```
steps:
  - run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

{% endwarning %}

### 環境変数の設定

`echo "{name}={value}" >> $GITHUB_ENV`

ジョブの中で次に実行される任意のアクションの環境変数を作成または更新します。 環境変数を作成または更新するアクションは、新しい値にアクセスできませんが、ジョブの中でそれ以降に続くすべてのアクションは、その新しい値にアクセスできます。 環境変数では、大文字と小文字が区別され、句読点を含めることができます。

#### サンプル

```bash
echo "action_state=yellow" >> $GITHUB_ENV
```

将来のステップで `$action_state` を実行すると `yellow` が返されるようになりました

#### Multiline strings

複数行の文字列の場合、次の構文で区切り文字を使用できます。

```
{name}<<{delimiter}
{value}
{delimiter}
```

##### サンプル

この例では、区切り文字として `EOF` を使用し、`JSON_RESPONSE` 環境変数を cURL レスポンスの値に設定します。
```
steps:
  - name: Set the value
    id: step_one
    run: |
        echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
        curl https://httpbin.org/json >> $GITHUB_ENV
        echo 'EOF' >> $GITHUB_ENV
```

### システムパスの追加

`echo "{path}" >> $GITHUB_PATH`

Prepends a directory to the system `PATH` variable and makes it available to all subsequent actions in the current job; the currently running action cannot access the updated path variable. To see the currently defined paths for your job, you can use `echo "$PATH"` in a step or an action.

#### サンプル

This example demonstrates how to add the user `$HOME/.local/bin` directory to `PATH`:

``` bash
echo "$HOME/.local/bin" >> $GITHUB_PATH
```
{% endif %}
