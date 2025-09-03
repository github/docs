---
title: Syncing license usage from GitHub Enterprise Server to Cloud
intro: 'Sync licenses manually or with {% data variables.product.prodname_github_connect %}.'
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

A {% data variables.product.prodname_enterprise %} license allows a user to use both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}. See [AUTOTITLE](/billing/concepts/enterprise-billing/combined-enterprise-use).

To view combined license details on {% data variables.product.prodname_ghe_cloud %} and ensure users only consume one license, you must sync licenses between deployments. You can do this:

* Automatically, using {% data variables.product.prodname_github_connect %}.
* Manually, by uploading a license file from from {% data variables.product.prodname_ghe_server %} to {% data variables.product.github %}.

When you synchronize license usage, only the user ID and email addresses for each user account on {% data variables.product.prodname_ghe_server %} are transmitted to {% data variables.product.prodname_ghe_cloud %}.

## Automatically syncing license usage

You can use {% data variables.product.prodname_github_connect %} to automatically synchronize user license count and usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} weekly.

After you enable {% data variables.product.prodname_github_connect %}, license data will be automatically synchronized weekly. You can also manually synchronize your license data at any time, by triggering a license sync job.

### Enabling automatic license sync

To enable license sync, you must:

1. Enable {% data variables.product.prodname_github_connect %}. See {% ifversion ghes %}[AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom) or [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom){% else %}[AUTOTITLE](/enterprise-server@latest/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom) or [AUTOTITLE](/enterprise-server@latest/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom) in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}.
1. Enable license sync. See {% ifversion ghes %}[AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% else %}[AUTOTITLE](/enterprise-server@latest/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom) in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}.

### Triggering a license sync job

1. Sign in to your {% data variables.product.prodname_ghe_server %} instance.
{% data reusables.enterprise-accounts.access-enterprise-ghes %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab-ghes %}
1. Under "License sync", click **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Sync now**.

## Manually uploading {% data variables.product.prodname_ghe_server %} license usage

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

## Next steps

{% data reusables.enterprise-licensing.view-consumed-licenses %}

To make troubleshooting easier, if you synchronize license usage and do not use {% data variables.product.prodname_emus %}, we highly recommend enabling verified domains for your enterprise account on {% data variables.product.prodname_ghe_cloud %}. See [AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}
