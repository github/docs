---
title: 启用分支限制
intro: '您可以强制实施分支限制以便只有特定用户{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}{% else %}或{% endif %}团队{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}能够推送到组织所拥有的仓库中的受保护分支。'
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
8. 搜索并选择将有权推送到受保护分支的人员{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}或{% endif %}团队{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}。 ![分支限制搜索](/assets/images/help/repository/restrict-branch-search.png)
9. 单击 **Create（创建）**。

### 延伸阅读

- "[关于受保护分支](/github/administering-a-repository/about-protected-branches)"
- "[配置受保护分支](/github/administering-a-repository/configuring-protected-branches)"
- "[关于必需状态检查](/github/administering-a-repository/about-required-status-checks)"
- "[启用必需状态检查](/github/administering-a-repository/enabling-required-status-checks)"
