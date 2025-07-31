---
title: Syncing license usage from GitHub Enterprise Server to Cloud
intro: 'You can sync license usage from GitHub Enterprise Server to GitHub Enterprise Cloud to view all license usage across your enterprise in one place and ensure that people with accounts in both environments only consume one user license.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Sync license usage
redirect_from:
  - /billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud
contentType: how-tos
---

## About synchronization of license usage

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

To ensure that you see up-to-date license details on {% data variables.product.prodname_ghe_cloud %}, you can sync license usage to {% data variables.product.prodname_dotcom_the_website %}{% ifversion ghecom-license-sync %} or {% data variables.enterprise.data_residency_site %}{% endif %} automatically, using {% data variables.product.prodname_github_connect %}. For more information about {% data variables.product.prodname_github_connect %}, see [About {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %} in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}.{% endif %}

If you don't want to enable {% data variables.product.prodname_github_connect %}, you can manually sync license usage by uploading a file from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_dotcom_the_website %}.

When you synchronize license usage, only the user ID and email addresses for each user account on {% data variables.product.prodname_ghe_server %} are transmitted to {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Automatically syncing license usage

You can use {% data variables.product.prodname_github_connect %} to automatically synchronize user license count and usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly.

After you enable {% data variables.product.prodname_github_connect %}, license data will be automatically synchronized weekly. You can also manually synchronize your license data at any time, by triggering a license sync job.

### Triggering a license sync job

1. Sign in to your {% data variables.product.prodname_ghe_server %} instance.
{% data reusables.enterprise-accounts.access-enterprise-ghes %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab-ghes %}
1. Under "License sync", click **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Sync now**.

If there is no **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Sync now** button, you need to enable license synchronization. An information message, "License sync is disabled. You can enable it in the GitHub Connect settings" is shown. Click the "GitHub Connect settings" link. For more information, see [Enabling automatic user license sync for your enterprise]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %} in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}.{% endif %}

## Manually uploading GitHub Enterprise Server license usage

You can download a JSON file from {% data variables.product.prodname_ghe_server %} and upload the file to {% data variables.product.prodname_ghe_cloud %} to manually sync user license usage between the two deployments.

1. Sign in to your {% data variables.product.prodname_ghe_server %} instance.
{% data reusables.enterprise-accounts.access-enterprise-ghes %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab-ghes %}
1. In the "User licenses" section, under "Quick links", to download a file containing your current license usage on {% data variables.product.prodname_ghe_server %}, click **Export license usage**.

   ![Screenshot of the "User licenses" section of the "License" page. A link, labeled "Export license usage", is outlined in dark orange.](/assets/images/enterprise/management-console/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. Next to "Enterprise Server instances", click **Add server usage**.
1. Upload the JSON file you downloaded from {% data variables.product.prodname_ghe_server %}.
