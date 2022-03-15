---
title: 关于自定义操作
intro: '操作是可以组合来创建作业和自定义工作流程的单个任务。 您可以创建自己的操作，或者使用和自定义 {% data variables.product.prodname_dotcom %} 社区分享的操作。'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
  - /actions/creating-actions/about-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于自定义操作

您可以编写自定义代码来创建操作，以您喜欢的方式与仓库交互，包括使用 {% data variables.product.prodname_dotcom %} 的 API 以及任何公开的第三方 API 进行交互。 例如，操作可以发布 npm 模块、在创建紧急议题时发送短信提醒，或者部署可用于生产的代码。

{% ifversion fpt or ghec %}
您可以编写自己的操作以用于工作流程，或者与 {% data variables.product.prodname_dotcom %} 社区共享您创建的操作。 要与每个人共享您创建的操作，您的仓库必须是公共的。 {% if internal-actions %}若要仅在企业内共享操作，存储库必须是内部的。{% endif %}
{% endif %}

操作可以直接在计算机或 Docker 容器中运行。 您可以定义操作的输入、输出和环境变量。

## 操作类型

您可以创建 Docker 容器和 JavaScript 操作。 操作需要元数据文件来定义操作的输入、输出和主要进入点。 元数据文件名必须是 `action.yml` 或 `action.yaml`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions)”。

| 类型         | 操作系统                |
| ---------- | ------------------- |
| Docker 容器  | Linux               |
| JavaScript | Linux、macOS、Windows |
| 复合操作       | Linux、macOS、Windows |

### Docker 容器操作

Docker 容器使用 {% data variables.product.prodname_actions %} 代码封装环境。 这会创建更加一致、可靠的工作单位，因为操作的使用者不需要担心工具或依赖项。

Docker 容器允许使用特定版本的操作系统、依赖项、工具和代码。 对于必须在特定环境配置中运行的操作，Docker 是一个理想的选择，因为您可以自定义操作系统和工具。 由于创建和检索容器的延时，Docker 容器操作慢于 JavaScript 操作。

Docker 容器操作只能在使用 Linux 操作系统的运行器上执行。 {% data reusables.actions.self-hosted-runner-reqs-docker %}

### JavaScript 操作

JavaScript 操作可以直接在运行器计算机上运行，并将操作代码与用于运行代码的环境分开。 使用 JavaScript 操作可简化操作代码，执行速度快于 Docker 容器操作。

{% data reusables.actions.pure-javascript %}

如果您正在开发 Node.js 项目，{% data variables.product.prodname_actions %} 工具包提供可用于项目中加速开发的软件包。 更多信息请参阅 [actions/toolkit](https://github.com/actions/toolkit) 仓库。

### 复合操作

_复合_操作允许您在一个操作中组合多个工作流程步骤。 例如，您可以使用此功能将多个运行命令捆绑到一个操作中，然后获得使用该操作在单一步骤中执行捆绑命令的工作流程。 要看到示例，请参阅“[创建复合操作](/actions/creating-actions/creating-a-composite-action)”。

## 选择操作的位置

如果是开发供其他人使用的操作，我们建议将该操作保持在其自己的仓库中，而不是与其他应用程序代码一起捆绑。 这可让您管理操作版本以及跟踪和发行操作，就像任何其他软件一样。

{% ifversion fpt or ghec %}
将操作存储在其自己的仓库中更便于 {% data variables.product.prodname_dotcom %} 社区发现操作，缩小代码库范围以便开发者修复问题和扩展操作，以及从其他应用程序代码的版本解耦操作的版本。
{% endif %}

{% data reusables.actions.internal-actions-summary %}

{% ifversion fpt or ghec %}如果创建不打算供他人使用的操作，您{% else %}您{% endif %}可以将操作的文件存储在您的仓库中的任何位置。 如果计划将操作、工作流程和应用程序代码合并到一个仓库中，建议将操作存储在 `.github` 目录中。 例如，`.github/actions/action-a` 和 `.github/actions/action-b`。

## 与 {% data variables.product.prodname_ghe_server %} 的兼容性

为了确保操作与 {% data variables.product.prodname_ghe_server %} 兼容，应确保不使用任何硬编码引用来引用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API URL。 您应该改用环境变量来引用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API：

- 创建发行版标记（例如，`v1.0.2`）之前，在发行版分支（如 `release/v1`）上创建发行版并进行验证。
- 对于 GraphQL，使用 `GITHUB_GRAPHQL_URL` 环境变量。

更多信息请参阅“[默认环境变量](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables)”。

## 对操作使用发行版管理

本节介绍如何使用发行版管理以可预测的方式将更新分发给操作。

### 发行版管理的良好做法

如果您正在开发供其他人使用的操作，建议使用发行版管理来控制分发更新的方式。 用户期望操作的主要版本包括必要的关键修补程序和安全补丁，同时仍与其现有工作流程保持兼容。 每当更改影响兼容性时，应考虑发布新的主要版本。

在此发行版管理方法下，用户不应引用操作的默认分支，因为它可能包含最新的代码，因此可能不稳定。 相反地，您可以建议用户在使用您的操作时指定主要版本，并且仅在遇到问题时将其定向到更具体的版本。

要使用特定的操作版本，用户可以配置其 {% data variables.product.prodname_actions %} 工作流程定向标记、 提交的 SHA 或为发行版指定的分支。

### 使用标记进行发行版管理

建议使用标记进行操作发行版管理。 使用这种方法，您的用户可以轻松地区分主要和次要版本：

- 创建发行版标记（例如，`v1.0.2`）之前，在发行版分支（如 `release/v1`）上创建发行版并进行验证。
- 使用语义版本管理创建发行版。 更多信息请参阅“[创建发行版](/articles/creating-releases)”。
- 移动主要版本标记（如 `v1`、`v2`）以指向当前发行版的 Git 引用。 更多信息请参阅“[Git 基本信息 - 标记](https://git-scm.com/book/en/v2/Git-Basics-Tagging)”。
- 为将会破坏现有工作流程的更改引入新的主要版本标记标签 (`v2`)。 例如，更改操作的输入就是破坏性的更改。
- 主要版本最初可以使用 `beta` 标记来发布，从而表明其状态，例如，`v2-beta`。 准备就绪后，可以删除 `-beta` 标记。

此示例演示用户如何引用主要发行版标记：

```yaml
steps:
    - uses: actions/javascript-action@v1
```

此示例演示用户如何引用特定补丁发行版标记：

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

### 使用分支进行发行版管理

如果希望使用分支名称进行发行版管理，此示例演示如何引用指定的分支：

```yaml
steps:
    - uses: actions/javascript-action@v1-beta
```

### 使用提交的 SHA 进行发行版管理

每个 Git 提交都会收到一个计算出来的 SHA 值，该值是唯一且不可更改的。 您操作的用户可能更喜欢依赖提交的 SHA 值，因为此方法会比指定可删除或移动的标记更可靠。 但是，这意味着用户将不会收到对该操作所做的进一步更新。 必须使用提交的完整 SHA 值，而不是缩写值。

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

## 为操作创建自述文件

如果计划公开分享您的操作，建议创建自述文件以帮助人们了解如何使用您的操作。 您可以将此信息包含在 `README.md` 中：

- 操作的详细描述
- 必要的输入和输出变量
- 可选的输入和输出变量
- 操作使用的密码
- 操作使用的环境变量
- 如何在工作流程中使用操作的示例

## 比较 {% data variables.product.prodname_actions %}与 {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_marketplace %} 提供用于改进工作流程的工具。 了解每种工具的差异和优势将使您能够选择最适合自己作业的工具。 有关构建应用程序的更多信息，请参阅"[关于应用程序](/apps/about-apps/)。

### GitHub Actions 和 GitHub 应用程序的设置

尽管 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_github_apps %} 都提供了构建自动化和工作流程工具的方法，但它们各有优点，使其以不同的方式发挥作用。

{% data variables.product.prodname_github_apps %}：
* 持续运行并且能够对事件迅速做出反应。
* 需要持续性数据时效果非常好。
* 适合处理不费时的 API 请求。
* 在您提供的服务器或计算基础架构上运行

{% data variables.product.prodname_actions %}：
* 提供可执行持续集成和持续部署的自动化。
* 可以直接在运行器计算机或 Docker 容器中运行。
* 可以包括访问仓库克隆的权限，使部署和发布工具、代码格式化程序和命令行工具能够访问您的代码。
* 不需要您部署代码或提供应用程序。
* 具有创建和使用密码的简单界面，该界面使操作能够与第三方服务进行交互，而无需存储使用该操作人员的凭据。

## 延伸阅读

- "[{% data variables.product.prodname_actions %} 的开发工具](/articles/development-tools-for-github-actions)"
