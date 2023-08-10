---
title: About billing for GitHub Packages
intro: 'If you want to use {% data variables.product.prodname_registry %} beyond the storage or data transfer included in your account, you will be billed for additional usage.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
---
## About billing for {% data variables.product.prodname_registry %}

{% ifversion billing-auth-and-capture %}

{% data reusables.billing.authorization-charge %}

{% endif %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

{% note %}

**Billing update for container image storage:** The period of free use for container image storage and bandwidth for the {% data variables.product.prodname_container_registry %} has been extended. If you are using {% data variables.product.prodname_container_registry %} you'll be informed at least one month in advance of billing commencing and you'll be given an estimate of how much you should expect to pay. For more information about the {% data variables.product.prodname_container_registry %}, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

{% endnote %}

If you are an organization owner{% ifversion ghec %} or enterprise owner{% endif%}, you can connect an Azure Subscription ID to your organization {% ifversion ghec %}or enterprise{% endif%} account to enable and pay for {% data variables.product.prodname_registry %} usage beyond the amounts including with your account. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

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

Storage usage is shared with build artifacts produced by {% data variables.product.prodname_actions %} for repositories owned by your account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

{% data variables.product.prodname_dotcom %} charges usage to the account that owns the repository where the package is published. If your account's usage surpasses these limits and you have set a spending limit above $0 USD, you will pay $0.008 USD per GB of storage per day and $0.50 USD per GB of data transfer.

For example, if your organization uses {% data variables.product.prodname_team %}, allows unlimited spending, uses 150GB of storage, and has 50GB of data transfer out during a month, the organization would have overages of 148GB for storage and 40GB for data transfer for that month. The storage overage would cost $0.008 USD per GB per day or approximately $37 USD for a 31-day month. The overage for data transfer would cost $0.50 USD per GB or $20 USD.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your data transfer to the nearest GB.

{% data variables.product.prodname_dotcom %} calculates your storage usage for each month based on hourly usage per GB during that month. For example, if you use 3 GB of storage for 10 days of March and 12 GB for 21 days of March, your storage usage would be:

- 3 GB x 10 days x (24 hours per day) = 720 GB-Hours
- 12 GB x 21 days x (24 hours per day) = 6,048 GB-Hours
- 720 GB-Hours + 6,048 GB-Hours = 6,768 total GB-Hours
- 6,768 GB-Hours / (744 hours per month) = 9.0967 GB-Months

At the end of the month, {% data variables.product.prodname_dotcom %} rounds your storage to the nearest MB. Therefore, your storage usage for March would be 9.097 GB.

You can also use this calculation in the middle of a billing cycle, to estimate what your total usage might be for the month. For example, if you have an organization that uses {% data variables.product.prodname_team %}, which provides 2 GB of free storage, and you use 0 GB for the first 5 days of April, 1.5 GB for the following 10 days, and you plan to use 3 GB for the last 15 days of the billing cycle, your projected storage usage for the month would be:

- 0 GB x 5 days  x (24 hours per day) =   0 GB-Hours
- 0.5 GB x 10 days x (24 hours per day) = 120 GB-Hours
- 3 GB x 15 days x (24 hours per day) = 1080 GB-Hours
- 0 GB-Hours + 120 GB-Hours + 1080 GB-Hours = 1200 total GB-Hours
- 1200 GB-Hours / (744 hours per month) = 1.6 GB-Months

The projected 1.6 GB of storage usage for the month would not exceed your 2 GB limit, even though your actual storage amount briefly exceeded 2 GB.

Your {% data variables.product.prodname_registry %} usage shares your account's existing billing date, payment method, and receipt. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## About spending limits

{% data reusables.package_registry.packages-spending-limit-detailed %}

To prevent exceeding your spending limit, {% data variables.product.prodname_dotcom %} checks your storage consumption continuously throughout the month by looking at your current usage and calculating what your projected usage will be at the end of the month if no changes are made before that time. If at any point during the billing cycle your projected monthly usage exceeds your spending limit, both {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %} will be disabled to prevent overages.

You should set a spending limit that will cover your maximum projected storage usage at any given point in the billing cycle. For example, imagine you have an organization that uses {% data variables.product.prodname_team %}, and you set a spending limit of $50 USD. {% data variables.product.prodname_team %} provides 2 GB of free storage. For any storage you use over that amount, {% data variables.product.prodname_dotcom %} will charge $0.008 USD per GB per day, or approximately $0.25 USD per GB for a 31-day month. That means the $50 spending limit you set will pay for an extra 200 GB of storage in that period. If on day ten of the billing cycle you reach 202 GB of storage, the next push of a package or {% data variables.product.prodname_actions %} artifact will fail, because you have reached the maximum storage amount that can be paid for by your spending limit in this billing cycle, even if your average consumption for the period is below 202 GB.

To avoid reaching your spending limit in the current billing cycle, you can delete some of your current storage usage to free up projected usage for the rest of the month. This method is more effective toward the beginning of a billing cycle. The closer you get to the end of a billing cycle, the less impact this method will have on projected monthly usage.

For more information about managing and changing your account's spending limit, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)."

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
