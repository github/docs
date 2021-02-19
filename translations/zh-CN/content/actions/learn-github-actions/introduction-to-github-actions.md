---
title: GitHub Actions 简介
shortTitle: GitHub Actions 简介
intro: '了解 {% data variables.product.prodname_actions %} 的核心概念和各种组件，并查看说明如何为仓库添加自动化的示例。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'overview'
topics:
  - '基础'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概览

{% data variables.product.prodname_actions %} 帮助您自动完成软件开发周期内的任务。 {% data variables.product.prodname_actions %} 是事件驱动的，意味着您可以在指定事件发生后运行一系列命令。 例如，每次有人为仓库创建拉取请求时，您都可以自动运行命令来执行软件测试脚本。

此示意图说明如何使用 {% data variables.product.prodname_actions %} 自动运行软件测试脚本。 事件会自动触发其中包_作业_的_工作流程_。 然后，作业使用_步骤_来控制_操作_运行的顺序。 这些操作是自动化软件测试的命令。

![工作流程概述](/assets/images/help/images/overview-actions-simple.png)

### {% data variables.product.prodname_actions %} 的组件

下面是一起运行作业的多个 {% data variables.product.prodname_actions %} 组件列表。 您可以查看这些组件如何相互作用。

![组件和服务概述](/assets/images/help/images/overview-actions-design.png)

#### 工作流程

工作流程是您添加到仓库的自动化过程。 工作流程由一项或多项作业组成，可以计划或由事件触发。 工作流程可用于在 {% data variables.product.prodname_dotcom %} 上构建、测试、打包、发布或部署项目。

#### 事件

事件是触发工作流程的特定活动。 例如，当有推送提交到仓库或者创建议题或拉取请求时，{% data variables.product.prodname_dotcom %} 就可能产生活动。 您还可以使用[仓库分发 web 挂钩](/rest/reference/repos#create-a-repository-dispatch-event)在发生外部事件时触发工作流程。 有关可用于触发工作流程的事件的完整列表，请参阅[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)。

#### Jobs

作业是在同一运行服务器上执行的一组步骤。 默认情况下，包含多个作业的工作流程将同时运行这些作业。 您也可以配置工作流程按顺序运行作业。 例如，工作流程可以有两个连续的任务来构建和测试代码，其中测试作业取决于构建作业的状态。 如果构建作业失败，测试作业将不会运行。

#### 步骤

步骤是可以在作业中运行命令的单个任务。 步骤可以是_操作_或 shell 命令。 作业中的每个步骤在同一运行器上执行，可让该作业中的操作互相共享数据。

#### 操作

_操作_ 是独立命令，它们组合到_步骤_以创建_作业_。 操作是工作流程最小的便携式构建块。 您可以创建自己的操作，也可以使用 {% data variables.product.prodname_dotcom %} 社区创建的操作。 要在工作流程中使用操作，必须将其作为一个步骤。

#### 运行器

运行器是安装了 [{% data variables.product.prodname_actions %} 运行器应用程序](https://github.com/actions/runner)的服务器。 您可以使用 {% data variables.product.prodname_dotcom %} 托管的运行器或托管您自己的运行器。 运行器将侦听可用的作业，每次运行一个作业，并将进度、日志和结果报告回 {% data variables.product.prodname_dotcom %}。 对于 {% data variables.product.prodname_dotcom %} 托管的运行器，工作流程中的每项作业都会在一个新的虚拟环境中运行。

{% data variables.product.prodname_dotcom %} 托管的运行器基于 Ubuntu Linux、Microsoft Windows 和 macOS 。 有关 {% data variables.product.prodname_dotcom %} 托管的运行器的信息，请参阅“[ {% data variables.product.prodname_dotcom %} 托管运行器的虚拟环境](/actions/reference/virtual-environments-for-github-hosted-runners)”。 如果您需要不同的操作系统或需要特定的硬件配置，可以托管自己的运行器。 有关自托管运行器的信息，请参阅“[托管您自己的运行器](/actions/hosting-your-own-runners)”。

### 创建示例工作流程

{% data variables.product.prodname_actions %} 使用 YAML 语法来定义事件、作业和步骤。 这些 YAML 文件存储在代码仓库中名为 `.github/workflows` 的目录中。

您可以在仓库中创建示例工作流程，只要推送代码，该工作流程就会自动触发一系列命令。 在此工作流程中，{% data variables.product.prodname_actions %} 检出推送的代码，安装软件依赖项，并运行 `-v`。

1. 在您的仓库中，创建 `.github/workflows/` 目录来存储工作流程文件。
1. 在 `.github/workflows/` 目录中，创建一个名为 `learn-github-actions.yml` 的新文件并添加以下代码。
    ```yaml
    name: learn-github-actions
    on: [push]
    jobs:
      check-bats-version:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
          - run: npm install -g bats
          - run: bats -v
    ```
1. 提交这些更改并将其推送到您的 {% data variables.product.prodname_dotcom %} 仓库。

您的新 {% data variables.product.prodname_actions %} 工作流程文件现在安装在您的仓库中，每次有人推送更改到仓库时都会自动运行。 有关作业的执行历史记录的详细信息，请参阅“[查看工作流程的活动](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)”。

### 了解工作流程文件

为帮助您了解如何使用 YAML 语法来创建工作流程文件，本节解释介绍示例的每一行：

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>可选</em> - 将出现在 {% data variables.product.prodname_dotcom %} 仓库的 Actions（操作）选项卡中的工作流程名称。
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
  指定自动触发工作流程文件的事件。 此示例使用 <code>push</code> 事件，这样每次有人推送更改到仓库时，作业都会运行。 您可以设置工作流程仅在特定分支、路径或标记上运行。 有关包含或排除分支、路径或标记的语法示例，请参阅<a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">“{% data variables.product.prodname_actions %} 的工作流程语法”</a>。
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 将 <code>learn-github-actions</code> 工作流程文件中运行的所有作业组合在一起。
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
  定义存储在 <code>jobs</code> 部分的 <code>check-bats-version</code> 作业的名称。
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  配置作业在 Ubuntu Linux 运行器上运行。 这意味着该作业将在 GitHub 托管的新虚拟机上执行。 有关使用其他运行器的语法示例，请参阅<a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">“{% data variables.product.prodname_actions %} 的工作流程语法”</a>。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  将 <code>check-bats-version</code> 作业中运行的所有步骤组合在一起。 此部分下嵌套的每项都是一个单独的操作或 shell 命令。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
  <code>uses</code> 关键字指示作业检索名为 <code>actions/checkout@v2</code> 的社区操作的 <code>v2</code>。 这是检出仓库并将其下载到运行器的操作，允许针对您的代码运行操作（例如测试工具）。 只要工作流程针对仓库的代码运行，或者您使用仓库中定义的操作，您都必须使用检出操作。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v1
  ```
</td>
<td>
  此操作会在运行器上安装 <code>node</code> 软件包，使您可以访问 <code>npm</code> 命令。
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  <code>run</code> 关键字指示作业在运行器上执行命令。 在这种情况下，使用 <code>npm</code> 来安装 <code>bats</code> 软件测试包。
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  最后，您将运行 <code>bats</code> 命令，并且带有输出软件版本的参数。
</td>
</tr>
</table>

#### 可视化工作流程文件

在此关系图中，您可以看到刚刚创建的工作流程文件，以及 {% data variables.product.prodname_actions %} 组件在层次结构中的组织方式。 每个步骤执行单个操作或 shell 命令。 步骤 1 和 2 使用预构建的社区操作。 步骤 3 和 4 直接在运行器上运行 shell 命令。 要查找更多为工作流预构建的操作，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。

![工作流程概述](/assets/images/help/images/overview-actions-event.png)


### 查看作业的活动

作业开始运行后，您可以 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}查看运行进度的可视化图{% endif %}以及查看 {% data variables.product.prodname_dotcom %} 上每个步骤的活动。

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 **Actions（操作）**。 ![导航到仓库](/assets/images/help/images/learn-github-actions-repository.png)
1. 在左侧边栏中，单击您想要查看的工作流程。 ![工作流程结果的屏幕截图](/assets/images/help/images/learn-github-actions-workflow.png)
1. 在“Workflow runs（工作流程运行）”下，单击您想要查看的运行的名称。 ![工作流程运行的屏幕截图](/assets/images/help/images/learn-github-actions-run.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. 在 **Jobs（作业）**下或可视化图中，单击您要查看的作业。 ![选择作业](/assets/images/help/images/overview-actions-result-navigate.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. 查看每个步骤的结果。 ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result-updated-2.png)
{% elsif currentVersion ver_gt "enterprise-server@2.22" %}
1. 单击作业名称以查看每个步骤的结果。 ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. 单击作业名称以查看每个步骤的结果。 ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result.png)
{% endif %}

### 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。

### 联系支持

{% data reusables.github-actions.contacting-support %}
