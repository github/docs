---
title: 批准复刻中的工作流程运行
intro: 当外部贡献者第一次向公共仓库提交拉取请求时，拥有写入权限的维护者可能必须批准任何工作流程运行。
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Approve public fork runs
ms.openlocfilehash: 74918a7d2e0081d6332ab267ef18ae148a2cff5e
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164121'
---
## 关于公共复刻中的工作流程运行

{% data reusables.actions.workflow-run-approve-public-fork %}

可以为[存储库](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)、[组织](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks)或[企业](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)配置工作流审批要求。

已等待批准超过 30 天的工作流程运行将自动删除。

## 批准公共复刻中拉取请求的工作流程运行

{% data reusables.actions.workflows.approve-workflow-runs %}
