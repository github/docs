---
title: 在 GitHub Enterprise Server 与 GitHub Enterprise Cloud 之间启用自动用户许可同步
intro: '您可以将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_ghe_cloud %}，并允许 {% data variables.product.prodname_ghe_server %} 将用户许可信息上传到 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: 启用用户许可同步
---

## 关于许可同步

在启用许可同步后，您将能够查看 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 上整个企业帐户的许可使用情况。 {% data variables.product.prodname_github_connect %} 每周在 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_ghe_cloud %} 之间同步许可。 For more information, see "[Managing your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)."

您还可以手动将 {% data variables.product.prodname_ghe_server %} 用户许可信息上传到 {% data variables.product.prodname_ghe_cloud %}。 For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

## 启用许可同步

在 {% data variables.product.product_location_enterprise %} 上启用许可同步之前，您必须将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. 在“Server can sync user license count and usage”下，使用下拉菜单，然后选择 **Enabled**。 ![用于启用自动用户许可同步的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
