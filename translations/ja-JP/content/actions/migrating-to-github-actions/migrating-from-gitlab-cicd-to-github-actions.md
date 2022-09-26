---
title: GitLab CI/CD から GitHub Actions への移行
intro: '{% data variables.product.prodname_actions %} と GitLab CI/CDはいくつかの点で設定が似ているため、{% data variables.product.prodname_actions %} への移行は比較的簡単です。'
redirect_from:
  - /actions/learn-github-actions/migrating-from-gitlab-cicd-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - GitLab
  - Migration
  - CI
  - CD
shortTitle: Migrate from GitLab CI/CD
ms.openlocfilehash: d0d5f2cae928f95b1a614826f270342f376db0de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178984'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

GitLab CI/CD と {% data variables.product.prodname_actions %} は、どちらも自動的にコードのビルド、テスト、公開、リリース、デプロイを行うワークフローを作成できます。 GitLab CI/CD と {% data variables.product.prodname_actions %} は、ワークフローの設定において似ているところがあります。

- ワークフローの設定ファイルはYAMLで書かれ、コードのリポジトリに保存されます。
- ワークフローには1つ以上のジョブが含まれます。
- ジョブには1つ以上のステップもしくは個別のコマンドが含まれます。
- ジョブは、マネージドマシンまたはセルフホストマシンのいずれかで実行できます。

いくつかの違いがありますので、このガイドでは、ワークフローを {% data variables.product.prodname_actions %} に移行できるようにする際の重要な違いを説明します。

## ジョブ

GitLab CI/CD のジョブは、{% data variables.product.prodname_actions %} のジョブと非常によく似ています。 どちらのシステムでも、ジョブは以下の特徴を持ちます。

* ジョブには、順番に実行される一連のステップまたはスクリプトが含まれています。
* ジョブは、個別のマシンまたは個別のコンテナで実行できます。
* ジョブは、デフォルトでは並列に実行されますが、順次実行するように設定することもできます。

ジョブ内でスクリプトまたはシェルコマンドを実行できます。 GitLab CI/CD では、`script` キーを使ってスクリプトのステップを指定します。 {% data variables.product.prodname_actions %} では、`run` キーを使ってすべてのスクリプトを指定します。

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

```yaml
jobs:
  job1:
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: echo "Run your script here"
```

</td>
</tr>
</table>

## ランナー

ランナーは、ジョブが実行されるマシンです。 GitLab CI/CD と {% data variables.product.prodname_actions %} はどちらも、マネージドおよびセルフホストのランナーのバリエーションを提供しています。 GitLab CI/CD では、異なるプラットフォームでジョブを実行するために `tags` を使いますが、{% data variables.product.prodname_actions %} では `runs-on` を使います。

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

linux_job: tags:
    - linux script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on: windows-latest
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

詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)に関するページを参照してください。

## Docker イメージ

GitLab CI/CD と {% data variables.product.prodname_actions %} はどちらも、Docker イメージ内でのジョブの実行をサポートしています。 GitLab CI/CD では、`image` キーを使って Docker イメージを定義しますが、{% data variables.product.prodname_actions %} では `container` キーで行います。

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

詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)に関するページを参照してください。

## 条件と式の構文

GitLab CI/CD では、特定の条件でジョブを実行するかどうかを決定するために `rules` を使います。 {% data variables.product.prodname_actions %} では、条件が満たされない場合にジョブが実行されないようにするには、`if` キーワードを使います。

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

詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

## ジョブ間の依存関係

GitLab CI/CD と {% data variables.product.prodname_actions %} の両方で、ジョブの依存関係を設定できます。 どちらのシステムでも、ジョブは既定で並列に実行されますが、{% data variables.product.prodname_actions %} のジョブの依存関係は `needs` キーで明示的に指定できます。 GitLab CI/CD には、`stages` の概念もあります。ステージ内のジョブは同時に実行されますが、次のステージは、前のステージのすべてのジョブが完了した時点で開始されます。 {% data variables.product.prodname_actions %} では、`needs` キーを使ってこのシナリオを作り直すことができます。

以下は、それぞれのシステムにおける構文の例です。 ワークフローは並列に実行される `build_a` と `build_b` という名前の 2 つのジョブで開始し、それらのジョブが完了すると、`test_ab` という別のジョブが実行されます。 最後に、`test_ab` が完了すると、`deploy_ab` ジョブが実行されます。

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

build_a: stage: build script:
    - echo "This job will run first."

build_b: stage: build script:
    - echo "This job will run first, in parallel with build_a."

test_ab: stage: test script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab: stage: deploy script:
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

詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)に関するページを参照してください。

## ワークフローのスケジューリング

GitLab CI/CD と {% data variables.product.prodname_actions %} の両方を使用すると、特定の間隔でワークフローを実行できます。 GitLab CI/CD では、パイプラインスケジュールは UI で設定されますが、{% data variables.product.prodname_actions %} では、「on」キーを使用してスケジュールされた間隔でワークフローをトリガーできます。

詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#scheduled-events)」を参照してください。

## 変数とシークレット

GitLab CI/CD および {% data variables.product.prodname_actions %} は、パイプラインまたはワークフロー設定ファイルでの環境変数の設定、および GitLab または {% data variables.product.product_name %} UI を使用したシークレットの作成をサポートしています。

詳しくは、「[環境変数](/actions/reference/environment-variables)」と「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」をご覧ください。

## キャッシュ

GitLab CI/CD と {% data variables.product.prodname_actions %} では、設定ファイルにワークフローファイルを手動でキャッシュするためのメソッドがあります。

{% ifversion actions-caching %}

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

cache: key: $CI_COMMIT_REF_SLUG paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async: script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  test_async:
    runs-on: ubuntu-latest
    steps:
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

## Artifacts

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

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt
```

</td>
</tr>
</table>

詳しくは、「[ワークフロー データを成果物として保存する](/actions/guides/storing-workflow-data-as-artifacts)」をご覧ください。

## データベースとサービスコンテナ

どちらのシステムでも、データベース、キャッシング、あるいはその他の依存関係のための追加コンテナを含めることができます。

GitLab CI/CD ではジョブのコンテナーを `image` キーで指定しますが、{% data variables.product.prodname_actions %} では `container` キーを使います。 どちらのシステムでも、追加のサービス コンテナーは `services` キーで指定します。

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
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

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
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

</td>
</tr>
</table>

詳細については、「[サービス コンテナーについて](/actions/guides/about-service-containers)」を参照してください。
