---
title: 使用入门工作流程
intro: '{% data variables.product.product_name %} 为各种语言和工具提供入门工作流程。'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
ms.openlocfilehash: 7159ce204b89287f86846cf79001657682f6d18d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179837'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于入门工作流程

{% data variables.product.product_name %} 为各种语言和工具提供入门工作流程。 在存储库中设置工作流程时，{% data variables.product.product_name %} 会分析存储库中的代码，并根据存储库中的语言和框架推荐工作流程。 例如，如果你使用 [Node.js](https://nodejs.org/en/)，{% data variables.product.product_name %} 将提议使用入门工作流文件来安装 Node.js 包和运行测试。{% ifversion actions-starter-template-ui %} 你可以搜索并筛选来查找相关的入门工作流。{% endif %}

{% data reusables.actions.starter-workflow-categories %}

您还可以创建自己的入门工作流程以与您的组织共享。 这些入门工作流程将显示在 {% data variables.product.product_name %} 提供的入门工作流程旁边。 有关详细信息，请参阅“[为组织创建入门工作流](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)”。

## 使用入门工作流程

对存储库具有写入权限的任何人都可以为 CI/CD 或其他自动化设置 {% data variables.product.prodname_actions %} 入门工作流程。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 如果存储库中已有工作流，请单击“新建工作流”。
1. “{% ifversion actions-starter-template-ui %}选择工作流{% else %}选择工作流模板{% endif %}”页面显示了一系列推荐的入门工作流。 找到要使用的入门工作流，然后单击{% ifversion actions-starter-template-ui %}“配置”{% else %}“设置此工作流”{% endif %}。{% ifversion actions-starter-template-ui %}为帮助你找到所需的入门工作流，可以搜索关键字或按类别进行筛选。{% endif %} 

   {% ifversion actions-starter-template-ui %}![配置此工作流](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![设置此工作流程](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. 如果入门工作流程包含详细说明其他设置步骤的注释，请按照下列步骤操作。 许多入门工作流程都有相应的指南。 有关详细信息，请参阅 [{% data variables.product.prodname_actions %} 指南](/actions/guides)。
1. 某些入门工作流程使用机密。 例如，{% raw %}`${{ secrets.npm_token }}`{% endraw %}。 如果入门工作流使用机密，请将机密名称中描述的值作为机密存储在存储库中。 有关详细信息，请参阅“[加密机密](/actions/reference/encrypted-secrets)”。
1. （可选）进行其他更改。 例如，你可能希望更改 `on` 的值，以便在工作流运行时进行更改。
1. 单击“开始提交”。
1. 编写提交消息并决定是直接提交到默认分支还是打开拉取请求。

## 延伸阅读

- [关于持续集成](/articles/about-continuous-integration)
- [管理工作流运行](/actions/managing-workflow-runs)
- [关于监视和故障排除](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)
- [了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions) {% ifversion fpt or ghec %}
- [管理 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions) {% endif %}
