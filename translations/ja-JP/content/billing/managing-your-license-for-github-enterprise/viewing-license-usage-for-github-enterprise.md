---
title: Viewing license usage for GitHub Enterprise
intro: 'You can view license usage for your enterprise on {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
---

## About license usage for {% data variables.product.prodname_enterprise %}

{% ifversion ghec %}

You can view license usage for your enterprise account on {% data variables.product.prodname_ghe_cloud %} on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %}

{% elsif ghes %}

You can view license usage for {% data variables.product.prodname_ghe_server %} on {% data variables.product.product_location %}.

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %} For more information about the display of license usage on {% data variables.product.prodname_dotcom_the_website %}, see "[Viewing license usage for {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

{% endif %}

## Viewing license usage on {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

You can view the license usage for your enterprise and download a file with license details.

{% data reusables.billing.license-statuses %}

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Enterprise licensing**.
  !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Review your current {% data variables.product.prodname_enterprise %} license, as well as consumed and available user licenses.
    - If your license includes {% data variables.product.prodname_GH_advanced_security %}, you can review your total seat use. For more information, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Review your current {% data variables.product.prodname_enterprise %} license, as well as consumed and available user licenses.{% ifversion ghes %}
    - If your license includes {% data variables.product.prodname_GH_advanced_security %}, you can review your total seat use as well as a per-organization breakdown of committers. For more information, see "[Managing {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security)."{% endif %}

{% endif %}
