---
title: 在 GitHub Enterprise Server 与 GitHub Enterprise Cloud 之间启用自动用户许可同步
intro: '您可以将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_ghe_cloud %}，并允许 {% data variables.product.prodname_ghe_server %} 将用户许可信息上传到 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户。'
permissions: '{% data variables.product.prodname_ghe_server %} 的站点管理员（同时也是已连接 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户的所有者）可以启用自动用户许可同步。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
versions:
  enterprise-server: '*'
---

### 关于许可同步

After you enable license synchronization, you'll be able to view license usage for your entire enterprise account, across {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_github_connect %} syncs license between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly. 更多信息请参阅“[管理您的 {% data variables.product.prodname_enterprise %} 许可](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-license)。”

您还可以手动将 {% data variables.product.prodname_ghe_server %} 用户许可信息上传到 {% data variables.product.prodname_ghe_cloud %}。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

### 启用许可同步

在 {% data variables.product.product_location_enterprise %} 上启用许可同步之前，您必须将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. 在“Server can sync user license count and usage”下，使用下拉菜单，然后选择 **Enabled**。 ![用于启用自动用户许可同步的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
