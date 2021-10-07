---
title: Expressions
shortTitle: Expressions
intro: You can evaluate expressions in workflows and actions.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About expressions

プログラムでワークフローファイルの変数を設定したり、コンテキストにアクセスするために、式を利用できます。 式で使えるのは、リテラル値、コンテキストへの参照、関数の組み合わせです。 リテラル、コンテキストへの参照、および関数を組み合わせるには、演算子を使います。 For more information about contexts, see "[Contexts](/actions/learn-github-actions/contexts)."

式は、ステップを実行すべきか判断するための `if` 条件キーワードをワークフローファイル内に記述して使用するのが一般的です。 `if`条件が`true`になれば、ステップは実行されます。

ある式を、文字列型として扱うのではなく式として評価するためには、特定の構文を使って {% data variables.product.prodname_dotcom %} に指示する必要があります。

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %} `if`条件の詳細については、「[{% data variables.product.prodname_actions %}のためのワークフローの構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)」を参照してください。

{% data reusables.github-actions.context-injection-warning %}

#### `if` 条件内の式の例

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### 環境変数の設定例

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## リテラル

式の一部として、`boolean`、`null`、`number`、または`string`のデータ型を使用できます。

| データ型      | リテラル値                                                |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` または `false`                                   |
| `null`    | `null`                                               |
| `number`  | JSONでサポートされている任意の数値書式。                               |
| `string`  | 一重引用符で囲む必要があります。 一重引用符そのものを使用するには、一重引用符でエスケープしてください。 |

#### サンプル

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

## 演算子

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

## 関数

{% data variables.product.prodname_dotcom %} は、式で使用できる組み込み関数のセットを提供します。 一部の関数は、比較を行なうために、値を文字列型にキャストします。 {% data variables.product.prodname_dotcom %} は、以下の変換方法で、データ型を文字列にキャストします。

| 種類     | 結果                   |
| ------ | -------------------- |
| ヌル     | `''`                 |
| 論理値    | `'true'`または`'false'` |
| Number | 10進数、大きい場合は指数        |
| 配列     | 配列は文字列型に変換されません      |
| オブジェクト | オブジェクトは文字列型に変換されません  |

### contains

`contains( search, item )`

`search`が`item` を含む場合、`true` を返します。 `search`が配列の場合、`item`が配列の要素であれば、この関数は`true`を返します。 `search`が文字列の場合、`item`が`search`の部分文字列であれば、この関数は`true`を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

#### 配列の利用例

`contains(github.event.issue.labels.*.name, 'bug')`

#### 文字列の使用例

`contains('Hello world', 'llo')` は、`true` を返します。

### startsWith

`startsWith( searchString, searchValue )`

`searchString` が `searchValue` で始まる場合、`true` を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

#### サンプル

`startsWith('Hello world', 'He')` は、`true` を返します

### endsWith

`endsWith( searchString, searchValue )`

`searchString` が `searchValue` で終わる場合、`true` を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

#### サンプル

`endsWith('Hello world', 'ld')` は、`true` を返します

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

`string` の値を、変数 `replaceValueN` で置換します。 `string` の変数は、`{N}` という構文で指定します。ここで `N` は整数です。 少なくとも、`replaceValue` と `string` を 1 つ指定する必要があります。 使用できる変数 (`replaceValueN`) の数に制限はありません。 中括弧はダブルブレースでエスケープします。

#### サンプル

'Hello Mona the Octocat' を返します

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

#### 括弧をエスケープするサンプル

'{Hello Mona the Octocat!}'を返します。

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

### join

`join( array, optionalSeparator )`

`array`の値は、配列もしくは文字列になります。 `array`内のすべての値が連結されて文字列になります。 `optionalSeparator`を渡すと、連結された値の間にその値が挿入されます。 渡していない場合は、デフォルトのセパレータの`,`が使われます。 値を文字列にキャストします。

#### サンプル

`join(github.event.issue.labels.*.name, ', ')`は'bug, help wanted'といった結果を返します。

### toJSON

`toJSON(value)`

`value` を、書式を整えたJSON表現で返します。 この関数を使って、コンテキスト内で提供された情報のデバッグができます。

#### サンプル

`toJSON(job)` は、`{ "status": "Success" }` といった結果を返します。

### fromJSON

`fromJSON(value)`

`value`に対するJSONオブジェクト、あるいはJSONデータ型を返します。 この関数を使って、評価された式としてJSONオブジェクトを提供したり、環境変数を文字列から変換したりできます。

#### JSONオブジェクトを返す例

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

#### JSONデータ型を返す例

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

### hashFiles

`hashFiles(path)`

`path`パターンにマッチするファイル群から単一のハッシュを返します。 単一の `path` パターンまたはコンマで区切られた複数の `path` パターンを指定できます。 `path`は`GITHUB_WORKSPACE`ディレクトリに対する相対であり、含められるのは`GITHUB_WORKSPACE`内のファイルだけです。 この関数はマッチしたそれぞれのファイルに対するSHA-256ハッシュを計算し、それらのハッシュを使ってファイルの集合に対する最終的なSHA-256ハッシュを計算します。 SHA-256に関する詳しい情報については「[SHA-2](https://en.wikipedia.org/wiki/SHA-2)」を参照してください。

パターンマッチング文字を使ってファイル名をマッチさせることができます。 パターンマッチングは、Windowsでは大文字小文字を区別しません。 サポートされているパターンマッチング文字に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)」を参照してください。

#### 単一のパターンの例

リポジトリ内の任意の`package-lock.json`ファイルにマッチします。

`hashFiles('**/package-lock.json')`

#### 複数のパターンの例

リポジトリ内の `package-lock.json` および `Gemfile.lock` ファイルのハッシュを作成します。

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

## ジョブステータスのチェック関数

`if` 条件では、次のステータスチェック関数を式として使用できます。 A default status check of `success()` is applied unless you include one of these functions. `if` 条件に関する詳しい情報については、「[GitHub Actions のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)」を参照してください。

### success

以前のステップで失敗もしくはキャンセルされたものがない場合に`true`を返します。

#### サンプル

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

Causes the step to always execute, and returns `true`, even when canceled. クリティカルなエラーによりタスクが実行されない場合は、ジョブやステップも実行されません。 たとえば、ソースの取得に失敗した場合などがそれにあたります。

#### サンプル

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

ワークフローがキャンセルされた場合、`true` を返します。

#### サンプル

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

ジョブの以前のステップのいずれかが失敗したなら`true`を返します。

#### サンプル

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

## オブジェクトフィルタ

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
