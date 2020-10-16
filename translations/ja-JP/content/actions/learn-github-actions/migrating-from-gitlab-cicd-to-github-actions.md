---
title: Migrating from GitLab CI/CD to GitHub Actions
intro: '{% data variables.product.prodname_actions %} and GitLab CI/CD share several configuration similarities, which makes migrating to {% data variables.product.prodname_actions %} relatively straightforward.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

GitLab CI/CD and {% data variables.product.prodname_actions %} both allow you to create workflows that automatically build, test, publish, release, and deploy code. GitLab CI/CD and {% data variables.product.prodname_actions %} share some similarities in workflow configuration:

- ワークフローの設定ファイルはYAMLで書かれ、コードのリポジトリに保存されます。
- ワークフローには1つ以上のジョブが含まれます。
- ジョブには1つ以上のステップもしくは個別のコマンドが含まれます。
- Jobs can run on either managed or self-hosted machines.

There are a few differences, and this guide will show you the important differences so that you can migrate your workflow to {% data variables.product.prodname_actions %}.

### Jobs

Jobs in GitLab CI/CD are very similar to jobs in {% data variables.product.prodname_actions %}. どちらのシステムでも、ジョブは以下の特徴を持ちます。

* Jobs contain a series of steps or scripts that run sequentially.
* Jobs can run on separate machines or in separate containers.
* ジョブは、デフォルトでは並列に実行されますが、順次実行するように設定することもできます。

You can run a script or a shell command in a job. In GitLab CI/CD, script steps are specified using the `script` key. {% data variables.product.prodname_actions %}では、すべてのスクリプトは`run`キーを使って指定されます。

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

Runners are machines on which the jobs run. Both GitLab CI/CD and {% data variables.product.prodname_actions %} offer managed and self-hosted variants of runners. In GitLab CI/CD, `tags` are used to run jobs on different platforms, while in {% data variables.product.prodname_actions %} it is done with the `runs-on` key.

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

For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)."

### Docker images

Both GitLab CI/CD and {% data variables.product.prodname_actions %} support running jobs in a Docker image. In GitLab CI/CD, Docker images are defined with a `image` key, while in {% data variables.product.prodname_actions %} it is done with the `container` key.

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

For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)."

### Condition and expression syntax

GitLab CI/CD uses `rules` to determine if a job will run for a specific condition. {% data variables.product.prodname_actions %} uses the `if` keyword to prevent a job from running unless a condition is met.

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
    - echo "Deply to production server"
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
      - run: echo "Deply to production server"
```
{% endraw %}
</td>
</tr>
</table>

詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions)」を参照してください。

### Dependencies between Jobs

Both GitLab CI/CD and {% data variables.product.prodname_actions %} allow you to set dependencies for a job. In both systems, jobs run in parallel by default, but job dependencies in {% data variables.product.prodname_actions %} can be specified explicitly with the `needs` key. GitLab CI/CD also has a concept of `stages`, where jobs in a stage run concurrently, but the next stage will start when all the jobs in the previous stage have completed. You can recreate this scenario in {% data variables.product.prodname_actions %} with the `needs` key.

以下は、それぞれのシステムにおける構文の例です。 The workflows start with two jobs named `build_a` and `build_b` running in parallel, and when those jobs complete, another job called `test_ab` will run. Finally, when `test_ab` completes, the `deploy_ab` job will run.

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

### Scheduling workflows

Both GitLab CI/CD and {% data variables.product.prodname_actions %} allow you to run workflows at a specific interval. In GitLab CI/CD, pipeline schedules are configured with the UI, while in {% data variables.product.prodname_actions %} you can trigger a workflow on a scheduled interval with the "on" key.

For more information, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#scheduled-events)."

### Variables and secrets

GitLab CI/CD and {% data variables.product.prodname_actions %} support setting environment variables in the pipeline or workflow configuration file, and creating secrets using the GitLab or {% data variables.product.product_name %} UI.

For more information, see "[Environment variables](/actions/reference/environment-variables)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."

### キャッシング

GitLab CI/CD and {% data variables.product.prodname_actions %} provide a method in the configuration file to manually cache workflow files.

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

For more information, see "[Caching dependencies to speed up workflows](/actions/guides/caching-dependencies-to-speed-up-workflows)."

### 成果物

Both GitLab CI/CD and {% data variables.product.prodname_actions %} can upload files and directories created by a job as artifacts. In {% data variables.product.prodname_actions %}, artifacts can be used to persist data across multiple jobs.

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

For more information, see "[Storing workflow data as artifacts](/actions/guides/storing-workflow-data-as-artifacts)."

### Databases and service containers

どちらのシステムでも、データベース、キャッシング、あるいはその他の依存関係のための追加コンテナを含めることができます。

In GitLab CI/CD, a container for the job is specified with the `image` key, while {% data variables.product.prodname_actions %} uses the `container` key. In both systems, additional service containers are specified with the `services` key.

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
{% endraw %}
</td>
</tr>
</table>

For more information, see "[About service containers](/actions/guides/about-service-containers)."
