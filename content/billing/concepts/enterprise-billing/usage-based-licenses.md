---
title: Usage-based billing for enterprise licenses
intro: 'Learn about usage-based billing for licenses in your {% data variables.product.prodname_enterprise %} plan, whether you pay through {% data variables.product.company_short %} or Azure.'
redirect_from:
  - /early-access/billing/managing-usage-based-billing-for-github-licenses-through-github
  - /early-access/billing/managing-usage-based-billing-for-github-licenses-through-azure
  - /early-access/billing/managing-usage-based-billing-for-githubs-products-on-azure
  - /early-access/billing/managing-billing-for-githubs-products-through-azure
  - /early-access/billing/managing-usage-based-billing-for-github-licenses
  - /billing/using-the-enhanced-billing-platform-for-enterprises/about-usage-based-billing-for-licenses
  - /billing/using-the-new-billing-platform/about-usage-based-billing-for-licenses
  - /billing/managing-your-billing/about-usage-based-billing-for-licenses
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
permissions: Enterprise administrators
product: '{% data variables.product.prodname_enterprise %}'
shortTitle: Usage-based licenses
contentType: concepts
---

With usage-based billing, you pay monthly for the number of {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_GH_cs_and_sp %} licenses you use. You do not need to buy a predefined number of licenses in advance.

Usage-based billing for licenses provides flexibility and cost savings compared to more traditional licensing models, such as volume or subscription models.

## Do I have usage-based billing?

{% data reusables.billing.do-i-have-usage-based %}

## Can I use {% data variables.product.prodname_ghe_server %}?

Although you can sync licenses with {% data variables.product.prodname_ghe_server %}, usage-based licensing is a cloud-first license model where users must first be added to an organization on {% data variables.product.prodname_ghe_cloud %}.

For a detailed comparison between usage-based and volume licensing models, see [AUTOTITLE](/billing/concepts/enterprise-billing/combined-enterprise-use#about-licensing-models).

## Can I use a {% data variables.product.prodname_vs %} bundle?

If you have a {% data variables.product.prodname_vs %} bundle with {% data variables.product.prodname_ghe_cloud %}, you can switch to usage-based billing by contacting your account manager or {% data variables.contact.contact_enterprise_sales %} ahead of contract renewal.

Usage-based billing will apply to non-bundled licenses, categorized as "GitHub Enterprise licenses" on your enterprise's Licensing page. These licenses include:

* Licenses for enterprise members who are not matched to a {% data variables.product.prodname_vs %} account.
* Any extra {% data variables.product.prodname_enterprise %} licenses you consume beyond the number of licenses purchased in your volume agreement.

Bundled licenses ({% data variables.product.prodname_vs %} plus {% data variables.product.prodname_enterprise %}) **remain on a volume agreement**.

Before switching to usage-based billing, to ensure you are not charged extra for {% data variables.product.prodname_vs %} users who should consume a bundled license:

* Ensure all {% data variables.product.prodname_vs %} users are correctly matched to their account on {% data variables.product.github %}. See [AUTOTITLE](/enterprise-cloud@latest/billing/how-tos/set-up-payment/set-up-vs-subscription#reconciling-users-across-visual-studio-and-github).
* Add all {% data variables.product.prodname_vs %} users to your enterprise on **{% data variables.product.prodname_ghe_cloud %}** before adding them to {% data variables.product.prodname_ghe_server %}. Users who are only on {% data variables.product.prodname_ghe_server %} will consume a "{% data variables.product.prodname_enterprise %}" license once you switch to usage-based billing.

## How are metered licenses measured?

{% data reusables.billing.metered-license-measures %}

## Which payment methods can I use?

You can use the following payment methods for usage-based billing for licenses:

* Invoiced and self-serve {% data variables.product.prodname_enterprise %} customers can pay using a **credit card** or **PayPal**
* Invoiced customers can also pay using **prepaid credits** (only available to customers who have a volume subscription with or without metered add-ons)
* You can connect an **Azure** subscription to your enterprise account
* For **purchase orders**, you can contact your account manager in {% data variables.contact.contact_enterprise_sales %}
