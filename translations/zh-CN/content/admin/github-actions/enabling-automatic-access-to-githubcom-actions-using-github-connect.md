---
title: 启用使用 GitHub Connect 自动访问 GitHub.com 操作
intro: '要允许企业实例上的 {% data variables.product.prodname_actions %} 使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作，您可以将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_ghe_cloud %}。'
permissions: '{% data variables.product.prodname_ghe_server %} 的站点管理员（同时也是已连接 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户的所有者）可以启用对所有 {% data variables.product.prodname_dotcom_the_website %} 操作的访问。'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

默认情况下，{% data variables.product.prodname_ghe_server %} 上的 {% data variables.product.prodname_actions %} 工作流程不能使用直接来自 {% data variables.product.prodname_dotcom_the_website %} 或 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 的操作。

To make all actions from {% data variables.product.prodname_dotcom_the_website %} available on your enterprise instance, you can use {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_ghe_cloud %}. For other ways of accessing actions from {% data variables.product.prodname_dotcom_the_website %}, see "[About using actions on {% data variables.product.prodname_ghe_server %}](/admin/github-actions/about-using-actions-on-github-enterprise-server)."

### 启用对所有 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问

在 {% data variables.product.product_location_enterprise %} 上启用访问来自 {% data variables.product.prodname_dotcom_the_website %} 的所有操作之前，必须将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. 在“Server can use actions from GitHub.com in workflows runs（服务器在工作流程运行中可以使用 GitHub.com 上的操作）”下，使用下拉菜单选择 **Enabled（已启用）**。 ![工作流程运行中用于访问 GitHub.com 上操作的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}
