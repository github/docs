---
title: Enabling automatic access to GitHub.com actions using GitHub Connect
intro: 'To allow {% data variables.product.prodname_actions %} on your enterprise instance to use actions from {% data variables.product.prodname_dotcom_the_website %}, you can connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

By default, {% data variables.product.prodname_actions %} workflows on {% data variables.product.prodname_ghe_server %} cannot use actions directly from {% data variables.product.prodname_dotcom_the_website %} or [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

To make all actions from {% data variables.product.prodname_dotcom_the_website %} available on your enterprise instance, you can connect {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} using {% data variables.product.prodname_github_connect %}. For other ways of accessing actions from {% data variables.product.prodname_dotcom_the_website %}, see "[About using {% data variables.product.prodname_dotcom_the_website %} actions on {% data variables.product.prodname_ghe_server %}](/enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server)."

### Enabling automatic access to all {% data variables.product.prodname_dotcom_the_website %} actions

Before enabling access to all actions from {% data variables.product.prodname_dotcom_the_website %} on {% data variables.product.product_location_enterprise %}, you must connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %}. 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Server can use actions from GitHub.com in workflows runs", use the drop-down menu and select **Enabled**. ![Drop-down menu to actions from GitHub.com in workflows runs](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
