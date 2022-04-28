---
title: 关于工作流程
shortTitle: 关于工作流程
intro: '获取 {% data variables.product.prodname_actions %} 工作流程的高级概述，包括触发器、语法和高级功能。'
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

## 工作流程基础知识

工作流程必须包含以下基本组件：

1. 将触发工作流程的一个或多个_事件_。
1. 一个或多个_作业_，每个作业将在_运行器_计算机上执行，并运行一系列一个或多个_步骤_。
1. 每个步骤都可以运行您定义的脚本，也可以运行操作，这是一个可重用的扩展，可以简化您的工作流程。

For more information on these basic components, see "[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)."

![工作流程概述](/assets/images/help/images/overview-actions-simple.png)

## 触发工作流程

{% data reusables.actions.about-triggers %}

更多信息请参阅“[触发工作流程](/actions/using-workflows/triggering-a-workflow)”，有关事件的完整列表，请参阅“[触发工作流程的事件](/actions/using-workflows/events-that-trigger-workflows)”。

## 工作流程语法

工作流程是使用 YAML 定义的。 有关用于创建工作流程的 YAML 语法的完整参考，请参阅“[GitHub Actions 的工作流程语法](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)”。


{% data reusables.actions.workflow-basic-example-and-explanation %}

有关管理工作流程运行（如重新运行、取消或删除工作流程运行）的详细信息，请参阅“[管理工作流程运行](/actions/managing-workflow-runs)”。

## 使用入门工作流程

{% data reusables.actions.workflow-template-overview %}

有关使用和创建入门工作流程的详细信息，请参阅“[使用入门工作流程](/actions/using-workflows/using-starter-workflows)”和“[为组织创建入门工作流程](/actions/using-workflows/creating-starter-workflows-for-your-organization)”。

## 高级工作流程功能

本节简介了 {% data variables.product.prodname_actions %} 的一些高级功能，可帮助您创建更复杂的工作流程。

### 存储密码

如果您的工作流程使用敏感数据，例如密码或证书， 您可以将这些信息在 {% data variables.product.prodname_dotcom %} 中保存为 _机密_，然后在工作流中将它们用作环境变量。 这意味着您将能够创建和共享工作流程，而无需直接在工作流程的 YAML 源中嵌入敏感值。

此示例作业演示如何将现有机密引用为环境变量，并将其作为参数发送到示例命令。

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

默认情况下，工作流程中的作业同时并行运行。 如果您有一个作业必须在另一个作业完成后运行，可以使用 `needs` 关键字来创建此依赖项。 如果其中一个作业失败，则跳过所有从属作业；但如果您需要作业继续，可以使用条件语句 `if` 来定义。

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

更多信息请参阅“[使用容器化服务](/actions/using-containerized-services)”。

### 使用标签路由工作流程

如果要确保特定类型的运行器处理作业，可以使用标签来控制作业的执行位置。 除了 `self-hosted` 的默认标签之外，您还可以向自托管运行器分配标签。 然后，您可以在 YAML 工作流程中引用这些标签，确保以可预测的方式安排作业。{% ifversion not ghae %} {% data variables.product.prodname_dotcom %} 托管的运行器已指定预定义的标签。{% endif %}

此示例显示工作流程如何使用标签来指定所需的运行器：

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

工作流程只能在一个所有标签处于 `runs-on` 数组中的运行器上运行。 作业将优先转到具有指定标签的空闲自托管运行器。 {% ifversion fpt or ghec %}如果没有可用且具有指定标签的 {% data variables.product.prodname_dotcom %} 托管运行器存在，作业将转到 {% data variables.product.prodname_dotcom %} 托管的运行器。{% endif %}

要了解自托管运行器标签的更多信息，请参阅“[将标签与自托管运行器一起使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)”。

{% ifversion fpt or ghec %}
要详细了解 {% data variables.product.prodname_dotcom %} 托管的运行器标签，请参阅[“支持的运行器和硬件资源”](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### 重新使用工作流程
{% data reusables.actions.reusable-workflows %}
{% endif %}

### 使用环境

您可以使用保护规则和机密配置环境，以控制工作流程中作业的执行。 工作流程中的每个作业都可以引用单个环境。 在将引用环境的作业发送到运行器之前，必须通过为环境配置的任何保护规则。 更多信息请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。
