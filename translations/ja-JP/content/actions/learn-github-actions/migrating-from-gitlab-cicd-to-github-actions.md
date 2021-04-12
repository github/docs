---
title: GitLab CI/CD から GitHub Actions への移行
intro: '{% data variables.product.prodname_actions %} と GitLab CI/CDはいくつかの点で設定が似ているため、{% data variables.product.prodname_actions %} への移行は比較的簡単です。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - GitLab
  - 移行
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

GitLab CI/CD と {% data variables.product.prodname_actions %} は、どちらも自動的にコードのビルド、テスト、公開、リリース、デプロイを行うワークフローを作成できます。 GitLab CI/CD と {% data variables.product.prodname_actions %} は、ワークフローの設定において似ているところがあります。

- ワークフローの設定ファイルはYAMLで書かれ、コードのリポジトリに保存されます。
- ワークフローには1つ以上のジョブが含まれます。
- ジョブには1つ以上のステップもしくは個別のコマンドが含まれます。
- ジョブは、マネージドマシンまたはセルフホストマシンのいずれかで実行できます。

いくつかの違いがありますので、このガイドでは、ワークフローを {% data variables.product.prodname_actions %} に移行できるようにする際の重要な違いを説明します。

### ジョブ

GitLab CI/CD のジョブは、{% data variables.product.prodname_actions %} のジョブと非常によく似ています。 どちらのシステムでも、ジョブは以下の特徴を持ちます。

* ジョブには、順番に実行される一連のステップまたはスクリプトが含まれています。
* ジョブは、個別のマシンまたは個別のコンテナで実行できます。
* ジョブは、デフォルトでは並列に実行されますが、順次実行するように設定することもできます。

ジョブ内でスクリプトまたはシェルコマンドを実行できます。 GitLab CI/CD では、`script` キーを使用してスクリプトステップを指定します。 {% data variables.product.prodname_actions %}では、すべてのスクリプトは`run`キーを使って指定されます。

以下が、それぞれのシステムの構文の例です。

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  job1:
    steps:
      - uses: actions/checkout@v2
      - run: echo "Run your script here"
```
{% endraw %}
</td>
</tr>
</table>

### ランナー

ランナーは、ジョブが実行されるマシンです。 GitLab CI/CD と {% data variables.product.prodname_actions %} はどちらも、マネージドおよびセルフホストのランナーのバリエーションを提供しています。 GitLab CI/CD では、さまざまなプラットフォームでジョブを実行するために `tags` を使用しますが、{% data variables.product.prodname_actions %} では `runs-on` を使用します。

以下が、それぞれのシステムの構文の例です。

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job:
  tags:
    - linux
  script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on : windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)」を参照してください。

### Docker イメージ

GitLab CI/CD と {% data variables.product.prodname_actions %} はどちらも、Docker イメージ内でのジョブの実行をサポートしています。 GitLab CI/CD では、Docker イメージは `image` キーで定義しますが、{% data variables.product.prodname_actions %} では `container` キーで定義します。

以下が、それぞれのシステムの構文の例です。

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)」を参照してください。

### 条件と式の構文

GitLab CI/CD は、特定の条件でジョブを実行するかどうかを決定するために `rules` を使用します。 {% data variables.product.prodname_actions %} は、`if` キーワードを使用して、条件が満たされない限りジョブが実行されないようにします。

以下が、それぞれのシステムの構文の例です。

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

### ジョブ間の依存関係

GitLab CI/CD と {% data variables.product.prodname_actions %} の両方で、ジョブの依存関係を設定できます。 どちらのシステムでも、ジョブはデフォルトで並行して実行されますが、{% data variables.product.prodname_actions %} のジョブの依存関係は `needs` キーで明示的に指定できます。 GitLab CI/CD には、`stages` の概念もあります。ステージ内のジョブは同時に実行されますが、次のステージは、前のステージのすべてのジョブが完了すると開始されます。 このシナリオは、`needs` キーを使用して {% data variables.product.prodname_actions %} で再作成できます。

以下は、それぞれのシステムにおける構文の例です。 ワークフローは、`build_a` と `build_b` という名前の 2 つのジョブを並行して実行することから始まり、これらのジョブが完了すると、`test_ab` という別のジョブが実行されます。 最後に、`test_ab` が完了すると、`deploy_ab` ジョブが実行されます。

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a:
  stage: build
  script:
    - echo "This job will run first."

build_b:
  stage: build
  script:
    - echo "This job will run first, in parallel with build_a."

test_ab:
  stage: test
  script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab:
  stage: deploy
  script:
    - echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)」を参照してください。

### ワークフローのスケジューリング

GitLab CI/CD と {% data variables.product.prodname_actions %} の両方を使用すると、特定の間隔でワークフローを実行できます。 GitLab CI/CD では、パイプラインスケジュールは UI で設定されますが、{% data variables.product.prodname_actions %} では、「on」キーを使用してスケジュールされた間隔でワークフローをトリガーできます。

詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#scheduled-events)」を参照してください。

### 変数とシークレット

GitLab CI/CD および {% data variables.product.prodname_actions %} は、パイプラインまたはワークフロー設定ファイルでの環境変数の設定、および GitLab または {% data variables.product.product_name %} UI を使用したシークレットの作成をサポートしています。

詳しい情報については、「[環境変数](/actions/reference/environment-variables)」および「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

### キャッシング

GitLab CI/CD と {% data variables.product.prodname_actions %} では、設定ファイルにワークフローファイルを手動でキャッシュするためのメソッドがあります。

以下が、それぞれのシステムの構文の例です。

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache:
  key: $CI_COMMIT_REF_SLUG
  paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async:
  script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  test_async:
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

{% data variables.product.prodname_actions %} キャッシングは、{% data variables.product.prodname_dotcom %} ホストランナーにのみ適用できます。 詳しい情報については、「<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">ワークフローを高速化するための依存関係のキャッシュ</a>」を参照してください。

### 成果物

GitLab CI/CD と {% data variables.product.prodname_actions %} はどちらも、ジョブによって作成されたファイルとディレクトリを成果物としてアップロードできます。 {% data variables.product.prodname_actions %} では、成果物を使用して、複数のジョブ間でデータを永続化できます。

以下が、それぞれのシステムの構文の例です。

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- name: Upload math result for job 1
  uses: actions/upload-artifact@v2
  with:
    name: homework
    path: math-homework.txt
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については、「[ワークフローデータを成果物として保存する](/actions/guides/storing-workflow-data-as-artifacts)」を参照してください。

### データベースとサービスコンテナ

どちらのシステムでも、データベース、キャッシング、あるいはその他の依存関係のための追加コンテナを含めることができます。

GitLab CI/CD では、ジョブのコンテナは `image` キーで指定しますが、{% data variables.product.prodname_actions %} は `container` キーを使用します。 どちらのシステムでも、追加のサービスコンテナは `services` キーで指定します。

以下が、それぞれのシステムの構文の例です。

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # PostgreSQLサービスコンテナと通信するために
    # 使われるホスト名
    POSTGRES_HOST: postgres
    # PostgreSQLのデフォルトのポート
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # `package.json`ファイル中のすべての依存関係を
    # クリーンインストールする
    - npm ci
    # PostgreSQLクライアントを作成し、クライアントにデータを
    # 展開し、データを取り出すスクリプトを実行する
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: actions/checkout@v2

      # 「package.json」ファイル内のすべての依存関係の 
      # クリーンインストールを実行する
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # PostgreSQL クライアントを作成してクライアントにデータを入力し 
        # データを取得するスクリプトを実行する
        run: node client.js
        env:
          # PostgreSQL サービスコンテナとの通信に
          # 使用されるホスト名
          POSTGRES_HOST: postgres
          # デフォルトの PostgreSQL ポート
          POSTGRES_PORT: 5432
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については、「[サービスコンテナについて](/actions/guides/about-service-containers)」を参照してください。
