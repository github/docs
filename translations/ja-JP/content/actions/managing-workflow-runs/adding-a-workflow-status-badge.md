---
title: ワークフローステータスバッジを追加する
intro: リポジトリにステータスバッジを表示して、ワークフローのステータスを示すことができます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

ワークフローが`name` キーワードを使用する場合は、ワークフローを名前で参照する必要があります。 ワークフローの名前に空白が含まれている場合は、URL エンコード文字列の`%20`で空白を置き換えなければなりません。 `name` キーワードに関する詳しい情報については、「[{% data variables.product.prodname_actions %}のためのワークフローの構文](/articles/workflow-syntax-for-github-actions#name)」を参照してください。

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg
```

または、ワークフローに `name`が含まれていない場合は、リポジトリのルート ディレクトリに対する相対ファイル パスを使用してワークフロー ファイルを参照する必要があります。

{% note %}

**ノート:** ワークフローに `name`が含まれていない場合、ファイル パスを使用してワークフロー ファイルを参照するのは機能しません。

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_FILE_PATH>/badge.svg
```

### ワークフロー名を使用する

このMarkdownの例では、"Greet Everyone" という名前のワークフローにステータス バッジを追加します。 リポジトリの `OWNER` は、`actions`というOrganizationであり、 `REPOSITORY`の名前は`hello-world`です。

```markdown
![example workflow name](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

### ワークフローのファイルパスを使用する

この Markdown の例では、`.github/workflow/main.yml`というファイル パスのワークフローにステータス バッジを追加します 。 リポジトリの `OWNER` は、`actions`というOrganizationであり、 `REPOSITORY`の名前は`hello-world`です。

```markdown
![example workflow file path](https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

### `branch` パラメータを使用する

この Markdown の例では、`feature-1`という名前のブランチにステータス バッジを追加します。

```markdown
![example branch parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

### `event` パラメータを使用する

この Markdown の例では、 `pull_request` イベントによってトリガーされたワークフロー実行のステータスを示すバッジを追加します。

```markdown
![example event parameter](https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```
