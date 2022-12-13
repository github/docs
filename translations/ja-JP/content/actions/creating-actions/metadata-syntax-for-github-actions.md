---
title: GitHub Actions のメタデータ構文
shortTitle: Metadata syntax
intro: リポジトリでタスクを実行するアクションを作成できます。 アクションには、YAML 構文を使うメタデータ ファイルが必要です。
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
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107414'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_actions %}のYAML構文について

すべてのアクションにメタデータ ファイルが必要です。 メタデータ ファイル名は、`action.yml` または `action.yaml` である必要があります。 メタデータ ファイル内のデータにより、アクションの入力、出力、実行の構成を定義されます。

アクションのメタデータファイルはYAML構文を使います。 YAML を初めて使用する場合は、「[5 分で学ぶ YAML](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)」を参照してください。

## `name`

**必須** アクションの名前。 {% data variables.product.prodname_dotcom %} の **[アクション]** タブには `name` が表示され、各ジョブのアクションを視覚的に特定するのに役立ちます。

## `author`

**省略可能** アクションの作成者の名前。

## `description`

**必須** アクションの簡単な説明。

## `inputs`

**省略可能** 入力パラメーターでは、実行時にアクションで使用するデータを指定できます。 {% data variables.product.prodname_dotcom %}は、inputsパラメータを環境変数として保存します。 大文字が使われているInputsのidは、実行時に小文字に変換されます。 inputsのidには小文字を使うことをおすすめします。

### 例: 入力の指定

この例では、numOctocatsとoctocatEyeColorという 2つの入力を設定しています。 入力のnumOctocatsは必須ではなく、デフォルトの値は'1'になっています。 入力のoctocatEyeColorは必須であり、デフォルト値を持ちません。 このアクションを使用するワークフロー ファイルでは、`with` キーワードを使って octocatEyeColor の入力値を設定する必要があります。 `with` 構文の詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)」を参照してください。

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

ワークフロー ファイル内で入力を指定するか、既定の入力値を使用すると、{% data variables.product.prodname_dotcom %} により、その入力に対して、`INPUT_<VARIABLE_NAME>` という名前の環境変数が作成されます。 作成された環境変数では、入力名を大文字に変換し、空白を `_` 文字に置き換えます。

アクションが [composite](/actions/creating-actions/creating-a-composite-action) を使用して書き込まれている場合は、自動的に `INPUT_<VARIABLE_NAME>` が取得されません。 変換されない場合は、これらの入力を手動で変更できます。

Docker コンテナー アクションの環境変数にアクセスするには、アクション メタデータ ファイルで `args` キーワードを使用して入力を渡す必要があります。 Docker コンテナー アクションのアクション メタデータ ファイルについて詳しくは、「[Docker コンテナー アクションの作成](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)」を参照してください。

たとえば、ワークフローで `numOctocats` および `octocatEyeColor` 入力が定義されている場合は、アクション コードで、`INPUT_NUMOCTOCATS` および `INPUT_OCTOCATEYECOLOR` 環境変数を使用して入力の値を読み取ることができます。

### `inputs.<input_id>`

**必須** 入力に関連付ける `string` 識別子。 `<input_id>` の値は、入力のメタデータのマップです。 `<input_id>` は、`inputs` オブジェクト内の一意識別子である必要があります。 `<input_id>` は文字または `_` で始まり、英数字、`-`、あるいは `_` のみを含める必要があります。

### `inputs.<input_id>.description`

**必須** 入力パラメーターの `string` の説明。

### `inputs.<input_id>.required`

**省略可能** アクションに入力パラメーターが必要かどうかを示す `boolean`。 パラメーターが必要な場合は、`true` に設定します。

### `inputs.<input_id>.default`

**省略可能** 既定値を表す `string`。 デフォルト値は、入力パラメーターがワークフローファイルで指定されなかった場合に使われます。

### `inputs.<input_id>.deprecationMessage`

**省略可能** 入力パラメーターが使用されている場合、この `string` は警告メッセージとしてログに記録されます。 この警告で入力が非推奨であることをユーザに通知し、その他の方法を知らせることができます。

## Docker コンテナーと JavaScript アクションの `outputs`

**省略可能** 出力パラメーターを使用すると、アクションで設定されるデータを宣言できます。 ワークフローで後に実行されるアクションは、先行して実行されたアクションが設定した出力データを利用できます。  たとえば、2つの入力を加算(x + y = z)するアクションがあれば、そのアクションは他のアクションが入力として利用できる合計値(z)を出力できます。

{% data reusables.actions.output-limitations %}

メタデータファイル中でアクション内の出力を宣言しなくても、出力を設定してワークフロー中で利用することはできます。 アクションでの出力の設定については詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)」を参照してください。

### 例: Docker コンテナーと JavaScript アクションの出力の宣言

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**必須** 出力に関連付ける `string` 識別子。 `<output_id>` の値は、出力のメタデータのマップです。 `<output_id>` は、`outputs` オブジェクト内の一意識別子である必要があります。 `<output_id>` は文字または `_` で始まり、英数字、`-`、あるいは `_` のみを含める必要があります。

### `outputs.<output_id>.description`

**必須** 出力パラメーターの `string` の説明。

## 複合アクションの `outputs`

**省略可能** `outputs` では `outputs.<output_id>` および `outputs.<output_id>.description` と同じパラメーターが使用されます (「[Docker コンテナーと JavaScript アクションの `outputs`](#outputs-for-docker-container-and-javascript-actions)」を参照) が、`value` トークンも含まれます。

{% data reusables.actions.output-limitations %}

### 例: 複合アクションの出力の宣言

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**必須** 出力パラメーターがマップされる値。 これは、`string` またはコンテキスト付きの式に設定できます。 たとえば、`steps` コンテキストを使用して、出力の `value` をステップの出力値に設定できます。

コンテキスト構文の使用方法について詳しくは、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

## `runs`

**必須** これが JavaScript アクション、複合アクション、Docker コンテナー アクションのいずれであるか、およびアクションの実行方法を指定します。

## JavaScript のアクションの `runs`

**必須** アクションのコードへのパスと、コードの実行に使用されるランタイムを構成します。

### 例: Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}v16{% else %}v12{% endif %} の使用

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**必須** [`main`](#runsmain) で指定されたコードを実行するために使用されるランタイム。

- Node.js v12 では `node12` を使用。{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- Node.js v16{% endif %} では `node16` を使用。

### `runs.main`

**必須** アクション コードを含むファイル。 [`using`](#runsusing) で指定されたランタイムでこのファイルが実行されます。

### `runs.pre`

**省略可能** `main:` アクションが開始される前に、ジョブの開始時にスクリプトを実行できます。 たとえば、`pre:` を使って必要なセットアップ スクリプトを実行できます。 [`using`](#runsusing) 構文で指定されたランタイムによりこのファイルが実行されます。 `pre:` アクションは常に既定で実行されますが、[`runs.pre-if`](#runspre-if) を使用してこれをオーバーライドすることはできます。

この例では、`pre:` アクションによって `setup.js` というスクリプトが実行されます。

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**省略可能** `pre:` アクションの実行条件を定義できます。 `pre:` アクションは、`pre-if` 内の条件が満たされた場合にのみ実行されます。 設定されていない場合、`pre-if` は既定で `always()` に設定されます。 `pre-if` では、ステータス チェック関数は、アクション自体の状態ではなく、ジョブの状態に対して評価されます。

まだステップが実行されていないので、`step` コンテキストは利用できないことに注意してください。

以下の例では、`cleanup.js` は Linux ベースのランナーでのみ実行されます。

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**省略可能** `main:` アクションが完了したら、ジョブの終了時にスクリプトを実行できます。 たとえば、`post:` を使って特定のプロセスを終了させたり、不要なファイルを削除したりできます。 [`using`](#runsusing) 構文で指定されたランタイムによりこのファイルが実行されます。

この例では、`post:` アクションによって `cleanup.js` というスクリプトが実行されます。

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

`post:` アクションは常に既定で実行されますが、`post-if` を使用してこれをオーバーライドすることはできます。

### `runs.post-if`

**省略可能** `post:` アクションの実行条件を定義できます。 `post:` アクションは、`post-if` 内の条件が満たされた場合にのみ実行されます。 設定されていない場合、`post-if` は既定で `always()` に設定されます。 `post-if` では、ステータス チェック関数は、アクション自体の状態ではなく、ジョブの状態に対して評価されます。

たとえば、この `cleanup.js` は Linux ベースのランナーでのみ実行されます。

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## 複合アクションの `runs`

**必須** 複合アクションへのパスを構成します。

### `runs.using`

**必須** この値を `'composite'` に設定する必要があります。

### `runs.steps`

**必須** このアクションで実行する予定のステップ。 これらは、`run` ステップまたは `uses` ステップにすることができます。

#### `runs.steps[*].run`

**省略可能** 実行するコマンド。 これは、インラインでも、アクション リポジトリ内のスクリプトでもかまいません。

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

`$GITHUB_ACTION_PATH` を使用することもできます。

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

詳細については、[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) を参照してください。

#### `runs.steps[*].shell`

**省略可能** コマンドを実行するシェル。 [ここに](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell)一覧表示されているシェルのいずれかを使用できます。 `run` が設定されている場合は必須です。

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**省略可能** `if` 条件文を使って、条件が満たされなければ、ステップを実行しないようにすることができます。 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.actions.expression-syntax-if %} 詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

**例: コンテキストの使用**

 このステップは、イベントの種類が `pull_request` で、イベント アクションが `unassigned` である場合にのみ実行されます。

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**例: ステータス チェック関数の使用**

複合アクションの前のステップが失敗した場合にのみ、`my backup step` が実行されます。 詳細については、「[式](/actions/learn-github-actions/expressions#status-check-functions)」を参照してください。

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**省略可能** 複合ステップの名前。

#### `runs.steps[*].id`

**省略可能** ステップの一意識別子。 `id` を使って、コンテキストのステップを参照することができます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

#### `runs.steps[*].env`

**省略可能** そのステップのみの環境変数の `map` を設定します。 ワークフローに格納されている環境変数を変更する場合は、複合ステップで `echo "{name}={value}" >> $GITHUB_ENV` を使用します。

#### `runs.steps[*].working-directory`

**省略可能** コマンドが実行される作業ディレクトリを指定します。

#### `runs.steps[*].uses`

**省略可能** ジョブでステップの一部として実行されるアクションを選択します。 アクションとは、再利用可能なコードの単位です。 ワークフローと同じリポジトリ、パブリック リポジトリ、または[公開されている Docker コンテナー イメージ](https://hub.docker.com/)で定義されているアクションを使用できます。

Git ref、SHA、またはDockerタグ番号を指定して、使用しているアクションのバージョンを含めることを強く推奨します。 バージョンを指定しないと、アクションのオーナーがアップデートを公開したときに、ワークフローが中断したり、予期せぬ動作をしたりすることがあります。
- リリースされたアクションバージョンのコミットSHAを使用するのが、安定性とセキュリティのうえで最も安全です。
- 特定のメジャーアクションバージョンを使用すると、互換性を維持したまま重要な修正とセキュリティパッチを受け取ることができます。 ワークフローが引き続き動作することも保証できます。
- アクションのデフォルトブランチを使用すると便利なこともありますが、別のユーザが破壊的変更を加えた新しいメジャーバージョンをリリースすると、ワークフローが動作しなくなる場合があります。

一部のアクションでは、[`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith) キーワードを使用して設定する必要がある入力が必要です。 必要な入力を判断するには、アクションのREADMEファイルをお読みください。

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
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

**省略可能** アクションによって定義される入力パラメーターの `map`。 各入力パラメータはキー/値ペアです。 詳しくは、「[例: 入力の指定](#example-specifying-inputs)」をご覧ください。

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

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

**省略可能** ステップが失敗したときにアクションが失敗しないようにします。 `true` に設定すれば、このステップが失敗したときにアクションを成功させることができます。

{% endif %}

## Docker コンテナー アクションの `runs`

**必須** Docker コンテナー アクションに使用されるイメージを構成します。

### 例: リポジトリでの Dockerfile の使用

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### 例: パブリック Docker レジストリ コンテナーの使用

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**必須** この値を `'docker'` に設定する必要があります。

### `runs.pre-entrypoint`

**省略可能** `entrypoint` アクションが開始される前にスクリプトを実行できます。 たとえば、`pre-entrypoint:` を使って必要なセットアップ スクリプトを実行できます。 {% data variables.product.prodname_actions %} では `docker run` を使ってこのアクションを起動し、同じベース イメージを使用する新しいコンテナー内でスクリプトを実行します。 つまり、ランタイムの状態はメインの `entrypoint` コンテナーとは異なり、必要な状態はワークスペース、`HOME` で、または `STATE_` 変数としてアクセスされる必要があります。 `pre-entrypoint:` アクションは常に既定で実行されますが、[`runs.pre-if`](#runspre-if) を使用してこれをオーバーライドすることはできます。

[`using`](#runsusing) 構文で指定されたランタイムによりこのファイルが実行されます。

この例では、`pre-entrypoint:` アクションによって `setup.sh` というスクリプトが実行されます。

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

**必須** アクションを実行するコンテナーとして使用する Docker イメージ。 値は、Docker のベース イメージ名、ご自分のリポジトリ内のローカル `Dockerfile`、または Docker Hub あるいは別のレジストリ内のパブリック イメージにすることができます。 ご自分のリポジトリにローカルな `Dockerfile` を参照するには、ファイルに `Dockerfile` という名前を付ける必要があり、アクション メタデータ ファイルに対する相対パスを使用する必要があります。 `docker` アプリケーションによってこのファイルが実行されます。

### `runs.env`

**省略可能** コンテナー環境で設定する環境変数のキー/値のマップを指定します。

### `runs.entrypoint`

**省略可能** `Dockerfile` 内の Docker の `ENTRYPOINT` をオーバーライドするか、まだ指定されていない場合は設定します。 `Dockerfile` で `ENTRYPOINT` が指定されていない場合や、`ENTRYPOINT` 命令をオーバーライドする場合は `entrypoint` を使用します。 `entrypoint` を省略すると、Docker の `ENTRYPOINT` 命令で指定したコマンドが実行されます。 Docker の `ENTRYPOINT` 命令には、_shell_ 形式と _exec_ 形式があります。 Docker の `ENTRYPOINT` ドキュメントでは、`ENTRYPOINT` 命令の _exec_ 形式を使用することが推奨されています。

`entrypoint` の実行方法について詳しくは、「[{% data variables.product.prodname_actions %} のための Dockerfile サポート](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)」を参照してください。

### `runs.post-entrypoint`

**省略可能** `runs.entrypoint` アクションが完了したら、クリーンアップ スクリプトを実行できます。 {% data variables.product.prodname_actions %} では `docker run` を使用して、このアクションを起動します。 {% data variables.product.prodname_actions %} ではスクリプトを同じベース イメージを使って新しいコンテナー内で実行するため、ランタイムの状態はメインの `entrypoint` コンテナーとは異なります。 ワークスペース、`HOME` で、または `STATE_` 変数として必要な任意の状態にアクセスできます。 `post-entrypoint:` アクションは常に既定で実行されますが、[`runs.post-if`](#runspost-if) を使用してこれをオーバーライドすることはできます。

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

**省略可能** Docker コンテナーの入力を定義する文字列の配列。 入力には、ハードコードされた文字列を含めることができます。 {% data variables.product.prodname_dotcom %} により、コンテナーの起動時に `args` がコンテナーの`ENTRYPOINT` に渡されます。

`args` は、`Dockerfile` 内の `CMD` 命令の代わりに使用されます。 ご自分の `Dockerfile` で `CMD` を使用する場合は、以下の優先順のガイドラインを使用してください。

{% data reusables.actions.dockerfile-guidelines %}

環境変数をアクションに渡す必要がある場合は、変数置換を行えるようアクションがコマンドシェルで実行されていることを確認してください。 たとえば、`entrypoint` 属性が `"sh -c"` に設定されている場合は、`args` がコマンド シェルで実行されます。 あるいは、`Dockerfile` で `ENTRYPOINT` を使用して同じコマンド (`"sh -c"`) を実行する場合は、`args` がコマンド シェルで実行されます。

{% data variables.product.prodname_actions %} での `CMD` 命令の使用について詳しくは、「[{% data variables.product.prodname_actions %} のための Dockerfile サポート](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)」を参照してください。

#### 例: Docker コンテナーの引数の定義

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

**省略可能**: アクションをパーソナライズして見分けられるようにするために、カラーと [Feather](https://feathericons.com/) アイコンを使ってバッジを作成することができます。 バッジは、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) のアクション名の横に表示されます。

### 例: アクションのブランド化の構成

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

バッジの背景カラー。 `white`、`yellow`、`blue`、`green`、`orange`、`red`、`purple`、`gray-dark` のいずれかにすることができます。

### `branding.icon`

使用する v4.28.0 [Feather](https://feathericons.com/) アイコンの名前。 ブランド アイコンと以下のものは省略されます。

<table>
<tr>
<td>コーヒー</td>
<td>列</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>key</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>ツール (tool)</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

現在サポートされているすべてのアイコンの完全なリストを以下に示します。

<!--
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo.
-->

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
<td>アンカー</td>
<td>aperture</td>
<td>アーカイブ</td>
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
<td>ベル</td>
</tr>
<tr>
<td>Bluetooth</td>
<td>太字</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>ブックマーク (bookmark)</td>
<td>box</td>
<td>briefcase</td>
<td>カレンダー</td>
</tr>
<tr>
<td>camera-off</td>
<td>カメラ</td>
<td>キャスト</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>チェック</td>
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
<td>クリップボード</td>
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
<td>編集</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>fast-forward</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>file</td>
<td>film</td>
<td>filter</td>
</tr>
<tr>
<td>flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>folder</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>ハート</td>
<td>help-circle</td>
</tr>
<tr>
<td>home</td>
<td>image</td>
<td>inbox</td>
<td>info</td>
</tr>
<tr>
<td>斜体</td>
<td>レイヤー</td>
<td>レイアウト</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>メニュー</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>監視</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>移動</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>ナビゲーション</td>
<td>octagon</td>
<td>パッケージ</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
<td>パーセント</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>power</td>
<td>printer</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>[保存]</td>
<td>scissors</td>
<td>検索</td>
<td>[Send]</td>
</tr>
<tr>
<td>server</td>
<td>settings</td>
<td>share-2</td>
<td>共有</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>シャッフル</td>
<td>サイド バー●さいどばー○</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>スライダー</td>
<td>smartphone</td>
<td>スピーカー</td>
</tr>
<tr>
<td>square</td>
<td>星</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>sunset</td>
<td>タブレット</td>
<td>タグ</td>
</tr>
<tr>
<td>ターゲット (target)</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>triangle</td>
</tr>
<tr>
<td>truck</td>
<td>tv</td>
<td>type</td>
<td>傘</td>
</tr>
<tr>
<td>下線</td>
<td>ロック解除</td>
<td>upload-cloud</td>
<td>upload</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>ユーザー</td>
<td>users</td>
<td>video-off</td>
<td>video</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>ボリューム</td>
<td>watch</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
