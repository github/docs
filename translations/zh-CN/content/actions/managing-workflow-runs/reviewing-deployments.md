---
title: 审查部署
intro: 您可以批准或拒绝等待审查的作业。
product: '{% data reusables.gated-features.environments %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
---

{% data reusables.actions.environments-beta %}
{% data reusables.actions.ae-beta %}

### 关于工作流程中所需的审查

引用配置了所需审查者的环境的作业将等待审批后再开始。 当作业正在等待批准时，其状态为“等待”。 如果作业在 30 天内未获得批准，工作流程运行将自动取消。

For more information about environments and required approvals, see "[Environments](/actions/reference/environments)."{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %} For information about how to review deployments with the REST API, see "[Workflow Runs](/rest/reference/actions#workflow-runs)."{% endif %}

### 批准或拒绝作业

1. 导航到需要审核的工作流程运行。 有关导航到工作流程运行的更多信息，请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。
2. 单击 **Review deployments（审查部署）**。 ![审查部署](/assets/images/actions-review-deployments.png)
3. 选择要审批或拒绝的作业环境。 （可选）留下评论。 ![批准部署](/assets/images/actions-approve-deployments.png)
4. 批准或拒绝：
   - 要批准作业，请单击 **Approve and deploy（批准并部署）**。 一旦作业获得批准（并且任何其他环境保护规则已通过），作业将继续。 此时，作业可以访问存储在环境中的任何机密。
   - 要拒绝作业，请单击 **Reject（拒绝）**。 如果作业被拒绝，工作流程将失败。
