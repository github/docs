---
title: 式
shortTitle: Expressions
intro: ワークフローとアクションで式を評価できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 94bd9f7a43d4325e497a776357711adf64c0d7ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614224'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 式について

式を使用して、ワークフロー ファイルとアクセス コンテキストで環境変数をプログラムで設定できます。 式で使えるのは、リテラル値、コンテキストへの参照、関数の組み合わせです。 リテラル、コンテキストへの参照、および関数を組み合わせるには、演算子を使います。 コンテキストの詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

式は、ステップを実行すべきか判断するための `if` 条件キーワードをワークフロー ファイル内に記述して使用するのが一般的です。 `if` 条件が `true` の場合は、ステップが実行されます。

ある式を、文字列型として扱うのではなく式として評価するためには、特定の構文を使って {% data variables.product.prodname_dotcom %} に指示する必要があります。

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} `if` 条件の詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)」を参照してください。

{% data reusables.actions.context-injection-warning %}

#### `if` 条件式の例

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

式の一部として`boolean`、`null`、`number`、または `string` データ型を使用できます。

| データ型 | [リテラル値] |
|-----------|---------------|
| `boolean` | `true` または `false` |
| `null`    | `null` |
| `number`  | JSONでサポートされている任意の数値書式。 |
| `string`  | `{% raw %}${{{% endraw %}` と `{% raw %}}}{% endraw %}` 内に文字列を囲む必要はありません。 ただし、そうする場合は、文字列の周りに単一引用符 (`'`) を使用する必要があります。 リテラル単一引用符を使用するには、追加の単一引用符 (`''`) を使用してリテラルの単一引用符をエスケープします。 二重引用符 (`"`) で囲むとエラーがスローされます。 |

#### 例

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## 演算子

| 演算子    | 説明 |
| ---         | ---         |
| `( )`       | 論理的なグループ化 |
| `[ ]`       | インデックス
| `.`         | プロパティの参照解除 |
| `!`         | Not |
| `<`         | より小さい |
| `<=`        | 以下 |
| `>`         | より大きい |
| `>=`        | 以上 |
| `==`        | 等しい |
| `!=`        | 等しくない |
| `&&`        | および |
|  <code>\|\|</code> | または |

{% data variables.product.prodname_dotcom %} は、等価性を緩やかに比較します。

* 型が一致しない場合、{% data variables.product.prodname_dotcom %} は型を強制的に数値とします。 {% data variables.product.prodname_dotcom %} は、以下の変換方法で、データ型を数字にキャストします。

  | 型    | 結果 |
  | ---     | ---    |
  | [Null]    | `0` |
  | Boolean | `true` は `1` を返します。 <br /> `false` は `0` を返します。 |
  | String  | 正規の JSON 数値形式から解析されます。それ以外の場合は `NaN` です。 <br /> 注: 空の文字列は `0` を返します。 |
  | Array   | `NaN` |
  | Object  | `NaN` |
* `NaN` を別の `NaN` と比較すると、`true` は返されません。 詳細については、[NaN Mozilla ドキュメント](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)を参照してください。
* {% data variables.product.prodname_dotcom %} は、文字列を比較する際に大文字と小文字を区別しません。
* オブジェクトおよび配列は、同じインスタンスの場合にのみ等しいとみなされます。

## 機能

{% data variables.product.prodname_dotcom %} は、式で使用できる組み込み関数のセットを提供します。 一部の関数は、比較を行なうために、値を文字列型にキャストします。 {% data variables.product.prodname_dotcom %} は、以下の変換方法で、データ型を文字列にキャストします。

| 型    | 結果 |
| ---     | ---    |
| [Null]    | `''` |
| Boolean | `'true'` または `'false'` |
| number  | 10進数、大きい場合は指数 |
| Array   | 配列は文字列型に変換されません |
| Object  | オブジェクトは文字列型に変換されません |

### contains

`contains( search, item )`

`search` に `item` が含まれている場合に `true` を返します。 `search` が配列の場合、`item` が配列内の要素であれば、この関数は `true` を返します。 `search` が文字列の場合、`item` が `search` の部分文字列であれば、この関数は `true` を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

#### 文字列の使用例

`contains('Hello world', 'llo')` は、`true` を返します。

#### オブジェクト フィルターの使用例

イベントに関連する issue に "bug" というラベルがある場合、`contains(github.event.issue.labels.*.name, 'bug')` は `true` を返します。

詳しくは、「[オブジェクト フィルター](#object-filters)」をご覧ください。

#### 文字列の配列に一致する例

`github.event_name == "push" || github.event_name == "pull_request"` と書く代わりに、`contains()` と `fromJson()` を使って、文字列の配列に `item` が含まれるかどうかをチェックできます。

たとえば、`github.event_name` が "push" または "pull_request" の場合、`contains(fromJson('["push", "pull_request"]'), github.event_name)` は `true` を返します。

### startsWith

`startsWith( searchString, searchValue )`

`searchString` が `searchValue` で始まる場合は、`true` を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

#### 例

`startsWith('Hello world', 'He')` は、`true` を返します。

### endsWith

`endsWith( searchString, searchValue )`

`true` が `searchString` で終わる場合は、`searchValue` を返します。 この関数は大文字と小文字を区別しません。 値を文字列にキャストします。

#### 例

`endsWith('Hello world', 'ld')` は、`true` を返します。

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

`string` 内の値を `replaceValueN` 変数に置き換えます。 `string` 内の変数は、`{N}` 構文 (`N` は整数) を使用して指定されます。 少なくとも 1 つの `replaceValue` と `string` を指定する必要があります。 使用できる変数 (`replaceValueN`) の最大数はありません。 中括弧はダブルブレースでエスケープします。

#### 例

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

'Hello Mona the Octocat' を返します。

#### 括弧をエスケープするサンプル

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

'{Hello Mona the Octocat!}' を返します。

### join

`join( array, optionalSeparator )`

`array` の値には、配列または文字列を指定できます。 `array` のすべての値が文字列に連結されます。 `optionalSeparator` を指定した場合は、連結された値の間に挿入されます。 それ以外の場合は、既定の区切り記号の `,` が使用されます。 値を文字列にキャストします。

#### 例

`join(github.event.issue.labels.*.name, ', ')` では、'bug, help wanted' が返される場合があります

### toJSON

`toJSON(value)`

`value` を、書式を整えた JSON 表現で返します。 この関数を使って、コンテキスト内で提供された情報のデバッグができます。

#### 例

`toJSON(job)` では、`{ "status": "Success" }` が返される場合があります。

### fromJSON

`fromJSON(value)`

`value` に対する JSON オブジェクト、あるいは JSON データ型を返します。 この関数を使って、評価された式としてJSONオブジェクトを提供したり、環境変数を文字列から変換したりできます。

#### JSONオブジェクトを返す例

このワークフローは JSON マトリックスを 1 つのジョブに設定し、それを出力と `fromJSON` を使って次のジョブに渡します。

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
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### JSONデータ型を返す例

このワークフローでは `fromJSON` を使い、環境変数を文字列からブール値もしくは整数に変換します。

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

`path` パターンに一致するファイル群から単一のハッシュを返します。 1 つの `path` パターンまたは複数の `path` のパターンをコンマで区切って指定できます。 `path` は `GITHUB_WORKSPACE` ディレクトリに対する相対値であり、`GITHUB_WORKSPACE` 内のファイルのみを含めることができます。 この関数はマッチしたそれぞれのファイルに対するSHA-256ハッシュを計算し、それらのハッシュを使ってファイルの集合に対する最終的なSHA-256ハッシュを計算します。 `path` パターンがどのファイルとも一致しない場合、空の文字列が返されます。 SHA-256 の詳細については、「[SHA-2](https://en.wikipedia.org/wiki/SHA-2)」を参照してください。

パターンマッチング文字を使ってファイル名をマッチさせることができます。 パターンマッチングは、Windowsでは大文字小文字を区別しません。 サポートされているパターン マッチング文字の詳細については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)」を参照してください。

#### 単一のパターンの例

リポジトリ内の任意の `package-lock.json` ファイルと一致します。

`hashFiles('**/package-lock.json')`

#### 複数のパターンの例

リポジトリ内の任意の `package-lock.json` および `Gemfile.lock` ファイルのハッシュを作成します。

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## ステータスチェック関数

`if` 条件では、次の状態チェック関数を式として使用できます。 これらの関数のいずれかを含めない限り、既定の `success()` の状態チェックが適用されます。 `if` 条件の詳細については、「[GitHub Actions のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)」および「[GitHub 複合アクションのメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)」を参照してください。
{% else %}
## 関数の確認
`if` 条件では、次の状態チェック関数を式として使用できます。 これらの関数のいずれかを含めない限り、既定の `success()` の状態チェックが適用されます。 `if` 条件の詳細については、「[GitHub Actions のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)」を参照してください。
{% endif %}

### success

前のステップで失敗もしくはキャンセルされたものがない場合に `true` を返します。

#### 例

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### 常時

ステップが常に実行され、キャンセルされた場合でも `true` を返します。 クリティカルなエラーによりタスクが実行されない場合は、ジョブやステップも実行されません。 たとえば、ソースの取得に失敗した場合などがそれにあたります。

#### 例

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### 取り消し済み

ワークフローがキャンセルされた場合に `true` を返します。

#### 例

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

ジョブの前のステップが失敗した場合に `true` を返します。 依存ジョブのチェーンがある場合、親要素ジョブが失敗した場合に `failure()` は `true` を返します。

#### 例

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### 条件付きのエラー

エラー後に実行するステップの追加条件を含めることができますが、状態チェック関数を含まない `if` 条件に自動的に適用される既定の `success()` の状態チェックをオーバーライドするには、引き続き `failure()` を含める必要があります。

##### 例

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## オブジェクトフィルタ

`*` 構文を使用して、フィルターを適用し、コレクション内の一致する項目を選択できます。

たとえば、`fruits` というオブジェクトの配列を考えます。

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

フィルター `fruits.*.name` は配列 `[ "apple", "orange", "pear" ]` を返します。

オブジェクトで `*` 構文を使用することもできます。 たとえば、`vegetables` という名前のオブジェクトがあるとします。

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

フィルター `vegetables.*.ediblePortions` の評価結果は次のとおりです。

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

オブジェクトは順序を保持しないため、出力の順序を保証することはできません。
