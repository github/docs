---
title: Syncing license usage between GitHub Enterprise Server and GitHub Enterprise Cloud
intro: 'You can sync license usage from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} to view all license usage across your enterprise in one place and ensure that people with accounts in both environments only consume one user license.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
---

## About synchronization of license usage

{% data reusables.enterprise-licensing.about-license-sync %}

If you allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can sync license usage between your enterprise accounts automatically. Automatic synchronization ensures that you see up-to-date license details on {% data variables.product.prodname_dotcom_the_website %}. If you don't want to allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can manually sync license usage by uploading a file from {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}.

For more information about licenses and usage for {% data variables.product.prodname_ghe_server %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

## Automatically syncing license usage

您可以使用 {% data variables.product.prodname_github_connect %} 在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间自动同步用户许可数量和使用情况。 更多信息请参阅“[在 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_ghe_cloud %} 之间启用自动用户许可同步](/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)”。

## Manually syncing license usage

您可以从 {% data variables.product.prodname_ghe_server %} 下载 JSON 文件并将文件上传到 {% data variables.product.prodname_ghe_cloud %}，在两个部署之间手动同步用户许可使用情况。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. 在“Quick links”下，要下载包含 {% data variables.product.prodname_ghe_server %} 上当前许可使用情况的文件，请单击 **Export license usage**。 ![Export license usage 链接](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. 在左侧边栏中，单击 **Enterprise licensing（企业许可）**。 ![企业帐户设置侧边栏中的"Enterprise licensing（企业许可）"选项卡](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. 在“Enterprise Server Instances（Enterprise Server 实例）”下，单击 **Add server usage（添加服务器使用情况）**。 ![Upload GitHub Enterprise Servers usage 链接](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. 上传从 {% data variables.product.prodname_ghe_server %} 下载的 JSON 文件。 ![拖放或选择要上传的文件](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
