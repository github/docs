---
title: 启用必需状态检查
intro: 在拉取请求中合并分支之前，或可以将本地分支上的提交推送到受保护远程分支之前，仓库管理员可以实施所需状态检查。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.protected-branches-options %}

必须配置仓库使用状态 API 后才可启用必需状态检查。 更多信息请参阅“[构建 CI 服务器](/guides/building-a-ci-server/)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. 在“Protect matching branches（保护匹配分支）”下，选择 **Require status checks to pass before merging（合并前需要通过状态检查）**。 ![必需状态检查选项](/assets/images/help/repository/required-status-checks.png)
7. （可选）选中 **Require branches to be up to date before merging（在合并前要求分支保持最新状态）**。 如果选中，则可确保使用基础分支上的最新代码来测试分支。 ![宽松或严格的必需状态复选框](/assets/images/help/repository/protecting-branch-loose-status.png)
7. 从可用状态检查列表中，选择您想要设为必需的检查。 ![可用状态检查列表](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
9. 单击 **Create（创建）**。

{% data reusables.repositories.required-status-merge-tip %}
