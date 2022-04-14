---
title: 关于代码空间预构建
shortTitle: 关于预构建
intro: 代码空间预构建有助于加快新代码空间的创建速度。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
---

{% data reusables.codespaces.prebuilds-beta-note %}

## 概览

预构建代码空间可让您提高工作效率并更快地访问代码空间，而不管项目的大小和复杂性如何。 这是因为在为项目创建代码空间之前，任何源代码、编辑器扩展、项目依赖项、命令和配置都已下载、安装和应用。 将预构建视为代码空间的“准备就绪”模板。

每当您将更改推送到存储库时，{% data variables.product.prodname_codespaces %} 都会使用 {% data variables.product.prodname_actions %} 自动更新您的预构建。

当预构建可用于存储库的特定分支以及您所在的地区时，您将在计算机类型对话框中看到“{% octicon "zap" aria-label="The zap icon" %} 预构建就绪”标签，该标签在您创建代码空间并且多种计算机类型可用时显示。

![用于选择计算机类型的对话框](/assets/images/help/codespaces/choose-custom-machine-type.png)

## 关于 {% data variables.product.prodname_codespaces %} 预构建的计费

{% data reusables.codespaces.billing-for-prebuilds %} 有关 {% data variables.product.prodname_codespaces %} 存储定价的详细信息，请参阅“[关于 {% data variables.product.prodname_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)”。

使用预构建创建的代码空间的费用与常规代码空间相同。

## 关于将更改推送到启用了预构建的分支

每次推送到具有预构建配置的分支都会导致运行 {% data variables.product.prodname_dotcom %} 管理的 Actions 工作流程来更新预构建模板。 对于给定的预构建配置，预构建工作流程的并发限制为一次运行一个工作流程，除非所做的更改会影响关联存储库的开发容器配置。 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project)”。 如果运行已在进行中，则最近排队的工作流程运行将在当前运行完成后运行。

这意味着，如果非常频繁地推送到存储库，则预构建创建将至少与运行预构建工作流程所需的频率一样。 也就是说，如果工作流程运行通常需要一个小时才能完成，当运行成功时，大约每小时为存储库创建预构建，当有更改分支上开发容器的推送时，则创建更为频繁。

例如，假设对具有预构建配置的分支快速连续进行 5 次推送。 在此情况下：

* 将对第一次推送启动工作流程运行，以更新预构建模板。
* 如果剩余的 4 个推送不影响开发容器配置，则工作流程将针对这些推送在“挂起”状态下排队。

  如果其余 4 个推送中的任何一个更改了开发容器配置，则服务不跳过该推送，而立即运行预构建创建工作流程，如果成功，则会相应地更新预构建。

* 第一次运行完成后，将为推送 2、3 和 4 运行工作流程，最后排队的工作流程（对于推送 5）将运行并更新预构建模板。 
