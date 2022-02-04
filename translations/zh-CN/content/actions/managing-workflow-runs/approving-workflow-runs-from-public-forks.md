---
title: 批准复刻中的工作流程运行
intro: 当外部贡献者第一次向公共仓库提交拉取请求时，拥有写入权限的维护者可能必须批准任何工作流程运行。
versions:
  fpt: '*'
  ghec: '*'
shortTitle: 批准公共复刻运行
---

## 关于公共复刻中的工作流程运行

{% data reusables.actions.workflow-run-approve-public-fork %}

您可以配置[仓库](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)、[组织](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#configuring-required-approval-for-workflows-from-public-forks)或 [企业](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)的工作流程审批要求。

已等待批准超过 30 天的工作流程运行将自动删除。

## 批准公共复刻中拉取请求的工作流程运行

能够写入仓库的维护者可按照以下步骤来审查和运行来自贡献者、需要审批的拉取请求上的工作流程。

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. 检查拉取请求中的拟议更改，确保您在拉取请求分支上自由运行您的工作流程。 您应该特别注意 `.github/workflows/` 目录中影响工作流程文件的任何拟议更改。
1. 如果您能自由在拉取请求分支上运行工作流程，请返回 {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation（转换）**选项卡，在“Workflow(s) awaiting approval（等待批准的工作流程）”下单击 **Approve and run（批准并运行）**。

   ![批准并运行工作流程](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
