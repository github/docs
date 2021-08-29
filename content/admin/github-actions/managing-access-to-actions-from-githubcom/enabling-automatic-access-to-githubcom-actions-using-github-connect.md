---
title: Enabling automatic access to GitHub.com actions using GitHub Connect
intro: 'To allow {% data variables.product.prodname_actions %} in your enterprise to use actions from {% data variables.product.prodname_dotcom_the_website %}, you can connect your enterprise instance to {% data variables.product.prodname_ghe_cloud %}.'
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
{% data reusables.actions.ae-beta %}

By default, {% data variables.product.prodname_actions %} workflows on {% data variables.product.product_name %} cannot use actions directly from {% data variables.product.prodname_dotcom_the_website %} or [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

To make all actions from {% data variables.product.prodname_dotcom_the_website %} available on your enterprise instance, you can use {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.product_name %} with {% data variables.product.prodname_ghe_cloud %}. For other ways of accessing actions from {% data variables.product.prodname_dotcom_the_website %}, see "[About using actions in your enterprise](/admin/github-actions/about-using-actions-in-your-enterprise)."

## Enabling automatic access to all {% data variables.product.prodname_dotcom_the_website %} actions

Before enabling access to all actions from {% data variables.product.prodname_dotcom_the_website %} on your enterprise instance, you must connect your enterprise to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Server can use actions from GitHub.com in workflows runs", use the drop-down menu and select **Enabled**.
  ![Drop-down menu to actions from GitHub.com in workflows runs](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}
