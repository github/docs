---
title: 了解 GitHub Actions
shortTitle: 了解 GitHub Actions
intro: '学习 {% data variables.product.prodname_actions %} 的基础知识，包括核心概念和基本术语。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概览

{% data reusables.actions.about-actions %}  您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

{% data variables.product.prodname_actions %} 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

{% elsif ghes or ghae %}

您必须托管自己的 Linux、Windows 或 macOS 虚拟机才能运行 {% data variables.product.product_location %} 工作流程。 {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

有关向企业介绍 {% data variables.product.prodname_actions %} 的详细信息，请参阅“[向企业介绍 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)”。

{% endif %}

## {% data variables.product.prodname_actions %} 的组件

您可以将 {% data variables.product.prodname_actions %} _工作流程_配置为在存储库中发生_事件_时触发，例如打开拉取请求或创建议题。  工作流程包含一个或多个_作业_，这些作业可以按顺序运行，也可以并行运行。  每个作业都将在其自己的虚拟机_运行器_中运行，或者在容器内运行，并且具有一个或多个_步骤_ ，这些步骤要么运行您定义的脚本，要么运行_操作_，这是一个可重用的扩展，可以简化您的工作流程。

![工作流程概述](/assets/images/help/images/overview-actions-simple.png)

### 工作流程

工作流程是一个可配置的自动化过程，它将运行一个或多个作业。  工作流程由签入到存储库的 YAML 文件定义，并在存储库中的事件触发时运行，也可以手动触发，或按定义的时间表触发。

一个存储库中可以有多个工作流程，每个工作流程可以执行一组不同的步骤。  例如，您可以有一个工作流程来构建和测试拉取请求，另一个工作流程用于在每次创建发布时部署应用程序，还有一个工作流程在每次有人打开新议题时添加标签。

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}您可以在另一个工作流中引用工作流程，请参阅“[重用工作流程](/actions/learn-github-actions/reusing-workflows)”。{% endif %}

有关工作流程的详细信息，请参阅“[使用工作流程](/actions/using-workflows)”。

### 事件

事件是存储库中触发工作流程运行的特定活动。 例如，当有人创建拉取请求、打开议题或将提交推送到存储库时，活动可能源自 {% data variables.product.prodname_dotcom %}。  您还可以通过[发布到 REST API](/rest/reference/repos#create-a-repository-dispatch-event) 或手动来触发按计划运行的工作流程。

有关可用于触发工作流程的事件的完整列表，请参阅[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)。

### Jobs

作业是工作流程中的一组_步骤_，它们在同一运行器上执行。  每个步骤要么是将要执行的 shell 脚本，要么是将运行的_操作_ 。  步骤按顺序执行，并且相互依赖。  由于每个步骤都在同一运行器上执行，因此您可以将数据从一个步骤共享到另一个步骤。  例如，可以有一个生成应用程序的步骤，后跟一个测试已生成应用程序的步骤。

您可以配置作业与其他作业的依赖关系；默认情况下，作业没有依赖关系，并且彼此并行运行。  当一个作业依赖于另一个作业时，它将等待从属作业完成，然后才能运行。  例如，对于没有依赖关系的不同体系结构，您可能有多个生成作业，以及一个依赖于这些作业的打包作业。  生成作业将并行运行，当它们全部成功完成后，打包作业将运行。

有关作业的详细信息，请参阅“[使用作业](/actions/using-jobs)”。

### 操作

_操作_是 {% data variables.product.prodname_actions %} 平台的自定义应用程序，用于执行复杂但经常重复的任务。  使用操作可帮助减少在工作流程文件中编写的重复代码量。  操作可以从 {% data variables.product.prodname_dotcom %} 拉取 git 存储库，为您的构建环境设置正确的工具链，或设置对云提供商的身份验证。

您可以编写自己的操作，也可以在 {% data variables.product.prodname_marketplace %} 中找到要在工作流程中使用的操作。

{% data reusables.actions.internal-actions-summary %}

更多信息请参阅“[创建操作](/actions/creating-actions)”。

### 运行器

{% data reusables.actions.about-runners %} 每个运行器一次可以运行一个作业。 {% ifversion ghes or ghae %} 您必须为 {% data variables.product.product_name %} 托管自己的运行器。 {% elsif fpt or ghec %}{% data variables.product.company_short %} 提供 Ubuntu Linux、Microsoft Windows 和 macOS 运行器来运行您的工作流程；每个工作流程运行都在新预配的全新虚拟机中执行。 如果您需要不同的操作系统或需要特定的硬件配置，则可以托管自己的运行器。{% endif %} 有关{% ifversion fpt or ghec %} 自托管运行器{% endif %} 的更多信息，请参阅“[托管您自己的运行器](/actions/hosting-your-own-runners)”。

## 创建示例工作流程

{% data variables.product.prodname_actions %} 使用 YAML 语法来定义工作流程。  每个工作流程都作为单独的 YAML 文件存储在代码存储库中的目录 `.github/workflows` 下。

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
          - uses: actions/setup-node@v2
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
    ```
1. 提交这些更改并将其推送到您的 {% data variables.product.prodname_dotcom %} 仓库。

您的新 {% data variables.product.prodname_actions %} 工作流程文件现在安装在您的仓库中，每次有人推送更改到仓库时都会自动运行。 有关作业的执行历史记录的详细信息，请参阅“[查看工作流程的活动](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)”。

## 了解工作流程文件

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
指定此工作流程的触发器。 此示例使用<code>推送</code>事件，因此每次有人将更改推送到存储库或合并拉取请求时，都会触发工作流程运行。  这是由推送到每个分支触发的；有关仅在推送到特定分支、路径或标记时运行的语法示例，请参阅“<a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">{% data variables.product.prodname_actions %} 的工作流程语法”。</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 将 <code>learn-github-actions</code> 工作流程中运行的所有作业组合在一起。
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
定义名为 <code>check-bats-version</code> 的作业。 子键将定义作业的属性。
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  将作业配置为在最新版本的 Ubuntu Linux 运行器上运行。 这意味着该作业将在 GitHub 托管的新虚拟机上执行。 有关使用其他运行器的语法示例，请参阅<a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">“{% data variables.product.prodname_actions %} 的工作流程语法”</a>。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  将 <code>check-bats-version</code> 作业中运行的所有步骤组合在一起。 此部分下嵌套的每项都是一个单独的操作或 shell 脚本。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
<code>uses</code> 关键字指定此步骤将运行 <code>actions/checkout</code> 操作的 <code>v2</code>。  这是一个将存储库签出到运行器上的操作，允许您对代码（如生成和测试工具）运行脚本或其他操作。 每当工作流程将针对存储库的代码运行时，都应使用签出操作。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
  ```
</td>
<td>
  此步骤使用 <code>actions/setup-node@v2</code> 操作来安装指定版本的 Node.js（此示例使用 v14）。 这会将 <code>node</code> 和 <code>npm</code> 命令放在 <code>PATH</code>中。
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

### 可视化工作流程文件

在此关系图中，您可以看到刚刚创建的工作流程文件，以及 {% data variables.product.prodname_actions %} 组件在层次结构中的组织方式。 每个步骤执行单个操作或 shell 脚本。 步骤 1 和 2 运行操作，步骤 3 和 4 运行 shell 脚本。 要查找更多为工作流预构建的操作，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。

![工作流程概述](/assets/images/help/images/overview-actions-event.png)

## 查看工作流程的活动

工作流程开始运行后，您可以查看运行进度的可视化图表，并在 {% data variables.product.prodname_dotcom %} 上查看每个步骤的活动。

{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 **Actions（操作）**。 ![导航到仓库](/assets/images/help/images/learn-github-actions-repository.png)
1. 在左侧边栏中，单击您想要查看的工作流程。 ![工作流程结果的屏幕截图](/assets/images/help/images/learn-github-actions-workflow.png)
1. 在“Workflow runs（工作流程运行）”下，单击您想要查看的运行的名称。 ![工作流程运行的屏幕截图](/assets/images/help/images/learn-github-actions-run.png)
1. 在 **Jobs（作业）**下或可视化图中，单击您要查看的作业。 ![选择作业](/assets/images/help/images/overview-actions-result-navigate.png)
1. 查看每个步骤的结果。 ![工作流程运行详细信息的屏幕截图](/assets/images/help/images/overview-actions-result-updated-2.png)

## 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。

{% ifversion fpt or ghec or ghes %}

要了解 {% data variables.product.prodname_actions %} 的计费方式，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)”。

{% endif %}

## 联系支持

{% data reusables.actions.contacting-support %}

## 延伸阅读

{% ifversion ghec or ghes or ghae %}
- "[关于企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)"{% endif %}
