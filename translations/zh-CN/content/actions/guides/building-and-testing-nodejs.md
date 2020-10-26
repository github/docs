---
title: 构建和测试 Node.js
intro: 您可以创建持续集成 (CI) 工作流程来构建和测试您的 Node.js 项目。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

本指南介绍如何创建用来生成和测试 Node.js 代码的持续集成 (CI) 工作流程。 如果 CI 测试通过，您可能想要部署代码或发布包。

### 基本要求

建议基本了解 Node.js、YAML、工作流程配置选项以及如何创建工作流程文件。 更多信息请参阅：

- "[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[开始使用 Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)"

{% data reusables.actions.enterprise-setup-prereq %}

### 从 Node.js 工作流程模板开始

{% data variables.product.prodname_dotcom %} 提供 Node.js 适用于大多数 Node.js 项目的工作流程模板。 本指南包含可用于自定义模板的 npm 和 Yarn 示例。 更多信息请参阅 [Node.js 工作流程模板](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml)。

要快速开始，请将模板添加到仓库的 `.github/workflows` 目录中。

{% raw %}
```yaml
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x, 10.x, 12.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

{% data reusables.github-actions.example-github-runner %}

### 指定 Node.js 版本

指定 Node.js 版本的最简单方法是使用由 {% data variables.product.prodname_dotcom %} 提供的 `setup-node` 操作。 更多信息请参阅 [`setup-node`](https://github.com/actions/setup-node/)。

`setup-node` 操作采用 Node.js 版本作为输入，并在运行器上配置该版本。 `setup-node` 操作从每个运行器上的工具缓存中查找特定版本的 Node.js，并将必要的二进制文件添加到 `PATH`，这可继续用于作业的其余部分。 使用 `setup-node` 操作是 Node.js 与 {% data variables.product.prodname_actions %} 结合使用时的推荐方式，因为它能确保不同运行器和不同版本的 Node.js 行为一致。 如果使用自托管运行器，则必须安装 Node.js 并将其添加到 `PATH`。

模板包含一个矩阵策略：用三个 Node.js 版本 8.x、10.x 和 12.x 构建和测试代码，其中“x”是通配符，匹配可用于版本的最新次要版和补丁版。 "x" 是一个通配符，与版本的最新次要版本和修补程序版本匹配。 `node-version` 阵列中指定的每个 Node.js 版本都会创建一个运行相同步骤的作业。

每个作业都可以使用 `matrix` 上下文访问矩阵 `node-version` 阵列中定义的值。 `setup-node` 操作使用上下文作为 `node-version` 输入。 `setup-node` 操作在构建和测试代码之前使用不同的 Node.js 版本配置每个作业。 有关矩阵策略和上下文的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)”和“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

{% raw %}
```yaml
strategy:
  matrix:
    node-version: [8.x, 10.x, 12.x]

steps:
- uses: actions/checkout@v2
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v1
  with:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

您也可以构建和测试精确的 Node.js 版本。

```yaml
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

或者，您也可以使用单个版本的 Node.js 构建和测试。

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
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

如果不指定 Node.js 版本，{% data variables.product.prodname_dotcom %} 将使用环境的默认 Node.js 版本。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管运行器的规范](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。

### 安装依赖项

{% data variables.product.prodname_dotcom %} 托管的运行器安装了 npm 和 Yarn 依赖项管理器。 在构建和测试代码之前，可以使用 npm 和 Yarn 在工作流程中安装依赖项。 Windows 和 Linux {% data variables.product.prodname_dotcom %} 托管的运行器也安装了 Grunt、Gulp 和 Bower。

您也可以缓存依赖项来加快工作流程。 更多信息请参阅“[缓存依赖项以加快工作流程](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)”。

#### 使用 npm 的示例

此示例安装 *package.json* 文件中定义的依赖项。 更多信息请参阅 [`npm install`](https://docs.npmjs.com/cli/install)。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

使用 `npm ci` 将版本安装到 *package-lock.json* 或 *npm-shrinkwraw.json* 文件并阻止更新锁定文件。 使用 `npm ci` 通常比运行 `npm install` 更快。 更多信息请参阅 [`npm ci`](https://docs.npmjs.com/cli/ci.html) 和“[引入 `npm ci` 以进行更快、更可靠的构建](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)”。

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```
{% endraw %}

#### 使用 Yarn 的示例

此示例安装 *package.json* 文件中定义的依赖项。 更多信息请参阅 [`yarn install`](https://yarnpkg.com/en/docs/cli/install)。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

或者，您可以传递 `--frozen-lockfile` 来安装 *yarn.lock* 文件中的版本，并阻止更新 *yarn.lock* 文件。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

#### 使用私有注册表并创建 .npmrc 文件的示例

{% data reusables.github-actions.setup-node-intro %}

要验证您的私有注册表，需要将 npm 身份验证令牌在仓库设置中存储为密码。 例如，创建名为 `NPM_TOKEN` 的密码。 更多信息请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

在下面的示例中，密码 `NPM_TOKEN` 用于存储 npm 身份验证令牌。 `setup-node` 操作配置 *.npmrc* 文件从 `NODE_AUTH_TOKEN` 环境变量读取 npm 身份验证令牌。 使用 `setup-node` 操作创建 *.npmrc* 文件时，必须使用包含 npm 身份验证令牌的密码设置 `NPM_AUTH_TOKEN` 环境变量。

在安装依赖项之前，使用 `setup-node` 操作创建 *.npmrc* 文件。 该操作有两个输入参数。 `node-version` 参数设置 Node.js 版本，`registry-url` 参数设置默认注册表。 如果包注册表使用作用域，您必须使用 `scope` 参数。 更多信息请参阅 [`npm-scope`](https://docs.npmjs.com/misc/scope)。

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
{% endraw %}

上面的示例创建了一个包含以下内容的 *.npmrc* 文件：

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

#### 缓存依赖项示例

您可以使用唯一的密钥缓存依赖项，并在使用 `cache` 操作运行未来的工作流程时恢复依赖项。 更多信息请参阅“[缓存依赖项以加快工作流程](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)”和 [`cache` 操作](https://github.com/marketplace/actions/cache)。

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Cache Node.js modules
  uses: actions/cache@v2
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm 
    key: ${{ runner.OS }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.OS }}-node-
      ${{ runner.OS }}-
- name: Install dependencies
  run: npm ci
```
{% endraw %}

### 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。 例如，如果您运行 `npm run build` 来运行 *package.json* 文件中定义的构建步骤，运行 `npm test` 来运行测试套件，则要在工作流程文件中添加以下命令。

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

### 将工作流数据打包为构件

您可以保存构建和测试步骤中的构件以在作业完成后查看。 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 更多信息请参阅“[使用构件持久化工作流程](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

### 发布到包注册表

您可以配置工作流程在 CI 测试通过后将 Node.js 包发布到包注册表。 有关发布到 npm 和 {% data variables.product.prodname_registry %} 的更多信息，请参阅“[发布 Node.js 包](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)”。
