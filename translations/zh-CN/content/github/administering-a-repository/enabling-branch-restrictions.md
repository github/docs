---
title: 启用分支限制
intro: 'You can enforce branch restrictions so that only certain users{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} or{% endif %} teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, or apps{% endif %} can push to a protected branch in repositories owned by your organization.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/enabling-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

对组织拥有的仓库具有管理员权限的任何人都可以启用分支限制。

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% data reusables.repositories.include-administrators %}
6. 在“Protect matching branches（保护匹配分支）”下，选择 **Restrict who can push to matching branches（限制可推送到匹配分支的人员）**。 ![分支限制复选框](/assets/images/help/repository/restrict-branch.png)
8. Search for and select the people, teams, or apps who will have permission to push to the protected branch. ![分支限制搜索](/assets/images/help/repository/restrict-branch-search.png)
9. 单击 **Create（创建）**。

### 延伸阅读

- "[关于受保护分支](/github/administering-a-repository/about-protected-branches)"
- "[配置受保护分支](/github/administering-a-repository/configuring-protected-branches)"
- "[关于必需状态检查](/github/administering-a-repository/about-required-status-checks)"
- "[启用必需状态检查](/github/administering-a-repository/enabling-required-status-checks)"
