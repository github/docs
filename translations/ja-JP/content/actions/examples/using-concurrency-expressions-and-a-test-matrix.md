---
title: コンカレンシー、式、テスト マトリックスの使用
shortTitle: 'Using concurrency, expressions, and a test matrix'
intro: '継続的インテグレーション (CI) のために高度な {% data variables.product.prodname_actions %} 機能を使用する方法。'
versions:
  fpt: '*'
  ghes: '>= 3.5'
  ghae: '>= 3.5'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f4edac59fdbcc8f8825a51e25b737b94b17128b0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147496581'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## サンプルの概要

{% data reusables.actions.example-workflow-intro-ci %}このワークフローがトリガーされると、`npm test` とテストの組み合わせのマトリックスを使ってコードがテストされます。

{% data reusables.actions.example-diagram-intro %}

![ワークフローのステップの概要図](/assets/images/help/images/overview-actions-using-concurrency-expressions-and-a-test-matrix.png)

## この例で使用されている機能

{% data reusables.actions.example-table-intro %}

| **機能**  | **実装** |
| --- | --- |
{% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | リポジトリに応じたさまざまなランナー上のジョブの実行: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.if-conditions-table-entry %} | さまざまなテスト構成を作成するマトリックスの使用: | [`matrix`](/actions/using-jobs/using-a-build-matrix-for-your-jobs)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | 依存関係のキャッシュ: | [`actions/cache`](/actions/advanced-guides/caching-dependencies-to-speed-up-workflows)| | ランナー上のテストの実行: | `npm test`|

## ワークフローの例

{% data reusables.actions.example-docs-engineering-intro %} [`test.yml`](https://github.com/github/docs/blob/main/.github/workflows/test.yml)。

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
name: Node.js Tests

# **What it does**: Runs our tests.
# **Why we have it**: We want our tests to pass before merging code.
# **Who does it impact**: Docs engineering, open-source engineering contributors.

on:
  workflow_dispatch:
  pull_request:
  push:
    branches:
      - main

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  test:
    # Run on self-hosted if the private repo or ubuntu-latest if the public repo
    # See pull # 17442 in the private repo for context
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    timeout-minutes: 60
    strategy:
      fail-fast: false
      matrix:
        # The same array lives in test-windows.yml, so make any updates there too.
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
    steps:
      # Each of these ifs needs to be repeated at each step to make sure the required check still runs
      # Even if if doesn't do anything
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          # Not all test suites need the LFS files. So instead, we opt to
          # NOT clone them initially and instead, include them manually
          # only for the test groups that we know need the files.
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          # Enables cloning the Early Access repo later with the relevant PAT
          persist-credentials: 'false'

      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }

      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}

      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access

      # This is necessary when LFS files where cloned but does nothing
      # if actions/checkout was run with `lfs:false`.
      - name: Checkout LFS objects
        run: git lfs checkout

      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '

      - name: Insight into changed files
        run: |

          # Must to do this because the list of files can be HUGE. Especially
          # in a repo-sync when there are lots of translation files involved.
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}

      - name: Run build script
        run: npm run build

      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
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
name: Node.js Tests
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

`on` キーワードを使うと、ワークフローの実行時にトリガーするイベントを定義できます。 ここでは複数のイベントを定義できます。 詳細については、「[ワークフローのトリガー](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

UI でこのワークフローを手動で実行できるようにする場合は、`workflow_dispatch` イベントを追加します。 詳細については、「[`workflow_dispatch`](/actions/reference/events-that-trigger-workflows#workflow_dispatch)」を参照してください。
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
  push:
    branches:
      - main
```
</td>
<td>

フィルター `main` に一致するブランチにコミットがプッシュされるたびに、ワークフローが自動的に実行されるようにするには、`push` イベントを追加します。 詳細については、「[`push`](/actions/using-workflows/events-that-trigger-workflows#push)」を参照してください。
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

`GITHUB_TOKEN` に付与される既定のアクセス許可を変更します。 これはワークフローのニーズによって異なります。 詳細については、「[ジョブへのアクセス許可の割り当て](/actions/using-jobs/assigning-permissions-to-jobs)」を参照してください。
</td>
</tr>
<tr>
<td>


```yaml{:copy}
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
```
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
  test:
```
</td>
<td>

`jobs` キー内に格納されている ID `test` を持つジョブを定義します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
```
</td>
<td>

ワークフローを実行するリポジトリに応じて、{% data variables.product.prodname_dotcom %} ホステッド ランナーまたはセルフホステッド ランナー上で実行するようにジョブを構成します。 この例では、リポジトリ名が `docs-internal` であり、`github` 組織内にある場合、ジョブはセルフホステッド ランナー上で実行されます。 このパスに一致しないリポジトリは、{% data variables.product.prodname_dotcom %} によってホストされる `ubuntu-latest` ランナー上で実行されます。 これらのオプションの詳細については、「[ジョブのランナーを選択する](/actions/using-jobs/choosing-the-runner-for-a-job)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    timeout-minutes: 60
```
</td>
<td>

実行したジョブが自動的に取り消されるまでの最大分数を設定します。 詳細については、「[`timeout-minutes`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    strategy:
```
</td>
<td>
  このセクションで、ジョブのビルド マトリックスを定義します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      fail-fast: false
```
</td>
<td>

`fail-fast` を `false` に設定すると、マトリックス ジョブのいずれかが失敗した場合に、進行中のすべてのジョブが {% data variables.product.prodname_dotcom %} によって取り消されなくなります。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      matrix:
        test-group:
          [
            content,
            graphql,
            meta,
            rendering,
            routing,
            unit,
            linting,
            translations,
          ]
```
</td>
<td>

テスト グループの配列を含む `test-group` というマトリックスを作成します。 これらの値は `npm test` によって実行されるテスト グループの名前と一致します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

`test` ジョブの一部として実行されるすべてのステップをグループ化します。 ワークフロー内の各ジョブには、独自の `steps` セクションがあります。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo
        uses: {% data reusables.actions.action-checkout %}
        with:
          lfs: {% raw %}${{ matrix.test-group == 'content' }}{% endraw %}
          persist-credentials: 'false'
```
</td>
<td>

`uses` キーワードは、`actions/checkout` という名前のアクションを取得するようにジョブに指示します。 これは、リポジトリをチェックアウトしてランナーにダウンロードし、コードに対してアクション（テストツールなど）を実行できるようにします。 ワークフローがリポジトリのコードに対して実行されるとき、またはリポジトリで定義されたアクションを使用しているときはいつでも、チェックアウトアクションを使用する必要があります。 このアクションには、`with` キーを使ういくつかの追加オプションが用意されています。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Figure out which docs-early-access branch to checkout, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        id: check-early-access
        uses: {% data reusables.actions.action-github-script %}
        env:
          BRANCH_NAME: {% raw %}${{ github.head_ref || github.ref_name }}{% endraw %}
        with:
          github-token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          result-encoding: string
          script: |
            // If being run from a PR, this becomes 'my-cool-branch'.
            // If run on main, with the `workflow_dispatch` action for
            // example, the value becomes 'main'.
            const { BRANCH_NAME } = process.env
            try {
              const response = await github.repos.getBranch({
                owner: 'github',
                repo: 'docs-early-access',
                BRANCH_NAME,
              })
              console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
              return BRANCH_NAME
            } catch (err) {
              if (err.status === 404) {
                console.log(`There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`)
                return 'main'
              }
              throw err
            }
```
</td>
<td>

現在のリポジトリが `github/docs-internal` リポジトリである場合、この手順では `actions/github-script` アクションを使ってスクリプトを実行し、`docs-early-access` というブランチがあるかどうかを確認します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out docs-early-access too, if internal repo
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: github/docs-early-access
          token: {% raw %}${{ secrets.DOCUBOT_REPO_PAT }}{% endraw %}
          path: docs-early-access
          ref: {% raw %}${{ steps.check-early-access.outputs.result }}{% endraw %}
```
</td>
<td>

現在のリポジトリが `github/docs-internal` リポジトリである場合、この手順では前の手順で特定された `github/docs-early-access` のブランチをチェックアウトします。
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Merge docs-early-access repo's folders
        if: {% raw %}${{ github.repository == 'github/docs-internal' }}{% endraw %}
        run: |
          mv docs-early-access/assets assets/images/early-access
          mv docs-early-access/content content/early-access
          mv docs-early-access/data data/early-access
          rm -r docs-early-access
```
</td>
<td>

現在のリポジトリが `github/docs-internal` リポジトリである場合、この手順では `run` キーワードを使ってシェル コマンドを実行し、`docs-early-access` リポジトリのフォルダーをメイン リポジトリのフォルダーに移動します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout LFS objects
        run: git lfs checkout
```
</td>
<td>

この手順では、リポジトリから LFS オブジェクトをチェックアウトするコマンドを実行します。
</td>
</tr>
<tr>
<td>


```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        id: get_diff_files
        with:
          # So that `steps.get_diff_files.outputs.files` becomes
          # a string like `foo.js path/bar.md`
          output: ' '
```
</td>
<td>

この手順では、`trilom/file-changes-action` アクションを使って、pull request で変更されたファイルを収集し、次の手順で分析できるようにします。 この例は、`a6ca26c14274c33b15e6499323aac178af06ad4b` SHA を使用して、特定のバージョンのアクションに合わせて固定されています。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Insight into changed files
        run: |
          echo {% raw %}"${{ steps.get_diff_files.outputs.files }}" > get_diff_files.txt{% endraw %}
```
</td>
<td>

この手順では、前の手順の出力を使って、pull request で変更されたファイルの一覧を含むファイルを作成するシェル コマンドを実行します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.14.x
          cache: npm
```
</td>
<td>

この手順では、`actions/setup-node` アクションを使用して、指定したバージョンの `node` ソフトウェア パッケージをランナーにインストールします。これにより、`npm` コマンドにアクセスできるようになります。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Install dependencies
        run: npm ci
```
</td>
<td>

この手順では、`npm ci` シェル コマンドを実行して、プロジェクトの npm ソフトウェア パッケージをインストールします。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Cache nextjs build
        uses: {% data reusables.actions.action-cache %}
        with:
          path: .next/cache
          key: {% raw %}${{ runner.os }}-nextjs-${{ hashFiles('package*.json') }}{% endraw %}
```
</td>
<td>

この手順では、ワークフローでビルドのキャッシュを取得し、毎回ゼロからリビルドしなくて済むように、`actions/cache` アクションを使って Next.js ビルドをキャッシュします。 詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run build script
        run: npm run build
```
</td>
<td>

この手順では、ビルド スクリプトを実行します。
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run tests
        env:
          DIFF_FILE: get_diff_files.txt
          CHANGELOG_CACHE_FILE_PATH: tests/fixtures/changelog-feed.json
        run: npm test -- {% raw %}tests/${{ matrix.test-group }}/{% endraw %}
```
</td>
<td>

この手順では、`npm test` を使ってテストを実行します。テスト マトリックスには、マトリックス内の各ジョブに対する {% raw %}`${{ matrix.test-group }}`{% endraw %} のさまざまな値を指定されています。 これには、変更されたファイルがわかる `DIFF_FILE` 環境変数が使用され、変更ログ キャッシュ ファイル用の `CHANGELOG_CACHE_FILE_PATH` 環境変数が使用されています。
</td>
</tr>
</tbody>
</table>

## 次の手順

{% data reusables.actions.learning-actions %}
