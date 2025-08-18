---
title: Buying Advanced Security for your organization or enterprise
intro: 'How to buy licenses for {% data variables.product.prodname_GHAS %} whether you have usage-based or volume/subscription billing.'
permissions: 'Organization or enterprise owners can sign up for {% data variables.product.prodname_GH_cs_or_sp %}'
product: '{% data reusables.gated-features.ghas-billing %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/signing-up-for-github-advanced-security
topics:
  - Billing
  - Advanced Security
  - Enterprise
shortTitle: Buy Advanced Security
allowTitleToDifferFromFilename: true
contentType: how-tos
---

## Checking your current plan

You must use a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} plan before you can enable {% data variables.product.prodname_GH_cs_or_sp %} on private repositories.

1. In the upper-right corner of any page on {% data variables.product.github %}, click your profile picture.

1. Select the account you want to view and then access the "Billing & Licensing" pages:

   * **Organizations**: Click **Your organizations**, then next to the organization, click **Settings**. In the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.

   * **Enterprises**: Click **Your enterprises**, then click the enterprise name. Click the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** tab at the top of the page.

1. From the list of "Billing & licensing" pages, click {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing** to display the licensing page.

Your current plan is shown with any options to upgrade to a different plan.

## Metered billing users

If your organization or enterprise uses metered billing, then you are ready to start enabling {% data variables.product.prodname_GH_cs_and_sp %}. Whenever you enable a feature or apply a configuration, a modal dialog shows detailed information with estimated billing changes. You can confirm your change or return to the page without making changes.

The most effective way to control and enable these features is using security configurations, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/choosing-a-security-configuration-for-your-repositories).

## Volume/subscription users

If you use volume/subscription billing, then you will need to purchase licenses before you can start using {% data variables.product.prodname_GH_cs_or_sp %} on private or internal repositories.

1. In the upper-right corner of any page on {% data variables.product.github %}, click your profile picture.

1. Select the account you want to view and then access the "Billing & Licensing" pages:

   * **Organizations**: Click **Your organizations**, then next to the organization, click **Settings**. In the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.

   * **Enterprises**: Click **Your enterprises**, then click the enterprise name. Click the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** tab at the top of the page.

1. From the list of "Billing & licensing" pages, click {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing** to display the licensing page.

1. To the right of "{% data variables.product.prodname_GHAS %}", click **Buy {% data variables.product.prodname_AS %}**.

   ![Screenshot of the {% data variables.product.prodname_AS %} section of the licensing screen. The "Buy {% data variables.product.prodname_AS %}" button is outlined in orange.](/assets/images/help/enterprises/ghas-buy-advanced-security-button.png)

1. Confirm your billing information and payment method.
1. Under "How many committers do you want to include?", enter the number of committers you want to purchase licenses for.
1. Click **Purchase Advanced Security**.

> [!TIP]
> To see how license use by committers is measured, see [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security).

## Further reading

* [AUTOTITLE](/code-security/trialing-github-advanced-security/planning-a-trial-of-ghas)
* [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale){% ifversion ghec %}
* [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale){% endif %}
