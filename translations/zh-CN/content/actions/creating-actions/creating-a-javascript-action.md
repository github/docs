---
title: 创建 JavaScript 操作
intro: 在本指南中，您将了解如何使用操作工具包构建 JavaScript 操作。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - 操作开发
  - JavaScript
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

在本指南中，您将了解创建和使用打包的 JavaScript 操作所需的基本组件。 本指南的重点是打包操作所需的组件，因此很少讲操作代码的功能。 操作将在日志文件中打印“Hello World”或“Hello [who-to-greet]”（如果您提供自定义名称）。

本指南使用 {% data variables.product.prodname_actions %} 工具包 Node.js 模块来加快开发速度。 更多信息请参阅 [actions/toolkit](https://github.com/actions/toolkit) 仓库。

完成此项目后，您应了解如何构建自己的 JavaScript 操作和在工作流程测试该操作。

{% data reusables.github-actions.pure-javascript %}

### 基本要求

开始之前，您需要下载 Node.js 并创建 GitHub 仓库。

1. 下载并安装 Node.js 12.x，其中包含 npm。

  https://nodejs.org/en/download/current/

1. 在 {% data variables.product.product_location %} 上创建新仓库 您可以选择任何仓库名称或如本例一样使用 "hello-world-javascript-action"。 您可以在项目推送到 {% data variables.product.product_name %} 之后添加这些文件。 更多信息请参阅“[创建新仓库](/articles/creating-a-new-repository)”。

1. 将仓库克隆到计算机。 更多信息请参阅“[克隆仓库](/articles/cloning-a-repository)”。

1. 从您的终端，将目录更改为新仓库。

  ```shell
  cd hello-world-javascript-action
  ```

1. 从您的终端，使用 `package.json` 文件初始化目录。

  ```shell
  npm init -y
  ```

### 创建操作元数据文件

使用以下示例代码在 `hello-world-javascript-action` 目录中创建新文件 `action.yml`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions)”。


**action.yml**
```yaml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'node12'
  main: 'index.js'
```

此文件定义 `who-to-greet` 输入和 `time` 输出。 它还告知操作运行程序如何开始运行此 JavaScript 操作。

### 添加操作工具包

操作工具包是 Node.js 包的集合，可让您以更高的一致性快速构建 JavaScript 操作。

工具包 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 包提供一个接口，用于工作流程命令、输入和输出变量、退出状态以及调试消息。

工具包还提供 [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) 包，用于返回经验证的 Octokit REST 客户端和访问 GitHub 操作上下文。

工具包不止提供 `core` 和 `github` 包。 更多信息请参阅 [actions/toolkit](https://github.com/actions/toolkit) 仓库。

在您的终端，安装操作工具包 `core` 和 `github` 包。

```shell
npm install @actions/core
npm install @actions/github
```

现在，您应看到 `node_modules` 目录（包含您刚安装的模块）和 `package-lock.json` 文件（包含已安装模块的依赖项和每个已安装模块的版本）。

### 编写操作代码

此操作使用工具包获取操作元数据文件中所需的 `who-to-greet` 输入变量，然后在日志的调试消息中打印 "Hello [who-to-greet]"。 接下来，该脚本会获取当前时间并将其设置为作业中稍后运行的操作可以使用的输出变量。

GitHub 操作提供有关 web 挂钩实践、Git 引用、工作流程、操作和触发工作流程的人员的上下文信息。 要访问上下文信息，您可以使用 `github` 包。 您将编写的操作将打印 web 挂钩事件有效负载日志。

使用以下代码添加名为 `index.js` 的新文件。

**index.js**
```javascript
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```

如果在上述 `index.js` 示例中出现错误 `core.setFailed(error.message);`，请使用操作工具包 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 包记录消息并设置失败退出代码。 更多信息请参阅“[设置操作的退出代码](/actions/creating-actions/setting-exit-codes-for-actions)”。


### 创建自述文件

要让人们了解如何使用您的操作，您可以创建自述文件。 自述文件在您计划公开分享操作时最有用，但也是提醒您或您的团队如何使用该操作的绝佳方式。

在 `hello-world-javascript-action` 目录中，创建指定以下信息的 `README.md` 文件：

- 操作的详细描述。
- 必要的输入和输出变量。
- 可选的输入和输出变量。
- 操作使用的密码。
- 操作使用的环境变量。
- 如何在工作流程中使用操作的示例。

**README.md**
```markdown
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**必填** 要问候的人员的姓名。 默认值为 `"World"`。

## Outputs

### `time`

我们问候您的时间。

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```

### 提交、标记和推送操作到 GitHub

{% data variables.product.product_name %} 下载运行时在工作流程中运行的每个操作，并将其作为完整的代码包执行，然后才能使用 `run` 等工作流程命令与运行器机器交互。 这意味着您必须包含运行 JavaScript 代码所需的所有包依赖项。 您需要将工具包 `core` 和 `github` 包检入到操作的仓库中。

从您的终端，提交 `action.yml`、`index.js`、`node_modules`、`package.json`、`package-lock.json` 和 `README.md` 文件。 如果您添加了列有 `node_modules` 的 `.gitignore` 文件，则需要删除该行才能提交 `node_modules` 目录。

最佳做法是同时为操作版本添加版本标记。 有关对操作进行版本管理的详细信息，请参阅“[关于操作](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)”。


```shell
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

检入 `node_modules` 目录可能会导致问题。 作为替代方法，您可以使用名为 [`@vercel/ncc`](https://github.com/vercel/ncc) 的工具将您的代码和模块编译到一个用于分发的文件中。

1. 通过在您的终端运行此命令来安装 `vercel/ncc`。 `npm i -g @vercel/ncc`

1. 编译您的 `index.js` 文件。 `ncc build index.js --license licenses.txt`

  您会看到一个新的 `dist/index.js` 文件，其中包含您的代码和编译的模块。 您还将看到随附的 `dist/licenses.txt` 文件，其中包含所用 `node_modules` 的所有许可证。

1. 在 `action.yml` 文件中更改 `main` 关键字以使用新的 `dist/index.js` 文件。 `main: 'dist/index.js'`

1. 如果已检入您的 `node_modules` 目录，请删除它。 `rm -rf node_modules/*`

1. 从您的终端，将更新提交到 `action.yml`、`dist/index.js` 和 `node_modules` 文件。
```shell
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1
git push --follow-tags
```

### 在工作流程中测试您的操作

现在，您已准备好在工作流程中测试您的操作。 如果操作位于私有仓库，则该操作只能在同一仓库的工作流程中使用。 公共操作可供任何仓库中的工作流程使用。

{% data reusables.actions.enterprise-marketplace-actions %}

#### 使用公共操作的示例

以下工作流程代码使用 `actions/hello-world-javascript-action` 仓库中已完成的 hello world 操作。 将工作流程代码复制到 `.github/workflows/main.yml` 文件中，但要将 `actions/hello-world-javascript-action` 仓库替换为您创建的仓库。 您还可以将 `who-to-greet` 输入替换为您的名称。

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
    - name: Hello world action step
      id: hello
      uses: actions/hello-world-javascript-action@v1.1
      with:
        who-to-greet: 'Mona the Octocat'
    # Use the output from the `hello` step
    - name: Get the output time
      run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

#### 使用私有操作的示例

将工作流程代码复制到操作仓库中的 `.github/workflows/main.yml` 文件。 您还可以将 `who-to-greet` 输入替换为您的名称。

{% raw %}
**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # 要使用此仓库的私有操作，
      # 您必须检出仓库
      - name: Checkout
        uses: actions/checkout@v2
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # 使用来自 `hello` 步骤的输出
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

从您的仓库中，单击 **Actions（操作）**选项卡，然后选择最新的工作流程来运行。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}在 **Jobs（作业）**下或可视化图表中，单击 **A job to say hello（表示问候的作业）**。 {% endif %}您应看到 "Hello Mona the Octocat" 或您用于 `who-to-greet` 输入的姓名和时间戳在日志中打印。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
![在工作流中使用操作的屏幕截图](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
![在工作流中使用操作的屏幕截图](/assets/images/help/repository/javascript-action-workflow-run-updated.png)
{% else %}
![在工作流中使用操作的屏幕截图](/assets/images/help/repository/javascript-action-workflow-run.png)
{% endif %}
