---
title: CircleCIからGitHub Actionsへの移行
intro: GitHub ActionsとCircleCIには設定に相似点があるので、GitHub Actionsへの移行は比較的単純明快です。
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-circleci-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

CircleCIと{% data variables.product.prodname_actions %}は、どちらも自動的にコードのビルド、テスト、公開、リリース、デプロイを行うワークフローを作成できます。 CircleCIと{% data variables.product.prodname_actions %}は、ワークフローの設定において似ているところがあります。

- ワークフローの設定ファイルはYAMLで書かれ、リポジトリに保存されます。
- ワークフローには1つ以上のジョブが含まれます。
- ジョブには1つ以上のステップもしくは個別のコマンドが含まれます。
- ステップもしくはタスクは、再利用とコミュニティとの共有が可能です。

詳しい情報については、「[{% data variables.product.prodname_actions %}の中核的概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)」を参照してください。

### 主要な差異

CircleCIから移行する際には、以下の差異を考慮してください。

- CircleCIの自動テストの並列性は、ユーザが指定したルールもしくは過去のタイミングの情報に基づいて、自動的にテストをグループ化します。 この機能は{% data variables.product.prodname_actions %}には組み込まれていません。
- コンテナはユーザのマッピングが異なるので、Dockerコンテナ内で実行されるアクションは、権限の問題に敏感です。 これらの問題の多くは、*Dockerfile*中で`USER`命令を使わなければ回避できます。 {% if currentVersion == "github-ae@latest" %}{% data variables.actions.hosted_runner %} に必要なソフトウェアがインストールされていることを確認する方法については、「[カスタムイメージの作成](/actions/using-github-hosted-runners/creating-custom-images)」を参照してください。
{% else %}{% data variables.product.product_name %}ホストランナー上の Docker のファイルシステムに関する詳しい情報については「[{% data variables.product.product_name %} ホストランナーの仮想環境](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)」を参照してください。
{% endif %}

### ワークフローとジョブの移行

CircleCIは*config.yml*ファイル中で`workflows`を定義するので、複数のワークフローを設定できます。 {% data variables.product.product_name %}はワークフローごとに1つのワークフローファイルを必要とするので、結果として`workflows`を宣言する必要がありません。 それぞれのワークフローごとに、*config.yml*で内で設定された新しいワークフローファイルを作成しなければなりません。

CircleCIと{% data variables.product.prodname_actions %}は、どちらも似た構文を使って設定ファイル中で`jobs`を設定します。 CircleCIワークフロー中で`requires`を使ってジョブ間の依存関係を設定しているなら、相当する{% data variables.product.prodname_actions %}の`needs`構文を利用できます。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)」を参照してください。

### orbsからアクションへの移行

CircleCIと{% data variables.product.prodname_actions %}は、どちらもワークフロー中のタスクを再利用し、共有するための仕組みを提供しています。 CircleCIはorbsという概念を利用します。これはYAMLで書かれ、ワークフロー中で再利用できるタスクを提供します。 {% data variables.product.prodname_actions %}はアクションと呼ばれる強力で柔軟な再利用できるコンポーネントを持っており、これはJavaScriptファイルもしくはDockerイメージで構築できます。 {% data variables.product.product_name %} の API やパブリックに利用可能なサードパーティ API との統合など、リポジトリと相互作用するカスタムコードを書いてアクションを作成することができます。 たとえば、アクションでnpmモジュールを公開する、緊急のIssueが発生したときにSMSアラートを送信する、本番対応のコードをデプロイすることなどが可能です。 詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

CircleCIは、YAMLのアンカーとエイリアスでワークフローの部分を再利用できます。 {% data variables.product.prodname_actions %}はビルドマトリックスを使って、再利用性についての一般的な要求のほとんどをサポートします。 ビルドマトリックスに関する詳細な情報については「[複雑なワークフローを管理する](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix)」を参照してください。

### Dockerイメージの利用


CircleCIと{% data variables.product.prodname_actions %}は、どちらもDockerイメージ内でのステップの実行をサポートします。

CircleCIは、共通の依存関係を持つ一連のビルド済みのイメージを提供します。 これらのイメージでは`USER`が`circleci`に設定されており、それが{% data variables.product.prodname_actions %}との権限の衝突を引き起こすことになります。

{% data variables.product.prodname_actions %}への移行に際しては、CircleCIの構築済みイメージから離脱することをおすすめします。 多くの場合、必要な追加の依存関係のインストールにアクションを使うことができます。

{% if currentVersion == "github-ae@latest" %}
Docker ファイルシステムの詳細については、「[Docker コンテナファイルシステム](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)」を参照してください。
ー

{% data variables.actions.hosted_runner %} に必要なソフトウェアがインストールされていることを確認する方法については、「[カスタムイメージの作成](/actions/using-github-hosted-runners/creating-custom-images)」を参照してください。
{% else %}
Dockerのファイルシステムに関する詳しい情報については「[{% data variables.product.product_name %}ホストランナーの仮想環境](/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem)」を参照してください。
ー

{% data variables.product.prodname_dotcom %} ホストの仮想環境で使用できるツールとパッケージの詳細については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

### 変数とシークレットの利用

CircleCIと{% data variables.product.prodname_actions %}は、設定ファイル内での環境変数の設定と、CircleCIもしくは{% data variables.product.product_name %}のUIを使ったシークレットの作成をサポートしています。

詳しい情報については「[環境変数の利用](/actions/configuring-and-managing-workflows/using-environment-variables)」及び「[暗号化されたシークレットの作成と利用](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)」を参照してください。

### キャッシング

CircleCIと{% data variables.product.prodname_actions %}は、設定ファイル中で手動でファイルをキャッシュする方法を提供しています。

以下は、それぞれのシステムにおける構文の例です。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
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

{% data variables.product.prodname_actions %} キャッシュは、{% data variables.product.prodname_dotcom_the_website %} でホストされているリポジトリにのみ適用できます。 詳しい情報については、「<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">ワークフローを高速化するための依存関係のキャッシュ</a>」を参照してください。

{% data variables.product.prodname_actions %}は、CircleCIのDocker Layer Caching（DLC）に相当する機能を持っていません。

### ジョブ間でのデータの永続化

CircleCIと{% data variables.product.prodname_actions %}は、どちらもジョブ間でデータを永続化するための仕組みを提供しています。

以下は、CircleCIと{% data variables.product.prodname_actions %}の設定構文の例です。

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:
    at: /tmp/workspace
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

...

- name: Download math result for job 1
  uses: actions/download-artifact@v2
  with:
    name: homework
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)」を参照してください。

### データベースとサービスコンテナの利用

どちらのシステムでも、データベース、キャッシング、あるいはその他の依存関係のための追加コンテナを含めることができます。

CircleCIでは、*config.yaml*で最初に挙げられているイメージが、コマンドの実行に使われる主要なイメージです。 {% data variables.product.prodname_actions %}は明示的なセクションを使います。主要なコンテナには`container`を使い、追加のコンテナは`services`にリストしてください。

以下は、CircleCIと{% data variables.product.prodname_actions %}の設定構文の例です。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26:
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows:
  version: 2
  build:
    jobs:
      - ruby-26
...

- attach_workspace:
    at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # ヘルスチェックを追加
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      # このDockerファイルは、デフォルトユーザではなくUSERをcirceciに変更するので、このイメージのファイルの権限をGH Actionsで動作するように変更しなければならない。
      # https://docs.github.com/actions/reference/virtual-environments-for-github-hosted-runners#docker-container-filesystem を参照
      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については「[サービスコンテナについて](/actions/configuring-and-managing-workflows/about-service-containers)」を参照してください。

### 完全な例

以下は実際の例です。 左は[ thoughtbot/administrator](https://github.com/thoughtbot/administrate)リポジトリのための実際の*config.yml*を示しています。 右は、同等の{% data variables.product.prodname_actions %}を示しています。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands:
  shared_steps:
    steps:
      - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job
  working_directory: ~/administrate
  steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs:
  ruby-25:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.5.0-node-browsers
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""

  ruby-26:
    <<: *default_job
    docker:
      - image: circleci/ruby:2.6.3-node-browsers-legacy
        environment:
          PGHOST: localhost
          PGUSER: administrate
          RAILS_ENV: test
      - image: postgres:10.1-alpine
        environment:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby26
          POSTGRES_PASSWORD: ""


workflows:
  version: 2
  multiple-rubies:
    jobs:
      - ruby-26
      - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      - uses: actions/checkout@v2
      - name: Setup Ruby
        uses: eregon/use-ruby-action@master
        with:
          ruby-version: ${{ matrix.ruby }}
      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: vendor/bundle
          key: administrate-${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
      - name: Install appraisal
        run: bundle exec appraisal install
      - name: Run appraisal
        run: bundle exec appraisal rake
```
{% endraw %}
</td>
</tr>
</table>
