---
title: 启用删除受保护分支
intro: 您可以允许具有仓库写入权限的任何人删除受保护分支。
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

对仓库具有管理员权限的任何人都可以启用分支删除。

默认情况下，您不能删除受保护的分支。 对受保护分支启用删除时，只要具有仓库写入权限，任何人（包括具有管理员权限的人）都可以删除该分支。

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. 在“Rules applied to everyone including administrators（适用于包括管理员在内的所有人规则）”下，选择 **Allow deletions（允许删除）**。 ![允许分支删除选项](/assets/images/help/repository/allow-branch-deletions.png)
7. 单击 **Create（创建）**。
