---
title: 发布和维护操作
shortTitle: Releasing and maintaining actions
intro: 您可以利用自动化和开源最佳实践来发布和维护操作。
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
ms.openlocfilehash: 563a63a3af79c75c6912777c1c3f0ecdace6403e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066879'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

创建操作后，您需要继续发布新功能，同时处理社区贡献。 本教程介绍了一个示例过程，您可以遵循该过程在开源中发布和维护操作。 示例：

* 利用 {% data variables.product.prodname_actions %} 实现持续集成、依赖项更新、版本管理和任务自动化。
* 通过自动化测试和构建徽章提供信心。
* 指示如何使用操作，理想情况下，作为更广泛的工作流程的一部分。
* 表明您欢迎哪种类型的社区贡献。 （例如，议题、拉取请求或漏洞报告。）

有关此过程的应用示例，请参阅 [github-developer/javascript-action](https://github.com/github-developer/javascript-action)。

## 开发和发布操作

在本节中，我们将讨论开发和发布操作的示例流程，并演示如何使用 {% data variables.product.prodname_actions %} 自动执行该过程。

### 关于 JavaScript 操作

JavaScript 操作是具有元数据的 Node.js 存储库。 但是，与传统的 Node.js 项目相比，JavaScript 操作具有其他属性：

* Dependent 包与代码一起提交，通常采用编译和缩小的形式。 这意味着自动化构建和安全的社区贡献非常重要。

{% ifversion fpt or ghec %}

* 标记的版本可以直接发布到 {% data variables.product.prodname_marketplace %} ，并由跨 {% data variables.product.prodname_dotcom %} 工作流程使用。

{% endif %}

* 许多操作都使用 {% data variables.product.prodname_dotcom %} 的 API 和第三方 API，因此我们鼓励进行强大的端到端测试。

### 设置 {% data variables.product.prodname_actions %} 工作流程

要在下一节中支持开发人员流程，请将两个 {% data variables.product.prodname_actions %} 工作流程添加到存储库中：

1. 添加在将提交推送到功能分支或 `main` 或者创建拉取请求时触发的工作流。 配置工作流程以运行单元和集成测试。 有关示例，请参阅[此工作流](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml)。
2. 添加在发布或编辑发布时触发的工作流程。 配置工作流程以确保语义标记已就位。 可以使用 [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) 等操作来编译和捆绑 JavaScript 和元数据文件，并强制推送语义主要、次要和补丁标记。 有关示例，请参阅[此工作流](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml)。 有关语义标记的详细信息，请参阅“[关于语义版本控制](https://docs.npmjs.com/about-semantic-versioning)”。

### 示例开发者流程

下面是一个示例过程，您可以遵循该过程来自动运行测试、创建发行版{% ifversion fpt or ghec%}并发布到 {% data variables.product.prodname_marketplace %}{% endif %}，然后发布您的操作。

1. 在每个 GitHub 流程的分支中执行功能工作。 有关详细信息，请参阅“[GitHub 流](/get-started/quickstart/github-flow)”。
   * 每当将提交推送到功能分支时，测试工作流程将自动运行测试。

2. 创建对 `main` 分支的拉取请求以启动讨论和审查，并在准备就绪时合并。

   * 当从分支或复刻打开拉取请求时，测试工作流将再次运行测试，这次是合并提交。

   * 注意：出于安全原因，由分支中的 `pull_request` 触发的工作流具有受限的 `GITHUB_TOKEN` 权限，并且无权访问机密。 如果拉取请求时触发的测试或其他工作流需要访问机密，请考虑使用不同的事件，例如[手动触发器](/actions/reference/events-that-trigger-workflows#manual-events)或 [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target)。 在[此处](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories)了解详细信息。

3. 创建语义标记的版本。 {% ifversion fpt or ghec %} 您也可以使用简单的复选框发布到 {% data variables.product.prodname_marketplace %}。 {% endif %} 有关详细信息，请参阅“[管理存储库中的版本](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)”{% ifversion fpt or ghec %} 和“[在 {% data variables.product.prodname_marketplace %} 中发布操作](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)”{% endif %}。

   * 发布或编辑版本时，发行版工作流程将自动负责编译和调整标记。

   * 建议使用语义版本化的标记（例如 `v1.1.3`）创建版本，并让主要 (`v1`) 和次要 (`v1.1`) 标记与最新的相应提交保持同步。 有关详细信息，请参阅“[关于自定义操作](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)”和“[关于语义版本控制](https://docs.npmjs.com/about-semantic-versioning)”。

### 结果

与其他一些自动发布管理策略不同，此过程有意不将依赖项提交到 `main` 分支，而仅提交已标记的版本。 这样做，可以鼓励操作用户引用已命名的标记或 `sha`，并且通过在发布过程中自己执行构建来帮助确保第三方拉取请求的安全性。

使用语义发行版意味着操作的用户可以将其工作流程固定到某个版本，并且知道他们可能会继续接收最新的稳定、不间断功能，具体取决于他们的舒适度：

## 与社区合作

{% data variables.product.product_name %} 提供工具和指南，帮助您与开源社区合作。 以下是我们建议为健康的双向通信设置的一些工具。 通过向社区提供以下信号，您可以鼓励其他人使用、修改和参与您的操作：

* 维护其中包含大量用法示例和指导的 `README`。 有关详细信息，请参阅“[关于自述文件](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)”。
* 在 `README` 文件中添加工作流状态徽章。 有关详细信息，请参阅“[添加工作流状态徽章](/actions/managing-workflow-runs/adding-a-workflow-status-badge)”。 若要了解可添加的其他徽章，另请访问 [shields.io](https://shields.io/)。{% ifversion fpt or ghec %}
* 添加社区运行状况文件，如 `CODE_OF_CONDUCT`、`CONTRIBUTING` 和 `SECURITY`。 有关详细信息，请参阅“[创建默认社区运行状况文件](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)”。{% endif %}
* 利用 [actions/stale](https://github.com/actions/stale) 等操作使问题保持最新。

## 延伸阅读

采用类似模式的示例包括：

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
