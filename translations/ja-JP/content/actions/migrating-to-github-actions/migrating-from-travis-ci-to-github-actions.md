---
title: Travis CI から GitHub Actions への移行
intro: '{% data variables.product.prodname_actions %} と Travis CI は複数の類似点を共有しているため、{% data variables.product.prodname_actions %} への移行は比較的簡単です。'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
ms.openlocfilehash: 00da8dc259ef4de197faffd8db654dd536c1c237
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178992'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、Travis CI から {% data variables.product.prodname_actions %} に移行するときに役立ちます。 概念と構文を比較して類似点を説明し、一般的なタスクに対するさまざまなアプローチを示します。

## 開始する前に

{% data variables.product.prodname_actions %} への移行を開始する前に、その仕組みを理解しておくと便利です。

- {% data variables.product.prodname_actions %} ジョブを示す簡単な例については、「[{% data variables.product.prodname_actions %} のクイックスタート](/actions/quickstart)」を参照してください。
- 重要な {% data variables.product.prodname_actions %} の概念については、[GitHub Actions の概要](/actions/learn-github-actions/introduction-to-github-actions)に関する記事を参照してください。

## ジョブ実行の比較

CI タスクがいつ実行されるかを制御できるように、{% data variables.product.prodname_actions %} _ワークフロー_ では、既定で並行実行される _ジョブ_ を使います。 各ジョブには、定義した順序で実行される _ステップ_ が含まれています。 ジョブのセットアップおよびクリーンアップアクションを実行する必要がある場合は、各ジョブでステップを定義してこれらを実行できます。

## 主な類似点

{% data variables.product.prodname_actions %} と Travis CI は特定の類似点を共有しており、これらを事前に理解しておくと、移行プロセスを円滑に進めることができます。

### YAML 構文の使用

Travis CI と {% data variables.product.prodname_actions %} はどちらも YAML を使用してジョブとワークフローを作成し、これらのファイルはコードのリポジトリに保存されます。 {% data variables.product.prodname_actions %} で YAML を使う方法の詳細については、「[ワークフロー ファイルの作成](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)」を参照してください。

### カスタム環境変数

Travis CI では環境変数を設定し、ステージ間で共有できます。 同様に、{% data variables.product.prodname_actions %} を使用すると、ステップ、ジョブ、またはワークフローの環境変数を定義できます。 詳細については、「[環境変数](/actions/reference/environment-variables)」を参照してください。

### 既定の環境変数

Travis CI と {% data variables.product.prodname_actions %} の両方に、YAML ファイルで使用できるデフォルトの環境変数が含まれています。 {% data variables.product.prodname_actions %} の場合、「[既定の環境変数](/actions/reference/environment-variables#default-environment-variables)」にこれらが一覧表示されています。

### 並列なジョブの処理

Travis CI では、`stages` を使ってジョブを並列実行できます。 同様に、{% data variables.product.prodname_actions %} では `jobs` を並行実行します。 詳細については、「[依存ジョブを作成する](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)」を参照してください。

### 状態バッジ

Travis CI と {% data variables.product.prodname_actions %} はどちらもステータスバッジをサポートしており、ビルドが成功したか失敗したかを示すことができます。
詳細については、[リポジトリへのワークフロー状態バッジの追加](/actions/managing-workflow-runs/adding-a-workflow-status-badge)に関する記事を参照してください。

### マトリックスの使用

Travis CI と {% data variables.product.prodname_actions %} の両方でマトリックスがサポートされるため、オペレーティング システムとソフトウェア パッケージの組み合わせを使ってテストを実行できます。 詳しくは、「[ジョブにマトリックスを使用する](/actions/using-jobs/using-a-matrix-for-your-jobs)」をご覧ください。

以下は、各システムの構文を比較した例です。

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

### 特定のブランチをターゲットにする

Travis CI と {% data variables.product.prodname_actions %} はどちらも、CI を特定のブランチにターゲット設定できます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)」を参照してください。

以下が、それぞれのシステムの構文の例です。

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

### サブモジュールをチェックアウトする

Travis CI と {% data variables.product.prodname_actions %} はどちらも、サブモジュールをリポジトリクローンに含めるかどうかの制御ができます。

以下が、それぞれのシステムの構文の例です。

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### マトリックスで環境変数を使用する

Travis CI と {% data variables.product.prodname_actions %} はどちらも、カスタム環境変数をテストマトリックスに追加できます。これにより、後のステップで変数を参照できます。

{% data variables.product.prodname_actions %} では、`include` キーを使って、カスタム環境変数をマトリックスに追加できます。 {% data reusables.actions.matrix-variable-example %}

## {% data variables.product.prodname_actions %} の主な機能

Travis CI から移行する場合は、{% data variables.product.prodname_actions %} の次の主要機能を考慮してください。

### シークレットの保存

{% data variables.product.prodname_actions %} を使用すると、シークレットを保存して、ジョブで参照できます。 {% data variables.product.prodname_actions %} Organization は、Organization のシークレットにアクセスできるリポジトリを制限できます。 環境保護ルールでは、環境シークレットにアクセスするためのワークフローの手動承認が必要になる場合があります。 詳細については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

### ジョブとワークフロー間でファイルを共有する

{% data variables.product.prodname_actions %} には、成果物のストレージの統合サポートが含まれており、ワークフロー内のジョブ間でファイルを共有できます。 結果のファイルを保存して、他のワークフローと共有することもできます。 詳細については、「[ジョブ間でデータを共有する](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)」を参照してください。

### 自分のランナーをホストする

ジョブに特定のハードウェアまたはソフトウェアが必要な場合、{% data variables.product.prodname_actions %} を使用すると、自分のランナーをホストして、処理のためにジョブをそれらに送信できます。 {% data variables.product.prodname_actions %} では、ポリシーを使用してこれらのランナーへのアクセス方法を制御し、Organization またはリポジトリレベルでアクセスを許可することもできます。 詳細については、「[自分のランナーをホストする](/actions/hosting-your-own-runners)」を参照してください。

{% ifversion fpt or ghec %}

### 同時ジョブと実行時間

{% data variables.product.prodname_actions %} の同時ジョブとワークフローの実行時間は、{% data variables.product.company_short %} プランによって異なります。 詳細については、「[使用制限、支払い、管理](/actions/reference/usage-limits-billing-and-administration)」を参照してください。

{% endif %}

### {% data variables.product.prodname_actions %} で様々な言語を使用する

{% data variables.product.prodname_actions %} でさまざまな言語を使用する場合、ジョブにステップを作成して言語の依存関係を設定できます。 特定の言語での作業の詳細については、それぞれのガイドを参照してください。
  - [Node.js のビルドとテスト](/actions/guides/building-and-testing-nodejs)
  - [Python のビルドとテスト](/actions/guides/building-and-testing-python)
  - [PowerShell のビルドとテスト](/actions/guides/building-and-testing-powershell)
  - [MavenでのJavaのビルドとテスト](/actions/guides/building-and-testing-java-with-maven)
  - [GradleでのJavaのビルドとテスト](/actions/guides/building-and-testing-java-with-gradle)
  - [AntでのJavaのビルドとテスト](/actions/guides/building-and-testing-java-with-ant)

## スクリプトの実行

{% data variables.product.prodname_actions %} では、`run` ステップを使ってスクリプトまたはシェル コマンドを実行できます。 特定のシェルを使うには、スクリプトへのパスを指定するときに `shell` 型を指定できます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)に関するページを参照してください。

たとえば次のような点です。

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## {% data variables.product.prodname_actions %} でのエラー処理

{% data variables.product.prodname_actions %} に移行する場合、エラー処理にはさまざまな方法があり、注意が必要です。

### スクリプトエラーの処理

{% data variables.product.prodname_actions %} は、いずれかのステップでエラーコードが返された場合、すぐにジョブを停止します。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)に関するページを参照してください。

### ジョブエラーの処理

{% data variables.product.prodname_actions %} では、`if` 条件文を使って、特定の状況でジョブまたはステップを実行します。 たとえば、あるステップは、別のステップで `failure()` が発生したときに実行できます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)に関するページを参照してください。  また、[`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) を使って、ジョブが失敗したときにワークフロー実行が停止しないようにすることもできます。

## 条件文と式の構文を移行する

条件式でジョブを実行するために、Travis CI と {% data variables.product.prodname_actions %} では同様の `if` 条件構文を共有します。 {% data variables.product.prodname_actions %} を使うと、`if` 条件文を使って、条件が満たされない限りジョブまたはステップが実行されないようにすることができます。 詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

次の例は、ステップを実行するかどうかを `if` 条件文で制御する方法を示しています。

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## フェーズからステップに移行する

Travis CI が _フェーズ_ を使用して _ステップ_ を実行する場合、{% data variables.product.prodname_actions %} には _アクション_ を実行する _ステップ_ があります。 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) でビルド済みアクションを見つけることも、独自のアクションを作成することもできます。 詳細については、「[アクションのビルド](/actions/building-actions)」を参照してください。

以下が、それぞれのシステムの構文の例です。

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

script:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## 依存関係のキャッシング

Travis CIと{% data variables.product.prodname_actions %}では、後で利用できるよう依存関係を手動でキャッシュできます。

{% ifversion actions-caching %}

以下の例は、それぞれのシステムでのキャッシュの構文を示します。

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub のアクション
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Cache node modules
  uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.npm
    key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
    restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

## 一般的なタスクの例

このセクションは、{% data variables.product.prodname_actions %}とTravis CIでの一般的なタスクの実行方法を比較します。

### 環境変数の設定

{% data variables.product.prodname_actions %}のジョブではカスタムの環境変数を作成できます。 たとえば次のような点です。

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}のワークフロー
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Node.jsでのビルド

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}のワークフロー
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## 次の手順

{% data variables.product.prodname_actions %} の主な機能について引き続き学習するには、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。
