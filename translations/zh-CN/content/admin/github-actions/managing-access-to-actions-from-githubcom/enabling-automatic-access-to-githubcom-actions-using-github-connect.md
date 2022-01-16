---
title: 启用使用 GitHub Connect 自动访问 GitHub.com 操作
intro: '要允许企业中的 {% data variables.product.prodname_actions %} 使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作，您可以将企业实例连接到 {% data variables.product.prodname_ghe_cloud %}。'
permissions: 'Site administrators for {% data variables.product.product_name %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: 对操作使用 GitHub Connect
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.enterprise-github-connect-warning %}

默认情况下，{% data variables.product.product_name %} 上的 {% data variables.product.prodname_actions %} 工作流程不能使用直接来自 {% data variables.product.prodname_dotcom_the_website %} 或 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 的操作。

要使 {% data variables.product.prodname_dotcom_the_website %} 上的所有操作可用于您的企业实例，您可以使用 {% data variables.product.prodname_github_connect %} 将 {% data variables.product.product_name %} 与 {% data variables.product.prodname_ghe_cloud %} 集成。 有关访问来自 {% data variables.product.prodname_dotcom_the_website %} 的操作的其他方式，请参阅“[关于使用企业中的操作](/admin/github-actions/about-using-actions-in-your-enterprise)”。

## 启用对所有 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问

在企业实例上启用访问来自 {% data variables.product.prodname_dotcom_the_website %} 的所有操作之前，必须将企业连接到 {% data variables.product.prodname_dotcom_the_website %}。 For more information, see "[Connecting your enterprise to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}
{% data reusables.enterprise-accounts.settings-tab %}
{%- endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- ifversion ghes > 3.0 or ghae %}
1. Under "Users can utilize actions from GitHub.com in workflow runs", use the drop-down menu and select **Enabled**. ![工作流程运行中用于访问 GitHub.com 上操作的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
{%- else %}
1. 在“Server can use actions from GitHub.com in workflows runs（服务器在工作流程运行中可以使用 GitHub.com 上的操作）”下，使用下拉菜单选择 **Enabled（已启用）**。 ![工作流程运行中用于访问 GitHub.com 上操作的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
{%- endif %}
1. {% data reusables.actions.enterprise-limit-actions-use %}
