---
title: 与组织共享工作流程、机密和运行器
shortTitle: Sharing workflows with your organization
intro: 了解如何通过共享入门工作流程、机密和自托管运行器，使用组织功能与团队协作。
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: bf80624fe1118d424a57f7c22efab6368c914819
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884259'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

如果需要与您的团队共享工作流程和其他 {% data variables.product.prodname_actions %} 功能，则考虑在 {% data variables.product.prodname_dotcom %} 组织内协作。 组织允许您集中存储和管理机密、构件和自托管运行器。 还可以在 `.github` 存储库中创建入门工作流，并与组织中的其他用户共享这些工作流。

## 共享 {% ifversion internal-actions %}操作和 {% endif %}工作流

{% ifversion internal-actions %} 无论是否公开发布操作或工作流，都可以与组织共享各个操作和整个工作流。 您可以通过在工作流程文件中引用操作和工作流程来精确地重复使用它们，并且可以创建为新工作流程提供模板的起始工作流程。
{% else %} 你的组织可以通过完全重用工作流或创建为新工作流提供模板的初始工作流来共享工作流。
{% endif %}

{% ifversion internal-actions %}
### 与企业共享操作

{% data reusables.actions.internal-actions-summary %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### 重新使用工作流

{% data reusables.actions.reusable-workflows %} {% endif %}

### 使用入门工作流程

{% data reusables.actions.workflow-organization-templates %} 有关详细信息，请参阅“[为组织创建入门工作流](/actions/using-workflows/creating-starter-workflows-for-your-organization)”。

## 在组织内共享机密

您可以在组织内集中管理您的机密，然后将其提供给选定的仓库。 这也意味着您可以在一个位置更新机密，并且将更改应用于使用该机密的所有仓库工作流程。

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. 单击“新建机密”。
1. 在“名称”输入框中键入机密名称。
1. 输入“机密”的值。
1. 从“存储库访问”下拉列表中，选择访问策略。
1. 单击“添加机密”。

## 在组织内共享自托管运行器

组织管理员可以将其自托管的运行器添加到组，然后创建控制哪些仓库可访问该组的策略。

有关详细信息，请参阅“[使用组管理对自托管运行器的访问权限](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。


## 后续步骤

若要继续了解 {% data variables.product.prodname_actions %}，请参阅“[为组织创建入门工作流](/actions/using-workflows/creating-starter-workflows-for-your-organization)”。
