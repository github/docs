---
title: 关于分支限制
intro: '属于组织的仓库内的分支可配置为只允许特定用户{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %}或{% endif %}团队{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}推送到该分支。'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

在启用分支限制后，只有被授予权限的用户{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %}或{% endif %}团队{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}才可推送到受保护分支。 在启用分支限制后，只有被授予权限的用户{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %}或{% endif %}团队{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}才可推送到受保护分支。 您可以在受保护分支的设置中查看和编辑对该受保护分支具有推送权限的用户{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %}或{% endif %}团队{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}。

您只能将推送到受保护分支的权限授予具有仓库`写入`权限的用户{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}或{% endif %}团队{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}或安装的{% data variables.product.prodname_github_apps %}{% endif %}。

具有仓库管理员权限的人员{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}和应用{% endif %}始终可以推送到受保护分支。

{% tip %}

**注：**如果选中“Include administrators（包括管理员）”，并且您对分支启用了必需状态检查，如有任何状态检查失败，则即使是具有管理员权限的人员{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}和应用{% endif %}，将更改推送到受保护分支的任何尝试也会失败。 更多信息请参阅“[启用必需状态检查](/articles/enabling-required-status-checks)”。

{% endtip %}

### 延伸阅读

- "[关于受保护分支](/articles/about-protected-branches)"
- "[配置受保护分支](/articles/configuring-protected-branches)"
- "[关于必需状态检查](/articles/about-required-status-checks)"
- "[启用必需状态检查](/articles/enabling-required-status-checks)"
