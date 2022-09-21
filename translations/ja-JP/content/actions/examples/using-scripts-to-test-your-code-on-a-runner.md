---
title: スクリプトを使ってランナーでコードをテストする
shortTitle: Using scripts to test your code on a runner
intro: '継続的インテグレーション (CI) のために基本的な {% data variables.product.prodname_actions %} 機能を使用する方法。'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f313a294bc2515564787268112f064b72d339d32
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '146749530'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## サンプルの概要

{% data reusables.actions.example-workflow-intro-ci %} このワークフローがトリガーされると、{% data variables.product.prodname_dotcom %} Docs サイトに壊れたリンクがあるかどうかを確認するスクリプトが自動的に実行されます。

{% data reusables.actions.example-diagram-intro %}

![ワークフローのステップの概要図](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## この例で使用されている機能

{% data reusables.actions.example-table-intro %}

| **機能**  | **実装** |
| --- | --- | 
{% data reusables.actions.push-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | リポジトリに応じたさまざまなランナー上のジョブの実行: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | サード パーティのアクションの使用: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | ランナー上のスクリプトの実行: | `./script/rendered-content-link-checker.mjs` の使用 |

## ワークフローの例

{% data reusables.actions.example-docs-engineering-intro %} [`link-check-all.yml`](https://github.com/github/docs/blob/main/.github/workflows/link-check-all.yml)。

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:100%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'

# **What it does**: Renders the content of every page and check all internal links.
# **Why we have it**: To make sure all links connect correctly.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  check-links:
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm

      - name: Install
        run: npm ci

      # Creates file "${{ env.HOME }}/files.json", among others
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'

      # For verification
      - name: Show files changed
        run: cat $HOME/files.json

      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json

      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</tr>
</td>
</tbody>
</table>

## 例の説明

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%">"<b>コード</b>"</th>
    <th style="width:40%"><b>説明</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'
```
</td>
<td>

{% data reusables.actions.explanation-name-key %}
</td>
</tr>
<tr>
<td>

```yaml{:copy}
on:
```
</td>
<td>

`on` キーワードを使うと、ワークフローの実行時にトリガーするイベントを定義できます。 ここでは複数のイベントを定義できます。 詳細については、[ワークフローのトリガー](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)に関するページを参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

このワークフローを UI から手動で実行できるようにする場合は、`workflow_dispatch` イベントを追加します。 詳細については、「[`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  push:
    branches:
      - main
```
</td>
<td>

`main` というブランチにコミットがプッシュされるたびにワークフローが自動的に実行されるようにするには、`push` イベントを追加します。 詳細については、「[`push`](/actions/using-workflows/events-that-trigger-workflows#push)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

pull request が作成または更新されるたびにワークフローが自動的に実行されるようにするには、`pull_request` イベントを追加します。 詳細については、「[`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  pull-requests: read
```
</td>
<td>

`GITHUB_TOKEN` に付与される既定のアクセス許可を変更します。 これはワークフローのニーズによって異なります。 詳しい情報については、「[ジョブへのアクセス許可の割り当て](/actions/using-jobs/assigning-permissions-to-jobs)」を参照してください。
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
```
{% endraw %}
</td>
<td>

特定のイベントに対するコンカレンシー グループを作成し、`||` 演算子を使ってフォールバック値を定義します。 詳細については、「[コンカレンシーの使用](/actions/using-jobs/using-concurrency)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

同じコンカレンシー グループ内の現在実行中のジョブまたはワークフローを取り消します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

ワークフロー ファイルで実行されるすべてのジョブをグループ化します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check-links:
```
</td>
<td>

`jobs` キー内に格納されている ID `check-links` を持つジョブを定義します。
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
    runs-on: ${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}
```
{% endraw %}
</td>
<td>

ワークフローを実行するリポジトリに応じて、{% data variables.product.prodname_dotcom %} ホステッド ランナーまたはセルフホステッド ランナー上で実行するようにジョブを構成します。 この例では、リポジトリ名が `docs-internal` であり、`github` 組織内にある場合、ジョブはセルフホステッド ランナー上で実行されます。 このパスに一致しないリポジトリは、{% data variables.product.prodname_dotcom %} によってホストされる `ubuntu-latest` ランナー上で実行されます。 これらのオプションの詳細については、「[ジョブのランナーを選択する](/actions/using-jobs/choosing-the-runner-for-a-job)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

`check-links` ジョブの一部として実行されるすべてのステップをグループ化します。 ワークフロー内の各ジョブには、独自の `steps` セクションがあります。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
```
</td>
<td>

`uses` キーワードは、`actions/checkout` という名前のアクションを取得するようにジョブに指示します。 これは、リポジトリをチェックアウトしてランナーにダウンロードし、コードに対してアクション（テストツールなど）を実行できるようにします。 ワークフローがリポジトリのコードに対して実行されるとき、またはリポジトリで定義されたアクションを使用しているときはいつでも、チェックアウトアクションを使用する必要があります。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
```
</td>
<td>

このステップでは、`actions/setup-node` アクションを使用して、指定したバージョンの Node.js ソフトウェア パッケージをランナーにインストールします。これにより、`npm` コマンドにアクセスできるようになります。
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Install
        run: npm ci
```
</td>
<td>

`run` キーワードは、ランナーでコマンドを実行するようにジョブに指示します。 この場合、`npm ci` はプロジェクトの npm ソフトウェア パッケージをインストールするために使用されます。
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
```
</td>
<td>

`trilom/file-changes-action` アクションを使用して、変更されたすべてのファイルを収集します。 この例は、`a6ca26c14274c33b15e6499323aac178af06ad4b` SHA を使用して、特定のバージョンのアクションに合わせて固定されています。
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Show files changed
        run: cat $HOME/files.json
```
</td>
<td>

`files.json` の内容を一覧表示します。 これはワークフロー実行のログに表示され、デバッグに役立ちます。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
```
</td>
<td>

このステップでは、`run` コマンドを使って、`script/rendered-content-link-checker.mjs` のリポジトリに格納されているスクリプトを実行し、実行に必要なすべてのパラメーターを渡します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</td>
<td>

このステップでも `run` コマンドを使って、`script/rendered-content-link-checker.mjs` のリポジトリに格納されているスクリプトを実行し、さまざまなパラメーターのセットを渡します。
</tr>

</tbody>
</table>

## 次の手順

{% data reusables.actions.learning-actions %}
