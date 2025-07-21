---
title: About billing for GitHub Packages
intro: 'If you want to use {% data variables.product.prodname_registry %} beyond the storage or data transfer included in your account, you will be billed for additional usage.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
  - /billing/managing-billing-for-github-packages/about-billing-for-github-packages
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages/about-billing-for-github-packages
  # Redirect for old maptopic
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages
  - /billing/managing-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: GitHub Packages
---

## About billing for {% data variables.product.prodname_registry %}

{% data reusables.billing.authorization-charge %}

{% data reusables.package_registry.packages-billing %}

If you are an organization or enterprise owner, you can connect an Azure Subscription ID to your organization or enterprise account to enable and pay for {% data variables.product.prodname_registry %} usage beyond the amounts included with your account. For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

Data transfer resets every month, while storage usage does not.

{% rowheaders %}

Plan | Storage | Data transfer (per month)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500MB | 1GB
{% data variables.product.prodname_pro %} | 2GB | 10GB
{% data variables.product.prodname_free_team %} for organizations | 500MB | 1GB |
{% data variables.product.prodname_team %} | 2GB | 10GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

{% endrowheaders %}

All data transferred out, when triggered by {% data variables.product.prodname_actions %}, and data transferred in from any source is free. We determine you are downloading packages using {% data variables.product.prodname_actions %} when you log in to {% data variables.product.prodname_registry %} using a `GITHUB_TOKEN`.

{% rowheaders %}

||Hosted|Self-Hosted|
|-|-|-|
|Access using a `GITHUB_TOKEN`|Free|Free|
|Access using a {% data variables.product.pat_generic %}|Free|Paid|

{% endrowheaders %}

Storage usage is shared with build artifacts produced by {% data variables.product.prodname_actions %} for repositories owned by your account. For more information, see [AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

{% data variables.product.prodname_dotcom %} charges usage to the account that owns the repository where the package is published. If your account's usage surpasses these limits and you have a valid payment method on file, you will pay $0.008 USD per GB of storage per day and $0.50 USD per GB of data transfer.

For example, if your organization uses {% data variables.product.prodname_team %}, allows unlimited spending, uses 150GB of storage, and has 50GB of data transfer out during a month, the organization would use 148GB for storage and 40GB for data transfer for that month beyond their included quota. The additional storage would cost $0.008 USD per GB per day or approximately $37 USD for a 31-day month. The additional data transfer would cost $0.50 USD per GB or $20 USD.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your data transfer to the nearest GB.

{% data variables.product.prodname_dotcom %} calculates your storage usage for each month based on hourly usage per GB during that month. For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

* 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
* 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
* 720 GB-Hours + 6,048 GB-Hours = 6,768 total GB-Hours
* 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

You can also use this calculation in the middle of a billing cycle, to estimate what your total usage might be for the month. For example, if you have an organization that uses {% data variables.product.prodname_team %}, which provides 2 GB of free storage, and you use 0 GB for the first 5 days of April, 1.5 GB for the following 10 days, and you plan to use 3 GB for the last 15 days of the billing cycle, your projected storage usage for the month would be:

* 0 GB x 5 days x (24 hours per day) =   0 GB-Hours
* 0.5 GB x 10 days x (24 hours per day) = 120 GB-Hours
* 3 GB x 15 days x (24 hours per day) = 1080 GB-Hours
* 0 GB-Hours + 120 GB-Hours + 1080 GB-Hours = 1200 total GB-Hours
* 1200 GB-Hours / (744 hours per month) = 1.6 GB-Months

The projected 1.6 GB of storage usage for the month would not exceed your 2 GB limit, even though your actual storage amount briefly exceeded 2 GB.

Your {% data variables.product.prodname_registry %} usage shares your account's existing billing date, payment method, and receipt. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## Managing your budget for {% data variables.product.prodname_registry %}

{% data reusables.billing.default-over-quota-behavior %}
