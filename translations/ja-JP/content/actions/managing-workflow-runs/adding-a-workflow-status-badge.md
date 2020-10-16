---
title: ワークフローステータスバッジを追加する
intro: リポジトリにステータスバッジを表示して、ワークフローのステータスを示すことができます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

{% data reusables.repositories.actions-workflow-status-badge-into %}

ワークフローで `名` キーワードを使用する場合は、ワークフローを名前で参照する必要があります。 ワークフローの名前に空白が含まれている場合は、URL エンコード文字列 `%20`にスペースを置き換える必要があります。 `name` キーワードに関する詳しい情報については、「[{% data variables.product.prodname_actions %}のためのワークフローの構文](/articles/workflow-syntax-for-github-actions#name)」を参照してください。

```
https://github.com/<OWNER>/<REPOSITORY>/ワークフロー/<WORKFLOW_NAME>/badge.svg
```

または、ワークフローに `名が含まれていない場合`は、リポジトリのルート ディレクトリに対する相対ファイル パスを使用してワークフロー ファイルを参照する必要があります。

{% note %}

**注意:** ワークフローに `名が含まれていない場合、ファイル パスを使用してワークフロー ファイルを参照`機能しません。

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/ワークフロー/<WORKFLOW_FILE_PATH>/badge.svg
```

### ワークフロー名を使用する

この Markdown の例では、"すべてのユーザーを出す" という名前のワークフローのステータス バッジを追加します。 リポジトリの `OWNER` は、組織</code> `アクションであり、 <code>リポジトリ` 名はハローワールド</code>`。</p>

<pre><code>![ワークフロー名の例](https://github.com/actions/hello-world/workflows/Greet%20E非常に一つ/バッジ.svg)
`</pre>

### ワークフローのファイルパスを使用する

この Markdown の例では、ファイル パスを持つワークフローのステータス バッジを追加します `.github/workflow/main.yml`。 リポジトリの `OWNER` は、組織</code> `アクションであり、 <code>リポジトリ` 名はハローワールド</code>`。</p>

<pre><code>![ワークフロー ファイルのパスの例](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
`</pre>

### `branch` パラメータを使用する

この Markdown の例では、機能 1</code>の名前 `分岐のステータス バッジを追加します。</p>

<pre><code>![分岐パラメータの例](https://github.com/actions/hello-world/workflows/Greet%20E非常に一人/バッジ.svg?ブランチ=フィーチャー-1)
`</pre>

### `event` パラメータを使用する

この Markdown の例では、 `pull_request` イベントによってトリガーされたワークフロー実行の状態を示すバッジを追加します。

```
![イベント パラメーターの例](https://github.com/actions/hello-world/workflows/Greet%20E非常に一人/バッジ.svg?イベント=pull_request)
```
