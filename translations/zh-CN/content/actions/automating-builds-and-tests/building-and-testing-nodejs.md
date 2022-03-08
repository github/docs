---
title: 构建和测试 Node.js
intro: 您可以创建持续集成 (CI) 工作流程来构建和测试您的 Node.js 项目。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
  - /actions/guides/building-and-testing-nodejs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
hidden: true
topics:
  - CI
  - Node
  - JavaScript
shortTitle: 构建和测试 Node.js
hasExperimentalAlternative: true
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何创建用来生成和测试 Node.js 代码的持续集成 (CI) 工作流程。 如果 CI 测试通过，您可能想要部署代码或发布包。

## 基本要求

建议基本了解 Node.js、YAML、工作流程配置选项以及如何创建工作流程文件。 更多信息请参阅：

- "[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[开始使用 Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)"

{% data reusables.actions.enterprise-setup-prereq %}

## Using the Node.js starter workflow

{% data variables.product.prodname_dotcom %} provides a Node.js starter workflow that will work for most Node.js projects. This guide includes npm and Yarn examples that you can use to customize the starter workflow. For more information, see the [Node.js starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

To get started quickly, add the starter workflow to the `.github/workflows` directory of your repository. 下面显示的工作流假定仓库的默认分支是 `main`。

{% raw %}
```yaml{:copy}
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```
{% endraw %}

{% data reusables.actions.example-github-runner %}

## 指定 Node.js 版本

指定 Node.js 版本的最简单方法是使用由 {% data variables.product.prodname_dotcom %} 提供的 `setup-node` 操作。 更多信息请参阅 [`setup-node`](https://github.com/actions/setup-node/)。

`setup-node` 操作采用 Node.js 版本作为输入，并在运行器上配置该版本。 `setup-node` 操作从每个运行器上的工具缓存中查找特定版本的 Node.js，并将必要的二进制文件添加到 `PATH`，这可继续用于作业的其余部分。 使用 `setup-node` 操作是 Node.js 与 {% data variables.product.prodname_actions %} 结合使用时的推荐方式，因为它能确保不同运行器和不同版本的 Node.js 行为一致。 如果使用自托管运行器，则必须安装 Node.js 并将其添加到 `PATH`。

The starter workflow includes a matrix strategy that builds and tests your code with four Node.js versions: 10.x, 12.x, 14.x, and 15.x. "x" 是一个通配符，与版本的最新次要版本和修补程序版本匹配。 `node-version` 阵列中指定的每个 Node.js 版本都会创建一个运行相同步骤的作业。

每个作业都可以使用 `matrix` 上下文访问矩阵 `node-version` 阵列中定义的值。 `setup-node` 操作使用上下文作为 `node-version` 输入。 `setup-node` 操作在构建和测试代码之前使用不同的 Node.js 版本配置每个作业。 For more information about matrix strategies and contexts, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" and "[Contexts](/actions/learn-github-actions/contexts)."

{% raw %}
```yaml{:copy}
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x, 15.x]

steps:
- uses: actions/checkout@v2
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v2
  with:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

您也可以构建和测试精确的 Node.js 版本。

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

或者，您也可以使用单个版本的 Node.js 构建和测试。

{% raw %}
```yaml{:copy}
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
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```
{% endraw %}

如果不指定 Node.js 版本，{% data variables.product.prodname_dotcom %} 将使用环境的默认 Node.js 版本。
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %}
{% else %}更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管运行器的规范](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。
{% endif %}

## 安装依赖项

{% data variables.product.prodname_dotcom %} 托管的运行器安装了 npm 和 Yarn 依赖项管理器。 在构建和测试代码之前，可以使用 npm 和 Yarn 在工作流程中安装依赖项。 Windows 和 Linux {% data variables.product.prodname_dotcom %} 托管的运行器也安装了 Grunt、Gulp 和 Bower。

使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，您还可以缓存依赖项以加速工作流程。 更多信息请参阅“<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">缓存依赖项以加快工作流程</a>”。

### 使用 npm 的示例

此示例安装 *package.json* 文件中定义的依赖项。 更多信息请参阅 [`npm install`](https://docs.npmjs.com/cli/install)。

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v2
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

使用 `npm ci` 将版本安装到 *package-lock.json* 或 *npm-shrinkwraw.json* 文件并阻止更新锁定文件。 使用 `npm ci` 通常比运行 `npm install` 更快。 更多信息请参阅 [`npm ci`](https://docs.npmjs.com/cli/ci.html) 和“[引入 `npm ci` 以进行更快、更可靠的构建](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)”。

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v2
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```
{% endraw %}

### 使用 Yarn 的示例

此示例安装 *package.json* 文件中定义的依赖项。 更多信息请参阅 [`yarn install`](https://yarnpkg.com/en/docs/cli/install)。

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v2
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

或者，您可以传递 `--frozen-lockfile` 来安装 `yarn.lock` 文件中的版本，并阻止更新 `yarn.lock` 文件。

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v2
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

### 使用私有注册表并创建 .npmrc 文件的示例

{% data reusables.actions.setup-node-intro %}

要验证您的私有注册表，需要将 npm 身份验证令牌存储为密码。 例如，创建名为 `NPM_TOKEN` 的仓库密码。 更多信息请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

在下面的示例中，密码 `NPM_TOKEN` 用于存储 npm 身份验证令牌。 `setup-node` 操作配置 *.npmrc* 文件从 `NODE_AUTH_TOKEN` 环境变量读取 npm 身份验证令牌。 使用 `setup-node` 操作创建 *.npmrc* 文件时，必须使用包含 npm 身份验证令牌的密码设置 `NODE_AUTH_TOKEN` 环境变量。

在安装依赖项之前，使用 `setup-node` 操作创建 *.npmrc* 文件。 该操作有两个输入参数。 `node-version` 参数设置 Node.js 版本，`registry-url` 参数设置默认注册表。 如果包注册表使用作用域，您必须使用 `scope` 参数。 更多信息请参阅 [`npm-scope`](https://docs.npmjs.com/misc/scope)。

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v2
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

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

### 缓存依赖项示例

使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，您可以使用 [`setup-node` 操作](https://github.com/actions/setup-node)缓存和恢复依赖项。

以下示例缓存 npm 的依赖项。
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- uses: actions/setup-node@v2
  with:
    node-version: '14'
    cache: 'npm'
- run: npm install
- run: npm test
```

以下示例缓存 Yarn 的依赖项。

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- uses: actions/setup-node@v2
  with:
    node-version: '14'
    cache: 'yarn'
- run: yarn
- run: yarn test
```

以下示例缓存 pnpm (v6.10+) 的依赖项。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

# NOTE: pnpm caching support requires pnpm version >= 6.10.0

steps:
- uses: actions/checkout@v2
- uses: pnpm/action-setup@646cdf48217256a3d0b80361c5a50727664284f2
  with:
    version: 6.10.0
- uses: actions/setup-node@v2
  with:
    node-version: '14'
    cache: 'pnpm'
- run: pnpm install
- run: pnpm test
```

If you have a custom requirement or need finer controls for caching, you can use the [`cache` action](https://github.com/marketplace/actions/cache). 更多信息请参阅“<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">缓存依赖项以加快工作流程</a>”。

## 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。 例如，如果您运行 `npm run build` 来运行 *package.json* 文件中定义的构建步骤，运行 `npm test` 来运行测试套件，则要在工作流程文件中添加以下命令。

```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v2
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

## 将工作流数据打包为构件

您可以保存构建和测试步骤中的构件以在作业完成后查看。 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 更多信息请参阅“[使用构件持久化工作流程](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

## 发布到包注册表

您可以配置工作流程在 CI 测试通过后将 Node.js 包发布到包注册表。 有关发布到 npm 和 {% data variables.product.prodname_registry %} 的更多信息，请参阅“[发布 Node.js 包](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)”。
