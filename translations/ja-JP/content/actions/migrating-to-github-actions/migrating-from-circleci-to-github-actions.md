---
title: CircleCIからGitHub Actionsへの移行
intro: GitHub ActionsとCircleCIには設定に相似点があるので、GitHub Actionsへの移行は比較的単純明快です。
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrate from CircleCI
ms.openlocfilehash: d3f7a527f21588ec2bd60e04639a861c35b12b7f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147518969'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

CircleCIと{% data variables.product.prodname_actions %}は、どちらも自動的にコードのビルド、テスト、公開、リリース、デプロイを行うワークフローを作成できます。 CircleCIと{% data variables.product.prodname_actions %}は、ワークフローの設定において似ているところがあります。

- ワークフローの設定ファイルはYAMLで書かれ、リポジトリに保存されます。
- ワークフローには1つ以上のジョブが含まれます。
- ジョブには1つ以上のステップもしくは個別のコマンドが含まれます。
- ステップもしくはタスクは、再利用とコミュニティとの共有が可能です。

詳しくは、[{% data variables.product.prodname_actions %} のコア概念](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)に関するページをご覧ください。

## 主要な相違点

CircleCIから移行する際には、以下の差異を考慮してください。

- CircleCIの自動テストの並列性は、ユーザが指定したルールもしくは過去のタイミングの情報に基づいて、自動的にテストをグループ化します。 この機能は{% data variables.product.prodname_actions %}には組み込まれていません。
- コンテナはユーザのマッピングが異なるので、Dockerコンテナ内で実行されるアクションは、権限の問題に敏感です。 *Dockerfile* で `USER` 命令を使わなければ、これらの問題の多くを回避できます。 {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.product_name %} ホスト ランナーの Docker ファイルシステムについて詳しくは、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)」を参照してください。
{% endif %}

## ワークフローとジョブの移行

CircleCI によって、*config.yml* ファイルに `workflows` が定義されます。これにより、1 つ以上のワークフローを構成できるようになります。 {% data variables.product.product_name %} は、ワークフローごとに 1 つのワークフロー ファイルを必要とするので、`workflows` を宣言する必要はありません。 *config.yml* に構成されている各ワークフローに対して、新しいワークフロー ファイルを作成する必要があります。

CircleCI と {% data variables.product.prodname_actions %} のどちらを使っても、同様の構文を使って、構成ファイル内に `jobs` が構成されます。 CircleCI ワークフロー内で `requires` を使ってジョブ間に依存関係を構成する場合は、同様の {% data variables.product.prodname_actions %} `needs` 構文を使うことができます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)に関するページを参照してください。

## orbsからアクションへの移行

CircleCIと{% data variables.product.prodname_actions %}は、どちらもワークフロー中のタスクを再利用し、共有するための仕組みを提供しています。 CircleCIはorbsという概念を利用します。これはYAMLで書かれ、ワークフロー中で再利用できるタスクを提供します。 {% data variables.product.prodname_actions %}はアクションと呼ばれる強力で柔軟な再利用できるコンポーネントを持っており、これはJavaScriptファイルもしくはDockerイメージで構築できます。 {% data variables.product.product_name %} の API やパブリックに利用可能なサードパーティ API との統合など、リポジトリと相互作用するカスタムコードを書いてアクションを作成することができます。 たとえば、アクションで npm モジュールを公開したり、緊急の問題が発生したときに SMS アラートを送信したり、実稼働可能なコードをデプロイしたりできます。 詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

CircleCIは、YAMLのアンカーとエイリアスでワークフローの部分を再利用できます。 {% data variables.product.prodname_actions %} は、マトリックスを使って、再利用性についてのほとんどのニーズをサポートしています。 マトリックスの詳しい情報については、「[ジョブにマトリックスを使う](/actions/using-jobs/using-a-matrix-for-your-jobs)」を参照してください。

## Dockerイメージの利用


CircleCIと{% data variables.product.prodname_actions %}は、どちらもDockerイメージ内でのステップの実行をサポートします。

CircleCIは、共通の依存関係を持つ一連のビルド済みのイメージを提供します。 これらのイメージでは、`USER` が `circleci` に設定されていますが、これにより、権限が {% data variables.product.prodname_actions %} と競合します。

{% data variables.product.prodname_actions %}への移行に際しては、CircleCIの構築済みイメージから離脱することをおすすめします。 多くの場合、必要な追加の依存関係のインストールにアクションを使うことができます。

{% ifversion ghae %} Docker ファイルシステムの詳しい情報については、[Docker コンテナー ファイルシステム](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)に関するページを参照してください。

{% data reusables.actions.self-hosted-runners-software %} {% else %} Docker ファイルシステムについて詳しくは、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)」を参照してください。

{% data variables.product.prodname_dotcom %} ホステッド ランナー イメージで使用可能なツールとパッケージについて詳しくは、[{% data variables.product.prodname_dotcom %} ホステッド ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)に関するページを参照してください。
{% endif %}

## 変数とシークレットの利用

CircleCIと{% data variables.product.prodname_actions %}は、設定ファイル内での環境変数の設定と、CircleCIもしくは{% data variables.product.product_name %}のUIを使ったシークレットの作成をサポートしています。

詳しい情報については、[環境変数の使用](/actions/configuring-and-managing-workflows/using-environment-variables)と[暗号化されたシークレットの作成と使用](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)に関するページを参照してください。

## キャッシュ

CircleCIと{% data variables.product.prodname_actions %}は、設定ファイル中で手動でファイルをキャッシュする方法を提供しています。

{% ifversion actions-caching %}

以下は、それぞれのシステムにおける構文の例です。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub のアクション
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

{% data variables.product.prodname_actions %}は、CircleCIのDocker Layer Caching（DLC）に相当する機能を持っていません。

## ジョブ間でのデータの永続化

CircleCIと{% data variables.product.prodname_actions %}は、どちらもジョブ間でデータを永続化するための仕組みを提供しています。

以下は、CircleCIと{% data variables.product.prodname_actions %}の設定構文の例です。

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub のアクション
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

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)」を参照してください。

## データベースとサービスコンテナの利用

どちらのシステムでも、データベース、キャッシング、あるいはその他の依存関係のための追加コンテナを含めることができます。

CircleCI では、*config.yaml* で最初に示されているイメージが、コマンドの実行で主に使用されているイメージです。 {% data variables.product.prodname_actions %} では、明示的なセクションを使います。主要なコンテナーには `container` を使い、追加のコンテナーのリストを `services` に表示します。

以下は、CircleCIと{% data variables.product.prodname_actions %}の設定構文の例です。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub のアクション
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26: docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""

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


workflows: version: 2 build: jobs: - ruby-26 ...

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

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
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

詳細については、「[サービス コンテナーについて](/actions/configuring-and-managing-workflows/about-service-containers)」を参照してください。

## コード例全体

以下は実際の例です。 左側には、[thoughtbot/administrator](https://github.com/thoughtbot/administrate) リポジトリの実際の CircleCI *config.yml* が表示されています。 右は、同等の{% data variables.product.prodname_actions %}を示しています。

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub のアクション
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands: shared_steps: steps: - checkout

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

default_job: &default_job working_directory: ~/administrate steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs: ruby-25: <<: *default_job docker: - image: circleci/ruby:2.5.0-node-browsers environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby25 POSTGRES_PASSWORD: ""

  ruby-26: <<: *default_job docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""


workflows: version: 2 multiple-rubies: jobs: - ruby-26 - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
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
</td>
</tr>
</table>
