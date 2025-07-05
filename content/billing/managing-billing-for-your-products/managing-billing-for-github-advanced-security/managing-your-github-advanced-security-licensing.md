---
title: Managing volume/subscription licenses for {% data variables.product.prodname_AS %}
intro: 'You can monitor and control the availability and consumption of licenses for {% data variables.product.prodname_AS %} in repositories in your enterprise.'
allowTitleToDifferFromFilename: true
permissions: 'Enterprise owners with **volume/subscription licenses** for {% data variables.product.prodname_AS %}. </br>For metered usage on the new platform, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).'
versions:
  ghec: '*'
type: how_to
redirect_from:
  - /billing/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing
topics:
  - Advanced Security
  - Enterprise
shortTitle: Volume/subscription GHAS license
---

There are two different ways to pay for {% data variables.product.prodname_GHAS_cs_and_sp %} licenses: volume/subscription licenses purchased in advance or usage-based metered billing paid in arrears. This article is about volume/subscription licenses. For information about the two different billing models, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

For information about using policies to control use of licenses in your enterprise, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

## Changing the size of your license

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. Under "{% data variables.product.prodname_AS %}" you will see the consumption of licenses for {% data variables.product.prodname_GH_cs_and_sp %}.

   ![Screenshot of the {% data variables.product.prodname_AS %} licensing screen. The "Manage licenses" button is outlined in orange.](/assets/images/help/enterprises/ghas-licenses-dropdown.png)

1. To add new licenses, select {% octicon "kebab-horizontal" aria-label="Open menu" %}, then click **Manage licenses**.
1. Under "Total licenses", click the plus or minus buttons to add or remove licenses.

   ![Screenshot of the {% data variables.product.prodname_AS %} license screen. A text box with the number 5, with a minus and a plus button, are outlined in orange.](/assets/images/help/enterprises/ghas-add-licenses.png)

1. Click **Confirm licenses**.

## Canceling your {% data variables.product.prodname_AS %} subscription

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. To the right of "{% data variables.product.prodname_AS %}", select {% octicon "kebab-horizontal" aria-label="Open menu" %}, then click **Cancel subscription**.
1. To confirm your cancellation, click **I understand, cancel {% data variables.product.prodname_AS %}**.
