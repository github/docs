---
title: 为仓库之间的拉取请求禁用合并冲突编辑器
intro: '您可以在 {% data variables.product.prodname_ghe_server %} 上为基础分支和头分支位于不同仓库的拉取请求禁用合并冲突编辑器，要求用户在本地解决合并冲突。'
redirect_from:
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
versions:
  enterprise-server: '*'
---

要求用户在其计算机上本地解决合并冲突可以避免用户因疏忽而从分叉写入到上游仓库。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. 在“Conflict editor for pull requests between repositories”下，使用下拉菜单，然后单击 **Disabled**。 ![包含用于禁用合并冲突编辑器的选项的下拉菜单](/assets/images/enterprise/settings/conflict-editor-settings.png)
