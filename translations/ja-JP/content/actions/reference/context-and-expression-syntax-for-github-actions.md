---
title: GitHub Actions のコンテキストおよび式の構文
shortTitle: コンテキストと式の構文
intro: ワークフローおよびアクションにおいて、コンテキスト情報へのアクセスおよび式の評価が可能です。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### コンテキストと式について

プログラムでワークフローファイルの変数を設定したり、コンテキストにアクセスするために、式を利用できます。 式で使えるのは、リテラル値、コンテキストへの参照、関数の組み合わせです。 リテラル、コンテキストへの参照、および関数を組み合わせるには、演算子を使います。

式は、ステップを実行すべきか判断するための `if` 条件キーワードをワークフローファイル内に記述して使用するのが一般的です。 `if`条件が`true`になれば、ステップは実行されます。

ある式を、文字列型として扱うのではなく式として評価するためには、特定の構文を使って {% data variables.product.prodname_dotcom %} に指示する必要があります。

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %} `if`条件の詳細については、「[{% data variables.product.prodname_actions %}のためのワークフローの構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)」を参照してください。

{% data reusables.github-actions.context-injection-warning %}

##### `if` 条件内の式の例

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

##### 環境変数の設定例

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

### コンテキスト

コンテキストは、ワークフローの実行、ランナーの環境、ジョブ、ステップに関する情報にアクセスする方法です。 コンテキストは式の構文を使用します。

{% raw %}
`${{ <context> }}`
{% endraw %}

| コンテキスト名    | 種類       | 説明                                                                                                                                                                     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`   | `オブジェクト` | ワークフロー実行に関する情報。 詳しい情報については、「[`github` コンテキスト](#github-context)」を参照してください。                                                                                              |
| `env`      | `オブジェクト` | ワークフロー、ジョブ、ステップで設定された環境変数が含まれます。 詳しい情報については、[`env` コンテキスト](#env-context)を参照してください。                                                                                     |
| `job`      | `オブジェクト` | 現在実行中のジョブに関する情報。 詳しい情報については、「[`job` コンテキスト](#job-context)」を参照してください。                                                                                                   |
| `steps`    | `オブジェクト` | このジョブで実行されているステップに関する情報。 詳しい情報については、「[`steps` コンテキスト](#steps-context)」を参照してください。                                                                                       |
| `runner`   | `オブジェクト` | 現在のジョブを実行しているランナーに関する情報。 詳しい情報については[`runner`コンテキスト](#runner-context)を参照してください。                                                                                         |
| `secrets`  | `オブジェクト` | シークレットへのアクセスを有効にします。 シークレットに関する詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。 |
| `strategy` | `オブジェクト` | 現在のジョブに関して設定されたstrategyパラメータおよび情報にアクセスできます。 strategyパラメータには、`fail-fast`、`job-index`、`job-total`、`max-parallel`があります。                                                   |
| `matrix`   | `オブジェクト` | 現在のジョブに対して決定したmatrixパラメータにアクセスできます。 例えば、`os`および`node` バージョンでマトリックスビルドを設定した場合、`matrix`コンテキストオブジェクトには現在のジョブの`os`および`node`バージョンが含まれます。                                    |
| `needs`    | `オブジェクト` | 現在のジョブの依存関係として定義されたすべてのジョブの出力へのアクセスを可能にします。 詳しい情報については[`needs`コンテキスト](#needs-context)を参照してください。                                                                        |

式の一部として、次の 2 つの構文のうちいずれかを使用してコンテキストにアクセスすることができます。
- インデックス構文: `github['sha']`
- プロパティ参照外しの構文: `github.sha`

プロパティ参照外しの構文を使用するには、プロパティ名に次の条件が必要です。
- `a-Z` または `_` で始まる。
- `a-Z` 、`0-9`、 `-`、または`_`が続く。

#### コンテキストを使用する場合の判断

{% data reusables.github-actions.using-context-or-environment-variables %}

#### `github` コンテキスト

`github` コンテキストは、ワークフローの実行および、その実行をトリガーしたイベントの情報を含みます。 ほとんどの `github` コンテキストデータは、環境変数で読み取ることができます。 環境変数に関する詳しい情報については、「[環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)」を参照してください。

{% data reusables.github-actions.github-context-warning %}
{% data reusables.github-actions.context-injection-warning %}

| プロパティ名                    | 種類       | 説明                                                                                                                                                                                                                                                                                   |
| ------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `github`                  | `オブジェクト` | ワークフローのあらゆるジョブやステップにおいて使用できる最上位のコンテキスト。                                                                                                                                                                                                                                              |
| `github.action`           | `string` | 現在実行中のアクションの名前。 {% data variables.product.prodname_dotcom %}は、現在のステップがスクリプトを実行する際に、特殊なキャラクターを削除するか、`run`という名前を使います。  同じジョブの中で同じアクションを複数回使う場合、名前には順番に番号が加えられます。  たとえば、実行する最初のスクリプトの名前は`run1`で、2番目のスクリプトの名前は`run2`というようになります。 同様に、`actions/checkout`の2回目の呼び出しは`actionscheckout2`となります。 |
| `github.action_path`      | `string` | アクションが置かれているパス。 このパスを使用して、アクションと同じリポジトリにあるファイルに簡単にアクセスできます。 この属性は、複合実行ステップアクションでのみサポートされています。                                                                                                                                                                                        |
| `github.actor`            | `string` | ワークフローの実行を開始したユーザのログイン。                                                                                                                                                                                                                                                              |
| `github.base_ref`         | `string` | ワークフローの実行における `base_ref` またはPull Requestのターゲットブランチ。 このプロパティは、ワークフローの実行をトリガーするイベントが `pull_request` または `pull_request_target` のいずれかである場合にのみ使用できます。                                                                                                                                     |
| `github.event`            | `オブジェクト` | webhook ペイロードの完全なイベント。 詳しい情報については、「[ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows/)」を参照してください。 このコンテキストを使用して、イベントの個々のプロパティにアクセスできます。                                                                                                                                    |
| `github.event_name`       | `string` | ワークフローの実行をトリガーしたイベントの名前。                                                                                                                                                                                                                                                             |
| `github.event_path`       | `string` | ランナー上の完全なイベントwebhookペイロードへのパス。                                                                                                                                                                                                                                                       |
| `github.head_ref`         | `string` | ワークフローの実行における `head_ref` またはPull Requestのソースブランチ。 このプロパティは、ワークフローの実行をトリガーするイベントが `pull_request` または `pull_request_target` のいずれかである場合にのみ使用できます。                                                                                                                                       |
| `github.job`              | `string` | 現在のジョブの[`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。                                                                                                                                                                                                 |
| `github.ref`              | `string` | ワークフローの実行をトリガーしたブランチまたはタグ ref。 ブランチの場合は `refs/heads/<branch_name>` の形式で、タグの場合は `refs/tags/<tag_name>` です。                                                                                                                                                                |
| `github.repository`       | `string` | 所有者およびリポジトリの名前。 `Codertocat/Hello-World`などです。                                                                                                                                                                                                                                        |
| `github.repository_owner` | `string` | リポジトリのオーナーの名前。 たとえば`Codertocat`。                                                                                                                                                                                                                                                     |
| `github.run_id`           | `string` | {% data reusables.github-actions.run_id_description %}
| `github.run_number`       | `string` | {% data reusables.github-actions.run_number_description %}
| `github.sha`              | `string` | ワークフローの実行をトリガーしたコミット SHA。                                                                                                                                                                                                                                                            |
| `github.token`            | `string` | リポジトリにインストールされたGitHub Appの代わりに認証するためのトークン。 これは機能的に`GITHUB_TOKEN`シークレットに等価です。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。                                                                    |
| `github.workflow`         | `string` | ワークフローの名前。 ワークフローファイルで `name` を指定していない場合、このプロパティの値は、リポジトリ内にあるワークフローファイルのフルパスになります。                                                                                                                                                                                                   |
| `github.workspace`        | `string` | [`checkout`](https://github.com/actions/checkout)アクションを使う際の、ステップにとってのデフォルトのワーキングディレクトリであり、リポジトリのデフォルトの場所です。                                                                                                                                                                          |

#### `env`コンテキスト

`env`コンテキストには、ワークフロー、ジョブ、ステップで設定された環境変数が含まれます。 ワークフローでの環境変数の設定に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)」を参照してください。

`env`の構文で、ワークフローファイル中の環境変数の値を利用できます。 `id`及び`uses`キーを除く、**step**中の任意のキーの値で`env`コンテキストを利用できます。 ステップの構文に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)」を参照してください。

ランナー中で環境変数の値を使いたい場合は、ランナーのオペレーティングシステムで環境変数を読み取る通常の方法を使ってください。

| プロパティ名                 | 種類       | 説明                                                             |
| ---------------------- | -------- | -------------------------------------------------------------- |
| `env`                  | `オブジェクト` | このコンテキストは、ジョブのステップごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。 |
| `env.<env_name>` | `string` | 特定の環境変数の値。                                                     |

#### `job` コンテキスト

`job` コンテキストは、現在実行中のジョブに関する情報を含みます。

| プロパティ名                                    | 種類       | 説明                                                                                                                                                                                  |
| ----------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `job`                                     | `オブジェクト` | このコンテキストは、実行しているジョブごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。                                                                                                                     |
| `job.container`                           | `オブジェクト` | ジョブのコンテナに関する情報。 コンテナに関する詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)」を参照してください。          |
| `job.container.id`                        | `string` | コンテナの ID。                                                                                                                                                                           |
| `job.container.network`                   | `string` | コンテナネットワークの ID。 runner は、コンテナ内のすべてのジョブに使用されるネットワークを作成します。                                                                                                                           |
| `job.services`                            | `オブジェクト` | ジョブのために作成されたサービスコンテナ。 サービスコンテナに関する詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)」を参照してください。 |
| `job.services.<service id>.id`      | `string` | サービスコンテナの ID。                                                                                                                                                                       |
| `job.services.<service id>.network` | `string` | サービスコンテナネットワークの ID。 ランナーは、コンテナ内のすべてのジョブに使用されるネットワークを作成します。                                                                                                                          |
| `job.services.<service id>.ports`   | `オブジェクト` | サービスコンテナの公開ポート。                                                                                                                                                                     |
| `job.status`                              | `string` | ジョブの現在の状態。 `success`、`failure`、`cancelled` のいずれかの値をとります。                                                                                                                            |

#### `steps` コンテキスト

`steps` コンテキストは、すでに実行中のジョブ内のステップに関する情報を含みます。

| プロパティ名                                              | 種類       | 説明                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`                                             | `オブジェクト` | このコンテキストは、ジョブのステップごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。                                                                                                                                                                                                                     |
| `steps.<step id>.outputs`                     | `オブジェクト` | ステップに定義された出力のセット。 詳しい情報については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions#outputs)」を参照してください。                                                                                                                            |
| `steps.<step id>.conclusion`                  | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)が適用された後に完了したステップの結果。 `success`、`failure`、`cancelled`、`skipped`のいずれかの値をとります。 `continue-on-error`のステップが失敗すると、`outcome`は`failure`になりますが、最終的な`conclusion`は`success`になります。 |
| `steps.<step id>.outcome`                     | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)が適用される前の完了したステップの結果。 `success`、`failure`、`cancelled`、`skipped`のいずれかの値をとります。 `continue-on-error`のステップが失敗すると、`outcome`は`failure`になりますが、最終的な`conclusion`は`success`になります。 |
| `steps.<step id>.outputs.<output name>` | `string` | 特定の出力の値。                                                                                                                                                                                                                                                                           |

#### `runner`コンテキスト

`runner`コンテキストには、現在のジョブを実行しているランナーに関する情報が含まれています。

| プロパティ名              | 種類       | 説明                                                                                                                                                                                                                  |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.os`         | `string` | ジョブを実行しているランナーのオペレーティングシステム。 取り得る値は`Linux`、`Windows`、`macOS`のいずれか。                                                                                                                                                  |
| `runner.temp`       | `string` | ランナー用のテンポラリディレクトリのパス。 このディレクトリは、セルフホストランナーの場合であっても、各ジョブの開始時点では空であることが保証されています。                                                                                                                                      |
| `runner.tool_cache` | `string` | {% if currentVersion == "github-ae@latest" %}{% data variables.actions.hosted_runner %} に必要なソフトウェアがインストールされていることを確認する方法については、「[カスタムイメージの作成](/actions/using-github-hosted-runners/creating-custom-images)」を参照してください。 |
{% else %}{% data variables.product.prodname_dotcom %}ホストランナーにプレインストールされているいくつかのツールを含むディレクトリのパス。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。 {% endif %}

#### `needs`コンテキスト

`needs`コンテキストは、現在のジョブの依存関係として定義されたすべてのジョブからの出力を含みます。 ジョブの依存関係の定義に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)」を参照してください。

| プロパティ名                                             | 種類       | 説明                                                                          |
| -------------------------------------------------- | -------- | --------------------------------------------------------------------------- |
| `needs.<job id>`                             | `オブジェクト` | 現在のジョブが依存している1つのジョブ。                                                        |
| `needs.<job id>.outputs`                     | `オブジェクト` | 現在のジョブが依存しているジョブの出力の集合。                                                     |
| `needs.<job id>.outputs.<output name>` | `string` | 現在のジョブが依存しているジョブの特定の出力の値。                                                   |
| `needs.<job id>.result`                      | `string` | 現在のジョブが依存しているジョブの結果。 `success`、`failure`、`cancelled`、`skipped`のいずれかの値をとります。 |

##### コンテキスト情報をログに出力するサンプル

各コンテキストでアクセスできる情報を調べるには、次の例のようにワークフローファイルを使用します。

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

### リテラル

式の一部として、`boolean`、`null`、`number`、または`string`のデータ型を使用できます。 boolean のリテラルは大文字と小文字を区別しないので、`true` も `True` も使用できます。

| データ型      | リテラル値                                                |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` または `false`                                   |
| `null`    | `null`                                               |
| `number`  | JSONでサポートされている任意の数値書式。                               |
| `string`  | 一重引用符で囲む必要があります。 一重引用符そのものを使用するには、一重引用符でエスケープしてください。 |

##### サンプル

{% raw %}
```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99-e2 }}
  myString: ${{ 'Mona the Octocat' }}
  myEscapedString: ${{ 'It''s open source!' }}
```
{% endraw %}

### 演算子

| 演算子                       | 説明        |
| ------------------------- | --------- |
| `( )`                     | 論理グループ化   |
| `[ ]`                     | インデックス    |
| `.`                       | プロパティ参照外し |
| `!`                       | 否定        |
| `<`                    | 小なり       |
| `<=`                   | 以下        |
| `>`                    | 大なり       |
| `>=`                   | 以上        |
| `==`                      | 等しい       |
| `!=`                      | 等しくない     |
| `&&`              | AND       |
| <code>\|\|</code> | OR        |

{% data variables.product.prodname_dotcom %} は、等価性を緩やかに比較します。

* 型が一致しない場合、{% data variables.product.prodname_dotcom %} は型を強制的に数値とします。 {% data variables.product.prodname_dotcom %} は、以下の変換方法で、データ型を数字にキャストします。

  | 種類     | 結果                                                                     |
  | ------ | ---------------------------------------------------------------------- |
  | ヌル     | `0`                                                                    |
  | 論理値    | `true`は`1`を返します。<br /> `false`は`0`を返します。                         |
  | 文字列型   | 正規のJSON数値型からパースされます。それ以外の場合は`NaN`です。 <br />注釈: 空の文字列は `0` を返します。 |
  | 配列     | `NaN`                                                                  |
  | オブジェクト | `NaN`                                                                  |
* ある `NaN` を、別の `NaN` と比較すると、`true` は返ってきません。 詳しい情報については、「[NaN Mozilla ドキュメント](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)」を参照してください。
* {% data variables.product.prodname_dotcom %} は、文字列を比較する際に大文字と小文字を区別しません。
* オブジェクトおよび配列は、同じインスタンスの場合にのみ等しいとみなされます。

### 関数

{% data variables.product.prodname_dotcom %} は、式で使用できる組み込み関数のセットを提供します。 一部の関数は、比較を行なうために、値を文字列型にキャストします。 {% data variables.product.prodname_dotcom %} は、以下の変換方法で、データ型を文字列にキャストします。

| 種類     | 結果                   |
| ------ | -------------------- |
| ヌル     | `''`                 |
| 論理値    | `'true'`または`'false'` |
| 数値     | 10進数、大きい場合は指数        |
| 配列     | 配列は文字列型に変換されません      |
| オブジェクト | オブジェクトは文字列型に変換されません  |

#### contains

`contains( search, item )`

`search`が`item` を含む場合、`true` を返します。 `search`が配列の場合、`item`が配列の要素であれば、この関数は`true`を返します。 `search`が文字列の場合、`item`が`search`の部分文字列であれば、この関数は`true`を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

##### 配列の利用例

`contains(github.event.issue.labels.*.name, 'bug')`

##### 文字列の使用例

`contains('Hello world', 'llo')` は、`true` を返します。

#### startsWith

`startsWith( searchString, searchValue )`

`searchString` が `searchValue` で始まる場合、`true` を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

##### サンプル

`startsWith('Hello world', 'He')` は、`true` を返します

#### endsWith

`endsWith( searchString, searchValue )`

`searchString` が `searchValue` で終わる場合、`true` を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

##### サンプル

`endsWith('Hello world', 'ld')` は、`true` を返します

#### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

`string` の値を、変数 `replaceValueN` で置換します。 `string` の変数は、`{N}` という構文で指定します。ここで `N` は整数です。 少なくとも、`replaceValue` と `string` を 1 つ指定する必要があります。 使用できる変数 (`replaceValueN`) の数に制限はありません。 中括弧はダブルブレースでエスケープします。

##### サンプル

'Hello Mona the Octocat' を返します

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

##### 括弧をエスケープするサンプル

'{Hello Mona the Octocat!}'を返します。

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

#### join

`join( array, optionalSeparator )`

`array`の値は、配列もしくは文字列になります。 `array`内のすべての値が連結されて文字列になります。 `optionalSeparator`を渡すと、連結された値の間にその値が挿入されます。 渡していない場合は、デフォルトのセパレータの`,`が使われます。 値を文字列にキャストします。

##### サンプル

`join(github.event.issue.labels.*.name, ', ')`は'bug, help wanted'といった結果を返します。

#### toJSON

`toJSON(value)`

`value` を、書式を整えたJSON表現で返します。 この関数を使って、コンテキスト内で提供された情報のデバッグができます。

##### サンプル

`toJSON(job)` は、`{ "status": "Success" }` といった結果を返します。

#### fromJSON

`fromJSON(value)`

`value`に対するJSONオブジェクト、あるいはJSONデータ型を返します。 この関数を使って、評価された式としてJSONオブジェクトを提供したり、環境変数を文字列から変換したりできます。

##### JSONオブジェクトを返す例

以下のワークフローはJSONのマトリックスを1つのジョブに設定し、それを出力と`fromJSON`を使って次のジョブに渡します。

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - id: set-matrix
        run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{fromJSON(needs.job1.outputs.matrix)}}
    steps:
      - run: build
```
{% endraw %}

##### JSONデータ型を返す例

このワークフローは`fromJSON`を使い、環境変数を文字列型から論理型もしくは整数に変換します。

{% raw %}
```yaml
name: print
on: push
env: 
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - continue-on-error: ${{ fromJSON(env.continue) }}
        timeout-minutes: ${{ fromJSON(env.time) }}
        run: echo ...
```
{% endraw %}

#### hashFiles

`hashFiles(path)`

`path`パターンにマッチするファイル群から単一のハッシュを返します。 単一の `path` パターンまたはコンマで区切られた複数の `path` パターンを指定できます。 `path`は`GITHUB_WORKSPACE`ディレクトリに対する相対であり、含められるのは`GITHUB_WORKSPACE`内のファイルだけです。 この関数はマッチしたそれぞれのファイルに対するSHA-256ハッシュを計算し、それらのハッシュを使ってファイルの集合に対する最終的なSHA-256ハッシュを計算します。 SHA-256に関する詳しい情報については「[SHA-2](https://en.wikipedia.org/wiki/SHA-2)」を参照してください。

パターンマッチング文字を使ってファイル名をマッチさせることができます。 パターンマッチングは、Windowsでは大文字小文字を区別しません。 サポートされているパターンマッチング文字に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)」を参照してください。

##### 単一のパターンの例

リポジトリ内の任意の`package-lock.json`ファイルにマッチします。

`hashFiles('**/package-lock.json')`

##### 複数のパターンの例

リポジトリ内の `package-lock.json` および `Gemfile.lock` ファイルのハッシュを作成します。

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

### ジョブステータスのチェック関数

`if` 条件では、次のステータスチェック関数を式として使用できます。 `if` 条件ステータス関数が含まれていない場合、結果は自動的に `success()` になります。 `if` 条件に関する詳しい情報については、「[GitHub Actions のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)」を参照してください。

#### success

以前のステップで失敗もしくはキャンセルされたものがない場合に`true`を返します。

##### サンプル

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

#### always

常に`true`を返します。キャンセルされた場合であっても同じです。 クリティカルなエラーによりタスクが実行されない場合は、ジョブやステップも実行されません。 たとえば、ソースの取得に失敗した場合などがそれにあたります。

##### サンプル

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

#### cancelled

ワークフローがキャンセルされた場合、`true` を返します。

##### サンプル

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

#### failure

ジョブの以前のステップのいずれかが失敗したなら`true`を返します。

##### サンプル

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

### オブジェクトフィルタ

`*` 構文を使って、フィルタを適用し、コレクション内の一致するアイテムを選択できます。

たとえば、`fruits`というオブジェクトの配列を考えます。

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

`fruits.*.name`というフィルタを指定すると、配列`[ "apple", "orange", "pear" ]`が返されます。
