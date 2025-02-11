---
title: About usage-based billing for licenses
intro: Learn about usage-based billing for your licenses with the enhanced billing platform, whether you pay through {% data variables.product.company_short %} or Azure.
redirect_from:
  - /early-access/billing/managing-usage-based-billing-for-github-licenses-through-github
  - /early-access/billing/managing-usage-based-billing-for-github-licenses-through-azure
  - /early-access/billing/managing-usage-based-billing-for-githubs-products-on-azure
  - /early-access/billing/managing-billing-for-githubs-products-through-azure
  - /early-access/billing/managing-usage-based-billing-for-github-licenses
  - /billing/using-the-enhanced-billing-platform-for-enterprises/about-usage-based-billing-for-licenses
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
permissions: 'Enterprise administrators'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
shortTitle: Usage-based billing for licenses
---

With the enhanced billing platform, you pay monthly for the number of {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_GH_advanced_security %} licenses you use. You will not need to buy a predefined number of licenses in advance.

If a user starts consuming a {% ifversion enterprise-licensing-language %}license{% else %}licensed seat{% endif %} during the month, you will pay pro rata for the user's license usage that month. If a user stops consuming a {% ifversion enterprise-licensing-language %}license{% else %}licensed seat{% endif %} during the month, your bill for the following month will reflect the change.

Pending invitations to join an organization that belongs to your enterprise on {% data variables.product.github %} do not consume a license.

{% data variables.visual_studio.prodname_vss_ghe %} is currently not supported for usage-based billing.

## Which payment methods can I use?

You can use the following payment methods for usage-based billing for licenses:

* Invoiced and self-serve {% data variables.product.prodname_enterprise %} customers can pay using a **credit card** or **PayPal**
* Invoiced customers can also pay using **prepaid credits** (only available to customers who have a volume subscription with or without metered add-ons)
* You can connect an **Azure** subscription to your enterprise account
* For **purchase orders**, you can contact your account manager in {% data variables.contact.contact_enterprise_sales %}
