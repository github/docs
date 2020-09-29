---
title: 启用拉取请求的必需审查
intro: 仓库管理员可以实施必需审查，以便拉取请求在合并前必须通过特定数量的批准审查。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

在分支上启用必需审查前，必须首先将分支设置为受保护分支。 更多信息请参阅“[配置受保护分支](/github/administering-a-repository/configuring-protected-branches)”。

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. 选择 **Require pull request reviews before merging（合并前必需拉取请求审查）**。 ![拉取请求审查限制复选框](/assets/images/help/repository/PR-reviews-required.png)
6. 在 Required approving reviews（必需批准审查）下拉菜单中，选择希望在分支机构上要求的审批审查次数。 ![用于选择必需审查批准数量的下拉菜单](/assets/images/help/repository/number-of-required-review-approvals.png)
7. 视情况下可选择 **Dismiss stale pull request approvals when new commits are pushed（在推送新提交时忽略旧拉取请求）**。 当代码修改提交被推送到分支时，此操作忽略拉取请求批准审查。 ![在推送新提交时，关闭旧拉取请求批准的复选框](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
8. 视情况选择 **Require review from Code Owners（代码所有者的必需审查）**，以在拉取请求影响具有指定所有者的代码时，要求代码所有者进行审查。 更多信息请参阅“[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)”。 ![代码所有者的必需审查](/assets/images/help/repository/PR-review-required-code-owner.png)
9. 如果仓库是组织的一部分，视情况选择 **Restrict who can dismiss pull request reviews（限制可忽略拉取请求审查的人员）**，以搜索和选择可忽略拉取请求审查的人员或团队。 更多信息请参阅“[忽略拉取请求审查](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)”。 此选项不适用于个人仓库。 ![限制可以忽略拉取请求审查的人员复选框](/assets/images/help/repository/PR-review-required-dismissals.png)
{% data reusables.repositories.include-administrators %}
11. 单击 **Create（创建）**。

### 延伸阅读

- "[关于拉取请求的必要审查](/github/administering-a-repository/about-required-reviews-for-pull-requests)"
- "[关于受保护分支](/github/administering-a-repository/about-protected-branches)"
- "[关于必需状态检查](/github/administering-a-repository/about-required-status-checks)"
