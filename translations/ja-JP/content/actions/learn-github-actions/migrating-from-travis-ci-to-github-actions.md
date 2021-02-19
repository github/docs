---
title: Travis CI から GitHub Actions への移行
intro: '{% data variables.product.prodname_actions %} と Travis CI は複数の類似点を共有しているため、{% data variables.product.prodname_actions %} への移行は比較的簡単です。'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - Travis CI
  - 移行
  - CI
  - CD
---

### はじめに

このガイドは、Travis CI から {% data variables.product.prodname_actions %} に移行するときに役立ちます。 概念と構文を比較して類似点を説明し、一般的なタスクに対するさまざまなアプローチを示します。

### はじめる前に

{% data variables.product.prodname_actions %} への移行を開始する前に、その仕組みを理解しておくと便利です。

- {% data variables.product.prodname_actions %} ジョブを示す簡単な例については、「[{% data variables.product.prodname_actions %} のクイックスタート](/actions/quickstart)」を参照してください。
- 本質的な {% data variables.product.prodname_actions %} の概念については、「[GitHub Actions の概要](/actions/learn-github-actions/introduction-to-github-actions)」を参照してください。

### ジョブ実行の比較

CI タスクがいつ実行されるかを制御できるように、{% data variables.product.prodname_actions %} _ワークフロー_はデフォルトで並行して実行される_ジョブ_を使用します。 各ジョブには、定義した順序で実行される_ステップ_が含まれています。 ジョブのセットアップおよびクリーンアップアクションを実行する必要がある場合は、各ジョブでステップを定義してこれらを実行できます。

### 主な類似点

{% data variables.product.prodname_actions %} と Travis CI は特定の類似点を共有しており、これらを事前に理解しておくと、移行プロセスを円滑に進めることができます。

#### YAML 構文の使用

Travis CI と {% data variables.product.prodname_actions %} はどちらも YAML を使用してジョブとワークフローを作成し、これらのファイルはコードのリポジトリに保存されます。 {% data variables.product.prodname_actions %} が YAML を使用する方法の詳細については、「[ワークフローファイルを作成する](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)」を参照してください。

#### カスタム環境変数

Travis CI では環境変数を設定し、ステージ間で共有できます。 同様に、{% data variables.product.prodname_actions %} を使用すると、ステップ、ジョブ、またはワークフローの環境変数を定義できます。 詳しい情報については、「[環境変数](/actions/reference/environment-variables)」を参照してください。

#### デフォルトの環境変数

Travis CI と {% data variables.product.prodname_actions %} の両方に、YAML ファイルで使用できるデフォルトの環境変数が含まれています。 {% data variables.product.prodname_actions %} の場合、これらは「[デフォルトの環境変数](/actions/reference/environment-variables#default-environment-variables)」にリストされています。

#### 並列なジョブの処理

Travis CI は、`stages` を使用してジョブを並行して実行できます。 同様に、{% data variables.product.prodname_actions %} は `jobs` を並行して実行します。 詳細については、「[依存ジョブを作成する](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)」を参照してください。

#### ステータスバッジ

Travis CI と {% data variables.product.prodname_actions %} はどちらもステータスバッジをサポートしており、ビルドが成功したか失敗したかを示すことができます。 詳しい情報については、「[リポジトリにワークフローステータスバッジを追加する](/actions/managing-workflow-runs/adding-a-workflow-status-badge)」を参照してください。

#### ビルドマトリックスを使用する

Travis CI と {% data variables.product.prodname_actions %} はどちらもビルドマトリックスをサポートしているため、オペレーティングシステムとソフトウェアパッケージの組み合わせを使用してテストを実行できます。 詳しい情報については、「[ビルドマトリックスを使用する](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)」を参照してください。

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

#### 特定のブランチをターゲットにする

Travis CI と {% data variables.product.prodname_actions %} はどちらも、CI を特定のブランチにターゲット設定できます。 詳しい情報については、「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)」を参照してください。

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

#### サブモジュールをチェックアウトする

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
{% raw %}
```yaml
- uses: actions/checkout@v2
  with:
    submodules: false
```
{% endraw %}
</td>
</tr>
</table>

#### マトリックスで環境変数を使用する

Travis CI と {% data variables.product.prodname_actions %} はどちらも、カスタム環境変数をテストマトリックスに追加できます。これにより、後のステップで変数を参照できます。

{% data variables.product.prodname_actions %} では、`include` キーを使用して、カスタム環境変数をマトリックスに追加できます。 {% data reusables.github-actions.matrix-variable-example %}

### {% data variables.product.prodname_actions %} の主な機能

Travis CI から移行する場合は、{% data variables.product.prodname_actions %} の次の主要機能を考慮してください。

#### シークレットを保存する

{% data variables.product.prodname_actions %} を使用すると、シークレットを保存して、ジョブで参照できます。 {% data variables.product.prodname_actions %} Organization は、Organization のシークレットにアクセスできるリポジトリを制限できます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}環境保護ルールでは、ワークフローが環境シークレットにアクセスするための手動承認が必要になる場合があります。 {% endif %}詳しい情報については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

#### ジョブとワークフロー間でファイルを共有する

{% data variables.product.prodname_actions %} には、成果物のストレージの統合サポートが含まれており、ワークフロー内のジョブ間でファイルを共有できます。 結果のファイルを保存して、他のワークフローと共有することもできます。 詳しい情報については、「[ジョブ間でデータを共有する](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)」を参照してください。

#### 自分のランナーをホストする

ジョブに特定のハードウェアまたはソフトウェアが必要な場合、{% data variables.product.prodname_actions %} を使用すると、自分のランナーをホストして、処理のためにジョブをそれらに送信できます。 {% data variables.product.prodname_actions %} では、ポリシーを使用してこれらのランナーへのアクセス方法を制御し、Organization またはリポジトリレベルでアクセスを許可することもできます。 詳しい情報については、「[自分のランナーをホストする](/actions/hosting-your-own-runners)」を参照してください。

#### 同時ジョブと実行時間

{% data variables.product.prodname_actions %} の同時ジョブとワークフローの実行時間は、{% data variables.product.company_short %} プランによって異なります。 詳しい情報については、「[使用制限、支払い、および管理](/actions/reference/usage-limits-billing-and-administration)」を参照してください。

#### {% data variables.product.prodname_actions %} で様々な言語を使用する

{% data variables.product.prodname_actions %} でさまざまな言語を使用する場合、ジョブにステップを作成して言語の依存関係を設定できます。 特定の言語での作業の詳細については、それぞれのガイドを参照してください。
  - [Node.js のビルドとテスト](/actions/guides/building-and-testing-nodejs)
  - [PowerShell のビルドとテスト](/actions/guides/building-and-testing-powershell)
  - [Python のビルドとテスト](/actions/guides/building-and-testing-python)
  - [MavenでのJavaのビルドとテスト](/actions/guides/building-and-testing-java-with-maven)
  - [GradleでのJavaのビルドとテスト](/actions/guides/building-and-testing-java-with-gradle)
  - [AntでのJavaのビルドとテスト](/actions/guides/building-and-testing-java-with-ant)

### スクリプトを実行する

{% data variables.product.prodname_actions %} は、`run` ステップを使用してスクリプトまたはシェルコマンドを実行できます。 特定のシェルを使用するには、スクリプトへのパスを指定するときに `shell` タイプを指定できます。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

例:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

### {% data variables.product.prodname_actions %} でのエラー処理

{% data variables.product.prodname_actions %} に移行する場合、エラー処理にはさまざまな方法があり、注意が必要です。

#### スクリプトエラーの処理

{% data variables.product.prodname_actions %} は、いずれかのステップでエラーコードが返された場合、すぐにジョブを停止します。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)」を参照してください。

#### ジョブエラーの処理

{% data variables.product.prodname_actions %} は、`if` 条件を使用して、特定の状況でジョブまたはステップを実行します。 たとえば、別のステップで `failure()` が発生したときに、そのステップを実行できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)」を参照してください。  また、[`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) を使用して、ジョブが失敗したときにワークフローの実行が停止しないようにすることもできます。

### 条件文と式の構文を移行する

条件式でジョブを実行するために、Travis CI と {% data variables.product.prodname_actions %} は同様の `if` 条件構文を共有します。 {% data variables.product.prodname_actions %} を使用すると、`if` 条件を使用して、条件が満たされない限りジョブまたはステップが実行されないようにすることができます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

次の例は、`if` 条件がステップを実行するかどうかを制御する方法を示しています。

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

### フェーズからステップに移行する

Travis CI が_フェーズ_を使用して_ステップ_を実行する場合、{% data variables.product.prodname_actions %} には_アクション_を実行する_ステップ_があります。 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions)でビルド済みのアクションを見つけることも、あるいは独自のアクションを作成することもできます。 詳細については、「[アクションの構築について](/actions/building-actions)」を参照してください。

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
{% raw %}
```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-python@v2
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```
{% endraw %}
</td>
</tr>
</table>

### 依存関係のキャッシング

Travis CIと{% data variables.product.prodname_actions %}では、後で利用できるよう依存関係を手動でキャッシュできます。 以下の例は、それぞれのシステムでのキャッシュの構文を示します。

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub Actions
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
{% raw %}
```yaml
- name: Cache node modules
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
    restore-keys: v1-npm-deps-
```
{% endraw %}
</td>
</tr>
</table>

{% data variables.product.prodname_actions %} キャッシングは、{% data variables.product.prodname_dotcom %} ホストランナーにのみ適用できます。  詳しい情報については、「<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">ワークフローを高速化するための依存関係のキャッシュ</a>」を参照してください。

### 一般的なタスクの例

このセクションは、{% data variables.product.prodname_actions %}とTravis CIでの一般的なタスクの実行方法を比較します。

#### 環境変数の設定

{% data variables.product.prodname_actions %}のジョブではカスタムの環境変数を作成できます。 例:

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

#### Node.jsでのビルド

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
{% raw %}
```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```
{% endraw %}
</td>
</tr>
</table>

### 次のステップ

{% data variables.product.prodname_actions %}の主な機能について学び続けるには、「[{% data variables.product.prodname_actions %}を学ぶ](/actions/learn-github-actions)」を参照してください。
