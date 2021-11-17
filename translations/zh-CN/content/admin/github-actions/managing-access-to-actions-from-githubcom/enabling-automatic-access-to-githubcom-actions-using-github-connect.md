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

默认情况下，{% data variables.product.product_name %} 上的 {% data variables.product.prodname_actions %} 工作流程不能使用直接来自 {% data variables.product.prodname_dotcom_the_website %} 或 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 的操作。

要使 {% data variables.product.prodname_dotcom_the_website %} 上的所有操作可用于您的企业实例，您可以使用 {% data variables.product.prodname_github_connect %} 将 {% data variables.product.product_name %} 与 {% data variables.product.prodname_ghe_cloud %} 集成。 有关访问来自 {% data variables.product.prodname_dotcom_the_website %} 的操作的其他方式，请参阅“[关于使用企业中的操作](/admin/github-actions/about-using-actions-in-your-enterprise)”。

## 启用对所有 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问

{% data reusables.actions.enterprise-github-connect-warning %}

在企业实例上启用访问来自 {% data variables.product.prodname_dotcom_the_website %} 的所有操作之前，必须将企业连接到 {% data variables.product.prodname_dotcom_the_website %}。 更多信息请参阅“[将企业连接到 {% data variables.product.prodname_ghe_cloud %} ](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}
{% data reusables.enterprise-accounts.settings-tab %}
{%- endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- ifversion ghes > 3.0 or ghae %}
1. 在“Users can utilize actions from GitHub.com in workflow runs（用户在工作流程运行中可以使用 GitHub.com 上的操作）”下，使用下拉菜单选择 **Enabled（已启用）**。 ![工作流程运行中用于访问 GitHub.com 上操作的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
{%- else %}
1. 在“Server can use actions from GitHub.com in workflows runs（服务器在工作流程运行中可以使用 GitHub.com 上的操作）”下，使用下拉菜单选择 **Enabled（已启用）**。 ![工作流程运行中用于访问 GitHub.com 上操作的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
{%- endif %}
1. {% data reusables.actions.enterprise-limit-actions-use %}

{% ifversion ghes > 3.2 or ghae-issue-4815 %}

## Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website %}

When you enable {% data variables.product.prodname_github_connect %}, users see no change in behavior for existing workflows because {% data variables.product.prodname_actions %} searches {% data variables.product.product_location %} for each action before falling back to {% data variables.product.prodname_dotcom_the_website%}. This ensures that any custom versions of actions your enterprise has created are used in preference to their counterparts on {% data variables.product.prodname_dotcom_the_website%}.

Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website %} blocks the potential for a man-in-the-middle attack by a malicious user with access to {% data variables.product.product_location %}. When an action on {% data variables.product.prodname_dotcom_the_website %} is used for the first time, that namespace is retired in {% data variables.product.product_location %}. This blocks any user creating an organization and repository in your enterprise that matches that organization and repository name on {% data variables.product.prodname_dotcom_the_website %}. This ensures that when a workflow runs, the intended action is always run.

After using an action from {% data variables.product.prodname_dotcom_the_website %}, if you want to create an action in {% data variables.product.product_location %} with the same name, first you need to make the namespace for that organization and repository available.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. In the left sidebar, under **Site admin** click **Retired namespaces**.
3. Locate the namespace that you want use in {% data variables.product.product_location %} and click **Unretire**. ![Unretire namespace](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. Go to the relevant organization and create a new repository.

   {% tip %}

   **Tip:** When you unretire a namespace, always create the new repository with that name as soon as possible. If a workflow calls the associated action on {% data variables.product.prodname_dotcom_the_website %} before you create the local repository, the namespace will be retired again. For actions used in workflows that run frequently, you may find that a namespace is retired again before you have time to create the local repository. In this case, you can temporarily disable the relevant workflows until you have created the new repository.

   {% endtip %}

{% endif %}
