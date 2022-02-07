---
title: Enabling automatic user license sync for your enterprise
intro: 'You can manage license usage across your {% data variables.product.prodname_enterprise %} deployments by automatically syncing user licenses from {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
---

## 关于许可同步

After you enable license synchronization, you'll be able to view license usage for your entire enterprise across {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_github_connect %} 每周在 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_ghe_cloud %} 之间同步许可。 更多信息请参阅“[管理 {% data variables.product.prodname_enterprise %} 的许可](/billing/managing-your-license-for-github-enterprise)”。

您还可以手动将 {% data variables.product.prodname_ghe_server %} 用户许可信息上传到 {% data variables.product.prodname_ghe_cloud %}。 For more information, see "[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

## 启用许可同步

Before enabling license synchronization on {% data variables.product.product_location %}, you must enable {% data variables.product.prodname_github_connect %}. For more information, see "[Managing {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. 在“Server can sync user license count and usage”下，使用下拉菜单，然后选择 **Enabled**。 ![用于启用自动用户许可同步的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
