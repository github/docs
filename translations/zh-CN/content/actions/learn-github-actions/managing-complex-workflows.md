---
title: 管理复杂的工作流程
shortTitle: 管理复杂的工作流程
intro: '本指南演示如何使用 {% data variables.product.prodname_actions %} 的高级功能，包括机密管理、从属作业、缓存、构建矩阵和标签。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概览

本文介绍了 {% data variables.product.prodname_actions %} 的一些高级功能，可帮助您创建更复杂的工作流程。

### 存储密码

如果您的工作流程使用敏感数据，例如密码或证书， 您可以将这些信息在 {% data variables.product.prodname_dotcom %} 中保存为 _机密_，然后在工作流中将它们用作环境变量。 这意味着您将能够创建和共享工作流程，而无需直接在 YAML 工作流程中嵌入敏感值。

此示例操作演示如何将现有机密引用为环境变量，并将其作为参数发送到示例命令。

{% raw %}
```yaml
jobs:
  example-job:
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$SUPER_SECRET"
```
{% endraw %}

更多信息请参阅“[创建和存储加密密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。

### 创建依赖的作业

默认情况下，工作流程中的作业同时并行运行。 因此，如果您有一个作业必须在另一个作业完成后运行，可以使用 `needs` 关键字来创建此依赖项。 如果其中一个作业失败，则跳过所有从属作业；但如果您需要作业继续，可以使用条件语句 [`if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) 来定义。

在此示例中，`setup`、`build` 和 `test` 作业连续运行，`build` 和 `test` 取决于其前面的作业成功完成：

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh 
```

更多信息请参阅 [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)。

### 使用构建矩阵

如果您希望工作流程跨操作系统、平台和语言的多个组合运行测试，可以使用构建矩阵。 构建矩阵是使用 `strategy` 关键字创建的，它接收构建选项作为数组。 例如，此构建矩阵将使用不同版本的 Node.js 多次运行作业：

{% raw %}
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [6, 8, 10]
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
```
{% endraw %}

更多信息请参阅 [`jobs.<job_id>.strategy.matrix`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)。

### 缓存依赖项

{% data variables.product.prodname_dotcom %} 托管的运行器启动为每个作业的新环境，如果您的作业定期重复使用依赖项，您可以考虑缓存这些文件以帮助提高性能。 缓存一旦创建，就可用于同一仓库中的所有工作流程。

此示例演示如何缓存 `~/.npm` 目录：

{% raw %}
```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
```
{% endraw %}

更多信息请参阅“[缓存依赖项以加快工作流程](/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows)”。

### 使用数据库和服务容器

如果作业需要数据库或缓存服务，可以使用 [`services`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idservices) 关键字创建临时容器来托管服务；生成的容器然后可用于该作业中的所有步骤，并在作业完成后删除。 此示例演示作业如何使用 `services` 创建 `postgres` 容器，然后使用 `node` 连接到服务。

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
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

更多信息请参阅“[使用数据库和服务容器](/actions/configuring-and-managing-workflows/using-databases-and-service-containers)”。

### 使用标签路由工作流程

此功能可帮助您将作业分配到特定的自托管运行器。 如果要确保特定类型的运行器处理作业，可以使用标签来控制作业的执行位置。 您可以将标签分配给自托管的运行器，然后在您的 YAML 工作流程中提及这些标签， 确保以可预测的方式路由作业。

此示例显示工作流程如何使用标签来指定所需的运行器：

```yaml
jobs:
  example-job:
      runs-on: [self-hosted, linux, x64, gpu]
```

更多信息请参阅“[将标签与自托管运行器一起使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)”。

### 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[与组织共享工作流程](/actions/learn-github-actions/sharing-workflows-with-your-organization)”。
