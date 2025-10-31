---
title: Supported payment methods for GitHub
intro: 'Reference information detailing the supported payment methods for {% data variables.product.github %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
shortTitle: Supported payment methods
contentType: reference
---

## Metered or usage-based billing options

The supported payment methods for metered billing:

* Invoice – Managed accounts only
* Credit card – Unmanaged accounts, or as a nonrecurring method for managed accounts
* PayPal – Unmanaged accounts, or as a nonrecurring method for managed accounts
* Azure Subscription ID – Not available for personal accounts
* Automated Clearing House (ACH) – Managed accounts only

Accounts with volume licenses and metered billing can use multiple payment methods.

* For unmanaged accounts, you might pay for volume licenses with a credit card or PayPal, and metered usage with an Azure Subscription ID.
* For managed accounts, you might pay for volume licenses via invoice, and metered usage via Azure Subscription ID.

{% data variables.product.prodname_copilot_short %} standalone accounts, which traditionally used Azure Subscription IDs, can now also pay by credit card. Contact your {% data variables.product.github %} representative for details.

{% ifversion fpt or ghec %}

## Usage-based billing availability

{% data variables.product.github %} provides usage-based billing for the following products.

* {% data variables.product.prodname_actions %}, see [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
* {% data variables.product.prodname_github_codespaces %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)
* {% data variables.product.prodname_registry %}, see [AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)
* {% data variables.large_files.product_name_long %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)

In addition, usage-based billing is available for the following licenses:

* {% data variables.product.prodname_enterprise %}, see [AUTOTITLE](/billing/managing-your-billing/about-billing-for-your-enterprise)
* {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
* {% data variables.product.prodname_GHAS %}, see [AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)

For information about controlling spending, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

> [!NOTE]
> Prepaid usage is not currently available for usage-based billing through Azure.

{% endif %}
