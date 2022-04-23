---
title: 关于工作流程
shortTitle: 关于工作流程
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

## 关于工作流程

{% data reusables.actions.about-workflows-long %}

## Workflow basics

A workflow must contain the following basic components:

1. One or more _events_ that will trigger the workflow.
1. One or more _jobs_, each of which will execute on a _runner_ machine and run a series of one or more _steps_.
1. Each step can either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.

For more information these basic components, see "[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)."

![工作流程概述](/assets/images/help/images/overview-actions-simple.png)

## 触发工作流程

{% data reusables.actions.about-triggers %}

For more information, see "[Triggering a workflow](/actions/using-workflows/triggering-a-workflow)", and for a full list of events, see "[Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows)."

## 工作流程语法

Workflow are defined using YAML. For the full reference of the YAML syntax for authoring workflows, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)."


{% data reusables.actions.workflow-basic-example-and-explanation %}

For more on managing workflow runs, such as re-running, cancelling, or deleting a workflow run, see "[Managing workflow runs](/actions/managing-workflow-runs)."

## 使用入门工作流程

{% data reusables.actions.workflow-template-overview %}

For more information on using and creating starter workflows, see "[Using starter workflows](/actions/using-workflows/using-starter-workflows)" and "[Creating starter workflows for your organization](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## 高级工作流程功能

This section briefly describes some of the advanced features of {% data variables.product.prodname_actions %} that help you create more complex workflows.

### 存储密码

如果您的工作流程使用敏感数据，例如密码或证书， 您可以将这些信息在 {% data variables.product.prodname_dotcom %} 中保存为 _机密_，然后在工作流中将它们用作环境变量。 This means that you will be able to create and share workflows without having to embed sensitive values directly in the workflow's YAML source.

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

更多信息请参阅“[加密密码](/actions/security-guides/encrypted-secrets)”。

### 创建依赖的作业

默认情况下，工作流程中的作业同时并行运行。 If you have a job that must only run after another job has completed, you can use the `needs` keyword to create this dependency. If one of the jobs fails, all dependent jobs are skipped; however, if you need the jobs to continue, you can define this using the `if` conditional statement.

在此示例中，`setup`、`build` 和 `test` 作业连续运行，`build` 和 `test` 取决于其前面的作业成功完成：

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

更多信息请参阅“[定义先决条件作业](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)”。

### 使用构建矩阵

You can use a build matrix if you want your workflow to run tests across multiple combinations of parameters, such as operating systems, platforms, and languages. 构建矩阵是使用 `strategy` 关键字创建的，它接收构建选项作为数组。 例如，此构建矩阵将使用不同版本的 Node.js 多次运行作业：

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [6, 8, 10]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

更多信息请参阅“[对作业使用构建矩阵](/actions/using-jobs/using-a-build-matrix-for-your-jobs)”。

{% ifversion fpt or ghec %}
### 缓存依赖项

{% data variables.product.prodname_dotcom %} 托管的运行器启动为每个作业的新环境，如果您的作业定期重复使用依赖项，您可以考虑缓存这些文件以帮助提高性能。 缓存一旦创建，就可用于同一仓库中的所有工作流程。

此示例演示如何缓存 `~/.npm` 目录：

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

更多信息请参阅“[缓存依赖项以加快工作流程](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。
{% endif %}

### 使用数据库和服务容器

如果作业需要数据库或缓存服务，可以使用 [`services`](/actions/using-jobs/running-jobs-in-a-container) 关键字创建临时容器来托管服务；生成的容器然后可用于该作业中的所有步骤，并在作业完成后删除。 此示例演示作业如何使用 `services` 创建 `postgres` 容器，然后使用 `node` 连接到服务。

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

### 使用标签路由工作流程

如果要确保特定类型的运行器处理作业，可以使用标签来控制作业的执行位置。 除了 `self-hosted` 的默认标签之外，您还可以向自托管运行器分配标签。 然后，您可以在 YAML 工作流程中引用这些标签，确保以可预测的方式安排作业。{% ifversion not ghae %} {% data variables.product.prodname_dotcom %} 托管的运行器已指定预定义的标签。{% endif %}

此示例显示工作流程如何使用标签来指定所需的运行器：

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

工作流程只能在一个所有标签处于 `runs-on` 数组中的运行器上运行。 作业将优先转到具有指定标签的空闲自托管运行器。 {% ifversion fpt or ghec %}If none are available and a {% data variables.product.prodname_dotcom %}-hosted runner with the specified labels exists, the job will go to a {% data variables.product.prodname_dotcom %}-hosted runner.{% endif %}

To learn more about self-hosted runner labels, see "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)."

{% ifversion fpt or ghec %}
To learn more about {% data variables.product.prodname_dotcom %}-hosted runner labels, see "[Supported runners and hardware resources](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### 重新使用工作流程
{% data reusables.actions.reusable-workflows %}
{% endif %}

### 使用环境

You can configure environments with protection rules and secrets to control the execution of jobs in a workflow. 工作流程中的每个作业都可以引用单个环境。 在将引用环境的作业发送到运行器之前，必须通过为环境配置的任何保护规则。 更多信息请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。
