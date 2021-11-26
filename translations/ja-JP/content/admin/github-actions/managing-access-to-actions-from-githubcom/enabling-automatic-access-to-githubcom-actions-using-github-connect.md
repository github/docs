---
title: GitHub Connect を使用して GitHub.com アクションへの自動アクセスを有効にする
intro: 'Enterprise 内の {% data variables.product.prodname_actions %} が {% data variables.product.prodname_dotcom_the_website %} のアクションを使用できるようにするには、Enterprise インスタンスを {% data variables.product.prodname_ghe_cloud %} に接続します。'
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
shortTitle: Use GitHub Connect for actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

デフォルトでは、{% data variables.product.product_name %} の {% data variables.product.prodname_actions %} ワークフローは {% data variables.product.prodname_dotcom_the_website %} または [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) から直接アクションを使用できません。

{% data variables.product.prodname_dotcom_the_website %} のすべてのアクションを Enterprise インスタンスで使用できるようにするには、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.product_name %} を {% data variables.product.prodname_ghe_cloud %} と統合します。 {% data variables.product.prodname_dotcom_the_website %} からアクションにアクセスする他の方法については、「[Enterprise でのアクションの使用について](/admin/github-actions/about-using-actions-in-your-enterprise)」を参照してください。

## すべての {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する

{% data reusables.actions.enterprise-github-connect-warning %}

Enterprise インスタンスで {% data variables.product.prodname_dotcom_the_website %} からのすべてのアクションへのアクセスを有効にする前に、Enterprise を {% data variables.product.prodname_dotcom_the_website %} に接続する必要があります。 For more information, see "[Connecting your enterprise to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}
{% data reusables.enterprise-accounts.settings-tab %}
{%- endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- ifversion ghes > 3.0 or ghae %}
1. Under "Users can utilize actions from GitHub.com in workflow runs", use the drop-down menu and select **Enabled**. ![ワークフロー実行内の GitHub.com からアクションへのドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
{%- else %}
1. [Server can use actions from GitHub.com in workflows runs] で、ドロップダウンメニューを使用して [**Enabled**] を選択します。 ![ワークフロー実行内の GitHub.com からアクションへのドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
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
