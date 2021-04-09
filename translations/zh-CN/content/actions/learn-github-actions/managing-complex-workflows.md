---
title: 管理复杂的工作流程
shortTitle: 管理复杂的工作流程
intro: '本指南说明如何使用 {% data variables.product.prodname_actions %} 的高级功能，包括机密管理、相关作业、缓存、生成矩阵、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}环境{% endif %}和标签。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'how_to'
topics:
  - '工作流程'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 概览

本文介绍了 {% data variables.product.prodname_actions %} 的一些高级功能，可帮助您创建更复杂的工作流程。

### 存储密码

如果您的工作流程使用敏感数据，例如密码或证书， 您可以将这些信息在 {% data variables.product.prodname_dotcom %} 中保存为 _机密_，然后在工作流中将它们用作环境变量。 这意味着您将能够创建和共享工作流程，而无需直接在 YAML 工作流程中嵌入敏感值。

此示例操作演示如何将现有机密引用为环境变量，并将其作为参数发送到示例命令。

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
    runs-on: ubuntu-latest
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

{% if currentVersion == "free-pro-team@latest" %}
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

更多信息请参阅“<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">缓存依赖项以加快工作流程</a>”。
{% endif %}

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

此功能可帮助您将作业分配到特定的托管运行器。 如果要确保特定类型的运行器处理作业，可以使用标签来控制作业的执行位置。 您可以将标签分配给托管的运行器，然后在您的 YAML 工作流程中提及这些标签， 确保以可预测的方式路由作业。

{% if currentVersion == "github-ae@latest" %}
此示例显示工作流程如何使用标签来指定所需的运行器：

```yaml
jobs:
  example-job:
    runs-on: [AE-runner-for-CI]
```

更多信息请参阅“[将标签与 {% data variables.actions.hosted_runner %} 一起使用](/actions/using-github-hosted-runners/using-labels-with-ae-hosted-runners)”。
{% else %}
```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

更多信息请参阅“[将标签与自托管运行器一起使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
### 使用环境

您可以使用保护规则和机密配置环境。 工作流程中的每个作业都可以引用单个环境。 在将引用环境的作业发送到运行器之前，必须通过为环境配置的任何保护规则。 更多信息请参阅“[环境](/actions/reference/environments)”。
{% endif %}

### 使用工作流程模板

{% data reusables.actions.workflow-template-overview %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 如果您的仓库已经有工作流程：在左上角单击 **New workflow（新工作流程）**。 ![创建新工作流程](/assets/images/help/repository/actions-new-workflow.png)
1. 在您想要使用的模板名称下，单击 **Set up this workflow（设置此工作流程）**。 ![设置此工作流程](/assets/images/help/settings/actions-create-starter-workflow.png)

### 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[与组织共享工作流程](/actions/learn-github-actions/sharing-workflows-with-your-organization)”。
