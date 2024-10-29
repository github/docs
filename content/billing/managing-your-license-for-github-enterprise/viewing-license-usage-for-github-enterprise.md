---
title: Viewing license usage for GitHub Enterprise
intro: 'You can view license usage for your enterprise on {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.location.product_location %}{% endif %}.'
permissions: 'Enterprise owners{% ifversion ghec %} and billing managers{% endif %}'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
---

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform-licenses %}

{% endif %}

## About license usage for {% data variables.product.prodname_enterprise %}

You can view license usage for {% data variables.product.product_name %} on {% data variables.location.product_location %}.

If you use both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %} and sync license usage between the products, you can view license usage for both on {% data variables.product.prodname_dotcom_the_website %}. For more information about license sync, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

{% ifversion ghes %}

For more information about viewing license usage on {% data variables.product.prodname_dotcom_the_website %} and identifying when the last license sync occurred, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

{% endif %}

You can also use the REST API to return consumed licenses data and the status of the license sync job. See "[AUTOTITLE](/enterprise-cloud@latest/rest/enterprise-admin/license)."

To learn more about the license data associated with your enterprise account and how the number of consumed user {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} are calculated, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."

## Viewing license usage on {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.location.product_location %}{% endif %}

You can view the license usage for your enterprise and download a file with license details. If you're not seeing expected license counts in this report, it's possible that the subscriber’s assigned {% data variables.product.prodname_vs %} subscription email address and {% data variables.product.prodname_dotcom_the_website %} email address aren't exactly the same. For further information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Review your current {% data variables.product.prodname_enterprise %} license, as well as consumed and available user licenses.

   * If you purchased {% data variables.product.prodname_GH_advanced_security %}, you can review your total {% ifversion ghas-billing-UI-update %}license{% else %}seat{% endif %} usage. To learn about the information displayed, see "[AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."

1. To download a CSV report of the license usage, click {% octicon "kebab-horizontal" aria-label="Licensing dropdown" %} to the right of the usage you want to download, then click {% octicon "download" aria-hidden="true" %} **CSV report**.

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Review your current {% data variables.product.prodname_enterprise %} license, as well as consumed and available user licenses.{% ifversion ghes %}
    * To download the consumed license report as a JSON file, in the top right under "Quick links", choose **Export license usage**. For more information about reviewing the data in this report, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."
    * If you have purchased {% data variables.product.prodname_GH_advanced_security %}, you can review your total {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} used as well as a per-organization breakdown of active committers. See "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise)."{% endif %}

{% endif %}
{% ifversion ghec %}

## Viewing the last license sync date

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. To identify when the last license sync occurred, under "Enterprise Server instances", look for timestamps next to usage uploaded or synced events.
   * "Server usage uploaded" indicates license usage between environments was manually updated when a {% data variables.product.prodname_ghe_server %} license file was uploaded.
   * "{% data variables.product.prodname_github_connect %} server usage synced" indicates license usage between environments was automatically updated.
   * "{% data variables.product.prodname_github_connect %} server usage never synced" indicates that {% data variables.product.prodname_github_connect %} is configured, but license usage between environments has never updated successfully.

{% endif %}
