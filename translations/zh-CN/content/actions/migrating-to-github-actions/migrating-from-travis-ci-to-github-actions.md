---
title: 从 Travis CI 迁移到 GitHub Actions
intro: '{% data variables.product.prodname_actions %} 和 Travis CI 有多个相似之处，这有助于很简便地迁移到 {% data variables.product.prodname_actions %}。'
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: 从 Travis CI 迁移
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南可帮助您从 Travis CI 迁移到 {% data variables.product.prodname_actions %}。 它会比较它们的概念和语法、描述相似之处，并演示了它们处理常见任务的不同方法。

## 开始之前

在开始迁移到 {% data variables.product.prodname_actions %} 之前，熟悉其工作原理很有用：

- 有关演示 {% data variables.product.prodname_actions %} 作业的快速示例，请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。
- 要了解 {% data variables.product.prodname_actions %} 的基本概念，请参阅“[GitHub Actions 简介](/actions/learn-github-actions/introduction-to-github-actions)”。

## 比较作业执行

为让您控制 CI 任务何时执行，{% data variables.product.prodname_actions %} _工作流程_默认使用并行运行的_作业_。 每个作业包含按照您定义的顺序执行的_步骤_。 如果需要为作业运行设置和清理操作，可以在每个作业中定义执行这些操作的步骤。

## 主要相似之处

{% data variables.product.prodname_actions %} 和 Travis CI 具有某些相似之处，提前了解这些相似之处有助于顺利迁移过程。

### Using YAML syntax

Travis CI 和 {% data variables.product.prodname_actions %} 同时使用 YAML 创建作业和工作流程，并且这些文件存储在代码仓库中。 有关 {% data variables.product.prodname_actions %} 如何使用 YAML的更多信息，请参阅“[创建工作流程文件](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”。

### 自定义环境变量

Travis CI 允许您设置环境变量并在各个阶段之间共享它们。 同样，{% data variables.product.prodname_actions %} 允许您为步骤、作业或工作流程定义环境变量。 更多信息请参阅“[环境变量](/actions/reference/environment-variables)”。

### 默认环境变量

Travis CI 和 {% data variables.product.prodname_actions %} 都包括可以在 YAML 文件中使用的默认环境变量。 对于 {% data variables.product.prodname_actions %}，您可以在“[默认环境变量](/actions/reference/environment-variables#default-environment-variables)”中查看这些变量。

### 并行作业处理

Travis CI 可以使用 `stages` 并行运行作业。 同样，{% data variables.product.prodname_actions %} 也可以并行运行 `jobs`。 更多信息请参阅“[创建依赖的作业](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs)”。

### 状态徽章

Travis CI 和 {% data variables.product.prodname_actions %} 都支持状态徽章，用于表示构建是通过还是失败。 更多信息请参阅“[将工作流程状态徽章添加到仓库](/actions/managing-workflow-runs/adding-a-workflow-status-badge)”。

### 使用构建矩阵

Travis CI和 {% data variables.product.prodname_actions %} 都支持构建矩阵，允许您使用操作系统和软件包的组合进行测试。 更多信息请参阅“[使用构建矩阵](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)”。

下面是比较每个系统的语法示例：

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

### 定向特定分支

Travis CI 和 {% data variables.product.prodname_actions %} 允许您将 CI 定向到特定分支。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”。

下面是每个系统的语法示例：

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

### 检出子模块

Travis CI 和 {% data variables.product.prodname_actions %} 都允许您控制子模块是否包含在仓库克隆中。

下面是每个系统的语法示例：

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- uses: actions/checkout@v2
  with:
    submodules: false
```
{% endraw %}
</td>
</tr>
</table>

### 在矩阵中使用环境变量

Travis CI 和 {% data variables.product.prodname_actions %} 可以将自定义环境变量添加到测试矩阵，这可让您在后面的步骤中引用该变量。

在 {% data variables.product.prodname_actions %}中，您可以使用 `include` 键将自定义环境变量添加到矩阵中。 {% data reusables.actions.matrix-variable-example %}

## {% data variables.product.prodname_actions %} 中的关键功能

从 Travis CI 迁移时，请考虑 {% data variables.product.prodname_actions %} 中的以下关键功能：

### 存储密码

{% data variables.product.prodname_actions %} 允许您存储密码并在作业中引用它们。 {% data variables.product.prodname_actions %} 组织可以限制哪些仓库能够访问组织机密。 环境保护规则可能需要手动批准工作流程才能访问环境秘密。 更多信息请参阅“[加密密码](/actions/reference/encrypted-secrets)”。

### 在作业和工作流程之间共享文件

{% data variables.product.prodname_actions %} 包括对构件存储的集成支持，允许您在工作流程中的作业之间共享文件。 您还可以保存生成的文件，并与其他工作流程共享它们。 更多信息请参阅“[在作业之间共享数据](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs)”。

### 托管您自己的运行器

如果您的作业需要特定的硬件或软件，{% data variables.product.prodname_actions %} 允许您托管自己的运行器，并将其作业发送给它们进行处理。 {% data variables.product.prodname_actions %} 还允许您使用策略来控制访问这些运行器的方式，在组织或仓库级别授予访问权限。 更多信息请参阅“[托管您自己的运行器](/actions/hosting-your-own-runners)”。

{% ifversion fpt or ghec %}

### 并行作业和执行时间

{% data variables.product.prodname_actions %} 中的并行作业和工作流程执行时间因 {% data variables.product.company_short %} 计划而异。 更多信息请参阅“[使用限制、计费和管理](/actions/reference/usage-limits-billing-and-administration)”。

{% endif %}

### 在 {% data variables.product.prodname_actions %} 中使用不同的语言

在 {% data variables.product.prodname_actions %} 中使用不同语言时，您可以在作业中创建步骤来设置语言依赖项。 有关使用特定语言的信息，请参阅特定指南：
  - [构建并测试 Node.js 或 Python](/actions/guides/building-and-testing-nodejs-or-python)
  - [构建和测试 PowerShell](/actions/guides/building-and-testing-powershell)
  - [使用 Maven 构建和测试 Java](/actions/guides/building-and-testing-java-with-maven)
  - [使用 Gradle 构建和测试 Java](/actions/guides/building-and-testing-java-with-gradle)
  - [使用 Ant 构建和测试 Java](/actions/guides/building-and-testing-java-with-ant)

## 执行脚本

{% data variables.product.prodname_actions %} 可以使用 `run` 步骤运行脚本或 shell 命令。 要使用特定的 shell，您可以在提供脚本路径时指定 `shell` 类型。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

例如：

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## {% data variables.product.prodname_actions %} 中的错误处理

迁移到 {% data variables.product.prodname_actions %} 时，可能需要注意不同的错误处理方法。

### 脚本错误处理

如果其中一个步骤返回错误代码，{% data variables.product.prodname_actions %} 将立即停止作业。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)”。

### 作业错误处理

{% data variables.product.prodname_actions %} 使用 `if` 条件在特定情况下执行作业或步骤。 例如，您可以在某个步骤导致 `failure()` 时运行另一个步骤。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions)”。  您也可以使用 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) 防止工作流程在作业失败时停止运行。

## 迁移条件和表达式的语法

要在条件表达式下运行作业，Travis CI 和 {% data variables.product.prodname_actions %} 具有类似的 `if` 条件语法。 {% data variables.product.prodname_actions %} 允许您使用 `if` 条件使作业或步骤仅在满足条件时才运行。 更多信息请参阅“[表达式](/actions/learn-github-actions/expressions)”。

此示例演示 `if` 条件如何控制是否执行步骤：

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## 将阶段迁移到步骤

其中 Travis CI 使用_阶段_来运行_步骤_，{% data variables.product.prodname_actions %} 具有_步骤_来执行_操作_。 您可以在 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 中找到预建的操作，也可以创建自己的操作。 更多信息请参阅“[创建操作](/actions/building-actions)”。

下面是每个系统的语法示例：

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

script:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-python@v2
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```
{% endraw %}
</td>
</tr>
</table>

## 缓存依赖项

Travis CI 和 {% data variables.product.prodname_actions %} 可让您手动缓存依赖供以后使用。 此示例说明每个系统的缓存语法。

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
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

{% data variables.product.prodname_actions %} 缓存仅适用于 {% data variables.product.prodname_dotcom_the_website %} 托管的仓库。 更多信息请参阅“<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">缓存依赖项以加快工作流程</a>”。

## 常见任务示例

本节比较了 {% data variables.product.prodname_actions %} 和 Travis CI 执行共同任务的方式。

### 配置环境变量

您可以在 {% data variables.product.prodname_actions %} 作业中创建自定义环境变量。 例如：

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %} 工作流程
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### 使用 Node.js 构建

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %} 工作流程
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>
{% raw %}
```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```
{% endraw %}
</td>
</tr>
</table>

## 后续步骤

要继续了解 {% data variables.product.prodname_actions %} 的主要功能，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。
