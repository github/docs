---
title: About licenses for GitHub Enterprise
intro: '{% ifversion ghec %}If you deploy {% data variables.product.prodname_ghe_server %} in addition to using {% data variables.product.prodname_ghe_cloud %}, you{% else %}You{% endif %} can synchronize your license usage between{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} deployments, and use a license file to unlock each {% data variables.product.prodname_ghe_server %} instance.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
---

{% ifversion metered-ghe-ghas %}

{% data reusables.billing.usage-based-billing %}

{% endif %}

## About licensing for {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %} To understand how {% data variables.product.company_short %} bills you for consumed licensed seats, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)." For more about the price of {% data variables.product.prodname_enterprise %} licenses, see [Pricing](https://github.com/pricing) on the {% data variables.product.prodname_dotcom %} website.

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you can synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} deployments.

In order to use a {% data variables.product.prodname_ghe_server %} instance, you must upload a license file that {% data variables.product.company_short %} provides when you purchase, renew, or add user licenses to {% data variables.product.prodname_enterprise %}.

## About synchronization of license usage for {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

## About license files for {% data variables.product.prodname_enterprise %}

When you purchase or renew {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} provides a license file {% ifversion ghec %}for your deployments of {% data variables.product.prodname_ghe_server %}{% elsif ghes %}for {% data variables.location.product_location_enterprise %}{% endif %}. A license file has an expiration date and controls the number of people who can use {% data variables.location.product_location_enterprise %}. After you download and install {% data variables.product.prodname_ghe_server %}, you must upload the license file to unlock the application for you to use.

For more information about downloading your license file, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

For more information about uploading your license file, see {% ifversion ghec %}"[AUTOTITLE](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}

If your license expires, you won't be able to access {% data variables.product.prodname_ghe_server %} via a web browser or Git. If needed, you will be able to use command-line utilities to back up all your data. For more information, see {% ifversion ghec %}"[Configuring backups on your appliance]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)." {% endif %}

If you have any questions about renewing your license, contact {% data variables.contact.contact_enterprise_sales %}.

## Further reading

* "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise)"
* The [People that consume a license](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing#people-that-consume-a-license)" section in "About per-user pricing"
* "[Setting up a {% data variables.product.prodname_ghe_server %} instance]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)"
* The [{% data variables.product.prodname_enterprise %} Releases](https://enterprise.github.com/releases/) website
