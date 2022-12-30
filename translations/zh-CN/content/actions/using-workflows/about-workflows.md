---
title: 关于工作流程
shortTitle: About workflows
intro: '获取简要概述 {% data variables.product.prodname_actions %} 工作流，包括触发器、语法和高级功能。'
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
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180509'
---
## 关于工作流程

{% data reusables.actions.about-workflows-long %}

## 工作流基础知识

工作流必须包含以下基本组件：

1. 一个或多个将触发工作流的事件。
1. 一个或多个作业，每个作业都将在运行器计算机上执行，并运行一系列（一个或多个）步骤  。
1. 每个步骤都可以运行你定义的脚本或运行操作，这是一个可简化工作流的可重用扩展。

有关这些基本组件的详细信息，请参阅“[了解 GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)”。

![工作流概述](/assets/images/help/images/overview-actions-simple.png)

## 触发工作流程

{% data reusables.actions.about-triggers %}

有关详细信息，请参阅“[触发工作流](/actions/using-workflows/triggering-a-workflow)”，有关事件的完整列表，请参阅“[触发工作流的事件](/actions/using-workflows/events-that-trigger-workflows)”。

## 工作流程语法

工作流程是使用 YAML 定义的。 有关用于创作工作流的 YAML 语法的完整参考，请参阅“[GitHub Actions 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)”。


{% data reusables.actions.workflow-basic-example-and-explanation %}

有关管理工作流运行（例如重新运行、取消或删除工作流运行）的详细信息，请参阅“[管理工作流运行](/actions/managing-workflow-runs)”。

## 使用入门工作流程

{% data reusables.actions.workflow-template-overview %}

有关使用和创建入门工作流的详细信息，请参阅“[使用入门工作流](/actions/using-workflows/using-starter-workflows)”和“[为组织创建入门工作流](/actions/using-workflows/creating-starter-workflows-for-your-organization)”。

## 高级工作流程功能

本部分简要介绍了 {% data variables.product.prodname_actions %} 的一些高级功能，可帮助你创建更复杂的工作流。

### 存储机密

如果你的工作流使用密码或证书等敏感数据，你可以将这些数据作为机密保存在 {% data variables.product.prodname_dotcom %} 中，然后在工作流中将它们用作环境变量。 这意味着你将能够创建和共享工作流，而无需直接在工作流的 YAML 源中嵌入敏感值。

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

有关详细信息，请参阅“[加密机密](/actions/security-guides/encrypted-secrets)”。

### 创建依赖的作业

默认情况下，工作流程中的作业同时并行运行。 如果你有一个作业只能在另一个作业完成后运行，则可以使用 `needs` 关键字来创建此依赖项。 如果其中一个作业失败，则跳过所有从属作业；但如果需要作业继续运行，可以使用 `if` 条件语句来定义。

在此示例中，`setup`、`build` 和 `test` 作业连续运行，其中 `build` 和 `test` 取决于其前面的作业是否成功完成：

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

有关详细信息，请参阅“[定义先决条件作业](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)”。

### 使用矩阵

{% data reusables.actions.jobs.about-matrix-strategy %} 矩阵是使用 `strategy` 关键字创建的，该关键字接收生成选项作为数组。 例如，此矩阵将使用不同版本的 Node.js 多次运行作业：

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

有关详细信息，请参阅“[为作业使用矩阵](/actions/using-jobs/using-a-matrix-for-your-jobs)”。

{% ifversion actions-caching %}
### 缓存依赖项

如果你的作业定期重用依赖项，你可以考虑缓存这些文件以帮助提高性能。 缓存一旦创建，就可用于同一仓库中的所有工作流程。

此示例演示如何缓存 ` ~/.npm` 目录：

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

有关详细信息，请参阅“[缓存依赖项以加快工作流](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。
{% endif %}

### 使用数据库和服务容器

如果作业需要数据库或缓存服务，可以使用 [`services`](/actions/using-jobs/running-jobs-in-a-container) 关键字创建临时容器来托管服务；生成的容器随后可用于该作业中的所有步骤，并在作业完成后删除。 此示例演示作业如何使用 `services` 创建 `postgres` 容器，然后使用 `node` 连接到服务。

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

有关详细信息，请参阅“[使用容器化服务](/actions/using-containerized-services)”。

### 使用标签路由工作流程

如果要确保特定类型的运行器处理作业，可以使用标签来控制作业的执行位置。 除了默认标签 `self-hosted` 之外，还可以为自托管运行器分配其他标签。 然后，您可以在 YAML 工作流程中引用这些标签，确保以可预测的方式安排作业。{% ifversion not ghae %} {% data variables.product.prodname_dotcom %} 托管的运行器已指定预定义的标签。{% endif %}

此示例显示工作流程如何使用标签来指定所需的运行器：

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

工作流只能在所有标签处于 `runs-on` 数组中的运行器上运行。 作业将优先转到具有指定标签的空闲自托管运行器。 {% ifversion fpt or ghec %}如果没有可用且具有指定标签的 {% data variables.product.prodname_dotcom %} 托管的运行器，作业将转到 {% data variables.product.prodname_dotcom %} 托管的运行器。{% endif %}

有关自托管运行器标签的详细信息，请参阅“[将标签与自托管运行器一起使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)”。

{% ifversion fpt or ghec %} 有关 {% data variables.product.prodname_dotcom %} 托管的运行器标签的详细信息，请参阅“[支持的运行器和硬件资源](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)”。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### 重新使用工作流
{% data reusables.actions.reusable-workflows %} {% endif %}

### 使用环境

可以使用保护规则和机密配置环境，以控制工作流中作业的执行。 工作流程中的每个作业都可以引用单个环境。 在将引用环境的作业发送到运行器之前，必须通过为环境配置的任何保护规则。 有关详细信息，请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。
