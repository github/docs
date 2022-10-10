---
title: 批准复刻中的工作流程运行
intro: 当外部贡献者第一次向公共仓库提交拉取请求时，拥有写入权限的维护者可能必须批准任何工作流程运行。
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: b995362f67d97a3e2ee6d1029cbe24227867f58a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084656'
---
## 关于公共复刻中的工作流程运行

{% data reusables.actions.workflow-run-approve-public-fork %}

可以为[存储库](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)、[组织](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks)或[企业](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)配置工作流审批要求。

已等待批准超过 30 天的工作流程运行将自动删除。

## 批准公共复刻中拉取请求的工作流程运行

能够写入仓库的维护者可按照以下步骤来审查和运行来自贡献者、需要审批的拉取请求上的工作流程。

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. 检查拉取请求中的拟议更改，确保您在拉取请求分支上自由运行您的工作流程。 应特别注意 `.github/workflows/` 目录中影响工作流文件的任何拟议更改。
1. 如果能自由在拉取请求分支上运行工作流，请返回到 {% octicon "comment-discussion" aria-label="The discussion icon" %}“转换”选项卡，在“等待审批的工作流”下，单击“批准并运行” 。

   ![批准并运行工作流程](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
