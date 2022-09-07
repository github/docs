---
title: 使用环境进行部署
shortTitle: Use environments for deployment
intro: 您可以使用保护规则和机密配置环境。 引用环境的工作流程作业在运行或访问环境的机密之前，必须遵循环境的任何保护规则。
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 21163a759cfd7eab3b197aeb4bb9283e1ccb90a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572301'
---
## 关于环境

环境用于描述常规部署目标，例如 `production`、`staging` 或 `development`。 当 {% data variables.product.prodname_actions %} 工作流部署到某个环境时，该环境将显示在存储库的主页上。 有关如何查看环境部署的详细信息，请参阅“[查看部署历史记录](/developers/overview/viewing-deployment-history)”。

您可以使用保护规则和机密配置环境。 当工作流程引用环境时，作业在环境的所有保护规则通过之前不会开始。 在所有环境保护规则通过之前，作业也不能访问在环境中定义的机密。

{% ifversion fpt %} {% note %}

注意：只能为公共存储库配置环境。 如果您将仓库从公开转换为私密，任何配置的保护规则或环境机密将被忽略， 并且您将无法配置任何环境。 如果将仓库转换回公共，您将有权访问以前配置的任何保护规则和环境机密。

使用 {% data variables.product.prodname_team %} 的组织和使用 {% data variables.product.prodname_pro %} 的用户可以为专用存储库配置环境。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/get-started/learning-about-github/githubs-products)”。

{% endnote %} {% endif %}

## 环境保护规则

环境保护规则要求通过特定的条件，然后引用环境的作业才能继续。 您可以使用环境保护规则来要求人工审批、延迟工作或将环境限制于某些分支。

### 需要的审查者

使用所需的审查者要求特定人员或团队批准引用环境的工作流程作业。 您最多可以列出六个用户或团队作为审查者。 审查者必须至少具有对仓库的读取访问权限。 只有一个必需的审查者需要批准该作业才能继续。

有关由必需审查者审查引用环境的作业的详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。

### 等待计时器

在最初触发作业后，使用等待计时器将作业延迟特定时间。 时间（分钟）必须是 0 至 43,200（30天）之间的整数。

### 部署分支

使用部署分支来限制哪些分支可以部署到环境中。 以下是环境部署分支的选项：

* **所有分支**：存储库中的所有分支都可以部署到环境。
* **受保护的分支**：只有启用了分支保护规则的分支才能部署到环境。 如果没有为仓库中的任何分支定义分支保护规则，那么所有分支都可以部署。 有关分支保护规则的详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches)”。
* **所选分支**：只有与指定名称模式匹配的分支才能部署到环境。

  例如，如果指定 `releases/*` 为部署分支规则，则只有名称以 `releases/` 开头的分支才能部署到环境。 （通配符不匹配 `/`。 要匹配以 `release/` 开头且包含其他单斜杠的分支，请使用 `release/*/*`。）如果添加 `main` 作为部署分支规则，则名为 `main` 的分支也可以部署到环境。 有关部署分支的语法选项的详细信息，请参阅 [Ruby File.fnmatch 文档](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)。
## 环境机密

存储在环境中的机密仅可用于引用环境的工作流程作业。 如果环境需要批准，作业在所需的审查者批准之前不能访问环境机密。 有关机密的详细信息，请参阅“[已加密的机密](/actions/reference/encrypted-secrets)”。

{% note %}

注意：在自托管运行器上运行的工作流不会在一个孤立的容器中运行，即使它们使用环境。 环境机密应与存储库和组织机密的安全级别相同。 有关详细信息，请参阅“[GitHub Actions 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)”。

{% endnote %}

## 创建环境

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %} {% note %}

注意：使用 {% data variables.product.prodname_team %} 的组织和使用 {% data variables.product.prodname_pro %} 的用户可在专用存储库中创建环境。

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %} {% data reusables.actions.new-environment %} {% data reusables.actions.name-environment %}
1. （可选）指定必须批准使用此环境的工作流程作业的人员或团队。
   1. 选择“必需审阅者”。
   1. 最多可输入 6 人或团队。 只有一个必需的审查者需要批准该作业才能继续。
   1. 单击“保存保护规则”。
2. （可选）指定在允许使用此环境的工作流程作业继续之前要等待的时长。
   1. 选择“等待计时器”。
   1. 输入要等待的分钟数。
   1. 单击“保存保护规则”。
3. （可选）指定哪些分支可以部署到此环境。 有关可能值的详细信息，请参阅“[部署分支](#deployment-branches)”。
   1. 在“部署分支”下拉列表中选择所需的选项。
   1. 如果选择“所选分支”，请输入要允许的分支名称模式。
4. （可选）添加环境机密。 这些机密仅可用于使用环境的工作流程作业。 此外，使用此环境的工作流程作业只能在任何配置的规则（例如，必需的审查者）通过后才能访问这些机密。 有关机密的详细信息，请参阅“[已加密的机密](/actions/reference/encrypted-secrets)”。
   1. 在“环境机密”下，单击“添加机密” 。
   1. 输入机密名称。
   1. 输入机密值。
   1. 单击“添加机密”。

您还可以通过 REST API 创建和配置环境。 有关详细信息，请参阅“[部署环境](/rest/deployments/environments)”、“[GitHub Actions 机密](/rest/actions/secrets)”和“[部署分支策略](/rest/deployments/branch-policies)”。

运行引用不存在的环境的工作流程将使用引用的名称创建环境。 新创建的环境将不配置任何保护规则或机密。 可在仓库中编辑工作流程的任何人都可以通过工作流程文件创建环境，但只有仓库管理员才能配置环境。

## 使用环境

工作流程中的每个作业都可以引用单个环境。 在将引用环境的作业发送到运行器之前，必须通过为环境配置的任何保护规则。 只有在将作业发送给运行器后，作业才能访问环境的机密。

当工作流程引用环境时，环境将显示在仓库的部署中。 有关查看当前和以前的部署的详细信息，请参阅“[查看部署历史记录](/developers/overview/viewing-deployment-history)”。

{% data reusables.actions.environment-example %}

## 删除环境

{% data reusables.actions.permissions-statement-environment %}

删除环境将删除与环境关联的所有机密和保护规则。 由于已删除环境的保护规则而正在等待的任何作业将自动失败。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. 在要删除的环境旁边，单击 {% octicon "trash" aria-label="The trash icon" %}。
2. 单击“我了解，删除此环境”。

您也可以通过 RESEST API 删除环境。 有关详细信息，请参阅“[环境](/rest/reference/repos#environments)”。

## 环境与部署的关系

{% data reusables.actions.environment-deployment-event %}

您可以通过 REST API 或 GraphQL API 访问这些对象。 您还可以订阅这些 web 挂钩事件。 有关详细信息，请参阅“[存储库](/rest/reference/repos#deployments)”(REST API)、“[对象](/graphql/reference/objects#deployment)”(GraphQL API) 或“[Webhook 事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)”。

## 后续步骤

{% data variables.product.prodname_actions %} 具有多个用于管理部署的功能。 有关详细信息，请参阅“[使用 GitHub Actions 进行部署](/actions/deployment/deploying-with-github-actions)”。
