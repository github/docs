---
title: 启用强制推送到受保护分支
intro: 您可以允许强制推送到受保护分支。
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

对仓库具有管理员权限的任何人都可以启用强制推送。

### 关于强制推送到受保护分支

默认情况下，所有受保护分支上阻止强制推送。 对受保护分支启用强制推送时，只要具有仓库写入权限，任何人（包括具有管理员权限的人）都可以强制推送到该分支。

启用强制推送不会覆盖任何其他分支保护规则。 例如，如果分支需要线性提交历史记录，则无法强制推送合并提交到该分支。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}如果站点管理员阻止强制推送到仓库中的所有分支，您不能启用强制推送到受保护分支。 更多信息请参阅“[阻止强制推送到用户帐户或组织拥有的仓库](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)”。

如果站点管理员只阻止强制推送到默认分支，您仍然可以为任何其他受保护分支启用强制推送。{% endif %}

{% data reusables.repositories.protected-branches-options %}

### 启用强制推送

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. 在“Rules applied to everyone including administrators（适用于包括管理员在内的所有人规则）”下，选择 **Allow force pushes（允许强制推送）**。 ![允许强制推送选项](/assets/images/help/repository/allow-force-pushes.png)
7. 单击 **Create（创建）**。
