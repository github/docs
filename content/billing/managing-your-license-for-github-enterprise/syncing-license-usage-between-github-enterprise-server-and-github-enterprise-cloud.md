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

You can use {% data variables.product.prodname_github_connect %} to automatically sync user license count and usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Enabling automatic user license sync between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)."

## Manually syncing license usage

You can download a JSON file from {% data variables.product.prodname_ghe_server %} and upload the file to {% data variables.product.prodname_ghe_cloud %} to manually sync user license usage between the two deployments.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Under "Quick links", to download a file containing your current license usage on {% data variables.product.prodname_ghe_server %}, click **Export license usage**.
  ![Export license usage link](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. In the left sidebar, click **Enterprise licensing**.
  !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. Under "Enterprise Server Instances", click **Add server usage**.
  ![Upload GitHub Enterprise Servers usage link](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Upload the JSON file you downloaded from {% data variables.product.prodname_ghe_server %}.
  ![Drag and drop or select a file to upload](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
