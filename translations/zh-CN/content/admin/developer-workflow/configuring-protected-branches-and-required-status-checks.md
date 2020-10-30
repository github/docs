---
title: 配置受保护分支和必需状态检查
intro: 您可以启用受保护分支来限制分支操作，以及在分支合并到拉取请求中之前或在将本地分支上的提交推送到受保护远程分支之前强制执行必需状态检查。
redirect_from:
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

任何对仓库有管理员权限的人都可以启用分支限制。

### 为仓库启用受保护分支

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. 单击 **Create（创建）**。

### 必需状态检查的类型

| 必需状态检查的类型 | 设置                                                                              | 合并要求                         | 考虑因素                                                                          |
| --------- | ------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| **严格**    | 选中 **Require branches to be up-to-date before merging（合并前需要分支保持最新状态）**复选框。      | 在合并之前，**必须**使用基础分支使分支保持最新状态。 | 这是必需状态检查的默认行为。 可能需要更多构建，因为在其他协作者将拉取请求合并到受保护基础分支后，您需要使头部分支保持最新状态。              |
| **宽松**    | **不**选中 **Require branches to be up-to-date before merging（合并前需要分支保持最新状态）**复选框。 | 在合并之前，**不**必使用基础分支使分支保持最新状态。 | 您将需要更少的构建，因为在其他协作者合并拉取请求后，您不需要使头部分支保持最新状态。 如果存在与基础分支不兼容的变更，则在合并分支后，状态检查可能会失败。 |
| **已禁用**   | **不**选中 **Require status checks to pass before merging（合并前需要状态检查通过）**复选框。       | 分支没有合并限制。                    | 如果未启用必需状态检查，协作者可以随时合并分支，无论它是否使用基础分支保持最新状态。 这增加了不兼容变更的可能性。                     |

### 启用必需状态检查

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. 选中 **Require status checks to pass before merging（合并前必需状态检查通过）**。 ![必需状态检查选项](/assets/images/help/repository/required-status-checks.png)
6. 从可用状态检查列表中，选择您想要设为必需的状态检查。 ![可用状态检查列表](/assets/images/help/repository/required-statuses-list.png)
{% data reusables.repositories.include-administrators %}
8. 视情况可以取消选中 **Require branches to be up to date before merging（在合并前要求分支保持最新状态）**。 如果选中，则可确保使用基础分支上的最新代码来测试分支。 ![宽松或严格的必需状态复选框](/assets/images/help/repository/protecting-branch-loose-status-new.png)
9. （可选）选择 {% if currentVersion ver_gt "enterprise-server@2.18" %}**Restrict who can push to matching branches（限制谁可以推送到匹配的分支）**{% else %}**Restrict who can push to this branch（限制谁可以推送到此分支）**{% endif %}。 ![分支限制复选框]{% if currentVersion ver_gt "enterprise-server@2.18" %}(/assets/images/help/repository/restrict-branch.png){% else %}(/assets/images/help/repository/restrict-branch-push.png){% endif %}
10. 搜索并选择将有权推送到受保护分支的人员{% if currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}或{% endif %}团队{% if currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}。 ![分支限制搜索](/assets/images/help/repository/restrict-branch-search.png)
11. 单击 **Create（创建）**。

{% data reusables.repositories.required-status-merge-tip %}
