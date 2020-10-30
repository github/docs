---
title: GitHub 操作的核心概念
shortTitle: 核心概念
intro: '下面是我们在网站和 {% data variables.product.prodname_actions %} 文档中使用的常见 {% data variables.product.prodname_actions %} 术语列表。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 操作

合并为作业创建步骤的个别任务。 操作是工作流程最小的便携式构建块。 您可以创建自己的操作，使用 {% data variables.product.prodname_dotcom %} 社区共享的操作，以及自定义公共操作。 要在工作流程中使用操作，必须将其作为一个步骤。

### 构件

构件是创建并测试代码时所创建的文件。 例如，构件可能包含二进制或包文件、测试结果、屏幕截图或日志文件。 工件与其创建时所在的工作流程运行相关，可被另一个作业使用，也可以部署。

### 持续集成 (CI)

经常提交小代码更改到共享仓库的软件开发实践。 通过 {% data variables.product.prodname_actions %} 可以创建自定义 CI 工作流程，以自动构建和测试您的代码。 从您的仓库，您可以在工作流程中查看代码更改的状态和每个操作的详细日志。 CI 对代码更改提供即时反馈以便更快地检测并解决错误，从而节省开发者的时间。

### 持续部署 (CD)

持续部署建立在持续集成的基础上。 当新代码提交并通过您的 CI 测试时，该代码将自动部署到生产中。 通过 {% data variables.product.prodname_actions %} 可以创建自定义 CD 工作流程，以将您的代码自动从仓库部署到任何云、自托管服务或平台。 CD 通过自动执行部署过程来节省开发者的时间，并且将经过测试的稳定代码更快地部署到您的客户。

### Event

触发工作流程运行的特定活动。 例如，当有推送提交到仓库或者创建议题或拉取请求时，{% data variables.product.prodname_dotcom %} 就可能产生活动。 您也可以使用仓库分发 web 挂钩配置一个工作流程在外部事件发生时运行。

### {% data variables.product.prodname_dotcom %} 托管的运行器
{% data variables.product.prodname_dotcom %} 可托管 Linux、Windows 和 macOS 运行器。 作业在包含常用、预安装的软件的全新虚拟机实例中运行。 {% data variables.product.prodname_dotcom %} 对 {% data variables.product.prodname_dotcom %} 托管的运行器执行所有升级和维护。 您不能自定义 {% data variables.product.prodname_dotcom %} 托管的运行器的硬件配置。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)”。

### 作业

在同一运行服务器上执行的一组步骤。 您可以定义作业在工作流程文件中运行的依赖规则。 作业可以同时并行运行，也可以根据上一个作业的状态按顺序运行。 例如，工作流程可以有两个连续的任务来构建和测试代码，其中测试作业取决于构建作业的状态。 如果构建作业失败，测试作业将不会运行。 对于 {% data variables.product.prodname_dotcom %} 托管的运行器，工作流程中的每项作业都会在一个新的虚拟环境实例中运行。

### 运行器

已安装 {% data variables.product.prodname_actions %} 运行器应用程序的任何机器。 您可以使用 {% data variables.product.prodname_dotcom %} 托管的运行器或托管您自己的运行器。 运行器等待可用的作业。 当运行器选择作业时，它会运行该作业的操作 ，并将进度、日志和最终结果报告回 {% data variables.product.prodname_dotcom %}。 运行器一次运行一个作业。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器](#github-hosted-runner)”和“[自托管运行器](#self-hosted-runner)”。

{% note %}

**注意：** {% data reusables.github-actions.runner-app-open-source %}

{% endnote %}

### 自托管运行器

您管理和维护并且安装了自托管运行器应用程序的机器。 {% data reusables.github-actions.self-hosted-runner-description %} 更多信息请参阅“[托管您自己的运行器](/github/automating-your-workflow-with-github-actions/hosting-your-own-runners)”。

### 步骤

步骤是可以运行命令或操作的单个任务。 作业配置一个或多个步骤。 作业中的每个步骤在同一运行器中执行，让该作业中的操作使用文件系统共享信息。

### 虚拟环境

{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境包括虚拟机器的硬件配置、操作系统和已安装的软件。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)”。

### 工作流程

您可以在仓库中创建的可配置自动化流程，用于在 {% data variables.product.prodname_dotcom %} 上构建、测试、封装、发行或部署任何项目。 工作流程由一项或多项作业组成，可以计划或由事件激活。

### 工作流程文件

定义至少有一项作业的工作流程配置的 YAML 文件。 此文件位于 {% data variables.product.prodname_dotcom %} 仓库根目录的 `.github/workflows` 目录下。

### 工作流程运行

当预配置的事件发生时运行的工作流程实例。 您可以查看每个工作流程运行的作业、操作、日志和状态。
