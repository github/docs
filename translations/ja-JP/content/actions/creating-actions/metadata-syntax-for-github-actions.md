---
title: GitHub Actionsのメタデータ構文
shortTitle: メタデータ構文
intro: リポジトリでタスクを実行するアクションを作成できます。 アクションには、YAML構文を使うメタデータファイルが必要です。
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_actions %}のYAML構文について

Docker及びJavaScriptアクションにはメタデータファイルが必要です。 このメタデータのファイル名は`action.yml`もしくは`action.yaml`でなければなりません。 メタデータファイル中のデータは、アクションの入力、出力、メインエントリポイントを定義します。

アクションのメタデータファイルはYAML構文を使います。 YAMLについて詳しくない場合は、「[Learn YAML in five minutes (5分で学ぶYAML)](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)」をお読みください。

## `name`

**必須**アクションの名前。 {% data variables.product.prodname_dotcom %}は`name`を**Actions**タブに表示して、それぞれのジョブのアクションを見て区別しやすくします。

## `作者`

**オプション** アクションの作者の名前。

## `説明`

**必須** アクションの短い説明。

## `inputs`

**オプション** inputsパラメーターを使うと、アクションが実行時に使うデータを指定できます。 {% data variables.product.prodname_dotcom %}は、inputsパラメータを環境変数として保存します。 大文字が使われているInputsのidは、実行時に小文字に変換されます。 inputsのidには小文字を使うことをおすすめします。

### サンプル

この例では、numOctocatsとoctocatEyeColorという 2つの入力を設定しています。 入力のnumOctocatsは必須ではなく、デフォルトの値は'1'になっています。 入力のoctocatEyeColorは必須であり、デフォルト値を持ちません。 このアクションを使うワークフローのファイルは、`with`キーワードを使ってoctocatEyeColorの入力値を設定しなければなりません。 `with`構文に関する詳しい情報については「[{% data variables.product.prodname_actions %}のためのワークフローの構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)」を参照してください。

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

When you specify an input in a workflow file or use a default input value, {% data variables.product.prodname_dotcom %} creates an environment variable for the input with the name `INPUT_<VARIABLE_NAME>`. 生成される環境変数では、入力の名前を大文字にして、空白を`_`に変換します。

If the action is written using a [composite](/actions/creating-actions/creating-a-composite-action), then it will not automatically get `INPUT_<VARIABLE_NAME>`. If the conversion doesn't occur, you can change these inputs manually.

To access the environment variable in a Docker container action, you must pass the input using the `args` keyword in the action metadata file. For more information about the action metadata file for Docker container actions, see "[Creating a Docker container action](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)."

たとえば、ワークフローで `numOctocats` および `octocatEyeColor` 入力が定義されている場合、アクションコードは `INPUT_NUMOCTOCATS` および `INPUT_OCTOCATEYECOLOR` 環境変数を使用して入力の値を読み取ることができます。

### `inputs.<input_id>`

**必須** `文字列型`の識別子で、入力と結びつけられます。 `<input_id>`の値は、入力のメタデータのマップです。 `<input_id>`は、`inputs`オブジェクト内でユニークな識別子でなければなりません。 `<input_id>`は、文字あるいは`_`で始める必要があり、英数字、`-`、`_`しか使用できません。

### `inputs.<input_id>.description`

**必須** 入力パラメーターの`文字列`での説明。

### `inputs.<input_id>.required`

**必須** この入力パラメーターがアクションに必須かどうかを示す`論理値`。 パラメーターが必須の場合は`true`に設定してください。

### `inputs.<input_id>.default`

**オプション** デフォルト値を示す`文字列`。 デフォルト値は、入力パラメーターがワークフローファイルで指定されなかった場合に使われます。

### `inputs.<input_id>.deprecationMessage`

**オプション** 入力パラメータが使用されている場合、この `string` は警告メッセージとしてログに記録されます。 この警告で入力が非推奨であることをユーザに通知し、その他の方法を知らせることができます。

## `outputs`

**オプション** アクションが設定するデータを宣言できる出力パラメータ。 ワークフローで後に実行されるアクションは、先行して実行されたアクションが設定した出力データを利用できます。  たとえば、2つの入力を加算(x + y = z)するアクションがあれば、そのアクションは他のアクションが入力として利用できる合計値(z)を出力できます。

メタデータファイル中でアクション内の出力を宣言しなくても、出力を設定してワークフロー中で利用することはできます。 アクション中での出力の設定に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフローコマンド](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)」を参照してください。

### サンプル

```yaml
outputs:
  sum: # 出力のid
    description: '入力の合計'
```

### `outputs.<output_id>`

**必須** `文字列型`の識別子で、出力と結びつけられます。 `<output_id>`の値は、出力のメタデータのマップです。 `<output_id>`は、`outputs`オブジェクト内でユニークな識別子でなければなりません。 `<output_id>`は、文字あるいは`_`で始める必要があり、英数字、`-`、`_`しか使用できません。

### `outputs.<output_id>.description`

**必須** 出力パラメーターの`文字列`での説明。

## `outputs` for composite actions

**オプション** `outputs` `outputs.<output_id>` および `outputs.<output_id>.description`（「[{% data variables.product.prodname_actions %} の `outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)」を参照）と同じパラメーターを使用しますが、`value` トークンも含まれます。

### サンプル

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**必須** 出力パラメーターがマップされる値。 これを `string` またはコンテキスト付きの式に設定できます。 たとえば、`steps` コンテキストを使用して、出力の `value` をステップの出力値に設定できます。

For more information on how to use context syntax, see "[Contexts](/actions/learn-github-actions/contexts)."

## `runs`

**Required** Specifies whether this is a JavaScript action, a composite action or a Docker action and how the action is executed.

## JavaScriptアクションのための`runs`

**Required** Configures the path to the action's code and the runtime used to execute the code.

### Example using Node.js {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Required** The runtime used to execute the code specified in [`main`](#runsmain).

- Use `node12` for Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
- Use `node16` for Node.js v16.{% endif %}

### `runs.main`

**必須** アクションのコードを含むファイル。 The runtime specified in [`using`](#runsusing) executes this file.

### `pre`

**オプション** `main:`アクションが開始される前の、ジョブの開始時点でスクリプトを実行できるようにします。 たとえば、`pre:`を使って必要なセットアップスクリプトを実行できます。 The runtime specified with the [`using`](#runsusing) syntax will execute this file. `pre:`アクションはデフォルトで常に実行されますが、[`pre-if`](#pre-if)を使ってこれをオーバーライドすることができます。

この例では、`pre:`アクションは`setup.js`というスクリプトを実行します。

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `pre-if`

**オプション** `pre:`アクションの実行条件を定義できるようにしてくれます。 `pre:`アクションは、`pre-if`内の条件が満たされたときにのみ実行されます。 設定されなかった場合、`pre-if`のデフォルトは`always()`になります。 In `pre-if`, status check functions evaluate against the job's status, not the action's own status.

まだステップは実行されていないので、`step`コンテキストは利用できないことに注意してください。

以下の例では、`cleanup.js`はLinuxベースのランナー上でのみ実行されます。

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `post`

**オプション** `main:`アクションの終了後、ジョブの終わりにスクリプトを実行できるようにします。 たとえば、`post:`を使って特定のプロセスを終了させたり、不要なファイルを削除したりできます。 The runtime specified with the [`using`](#runsusing) syntax will execute this file.

この例では、`post:`アクションは`cleanup.js`というスクリプトを実行します。

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

`post:`アクションはデフォルトで常に実行されますが、`post-if`を使ってこれをオーバーライドすることができます。

### `post-if`

**オプション** `post:`アクションの実行条件を定義できるようにしてくれます。 `post:`アクションは、`post-if`内の条件が満たされたときにのみ実行されます。 設定されなかった場合、`post-if`のデフォルトは`always()`になります。 In `post-if`, status check functions evaluate against the job's status, not the action's own status.

たとえば、この`cleanup.js`はLinuxベースのランナー上でのみ実行されます。

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` for composite actions

**Required** Configures the path to the composite action.

### `runs.using`

**Required** You must set this value to `'composite'`.

### `runs.steps`

{% ifversion fpt or ghes > 3.2 or ghae-issue-4853 or ghec %}
**Required** The steps that you plan to run in this action. These can be either `run` steps or `uses` steps.
{% else %}
**Required** The steps that you plan to run in this action.
{% endif %}

#### `runs.steps[*].run`

{% ifversion fpt or ghes > 3.2 or ghae-issue-4853 or ghec %}
**Optional** The command you want to run. これは、インラインでも、アクションリポジトリ内のスクリプトでもかまいません。
{% else %}
**必須** 実行するコマンド。 これは、インラインでも、アクションリポジトリ内のスクリプトでもかまいません。
{% endif %}

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

または、`$GITHUB_ACTION_PATH` を使用できます。

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

詳しい情報については、「[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。

#### `runs.steps[*].shell`

{% ifversion fpt or ghes > 3.2 or ghae-issue-4853 or ghec %}
**Optional** The shell where you want to run the command. [こちら](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell)にリストされている任意のシェルを使用できます。 Required if `run` is set.
{% else %}
**必須** コマンドを実行するシェル。 [こちら](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell)にリストされている任意のシェルを使用できます。 Required if `run` is set.
{% endif %}

#### `runs.steps[*].if`

**Optional** You can use the `if` conditional to prevent a step from running unless a condition is met. 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.github-actions.expression-syntax-if %} For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

**Example: Using contexts**

 このステップは、イベントの種類が`pull_request`でイベントアクションが`unassigned`の場合にのみ実行されます。

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Example: Using status check functions**

The `my backup step` only runs when the previous step of a composite action fails. For more information, see "[Expressions](/actions/learn-github-actions/expressions#job-status-check-functions)."

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### `runs.steps[*].name`

**Optional** The name of the composite step.

#### `runs.steps[*].id`

**オプション** ステップの一意の識別子。 `id`を使って、コンテキストのステップを参照することができます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

#### `runs.steps[*].env`

**オプション**  そのステップのみの環境変数の `map` を設定します。 If you want to modify the environment variable stored in the workflow, use `echo "{name}={value}" >> $GITHUB_ENV` in a composite step.

#### `runs.steps[*].working-directory`

**オプション**  コマンドを実行する作業ディレクトリを指定します。

{% ifversion fpt or ghes > 3.2 or ghae-issue-4853 or ghec %}
#### `runs.steps[*].uses`

**Optional**  Selects an action to run as part of a step in your job. アクションとは、再利用可能なコードの単位です。 ワークフロー、パブリックリポジトリ、または[公開されているDockerコンテナイメージ](https://hub.docker.com/)と同じリポジトリで定義されているアクションを使用できます。

Git ref、SHA、またはDockerタグ番号を指定して、使用しているアクションのバージョンを含めることを強く推奨します。 バージョンを指定しないと、アクションのオーナーがアップデートを公開したときに、ワークフローが中断したり、予期せぬ動作をしたりすることがあります。
- リリースされたアクションバージョンのコミットSHAを使用するのが、安定性とセキュリティのうえで最も安全です。
- 特定のメジャーアクションバージョンを使用すると、互換性を維持したまま重要な修正とセキュリティパッチを受け取ることができます。 ワークフローが引き続き動作することも保証できます。
- アクションのデフォルトブランチを使用すると便利なこともありますが、別のユーザが破壊的変更を加えた新しいメジャーバージョンをリリースすると、ワークフローが動作しなくなる場合があります。

入力が必要なアクションもあり、入力を[`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith)キーワードを使って設定する必要があります。 必要な入力を判断するには、アクションのREADMEファイルをお読みください。

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: actions/checkout@v2
    # Reference a specific version
    - uses: actions/checkout@v2.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**Optional**  A `map` of the input parameters defined by the action. 各入力パラメータはキー/値ペアです。  入力パラメータは環境変数として設定されます。 The variable is prefixed with INPUT_ and converted to upper case.

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat  
```
{% endif %}

## Dockerアクションのための`runs`

**必須** Dockerアクションのために使われるイメージを設定します。

### リポジトリでのDockerfileの利用例

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### パブリックなDockerレジストリコンテナを利用する例

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**必須** この値は`'docker'`に設定しなければなりません。

### `pre-entrypoint`

**オプション** `entrypoint`アクションが始まる前にスクリプトを実行できるようにしてくれます。 たとえば、`pre-entrypoint:`を使って必要なセットアップスクリプトを実行できます。 {% data variables.product.prodname_actions %}は`docker run`を使ってこのアクションを起動し、同じベースイメージを使う新しいコンテナ内でスクリプトを実行します。 これはすなわち、ランタイムの状態はメインの`entrypoint`コンテナとは異なるということで、必要な状態はワークスペースや`HOME`内、あるいは`STATE_`変数としてアクセスしなければなりません。 `pre-entrypoint:`アクションはデフォルトで常に実行されますが、[`pre-if`](#pre-if)を使ってこれをオーバーライドすることができます。

The runtime specified with the [`using`](#runsusing) syntax will execute this file.

この例では、`pre-entrypoint:`アクションは`setup.sh`というスクリプトを実行します。

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**必須** アクションを実行するためにコンテナとして使われるDockerイメージ。 この値には、Dockerのベースイメージ名、自分のリポジトリ中のローカル`Dockerfile`、Docker Hubあるいはその他のレジストリ中のパブリックなイメージを指定できます。 リポジトリのローカルにある `Dockerfile` を参照するには、ファイルに `Dockerfile` という名前を付け、アクションメタデータファイルに相対的なパスを使用する必要があります。 `docker`アプリケーションがこのファイルを実行します。

### `runs.env`

**オプション** コンテナの環境に設定する環境変数のキー/値のマップを指定します。

### `runs.entrypoint`

**オプション** `Dockerfile`中のDockerの`ENTRYPOINT`をオーバーライドします。あるいは、もしそれが指定されていなかった場合に設定します。 `entrypoint`は、`Dockerfile`で`ENTRYPOINT`が指定されていない場合や、`ENTRYPOINT`命令をオーバーライドしたい場合に使ってください。 `entrypoint`を省略すると、Dockerの`ENTRYPOINT`命令で指定されたコマンドが実行されます。 Dockerの`ENTRYPOINT`命令には、_shell_形式と_exec_形式があります。 Dockerの`ENTRYPOINT`のドキュメンテーションは、`ENTRYPOINT`の_exec_形式を使うことを勧めています。

`entrypoint`の実行に関する詳しい情報については、「[{% data variables.product.prodname_actions %}のDockerfileサポート](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)」を参照してください。

### `post-entrypoint`

**オプション** `run.entrypoint`アクションが完了した後に、クリーンアップスクリプトを実行できるようにしてくれます。 {% data variables.product.prodname_actions %}はこのアクションを起動するのに`docker run`を使います。 {% data variables.product.prodname_actions %}はスクリプトを同じベースイメージを使って新しいコンテナ内で実行するので、ランタイムの状態はメインの`entrypoint`コンテナとは異なります。 必要な状態には、ワークスペースや`HOME`内、あるいは`STATE_`変数としてアクセスできます。 `post-entrypoint:`アクションはデフォルトで常に実行されますが、[`post-if`](#post-if)を使ってこれをオーバーライドすることができます。

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**オプション** Dockerコンテナへの入力を定義する文字列の配列。 入力には、ハードコードされた文字列を含めることができます。 {% data variables.product.prodname_dotcom %}は、コンテナの起動時に`args`をコンテナの`ENTRYPOINT`に渡します。

`args`は、`Dockerfile`中の`CMD`命令の場所で使われます。 `Dockerfile`中で`CMD`を使うなら、以下の優先順位順のガイドラインを利用してください。

{% data reusables.github-actions.dockerfile-guidelines %}

環境変数をアクションに渡す必要がある場合は、変数置換を行えるようアクションがコマンドシェルで実行されていることを確認してください。 たとえば、`entrypoint`属性が`"sh -c"`に設定されているなら、`args`はコマンドシェル内で実行されます。 あるいは、`Dockerfile`が`ENTRYPOINT`を使って同じコマンド（`"sh -c"`）を実行しているなら、`args`はコマンドシェル内で実行されます。

{% data variables.product.prodname_actions %}での`CMD`命令の利用に関する詳しい情報については、「[{% data variables.product.prodname_actions %}のDockerfileサポート](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)」を参照してください。

#### サンプル

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

アクションをパーソナライズして見分けられるようにするために、カラーと[Feather](https://feathericons.com/)アイコンを使ってバッジを作ることができます。 バッジは、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)内のアクション名の隣に表示されます。

### サンプル

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

### `branding.color`

バッジの背景カラー。 `white`、`yellow`、`blue`、`green`、`orange`、`red`、`purple`、`gray-dark`のいずれか。

### `branding.icon`

利用する[Feather](https://feathericons.com/)アイコンの名前。

<table>
<tr>
<td>activity</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>anchor</td>
<td>aperture</td>
<td>archive</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-left-circle</td>
<td>arrow-left</td>
<td>arrow-right-circle</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>arrow-up</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>battery</td>
<td>battery</td>
<td>bell</td>
</tr>
<tr>
<td>bluetooth</td>
<td>bold</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>bookmark</td>
<td>box</td>
<td>briefcase</td>
<td>calendar</td>
</tr>
<tr>
<td>camera-off</td>
<td>camera</td>
<td>cast</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>check</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>clipboard
</td>
</tr>
<tr>
<td>clock</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>code</td>
</tr>
<tr>
<td>command</td>
<td>compass</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-down</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>crop</td>
<td>crosshair</td>
<td>database</td>
</tr>
<tr>
<td>delete</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>download</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>edit</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>facebook</td>
<td>fast-forward</td>
<td>feather</td>
<td>file-minus</td>
</tr>
<tr>
<td>file-plus</td>
<td>file-text</td>
<td>file</td>
<td>film</td>
</tr>
<tr>
<td>filter</td>
<td>flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
</tr>
<tr>
<td>folder</td>
<td>gift</td>
<td>git-branch</td>
<td>git-commit</td>
</tr>
<tr>
<td>git-merge</td>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
</tr>
<tr>
<td>hard-drive</td>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
</tr>
<tr>
<td>help-circle</td>
<td>home</td>
<td>image</td>
<td>inbox</td>
</tr>
<tr>
<td>info</td>
<td>italic</td>
<td>layers</td>
<td>layout</td>
</tr>
<tr>
<td>life-buoy</td>
<td>link-2</td>
<td>link</td>
<td>list</td>
</tr>
<tr>
<td>loader</td>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
</tr>
<tr>
<td>mail</td>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
</tr>
<tr>
<td>maximize</td>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
</tr>
<tr>
<td>mic-off</td>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
</tr>
<tr>
<td>minus-circle</td>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
</tr>
<tr>
<td>moon</td>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>move</td>
</tr>
<tr>
<td>music</td>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
</tr>
<tr>
<td>package</td>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
</tr>
<tr>
<td>percent</td>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
</tr>
<tr>
<td>phone-missed</td>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
</tr>
<tr>
<td>pie-chart</td>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
</tr>
<tr>
<td>plus-square</td>
<td>plus</td>
<td>pocket</td>
<td>power</td>
</tr>
<tr>
<td>printer</td>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
</tr>
<tr>
<td>repeat</td>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
</tr>
<tr>
<td>rss</td>
<td>save</td>
<td>scissors</td>
<td>search</td>
</tr>
<tr>
<td>send</td>
<td>server</td>
<td>settings</td>
<td>share-2</td>
</tr>
<tr>
<td>share</td>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
</tr>
<tr>
<td>shopping-cart</td>
<td>shuffle</td>
<td>sidebar</td>
<td>skip-back</td>
</tr>
<tr>
<td>skip-forward</td>
<td>slash</td>
<td>sliders</td>
<td>smartphone</td>
</tr>
<tr>
<td>speaker</td>
<td>square</td>
<td>Star</td>
<td>stop-circle</td>
</tr>
<tr>
<td>sun</td>
<td>sunrise</td>
<td>sunset</td>
<td>tablet</td>
</tr>
<tr>
<td>tag</td>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
</tr>
<tr>
<td>thumbs-down</td>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
</tr>
<tr>
<td>trash-2</td>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
</tr>
<tr>
<td>triangle</td>
<td>truck</td>
<td>tv</td>
<td>type</td>
</tr>
<tr>
<td>umbrella</td>
<td>underline</td>
<td>unlock</td>
<td>upload-cloud</td>
</tr>
<tr>
<td>upload</td>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
</tr>
<tr>
<td>user-x</td>
<td>user</td>
<td>users</td>
<td>video-off</td>
</tr>
<tr>
<td>video</td>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
</tr>
<tr>
<td>volume-x</td>
<td>volume</td>
<td>Watch</td>
<td>wifi-off</td>
</tr>
<tr>
<td>wifi</td>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
</tr>
<tr>
<td>x</td>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
</tr>
<tr>
<td>zoom-out</td>
<td></td>
<td></td>
<td></td>
</table>
