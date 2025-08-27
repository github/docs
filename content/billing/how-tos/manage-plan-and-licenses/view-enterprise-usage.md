---
title: Viewing usage for your GitHub Enterprise plan
intro: 'Learn how to display the number of users in your enterprise. For {% data variables.product.prodname_ghe_cloud %} full billing information is also available.'
permissions: Enterprise owners and billing managers (cloud only)
product: '{% data variables.product.prodname_enterprise %}'
redirect_from:
  - /billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise
  - /billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /billing/managing-the-plan-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
shortTitle: View enterprise usage
contentType: how-tos
---

## Viewing subscription and usage for your enterprise

You can view the subscription and usage for your enterprise and download a file with license details.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}

The information displayed varies according to your enterprise set up.

* {% data variables.product.prodname_ghe_cloud %}, potentially with licenses synchronized from {% data variables.product.prodname_ghe_server %}
* {% data variables.product.prodname_ghe_server %}

To learn more about the license data associated with your enterprise account and how the number of consumed user licenses is calculated, see [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise).

## Finding information on {% data variables.product.prodname_ghe_cloud %}

* Under "User licenses", view your total licenses, number of consumed licenses, and your subscription expiration date.
* To view details for license usage or download a CSV file with license details, to the right of "User Licenses", click **View details** or **{% octicon "download" aria-hidden="true" aria-label="download" %} CSV report**.
* To view usage details for other features, in the left sidebar, click **Billing**.

### Synchronization of {% data variables.product.prodname_ghe_server %} use

The date of the last license sync occurred is shown under "Enterprise Server instances". Look for timestamps next to usage uploaded or synced events.

* "Server usage uploaded" indicates license usage between environments was manually updated when a {% data variables.product.prodname_ghe_server %} license file was uploaded.
* "{% data variables.product.prodname_github_connect %} server usage synced" indicates license usage between environments was automatically updated.
* "{% data variables.product.prodname_github_connect %} server usage never synced" indicates that {% data variables.product.prodname_github_connect %} is configured, but license usage between environments has never updated successfully.

For more information, see [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

### Synchronization of {% data variables.visual_studio.prodname_vss_ghe %} subscriptions

If your {% data variables.product.github %} license includes {% data variables.visual_studio.prodname_vss_ghe %}, you can identify whether a user account on {% data variables.product.prodname_ghe_cloud %} has successfully matched with a {% data variables.product.prodname_vs %} subscriber by downloading the CSV file that contains additional license details. The license status will be one of the following:

* "Matched": The user account on {% data variables.product.prodname_dotcom_the_website %} is linked with a {% data variables.product.prodname_vs %} subscriber.
* "Pending Invitation": An invitation was sent to a {% data variables.product.prodname_vs %} subscriber, but the subscriber has not accepted the invitation.
* Blank: There is no {% data variables.product.prodname_vs %} association to consider for the user account on {% data variables.product.prodname_dotcom_the_website %}.

## Finding information on {% data variables.product.prodname_ghe_server %}

* Under "User licenses", view your total licenses, number of consumed licenses, and your subscription expiration date.
* To view details for license usage or download a JSON file with license details, click **View users** or **Export license usage**.
* Review your current {% data variables.product.prodname_enterprise %} license, as well as consumed and available user licenses.
* If you have purchased {% data variables.product.prodname_AS %}, you can review your total licenses used as well as a per-organization breakdown of active committers. See [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise).

## Reporting license information using the REST API

You can also use the REST API to return consumed licenses data and the status of the license sync job. See [AUTOTITLE](/rest/enterprise-admin/license).
