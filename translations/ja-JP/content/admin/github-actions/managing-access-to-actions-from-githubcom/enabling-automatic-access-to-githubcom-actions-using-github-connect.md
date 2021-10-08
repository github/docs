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
{% data reusables.actions.enterprise-github-connect-warning %}

デフォルトでは、{% data variables.product.product_name %} の {% data variables.product.prodname_actions %} ワークフローは {% data variables.product.prodname_dotcom_the_website %} または [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) から直接アクションを使用できません。

{% data variables.product.prodname_dotcom_the_website %} のすべてのアクションを Enterprise インスタンスで使用できるようにするには、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.product_name %} を {% data variables.product.prodname_ghe_cloud %} と統合します。 {% data variables.product.prodname_dotcom_the_website %} からアクションにアクセスする他の方法については、「[Enterprise でのアクションの使用について](/admin/github-actions/about-using-actions-in-your-enterprise)」を参照してください。

## すべての {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する

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
