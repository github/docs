---
title: Enabling automatic user license sync between GitHub Enterprise Server and GitHub Enterprise Cloud
intro: 'You can connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_ghe_cloud %} and allow {% data variables.product.prodname_ghe_server %} to upload user license information to your enterprise account on {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable automatic user license synchronization.'
versions:
  enterprise-server: '*'
---

### About license synchronization

After you enable license synchronization, you'll be able to view license usage for your entire enterprise account, across {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_github_connect %} syncs license between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly. For more information, see "[Managing your {% data variables.product.prodname_enterprise %} license](/enterprise/{{currentVersion}}/admin/installation/managing-your-github-enterprise-license)."

You can also manually upload {% data variables.product.prodname_ghe_server %} user license information to {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Connecting {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

### Enabling license synchronization

Before enabling license synchronization on {% data variables.product.product_location_enterprise %}, you must connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Connecting {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Under "Server can sync user license count and usage", use the drop-down menu and select **Enabled**. ![Drop-down menu to enable automatic user license sync](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
