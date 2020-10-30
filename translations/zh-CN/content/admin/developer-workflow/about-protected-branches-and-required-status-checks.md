---
title: 关于受保护分支和必需状态检查
intro: '受保护分支确保仓库的协作者无法对分支进行不可撤销的更改。 必需状态检查确保在协作者可以对受保护分支进行更改前，所有必需的 CI 测试都已通过。 属于组织的仓库内的分支可配置为只允许特定用户{% if currentVersion ver_gt "enterprise-server@2.18" %},{% else %}或{% endif %}团队{% if currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}推送到该分支。'
redirect_from:
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

*受保护分支*在仓库管理员选择保护的分支上阻止 Git 的多个功能。 受保护分支：

* 无法被强制推送
* 无法被删除
* 在[必需状态检查](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks#enabling-required-status-checks)通过前，无法将更改合并到其中

对仓库具有管理员权限的任何人始终能够推送到受保护分支。 如果启用*分支限制*，则只有被授予权限的用户{% if currentVersion ver_gt "enterprise-server@2.18" %},{% else %}或{% endif %}团队{% if currentVersion ver_gt "enterprise-server@2.18" %}或应用{% endif %}才能推送到受保护分支。 更多信息请参阅”[配置受保护分支和必需状态检查](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks)“。

![限制的分支权限](/assets/images/help/repository/restrict-branch-users.png).

{% tip %}

**注：**如果选中“Include administrators（包括管理员）”，并且您对分支[启用了必需状态检查](/articles/enabling-required-status-checks)，但状态检查失败，则即使是具有管理员权限的人员{% if currentVersion ver_gt "enterprise-server@2.18" %}和应用{% endif %}，将更改推送到受保护分支的任何尝试也会失败。

{% endtip %}
