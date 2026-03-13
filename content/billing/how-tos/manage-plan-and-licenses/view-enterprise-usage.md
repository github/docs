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

On the "Licensing" page, the number of consumed licenses is shown under "Enterprise Cloud". In addition, you can see:

* Usage-based billing: the estimated monthly payment, assuming no further license changes
* Volume billing: your total available licenses and your subscription expiration date.

### Viewing more detailed information

* To view details of license usage, to the right of "Enterprise Cloud", click **More details**.
* To download a CSV file with license details, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Download CSV report**.

### Viewing history of changes to license usage

>[!NOTE]
> This feature is in public preview and only available to usage-based enterprise accounts without Visual Studio bundles.

To view the history of license usage over time, on the "Licensing" page, to the right of "Enterprise Cloud", click **Manage**.

The license history starts capturing history from the day the feature is enabled on your account, and provides a daily snapshot of license additions and removals for {% data variables.product.prodname_ghe_cloud %}. This information shows you how licenses are being consumed and why billed amounts change.

The license history shows:

* Daily snapshot of licenses so you can monitor usage over time
* Actor(s) that added or removed each license to provide accountability
* Date on which the license addition or removal was performed
* Effective date for when the license additions and removals will affect your monthly bill

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
* Review your current {% data variables.product.prodname_enterprise %} license, as well as consumed and available user licenses.{% ifversion ghes < 3.15 %}
* If you have purchased {% data variables.product.prodname_AS %}, you can review your total licenses used as well as a per-organization breakdown of active committers. See [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise).{% endif %}

## Reporting license information using the REST API

You can also use the REST API to return consumed licenses data and the status of the license sync job. See [AUTOTITLE](/rest/enterprise-admin/license).
