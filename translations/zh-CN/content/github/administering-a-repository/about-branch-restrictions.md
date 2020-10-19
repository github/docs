---
title: 关于分支限制
intro: 'Branches within repositories that belong to organizations can be configured so that only certain users{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} or{% endif %} teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, or apps{% endif %} can push to the branch.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

When you enable branch restrictions, only users, teams, or apps that have been given permission can push to the protected branch. 在启用分支限制后，只有被授予权限的用户{% if page.version == "dotcom" or page.version ver_gt "2.18" %},{% else %}或{% endif %}团队{% if page.version == "dotcom" or page.version ver_gt "2.18" %}或应用{% endif %}才可推送到受保护分支。 You can view and edit the users, teams, or apps with push access to a protected branch in the protected branch's settings.

You can only give push access to a protected branch to users, teams, or installed {% data variables.product.prodname_github_apps %} with `write` access to a repository.

People and apps with admin permissions to a repository are always able to push to a protected branch.

{% tip %}

**Note:** If "Include administrators" is selected, you've enabled required status checks on the branch, and if any status checks fail, any attempt to push changes to the protected branch will also fail, even for people and apps with admin permissions. 更多信息请参阅“[启用必需状态检查](/articles/enabling-required-status-checks)”。

{% endtip %}

### 延伸阅读

- "[关于受保护分支](/articles/about-protected-branches)"
- "[配置受保护分支](/articles/configuring-protected-branches)"
- "[关于必需状态检查](/articles/about-required-status-checks)"
- "[启用必需状态检查](/articles/enabling-required-status-checks)"
