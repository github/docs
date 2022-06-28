---
title: Syncing license usage between GitHub Enterprise Server and GitHub Enterprise Cloud
intro: 'You can sync license usage from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} to view all license usage across your enterprise in one place and ensure that people with accounts in both environments only consume one user license.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
---

## About synchronization of license usage

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

To ensure that you see up-to-date license details on {% data variables.product.prodname_dotcom_the_website %}, you can sync license usage between the environments automatically, using {% data variables.product.prodname_github_connect %}. For more information about {% data variables.product.prodname_github_connect %}, see "[About {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}."{% endif %}

If you don't want to enable {% data variables.product.prodname_github_connect %}, you can manually sync license usage by uploading a file from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Automatically syncing license usage

You can use {% data variables.product.prodname_github_connect %} to automatically synchronize user license count and usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly. For more information, see "[Enabling automatic user license sync for your enterprise]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}."{% endif %}

{% ifversion ghec or ghes > 3.4 %}
After you enable {% data variables.product.prodname_github_connect %}, license data will be automatically synchronized weekly. You can also manually synchronize your license data at any time, by triggering a license sync job.

### Triggering a license sync job

1. Sign in to your {% data variables.product.prodname_ghe_server %} instance.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "License sync", click {% octicon "sync" aria-label="The Sync icon" %} **Sync now**.
  ![Screenshot of "Sync now" button in license sync section](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Manually uploading GitHub Enterprise Server license usage

You can download a JSON file from {% data variables.product.prodname_ghe_server %} and upload the file to {% data variables.product.prodname_ghe_cloud %} to manually sync user license usage between the two deployments.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Under "Quick links", to download a file containing your current license usage on {% data variables.product.prodname_ghe_server %}, click **Export license usage**.
  ![Export license usage link](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
10. Under "Enterprise Server Instances", click **Add server usage**.
  ![Upload GitHub Enterprise Servers usage link](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Upload the JSON file you downloaded from {% data variables.product.prodname_ghe_server %}.
  ![Drag and drop or select a file to upload](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
