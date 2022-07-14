---
title: ワークフローについて
shortTitle: ワークフローについて
intro: 'Get a high level overview {% data variables.product.prodname_actions %} workflows, including triggers, syntax, and advanced features.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
---

## ワークフローについて

{% data reusables.actions.about-workflows-long %}

## Workflow basics

A workflow must contain the following basic components:

1. One or more _events_ that will trigger the workflow.
1. One or more _jobs_, each of which will execute on a _runner_ machine and run a series of one or more _steps_.
1. Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.

For more information on these basic components, see "[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)."

![ワークフローの概要](/assets/images/help/images/overview-actions-simple.png)

## Triggering a workflow

{% data reusables.actions.about-triggers %}

For more information, see "[Triggering a workflow](/actions/using-workflows/triggering-a-workflow)", and for a full list of events, see "[Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows)."

## ワークフロー構文

Workflow are defined using YAML. For the full reference of the YAML syntax for authoring workflows, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)."


{% data reusables.actions.workflow-basic-example-and-explanation %}

For more on managing workflow runs, such as re-running, cancelling, or deleting a workflow run, see "[Managing workflow runs](/actions/managing-workflow-runs)."

## Using starter workflows

{% data reusables.actions.workflow-template-overview %}

For more information on using and creating starter workflows, see "[Using starter workflows](/actions/using-workflows/using-starter-workflows)" and "[Creating starter workflows for your organization](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Advanced workflow features

This section briefly describes some of the advanced features of {% data variables.product.prodname_actions %} that help you create more complex workflows.

### シークレットを保存する

ワークフローでパスワードや証明書などの機密データを使用する場合は、これらを {% data variables.product.prodname_dotcom %} に _secrets_ として保存すると、ワークフローで環境変数として使用できます。 This means that you will be able to create and share workflows without having to embed sensitive values directly in the workflow's YAML source.

This example job demonstrates how to reference an existing secret as an environment variable, and send it as a parameter to an example command.

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

For more information, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

### 依存ジョブを作成する

デフォルトでは、ワークフロー内のジョブはすべて同時並行で実行されます。 If you have a job that must only run after another job has completed, you can use the `needs` keyword to create this dependency. If one of the jobs fails, all dependent jobs are skipped; however, if you need the jobs to continue, you can define this using the `if` conditional statement.

この例では、`setup`、`build`、および `test` ジョブが連続して実行され、`build` と `test` は、それらに先行するジョブが正常に完了したかどうかに依存します。

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

For more information, see "[Defining prerequisite jobs](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)."

### Using a matrix

{% data reusables.actions.jobs.about-matrix-strategy %} The matrix is created using the `strategy` keyword, which receives the build options as an array. For example, this matrix will run the job multiple times, using different versions of Node.js:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

For more information, see "[Using a matrix for your jobs](/actions/using-jobs/using-a-matrix-for-your-jobs)."

{% ifversion actions-caching %}
### 依存関係のキャッシング

If your jobs regularly reuse dependencies, you can consider caching these files to help improve performance. キャッシュが作成されると、同じリポジトリ内のすべてのワークフローで使用できるようになります。

この例は、`~/.npm` ディレクトリをキャッシュする方法を示しています。

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

詳しい情報については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。
{% endif %}

### データベースとサービスコンテナの利用

ジョブにデータベースまたはキャッシュサービスが必要な場合は、[`services`](/actions/using-jobs/running-jobs-in-a-container) キーワードを使用して、サービスをホストするための一時コンテナを作成できます。 この例は、ジョブが `services` を使用して `postgres` コンテナを作成し、`node` を使用してサービスに接続する方法を示しています。

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

For more information, see "[Using containerized services](/actions/using-containerized-services)."

### ラベルを使用してワークフローを転送する

特定のタイプのランナーがジョブを処理することを確認したい場合は、ラベルを使用してジョブの実行場所を制御できます。 You can assign labels to a self-hosted runner in addition to their default label of `self-hosted`. Then, you can refer to these labels in your YAML workflow, ensuring that the job is routed in a predictable way.{% ifversion not ghae %} {% data variables.product.prodname_dotcom %}-hosted runners have predefined labels assigned.{% endif %}

この例は、ワークフローがラベルを使用して必要なランナーを指定する方法を示しています。

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

A workflow will only run on a runner that has all the labels in the `runs-on` array. The job will preferentially go to an idle self-hosted runner with the specified labels. {% ifversion fpt or ghec %}If none are available and a {% data variables.product.prodname_dotcom %}-hosted runner with the specified labels exists, the job will go to a {% data variables.product.prodname_dotcom %}-hosted runner.{% endif %}

To learn more about self-hosted runner labels, see "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)."

{% ifversion fpt or ghec %}
To learn more about {% data variables.product.prodname_dotcom %}-hosted runner labels, see "[Supported runners and hardware resources](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reusing workflows
{% data reusables.actions.reusable-workflows %}
{% endif %}

### 環境の使用

You can configure environments with protection rules and secrets to control the execution of jobs in a workflow. ワークフロー内の各ジョブは、1つの環境を参照できます。 この環境を参照するとジョブがランナーに送信される前に、環境に設定された保護ルールをパスしなければなりません。 詳しい情報については「[デプロイメントの環境の利用](/actions/deployment/using-environments-for-deployment)」を参照してください。
