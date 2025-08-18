---
title: 'Managing volume licenses for GitHub Advanced Security'
intro: 'You can monitor and control the availability and consumption of licenses for {% data variables.product.prodname_AS %} in repositories in your enterprise.'
permissions: 'Enterprise owners with **volume/subscription licenses** for {% data variables.product.prodname_AS %}. </br>For metered usage, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing
topics:
  - Billing
  - Advanced Security
  - Enterprise
shortTitle: Manage GHAS licenses
allowTitleToDifferFromFilename: true
contentType: how-tos
---

There are two different ways to pay for {% data variables.product.prodname_GHAS_cs_and_sp %} licenses: volume/subscription licenses purchased in advance or usage-based metered billing paid in arrears. This article is about volume/subscription licenses. For information about the two different billing models, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

For information about using policies to control use of licenses in your enterprise, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

## Changing the size of your license

1. In the upper-right corner of any page on {% data variables.product.github %}, click your profile picture.

1. Select the account you want to view and then access the "Billing & Licensing" pages:

   * **Organizations**: Click **Your organizations**, then next to the organization, click **Settings**. In the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.

   * **Enterprises**: Click **Your enterprises**, then click the enterprise name. Click the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** tab at the top of the page.

1. From the list of "Billing & licensing" pages, click {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing** to display the licensing page.

   ![Screenshot of the {% data variables.product.prodname_AS %} licensing screen. The "Manage licenses" button is outlined in orange.](/assets/images/help/enterprises/ghas-licenses-dropdown.png)

1. To add new licenses, select {% octicon "kebab-horizontal" aria-label="Open menu" %}, then click **Manage licenses**.
1. Under "Total licenses", click the plus or minus buttons to add or remove licenses.

   ![Screenshot of the {% data variables.product.prodname_AS %} license screen. A text box with the number 5, with a minus and a plus button, are outlined in orange.](/assets/images/help/enterprises/ghas-add-licenses.png)

1. Click **Confirm licenses**.

## Canceling your {% data variables.product.prodname_AS %} subscription

1. Navigate to the "Billing & licensing" pages for your enterprise or organization.
1. Click {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing** to display the licensing page.
1. To the right of "{% data variables.product.prodname_AS %}", select {% octicon "kebab-horizontal" aria-label="Open menu" %}, then click **Cancel subscription**.
1. To confirm your cancellation, click **I understand, cancel {% data variables.product.prodname_AS %}**.
