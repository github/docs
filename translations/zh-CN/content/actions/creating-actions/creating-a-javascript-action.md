---
title: 创建 JavaScript 操作
intro: 在本指南中，您将了解如何使用操作工具包构建 JavaScript 操作。
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
shortTitle: JavaScript action
ms.openlocfilehash: c42dca4205519f6799d7f92b254b75696853b7f9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084709'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

在本指南中，您将了解创建和使用打包的 JavaScript 操作所需的基本组件。 本指南的重点是打包操作所需的组件，因此很少讲操作代码的功能。 操作将在日志文件中打印“Hello World”或“Hello [who-to-greet]”（如果您提供自定义名称）。

本指南使用 {% data variables.product.prodname_actions %} 工具包 Node.js 模块来加快开发速度。 有关详细信息，请参阅 [actions/toolkit](https://github.com/actions/toolkit) 存储库。

完成此项目后，您应了解如何构建自己的 JavaScript 操作和在工作流程测试该操作。

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## 先决条件

在开始之前，您需要下载 Node.js 并创建公共 {% data variables.product.prodname_dotcom %} 仓库。

1. 下载并安装 Node.js {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}16.x{% else %}12.x{% endif %}，其中包含 npm。

  {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %} https://nodejs.org/en/download/{% else %} https://nodejs.org/en/download/releases/{% endif %}

1. 在 {% data variables.product.product_location %} 上创建一个新的公共仓库，并将其称为 "hello-world-javascript-action"。 有关详细信息，请参阅“[创建新存储库](/articles/creating-a-new-repository)”。

1. 将仓库克隆到计算机。 有关详细信息，请参阅“[克隆存储库](/articles/cloning-a-repository)”。

1. 从您的终端，将目录更改为新仓库。

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. 从你的终端，使用 npm 初始化目录以生成 `package.json` 文件。

  ```shell{:copy}
  npm init -y
  ```

## 创建操作元数据文件

使用以下示例代码在 `hello-world-javascript-action` 目录中创建一个名为 `action.yml` 的新文件。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions)”。

```yaml{:copy}
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
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

此文件定义 `who-to-greet` 输入和 `time` 输出。 它还告知操作运行程序如何开始运行此 JavaScript 操作。

## 添加操作工具包

操作工具包是 Node.js 包的集合，可让您以更高的一致性快速构建 JavaScript 操作。

工具包 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 包为工作流命令、输入和输出变量、退出状态和调试消息提供了一个接口。

工具包还提供了一个 [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) 包，用于返回经验证的 Octokit REST 客户端和访问 GitHub Actions 上下文。

该工具包提供的不仅仅是 `core` 和 `github` 包。 有关详细信息，请参阅 [actions/toolkit](https://github.com/actions/toolkit) 存储库。

在终端上，安装操作工具包 `core` 和 `github` 包。

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

现在，应会看到 `node_modules` 目录（包含你刚安装的模块）和 `package-lock.json` 文件（包含已安装模块的依赖项和每个已安装模块的版本）。

## 编写操作代码

此操作使用工具包获取操作元数据文件中所需的 `who-to-greet` 输入变量，然后在日志的调试消息中打印“Hello [who-to-greet]”。 接下来，该脚本会获取当前时间并将其设置为作业中稍后运行的操作可以使用的输出变量。

GitHub Actions 提供有关 web 挂钩实践、Git 引用、工作流程、操作和触发工作流程的人员的上下文信息。 要访问上下文信息，你可以使用 `github` 包。 您将编写的操作将打印 web 挂钩事件有效负载日志。

使用以下代码添加名为 `index.js` 的新文件。

{% raw %}
```javascript{:copy}
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
{% endraw %}

如果在上述 `index.js` 示例中引发错误，`core.setFailed(error.message);` 将使用操作工具包 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 包记录消息并设置失败退出代码。 有关详细信息，请参阅“[为操作设置退出代码](/actions/creating-actions/setting-exit-codes-for-actions)”。

## 创建自述文件

要让人们了解如何使用您的操作，您可以创建自述文件。 自述文件在您计划公开分享操作时最有用，但也是提醒您或您的团队如何使用该操作的绝佳方式。

在 `hello-world-javascript-action` 目录中，创建一个用于指定以下信息的 `README.md` 文件：

- 操作用途的详细说明。
- 必需的输入和输出参数。
- 可选输入和输出参数。
- 操作使用的密钥。
- 操作使用的环境变量。
- 如何在工作流中使用操作的示例。

```markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```

## 提交、标记和推送操作到 GitHub

{% data variables.product.product_name %} 下载运行时在工作流中运行的每个操作，并将其作为完整的代码包执行，然后才能使用 `run` 等工作流命令与运行器机器交互。 这意味着您必须包含运行 JavaScript 代码所需的所有包依赖项。 需要将工具包 `core` 和 `github` 包签入操作存储库。

从终端提交 `action.yml`、`index.js`、`node_modules`、`package.json`、`package-lock.json` 和 `README.md` 文件。 如果添加了列出 `node_modules` 的 `.gitignore` 文件，则需要删除该行以提交 `node_modules` 目录。

最佳做法是同时为操作版本添加版本标记。 有关对操作进行版本控制的详细信息，请参阅“[关于操作](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)”。

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

签入 `node_modules` 目录可能会导致问题。 作为替代方法，可以使用名为 [`@vercel/ncc`](https://github.com/vercel/ncc) 的工具将代码和模块编译到一个用于分发的文件中。

1. 通过在终端中运行此命令来安装 `vercel/ncc`。
  `npm i -g @vercel/ncc`

1. 编译 `index.js` 文件。
  `ncc build index.js --license licenses.txt`

  你会看到一个包含代码和已编译模块的新 `dist/index.js` 文件。
  你还将看到随附的 `dist/licenses.txt` 文件，其中包含所用 `node_modules` 的所有许可证。

1. 更改 `action.yml` 文件中的 `main` 关键字以使用新的 `dist/index.js` 文件。
 `main: 'dist/index.js'`

1. 如果已签入 `node_modules` 目录，请将其删除。
  `rm -rf node_modules/*`

1. 从终端提交对 `action.yml`、`dist/index.js` 和 `node_modules` 文件的更新。
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## 在工作流程中测试您的操作

现在，您已准备好在工作流程中测试您的操作。 当某项操作位于专用存储库中时，该操作只能在同一存储库的工作流中使用。 位于任何存储库内的工作流均可使用公共操作。

{% data reusables.actions.enterprise-marketplace-actions %}

### 使用公共操作的示例

此示例显示您的新公共操作如何从外部仓库中运行。

将以下 YAML 复制到 `.github/workflows/main.yml` 处的新文件中，并使用你的用户名和你在上面创建的公共存储库的名称更新 `uses: octocat/hello-world-javascript-action@v1.1` 行。 还可以将 `who-to-greet` 输入替换为你的名称。

{% raw %}
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

当触发此工作流时，运行器将从你的公共存储库下载 `hello-world-javascript-action` 操作，然后执行它。

### 使用私有操作的示例

将工作流代码复制到操作存储库中的 `.github/workflows/main.yml` 文件中。 还可以将 `who-to-greet` 输入替换为你的名称。

.github/workflows/main.yml
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

从存储库中，单击“操作”选项卡，然后选择最新的工作流运行。 在“作业”下或可视化图中，单击“表示问候的作业” 。 应会看到“Hello Mona the Octocat”或你用于 `who-to-greet` 输入的名称以及日志中打印的时间戳。

![在工作流中使用操作的屏幕截图](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)
