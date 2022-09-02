---
title: 创建 Docker 容器操作
intro: 本指南向您展示构建 Docker 容器操作所需的最少步骤。
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
shortTitle: Docker 容器操作
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

在本指南中，您将了解创建和使用打包的 Docker 容器操作所需的基本组件。 本指南的重点是打包操作所需的组件，因此很少讲操作代码的功能。 操作将在日志文件中打印“Hello World”或“Hello [who-to-greet]”（如果您提供自定义名称）。

完成此项目后，您应了解如何构建自己的 Docker 容器操作和在工作流程测试该操作。

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## 基本要求

您可能会发现它有助于基本了解 {% data variables.product.prodname_actions %} 环境变量和 Docker 容器文件系统：

- "[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"
{% ifversion ghae %}
- “[Docker 容器文件系统](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)”。
{% else %}
- "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem)"
{% endif %}

在开始之前，您需要创建 {% data variables.product.prodname_dotcom %} 仓库。

1. 在 {% data variables.product.product_location %} 上创建新仓库 您可以选择任何仓库名称或如本例一样使用“hello-world-docker-action”。 更多信息请参阅“[创建新仓库](/articles/creating-a-new-repository)”。

1. 将仓库克隆到计算机。 更多信息请参阅“[克隆仓库](/articles/cloning-a-repository)”。

1. 从您的终端，将目录更改为新仓库。

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## 创建 Dockerfile

在新的 `hello-world-docker-action` 目录中，创建新的 `Dockerfile` 文件。 如果您有问题，请确保您的文件名正确大写（使用大写字母 `D` 但不要大写 `f`）。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的 Dockerfile 支持](/actions/creating-actions/dockerfile-support-for-github-actions)”。

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## 创建操作元数据文件

在上面创建的 `hello-world-docker-action` 目录中创建一个新的 `action.yml` 文件。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions)”。

{% raw %}
**action.yml**
```yaml{:copy}
# action.yml
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
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

此元数据定义一个 `who-to-greet`  输入和一个 `time` 输出参数。 要将输入传递给 Docker 容器，应使用 `inputs` 声明输入并以 `args` 关键词传递输入。 `args` 中包含的所有内容都将传递到容器，但为了更便于操作用户发现，我们建议使用输入。

{% data variables.product.prodname_dotcom %} 将从 `Dockerfile` 构建映像，然后使用此映像在新容器中运行命令。

## 编写操作代码

您可以选择任何基础 Docker 映像，并因此为您的操作选择任何语言。 以下 shell 脚本示例使用 `who-to-greet` 输入变量在日志文件中打印 "Hello [who-to-greet]"。

接下来，该脚本会获取当前时间并将其设置为作业中稍后运行的操作可以使用的输出变量。 为便于 {% data variables.product.prodname_dotcom %} 识别输出变量， 您必须以特定语法使用工作流程命令： `echo "::set-output name=<output name>::<value>"`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter)”。

1. 在 `hello-world-docker-action` 目录中创建一个新的 `entrypoint.sh` 文件。

1. 将以下代码添加到 `entrypoint.sh` 文件。

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  如果 `entrypoint.sh` 执行没有任何错误，则操作的状态设置为 `success`。 您还可以在操作的代码中显式设置退出代码以提供操作的状态。 更多信息请参阅“[设置操作的退出代码](/actions/creating-actions/setting-exit-codes-for-actions)”。

1. 通过在您的系统上运行以下命令使您的 `entrypoint.sh` 文件可执行。

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

## 创建自述文件

要让人们了解如何使用您的操作，您可以创建自述文件。 自述文件在您计划公开分享操作时最有用，但也是提醒您或您的团队如何使用该操作的绝佳方式。

在 `hello-world-docker-action` 目录中，创建指定以下信息的 `README.md` 文件：

- 操作的详细描述。
- 必要的输入和输出变量。
- 可选的输入和输出变量。
- 操作使用的密码。
- 操作使用的环境变量。
- 如何在工作流程中使用操作的示例。

**README.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

## 提交、标记和推送操作到 {% data variables.product.product_name %}

从您的终端，提交 `action.yml`、`entrypoint.sh`、`Dockerfile` 和 `README.md` 文件。

最佳做法是同时为操作版本添加版本标记。 有关对操作进行版本管理的详细信息，请参阅“[关于操作](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions)”。

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## 在工作流程中测试您的操作

现在，您已准备好在工作流程中测试您的操作。 如果操作位于私有仓库，则该操作只能在同一仓库的工作流程中使用。 公共操作可供任何仓库中的工作流程使用。

{% data reusables.actions.enterprise-marketplace-actions %}

### 使用公共操作的示例

以下工作流程代码使用公共 [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action) 仓库中完整的 _hello world_ 操作。 将以下工作流程示例代码复制到 `.github/workflows/main.yml` 文件中，但将 `actions/hello-world-docker-action` 替换为您的仓库和操作名称。 您还可以将 `who-to-greet` 输入替换为您的名称。 {% ifversion fpt or ghec %}公共操作即使未发布到 {% data variables.product.prodname_marketplace %} 也可使用。 更多信息请参阅“[发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)”。 {% endif %}

{% raw %}
**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

### 使用私有操作的示例

将以下示例工作流程代码复制到操作仓库中的 `.github/workflows/main.yml` 文件。 您还可以将 `who-to-greet` 输入替换为您的名称。 {% ifversion fpt or ghec %}此操作不能发布到 {% data variables.product.prodname_marketplace %}，并且只能在此仓库中使用。{% endif %}

**.github/workflows/main.yml**
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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

从您的仓库中，单击 **Actions（操作）**选项卡，然后选择最新的工作流程来运行。 在 **Jobs（作业）**下或可视化图形中，单击 **A job to say hello（打招呼的作业）**。 您应看到 "Hello Mona the Octocat" 或您用于 `who-to-greet` 输入的姓名和时间戳在日志中打印。

![在工作流中使用操作的屏幕截图](/assets/images/help/repository/docker-action-workflow-run-updated.png)

